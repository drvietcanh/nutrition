/**
 * Fluid Requirements Calculator
 * Educational tool for calculating daily fluid requirements
 * 
 * This is for educational purposes only and must NOT be used for clinical decision-making.
 */

import type { ClinicalInput } from "../clinical-input";

export interface FluidRequirementsResult {
  /** Basic daily fluid requirement (ml/day) */
  basicRequirement: number | null;
  /** Adjusted requirement based on clinical conditions (ml/day) */
  adjustedRequirement: number | null;
  /** Range of requirements (ml/day) */
  requirementRange: { lower: number; upper: number } | null;
  /** Educational warnings */
  warnings: string[];
  /** Educational explanations */
  explanations: string[];
  /** Clinical context notes */
  clinicalNotes: string[];
  /** Missing required fields */
  missingFields: string[];
  /** Applied adjustments */
  adjustments: string[];
}

/**
 * Calculate basic fluid requirement using Holliday-Segar method for children
 * or 30-35 ml/kg for adults
 */
function calculateBasicFluidRequirement(
  weightKg: number,
  ageYears: number | null
): number {
  // For children (< 18 years), use Holliday-Segar method
  if (ageYears != null && ageYears < 18) {
    if (ageYears < 1) {
      // < 1 year: 100 ml/kg
      return weightKg * 100;
    } else if (ageYears < 4) {
      // 1-3 years: 100 ml/kg for first 10 kg, then 50 ml/kg for next 10 kg
      if (weightKg <= 10) {
        return weightKg * 100;
      } else {
        return 10 * 100 + (weightKg - 10) * 50;
      }
    } else if (ageYears < 10) {
      // 4-9 years: 100 ml/kg for first 10 kg, 50 ml/kg for next 10 kg, 20 ml/kg for remainder
      if (weightKg <= 10) {
        return weightKg * 100;
      } else if (weightKg <= 20) {
        return 10 * 100 + (weightKg - 10) * 50;
      } else {
        return 10 * 100 + 10 * 50 + (weightKg - 20) * 20;
      }
    } else {
      // 10-17 years: similar to adults but slightly higher
      return weightKg * 35;
    }
  }

  // For adults: 30-35 ml/kg/day
  return weightKg * 32.5; // Use midpoint
}

/**
 * Calculate fluid requirements with adjustments
 */
