/**
 * Extended Vietnamese food database with disease-specific information
 * 
 * Mở rộng từ food-db.ts với thông tin về:
 * - Đái tháo đường: GI, GL
 * - Bệnh gút: Purin
 * - Bệnh thận: Kali, Phốt pho
 * - Tăng huyết áp: Natri
 * - Tim mạch: Cholesterol, Chất béo bão hòa
 */

import type { FoodItem } from "./food-db";

export interface DiseaseSpecificInfo {
  // Đái tháo đường
  diabetes?: {
    glycemicIndex?: number; // GI
    glycemicLoad?: number; // GL cho khẩu phần thông thường
    carbPerPortion: number; // g carb trong khẩu phần thông thường
  };
  
  // Bệnh gút
  gout?: {
    purine: number; // mg/100g
    purineLevel: 'very-high' | 'high' | 'medium' | 'low';
  };
  
  // Bệnh thận
  kidney?: {
    potassium: number; // mg/100g
    phosphorus: number; // mg/100g
  };
  
  // Tăng huyết áp (natri đã có trong FoodItem)
  
  // Tim mạch
  cardiovascular?: {
    cholesterol: number; // mg/100g
    saturatedFat: number; // g/100g
  };
}

export interface ExtendedFoodItem extends Omit<FoodItem, 'code'>, DiseaseSpecificInfo {
  // DEPRECATED: These fields should be moved to disease-specific sections
  // Use kidney.potassium and kidney.phosphorus instead of base potassium/phosphorus
  // Use cardiovascular.cholesterol instead of base cholesterol
  /** @deprecated Use kidney.potassium instead */
  potassium?: number; // mg per 100g
  /** @deprecated Use kidney.phosphorus instead */
  phosphorus?: number; // mg per 100g
  /** @deprecated Use cardiovascular.cholesterol instead */
  cholesterol?: number; // mg per 100g
  // Vitamin nhóm B & vitamin D (đơn vị tham khảo, dùng cho mục đích giáo dục)
  vitaminB1?: number; // mg per 100g
  vitaminB2?: number; // mg per 100g
  vitaminB3?: number; // mg per 100g (Niacin)
  vitaminB5?: number; // mg per 100g (Pantothenic acid)
  vitaminB6?: number; // mg per 100g
  vitaminB7?: number; // µg per 100g (Biotin)
  folate?: number; // µg per 100g
  vitaminB12?: number; // µg per 100g
  vitaminD?: number; // IU per 100g
  vitaminE?: number; // mg per 100g (Tocopherol)
  vitaminK?: number; // µg per 100g (Phylloquinone/Menaquinone)
  choline?: number; // mg per 100g

  // Khoáng chất bổ sung (theo chuẩn quốc tế)
  selenium?: number; // µg per 100g
  copper?: number; // mg per 100g
  manganese?: number; // mg per 100g
  iodine?: number; // µg per 100g

  // Phân tích chất béo chi tiết (theo chuẩn quốc tế)
  transFat?: number; // g per 100g
  monounsaturatedFat?: number; // g per 100g (MUFA)
  polyunsaturatedFat?: number; // g per 100g (PUFA)
  omega3FattyAcids?: number; // g per 100g
  omega6FattyAcids?: number; // g per 100g

  // Đơn vị Việt Nam
  vietnameseUnits?: {
    unit: 'bat' | 'thia-canh' | 'thia-ca-phe' | 'dia' | 'to' | 'cai' | 'qua' | 'mieng' | 'bo' | 'goi' | 'o' | 'con' | 'mo' | 'mui' | 'nam' | 'nhanh' | 'tep';
    weight: number; // grams
    description: string;
  }[];
}

/**
 * Database thực phẩm Việt Nam với thông tin đầy đủ
 */
