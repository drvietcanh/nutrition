/**
 * Nutrition reference values for adults (approximate, educational only)
 *
 * Các giá trị RNI/Daily Value dùng cho mục đích GIÁO DỤC, không dùng cho kê đơn.
 * Nguồn tham khảo tổng hợp từ RNI Việt Nam/WHO và khuyến cáo quốc tế, làm tròn
 * để dễ nhìn khi hiển thị %.
 */

export type NutrientKey =
  | "calories"
  | "protein"
  | "carbs"
  | "fat"
  | "fiber"
  | "vitaminC"
  | "vitaminA"
  | "vitaminB1"
  | "vitaminB2"
  | "vitaminB6"
  | "folate"
  | "vitaminB12"
  | "vitaminD"
  | "sodium"
  | "potassium"
  | "calcium"
  | "iron"
  | "phosphorus"
  | "magnesium"
  | "zinc"
  | "cholesterol";

export interface NutrientReference {
  /** Daily recommended amount (adult), in base unit below */
  value: number;
  /** Base unit for `value` (kcal, g, mg, µg, hoặc IU cho một số vitamin) */
  unit: "kcal" | "g" | "mg" | "µg" | "IU";
  /** Short label to show next to % (optional) */
  label?: string;
}

/**
 * General RNI / Daily Value for a reference adult.
 *
 * Các giá trị này chỉ để người dùng ước lượng tương đối (%RNI),
 * không phản ánh nhu cầu cá thể hóa.
 */
export const GENERAL_RNI: Record<NutrientKey, NutrientReference> = {
  calories: {
    value: 2000,
    unit: "kcal",
    label: "kcal/ngày",
  },
  protein: {
    value: 60,
    unit: "g",
    label: "g/ngày",
  },
  carbs: {
    value: 300,
    unit: "g",
    label: "g/ngày",
  },
  fat: {
    value: 67,
    unit: "g",
    label: "g/ngày",
  },
  fiber: {
    value: 25,
    unit: "g",
    label: "g/ngày",
  },
  vitaminC: {
    value: 75,
    unit: "mg",
    label: "mg/ngày",
  },
  vitaminA: {
    // dùng đơn vị µg RAE ~ 700–900 µg, lấy 800 cho đơn giản
    value: 800,
    unit: "µg",
    label: "µg RAE/ngày",
  },
  vitaminB1: {
    value: 1.2,
    unit: "mg",
    label: "mg/ngày",
  },
  vitaminB2: {
    value: 1.3,
    unit: "mg",
    label: "mg/ngày",
  },
  vitaminB6: {
    value: 1.3,
    unit: "mg",
    label: "mg/ngày",
  },
  folate: {
    value: 400,
    unit: "µg",
    label: "µg/ngày",
  },
  vitaminB12: {
    value: 2.4,
    unit: "µg",
    label: "µg/ngày",
  },
  vitaminD: {
    value: 600,
    unit: "IU",
    label: "IU/ngày",
  },
  sodium: {
    // 2000 mg Na/ngày ~ 5 g muối
    value: 2000,
    unit: "mg",
    label: "mg/ngày",
  },
  potassium: {
    value: 3500,
    unit: "mg",
    label: "mg/ngày",
  },
  calcium: {
    value: 1000,
    unit: "mg",
    label: "mg/ngày",
  },
  iron: {
    value: 14,
    unit: "mg",
    label: "mg/ngày",
  },
  phosphorus: {
    value: 700,
    unit: "mg",
    label: "mg/ngày",
  },
  magnesium: {
    value: 300,
    unit: "mg",
    label: "mg/ngày",
  },
  zinc: {
    value: 10,
    unit: "mg",
    label: "mg/ngày",
  },
  cholesterol: {
    // khuyến cáo cổ điển ≤ 300 mg, tim mạch hay dùng 200 mg
    value: 200,
    unit: "mg",
    label: "mg/ngày",
  },
};

export type DiseaseType =
  | "diabetes"
  | "gout"
  | "kidney"
  | "hypertension"
  | "cardiovascular";

export interface DiseaseTargets {
  /**
   * Daily upper / lower targets for key nutrients related to that disease.
   * value: số tuyệt đối theo đơn vị, direction: "max" nghĩa là nên không vượt quá.
   */
  nutrients: Partial<
    Record<
      NutrientKey,
      {
        value: number;
        unit: NutrientReference["unit"];
        direction: "max" | "min";
      }
    >
  >;
  /** Optional note to show in UI if needed */
  note?: string;
}

/**
 * Disease-specific daily targets (very simplified, educational).
 */
export const DISEASE_TARGETS: Record<DiseaseType, DiseaseTargets> = {
  diabetes: {
    nutrients: {
      carbs: {
        // ~45–60 g carb/bữa x 3 bữa ~ 180 g/ngày, dùng 200 g cho dễ
        value: 200,
        unit: "g",
        direction: "max",
      },
    },
    note:
      "Giới hạn carb mang tính minh họa; thực tế cần cá thể hóa theo phác đồ điều trị.",
  },
  gout: {
    nutrients: {
      // giới hạn purin dùng riêng, không nằm trong NutrientKey; % chỉ minh họa
      // ở UI sẽ dùng hằng số riêng, đây chỉ giữ Na/K nếu cần
    },
  },
  kidney: {
    nutrients: {
      potassium: {
        // thường 2000 mg/ngày cho CKD mức vừa-nặng
        value: 2000,
        unit: "mg",
        direction: "max",
      },
      phosphorus: {
        value: 800,
        unit: "mg",
        direction: "max",
      },
    },
    note:
      "Ngưỡng kali/phốt pho khác nhau theo giai đoạn CKD; giá trị này chỉ để minh họa.",
  },
  hypertension: {
    nutrients: {
      sodium: {
        value: 2000,
        unit: "mg",
        direction: "max",
      },
    },
    note: "2000 mg natri/ngày ~ 5 g muối ăn.",
  },
  cardiovascular: {
    nutrients: {
      cholesterol: {
        value: 200,
        unit: "mg",
        direction: "max",
      },
      fat: {
        // 10% năng lượng từ SFA ~ 22 g nếu 2000 kcal; ở đây để tổng fat làm mốc mềm
        value: 20,
        unit: "g",
        direction: "max",
      },
    },
  },
};

/**
 * Helper: tính % so với RNI chung.
 * `amount` phải dùng đúng đơn vị với GENERAL_RNI[nutrient].unit.
 */
export function getPercentOfRNI(
  nutrient: NutrientKey,
  amount: number | undefined | null
): number | null {
  if (amount == null) return null;
  const ref = GENERAL_RNI[nutrient];
  if (!ref || ref.value <= 0) return null;
  return (amount / ref.value) * 100;
}

/**
 * Helper: tính % so với mục tiêu bệnh (nếu có).
 */
export function getPercentOfDiseaseTarget(
  disease: DiseaseType,
  nutrient: NutrientKey,
  amount: number | undefined | null
): number | null {
  if (amount == null) return null;
  const config = DISEASE_TARGETS[disease];
  if (!config) return null;
  const target = config.nutrients[nutrient];
  if (!target || target.value <= 0) return null;
  return (amount / target.value) * 100;
}

