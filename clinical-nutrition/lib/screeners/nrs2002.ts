import type { ClinicalInput } from "../clinical-input";

export type Nrs2002RiskBand = "low" | "higher" | "unknown";

export type RiskCategory = "low" | "increased" | "high" | "unknown";

export type ConfidenceLevel = "high" | "medium" | "low";

export interface Nrs2002EducationalResult {
  /** Identifier for the screening tool used (for display in the result panel). */
  toolId: "nrs-2002";
  /** Human-readable name of the tool. */
  toolLabel: "NRS-2002 (educational approximation)";
  /** Educational, approximate score (0–?); not a validated clinical score. */
  approximateScore: number | null;
  /** Simple risk band used only for teaching language. */
  riskBand: Nrs2002RiskBand;
  /**
   * Educational risk category for display:
   * - "low", "increased", or "high" concern, or "unknown" if insufficient data.
   */
  riskCategory: RiskCategory;
  /** How confident the tool is in this educational estimate. */
  confidence: ConfidenceLevel;
  /** Which main domains contributed to the score. */
  contributingDomains: {
    impairedNutritionalStatus: boolean;
    diseaseSeverity: boolean;
    ageAdjustment: boolean;
  };
  /** Inputs that were missing or incomplete. */
  missingFields: string[];
  /** Warnings about limitations of the estimate. */
  warnings: string[];
  /** Human-readable teaching notes about how the score was built. */
  teachingPoints: string[];
  /**
   * Plain-language one or two sentence summary suitable for a result header.
   */
  summaryExplanation: string;
  /**
   * Short explanations of why this particular pattern of inputs led to the
   * educational category shown.
   */
  whyThisResult: string[];
}

/**
 * Educational, simplified NRS-2002 style reasoning.
 *
 * This function is intentionally approximate. It is designed to:
 * - illustrate the domains NRS-2002 thinks about (nutritional status, disease severity, age),
 * - remain safe for public educational use,
 * - accept partial input and surface limitations.
 *
 * It must NOT be used for clinical decision-making or as a true NRS-2002 implementation.
 */
export function calculateEducationalNrs2002(
  input: ClinicalInput
): Nrs2002EducationalResult {
  let score = 0;
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const teachingPoints: string[] = [];
  const whyThisResult: string[] = [];

  const contributingDomains = {
    impairedNutritionalStatus: false,
    diseaseSeverity: false,
    ageAdjustment: false,
  };

  // Nutritional status domain (very simplified).
  if (input.recentWeightLossPercent == null) {
    missingFields.push("recentWeightLossPercent");
  } else if (input.recentWeightLossPercent >= 5 && input.recentWeightLossPercent < 10) {
    score += 1;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Recent weight loss of 5–10% suggests some impairment of nutritional status."
    );
  } else if (input.recentWeightLossPercent >= 10) {
    score += 2;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Weight loss of ≥10% is often considered a stronger signal for impaired nutritional status."
    );
  }

  if (input.intakeReductionPercent == null) {
    missingFields.push("intakeReductionPercent");
  } else if (input.intakeReductionPercent >= 25 && input.intakeReductionPercent < 50) {
    score += 1;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Eating roughly 50–75% of usual intake contributes to nutritional risk."
    );
  } else if (input.intakeReductionPercent >= 50) {
    score += 2;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Eating about half or less of usual intake for several days is a strong concern signal."
    );
  }

  // Disease severity domain (educational mapping from diseaseContextCode).
  if (input.diseaseContextCode == null) {
    missingFields.push("diseaseContextCode");
  } else {
    switch (input.diseaseContextCode) {
      case "general_medical":
        score += 0;
        teachingPoints.push(
          "Stable general medical conditions may have lower additional stress scoring."
        );
        break;
      case "surgical":
      case "gastrointestinal":
        score += 1;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Postoperative or gastrointestinal conditions can increase stress and impair intake."
        );
        break;
      case "oncology":
      case "icu":
        score += 2;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Oncology and ICU contexts often involve higher catabolic and inflammatory burden."
        );
        break;
      case "renal":
      case "hepatic":
      case "other":
        score += 1;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Chronic organ disease can contribute to nutritional risk in a more moderate way."
        );
        break;
      default:
        missingFields.push("diseaseContextCode");
        warnings.push(
          "Disease context code was not recognized; disease-related stress was not estimated."
        );
        break;
    }
  }

  // Age adjustment (simplified).
  if (input.ageYears == null) {
    missingFields.push("ageYears");
  } else if (input.ageYears >= 70) {
    score += 1;
    contributingDomains.ageAdjustment = true;
    teachingPoints.push(
      "Age ≥70 years is often treated as an additional risk factor in NRS-style tools."
    );
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Some fields were missing; this educational score may underestimate or misrepresent risk."
    );
  }

  if (score === 0 && warnings.length > 0) {
    return {
      toolId: "nrs-2002",
      toolLabel: "NRS-2002 (educational approximation)",
      approximateScore: null,
      riskBand: "unknown",
      riskCategory: "unknown",
      confidence: "low",
      contributingDomains,
      missingFields,
      warnings,
      teachingPoints,
      summaryExplanation:
        "There was not enough information to create even an educational NRS-2002 style estimate.",
      whyThisResult: [
        "Key inputs such as weight loss, intake reduction, age, or disease context were missing or unclear.",
      ],
    };
  }

  let riskBand: Nrs2002RiskBand = "low";
  if (score >= 3) {
    riskBand = "higher";
  }

  // Map approximate score to an educational risk category.
  let riskCategory: RiskCategory = "low";
  if (score >= 2 && score < 4) {
    riskCategory = "increased";
  } else if (score >= 4) {
    riskCategory = "high";
  }

  // Confidence is lower when there are many missing fields.
  let confidence: ConfidenceLevel = "high";
  if (missingFields.length >= 2) {
    confidence = "low";
  } else if (missingFields.length === 1) {
    confidence = "medium";
  }

  warnings.push(
    "This is a simplified, educational NRS-2002 style estimate and must not be used for clinical decisions."
  );

  if (riskCategory === "low") {
    whyThisResult.push(
      "Based on the information entered, there is limited evidence of impaired nutritional status or high disease-related stress."
    );
  } else {
    whyThisResult.push(
      "Recent weight loss, reduced intake, age, and/or disease context together raise educational concern about nutritional risk."
    );
  }

  const summaryExplanation =
    riskCategory === "low"
      ? "This educational NRS-2002 style estimate suggests a lower level of nutritional risk with the current information."
      : "This educational NRS-2002 style estimate suggests increased concern about nutritional risk, signalling that a full assessment would be appropriate in real practice.";

  return {
    toolId: "nrs-2002",
    toolLabel: "NRS-2002 (educational approximation)",
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