export function calculateFluidRequirements(
  input: ClinicalInput,
  adjustments: {
    fever?: boolean;
    diarrhea?: boolean;
    vomiting?: boolean;
    heartFailure?: boolean;
    renalFailure?: boolean;
    liverFailure?: boolean;
    burns?: boolean;
  } = {}
): FluidRequirementsResult {
  const warnings: string[] = [];
  const explanations: string[] = [];
  const clinicalNotes: string[] = [];
  const missingFields: string[] = [];
  const appliedAdjustments: string[] = [];

  let basicRequirement: number | null = null;
  let adjustedRequirement: number | null = null;
  let requirementRange: { lower: number; upper: number } | null = null;

  // Check required fields
  if (input.weightKg == null) {
    missingFields.push("weightKg");
  }

  if (input.weightKg != null && input.weightKg > 0) {
    basicRequirement = calculateBasicFluidRequirement(
      input.weightKg,
      input.ageYears
    );

    if (input.ageYears != null && input.ageYears < 18) {
      explanations.push(
        `Nhu cầu nước cơ bản được tính bằng phương pháp Holliday-Segar cho trẻ em.`,
        `Phương pháp này điều chỉnh theo tuổi và cân nặng để phản ánh nhu cầu trao đổi chất thay đổi.`
      );
    } else {
      explanations.push(
        `Nhu cầu nước cơ bản được tính bằng quy tắc 30-35 ml/kg/ngày cho người lớn.`,
        `Đây là một ước tính giáo dục và có thể cần điều chỉnh dựa trên bối cảnh lâm sàng.`
      );
    }

    // Apply adjustments
    adjustedRequirement = basicRequirement;
    let adjustmentFactor = 1.0;

    if (adjustments.fever) {
      // Add 10-15% for each degree above 37°C (simplified: add 10%)
      adjustmentFactor += 0.1;
      appliedAdjustments.push("Sốt: +10% (ước tính cho mỗi độ trên 37°C)");
    }

    if (adjustments.diarrhea || adjustments.vomiting) {
      // Add 10-20 ml/kg for losses
      const additional = input.weightKg * 15;
      adjustedRequirement += additional;
      appliedAdjustments.push(
        `Tiêu chảy/nôn: +${Math.round(additional)} ml/ngày (ước tính)`
      );
    }

    if (adjustments.heartFailure) {
      // Restrict to 1.5-2 L/day or 20-25 ml/kg
      adjustedRequirement = Math.min(adjustedRequirement, input.weightKg * 22.5);
      appliedAdjustments.push(
        "Suy tim: Hạn chế dịch (20-25 ml/kg hoặc 1.5-2 L/ngày)"
      );
      warnings.push(
        "Trong suy tim, nhu cầu dịch thường bị hạn chế để tránh quá tải dịch. Điều chỉnh này là giáo dục và cần được cá nhân hóa dựa trên mức độ suy tim và đáp ứng."
      );
    }

    if (adjustments.renalFailure) {
      // Restrict based on urine output + insensible losses
      // Simplified: restrict to 500-1000 ml + urine output
      adjustedRequirement = 750; // Base restriction
      appliedAdjustments.push(
        "Suy thận: Hạn chế dịch (500-1000 ml + lượng nước tiểu, tùy theo giai đoạn)"
      );
      warnings.push(
        "Trong suy thận, nhu cầu dịch phụ thuộc vào giai đoạn bệnh, lượng nước tiểu, và chức năng thận. Điều chỉnh này là giáo dục và cần được đánh giá bởi bác sĩ lâm sàng."
      );
    }

    if (adjustments.liverFailure) {
      // Similar to heart failure - restrict
      adjustedRequirement = Math.min(adjustedRequirement, input.weightKg * 25);
      appliedAdjustments.push(
        "Suy gan: Hạn chế dịch (20-25 ml/kg, tránh quá tải dịch)"
      );
      warnings.push(
        "Trong suy gan, đặc biệt với cổ trướng, nhu cầu dịch thường bị hạn chế. Điều chỉnh này là giáo dục và cần được cá nhân hóa."
      );
    }

    if (adjustments.burns) {
      // Parkland formula: 4 ml/kg/%TBSA (simplified: add significant amount)
      adjustmentFactor += 0.5; // Significant increase
      adjustedRequirement = basicRequirement * adjustmentFactor;
      appliedAdjustments.push(
        "Bỏng: Tăng đáng kể (công thức Parkland: 4 ml/kg/%TBSA trong 24h đầu)"
      );
      warnings.push(
        "Trong bỏng, nhu cầu dịch tăng đáng kể và phụ thuộc vào diện tích bề mặt bị bỏng (%TBSA). Công thức Parkland là một hướng dẫn và cần được điều chỉnh dựa trên đáp ứng lâm sàng."
      );
    }

    // Calculate range (basic ± 10%)
    requirementRange = {
      lower: Math.round(basicRequirement * 0.9),
      upper: Math.round(basicRequirement * 1.1),
    };

    if (appliedAdjustments.length > 0) {
      explanations.push(
        `Các điều chỉnh đã được áp dụng dựa trên các tình trạng lâm sàng được chọn.`
      );
    }

    // Add warnings for extreme values
    if (input.weightKg < 30 || input.weightKg > 200) {
      warnings.push(
        "Cân nặng nằm ngoài phạm vi điển hình. Trong thực hành, các bác sĩ lâm sàng sẽ kiểm tra quá tải dịch, phù, hoặc lỗi đo lường."
      );
    }
  } else {
    warnings.push(
      "Cân nặng là bắt buộc để tính nhu cầu dịch. Tuổi là tùy chọn nhưng hữu ích để điều chỉnh cho trẻ em."
    );
  }

  clinicalNotes.push(
    "Nhu cầu dịch thay đổi đáng kể dựa trên tuổi, cân nặng, tình trạng bệnh, và môi trường.",
    "Các ước tính này là giáo dục và cần được điều chỉnh dựa trên đánh giá lâm sàng, bao gồm lượng nước tiểu, dấu hiệu quá tải dịch, và đáp ứng của bệnh nhân.",
    "Trong thực hành, các bác sĩ lâm sàng sẽ theo dõi cân bằng dịch (input/output), dấu hiệu sinh tồn, và đánh giá lâm sàng để điều chỉnh nhu cầu dịch.",
    "Các tình trạng như suy tim, suy thận, và suy gan thường yêu cầu hạn chế dịch, nhưng mức độ hạn chế phụ thuộc vào mức độ bệnh và đáp ứng của bệnh nhân."
  );

  return {
    basicRequirement,
    adjustedRequirement: adjustedRequirement
      ? Math.round(adjustedRequirement)
      : null,
    requirementRange,
    warnings,
    explanations,
    clinicalNotes,
    missingFields,
    adjustments: appliedAdjustments,
  };
}
