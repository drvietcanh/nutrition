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

export interface ExtendedFoodItem extends FoodItem, DiseaseSpecificInfo {
  // Đơn vị Việt Nam
  vietnameseUnits?: {
    unit: 'bat' | 'thia-canh' | 'thia-ca-phe' | 'dia' | 'to' | 'cai' | 'qua' | 'mieng';
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
    commonServing: "100g (khoảng 1 lòng bàn tay)",
    gout: {
      purine: 160,
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
    id: "ca-basa",
    name: "Cá basa",
    nameEn: "Basa fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 162,
    protein: 18,
    carbs: 0,
    fat: 9,
    sodium: 45,
    commonServing: "100g (1 miếng vừa)",
    gout: {
      purine: 100,
      purineLevel: 'medium',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 50,
      saturatedFat: 2,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miếng vừa (100g)' },
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
    protein: 19,
    carbs: 0,
    fat: 1.5,
    sodium: 50,
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
    protein: 24,
    carbs: 0.2,
    fat: 0.3,
    sodium: 111,
    calcium: 52,
    iron: 0.3,
    commonServing: "100g (khoảng 8-10 con vừa)",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: {
      potassium: 200,
      phosphorus: 200,
    },
    cardiovascular: {
      cholesterol: 150,
      saturatedFat: 0.2,
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
