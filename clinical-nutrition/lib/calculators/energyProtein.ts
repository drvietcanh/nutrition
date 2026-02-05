import type { ClinicalInput } from "../clinical-input";

/**
 * Educational method labels for how requirements are estimated.
 */
export type EstimationMethod = "simple-weight-based" | "equation-educational";

export interface EnergyProteinRange {
  /** Approximate total daily energy range in kcal/day. */
  energyKcalPerDay: { lower: number; upper: number } | null;
  /** Approximate protein range in g/day. */
  proteinGramsPerDay: { lower: number; upper: number } | null;
  /** Approximate protein range in g/kg/day, when weight is available. */
  proteinGramsPerKgPerDay: { lower: number; upper: number } | null;
}

export interface EnergyProteinEducationalResult {
  method: EstimationMethod;
  /**
   * Short label describing the educational method used
   * (e.g., "Simple 25–30 kcal/kg rule of thumb").
   */
  methodLabel: string;
  /**
   * Educational energy and protein ranges derived from the method.
   * These are illustrative ranges, not prescriptions.
   */
  ranges: EnergyProteinRange;
  /**
   * Inputs that were missing or incomplete, reducing confidence
   * or preventing calculation.
   */
  missingFields: string[];
  /**
   * Cautious, educational warnings and caveats about the estimate
   * (e.g., obesity, edema, organ failure, local guideline variation).
   */
  warnings: string[];
  /**
   * Narrative explanation of how the ranges were derived and how
   * they relate to typical clinical reasoning.
   */
  explanation: string[];
  /**
   * Neutral description of how this method is typically used in
   * clinical practice (e.g., quick bedside estimate vs more detailed).
   */
  clinicalContextNotes: string[];
}

/**
 * Simple weight-based estimation using common educational ranges
 * such as ~25–30 kcal/kg and ~1.0–1.5 g protein/kg for many adults.
 *
 * This function:
 * - assumes adult patients with typical body composition,
 * - returns ranges, not single numbers,
 * - adds caveats when weight is missing or may be misleading.
 *
 * It must NOT be used to prescribe diets, feeds, or treatments.
 */
export function calculateSimpleWeightBasedNeeds(
  input: ClinicalInput
): EnergyProteinEducationalResult {
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const explanation: string[] = [];
  const clinicalContextNotes: string[] = [];

  if (input.weightKg == null) {
    missingFields.push("weightKg");
  }

  let ranges: EnergyProteinRange = {
    energyKcalPerDay: null,
    proteinGramsPerDay: null,
    proteinGramsPerKgPerDay: null,
  };

  if (input.weightKg != null && input.weightKg > 0) {
    const w = input.weightKg;

    // Highlight extreme values, which may reflect fluid overload, measurement error,
    // or situations where standard g/kg rules are less reliable.
    if (w < 30 || w > 200) {
      warnings.push(
        "The weight entered is outside the typical adult inpatient range; in practice, clinicians would check for fluid overload, measurement error, or the need for adjusted body weight."
      );
    }

    // Educationally common band for many adults in hospital.
    const energyLower = Math.round(w * 25);
    const energyUpper = Math.round(w * 30);

    // Simple protein range; detailed adjustments are left to guidelines.
    const proteinPerKgLower = 1.0;
    const proteinPerKgUpper = 1.5;

    const proteinLower = Math.round(w * proteinPerKgLower);
    const proteinUpper = Math.round(w * proteinPerKgUpper);

    ranges = {
      energyKcalPerDay: { lower: energyLower, upper: energyUpper },
      proteinGramsPerDay: { lower: proteinLower, upper: proteinUpper },
      proteinGramsPerKgPerDay: {
        lower: proteinPerKgLower,
        upper: proteinPerKgUpper,
      },
    };

    explanation.push(
      "Energy needs were illustrated using a common educational rule of thumb of about 25–30 kcal/kg for many adult inpatients.",
      "Protein needs were illustrated using a simple range of around 1.0–1.5 g/kg/day, which many guidelines use as a starting point for discussion.",
      "This simple method will usually give different bands from more detailed equations, because it does not explicitly model age, sex, or activity level."
    );
  } else {
    warnings.push(
      "Weight was missing or implausible, so simple weight-based ranges could not be illustrated."
    );
  }

  if (input.heightCm != null && input.weightKg != null) {
    explanation.push(
      "In practice, clinicians would also consider BMI and body composition, not just raw weight."
    );
  }

  clinicalContextNotes.push(
    "In everyday clinical practice, simple weight-based ranges are often used for quick bedside estimates, then refined using local guidelines and the full clinical picture.",
    "Clinicians typically choose a starting point within the range, observe tolerance and progress (for example, weight, labs, and clinical course), and adjust rather than assuming the first estimate is exact.",
    "These ranges do not account for all special situations (for example, severe obesity, multi-organ failure, or refeeding risk), where more specific guidance is usually required."
  );

  return {
    method: "simple-weight-based",
    methodLabel: "Simple weight-based ranges (25–30 kcal/kg; 1.0–1.5 g/kg)",
    ranges,
    missingFields,
    warnings,
    explanation,
    clinicalContextNotes,
  };
}

