import type { ClinicalInput } from "../clinical-input";
import type { RiskCategory, ConfidenceLevel } from "./nrs2002";

export type PgSgaRiskBand = "low" | "higher" | "unknown";

export interface PgSgaEducationalResult {
  /** Identifier for the screening tool used (for display in the result panel). */
  toolId: "pg-sga";
  /** Human-readable name of the tool. */
  toolLabel: "PG-SGA (educational approximation)";
  /** Educational, approximate score; not a validated or complete PG-SGA score. */
  approximateScore: number | null;
  /** Simple risk band, used only for teaching purposes. */
  riskBand: PgSgaRiskBand;
  /**
   * Educational risk category for display:
   * - "low", "increased", or "high" concern, or "unknown" if insufficient data.
   */
  riskCategory: RiskCategory;
  /** How confident the tool is in this educational estimate. */
  confidence: ConfidenceLevel;
  /** Symptom clusters that contributed to concern. */
  contributingDomains: {
    weightHistory: boolean;
    intakeAndSymptoms: boolean;
    functionAndDisease: boolean;
  };
  missingFields: string[];
  warnings: string[];
  teachingPoints: string[];
  /** Plain-language one or two sentence summary suitable for a result header. */
  summaryExplanation: string;
  /**
   * Short explanations of why this particular pattern of inputs led to the
   * educational category shown.
   */
  whyThisResult: string[];
}

/**
 * Educational, highly simplified PG-SGA style reasoning.
 *
 * This implementation only mimics broad ideas:
 * - weight history,
 * - reduced intake,
 * - the presence of a catabolic / high-burden disease context.
 *
 * It does NOT reproduce official PG-SGA scoring and must not be used
 * clinically. It accepts partial input and surfaces limitations.
 */
export function calculateEducationalPgSga(
  input: ClinicalInput
): PgSgaEducationalResult {
  let score = 0;
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const teachingPoints: string[] = [];
  const whyThisResult: string[] = [];

  const contributingDomains = {
    weightHistory: false,
    intakeAndSymptoms: false,
    functionAndDisease: false,
  };

  // Weight history domain (simplified).
  if (input.recentWeightLossPercent == null) {
    missingFields.push("recentWeightLossPercent");
  } else if (input.recentWeightLossPercent >= 5 && input.recentWeightLossPercent < 10) {
    score += 2;
    contributingDomains.weightHistory = true;
    teachingPoints.push(
      "PG-SGA gives meaningful weight to moderate recent weight loss, especially if unintentional."
    );
  } else if (input.recentWeightLossPercent >= 10) {
    score += 3;
    contributingDomains.weightHistory = true;
    teachingPoints.push(
      "Larger recent weight loss (≥10%) is often scored more heavily in PG-SGA-style tools."
    );
  }

  // Intake and duration (simplified).
  if (input.intakeReductionPercent == null) {
    missingFields.push("intakeReductionPercent");
  }

  // Duration is not part of ClinicalInput by default; tools may pass it via wrapper.
  // Here we just focus on magnitude of reduction.
  if (input.intakeReductionPercent != null) {
    if (input.intakeReductionPercent >= 25 && input.intakeReductionPercent < 50) {
      score += 1;
      contributingDomains.intakeAndSymptoms = true;
      teachingPoints.push(
        "Moderate reductions in intake can contribute points in PG-SGA symptom/intake sections."
      );
    } else if (input.intakeReductionPercent >= 50) {
      score += 2;
      contributingDomains.intakeAndSymptoms = true;
      teachingPoints.push(
        "Markedly reduced intake (around half or less of usual) is usually scored more heavily."
      );
    }
  }

  // Disease and functional burden (coarsely mapped from diseaseContextCode).
  if (input.diseaseContextCode == null) {
    missingFields.push("diseaseContextCode");
  } else {
    switch (input.diseaseContextCode) {
      case "oncology":
      case "icu":
        score += 2;
        contributingDomains.functionAndDisease = true;
        teachingPoints.push(
          "Oncology and ICU settings often carry higher symptom and functional burden in PG-SGA-style thinking."
        );
        break;
      case "surgical":
      case "gastrointestinal":
        score += 1;
        contributingDomains.functionAndDisease = true;
        teachingPoints.push(
          "Surgical and gastrointestinal conditions can contribute to symptom burden and functional limitation."
        );
        break;
      case "general_medical":
      case "renal":
      case "hepatic":
      case "other":
        score += 0;
        teachingPoints.push(
          "In a simplified educational model, some disease contexts may not add extra points but still require clinical judgment."
        );
        break;
      default:
        missingFields.push("diseaseContextCode");
        warnings.push(
          "Disease context code was not recognized; disease/symptom burden was not estimated."
        );
        break;
    }
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Some fields were missing; this educational PG-SGA-style score is incomplete and may underestimate concern."
    );
  }

  if (score === 0 && warnings.length > 0) {
    return {
      toolId: "pg-sga",
      toolLabel: "PG-SGA (educational approximation)",
      approximateScore: null,
      riskBand: "unknown",
      riskCategory: "unknown",
      confidence: "low",
      contributingDomains,
      missingFields,
      warnings,
      teachingPoints,
      summaryExplanation:
        "There was not enough information to create even an educational PG-SGA style estimate.",
      whyThisResult: [
        "Key inputs such as weight loss, intake reduction, or disease context were missing or unclear.",
      ],
    };
  }

  let riskBand: PgSgaRiskBand = "low";
  if (score >= 4) {
    riskBand = "higher";
  }

  // Educational mapping to risk category.
  let riskCategory: RiskCategory = "low";
  if (score >= 3 && score < 6) {
    riskCategory = "increased";
  } else if (score >= 6) {
    riskCategory = "high";
  }

  // Confidence based on completeness.
  let confidence: ConfidenceLevel = "high";
  if (missingFields.length >= 2) {
    confidence = "low";
  } else if (missingFields.length === 1) {
    confidence = "medium";
  }

  warnings.push(
    "This is a simplified, educational PG-SGA style estimate and must not be used for clinical decisions."
  );

  if (riskCategory === "low") {
    whyThisResult.push(
      "Based on the information entered, there is limited evidence of severe recent weight loss, reduced intake, or high symptom burden."
    );
  } else {
    whyThisResult.push(
      "Recent weight loss, reduced intake, and/or a high-burden disease context together raise educational concern about nutritional risk."
    );
  }

  const summaryExplanation =
    riskCategory === "low"
      ? "This educational PG-SGA style estimate suggests a lower level of nutritional risk with the current information."
      : "This educational PG-SGA style estimate suggests increased concern about nutritional risk, signalling that a fuller assessment would be appropriate in real practice.";

  return {
    toolId: "pg-sga",
    toolLabel: "PG-SGA (educational approximation)",
    approximateScore: score,
    riskBand,
    riskCategory,
    confidence,
    contributingDomains,
    missingFields,
    warnings,
    teachingPoints,
    summaryExplanation,
    whyThisResult,
  };
}

