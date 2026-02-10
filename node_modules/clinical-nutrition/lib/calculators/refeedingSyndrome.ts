/**
 * Refeeding syndrome risk Assessment
 * Educational tool for assessing risk of refeeding syndrome
 * 
 * This is for educational purposes only and must NOT be used for clinical decision-making.
 */

import type { ClinicalInput } from "../clinical-input";

export type RefeedingRiskLevel = "low" | "moderate" | "high";

export interface RefeedingSyndromeResult {
  /** Risk level assessment */
  riskLevel: RefeedingRiskLevel;
  /** Risk level label in Vietnamese */
  riskLabel: string;
  /** Risk score (0-100, higher = higher risk) */
  riskScore: number;
  /** Educational warnings */
  warnings: string[];
  /** Educational explanations */
  explanations: string[];
  /** Clinical recommendations */
  recommendations: string[];
  /** Clinical context notes */
  clinicalNotes: string[];
  /** Missing required fields */
  missingFields: string[];
  /** Risk factors identified */
  riskFactors: string[];
}

/**
 * Calculate refeeding syndrome risk
 * Based on NICE guidelines and clinical risk factors
 */
export function calculateRefeedingSyndromeRisk(
  input: ClinicalInput,
  additionalFactors: {
    bmi?: number | null;
    weightLossPercent?: number | null;
    fastingDays?: number | null;
    alcoholDependence?: boolean;
    chemotherapy?: boolean;
    diabetes?: boolean;
    electrolyteImbalance?: boolean;
  } = {}
): RefeedingSyndromeResult {
  const warnings: string[] = [];
  const explanations: string[] = [];
  const recommendations: string[] = [];
  const clinicalNotes: string[] = [];
  const missingFields: string[] = [];
  const riskFactors: string[] = [];

  let riskScore = 0;
  let riskLevel: RefeedingRiskLevel = "low";
  let riskLabel = "Thấp";

  // Check required fields
  if (input.weightKg == null) {
    missingFields.push("weightKg");
  }
  if (input.heightCm == null) {
    missingFields.push("heightCm");
  }

  // Calculate BMI if available
  let bmi: number | null = null;
  if (input.weightKg != null && input.heightCm != null && input.weightKg > 0 && input.heightCm > 0) {
    const heightM = input.heightCm / 100;
    bmi = input.weightKg / (heightM * heightM);
  }

  // Use provided BMI or calculated BMI
  const effectiveBMI = additionalFactors.bmi ?? bmi;

  // Risk factor 1: BMI < 16 or BMI < 18.5 with weight loss
  if (effectiveBMI != null) {
    if (effectiveBMI < 16) {
      riskScore += 30;
      riskFactors.push("BMI < 16 kg/m²");
    } else if (effectiveBMI < 18.5) {
      riskScore += 15;
      riskFactors.push("BMI < 18.5 kg/m²");
    }
  }

  // Risk factor 2: Weight loss
  const weightLoss = additionalFactors.weightLossPercent ?? input.recentWeightLossPercent;
  if (weightLoss != null) {
    if (weightLoss >= 15) {
      riskScore += 25;
      riskFactors.push(`Giảm cân ≥ 15% (${weightLoss.toFixed(1)}%)`);
    } else if (weightLoss >= 10) {
      riskScore += 15;
      riskFactors.push(`Giảm cân ≥ 10% (${weightLoss.toFixed(1)}%)`);
    } else if (weightLoss >= 5) {
      riskScore += 10;
      riskFactors.push(`Giảm cân ≥ 5% (${weightLoss.toFixed(1)}%)`);
    }
  }

  // Risk factor 3: Fasting duration
  const fastingDays = additionalFactors.fastingDays;
  if (fastingDays != null) {
    if (fastingDays >= 7) {
      riskScore += 20;
      riskFactors.push(`Nhịn ăn ≥ 7 ngày (${fastingDays} ngày)`);
    } else if (fastingDays >= 5) {
      riskScore += 15;
      riskFactors.push(`Nhịn ăn ≥ 5 ngày (${fastingDays} ngày)`);
    } else if (fastingDays >= 3) {
      riskScore += 10;
      riskFactors.push(`Nhịn ăn ≥ 3 ngày (${fastingDays} ngày)`);
    }
  }

  // Risk factor 4: Reduced intake
  const intakeReduction = input.intakeReductionPercent;
  if (intakeReduction != null && intakeReduction >= 50) {
    riskScore += 15;
    riskFactors.push(`Giảm lượng ăn ≥ 50% (${intakeReduction.toFixed(1)}%)`);
  }

  // Risk factor 5: Alcohol dependence
  if (additionalFactors.alcoholDependence) {
    riskScore += 15;
    riskFactors.push("Nghiện rượu");
  }

  // Risk factor 6: Chemotherapy
  if (additionalFactors.chemotherapy) {
    riskScore += 10;
    riskFactors.push("Hóa trị");
  }

  // Risk factor 7: Diabetes
  if (additionalFactors.diabetes) {
    riskScore += 10;
    riskFactors.push("Đái tháo đường");
  }

  // Risk factor 8: Electrolyte imbalance
  if (additionalFactors.electrolyteImbalance) {
    riskScore += 15;
    riskFactors.push("Mất cân bằng điện giải");
  }

  // Determine risk level
  if (riskScore >= 50) {
    riskLevel = "high";
    riskLabel = "Cao";
  } else if (riskScore >= 25) {
    riskLevel = "moderate";
    riskLabel = "Trung bình";
  } else {
    riskLevel = "low";
    riskLabel = "Thấp";
  }

  // Generate explanations
  explanations.push(
    `Điểm đánh giá nguy cơ: ${riskScore}/100. Điểm này dựa trên các yếu tố nguy cơ được xác định.`,
    `Mức độ nguy cơ được phân loại là "${riskLabel}" dựa trên các yếu tố nguy cơ hiện có.`
  );

  if (riskFactors.length > 0) {
    explanations.push(
      `Các yếu tố nguy cơ được xác định: ${riskFactors.join(", ")}.`
    );
  }

  // Generate recommendations based on risk level
  if (riskLevel === "high") {
    recommendations.push(
      "Nguy cơ cao: Bắt đầu dinh dưỡng với tốc độ thấp (10-15 kcal/kg/ngày hoặc 50% nhu cầu ước tính).",
      "Theo dõi chặt chẽ điện giải (phosphorus, magnesium, potassium) trước và trong 72 giờ đầu.",
      "Bổ sung thiamine, multivitamin, và các vi chất trước khi bắt đầu dinh dưỡng.",
      "Tăng dần năng lượng từ từ (tăng 25-33% mỗi 1-2 ngày) dựa trên dung nạp và điện giải.",
      "Theo dõi dấu hiệu hội chứng tái cho ăn: giảm phosphorus, magnesium, potassium; phù; suy tim; rối loạn nhịp tim."
    );
    warnings.push(
      "Nguy cơ cao của hội chứng tái cho ăn. Cần theo dõi chặt chẽ và quản lý bởi nhóm lâm sàng có kinh nghiệm.",
      "Không bắt đầu dinh dưỡng mà không đánh giá và chuẩn bị đầy đủ về điện giải và vi chất."
    );
  } else if (riskLevel === "moderate") {
    recommendations.push(
      "Nguy cơ trung bình: Bắt đầu dinh dưỡng với tốc độ thận trọng (15-20 kcal/kg/ngày hoặc 50-75% nhu cầu ước tính).",
      "Theo dõi điện giải (phosphorus, magnesium, potassium) trước và trong 48-72 giờ đầu.",
      "Xem xét bổ sung thiamine và multivitamin trước khi bắt đầu dinh dưỡng.",
      "Tăng dần năng lượng từ từ dựa trên dung nạp và điện giải.",
      "Theo dõi dấu hiệu hội chứng tái cho ăn."
    );
    warnings.push(
      "Nguy cơ trung bình của hội chứng tái cho ăn. Cần theo dõi và quản lý cẩn thận."
    );
  } else {
    recommendations.push(
      "Nguy cơ thấp: Có thể bắt đầu dinh dưỡng với tốc độ bình thường hơn, nhưng vẫn cần theo dõi.",
      "Theo dõi điện giải cơ bản, đặc biệt nếu có các yếu tố nguy cơ khác.",
      "Tăng dần năng lượng dựa trên dung nạp và đáp ứng lâm sàng."
    );
  }

  // General clinical notes
  clinicalNotes.push(
    "Hội chứng tái cho ăn là một biến chứng nghiêm trọng có thể xảy ra khi bắt đầu dinh dưỡng sau một thời gian nhịn ăn hoặc giảm ăn đáng kể.",
    "Cơ chế liên quan đến sự dịch chuyển điện giải (đặc biệt là phosphorus, magnesium, potassium) khi cơ thể chuyển từ trạng thái catabolic sang anabolic.",
    "Đánh giá nguy cơ này là giáo dục và cần được kết hợp với đánh giá lâm sàng toàn diện, bao gồm xét nghiệm điện giải và vi chất.",
    "Trong thực hành, các bác sĩ lâm sàng sẽ điều chỉnh tốc độ và loại dinh dưỡng dựa trên đánh giá nguy cơ, xét nghiệm, và đáp ứng của bệnh nhân.",
    "Hướng dẫn địa phương có thể khác nhau về cách đánh giá và quản lý nguy cơ hội chứng tái cho ăn."
  );

  if (riskFactors.length === 0) {
    explanations.push(
      "Không có yếu tố nguy cơ chính được xác định. Tuy nhiên, đánh giá này là giáo dục và cần được kết hợp với đánh giá lâm sàng toàn diện."
    );
  }

  return {
    riskLevel,
    riskLabel,
    riskScore,
    warnings,
    explanations,
    recommendations,
    clinicalNotes,
    missingFields,
    riskFactors,
  };
}
