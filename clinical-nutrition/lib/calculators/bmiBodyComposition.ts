/**
 * BMI and Body composition calculator
 * Educational tool for calculating BMI, Ideal body weight, Adjusted body Weight, and BSA
 * 
 * This is for educational purposes only and must NOT be used for clinical decision-making.
 */

import type { ClinicalInput } from "../clinical-input";

export type BMICategory = 
  | "underweight"
  | "normal"
  | "overweight"
  | "obese_class_1"
  | "obese_class_2"
  | "obese_class_3"
  | "invalid";

export interface BMIBodyCompositionResult {
  /** BMI value (kg/m²) */
  bmi: number | null;
  /** BMI category classification */
  category: BMICategory;
  /** Category label in Vietnamese */
  categoryLabel: string;
  /** Ideal body weight (kg) - Devine formula */
  idealBodyWeight: number | null;
  /** Adjusted body Weight (kg) - for obesity */
  adjustedBodyWeight: number | null;
  /** Body surface area (m²) - Du bois formula */
  bodySurfaceArea: number | null;
  /** Educational warnings */
  warnings: string[];
  /** Educational explanations */
  explanations: string[];
  /** Clinical context notes */
  clinicalNotes: string[];
  /** Missing required fields */
  missingFields: string[];
}

/**
 * Calculate BMI from weight and height
 */
function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * Classify BMI according to WHO categories
 */
function classifyBMI(bmi: number): { category: BMICategory; label: string } {
  if (bmi < 18.5) {
    return { category: "underweight", label: "Thiếu cân" };
  } else if (bmi < 25) {
    return { category: "normal", label: "Bình thường" };
  } else if (bmi < 30) {
    return { category: "overweight", label: "Thừa cân" };
  } else if (bmi < 35) {
    return { category: "obese_class_1", label: "Béo phì độ I" };
  } else if (bmi < 40) {
    return { category: "obese_class_2", label: "Béo phì độ II" };
  } else {
    return { category: "obese_class_3", label: "Béo phì độ III" };
  }
}

/**
 * Calculate ideal body Weight using Devine formula
 * IBW (male) = 50 + 2.3 * (height in inches - 60)
 * IBW (female) = 45.5 + 2.3 * (height in inches - 60)
 */
function calculateIBW(heightCm: number, sex: ClinicalInput["sex"]): number {
  const heightInches = heightCm / 2.54;
  const baseWeight = sex === "male" ? 50 : 45.5;
  const adjustment = 2.3 * (heightInches - 60);
  return baseWeight + adjustment;
}

/**
 * Calculate adjusted Body weight for obesity
 * ABW = IBW + 0.4 * (actual weight - IBW)
 * Used when BMI > 30 for some calculations
 */
function calculateABW(actualWeight: number, ibw: number): number {
  return ibw + 0.4 * (actualWeight - ibw);
}

/**
 * Calculate body Surface area using Du bois formula
 * BSA = 0.007184 * (weight^0.425) * (height^0.725)
 */
function calculateBSA(weightKg: number, heightCm: number): number {
  return 0.007184 * Math.pow(weightKg, 0.425) * Math.pow(heightCm, 0.725);
}

/**
 * Calculate BMI and body composition metrics
 * Educational tool only - not for clinical decision-making
 */