export const extendedFoodDatabase: ExtendedFoodItem[] = [
  // Rice & Noodles
  {
    id: "com-trang",
    name: "Cơm trắng",
    nameEn: "White rice",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    sodium: 1,
    vitaminB1: 0.02,
    vitaminB2: 0.01,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 8,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.04, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 2.1, // mg
    selenium: 7.5, // µg
    copper: 0.07, // mg
    manganese: 0.47, // mg
    iodine: 0, // µg
    commonServing: "1 bát nhỏ (100g)",
    diabetes: {
      glycemicIndex: 73,
      glycemicLoad: 33, // cho 1 bát vừa (~150g)
      carbPerPortion: 45,
    },
    kidney: {
      potassium: 30,
      phosphorus: 30,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 150, description: '1 bát vừa' },
      { unit: 'bat', weight: 100, description: '1 bát nhỏ' },
    ],
  },
  {
    id: "com-gao-lut",
    name: "Cơm gạo lứt",
    nameEn: "Brown rice",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fat: 0.9,
    fiber: 1.8,
    sodium: 5,
    vitaminB1: 0.18,
    vitaminB2: 0.05,
    vitaminB3: 2.6, // Niacin - cao hơn gạo trắng
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.3,
    vitaminB7: 0, // Biotin
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.17, // Tocopherol - cao hơn gạo trắng
    vitaminK: 0.5, // Phylloquinone
    choline: 9.2, // mg - cao hơn gạo trắng
    selenium: 9.8, // µg - cao hơn gạo trắng
    copper: 0.11, // mg
    manganese: 0.93, // mg - cao hơn gạo trắng
    iodine: 0, // µg
    commonServing: "1 bát vừa (150g)",
    diabetes: {
      glycemicIndex: 55,
      glycemicLoad: 25, // cho 1 bát vừa (~150g)
      carbPerPortion: 45,
    },
    kidney: {
      potassium: 43,
      phosphorus: 83, // cao hơn gạo trắng
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 150, description: '1 bát vừa' },
    ],
  },
  {
    id: "pho-bo",
    name: "Phở bò",
    nameEn: "Beef pho",
    category: "rice-noodles",
    servingSize: 300,
    servingUnit: "g",
    calories: 350,
    protein: 20,
    carbs: 45,
    fat: 8,
    fiber: 2,
    sodium: 1200,
    vitaminB1: 0.1,
    vitaminB2: 0.1,
    vitaminB3: 1.5, // Niacin (từ thịt bò và bánh phở)
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 3,
    vitaminB12: 0.8, // từ thịt bò
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 25, // mg
    selenium: 5.0, // µg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 tô vừa (300g)",
    notes: "Bao gồm bánh phở, thịt bò, nước dùng",
    diabetes: {
      glycemicIndex: 45,
      glycemicLoad: 10, // cho 1 tô vừa
      carbPerPortion: 22, // chỉ bánh phở
    },
    gout: {
      purine: 160, // từ thịt bò
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 50,
      saturatedFat: 3,
    },
    vietnameseUnits: [
      { unit: 'to', weight: 300, description: '1 tô vừa' },
      { unit: 'to', weight: 250, description: '1 tô nhỏ' },
    ],
  },
  {
    id: "bun",
    name: "Bún",
    nameEn: "Rice vermicelli",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 109,
    protein: 1.8,
    carbs: 25,
    fat: 0.2,
    fiber: 0.5,
    sodium: 1,
    vitaminB1: 0.01,
    vitaminB2: 0.01,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 2,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.02, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.0, // mg
    selenium: 3.0, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "100g (1 phần bún)",
    diabetes: {
      glycemicIndex: 53,
      glycemicLoad: 13, // cho 1 tô bún (~100g bún)
      carbPerPortion: 25,
    },
    kidney: {
      potassium: 10,
      phosphorus: 20,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'to', weight: 100, description: '1 tô bún' },
    ],
  },

  // Meat
  {
    id: "thit-heo-nac",
    name: "Thịt heo nạc",
    nameEn: "Lean pork",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 143,
    protein: 27,
    carbs: 0,
    fat: 3.5,
    sodium: 62,
    iron: 0.9,
    vitaminB1: 0.8,
    vitaminB2: 0.2,
    vitaminB3: 5.0, // Niacin - cao trong thịt
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.5,
    vitaminB7: 5.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 0.7,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 75, // mg - cao trong thịt
    selenium: 24.6, // µg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "100g (khoảng 1 lòng bàn tay)",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 80,
      saturatedFat: 1.2,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa (100g)' },
    ],
  },
  {
    id: "thit-ga",
    name: "Thịt gà",
    nameEn: "Chicken",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    sodium: 74,
    iron: 0.9,
    vitaminB1: 0.07,
    vitaminB2: 0.15,
    vitaminB3: 7.7, // Niacin - rất cao trong thịt gà
    vitaminB5: 1.0, // Pantothenic acid
    vitaminB6: 0.5,
    vitaminB7: 4.0, // Biotin (µg)
    folate: 4,
    vitaminB12: 0.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65, // mg
    selenium: 14.3, // µg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "100g (khoảng 1 lòng bàn tay)",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 85,
      saturatedFat: 1, // bỏ da
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa (100g)' },
    ],
  },
  {
    id: "thit-bo",
    name: "Thịt bò",
    nameEn: "Beef",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 15,
    sodium: 72,
    iron: 2.6,
    vitaminB1: 0.05,
    vitaminB2: 0.2,
    vitaminB3: 4.5, // Niacin
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.4,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 9,
    vitaminB12: 2.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 82, // mg
    selenium: 14.2, // µg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "100g (khoảng 1 lòng bàn tay)",
    notes: "Purine cao – không khuyến nghị cho bệnh gút",
    gout: {
      purine: 135, // ~120-150 mg/100g - Purine cao – không khuyến nghị cho bệnh gút
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 70,
      saturatedFat: 6,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa (100g)' },
    ],
  },
  {
    id: "gan-lon",
    name: "Gan lợn",
    nameEn: "Pork liver",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 130,
    protein: 21,
    carbs: 3,
    fat: 3.6,
    sodium: 87,
    iron: 15,
    vitaminB1: 0.3,
    vitaminB2: 2.1, // mg - rất cao trong gan
    vitaminB3: 12.0, // Niacin - rất cao trong gan
    vitaminB5: 5.0, // Pantothenic acid - rất cao trong gan
    vitaminB6: 0.7,
    vitaminB7: 30.0, // Biotin (µg) - rất cao trong gan
    folate: 200, // µg - rất cao trong gan
    vitaminB12: 20.0, // µg - rất cao trong gan
    vitaminD: 20, // IU
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 500, // mg - rất cao trong gan
    selenium: 40.0, // µg - cao trong gan
    copper: 0.5, // mg - cao trong gan
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "100g",
    gout: {
      purine: 300,
      purineLevel: 'very-high',
    },
    kidney: {
      potassium: 300,
      phosphorus: 300,
    },
    cardiovascular: {
      cholesterol: 300,
      saturatedFat: 1.2,
    },
    notes: "Nội tạng có purin và cholesterol rất cao - tránh cho người gút và tim mạch",
  },

  // Seafood
  {
    id: "ca-loc",
    name: "Cá lóc",
    nameEn: "Snakehead fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 19,
    carbs: 0,
    fat: 1.5,
    sodium: 50,
    vitaminB1: 0.1,
    vitaminB2: 0.1,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.3,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 2.0, // µg - cao trong cá
    vitaminD: 4.0, // IU - có trong cá
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 36.5, // µg - rất cao trong cá
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - cao trong cá biển
    commonServing: "100g (1 miếng vừa)",
    gout: {
      purine: 110,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 60,
      saturatedFat: 0.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa (100g)' },
    ],
  },
  {
    id: "tom",
    name: "Tôm",
    nameEn: "Shrimp",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 99,
    protein: 24.0,
    carbs: 0.0,
    fat: 0.3,
    fiber: 0.0,
    sodium: 111,
    calcium: 70,
    iron: 0.5,
    magnesium: 37,
    zinc: 1.3,
    vitaminA: 0,
    vitaminC: 0,
    cardiovascular: {
      cholesterol: 189,
      saturatedFat: 0.1,
    },
    kidney: {
      potassium: 264,
      phosphorus: 220,
    },
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 15,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong hải sản
    vitaminK: 0, // Phylloquinone
    choline: 70, // mg
    selenium: 38.0, // µg - rất cao trong hải sản
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 35, // µg - cao trong hải sản
    commonServing: "100g (khoảng 8-10 con vừa)",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 10, description: '1 con tôm vừa (10g)' },
    ],
  },

  // Vegetables
  {
    id: "rau-muong",
    name: "Rau muống",
    nameEn: "Water spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 2.6,
    carbs: 3.1,
    fat: 0.2,
    fiber: 2.1,
    sodium: 79,
    calcium: 77,
    iron: 1.7,
    vitaminC: 55,
    vitaminA: 3158,
    vitaminB1: 0.03,
    vitaminB2: 0.1,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 57, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - rất cao trong rau lá xanh
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "100g (1 bó nhỏ)",
    diabetes: {
      glycemicIndex: 20,
      glycemicLoad: 1,
      carbPerPortion: 3.1,
    },
    gout: {
      purine: 20,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 100,
      phosphorus: 30,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'bo', weight: 100, description: '1 bó nhỏ' },
    ],
  },
  {
    id: "cai-xanh",
    name: "Cải xanh",
    nameEn: "Chinese cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 16,
    protein: 1.5,
    carbs: 3.2,
    fat: 0.2,
    fiber: 1.2,
    sodium: 65,
    calcium: 105,
    iron: 0.8,
    vitaminC: 36,
    vitaminA: 4468,
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 0, // Biotin
    folate: 66, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "100g",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0.5,
      carbPerPortion: 3.2,
    },
    gout: {
      purine: 15,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 170,
      phosphorus: 30,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
  },
  {
    id: "ca-chua",
    name: "Cà chua",
    nameEn: "Tomato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    fiber: 1.2,
    sodium: 5,
    calcium: 10,
    iron: 0.3,
    vitaminC: 14,
    vitaminA: 833,
    vitaminB1: 0.04,
    vitaminB2: 0.02,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 15, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.2, // µg
    copper: 0.06, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "100g (1-2 quả vừa)",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0.6,
      carbPerPortion: 3.9,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 237,
      phosphorus: 24,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1-2 quả vừa' },
    ],
  },
  {
    id: "khoai-tay",
    name: "Khoai tây",
    nameEn: "Potato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 77,
    protein: 2,
    carbs: 17,
    fat: 0.1,
    fiber: 2.2,
    sodium: 6,
    calcium: 12,
    iron: 0.8,
    vitaminC: 19.7,
    vitaminB1: 0.08,
    vitaminB2: 0.03,
    vitaminB3: 1.1, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.3, // mg - cao trong khoai tây
    vitaminB7: 0, // Biotin
    folate: 15, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 2.0, // Phylloquinone
    choline: 12.1, // mg
    selenium: 0.3, // µg
    copper: 0.11, // mg
    manganese: 0.15, // mg
    iodine: 0, // µg
    commonServing: "100g (1 củ vừa)",
    diabetes: {
      glycemicIndex: 78,
      glycemicLoad: 13,
      carbPerPortion: 17,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 421, // Rất cao!
      phosphorus: 57,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    notes: "Kali rất cao - hạn chế cho người bệnh thận",
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 củ vừa' },
    ],
  },
  {
    id: "khoai-lang",
    name: "Khoai lang",
    nameEn: "Sweet potato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    sodium: 54,
    calcium: 30,
    iron: 0.6,
    vitaminC: 2.4,
    vitaminA: 14187,
    vitaminB1: 0.1,
    vitaminB2: 0.1,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.8, // Pantothenic acid - cao trong khoai lang
    vitaminB6: 0.2,
    vitaminB7: 0, // Biotin
    folate: 11, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.8, // Phylloquinone
    choline: 12.2, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // µg
    commonServing: "100g (1 củ vừa)",
    diabetes: {
      glycemicIndex: 54,
      glycemicLoad: 11,
      carbPerPortion: 20,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 337, // Cao
      phosphorus: 47,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 củ vừa' },
    ],
  },

  // Fruits
  {
    id: "chuoi",
    name: "Chuối",
    nameEn: "Banana",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    fiber: 2.6,
    sodium: 1,
    calcium: 5,
    iron: 0.3,
    vitaminC: 8.7,
    vitaminB1: 0.03,
    vitaminB2: 0.07,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.4, // mg - cao trong chuối
    vitaminB7: 0, // Biotin
    folate: 20, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // µg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // µg
    commonServing: "100g (1 quả vừa)",
    diabetes: {
      glycemicIndex: 51, // chín vừa
      glycemicLoad: 12,
      carbPerPortion: 23,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 358, // Rất cao!
      phosphorus: 22,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    notes: "Kali rất cao - hạn chế cho người bệnh thận",
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },
  {
    id: "cam",
    name: "Cam",
    nameEn: "Orange",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 47,
    protein: 0.9,
    carbs: 12,
    fat: 0.1,
    fiber: 2.4,
    sodium: 0,
    calcium: 40,
    iron: 0.1,
    vitaminC: 53.2,
    vitaminA: 225,
    vitaminB1: 0.1,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 30, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // µg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // µg
    commonServing: "100g (1 quả vừa)",
    diabetes: {
      glycemicIndex: 42,
      glycemicLoad: 5,
      carbPerPortion: 12,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 181,
      phosphorus: 14,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },
  {
    id: "tao",
    name: "Táo",
    nameEn: "Apple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    sodium: 1,
    calcium: 6,
    iron: 0.1,
    vitaminC: 4.6,
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 3, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.2, // Phylloquinone
    choline: 3.4, // mg
    selenium: 0.0, // µg
    copper: 0.03, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "100g (1 quả vừa)",
    diabetes: {
      glycemicIndex: 36,
      glycemicLoad: 5,
      carbPerPortion: 14,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 107,
      phosphorus: 12,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },

  // Legumes
  {
    id: "dau-phu",
    name: "Đậu phụ",
    nameEn: "Tofu",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 76,
    protein: 8,
    carbs: 1.9,
    fat: 4.8,
    fiber: 0.3,
    sodium: 7,
    calcium: 350,
    iron: 5.4,
    vitaminB1: 0.2,
    vitaminB2: 0.1,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 15, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.4, // Phylloquinone
    choline: 35, // mg
    selenium: 8.9, // µg
    copper: 0.2, // mg
    manganese: 0.6, // mg - cao trong đậu
    iodine: 0, // µg
    commonServing: "100g (1 miếng vừa)",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0.3,
      carbPerPortion: 1.9,
    },
    gout: {
      purine: 50,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 150,
      phosphorus: 120,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.7,
    },
    notes: "Đạm thực vật, tốt cho tim mạch và người gút",
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa' },
    ],
  },
  {
    id: "dau-xanh",
    name: "Đậu xanh",
    nameEn: "Mung beans",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 347,
    protein: 24,
    carbs: 63,
    fat: 1.2,
    fiber: 16.3,
    sodium: 15,
    calcium: 132,
    iron: 6.7,
    vitaminB1: 0.62,
    vitaminB2: 0.23,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 1.9, // Pantothenic acid - cao trong đậu
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 625, // µg - rất cao trong đậu
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 9.0, // Phylloquinone
    choline: 97.9, // mg - rất cao trong đậu
    selenium: 2.5, // µg
    copper: 0.9, // mg - cao trong đậu
    manganese: 1.0, // mg - cao trong đậu
    iodine: 0, // µg
    commonServing: "100g (nấu chín)",
    diabetes: {
      glycemicIndex: 25,
      glycemicLoad: 16,
      carbPerPortion: 63,
    },
    gout: {
      purine: 50,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 400, // Rất cao!
      phosphorus: 400, // Rất cao!
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.3,
    },
    notes: "Kali và phốt pho rất cao - hạn chế cho người bệnh thận",
  },

  // Condiments
  {
    id: "nuoc-mam",
    name: "Nước mắm",
    nameEn: "Fish sauce",
    category: "condiments",
    servingSize: 15,
    servingUnit: "ml",
    calories: 8,
    protein: 1.3,
    carbs: 0.8,
    fat: 0,
    sodium: 1500,
    vitaminB1: 0,
    vitaminB2: 0,
    vitaminB3: 0, // Niacin
    vitaminB5: 0, // Pantothenic acid
    vitaminB6: 0,
    vitaminB7: 0, // Biotin
    folate: 0, // µg
    vitaminB12: 0.1, // µg - từ cá
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0, // µg
    copper: 0, // mg
    manganese: 0, // mg
    iodine: 0, // µg
    commonServing: "1 muỗng canh (15ml)",
    notes: "Rất nhiều natri - dùng ít cho người tăng huyết áp",
    kidney: {
      potassium: 50,
      phosphorus: 10,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 15, description: '1 muỗng canh (15ml)' },
      { unit: 'thia-ca-phe', weight: 5, description: '1 muỗng cà phê (5ml)' },
    ],
  },
  // ========================================================================
  // Bổ sung thêm rau lá & trái cây (phần 36–37: 186–200)
  // ========================================================================
  {
    id: "rau-den-veg16",
    name: "Rau dền",
    nameEn: "Amaranth leaves",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.5,
    carbs: 4.0,
    fat: 0.3,
    fiber: 2.2,
    water: 92.0,
    sodium: 12,
    calcium: 215,
    iron: 2.3,
    magnesium: 55,
    zinc: 0.9,
    vitaminA: 291,
    vitaminC: 43.0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 85, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - rất cao trong rau dền
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dền
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Rất giàu kali; CKD cần hạn chế.",
    kidney: { potassium: 611, phosphorus: 43 },
  },
  {
    id: "rau-day",
    name: "Rau đay",
    nameEn: "Jute leaves",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 34,
    protein: 4.0,
    carbs: 5.8,
    fat: 0.6,
    fiber: 2.0,
    water: 87.0,
    sodium: 15,
    calcium: 182,
    iron: 3.3,
    magnesium: 65,
    zinc: 0.7,
    vitaminA: 3800,
    vitaminC: 53.0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.16,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 140, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 380, // Phylloquinone - rất cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Nhiều chất nhầy, tốt tiêu hóa.",
    kidney: { potassium: 510, phosphorus: 55 },
  },
  {
    id: "tan-o",
    name: "Rau tần ô",
    nameEn: "Crown daisy",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.9,
    carbs: 3.9,
    fat: 0.4,
    fiber: 1.6,
    water: 92.0,
    sodium: 18,
    calcium: 120,
    iron: 1.5,
    magnesium: 45,
    zinc: 0.6,
    vitaminA: 4200,
    vitaminC: 11.0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    kidney: { potassium: 340, phosphorus: 50 },
    vitaminB1: 0.06,
    vitaminB2: 0.10,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 105, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 250, // Phylloquinone - rất cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Rau lẩu phổ biến.",
  },
  {
    id: "hanh-la",
    name: "Hành lá",
    nameEn: "Spring onion",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 32,
    protein: 1.8,
    carbs: 7.3,
    fat: 0.2,
    sugars: 2.3,
    fiber: 2.6,
    water: 89.0,
    sodium: 16,
    potassium: 276,
    calcium: 72,
    iron: 1.5,
    phosphorus: 37,
    magnesium: 20,
    zinc: 0.4,
    vitaminA: 997,
    vitaminC: 18.8,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.13,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 64, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 207, // Phylloquinone - cao trong hành lá
    choline: 5.7, // mg
    selenium: 0.5, // µg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Dùng gia vị",
    notes: "Ăn lượng nhỏ.",
    kidney: { potassium: 276, phosphorus: 37 },
  },
  {
    id: "hung-que",
    name: "Húng quế",
    nameEn: "Sweet basil",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 3.2,
    carbs: 2.7,
    fat: 0.6,
    fiber: 1.6,
    water: 92.0,
    sodium: 4,
    potassium: 295,
    calcium: 177,
    iron: 3.2,
    phosphorus: 56,
    magnesium: 64,
    zinc: 0.8,
    vitaminA: 5275,
    vitaminC: 18.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.08,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 68, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 415, // Phylloquinone - rất cao trong húng quế
    choline: 11.4, // mg
    selenium: 0.3, // µg
    copper: 0.4, // mg - cao trong húng quế
    manganese: 1.1, // mg - cao trong húng quế
    iodine: 0, // µg
    commonServing: "Ăn kèm",
    notes: "Rau gia vị, giàu vi chất.",
    kidney: { potassium: 295, phosphorus: 56 },
  },
  {
    id: "ca-tim",
    name: "Cà tím",
    nameEn: "Eggplant",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 1.0,
    carbs: 5.9,
    fat: 0.2,
    sugars: 3.5,
    fiber: 3.0,
    water: 93.0,
    sodium: 2,
    potassium: 229,
    calcium: 9,
    iron: 0.2,
    phosphorus: 24,
    magnesium: 14,
    zinc: 0.2,
    vitaminA: 23,
    vitaminC: 2.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.04,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 22, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 3.5, // Phylloquinone
    choline: 6.9, // mg
    selenium: 0.3, // µg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 quả nhỏ (~100g)",
    notes: "Ít năng lượng.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 229, phosphorus: 24 },
  },
  {
    id: "dau-bap",
    name: "Đậu bắp",
    nameEn: "Okra",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 33,
    protein: 1.9,
    carbs: 7.5,
    fat: 0.2,
    sugars: 1.5,
    fiber: 3.2,
    water: 90.0,
    sodium: 7,
    potassium: 299,
    calcium: 82,
    iron: 0.6,
    phosphorus: 61,
    magnesium: 57,
    zinc: 0.6,
    vitaminA: 716,
    vitaminC: 23.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.20,
    vitaminB2: 0.06,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 0, // Biotin
    folate: 60, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 31.3, // Phylloquinone
    choline: 12.3, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong đậu bắp
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Chất nhầy tốt tiêu hóa.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 2, carbPerPortion: 7 },
    kidney: { potassium: 299, phosphorus: 61 },
  },
  {
    id: "kho-qua",
    name: "Khổ qua",
    nameEn: "Bitter melon",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 17,
    protein: 1.0,
    carbs: 3.7,
    fat: 0.2,
    sugars: 1.0,
    fiber: 2.8,
    water: 94.0,
    sodium: 6,
    potassium: 296,
    calcium: 19,
    iron: 0.4,
    phosphorus: 31,
    magnesium: 17,
    zinc: 0.2,
    vitaminA: 471,
    vitaminC: 84.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 72, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.8, // Phylloquinone
    choline: 12.8, // mg
    selenium: 0.2, // µg
    copper: 0.03, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Hay dùng cho ĐTĐ.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 296, phosphorus: 31 },
  },
  {
    id: "muop-huong",
    name: "Mướp hương",
    nameEn: "Angled luffa",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 20,
    protein: 0.8,
    carbs: 4.4,
    fat: 0.2,
    sugars: 1.5,
    fiber: 1.1,
    water: 93.0,
    sodium: 3,
    potassium: 150,
    calcium: 18,
    iron: 0.5,
    phosphorus: 30,
    magnesium: 14,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 9.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 25, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.3, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.2, // µg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 khúc (~100g)",
    notes: "Thanh mát.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 150, phosphorus: 30 },
  },
  {
    id: "chuoi-tieu",
    name: "Chuối tiêu",
    nameEn: "Banana",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    sugars: 12.2,
    fiber: 2.6,
    water: 74.0,
    sodium: 1,
    potassium: 358,
    calcium: 5,
    iron: 0.3,
    phosphorus: 22,
    magnesium: 27,
    zinc: 0.2,
    vitaminA: 64,
    vitaminC: 8.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.07,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.40, // mg - cao trong chuối
    vitaminB7: 0, // Biotin
    folate: 20, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // µg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Kali cao; CKD lưu ý.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 13, carbPerPortion: 26 },
    kidney: { potassium: 358, phosphorus: 22 },
  },
  {
    id: "cam-sanh",
    name: "Cam sành",
    nameEn: "Orange",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 47,
    protein: 0.9,
    carbs: 11.8,
    fat: 0.1,
    sugars: 9.4,
    fiber: 2.4,
    water: 86.0,
    sodium: 0,
    potassium: 181,
    calcium: 40,
    iron: 0.1,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 225,
    vitaminC: 53.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 30, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // µg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~130g)",
    notes: "Vitamin C cao.",
    diabetes: { glycemicIndex: 43, glycemicLoad: 5, carbPerPortion: 15 },
    kidney: { potassium: 181, phosphorus: 14 },
  },
  {
    id: "quyt",
    name: "Quýt",
    nameEn: "Mandarin",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 53,
    protein: 0.8,
    carbs: 13.3,
    fat: 0.3,
    sugars: 10.6,
    fiber: 1.8,
    water: 85.0,
    sodium: 2,
    potassium: 166,
    calcium: 37,
    iron: 0.2,
    phosphorus: 20,
    magnesium: 12,
    zinc: 0.1,
    vitaminA: 681,
    vitaminC: 26.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 16, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.1, // µg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Ngọt vừa.",
    diabetes: { glycemicIndex: 42, glycemicLoad: 6, carbPerPortion: 13 },
    kidney: { potassium: 166, phosphorus: 20 },
  },
  {
    id: "vu-sua",
    name: "Vú sữa",
    nameEn: "Star apple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 67,
    protein: 0.9,
    carbs: 16.2,
    fat: 0.4,
    sugars: 14.7,
    fiber: 3.3,
    water: 80.0,
    sodium: 10,
    potassium: 212,
    calcium: 14,
    iron: 0.5,
    phosphorus: 26,
    magnesium: 20,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 14.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.05,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 12, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1/2 quả (~100g)",
    notes: "Nhiều xơ hòa tan.",
    diabetes: { glycemicIndex: 48, glycemicLoad: 8, carbPerPortion: 16 },
    kidney: { potassium: 212, phosphorus: 26 },
  },
  {
    id: "chom-chom",
    name: "Chôm chôm",
    nameEn: "Rambutan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 68,
    protein: 0.9,
    carbs: 16.5,
    fat: 0.2,
    sugars: 13.0,
    fiber: 0.9,
    water: 82.0,
    sodium: 11,
    potassium: 42,
    calcium: 22,
    iron: 0.4,
    phosphorus: 16,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 4.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.02,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 8, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.4, // mg
    selenium: 0.3, // µg
    copper: 0.07, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "5–6 quả (~100g)",
    notes: "Ngọt; ĐTĐ ăn vừa.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 9, carbPerPortion: 17 },
    kidney: { potassium: 42, phosphorus: 16 },
  },
  {
    id: "nhan",
    name: "Nhãn",
    nameEn: "Longan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 60,
    protein: 1.3,
    carbs: 15.1,
    fat: 0.1,
    sugars: 13.0,
    fiber: 1.1,
    water: 83.0,
    sodium: 0,
    potassium: 266,
    calcium: 1,
    iron: 0.1,
    phosphorus: 21,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 84.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.14,
    vitaminB6: 0.10,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "10–12 quả (~100g)",
    notes: "Đường cao.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 9, carbPerPortion: 15 },
    kidney: { potassium: 266, phosphorus: 21 },
  },
  // ========================================================================
  // Bổ sung nhóm rau lá, củ, trái cây phổ biến (phần 38–40)
  // ========================================================================
  {
    id: "cai-thia-veg25",
    name: "Rau cải thìa",
    nameEn: "Bok choy",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 13,
    protein: 1.5,
    carbs: 2.2,
    fat: 0.2,
    fiber: 1.0,
    water: 95.0,
    sodium: 45,
    potassium: 252,
    calcium: 105,
    iron: 0.8,
    phosphorus: 37,
    magnesium: 19,
    zinc: 0.3,
    vitaminA: 2230,
    vitaminC: 45.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.07,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.09,
    vitaminB7: 0, // Biotin
    folate: 66, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Ít kcal; giàu canxi.",
    kidney: { potassium: 252, phosphorus: 37 },
  },
  {
    id: "cai-be-xanh",
    name: "Rau cải bẹ xanh",
    nameEn: "Mustard greens",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 2.9,
    carbs: 4.7,
    fat: 0.4,
    fiber: 2.0,
    water: 92.0,
    sodium: 20,
    potassium: 384,
    calcium: 115,
    iron: 1.6,
    phosphorus: 58,
    magnesium: 27,
    zinc: 0.5,
    vitaminA: 1510,
    vitaminC: 70.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.15,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 75, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 257, // Phylloquinone - rất cao trong rau cải
    choline: 19.5, // mg
    selenium: 0.8, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Giàu kali; CKD chú ý.",
    kidney: { potassium: 384, phosphorus: 58 },
  },
  {
    id: "xa-lach",
    name: "Rau xà lách",
    nameEn: "Lettuce",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2,
    sugars: 0.8,
    fiber: 1.3,
    water: 95.0,
    sodium: 28,
    potassium: 194,
    calcium: 36,
    iron: 0.9,
    phosphorus: 29,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 740,
    vitaminC: 9.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.07,
    vitaminB2: 0.08,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.09,
    vitaminB7: 0, // Biotin
    folate: 38, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 126.3, // Phylloquinone - rất cao trong xà lách
    choline: 9.9, // mg
    selenium: 0.2, // µg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Ít năng lượng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 194, phosphorus: 29 },
  },
  {
    id: "tia-to",
    name: "Tía tô",
    nameEn: "Perilla leaves",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 34,
    protein: 3.9,
    carbs: 6.1,
    fat: 0.8,
    fiber: 2.8,
    water: 87.0,
    sodium: 4,
    potassium: 500,
    calcium: 224,
    iron: 3.1,
    phosphorus: 63,
    magnesium: 55,
    zinc: 0.9,
    vitaminA: 5200,
    vitaminC: 43.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.10,
    vitaminB2: 0.15,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 100, // µg - cao trong tía tô
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 690, // Phylloquinone - rất cao trong tía tô
    choline: 35.3, // mg - cao trong tía tô
    selenium: 0.3, // µg
    copper: 0.3, // mg - cao trong tía tô
    manganese: 1.2, // mg - cao trong tía tô
    iodine: 0, // µg
    commonServing: "Ăn kèm",
    notes: "Rau gia vị, giàu vi chất.",
    kidney: { potassium: 500, phosphorus: 63 },
  },
  {
    id: "khoai-lang-veg29",
    name: "Khoai lang",
    nameEn: "Sweet potato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 86,
    protein: 1.6,
    carbs: 20.1,
    fat: 0.1,
    sugars: 4.2,
    fiber: 3.0,
    water: 77.0,
    sodium: 55,
    potassium: 337,
    calcium: 30,
    iron: 0.6,
    phosphorus: 47,
    magnesium: 25,
    zinc: 0.3,
    vitaminA: 14187,
    vitaminC: 2.4,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.8, // Pantothenic acid - cao trong khoai lang
    vitaminB6: 0.21,
    vitaminB7: 0, // Biotin
    folate: 11, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.8, // Phylloquinone
    choline: 12.2, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // µg
    commonServing: "1 củ (~100g)",
    notes: "Tinh bột; GI trung bình.",
    diabetes: { glycemicIndex: 44, glycemicLoad: 9, carbPerPortion: 20 },
    kidney: { potassium: 337, phosphorus: 47 },
  },
  {
    id: "khoai-mon",
    name: "Khoai môn",
    nameEn: "Taro root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 112,
    protein: 1.5,
    carbs: 26.5,
    fat: 0.2,
    sugars: 0.4,
    fiber: 4.1,
    water: 70.0,
    sodium: 11,
    potassium: 591,
    calcium: 43,
    iron: 0.6,
    phosphorus: 84,
    magnesium: 33,
    zinc: 0.5,
    vitaminA: 76,
    vitaminC: 4.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.10,
    vitaminB2: 0.03,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.27,
    vitaminB7: 0, // Biotin
    folate: 22, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 9.2, // mg
    selenium: 0.7, // µg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Kali cao; CKD hạn chế.",
    diabetes: { glycemicIndex: 54, glycemicLoad: 14, carbPerPortion: 27 },
    kidney: { potassium: 591, phosphorus: 84 },
  },
  {
    id: "bap-ngo",
    name: "Bắp (ngô)",
    nameEn: "Corn",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 96,
    protein: 3.4,
    carbs: 21.0,
    fat: 1.5,
    sugars: 4.5,
    fiber: 2.4,
    water: 73.0,
    sodium: 15,
    potassium: 270,
    calcium: 2,
    iron: 0.5,
    phosphorus: 89,
    magnesium: 37,
    zinc: 0.5,
    vitaminA: 187,
    vitaminC: 6.8,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.20,
    vitaminB2: 0.10,
    vitaminB3: 1.7, // Niacin - cao trong bắp ngô
    vitaminB5: 0.7, // Pantothenic acid - cao trong bắp ngô
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 42, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 23.0, // mg - cao trong bắp ngô
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 trái nhỏ (~100g)",
    notes: "Tinh bột; ĐTĐ ăn vừa.",
    diabetes: { glycemicIndex: 52, glycemicLoad: 11, carbPerPortion: 21 },
    kidney: { potassium: 270, phosphorus: 89 },
  },
  {
    id: "xoai-chin-fr18",
    name: "Xoài chín",
    nameEn: "Ripe mango",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 60,
    protein: 0.8,
    carbs: 15.0,
    fat: 0.4,
    sugars: 13.7,
    fiber: 1.6,
    water: 83.0,
    sodium: 1,
    potassium: 168,
    calcium: 11,
    iron: 0.2,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 1082,
    vitaminC: 36.4,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 43, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Ngọt; ĐTĐ ăn vừa.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 168, phosphorus: 14 },
  },
  {
    id: "xoai-xanh",
    name: "Xoài xanh",
    nameEn: "Green mango",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 38,
    protein: 0.6,
    carbs: 9.0,
    fat: 0.2,
    sugars: 6.0,
    fiber: 1.8,
    water: 88.0,
    sodium: 2,
    potassium: 156,
    calcium: 14,
    iron: 0.2,
    phosphorus: 16,
    magnesium: 11,
    zinc: 0.1,
    vitaminA: 540,
    vitaminC: 27.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 38, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Chua; GI thấp.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 3, carbPerPortion: 9 },
    kidney: { potassium: 156, phosphorus: 16 },
  },
  {
    id: "dua-hau-fr20",
    name: "Dưa hấu",
    nameEn: "Watermelon",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 30,
    protein: 0.6,
    carbs: 7.6,
    fat: 0.2,
    sugars: 6.2,
    fiber: 0.4,
    water: 91.0,
    sodium: 2,
    potassium: 112,
    calcium: 7,
    iron: 0.2,
    phosphorus: 11,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 569,
    vitaminC: 8.1,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.02,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 3, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.1, // mg
    selenium: 0.4, // µg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Nhiều nước; GI cao.",
    diabetes: { glycemicIndex: 72, glycemicLoad: 5, carbPerPortion: 8 },
    kidney: { potassium: 112, phosphorus: 11 },
  },
  {
    id: "thanh-long-fr21",
    name: "Thanh long",
    nameEn: "Dragon fruit",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 50,
    protein: 1.1,
    carbs: 11.0,
    fat: 0.4,
    sugars: 8.0,
    fiber: 3.0,
    water: 85.0,
    sodium: 1,
    potassium: 277,
    calcium: 18,
    iron: 0.6,
    phosphorus: 36,
    magnesium: 40,
    zinc: 0.4,
    vitaminA: 5,
    vitaminC: 2.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 7, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.1, // mg
    selenium: 0.0, // µg
    copper: 0.0, // mg
    manganese: 0.0, // mg
    iodine: 0, // µg
    commonServing: "1/2 quả (~100g)",
    notes: "Nhiều xơ; tốt tiêu hóa.",
    diabetes: { glycemicIndex: 48, glycemicLoad: 5, carbPerPortion: 11 },
    kidney: { potassium: 277, phosphorus: 36 },
  },
  {
    id: "bo",
    name: "Bơ",
    nameEn: "Avocado",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 160,
    protein: 2.0,
    carbs: 8.5,
    fat: 14.7,
    sugars: 0.7,
    fiber: 6.7,
    water: 73.0,
    sodium: 7,
    potassium: 485,
    calcium: 12,
    iron: 0.6,
    phosphorus: 52,
    magnesium: 29,
    zinc: 0.6,
    vitaminA: 146,
    vitaminC: 10.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 2.1 },
    vitaminB1: 0.07,
    vitaminB2: 0.13,
    vitaminB3: 1.7, // Niacin
    vitaminB5: 1.4, // Pantothenic acid - cao trong bơ
    vitaminB6: 0.26,
    vitaminB7: 0, // Biotin
    folate: 81, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 2.1, // Tocopherol - cao trong bơ
    vitaminK: 21.0, // Phylloquinone - cao trong bơ
    choline: 14.2, // mg
    selenium: 0.4, // µg
    copper: 0.19, // mg
    manganese: 0.14, // mg
    iodine: 0, // µg
    commonServing: "1/2 quả (~100g)",
    notes: "Giàu chất béo tốt; kali cao.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 9 },
    kidney: { potassium: 485, phosphorus: 52 },
  },
  // ========================================================================
  // Bổ sung thêm rau lá & trái cây (phần 42: 213–224)
  // ========================================================================
  {
    id: "cai-bo-xoi",
    name: "Cải bó xôi",
    nameEn: "Spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    sugars: 0.4,
    fiber: 2.2,
    water: 91.0,
    sodium: 79,
    potassium: 558,
    calcium: 99,
    iron: 2.7,
    phosphorus: 49,
    magnesium: 79,
    zinc: 0.5,
    vitaminA: 9377,
    vitaminC: 28.1,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.19,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 194, // µg - rất cao trong cải bó xôi
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 2.0, // Tocopherol - cao trong cải bó xôi
    vitaminK: 482.9, // Phylloquinone - rất cao trong cải bó xôi
    choline: 19.3, // mg
    selenium: 1.0, // µg
    copper: 0.1, // mg
    manganese: 0.9, // mg - cao trong cải bó xôi
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Giàu sắt & folate; CKD chú ý kali.",
    kidney: { potassium: 558, phosphorus: 49 },
  },
  {
    id: "bap-cai-trang",
    name: "Bắp cải trắng",
    nameEn: "White cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 1.3,
    carbs: 5.8,
    fat: 0.1,
    sugars: 3.2,
    fiber: 2.5,
    water: 92.0,
    sodium: 18,
    potassium: 170,
    calcium: 40,
    iron: 0.5,
    phosphorus: 26,
    magnesium: 12,
    zinc: 0.2,
    vitaminA: 98,
    vitaminC: 36.6,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 43, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 76, // Phylloquinone - cao trong bắp cải
    choline: 10.7, // mg
    selenium: 0.3, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Ít kcal; dễ ăn.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 170, phosphorus: 26 },
  },
  {
    id: "bap-cai-tim",
    name: "Bắp cải tím",
    nameEn: "Red cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 31,
    protein: 1.4,
    carbs: 7.4,
    fat: 0.2,
    sugars: 3.8,
    fiber: 2.1,
    water: 91.0,
    sodium: 27,
    potassium: 243,
    calcium: 45,
    iron: 0.8,
    phosphorus: 30,
    magnesium: 16,
    zinc: 0.3,
    vitaminA: 1116,
    vitaminC: 57.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.07,
    vitaminB2: 0.05,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 43, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 38.2, // Phylloquinone
    choline: 12.0, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Chống oxy hóa tốt.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 243, phosphorus: 30 },
  },
  {
    id: "ca-chua-veg35",
    name: "Cà chua",
    nameEn: "Tomato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    sugars: 2.6,
    fiber: 1.2,
    water: 95.0,
    sodium: 5,
    potassium: 237,
    calcium: 10,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 11,
    zinc: 0.2,
    vitaminA: 833,
    vitaminC: 13.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.02,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 15, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.0, // µg
    copper: 0.11, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 quả vừa (~100g)",
    notes: "Giàu lycopene.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 237, phosphorus: 24 },
  },
  {
    id: "dua-leo-veg36",
    name: "Dưa leo",
    nameEn: "Cucumber",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    sugars: 1.5,
    fiber: 0.5,
    water: 96.0,
    sodium: 2,
    potassium: 147,
    calcium: 16,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 105,
    vitaminC: 2.8,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 7, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 16.4, // Phylloquinone
    choline: 6.0, // mg
    selenium: 0.3, // µg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Nhiều nước; THA phù hợp.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 147, phosphorus: 24 },
  },
  {
    id: "hanh-tay",
    name: "Hành tây",
    nameEn: "Onion",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    sugars: 4.2,
    fiber: 1.7,
    water: 89.0,
    sodium: 4,
    potassium: 146,
    calcium: 23,
    iron: 0.2,
    phosphorus: 29,
    magnesium: 10,
    zinc: 0.2,
    vitaminA: 2,
    vitaminC: 7.4,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.02,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 19, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.5, // µg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 củ nhỏ (~100g)",
    notes: "Gia vị quen thuộc.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 9 },
    kidney: { potassium: 146, phosphorus: 29 },
  },
  {
    id: "toi",
    name: "Tỏi",
    nameEn: "Garlic",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 149,
    protein: 6.4,
    carbs: 33.1,
    fat: 0.5,
    sugars: 1.0,
    fiber: 2.1,
    water: 59.0,
    sodium: 17,
    potassium: 401,
    calcium: 181,
    iron: 1.7,
    phosphorus: 153,
    magnesium: 25,
    zinc: 1.2,
    vitaminA: 9,
    vitaminC: 31.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.20,
    vitaminB2: 0.11,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.6, // Pantothenic acid - cao trong tỏi
    vitaminB6: 1.24, // mg - rất cao trong tỏi
    vitaminB7: 0, // Biotin
    folate: 3, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.7, // Phylloquinone
    choline: 23.2, // mg - cao trong tỏi
    selenium: 14.2, // µg - rất cao trong tỏi
    copper: 0.3, // mg - cao trong tỏi
    manganese: 1.7, // mg - rất cao trong tỏi
    iodine: 0, // µg
    commonServing: "Ăn lượng nhỏ",
    notes: "Gia vị; nhiều vi chất.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 10, carbPerPortion: 33 },
    kidney: { potassium: 401, phosphorus: 153 },
  },
  {
    id: "tao-ta",
    name: "Táo ta",
    nameEn: "Apple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 52,
    protein: 0.3,
    carbs: 13.8,
    fat: 0.2,
    sugars: 10.4,
    fiber: 2.4,
    water: 86.0,
    sodium: 1,
    potassium: 107,
    calcium: 6,
    iron: 0.1,
    phosphorus: 11,
    magnesium: 5,
    zinc: 0.0,
    vitaminA: 54,
    vitaminC: 4.6,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 3, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.2, // Phylloquinone
    choline: 3.4, // mg
    selenium: 0.0, // µg
    copper: 0.03, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "GI thấp–trung bình.",
    diabetes: { glycemicIndex: 36, glycemicLoad: 5, carbPerPortion: 14 },
    kidney: { potassium: 107, phosphorus: 11 },
  },
  {
    id: "le-fr24",
    name: "Lê",
    nameEn: "Pear",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 57,
    protein: 0.4,
    carbs: 15.2,
    fat: 0.1,
    sugars: 9.8,
    fiber: 3.1,
    water: 84.0,
    sodium: 1,
    potassium: 119,
    calcium: 9,
    iron: 0.2,
    phosphorus: 12,
    magnesium: 7,
    zinc: 0.1,
    vitaminA: 23,
    vitaminC: 4.3,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 7, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.4, // Phylloquinone
    choline: 5.1, // mg
    selenium: 0.0, // µg
    copper: 0.08, // mg
    manganese: 0.05, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Nhiều xơ.",
    diabetes: { glycemicIndex: 38, glycemicLoad: 6, carbPerPortion: 15 },
    kidney: { potassium: 119, phosphorus: 12 },
  },
  {
    id: "du-du-chin-fr25",
    name: "Đu đủ chín",
    nameEn: "Papaya",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 43,
    protein: 0.5,
    carbs: 10.8,
    fat: 0.3,
    sugars: 7.8,
    fiber: 1.7,
    water: 88.0,
    sodium: 8,
    potassium: 182,
    calcium: 20,
    iron: 0.3,
    phosphorus: 10,
    magnesium: 21,
    zinc: 0.1,
    vitaminA: 950,
    vitaminC: 60.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 37, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Tốt tiêu hóa.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 7, carbPerPortion: 11 },
    kidney: { potassium: 182, phosphorus: 10 },
  },
  {
    id: "man-roi",
    name: "Mận (roi)",
    nameEn: "Rose apple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 0.6,
    carbs: 5.7,
    fat: 0.3,
    sugars: 3.0,
    fiber: 1.0,
    water: 93.0,
    sodium: 3,
    potassium: 123,
    calcium: 29,
    iron: 0.1,
    phosphorus: 15,
    magnesium: 12,
    zinc: 0.1,
    vitaminA: 17,
    vitaminC: 22.3,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 5, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 4.6, // mg
    selenium: 0.0, // µg
    copper: 0.02, // mg
    manganese: 0.0, // mg
    iodine: 0, // µg
    commonServing: "2–3 quả (~100g)",
    notes: "Ít năng lượng.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 123, phosphorus: 15 },
  },
  {
    id: "me-chin",
    name: "Me chín",
    nameEn: "Tamarind",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 239,
    protein: 2.8,
    carbs: 62.5,
    fat: 0.6,
    sugars: 57.4,
    fiber: 5.1,
    water: 31.0,
    sodium: 28,
    potassium: 628,
    calcium: 74,
    iron: 2.8,
    phosphorus: 113,
    magnesium: 92,
    zinc: 1.0,
    vitaminA: 30,
    vitaminC: 3.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.43, // mg - cao trong me
    vitaminB2: 0.15,
    vitaminB3: 1.9, // Niacin - cao trong me
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 14, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 2.8, // Phylloquinone
    choline: 8.6, // mg
    selenium: 1.3, // µg
    copper: 0.9, // mg - cao trong me
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn lượng nhỏ",
    notes: "Đường rất cao.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 40, carbPerPortion: 63 },
    kidney: { potassium: 628, phosphorus: 113 },
  },
  // ========================================================================
  // Tinh bột nguyên cám / GI thấp + sữa & dưa muối + món sáng & đặc biệt (225–240)
  // ========================================================================
  {
    id: "banh-mi-nguyen-cam",
    name: "Bánh mì nguyên cám",
    nameEn: "Whole wheat bread",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 247,
    protein: 13.0,
    carbs: 41.0,
    fat: 4.2,
    sugars: 6.0,
    fiber: 7.0,
    water: 34.0,
    sodium: 430,
    potassium: 250,
    calcium: 107,
    iron: 3.6,
    phosphorus: 210,
    magnesium: 80,
    zinc: 1.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.6 },
    vitaminB1: 0.42,
    vitaminB2: 0.18,
    vitaminB3: 4.0, // Niacin - cao trong bánh mì nguyên cám
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 0, // Biotin
    folate: 40, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 26.0, // mg
    selenium: 35.0, // µg - cao trong bánh mì nguyên cám
    copper: 0.4, // mg
    manganese: 2.0, // mg - cao trong bánh mì nguyên cám
    iodine: 0, // µg
    commonServing: "2 lát (~60g)",
    notes: "Carb phức; GI thấp hơn bánh mì trắng.",
    diabetes: { glycemicIndex: 50, glycemicLoad: 12, carbPerPortion: 25 },
    kidney: { potassium: 250, phosphorus: 210 },
  },
  {
    id: "banh-mi-den",
    name: "Bánh mì đen (rye)",
    nameEn: "Rye bread",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 259,
    protein: 8.5,
    carbs: 48.0,
    fat: 3.3,
    sugars: 4.0,
    fiber: 6.5,
    water: 35.0,
    sodium: 600,
    potassium: 240,
    calcium: 73,
    iron: 2.5,
    phosphorus: 190,
    magnesium: 60,
    zinc: 1.1,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.5 },
    vitaminB1: 0.38,
    vitaminB2: 0.16,
    vitaminB3: 3.0, // Niacin - cao trong bánh mì đen
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 0, // Biotin
    folate: 35, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 24.0, // mg
    selenium: 30.0, // µg - cao trong bánh mì đen
    copper: 0.3, // mg
    manganese: 1.5, // mg - cao trong bánh mì đen
    iodine: 0, // µg
    commonServing: "2 lát (~60g)",
    notes: "GI thấp; tốt cho ĐTĐ.",
    diabetes: { glycemicIndex: 45, glycemicLoad: 11, carbPerPortion: 24 },
    kidney: { potassium: 240, phosphorus: 190 },
  },
  {
    id: "yen-mach-chao",
    name: "Yến mạch (cháo)",
    nameEn: "Oatmeal cooked",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 71,
    protein: 2.5,
    carbs: 12.0,
    fat: 1.4,
    sugars: 0.5,
    fiber: 1.7,
    water: 82.0,
    sodium: 5,
    potassium: 70,
    calcium: 8,
    iron: 1.0,
    phosphorus: 77,
    magnesium: 27,
    zinc: 0.9,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.2 },
    vitaminB1: 0.10,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.07,
    vitaminB7: 0, // Biotin
    folate: 6, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // µg
    copper: 0.1, // mg
    manganese: 0.6, // mg - cao trong yến mạch
    iodine: 0, // µg
    commonServing: "1 bát (~200g)",
    notes: "GI thấp; tốt tim mạch.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 11, carbPerPortion: 24 },
    kidney: { potassium: 70, phosphorus: 77 },
  },
  {
    id: "bun-gao-lut",
    name: "Bún gạo lứt",
    nameEn: "Brown rice vermicelli",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 124,
    protein: 2.8,
    carbs: 26.0,
    fat: 1.1,
    sugars: 0.4,
    fiber: 2.0,
    water: 69.0,
    sodium: 5,
    potassium: 110,
    calcium: 10,
    iron: 0.6,
    phosphorus: 80,
    magnesium: 35,
    zinc: 0.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.3 },
    vitaminB1: 0.18,
    vitaminB2: 0.06,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 12, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 9.0, // mg
    selenium: 7.0, // µg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong gạo lứt
    iodine: 0, // µg
    commonServing: "1 bát (~150g)",
    notes: "Carb tốt hơn bún trắng.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 14, carbPerPortion: 39 },
    kidney: { potassium: 110, phosphorus: 80 },
  },
  {
    id: "sua-tach-beo",
    name: "Sữa tách béo",
    nameEn: "Skim milk",
    category: "dairy",
    servingSize: 100,
    servingUnit: "ml",
    calories: 34,
    protein: 3.4,
    carbs: 5.0,
    fat: 0.1,
    sugars: 5.0,
    fiber: 0.0,
    water: 91.0,
    sodium: 42,
    potassium: 150,
    calcium: 120,
    iron: 0.0,
    phosphorus: 95,
    magnesium: 11,
    zinc: 0.4,
    vitaminA: 150,
    vitaminC: 0,
    cholesterol: 5,
    cardiovascular: { cholesterol: 5, saturatedFat: 0.1 },
    vitaminB1: 0.04,
    vitaminB2: 0.18,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 1.3,
    vitaminD: 40,
    vitaminE: 0.0, // Tocopherol (rất ít trong sữa tách béo)
    vitaminK: 0.1, // Phylloquinone
    choline: 18, // mg
    selenium: 3.3, // µg
    copper: 0.01, // mg
    manganese: 0.0, // mg
    iodine: 1.0, // µg
    commonServing: "1 ly (200ml)",
    notes: "Ít béo; phù hợp tim mạch.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 150, phosphorus: 95 },
  },
  {
    id: "sua-dau-nanh-it-duong",
    name: "Sữa đậu nành ít đường",
    nameEn: "Low-sugar soy milk",
    category: "beverages",
    servingSize: 100,
    servingUnit: "ml",
    calories: 33,
    protein: 3.0,
    carbs: 2.5,
    fat: 1.6,
    sugars: 1.0,
    fiber: 0.6,
    water: 92.0,
    sodium: 30,
    potassium: 118,
    calcium: 25,
    iron: 1.0,
    phosphorus: 52,
    magnesium: 25,
    zinc: 0.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.2 },
    vitaminB1: 0.10,
    vitaminB2: 0.06,
    vitaminB6: 0.12,
    folate: 6,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 ly (200ml)",
    notes: "Đạm thực vật; CKD dùng vừa.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 2, carbPerPortion: 5 },
    kidney: { potassium: 118, phosphorus: 52 },
  },
  {
    id: "sua-chua-khong-duong",
    name: "Sữa chua không đường",
    nameEn: "Plain yogurt",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 59,
    protein: 3.5,
    carbs: 4.7,
    fat: 3.3,
    sugars: 4.7,
    fiber: 0.0,
    water: 87.0,
    sodium: 36,
    potassium: 155,
    calcium: 121,
    iron: 0.1,
    phosphorus: 95,
    magnesium: 12,
    zinc: 0.6,
    vitaminA: 200,
    vitaminC: 0,
    cholesterol: 10,
    cardiovascular: { cholesterol: 10, saturatedFat: 2.1 },
    vitaminB1: 0.04,
    vitaminB2: 0.15,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 7, // µg
    vitaminB12: 0.6,
    vitaminD: 40,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 15, // mg
    selenium: 3.3, // µg
    copper: 0.01, // mg
    manganese: 0.0, // mg
    iodine: 1.0, // µg
    commonServing: "1 hũ (~100g)",
    notes: "Tốt tiêu hóa; ít ảnh hưởng ĐTĐ.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 2, carbPerPortion: 5 },
    kidney: { potassium: 155, phosphorus: 95 },
  },
  {
    id: "pho-mai-it-beo",
    name: "Phô mai tươi ít béo",
    nameEn: "Cottage cheese",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 98,
    protein: 11.0,
    carbs: 3.4,
    fat: 4.3,
    sugars: 1.0,
    fiber: 0.0,
    water: 79.0,
    sodium: 320,
    potassium: 104,
    calcium: 83,
    iron: 0.2,
    phosphorus: 159,
    magnesium: 15,
    zinc: 0.5,
    vitaminA: 140,
    vitaminC: 0,
    cholesterol: 17,
    cardiovascular: { cholesterol: 17, saturatedFat: 2.7 },
    vitaminB1: 0.03,
    vitaminB2: 0.12,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.03,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 12, // µg
    vitaminB12: 0.5,
    vitaminD: 20,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18, // mg
    selenium: 9.0, // µg
    copper: 0.02, // mg
    manganese: 0.0, // mg
    iodine: 0, // µg
    commonServing: "Ăn kèm (~50g)",
    notes: "Ít béo hơn phô mai thường.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 104, phosphorus: 159 },
  },
  {
    id: "dua-cai-muoi",
    name: "Dưa cải muối",
    nameEn: "Pickled mustard greens",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 1.2,
    carbs: 4.0,
    fat: 0.2,
    sugars: 1.5,
    fiber: 1.8,
    water: 92.0,
    sodium: 1200,
    potassium: 150,
    calcium: 60,
    iron: 1.2,
    phosphorus: 40,
    magnesium: 15,
    zinc: 0.4,
    vitaminA: 0,
    vitaminC: 10.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB6: 0.06,
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "Ăn ~50g",
    notes: "Natri rất cao; THA tránh.",
    kidney: { potassium: 150, phosphorus: 40 },
  },
  {
    id: "ca-phao-muoi",
    name: "Cà pháo muối",
    nameEn: "Pickled eggplant",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 1.0,
    carbs: 5.6,
    fat: 0.3,
    sugars: 2.0,
    fiber: 2.5,
    water: 90.0,
    sodium: 1400,
    potassium: 180,
    calcium: 35,
    iron: 0.8,
    phosphorus: 45,
    magnesium: 20,
    zinc: 0.4,
    vitaminA: 0,
    vitaminC: 3.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 18, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 6.5, // mg
    selenium: 0.2, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~30–50g",
    notes: "Dưa muối = muối.",
    kidney: { potassium: 180, phosphorus: 45 },
  },
  {
    id: "banh-bao",
    name: "Bánh bao nhân thịt",
    nameEn: "Steamed meat bun",
    category: "snacks",
    servingSize: 100,
    servingUnit: "g",
    calories: 220,
    protein: 8.0,
    carbs: 34.0,
    fat: 6.0,
    sugars: 3.0,
    fiber: 1.5,
    water: 50.0,
    sodium: 450,
    potassium: 120,
    calcium: 60,
    iron: 1.5,
    phosphorus: 110,
    magnesium: 20,
    zinc: 0.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 35,
    cardiovascular: { cholesterol: 35, saturatedFat: 2.0 },
    vitaminB1: 0.20,
    vitaminB2: 0.10,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 15, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 20.0, // mg
    selenium: 15.0, // µg
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 cái (~120g)",
    notes: "Tinh bột + mỡ.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 24, carbPerPortion: 40 },
    kidney: { potassium: 120, phosphorus: 110 },
  },
  {
    id: "banh-mi-kep",
    name: "Bánh mì kẹp thịt",
    nameEn: "Banh mi sandwich",
    category: "snacks",
    servingSize: 100,
    servingUnit: "g",
    calories: 266,
    protein: 9.0,
    carbs: 33.0,
    fat: 10.0,
    sugars: 4.0,
    fiber: 1.8,
    water: 46.0,
    sodium: 520,
    potassium: 150,
    calcium: 70,
    iron: 1.8,
    phosphorus: 120,
    magnesium: 22,
    zinc: 0.9,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 3.0 },
    vitaminB1: 0.18,
    vitaminB2: 0.09,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 12, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 18.0, // µg
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 ổ (~150g)",
    notes: "Natri & mỡ cao.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 26, carbPerPortion: 45 },
    kidney: { potassium: 150, phosphorus: 120 },
  },
  {
    id: "bun-rieu",
    name: "Bún riêu",
    nameEn: "Bun rieu crab noodle soup",
    category: "soups",
    servingSize: 100,
    servingUnit: "g",
    calories: 92,
    protein: 5.0,
    carbs: 14.0,
    fat: 2.0,
    sugars: 1.5,
    fiber: 0.8,
    water: 78.0,
    sodium: 480,
    potassium: 120,
    calcium: 45,
    iron: 1.4,
    phosphorus: 90,
    magnesium: 18,
    zinc: 0.7,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 35,
    cardiovascular: { cholesterol: 35, saturatedFat: 0.8 },
    vitaminB1: 0.10,
    vitaminB2: 0.06,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 10, // µg
    vitaminB12: 0.5, // µg - từ cua
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 15.0, // mg
    selenium: 12.0, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~400g)",
    notes: "Nước dùng + mắm.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 36, carbPerPortion: 56 },
    kidney: { potassium: 120, phosphorus: 90 },
  },
  {
    id: "ca-com-kho",
    name: "Cá cơm khô",
    nameEn: "Dried anchovy",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 210,
    protein: 45.0,
    carbs: 0.0,
    fat: 4.0,
    fiber: 0.0,
    water: 20.0,
    sodium: 3500,
    potassium: 850,
    calcium: 500,
    iron: 5.0,
    phosphorus: 600,
    magnesium: 90,
    zinc: 6.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 120,
    cardiovascular: { cholesterol: 120, saturatedFat: 1.2 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB3: 3.0, // Niacin - cao trong cá khô
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 18, // µg
    vitaminB12: 5.0, // µg - rất cao trong cá khô
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 50.0, // mg - cao trong cá khô
    selenium: 50.0, // µg - rất cao trong cá khô
    copper: 0.5, // mg - cao trong cá khô
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~20g",
    notes: "Purine & natri rất cao.",
    gout: { purine: 350, purineLevel: "very-high" },
    kidney: { potassium: 850, phosphorus: 600 },
  },
  {
    id: "ruoc-thit",
    name: "Ruốc thịt",
    nameEn: "Pork floss",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 410,
    protein: 30.0,
    carbs: 15.0,
    fat: 28.0,
    sugars: 10.0,
    fiber: 0.0,
    water: 25.0,
    sodium: 1500,
    potassium: 300,
    calcium: 40,
    iron: 2.5,
    phosphorus: 220,
    magnesium: 30,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 9.0 },
    vitaminB1: 0.20,
    vitaminB2: 0.18,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 0, // Biotin
    folate: 10, // µg
    vitaminB12: 0.5, // µg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 30.0, // mg
    selenium: 25.0, // µg - cao trong cá khô
    copper: 0.3, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Rắc ~20g",
    notes: "Mặn + purine.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 300, phosphorus: 220 },
  },
  {
    id: "nuoc-dua",
    name: "Nước dừa tươi",
    nameEn: "Coconut water",
    category: "beverages",
    servingSize: 100,
    servingUnit: "ml",
    calories: 19,
    protein: 0.7,
    carbs: 3.7,
    fat: 0.2,
    sugars: 2.6,
    fiber: 1.1,
    water: 94.0,
    sodium: 105,
    potassium: 250,
    calcium: 24,
    iron: 0.3,
    phosphorus: 20,
    magnesium: 25,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 2.4,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.02,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 5, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.1, // mg
    selenium: 1.0, // µg
    copper: 0.0, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 trái (~300ml)",
    notes: "Kali cao; CKD lưu ý.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 4, carbPerPortion: 11 },
    kidney: { potassium: 250, phosphorus: 20 },
  },
  // ========================================================================
  // Thịt chế biến & quay/nướng (241–251)
  // ========================================================================
  {
    id: "gio-lua",
    name: "Giò lụa",
    nameEn: "Steamed pork sausage",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 180,
    protein: 23.0,
    carbs: 2.0,
    fat: 7.0,
    sugars: 1.0,
    fiber: 0.5,
    water: 65.0,
    sodium: 900,
    potassium: 260,
    calcium: 35,
    iron: 1.8,
    phosphorus: 210,
    magnesium: 25,
    zinc: 1.6,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 2.5 },
    vitaminB1: 0.15,
    vitaminB2: 0.10,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 10, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "2–3 lát (~50g)",
    notes: "Thịt chế biến; natri cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 260, phosphorus: 210 },
  },
  {
    id: "cha-lua-chien",
    name: "Chả lụa chiên",
    nameEn: "Fried pork sausage",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 260,
    protein: 20.0,
    carbs: 3.0,
    fat: 18.0,
    sugars: 1.5,
    fiber: 0.5,
    water: 55.0,
    sodium: 950,
    potassium: 240,
    calcium: 30,
    iron: 1.6,
    phosphorus: 200,
    magnesium: 23,
    zinc: 1.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 6.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.10,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 9, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~50g",
    notes: "Mỡ + natri cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 240, phosphorus: 200 },
  },
  {
    // dùng id khác để tránh trùng với bản nem-chua cũ
    id: "nem-chua-meat27",
    name: "Nem chua",
    nameEn: "Fermented pork roll",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 230,
    protein: 20.0,
    carbs: 4.0,
    fat: 16.0,
    sugars: 2.0,
    fiber: 0.5,
    water: 55.0,
    sodium: 1200,
    potassium: 210,
    calcium: 40,
    iron: 2.3,
    phosphorus: 220,
    magnesium: 28,
    zinc: 1.9,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 6.5 },
    vitaminB1: 0.18,
    vitaminB2: 0.14,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 12, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 30.0, // mg
    selenium: 22.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1–2 cây (~50g)",
    notes: "Rất mặn; lên men.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 210, phosphorus: 220 },
  },
  {
    id: "heo-quay",
    name: "Thịt heo quay",
    nameEn: "Roast pork belly",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 430,
    protein: 15.0,
    carbs: 0.0,
    fat: 38.0,
    fiber: 0.0,
    water: 42.0,
    sodium: 850,
    potassium: 180,
    calcium: 20,
    iron: 1.5,
    phosphorus: 160,
    magnesium: 18,
    zinc: 1.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 90,
    cardiovascular: { cholesterol: 90, saturatedFat: 14.0 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 6, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 20.0, // mg
    selenium: 18.0, // µg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Mỡ bão hòa rất cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 180, phosphorus: 160 },
  },
  {
    id: "thit-kho-tau",
    name: "Thịt kho tàu",
    nameEn: "Braised pork with egg",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 260,
    protein: 14.0,
    carbs: 4.0,
    fat: 22.0,
    sugars: 2.5,
    fiber: 0.5,
    water: 58.0,
    sodium: 650,
    potassium: 210,
    calcium: 25,
    iron: 1.6,
    phosphorus: 170,
    magnesium: 20,
    zinc: 1.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 110,
    cardiovascular: { cholesterol: 110, saturatedFat: 8.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 8, // µg
    vitaminB12: 0.5, // µg - từ thịt và trứng
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg - từ thịt và trứng
    selenium: 18.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 chén (~150g)",
    notes: "Mặn + mỡ.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 210, phosphorus: 170 },
  },
  {
    id: "bo-vien",
    name: "Bò viên",
    nameEn: "Beef meatball",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 215,
    protein: 15.0,
    carbs: 8.0,
    fat: 14.0,
    sugars: 2.0,
    fiber: 0.5,
    water: 60.0,
    sodium: 780,
    potassium: 190,
    calcium: 35,
    iron: 2.1,
    phosphorus: 200,
    magnesium: 22,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 5.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 10, // µg
    vitaminB12: 0.5, // µg - từ thịt bò
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 28.0, // mg
    selenium: 20.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "5–6 viên (~100g)",
    notes: "Thịt xay + phụ gia.",
    gout: {
      purine: 135,
      purineLevel: 'high',
    },
    kidney: { potassium: 190, phosphorus: 200 },
  },
  {
    id: "xuc-xich-heo",
    name: "Xúc xích heo",
    nameEn: "Pork sausage",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 300,
    protein: 12.0,
    carbs: 6.0,
    fat: 26.0,
    sugars: 3.0,
    fiber: 0.5,
    water: 52.0,
    sodium: 1000,
    potassium: 220,
    calcium: 30,
    iron: 1.5,
    phosphorus: 180,
    magnesium: 20,
    zinc: 1.3,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 80,
    cardiovascular: { cholesterol: 80, saturatedFat: 10.0 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 8, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 22.0, // mg
    selenium: 18.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 cây (~60g)",
    notes: "Thịt chế biến; THA tránh.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 220, phosphorus: 180 },
  },
  {
    // bản jambon mới, tránh trùng id cũ
    id: "jambon-meat32",
    name: "Jambon (giăm bông)",
    nameEn: "Ham",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 145,
    protein: 21.0,
    carbs: 2.0,
    fat: 6.0,
    sugars: 1.5,
    fiber: 0.0,
    water: 65.0,
    sodium: 1100,
    potassium: 240,
    calcium: 15,
    iron: 1.2,
    phosphorus: 190,
    magnesium: 22,
    zinc: 1.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 2.2 },
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 7, // µg
    vitaminB12: 0.5, // µg
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "2–3 lát (~50g)",
    notes: "Natri rất cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 240, phosphorus: 190 },
  },
  {
    id: "ga-nuong",
    name: "Thịt gà nướng",
    nameEn: "Grilled chicken",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 190,
    protein: 20.0,
    carbs: 2.0,
    fat: 11.0,
    sugars: 0.5,
    fiber: 0.0,
    water: 64.0,
    sodium: 420,
    potassium: 230,
    calcium: 20,
    iron: 1.4,
    phosphorus: 200,
    magnesium: 24,
    zinc: 1.3,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 3.5 },
    vitaminB1: 0.08,
    vitaminB2: 0.10,
    vitaminB3: 8.0, // Niacin - rất cao trong thịt gà
    vitaminB5: 1.0, // Pantothenic acid - cao trong thịt gà
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 9, // µg
    vitaminB12: 0.3, // µg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 65.0, // mg - cao trong thịt gà
    selenium: 18.0, // µg
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Ướp mặn; chú ý natri.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    kidney: { potassium: 230, phosphorus: 200 },
  },
  {
    id: "vit-quay",
    name: "Vịt quay",
    nameEn: "Roast duck",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 330,
    protein: 17.0,
    carbs: 0.0,
    fat: 28.0,
    fiber: 0.0,
    water: 48.0,
    sodium: 700,
    potassium: 200,
    calcium: 18,
    iron: 2.0,
    phosphorus: 160,
    magnesium: 22,
    zinc: 1.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 95,
    cardiovascular: { cholesterol: 95, saturatedFat: 10.5 },
    vitaminB1: 0.06,
    vitaminB2: 0.08,
    vitaminB3: 5.0, // Niacin - cao trong thịt vịt
    vitaminB5: 1.0, // Pantothenic acid - cao trong thịt vịt
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 8, // µg
    vitaminB12: 0.4, // µg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 65.0, // mg - cao trong thịt vịt
    selenium: 20.0, // µg
    copper: 0.2, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (~100g)",
    notes: "Mỡ cao; tim mạch hạn chế.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 200, phosphorus: 160 },
  },
  {
    id: "be-thui",
    name: "Bê thui",
    nameEn: "Roasted veal",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 160,
    protein: 22.0,
    carbs: 0.0,
    fat: 7.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 350,
    potassium: 240,
    calcium: 12,
    iron: 2.5,
    phosphorus: 210,
    magnesium: 26,
    zinc: 3.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 2.5 },
    vitaminB1: 0.06,
    vitaminB2: 0.10,
    vitaminB3: 5.0, // Niacin - cao trong thịt bê
    vitaminB5: 0.8, // Pantothenic acid - cao trong thịt bê
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 10, // µg
    vitaminB12: 1.5, // µg - cao trong thịt bê
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 85.0, // mg - cao trong thịt bê
    selenium: 15.0, // µg
    copper: 0.2, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 đĩa (~100g)",
    notes: "Đạm cao; purine trung bình.",
    gout: {
      purine: 120,
      purineLevel: 'medium',
    },
    kidney: { potassium: 240, phosphorus: 210 },
  },
  // ========================================================================
  // Cá nước ngọt & cá biển bổ sung (252–263)
  // ========================================================================
  {
    id: "ca-basa",
    name: "Cá basa",
    nameEn: "Basa fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 122,
    protein: 17.0,
    carbs: 0.0,
    fat: 5.3,
    fiber: 0.0,
    water: 74.0,
    sodium: 45,
    potassium: 278,
    calcium: 12,
    iron: 0.7,
    phosphorus: 190,
    magnesium: 25,
    zinc: 0.6,
    vitaminA: 20,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 1.5 },
    vitaminB1: 0.04,
    vitaminB2: 0.06,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7, // µg
    vitaminB12: 1.0, // µg - cao trong cá
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // µg - cao trong cá
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 khúc (~100g)",
    notes: "Cá béo vừa; phổ biến.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 278, phosphorus: 190 },
  },
  {
    id: "ca-tra",
    name: "Cá tra",
    nameEn: "Pangasius catfish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 119,
    protein: 18.0,
    carbs: 0.0,
    fat: 4.0,
    fiber: 0.0,
    water: 76.0,
    sodium: 48,
    potassium: 300,
    calcium: 13,
    iron: 0.9,
    phosphorus: 200,
    magnesium: 26,
    zinc: 0.7,
    vitaminA: 15,
    vitaminC: 0,
    cholesterol: 58,
    cardiovascular: { cholesterol: 58, saturatedFat: 1.2 },
    vitaminB1: 0.05,
    vitaminB2: 0.07,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.24,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7, // µg
    vitaminB12: 1.2, // µg - cao trong cá
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // µg - cao trong cá
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 khúc (~100g)",
    notes: "Ít xương; dễ ăn.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 200 },
  },
  {
    id: "ca-linh",
    name: "Cá linh",
    nameEn: "Small river fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 102,
    protein: 17.5,
    carbs: 0.0,
    fat: 2.8,
    fiber: 0.0,
    water: 79.0,
    sodium: 55,
    potassium: 320,
    calcium: 18,
    iron: 1.4,
    phosphorus: 210,
    magnesium: 28,
    zinc: 0.8,
    vitaminA: 25,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 0.9 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 8, // µg
    vitaminB12: 1.5, // µg - cao trong cá
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // µg - cao trong cá
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 bát (~100g)",
    notes: "Cá nhỏ; purine trung bình.",
    gout: { purine: 150, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 210 },
  },
  {
    id: "ca-sac",
    name: "Cá sặc",
    nameEn: "Snakeskin gourami",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 111,
    protein: 18.2,
    carbs: 0.0,
    fat: 3.6,
    fiber: 0.0,
    water: 77.0,
    sodium: 60,
    potassium: 310,
    calcium: 14,
    iron: 1.2,
    phosphorus: 195,
    magnesium: 27,
    zinc: 0.7,
    vitaminA: 20,
    vitaminC: 0,
    cholesterol: 62,
    cardiovascular: { cholesterol: 62, saturatedFat: 1.1 },
    vitaminB1: 0.05,
    vitaminB2: 0.07,
    vitaminB3: 1.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.23,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 22.0, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 con (~100g)",
    notes: "Cá nước ngọt phổ biến miền Tây.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 310, phosphorus: 195 },
  },
  {
    id: "ca-that-lat",
    name: "Cá thát lát",
    nameEn: "Featherback fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 108,
    protein: 18.0,
    carbs: 0.0,
    fat: 3.2,
    fiber: 0.0,
    water: 78.0,
    sodium: 58,
    potassium: 295,
    calcium: 13,
    iron: 1.0,
    phosphorus: 190,
    magnesium: 26,
    zinc: 0.6,
    vitaminA: 15,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 1.0 },
    vitaminB1: 0.05,
    vitaminB2: 0.06,
    vitaminB3: 1.1, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.2,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 58, // mg
    selenium: 20.0, // µg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 khúc (~100g)",
    notes: "Hay làm chả cá.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 295, phosphorus: 190 },
  },
  {
    id: "ca-dua",
    name: "Cá dứa",
    nameEn: "Pangasius krempfi",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 130,
    protein: 18.0,
    carbs: 0.0,
    fat: 6.0,
    fiber: 0.0,
    water: 72.0,
    sodium: 50,
    potassium: 285,
    calcium: 12,
    iron: 0.8,
    phosphorus: 200,
    magnesium: 25,
    zinc: 0.6,
    vitaminA: 20,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 1.6 },
    vitaminB1: 0.04,
    vitaminB2: 0.07,
    vitaminB3: 1.3, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.24,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 62, // mg
    selenium: 23.0, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg (cá nước ngọt)
    commonServing: "1 khúc (~100g)",
    notes: "Béo hơn cá tra.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 285, phosphorus: 200 },
  },
  {
    id: "ca-ngu-hop-nuoc",
    name: "Cá ngừ hộp (nước)",
    nameEn: "Canned tuna in water",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 116,
    protein: 26.0,
    carbs: 0.0,
    fat: 1.0,
    fiber: 0.0,
    water: 72.0,
    sodium: 300,
    potassium: 250,
    calcium: 15,
    iron: 1.3,
    phosphorus: 230,
    magnesium: 30,
    zinc: 0.9,
    vitaminA: 25,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 0.3 },
    vitaminB1: 0.08,
    vitaminB2: 0.10,
    vitaminB3: 8.0, // Niacin - cao trong cá ngừ
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 12,
    vitaminB12: 3.0,
    vitaminD: 350,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 38.0, // µg - cao trong cá ngừ
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // µg - cao trong cá biển
    commonServing: "1/2 hộp (~80g)",
    notes: "Ít mỡ; natri tùy loại.",
    gout: { purine: 160, purineLevel: "medium" },
    kidney: { potassium: 250, phosphorus: 230 },
  },
  {
    id: "ca-moi-hop-fish32",
    name: "Cá mòi hộp",
    nameEn: "Canned sardines",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 208,
    protein: 24.0,
    carbs: 0.0,
    fat: 11.0,
    fiber: 0.0,
    water: 60.0,
    sodium: 350,
    potassium: 397,
    calcium: 382,
    iron: 2.9,
    phosphorus: 490,
    magnesium: 39,
    zinc: 1.3,
    vitaminA: 75,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 2.7 },
    vitaminB1: 0.10,
    vitaminB2: 0.12,
    vitaminB3: 5.2, // Niacin - cao trong cá mòi
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.45,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 10,
    vitaminB12: 4.0,
    vitaminD: 400,
    vitaminE: 1.3, // Tocopherol - cao trong cá mòi
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg
    selenium: 50.0, // µg - rất cao trong cá mòi
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 48, // µg - cao trong cá biển
    commonServing: "1/2 hộp (~90g)",
    notes: "Giàu Ca; purine trung bình.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 397, phosphorus: 490 },
  },
  {
    id: "ca-com-tuoi",
    name: "Cá cơm tươi",
    nameEn: "Fresh anchovy",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 131,
    protein: 20.4,
    carbs: 0.0,
    fat: 4.8,
    fiber: 0.0,
    water: 72.0,
    sodium: 70,
    potassium: 450,
    calcium: 147,
    iron: 1.9,
    phosphorus: 300,
    magnesium: 32,
    zinc: 1.5,
    vitaminA: 40,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 1.4 },
    vitaminB1: 0.06,
    vitaminB2: 0.09,
    vitaminB3: 3.0, // Niacin - cao trong cá cơm
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 9,
    vitaminB12: 3.5,
    vitaminD: 350,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 45.0, // µg - rất cao trong cá cơm
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - cao trong cá biển
    commonServing: "1 bát (~100g)",
    notes: "Purine trung bình–cao.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 450, phosphorus: 300 },
  },
  {
    id: "ca-thu-tuoi",
    name: "Cá thu tươi",
    nameEn: "Spanish mackerel",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 189,
    protein: 18.6,
    carbs: 0.0,
    fat: 13.9,
    fiber: 0.0,
    water: 66.0,
    sodium: 90,
    potassium: 314,
    calcium: 13,
    iron: 1.6,
    phosphorus: 280,
    magnesium: 32,
    zinc: 1.1,
    vitaminA: 45,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 3.5 },
    vitaminB1: 0.07,
    vitaminB2: 0.10,
    vitaminB3: 6.2, // Niacin - cao trong cá thu
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 13,
    vitaminB12: 6.0,
    vitaminD: 380,
    vitaminE: 1.1, // Tocopherol - cao trong cá béo
    vitaminK: 0.1, // Phylloquinone
    choline: 72, // mg
    selenium: 34.0, // µg - rất cao trong cá thu
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 44, // µg - cao trong cá biển
    commonServing: "1 lát (~100g)",
    notes: "Béo; omega-3 cao.",
    gout: { purine: 160, purineLevel: "medium" },
    kidney: { potassium: 314, phosphorus: 280 },
  },
  {
    id: "ca-bop",
    name: "Cá bớp",
    nameEn: "Cobia fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 110,
    protein: 20.5,
    carbs: 0.0,
    fat: 2.5,
    fiber: 0.0,
    water: 76.0,
    sodium: 60,
    potassium: 340,
    calcium: 25,
    iron: 0.9,
    phosphorus: 200,
    magnesium: 30,
    zinc: 0.7,
    vitaminA: 20,
    vitaminC: 0,
    cholesterol: 50,
    cardiovascular: { cholesterol: 50, saturatedFat: 0.5 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 4.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 8,
    vitaminB12: 2.0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 30.0, // µg - cao trong cá bớp
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 42, // µg - cao trong cá biển
    commonServing: "1 khúc (~100g)",
    notes: "Đạm cao; béo thấp; purine trung bình.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 340, phosphorus: 200 },
  },
  {
    id: "ca-nau",
    name: "Cá nâu",
    nameEn: "Scat fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 104,
    protein: 17.0,
    carbs: 0.0,
    fat: 3.0,
    fiber: 0.0,
    water: 78.0,
    sodium: 60,
    potassium: 300,
    calcium: 14,
    iron: 1.2,
    phosphorus: 210,
    magnesium: 27,
    zinc: 0.7,
    vitaminA: 15,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 0.9 },
    vitaminB1: 0.05,
    vitaminB2: 0.07,
    vitaminB3: 1.4, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.2,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 61, // mg
    selenium: 24.0, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 5, // µg (cá nước lợ - thấp)
    commonServing: "1 con (~100g)",
    notes: "Cá vùng nước lợ.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 210 },
  },
  // ========================================================================
  // Cá nướng & cá áp chảo (MEAL47-MEAL54)
  // ========================================================================
  {
    id: "ca-thu-nuong",
    name: "Cá thu nướng",
    nameEn: "Grilled mackerel",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 205,
    protein: 18.6,
    carbs: 0.0,
    fat: 13.9,
    fiber: 0.0,
    water: 65.0,
    sodium: 90,
    potassium: 314,
    calcium: 12,
    iron: 1.6,
    phosphorus: 210,
    magnesium: 34,
    zinc: 1.4,
    vitaminA: 50,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 3.3 },
    vitaminB1: 0.10,
    vitaminB2: 0.19,
    vitaminB3: 6.5, // Niacin - cao trong cá biển
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 9,
    vitaminB12: 8.7,
    vitaminD: 360,
    vitaminE: 1.2, // Tocopherol - cao trong cá béo
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // µg - rất cao trong cá biển
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // µg - cao trong cá biển
    commonServing: "1 khúc vừa",
    notes: "Cá biển béo; giàu omega-3; purine trung bình.",
    gout: { purine: 150, purineLevel: "high" },
    kidney: { potassium: 314, phosphorus: 210 },
  },
  {
    id: "ca-ngu-ap-chao",
    name: "Cá ngừ áp chảo",
    nameEn: "Pan-seared tuna",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 144,
    protein: 23.3,
    carbs: 0.0,
    fat: 4.9,
    fiber: 0.0,
    water: 70.0,
    sodium: 45,
    potassium: 252,
    calcium: 8,
    iron: 1.3,
    phosphorus: 220,
    magnesium: 28,
    zinc: 0.8,
    vitaminA: 20,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 1.3 },
    vitaminB1: 0.09,
    vitaminB2: 0.10,
    vitaminB3: 8.5, // Niacin - rất cao trong cá ngừ
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.60,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 4,
    vitaminB12: 2.9,
    vitaminD: 200,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg
    selenium: 40.0, // µg - rất cao trong cá ngừ
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - cao trong cá biển
    commonServing: "1 miếng",
    notes: "Đạm cao; béo thấp; purine trung bình.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 252, phosphorus: 220 },
  },
  {
    id: "ca-hoi-nuong",
    name: "Cá hồi nướng",
    nameEn: "Grilled salmon",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 285,
    protein: 17.0,
    carbs: 0.0,
    fat: 22.0,
    fiber: 0.0,
    water: 60.0,
    sodium: 44,
    potassium: 312,
    calcium: 15,
    iron: 0.8,
    phosphorus: 250,
    magnesium: 29,
    zinc: 0.6,
    vitaminA: 180,
    vitaminC: 0,
    cholesterol: 43,
    cardiovascular: { cholesterol: 43, saturatedFat: 4.5 },
    vitaminB1: 0.11,
    vitaminB2: 0.15,
    vitaminB3: 7.5, // Niacin - rất cao trong cá hồi
    vitaminB5: 1.6, // Pantothenic acid - cao
    vitaminB6: 0.75,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 25,
    vitaminB12: 10.0,
    vitaminD: 450,
    vitaminE: 1.1, // Tocopherol - cao trong cá hồi
    vitaminK: 0.1, // Phylloquinone
    choline: 90, // mg - rất cao
    selenium: 36.5, // µg - rất cao
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - cao trong cá biển
    commonServing: "1 miếng",
    notes: "Giàu omega-3, vitamin D; purine trung bình.",
    gout: { purine: 75, purineLevel: "medium" },
    kidney: { potassium: 312, phosphorus: 250 },
  },
  {
    id: "ca-trich-nuong",
    name: "Cá trích nướng",
    nameEn: "Grilled herring",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 262,
    protein: 23.0,
    carbs: 0.0,
    fat: 18.0,
    fiber: 0.0,
    water: 55.0,
    sodium: 87,
    potassium: 327,
    calcium: 57,
    iron: 2.9,
    phosphorus: 280,
    magnesium: 35,
    zinc: 1.3,
    vitaminA: 200,
    vitaminC: 0,
    cholesterol: 95,
    cardiovascular: { cholesterol: 95, saturatedFat: 4.5 },
    vitaminB1: 0.08,
    vitaminB2: 0.22,
    vitaminB3: 5.5, // Niacin - cao trong cá trích
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 2.5, // Biotin (µg)
    folate: 10,
    vitaminB12: 13.7,
    vitaminD: 600,
    vitaminE: 1.3, // Tocopherol - cao trong cá béo
    vitaminK: 0.1, // Phylloquinone
    choline: 85, // mg - cao
    selenium: 38.0, // µg - rất cao
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 55, // µg - cao trong cá biển
    commonServing: "2 con nhỏ",
    notes: "Cá biển béo; purine trung bình.",
    gout: { purine: 99, purineLevel: "medium" },
    kidney: { potassium: 327, phosphorus: 280 },
  },
  {
    id: "ca-moi-nuong",
    name: "Cá mòi nướng",
    nameEn: "Grilled sardine",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 208,
    protein: 24.6,
    carbs: 0.0,
    fat: 11.5,
    fiber: 0.0,
    water: 60.0,
    sodium: 140,
    potassium: 397,
    calcium: 382,
    iron: 2.9,
    phosphorus: 490,
    magnesium: 39,
    zinc: 1.3,
    vitaminA: 50,
    vitaminC: 0,
    cholesterol: 142,
    cardiovascular: { cholesterol: 142, saturatedFat: 1.5 },
    vitaminB1: 0.07,
    vitaminB2: 0.23,
    vitaminB3: 5.0, // Niacin - cao trong cá mòi
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 10,
    vitaminB12: 8.9,
    vitaminD: 270,
    vitaminE: 1.2, // Tocopherol - cao trong cá mòi
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 52.0, // µg - rất cao trong cá mòi
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - cao trong cá biển
    commonServing: "3–4 con",
    notes: "Rất giàu canxi; purine cao.",
    gout: { purine: 145, purineLevel: "high" },
    kidney: { potassium: 397, phosphorus: 490 },
  },
  {
    id: "ca-nuc-nuong",
    name: "Cá nục nướng",
    nameEn: "Grilled scad",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 180,
    protein: 20.0,
    carbs: 0.0,
    fat: 10.0,
    fiber: 0.0,
    water: 65.0,
    sodium: 95,
    potassium: 320,
    calcium: 20,
    iron: 1.2,
    phosphorus: 230,
    magnesium: 30,
    zinc: 1.1,
    vitaminA: 40,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 2.8 },
    vitaminB1: 0.06,
    vitaminB2: 0.18,
    vitaminB3: 4.5, // Niacin - cao trong cá nục
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 8,
    vitaminB12: 3.0,
    vitaminD: 300,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 32.0, // µg - cao trong cá biển
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // µg - cao trong cá biển
    commonServing: "1 con vừa",
    notes: "Cá biển phổ biến; purine trung bình.",
    gout: { purine: 100, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 230 },
  },
  {
    id: "ca-ho-nuong",
    name: "Cá hố nướng",
    nameEn: "Grilled hairtail fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 159,
    protein: 18.0,
    carbs: 0.0,
    fat: 7.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 70,
    potassium: 290,
    calcium: 15,
    iron: 1.0,
    phosphorus: 210,
    magnesium: 27,
    zinc: 0.9,
    vitaminA: 30,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 1.6 },
    vitaminB1: 0.05,
    vitaminB2: 0.12,
    vitaminB3: 3.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 6,
    vitaminB12: 1.8,
    vitaminD: 120,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // µg - cao trong cá biển
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 40, // µg - cao trong cá biển
    commonServing: "1 khúc",
    notes: "Cá nạc; purine thấp–trung bình.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 290, phosphorus: 210 },
  },
  // ========================================================================
  // Hải sản tươi phổ biến
  // ========================================================================
  {
    id: "cua-bien",
    name: "Cua biển",
    nameEn: "Crab",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 19.0,
    carbs: 0.0,
    fat: 1.5,
    fiber: 0.0,
    water: 79.0,
    sodium: 83,
    potassium: 329,
    calcium: 91,
    iron: 0.4,
    phosphorus: 210,
    magnesium: 34,
    zinc: 3.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 78,
    cardiovascular: { cholesterol: 78, saturatedFat: 0.2 },
    vitaminB1: 0.10,
    vitaminB2: 0.15,
    vitaminB3: 2.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 20,
    vitaminB12: 9.8,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg - cao trong cua
    selenium: 37.0, // µg - rất cao trong cua
    copper: 0.6, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 50, // µg - cao trong hải sản
    commonServing: "1 con vừa (~100g thịt)",
    notes: "Giàu vitamin B12; purine trung bình–cao.",
    gout: { purine: 130, purineLevel: "high" },
    kidney: { potassium: 329, phosphorus: 210 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "muc",
    name: "Mực",
    nameEn: "Squid",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 92,
    protein: 15.6,
    carbs: 3.1,
    fat: 1.4,
    fiber: 0.0,
    water: 78.0,
    sodium: 44,
    potassium: 246,
    calcium: 32,
    iron: 0.7,
    phosphorus: 198,
    magnesium: 33,
    zinc: 1.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 233,
    cardiovascular: { cholesterol: 233, saturatedFat: 0.4 },
    vitaminB1: 0.02,
    vitaminB2: 0.04,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 44.0, // µg - rất cao trong mực
    copper: 0.4, // mg - cao trong mực
    manganese: 0.1, // mg
    iodine: 40, // µg - cao trong hải sản
    commonServing: "1 con vừa (~100g)",
    notes: "Cholesterol cao; purine trung bình.",
    gout: { purine: 110, purineLevel: "medium" },
    kidney: { potassium: 246, phosphorus: 198 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "bach-tuoc",
    name: "Bạch tuộc",
    nameEn: "Octopus",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 82,
    protein: 14.9,
    carbs: 2.2,
    fat: 1.0,
    fiber: 0.0,
    water: 80.0,
    sodium: 230,
    potassium: 350,
    calcium: 53,
    iron: 5.3,
    phosphorus: 186,
    magnesium: 30,
    zinc: 1.7,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 96,
    cardiovascular: { cholesterol: 96, saturatedFat: 0.2 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.36,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 16,
    vitaminB12: 20.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 36.0, // µg - rất cao trong bạch tuộc
    copper: 0.4, // mg - cao trong bạch tuộc
    manganese: 0.1, // mg
    iodine: 45, // µg - cao trong hải sản
    commonServing: "1 con nhỏ (~100g)",
    notes: "Giàu sắt, vitamin B12; natri cao; purine trung bình.",
    gout: { purine: 95, purineLevel: "medium" },
    kidney: { potassium: 350, phosphorus: 186 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con nhỏ' },
    ],
  },
  {
    id: "ngheu-so",
    name: "Nghêu (ngao)",
    nameEn: "Clam",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 74,
    protein: 12.8,
    carbs: 2.6,
    fat: 1.2,
    fiber: 0.0,
    water: 82.0,
    sodium: 95,
    potassium: 628,
    calcium: 92,
    iron: 28.0,
    phosphorus: 338,
    magnesium: 18,
    zinc: 2.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 34,
    cardiovascular: { cholesterol: 34, saturatedFat: 0.2 },
    vitaminB1: 0.16,
    vitaminB2: 0.20,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 20,
    vitaminB12: 98.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 64.0, // µg - rất cao trong nghêu
    copper: 0.6, // mg - cao trong nghêu
    manganese: 0.1, // mg
    iodine: 60, // µg - rất cao trong nghêu
    commonServing: "1 đĩa (~100g thịt)",
    notes: "Rất giàu sắt, vitamin B12, kali; purine thấp–trung bình.",
    gout: { purine: 55, purineLevel: "low" },
    kidney: { potassium: 628, phosphorus: 338 },
    vietnameseUnits: [
      { unit: 'dia', weight: 100, description: '1 đĩa vừa' },
    ],
  },
  {
    id: "ghe",
    name: "Ghẹ",
    nameEn: "Crab (small)",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 18.1,
    carbs: 0.0,
    fat: 1.1,
    fiber: 0.0,
    water: 79.0,
    sodium: 78,
    potassium: 300,
    calcium: 85,
    iron: 0.3,
    phosphorus: 200,
    magnesium: 33,
    zinc: 3.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 78,
    cardiovascular: { cholesterol: 78, saturatedFat: 0.2 },
    vitaminB1: 0.09,
    vitaminB2: 0.14,
    vitaminB3: 2.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 18,
    vitaminB12: 8.5,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // µg - cao trong ghẹ
    copper: 0.5, // mg - cao trong ghẹ
    manganese: 0.1, // mg
    iodine: 48, // µg - cao trong hải sản
    commonServing: "1 con vừa (~100g thịt)",
    notes: "Giàu vitamin B12, kẽm; purine trung bình.",
    gout: { purine: 120, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 200 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "so-huyet",
    name: "Sò huyết",
    nameEn: "Blood cockle",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 80,
    protein: 13.0,
    carbs: 3.0,
    fat: 1.0,
    fiber: 0.0,
    water: 82.0,
    sodium: 90,
    potassium: 350,
    calcium: 110,
    iron: 15.0,
    phosphorus: 250,
    magnesium: 20,
    zinc: 2.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 0.2 },
    vitaminB1: 0.15,
    vitaminB2: 0.18,
    vitaminB3: 1.8, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 18,
    vitaminB12: 20.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 58.0, // µg - rất cao trong sò huyết
    copper: 0.5, // mg - cao trong sò huyết
    manganese: 0.1, // mg
    iodine: 55, // µg - rất cao trong sò huyết
    commonServing: "1 đĩa (~100g thịt)",
    notes: "Giàu sắt, canxi, vitamin B12; purine trung bình.",
    gout: { purine: 90, purineLevel: "medium" },
    kidney: { potassium: 350, phosphorus: 250 },
    vietnameseUnits: [
      { unit: 'dia', weight: 100, description: '1 đĩa vừa' },
    ],
  },
  {
    id: "hau",
    name: "Hàu",
    nameEn: "Oyster",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 68,
    protein: 7.0,
    carbs: 4.0,
    fat: 2.5,
    fiber: 0.0,
    water: 85.0,
    sodium: 90,
    potassium: 156,
    calcium: 81,
    iron: 5.8,
    phosphorus: 120,
    magnesium: 22,
    zinc: 16.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 0.6 },
    vitaminB1: 0.12,
    vitaminB2: 0.15,
    vitaminB3: 1.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 10,
    vitaminB12: 16.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 78.0, // µg - rất cao trong hàu
    copper: 1.6, // mg - rất cao trong hàu
    manganese: 0.2, // mg
    iodine: 60, // µg - rất cao trong hàu
    commonServing: "5–6 con vừa (~100g thịt)",
    notes: "Rất giàu kẽm, sắt, vitamin B12; purine trung bình.",
    gout: { purine: 90, purineLevel: "medium" },
    kidney: { potassium: 156, phosphorus: 120 },
    vietnameseUnits: [
      { unit: 'cai', weight: 15, description: '1 con vừa' },
    ],
  },
  {
    id: "so-diep",
    name: "Sò điệp",
    nameEn: "Scallop",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 88,
    protein: 16.8,
    carbs: 3.2,
    fat: 0.8,
    fiber: 0.0,
    water: 78.0,
    sodium: 667,
    potassium: 205,
    calcium: 6,
    iron: 0.4,
    phosphorus: 338,
    magnesium: 22,
    zinc: 1.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 33,
    cardiovascular: { cholesterol: 33, saturatedFat: 0.2 },
    vitaminB1: 0.08,
    vitaminB2: 0.10,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 16,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 22.0, // µg - cao trong sò điệp
    copper: 0.1, // mg
    manganese: 0.05, // mg
    iodine: 25, // µg - trung bình
    commonServing: "5–6 con vừa (~100g thịt)",
    notes: "Natri rất cao; phốt pho cao; purine trung bình.",
    gout: { purine: 110, purineLevel: "medium" },
    kidney: { potassium: 205, phosphorus: 338 },
    vietnameseUnits: [
      { unit: 'cai', weight: 15, description: '1 con vừa' },
    ],
  },
  // ========================================================================
  // Cá biển phổ biến bổ sung
  // ========================================================================
  {
    id: "ca-chim-bien",
    name: "Cá chim biển",
    nameEn: "Sea bream",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 120,
    protein: 19.0,
    carbs: 0.0,
    fat: 4.0,
    fiber: 0.0,
    water: 76.0,
    sodium: 75,
    potassium: 300,
    calcium: 28,
    iron: 1.0,
    phosphorus: 210,
    magnesium: 28,
    zinc: 0.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 0.8 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 3.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 8,
    vitaminB12: 2.5,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // µg - cao trong cá biển
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 40, // µg - cao trong cá biển
    commonServing: "1 con vừa (~100g)",
    notes: "Cá biển nạc; purine trung bình.",
    gout: { purine: 65, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 210 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-bac-ma",
    name: "Cá bạc má",
    nameEn: "Indian mackerel",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 180,
    protein: 20.0,
    carbs: 0.0,
    fat: 10.0,
    fiber: 0.0,
    water: 68.0,
    sodium: 95,
    potassium: 320,
    calcium: 20,
    iron: 1.2,
    phosphorus: 230,
    magnesium: 30,
    zinc: 1.1,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 2.5 },
    vitaminB1: 0.06,
    vitaminB2: 0.10,
    vitaminB3: 5.5, // Niacin - cao trong cá bạc má
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 8,
    vitaminB12: 3.0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 33.0, // µg - cao trong cá biển
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 43, // µg - cao trong cá biển
    commonServing: "1 con vừa (~100g)",
    notes: "Cá biển béo; purine trung bình.",
    gout: { purine: 100, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 230 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-chi-vang",
    name: "Cá chỉ vàng",
    nameEn: "Yellowtail scad",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 170,
    protein: 19.5,
    carbs: 0.0,
    fat: 9.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 90,
    potassium: 310,
    calcium: 18,
    iron: 1.1,
    phosphorus: 220,
    magnesium: 28,
    zinc: 1.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 2.2 },
    vitaminB1: 0.06,
    vitaminB2: 0.09,
    vitaminB3: 4.8, // Niacin - cao trong cá chỉ vàng
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 1.5, // Biotin (µg)
    folate: 8,
    vitaminB12: 2.8,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 31.0, // µg - cao trong cá biển
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 42, // µg - cao trong cá biển
    commonServing: "1 con vừa (~100g)",
    notes: "Cá biển phổ biến; purine trung bình.",
    gout: { purine: 95, purineLevel: "medium" },
    kidney: { potassium: 310, phosphorus: 220 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-mu",
    name: "Cá mú",
    nameEn: "Grouper",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 118,
    protein: 19.4,
    carbs: 0.0,
    fat: 3.2,
    fiber: 0.0,
    water: 76.0,
    sodium: 70,
    potassium: 325,
    calcium: 22,
    iron: 1.1,
    phosphorus: 215,
    magnesium: 29,
    zinc: 0.9,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 0.8 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 3.8, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.26,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 8,
    vitaminB12: 2.4,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 66, // mg
    selenium: 29.0, // µg - cao trong cá biển
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 41, // µg - cao trong cá biển
    commonServing: "1 khúc (~100g)",
    notes: "Cá biển nạc; purine trung bình.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 325, phosphorus: 215 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 khúc vừa' },
    ],
  },
  {
    id: "ca-hong-bien",
    name: "Cá hồng biển",
    nameEn: "Red snapper",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 128,
    protein: 20.0,
    carbs: 0.0,
    fat: 4.5,
    fiber: 0.0,
    water: 74.0,
    sodium: 72,
    potassium: 330,
    calcium: 26,
    iron: 1.0,
    phosphorus: 220,
    magnesium: 28,
    zinc: 0.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 58,
    cardiovascular: { cholesterol: 58, saturatedFat: 1.1 },
    vitaminB1: 0.06,
    vitaminB2: 0.09,
    vitaminB3: 4.0, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 8,
    vitaminB12: 2.6,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 67, // mg
    selenium: 30.0, // µg - cao trong cá biển
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 42, // µg - cao trong cá biển
    commonServing: "1 con vừa (~100g)",
    notes: "Cá biển phổ biến; purine trung bình.",
    gout: { purine: 75, purineLevel: "medium" },
    kidney: { potassium: 330, phosphorus: 220 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-duoi",
    name: "Cá đuối",
    nameEn: "Stingray",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 95,
    protein: 18.0,
    carbs: 0.0,
    fat: 1.5,
    fiber: 0.0,
    water: 79.0,
    sodium: 90,
    potassium: 310,
    calcium: 30,
    iron: 0.8,
    phosphorus: 190,
    magnesium: 27,
    zinc: 0.7,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 0.3 },
    vitaminB1: 0.04,
    vitaminB2: 0.07,
    vitaminB3: 2.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.9,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 26.0, // µg - cao trong cá biển
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 38, // µg - cao trong cá biển
    commonServing: "1 miếng (~100g)",
    notes: "Cá nạc; purine thấp–trung bình.",
    gout: { purine: 55, purineLevel: "low" },
    kidney: { potassium: 310, phosphorus: 190 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa' },
    ],
  },
  {
    id: "ca-kim",
    name: "Cá kìm",
    nameEn: "Needlefish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 105,
    protein: 18.5,
    carbs: 0.0,
    fat: 2.8,
    fiber: 0.0,
    water: 77.0,
    sodium: 80,
    potassium: 315,
    calcium: 24,
    iron: 0.9,
    phosphorus: 205,
    magnesium: 28,
    zinc: 0.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 48,
    cardiovascular: { cholesterol: 48, saturatedFat: 0.7 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 3.2, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.24,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 2.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 64, // mg
    selenium: 27.0, // µg - cao trong cá biển
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 39, // µg - cao trong cá biển
    commonServing: "1 con vừa (~100g)",
    notes: "Cá biển nạc; purine trung bình.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 315, phosphorus: 205 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-bon-bien",
    name: "Cá bơn biển",
    nameEn: "Flounder",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 91,
    protein: 18.8,
    carbs: 0.0,
    fat: 1.9,
    fiber: 0.0,
    water: 78.0,
    sodium: 70,
    potassium: 303,
    calcium: 21,
    iron: 0.7,
    phosphorus: 190,
    magnesium: 27,
    zinc: 0.6,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 0.5 },
    vitaminB1: 0.04,
    vitaminB2: 0.07,
    vitaminB3: 2.8, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 1.6,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 59, // mg
    selenium: 25.0, // µg - cao trong cá biển
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 37, // µg - cao trong cá biển
    commonServing: "1 con nhỏ (~100g)",
    notes: "Cá nạc; purine thấp.",
    gout: { purine: 50, purineLevel: "low" },
    kidney: { potassium: 303, phosphorus: 190 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con nhỏ' },
    ],
  },
  {
    id: "ca-tuyet",
    name: "Cá tuyết",
    nameEn: "Cod",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 82,
    protein: 18.0,
    carbs: 0.0,
    fat: 0.7,
    fiber: 0.0,
    water: 80.0,
    sodium: 54,
    potassium: 413,
    calcium: 16,
    iron: 0.4,
    phosphorus: 203,
    magnesium: 26,
    zinc: 0.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 43,
    cardiovascular: { cholesterol: 43, saturatedFat: 0.2 },
    vitaminB1: 0.04,
    vitaminB2: 0.06,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 6,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 58, // mg
    selenium: 24.0, // µg - cao trong cá tuyết
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 50, // µg - rất cao trong cá tuyết
    commonServing: "1 khúc (~100g)",
    notes: "Cá nạc; kali cao; purine trung bình.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 413, phosphorus: 203 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 khúc vừa' },
    ],
  },
  // ========================================================================
  // Rau lá & đậu bổ sung (264–274)
  // ========================================================================
  {
    id: "cai-xoong",
    name: "Rau cải xoong",
    nameEn: "Watercress",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 11,
    protein: 2.3,
    carbs: 1.3,
    fat: 0.1,
    fiber: 0.5,
    water: 95.0,
    sodium: 41,
    potassium: 330,
    calcium: 120,
    iron: 0.8,
    phosphorus: 60,
    magnesium: 21,
    zinc: 0.2,
    vitaminA: 3191,
    vitaminC: 43.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.14,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.13,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol - cao trong rau lá xanh
    vitaminK: 250, // Phylloquinone - rất cao trong rau lá xanh
    choline: 9.0, // mg
    selenium: 0.9, // µg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/nấu canh",
    notes: "Giàu kali; CKD chú ý.",
    kidney: { potassium: 330, phosphorus: 60 },
  },
  {
    id: "diep-ca",
    name: "Rau diếp cá",
    nameEn: "Fish mint",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 16,
    protein: 2.1,
    carbs: 2.9,
    fat: 0.3,
    fiber: 1.5,
    water: 93.0,
    sodium: 18,
    potassium: 290,
    calcium: 150,
    iron: 1.6,
    phosphorus: 45,
    magnesium: 40,
    zinc: 0.7,
    vitaminA: 3800,
    vitaminC: 12.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.08,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 80,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 200, // Phylloquinone - cao trong rau lá xanh
    choline: 8.5, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Rau gia vị; mát.",
    kidney: { potassium: 290, phosphorus: 45 },
  },
  {
    id: "rau-sam",
    name: "Rau sam",
    nameEn: "Purslane",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 20,
    protein: 2.0,
    carbs: 3.4,
    fat: 0.4,
    fiber: 1.5,
    water: 93.0,
    sodium: 45,
    potassium: 494,
    calcium: 65,
    iron: 1.9,
    phosphorus: 44,
    magnesium: 68,
    zinc: 0.2,
    vitaminA: 1320,
    vitaminC: 21.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.11,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 380, // Phylloquinone - rất cao trong rau sam
    choline: 6.5, // mg
    selenium: 0.9, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Luộc/nấu canh",
    notes: "Kali rất cao; CKD hạn chế.",
    kidney: { potassium: 494, phosphorus: 44 },
  },
  {
    id: "bo-ngot-rung",
    name: "Rau bồ ngót (ngót rừng)",
    nameEn: "Wild sweet leaf",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 37,
    protein: 5.6,
    carbs: 5.5,
    fat: 0.6,
    fiber: 2.7,
    water: 86.0,
    sodium: 25,
    potassium: 480,
    calcium: 180,
    iron: 2.9,
    phosphorus: 70,
    magnesium: 95,
    zinc: 0.9,
    vitaminA: 4500,
    vitaminC: 190.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.10,
    vitaminB2: 0.26,
    vitaminB3: 1.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.19,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 170,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong rau lá xanh
    vitaminK: 400, // Phylloquinone - rất cao trong rau lá xanh
    choline: 18.0, // mg
    selenium: 1.0, // µg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Giàu vitamin A, C.",
    kidney: { potassium: 480, phosphorus: 70 },
  },
  {
    id: "rau-don",
    name: "Rau dớn",
    nameEn: "Fiddlehead fern",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 34,
    protein: 4.6,
    carbs: 5.5,
    fat: 0.4,
    fiber: 2.0,
    water: 88.0,
    sodium: 6,
    potassium: 370,
    calcium: 110,
    iron: 2.1,
    phosphorus: 60,
    magnesium: 45,
    zinc: 0.6,
    vitaminA: 900,
    vitaminC: 26.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.15,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0.6, // Biotin (µg)
    folate: 45,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 180, // Phylloquinone - cao trong rau lá xanh
    choline: 12.0, // mg
    selenium: 0.8, // µg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "Rau rừng; kali cao.",
    kidney: { potassium: 370, phosphorus: 60 },
  },
  {
    id: "rau-cang-cua",
    name: "Rau càng cua",
    nameEn: "Peperomia pellucida",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 18,
    protein: 1.9,
    carbs: 3.2,
    fat: 0.3,
    fiber: 1.8,
    water: 93.0,
    sodium: 22,
    potassium: 260,
    calcium: 180,
    iron: 1.4,
    phosphorus: 42,
    magnesium: 38,
    zinc: 0.5,
    vitaminA: 2500,
    vitaminC: 10.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.09,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 75,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 150, // Phylloquinone - cao trong rau lá xanh
    choline: 10.0, // mg
    selenium: 0.6, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/trộn",
    notes: "Mát; canxi cao.",
    kidney: { potassium: 260, phosphorus: 42 },
  },
  {
    id: "rau-ma",
    name: "Rau má",
    nameEn: "Centella asiatica",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 1.8,
    carbs: 3.6,
    fat: 0.2,
    fiber: 1.3,
    water: 94.0,
    sodium: 20,
    potassium: 295,
    calcium: 170,
    iron: 1.3,
    phosphorus: 38,
    magnesium: 41,
    zinc: 0.6,
    vitaminA: 4420,
    vitaminC: 2.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.08,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 40,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 120, // Phylloquinone - cao trong rau lá xanh
    choline: 8.0, // mg
    selenium: 0.5, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/uống nước",
    notes: "Kali cao; CKD lưu ý.",
    kidney: { potassium: 295, phosphorus: 38 },
  },
  {
    id: "rau-he",
    name: "Rau hẹ",
    nameEn: "Garlic chives",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 30,
    protein: 3.3,
    carbs: 4.4,
    fat: 0.6,
    fiber: 2.0,
    water: 90.0,
    sodium: 10,
    potassium: 296,
    calcium: 92,
    iron: 1.6,
    phosphorus: 58,
    magnesium: 24,
    zinc: 0.4,
    vitaminA: 4350,
    vitaminC: 28.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0.6, // Biotin (µg)
    folate: 105,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 212, // Phylloquinone - rất cao trong rau hẹ
    choline: 11.0, // mg
    selenium: 0.7, // µg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Xào/nấu canh",
    notes: "Rau gia vị, nhiều vi chất.",
    kidney: { potassium: 296, phosphorus: 58 },
  },
  {
    id: "gia-do",
    name: "Giá đỗ",
    nameEn: "Mung bean sprouts",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 30,
    protein: 3.0,
    carbs: 6.2,
    fat: 0.2,
    sugars: 4.1,
    fiber: 1.8,
    water: 90.0,
    sodium: 6,
    potassium: 149,
    calcium: 13,
    iron: 0.9,
    phosphorus: 54,
    magnesium: 21,
    zinc: 0.4,
    vitaminA: 22,
    vitaminC: 13.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.12,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.09,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 61,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 33, // Phylloquinone
    choline: 14.0, // mg
    selenium: 0.6, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/xào",
    notes: "Ít kcal; dễ ăn.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 149, phosphorus: 54 },
  },
  {
    id: "bi-do-veg48",
    name: "Bí đỏ",
    nameEn: "Pumpkin",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 26,
    protein: 1.0,
    carbs: 6.5,
    fat: 0.1,
    sugars: 2.8,
    fiber: 0.5,
    water: 92.0,
    sodium: 1,
    potassium: 340,
    calcium: 21,
    iron: 0.8,
    phosphorus: 44,
    magnesium: 12,
    zinc: 0.3,
    vitaminA: 8513,
    vitaminC: 9.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.04,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.4, // Biotin (µg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.1, // Tocopherol - cao trong bí đỏ
    vitaminK: 1.1, // Phylloquinone
    choline: 8.2, // mg
    selenium: 0.3, // µg
    copper: 0.13, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh/chè",
    notes: "GI trung bình; ĐTĐ ăn vừa.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 7, carbPerPortion: 7 },
    kidney: { potassium: 340, phosphorus: 44 },
  },
  {
    id: "dau-ha-lan",
    name: "Đậu Hà Lan tươi",
    nameEn: "Green peas",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 81,
    protein: 5.4,
    carbs: 14.5,
    fat: 0.4,
    sugars: 5.7,
    fiber: 5.1,
    water: 78.0,
    sodium: 5,
    potassium: 244,
    calcium: 25,
    iron: 1.5,
    phosphorus: 108,
    magnesium: 33,
    zinc: 1.2,
    vitaminA: 765,
    vitaminC: 40.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.27,
    vitaminB2: 0.15,
    vitaminB3: 2.1, // Niacin - cao trong đậu
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 65,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 24.8, // Phylloquinone
    choline: 28.0, // mg
    selenium: 1.8, // µg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "Tinh bột + xơ.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 244, phosphorus: 108 },
  },
  // ========================================================================
  // Củ (root & tuber) + quả-rau phổ biến (275–287)
  // ========================================================================
  {
    id: "khoai-tay-veg50",
    name: "Khoai tây",
    nameEn: "Potato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 77,
    protein: 2.0,
    carbs: 17.0,
    fat: 0.1,
    sugars: 0.8,
    fiber: 2.2,
    water: 79.0,
    sodium: 6,
    potassium: 425,
    calcium: 12,
    iron: 0.8,
    phosphorus: 57,
    magnesium: 23,
    zinc: 0.3,
    vitaminA: 2,
    vitaminC: 19.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.03,
    vitaminB3: 1.1, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 2.0, // Phylloquinone
    choline: 12.1, // mg
    selenium: 0.3, // µg
    copper: 0.11, // mg
    manganese: 0.15, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (~100g)",
    notes: "GI trung bình; ĐTĐ ăn vừa.",
    diabetes: { glycemicIndex: 78, glycemicLoad: 13, carbPerPortion: 17 },
    kidney: { potassium: 425, phosphorus: 57 },
  },
  {
    id: "khoai-mi",
    name: "Khoai mì (sắn)",
    nameEn: "Cassava root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 160,
    protein: 1.4,
    carbs: 38.0,
    fat: 0.3,
    sugars: 1.7,
    fiber: 1.8,
    water: 60.0,
    sodium: 14,
    potassium: 271,
    calcium: 16,
    iron: 0.3,
    phosphorus: 27,
    magnesium: 21,
    zinc: 0.3,
    vitaminA: 13,
    vitaminC: 20.6,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.04,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.09,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 27,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.19, // Tocopherol
    vitaminK: 1.9, // Phylloquinone
    choline: 23.7, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 khúc (~100g)",
    notes: "Tinh bột cao; ĐTĐ hạn chế.",
    diabetes: { glycemicIndex: 94, glycemicLoad: 36, carbPerPortion: 38 },
    kidney: { potassium: 271, phosphorus: 27 },
  },
  {
    id: "cu-nang",
    name: "Củ năng (mã thầy)",
    nameEn: "Water chestnut",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 1.4,
    carbs: 23.9,
    fat: 0.1,
    sugars: 4.8,
    fiber: 3.0,
    water: 73.0,
    sodium: 14,
    potassium: 584,
    calcium: 11,
    iron: 0.6,
    phosphorus: 63,
    magnesium: 33,
    zinc: 0.4,
    vitaminA: 0,
    vitaminC: 4.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.07,
    vitaminB2: 0.05,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.33,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 5.0, // mg
    selenium: 0.7, // µg
    copper: 0.3, // mg - cao trong củ năng
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Nấu chè/ăn sống",
    notes: "Kali cao; CKD chú ý.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 14, carbPerPortion: 24 },
    kidney: { potassium: 584, phosphorus: 63 },
  },
  {
    id: "cu-sen",
    name: "Củ sen",
    nameEn: "Lotus root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 74,
    protein: 2.6,
    carbs: 17.2,
    fat: 0.1,
    sugars: 0.2,
    fiber: 4.9,
    water: 80.0,
    sodium: 40,
    potassium: 556,
    calcium: 45,
    iron: 1.2,
    phosphorus: 100,
    magnesium: 24,
    zinc: 0.5,
    vitaminA: 13,
    vitaminC: 44.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.16,
    vitaminB2: 0.03,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.26,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 13,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 44.1, // mg - cao trong củ sen
    selenium: 0.7, // µg
    copper: 0.3, // mg - cao trong củ sen
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Xào/hầm",
    notes: "Xơ cao; GI trung bình.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 10, carbPerPortion: 17 },
    kidney: { potassium: 556, phosphorus: 100 },
  },
  {
    id: "gung",
    name: "Gừng",
    nameEn: "Ginger root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 80,
    protein: 1.8,
    carbs: 17.8,
    fat: 0.8,
    sugars: 1.7,
    fiber: 2.0,
    water: 78.0,
    sodium: 13,
    potassium: 415,
    calcium: 16,
    iron: 0.6,
    phosphorus: 34,
    magnesium: 43,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 5.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 11,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.26, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 28.8, // mg
    selenium: 0.7, // µg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Gia vị",
    notes: "Dùng lượng nhỏ.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 2, carbPerPortion: 4 },
    kidney: { potassium: 415, phosphorus: 34 },
  },
  {
    id: "nghe",
    name: "Nghệ tươi",
    nameEn: "Turmeric root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 312,
    protein: 9.7,
    carbs: 67.1,
    fat: 3.3,
    sugars: 3.2,
    fiber: 22.7,
    water: 12.0,
    sodium: 38,
    potassium: 2080,
    calcium: 168,
    iron: 55.0,
    phosphorus: 299,
    magnesium: 208,
    zinc: 4.4,
    vitaminA: 0,
    vitaminC: 0.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.15,
    vitaminB2: 0.23,
    vitaminB3: 1.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 4.4, // Tocopherol - rất cao trong nghệ
    vitaminK: 13.4, // Phylloquinone
    choline: 49.2, // mg - cao trong nghệ
    selenium: 4.5, // µg - cao trong nghệ
    copper: 0.6, // mg - cao trong nghệ
    manganese: 2.0, // mg - rất cao trong nghệ
    iodine: 0, // µg
    commonServing: "Gia vị",
    notes: "Dùng ít; giàu curcumin.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 20, carbPerPortion: 67 },
    kidney: { potassium: 2080, phosphorus: 299 },
  },
  {
    id: "ca-chua-bi",
    name: "Cà chua bi",
    nameEn: "Cherry tomato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    sugars: 2.6,
    fiber: 1.2,
    water: 95.0,
    sodium: 5,
    potassium: 237,
    calcium: 10,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 11,
    zinc: 0.2,
    vitaminA: 833,
    vitaminC: 13.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.02,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 15,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.2, // µg
    copper: 0.06, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "GI thấp.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 237, phosphorus: 24 },
  },
  {
    id: "ot-chuong",
    name: "Ớt chuông",
    nameEn: "Bell pepper",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 31,
    protein: 1.0,
    carbs: 6.0,
    fat: 0.3,
    sugars: 4.2,
    fiber: 2.1,
    water: 92.0,
    sodium: 4,
    potassium: 211,
    calcium: 7,
    iron: 0.4,
    phosphorus: 26,
    magnesium: 12,
    zinc: 0.3,
    vitaminA: 372,
    vitaminC: 127.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.03,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.29,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 46,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.6, // Tocopherol - cao trong ớt chuông
    vitaminK: 4.9, // Phylloquinone
    choline: 5.5, // mg
    selenium: 0.3, // µg
    copper: 0.07, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Xào/ăn sống",
    notes: "Vitamin C rất cao.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 211, phosphorus: 26 },
  },
  {
    id: "bi-ngoi",
    name: "Bí ngòi",
    nameEn: "Zucchini",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 17,
    protein: 1.2,
    carbs: 3.1,
    fat: 0.3,
    sugars: 1.7,
    fiber: 1.0,
    water: 94.0,
    sodium: 8,
    potassium: 261,
    calcium: 16,
    iron: 0.4,
    phosphorus: 38,
    magnesium: 18,
    zinc: 0.3,
    vitaminA: 200,
    vitaminC: 17.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.09,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 24,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.3, // Phylloquinone
    choline: 9.5, // mg
    selenium: 0.2, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Xào/hấp",
    notes: "Ít năng lượng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 261, phosphorus: 38 },
  },
  {
    id: "kho-qua-rung",
    name: "Khổ qua rừng",
    nameEn: "Wild bitter melon",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 1.1,
    carbs: 3.2,
    fat: 0.2,
    sugars: 0.8,
    fiber: 2.8,
    water: 94.0,
    sodium: 6,
    potassium: 305,
    calcium: 20,
    iron: 0.4,
    phosphorus: 33,
    magnesium: 19,
    zinc: 0.2,
    vitaminA: 500,
    vitaminC: 88.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 72,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.8, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.2, // µg
    copper: 0.03, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Xào/nấu canh",
    notes: "Hay dùng cho ĐTĐ.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 305, phosphorus: 33 },
  },
  {
    id: "du-du-xanh",
    name: "Đu đủ xanh",
    nameEn: "Green papaya",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 39,
    protein: 0.6,
    carbs: 9.8,
    fat: 0.2,
    sugars: 5.9,
    fiber: 1.8,
    water: 88.0,
    sodium: 7,
    potassium: 182,
    calcium: 24,
    iron: 0.3,
    phosphorus: 15,
    magnesium: 21,
    zinc: 0.2,
    vitaminA: 950,
    vitaminC: 60.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 37,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "Gỏi/nấu canh",
    notes: "GI thấp.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 182, phosphorus: 15 },
  },
  {
    id: "su-hao",
    name: "Su hào",
    nameEn: "Kohlrabi",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 1.7,
    carbs: 6.2,
    fat: 0.1,
    sugars: 2.6,
    fiber: 3.6,
    water: 91.0,
    sodium: 20,
    potassium: 350,
    calcium: 24,
    iron: 0.4,
    phosphorus: 46,
    magnesium: 19,
    zinc: 0.3,
    vitaminA: 40,
    vitaminC: 62.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.02,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.17,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.3, // mg
    selenium: 0.7, // µg
    copper: 0.13, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "Xơ cao; mát.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 2, carbPerPortion: 6 },
    kidney: { potassium: 350, phosphorus: 46 },
  },
  {
    id: "dau-que",
    name: "Đậu que",
    nameEn: "Green beans",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 31,
    protein: 1.8,
    carbs: 7.0,
    fat: 0.1,
    sugars: 3.3,
    fiber: 3.4,
    water: 90.0,
    sodium: 6,
    potassium: 211,
    calcium: 37,
    iron: 1.0,
    phosphorus: 38,
    magnesium: 25,
    zinc: 0.3,
    vitaminA: 690,
    vitaminC: 12.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 33,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 14.4, // Phylloquinone - cao trong đậu que
    choline: 15.3, // mg
    selenium: 0.6, // µg
    copper: 0.07, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "GI thấp.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 211, phosphorus: 38 },
  },
  // ========================================================================
  // Trái cây phổ biến bổ sung (288–300)
  // ========================================================================
  {
    id: "chuoi-tieu-fr28",
    name: "Chuối tiêu chín",
    nameEn: "Banana",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 1.1,
    carbs: 22.8,
    fat: 0.3,
    sugars: 12.2,
    fiber: 2.6,
    water: 74.0,
    sodium: 1,
    potassium: 358,
    calcium: 5,
    iron: 0.3,
    phosphorus: 22,
    magnesium: 27,
    zinc: 0.2,
    vitaminA: 64,
    vitaminC: 8.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.07,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.37,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // µg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // µg
    commonServing: "1 quả vừa (~100g)",
    notes: "GI trung bình; kali cao.",
    diabetes: { glycemicIndex: 62, glycemicLoad: 14, carbPerPortion: 23 },
    kidney: { potassium: 358, phosphorus: 22 },
  },
  {
    id: "cam-sanh-fr29",
    name: "Cam sành",
    nameEn: "Orange",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 47,
    protein: 0.9,
    carbs: 11.8,
    fat: 0.1,
    sugars: 9.4,
    fiber: 2.4,
    water: 86.0,
    sodium: 0,
    potassium: 181,
    calcium: 40,
    iron: 0.1,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 225,
    vitaminC: 53.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 30,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // µg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~150g)",
    notes: "Vitamin C cao.",
    diabetes: { glycemicIndex: 43, glycemicLoad: 5, carbPerPortion: 12 },
    kidney: { potassium: 181, phosphorus: 14 },
  },
  {
    id: "quyt-fr30",
    name: "Quýt",
    nameEn: "Mandarin orange",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 53,
    protein: 0.8,
    carbs: 13.3,
    fat: 0.3,
    sugars: 10.6,
    fiber: 1.8,
    water: 85.0,
    sodium: 2,
    potassium: 166,
    calcium: 37,
    iron: 0.2,
    phosphorus: 20,
    magnesium: 12,
    zinc: 0.1,
    vitaminA: 681,
    vitaminC: 26.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.07,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.2, // mg
    selenium: 0.1, // µg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Ngọt hơn cam.",
    diabetes: { glycemicIndex: 47, glycemicLoad: 6, carbPerPortion: 13 },
    kidney: { potassium: 166, phosphorus: 20 },
  },
  {
    id: "buoi-da-xanh",
    name: "Bưởi da xanh",
    nameEn: "Pomelo",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 38,
    protein: 0.8,
    carbs: 9.6,
    fat: 0.0,
    sugars: 6.1,
    fiber: 1.0,
    water: 90.0,
    sodium: 1,
    potassium: 216,
    calcium: 4,
    iron: 0.1,
    phosphorus: 17,
    magnesium: 6,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 61.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.02,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 0.1, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 múi (~100g)",
    notes: "GI thấp; ĐTĐ phù hợp.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 216, phosphorus: 17 },
  },
  {
    id: "sau-rieng-fr32",
    name: "Sầu riêng",
    nameEn: "Durian",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 147,
    protein: 1.5,
    carbs: 27.1,
    fat: 5.3,
    sugars: 19.9,
    fiber: 3.8,
    water: 65.0,
    sodium: 2,
    potassium: 436,
    calcium: 6,
    iron: 0.4,
    phosphorus: 39,
    magnesium: 30,
    zinc: 0.3,
    vitaminA: 44,
    vitaminC: 19.7,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.37,
    vitaminB2: 0.20,
    vitaminB3: 1.1, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.32,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 44,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 9.9, // mg
    selenium: 0.2, // µg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~50g",
    notes: "Đường & năng lượng cao.",
    diabetes: { glycemicIndex: 49, glycemicLoad: 13, carbPerPortion: 27 },
    kidney: { potassium: 436, phosphorus: 39 },
  },
  {
    id: "mang-cut-fr33",
    name: "Măng cụt",
    nameEn: "Mangosteen",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 73,
    protein: 0.6,
    carbs: 18.0,
    fat: 0.6,
    sugars: 16.0,
    fiber: 1.8,
    water: 80.0,
    sodium: 7,
    potassium: 48,
    calcium: 12,
    iron: 0.3,
    phosphorus: 8,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 35,
    vitaminC: 2.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.06,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 31,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 0.0, // µg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1–2 quả (~100g)",
    notes: "Ngọt; ăn vừa.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 11, carbPerPortion: 18 },
    kidney: { potassium: 48, phosphorus: 8 },
  },
  {
    id: "chom-chom-fr34",
    name: "Chôm chôm",
    nameEn: "Rambutan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 68,
    protein: 0.9,
    carbs: 16.5,
    fat: 0.2,
    sugars: 13.2,
    fiber: 0.9,
    water: 82.0,
    sodium: 11,
    potassium: 42,
    calcium: 22,
    iron: 0.4,
    phosphorus: 9,
    magnesium: 7,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 4.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.01,
    vitaminB2: 0.07,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.02,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 8,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // µg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~100g",
    notes: "Đường cao.",
    diabetes: { glycemicIndex: 59, glycemicLoad: 10, carbPerPortion: 17 },
    kidney: { potassium: 42, phosphorus: 9 },
  },
  {
    id: "nhan-fr35",
    name: "Nhãn",
    nameEn: "Longan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 60,
    protein: 1.3,
    carbs: 15.1,
    fat: 0.1,
    sugars: 14.0,
    fiber: 1.1,
    water: 82.0,
    sodium: 0,
    potassium: 266,
    calcium: 1,
    iron: 0.1,
    phosphorus: 21,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 84.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.14,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // µg
    copper: 0.2, // mg - cao trong nhãn
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~100g",
    notes: "Ngọt; ĐTĐ hạn chế.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 266, phosphorus: 21 },
  },
  {
    id: "vai",
    name: "Vải",
    nameEn: "Lychee",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 66,
    protein: 0.8,
    carbs: 16.5,
    fat: 0.4,
    sugars: 15.2,
    fiber: 1.3,
    water: 82.0,
    sodium: 1,
    potassium: 171,
    calcium: 5,
    iron: 0.3,
    phosphorus: 31,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 71.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.01,
    vitaminB2: 0.07,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // µg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn ~100g",
    notes: "Đường cao.",
    diabetes: { glycemicIndex: 50, glycemicLoad: 8, carbPerPortion: 17 },
    kidney: { potassium: 171, phosphorus: 31 },
  },
  {
    id: "dua-thom-fr37",
    name: "Dứa (thơm)",
    nameEn: "Pineapple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 50,
    protein: 0.5,
    carbs: 13.1,
    fat: 0.1,
    sugars: 9.9,
    fiber: 1.4,
    water: 86.0,
    sodium: 1,
    potassium: 109,
    calcium: 13,
    iron: 0.5,
    phosphorus: 8,
    magnesium: 12,
    zinc: 0.1,
    vitaminA: 58,
    vitaminC: 47.8,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.02,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 18,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 5.5, // mg
    selenium: 0.1, // µg
    copper: 0.1, // mg
    manganese: 0.9, // mg - rất cao trong dứa
    iodine: 0, // µg
    commonServing: "1 lát (~100g)",
    notes: "GI trung bình.",
    diabetes: { glycemicIndex: 59, glycemicLoad: 8, carbPerPortion: 13 },
    kidney: { potassium: 109, phosphorus: 8 },
  },
  {
    id: "oi-fr38",
    name: "Ổi",
    nameEn: "Guava",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 68,
    protein: 2.6,
    carbs: 14.3,
    fat: 1.0,
    sugars: 8.9,
    fiber: 5.4,
    water: 80.0,
    sodium: 2,
    potassium: 417,
    calcium: 18,
    iron: 0.3,
    phosphorus: 40,
    magnesium: 22,
    zinc: 0.2,
    vitaminA: 624,
    vitaminC: 228.3,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.07,
    vitaminB2: 0.04,
    vitaminB3: 1.1, // Niacin - cao trong ổi
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 49,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.23, // mg - cao trong ổi
    manganese: 0.15, // mg
    iodine: 0, // µg
    commonServing: "1 quả (~100g)",
    notes: "Xơ cao; ĐTĐ phù hợp.",
    diabetes: { glycemicIndex: 31, glycemicLoad: 4, carbPerPortion: 14 },
    kidney: { potassium: 417, phosphorus: 40 },
  },
  {
    id: "coc",
    name: "Cóc",
    nameEn: "Ambarella",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 47,
    protein: 0.7,
    carbs: 11.4,
    fat: 0.2,
    sugars: 8.1,
    fiber: 1.8,
    water: 87.0,
    sodium: 3,
    potassium: 287,
    calcium: 10,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 14,
    zinc: 0.2,
    vitaminA: 30,
    vitaminC: 34.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.07,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 18,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // µg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Chua; kali khá cao.",
    diabetes: { glycemicIndex: 40, glycemicLoad: 5, carbPerPortion: 11 },
    kidney: { potassium: 287, phosphorus: 24 },
  },
  {
    id: "me-xanh",
    name: "Me xanh",
    nameEn: "Green tamarind",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 79,
    protein: 2.8,
    carbs: 20.0,
    fat: 0.6,
    sugars: 16.0,
    fiber: 5.1,
    water: 72.0,
    sodium: 28,
    potassium: 628,
    calcium: 74,
    iron: 2.8,
    phosphorus: 113,
    magnesium: 92,
    zinc: 1.0,
    vitaminA: 30,
    vitaminC: 3.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.43,
    vitaminB2: 0.15,
    vitaminB3: 1.9, // Niacin - cao trong me
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.38,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 2.8, // Phylloquinone
    choline: 8.6, // mg
    selenium: 1.3, // µg
    copper: 0.9, // mg - rất cao trong me
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn rất ít",
    notes: "Đường + acid cao.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 11, carbPerPortion: 20 },
    kidney: { potassium: 628, phosphorus: 113 },
  },
  // ========================================================================
  // Món nước & món chính phổ biến (301–315)
  // ========================================================================
  {
    id: "pho-bo-viet01",
    name: "Phở bò",
    nameEn: "Beef pho",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 380,
    protein: 25.0,
    carbs: 45.0,
    fat: 9.0,
    sugars: 3.0,
    fiber: 2.0,
    water: 70.0,
    sodium: 950,
    potassium: 350,
    calcium: 40,
    iron: 2.8,
    phosphorus: 180,
    magnesium: 35,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 3.5 },
    vitaminB1: 0.20,
    vitaminB2: 0.15,
    vitaminB3: 4.0, // Niacin - cao từ thịt bò
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 18,
    vitaminB12: 0.5, // µg - từ thịt bò
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 12.0, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~400g)",
    notes: "Nước dùng mặn; THA lưu ý.",
    gout: {
      purine: 160,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 350, phosphorus: 180 },
  },
  {
    id: "pho-ga-viet02",
    name: "Phở gà",
    nameEn: "Chicken pho",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 340,
    protein: 24.0,
    carbs: 42.0,
    fat: 7.0,
    sugars: 2.0,
    fiber: 2.0,
    water: 72.0,
    sodium: 850,
    potassium: 330,
    calcium: 35,
    iron: 2.2,
    phosphorus: 160,
    magnesium: 32,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 2.5 },
    vitaminB1: 0.18,
    vitaminB2: 0.14,
    vitaminB3: 6.0, // Niacin - rất cao từ thịt gà
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 16,
    vitaminB12: 0.3, // µg - từ thịt gà
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 10.0, // µg
    copper: 0.08, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~400g)",
    notes: "Ít béo hơn phở bò.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 60, glycemicLoad: 25, carbPerPortion: 42 },
    kidney: { potassium: 330, phosphorus: 160 },
  },
  {
    id: "bun-bo-hue-viet03",
    name: "Bún bò Huế",
    nameEn: "Bun bo Hue",
    category: "soups",
    servingSize: 450,
    servingUnit: "g",
    calories: 420,
    protein: 26.0,
    carbs: 48.0,
    fat: 14.0,
    sugars: 3.0,
    fiber: 2.0,
    water: 65.0,
    sodium: 1200,
    potassium: 380,
    calcium: 45,
    iron: 3.0,
    phosphorus: 210,
    magnesium: 38,
    zinc: 2.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 5.5 },
    vitaminB1: 0.22,
    vitaminB2: 0.18,
    vitaminB3: 4.5, // Niacin - cao từ thịt bò
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (µg)
    folate: 20,
    vitaminB12: 0.6, // µg - từ thịt bò
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg
    selenium: 13.0, // µg
    copper: 0.12, // mg
    manganese: 0.6, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~450g)",
    notes: "Rất mặn + béo.",
    gout: {
      purine: 160,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 380, phosphorus: 210 },
  },
  {
    id: "bun-cha-viet04",
    name: "Bún chả",
    nameEn: "Bun cha",
    category: "soups",
    servingSize: 450,
    servingUnit: "g",
    calories: 460,
    protein: 24.0,
    carbs: 55.0,
    fat: 16.0,
    sugars: 8.0,
    fiber: 2.5,
    water: 60.0,
    sodium: 1100,
    potassium: 320,
    calcium: 40,
    iron: 2.6,
    phosphorus: 190,
    magnesium: 34,
    zinc: 2.1,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 6.0 },
    vitaminB1: 0.20,
    vitaminB2: 0.16,
    vitaminB3: 4.5, // Niacin - cao từ thịt heo
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 18,
    vitaminB12: 0.4, // µg - từ thịt heo
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 19.0, // mg
    selenium: 11.0, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 suất",
    notes: "Nước chấm mặn.",
    diabetes: { glycemicIndex: 68, glycemicLoad: 37, carbPerPortion: 55 },
    kidney: { potassium: 320, phosphorus: 190 },
  },
  {
    id: "com-tam-suon-viet05",
    name: "Cơm tấm sườn",
    nameEn: "Broken rice with pork chop",
    category: "rice-noodles",
    servingSize: 450,
    servingUnit: "g",
    calories: 560,
    protein: 28.0,
    carbs: 68.0,
    fat: 18.0,
    sugars: 6.0,
    fiber: 2.5,
    water: 55.0,
    sodium: 1050,
    potassium: 400,
    calcium: 50,
    iron: 3.2,
    phosphorus: 230,
    magnesium: 40,
    zinc: 2.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 7.5 },
    vitaminB1: 0.18,
    vitaminB2: 0.14,
    vitaminB3: 5.0, // Niacin - cao từ thịt heo
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (µg)
    folate: 16,
    vitaminB12: 0.5, // µg - từ thịt heo
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 25.0, // mg
    selenium: 15.0, // µg
    copper: 0.12, // mg
    manganese: 0.6, // mg
    iodine: 0, // µg
    commonServing: "1 đĩa",
    notes: "Tinh bột + mỡ + mắm.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 51, carbPerPortion: 68 },
    kidney: { potassium: 400, phosphorus: 230 },
  },
  {
    id: "com-ga-xoi-mo",
    name: "Cơm gà xối mỡ",
    nameEn: "Fried chicken rice",
    category: "rice-noodles",
    servingSize: 450,
    servingUnit: "g",
    calories: 620,
    protein: 30.0,
    carbs: 65.0,
    fat: 24.0,
    sugars: 4.0,
    fiber: 2.0,
    water: 50.0,
    sodium: 980,
    potassium: 420,
    calcium: 45,
    iron: 2.8,
    phosphorus: 220,
    magnesium: 38,
    zinc: 2.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 90,
    cardiovascular: { cholesterol: 90, saturatedFat: 9.5 },
    vitaminB1: 0.16,
    vitaminB2: 0.12,
    vitaminB3: 7.0, // Niacin - rất cao từ thịt gà
    vitaminB5: 1.0, // Pantothenic acid - cao
    vitaminB6: 0.18,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 15,
    vitaminB12: 0.3, // µg - từ thịt gà
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg
    selenium: 12.0, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 đĩa",
    notes: "Béo; tim mạch hạn chế.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 78, glycemicLoad: 51, carbPerPortion: 65 },
    kidney: { potassium: 420, phosphorus: 220 },
  },
  {
    id: "chao-thit-bam",
    name: "Cháo thịt bằm",
    nameEn: "Pork porridge",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 280,
    protein: 12.0,
    carbs: 45.0,
    fat: 6.0,
    sugars: 2.0,
    fiber: 1.0,
    water: 75.0,
    sodium: 700,
    potassium: 220,
    calcium: 25,
    iron: 1.5,
    phosphorus: 150,
    magnesium: 28,
    zinc: 1.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 2.0 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 3.5, // Niacin - từ thịt heo
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 12,
    vitaminB12: 0.3, // µg - từ thịt heo
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.0, // mg
    selenium: 8.0, // µg
    copper: 0.08, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~400g)",
    notes: "Dễ tiêu; natri vừa.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 70, glycemicLoad: 31, carbPerPortion: 45 },
    kidney: { potassium: 220, phosphorus: 150 },
  },
  {
    id: "chao-long",
    name: "Cháo lòng",
    nameEn: "Pork offal porridge",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 350,
    protein: 18.0,
    carbs: 42.0,
    fat: 12.0,
    sugars: 2.0,
    fiber: 1.5,
    water: 68.0,
    sodium: 900,
    potassium: 260,
    calcium: 30,
    iron: 2.8,
    phosphorus: 200,
    magnesium: 35,
    zinc: 3.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 110,
    cardiovascular: { cholesterol: 110, saturatedFat: 4.5 },
    vitaminB1: 0.15,
    vitaminB2: 0.12,
    vitaminB3: 8.0, // Niacin - rất cao từ nội tạng
    vitaminB5: 2.0, // Pantothenic acid - cao từ nội tạng
    vitaminB6: 0.18,
    vitaminB7: 3.0, // Biotin (µg) - cao từ nội tạng
    folate: 20,
    vitaminB12: 1.5, // µg - cao từ nội tạng
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 30.0, // mg - cao từ nội tạng
    selenium: 18.0, // µg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 tô",
    notes: "Nội tạng; gút tránh.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 29, carbPerPortion: 42 },
    kidney: { potassium: 260, phosphorus: 200 },
  },
  {
    id: "banh-cuon-viet09",
    name: "Bánh cuốn",
    nameEn: "Steamed rice rolls",
    category: "rice-noodles",
    servingSize: 300,
    servingUnit: "g",
    calories: 330,
    protein: 12.0,
    carbs: 58.0,
    fat: 7.0,
    sugars: 2.0,
    fiber: 1.8,
    water: 70.0,
    sodium: 650,
    potassium: 180,
    calcium: 35,
    iron: 2.0,
    phosphorus: 140,
    magnesium: 26,
    zinc: 1.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 2.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.10,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 14,
    vitaminB12: 0.2, // µg - từ thịt
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // µg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 đĩa",
    notes: "Tinh bột + mắm.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 43, carbPerPortion: 58 },
    kidney: { potassium: 180, phosphorus: 140 },
  },
  {
    id: "banh-xeo-viet10",
    name: "Bánh xèo",
    nameEn: "Vietnamese pancake",
    category: "snacks",
    servingSize: 300,
    servingUnit: "g",
    calories: 430,
    protein: 14.0,
    carbs: 45.0,
    fat: 22.0,
    sugars: 3.0,
    fiber: 2.5,
    water: 55.0,
    sodium: 820,
    potassium: 300,
    calcium: 40,
    iron: 2.4,
    phosphorus: 180,
    magnesium: 32,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 8.5 },
    vitaminB1: 0.16,
    vitaminB2: 0.12,
    vitaminB3: 2.5, // Niacin - từ thịt và tôm
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0.6, // Biotin (µg)
    folate: 15,
    vitaminB12: 0.3, // µg - từ thịt và tôm
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.0, // mg
    selenium: 8.0, // µg
    copper: 0.15, // mg
    manganese: 0.5, // mg
    iodine: 5, // µg - từ tôm
    commonServing: "1 cái lớn",
    notes: "Chiên dầu; béo.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 32, carbPerPortion: 45 },
    kidney: { potassium: 300, phosphorus: 180 },
  },
  {
    id: "goi-cuon",
    name: "Gỏi cuốn tôm thịt",
    nameEn: "Fresh spring rolls",
    category: "snacks",
    servingSize: 200,
    servingUnit: "g",
    calories: 240,
    protein: 14.0,
    carbs: 28.0,
    fat: 8.0,
    sugars: 2.0,
    fiber: 3.0,
    water: 60.0,
    sodium: 420,
    potassium: 260,
    calcium: 50,
    iron: 2.0,
    phosphorus: 150,
    magnesium: 28,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 2.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB3: 2.0, // Niacin - từ tôm và thịt
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 18,
    vitaminB12: 0.4, // µg - từ tôm và thịt
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.0, // mg
    selenium: 7.0, // µg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 8, // µg - từ tôm
    commonServing: "2 cuốn",
    notes: "Ít dầu; nước chấm mặn.",
    gout: {
      purine: 145,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 45, glycemicLoad: 13, carbPerPortion: 28 },
    kidney: { potassium: 260, phosphorus: 150 },
  },
  {
    id: "nem-ran-viet12",
    name: "Nem rán (chả giò)",
    nameEn: "Spring rolls fried",
    category: "snacks",
    servingSize: 150,
    servingUnit: "g",
    calories: 380,
    protein: 14.0,
    carbs: 30.0,
    fat: 24.0,
    sugars: 2.0,
    fiber: 2.0,
    water: 50.0,
    sodium: 750,
    potassium: 260,
    calcium: 35,
    iron: 2.2,
    phosphorus: 170,
    magnesium: 30,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 9.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB3: 2.2, // Niacin - từ thịt
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.6, // Biotin (µg)
    folate: 15,
    vitaminB12: 0.3, // µg - từ thịt
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 11.0, // mg
    selenium: 7.0, // µg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "3–4 cuốn",
    notes: "Chiên dầu; béo.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 21, carbPerPortion: 30 },
    kidney: { potassium: 260, phosphorus: 170 },
  },
  {
    id: "canh-chua-ca",
    name: "Canh chua cá",
    nameEn: "Sour fish soup",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 180,
    protein: 18.0,
    carbs: 12.0,
    fat: 6.0,
    sugars: 4.0,
    fiber: 1.5,
    water: 75.0,
    sodium: 600,
    potassium: 320,
    calcium: 60,
    iron: 2.0,
    phosphorus: 180,
    magnesium: 30,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 1.8 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 3.5, // Niacin - từ cá
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 14,
    vitaminB12: 1.2, // µg - cao từ cá
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 15.0, // mg
    selenium: 10.0, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 10, // µg - từ cá
    commonServing: "1 tô",
    notes: "Mặn vừa; nhiều rau.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 40, glycemicLoad: 5, carbPerPortion: 12 },
    kidney: { potassium: 320, phosphorus: 180 },
  },
  {
    id: "ca-kho-to",
    name: "Cá kho tộ",
    nameEn: "Braised fish in clay pot",
    category: "seafood",
    servingSize: 200,
    servingUnit: "g",
    calories: 360,
    protein: 28.0,
    carbs: 6.0,
    fat: 22.0,
    sugars: 4.0,
    fiber: 0.5,
    water: 55.0,
    sodium: 1100,
    potassium: 380,
    calcium: 40,
    iron: 3.0,
    phosphorus: 260,
    magnesium: 38,
    zinc: 2.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 6.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB3: 4.0, // Niacin - từ cá
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.2, // Biotin (µg)
    folate: 16,
    vitaminB12: 1.5, // µg - cao từ cá
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 12.0, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 12, // µg - từ cá
    commonServing: "1 phần (~200g)",
    notes: "Mặn; purine trung bình.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 380, phosphorus: 260 },
  },
  {
    id: "thit-kho-trung-viet15",
    name: "Thịt kho trứng",
    nameEn: "Braised pork with eggs",
    category: "meat",
    servingSize: 200,
    servingUnit: "g",
    calories: 520,
    protein: 26.0,
    carbs: 6.0,
    fat: 42.0,
    sugars: 4.0,
    fiber: 0.5,
    water: 45.0,
    sodium: 900,
    potassium: 360,
    calcium: 50,
    iron: 2.8,
    phosphorus: 240,
    magnesium: 35,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 160,
    cardiovascular: { cholesterol: 160, saturatedFat: 15.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB3: 5.0, // Niacin - cao từ thịt heo và trứng
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.5, // Biotin (µg) - từ trứng
    folate: 14,
    vitaminB12: 0.8, // µg - từ thịt và trứng
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 30.0, // mg - cao từ trứng
    selenium: 18.0, // µg
    copper: 0.12, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 phần (~200g)",
    notes: "Rất béo + mặn.",
    kidney: { potassium: 360, phosphorus: 240 },
  },
  // ========================================================================
  // Món Việt bổ sung (Hủ tiếu, mì Quảng, xôi, bánh Tết, cơm chiên…) 316–330
  // ========================================================================
  {
    id: "hu-tieu-nam-vang",
    name: "Hủ tiếu Nam Vang",
    nameEn: "Hu tieu Nam Vang",
    category: "soups",
    servingSize: 450,
    servingUnit: "g",
    calories: 430,
    protein: 26.0,
    carbs: 50.0,
    fat: 12.0,
    sugars: 3.0,
    fiber: 2.0,
    water: 65.0,
    sodium: 1050,
    potassium: 360,
    calcium: 45,
    iron: 2.6,
    phosphorus: 200,
    magnesium: 34,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 4.5 },
    vitaminB1: 0.18,
    vitaminB2: 0.14,
    vitaminB3: 4.5, // Niacin - từ thịt và tôm
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 18,
    vitaminB12: 0.5, // µg - từ thịt và tôm
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 12.0, // µg
    copper: 0.15, // mg
    manganese: 0.5, // mg
    iodine: 5, // µg - từ tôm
    commonServing: "1 tô (~450g)",
    notes: "Nước dùng mặn; nhiều topping.",
    diabetes: { glycemicIndex: 68, glycemicLoad: 34, carbPerPortion: 50 },
    kidney: { potassium: 360, phosphorus: 200 },
  },
  {
    id: "mi-quang-viet17",
    name: "Mì Quảng",
    nameEn: "Mi Quang",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 420,
    protein: 24.0,
    carbs: 45.0,
    fat: 14.0,
    sugars: 3.0,
    fiber: 2.5,
    water: 60.0,
    sodium: 950,
    potassium: 340,
    calcium: 40,
    iron: 2.4,
    phosphorus: 190,
    magnesium: 32,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 5.0 },
    vitaminB1: 0.16,
    vitaminB2: 0.12,
    vitaminB3: 4.0, // Niacin - từ thịt và tôm
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 16,
    vitaminB12: 0.4, // µg - từ thịt và tôm
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 10.0, // µg
    copper: 0.12, // mg
    manganese: 0.5, // mg
    iodine: 4, // µg - từ tôm
    commonServing: "1 tô (~400g)",
    notes: "Ít nước; nhiều dầu.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 340, phosphorus: 190 },
  },
  {
    id: "cao-lau",
    name: "Cao lầu",
    nameEn: "Cao lau",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 410,
    protein: 23.0,
    carbs: 48.0,
    fat: 13.0,
    sugars: 2.5,
    fiber: 2.0,
    water: 60.0,
    sodium: 900,
    potassium: 330,
    calcium: 38,
    iron: 2.2,
    phosphorus: 180,
    magnesium: 30,
    zinc: 1.9,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 4.5 },
    vitaminB1: 0.15,
    vitaminB2: 0.12,
    vitaminB3: 3.5, // Niacin - từ thịt
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0.6, // Biotin (µg)
    folate: 15,
    vitaminB12: 0.3, // µg - từ thịt
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 16.0, // mg
    selenium: 9.0, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~400g)",
    notes: "Mì dai; mặn vừa.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 31, carbPerPortion: 48 },
    kidney: { potassium: 330, phosphorus: 180 },
  },
  {
    id: "bun-mam",
    name: "Bún mắm",
    nameEn: "Bun mam",
    category: "soups",
    servingSize: 450,
    servingUnit: "g",
    calories: 480,
    protein: 28.0,
    carbs: 50.0,
    fat: 18.0,
    sugars: 4.0,
    fiber: 2.0,
    water: 55.0,
    sodium: 1300,
    potassium: 380,
    calcium: 50,
    iron: 3.0,
    phosphorus: 240,
    magnesium: 38,
    zinc: 2.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 80,
    cardiovascular: { cholesterol: 80, saturatedFat: 6.5 },
    vitaminB1: 0.18,
    vitaminB2: 0.15,
    vitaminB3: 5.5, // Niacin - cao từ cá và tôm
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (µg)
    folate: 18,
    vitaminB12: 1.0, // µg - cao từ cá và tôm
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 25.0, // mg - cao
    selenium: 15.0, // µg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 8, // µg - từ cá và tôm
    commonServing: "1 tô (~450g)",
    notes: "Rất mặn; purine cao.",
    gout: { purine: 200, purineLevel: "high" },
    kidney: { potassium: 380, phosphorus: 240 },
  },
  {
    id: "bun-rieu-cua",
    name: "Bún riêu cua",
    nameEn: "Crab noodle soup",
    category: "soups",
    servingSize: 400,
    servingUnit: "g",
    calories: 360,
    protein: 22.0,
    carbs: 45.0,
    fat: 10.0,
    sugars: 3.0,
    fiber: 2.0,
    water: 70.0,
    sodium: 900,
    potassium: 340,
    calcium: 80,
    iron: 3.2,
    phosphorus: 210,
    magnesium: 36,
    zinc: 2.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 3.5 },
    vitaminB1: 0.16,
    vitaminB2: 0.12,
    vitaminB3: 2.5, // Niacin - từ cua
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 2.0, // Biotin (µg) - từ cua
    folate: 16,
    vitaminB12: 2.0, // µg - rất cao từ cua
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg - từ cua
    selenium: 9.0, // µg
    copper: 0.6, // mg - cao từ cua
    manganese: 0.1, // mg
    iodine: 12, // µg - từ cua
    commonServing: "1 tô (~400g)",
    notes: "Cua + mắm tôm.",
    gout: {
      purine: 180,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 340, phosphorus: 210 },
  },
  {
    id: "bun-mang-vit",
    name: "Bún măng vịt",
    nameEn: "Duck bamboo noodle soup",
    category: "soups",
    servingSize: 450,
    servingUnit: "g",
    calories: 450,
    protein: 24.0,
    carbs: 48.0,
    fat: 16.0,
    sugars: 3.0,
    fiber: 2.5,
    water: 60.0,
    sodium: 1000,
    potassium: 360,
    calcium: 45,
    iron: 2.8,
    phosphorus: 220,
    magnesium: 34,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 5.5 },
    vitaminB1: 0.16,
    vitaminB2: 0.14,
    vitaminB3: 5.0, // Niacin - cao từ vịt
    vitaminB5: 1.0, // Pantothenic acid - cao
    vitaminB6: 0.18,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 18,
    vitaminB12: 0.5, // µg - từ vịt
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg - cao từ vịt
    selenium: 12.0, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 tô (~450g)",
    notes: "Mỡ vịt + mặn.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 31, carbPerPortion: 48 },
    kidney: { potassium: 360, phosphorus: 220 },
  },
  {
    id: "xoi-ga",
    name: "Xôi gà",
    nameEn: "Sticky rice with chicken",
    category: "rice-noodles",
    servingSize: 350,
    servingUnit: "g",
    calories: 520,
    protein: 26.0,
    carbs: 70.0,
    fat: 16.0,
    sugars: 3.0,
    fiber: 1.8,
    water: 50.0,
    sodium: 780,
    potassium: 420,
    calcium: 40,
    iron: 2.4,
    phosphorus: 210,
    magnesium: 36,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 6.5 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB6: 0.16,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 gói (~350g)",
    notes: "Tinh bột cao.",
    diabetes: { glycemicIndex: 80, glycemicLoad: 56, carbPerPortion: 70 },
    kidney: { potassium: 420, phosphorus: 210 },
  },
  {
    id: "xoi-man",
    name: "Xôi mặn",
    nameEn: "Sticky rice savory",
    category: "rice-noodles",
    servingSize: 350,
    servingUnit: "g",
    calories: 580,
    protein: 24.0,
    carbs: 72.0,
    fat: 20.0,
    sugars: 4.0,
    fiber: 2.0,
    water: 45.0,
    sodium: 950,
    potassium: 450,
    calcium: 45,
    iron: 2.8,
    phosphorus: 230,
    magnesium: 38,
    zinc: 2.6,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 95,
    cardiovascular: { cholesterol: 95, saturatedFat: 8.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB6: 0.18,
    folate: 15,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 gói",
    notes: "Mỡ + mặn.",
    diabetes: { glycemicIndex: 82, glycemicLoad: 59, carbPerPortion: 72 },
    kidney: { potassium: 450, phosphorus: 230 },
  },
  {
    id: "banh-chung",
    name: "Bánh chưng",
    nameEn: "Sticky rice cake",
    category: "rice-noodles",
    servingSize: 200,
    servingUnit: "g",
    calories: 420,
    protein: 14.0,
    carbs: 60.0,
    fat: 16.0,
    sugars: 2.0,
    fiber: 2.5,
    water: 50.0,
    sodium: 650,
    potassium: 320,
    calcium: 35,
    iron: 2.2,
    phosphorus: 180,
    magnesium: 32,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 75,
    cardiovascular: { cholesterol: 75, saturatedFat: 6.0 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB6: 0.14,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 miếng (~200g)",
    notes: "Tinh bột + mỡ.",
    diabetes: { glycemicIndex: 80, glycemicLoad: 48, carbPerPortion: 60 },
    kidney: { potassium: 320, phosphorus: 180 },
  },
  {
    id: "banh-tet",
    name: "Bánh tét",
    nameEn: "Cylindrical sticky rice cake",
    category: "rice-noodles",
    servingSize: 200,
    servingUnit: "g",
    calories: 410,
    protein: 13.0,
    carbs: 58.0,
    fat: 15.0,
    sugars: 2.0,
    fiber: 2.0,
    water: 50.0,
    sodium: 600,
    potassium: 300,
    calcium: 30,
    iron: 2.0,
    phosphorus: 170,
    magnesium: 30,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 5.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB6: 0.14,
    folate: 13,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 khoanh (~200g)",
    notes: "Tương tự bánh chưng.",
    diabetes: { glycemicIndex: 78, glycemicLoad: 45, carbPerPortion: 58 },
    kidney: { potassium: 300, phosphorus: 170 },
  },
  {
    id: "banh-gio",
    name: "Bánh giò",
    nameEn: "Pyramid rice dumpling",
    category: "snacks",
    servingSize: 250,
    servingUnit: "g",
    calories: 380,
    protein: 14.0,
    carbs: 50.0,
    fat: 14.0,
    sugars: 2.0,
    fiber: 1.5,
    water: 55.0,
    sodium: 750,
    potassium: 260,
    calcium: 35,
    iron: 2.2,
    phosphorus: 170,
    magnesium: 28,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 5.0 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB6: 0.14,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 cái (~250g)",
    notes: "Tinh bột + mỡ.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 38, carbPerPortion: 50 },
    kidney: { potassium: 260, phosphorus: 170 },
  },
  {
    id: "banh-khot",
    name: "Bánh khọt",
    nameEn: "Mini savory pancakes",
    category: "snacks",
    servingSize: 200,
    servingUnit: "g",
    calories: 420,
    protein: 16.0,
    carbs: 40.0,
    fat: 22.0,
    sugars: 2.5,
    fiber: 2.0,
    water: 50.0,
    sodium: 800,
    potassium: 300,
    calcium: 45,
    iron: 2.6,
    phosphorus: 190,
    magnesium: 32,
    zinc: 2.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 70,
    cardiovascular: { cholesterol: 70, saturatedFat: 8.5 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB6: 0.18,
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "8–10 cái",
    notes: "Chiên nhiều dầu.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 28, carbPerPortion: 40 },
    kidney: { potassium: 300, phosphorus: 190 },
  },
  {
    id: "banh-bot-loc",
    name: "Bánh bột lọc",
    nameEn: "Tapioca shrimp dumplings",
    category: "snacks",
    servingSize: 200,
    servingUnit: "g",
    calories: 360,
    protein: 12.0,
    carbs: 55.0,
    fat: 10.0,
    sugars: 2.0,
    fiber: 1.0,
    water: 55.0,
    sodium: 700,
    potassium: 220,
    calcium: 30,
    iron: 2.0,
    phosphorus: 150,
    magnesium: 26,
    zinc: 1.6,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 60,
    cardiovascular: { cholesterol: 60, saturatedFat: 3.5 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB6: 0.12,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 đĩa",
    notes: "Tinh bột + mặn.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 220, phosphorus: 150 },
  },
  {
    id: "banh-beo-viet29",
    name: "Bánh bèo",
    nameEn: "Steamed rice cakes",
    category: "snacks",
    servingSize: 250,
    servingUnit: "g",
    calories: 300,
    protein: 10.0,
    carbs: 48.0,
    fat: 6.0,
    sugars: 1.5,
    fiber: 1.5,
    water: 65.0,
    sodium: 650,
    potassium: 200,
    calcium: 40,
    iron: 2.4,
    phosphorus: 140,
    magnesium: 26,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 55,
    cardiovascular: { cholesterol: 55, saturatedFat: 2.5 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB6: 0.14,
    folate: 15,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 chén lớn",
    notes: "Mắm tôm khô.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 200, phosphorus: 140 },
  },
  {
    id: "com-chien-duong-chau",
    name: "Cơm chiên Dương Châu",
    nameEn: "Yangzhou fried rice",
    category: "rice-noodles",
    servingSize: 400,
    servingUnit: "g",
    calories: 520,
    protein: 20.0,
    carbs: 62.0,
    fat: 20.0,
    sugars: 3.0,
    fiber: 2.0,
    water: 55.0,
    sodium: 950,
    potassium: 380,
    calcium: 45,
    iron: 2.8,
    phosphorus: 210,
    magnesium: 36,
    zinc: 2.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 8.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB6: 0.18,
    folate: 15,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 đĩa",
    notes: "Chiên dầu; mặn.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 47, carbPerPortion: 62 },
    kidney: { potassium: 380, phosphorus: 210 },
  },
  // ========================================================================
  // Đồ ăn vặt & chè phổ biến (331–340)
  // ========================================================================
  {
    id: "banh-trang-tron",
    name: "Bánh tráng trộn",
    nameEn: "Rice paper salad",
    category: "snacks",
    servingSize: 250,
    servingUnit: "g",
    calories: 480,
    protein: 12.0,
    carbs: 55.0,
    fat: 22.0,
    sugars: 6.0,
    fiber: 2.0,
    water: 45.0,
    sodium: 1200,
    potassium: 280,
    calcium: 60,
    iron: 3.0,
    phosphorus: 190,
    magnesium: 32,
    zinc: 2.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 95,
    cardiovascular: { cholesterol: 95, saturatedFat: 8.0 },
    vitaminB1: 0.14,
    vitaminB2: 0.12,
    vitaminB6: 0.18,
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 bịch (~250g)",
    notes: "Rất mặn; nhiều topping.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 280, phosphorus: 190 },
  },
  {
    id: "banh-trang-nuong",
    name: "Bánh tráng nướng",
    nameEn: "Grilled rice paper",
    category: "snacks",
    servingSize: 200,
    servingUnit: "g",
    calories: 450,
    protein: 14.0,
    carbs: 48.0,
    fat: 22.0,
    sugars: 4.0,
    fiber: 2.0,
    water: 45.0,
    sodium: 900,
    potassium: 260,
    calcium: 50,
    iron: 2.6,
    phosphorus: 180,
    magnesium: 30,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 85,
    cardiovascular: { cholesterol: 85, saturatedFat: 9.0 },
    vitaminB1: 0.12,
    vitaminB2: 0.10,
    vitaminB6: 0.14,
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 cái",
    notes: "Chiên/nướng nhiều dầu.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 260, phosphorus: 180 },
  },
  {
    id: "bap-xao",
    name: "Bắp xào",
    nameEn: "Stir-fried corn",
    category: "snacks",
    servingSize: 200,
    servingUnit: "g",
    calories: 320,
    protein: 8.0,
    carbs: 45.0,
    fat: 12.0,
    sugars: 5.0,
    fiber: 3.0,
    water: 60.0,
    sodium: 650,
    potassium: 220,
    calcium: 30,
    iron: 1.8,
    phosphorus: 120,
    magnesium: 24,
    zinc: 1.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 45,
    cardiovascular: { cholesterol: 45, saturatedFat: 4.5 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB6: 0.12,
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 ly",
    notes: "Tinh bột + bơ.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 31, carbPerPortion: 45 },
    kidney: { potassium: 220, phosphorus: 120 },
  },
  {
    id: "trung-cut-lon",
    name: "Trứng cút lộn",
    nameEn: "Fertilized quail egg",
    category: "snacks",
    servingSize: 100,
    servingUnit: "g",
    calories: 185,
    protein: 13.0,
    carbs: 2.0,
    fat: 14.0,
    sugars: 0.5,
    fiber: 0.0,
    water: 70.0,
    sodium: 180,
    potassium: 130,
    calcium: 65,
    iron: 3.5,
    phosphorus: 210,
    magnesium: 30,
    zinc: 2.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 550,
    cardiovascular: { cholesterol: 550, saturatedFat: 4.5 },
    vitaminB1: 0.14,
    vitaminB2: 0.20,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 1.8, // Pantothenic acid - cao trong trứng
    vitaminB6: 0.22,
    vitaminB7: 5.0, // Biotin (µg) - cao trong trứng
    folate: 44,
    vitaminB12: 3.0, // µg - rất cao trong trứng
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 150.0, // mg - rất cao trong trứng
    selenium: 32.0, // µg - cao trong trứng
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "2–3 trứng",
    notes: "Cholesterol & purine cao.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 130, phosphorus: 210 },
  },
  {
    id: "trung-vit-lon",
    name: "Trứng vịt lộn",
    nameEn: "Balut egg",
    category: "snacks",
    servingSize: 100,
    servingUnit: "g",
    calories: 188,
    protein: 14.0,
    carbs: 1.5,
    fat: 13.0,
    sugars: 0.5,
    fiber: 0.0,
    water: 70.0,
    sodium: 170,
    potassium: 120,
    calcium: 60,
    iron: 3.2,
    phosphorus: 200,
    magnesium: 28,
    zinc: 2.5,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 480,
    cardiovascular: { cholesterol: 480, saturatedFat: 4.2 },
    vitaminB1: 0.12,
    vitaminB2: 0.18,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 1.6, // Pantothenic acid - cao trong trứng
    vitaminB6: 0.20,
    vitaminB7: 4.5, // Biotin (µg) - cao trong trứng
    folate: 40,
    vitaminB12: 2.8, // µg - rất cao trong trứng
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 140.0, // mg - rất cao trong trứng
    selenium: 30.0, // µg - cao trong trứng
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 trứng (~100g)",
    notes: "Gút & mỡ máu tránh.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 120, phosphorus: 200 },
  },
  {
    id: "banh-mi-que",
    name: "Bánh mì que",
    nameEn: "Bread stick sandwich",
    category: "snacks",
    servingSize: 120,
    servingUnit: "g",
    calories: 310,
    protein: 10.0,
    carbs: 38.0,
    fat: 14.0,
    sugars: 3.0,
    fiber: 1.2,
    water: 45.0,
    sodium: 850,
    potassium: 200,
    calcium: 35,
    iron: 2.0,
    phosphorus: 150,
    magnesium: 26,
    zinc: 1.6,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 65,
    cardiovascular: { cholesterol: 65, saturatedFat: 6.0 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 1.5, // Niacin - từ bánh mì và thịt
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 12,
    vitaminB12: 0.2, // µg - từ pate/thịt
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 que",
    notes: "Bơ + pate mặn.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 27, carbPerPortion: 38 },
    kidney: { potassium: 200, phosphorus: 150 },
  },
  {
    id: "banh-tieu",
    name: "Bánh tiêu",
    nameEn: "Fried sesame bread",
    category: "snacks",
    servingSize: 100,
    servingUnit: "g",
    calories: 330,
    protein: 7.0,
    carbs: 50.0,
    fat: 12.0,
    sugars: 10.0,
    fiber: 1.5,
    water: 40.0,
    sodium: 300,
    potassium: 180,
    calcium: 25,
    iron: 1.6,
    phosphorus: 120,
    magnesium: 22,
    zinc: 1.4,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 5.0 },
    vitaminB1: 0.10,
    vitaminB2: 0.08,
    vitaminB3: 0.8, // Niacin - từ bột mì
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 5.0, // mg
    selenium: 2.0, // µg
    copper: 0.1, // mg
    manganese: 0.4, // mg - từ mè
    iodine: 0, // µg
    commonServing: "1 cái",
    notes: "Chiên dầu; đường cao.",
    diabetes: { glycemicIndex: 85, glycemicLoad: 43, carbPerPortion: 50 },
    kidney: { potassium: 180, phosphorus: 120 },
  },
  {
    id: "banh-cam",
    name: "Bánh cam (bánh rán)",
    nameEn: "Fried glutinous rice cake",
    category: "snacks",
    servingSize: 120,
    servingUnit: "g",
    calories: 360,
    protein: 6.0,
    carbs: 55.0,
    fat: 14.0,
    sugars: 20.0,
    fiber: 1.2,
    water: 38.0,
    sodium: 280,
    potassium: 160,
    calcium: 20,
    iron: 1.4,
    phosphorus: 110,
    magnesium: 20,
    zinc: 1.2,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 6.0 },
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 0.6, // Niacin - từ bột nếp
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.0, // mg
    selenium: 1.5, // µg
    copper: 0.08, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 cái",
    notes: "Đường + chiên dầu.",
    diabetes: { glycemicIndex: 90, glycemicLoad: 50, carbPerPortion: 55 },
    kidney: { potassium: 160, phosphorus: 110 },
  },
  {
    id: "che-dau-den-viet39",
    name: "Chè đậu đen",
    nameEn: "Sweet black bean dessert",
    category: "desserts",
    servingSize: 250,
    servingUnit: "g",
    calories: 280,
    protein: 10.0,
    carbs: 48.0,
    fat: 4.0,
    sugars: 30.0,
    fiber: 5.0,
    water: 60.0,
    sodium: 120,
    potassium: 300,
    calcium: 40,
    iron: 2.8,
    phosphorus: 180,
    magnesium: 45,
    zinc: 2.0,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0.8 },
    vitaminB1: 0.20,
    vitaminB2: 0.10,
    vitaminB3: 1.3, // Niacin - từ đậu đen
    vitaminB5: 0.9, // Pantothenic acid - cao từ đậu đen
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 90, // µg - cao từ đậu đen
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 26.0, // mg - cao từ đậu đen
    selenium: 3.6, // µg
    copper: 0.5, // mg - cao từ đậu đen
    manganese: 0.9, // mg - cao từ đậu đen
    iodine: 0, // µg
    commonServing: "1 ly (~250g)",
    notes: "Đường cao; ĐTĐ hạn chế.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 300, phosphorus: 180 },
  },
  {
    id: "che-ba-mau",
    name: "Chè ba màu",
    nameEn: "Three-color dessert",
    category: "desserts",
    servingSize: 300,
    servingUnit: "g",
    calories: 320,
    protein: 8.0,
    carbs: 55.0,
    fat: 8.0,
    sugars: 35.0,
    fiber: 4.0,
    water: 55.0,
    sodium: 150,
    potassium: 280,
    calcium: 35,
    iron: 2.4,
    phosphorus: 170,
    magnesium: 40,
    zinc: 1.8,
    vitaminA: 0,
    vitaminC: 0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 1.5 },
    vitaminB1: 0.16,
    vitaminB2: 0.10,
    vitaminB3: 1.0, // Niacin - từ đậu và nước cốt dừa
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 80, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 2.5, // µg
    copper: 0.3, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 ly",
    notes: "Đường + nước cốt dừa.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 280, phosphorus: 170 },
  },
  // ========================================================================
  // Rau lá & rau gia vị phổ biến (341–352)
  // ========================================================================
  {
    id: "rau-muong-veg63",
    name: "Rau muống",
    nameEn: "Water spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 2.6,
    carbs: 3.1,
    fat: 0.2,
    fiber: 2.1,
    water: 92.0,
    sodium: 65,
    potassium: 312,
    calcium: 77,
    iron: 1.7,
    phosphorus: 48,
    magnesium: 71,
    zinc: 0.5,
    vitaminA: 6300,
    vitaminC: 55.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.1,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 57, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - rất cao trong rau lá xanh
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Rất phổ biến; kali cao.",
    kidney: { potassium: 312, phosphorus: 48 },
  },
  {
    id: "cai-ngot-veg64",
    name: "Rau cải ngọt",
    nameEn: "Choy sum",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 24,
    protein: 2.8,
    carbs: 4.5,
    fat: 0.4,
    fiber: 2.2,
    water: 90.0,
    sodium: 25,
    potassium: 350,
    calcium: 105,
    iron: 1.2,
    phosphorus: 50,
    magnesium: 30,
    zinc: 0.4,
    vitaminA: 2700,
    vitaminC: 46.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 80, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Giàu canxi.",
    kidney: { potassium: 350, phosphorus: 50 },
  },
  {
    id: "cai-xanh-veg65",
    name: "Rau cải xanh",
    nameEn: "Mustard greens",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 2.9,
    carbs: 4.7,
    fat: 0.4,
    fiber: 2.0,
    water: 92.0,
    sodium: 20,
    potassium: 384,
    calcium: 115,
    iron: 1.6,
    phosphorus: 58,
    magnesium: 27,
    zinc: 0.5,
    vitaminA: 1510,
    vitaminC: 70.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.05,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 75, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bát (~100g)",
    notes: "Hay muối dưa.",
    kidney: { potassium: 384, phosphorus: 58 },
  },
  {
    id: "cai-thao-veg66",
    name: "Rau cải thảo",
    nameEn: "Napa cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 16,
    protein: 1.2,
    carbs: 3.2,
    fat: 0.2,
    fiber: 1.2,
    water: 94.0,
    sodium: 9,
    potassium: 238,
    calcium: 43,
    iron: 0.8,
    phosphorus: 25,
    magnesium: 12,
    zinc: 0.2,
    vitaminA: 871,
    vitaminC: 27.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 79, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 42.9, // Phylloquinone - cao trong rau lá xanh
    choline: 7.2, // mg
    selenium: 0.3, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh/xào",
    notes: "Ít năng lượng.",
    kidney: { potassium: 238, phosphorus: 25 },
  },
  {
    id: "mong-toi-veg67",
    name: "Rau mồng tơi",
    nameEn: "Malabar spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.7,
    carbs: 3.4,
    fat: 0.4,
    fiber: 2.0,
    water: 91.0,
    sodium: 7,
    potassium: 510,
    calcium: 124,
    iron: 2.0,
    phosphorus: 36,
    magnesium: 71,
    zinc: 0.4,
    vitaminA: 2500,
    vitaminC: 102.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.16,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 140, // µg - rất cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - rất cao trong rau lá xanh
    choline: 6.0, // mg
    selenium: 0.8, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Nhớt; mát.",
    kidney: { potassium: 510, phosphorus: 36 },
  },
  {
    id: "rau-den-com-veg68",
    name: "Rau dền cơm",
    nameEn: "Amaranth greens",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.5,
    carbs: 4.0,
    fat: 0.3,
    fiber: 2.2,
    water: 92.0,
    sodium: 12,
    potassium: 611,
    calcium: 215,
    iron: 2.3,
    phosphorus: 43,
    magnesium: 55,
    zinc: 0.9,
    vitaminA: 291,
    vitaminC: 43.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 85, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - rất cao trong rau dền
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dền
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Kali cao.",
    kidney: { potassium: 611, phosphorus: 43 },
  },
  {
    id: "rau-den-gai-veg69",
    name: "Rau dền gai",
    nameEn: "Spiny amaranth",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 2.7,
    carbs: 4.2,
    fat: 0.4,
    fiber: 2.5,
    water: 91.0,
    sodium: 14,
    potassium: 590,
    calcium: 220,
    iron: 2.6,
    phosphorus: 46,
    magnesium: 58,
    zinc: 1.0,
    vitaminA: 320,
    vitaminC: 45.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.13,
    vitaminB7: 0, // Biotin
    folate: 90, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - rất cao trong rau dền
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dền
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Rau dền dại.",
    kidney: { potassium: 590, phosphorus: 46 },
  },
  {
    id: "rau-lang-veg70",
    name: "Rau lang (ngọn khoai lang)",
    nameEn: "Sweet potato leaves",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 41,
    protein: 3.5,
    carbs: 7.1,
    fat: 0.6,
    fiber: 3.3,
    water: 88.0,
    sodium: 18,
    potassium: 337,
    calcium: 99,
    iron: 2.7,
    phosphorus: 56,
    magnesium: 62,
    zinc: 0.8,
    vitaminA: 8000,
    vitaminC: 11.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.10,
    vitaminB2: 0.26,
    vitaminB3: 1.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0.8, // Biotin (µg)
    folate: 90, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong rau lá xanh
    vitaminK: 400, // Phylloquinone - rất cao trong rau lá xanh
    choline: 18.0, // mg
    selenium: 1.0, // µg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "Xơ cao; tốt ĐTĐ.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 337, phosphorus: 56 },
  },
  {
    id: "tan-o-veg71",
    name: "Rau tần ô (cải cúc)",
    nameEn: "Crown daisy",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.9,
    carbs: 3.9,
    fat: 0.4,
    fiber: 1.6,
    water: 92.0,
    sodium: 18,
    potassium: 340,
    calcium: 120,
    iron: 1.5,
    phosphorus: 50,
    magnesium: 45,
    zinc: 0.6,
    vitaminA: 4200,
    vitaminC: 11.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.10,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 105, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 250, // Phylloquinone - rất cao trong rau lá xanh
    choline: 10.4, // mg
    selenium: 0.6, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn lẩu",
    notes: "Rau mùa lạnh.",
    kidney: { potassium: 340, phosphorus: 50 },
  },
  {
    id: "xa-lach-xoan-veg72",
    name: "Rau xà lách xoăn",
    nameEn: "Curly lettuce",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fat: 0.2,
    fiber: 1.3,
    water: 95.0,
    sodium: 28,
    potassium: 194,
    calcium: 36,
    iron: 0.9,
    phosphorus: 29,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 740,
    vitaminC: 9.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 38, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 126.3, // Phylloquinone - cao trong xà lách
    choline: 9.9, // mg
    selenium: 0.4, // µg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Ít kcal.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 194, phosphorus: 29 },
  },
  {
    id: "thi-la-veg73",
    name: "Rau thì là",
    nameEn: "Dill weed",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 43,
    protein: 3.5,
    carbs: 7.0,
    fat: 1.1,
    fiber: 2.1,
    water: 86.0,
    sodium: 61,
    potassium: 738,
    calcium: 208,
    iron: 6.6,
    phosphorus: 66,
    magnesium: 55,
    zinc: 0.9,
    vitaminA: 7718,
    vitaminC: 85.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.06,
    vitaminB2: 0.30, // cao trong thì là
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 0, // Biotin
    folate: 150, // µg - rất cao trong thì là
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 440, // Phylloquinone - rất cao trong thì là
    choline: 12.8, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 1.3, // mg - cao trong thì là
    iodine: 0, // µg
    commonServing: "Gia vị",
    notes: "Ăn lượng nhỏ.",
    kidney: { potassium: 738, phosphorus: 66 },
  },
  {
    id: "kinh-gioi-veg74",
    name: "Rau kinh giới",
    nameEn: "Vietnamese balm",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 37,
    protein: 3.7,
    carbs: 6.4,
    fat: 0.6,
    fiber: 2.8,
    water: 87.0,
    sodium: 22,
    potassium: 420,
    calcium: 210,
    iron: 2.9,
    phosphorus: 64,
    magnesium: 52,
    zinc: 0.8,
    vitaminA: 5100,
    vitaminC: 38.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.05,
    vitaminB2: 0.11,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 110, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 415, // Phylloquinone - rất cao trong kinh giới
    choline: 11.4, // mg
    selenium: 0.3, // µg
    copper: 0.4, // mg - cao trong kinh giới
    manganese: 1.1, // mg - cao trong kinh giới
    iodine: 0, // µg
    commonServing: "Ăn kèm",
    notes: "Rau gia vị.",
    kidney: { potassium: 420, phosphorus: 64 },
  },
  // ========================================================================
  // Củ & quả phổ biến bổ sung (353–365)
  // ========================================================================
  {
    id: "khoai-so",
    name: "Khoai sọ",
    nameEn: "Taro corm",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 112,
    protein: 1.5,
    carbs: 26.5,
    fat: 0.2,
    sugars: 0.4,
    fiber: 4.1,
    water: 70.0,
    sodium: 11,
    potassium: 591,
    calcium: 43,
    iron: 0.6,
    phosphorus: 84,
    magnesium: 33,
    zinc: 0.5,
    vitaminA: 76,
    vitaminC: 4.5,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.10,
    vitaminB2: 0.03,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.27,
    vitaminB7: 0, // Biotin
    folate: 22,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 9.2, // mg
    selenium: 0.7, // µg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 khúc (~100g)",
    notes: "Tinh bột; kali cao.",
    diabetes: { glycemicIndex: 54, glycemicLoad: 14, carbPerPortion: 27 },
    kidney: { potassium: 591, phosphorus: 84 },
  },
  {
    id: "khoai-mo",
    name: "Khoai mỡ",
    nameEn: "Purple yam",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 118,
    protein: 1.5,
    carbs: 27.0,
    fat: 0.2,
    sugars: 0.6,
    fiber: 4.0,
    water: 69.0,
    sodium: 9,
    potassium: 816,
    calcium: 17,
    iron: 0.5,
    phosphorus: 55,
    magnesium: 34,
    zinc: 0.4,
    vitaminA: 138,
    vitaminC: 6.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.08,
    vitaminB2: 0.04,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 23,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 8.0, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh/ché",
    notes: "Kali rất cao; CKD hạn chế.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 15, carbPerPortion: 27 },
    kidney: { potassium: 816, phosphorus: 55 },
  },
  {
    id: "cu-tu",
    name: "Củ từ",
    nameEn: "Yam bean",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 118,
    protein: 1.6,
    carbs: 27.0,
    fat: 0.3,
    sugars: 0.5,
    fiber: 4.2,
    water: 69.0,
    sodium: 12,
    potassium: 670,
    calcium: 19,
    iron: 0.7,
    phosphorus: 60,
    magnesium: 37,
    zinc: 0.6,
    vitaminA: 150,
    vitaminC: 5.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.09,
    vitaminB2: 0.05,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 24,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 7.5, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "Luộc/nấu canh",
    notes: "Tinh bột.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 15, carbPerPortion: 27 },
    kidney: { potassium: 670, phosphorus: 60 },
  },
  {
    id: "cu-cai-do",
    name: "Củ cải đỏ",
    nameEn: "Beetroot",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 43,
    protein: 1.6,
    carbs: 9.6,
    fat: 0.2,
    sugars: 6.8,
    fiber: 2.8,
    water: 88.0,
    sodium: 78,
    potassium: 325,
    calcium: 16,
    iron: 0.8,
    phosphorus: 40,
    magnesium: 23,
    zinc: 0.4,
    vitaminA: 33,
    vitaminC: 4.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB6: 0.07,
    folate: 109,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "Luộc/xào",
    notes: "GI trung bình.",
    diabetes: { glycemicIndex: 64, glycemicLoad: 6, carbPerPortion: 10 },
    kidney: { potassium: 325, phosphorus: 40 },
  },
  {
    id: "ca-rot-tim",
    name: "Cà rốt tím",
    nameEn: "Purple carrot",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 41,
    protein: 1.0,
    carbs: 9.6,
    fat: 0.2,
    sugars: 4.7,
    fiber: 2.8,
    water: 88.0,
    sodium: 69,
    potassium: 320,
    calcium: 33,
    iron: 0.3,
    phosphorus: 35,
    magnesium: 12,
    zinc: 0.2,
    vitaminA: 16706,
    vitaminC: 5.9,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.07,
    vitaminB2: 0.06,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 19,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 13.2, // Phylloquinone
    choline: 6.2, // mg
    selenium: 0.1, // µg
    copper: 0.08, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/nấu",
    notes: "Giàu anthocyanin.",
    diabetes: { glycemicIndex: 47, glycemicLoad: 4, carbPerPortion: 10 },
    kidney: { potassium: 320, phosphorus: 35 },
  },
  {
    id: "bi-ho-lo",
    name: "Bí hồ lô",
    nameEn: "Bottle gourd",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 14,
    protein: 0.6,
    carbs: 3.4,
    fat: 0.0,
    sugars: 1.6,
    fiber: 0.5,
    water: 95.0,
    sodium: 2,
    potassium: 170,
    calcium: 20,
    iron: 0.3,
    phosphorus: 25,
    magnesium: 11,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 10.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.5, // mg
    selenium: 0.2, // µg
    copper: 0.02, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Rất ít kcal.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 170, phosphorus: 25 },
  },
  {
    id: "muop-khia",
    name: "Mướp khía",
    nameEn: "Ridged gourd",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 20,
    protein: 0.8,
    carbs: 4.4,
    fat: 0.2,
    sugars: 1.5,
    fiber: 1.1,
    water: 93.0,
    sodium: 3,
    potassium: 150,
    calcium: 18,
    iron: 0.5,
    phosphorus: 30,
    magnesium: 14,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 9.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 25,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 10.0, // Phylloquinone
    choline: 5.0, // mg
    selenium: 0.3, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh/xào",
    notes: "Thanh mát.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 150, phosphorus: 30 },
  },
  {
    id: "bau-sao",
    name: "Bầu sao",
    nameEn: "Star gourd",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    sugars: 1.7,
    fiber: 0.6,
    water: 95.0,
    sodium: 2,
    potassium: 180,
    calcium: 22,
    iron: 0.4,
    phosphorus: 28,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 8.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.06,
    vitaminB7: 0, // Biotin
    folate: 18,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.0, // mg
    selenium: 0.2, // µg
    copper: 0.02, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "Nấu canh",
    notes: "Ít năng lượng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 180, phosphorus: 28 },
  },
  {
    id: "dau-rong",
    name: "Đậu rồng (quả)",
    nameEn: "Winged bean pod",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 49,
    protein: 2.8,
    carbs: 8.7,
    fat: 0.9,
    sugars: 2.5,
    fiber: 3.7,
    water: 85.0,
    sodium: 4,
    potassium: 304,
    calcium: 44,
    iron: 1.0,
    phosphorus: 52,
    magnesium: 25,
    zinc: 0.6,
    vitaminA: 100,
    vitaminC: 3.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.11,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 66, // µg - cao trong đậu
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 14.4, // Phylloquinone - cao trong đậu que
    choline: 15.3, // mg - cao trong đậu
    selenium: 0.6, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Xào/luộc",
    notes: "Xơ cao.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 9 },
    kidney: { potassium: 304, phosphorus: 52 },
  },
  {
    id: "dau-bap-do",
    name: "Đậu bắp đỏ",
    nameEn: "Red okra",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 33,
    protein: 1.9,
    carbs: 7.5,
    fat: 0.2,
    sugars: 1.5,
    fiber: 3.2,
    water: 90.0,
    sodium: 7,
    potassium: 299,
    calcium: 82,
    iron: 0.6,
    phosphorus: 61,
    magnesium: 57,
    zinc: 0.6,
    vitaminA: 716,
    vitaminC: 23.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.20,
    vitaminB2: 0.06,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 0, // Biotin
    folate: 60, // µg - cao trong đậu bắp
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 31.3, // Phylloquinone - cao trong đậu bắp
    choline: 12.3, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong đậu bắp
    iodine: 0, // µg
    commonServing: "Luộc/xào",
    notes: "Chất nhầy tốt ruột.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 2, carbPerPortion: 7 },
    kidney: { potassium: 299, phosphorus: 61 },
  },
  {
    id: "ca-phao-tuoi",
    name: "Cà pháo tươi",
    nameEn: "Fresh Thai eggplant",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 1.0,
    carbs: 5.6,
    fat: 0.3,
    sugars: 2.0,
    fiber: 2.5,
    water: 90.0,
    sodium: 8,
    potassium: 229,
    calcium: 9,
    iron: 0.2,
    phosphorus: 24,
    magnesium: 14,
    zinc: 0.2,
    vitaminA: 23,
    vitaminC: 2.2,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.04,
    vitaminB2: 0.04,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 22,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 3.5, // Phylloquinone
    choline: 6.9, // mg
    selenium: 0.2, // µg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống/nấu",
    notes: "Ít kcal.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 229, phosphorus: 24 },
  },
  {
    id: "dua-gang",
    name: "Dưa gang",
    nameEn: "Oriental melon",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 34,
    protein: 0.8,
    carbs: 8.2,
    fat: 0.2,
    sugars: 6.2,
    fiber: 0.9,
    water: 90.0,
    sodium: 3,
    potassium: 228,
    calcium: 6,
    iron: 0.2,
    phosphorus: 17,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 169,
    vitaminC: 8.0,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 4,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.0, // mg
    selenium: 0.4, // µg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "Ăn tráng miệng",
    notes: "Ngọt nhẹ.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 5, carbPerPortion: 8 },
    kidney: { potassium: 228, phosphorus: 17 },
  },
  {
    id: "dua-leo-bao-tu",
    name: "Dưa leo bao tử",
    nameEn: "Mini cucumber",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 15,
    protein: 0.7,
    carbs: 3.6,
    fat: 0.1,
    sugars: 1.5,
    fiber: 0.5,
    water: 96.0,
    sodium: 2,
    potassium: 147,
    calcium: 16,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 105,
    vitaminC: 2.8,
    cholesterol: 0,
    cardiovascular: { cholesterol: 0, saturatedFat: 0 },
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 7,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.03, // Tocopherol
    vitaminK: 16.4, // Phylloquinone
    choline: 6.0, // mg
    selenium: 0.3, // µg
    copper: 0.04, // mg
    manganese: 0.08, // mg
    iodine: 0, // µg
    commonServing: "Ăn sống",
    notes: "Nhiều nước.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 147, phosphorus: 24 },
  },
  // ========== BỔ SUNG THỰC PHẨM MỚI - NHÓM NGŨ CỐC & TINH BỘT ==========
  {
    id: "gao-nep",
    name: "Gạo nếp",
    nameEn: "Glutinous rice",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 145,
    protein: 3.0,
    carbs: 32,
    fat: 0.3,
    fiber: 0.6,
    sodium: 2,
    potassium: 50,
    calcium: 10,
    iron: 1.0,
    phosphorus: 50,
    magnesium: 15,
    zinc: 0.5,
    vitaminB1: 0.05,
    vitaminB2: 0.02,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.04, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.5, // mg
    selenium: 5.0, // µg
    copper: 0.05, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 bát vừa (150g)",
    diabetes: {
      glycemicIndex: 75,
      glycemicLoad: 36,
      carbPerPortion: 48,
    },
    kidney: {
      potassium: 50,
      phosphorus: 50,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 150, description: '1 bát vừa' },
    ],
  },
  {
    id: "gao-lut-do",
    name: "Gạo lứt đỏ",
    nameEn: "Red brown rice",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 112,
    protein: 2.7,
    carbs: 22,
    fat: 1.0,
    fiber: 2.0,
    sodium: 5,
    potassium: 50,
    calcium: 12,
    iron: 0.9,
    phosphorus: 90,
    magnesium: 20,
    zinc: 0.6,
    vitaminB1: 0.20,
    vitaminB2: 0.06,
    vitaminB3: 2.8, // Niacin - cao trong gạo lứt đỏ
    vitaminB5: 0.7, // Pantothenic acid - cao trong gạo lứt đỏ
    vitaminB6: 0.35,
    vitaminB7: 0, // Biotin
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.6, // Phylloquinone
    choline: 10.0, // mg
    selenium: 10.5, // µg - cao trong gạo lứt đỏ
    copper: 0.12, // mg
    manganese: 1.1, // mg - cao trong gạo lứt đỏ
    iodine: 0, // µg
    commonServing: "1 bát vừa (150g)",
    diabetes: {
      glycemicIndex: 50,
      glycemicLoad: 22,
      carbPerPortion: 44,
    },
    kidney: {
      potassium: 50,
      phosphorus: 90,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 150, description: '1 bát vừa' },
    ],
  },
  {
    id: "bun-tuoi",
    name: "Bún tươi",
    nameEn: "Fresh rice vermicelli",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 110,
    protein: 1.9,
    carbs: 24,
    fat: 0.2,
    fiber: 0.6,
    water: 73,
    sodium: 2,
    potassium: 12,
    calcium: 8,
    iron: 0.5,
    phosphorus: 25,
    magnesium: 10,
    zinc: 0.3,
    vitaminB1: 0.01,
    vitaminB2: 0.01,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 5,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.02, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.0, // mg
    selenium: 3.0, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 phần (100g)",
    diabetes: {
      glycemicIndex: 53,
      glycemicLoad: 13,
      carbPerPortion: 24,
    },
    kidney: {
      potassium: 12,
      phosphorus: 25,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'bo', weight: 100, description: '1 bó bún' },
    ],
  },
  {
    id: "bun-tau",
    name: "Bún tàu",
    nameEn: "Cellophane noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 351,
    protein: 0.2,
    carbs: 86,
    fat: 0.1,
    fiber: 0.2,
    sodium: 5,
    potassium: 5,
    calcium: 5,
    iron: 0.2,
    phosphorus: 10,
    magnesium: 5,
    zinc: 0.1,
    vitaminB1: 0,
    vitaminB2: 0,
    vitaminB3: 0, // Niacin
    vitaminB5: 0, // Pantothenic acid
    vitaminB6: 0,
    vitaminB7: 0, // Biotin
    folate: 0,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0, // µg
    copper: 0, // mg
    manganese: 0, // mg
    iodine: 0, // µg
    commonServing: "50g khô (nấu thành ~150g)",
    notes: "Bún tàu khô, nấu lên nở nhiều",
    diabetes: {
      glycemicIndex: 45,
      glycemicLoad: 19,
      carbPerPortion: 43,
    },
    kidney: {
      potassium: 5,
      phosphorus: 10,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'bo', weight: 50, description: '50g khô' },
    ],
  },
  {
    id: "mi-tom",
    name: "Mì tôm",
    nameEn: "Instant noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 470,
    protein: 9.0,
    carbs: 65,
    fat: 18,
    fiber: 2.5,
    sodium: 1800,
    potassium: 120,
    calcium: 30,
    iron: 3.0,
    phosphorus: 150,
    magnesium: 40,
    zinc: 1.0,
    vitaminB1: 0.5,
    vitaminB2: 0.3,
    vitaminB3: 4.0, // Niacin - cao từ bột mì
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 0, // Biotin
    folate: 50,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.0, // mg
    selenium: 15.0, // µg - cao từ bột mì
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 gói (80g)",
    notes: "Rất nhiều natri - không tốt cho THA",
    diabetes: {
      glycemicIndex: 52,
      glycemicLoad: 27,
      carbPerPortion: 52,
    },
    kidney: {
      potassium: 120,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 8,
    },
    vietnameseUnits: [
      { unit: 'goi', weight: 80, description: '1 gói' },
    ],
  },
  {
    id: "hu-tieu",
    name: "Hủ tiếu",
    nameEn: "Hu tieu noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 110,
    protein: 2.0,
    carbs: 24,
    fat: 0.2,
    fiber: 0.5,
    water: 73,
    sodium: 3,
    potassium: 15,
    calcium: 10,
    iron: 0.6,
    phosphorus: 30,
    magnesium: 12,
    zinc: 0.4,
    vitaminB1: 0.02,
    vitaminB2: 0.01,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 6,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.02, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.0, // mg
    selenium: 3.0, // µg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 phần (100g)",
    diabetes: {
      glycemicIndex: 50,
      glycemicLoad: 12,
      carbPerPortion: 24,
    },
    kidney: {
      potassium: 15,
      phosphorus: 30,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'bo', weight: 100, description: '1 phần' },
    ],
  },
  {
    id: "banh-canh",
    name: "Bánh canh",
    nameEn: "Banh canh noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 108,
    protein: 1.8,
    carbs: 24,
    fat: 0.2,
    fiber: 0.4,
    water: 73,
    sodium: 2,
    potassium: 10,
    calcium: 8,
    iron: 0.4,
    phosphorus: 20,
    magnesium: 8,
    zinc: 0.3,
    vitaminB1: 0.01,
    vitaminB2: 0.01,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 4,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0.8, // mg
    selenium: 2.0, // µg
    copper: 0.04, // mg
    manganese: 0.15, // mg
    iodine: 0, // µg
    commonServing: "1 phần (100g)",
    diabetes: {
      glycemicIndex: 48,
      glycemicLoad: 12,
      carbPerPortion: 24,
    },
    kidney: {
      potassium: 10,
      phosphorus: 20,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'bo', weight: 100, description: '1 phần' },
    ],
  },
  {
    id: "khoai-lang-tim",
    name: "Khoai lang tím",
    nameEn: "Purple sweet potato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3.0,
    water: 75,
    sodium: 4,
    potassium: 337,
    calcium: 30,
    iron: 0.6,
    phosphorus: 47,
    magnesium: 25,
    zinc: 0.3,
    vitaminA: 709,
    vitaminC: 2.4,
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.8, // Pantothenic acid - cao trong khoai lang
    vitaminB6: 0.21,
    vitaminB7: 0, // Biotin
    folate: 11,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.8, // Phylloquinone
    choline: 12.2, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (150g)",
    notes: "Giàu anthocyanin, tốt cho tim mạch",
    diabetes: {
      glycemicIndex: 54,
      glycemicLoad: 16,
      carbPerPortion: 30,
    },
    kidney: {
      potassium: 337,
      phosphorus: 47,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 150, description: '1 củ vừa' },
    ],
  },
  {
    id: "khoai-mon",
    name: "Khoai môn",
    nameEn: "Taro",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 112,
    protein: 1.5,
    carbs: 26,
    fat: 0.2,
    fiber: 4.1,
    water: 70,
    sodium: 11,
    potassium: 591,
    calcium: 43,
    iron: 1.0,
    phosphorus: 84,
    magnesium: 33,
    zinc: 0.2,
    vitaminA: 76,
    vitaminC: 4.5,
    vitaminB1: 0.10,
    vitaminB2: 0.03,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 0, // Biotin
    folate: 22,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 9.2, // mg
    selenium: 0.7, // µg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (150g)",
    notes: "Kali rất cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 58,
      glycemicLoad: 23,
      carbPerPortion: 39,
    },
    kidney: {
      potassium: 591,
      phosphorus: 84,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 150, description: '1 củ vừa' },
    ],
  },
  {
    id: "khoai-so",
    name: "Khoai sọ",
    nameEn: "Taro root",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 98,
    protein: 1.4,
    carbs: 23,
    fat: 0.2,
    fiber: 3.5,
    water: 72,
    sodium: 8,
    potassium: 484,
    calcium: 38,
    iron: 0.8,
    phosphorus: 72,
    magnesium: 28,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 3.0,
    vitaminB1: 0.09,
    vitaminB2: 0.02,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 0, // Biotin
    folate: 19,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 8.5, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (150g)",
    notes: "Kali cao",
    diabetes: {
      glycemicIndex: 56,
      glycemicLoad: 19,
      carbPerPortion: 35,
    },
    kidney: {
      potassium: 484,
      phosphorus: 72,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 150, description: '1 củ vừa' },
    ],
  },
  {
    id: "san",
    name: "Sắn (củ mì)",
    nameEn: "Cassava",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 160,
    protein: 1.4,
    carbs: 38,
    fat: 0.3,
    fiber: 1.8,
    water: 59,
    sodium: 14,
    potassium: 271,
    calcium: 16,
    iron: 0.3,
    phosphorus: 27,
    magnesium: 21,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 20.6,
    vitaminB1: 0.09,
    vitaminB2: 0.05,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.09,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 27,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.19, // Tocopherol
    vitaminK: 1.9, // Phylloquinone
    choline: 23.7, // mg
    selenium: 0.7, // µg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (200g)",
    notes: "Nhiều tinh bột, cần nấu chín kỹ",
    diabetes: {
      glycemicIndex: 46,
      glycemicLoad: 35,
      carbPerPortion: 76,
    },
    kidney: {
      potassium: 271,
      phosphorus: 27,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 200, description: '1 củ vừa' },
    ],
  },
  {
    id: "banh-mi-trang",
    name: "Bánh mì trắng",
    nameEn: "White bread",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 265,
    protein: 8.0,
    carbs: 50,
    fat: 3.2,
    fiber: 2.7,
    sodium: 490,
    potassium: 100,
    calcium: 100,
    iron: 3.6,
    phosphorus: 100,
    magnesium: 25,
    zinc: 0.8,
    vitaminB1: 0.5,
    vitaminB2: 0.3,
    vitaminB3: 3.0, // Niacin - cao từ bột mì
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 100,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 20.0, // µg - cao từ bột mì
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 ổ (50g)",
    notes: "GI cao, natri cao",
    diabetes: {
      glycemicIndex: 75,
      glycemicLoad: 19,
      carbPerPortion: 25,
    },
    kidney: {
      potassium: 100,
      phosphorus: 100,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.8,
    },
    vietnameseUnits: [
      { unit: 'o', weight: 50, description: '1 ổ' },
    ],
  },
  {
    id: "banh-mi-nguyen-cam",
    name: "Bánh mì nguyên cám",
    nameEn: "Whole wheat bread",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 247,
    protein: 13.0,
    carbs: 41,
    fat: 4.2,
    fiber: 7.0,
    sodium: 400,
    potassium: 250,
    calcium: 100,
    iron: 3.5,
    phosphorus: 200,
    magnesium: 80,
    zinc: 2.0,
    vitaminB1: 0.4,
    vitaminB2: 0.3,
    vitaminB3: 4.0, // Niacin - rất cao từ bột mì nguyên cám
    vitaminB5: 0.6, // Pantothenic acid - cao từ bột mì nguyên cám
    vitaminB6: 0.3,
    vitaminB7: 0, // Biotin
    folate: 50,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.4, // Phylloquinone
    choline: 26.0, // mg - cao từ bột mì nguyên cám
    selenium: 35.0, // µg - rất cao từ bột mì nguyên cám
    copper: 0.3, // mg
    manganese: 2.0, // mg - rất cao từ bột mì nguyên cám
    iodine: 0, // µg
    commonServing: "1 ổ (50g)",
    notes: "Tốt hơn bánh mì trắng - nhiều xơ",
    diabetes: {
      glycemicIndex: 53,
      glycemicLoad: 11,
      carbPerPortion: 21,
    },
    kidney: {
      potassium: 250,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.6,
    },
    vietnameseUnits: [
      { unit: 'o', weight: 50, description: '1 ổ' },
    ],
  },
  // ========== BỔ SUNG THỰC PHẨM MỚI - NHÓM THỊT & HẢI SẢN ==========
  {
    id: "thit-ba-chi",
    name: "Thịt ba chỉ",
    nameEn: "Pork belly",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 518,
    protein: 9.0,
    carbs: 0,
    fat: 53,
    fiber: 0,
    sodium: 50,
    potassium: 200,
    calcium: 10,
    iron: 0.8,
    phosphorus: 150,
    magnesium: 15,
    zinc: 1.5,
    vitaminB1: 0.4,
    vitaminB2: 0.2,
    vitaminB3: 4.5, // Niacin - cao trong thịt heo
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.3,
    vitaminB7: 4.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 60.0, // mg - cao trong thịt heo
    selenium: 20.0, // µg - cao trong thịt heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (50g)",
    notes: "Nhiều chất béo bão hòa - hạn chế cho tim mạch",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 80,
      saturatedFat: 20,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 50, description: '1 miếng' },
    ],
  },
  {
    id: "thit-nac-vai",
    name: "Thịt nạc vai",
    nameEn: "Pork shoulder",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 242,
    protein: 16.9,
    carbs: 0,
    fat: 18,
    fiber: 0,
    sodium: 60,
    potassium: 280,
    calcium: 15,
    iron: 1.2,
    phosphorus: 200,
    magnesium: 20,
    zinc: 2.0,
    vitaminB1: 0.6,
    vitaminB2: 0.3,
    vitaminB3: 5.5, // Niacin - cao trong thịt heo
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.4,
    vitaminB7: 5.0, // Biotin (µg)
    folate: 8,
    vitaminB12: 0.6,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 70.0, // mg - cao trong thịt heo
    selenium: 22.0, // µg - cao trong thịt heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (100g)",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 280,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 70,
      saturatedFat: 6.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng' },
    ],
  },
  {
    id: "suon-non",
    name: "Sườn non",
    nameEn: "Pork ribs",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 250,
    protein: 18.0,
    carbs: 0,
    fat: 18,
    fiber: 0,
    sodium: 70,
    potassium: 250,
    calcium: 20,
    iron: 1.0,
    phosphorus: 180,
    magnesium: 18,
    zinc: 1.8,
    vitaminB1: 0.5,
    vitaminB2: 0.25,
    vitaminB3: 5.0, // Niacin - cao trong thịt heo
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 4.5, // Biotin (µg)
    folate: 6,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65.0, // mg - cao trong thịt heo
    selenium: 21.0, // µg - cao trong thịt heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (80g)",
    gout: {
      purine: 145,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 250,
      phosphorus: 180,
    },
    cardiovascular: {
      cholesterol: 75,
      saturatedFat: 7,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 80, description: '1 miếng' },
    ],
  },
  {
    id: "chan-gio",
    name: "Chân giò",
    nameEn: "Pork leg",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 212,
    protein: 18.0,
    carbs: 0,
    fat: 14,
    fiber: 0,
    sodium: 55,
    potassium: 270,
    calcium: 12,
    iron: 1.1,
    phosphorus: 190,
    magnesium: 19,
    zinc: 1.9,
    vitaminB1: 0.55,
    vitaminB2: 0.28,
    vitaminB3: 5.2, // Niacin - cao trong thịt heo
    vitaminB5: 0.75, // Pantothenic acid
    vitaminB6: 0.38,
    vitaminB7: 5.0, // Biotin (µg)
    folate: 7,
    vitaminB12: 0.55,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 72.0, // mg - cao trong thịt heo
    selenium: 23.0, // µg - cao trong thịt heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (100g)",
    gout: {
      purine: 148,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 270,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 68,
      saturatedFat: 5.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng' },
    ],
  },
  {
    id: "thit-bo-nac",
    name: "Thịt bò nạc",
    nameEn: "Lean beef",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 250,
    protein: 26.0,
    carbs: 0,
    fat: 15,
    fiber: 0,
    sodium: 70,
    potassium: 350,
    calcium: 18,
    iron: 2.6,
    phosphorus: 220,
    magnesium: 25,
    zinc: 4.5,
    vitaminB1: 0.08,
    vitaminB2: 0.2,
    vitaminB3: 4.5, // Niacin - cao trong thịt bò
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.4,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 9,
    vitaminB12: 2.0, // µg - cao trong thịt bò
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 82.0, // mg - cao trong thịt bò
    selenium: 14.2, // µg - cao trong thịt bò
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (100g)",
    notes: "Giàu sắt và kẽm",
    gout: {
      purine: 160,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 350,
      phosphorus: 220,
    },
    cardiovascular: {
      cholesterol: 70,
      saturatedFat: 6,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng' },
    ],
  },
  {
    id: "thit-bo-gan",
    name: "Thịt bò gân",
    nameEn: "Beef tendon",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 146,
    protein: 36.0,
    carbs: 0,
    fat: 2.0,
    fiber: 0,
    sodium: 60,
    potassium: 200,
    calcium: 15,
    iron: 1.5,
    phosphorus: 150,
    magnesium: 15,
    zinc: 2.5,
    vitaminB1: 0.05,
    vitaminB2: 0.15,
    vitaminB3: 3.5, // Niacin - từ thịt bò
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 1.5, // µg - cao từ thịt bò
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 50.0, // mg - từ thịt bò
    selenium: 12.0, // µg - từ thịt bò
    copper: 0.08, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (80g)",
    notes: "Nhiều collagen",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 50,
      saturatedFat: 1,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 80, description: '1 miếng' },
    ],
  },
  {
    id: "bap-bo",
    name: "Bắp bò",
    nameEn: "Beef shank",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 180,
    protein: 28.0,
    carbs: 0,
    fat: 7,
    fiber: 0,
    sodium: 65,
    potassium: 320,
    calcium: 20,
    iron: 2.8,
    phosphorus: 200,
    magnesium: 22,
    zinc: 4.8,
    vitaminB1: 0.09,
    vitaminB2: 0.22,
    vitaminB3: 4.8, // Niacin - cao trong thịt bò
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.42,
    vitaminB7: 3.2, // Biotin (µg)
    folate: 10,
    vitaminB12: 2.2, // µg - rất cao trong thịt bò
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 85.0, // mg - cao trong thịt bò
    selenium: 15.0, // µg - cao trong thịt bò
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (100g)",
    gout: {
      purine: 155,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 320,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 65,
      saturatedFat: 3,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng' },
    ],
  },
  {
    id: "uc-ga",
    name: "Ức gà",
    nameEn: "Chicken breast",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 165,
    protein: 31.0,
    carbs: 0,
    fat: 3.6,
    fiber: 0,
    sodium: 74,
    potassium: 256,
    calcium: 15,
    iron: 0.7,
    phosphorus: 220,
    magnesium: 28,
    zinc: 0.9,
    vitaminB1: 0.07,
    vitaminB2: 0.11,
    vitaminB3: 8.0, // Niacin - rất cao trong ức gà
    vitaminB5: 1.0, // Pantothenic acid - cao trong ức gà
    vitaminB6: 0.64, // mg - cao trong ức gà
    vitaminB7: 4.0, // Biotin (µg)
    folate: 4,
    vitaminB12: 0.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65.0, // mg - cao trong ức gà
    selenium: 18.0, // µg - cao trong ức gà
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (100g)",
    notes: "Nhiều đạm, ít béo - tốt cho tim mạch",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 256,
      phosphorus: 220,
    },
    cardiovascular: {
      cholesterol: 85,
      saturatedFat: 1,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng' },
    ],
  },
  {
    id: "dui-ga",
    name: "Đùi gà",
    nameEn: "Chicken thigh",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 209,
    protein: 26.0,
    carbs: 0,
    fat: 10.9,
    fiber: 0,
    sodium: 84,
    potassium: 259,
    calcium: 14,
    iron: 0.9,
    phosphorus: 198,
    magnesium: 25,
    zinc: 1.9,
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 7.5, // Niacin - cao trong đùi gà
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.51,
    vitaminB7: 3.5, // Biotin (µg)
    folate: 5,
    vitaminB12: 0.4,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 60.0, // mg - cao trong đùi gà
    selenium: 16.0, // µg - cao trong đùi gà
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 đùi (80g)",
    gout: {
      purine: 138,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 259,
      phosphorus: 198,
    },
    cardiovascular: {
      cholesterol: 102,
      saturatedFat: 3.2,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 80, description: '1 đùi' },
    ],
  },
  {
    id: "canh-ga",
    name: "Cánh gà",
    nameEn: "Chicken wing",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 203,
    protein: 18.3,
    carbs: 0,
    fat: 14.0,
    fiber: 0,
    sodium: 82,
    potassium: 220,
    calcium: 13,
    iron: 0.8,
    phosphorus: 180,
    magnesium: 20,
    zinc: 1.5,
    vitaminB1: 0.05,
    vitaminB2: 0.1,
    vitaminB3: 6.5, // Niacin - cao trong cánh gà
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.45,
    vitaminB7: 3.0, // Biotin (µg)
    folate: 4,
    vitaminB12: 0.35,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 55.0, // mg - cao trong cánh gà
    selenium: 15.0, // µg - cao trong cánh gà
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 cánh (50g)",
    gout: {
      purine: 135,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 220,
      phosphorus: 180,
    },
    cardiovascular: {
      cholesterol: 95,
      saturatedFat: 4.5,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 50, description: '1 cánh' },
    ],
  },
  {
    id: "da-ga",
    name: "Da gà",
    nameEn: "Chicken skin",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 454,
    protein: 13.0,
    carbs: 0,
    fat: 44,
    fiber: 0,
    sodium: 60,
    potassium: 150,
    calcium: 10,
    iron: 0.5,
    phosphorus: 100,
    magnesium: 10,
    zinc: 0.8,
    vitaminB1: 0.02,
    vitaminB2: 0.05,
    vitaminB6: 0.1,
    folate: 2,
    vitaminB12: 0.2,
    vitaminD: 0,
    commonServing: "50g",
    notes: "Rất nhiều chất béo bão hòa - nên tránh cho tim mạch",
    gout: {
      purine: 120,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 150,
      phosphorus: 100,
    },
    cardiovascular: {
      cholesterol: 100,
      saturatedFat: 12,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 50, description: '50g' },
    ],
  },
  {
    id: "ca-loc",
    name: "Cá lóc",
    nameEn: "Snakehead fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 19.0,
    carbs: 0,
    fat: 1.5,
    fiber: 0,
    sodium: 60,
    potassium: 300,
    calcium: 20,
    iron: 0.5,
    phosphorus: 200,
    magnesium: 30,
    zinc: 0.8,
    vitaminB1: 0.05,
    vitaminB2: 0.1,
    vitaminB6: 0.3,
    folate: 15,
    vitaminB12: 1.5,
    vitaminD: 50,
    commonServing: "1 khúc (150g)",
    notes: "Cá nước ngọt, ít béo",
    gout: {
      purine: 100,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 300,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 60,
      saturatedFat: 0.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 khúc' },
    ],
  },
  {
    id: "ca-tram",
    name: "Cá trắm",
    nameEn: "Grass carp",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 127,
    protein: 17.8,
    carbs: 0,
    fat: 5.6,
    fiber: 0,
    sodium: 55,
    potassium: 280,
    calcium: 25,
    iron: 0.6,
    phosphorus: 190,
    magnesium: 28,
    zinc: 0.7,
    vitaminB1: 0.04,
    vitaminB2: 0.08,
    vitaminB6: 0.25,
    folate: 12,
    vitaminB12: 1.2,
    vitaminD: 40,
    commonServing: "1 khúc (150g)",
    gout: {
      purine: 110,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 280,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 66,
      saturatedFat: 1.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 khúc' },
    ],
  },
  {
    id: "ca-ro",
    name: "Cá rô",
    nameEn: "Anabas",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 87,
    protein: 18.0,
    carbs: 0,
    fat: 1.0,
    fiber: 0,
    sodium: 50,
    potassium: 290,
    calcium: 30,
    iron: 0.4,
    phosphorus: 180,
    magnesium: 25,
    zinc: 0.6,
    vitaminB1: 0.03,
    vitaminB2: 0.07,
    vitaminB6: 0.22,
    folate: 10,
    vitaminB12: 1.0,
    vitaminD: 35,
    commonServing: "1 con vừa (100g)",
    gout: {
      purine: 105,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 290,
      phosphorus: 180,
    },
    cardiovascular: {
      cholesterol: 55,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 100, description: '1 con vừa' },
    ],
  },
  {
    id: "ca-tra",
    name: "Cá tra",
    nameEn: "Pangasius",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 15.0,
    carbs: 0,
    fat: 3.5,
    fiber: 0,
    sodium: 45,
    potassium: 270,
    calcium: 15,
    iron: 0.3,
    phosphorus: 170,
    magnesium: 22,
    zinc: 0.5,
    vitaminB1: 0.03,
    vitaminB2: 0.06,
    vitaminB6: 0.2,
    folate: 8,
    vitaminB12: 0.8,
    vitaminD: 30,
    commonServing: "1 khúc (150g)",
    gout: {
      purine: 95,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 270,
      phosphorus: 170,
    },
    cardiovascular: {
      cholesterol: 58,
      saturatedFat: 1.2,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 khúc' },
    ],
  },
  {
    id: "ca-hoi",
    name: "Cá hồi",
    nameEn: "Salmon",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 208,
    protein: 20.0,
    carbs: 0,
    fat: 12,
    fiber: 0,
    sodium: 44,
    potassium: 363,
    calcium: 12,
    iron: 0.8,
    phosphorus: 200,
    magnesium: 27,
    zinc: 0.6,
    vitaminB1: 0.23,
    vitaminB2: 0.38,
    vitaminB3: 7.5, // Niacin - rất cao trong cá hồi
    vitaminB5: 1.6, // Pantothenic acid - cao trong cá hồi
    vitaminB6: 0.82, // mg - rất cao trong cá hồi
    vitaminB7: 5.0, // Biotin (µg)
    folate: 25, // µg
    vitaminB12: 3.2, // µg - rất cao trong cá hồi
    vitaminD: 988, // IU - rất cao trong cá hồi
    vitaminE: 1.1, // Tocopherol - cao trong cá hồi
    vitaminK: 0.1, // Phylloquinone
    choline: 90, // mg - cao trong cá hồi
    selenium: 36.5, // µg - rất cao trong cá hồi
    copper: 0.25, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 khúc (150g)",
    notes: "Giàu omega-3, tốt cho tim mạch",
    gout: {
      purine: 170,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 363,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 55,
      saturatedFat: 2.5,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 khúc' },
    ],
  },
  {
    id: "tom-su",
    name: "Tôm sú",
    nameEn: "Tiger prawn",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 99,
    protein: 24.0,
    carbs: 0,
    fat: 0.3,
    fiber: 0,
    sodium: 111,
    potassium: 259,
    calcium: 64,
    iron: 0.5,
    phosphorus: 237,
    magnesium: 37,
    zinc: 1.3,
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 16, // µg
    vitaminB12: 1.1, // µg - cao trong tôm
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol - cao trong tôm
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg - cao trong tôm
    selenium: 30.0, // µg - cao trong tôm
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 con lớn (30g)",
    notes: "Nhiều đạm, ít béo",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 259,
      phosphorus: 237,
    },
    cardiovascular: {
      cholesterol: 195,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 30, description: '1 con lớn' },
    ],
  },
  {
    id: "tom-the",
    name: "Tôm thẻ",
    nameEn: "White shrimp",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 85,
    protein: 18.0,
    carbs: 0,
    fat: 0.8,
    fiber: 0,
    sodium: 105,
    potassium: 240,
    calcium: 50,
    iron: 0.4,
    phosphorus: 200,
    magnesium: 30,
    zinc: 1.0,
    vitaminB1: 0.02,
    vitaminB2: 0.02,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 1.0, // Biotin (µg)
    folate: 12,
    vitaminB12: 0.9,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // µg - cao trong tôm
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg (tôm nước ngọt)
    commonServing: "10 con vừa (100g)",
    gout: {
      purine: 145,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 240,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 180,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 10, description: '10 con vừa' },
    ],
  },
  {
    id: "cua-bien",
    name: "Cua biển",
    nameEn: "Sea crab",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 97,
    protein: 19.0,
    carbs: 0,
    fat: 1.5,
    fiber: 0,
    sodium: 320,
    potassium: 259,
    calcium: 83,
    iron: 0.8,
    phosphorus: 200,
    magnesium: 34,
    zinc: 3.8,
    vitaminB1: 0.08,
    vitaminB2: 0.3,
    vitaminB3: 2.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 51,
    vitaminB12: 3.3,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg - cao trong cua
    selenium: 37.0, // µg - rất cao trong cua
    copper: 0.6, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 50, // µg - cao trong hải sản
    commonServing: "1 con vừa (200g)",
    notes: "Natri cao - cẩn thận với THA",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 259,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 100,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 200, description: '1 con vừa' },
    ],
  },
  {
    id: "cua-dong",
    name: "Cua đồng",
    nameEn: "Freshwater crab",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 87,
    protein: 15.0,
    carbs: 0,
    fat: 1.5,
    fiber: 0,
    sodium: 280,
    potassium: 240,
    calcium: 120,
    iron: 1.2,
    phosphorus: 180,
    magnesium: 30,
    zinc: 2.5,
    vitaminB1: 0.06,
    vitaminB2: 0.25,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 45,
    vitaminB12: 2.8,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 32.0, // µg - cao trong cua
    copper: 0.5, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 5, // µg (cua nước ngọt - thấp)
    commonServing: "5-6 con (100g)",
    notes: "Nhiều canxi",
    gout: {
      purine: 140,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 240,
      phosphorus: 180,
    },
    cardiovascular: {
      cholesterol: 95,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 20, description: '1 con' },
    ],
  },
  {
    id: "ghe",
    name: "Ghẹ",
    nameEn: "Blue crab",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 101,
    protein: 19.0,
    carbs: 0,
    fat: 1.8,
    fiber: 0,
    sodium: 300,
    potassium: 250,
    calcium: 90,
    iron: 0.9,
    phosphorus: 190,
    magnesium: 32,
    zinc: 3.2,
    vitaminB1: 0.07,
    vitaminB2: 0.28,
    vitaminB3: 2.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.19,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 48,
    vitaminB12: 3.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // µg - cao trong ghẹ
    copper: 0.5, // mg - cao trong ghẹ
    manganese: 0.1, // mg
    iodine: 48, // µg - cao trong hải sản
    commonServing: "1 con (150g)",
    gout: {
      purine: 148,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 250,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 98,
      saturatedFat: 0.4,
    },
    vietnameseUnits: [
      { unit: 'con', weight: 150, description: '1 con' },
    ],
  },
  {
    id: "gan-lon",
    name: "Gan lợn",
    nameEn: "Pork liver",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 135,
    protein: 21.0,
    carbs: 3.0,
    fat: 3.4,
    fiber: 0,
    sodium: 87,
    potassium: 300,
    calcium: 8,
    iron: 23.0,
    phosphorus: 363,
    magnesium: 20,
    zinc: 5.8,
    vitaminA: 6500,
    vitaminC: 23,
    vitaminB1: 0.26,
    vitaminB2: 2.1,
    vitaminB3: 13.0, // Niacin - rất cao trong gan
    vitaminB5: 6.0, // Pantothenic acid - rất cao trong gan
    vitaminB6: 0.52,
    vitaminB7: 35.0, // Biotin (µg) - rất cao trong gan
    folate: 163,
    vitaminB12: 26,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 3.0, // Phylloquinone
    choline: 330, // mg - rất cao trong gan
    selenium: 40.0, // µg - rất cao trong gan
    copper: 0.6, // mg - cao trong gan
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (50g)",
    notes: "Rất nhiều sắt, vitamin A - nhưng purin rất cao, tránh cho bệnh gút",
    gout: {
      purine: 300,
      purineLevel: 'very-high',
    },
    kidney: {
      potassium: 300,
      phosphorus: 363,
    },
    cardiovascular: {
      cholesterol: 301,
      saturatedFat: 1.2,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 50, description: '1 miếng' },
    ],
  },
  {
    id: "than-lon",
    name: "Thận lợn",
    nameEn: "Pork kidney",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 100,
    protein: 16.0,
    carbs: 0.8,
    fat: 3.0,
    fiber: 0,
    sodium: 180,
    potassium: 250,
    calcium: 10,
    iron: 5.0,
    phosphorus: 220,
    magnesium: 18,
    zinc: 2.0,
    vitaminA: 100,
    vitaminC: 10,
    vitaminB1: 0.3,
    vitaminB2: 1.8,
    vitaminB3: 8.0, // Niacin - cao trong thận
    vitaminB5: 3.0, // Pantothenic acid - cao trong thận
    vitaminB6: 0.4,
    vitaminB7: 25.0, // Biotin (µg) - cao trong thận
    folate: 50,
    vitaminB12: 15,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 250, // mg - rất cao trong thận
    selenium: 30.0, // µg - cao trong thận
    copper: 0.4, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 quả (80g)",
    notes: "Purin rất cao - tránh cho bệnh gút",
    gout: {
      purine: 210,
      purineLevel: 'very-high',
    },
    kidney: {
      potassium: 250,
      phosphorus: 220,
    },
    cardiovascular: {
      cholesterol: 280,
      saturatedFat: 1.0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 80, description: '1 quả' },
    ],
  },
  {
    id: "tim-lon",
    name: "Tim lợn",
    nameEn: "Pork heart",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 118,
    protein: 17.0,
    carbs: 0.5,
    fat: 5.0,
    fiber: 0,
    sodium: 90,
    potassium: 280,
    calcium: 8,
    iron: 4.5,
    phosphorus: 200,
    magnesium: 20,
    zinc: 2.5,
    vitaminA: 0,
    vitaminC: 1,
    vitaminB1: 0.3,
    vitaminB2: 0.7,
    vitaminB3: 6.0, // Niacin - cao trong tim
    vitaminB5: 2.0, // Pantothenic acid - cao trong tim
    vitaminB6: 0.5,
    vitaminB7: 10.0, // Biotin (µg)
    folate: 5,
    vitaminB12: 1.5,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 150, // mg - cao trong tim
    selenium: 25.0, // µg - cao trong tim
    copper: 0.3, // mg
    manganese: 0.05, // mg
    iodine: 0, // µg
    commonServing: "1 quả (100g)",
    notes: "Purin cao - hạn chế cho bệnh gút",
    gout: {
      purine: 180,
      purineLevel: 'very-high',
    },
    kidney: {
      potassium: 280,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 274,
      saturatedFat: 1.5,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả' },
    ],
  },
  {
    id: "long-lon",
    name: "Lòng lợn",
    nameEn: "Pork intestine",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 182,
    protein: 6.9,
    carbs: 0,
    fat: 18,
    fiber: 0,
    sodium: 100,
    potassium: 150,
    calcium: 5,
    iron: 1.0,
    phosphorus: 100,
    magnesium: 10,
    zinc: 1.0,
    vitaminB1: 0.05,
    vitaminB2: 0.1,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 2.0, // Biotin (µg)
    folate: 2,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 50, // mg
    selenium: 10.0, // µg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // µg
    commonServing: "1 phần (100g)",
    notes: "Nhiều chất béo, cholesterol cao",
    gout: {
      purine: 120,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 150,
      phosphorus: 100,
    },
    cardiovascular: {
      cholesterol: 150,
      saturatedFat: 8,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 phần' },
    ],
  },
  // ========== BỔ SUNG THỰC PHẨM MỚI - NHÓM RAU CỦ ==========
  {
    id: "rau-muong",
    name: "Rau muống",
    nameEn: "Water spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 2.6,
    carbs: 3.1,
    fat: 0.2,
    fiber: 2.1,
    water: 92,
    sodium: 113,
    potassium: 312,
    calcium: 100,
    iron: 1.4,
    phosphorus: 37,
    magnesium: 71,
    zinc: 0.2,
    vitaminA: 6300,
    vitaminC: 55,
    vitaminB1: 0.03,
    vitaminB2: 0.1,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 57,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - rất cao trong rau lá xanh
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 mớ (200g)",
    notes: "Giàu vitamin A, C - nhưng kali cao",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 6,
    },
    kidney: {
      potassium: 312,
      phosphorus: 37,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mo', weight: 200, description: '1 mớ' },
    ],
  },
  {
    id: "rau-ngot",
    name: "Rau ngót",
    nameEn: "Sweet leaf",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 35,
    protein: 4.8,
    carbs: 5.3,
    fat: 0.4,
    fiber: 2.5,
    water: 86,
    sodium: 25,
    potassium: 457,
    calcium: 169,
    iron: 2.7,
    phosphorus: 65,
    magnesium: 123,
    zinc: 0.9,
    vitaminA: 10500,
    vitaminC: 185,
    vitaminB1: 0.1,
    vitaminB2: 0.21,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 0, // Biotin
    folate: 194, // µg - rất cao trong rau ngót
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 419, // Phylloquinone - rất cao trong rau ngót
    choline: 20.1, // mg
    selenium: 0.8, // µg
    copper: 0.2, // mg
    manganese: 0.6, // mg
    iodine: 0, // µg
    commonServing: "1 mớ (150g)",
    notes: "Kali rất cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 8,
    },
    kidney: {
      potassium: 457,
      phosphorus: 65,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mo', weight: 150, description: '1 mớ' },
    ],
  },
  {
    id: "rau-den",
    name: "Rau dền",
    nameEn: "Amaranth",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 23,
    protein: 2.5,
    carbs: 4.0,
    fat: 0.3,
    fiber: 2.2,
    water: 91,
    sodium: 20,
    potassium: 611,
    calcium: 215,
    iron: 2.3,
    phosphorus: 50,
    magnesium: 55,
    zinc: 0.9,
    vitaminA: 2917,
    vitaminC: 43,
    vitaminB1: 0.03,
    vitaminB2: 0.16,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.19,
    vitaminB7: 0, // Biotin
    folate: 85, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - rất cao trong rau dền
    choline: 6.9, // mg
    selenium: 0.9, // µg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dền
    iodine: 0, // µg
    commonServing: "1 mớ (150g)",
    notes: "Kali rất cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 6,
    },
    kidney: {
      potassium: 611,
      phosphorus: 50,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mo', weight: 150, description: '1 mớ' },
    ],
  },
  {
    id: "rau-cai",
    name: "Rau cải",
    nameEn: "Mustard greens",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 2.9,
    carbs: 4.7,
    fat: 0.4,
    fiber: 2.0,
    water: 90,
    sodium: 20,
    potassium: 354,
    calcium: 103,
    iron: 1.5,
    phosphorus: 50,
    magnesium: 32,
    zinc: 0.3,
    vitaminA: 3024,
    vitaminC: 70,
    vitaminB1: 0.07,
    vitaminB2: 0.11,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 57, // µg - cao trong rau lá xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 257, // Phylloquinone - rất cao trong rau cải
    choline: 19.5, // mg
    selenium: 0.8, // µg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // µg
    commonServing: "1 mớ (150g)",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 7,
    },
    kidney: {
      potassium: 354,
      phosphorus: 50,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mo', weight: 150, description: '1 mớ' },
    ],
  },
  {
    id: "rau-mong-toi",
    name: "Rau mồng tơi",
    nameEn: "Malabar spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 1.8,
    carbs: 3.4,
    fat: 0.3,
    fiber: 1.0,
    water: 93,
    sodium: 24,
    potassium: 312,
    calcium: 109,
    iron: 1.2,
    phosphorus: 37,
    magnesium: 61,
    zinc: 0.4,
    vitaminA: 8000,
    vitaminC: 102,
    vitaminB1: 0.05,
    vitaminB2: 0.16,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.24,
    vitaminB7: 0, // Biotin
    folate: 140,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - cao trong rau lá xanh
    choline: 6.0, // mg
    selenium: 0.8, // µg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // µg
    commonServing: "1 mớ (150g)",
    notes: "Giàu vitamin A, C",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 5,
    },
    kidney: {
      potassium: 312,
      phosphorus: 37,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mo', weight: 150, description: '1 mớ' },
    ],
  },
  {
    id: "cu-cai",
    name: "Củ cải",
    nameEn: "Radish",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 16,
    protein: 0.7,
    carbs: 3.4,
    fat: 0.1,
    fiber: 1.6,
    water: 95,
    sodium: 39,
    potassium: 233,
    calcium: 25,
    iron: 0.3,
    phosphorus: 20,
    magnesium: 10,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 29,
    vitaminB1: 0.01,
    vitaminB2: 0.04,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.07,
    vitaminB7: 0, // Biotin
    folate: 25, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 1.3, // Phylloquinone
    choline: 6.5, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 củ (100g)",
    notes: "Ít kcal, nhiều nước",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 3,
    },
    kidney: {
      potassium: 233,
      phosphorus: 20,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 củ' },
    ],
  },
  {
    id: "su-hao",
    name: "Su hào",
    nameEn: "Kohlrabi",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 27,
    protein: 1.7,
    carbs: 6.2,
    fat: 0.1,
    fiber: 3.6,
    water: 91,
    sodium: 20,
    potassium: 350,
    calcium: 24,
    iron: 0.4,
    phosphorus: 46,
    magnesium: 19,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 62,
    vitaminB1: 0.05,
    vitaminB2: 0.02,
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 16, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 38.2, // Phylloquinone - cao trong su hào
    choline: 9.2, // mg
    selenium: 0.2, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (150g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 20,
      glycemicLoad: 2,
      carbPerPortion: 9,
    },
    kidney: {
      potassium: 350,
      phosphorus: 46,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 150, description: '1 củ vừa' },
    ],
  },
  {
    id: "bap-cai",
    name: "Bắp cải",
    nameEn: "Cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 1.3,
    carbs: 5.8,
    fat: 0.1,
    fiber: 2.5,
    water: 92,
    sodium: 18,
    potassium: 170,
    calcium: 40,
    iron: 0.5,
    phosphorus: 26,
    magnesium: 12,
    zinc: 0.2,
    vitaminA: 98,
    vitaminC: 36.6,
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 43, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 76, // Phylloquinone - cao trong bắp cải
    choline: 10.7, // mg
    selenium: 0.3, // µg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 phần (150g)",
    notes: "Kali thấp - tốt cho bệnh thận",
    diabetes: {
      glycemicIndex: 10,
      glycemicLoad: 1,
      carbPerPortion: 9,
    },
    kidney: {
      potassium: 170,
      phosphorus: 26,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 phần' },
    ],
  },
  {
    id: "sup-lo",
    name: "Súp lơ",
    nameEn: "Cauliflower",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 25,
    protein: 1.9,
    carbs: 5.0,
    fat: 0.3,
    fiber: 2.0,
    water: 92,
    sodium: 30,
    potassium: 299,
    calcium: 22,
    iron: 0.4,
    phosphorus: 44,
    magnesium: 15,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 48.2,
    vitaminB1: 0.05,
    vitaminB2: 0.06,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.7, // Pantothenic acid - cao trong súp lơ
    vitaminB6: 0.18,
    vitaminB7: 1.5, // Biotin (µg) - cao trong súp lơ
    folate: 57,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 15.5, // Phylloquinone
    choline: 44.3, // mg - cao trong súp lơ
    selenium: 0.6, // µg
    copper: 0.04, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 bông vừa (200g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 2,
      carbPerPortion: 10,
    },
    kidney: {
      potassium: 299,
      phosphorus: 44,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 200, description: '1 bông vừa' },
    ],
  },
  {
    id: "hanh-tay",
    name: "Hành tây",
    nameEn: "Onion",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 40,
    protein: 1.1,
    carbs: 9.3,
    fat: 0.1,
    fiber: 1.7,
    water: 89,
    sodium: 4,
    potassium: 146,
    calcium: 23,
    iron: 0.2,
    phosphorus: 29,
    magnesium: 10,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 7.4,
    vitaminB1: 0.05,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 19,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.02, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.5, // µg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 củ vừa (100g)",
    notes: "Ít natri - tốt cho THA",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 1,
      carbPerPortion: 9,
    },
    kidney: {
      potassium: 146,
      phosphorus: 29,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 củ vừa' },
    ],
  },
  {
    id: "toi",
    name: "Tỏi",
    nameEn: "Garlic",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 149,
    protein: 6.4,
    carbs: 33,
    fat: 0.5,
    fiber: 2.1,
    water: 58,
    sodium: 17,
    potassium: 401,
    calcium: 181,
    iron: 1.7,
    phosphorus: 153,
    magnesium: 25,
    zinc: 1.2,
    vitaminA: 0,
    vitaminC: 31.2,
    vitaminB1: 0.2,
    vitaminB2: 0.11,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.6, // Pantothenic acid - cao trong tỏi
    vitaminB6: 1.24, // rất cao
    vitaminB7: 0, // Biotin
    folate: 3,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.7, // Phylloquinone
    choline: 23.2, // mg - cao trong tỏi
    selenium: 14.2, // µg - rất cao trong tỏi
    copper: 0.3, // mg - cao trong tỏi
    manganese: 1.7, // mg - rất cao trong tỏi
    iodine: 0, // µg
    commonServing: "1 tép (3g)",
    notes: "Dùng làm gia vị, ít kcal",
    diabetes: {
      glycemicIndex: 30,
      glycemicLoad: 0,
      carbPerPortion: 1,
    },
    kidney: {
      potassium: 401,
      phosphorus: 153,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'tep', weight: 3, description: '1 tép' },
    ],
  },
  {
    id: "gung",
    name: "Gừng",
    nameEn: "Ginger",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 80,
    protein: 1.8,
    carbs: 18,
    fat: 0.8,
    fiber: 2.0,
    water: 79,
    sodium: 13,
    potassium: 415,
    calcium: 16,
    iron: 0.6,
    phosphorus: 34,
    magnesium: 43,
    zinc: 0.3,
    vitaminA: 0,
    vitaminC: 5,
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.8, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 11,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 28.8, // mg - cao trong gừng
    selenium: 0.7, // µg
    copper: 0.23, // mg
    manganese: 0.23, // mg
    iodine: 0, // µg
    commonServing: "1 nhánh nhỏ (10g)",
    notes: "Dùng làm gia vị",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0,
      carbPerPortion: 2,
    },
    kidney: {
      potassium: 415,
      phosphorus: 34,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'nhanh', weight: 10, description: '1 nhánh nhỏ' },
    ],
  },
  {
    id: "nghe",
    name: "Nghệ",
    nameEn: "Turmeric",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 354,
    protein: 7.8,
    carbs: 65,
    fat: 9.9,
    fiber: 21,
    water: 12,
    sodium: 38,
    potassium: 2525,
    calcium: 183,
    iron: 41.4,
    phosphorus: 268,
    magnesium: 193,
    zinc: 4.4,
    vitaminA: 0,
    vitaminC: 25.9,
    vitaminB1: 0.06,
    vitaminB2: 0.15,
    vitaminB3: 1.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 4.4, // Tocopherol - rất cao trong nghệ
    vitaminK: 13.4, // Phylloquinone
    choline: 49.2, // mg - cao trong nghệ
    selenium: 4.5, // µg
    copper: 0.6, // mg - cao trong nghệ
    manganese: 2.0, // mg - rất cao trong nghệ
    iodine: 0, // µg
    commonServing: "1 củ nhỏ (20g)",
    notes: "Dùng làm gia vị, kali rất cao",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0,
      carbPerPortion: 13,
    },
    kidney: {
      potassium: 2525,
      phosphorus: 268,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 2.2,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 20, description: '1 củ nhỏ' },
    ],
  },
  {
    id: "dau-xanh",
    name: "Đậu xanh",
    nameEn: "Mung bean",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 347,
    protein: 24.0,
    carbs: 63,
    fat: 1.2,
    fiber: 16.3,
    water: 9,
    sodium: 15,
    potassium: 1246,
    calcium: 132,
    iron: 6.7,
    phosphorus: 367,
    magnesium: 189,
    zinc: 2.8,
    vitaminA: 6,
    vitaminC: 4.8,
    vitaminB1: 0.62,
    vitaminB2: 0.23,
    vitaminB3: 2.0, // Niacin
    vitaminB5: 1.9, // Pantothenic acid - cao trong đậu
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 625, // µg - rất cao trong đậu
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 9.0, // Phylloquinone
    choline: 97.9, // mg - cao trong đậu
    selenium: 2.5, // µg
    copper: 0.9, // mg - cao trong đậu
    manganese: 1.0, // mg - cao trong đậu
    iodine: 0, // µg
    commonServing: "1 bát chè (100g)",
    notes: "Kali và phốt pho rất cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 25,
      glycemicLoad: 16,
      carbPerPortion: 63,
    },
    kidney: {
      potassium: 1246,
      phosphorus: 367,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 100, description: '1 bát chè' },
    ],
  },
  {
    id: "dau-den",
    name: "Đậu đen",
    nameEn: "Black bean",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 341,
    protein: 21.6,
    carbs: 62,
    fat: 1.4,
    fiber: 15.2,
    water: 11,
    sodium: 5,
    potassium: 1483,
    calcium: 123,
    iron: 5.0,
    phosphorus: 352,
    magnesium: 171,
    zinc: 3.6,
    vitaminA: 17,
    vitaminC: 0,
    vitaminB1: 0.9,
    vitaminB2: 0.19,
    vitaminB3: 2.6, // Niacin
    vitaminB5: 1.8, // Pantothenic acid - cao trong đậu
    vitaminB6: 0.29,
    vitaminB7: 0, // Biotin
    folate: 444, // µg - rất cao trong đậu
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 8.3, // Tocopherol - cao trong đậu phụng
    vitaminK: 0, // Phylloquinone
    choline: 52.5, // mg - cao trong đậu
    selenium: 7.2, // µg
    copper: 1.1, // mg - cao trong đậu
    manganese: 1.9, // mg - cao trong đậu
    iodine: 0, // µg
    commonServing: "1 bát chè (100g)",
    notes: "Kali và phốt pho rất cao",
    diabetes: {
      glycemicIndex: 30,
      glycemicLoad: 19,
      carbPerPortion: 62,
    },
    kidney: {
      potassium: 1483,
      phosphorus: 352,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.4,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 100, description: '1 bát chè' },
    ],
  },
  {
    id: "dau-phung",
    name: "Đậu phụng",
    nameEn: "Peanut",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 567,
    protein: 25.8,
    carbs: 16,
    fat: 49,
    fiber: 8.5,
    water: 7,
    sodium: 18,
    potassium: 705,
    calcium: 92,
    iron: 4.6,
    phosphorus: 376,
    magnesium: 168,
    zinc: 3.3,
    vitaminA: 0,
    vitaminC: 0,
    vitaminB1: 0.64,
    vitaminB2: 0.14,
    vitaminB3: 12.1, // Niacin - rất cao trong đậu phụng
    vitaminB5: 1.8, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 0, // Biotin
    folate: 240, // µg - cao trong đậu
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 8.3, // Tocopherol - rất cao trong đậu phụng
    vitaminK: 0, // Phylloquinone
    choline: 52.5, // mg - cao trong đậu
    selenium: 7.2, // µg
    copper: 1.1, // mg - cao trong đậu
    manganese: 1.9, // mg - cao trong đậu
    iodine: 0, // µg
    commonServing: "1 nắm (30g)",
    notes: "Nhiều chất béo, kali và phốt pho cao",
    diabetes: {
      glycemicIndex: 14,
      glycemicLoad: 2,
      carbPerPortion: 5,
    },
    kidney: {
      potassium: 705,
      phosphorus: 376,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 6.8,
    },
    vietnameseUnits: [
      { unit: 'nam', weight: 30, description: '1 nắm' },
    ],
  },
  {
    id: "dau-nanh",
    name: "Đậu nành",
    nameEn: "Soybean",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 446,
    protein: 36.5,
    carbs: 30,
    fat: 20,
    fiber: 9.3,
    water: 8,
    sodium: 2,
    potassium: 1797,
    calcium: 277,
    iron: 15.7,
    phosphorus: 704,
    magnesium: 280,
    zinc: 4.9,
    vitaminA: 1,
    vitaminC: 6,
    vitaminB1: 0.87,
    vitaminB2: 0.87,
    vitaminB3: 1.6, // Niacin
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 375,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 47.0, // Phylloquinone
    choline: 115.9, // mg - rất cao trong đậu nành
    selenium: 17.8, // µg - cao trong đậu nành
    copper: 1.7, // mg - rất cao trong đậu nành
    manganese: 2.5, // mg - rất cao trong đậu nành
    iodine: 0, // µg
    commonServing: "1 bát đậu nành luộc (100g)",
    notes: "Kali và phốt pho rất cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 18,
      glycemicLoad: 5,
      carbPerPortion: 30,
    },
    kidney: {
      potassium: 1797,
      phosphorus: 704,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 2.9,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 100, description: '1 bát' },
    ],
  },
  // ========== BỔ SUNG THỰC PHẨM MỚI - NHÓM TRÁI CÂY ==========
  {
    id: "xoai",
    name: "Xoài",
    nameEn: "Mango",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 60,
    protein: 0.8,
    carbs: 15,
    fat: 0.4,
    fiber: 1.6,
    water: 83,
    sodium: 1,
    potassium: 168,
    calcium: 11,
    iron: 0.2,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 1082,
    vitaminC: 36.4,
    vitaminB1: 0.03,
    vitaminB2: 0.04,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 43, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // µg
    commonServing: "1 quả vừa (200g)",
    notes: "GI trung bình",
    diabetes: {
      glycemicIndex: 51,
      glycemicLoad: 15,
      carbPerPortion: 30,
    },
    kidney: {
      potassium: 168,
      phosphorus: 14,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 200, description: '1 quả vừa' },
    ],
  },
  {
    id: "chuoi",
    name: "Chuối",
    nameEn: "Banana",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    fiber: 2.6,
    water: 75,
    sodium: 1,
    potassium: 358,
    calcium: 5,
    iron: 0.3,
    phosphorus: 22,
    magnesium: 27,
    zinc: 0.2,
    vitaminA: 64,
    vitaminC: 8.7,
    vitaminB1: 0.03,
    vitaminB2: 0.07,
    vitaminB3: 0.7, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.37, // mg - cao trong chuối
    vitaminB7: 0, // Biotin
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // µg - cao trong trái cây
    copper: 0.08, // mg
    manganese: 0.27, // mg - cao trong chuối
    iodine: 0, // µg
    commonServing: "1 quả vừa (100g)",
    notes: "Kali cao - cẩn thận với bệnh thận",
    diabetes: {
      glycemicIndex: 51,
      glycemicLoad: 12,
      carbPerPortion: 23,
    },
    kidney: {
      potassium: 358,
      phosphorus: 22,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },
  {
    id: "du-du",
    name: "Đu đủ",
    nameEn: "Papaya",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 43,
    protein: 0.5,
    carbs: 11,
    fat: 0.3,
    fiber: 1.7,
    water: 88,
    sodium: 8,
    potassium: 182,
    calcium: 20,
    iron: 0.3,
    phosphorus: 10,
    magnesium: 21,
    zinc: 0.1,
    vitaminA: 950,
    vitaminC: 60.9,
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 37,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.6, // µg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 miếng vừa (150g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 60,
      glycemicLoad: 10,
      carbPerPortion: 17,
    },
    kidney: {
      potassium: 182,
      phosphorus: 10,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 150, description: '1 miếng vừa' },
    ],
  },
  {
    id: "dua-hau",
    name: "Dưa hấu",
    nameEn: "Watermelon",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 30,
    protein: 0.6,
    carbs: 8,
    fat: 0.2,
    fiber: 0.4,
    water: 91,
    sodium: 1,
    potassium: 112,
    calcium: 7,
    iron: 0.2,
    phosphorus: 11,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 569,
    vitaminC: 8.1,
    vitaminB1: 0.03,
    vitaminB2: 0.02,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 3, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.1, // mg
    selenium: 0.4, // µg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // µg
    commonServing: "1 miếng (200g)",
    notes: "GI cao nhưng GL thấp do nhiều nước",
    diabetes: {
      glycemicIndex: 76,
      glycemicLoad: 12,
      carbPerPortion: 16,
    },
    kidney: {
      potassium: 112,
      phosphorus: 11,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 200, description: '1 miếng' },
    ],
  },
  {
    id: "mit",
    name: "Mít",
    nameEn: "Jackfruit",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 95,
    protein: 1.7,
    carbs: 24,
    fat: 0.6,
    fiber: 1.5,
    water: 73,
    sodium: 2,
    potassium: 448,
    calcium: 24,
    iron: 0.2,
    phosphorus: 21,
    magnesium: 29,
    zinc: 0.1,
    vitaminA: 5,
    vitaminC: 13.7,
    vitaminB1: 0.11,
    vitaminB2: 0.06,
    vitaminB3: 0.9, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 24, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0.6, // µg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 múi (50g)",
    notes: "Kali cao, GI cao",
    diabetes: {
      glycemicIndex: 75,
      glycemicLoad: 9,
      carbPerPortion: 12,
    },
    kidney: {
      potassium: 448,
      phosphorus: 21,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'mui', weight: 50, description: '1 múi' },
    ],
  },
  {
    id: "sau-rieng",
    name: "Sầu riêng",
    nameEn: "Durian",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 147,
    protein: 1.5,
    carbs: 27,
    fat: 5.3,
    fiber: 3.8,
    water: 65,
    sodium: 2,
    potassium: 436,
    calcium: 6,
    iron: 0.4,
    phosphorus: 39,
    magnesium: 30,
    zinc: 0.3,
    vitaminA: 44,
    vitaminC: 19.7,
    vitaminB1: 0.37,
    vitaminB2: 0.2,
    vitaminB6: 0.32,
    folate: 36,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 múi (50g)",
    notes: "Nhiều kcal, kali cao",
    diabetes: {
      glycemicIndex: 49,
      glycemicLoad: 7,
      carbPerPortion: 14,
    },
    kidney: {
      potassium: 436,
      phosphorus: 39,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mui', weight: 50, description: '1 múi' },
    ],
  },
  {
    id: "tao",
    name: "Táo",
    nameEn: "Apple",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fat: 0.2,
    fiber: 2.4,
    water: 86,
    sodium: 1,
    potassium: 107,
    calcium: 6,
    iron: 0.1,
    phosphorus: 12,
    magnesium: 5,
    zinc: 0.04,
    vitaminA: 3,
    vitaminC: 4.6,
    vitaminB1: 0.02,
    vitaminB2: 0.03,
    vitaminB6: 0.04,
    folate: 3,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 quả vừa (150g)",
    notes: "GI thấp, kali thấp - tốt cho đái tháo đường và bệnh thận",
    diabetes: {
      glycemicIndex: 36,
      glycemicLoad: 8,
      carbPerPortion: 21,
    },
    kidney: {
      potassium: 107,
      phosphorus: 12,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 150, description: '1 quả vừa' },
    ],
  },
  {
    id: "le",
    name: "Lê",
    nameEn: "Pear",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 57,
    protein: 0.4,
    carbs: 15,
    fat: 0.1,
    fiber: 3.1,
    water: 84,
    sodium: 1,
    potassium: 116,
    calcium: 9,
    iron: 0.2,
    phosphorus: 12,
    magnesium: 7,
    zinc: 0.1,
    vitaminA: 1,
    vitaminC: 4.3,
    vitaminB1: 0.01,
    vitaminB2: 0.03,
    vitaminB6: 0.03,
    folate: 7,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 quả vừa (150g)",
    notes: "GI thấp, kali thấp",
    diabetes: {
      glycemicIndex: 38,
      glycemicLoad: 9,
      carbPerPortion: 23,
    },
    kidney: {
      potassium: 116,
      phosphorus: 12,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 150, description: '1 quả vừa' },
    ],
  },
  {
    id: "cam",
    name: "Cam",
    nameEn: "Orange",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 47,
    protein: 0.9,
    carbs: 12,
    fat: 0.1,
    fiber: 2.4,
    water: 87,
    sodium: 0,
    potassium: 181,
    calcium: 40,
    iron: 0.1,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 225,
    vitaminC: 53.2,
    vitaminB1: 0.09,
    vitaminB2: 0.04,
    vitaminB6: 0.06,
    folate: 30,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 quả vừa (150g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 42,
      glycemicLoad: 8,
      carbPerPortion: 18,
    },
    kidney: {
      potassium: 181,
      phosphorus: 14,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 150, description: '1 quả vừa' },
    ],
  },
  {
    id: "quyt",
    name: "Quýt",
    nameEn: "Tangerine",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 53,
    protein: 0.8,
    carbs: 13,
    fat: 0.3,
    fiber: 1.8,
    water: 85,
    sodium: 2,
    potassium: 166,
    calcium: 37,
    iron: 0.2,
    phosphorus: 20,
    magnesium: 12,
    zinc: 0.1,
    vitaminA: 681,
    vitaminC: 26.7,
    vitaminB1: 0.06,
    vitaminB2: 0.04,
    vitaminB6: 0.08,
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    commonServing: "1 quả vừa (100g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 42,
      glycemicLoad: 5,
      carbPerPortion: 13,
    },
    kidney: {
      potassium: 166,
      phosphorus: 20,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },
  {
    id: "buoi",
    name: "Bưởi",
    nameEn: "Pomelo",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 38,
    protein: 0.8,
    carbs: 10,
    fat: 0,
    fiber: 1.0,
    water: 89,
    sodium: 1,
    potassium: 216,
    calcium: 4,
    iron: 0.1,
    phosphorus: 17,
    magnesium: 6,
    zinc: 0.1,
    vitaminA: 8,
    vitaminC: 61,
    vitaminB1: 0.03,
    vitaminB2: 0.03,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.04,
    vitaminB7: 0, // Biotin
    folate: 0, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.1, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "1 múi (100g)",
    notes: "Giàu vitamin C, GI thấp",
    diabetes: {
      glycemicIndex: 25,
      glycemicLoad: 3,
      carbPerPortion: 10,
    },
    kidney: {
      potassium: 216,
      phosphorus: 17,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'mui', weight: 100, description: '1 múi' },
    ],
  },
  {
    id: "oi",
    name: "Ổi",
    nameEn: "Guava",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 68,
    protein: 2.6,
    carbs: 14,
    fat: 1.0,
    fiber: 5.4,
    water: 81,
    sodium: 2,
    potassium: 417,
    calcium: 18,
    iron: 0.3,
    phosphorus: 40,
    magnesium: 22,
    zinc: 0.2,
    vitaminA: 31,
    vitaminC: 228.3,
    vitaminB1: 0.07,
    vitaminB2: 0.04,
    vitaminB3: 1.1, // Niacin - cao trong ổi
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 49, // µg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // µg
    copper: 0.23, // mg - cao trong ổi
    manganese: 0.15, // mg
    iodine: 0, // µg
    commonServing: "1 quả vừa (100g)",
    notes: "Rất giàu vitamin C, kali cao",
    diabetes: {
      glycemicIndex: 12,
      glycemicLoad: 2,
      carbPerPortion: 14,
    },
    kidney: {
      potassium: 417,
      phosphorus: 40,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quả vừa' },
    ],
  },
  {
    id: "nhan",
    name: "Nhãn",
    nameEn: "Longan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 60,
    protein: 1.3,
    carbs: 15,
    fat: 0.1,
    fiber: 1.1,
    water: 82,
    sodium: 0,
    potassium: 266,
    calcium: 1,
    iron: 0.1,
    phosphorus: 21,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 84,
    vitaminB1: 0.03,
    vitaminB2: 0.14, // mg - cao trong nhãn
    vitaminB3: 0.3, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 0,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0.1, // µg
    copper: 0.2, // mg - cao trong nhãn
    manganese: 0.05, // mg
    iodine: 0, // µg
    commonServing: "10 quả (100g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 50,
      glycemicLoad: 8,
      carbPerPortion: 15,
    },
    kidney: {
      potassium: 266,
      phosphorus: 21,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 10, description: '10 quả' },
    ],
  },
  {
    id: "vai",
    name: "Vải",
    nameEn: "Lychee",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 66,
    protein: 0.8,
    carbs: 17,
    fat: 0.4,
    fiber: 1.3,
    water: 82,
    sodium: 1,
    potassium: 171,
    calcium: 5,
    iron: 0.3,
    phosphorus: 31,
    magnesium: 10,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 71.5,
    vitaminB1: 0.01,
    vitaminB2: 0.07,
    vitaminB3: 0.6, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 7.1, // mg
    selenium: 0.6, // µg
    copper: 0.15, // mg
    manganese: 0.05, // mg
    iodine: 0, // µg
    commonServing: "10 quả (100g)",
    notes: "Giàu vitamin C",
    diabetes: {
      glycemicIndex: 50,
      glycemicLoad: 9,
      carbPerPortion: 17,
    },
    kidney: {
      potassium: 171,
      phosphorus: 31,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 10, description: '10 quả' },
    ],
  },
  {
    id: "chom-chom",
    name: "Chôm chôm",
    nameEn: "Rambutan",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 82,
    protein: 0.9,
    carbs: 21,
    fat: 0.2,
    fiber: 0.9,
    water: 78,
    sodium: 11,
    potassium: 42,
    calcium: 22,
    iron: 0.4,
    phosphorus: 9,
    magnesium: 7,
    zinc: 0.1,
    vitaminA: 0,
    vitaminC: 4.9,
    vitaminB1: 0.01,
    vitaminB2: 0.02,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.02,
    vitaminB7: 0, // Biotin
    folate: 8,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0.1, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "5 quả (100g)",
    notes: "Kali thấp - tốt cho bệnh thận",
    diabetes: {
      glycemicIndex: 55,
      glycemicLoad: 12,
      carbPerPortion: 21,
    },
    kidney: {
      potassium: 42,
      phosphorus: 9,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 20, description: '1 quả' },
    ],
  },
  {
    id: "mang-cut",
    name: "Măng cụt",
    nameEn: "Mangosteen",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 73,
    protein: 0.4,
    carbs: 18,
    fat: 0.6,
    fiber: 1.8,
    water: 81,
    sodium: 7,
    potassium: 48,
    calcium: 12,
    iron: 0.3,
    phosphorus: 8,
    magnesium: 13,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 2.9,
    vitaminB1: 0.05,
    vitaminB2: 0.05,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.02,
    vitaminB7: 0, // Biotin
    folate: 31,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0.1, // µg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // µg
    commonServing: "2 quả (100g)",
    notes: "Kali thấp",
    diabetes: {
      glycemicIndex: 30,
      glycemicLoad: 5,
      carbPerPortion: 18,
    },
    kidney: {
      potassium: 48,
      phosphorus: 8,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 50, description: '1 quả' },
    ],
  },
  // ========== BỔ SUNG THỰC PHẨM MỚI - NHÓM GIA VỊ & NƯỚC CHẤM ==========
  {
    id: "nuoc-mam",
    name: "Nước mắm",
    nameEn: "Fish sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "ml",
    calories: 35,
    protein: 5.5,
    carbs: 3.5,
    fat: 0,
    fiber: 0,
    sodium: 8000,
    potassium: 100,
    calcium: 20,
    iron: 1.0,
    phosphorus: 50,
    magnesium: 10,
    zinc: 0.5,
    vitaminB1: 0.01,
    vitaminB2: 0.02,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.05,
    vitaminB7: 0, // Biotin
    folate: 2,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.0, // mg
    selenium: 2.0, // µg
    copper: 0.01, // mg
    manganese: 0.01, // mg
    iodine: 5, // µg - từ cá
    commonServing: "1 thìa canh (15ml)",
    notes: "Natri rất cao - hạn chế nghiêm ngặt cho THA",
    diabetes: {
      glycemicIndex: 0,
      glycemicLoad: 0,
      carbPerPortion: 0.5,
    },
    kidney: {
      potassium: 100,
      phosphorus: 50,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 15, description: '1 thìa canh' },
    ],
  },
  {
    id: "nuoc-tuong",
    name: "Nước tương",
    nameEn: "Soy sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "ml",
    calories: 53,
    protein: 8.1,
    carbs: 4.9,
    fat: 0.1,
    fiber: 0.8,
    sodium: 6000,
    potassium: 435,
    calcium: 33,
    iron: 2.4,
    phosphorus: 166,
    magnesium: 50,
    zinc: 0.5,
    vitaminB1: 0.03,
    vitaminB2: 0.15,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 2.0, // mg
    selenium: 0.5, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 thìa canh (15ml)",
    notes: "Natri rất cao - hạn chế nghiêm ngặt cho THA",
    diabetes: {
      glycemicIndex: 0,
      glycemicLoad: 0,
      carbPerPortion: 0.7,
    },
    kidney: {
      potassium: 435,
      phosphorus: 166,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 15, description: '1 thìa canh' },
    ],
  },
  {
    id: "tuong-ot",
    name: "Tương ớt",
    nameEn: "Chili sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 108,
    protein: 1.5,
    carbs: 24,
    fat: 0.5,
    fiber: 2.0,
    sodium: 2000,
    potassium: 320,
    calcium: 15,
    iron: 0.8,
    phosphorus: 40,
    magnesium: 20,
    zinc: 0.3,
    vitaminA: 1624,
    vitaminC: 76.4,
    vitaminB1: 0.05,
    vitaminB2: 0.09,
    vitaminB3: 1.0, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 0, // Biotin
    folate: 23,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 5.4, // Phylloquinone
    choline: 2.5, // mg
    selenium: 0.3, // µg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // µg
    commonServing: "1 thìa cà phê (5g)",
    notes: "Natri cao",
    diabetes: {
      glycemicIndex: 15,
      glycemicLoad: 0,
      carbPerPortion: 1.2,
    },
    kidney: {
      potassium: 320,
      phosphorus: 40,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'thia-ca-phe', weight: 5, description: '1 thìa cà phê' },
    ],
  },
  {
    id: "tuong-den",
    name: "Tương đen",
    nameEn: "Black bean sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 120,
    protein: 5.0,
    carbs: 20,
    fat: 2.0,
    fiber: 2.0,
    sodium: 3000,
    potassium: 200,
    calcium: 30,
    iron: 1.5,
    phosphorus: 100,
    magnesium: 30,
    zinc: 0.5,
    vitaminB1: 0.1,
    vitaminB2: 0.1,
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 3.0, // mg
    selenium: 0.5, // µg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // µg
    commonServing: "1 thìa canh (15g)",
    notes: "Natri cao",
    diabetes: {
      glycemicIndex: 20,
      glycemicLoad: 1,
      carbPerPortion: 3,
    },
    kidney: {
      potassium: 200,
      phosphorus: 100,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 15, description: '1 thìa canh' },
    ],
  },
  {
    id: "mat-ong",
    name: "Mật ong",
    nameEn: "Honey",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 304,
    protein: 0.3,
    carbs: 82,
    fat: 0,
    fiber: 0.2,
    sodium: 4,
    potassium: 52,
    calcium: 6,
    iron: 0.4,
    phosphorus: 4,
    magnesium: 2,
    zinc: 0.2,
    vitaminA: 0,
    vitaminC: 0.5,
    vitaminB1: 0,
    vitaminB2: 0.04,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.02,
    vitaminB7: 0, // Biotin
    folate: 2,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 2.2, // mg
    selenium: 0.8, // µg
    copper: 0.04, // mg
    manganese: 0.08, // mg
    iodine: 0, // µg
    commonServing: "1 thìa canh (21g)",
    notes: "GI cao - hạn chế cho đái tháo đường",
    diabetes: {
      glycemicIndex: 58,
      glycemicLoad: 10,
      carbPerPortion: 17,
    },
    kidney: {
      potassium: 52,
      phosphorus: 4,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 21, description: '1 thìa canh' },
    ],
  },
  {
    id: "mam-tom",
    name: "Mắm tôm",
    nameEn: "Shrimp paste",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 100,
    protein: 20.0,
    carbs: 2.0,
    fat: 1.0,
    fiber: 0,
    sodium: 5000,
    potassium: 200,
    calcium: 50,
    iron: 2.0,
    phosphorus: 150,
    magnesium: 30,
    zinc: 1.0,
    vitaminB1: 0.1,
    vitaminB2: 0.2,
    vitaminB3: 1.5, // Niacin
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0.5, // Biotin (µg)
    folate: 10,
    vitaminB12: 1.0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.0, // mg
    selenium: 8.0, // µg - cao từ tôm
    copper: 0.1, // mg
    manganese: 0.05, // mg
    iodine: 15, // µg - cao từ tôm
    commonServing: "1 thìa cà phê (5g)",
    notes: "Natri rất cao - hạn chế nghiêm ngặt cho THA",
    diabetes: {
      glycemicIndex: 0,
      glycemicLoad: 0,
      carbPerPortion: 0.1,
    },
    kidney: {
      potassium: 200,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 50,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'thia-ca-phe', weight: 5, description: '1 thìa cà phê' },
    ],
  },
  {
    id: "mam-nem",
    name: "Mắm nêm",
    nameEn: "Fermented fish sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 80,
    protein: 15.0,
    carbs: 2.0,
    fat: 1.5,
    fiber: 0,
    sodium: 4500,
    potassium: 250,
    calcium: 40,
    iron: 1.5,
    phosphorus: 120,
    magnesium: 25,
    zinc: 0.8,
    vitaminB1: 0.08,
    vitaminB2: 0.15,
    vitaminB3: 1.2, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0.3, // Biotin (µg)
    folate: 8,
    vitaminB12: 0.8,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 4.0, // mg
    selenium: 6.0, // µg - từ cá
    copper: 0.08, // mg
    manganese: 0.04, // mg
    iodine: 12, // µg - từ cá
    commonServing: "1 thìa cà phê (5g)",
    notes: "Natri rất cao",
    diabetes: {
      glycemicIndex: 0,
      glycemicLoad: 0,
      carbPerPortion: 0.1,
    },
    kidney: {
      potassium: 250,
      phosphorus: 120,
    },
    cardiovascular: {
      cholesterol: 40,
      saturatedFat: 0.3,
    },
    vietnameseUnits: [
      { unit: 'thia-ca-phe', weight: 5, description: '1 thìa cà phê' },
    ],
  },
];

