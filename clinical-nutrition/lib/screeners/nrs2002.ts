import type { ClinicalInput } from "../clinical-input";

export type Nrs2002RiskBand = "low" | "higher" | "unknown";

export type RiskCategory = "low" | "increased" | "high" | "unknown";

export type ConfidenceLevel = "high" | "medium" | "low";

export interface Nrs2002EducationalResult {
  /** Identifier for the screening tool used (for display in the result panel). */
  toolId: "nrs-2002";
  /** Human-readable name of the tool. */
  toolLabel: "NRS-2002 (ước tính giáo dục)";
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
      "Giảm cân gần đây 5–10% gợi ý một số suy giảm tình trạng dinh dưỡng."
    );
  } else if (input.recentWeightLossPercent >= 10) {
    score += 2;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Giảm cân ≥10% thường được coi là tín hiệu mạnh hơn cho suy giảm tình trạng dinh dưỡng."
    );
  }

  if (input.intakeReductionPercent == null) {
    missingFields.push("intakeReductionPercent");
  } else if (input.intakeReductionPercent >= 25 && input.intakeReductionPercent < 50) {
    score += 1;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Ăn khoảng 50–75% lượng ăn vào thông thường đóng góp vào nguy cơ dinh dưỡng."
    );
  } else if (input.intakeReductionPercent >= 50) {
    score += 2;
    contributingDomains.impairedNutritionalStatus = true;
    teachingPoints.push(
      "Ăn khoảng một nửa hoặc ít hơn lượng ăn vào thông thường trong vài ngày là một tín hiệu quan tâm mạnh."
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
          "Tình trạng nội khoa chung ổn định có thể có điểm stress bổ sung thấp hơn."
        );
        break;
      case "surgical":
      case "gastrointestinal":
        score += 1;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Tình trạng sau phẫu thuật hoặc tiêu hóa có thể tăng stress và làm suy giảm lượng ăn vào."
        );
        break;
      case "oncology":
      case "icu":
        score += 2;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Bối cảnh ung thư và ICU thường liên quan đến gánh nặng dị hóa và viêm cao hơn."
        );
        break;
      case "renal":
      case "hepatic":
      case "other":
        score += 1;
        contributingDomains.diseaseSeverity = true;
        teachingPoints.push(
          "Bệnh cơ quan mạn tính có thể đóng góp vào nguy cơ dinh dưỡng theo cách vừa phải hơn."
        );
        break;
      default:
        missingFields.push("diseaseContextCode");
        warnings.push(
          "Mã bối cảnh bệnh không được nhận dạng; stress liên quan đến bệnh không được ước tính."
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
      "Tuổi ≥70 năm thường được đối xử như một yếu tố nguy cơ bổ sung trong các công cụ kiểu NRS."
    );
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Một số trường bị thiếu; điểm giáo dục này có thể đánh giá thấp hoặc trình bày sai nguy cơ."
    );
  }

  if (score === 0 && warnings.length > 0) {
    return {
      toolId: "nrs-2002",
      toolLabel: "NRS-2002 (ước tính giáo dục)",
      approximateScore: null,
      riskBand: "unknown",
      riskCategory: "unknown",
      confidence: "low",
      contributingDomains,
      missingFields,
      warnings,
      teachingPoints,
      summaryExplanation:
        "Không có đủ thông tin để tạo ngay cả một ước tính kiểu NRS-2002 giáo dục.",
      whyThisResult: [
        "Các đầu vào chính như giảm cân, giảm lượng ăn vào, tuổi, hoặc bối cảnh bệnh bị thiếu hoặc không rõ ràng.",
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
    "Đây là một ước tính kiểu NRS-2002 giáo dục đơn giản hóa và không được sử dụng cho quyết định lâm sàng."
  );

  if (riskCategory === "low") {
    whyThisResult.push(
      "Dựa trên thông tin đã nhập, có bằng chứng hạn chế về suy giảm tình trạng dinh dưỡng hoặc stress liên quan đến bệnh cao."
    );
  } else {
    whyThisResult.push(
      "Giảm cân gần đây, giảm lượng ăn vào, tuổi, và/hoặc bối cảnh bệnh cùng nhau làm tăng mối quan tâm giáo dục về nguy cơ dinh dưỡng."
    );
  }

  const summaryExplanation =
    riskCategory === "low"
      ? "Ước tính kiểu NRS-2002 giáo dục này gợi ý mức nguy cơ dinh dưỡng thấp hơn với thông tin hiện tại."
      : "Ước tính kiểu NRS-2002 giáo dục này gợi ý mối quan tâm tăng về nguy cơ dinh dưỡng, báo hiệu rằng một đánh giá đầy đủ sẽ phù hợp trong thực hành thực tế.";

  return {
    toolId: "nrs-2002",
    toolLabel: "NRS-2002 (ước tính giáo dục)",
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