export function calculateBMIBodyComposition(
  input: ClinicalInput
): BMIBodyCompositionResult {
  const warnings: string[] = [];
  const explanations: string[] = [];
  const clinicalNotes: string[] = [];
  const missingFields: string[] = [];

  let bmi: number | null = null;
  let category: BMICategory = "invalid";
  let categoryLabel = "Không xác định";
  let idealBodyWeight: number | null = null;
  let adjustedBodyWeight: number | null = null;
  let bodySurfaceArea: number | null = null;

  // Check required fields
  if (input.weightKg == null) {
    missingFields.push("weightKg");
  }
  if (input.heightCm == null) {
    missingFields.push("heightCm");
  }

  // Calculate BMI if we have both weight and height
  if (input.weightKg != null && input.heightCm != null && input.weightKg > 0 && input.heightCm > 0) {
    bmi = calculateBMI(input.weightKg, input.heightCm);
    const classification = classifyBMI(bmi);
    category = classification.category;
    categoryLabel = classification.label;

    explanations.push(
      `BMI được tính bằng công thức: BMI = cân nặng (kg) / [chiều cao (m)]²`,
      `BMI của ${bmi.toFixed(1)} kg/m² được phân loại là "${categoryLabel}" theo tiêu chuẩn WHO.`
    );

    // Calculate IBW if we have height and sex
    if (input.sex != null && (input.sex === "male" || input.sex === "female")) {
      idealBodyWeight = calculateIBW(input.heightCm, input.sex);
      explanations.push(
        `Cân nặng lý tưởng (IBW) được tính bằng công thức Devine: ${input.sex === "male" ? "50" : "45.5"} + 2.3 × (chiều cao tính bằng inch - 60)`,
        `IBW ước tính: ${idealBodyWeight.toFixed(1)} kg. Lưu ý: IBW là một ước tính giáo dục và có thể khác nhau tùy theo công thức sử dụng.`
      );

      // Calculate ABW if obese
      if (category.startsWith("obese")) {
        adjustedBodyWeight = calculateABW(input.weightKg, idealBodyWeight);
        explanations.push(
          `Cân nặng điều chỉnh (ABW) được tính cho béo phì: ABW = IBW + 0.4 × (cân nặng thực tế - IBW)`,
          `ABW ước tính: ${adjustedBodyWeight.toFixed(1)} kg. Một số hướng dẫn sử dụng ABW thay vì cân nặng thực tế khi tính nhu cầu dinh dưỡng ở béo phì.`
        );
        warnings.push(
          "Trong béo phì, một số bác sĩ lâm sàng sử dụng cân nặng điều chỉnh (ABW) hoặc cân nặng lý tưởng (IBW) thay vì cân nặng thực tế khi áp dụng quy tắc kcal/kg hoặc g protein/kg. Hướng dẫn địa phương có thể khác nhau."
        );
      }
    } else {
      warnings.push(
        "Giới tính không được cung cấp, vì vậy không thể tính cân nặng lý tưởng (IBW). IBW yêu cầu giới tính để sử dụng công thức Devine."
      );
    }

    // Calculate BSA
    bodySurfaceArea = calculateBSA(input.weightKg, input.heightCm);
    explanations.push(
      `Diện tích bề mặt cơ thể (BSA) được tính bằng công thức Du bois: BSA = 0.007184 × (cân nặng^0.425) × (chiều cao^0.725)`,
      `BSA ước tính: ${bodySurfaceArea.toFixed(2)} m². BSA thường được sử dụng trong một số tính toán dược lý và lâm sàng.`
    );

    // Add warnings for edge cases
    if (input.weightKg < 30 || input.weightKg > 200) {
      warnings.push(
        "Cân nặng nằm ngoài phạm vi điển hình. Trong thực hành, các bác sĩ lâm sàng sẽ kiểm tra quá tải dịch, phù, cổ trướng, hoặc lỗi đo lường."
      );
    }

    if (input.heightCm < 120 || input.heightCm > 220) {
      warnings.push(
        "Chiều cao nằm ngoài phạm vi điển hình cho người lớn. Vui lòng kiểm tra lại giá trị."
      );
    }

    if (category === "underweight") {
      warnings.push(
        "BMI cho thấy thiếu cân. Trong thực hành, các bác sĩ lâm sàng sẽ đánh giá thêm về nguyên nhân, thành phần cơ thể, và bối cảnh lâm sàng."
      );
    }

    if (category.startsWith("obese")) {
      warnings.push(
        "BMI cho thấy béo phì. Trong thực hành, các bác sĩ lâm sàng sẽ xem xét sử dụng cân nặng điều chỉnh hoặc cân nặng lý tưởng cho một số tính toán dinh dưỡng, và sẽ đánh giá thêm về phân bố mỡ và nguy cơ bệnh lý."
      );
    }
  } else {
    warnings.push(
      "Cân nặng và chiều cao là bắt buộc để tính BMI và các chỉ số thành phần cơ thể."
    );
  }

  clinicalNotes.push(
    "BMI là một công cụ sàng lọc hữu ích nhưng không phải là thước đo hoàn chỉnh về tình trạng dinh dưỡng. Nó không phân biệt giữa khối mỡ và khối nạc.",
    "Trong thực hành lâm sàng, các bác sĩ lâm sàng sẽ kết hợp BMI với đánh giá lâm sàng, tiền sử, và các chỉ số khác để đánh giá toàn diện tình trạng dinh dưỡng.",
    "Cân nặng lý tưởng (IBW) và cân nặng điều chỉnh (ABW) là các ước tính giáo dục. Các công thức khác nhau (Devine, Hamwi, Robinson) có thể cho kết quả khác nhau.",
    "Trong các trường hợp có phù, cổ trướng, hoặc dịch chuyển đáng kể, cân nặng thực tế có thể không phản ánh chính xác khối nạc và cần được diễn giải cẩn thận."
  );

  return {
    bmi,
    category,
    categoryLabel,
    idealBodyWeight,
    adjustedBodyWeight,
    bodySurfaceArea,
    warnings,
    explanations,
    clinicalNotes,
    missingFields,
  };
}