/**
 * Get food by ID with extended information
 */
export function getExtendedFoodById(id: string): ExtendedFoodItem | undefined {
  return extendedFoodDatabase.find((food) => food.id === id);
}

/**
 * Search foods with extended information
 */
export function searchExtendedFoods(query: string): ExtendedFoodItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return extendedFoodDatabase.filter(
    (food) =>
      food.name.toLowerCase().includes(lowerQuery) ||
      food.nameEn?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get foods by disease compatibility
 */
export function getFoodsByDisease(
  disease: 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular',
  level: 'good' | 'moderate' | 'avoid' = 'good'
): ExtendedFoodItem[] {
  return extendedFoodDatabase.filter((food) => {
    switch (disease) {
      case 'diabetes':
        if (!food.diabetes) return false;
        if (level === 'good') return (food.diabetes.glycemicIndex || 100) < 55;
        if (level === 'moderate') {
          const gi = food.diabetes.glycemicIndex || 100;
          return gi >= 55 && gi < 70;
        }
        return (food.diabetes.glycemicIndex || 0) >= 70;
        
      case 'gout':
        if (!food.gout) return false;
        if (level === 'good') return food.gout.purineLevel === 'low';
        if (level === 'moderate') return food.gout.purineLevel === 'medium';
        return food.gout.purineLevel === 'high' || food.gout.purineLevel === 'very-high';
        
      case 'kidney':
        if (!food.kidney) return false;
        if (level === 'good') return food.kidney.potassium < 200 && food.kidney.phosphorus < 200;
        if (level === 'moderate') {
          return (food.kidney.potassium >= 200 && food.kidney.potassium < 300) ||
                 (food.kidney.phosphorus >= 200 && food.kidney.phosphorus < 300);
        }
        return food.kidney.potassium >= 300 || food.kidney.phosphorus >= 300;
        
      case 'hypertension':
        if (!food.sodium) return level === 'good';
        if (level === 'good') return food.sodium < 100;
        if (level === 'moderate') return food.sodium >= 100 && food.sodium < 500;
        return food.sodium >= 500;
        
      case 'cardiovascular':
        if (!food.cardiovascular) return level === 'good';
        if (level === 'good') {
          return food.cardiovascular.cholesterol < 100 && food.cardiovascular.saturatedFat < 5;
        }
        if (level === 'moderate') {
          return (food.cardiovascular.cholesterol >= 100 && food.cardiovascular.cholesterol < 200) ||
                 (food.cardiovascular.saturatedFat >= 5 && food.cardiovascular.saturatedFat < 10);
        }
        return food.cardiovascular.cholesterol >= 200 || food.cardiovascular.saturatedFat >= 10;
        
      default:
        return false;
    }
  });
}
