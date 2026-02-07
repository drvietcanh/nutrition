/**
 * Micronutrient Assessment Tool
 * Educational tool for calculating micronutrient requirements
 * 
 * This is for educational purposes only and must NOT be used for clinical decision-making.
 */

import type { ClinicalInput } from "../clinical-input";

export interface MicronutrientRequirement {
  /** Nutrient name */
  name: string;
  /** Recommended daily intake (unit varies) */
  recommendedIntake: number | { lower: number; upper: number } | null;
  /** Unit of measurement */
  unit: string;
  /** Educational notes */
  notes: string[];
}

export interface MicronutrientAssessmentResult {
  /** Array of micronutrient requirements */
  requirements: MicronutrientRequirement[];
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
 * Calculate micronutrient requirements based on age, sex, and clinical conditions
 * Based on RDA/DRI values and clinical guidelines
 */
export function calculateMicronutrientRequirements(
  input: ClinicalInput,
  additionalFactors: {
    pregnancy?: boolean;
    lactation?: boolean;
    renalDisease?: boolean;
    liverDisease?: boolean;
  } = {}
): MicronutrientAssessmentResult {
  const warnings: string[] = [];
  const explanations: string[] = [];
  const clinicalNotes: string[] = [];
  const missingFields: string[] = [];
  const requirements: MicronutrientRequirement[] = [];

  // Check required fields
  if (input.ageYears == null) {
    missingFields.push("ageYears");
  }

  const age = input.ageYears ?? 30; // Default to adult if not provided
  const isAdult = age >= 18;
  const isFemale = input.sex === "female";
  const isMale = input.sex === "male";

  // Vitamin D
  const vitaminD = isAdult ? 600 : 600; // IU/day, same for children and adults
  requirements.push({
    name: "Vitamin D",
    recommendedIntake: vitaminD,
    unit: "IU/ngày",
    notes: [
      "Vitamin D quan trọng cho sức khỏe xương và chức năng miễn dịch.",
      "Nhu cầu có thể tăng ở người ít tiếp xúc với ánh nắng mặt trời, người lớn tuổi, hoặc có bệnh lý ảnh hưởng hấp thu.",
    ],
  });

  // Vitamin B12
  const vitaminB12 = isAdult ? 2.4 : 1.0; // mcg/day
  requirements.push({
    name: "Vitamin B12",
    recommendedIntake: vitaminB12,
    unit: "mcg/ngày",
    notes: [
      "Vitamin B12 quan trọng cho sản xuất tế bào máu và chức năng thần kinh.",
      "Nhu cầu có thể tăng ở người ăn chay, người lớn tuổi, hoặc có bệnh lý ảnh hưởng hấp thu (ví dụ, thiếu acid dạ dày).",
    ],
  });

  // Folate/Folic Acid
  const folate = isAdult ? (isFemale ? 400 : 400) : 200; // mcg/day
  requirements.push({
    name: "Folate (Acid Folic)",
    recommendedIntake: folate,
    unit: "mcg/ngày",
    notes: [
      "Folate quan trọng cho sản xuất tế bào máu và tổng hợp DNA.",
      "Nhu cầu tăng trong thai kỳ (600 mcg/ngày).",
      "Thiếu folate có thể dẫn đến thiếu máu hồng cầu to.",
    ],
  });

  // Iron
  let iron: number | { lower: number; upper: number };
  if (isAdult) {
    if (isFemale) {
      iron = { lower: 15, upper: 18 }; // mg/day, higher for menstruating women
    } else {
      iron = 8; // mg/day for men
    }
  } else {
    iron = { lower: 7, upper: 11 }; // mg/day for children
  }
  requirements.push({
    name: "Sắt (Iron)",
    recommendedIntake: iron,
    unit: "mg/ngày",
    notes: [
      "Sắt quan trọng cho vận chuyển oxy và sản xuất tế bào máu.",
      "Nhu cầu cao hơn ở phụ nữ trong độ tuổi sinh đẻ do mất máu kinh nguyệt.",
      "Thiếu sắt là nguyên nhân phổ biến nhất của thiếu máu.",
      "Trong bệnh thận mạn tính, nhu cầu sắt có thể tăng do thiếu máu do bệnh thận.",
    ],
  });

  // Zinc
  const zinc = isAdult ? (isMale ? 11 : 8) : 5; // mg/day
  requirements.push({
    name: "Kẽm (Zinc)",
    recommendedIntake: zinc,
    unit: "mg/ngày",
    notes: [
      "Kẽm quan trọng cho chức năng miễn dịch, chữa lành vết thương, và chuyển hóa.",
      "Nhu cầu có thể tăng trong bệnh cấp tính, chấn thương, hoặc vết thương.",
      "Trong bệnh gan, nhu cầu kẽm có thể tăng do mất qua đường tiêu hóa.",
    ],
  });

  // Magnesium
  const magnesium = isAdult ? (isMale ? 400 : 310) : 80; // mg/day
  requirements.push({
    name: "Magie (Magnesium)",
    recommendedIntake: magnesium,
    unit: "mg/ngày",
    notes: [
      "Magie quan trọng cho chức năng cơ, thần kinh, và chuyển hóa năng lượng.",
      "Thiếu magie có thể xảy ra trong bệnh tiêu hóa, nghiện rượu, hoặc một số thuốc.",
      "Trong bệnh thận, nhu cầu magie có thể cần điều chỉnh dựa trên chức năng thận.",
    ],
  });

  // Apply adjustments for clinical conditions
  if (additionalFactors.renalDisease) {
    warnings.push(
      "Trong bệnh thận, nhu cầu một số vi chất (đặc biệt là phosphorus, potassium) có thể cần hạn chế tùy theo giai đoạn bệnh và chức năng thận.",
      "Nhu cầu sắt có thể tăng do thiếu máu do bệnh thận, nhưng cần được quản lý cẩn thận."
    );
    explanations.push(
      "Điều chỉnh cho bệnh thận: Một số vi chất (phosphorus, potassium) có thể cần hạn chế, trong khi sắt có thể cần bổ sung."
    );
  }

  if (additionalFactors.liverDisease) {
    warnings.push(
      "Trong bệnh gan, nhu cầu một số vi chất có thể thay đổi. Kẽm có thể cần bổ sung do mất qua đường tiêu hóa.",
      "Vitamin D và các vitamin tan trong chất béo có thể cần bổ sung do giảm hấp thu."
    );
    explanations.push(
      "Điều chỉnh cho bệnh gan: Kẽm và các vitamin tan trong chất béo có thể cần bổ sung."
    );
  }

  if (additionalFactors.pregnancy) {
    requirements.forEach((req) => {
      if (req.name === "Folate (Acid Folic)") {
        req.recommendedIntake = 600;
        req.notes.push("Nhu cầu tăng trong thai kỳ: 600 mcg/ngày.");
      }
      if (req.name === "Sắt (Iron)") {
        req.recommendedIntake = 27;
        req.notes.push("Nhu cầu tăng trong thai kỳ: 27 mg/ngày.");
      }
    });
    explanations.push(
      "Điều chỉnh cho thai kỳ: Nhu cầu folate và sắt tăng đáng kể."
    );
  }

  if (additionalFactors.lactation) {
    requirements.forEach((req) => {
      if (req.name === "Folate (Acid Folic)") {
        req.recommendedIntake = 500;
        req.notes.push("Nhu cầu tăng trong cho con bú: 500 mcg/ngày.");
      }
      if (req.name === "Sắt (Iron)") {
        req.recommendedIntake = 9;
        req.notes.push("Nhu cầu giảm trong cho con bú so với thai kỳ: 9 mg/ngày.");
      }
    });
    explanations.push(
      "Điều chỉnh cho cho con bú: Nhu cầu một số vi chất thay đổi so với thai kỳ."
    );
  }

  explanations.push(
    "Các giá trị này dựa trên RDA (Recommended Dietary Allowance) và DRI (Dietary Reference Intake) cho người khỏe mạnh.",
    "Nhu cầu thực tế có thể thay đổi dựa trên tình trạng bệnh, thuốc, và các yếu tố cá nhân khác.",
    "Trong thực hành lâm sàng, các bác sĩ lâm sàng sẽ đánh giá tình trạng vi chất thông qua xét nghiệm và điều chỉnh dựa trên kết quả."
  );

  clinicalNotes.push(
    "Nhu cầu vi chất thay đổi dựa trên tuổi, giới tính, tình trạng sinh lý (thai kỳ, cho con bú), và tình trạng bệnh.",
    "Thiếu vi chất có thể xảy ra trong suy dinh dưỡng, bệnh tiêu hóa, nghiện rượu, hoặc một số bệnh lý mạn tính.",
    "Bổ sung vi chất nên được điều chỉnh dựa trên đánh giá lâm sàng, xét nghiệm, và đáp ứng của bệnh nhân, không chỉ dựa vào nhu cầu ước tính.",
    "Một số vi chất có thể độc hại nếu dùng quá liều (ví dụ, sắt, vitamin D), vì vậy cần thận trọng khi bổ sung.",
    "Hướng dẫn địa phương có thể khác nhau về nhu cầu và cách bổ sung vi chất."
  );

  if (input.ageYears == null) {
    warnings.push(
      "Tuổi không được cung cấp. Các giá trị hiển thị dựa trên giả định người lớn (30 tuổi)."
    );
  }

  if (input.sex == null) {
    warnings.push(
      "Giới tính không được cung cấp. Một số nhu cầu (sắt, kẽm) có thể khác nhau giữa nam và nữ."
    );
  }

  return {
    requirements,
    warnings,
    explanations,
    clinicalNotes,
    missingFields,
  };
}
