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
        "Cân nặng đã nhập nằm ngoài phạm vi điển hình của bệnh nhân nội trú người lớn; trong thực hành, các bác sĩ lâm sàng sẽ kiểm tra quá tải dịch, lỗi đo lường, hoặc nhu cầu cân nặng điều chỉnh."
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
      "Nhu cầu năng lượng được minh họa sử dụng quy tắc đơn giản giáo dục phổ biến khoảng 25–30 kcal/kg cho nhiều bệnh nhân nội trú người lớn.",
      "Nhu cầu protein được minh họa sử dụng phạm vi đơn giản khoảng 1.0–1.5 g/kg/ngày, mà nhiều hướng dẫn sử dụng như điểm khởi đầu cho thảo luận.",
      "Phương pháp đơn giản này thường sẽ cho các phạm vi khác với các phương trình chi tiết hơn, vì nó không mô hình hóa rõ ràng tuổi, giới tính, hoặc mức độ hoạt động."
    );
  } else {
    warnings.push(
      "Cân nặng bị thiếu hoặc không hợp lý, vì vậy các phạm vi dựa trên cân nặng đơn giản không thể được minh họa."
    );
  }

  if (input.heightCm != null && input.weightKg != null) {
    explanation.push(
      "Trong thực hành, các bác sĩ lâm sàng cũng sẽ xem xét BMI và thành phần cơ thể, không chỉ cân nặng thô."
    );
  }

  clinicalContextNotes.push(
    "Trong thực hành lâm sàng hàng ngày, các phạm vi dựa trên cân nặng đơn giản thường được sử dụng cho ước tính nhanh tại giường, sau đó được tinh chỉnh sử dụng hướng dẫn địa phương và toàn bộ bức tranh lâm sàng.",
    "Các bác sĩ lâm sàng thường chọn một điểm khởi đầu trong phạm vi, quan sát khả năng dung nạp và tiến triển (ví dụ, cân nặng, xét nghiệm, và diễn biến lâm sàng), và điều chỉnh thay vì giả định ước tính đầu tiên là chính xác.",
    "Các phạm vi này không tính đến tất cả các tình huống đặc biệt (ví dụ, béo phì nặng, suy đa cơ quan, hoặc nguy cơ tái cho ăn), nơi hướng dẫn cụ thể hơn thường được yêu cầu."
  );

  return {
    method: "simple-weight-based",
    methodLabel: "Phạm vi dựa trên cân nặng đơn giản (25–30 kcal/kg; 1.0–1.5 g/kg)",
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
      "Chiều cao bị thiếu, vì vậy ví dụ kiểu phương trình không thể được minh họa đầy đủ; hãy xem xét sử dụng phạm vi dựa trên cân nặng đơn giản hoặc thêm chiều cao."
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
        "Bối cảnh bệnh không được chỉ định hoặc nhận dạng; một dải stress rộng hơn được sử dụng để nhấn mạnh sự không chắc chắn."
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
      "Một dải cơ bản khoảng 20–25 kcal/kg được sử dụng và sau đó nhân với một hệ số stress nhỏ có nguồn gốc từ bối cảnh bệnh.",
      "Phạm vi protein được đẩy lên cao hơn trong các cài đặt stress cao hơn để minh họa cách viêm và dị hóa có thể tăng nhu cầu.",
      "So với quy tắc dựa trên cân nặng đơn giản, cách tiếp cận này thường cho các phạm vi hơi khác vì nó làm cho stress liên quan đến bệnh rõ ràng hơn."
    );
  } else {
    warnings.push(
      "Cân nặng bị thiếu hoặc không hợp lý, vì vậy các phạm vi kiểu phương trình không thể được minh họa."
    );
  }

  clinicalContextNotes.push(
    "Trong thực hành, các phương pháp dựa trên phương trình có thể sử dụng đầu vào chi tiết hơn (ví dụ, tuổi, giới tính, chiều cao, và nhiệt độ) và được neo vào giao thức địa phương.",
    "Các bác sĩ lâm sàng thường so sánh đầu ra phương trình với quy tắc đơn giản hơn để xem liệu chúng có kể một câu chuyện nhất quán không trước khi chọn một ước tính làm việc.",
    "Các hệ số stress thường được chọn một cách thận trọng và được xem xét lại dựa trên khả năng dung nạp, phản ứng chuyển hóa, và thay đổi trong tình trạng lâm sàng; đánh giá lại là một phần thường quy của chăm sóc."
  );

  return {
    method: "equation-educational",
    methodLabel: "Phạm vi kiểu phương trình (cơ sở 20–25 kcal/kg với hệ số stress)",
    ranges,
    missingFields,
    warnings,
    explanation,
    clinicalContextNotes,
  };
}

