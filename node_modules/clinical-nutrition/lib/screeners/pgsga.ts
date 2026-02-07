import type { ClinicalInput } from "../clinical-input";
import type { RiskCategory, ConfidenceLevel } from "./nrs2002";

export type PgSgaRiskBand = "low" | "higher" | "unknown";

export interface PgSgaEducationalResult {
  /** Identifier for the screening tool used (for display in the result panel). */
  toolId: "pg-sga";
  /** Human-readable name of the tool. */
  toolLabel: "PG-SGA (ước tính giáo dục)";
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
      "PG-SGA cho trọng số có ý nghĩa cho giảm cân gần đây vừa phải, đặc biệt nếu không chủ ý."
    );
  } else if (input.recentWeightLossPercent >= 10) {
    score += 3;
    contributingDomains.weightHistory = true;
    teachingPoints.push(
      "Giảm cân gần đây lớn hơn (≥10%) thường được điểm nặng hơn trong các công cụ kiểu PG-SGA."
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
        "Giảm lượng ăn vào vừa phải có thể đóng góp điểm trong các phần triệu chứng/lượng ăn vào của PG-SGA."
      );
    } else if (input.intakeReductionPercent >= 50) {
      score += 2;
      contributingDomains.intakeAndSymptoms = true;
      teachingPoints.push(
        "Lượng ăn vào giảm đáng kể (khoảng một nửa hoặc ít hơn so với thông thường) thường được điểm nặng hơn."
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
          "Cài đặt ung thư và ICU thường mang gánh nặng triệu chứng và chức năng cao hơn trong tư duy kiểu PG-SGA."
        );
        break;
      case "surgical":
      case "gastrointestinal":
        score += 1;
        contributingDomains.functionAndDisease = true;
        teachingPoints.push(
          "Tình trạng phẫu thuật và tiêu hóa có thể đóng góp vào gánh nặng triệu chứng và hạn chế chức năng."
        );
        break;
      case "general_medical":
      case "renal":
      case "hepatic":
      case "other":
        score += 0;
        teachingPoints.push(
          "Trong một mô hình giáo dục đơn giản hóa, một số bối cảnh bệnh có thể không thêm điểm bổ sung nhưng vẫn yêu cầu phán đoán lâm sàng."
        );
        break;
      default:
        missingFields.push("diseaseContextCode");
        warnings.push(
          "Mã bối cảnh bệnh không được nhận dạng; gánh nặng bệnh/triệu chứng không được ước tính."
        );
        break;
    }
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Một số trường bị thiếu; điểm kiểu PG-SGA giáo dục này không đầy đủ và có thể đánh giá thấp mối quan tâm."
    );
  }

  if (score === 0 && warnings.length > 0) {
    return {
      toolId: "pg-sga",
      toolLabel: "PG-SGA (ước tính giáo dục)",
      approximateScore: null,
      riskBand: "unknown",
      riskCategory: "unknown",
      confidence: "low",
      contributingDomains,
      missingFields,
      warnings,
      teachingPoints,
      summaryExplanation:
        "Không có đủ thông tin để tạo ngay cả một ước tính kiểu PG-SGA giáo dục.",
      whyThisResult: [
        "Các đầu vào chính như giảm cân, giảm lượng ăn vào, hoặc bối cảnh bệnh bị thiếu hoặc không rõ ràng.",
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
    "Đây là một ước tính kiểu PG-SGA giáo dục đơn giản hóa và không được sử dụng cho quyết định lâm sàng."
  );

  if (riskCategory === "low") {
    whyThisResult.push(
      "Dựa trên thông tin đã nhập, có bằng chứng hạn chế về giảm cân gần đây nặng, giảm lượng ăn vào, hoặc gánh nặng triệu chứng cao."
    );
  } else {
    whyThisResult.push(
      "Giảm cân gần đây, giảm lượng ăn vào, và/hoặc bối cảnh bệnh gánh nặng cao cùng nhau làm tăng mối quan tâm giáo dục về nguy cơ dinh dưỡng."
    );
  }

  const summaryExplanation =
    riskCategory === "low"
      ? "Ước tính kiểu PG-SGA giáo dục này gợi ý mức nguy cơ dinh dưỡng thấp hơn với thông tin hiện tại."
      : "Ước tính kiểu PG-SGA giáo dục này gợi ý mối quan tâm tăng về nguy cơ dinh dưỡng, báo hiệu rằng một đánh giá đầy đủ hơn sẽ phù hợp trong thực hành thực tế.";

  return {
    toolId: "pg-sga",
    toolLabel: "PG-SGA (ước tính giáo dục)",
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