/**
 * Educational "equation-based" estimation that adds a simple stress/context
 * adjustment on top of a baseline weight-based estimate.
 *
 * This does NOT reproduce any specific formula exactly; instead it:
 * - starts from a conservative base (e.g., 20–25 kcal/kg),
 * - applies a modest stress factor based on disease context,
 * - returns a band, not a single target.
 *
 * It is meant to show the idea of stress-adjusted needs, not to prescribe.
 */
export function calculateEquationStyleNeeds(
  input: ClinicalInput
): EnergyProteinEducationalResult {
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const explanation: string[] = [];
  const clinicalContextNotes: string[] = [];

  if (input.weightKg == null) {
    missingFields.push("weightKg");
  }
  if (input.heightCm == null) {
    missingFields.push("heightCm");
    warnings.push(
      "Height was missing, so an equation-style example cannot be fully illustrated; consider using simple weight-based ranges or adding height."
    );
  }

  let stressFactorLower = 1.0;
  let stressFactorUpper = 1.0;

  switch (input.diseaseContextCode) {
    case "general_medical":
      stressFactorLower = 1.0;
      stressFactorUpper = 1.1;
      break;
    case "surgical":
    case "gastrointestinal":
      stressFactorLower = 1.1;
      stressFactorUpper = 1.2;
      break;
    case "oncology":
    case "icu":
      stressFactorLower = 1.2;
      stressFactorUpper = 1.3;
      break;
    case "renal":
    case "hepatic":
    case "other":
      stressFactorLower = 1.0;
      stressFactorUpper = 1.15;
      break;
    default:
      warnings.push(
        "Disease context was not specified or recognised; a broader stress band was used to emphasise uncertainty."
      );
      // Use a slightly broader band when context is unclear.
      stressFactorLower = 0.9;
      stressFactorUpper = 1.2;
      break;
  }

  let ranges: EnergyProteinRange = {
    energyKcalPerDay: null,
    proteinGramsPerDay: null,
    proteinGramsPerKgPerDay: null,
  };

  if (
    input.weightKg != null &&
    input.weightKg > 0 &&
    input.heightCm != null &&
    input.heightCm > 0
  ) {
    const w = input.weightKg;

    const baseLower = 20;
    const baseUpper = 25;

    const energyLower = Math.round(w * baseLower * stressFactorLower);
    const energyUpper = Math.round(w * baseUpper * stressFactorUpper);

    const proteinPerKgLower = 1.0 * stressFactorLower;
    const proteinPerKgUpper = 1.3 * stressFactorUpper;

    const proteinLower = Math.round(w * proteinPerKgLower);
    const proteinUpper = Math.round(w * proteinPerKgUpper);

    ranges = {
      energyKcalPerDay: { lower: energyLower, upper: energyUpper },
      proteinGramsPerDay: { lower: proteinLower, upper: proteinUpper },
      proteinGramsPerKgPerDay: {
        lower: Number(proteinPerKgLower.toFixed(1)),
        upper: Number(proteinPerKgUpper.toFixed(1)),
      },
    };

    explanation.push(
      "A baseline band of around 20–25 kcal/kg was used and then multiplied by a small stress factor derived from the disease context.",
      "Protein ranges were nudged upwards in higher-stress settings to illustrate how inflammation and catabolism can increase requirements.",
      "Compared with simple weight-based rules, this approach often gives slightly different bands because it makes illness-related stress more explicit."
    );
  } else {
    warnings.push(
      "Weight was missing or implausible, so equation-style ranges could not be illustrated."
    );
  }

  clinicalContextNotes.push(
    "In practice, equation-based methods may use more detailed inputs (for example, age, sex, height, and temperature) and are anchored to local protocols.",
    "Clinicians usually compare equation outputs with simpler rules of thumb to see whether they tell a consistent story before choosing a working estimate.",
    "Stress factors are usually chosen cautiously and revisited in light of tolerance, metabolic response, and changes in clinical status; reassessment is a routine part of care."
  );

  return {
    method: "equation-educational",
    methodLabel: "Equation-style ranges (base 20–25 kcal/kg with stress factors)",
    ranges,
    missingFields,
    warnings,
    explanation,
    clinicalContextNotes,
  };
}

