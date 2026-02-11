/**
 * Extended Vietnamese food database with disease-specific information
 * 
 * Má»Ÿ rá»™ng tá»« food-db.ts vá»›i thÃ´ng tin vá»:
 * - ÄÃ¡i thÃ¡o Ä‘Æ°á»ng: GI, GL
 * - Bá»‡nh gÃºt: Purin
 * - Bá»‡nh tháº­n: Kali, Phá»‘t pho
 * - TÄƒng huyáº¿t Ã¡p: Natri
 * - Tim máº¡ch: Cholesterol, Cháº¥t bÃ©o bÃ£o hÃ²a
 */

import { foodDatabase, type FoodItem } from "./food-db";

export interface DiseaseSpecificInfo {
  // ÄÃ¡i thÃ¡o Ä‘Æ°á»ng
  diabetes?: {
    glycemicIndex?: number; // GI
    glycemicLoad?: number; // GL cho kháº©u pháº§n thÃ´ng thÆ°á»ng
    carbPerPortion: number; // g carb trong kháº©u pháº§n thÃ´ng thÆ°á»ng
  };
  
  // Bá»‡nh gÃºt
  gout?: {
    purine: number; // mg/100g
    purineLevel: 'very-high' | 'high' | 'medium' | 'low';
  };
  
  // Bá»‡nh tháº­n
  kidney?: {
    potassium: number; // mg/100g
    phosphorus: number; // mg/100g
  };
  
  // TÄƒng huyáº¿t Ã¡p (natri Ä‘Ã£ cÃ³ trong FoodItem)
  
  // Tim máº¡ch
  cardiovascular?: {
    cholesterol: number; // mg/100g
    saturatedFat: number; // g/100g
  };
}

export interface ExtendedFoodItem extends Omit<FoodItem, 'code'>, DiseaseSpecificInfo {
  // MÃ£ sá»‘ thá»±c pháº©m (optional - cÃ³ thá»ƒ cÃ³ hoáº·c khÃ´ng)
  // CÃ³ trong food-db.ts nhÆ°ng khÃ´ng cÃ³ trong extended ban Ä‘áº§u
  code?: string; // MÃ£ sá»‘ (vÃ­ dá»¥: "10001") - optional for backward compatibility
  
  // DEPRECATED: These fields should be moved to disease-specific sections
  // Use kidney.potassium and kidney.phosphorus instead of base potassium/phosphorus
  // Use cardiovascular.cholesterol instead of base cholesterol
  /** @deprecated Use kidney.potassium instead */
  potassium?: number; // mg per 100g
  /** @deprecated Use kidney.phosphorus instead */
  phosphorus?: number; // mg per 100g
  /** @deprecated Use cardiovascular.cholesterol instead */
  cholesterol?: number; // mg per 100g
  // Vitamin nhÃ³m B & vitamin D (Ä‘Æ¡n vá»‹ tham kháº£o, dÃ¹ng cho má»¥c Ä‘Ã­ch giÃ¡o dá»¥c)
  vitaminB1?: number; // mg per 100g
  vitaminB2?: number; // mg per 100g
  vitaminB3?: number; // mg per 100g (Niacin)
  vitaminB5?: number; // mg per 100g (Pantothenic acid)
  vitaminB6?: number; // mg per 100g
  vitaminB7?: number; // Âµg per 100g (Biotin)
  folate?: number; // Âµg per 100g
  vitaminB12?: number; // Âµg per 100g
  vitaminD?: number; // IU per 100g
  vitaminE?: number; // mg per 100g (Tocopherol)
  vitaminK?: number; // Âµg per 100g (Phylloquinone/Menaquinone)
  choline?: number; // mg per 100g

  // KhoÃ¡ng cháº¥t bá»• sung (theo chuáº©n quá»‘c táº¿)
  selenium?: number; // Âµg per 100g
  copper?: number; // mg per 100g
  manganese?: number; // mg per 100g
  iodine?: number; // Âµg per 100g

  // PhÃ¢n tÃ­ch cháº¥t bÃ©o chi tiáº¿t (theo chuáº©n quá»‘c táº¿)
  transFat?: number; // g per 100g
  monounsaturatedFat?: number; // g per 100g (MUFA)
  polyunsaturatedFat?: number; // g per 100g (PUFA)
  omega3FattyAcids?: number; // g per 100g
  omega6FattyAcids?: number; // g per 100g

  // ÄÆ¡n vá»‹ Viá»‡t Nam
  vietnameseUnits?: {
    unit: 'bat' | 'thia-canh' | 'thia-ca-phe' | 'dia' | 'to' | 'cai' | 'qua' | 'mieng' | 'bo' | 'goi' | 'o' | 'con' | 'mo' | 'mui' | 'nam' | 'nhanh' | 'tep';
    weight: number; // grams
    description: string;
  }[];
}

/**
 * Database thá»±c pháº©m Viá»‡t Nam vá»›i thÃ´ng tin Ä‘áº§y Ä‘á»§
 */
const baseExtendedFoodDatabase: ExtendedFoodItem[] = [
  // Rice & Noodles
  {
    id: "com-trang",
    code: "10001",
    name: "CÆ¡m tráº¯ng",
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
    selenium: 7.5, // Âµg
    copper: 0.07, // mg
    manganese: 0.47, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t nhá» (100g)",
    diabetes: {
      glycemicIndex: 73,
      glycemicLoad: 33, // cho 1 bÃ¡t vá»«a (~150g)
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
      { unit: 'bat', weight: 150, description: '1 bÃ¡t vá»«a' },
      { unit: 'bat', weight: 100, description: '1 bÃ¡t nhá»' },
    ],
  },
  {
    id: "com-gao-lut",
    name: "CÆ¡m gáº¡o lá»©t",
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
    vitaminB3: 2.6, // Niacin - cao hÆ¡n gáº¡o tráº¯ng
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.3,
    vitaminB7: 0, // Biotin
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.17, // Tocopherol - cao hÆ¡n gáº¡o tráº¯ng
    vitaminK: 0.5, // Phylloquinone
    choline: 9.2, // mg - cao hÆ¡n gáº¡o tráº¯ng
    selenium: 9.8, // Âµg - cao hÆ¡n gáº¡o tráº¯ng
    copper: 0.11, // mg
    manganese: 0.93, // mg - cao hÆ¡n gáº¡o tráº¯ng
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t vá»«a (150g)",
    diabetes: {
      glycemicIndex: 55,
      glycemicLoad: 25, // cho 1 bÃ¡t vá»«a (~150g)
      carbPerPortion: 45,
    },
    kidney: {
      potassium: 43,
      phosphorus: 83, // cao hÆ¡n gáº¡o tráº¯ng
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 150, description: '1 bÃ¡t vá»«a' },
    ],
  },
  {
    id: "bun-cha",
    code: "10003",
    name: "BÃºn cháº£",
    nameEn: "Grilled pork with noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 168,
    protein: 10.0,
    carbs: 20.0,
    fat: 4.8,
    fiber: 0.6,
    water: 65.0,
    sodium: 320,
    potassium: 120,
    calcium: 20,
    iron: 1.5,
    phosphorus: 60,
    magnesium: 22,
    zinc: 1.2,
    vitaminB1: 0.15,
    vitaminB2: 0.12,
    vitaminB3: 2.5, // Niacin - tá»« thá»‹t heo
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 0, // Biotin
    folate: 8,
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t heo
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 35.0, // mg
    selenium: 8.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (250g)",
    notes: "MÃ³n Äƒn truyá»n thá»‘ng HÃ  Ná»™i, thá»‹t nÆ°á»›ng vá»›i bÃºn.",
    diabetes: {
      glycemicIndex: 60,
      glycemicLoad: 30,
      carbPerPortion: 50,
    },
    kidney: {
      potassium: 120,
      phosphorus: 60,
    },
    cardiovascular: {
      cholesterol: 50,
      saturatedFat: 1.8,
    },
    gout: {
      purine: 150,
      purineLevel: "high",
    },
    vietnameseUnits: [
      { unit: 'to', weight: 250, description: '1 pháº§n bÃºn cháº£' },
    ],
  },
  {
    id: "bun-ga",
    code: "10004",
    name: "BÃºn gÃ ",
    nameEn: "Chicken noodle soup",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 95,
    protein: 5.5,
    carbs: 12.0,
    fat: 2.5,
    fiber: 0.5,
    water: 79.0,
    sodium: 350,
    potassium: 85,
    calcium: 12,
    iron: 0.8,
    phosphorus: 45,
    magnesium: 15,
    zinc: 0.6,
    cholesterol: 25,
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 1.2, // Niacin - tá»« thá»‹t gÃ 
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 0, // Biotin
    folate: 5,
    vitaminB12: 0.2, // Âµg - tá»« thá»‹t gÃ 
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 5.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ vá»«a (300g)",
    notes: "BÃºn nÆ°á»›c dÃ¹ng gÃ , Ã­t má»¡ hÆ¡n phá»Ÿ bÃ².",
    diabetes: {
      glycemicIndex: 55,
      glycemicLoad: 20,
      carbPerPortion: 36,
    },
    kidney: {
      potassium: 85,
      phosphorus: 45,
    },
    cardiovascular: {
      cholesterol: 25,
      saturatedFat: 0.8,
    },
    gout: {
      purine: 140,
      purineLevel: "high",
    },
    vietnameseUnits: [
      { unit: 'to', weight: 300, description: '1 tÃ´ bÃºn gÃ ' },
    ],
  },
  {
    id: "banh-mi",
    code: "10005",
    name: "BÃ¡nh mÃ¬",
    nameEn: "Vietnamese bread",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 265,
    protein: 8.2,
    carbs: 51.0,
    fat: 3.2,
    fiber: 2.7,
    water: 36.0,
    sodium: 491,
    potassium: 115,
    calcium: 20,
    iron: 3.6,
    phosphorus: 98,
    magnesium: 25,
    zinc: 0.7,
    vitaminB1: 0.51,
    vitaminB2: 0.33,
    vitaminB3: 4.0, // Niacin - tá»« bá»™t mÃ¬
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.0, // mg
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 á»• vá»«a)",
    notes: "BÃ¡nh mÃ¬ Viá»‡t Nam, thÆ°á»ng dÃ¹ng lÃ m bÃ¡nh mÃ¬ káº¹p.",
    diabetes: {
      glycemicIndex: 75,
      glycemicLoad: 38,
      carbPerPortion: 51,
    },
    kidney: {
      potassium: 115,
      phosphorus: 98,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.6,
    },
    vietnameseUnits: [
      { unit: 'o', weight: 100, description: '1 á»• bÃ¡nh mÃ¬' },
    ],
  },
  {
    id: "pho-bo",
    code: "11016",
    name: "Phá»Ÿ bÃ²",
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
    vitaminB3: 1.5, // Niacin (tá»« thá»‹t bÃ² vÃ  bÃ¡nh phá»Ÿ)
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 3,
    vitaminB12: 0.8, // tá»« thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 25, // mg
    selenium: 5.0, // Âµg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ vá»«a (300g)",
    notes: "Bao gá»“m bÃ¡nh phá»Ÿ, thá»‹t bÃ², nÆ°á»›c dÃ¹ng",
    diabetes: {
      glycemicIndex: 45,
      glycemicLoad: 10, // cho 1 tÃ´ vá»«a
      carbPerPortion: 22, // chá»‰ bÃ¡nh phá»Ÿ
    },
    gout: {
      purine: 160, // tá»« thá»‹t bÃ²
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
      { unit: 'to', weight: 300, description: '1 tÃ´ vá»«a' },
      { unit: 'to', weight: 250, description: '1 tÃ´ nhá»' },
    ],
  },
  {
    id: "bun",
    code: "10003",
    name: "BÃºn",
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
    selenium: 3.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 pháº§n bÃºn)",
    diabetes: {
      glycemicIndex: 53,
      glycemicLoad: 13, // cho 1 tÃ´ bÃºn (~100g bÃºn)
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
      { unit: 'to', weight: 100, description: '1 tÃ´ bÃºn' },
    ],
  },

  // Meat
  {
    id: "thit-heo-nac",
    code: "20001",
    name: "Thá»‹t heo náº¡c",
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
    vitaminB3: 5.0, // Niacin - cao trong thá»‹t
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.5,
    vitaminB7: 5.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.7,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 75, // mg - cao trong thá»‹t
    selenium: 24.6, // Âµg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "100g (khoáº£ng 1 lÃ²ng bÃ n tay)",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a (100g)' },
    ],
  },
  {
    id: "thit-ga",
    code: "20002",
    name: "Thá»‹t gÃ ",
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
    vitaminB3: 7.7, // Niacin - ráº¥t cao trong thá»‹t gÃ 
    vitaminB5: 1.0, // Pantothenic acid
    vitaminB6: 0.5,
    vitaminB7: 4.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65, // mg
    selenium: 14.3, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "100g (khoáº£ng 1 lÃ²ng bÃ n tay)",
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
      saturatedFat: 1, // bá» da
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a (100g)' },
    ],
  },
  {
    id: "thit-bo",
    code: "20003",
    name: "Thá»‹t bÃ²",
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
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 9,
    vitaminB12: 2.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 82, // mg
    selenium: 14.2, // Âµg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "100g (khoáº£ng 1 lÃ²ng bÃ n tay)",
    notes: "Purine cao â€“ khÃ´ng khuyáº¿n nghá»‹ cho bá»‡nh gÃºt",
    gout: {
      purine: 135, // ~120-150 mg/100g - Purine cao â€“ khÃ´ng khuyáº¿n nghá»‹ cho bá»‡nh gÃºt
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a (100g)' },
    ],
  },
  {
    id: "gan-lon",
    name: "Gan lá»£n",
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
    vitaminB2: 2.1, // mg - ráº¥t cao trong gan
    vitaminB3: 12.0, // Niacin - ráº¥t cao trong gan
    vitaminB5: 5.0, // Pantothenic acid - ráº¥t cao trong gan
    vitaminB6: 0.7,
    vitaminB7: 30.0, // Biotin (Âµg) - ráº¥t cao trong gan
    folate: 200, // Âµg - ráº¥t cao trong gan
    vitaminB12: 20.0, // Âµg - ráº¥t cao trong gan
    vitaminD: 20, // IU
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 500, // mg - ráº¥t cao trong gan
    selenium: 40.0, // Âµg - cao trong gan
    copper: 0.5, // mg - cao trong gan
    manganese: 0.3, // mg
    iodine: 0, // Âµg
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
    notes: "Ná»™i táº¡ng cÃ³ purin vÃ  cholesterol ráº¥t cao - trÃ¡nh cho ngÆ°á»i gÃºt vÃ  tim máº¡ch",
  },

  // Seafood
  {
    id: "ca-loc",
    code: "11044",
    name: "CÃ¡ lÃ³c",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 2.0, // Âµg - cao trong cÃ¡
    vitaminD: 4.0, // IU - cÃ³ trong cÃ¡
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 36.5, // Âµg - ráº¥t cao trong cÃ¡
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "100g (1 miáº¿ng vá»«a)",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a (100g)' },
    ],
  },
  {
    id: "tom",
    code: "30002",
    name: "TÃ´m",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong háº£i sáº£n
    vitaminK: 0, // Phylloquinone
    choline: 70, // mg
    selenium: 38.0, // Âµg - ráº¥t cao trong háº£i sáº£n
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 35, // Âµg - cao trong háº£i sáº£n
    commonServing: "100g (khoáº£ng 8-10 con vá»«a)",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 10, description: '1 con tÃ´m vá»«a (10g)' },
    ],
  },

  // Vegetables
  {
    id: "rau-muong",
    code: "40001",
    name: "Rau muá»‘ng",
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
    folate: 57, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 bÃ³ nhá»)",
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
      { unit: 'bo', weight: 100, description: '1 bÃ³ nhá»' },
    ],
  },
  {
    id: "cai-xanh",
    code: "40002",
    name: "Cáº£i xanh",
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
    folate: 66, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
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
    code: "40003",
    name: "CÃ  chua",
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
    folate: 15, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.2, // Âµg
    copper: 0.06, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1-2 quáº£ vá»«a)",
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
      { unit: 'qua', weight: 100, description: '1-2 quáº£ vá»«a' },
    ],
  },
  {
    id: "khoai-tay",
    code: "40006",
    name: "Khoai tÃ¢y",
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
    vitaminB6: 0.3, // mg - cao trong khoai tÃ¢y
    vitaminB7: 0, // Biotin
    folate: 15, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 2.0, // Phylloquinone
    choline: 12.1, // mg
    selenium: 0.3, // Âµg
    copper: 0.11, // mg
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 cá»§ vá»«a)",
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
      potassium: 421, // Ráº¥t cao!
      phosphorus: 57,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    notes: "Kali ráº¥t cao - háº¡n cháº¿ cho ngÆ°á»i bá»‡nh tháº­n",
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "khoai-lang",
    code: "10007",
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
    folate: 11, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.8, // Phylloquinone
    choline: 12.2, // mg
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 cá»§ vá»«a)",
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
      { unit: 'cai', weight: 100, description: '1 cá»§ vá»«a' },
    ],
  },

  // Fruits
  {
    id: "chuoi",
    code: "50001",
    name: "Chuá»‘i",
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
    vitaminB6: 0.4, // mg - cao trong chuá»‘i
    vitaminB7: 0, // Biotin
    folate: 20, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 quáº£ vá»«a)",
    diabetes: {
      glycemicIndex: 51, // chÃ­n vá»«a
      glycemicLoad: 12,
      carbPerPortion: 23,
    },
    gout: {
      purine: 10,
      purineLevel: 'low',
    },
    kidney: {
      potassium: 358, // Ráº¥t cao!
      phosphorus: 22,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    notes: "Kali ráº¥t cao - háº¡n cháº¿ cho ngÆ°á»i bá»‡nh tháº­n",
    vietnameseUnits: [
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "cam",
    code: "50002",
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
    folate: 30, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // Âµg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 quáº£ vá»«a)",
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
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "tao",
    code: "50003",
    name: "TÃ¡o",
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
    folate: 3, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.2, // Phylloquinone
    choline: 3.4, // mg
    selenium: 0.0, // Âµg
    copper: 0.03, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 quáº£ vá»«a)",
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
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },

  // Legumes
  {
    id: "dau-phu",
    code: "60001",
    name: "Äáº­u phá»¥",
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
    folate: 15, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.4, // Phylloquinone
    choline: 35, // mg
    selenium: 8.9, // Âµg
    copper: 0.2, // mg
    manganese: 0.6, // mg - cao trong Ä‘áº­u
    iodine: 0, // Âµg
    commonServing: "100g (1 miáº¿ng vá»«a)",
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
    notes: "Äáº¡m thá»±c váº­t, tá»‘t cho tim máº¡ch vÃ  ngÆ°á»i gÃºt",
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a' },
    ],
  },
  {
    id: "dau-xanh",
    code: "60002",
    name: "Äáº­u xanh",
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
    vitaminB5: 1.9, // Pantothenic acid - cao trong Ä‘áº­u
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 625, // Âµg - ráº¥t cao trong Ä‘áº­u
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 9.0, // Phylloquinone
    choline: 97.9, // mg - ráº¥t cao trong Ä‘áº­u
    selenium: 2.5, // Âµg
    copper: 0.9, // mg - cao trong Ä‘áº­u
    manganese: 1.0, // mg - cao trong Ä‘áº­u
    iodine: 0, // Âµg
    commonServing: "100g (náº¥u chÃ­n)",
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
      potassium: 400, // Ráº¥t cao!
      phosphorus: 400, // Ráº¥t cao!
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.3,
    },
    notes: "Kali vÃ  phá»‘t pho ráº¥t cao - háº¡n cháº¿ cho ngÆ°á»i bá»‡nh tháº­n",
  },

  // Condiments
  {
    id: "nuoc-mam",
    code: "70001",
    name: "NÆ°á»›c máº¯m",
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
    folate: 0, // Âµg
    vitaminB12: 0.1, // Âµg - tá»« cÃ¡
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0, // Âµg
    copper: 0, // mg
    manganese: 0, // mg
    iodine: 0, // Âµg
    commonServing: "1 muá»—ng canh (15ml)",
    notes: "Ráº¥t nhiá»u natri - dÃ¹ng Ã­t cho ngÆ°á»i tÄƒng huyáº¿t Ã¡p",
    kidney: {
      potassium: 50,
      phosphorus: 10,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0,
    },
    vietnameseUnits: [
      { unit: 'thia-canh', weight: 15, description: '1 muá»—ng canh (15ml)' },
      { unit: 'thia-ca-phe', weight: 5, description: '1 muá»—ng cÃ  phÃª (5ml)' },
    ],
  },
  // ========================================================================
  // Bá»• sung thÃªm rau lÃ¡ & trÃ¡i cÃ¢y (pháº§n 36â€“37: 186â€“200)
  // ========================================================================
  {
    id: "rau-den-veg16",
    name: "Rau dá»n",
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
    folate: 85, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - ráº¥t cao trong rau dá»n
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dá»n
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Ráº¥t giÃ u kali; CKD cáº§n háº¡n cháº¿.",
    kidney: { potassium: 611, phosphorus: 43 },
  },
  {
    id: "rau-day",
    code: "11039",
    name: "Rau Ä‘ay",
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
    folate: 140, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 380, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Nhiá»u cháº¥t nháº§y, tá»‘t tiÃªu hÃ³a.",
    kidney: { potassium: 510, phosphorus: 55 },
  },
  {
    id: "tan-o",
    name: "Rau táº§n Ã´",
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
    folate: 105, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 250, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Rau láº©u phá»• biáº¿n.",
  },
  {
    id: "hanh-la",
    code: "40049",
    name: "HÃ nh lÃ¡",
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
    folate: 64, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 207, // Phylloquinone - cao trong hÃ nh lÃ¡
    choline: 5.7, // mg
    selenium: 0.5, // Âµg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "DÃ¹ng gia vá»‹",
    notes: "Ä‚n lÆ°á»£ng nhá».",
    kidney: { potassium: 276, phosphorus: 37 },
  },
  {
    id: "hung-que",
    code: "40051",
    name: "HÃºng quáº¿",
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
    folate: 68, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 415, // Phylloquinone - ráº¥t cao trong hÃºng quáº¿
    choline: 11.4, // mg
    selenium: 0.3, // Âµg
    copper: 0.4, // mg - cao trong hÃºng quáº¿
    manganese: 1.1, // mg - cao trong hÃºng quáº¿
    iodine: 0, // Âµg
    commonServing: "Ä‚n kÃ¨m",
    notes: "Rau gia vá»‹, giÃ u vi cháº¥t.",
    kidney: { potassium: 295, phosphorus: 56 },
  },
  {
    id: "ca-tim",
    code: "11054",
    name: "CÃ  tÃ­m",
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
    folate: 22, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 3.5, // Phylloquinone
    choline: 6.9, // mg
    selenium: 0.3, // Âµg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ nhá» (~100g)",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 229, phosphorus: 24 },
  },
  {
    id: "dau-bap",
    code: "40009",
    name: "Äáº­u báº¯p",
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
    folate: 60, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 31.3, // Phylloquinone
    choline: 12.3, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong Ä‘áº­u báº¯p
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Cháº¥t nháº§y tá»‘t tiÃªu hÃ³a.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 2, carbPerPortion: 7 },
    kidney: { potassium: 299, phosphorus: 61 },
  },
  {
    id: "kho-qua",
    code: "11004",
    name: "Khá»• qua",
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
    folate: 72, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.8, // Phylloquinone
    choline: 12.8, // mg
    selenium: 0.2, // Âµg
    copper: 0.03, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Hay dÃ¹ng cho ÄTÄ.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 296, phosphorus: 31 },
  },
  {
    id: "muop-huong",
    name: "MÆ°á»›p hÆ°Æ¡ng",
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
    folate: 25, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.3, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.2, // Âµg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 khÃºc (~100g)",
    notes: "Thanh mÃ¡t.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 150, phosphorus: 30 },
  },
  {
    id: "chuoi-tieu",
    code: "50017",
    name: "Chuá»‘i tiÃªu",
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
    vitaminB6: 0.40, // mg - cao trong chuá»‘i
    vitaminB7: 0, // Biotin
    folate: 20, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Kali cao; CKD lÆ°u Ã½.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 13, carbPerPortion: 26 },
    kidney: { potassium: 358, phosphorus: 22 },
  },
  {
    id: "cam-sanh",
    code: "50018",
    name: "Cam sÃ nh",
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
    folate: 30, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // Âµg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~130g)",
    notes: "Vitamin C cao.",
    diabetes: { glycemicIndex: 43, glycemicLoad: 5, carbPerPortion: 15 },
    kidney: { potassium: 181, phosphorus: 14 },
  },
  {
    id: "quyt",
    code: "50019",
    name: "QuÃ½t",
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
    folate: 16, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.1, // Âµg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Ngá»t vá»«a.",
    diabetes: { glycemicIndex: 42, glycemicLoad: 6, carbPerPortion: 13 },
    kidney: { potassium: 166, phosphorus: 20 },
  },
  {
    id: "vu-sua",
    code: "50026",
    name: "VÃº sá»¯a",
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
    folate: 12, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1/2 quáº£ (~100g)",
    notes: "Nhiá»u xÆ¡ hÃ²a tan.",
    diabetes: { glycemicIndex: 48, glycemicLoad: 8, carbPerPortion: 16 },
    kidney: { potassium: 212, phosphorus: 26 },
  },
  {
    id: "chom-chom",
    code: "50014",
    name: "ChÃ´m chÃ´m",
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
    folate: 8, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.4, // mg
    selenium: 0.3, // Âµg
    copper: 0.07, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "5â€“6 quáº£ (~100g)",
    notes: "Ngá»t; ÄTÄ Äƒn vá»«a.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 9, carbPerPortion: 17 },
    kidney: { potassium: 42, phosphorus: 16 },
  },
  {
    id: "nhan",
    code: "50029",
    name: "NhÃ£n",
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
    commonServing: "10â€“12 quáº£ (~100g)",
    notes: "ÄÆ°á»ng cao.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 9, carbPerPortion: 15 },
    kidney: { potassium: 266, phosphorus: 21 },
  },
  // ========================================================================
  // Bá»• sung nhÃ³m rau lÃ¡, cá»§, trÃ¡i cÃ¢y phá»• biáº¿n (pháº§n 38â€“40)
  // ========================================================================
  {
    id: "cai-thia-veg25",
    name: "Rau cáº£i thÃ¬a",
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
    folate: 66, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Ãt kcal; giÃ u canxi.",
    kidney: { potassium: 252, phosphorus: 37 },
  },
  {
    id: "cai-be-xanh",
    name: "Rau cáº£i báº¹ xanh",
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
    folate: 75, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 257, // Phylloquinone - ráº¥t cao trong rau cáº£i
    choline: 19.5, // mg
    selenium: 0.8, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "GiÃ u kali; CKD chÃº Ã½.",
    kidney: { potassium: 384, phosphorus: 58 },
  },
  {
    id: "xa-lach",
    code: "40041",
    name: "Rau xÃ  lÃ¡ch",
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
    folate: 38, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 126.3, // Phylloquinone - ráº¥t cao trong xÃ  lÃ¡ch
    choline: 9.9, // mg
    selenium: 0.2, // Âµg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 194, phosphorus: 29 },
  },
  {
    id: "tia-to",
    code: "40053",
    name: "TÃ­a tÃ´",
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
    folate: 100, // Âµg - cao trong tÃ­a tÃ´
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 690, // Phylloquinone - ráº¥t cao trong tÃ­a tÃ´
    choline: 35.3, // mg - cao trong tÃ­a tÃ´
    selenium: 0.3, // Âµg
    copper: 0.3, // mg - cao trong tÃ­a tÃ´
    manganese: 1.2, // mg - cao trong tÃ­a tÃ´
    iodine: 0, // Âµg
    commonServing: "Ä‚n kÃ¨m",
    notes: "Rau gia vá»‹, giÃ u vi cháº¥t.",
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
    folate: 11, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.8, // Phylloquinone
    choline: 12.2, // mg
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ (~100g)",
    notes: "Tinh bá»™t; GI trung bÃ¬nh.",
    diabetes: { glycemicIndex: 44, glycemicLoad: 9, carbPerPortion: 20 },
    kidney: { potassium: 337, phosphorus: 47 },
  },
  {
    id: "khoai-mon",
    code: "40019",
    name: "Khoai mÃ´n",
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
    folate: 22, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.0, // Phylloquinone
    choline: 9.2, // mg
    selenium: 0.7, // Âµg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Kali cao; CKD háº¡n cháº¿.",
    diabetes: { glycemicIndex: 54, glycemicLoad: 14, carbPerPortion: 27 },
    kidney: { potassium: 591, phosphorus: 84 },
  },
  {
    id: "bap-ngo",
    name: "Báº¯p (ngÃ´)",
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
    vitaminB3: 1.7, // Niacin - cao trong báº¯p ngÃ´
    vitaminB5: 0.7, // Pantothenic acid - cao trong báº¯p ngÃ´
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 42, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 23.0, // mg - cao trong báº¯p ngÃ´
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 trÃ¡i nhá» (~100g)",
    notes: "Tinh bá»™t; ÄTÄ Äƒn vá»«a.",
    diabetes: { glycemicIndex: 52, glycemicLoad: 11, carbPerPortion: 21 },
    kidney: { potassium: 270, phosphorus: 89 },
  },
  {
    id: "xoai-chin-fr18",
    name: "XoÃ i chÃ­n",
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
    folate: 43, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Ngá»t; ÄTÄ Äƒn vá»«a.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 168, phosphorus: 14 },
  },
  {
    id: "xoai-xanh",
    name: "XoÃ i xanh",
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
    folate: 38, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Chua; GI tháº¥p.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 3, carbPerPortion: 9 },
    kidney: { potassium: 156, phosphorus: 16 },
  },
  {
    id: "dua-hau-fr20",
    name: "DÆ°a háº¥u",
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
    folate: 3, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.1, // mg
    selenium: 0.4, // Âµg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Nhiá»u nÆ°á»›c; GI cao.",
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
    folate: 7, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.1, // mg
    selenium: 0.0, // Âµg
    copper: 0.0, // mg
    manganese: 0.0, // mg
    iodine: 0, // Âµg
    commonServing: "1/2 quáº£ (~100g)",
    notes: "Nhiá»u xÆ¡; tá»‘t tiÃªu hÃ³a.",
    diabetes: { glycemicIndex: 48, glycemicLoad: 5, carbPerPortion: 11 },
    kidney: { potassium: 277, phosphorus: 36 },
  },
  {
    id: "bo",
    code: "20003",
    name: "BÆ¡",
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
    vitaminB5: 1.4, // Pantothenic acid - cao trong bÆ¡
    vitaminB6: 0.26,
    vitaminB7: 0, // Biotin
    folate: 81, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 2.1, // Tocopherol - cao trong bÆ¡
    vitaminK: 21.0, // Phylloquinone - cao trong bÆ¡
    choline: 14.2, // mg
    selenium: 0.4, // Âµg
    copper: 0.19, // mg
    manganese: 0.14, // mg
    iodine: 0, // Âµg
    commonServing: "1/2 quáº£ (~100g)",
    notes: "GiÃ u cháº¥t bÃ©o tá»‘t; kali cao.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 9 },
    kidney: { potassium: 485, phosphorus: 52 },
  },
  // ========================================================================
  // Bá»• sung thÃªm rau lÃ¡ & trÃ¡i cÃ¢y (pháº§n 42: 213â€“224)
  // ========================================================================
  {
    id: "cai-bo-xoi",
    name: "Cáº£i bÃ³ xÃ´i",
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
    folate: 194, // Âµg - ráº¥t cao trong cáº£i bÃ³ xÃ´i
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 2.0, // Tocopherol - cao trong cáº£i bÃ³ xÃ´i
    vitaminK: 482.9, // Phylloquinone - ráº¥t cao trong cáº£i bÃ³ xÃ´i
    choline: 19.3, // mg
    selenium: 1.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.9, // mg - cao trong cáº£i bÃ³ xÃ´i
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "GiÃ u sáº¯t & folate; CKD chÃº Ã½ kali.",
    kidney: { potassium: 558, phosphorus: 49 },
  },
  {
    id: "bap-cai-trang",
    name: "Báº¯p cáº£i tráº¯ng",
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
    folate: 43, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 76, // Phylloquinone - cao trong báº¯p cáº£i
    choline: 10.7, // mg
    selenium: 0.3, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Ãt kcal; dá»… Äƒn.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 170, phosphorus: 26 },
  },
  {
    id: "bap-cai-tim",
    code: "40033",
    name: "Báº¯p cáº£i tÃ­m",
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
    folate: 43, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 38.2, // Phylloquinone
    choline: 12.0, // mg
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Chá»‘ng oxy hÃ³a tá»‘t.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 243, phosphorus: 30 },
  },
  {
    id: "ca-chua-veg35",
    name: "CÃ  chua",
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
    folate: 15, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.0, // Âµg
    copper: 0.11, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ vá»«a (~100g)",
    notes: "GiÃ u lycopene.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 237, phosphorus: 24 },
  },
  {
    id: "dua-leo-veg36",
    name: "DÆ°a leo",
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
    folate: 7, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 16.4, // Phylloquinone
    choline: 6.0, // mg
    selenium: 0.3, // Âµg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Nhiá»u nÆ°á»›c; THA phÃ¹ há»£p.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 147, phosphorus: 24 },
  },
  {
    id: "hanh-tay",
    code: "40057",
    name: "HÃ nh tÃ¢y",
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
    folate: 19, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.5, // Âµg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ nhá» (~100g)",
    notes: "Gia vá»‹ quen thuá»™c.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 9 },
    kidney: { potassium: 146, phosphorus: 29 },
  },
  {
    id: "toi",
    code: "20096",
    name: "Tá»i",
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
    vitaminB5: 0.6, // Pantothenic acid - cao trong tá»i
    vitaminB6: 1.24, // mg - ráº¥t cao trong tá»i
    vitaminB7: 0, // Biotin
    folate: 3, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.7, // Phylloquinone
    choline: 23.2, // mg - cao trong tá»i
    selenium: 14.2, // Âµg - ráº¥t cao trong tá»i
    copper: 0.3, // mg - cao trong tá»i
    manganese: 1.7, // mg - ráº¥t cao trong tá»i
    iodine: 0, // Âµg
    commonServing: "Ä‚n lÆ°á»£ng nhá»",
    notes: "Gia vá»‹; nhiá»u vi cháº¥t.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 10, carbPerPortion: 33 },
    kidney: { potassium: 401, phosphorus: 153 },
  },
  {
    id: "tao-ta",
    code: "50020",
    name: "TÃ¡o ta",
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
    folate: 3, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 2.2, // Phylloquinone
    choline: 3.4, // mg
    selenium: 0.0, // Âµg
    copper: 0.03, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "GI tháº¥pâ€“trung bÃ¬nh.",
    diabetes: { glycemicIndex: 36, glycemicLoad: 5, carbPerPortion: 14 },
    kidney: { potassium: 107, phosphorus: 11 },
  },
  {
    id: "le-fr24",
    name: "LÃª",
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
    folate: 7, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.4, // Phylloquinone
    choline: 5.1, // mg
    selenium: 0.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.05, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Nhiá»u xÆ¡.",
    diabetes: { glycemicIndex: 38, glycemicLoad: 6, carbPerPortion: 15 },
    kidney: { potassium: 119, phosphorus: 12 },
  },
  {
    id: "du-du-chin-fr25",
    name: "Äu Ä‘á»§ chÃ­n",
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
    folate: 37, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Tá»‘t tiÃªu hÃ³a.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 7, carbPerPortion: 11 },
    kidney: { potassium: 182, phosphorus: 10 },
  },
  {
    id: "man-roi",
    name: "Máº­n (roi)",
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
    folate: 5, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 4.6, // mg
    selenium: 0.0, // Âµg
    copper: 0.02, // mg
    manganese: 0.0, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 quáº£ (~100g)",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 123, phosphorus: 15 },
  },
  {
    id: "me-chin",
    code: "50033",
    name: "Me chÃ­n",
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
    folate: 14, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 2.8, // Phylloquinone
    choline: 8.6, // mg
    selenium: 1.3, // Âµg
    copper: 0.9, // mg - cao trong me
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n lÆ°á»£ng nhá»",
    notes: "ÄÆ°á»ng ráº¥t cao.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 40, carbPerPortion: 63 },
    kidney: { potassium: 628, phosphorus: 113 },
  },
  // ========================================================================
  // Tinh bá»™t nguyÃªn cÃ¡m / GI tháº¥p + sá»¯a & dÆ°a muá»‘i + mÃ³n sÃ¡ng & Ä‘áº·c biá»‡t (225â€“240)
  // ========================================================================
  {
    id: "banh-mi-nguyen-cam",
    name: "BÃ¡nh mÃ¬ nguyÃªn cÃ¡m",
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
    vitaminB3: 4.0, // Niacin - cao trong bÃ¡nh mÃ¬ nguyÃªn cÃ¡m
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 0, // Biotin
    folate: 40, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 26.0, // mg
    selenium: 35.0, // Âµg - cao trong bÃ¡nh mÃ¬ nguyÃªn cÃ¡m
    copper: 0.4, // mg
    manganese: 2.0, // mg - cao trong bÃ¡nh mÃ¬ nguyÃªn cÃ¡m
    iodine: 0, // Âµg
    commonServing: "2 lÃ¡t (~60g)",
    notes: "Carb phá»©c; GI tháº¥p hÆ¡n bÃ¡nh mÃ¬ tráº¯ng.",
    diabetes: { glycemicIndex: 50, glycemicLoad: 12, carbPerPortion: 25 },
    kidney: { potassium: 250, phosphorus: 210 },
  },
  {
    id: "banh-mi-den",
    name: "BÃ¡nh mÃ¬ Ä‘en (rye)",
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
    vitaminB3: 3.0, // Niacin - cao trong bÃ¡nh mÃ¬ Ä‘en
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.22,
    vitaminB7: 0, // Biotin
    folate: 35, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 24.0, // mg
    selenium: 30.0, // Âµg - cao trong bÃ¡nh mÃ¬ Ä‘en
    copper: 0.3, // mg
    manganese: 1.5, // mg - cao trong bÃ¡nh mÃ¬ Ä‘en
    iodine: 0, // Âµg
    commonServing: "2 lÃ¡t (~60g)",
    notes: "GI tháº¥p; tá»‘t cho ÄTÄ.",
    diabetes: { glycemicIndex: 45, glycemicLoad: 11, carbPerPortion: 24 },
    kidney: { potassium: 240, phosphorus: 190 },
  },
  {
    id: "yen-mach-chao",
    name: "Yáº¿n máº¡ch (chÃ¡o)",
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
    folate: 6, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.6, // mg - cao trong yáº¿n máº¡ch
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~200g)",
    notes: "GI tháº¥p; tá»‘t tim máº¡ch.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 11, carbPerPortion: 24 },
    kidney: { potassium: 70, phosphorus: 77 },
  },
  {
    id: "bun-gao-lut",
    name: "BÃºn gáº¡o lá»©t",
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
    folate: 12, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 9.0, // mg
    selenium: 7.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong gáº¡o lá»©t
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~150g)",
    notes: "Carb tá»‘t hÆ¡n bÃºn tráº¯ng.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 14, carbPerPortion: 39 },
    kidney: { potassium: 110, phosphorus: 80 },
  },
  {
    id: "sua-tach-beo",
    name: "Sá»¯a tÃ¡ch bÃ©o",
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
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 1.3,
    vitaminD: 40,
    vitaminE: 0.0, // Tocopherol (ráº¥t Ã­t trong sá»¯a tÃ¡ch bÃ©o)
    vitaminK: 0.1, // Phylloquinone
    choline: 18, // mg
    selenium: 3.3, // Âµg
    copper: 0.01, // mg
    manganese: 0.0, // mg
    iodine: 1.0, // Âµg
    commonServing: "1 ly (200ml)",
    notes: "Ãt bÃ©o; phÃ¹ há»£p tim máº¡ch.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 150, phosphorus: 95 },
  },
  {
    id: "sua-dau-nanh-it-duong",
    name: "Sá»¯a Ä‘áº­u nÃ nh Ã­t Ä‘Æ°á»ng",
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
    notes: "Äáº¡m thá»±c váº­t; CKD dÃ¹ng vá»«a.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 2, carbPerPortion: 5 },
    kidney: { potassium: 118, phosphorus: 52 },
  },
  {
    id: "sua-chua-khong-duong",
    name: "Sá»¯a chua khÃ´ng Ä‘Æ°á»ng",
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
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 7, // Âµg
    vitaminB12: 0.6,
    vitaminD: 40,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 15, // mg
    selenium: 3.3, // Âµg
    copper: 0.01, // mg
    manganese: 0.0, // mg
    iodine: 1.0, // Âµg
    commonServing: "1 hÅ© (~100g)",
    notes: "Tá»‘t tiÃªu hÃ³a; Ã­t áº£nh hÆ°á»Ÿng ÄTÄ.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 2, carbPerPortion: 5 },
    kidney: { potassium: 155, phosphorus: 95 },
  },
  {
    id: "pho-mai-it-beo",
    name: "PhÃ´ mai tÆ°Æ¡i Ã­t bÃ©o",
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
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 12, // Âµg
    vitaminB12: 0.5,
    vitaminD: 20,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18, // mg
    selenium: 9.0, // Âµg
    copper: 0.02, // mg
    manganese: 0.0, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n kÃ¨m (~50g)",
    notes: "Ãt bÃ©o hÆ¡n phÃ´ mai thÆ°á»ng.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 104, phosphorus: 159 },
  },
  {
    id: "dua-cai-muoi",
    name: "DÆ°a cáº£i muá»‘i",
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
    commonServing: "Ä‚n ~50g",
    notes: "Natri ráº¥t cao; THA trÃ¡nh.",
    kidney: { potassium: 150, phosphorus: 40 },
  },
  {
    id: "ca-phao-muoi",
    name: "CÃ  phÃ¡o muá»‘i",
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
    folate: 18, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 6.5, // mg
    selenium: 0.2, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~30â€“50g",
    notes: "DÆ°a muá»‘i = muá»‘i.",
    kidney: { potassium: 180, phosphorus: 45 },
  },
  {
    id: "banh-bao",
    code: "10029",
    name: "BÃ¡nh bao nhÃ¢n thá»‹t",
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
    folate: 15, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 20.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 cÃ¡i (~120g)",
    notes: "Tinh bá»™t + má»¡.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 24, carbPerPortion: 40 },
    kidney: { potassium: 120, phosphorus: 110 },
  },
  {
    id: "banh-mi-kep",
    name: "BÃ¡nh mÃ¬ káº¹p thá»‹t",
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
    folate: 12, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 18.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 á»• (~150g)",
    notes: "Natri & má»¡ cao.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 26, carbPerPortion: 45 },
    kidney: { potassium: 150, phosphorus: 120 },
  },
  {
    id: "bun-rieu",
    code: "11003",
    name: "BÃºn riÃªu",
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
    folate: 10, // Âµg
    vitaminB12: 0.5, // Âµg - tá»« cua
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 15.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~400g)",
    notes: "NÆ°á»›c dÃ¹ng + máº¯m.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 36, carbPerPortion: 56 },
    kidney: { potassium: 120, phosphorus: 90 },
  },
  {
    id: "canh-chua",
    code: "11001",
    name: "Canh chua",
    nameEn: "Sour soup",
    category: "soups",
    servingSize: 100,
    servingUnit: "g",
    calories: 35,
    protein: 2.5,
    carbs: 4.0,
    fat: 0.8,
    fiber: 0.5,
    water: 92.0,
    sodium: 280,
    potassium: 120,
    calcium: 15,
    iron: 0.5,
    phosphorus: 25,
    magnesium: 12,
    zinc: 0.3,
    vitaminC: 8.0,
    vitaminB1: 0.05,
    vitaminB2: 0.03,
    vitaminB3: 0.5, // Niacin
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.08,
    vitaminB7: 0, // Biotin
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 5.0, // mg
    selenium: 2.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "100g (1 bÃ¡t nhá»)",
    notes: "Canh chua cÃ¡/ tÃ´m, nhiá»u rau cá»§, Ã­t calo.",
    diabetes: {
      glycemicIndex: 30,
      glycemicLoad: 1,
      carbPerPortion: 4,
    },
    kidney: {
      potassium: 120,
      phosphorus: 25,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.2,
    },
    vietnameseUnits: [
      { unit: 'bat', weight: 100, description: '1 bÃ¡t nhá»' },
    ],
  },
  {
    id: "chao-trang",
    code: "11056",
    name: "ChÃ¡o tráº¯ng",
    nameEn: "Plain rice porridge",
    category: "soups",
    servingSize: 100,
    servingUnit: "g",
    calories: 40,
    protein: 0.7,
    carbs: 8.7,
    fat: 0.2,
    fiber: 0.1,
    water: 90.0,
    sodium: 50,
    potassium: 13,
    calcium: 3,
    iron: 0.1,
    phosphorus: 12,
    magnesium: 3,
    zinc: 0.1,
    vitaminB1: 0.01,
    vitaminB2: 0.01,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.02,
    vitaminB7: 0, // Biotin
    folate: 1,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0.7, // mg
    selenium: 2.5, // Âµg
    copper: 0.02, // mg
    manganese: 0.16, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~300g)",
    notes: "Æ¯á»›c tÃ­nh; náº¿u Äƒn kÃ¨m dÆ°a muá»‘i/chÃ  bÃ´ng sáº½ tÄƒng natri Ä‘Ã¡ng ká»ƒ.",
    diabetes: {
      glycemicIndex: 70,
      glycemicLoad: 18,
      carbPerPortion: 26,
    },
    kidney: {
      potassium: 13,
      phosphorus: 12,
    },
    cardiovascular: {
      cholesterol: 0,
      saturatedFat: 0.1,
    },
    vietnameseUnits: [
      { unit: 'to', weight: 300, description: '1 tÃ´ chÃ¡o tráº¯ng' },
    ],
  },
  {
    id: "chao-ga",
    code: "11057",
    name: "ChÃ¡o gÃ ",
    nameEn: "Chicken porridge",
    category: "soups",
    servingSize: 100,
    servingUnit: "g",
    calories: 71,
    protein: 4.0,
    carbs: 8.6,
    fat: 2.3,
    fiber: 0.2,
    water: 85.0,
    sodium: 129,
    potassium: 63,
    calcium: 5,
    iron: 0.5,
    phosphorus: 51,
    magnesium: 6,
    zinc: 0.5,
    cholesterol: 24,
    vitaminB1: 0.05,
    vitaminB2: 0.04,
    vitaminB3: 1.2, // Niacin - tá»« thá»‹t gÃ 
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 3,
    vitaminB12: 0.1, // Âµg - tá»« thá»‹t gÃ 
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.0, // mg
    selenium: 3.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~350g)",
    notes: "Æ¯á»›c tÃ­nh theo kháº©u pháº§n phá»• biáº¿n; natri phá»¥ thuá»™c nÆ°á»›c dÃ¹ng/nÃªm.",
    diabetes: {
      glycemicIndex: 65,
      glycemicLoad: 22,
      carbPerPortion: 30,
    },
    kidney: {
      potassium: 63,
      phosphorus: 51,
    },
    cardiovascular: {
      cholesterol: 24,
      saturatedFat: 0.7,
    },
    gout: {
      purine: 140,
      purineLevel: "high",
    },
    vietnameseUnits: [
      { unit: 'to', weight: 350, description: '1 tÃ´ chÃ¡o gÃ ' },
    ],
  },
  {
    id: "pho-ga",
    code: "11015",
    name: "Phá»Ÿ gÃ ",
    nameEn: "Chicken pho",
    category: "soups",
    servingSize: 100,
    servingUnit: "g",
    calories: 93,
    protein: 6.2,
    carbs: 12.2,
    fat: 2.2,
    fiber: 0.4,
    water: 79.0,
    sodium: 156,
    potassium: 67,
    calcium: 9,
    iron: 0.6,
    phosphorus: 58,
    magnesium: 7,
    zinc: 0.5,
    cholesterol: 16,
    vitaminB1: 0.08,
    vitaminB2: 0.06,
    vitaminB3: 1.5, // Niacin - tá»« thá»‹t gÃ 
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 5,
    vitaminB12: 0.2, // Âµg - tá»« thá»‹t gÃ 
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 15.0, // mg
    selenium: 4.0, // Âµg
    copper: 0.06, // mg
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´",
    notes: "Æ¯á»›c tÃ­nh cho 1 tÃ´ phá»Ÿ gÃ  Ä‘áº§y Ä‘á»§; nÆ°á»›c dÃ¹ng máº·n.",
    diabetes: {
      glycemicIndex: 60,
      glycemicLoad: 22,
      carbPerPortion: 55,
    },
    kidney: {
      potassium: 67,
      phosphorus: 58,
    },
    cardiovascular: {
      cholesterol: 16,
      saturatedFat: 0.6,
    },
    gout: {
      purine: 140,
      purineLevel: "high",
    },
    vietnameseUnits: [
      { unit: 'to', weight: 450, description: '1 tÃ´ phá»Ÿ gÃ ' },
    ],
  },
  {
    id: "ca-com-kho",
    name: "CÃ¡ cÆ¡m khÃ´",
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
    vitaminB3: 3.0, // Niacin - cao trong cÃ¡ khÃ´
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 18, // Âµg
    vitaminB12: 5.0, // Âµg - ráº¥t cao trong cÃ¡ khÃ´
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 50.0, // mg - cao trong cÃ¡ khÃ´
    selenium: 50.0, // Âµg - ráº¥t cao trong cÃ¡ khÃ´
    copper: 0.5, // mg - cao trong cÃ¡ khÃ´
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~20g",
    notes: "Purine & natri ráº¥t cao.",
    gout: { purine: 350, purineLevel: "very-high" },
    kidney: { potassium: 850, phosphorus: 600 },
  },
  {
    id: "ruoc-thit",
    name: "Ruá»‘c thá»‹t",
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
    folate: 10, // Âµg
    vitaminB12: 0.5, // Âµg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 30.0, // mg
    selenium: 25.0, // Âµg - cao trong cÃ¡ khÃ´
    copper: 0.3, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ráº¯c ~20g",
    notes: "Máº·n + purine.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 300, phosphorus: 220 },
  },
  {
    id: "nuoc-dua",
    code: "90001",
    name: "NÆ°á»›c dá»«a tÆ°Æ¡i",
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
    folate: 5, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 1.1, // mg
    selenium: 1.0, // Âµg
    copper: 0.0, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 trÃ¡i (~300ml)",
    notes: "Kali cao; CKD lÆ°u Ã½.",
    diabetes: { glycemicIndex: 35, glycemicLoad: 4, carbPerPortion: 11 },
    kidney: { potassium: 250, phosphorus: 20 },
  },
  // ========================================================================
  // Thá»‹t cháº¿ biáº¿n & quay/nÆ°á»›ng (241â€“251)
  // ========================================================================
  {
    id: "gio-lua",
    name: "GiÃ² lá»¥a",
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
    folate: 10, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 lÃ¡t (~50g)",
    notes: "Thá»‹t cháº¿ biáº¿n; natri cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 260, phosphorus: 210 },
  },
  {
    id: "cha-lua-chien",
    name: "Cháº£ lá»¥a chiÃªn",
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
    folate: 9, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~50g",
    notes: "Má»¡ + natri cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 240, phosphorus: 200 },
  },
  {
    // dÃ¹ng id khÃ¡c Ä‘á»ƒ trÃ¡nh trÃ¹ng vá»›i báº£n nem-chua cÅ©
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
    folate: 12, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 30.0, // mg
    selenium: 22.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1â€“2 cÃ¢y (~50g)",
    notes: "Ráº¥t máº·n; lÃªn men.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 210, phosphorus: 220 },
  },
  {
    id: "heo-quay",
    name: "Thá»‹t heo quay",
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
    folate: 6, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 20.0, // mg
    selenium: 18.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Má»¡ bÃ£o hÃ²a ráº¥t cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 180, phosphorus: 160 },
  },
  {
    id: "thit-kho-tau",
    code: "11027",
    name: "Thá»‹t kho tÃ u",
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
    folate: 8, // Âµg
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t vÃ  trá»©ng
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg - tá»« thá»‹t vÃ  trá»©ng
    selenium: 18.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 chÃ©n (~150g)",
    notes: "Máº·n + má»¡.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 210, phosphorus: 170 },
  },
  {
    id: "bo-vien",
    code: "20120",
    name: "BÃ² viÃªn",
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
    folate: 10, // Âµg
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 28.0, // mg
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "5â€“6 viÃªn (~100g)",
    notes: "Thá»‹t xay + phá»¥ gia.",
    gout: {
      purine: 135,
      purineLevel: 'high',
    },
    kidney: { potassium: 190, phosphorus: 200 },
  },
  {
    id: "xuc-xich-heo",
    code: "20035",
    name: "XÃºc xÃ­ch heo",
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
    folate: 8, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 22.0, // mg
    selenium: 18.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 cÃ¢y (~60g)",
    notes: "Thá»‹t cháº¿ biáº¿n; THA trÃ¡nh.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 220, phosphorus: 180 },
  },
  {
    // báº£n jambon má»›i, trÃ¡nh trÃ¹ng id cÅ©
    id: "jambon-meat32",
    name: "Jambon (giÄƒm bÃ´ng)",
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
    folate: 7, // Âµg
    vitaminB12: 0.5, // Âµg
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 25.0, // mg
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 lÃ¡t (~50g)",
    notes: "Natri ráº¥t cao.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 240, phosphorus: 190 },
  },
  {
    id: "ga-nuong",
    code: "20008",
    name: "Thá»‹t gÃ  nÆ°á»›ng",
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
    vitaminB3: 8.0, // Niacin - ráº¥t cao trong thá»‹t gÃ 
    vitaminB5: 1.0, // Pantothenic acid - cao trong thá»‹t gÃ 
    vitaminB6: 0.18,
    vitaminB7: 0, // Biotin
    folate: 9, // Âµg
    vitaminB12: 0.3, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 65.0, // mg - cao trong thá»‹t gÃ 
    selenium: 18.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Æ¯á»›p máº·n; chÃº Ã½ natri.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    kidney: { potassium: 230, phosphorus: 200 },
  },
  {
    id: "vit-quay",
    name: "Vá»‹t quay",
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
    vitaminB3: 5.0, // Niacin - cao trong thá»‹t vá»‹t
    vitaminB5: 1.0, // Pantothenic acid - cao trong thá»‹t vá»‹t
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 8, // Âµg
    vitaminB12: 0.4, // Âµg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 65.0, // mg - cao trong thá»‹t vá»‹t
    selenium: 20.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (~100g)",
    notes: "Má»¡ cao; tim máº¡ch háº¡n cháº¿.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    kidney: { potassium: 200, phosphorus: 160 },
  },
  {
    id: "be-thui",
    name: "BÃª thui",
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
    vitaminB3: 5.0, // Niacin - cao trong thá»‹t bÃª
    vitaminB5: 0.8, // Pantothenic acid - cao trong thá»‹t bÃª
    vitaminB6: 0.20,
    vitaminB7: 0, // Biotin
    folate: 10, // Âµg
    vitaminB12: 1.5, // Âµg - cao trong thá»‹t bÃª
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 85.0, // mg - cao trong thá»‹t bÃª
    selenium: 15.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 Ä‘Ä©a (~100g)",
    notes: "Äáº¡m cao; purine trung bÃ¬nh.",
    gout: {
      purine: 120,
      purineLevel: 'medium',
    },
    kidney: { potassium: 240, phosphorus: 210 },
  },
  // ========================================================================
  // CÃ¡ nÆ°á»›c ngá»t & cÃ¡ biá»ƒn bá»• sung (252â€“263)
  // ========================================================================
  {
    id: "ca-basa",
    code: "30001",
    name: "CÃ¡ basa",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7, // Âµg
    vitaminB12: 1.0, // Âµg - cao trong cÃ¡
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // Âµg - cao trong cÃ¡
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 khÃºc (~100g)",
    notes: "CÃ¡ bÃ©o vá»«a; phá»• biáº¿n.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 278, phosphorus: 190 },
  },
  {
    id: "ca-tra",
    code: "30014",
    name: "CÃ¡ tra",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7, // Âµg
    vitaminB12: 1.2, // Âµg - cao trong cÃ¡
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // Âµg - cao trong cÃ¡
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 khÃºc (~100g)",
    notes: "Ãt xÆ°Æ¡ng; dá»… Äƒn.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 200 },
  },
  {
    id: "ca-linh",
    name: "CÃ¡ linh",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 8, // Âµg
    vitaminB12: 1.5, // Âµg - cao trong cÃ¡
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 25.0, // Âµg - cao trong cÃ¡
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 bÃ¡t (~100g)",
    notes: "CÃ¡ nhá»; purine trung bÃ¬nh.",
    gout: { purine: 150, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 210 },
  },
  {
    id: "ca-sac",
    name: "CÃ¡ sáº·c",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 22.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 con (~100g)",
    notes: "CÃ¡ nÆ°á»›c ngá»t phá»• biáº¿n miá»n TÃ¢y.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 310, phosphorus: 195 },
  },
  {
    id: "ca-that-lat",
    name: "CÃ¡ thÃ¡t lÃ¡t",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.2,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 58, // mg
    selenium: 20.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 khÃºc (~100g)",
    notes: "Hay lÃ m cháº£ cÃ¡.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 295, phosphorus: 190 },
  },
  {
    id: "ca-dua",
    name: "CÃ¡ dá»©a",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 62, // mg
    selenium: 23.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg (cÃ¡ nÆ°á»›c ngá»t)
    commonServing: "1 khÃºc (~100g)",
    notes: "BÃ©o hÆ¡n cÃ¡ tra.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 285, phosphorus: 200 },
  },
  {
    id: "ca-ngu-hop-nuoc",
    name: "CÃ¡ ngá»« há»™p (nÆ°á»›c)",
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
    vitaminB3: 8.0, // Niacin - cao trong cÃ¡ ngá»«
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 12,
    vitaminB12: 3.0,
    vitaminD: 350,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 38.0, // Âµg - cao trong cÃ¡ ngá»«
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1/2 há»™p (~80g)",
    notes: "Ãt má»¡; natri tÃ¹y loáº¡i.",
    gout: { purine: 160, purineLevel: "medium" },
    kidney: { potassium: 250, phosphorus: 230 },
  },
  {
    id: "ca-moi-hop-fish32",
    name: "CÃ¡ mÃ²i há»™p",
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
    vitaminB3: 5.2, // Niacin - cao trong cÃ¡ mÃ²i
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.45,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 4.0,
    vitaminD: 400,
    vitaminE: 1.3, // Tocopherol - cao trong cÃ¡ mÃ²i
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg
    selenium: 50.0, // Âµg - ráº¥t cao trong cÃ¡ mÃ²i
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 48, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1/2 há»™p (~90g)",
    notes: "GiÃ u Ca; purine trung bÃ¬nh.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 397, phosphorus: 490 },
  },
  {
    id: "ca-com-tuoi",
    code: "30026",
    name: "CÃ¡ cÆ¡m tÆ°Æ¡i",
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
    vitaminB3: 3.0, // Niacin - cao trong cÃ¡ cÆ¡m
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 9,
    vitaminB12: 3.5,
    vitaminD: 350,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 45.0, // Âµg - ráº¥t cao trong cÃ¡ cÆ¡m
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Purine trung bÃ¬nhâ€“cao.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 450, phosphorus: 300 },
  },
  {
    id: "ca-thu-tuoi",
    name: "CÃ¡ thu tÆ°Æ¡i",
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
    vitaminB3: 6.2, // Niacin - cao trong cÃ¡ thu
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 13,
    vitaminB12: 6.0,
    vitaminD: 380,
    vitaminE: 1.1, // Tocopherol - cao trong cÃ¡ bÃ©o
    vitaminK: 0.1, // Phylloquinone
    choline: 72, // mg
    selenium: 34.0, // Âµg - ráº¥t cao trong cÃ¡ thu
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 44, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 lÃ¡t (~100g)",
    notes: "BÃ©o; omega-3 cao.",
    gout: { purine: 160, purineLevel: "medium" },
    kidney: { potassium: 314, phosphorus: 280 },
  },
  {
    id: "ca-bop",
    name: "CÃ¡ bá»›p",
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
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 2.0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 30.0, // Âµg - cao trong cÃ¡ bá»›p
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 42, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 khÃºc (~100g)",
    notes: "Äáº¡m cao; bÃ©o tháº¥p; purine trung bÃ¬nh.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 340, phosphorus: 200 },
  },
  {
    id: "ca-nau",
    name: "CÃ¡ nÃ¢u",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.2,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 61, // mg
    selenium: 24.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 5, // Âµg (cÃ¡ nÆ°á»›c lá»£ - tháº¥p)
    commonServing: "1 con (~100g)",
    notes: "CÃ¡ vÃ¹ng nÆ°á»›c lá»£.",
    gout: { purine: 140, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 210 },
  },
  // ========================================================================
  // CÃ¡ nÆ°á»›ng & cÃ¡ Ã¡p cháº£o (MEAL47-MEAL54)
  // ========================================================================
  {
    id: "ca-thu-nuong",
    name: "CÃ¡ thu nÆ°á»›ng",
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
    vitaminB3: 6.5, // Niacin - cao trong cÃ¡ biá»ƒn
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.40,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 9,
    vitaminB12: 8.7,
    vitaminD: 360,
    vitaminE: 1.2, // Tocopherol - cao trong cÃ¡ bÃ©o
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // Âµg - ráº¥t cao trong cÃ¡ biá»ƒn
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 khÃºc vá»«a",
    notes: "CÃ¡ biá»ƒn bÃ©o; giÃ u omega-3; purine trung bÃ¬nh.",
    gout: { purine: 150, purineLevel: "high" },
    kidney: { potassium: 314, phosphorus: 210 },
  },
  {
    id: "ca-ngu-ap-chao",
    name: "CÃ¡ ngá»« Ã¡p cháº£o",
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
    vitaminB3: 8.5, // Niacin - ráº¥t cao trong cÃ¡ ngá»«
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.60,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 2.9,
    vitaminD: 200,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg
    selenium: 40.0, // Âµg - ráº¥t cao trong cÃ¡ ngá»«
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 miáº¿ng",
    notes: "Äáº¡m cao; bÃ©o tháº¥p; purine trung bÃ¬nh.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 252, phosphorus: 220 },
  },
  {
    id: "ca-hoi-nuong",
    name: "CÃ¡ há»“i nÆ°á»›ng",
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
    vitaminB3: 7.5, // Niacin - ráº¥t cao trong cÃ¡ há»“i
    vitaminB5: 1.6, // Pantothenic acid - cao
    vitaminB6: 0.75,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 25,
    vitaminB12: 10.0,
    vitaminD: 450,
    vitaminE: 1.1, // Tocopherol - cao trong cÃ¡ há»“i
    vitaminK: 0.1, // Phylloquinone
    choline: 90, // mg - ráº¥t cao
    selenium: 36.5, // Âµg - ráº¥t cao
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 miáº¿ng",
    notes: "GiÃ u omega-3, vitamin D; purine trung bÃ¬nh.",
    gout: { purine: 75, purineLevel: "medium" },
    kidney: { potassium: 312, phosphorus: 250 },
  },
  {
    id: "ca-trich-nuong",
    name: "CÃ¡ trÃ­ch nÆ°á»›ng",
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
    vitaminB3: 5.5, // Niacin - cao trong cÃ¡ trÃ­ch
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 2.5, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 13.7,
    vitaminD: 600,
    vitaminE: 1.3, // Tocopherol - cao trong cÃ¡ bÃ©o
    vitaminK: 0.1, // Phylloquinone
    choline: 85, // mg - cao
    selenium: 38.0, // Âµg - ráº¥t cao
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 55, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "2 con nhá»",
    notes: "CÃ¡ biá»ƒn bÃ©o; purine trung bÃ¬nh.",
    gout: { purine: 99, purineLevel: "medium" },
    kidney: { potassium: 327, phosphorus: 280 },
  },
  {
    id: "ca-moi-nuong",
    name: "CÃ¡ mÃ²i nÆ°á»›ng",
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
    vitaminB3: 5.0, // Niacin - cao trong cÃ¡ mÃ²i
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 8.9,
    vitaminD: 270,
    vitaminE: 1.2, // Tocopherol - cao trong cÃ¡ mÃ²i
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 52.0, // Âµg - ráº¥t cao trong cÃ¡ mÃ²i
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "3â€“4 con",
    notes: "Ráº¥t giÃ u canxi; purine cao.",
    gout: { purine: 145, purineLevel: "high" },
    kidney: { potassium: 397, phosphorus: 490 },
  },
  {
    id: "ca-nuc-nuong",
    name: "CÃ¡ ná»¥c nÆ°á»›ng",
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
    vitaminB3: 4.5, // Niacin - cao trong cÃ¡ ná»¥c
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.25,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 3.0,
    vitaminD: 300,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 32.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 45, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a",
    notes: "CÃ¡ biá»ƒn phá»• biáº¿n; purine trung bÃ¬nh.",
    gout: { purine: 100, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 230 },
  },
  {
    id: "ca-ho-nuong",
    name: "CÃ¡ há»‘ nÆ°á»›ng",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 6,
    vitaminB12: 1.8,
    vitaminD: 120,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 40, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 khÃºc",
    notes: "CÃ¡ náº¡c; purine tháº¥pâ€“trung bÃ¬nh.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 290, phosphorus: 210 },
  },
  // ========================================================================
  // Háº£i sáº£n tÆ°Æ¡i phá»• biáº¿n
  // ========================================================================
  {
    id: "cua-bien",
    code: "30012",
    name: "Cua biá»ƒn",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 20,
    vitaminB12: 9.8,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg - cao trong cua
    selenium: 37.0, // Âµg - ráº¥t cao trong cua
    copper: 0.6, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 50, // Âµg - cao trong háº£i sáº£n
    commonServing: "1 con vá»«a (~100g thá»‹t)",
    notes: "GiÃ u vitamin B12; purine trung bÃ¬nhâ€“cao.",
    gout: { purine: 130, purineLevel: "high" },
    kidney: { potassium: 329, phosphorus: 210 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "muc",
    code: "30007",
    name: "Má»±c",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 44.0, // Âµg - ráº¥t cao trong má»±c
    copper: 0.4, // mg - cao trong má»±c
    manganese: 0.1, // mg
    iodine: 40, // Âµg - cao trong háº£i sáº£n
    commonServing: "1 con vá»«a (~100g)",
    notes: "Cholesterol cao; purine trung bÃ¬nh.",
    gout: { purine: 110, purineLevel: "medium" },
    kidney: { potassium: 246, phosphorus: 198 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "bach-tuoc",
    code: "30035",
    name: "Báº¡ch tuá»™c",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 20.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 36.0, // Âµg - ráº¥t cao trong báº¡ch tuá»™c
    copper: 0.4, // mg - cao trong báº¡ch tuá»™c
    manganese: 0.1, // mg
    iodine: 45, // Âµg - cao trong háº£i sáº£n
    commonServing: "1 con nhá» (~100g)",
    notes: "GiÃ u sáº¯t, vitamin B12; natri cao; purine trung bÃ¬nh.",
    gout: { purine: 95, purineLevel: "medium" },
    kidney: { potassium: 350, phosphorus: 186 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con nhá»' },
    ],
  },
  {
    id: "ngheu-so",
    name: "NghÃªu (ngao)",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 20,
    vitaminB12: 98.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 64.0, // Âµg - ráº¥t cao trong nghÃªu
    copper: 0.6, // mg - cao trong nghÃªu
    manganese: 0.1, // mg
    iodine: 60, // Âµg - ráº¥t cao trong nghÃªu
    commonServing: "1 Ä‘Ä©a (~100g thá»‹t)",
    notes: "Ráº¥t giÃ u sáº¯t, vitamin B12, kali; purine tháº¥pâ€“trung bÃ¬nh.",
    gout: { purine: 55, purineLevel: "low" },
    kidney: { potassium: 628, phosphorus: 338 },
    vietnameseUnits: [
      { unit: 'dia', weight: 100, description: '1 Ä‘Ä©a vá»«a' },
    ],
  },
  {
    id: "ghe",
    code: "30032",
    name: "Gháº¹",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 8.5,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // Âµg - cao trong gháº¹
    copper: 0.5, // mg - cao trong gháº¹
    manganese: 0.1, // mg
    iodine: 48, // Âµg - cao trong háº£i sáº£n
    commonServing: "1 con vá»«a (~100g thá»‹t)",
    notes: "GiÃ u vitamin B12, káº½m; purine trung bÃ¬nh.",
    gout: { purine: 120, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 200 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "so-huyet",
    code: "30036",
    name: "SÃ² huyáº¿t",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 20.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 58.0, // Âµg - ráº¥t cao trong sÃ² huyáº¿t
    copper: 0.5, // mg - cao trong sÃ² huyáº¿t
    manganese: 0.1, // mg
    iodine: 55, // Âµg - ráº¥t cao trong sÃ² huyáº¿t
    commonServing: "1 Ä‘Ä©a (~100g thá»‹t)",
    notes: "GiÃ u sáº¯t, canxi, vitamin B12; purine trung bÃ¬nh.",
    gout: { purine: 90, purineLevel: "medium" },
    kidney: { potassium: 350, phosphorus: 250 },
    vietnameseUnits: [
      { unit: 'dia', weight: 100, description: '1 Ä‘Ä©a vá»«a' },
    ],
  },
  {
    id: "hau",
    code: "50004",
    name: "HÃ u",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 16.0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 78.0, // Âµg - ráº¥t cao trong hÃ u
    copper: 1.6, // mg - ráº¥t cao trong hÃ u
    manganese: 0.2, // mg
    iodine: 60, // Âµg - ráº¥t cao trong hÃ u
    commonServing: "5â€“6 con vá»«a (~100g thá»‹t)",
    notes: "Ráº¥t giÃ u káº½m, sáº¯t, vitamin B12; purine trung bÃ¬nh.",
    gout: { purine: 90, purineLevel: "medium" },
    kidney: { potassium: 156, phosphorus: 120 },
    vietnameseUnits: [
      { unit: 'cai', weight: 15, description: '1 con vá»«a' },
    ],
  },
  {
    id: "so-diep",
    code: "30039",
    name: "SÃ² Ä‘iá»‡p",
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
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 1.3,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 22.0, // Âµg - cao trong sÃ² Ä‘iá»‡p
    copper: 0.1, // mg
    manganese: 0.05, // mg
    iodine: 25, // Âµg - trung bÃ¬nh
    commonServing: "5â€“6 con vá»«a (~100g thá»‹t)",
    notes: "Natri ráº¥t cao; phá»‘t pho cao; purine trung bÃ¬nh.",
    gout: { purine: 110, purineLevel: "medium" },
    kidney: { potassium: 205, phosphorus: 338 },
    vietnameseUnits: [
      { unit: 'cai', weight: 15, description: '1 con vá»«a' },
    ],
  },
  // ========================================================================
  // CÃ¡ biá»ƒn phá»• biáº¿n bá»• sung
  // ========================================================================
  {
    id: "ca-chim-bien",
    name: "CÃ¡ chim biá»ƒn",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 2.5,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 40, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a (~100g)",
    notes: "CÃ¡ biá»ƒn náº¡c; purine trung bÃ¬nh.",
    gout: { purine: 65, purineLevel: "medium" },
    kidney: { potassium: 300, phosphorus: 210 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-bac-ma",
    code: "30023",
    name: "CÃ¡ báº¡c mÃ¡",
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
    vitaminB3: 5.5, // Niacin - cao trong cÃ¡ báº¡c mÃ¡
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.30,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 3.0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg
    selenium: 33.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 43, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a (~100g)",
    notes: "CÃ¡ biá»ƒn bÃ©o; purine trung bÃ¬nh.",
    gout: { purine: 100, purineLevel: "medium" },
    kidney: { potassium: 320, phosphorus: 230 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-chi-vang",
    name: "CÃ¡ chá»‰ vÃ ng",
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
    vitaminB3: 4.8, // Niacin - cao trong cÃ¡ chá»‰ vÃ ng
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 1.5, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 2.8,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 68, // mg
    selenium: 31.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 42, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a (~100g)",
    notes: "CÃ¡ biá»ƒn phá»• biáº¿n; purine trung bÃ¬nh.",
    gout: { purine: 95, purineLevel: "medium" },
    kidney: { potassium: 310, phosphorus: 220 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-mu",
    code: "30063",
    name: "CÃ¡ mÃº",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 2.4,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 66, // mg
    selenium: 29.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 41, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 khÃºc (~100g)",
    notes: "CÃ¡ biá»ƒn náº¡c; purine trung bÃ¬nh.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 325, phosphorus: 215 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 khÃºc vá»«a' },
    ],
  },
  {
    id: "ca-hong-bien",
    name: "CÃ¡ há»“ng biá»ƒn",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 2.6,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 67, // mg
    selenium: 30.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 42, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a (~100g)",
    notes: "CÃ¡ biá»ƒn phá»• biáº¿n; purine trung bÃ¬nh.",
    gout: { purine: 75, purineLevel: "medium" },
    kidney: { potassium: 330, phosphorus: 220 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-duoi",
    name: "CÃ¡ Ä‘uá»‘i",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.9,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 60, // mg
    selenium: 26.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 38, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 miáº¿ng (~100g)",
    notes: "CÃ¡ náº¡c; purine tháº¥pâ€“trung bÃ¬nh.",
    gout: { purine: 55, purineLevel: "low" },
    kidney: { potassium: 310, phosphorus: 190 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng vá»«a' },
    ],
  },
  {
    id: "ca-kim",
    name: "CÃ¡ kÃ¬m",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 2.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 64, // mg
    selenium: 27.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.08, // mg
    manganese: 0.02, // mg
    iodine: 39, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con vá»«a (~100g)",
    notes: "CÃ¡ biá»ƒn náº¡c; purine trung bÃ¬nh.",
    gout: { purine: 60, purineLevel: "medium" },
    kidney: { potassium: 315, phosphorus: 205 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-bon-bien",
    name: "CÃ¡ bÆ¡n biá»ƒn",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 1.6,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 59, // mg
    selenium: 25.0, // Âµg - cao trong cÃ¡ biá»ƒn
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 37, // Âµg - cao trong cÃ¡ biá»ƒn
    commonServing: "1 con nhá» (~100g)",
    notes: "CÃ¡ náº¡c; purine tháº¥p.",
    gout: { purine: 50, purineLevel: "low" },
    kidney: { potassium: 303, phosphorus: 190 },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 con nhá»' },
    ],
  },
  {
    id: "ca-tuyet",
    name: "CÃ¡ tuyáº¿t",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 6,
    vitaminB12: 1.1,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 58, // mg
    selenium: 24.0, // Âµg - cao trong cÃ¡ tuyáº¿t
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 50, // Âµg - ráº¥t cao trong cÃ¡ tuyáº¿t
    commonServing: "1 khÃºc (~100g)",
    notes: "CÃ¡ náº¡c; kali cao; purine trung bÃ¬nh.",
    gout: { purine: 70, purineLevel: "medium" },
    kidney: { potassium: 413, phosphorus: 203 },
    vietnameseUnits: [
      { unit: 'mieng', weight: 100, description: '1 khÃºc vá»«a' },
    ],
  },
  // ========================================================================
  // Rau lÃ¡ & Ä‘áº­u bá»• sung (264â€“274)
  // ========================================================================
  {
    id: "cai-xoong",
    name: "Rau cáº£i xoong",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol - cao trong rau lÃ¡ xanh
    vitaminK: 250, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 9.0, // mg
    selenium: 0.9, // Âµg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/náº¥u canh",
    notes: "GiÃ u kali; CKD chÃº Ã½.",
    kidney: { potassium: 330, phosphorus: 60 },
  },
  {
    id: "diep-ca",
    name: "Rau diáº¿p cÃ¡",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 80,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 200, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 8.5, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Rau gia vá»‹; mÃ¡t.",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 380, // Phylloquinone - ráº¥t cao trong rau sam
    choline: 6.5, // mg
    selenium: 0.9, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/náº¥u canh",
    notes: "Kali ráº¥t cao; CKD háº¡n cháº¿.",
    kidney: { potassium: 494, phosphorus: 44 },
  },
  {
    id: "bo-ngot-rung",
    name: "Rau bá»“ ngÃ³t (ngÃ³t rá»«ng)",
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
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 170,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong rau lÃ¡ xanh
    vitaminK: 400, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 18.0, // mg
    selenium: 1.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "GiÃ u vitamin A, C.",
    kidney: { potassium: 480, phosphorus: 70 },
  },
  {
    id: "rau-don",
    name: "Rau dá»›n",
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
    vitaminB7: 0.6, // Biotin (Âµg)
    folate: 45,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 180, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 12.0, // mg
    selenium: 0.8, // Âµg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "Rau rá»«ng; kali cao.",
    kidney: { potassium: 370, phosphorus: 60 },
  },
  {
    id: "rau-cang-cua",
    name: "Rau cÃ ng cua",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 75,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 150, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 10.0, // mg
    selenium: 0.6, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/trá»™n",
    notes: "MÃ¡t; canxi cao.",
    kidney: { potassium: 260, phosphorus: 42 },
  },
  {
    id: "rau-ma",
    code: "40016",
    name: "Rau mÃ¡",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 40,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 120, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 8.0, // mg
    selenium: 0.5, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/uá»‘ng nÆ°á»›c",
    notes: "Kali cao; CKD lÆ°u Ã½.",
    kidney: { potassium: 295, phosphorus: 38 },
  },
  {
    id: "rau-he",
    name: "Rau háº¹",
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
    vitaminB7: 0.6, // Biotin (Âµg)
    folate: 105,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 212, // Phylloquinone - ráº¥t cao trong rau háº¹
    choline: 11.0, // mg
    selenium: 0.7, // Âµg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/náº¥u canh",
    notes: "Rau gia vá»‹, nhiá»u vi cháº¥t.",
    kidney: { potassium: 296, phosphorus: 58 },
  },
  {
    id: "gia-do",
    name: "GiÃ¡ Ä‘á»—",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 61,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 33, // Phylloquinone
    choline: 14.0, // mg
    selenium: 0.6, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/xÃ o",
    notes: "Ãt kcal; dá»… Äƒn.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 149, phosphorus: 54 },
  },
  {
    id: "bi-do-veg48",
    name: "BÃ­ Ä‘á»",
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
    vitaminB7: 0.4, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.1, // Tocopherol - cao trong bÃ­ Ä‘á»
    vitaminK: 1.1, // Phylloquinone
    choline: 8.2, // mg
    selenium: 0.3, // Âµg
    copper: 0.13, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh/chÃ¨",
    notes: "GI trung bÃ¬nh; ÄTÄ Äƒn vá»«a.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 7, carbPerPortion: 7 },
    kidney: { potassium: 340, phosphorus: 44 },
  },
  {
    id: "dau-ha-lan",
    code: "40027",
    name: "Äáº­u HÃ  Lan tÆ°Æ¡i",
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
    vitaminB3: 2.1, // Niacin - cao trong Ä‘áº­u
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 65,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 24.8, // Phylloquinone
    choline: 28.0, // mg
    selenium: 1.8, // Âµg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "Tinh bá»™t + xÆ¡.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 244, phosphorus: 108 },
  },
  // ========================================================================
  // Cá»§ (root & tuber) + quáº£-rau phá»• biáº¿n (275â€“287)
  // ========================================================================
  {
    id: "khoai-tay-veg50",
    name: "Khoai tÃ¢y",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.01, // Tocopherol
    vitaminK: 2.0, // Phylloquinone
    choline: 12.1, // mg
    selenium: 0.3, // Âµg
    copper: 0.11, // mg
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (~100g)",
    notes: "GI trung bÃ¬nh; ÄTÄ Äƒn vá»«a.",
    diabetes: { glycemicIndex: 78, glycemicLoad: 13, carbPerPortion: 17 },
    kidney: { potassium: 425, phosphorus: 57 },
  },
  {
    id: "khoai-mi",
    name: "Khoai mÃ¬ (sáº¯n)",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 27,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.19, // Tocopherol
    vitaminK: 1.9, // Phylloquinone
    choline: 23.7, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 khÃºc (~100g)",
    notes: "Tinh bá»™t cao; ÄTÄ háº¡n cháº¿.",
    diabetes: { glycemicIndex: 94, glycemicLoad: 36, carbPerPortion: 38 },
    kidney: { potassium: 271, phosphorus: 27 },
  },
  {
    id: "cu-nang",
    name: "Cá»§ nÄƒng (mÃ£ tháº§y)",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 5.0, // mg
    selenium: 0.7, // Âµg
    copper: 0.3, // mg - cao trong cá»§ nÄƒng
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u chÃ¨/Äƒn sá»‘ng",
    notes: "Kali cao; CKD chÃº Ã½.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 14, carbPerPortion: 24 },
    kidney: { potassium: 584, phosphorus: 63 },
  },
  {
    id: "cu-sen",
    name: "Cá»§ sen",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 13,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 44.1, // mg - cao trong cá»§ sen
    selenium: 0.7, // Âµg
    copper: 0.3, // mg - cao trong cá»§ sen
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/háº§m",
    notes: "XÆ¡ cao; GI trung bÃ¬nh.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 10, carbPerPortion: 17 },
    kidney: { potassium: 556, phosphorus: 100 },
  },
  {
    id: "gung",
    code: "11029",
    name: "Gá»«ng",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 11,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.26, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 28.8, // mg
    selenium: 0.7, // Âµg
    copper: 0.2, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Gia vá»‹",
    notes: "DÃ¹ng lÆ°á»£ng nhá».",
    diabetes: { glycemicIndex: 15, glycemicLoad: 2, carbPerPortion: 4 },
    kidney: { potassium: 415, phosphorus: 34 },
  },
  {
    id: "nghe",
    code: "30037",
    name: "Nghá»‡ tÆ°Æ¡i",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 4.4, // Tocopherol - ráº¥t cao trong nghá»‡
    vitaminK: 13.4, // Phylloquinone
    choline: 49.2, // mg - cao trong nghá»‡
    selenium: 4.5, // Âµg - cao trong nghá»‡
    copper: 0.6, // mg - cao trong nghá»‡
    manganese: 2.0, // mg - ráº¥t cao trong nghá»‡
    iodine: 0, // Âµg
    commonServing: "Gia vá»‹",
    notes: "DÃ¹ng Ã­t; giÃ u curcumin.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 20, carbPerPortion: 67 },
    kidney: { potassium: 2080, phosphorus: 299 },
  },
  {
    id: "ca-chua-bi",
    name: "CÃ  chua bi",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 7.9, // Phylloquinone
    choline: 6.7, // mg
    selenium: 0.2, // Âµg
    copper: 0.06, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "GI tháº¥p.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 237, phosphorus: 24 },
  },
  {
    id: "ot-chuong",
    name: "á»št chuÃ´ng",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 46,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.6, // Tocopherol - cao trong á»›t chuÃ´ng
    vitaminK: 4.9, // Phylloquinone
    choline: 5.5, // mg
    selenium: 0.3, // Âµg
    copper: 0.07, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/Äƒn sá»‘ng",
    notes: "Vitamin C ráº¥t cao.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 211, phosphorus: 26 },
  },
  {
    id: "bi-ngoi",
    name: "BÃ­ ngÃ²i",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 24,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.3, // Phylloquinone
    choline: 9.5, // mg
    selenium: 0.2, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/háº¥p",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 261, phosphorus: 38 },
  },
  {
    id: "kho-qua-rung",
    name: "Khá»• qua rá»«ng",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 72,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 4.8, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.2, // Âµg
    copper: 0.03, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/náº¥u canh",
    notes: "Hay dÃ¹ng cho ÄTÄ.",
    diabetes: { glycemicIndex: 10, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 305, phosphorus: 33 },
  },
  {
    id: "du-du-xanh",
    name: "Äu Ä‘á»§ xanh",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 37,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 6.1, // mg
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "Gá»i/náº¥u canh",
    notes: "GI tháº¥p.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 182, phosphorus: 15 },
  },
  {
    id: "su-hao",
    name: "Su hÃ o",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.3, // mg
    selenium: 0.7, // Âµg
    copper: 0.13, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "XÆ¡ cao; mÃ¡t.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 2, carbPerPortion: 6 },
    kidney: { potassium: 350, phosphorus: 46 },
  },
  {
    id: "dau-que",
    code: "40026",
    name: "Äáº­u que",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 33,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 14.4, // Phylloquinone - cao trong Ä‘áº­u que
    choline: 15.3, // mg
    selenium: 0.6, // Âµg
    copper: 0.07, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "GI tháº¥p.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 211, phosphorus: 38 },
  },
  // ========================================================================
  // TrÃ¡i cÃ¢y phá»• biáº¿n bá»• sung (288â€“300)
  // ========================================================================
  {
    id: "chuoi-tieu-fr28",
    name: "Chuá»‘i tiÃªu chÃ­n",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.27, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ vá»«a (~100g)",
    notes: "GI trung bÃ¬nh; kali cao.",
    diabetes: { glycemicIndex: 62, glycemicLoad: 14, carbPerPortion: 23 },
    kidney: { potassium: 358, phosphorus: 22 },
  },
  {
    id: "cam-sanh-fr29",
    name: "Cam sÃ nh",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 30,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.5, // Âµg
    copper: 0.05, // mg
    manganese: 0.03, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~150g)",
    notes: "Vitamin C cao.",
    diabetes: { glycemicIndex: 43, glycemicLoad: 5, carbPerPortion: 12 },
    kidney: { potassium: 181, phosphorus: 14 },
  },
  {
    id: "quyt-fr30",
    name: "QuÃ½t",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.2, // mg
    selenium: 0.1, // Âµg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "Ngá»t hÆ¡n cam.",
    diabetes: { glycemicIndex: 47, glycemicLoad: 6, carbPerPortion: 13 },
    kidney: { potassium: 166, phosphorus: 20 },
  },
  {
    id: "buoi-da-xanh",
    name: "BÆ°á»Ÿi da xanh",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 0.1, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 mÃºi (~100g)",
    notes: "GI tháº¥p; ÄTÄ phÃ¹ há»£p.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 10 },
    kidney: { potassium: 216, phosphorus: 17 },
  },
  {
    id: "sau-rieng-fr32",
    name: "Sáº§u riÃªng",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 44,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 9.9, // mg
    selenium: 0.2, // Âµg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~50g",
    notes: "ÄÆ°á»ng & nÄƒng lÆ°á»£ng cao.",
    diabetes: { glycemicIndex: 49, glycemicLoad: 13, carbPerPortion: 27 },
    kidney: { potassium: 436, phosphorus: 39 },
  },
  {
    id: "mang-cut-fr33",
    name: "MÄƒng cá»¥t",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 31,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 0.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1â€“2 quáº£ (~100g)",
    notes: "Ngá»t; Äƒn vá»«a.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 11, carbPerPortion: 18 },
    kidney: { potassium: 48, phosphorus: 8 },
  },
  {
    id: "chom-chom-fr34",
    name: "ChÃ´m chÃ´m",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~100g",
    notes: "ÄÆ°á»ng cao.",
    diabetes: { glycemicIndex: 59, glycemicLoad: 10, carbPerPortion: 17 },
    kidney: { potassium: 42, phosphorus: 9 },
  },
  {
    id: "nhan-fr35",
    name: "NhÃ£n",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // Âµg
    copper: 0.2, // mg - cao trong nhÃ£n
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~100g",
    notes: "Ngá»t; ÄTÄ háº¡n cháº¿.",
    diabetes: { glycemicIndex: 51, glycemicLoad: 8, carbPerPortion: 15 },
    kidney: { potassium: 266, phosphorus: 21 },
  },
  {
    id: "vai",
    code: "20012",
    name: "Váº£i",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ~100g",
    notes: "ÄÆ°á»ng cao.",
    diabetes: { glycemicIndex: 50, glycemicLoad: 8, carbPerPortion: 17 },
    kidney: { potassium: 171, phosphorus: 31 },
  },
  {
    id: "dua-thom-fr37",
    name: "Dá»©a (thÆ¡m)",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 5.5, // mg
    selenium: 0.1, // Âµg
    copper: 0.1, // mg
    manganese: 0.9, // mg - ráº¥t cao trong dá»©a
    iodine: 0, // Âµg
    commonServing: "1 lÃ¡t (~100g)",
    notes: "GI trung bÃ¬nh.",
    diabetes: { glycemicIndex: 59, glycemicLoad: 8, carbPerPortion: 13 },
    kidney: { potassium: 109, phosphorus: 8 },
  },
  {
    id: "oi-fr38",
    name: "á»”i",
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
    vitaminB3: 1.1, // Niacin - cao trong á»•i
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 49,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.23, // mg - cao trong á»•i
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (~100g)",
    notes: "XÆ¡ cao; ÄTÄ phÃ¹ há»£p.",
    diabetes: { glycemicIndex: 31, glycemicLoad: 4, carbPerPortion: 14 },
    kidney: { potassium: 417, phosphorus: 40 },
  },
  {
    id: "coc",
    code: "10008",
    name: "CÃ³c",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 7.0, // mg
    selenium: 0.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Chua; kali khÃ¡ cao.",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 14,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 2.8, // Phylloquinone
    choline: 8.6, // mg
    selenium: 1.3, // Âµg
    copper: 0.9, // mg - ráº¥t cao trong me
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n ráº¥t Ã­t",
    notes: "ÄÆ°á»ng + acid cao.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 11, carbPerPortion: 20 },
    kidney: { potassium: 628, phosphorus: 113 },
  },
  // ========================================================================
  // MÃ³n nÆ°á»›c & mÃ³n chÃ­nh phá»• biáº¿n (301â€“315)
  // ========================================================================
  {
    id: "pho-bo-viet01",
    name: "Phá»Ÿ bÃ²",
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
    vitaminB3: 4.0, // Niacin - cao tá»« thá»‹t bÃ²
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~400g)",
    notes: "NÆ°á»›c dÃ¹ng máº·n; THA lÆ°u Ã½.",
    gout: {
      purine: 160,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 350, phosphorus: 180 },
  },
  {
    id: "pho-ga-viet02",
    name: "Phá»Ÿ gÃ ",
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
    vitaminB3: 6.0, // Niacin - ráº¥t cao tá»« thá»‹t gÃ 
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t gÃ 
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 10.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~400g)",
    notes: "Ãt bÃ©o hÆ¡n phá»Ÿ bÃ².",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 60, glycemicLoad: 25, carbPerPortion: 42 },
    kidney: { potassium: 330, phosphorus: 160 },
  },
  {
    id: "bun-bo-hue-viet03",
    name: "BÃºn bÃ² Huáº¿",
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
    vitaminB3: 4.5, // Niacin - cao tá»« thá»‹t bÃ²
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (Âµg)
    folate: 20,
    vitaminB12: 0.6, // Âµg - tá»« thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg
    selenium: 13.0, // Âµg
    copper: 0.12, // mg
    manganese: 0.6, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~450g)",
    notes: "Ráº¥t máº·n + bÃ©o.",
    gout: {
      purine: 160,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 380, phosphorus: 210 },
  },
  {
    id: "bun-cha-viet04",
    name: "BÃºn cháº£",
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
    vitaminB3: 4.5, // Niacin - cao tá»« thá»‹t heo
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0.4, // Âµg - tá»« thá»‹t heo
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 19.0, // mg
    selenium: 11.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 suáº¥t",
    notes: "NÆ°á»›c cháº¥m máº·n.",
    diabetes: { glycemicIndex: 68, glycemicLoad: 37, carbPerPortion: 55 },
    kidney: { potassium: 320, phosphorus: 190 },
  },
  {
    id: "com-tam-suon-viet05",
    name: "CÆ¡m táº¥m sÆ°á»n",
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
    vitaminB3: 5.0, // Niacin - cao tá»« thá»‹t heo
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t heo
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 25.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.12, // mg
    manganese: 0.6, // mg
    iodine: 0, // Âµg
    commonServing: "1 Ä‘Ä©a",
    notes: "Tinh bá»™t + má»¡ + máº¯m.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 51, carbPerPortion: 68 },
    kidney: { potassium: 400, phosphorus: 230 },
  },
  {
    id: "com-ga-xoi-mo",
    code: "11020",
    name: "CÆ¡m gÃ  xá»‘i má»¡",
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
    vitaminB3: 7.0, // Niacin - ráº¥t cao tá»« thá»‹t gÃ 
    vitaminB5: 1.0, // Pantothenic acid - cao
    vitaminB6: 0.18,
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t gÃ 
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 Ä‘Ä©a",
    notes: "BÃ©o; tim máº¡ch háº¡n cháº¿.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 78, glycemicLoad: 51, carbPerPortion: 65 },
    kidney: { potassium: 420, phosphorus: 220 },
  },
  {
    id: "chao-thit-bam",
    code: "11005",
    name: "ChÃ¡o thá»‹t báº±m",
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
    vitaminB3: 3.5, // Niacin - tá»« thá»‹t heo
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 12,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t heo
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.0, // mg
    selenium: 8.0, // Âµg
    copper: 0.08, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~400g)",
    notes: "Dá»… tiÃªu; natri vá»«a.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 70, glycemicLoad: 31, carbPerPortion: 45 },
    kidney: { potassium: 220, phosphorus: 150 },
  },
  {
    id: "chao-long",
    name: "ChÃ¡o lÃ²ng",
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
    vitaminB3: 8.0, // Niacin - ráº¥t cao tá»« ná»™i táº¡ng
    vitaminB5: 2.0, // Pantothenic acid - cao tá»« ná»™i táº¡ng
    vitaminB6: 0.18,
    vitaminB7: 3.0, // Biotin (Âµg) - cao tá»« ná»™i táº¡ng
    folate: 20,
    vitaminB12: 1.5, // Âµg - cao tá»« ná»™i táº¡ng
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 30.0, // mg - cao tá»« ná»™i táº¡ng
    selenium: 18.0, // Âµg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´",
    notes: "Ná»™i táº¡ng; gÃºt trÃ¡nh.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 29, carbPerPortion: 42 },
    kidney: { potassium: 260, phosphorus: 200 },
  },
  {
    id: "banh-cuon-viet09",
    name: "BÃ¡nh cuá»‘n",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 14,
    vitaminB12: 0.2, // Âµg - tá»« thá»‹t
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 Ä‘Ä©a",
    notes: "Tinh bá»™t + máº¯m.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 43, carbPerPortion: 58 },
    kidney: { potassium: 180, phosphorus: 140 },
  },
  {
    id: "banh-xeo-viet10",
    name: "BÃ¡nh xÃ¨o",
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
    vitaminB3: 2.5, // Niacin - tá»« thá»‹t vÃ  tÃ´m
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 0.6, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t vÃ  tÃ´m
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 12.0, // mg
    selenium: 8.0, // Âµg
    copper: 0.15, // mg
    manganese: 0.5, // mg
    iodine: 5, // Âµg - tá»« tÃ´m
    commonServing: "1 cÃ¡i lá»›n",
    notes: "ChiÃªn dáº§u; bÃ©o.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 32, carbPerPortion: 45 },
    kidney: { potassium: 300, phosphorus: 180 },
  },
  {
    id: "goi-cuon",
    code: "10035",
    name: "Gá»i cuá»‘n tÃ´m thá»‹t",
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
    vitaminB3: 2.0, // Niacin - tá»« tÃ´m vÃ  thá»‹t
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0.4, // Âµg - tá»« tÃ´m vÃ  thá»‹t
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.0, // mg
    selenium: 7.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 8, // Âµg - tá»« tÃ´m
    commonServing: "2 cuá»‘n",
    notes: "Ãt dáº§u; nÆ°á»›c cháº¥m máº·n.",
    gout: {
      purine: 145,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 45, glycemicLoad: 13, carbPerPortion: 28 },
    kidney: { potassium: 260, phosphorus: 150 },
  },
  {
    id: "nem-ran-viet12",
    name: "Nem rÃ¡n (cháº£ giÃ²)",
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
    vitaminB3: 2.2, // Niacin - tá»« thá»‹t
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.6, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 11.0, // mg
    selenium: 7.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "3â€“4 cuá»‘n",
    notes: "ChiÃªn dáº§u; bÃ©o.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 21, carbPerPortion: 30 },
    kidney: { potassium: 260, phosphorus: 170 },
  },
  {
    id: "canh-chua-ca",
    code: "11007",
    name: "Canh chua cÃ¡",
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
    vitaminB3: 3.5, // Niacin - tá»« cÃ¡
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 14,
    vitaminB12: 1.2, // Âµg - cao tá»« cÃ¡
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 15.0, // mg
    selenium: 10.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 10, // Âµg - tá»« cÃ¡
    commonServing: "1 tÃ´",
    notes: "Máº·n vá»«a; nhiá»u rau.",
    gout: {
      purine: 140,
      purineLevel: 'medium',
    },
    diabetes: { glycemicIndex: 40, glycemicLoad: 5, carbPerPortion: 12 },
    kidney: { potassium: 320, phosphorus: 180 },
  },
  {
    id: "ca-kho-to",
    code: "11009",
    name: "CÃ¡ kho tá»™",
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
    vitaminB3: 4.0, // Niacin - tá»« cÃ¡
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.2, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 1.5, // Âµg - cao tá»« cÃ¡
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 12, // Âµg - tá»« cÃ¡
    commonServing: "1 pháº§n (~200g)",
    notes: "Máº·n; purine trung bÃ¬nh.",
    gout: { purine: 180, purineLevel: "medium" },
    kidney: { potassium: 380, phosphorus: 260 },
  },
  {
    id: "thit-kho-trung-viet15",
    name: "Thá»‹t kho trá»©ng",
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
    vitaminB3: 5.0, // Niacin - cao tá»« thá»‹t heo vÃ  trá»©ng
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.5, // Biotin (Âµg) - tá»« trá»©ng
    folate: 14,
    vitaminB12: 0.8, // Âµg - tá»« thá»‹t vÃ  trá»©ng
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 30.0, // mg - cao tá»« trá»©ng
    selenium: 18.0, // Âµg
    copper: 0.12, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (~200g)",
    notes: "Ráº¥t bÃ©o + máº·n.",
    kidney: { potassium: 360, phosphorus: 240 },
  },
  // ========================================================================
  // MÃ³n Viá»‡t bá»• sung (Há»§ tiáº¿u, mÃ¬ Quáº£ng, xÃ´i, bÃ¡nh Táº¿t, cÆ¡m chiÃªnâ€¦) 316â€“330
  // ========================================================================
  {
    id: "hu-tieu-nam-vang",
    code: "11017",
    name: "Há»§ tiáº¿u Nam Vang",
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
    vitaminB3: 4.5, // Niacin - tá»« thá»‹t vÃ  tÃ´m
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0.5, // Âµg - tá»« thá»‹t vÃ  tÃ´m
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.15, // mg
    manganese: 0.5, // mg
    iodine: 5, // Âµg - tá»« tÃ´m
    commonServing: "1 tÃ´ (~450g)",
    notes: "NÆ°á»›c dÃ¹ng máº·n; nhiá»u topping.",
    diabetes: { glycemicIndex: 68, glycemicLoad: 34, carbPerPortion: 50 },
    kidney: { potassium: 360, phosphorus: 200 },
  },
  {
    id: "mi-quang-viet17",
    name: "MÃ¬ Quáº£ng",
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
    vitaminB3: 4.0, // Niacin - tá»« thá»‹t vÃ  tÃ´m
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.16,
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 16,
    vitaminB12: 0.4, // Âµg - tá»« thá»‹t vÃ  tÃ´m
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 18.0, // mg
    selenium: 10.0, // Âµg
    copper: 0.12, // mg
    manganese: 0.5, // mg
    iodine: 4, // Âµg - tá»« tÃ´m
    commonServing: "1 tÃ´ (~400g)",
    notes: "Ãt nÆ°á»›c; nhiá»u dáº§u.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 340, phosphorus: 190 },
  },
  {
    id: "cao-lau",
    name: "Cao láº§u",
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
    vitaminB3: 3.5, // Niacin - tá»« thá»‹t
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0.6, // Biotin (Âµg)
    folate: 15,
    vitaminB12: 0.3, // Âµg - tá»« thá»‹t
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 16.0, // mg
    selenium: 9.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~400g)",
    notes: "MÃ¬ dai; máº·n vá»«a.",
    diabetes: { glycemicIndex: 65, glycemicLoad: 31, carbPerPortion: 48 },
    kidney: { potassium: 330, phosphorus: 180 },
  },
  {
    id: "bun-mam",
    code: "11041",
    name: "BÃºn máº¯m",
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
    vitaminB3: 5.5, // Niacin - cao tá»« cÃ¡ vÃ  tÃ´m
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 1.2, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 1.0, // Âµg - cao tá»« cÃ¡ vÃ  tÃ´m
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 25.0, // mg - cao
    selenium: 15.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.3, // mg
    iodine: 8, // Âµg - tá»« cÃ¡ vÃ  tÃ´m
    commonServing: "1 tÃ´ (~450g)",
    notes: "Ráº¥t máº·n; purine cao.",
    gout: { purine: 200, purineLevel: "high" },
    kidney: { potassium: 380, phosphorus: 240 },
  },
  {
    id: "bun-rieu-cua",
    code: "11010",
    name: "BÃºn riÃªu cua",
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
    vitaminB3: 2.5, // Niacin - tá»« cua
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.18,
    vitaminB7: 2.0, // Biotin (Âµg) - tá»« cua
    folate: 16,
    vitaminB12: 2.0, // Âµg - ráº¥t cao tá»« cua
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg - tá»« cua
    selenium: 9.0, // Âµg
    copper: 0.6, // mg - cao tá»« cua
    manganese: 0.1, // mg
    iodine: 12, // Âµg - tá»« cua
    commonServing: "1 tÃ´ (~400g)",
    notes: "Cua + máº¯m tÃ´m.",
    gout: {
      purine: 180,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 29, carbPerPortion: 45 },
    kidney: { potassium: 340, phosphorus: 210 },
  },
  {
    id: "bun-mang-vit",
    name: "BÃºn mÄƒng vá»‹t",
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
    vitaminB3: 5.0, // Niacin - cao tá»« vá»‹t
    vitaminB5: 1.0, // Pantothenic acid - cao
    vitaminB6: 0.18,
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 18,
    vitaminB12: 0.5, // Âµg - tá»« vá»‹t
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 22.0, // mg - cao tá»« vá»‹t
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 tÃ´ (~450g)",
    notes: "Má»¡ vá»‹t + máº·n.",
    gout: {
      purine: 150,
      purineLevel: 'high',
    },
    diabetes: { glycemicIndex: 65, glycemicLoad: 31, carbPerPortion: 48 },
    kidney: { potassium: 360, phosphorus: 220 },
  },
  {
    id: "xoi-ga",
    code: "10025",
    name: "XÃ´i gÃ ",
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
    commonServing: "1 gÃ³i (~350g)",
    notes: "Tinh bá»™t cao.",
    diabetes: { glycemicIndex: 80, glycemicLoad: 56, carbPerPortion: 70 },
    kidney: { potassium: 420, phosphorus: 210 },
  },
  {
    id: "xoi-man",
    code: "10024",
    name: "XÃ´i máº·n",
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
    commonServing: "1 gÃ³i",
    notes: "Má»¡ + máº·n.",
    diabetes: { glycemicIndex: 82, glycemicLoad: 59, carbPerPortion: 72 },
    kidney: { potassium: 450, phosphorus: 230 },
  },
  {
    id: "banh-chung",
    code: "10036",
    name: "BÃ¡nh chÆ°ng",
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
    commonServing: "1 miáº¿ng (~200g)",
    notes: "Tinh bá»™t + má»¡.",
    diabetes: { glycemicIndex: 80, glycemicLoad: 48, carbPerPortion: 60 },
    kidney: { potassium: 320, phosphorus: 180 },
  },
  {
    id: "banh-tet",
    code: "10037",
    name: "BÃ¡nh tÃ©t",
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
    notes: "TÆ°Æ¡ng tá»± bÃ¡nh chÆ°ng.",
    diabetes: { glycemicIndex: 78, glycemicLoad: 45, carbPerPortion: 58 },
    kidney: { potassium: 300, phosphorus: 170 },
  },
  {
    id: "banh-gio",
    code: "10030",
    name: "BÃ¡nh giÃ²",
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
    commonServing: "1 cÃ¡i (~250g)",
    notes: "Tinh bá»™t + má»¡.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 38, carbPerPortion: 50 },
    kidney: { potassium: 260, phosphorus: 170 },
  },
  {
    id: "banh-khot",
    code: "10046",
    name: "BÃ¡nh khá»t",
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
    commonServing: "8â€“10 cÃ¡i",
    notes: "ChiÃªn nhiá»u dáº§u.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 28, carbPerPortion: 40 },
    kidney: { potassium: 300, phosphorus: 190 },
  },
  {
    id: "banh-bot-loc",
    code: "10044",
    name: "BÃ¡nh bá»™t lá»c",
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
    commonServing: "1 Ä‘Ä©a",
    notes: "Tinh bá»™t + máº·n.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 220, phosphorus: 150 },
  },
  {
    id: "banh-beo-viet29",
    name: "BÃ¡nh bÃ¨o",
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
    commonServing: "1 chÃ©n lá»›n",
    notes: "Máº¯m tÃ´m khÃ´.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 200, phosphorus: 140 },
  },
  {
    id: "com-chien-duong-chau",
    code: "11021",
    name: "CÆ¡m chiÃªn DÆ°Æ¡ng ChÃ¢u",
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
    commonServing: "1 Ä‘Ä©a",
    notes: "ChiÃªn dáº§u; máº·n.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 47, carbPerPortion: 62 },
    kidney: { potassium: 380, phosphorus: 210 },
  },
  // ========================================================================
  // Äá»“ Äƒn váº·t & chÃ¨ phá»• biáº¿n (331â€“340)
  // ========================================================================
  {
    id: "banh-trang-tron",
    code: "10034",
    name: "BÃ¡nh trÃ¡ng trá»™n",
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
    commonServing: "1 bá»‹ch (~250g)",
    notes: "Ráº¥t máº·n; nhiá»u topping.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 280, phosphorus: 190 },
  },
  {
    id: "banh-trang-nuong",
    name: "BÃ¡nh trÃ¡ng nÆ°á»›ng",
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
    commonServing: "1 cÃ¡i",
    notes: "ChiÃªn/nÆ°á»›ng nhiá»u dáº§u.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 260, phosphorus: 180 },
  },
  {
    id: "bap-xao",
    name: "Báº¯p xÃ o",
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
    notes: "Tinh bá»™t + bÆ¡.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 31, carbPerPortion: 45 },
    kidney: { potassium: 220, phosphorus: 120 },
  },
  {
    id: "trung-ga",
    code: "80005",
    name: "Trá»©ng gÃ ",
    nameEn: "Chicken egg",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 155,
    protein: 13.0,
    carbs: 1.1,
    fat: 11.0,
    fiber: 0.0,
    water: 75.0,
    sodium: 124,
    potassium: 138,
    calcium: 56,
    iron: 1.8,
    phosphorus: 198,
    magnesium: 12,
    zinc: 1.3,
    vitaminA: 160,
    vitaminC: 0,
    vitaminB1: 0.04,
    vitaminB2: 0.46,
    vitaminB3: 0.1, // Niacin
    vitaminB5: 1.5, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.17,
    vitaminB7: 25.0, // Biotin (Âµg) - ráº¥t cao trong trá»©ng
    folate: 47,
    vitaminB12: 0.9, // Âµg - cao trong trá»©ng
    vitaminD: 2.0, // Âµg - cÃ³ trong lÃ²ng Ä‘á»
    vitaminE: 1.0, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 294.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 30.7, // Âµg - cao trong trá»©ng
    copper: 0.07, // mg
    manganese: 0.03, // mg
    iodine: 25.0, // Âµg - tá»« thá»©c Äƒn gÃ 
    cholesterol: 372,
    commonServing: "100g (khoáº£ng 2 quáº£)",
    notes: "Nguá»“n protein cháº¥t lÆ°á»£ng cao, giÃ u choline vÃ  selenium.",
    cardiovascular: {
      cholesterol: 372,
      saturatedFat: 3.3,
    },
    kidney: {
      potassium: 138,
      phosphorus: 198,
    },
    gout: {
      purine: 0,
      purineLevel: "low",
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 50, description: '1 quáº£ trá»©ng gÃ ' },
    ],
  },
  {
    id: "trung-vit",
    code: "80009",
    name: "Trá»©ng vá»‹t",
    nameEn: "Duck egg",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 185,
    protein: 13.0,
    carbs: 1.5,
    fat: 14.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 146,
    potassium: 222,
    calcium: 64,
    iron: 3.9,
    phosphorus: 220,
    magnesium: 17,
    zinc: 1.4,
    vitaminA: 194,
    vitaminC: 0,
    vitaminB1: 0.15,
    vitaminB2: 0.40,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 1.9, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.25,
    vitaminB7: 20.0, // Biotin (Âµg) - cao trong trá»©ng
    folate: 80,
    vitaminB12: 5.4, // Âµg - ráº¥t cao trong trá»©ng vá»‹t
    vitaminD: 1.7, // Âµg
    vitaminE: 1.3, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 263.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 36.4, // Âµg - cao trong trá»©ng
    copper: 0.06, // mg
    manganese: 0.04, // mg
    iodine: 20.0, // Âµg
    cholesterol: 884,
    commonServing: "100g (khoáº£ng 1.5 quáº£)",
    notes: "Lá»›n hÆ¡n trá»©ng gÃ , giÃ u vitamin B12 vÃ  cholesterol cao hÆ¡n.",
    cardiovascular: {
      cholesterol: 884,
      saturatedFat: 3.7,
    },
    kidney: {
      potassium: 222,
      phosphorus: 220,
    },
    gout: {
      purine: 0,
      purineLevel: "low",
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 70, description: '1 quáº£ trá»©ng vá»‹t' },
    ],
  },
  {
    id: "trung-cut",
    code: "80010",
    name: "Trá»©ng cÃºt",
    nameEn: "Quail egg",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 158,
    protein: 13.0,
    carbs: 0.4,
    fat: 11.1,
    fiber: 0.0,
    water: 74.0,
    sodium: 141,
    potassium: 132,
    calcium: 64,
    iron: 3.6,
    phosphorus: 226,
    magnesium: 13,
    zinc: 1.5,
    vitaminA: 156,
    vitaminC: 0,
    vitaminB1: 0.13,
    vitaminB2: 0.79,
    vitaminB3: 0.15, // Niacin
    vitaminB5: 1.8, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.15,
    vitaminB7: 20.0, // Biotin (Âµg) - cao trong trá»©ng
    folate: 66,
    vitaminB12: 1.6, // Âµg - cao trong trá»©ng
    vitaminD: 1.4, // Âµg
    vitaminE: 1.1, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 263.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 32.0, // Âµg - cao trong trá»©ng
    copper: 0.06, // mg
    manganese: 0.04, // mg
    iodine: 15.0, // Âµg
    cholesterol: 844,
    commonServing: "100g (khoáº£ng 8â€“10 quáº£)",
    notes: "GiÃ u cholesterol; thÆ°á»ng Äƒn 3â€“5 quáº£/láº§n. GiÃ u vitamin B2 vÃ  sáº¯t.",
    cardiovascular: {
      cholesterol: 844,
      saturatedFat: 3.6,
    },
    kidney: {
      potassium: 132,
      phosphorus: 226,
    },
    gout: {
      purine: 0,
      purineLevel: "low",
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 10, description: '1 quáº£ trá»©ng cÃºt' },
    ],
  },
  {
    id: "trung-ngong",
    code: "80011",
    name: "Trá»©ng ngá»—ng",
    nameEn: "Goose egg",
    category: "dairy",
    servingSize: 100,
    servingUnit: "g",
    calories: 185,
    protein: 13.9,
    carbs: 1.3,
    fat: 13.3,
    fiber: 0.0,
    water: 70.0,
    sodium: 138,
    potassium: 210,
    calcium: 60,
    iron: 3.0,
    phosphorus: 220,
    magnesium: 16,
    zinc: 1.5,
    vitaminA: 200,
    vitaminC: 0,
    vitaminB1: 0.15,
    vitaminB2: 0.38,
    vitaminB3: 0.2, // Niacin
    vitaminB5: 1.9, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.24,
    vitaminB7: 18.0, // Biotin (Âµg) - cao trong trá»©ng
    folate: 76,
    vitaminB12: 5.1, // Âµg - ráº¥t cao trong trá»©ng ngá»—ng
    vitaminD: 1.7, // Âµg
    vitaminE: 1.3, // Tocopherol
    vitaminK: 0.4, // Phylloquinone
    choline: 263.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 36.7, // Âµg - cao trong trá»©ng
    copper: 0.06, // mg
    manganese: 0.04, // mg
    iodine: 18.0, // Âµg
    cholesterol: 850,
    commonServing: "100g (~1/2 quáº£ lá»›n)",
    notes: "Quáº£ ráº¥t to; thÆ°á»ng Ä‘Æ°á»£c khuyÃªn khÃ´ng Äƒn quÃ¡ thÆ°á»ng xuyÃªn do cholesterol cao. GiÃ u vitamin B12.",
    cardiovascular: {
      cholesterol: 850,
      saturatedFat: 3.6,
    },
    kidney: {
      potassium: 210,
      phosphorus: 220,
    },
    gout: {
      purine: 0,
      purineLevel: "low",
    },
    vietnameseUnits: [
      { unit: 'qua', weight: 200, description: '1 quáº£ trá»©ng ngá»—ng' },
    ],
  },
  {
    id: "trung-cut-lon",
    name: "Trá»©ng cÃºt lá»™n",
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
    vitaminB5: 1.8, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.22,
    vitaminB7: 5.0, // Biotin (Âµg) - cao trong trá»©ng
    folate: 44,
    vitaminB12: 3.0, // Âµg - ráº¥t cao trong trá»©ng
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 150.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 32.0, // Âµg - cao trong trá»©ng
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 trá»©ng",
    notes: "Cholesterol & purine cao.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 130, phosphorus: 210 },
  },
  {
    id: "trung-vit-lon",
    name: "Trá»©ng vá»‹t lá»™n",
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
    vitaminB5: 1.6, // Pantothenic acid - cao trong trá»©ng
    vitaminB6: 0.20,
    vitaminB7: 4.5, // Biotin (Âµg) - cao trong trá»©ng
    folate: 40,
    vitaminB12: 2.8, // Âµg - ráº¥t cao trong trá»©ng
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.3, // Phylloquinone
    choline: 140.0, // mg - ráº¥t cao trong trá»©ng
    selenium: 30.0, // Âµg - cao trong trá»©ng
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 trá»©ng (~100g)",
    notes: "GÃºt & má»¡ mÃ¡u trÃ¡nh.",
    gout: { purine: 300, purineLevel: "high" },
    kidney: { potassium: 120, phosphorus: 200 },
  },
  {
    id: "banh-mi-que",
    code: "12007",
    name: "BÃ¡nh mÃ¬ que",
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
    vitaminB3: 1.5, // Niacin - tá»« bÃ¡nh mÃ¬ vÃ  thá»‹t
    vitaminB5: 0.3, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 12,
    vitaminB12: 0.2, // Âµg - tá»« pate/thá»‹t
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 5.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 que",
    notes: "BÆ¡ + pate máº·n.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 27, carbPerPortion: 38 },
    kidney: { potassium: 200, phosphorus: 150 },
  },
  {
    id: "banh-tieu",
    name: "BÃ¡nh tiÃªu",
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
    vitaminB3: 0.8, // Niacin - tá»« bá»™t mÃ¬
    vitaminB5: 0.2, // Pantothenic acid
    vitaminB6: 0.12,
    vitaminB7: 0, // Biotin
    folate: 10,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 5.0, // mg
    selenium: 2.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.4, // mg - tá»« mÃ¨
    iodine: 0, // Âµg
    commonServing: "1 cÃ¡i",
    notes: "ChiÃªn dáº§u; Ä‘Æ°á»ng cao.",
    diabetes: { glycemicIndex: 85, glycemicLoad: 43, carbPerPortion: 50 },
    kidney: { potassium: 180, phosphorus: 120 },
  },
  {
    id: "banh-cam",
    name: "BÃ¡nh cam (bÃ¡nh rÃ¡n)",
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
    vitaminB3: 0.6, // Niacin - tá»« bá»™t náº¿p
    vitaminB5: 0.1, // Pantothenic acid
    vitaminB6: 0.10,
    vitaminB7: 0, // Biotin
    folate: 9,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.0, // mg
    selenium: 1.5, // Âµg
    copper: 0.08, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 cÃ¡i",
    notes: "ÄÆ°á»ng + chiÃªn dáº§u.",
    diabetes: { glycemicIndex: 90, glycemicLoad: 50, carbPerPortion: 55 },
    kidney: { potassium: 160, phosphorus: 110 },
  },
  {
    id: "che-dau-den-viet39",
    name: "ChÃ¨ Ä‘áº­u Ä‘en",
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
    vitaminB3: 1.3, // Niacin - tá»« Ä‘áº­u Ä‘en
    vitaminB5: 0.9, // Pantothenic acid - cao tá»« Ä‘áº­u Ä‘en
    vitaminB6: 0.16,
    vitaminB7: 0, // Biotin
    folate: 90, // Âµg - cao tá»« Ä‘áº­u Ä‘en
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 26.0, // mg - cao tá»« Ä‘áº­u Ä‘en
    selenium: 3.6, // Âµg
    copper: 0.5, // mg - cao tá»« Ä‘áº­u Ä‘en
    manganese: 0.9, // mg - cao tá»« Ä‘áº­u Ä‘en
    iodine: 0, // Âµg
    commonServing: "1 ly (~250g)",
    notes: "ÄÆ°á»ng cao; ÄTÄ háº¡n cháº¿.",
    diabetes: { glycemicIndex: 70, glycemicLoad: 34, carbPerPortion: 48 },
    kidney: { potassium: 300, phosphorus: 180 },
  },
  {
    id: "che-ba-mau",
    code: "12004",
    name: "ChÃ¨ ba mÃ u",
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
    vitaminB3: 1.0, // Niacin - tá»« Ä‘áº­u vÃ  nÆ°á»›c cá»‘t dá»«a
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.14,
    vitaminB7: 0, // Biotin
    folate: 80, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 20.0, // mg
    selenium: 2.5, // Âµg
    copper: 0.3, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 ly",
    notes: "ÄÆ°á»ng + nÆ°á»›c cá»‘t dá»«a.",
    diabetes: { glycemicIndex: 75, glycemicLoad: 41, carbPerPortion: 55 },
    kidney: { potassium: 280, phosphorus: 170 },
  },
  // ========================================================================
  // Rau lÃ¡ & rau gia vá»‹ phá»• biáº¿n (341â€“352)
  // ========================================================================
  {
    id: "rau-muong-veg63",
    name: "Rau muá»‘ng",
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
    folate: 57, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Ráº¥t phá»• biáº¿n; kali cao.",
    kidney: { potassium: 312, phosphorus: 48 },
  },
  {
    id: "cai-ngot-veg64",
    name: "Rau cáº£i ngá»t",
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
    folate: 80, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "GiÃ u canxi.",
    kidney: { potassium: 350, phosphorus: 50 },
  },
  {
    id: "cai-xanh-veg65",
    name: "Rau cáº£i xanh",
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
    folate: 75, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 45, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t (~100g)",
    notes: "Hay muá»‘i dÆ°a.",
    kidney: { potassium: 384, phosphorus: 58 },
  },
  {
    id: "cai-thao-veg66",
    name: "Rau cáº£i tháº£o",
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
    folate: 79, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 42.9, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 7.2, // mg
    selenium: 0.3, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh/xÃ o",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    kidney: { potassium: 238, phosphorus: 25 },
  },
  {
    id: "mong-toi-veg67",
    name: "Rau má»“ng tÆ¡i",
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
    folate: 140, // Âµg - ráº¥t cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 302, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 6.0, // mg
    selenium: 0.8, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "Nhá»›t; mÃ¡t.",
    kidney: { potassium: 510, phosphorus: 36 },
  },
  {
    id: "rau-den-com-veg68",
    name: "Rau dá»n cÆ¡m",
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
    folate: 85, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - ráº¥t cao trong rau dá»n
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dá»n
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "Kali cao.",
    kidney: { potassium: 611, phosphorus: 43 },
  },
  {
    id: "rau-den-gai-veg69",
    name: "Rau dá»n gai",
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
    folate: 90, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - ráº¥t cao trong rau dá»n
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dá»n
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "Rau dá»n dáº¡i.",
    kidney: { potassium: 590, phosphorus: 46 },
  },
  {
    id: "rau-lang-veg70",
    name: "Rau lang (ngá»n khoai lang)",
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
    vitaminB7: 0.8, // Biotin (Âµg)
    folate: 90, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.5, // Tocopherol - cao trong rau lÃ¡ xanh
    vitaminK: 400, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 18.0, // mg
    selenium: 1.0, // Âµg
    copper: 0.2, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "XÆ¡ cao; tá»‘t ÄTÄ.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 7 },
    kidney: { potassium: 337, phosphorus: 56 },
  },
  {
    id: "tan-o-veg71",
    name: "Rau táº§n Ã´ (cáº£i cÃºc)",
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
    folate: 105, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 250, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 10.4, // mg
    selenium: 0.6, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n láº©u",
    notes: "Rau mÃ¹a láº¡nh.",
    kidney: { potassium: 340, phosphorus: 50 },
  },
  {
    id: "xa-lach-xoan-veg72",
    name: "Rau xÃ  lÃ¡ch xoÄƒn",
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
    folate: 38, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 126.3, // Phylloquinone - cao trong xÃ  lÃ¡ch
    choline: 9.9, // mg
    selenium: 0.4, // Âµg
    copper: 0.03, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Ãt kcal.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 194, phosphorus: 29 },
  },
  {
    id: "thi-la-veg73",
    name: "Rau thÃ¬ lÃ ",
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
    vitaminB2: 0.30, // cao trong thÃ¬ lÃ 
    vitaminB3: 0.4, // Niacin
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.28,
    vitaminB7: 0, // Biotin
    folate: 150, // Âµg - ráº¥t cao trong thÃ¬ lÃ 
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 440, // Phylloquinone - ráº¥t cao trong thÃ¬ lÃ 
    choline: 12.8, // mg
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 1.3, // mg - cao trong thÃ¬ lÃ 
    iodine: 0, // Âµg
    commonServing: "Gia vá»‹",
    notes: "Ä‚n lÆ°á»£ng nhá».",
    kidney: { potassium: 738, phosphorus: 66 },
  },
  {
    id: "kinh-gioi-veg74",
    name: "Rau kinh giá»›i",
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
    folate: 110, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.8, // Tocopherol
    vitaminK: 415, // Phylloquinone - ráº¥t cao trong kinh giá»›i
    choline: 11.4, // mg
    selenium: 0.3, // Âµg
    copper: 0.4, // mg - cao trong kinh giá»›i
    manganese: 1.1, // mg - cao trong kinh giá»›i
    iodine: 0, // Âµg
    commonServing: "Ä‚n kÃ¨m",
    notes: "Rau gia vá»‹.",
    kidney: { potassium: 420, phosphorus: 64 },
  },
  // ========================================================================
  // Cá»§ & quáº£ phá»• biáº¿n bá»• sung (353â€“365)
  // ========================================================================
  {
    id: "khoai-so",
    name: "Khoai sá»",
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
    selenium: 0.7, // Âµg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 khÃºc (~100g)",
    notes: "Tinh bá»™t; kali cao.",
    diabetes: { glycemicIndex: 54, glycemicLoad: 14, carbPerPortion: 27 },
    kidney: { potassium: 591, phosphorus: 84 },
  },
  {
    id: "khoai-mo",
    code: "40019",
    name: "Khoai má»¡",
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
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh/chÃ©",
    notes: "Kali ráº¥t cao; CKD háº¡n cháº¿.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 15, carbPerPortion: 27 },
    kidney: { potassium: 816, phosphorus: 55 },
  },
  {
    id: "cu-tu",
    name: "Cá»§ tá»«",
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
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "Luá»™c/náº¥u canh",
    notes: "Tinh bá»™t.",
    diabetes: { glycemicIndex: 55, glycemicLoad: 15, carbPerPortion: 27 },
    kidney: { potassium: 670, phosphorus: 60 },
  },
  {
    id: "cu-cai-do",
    name: "Cá»§ cáº£i Ä‘á»",
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
    commonServing: "Luá»™c/xÃ o",
    notes: "GI trung bÃ¬nh.",
    diabetes: { glycemicIndex: 64, glycemicLoad: 6, carbPerPortion: 10 },
    kidney: { potassium: 325, phosphorus: 40 },
  },
  {
    id: "ca-rot-tim",
    name: "CÃ  rá»‘t tÃ­m",
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
    selenium: 0.1, // Âµg
    copper: 0.08, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/náº¥u",
    notes: "GiÃ u anthocyanin.",
    diabetes: { glycemicIndex: 47, glycemicLoad: 4, carbPerPortion: 10 },
    kidney: { potassium: 320, phosphorus: 35 },
  },
  {
    id: "bi-ho-lo",
    name: "BÃ­ há»“ lÃ´",
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
    selenium: 0.2, // Âµg
    copper: 0.02, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "Ráº¥t Ã­t kcal.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 3 },
    kidney: { potassium: 170, phosphorus: 25 },
  },
  {
    id: "muop-khia",
    name: "MÆ°á»›p khÃ­a",
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
    selenium: 0.3, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh/xÃ o",
    notes: "Thanh mÃ¡t.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 150, phosphorus: 30 },
  },
  {
    id: "bau-sao",
    name: "Báº§u sao",
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
    selenium: 0.2, // Âµg
    copper: 0.02, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "Náº¥u canh",
    notes: "Ãt nÄƒng lÆ°á»£ng.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 180, phosphorus: 28 },
  },
  {
    id: "dau-rong",
    name: "Äáº­u rá»“ng (quáº£)",
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
    folate: 66, // Âµg - cao trong Ä‘áº­u
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 14.4, // Phylloquinone - cao trong Ä‘áº­u que
    choline: 15.3, // mg - cao trong Ä‘áº­u
    selenium: 0.6, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "XÃ o/luá»™c",
    notes: "XÆ¡ cao.",
    diabetes: { glycemicIndex: 30, glycemicLoad: 3, carbPerPortion: 9 },
    kidney: { potassium: 304, phosphorus: 52 },
  },
  {
    id: "dau-bap-do",
    name: "Äáº­u báº¯p Ä‘á»",
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
    folate: 60, // Âµg - cao trong Ä‘áº­u báº¯p
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 31.3, // Phylloquinone - cao trong Ä‘áº­u báº¯p
    choline: 12.3, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.8, // mg - cao trong Ä‘áº­u báº¯p
    iodine: 0, // Âµg
    commonServing: "Luá»™c/xÃ o",
    notes: "Cháº¥t nháº§y tá»‘t ruá»™t.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 2, carbPerPortion: 7 },
    kidney: { potassium: 299, phosphorus: 61 },
  },
  {
    id: "ca-phao-tuoi",
    name: "CÃ  phÃ¡o tÆ°Æ¡i",
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
    selenium: 0.2, // Âµg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng/náº¥u",
    notes: "Ãt kcal.",
    diabetes: { glycemicIndex: 20, glycemicLoad: 1, carbPerPortion: 6 },
    kidney: { potassium: 229, phosphorus: 24 },
  },
  {
    id: "dua-gang",
    name: "DÆ°a gang",
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
    selenium: 0.4, // Âµg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n trÃ¡ng miá»‡ng",
    notes: "Ngá»t nháº¹.",
    diabetes: { glycemicIndex: 60, glycemicLoad: 5, carbPerPortion: 8 },
    kidney: { potassium: 228, phosphorus: 17 },
  },
  {
    id: "dua-leo-bao-tu",
    name: "DÆ°a leo bao tá»­",
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
    selenium: 0.3, // Âµg
    copper: 0.04, // mg
    manganese: 0.08, // mg
    iodine: 0, // Âµg
    commonServing: "Ä‚n sá»‘ng",
    notes: "Nhiá»u nÆ°á»›c.",
    diabetes: { glycemicIndex: 15, glycemicLoad: 1, carbPerPortion: 4 },
    kidney: { potassium: 147, phosphorus: 24 },
  },
  // ========== Bá»” SUNG THá»°C PHáº¨M Má»šI - NHÃ“M NGÅ¨ Cá»C & TINH Bá»˜T ==========
  {
    id: "gao-nep",
    name: "Gáº¡o náº¿p",
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
    selenium: 5.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t vá»«a (150g)",
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
      { unit: 'bat', weight: 150, description: '1 bÃ¡t vá»«a' },
    ],
  },
  {
    id: "gao-lut-do",
    name: "Gáº¡o lá»©t Ä‘á»",
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
    vitaminB3: 2.8, // Niacin - cao trong gáº¡o lá»©t Ä‘á»
    vitaminB5: 0.7, // Pantothenic acid - cao trong gáº¡o lá»©t Ä‘á»
    vitaminB6: 0.35,
    vitaminB7: 0, // Biotin
    folate: 12,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.6, // Phylloquinone
    choline: 10.0, // mg
    selenium: 10.5, // Âµg - cao trong gáº¡o lá»©t Ä‘á»
    copper: 0.12, // mg
    manganese: 1.1, // mg - cao trong gáº¡o lá»©t Ä‘á»
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t vá»«a (150g)",
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
      { unit: 'bat', weight: 150, description: '1 bÃ¡t vá»«a' },
    ],
  },
  {
    id: "bun-tuoi",
    name: "BÃºn tÆ°Æ¡i",
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
    selenium: 3.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (100g)",
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
      { unit: 'bo', weight: 100, description: '1 bÃ³ bÃºn' },
    ],
  },
  {
    id: "bun-tau",
    name: "BÃºn tÃ u",
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
    selenium: 0, // Âµg
    copper: 0, // mg
    manganese: 0, // mg
    iodine: 0, // Âµg
    commonServing: "50g khÃ´ (náº¥u thÃ nh ~150g)",
    notes: "BÃºn tÃ u khÃ´, náº¥u lÃªn ná»Ÿ nhiá»u",
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
      { unit: 'bo', weight: 50, description: '50g khÃ´' },
    ],
  },
  {
    id: "mi-tom",
    name: "MÃ¬ tÃ´m",
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
    vitaminB3: 4.0, // Niacin - cao tá»« bá»™t mÃ¬
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 0, // Biotin
    folate: 50,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 10.0, // mg
    selenium: 15.0, // Âµg - cao tá»« bá»™t mÃ¬
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 gÃ³i (80g)",
    notes: "Ráº¥t nhiá»u natri - khÃ´ng tá»‘t cho THA",
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
      { unit: 'goi', weight: 80, description: '1 gÃ³i' },
    ],
  },
  {
    id: "hu-tieu",
    code: "11017",
    name: "Há»§ tiáº¿u",
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
    selenium: 3.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (100g)",
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
      { unit: 'bo', weight: 100, description: '1 pháº§n' },
    ],
  },
  {
    id: "banh-canh",
    name: "BÃ¡nh canh",
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
    selenium: 2.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (100g)",
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
      { unit: 'bo', weight: 100, description: '1 pháº§n' },
    ],
  },
  {
    id: "khoai-lang-tim",
    name: "Khoai lang tÃ­m",
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
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.26, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (150g)",
    notes: "GiÃ u anthocyanin, tá»‘t cho tim máº¡ch",
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
      { unit: 'cai', weight: 150, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "khoai-mon",
    code: "40019",
    name: "Khoai mÃ´n",
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
    selenium: 0.7, // Âµg
    copper: 0.17, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (150g)",
    notes: "Kali ráº¥t cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'cai', weight: 150, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "khoai-so",
    name: "Khoai sá»",
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
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (150g)",
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
      { unit: 'cai', weight: 150, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "san",
    code: "50018",
    name: "Sáº¯n (cá»§ mÃ¬)",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 27,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.19, // Tocopherol
    vitaminK: 1.9, // Phylloquinone
    choline: 23.7, // mg
    selenium: 0.7, // Âµg
    copper: 0.1, // mg
    manganese: 0.4, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (200g)",
    notes: "Nhiá»u tinh bá»™t, cáº§n náº¥u chÃ­n ká»¹",
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
      { unit: 'cai', weight: 200, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "banh-mi-trang",
    name: "BÃ¡nh mÃ¬ tráº¯ng",
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
    vitaminB3: 3.0, // Niacin - cao tá»« bá»™t mÃ¬
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.1,
    vitaminB7: 0, // Biotin
    folate: 100,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 8.0, // mg
    selenium: 20.0, // Âµg - cao tá»« bá»™t mÃ¬
    copper: 0.2, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 á»• (50g)",
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
      { unit: 'o', weight: 50, description: '1 á»•' },
    ],
  },
  {
    id: "banh-mi-nguyen-cam",
    name: "BÃ¡nh mÃ¬ nguyÃªn cÃ¡m",
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
    vitaminB3: 4.0, // Niacin - ráº¥t cao tá»« bá»™t mÃ¬ nguyÃªn cÃ¡m
    vitaminB5: 0.6, // Pantothenic acid - cao tá»« bá»™t mÃ¬ nguyÃªn cÃ¡m
    vitaminB6: 0.3,
    vitaminB7: 0, // Biotin
    folate: 50,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 1.4, // Phylloquinone
    choline: 26.0, // mg - cao tá»« bá»™t mÃ¬ nguyÃªn cÃ¡m
    selenium: 35.0, // Âµg - ráº¥t cao tá»« bá»™t mÃ¬ nguyÃªn cÃ¡m
    copper: 0.3, // mg
    manganese: 2.0, // mg - ráº¥t cao tá»« bá»™t mÃ¬ nguyÃªn cÃ¡m
    iodine: 0, // Âµg
    commonServing: "1 á»• (50g)",
    notes: "Tá»‘t hÆ¡n bÃ¡nh mÃ¬ tráº¯ng - nhiá»u xÆ¡",
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
      { unit: 'o', weight: 50, description: '1 á»•' },
    ],
  },
  // ========== Bá»” SUNG THá»°C PHáº¨M Má»šI - NHÃ“M THá»ŠT & Háº¢I Sáº¢N ==========
  {
    id: "thit-ba-chi",
    code: "20014",
    name: "Thá»‹t ba chá»‰",
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
    vitaminB3: 4.5, // Niacin - cao trong thá»‹t heo
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.3,
    vitaminB7: 4.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 60.0, // mg - cao trong thá»‹t heo
    selenium: 20.0, // Âµg - cao trong thá»‹t heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (50g)",
    notes: "Nhiá»u cháº¥t bÃ©o bÃ£o hÃ²a - háº¡n cháº¿ cho tim máº¡ch",
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
      { unit: 'mieng', weight: 50, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "thit-nac-vai",
    name: "Thá»‹t náº¡c vai",
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
    vitaminB3: 5.5, // Niacin - cao trong thá»‹t heo
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.4,
    vitaminB7: 5.0, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 0.6,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 70.0, // mg - cao trong thá»‹t heo
    selenium: 22.0, // Âµg - cao trong thá»‹t heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (100g)",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "suon-non",
    name: "SÆ°á»n non",
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
    vitaminB3: 5.0, // Niacin - cao trong thá»‹t heo
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 4.5, // Biotin (Âµg)
    folate: 6,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65.0, // mg - cao trong thá»‹t heo
    selenium: 21.0, // Âµg - cao trong thá»‹t heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (80g)",
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
      { unit: 'mieng', weight: 80, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "chan-gio",
    name: "ChÃ¢n giÃ²",
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
    vitaminB3: 5.2, // Niacin - cao trong thá»‹t heo
    vitaminB5: 0.75, // Pantothenic acid
    vitaminB6: 0.38,
    vitaminB7: 5.0, // Biotin (Âµg)
    folate: 7,
    vitaminB12: 0.55,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 72.0, // mg - cao trong thá»‹t heo
    selenium: 23.0, // Âµg - cao trong thá»‹t heo
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (100g)",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "thit-bo-nac",
    name: "Thá»‹t bÃ² náº¡c",
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
    vitaminB3: 4.5, // Niacin - cao trong thá»‹t bÃ²
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.4,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 9,
    vitaminB12: 2.0, // Âµg - cao trong thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 82.0, // mg - cao trong thá»‹t bÃ²
    selenium: 14.2, // Âµg - cao trong thá»‹t bÃ²
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (100g)",
    notes: "GiÃ u sáº¯t vÃ  káº½m",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "thit-bo-gan",
    name: "Thá»‹t bÃ² gÃ¢n",
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
    vitaminB3: 3.5, // Niacin - tá»« thá»‹t bÃ²
    vitaminB5: 0.4, // Pantothenic acid
    vitaminB6: 0.2,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 1.5, // Âµg - cao tá»« thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 50.0, // mg - tá»« thá»‹t bÃ²
    selenium: 12.0, // Âµg - tá»« thá»‹t bÃ²
    copper: 0.08, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (80g)",
    notes: "Nhiá»u collagen",
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
      { unit: 'mieng', weight: 80, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "bap-bo",
    name: "Báº¯p bÃ²",
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
    vitaminB3: 4.8, // Niacin - cao trong thá»‹t bÃ²
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.42,
    vitaminB7: 3.2, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 2.2, // Âµg - ráº¥t cao trong thá»‹t bÃ²
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 1.2, // Phylloquinone
    choline: 85.0, // mg - cao trong thá»‹t bÃ²
    selenium: 15.0, // Âµg - cao trong thá»‹t bÃ²
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (100g)",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "uc-ga",
    code: "20094",
    name: "á»¨c gÃ ",
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
    vitaminB3: 8.0, // Niacin - ráº¥t cao trong á»©c gÃ 
    vitaminB5: 1.0, // Pantothenic acid - cao trong á»©c gÃ 
    vitaminB6: 0.64, // mg - cao trong á»©c gÃ 
    vitaminB7: 4.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.3,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 65.0, // mg - cao trong á»©c gÃ 
    selenium: 18.0, // Âµg - cao trong á»©c gÃ 
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (100g)",
    notes: "Nhiá»u Ä‘áº¡m, Ã­t bÃ©o - tá»‘t cho tim máº¡ch",
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
      { unit: 'mieng', weight: 100, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "dui-ga",
    code: "20095",
    name: "ÄÃ¹i gÃ ",
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
    vitaminB3: 7.5, // Niacin - cao trong Ä‘Ã¹i gÃ 
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.51,
    vitaminB7: 3.5, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.4,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 60.0, // mg - cao trong Ä‘Ã¹i gÃ 
    selenium: 16.0, // Âµg - cao trong Ä‘Ã¹i gÃ 
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 Ä‘Ã¹i (80g)",
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
      { unit: 'cai', weight: 80, description: '1 Ä‘Ã¹i' },
    ],
  },
  {
    id: "dui-toi-ga",
    code: "20096",
    name: "ÄÃ¹i tá»i gÃ ",
    nameEn: "Chicken drumstick",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 210,
    protein: 24.0,
    carbs: 0.0,
    fat: 11.5,
    fiber: 0.0,
    water: 62.0,
    sodium: 95,
    potassium: 235,
    calcium: 12,
    iron: 1.3,
    phosphorus: 190,
    magnesium: 22,
    zinc: 2.0,
    cholesterol: 120,
    vitaminB1: 0.07,
    vitaminB2: 0.13,
    vitaminB3: 7.0, // Niacin - cao trong Ä‘Ã¹i gÃ 
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.48,
    vitaminB7: 3.5, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.4, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 58.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 chiáº¿c (~90â€“110g thá»‹t + da)",
    notes: "Pháº§n cáº³ng Ä‘Ã¹i (drumstick); phá»• biáº¿n khi chiÃªn/nÆ°á»›ng.",
    gout: {
      purine: 138,
      purineLevel: "medium",
    },
    kidney: {
      potassium: 235,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 120,
      saturatedFat: 3.3,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 100, description: '1 chiáº¿c Ä‘Ã¹i tá»i' },
    ],
  },
  {
    id: "dui-goc-tu-ga",
    code: "20097",
    name: "ÄÃ¹i gÃ³c tÆ° gÃ ",
    nameEn: "Chicken leg quarter",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 215,
    protein: 23.0,
    carbs: 0.0,
    fat: 12.5,
    fiber: 0.0,
    water: 61.0,
    sodium: 95,
    potassium: 235,
    calcium: 12,
    iron: 1.3,
    phosphorus: 190,
    magnesium: 22,
    zinc: 2.0,
    cholesterol: 125,
    vitaminB1: 0.07,
    vitaminB2: 0.13,
    vitaminB3: 7.2, // Niacin - cao trong Ä‘Ã¹i gÃ 
    vitaminB5: 0.9, // Pantothenic acid
    vitaminB6: 0.49,
    vitaminB7: 3.5, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.4, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 59.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 gÃ³c tÆ° (~200â€“250g cáº£ xÆ°Æ¡ng/da)",
    notes: "Káº¿t há»£p Ä‘Ã¹i + tá»i; dÃ¹ng trong cÆ¡m gÃ /Ä‘Ã¹i gÃ  nÆ°á»›ng.",
    gout: {
      purine: 138,
      purineLevel: "medium",
    },
    kidney: {
      potassium: 235,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 125,
      saturatedFat: 3.4,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 225, description: '1 gÃ³c tÆ°' },
    ],
  },
  {
    id: "canh-ga",
    code: "20098",
    name: "CÃ¡nh gÃ ",
    nameEn: "Chicken wing (whole)",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 203,
    protein: 20.0,
    carbs: 0.0,
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
    vitaminB3: 6.5, // Niacin - cao trong cÃ¡nh gÃ 
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.45,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.35,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 55.0, // mg - cao trong cÃ¡nh gÃ 
    selenium: 15.0, // Âµg - cao trong cÃ¡nh gÃ 
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 cÃ¡nh (50g)",
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
      { unit: 'cai', weight: 50, description: '1 cÃ¡nh' },
    ],
  },
  {
    id: "canh-giua-ga",
    code: "20099",
    name: "CÃ¡nh giá»¯a gÃ ",
    nameEn: "Chicken wingette",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 210,
    protein: 21.0,
    carbs: 0.0,
    fat: 14.0,
    fiber: 0.0,
    water: 63.0,
    sodium: 90,
    potassium: 210,
    calcium: 12,
    iron: 1.2,
    phosphorus: 185,
    magnesium: 21,
    zinc: 1.9,
    cholesterol: 115,
    vitaminB1: 0.05,
    vitaminB2: 0.1,
    vitaminB3: 6.8, // Niacin
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.46,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.35, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 56.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "3â€“4 miáº¿ng cÃ¡nh giá»¯a (~100g)",
    notes: "Pháº§n giá»¯a cÃ¡nh; tá»· lá»‡ da/má»¡ cao.",
    gout: {
      purine: 135,
      purineLevel: "medium",
    },
    kidney: {
      potassium: 210,
      phosphorus: 185,
    },
    cardiovascular: {
      cholesterol: 115,
      saturatedFat: 4.6,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 25, description: '1 miáº¿ng cÃ¡nh giá»¯a' },
    ],
  },
  {
    id: "canh-dau-ga",
    code: "20100",
    name: "CÃ¡nh Ä‘áº§u gÃ ",
    nameEn: "Chicken drumette",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 210,
    protein: 22.0,
    carbs: 0.0,
    fat: 13.0,
    fiber: 0.0,
    water: 63.0,
    sodium: 90,
    potassium: 215,
    calcium: 12,
    iron: 1.2,
    phosphorus: 185,
    magnesium: 21,
    zinc: 1.9,
    cholesterol: 115,
    vitaminB1: 0.05,
    vitaminB2: 0.1,
    vitaminB3: 7.0, // Niacin
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.47,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.35, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 57.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "3â€“4 drumettes (~100g)",
    notes: "Äáº§u cÃ¡nh, gáº§n thÃ¢n; nhiá»u thá»‹t hÆ¡n cÃ¡nh giá»¯a.",
    gout: {
      purine: 135,
      purineLevel: "medium",
    },
    kidney: {
      potassium: 215,
      phosphorus: 185,
    },
    cardiovascular: {
      cholesterol: 115,
      saturatedFat: 4.3,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 30, description: '1 drumette' },
    ],
  },
  {
    id: "co-ga",
    code: "20101",
    name: "Cá»• gÃ ",
    nameEn: "Chicken neck",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 220,
    protein: 18.0,
    carbs: 0.0,
    fat: 16.0,
    fiber: 0.0,
    water: 62.0,
    sodium: 90,
    potassium: 210,
    calcium: 40,
    iron: 2.0,
    phosphorus: 190,
    magnesium: 22,
    zinc: 2.0,
    cholesterol: 130,
    vitaminB1: 0.06,
    vitaminB2: 0.12,
    vitaminB3: 6.5, // Niacin
    vitaminB5: 0.8, // Pantothenic acid
    vitaminB6: 0.44,
    vitaminB7: 3.0, // Biotin (Âµg)
    folate: 4,
    vitaminB12: 0.35, // Âµg
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 55.0, // mg
    selenium: 15.0, // Âµg
    copper: 0.04, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 cá»• nhá» (~100g thá»‹t + da)",
    notes: "Nhiá»u da/xÆ°Æ¡ng; hay dÃ¹ng náº¥u nÆ°á»›c dÃ¹ng.",
    gout: {
      purine: 135,
      purineLevel: "medium",
    },
    kidney: {
      potassium: 210,
      phosphorus: 190,
    },
    cardiovascular: {
      cholesterol: 130,
      saturatedFat: 4.5,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 35, description: '1 cá»• gÃ ' },
    ],
  },
  {
    id: "gan-ga",
    code: "20104",
    name: "Gan gÃ ",
    nameEn: "Chicken liver",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 167,
    protein: 24.0,
    carbs: 1.0,
    fat: 7.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 82,
    potassium: 230,
    calcium: 12,
    iron: 9.0,
    phosphorus: 297,
    magnesium: 24,
    zinc: 3.0,
    vitaminA: 4000, // IU - ráº¥t cao trong gan
    cholesterol: 345,
    vitaminB1: 0.30,
    vitaminB2: 1.80,
    vitaminB3: 10.0, // Niacin - ráº¥t cao trong gan
    vitaminB5: 6.0, // Pantothenic acid - ráº¥t cao
    vitaminB6: 0.85,
    vitaminB7: 35.0, // Biotin (Âµg) - ráº¥t cao
    folate: 588, // Âµg - ráº¥t cao
    vitaminB12: 16.6, // Âµg - ráº¥t cao
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 290.0, // mg - ráº¥t cao
    selenium: 55.0, // Âµg - ráº¥t cao
    copper: 0.4, // mg - cao
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "100g",
    notes: "Ráº¥t giÃ u vitamin A, sáº¯t, folate, B12 vÃ  cholesterol; ngÆ°á»i gÃºt/tim máº¡ch cáº§n háº¡n cháº¿.",
    gout: {
      purine: 300,
      purineLevel: "high",
    },
    kidney: {
      potassium: 230,
      phosphorus: 297,
    },
    cardiovascular: {
      cholesterol: 345,
      saturatedFat: 2.2,
    },
    vietnameseUnits: [
      { unit: 'mieng', weight: 50, description: '1 miáº¿ng gan' },
    ],
  },
  {
    id: "me-ga",
    code: "20105",
    name: "Má» gÃ ",
    nameEn: "Chicken gizzard",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 155,
    protein: 18.0,
    carbs: 0.0,
    fat: 8.0,
    fiber: 0.0,
    water: 72.0,
    sodium: 69,
    potassium: 237,
    calcium: 11,
    iron: 2.5,
    phosphorus: 173,
    magnesium: 25,
    zinc: 2.4,
    cholesterol: 215,
    vitaminB1: 0.05,
    vitaminB2: 0.15,
    vitaminB3: 3.5, // Niacin
    vitaminB5: 0.7, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.5, // Âµg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 50.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "100g",
    notes: "GiÃ u protein, cholesterol vá»«a; hay dÃ¹ng xÃ o/háº§m.",
    gout: {
      purine: 150,
      purineLevel: "high",
    },
    kidney: {
      potassium: 237,
      phosphorus: 173,
    },
    cardiovascular: {
      cholesterol: 215,
      saturatedFat: 2.3,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 50, description: '1 má» gÃ ' },
    ],
  },
  {
    id: "tim-ga",
    code: "20106",
    name: "Tim gÃ ",
    nameEn: "Chicken heart",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 185,
    protein: 26.0,
    carbs: 0.0,
    fat: 8.0,
    fiber: 0.0,
    water: 70.0,
    sodium: 90,
    potassium: 260,
    calcium: 14,
    iron: 6.0,
    phosphorus: 240,
    magnesium: 24,
    zinc: 3.5,
    cholesterol: 242,
    vitaminB1: 0.15,
    vitaminB2: 0.50,
    vitaminB3: 8.0, // Niacin - cao trong tim
    vitaminB5: 2.0, // Pantothenic acid - cao
    vitaminB6: 0.40,
    vitaminB7: 6.0, // Biotin (Âµg) - cao
    folate: 20,
    vitaminB12: 7.3, // Âµg - ráº¥t cao trong tim
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 200.0, // mg - ráº¥t cao trong tim
    selenium: 30.0, // Âµg - cao
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "100g (nhiá»u trÃ¡i tim nhá»)",
    notes: "Ná»™i táº¡ng giÃ u sáº¯t, vitamin B12, choline vÃ  cholesterol.",
    gout: {
      purine: 200,
      purineLevel: "high",
    },
    kidney: {
      potassium: 260,
      phosphorus: 240,
    },
    cardiovascular: {
      cholesterol: 242,
      saturatedFat: 2.2,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 10, description: '1 trÃ¡i tim' },
    ],
  },
  {
    id: "chan-ga",
    code: "20107",
    name: "ChÃ¢n gÃ ",
    nameEn: "Chicken feet",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 215,
    protein: 19.0,
    carbs: 0.0,
    fat: 15.0,
    fiber: 0.0,
    water: 65.0,
    sodium: 85,
    potassium: 200,
    calcium: 80,
    iron: 1.5,
    phosphorus: 150,
    magnesium: 20,
    zinc: 1.8,
    cholesterol: 100,
    vitaminB1: 0.05,
    vitaminB2: 0.10,
    vitaminB3: 3.0, // Niacin
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.15,
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 3,
    vitaminB12: 0.3, // Âµg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 40.0, // mg
    selenium: 10.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "2â€“3 chÃ¢n (~100g)",
    notes: "Nhiá»u collagen, canxi tá»« xÆ°Æ¡ng; hay dÃ¹ng háº§m.",
    gout: {
      purine: 150,
      purineLevel: "high",
    },
    kidney: {
      potassium: 200,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 100,
      saturatedFat: 4.2,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 35, description: '1 chÃ¢n gÃ ' },
    ],
  },
  {
    id: "long-ga",
    code: "20103",
    name: "LÃ²ng gÃ  (ná»™i táº¡ng)",
    nameEn: "Chicken offal (mixed)",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 190,
    protein: 23.0,
    carbs: 0.0,
    fat: 10.0,
    fiber: 0.0,
    water: 68.0,
    sodium: 90,
    potassium: 260,
    calcium: 16,
    iron: 8.0,
    phosphorus: 260,
    magnesium: 28,
    zinc: 4.0,
    cholesterol: 300,
    vitaminB1: 0.20,
    vitaminB2: 1.20,
    vitaminB3: 8.0, // Niacin - cao
    vitaminB5: 3.0, // Pantothenic acid - cao
    vitaminB6: 0.50,
    vitaminB7: 15.0, // Biotin (Âµg) - cao
    folate: 200,
    vitaminB12: 8.0, // Âµg - ráº¥t cao
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 180.0, // mg - cao
    selenium: 35.0, // Âµg - cao
    copper: 0.3, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "100g",
    notes: "Bao gá»“m gan/má»/tim/ruá»™t non; ráº¥t giÃ u cholesterol vÃ  purine.",
    gout: {
      purine: 300,
      purineLevel: "high",
    },
    kidney: {
      potassium: 260,
      phosphorus: 260,
    },
    cardiovascular: {
      cholesterol: 300,
      saturatedFat: 3.0,
    },
    vietnameseUnits: [
      { unit: 'dia', weight: 100, description: '1 pháº§n lÃ²ng gÃ ' },
    ],
  },
  {
    id: "dau-ga",
    code: "20100",
    name: "Äáº§u gÃ ",
    nameEn: "Chicken head",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 200,
    protein: 16.0,
    carbs: 0.0,
    fat: 15.0,
    fiber: 0.0,
    water: 65.0,
    sodium: 85,
    potassium: 200,
    calcium: 50,
    iron: 2.0,
    phosphorus: 150,
    magnesium: 20,
    zinc: 2.0,
    cholesterol: 120,
    vitaminB1: 0.05,
    vitaminB2: 0.10,
    vitaminB3: 3.5, // Niacin
    vitaminB5: 0.6, // Pantothenic acid
    vitaminB6: 0.20,
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 0.5, // Âµg
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 50.0, // mg
    selenium: 12.0, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1â€“2 Ä‘áº§u (~100g)",
    notes: "Nhiá»u xÆ°Æ¡ng, Ã­t thá»‹t; hay dÃ¹ng náº¥u nÆ°á»›c dÃ¹ng.",
    gout: {
      purine: 150,
      purineLevel: "high",
    },
    kidney: {
      potassium: 200,
      phosphorus: 150,
    },
    cardiovascular: {
      cholesterol: 120,
      saturatedFat: 4.3,
    },
    vietnameseUnits: [
      { unit: 'cai', weight: 50, description: '1 Ä‘áº§u gÃ ' },
    ],
  },
  {
    id: "da-ga",
    code: "20102",
    name: "Da gÃ ",
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
    notes: "Ráº¥t nhiá»u cháº¥t bÃ©o bÃ£o hÃ²a - nÃªn trÃ¡nh cho tim máº¡ch",
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
    code: "11044",
    name: "CÃ¡ lÃ³c",
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
    commonServing: "1 khÃºc (150g)",
    notes: "CÃ¡ nÆ°á»›c ngá»t, Ã­t bÃ©o",
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
      { unit: 'mieng', weight: 150, description: '1 khÃºc' },
    ],
  },
  {
    id: "ca-tram",
    code: "30014",
    name: "CÃ¡ tráº¯m",
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
    commonServing: "1 khÃºc (150g)",
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
      { unit: 'mieng', weight: 150, description: '1 khÃºc' },
    ],
  },
  {
    id: "ca-ro",
    code: "30003",
    name: "CÃ¡ rÃ´",
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
    commonServing: "1 con vá»«a (100g)",
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
      { unit: 'con', weight: 100, description: '1 con vá»«a' },
    ],
  },
  {
    id: "ca-tra",
    code: "30014",
    name: "CÃ¡ tra",
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
    commonServing: "1 khÃºc (150g)",
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
      { unit: 'mieng', weight: 150, description: '1 khÃºc' },
    ],
  },
  {
    id: "ca-hoi",
    name: "CÃ¡ há»“i",
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
    vitaminB3: 7.5, // Niacin - ráº¥t cao trong cÃ¡ há»“i
    vitaminB5: 1.6, // Pantothenic acid - cao trong cÃ¡ há»“i
    vitaminB6: 0.82, // mg - ráº¥t cao trong cÃ¡ há»“i
    vitaminB7: 5.0, // Biotin (Âµg)
    folate: 25, // Âµg
    vitaminB12: 3.2, // Âµg - ráº¥t cao trong cÃ¡ há»“i
    vitaminD: 988, // IU - ráº¥t cao trong cÃ¡ há»“i
    vitaminE: 1.1, // Tocopherol - cao trong cÃ¡ há»“i
    vitaminK: 0.1, // Phylloquinone
    choline: 90, // mg - cao trong cÃ¡ há»“i
    selenium: 36.5, // Âµg - ráº¥t cao trong cÃ¡ há»“i
    copper: 0.25, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 khÃºc (150g)",
    notes: "GiÃ u omega-3, tá»‘t cho tim máº¡ch",
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
      { unit: 'mieng', weight: 150, description: '1 khÃºc' },
    ],
  },
  {
    id: "tom-su",
    code: "30028",
    name: "TÃ´m sÃº",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 16, // Âµg
    vitaminB12: 1.1, // Âµg - cao trong tÃ´m
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol - cao trong tÃ´m
    vitaminK: 0.1, // Phylloquinone
    choline: 70, // mg - cao trong tÃ´m
    selenium: 30.0, // Âµg - cao trong tÃ´m
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 con lá»›n (30g)",
    notes: "Nhiá»u Ä‘áº¡m, Ã­t bÃ©o",
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
      { unit: 'con', weight: 30, description: '1 con lá»›n' },
    ],
  },
  {
    id: "tom-the",
    code: "30029",
    name: "TÃ´m tháº»",
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
    vitaminB7: 1.0, // Biotin (Âµg)
    folate: 12,
    vitaminB12: 0.9,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 65, // mg
    selenium: 28.0, // Âµg - cao trong tÃ´m
    copper: 0.2, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg (tÃ´m nÆ°á»›c ngá»t)
    commonServing: "10 con vá»«a (100g)",
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
      { unit: 'con', weight: 10, description: '10 con vá»«a' },
    ],
  },
  {
    id: "cua-bien",
    code: "30012",
    name: "Cua biá»ƒn",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 51,
    vitaminB12: 3.3,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 80, // mg - cao trong cua
    selenium: 37.0, // Âµg - ráº¥t cao trong cua
    copper: 0.6, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 50, // Âµg - cao trong háº£i sáº£n
    commonServing: "1 con vá»«a (200g)",
    notes: "Natri cao - cáº©n tháº­n vá»›i THA",
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
      { unit: 'con', weight: 200, description: '1 con vá»«a' },
    ],
  },
  {
    id: "cua-dong",
    code: "30031",
    name: "Cua Ä‘á»“ng",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 45,
    vitaminB12: 2.8,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 32.0, // Âµg - cao trong cua
    copper: 0.5, // mg - cao trong cua
    manganese: 0.1, // mg
    iodine: 5, // Âµg (cua nÆ°á»›c ngá»t - tháº¥p)
    commonServing: "5-6 con (100g)",
    notes: "Nhiá»u canxi",
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
    code: "30032",
    name: "Gháº¹",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 48,
    vitaminB12: 3.1,
    vitaminD: 0,
    vitaminE: 0.4, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 75, // mg
    selenium: 35.0, // Âµg - cao trong gháº¹
    copper: 0.5, // mg - cao trong gháº¹
    manganese: 0.1, // mg
    iodine: 48, // Âµg - cao trong háº£i sáº£n
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
    name: "Gan lá»£n",
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
    vitaminB3: 13.0, // Niacin - ráº¥t cao trong gan
    vitaminB5: 6.0, // Pantothenic acid - ráº¥t cao trong gan
    vitaminB6: 0.52,
    vitaminB7: 35.0, // Biotin (Âµg) - ráº¥t cao trong gan
    folate: 163,
    vitaminB12: 26,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 3.0, // Phylloquinone
    choline: 330, // mg - ráº¥t cao trong gan
    selenium: 40.0, // Âµg - ráº¥t cao trong gan
    copper: 0.6, // mg - cao trong gan
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (50g)",
    notes: "Ráº¥t nhiá»u sáº¯t, vitamin A - nhÆ°ng purin ráº¥t cao, trÃ¡nh cho bá»‡nh gÃºt",
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
      { unit: 'mieng', weight: 50, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "than-lon",
    name: "Tháº­n lá»£n",
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
    vitaminB3: 8.0, // Niacin - cao trong tháº­n
    vitaminB5: 3.0, // Pantothenic acid - cao trong tháº­n
    vitaminB6: 0.4,
    vitaminB7: 25.0, // Biotin (Âµg) - cao trong tháº­n
    folate: 50,
    vitaminB12: 15,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 250, // mg - ráº¥t cao trong tháº­n
    selenium: 30.0, // Âµg - cao trong tháº­n
    copper: 0.4, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (80g)",
    notes: "Purin ráº¥t cao - trÃ¡nh cho bá»‡nh gÃºt",
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
      { unit: 'qua', weight: 80, description: '1 quáº£' },
    ],
  },
  {
    id: "tim-lon",
    name: "Tim lá»£n",
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
    vitaminB7: 10.0, // Biotin (Âµg)
    folate: 5,
    vitaminB12: 1.5,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 150, // mg - cao trong tim
    selenium: 25.0, // Âµg - cao trong tim
    copper: 0.3, // mg
    manganese: 0.05, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ (100g)",
    notes: "Purin cao - háº¡n cháº¿ cho bá»‡nh gÃºt",
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
      { unit: 'qua', weight: 100, description: '1 quáº£' },
    ],
  },
  {
    id: "long-lon",
    name: "LÃ²ng lá»£n",
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
    vitaminB7: 2.0, // Biotin (Âµg)
    folate: 2,
    vitaminB12: 0.5,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0.0, // Phylloquinone
    choline: 50, // mg
    selenium: 10.0, // Âµg
    copper: 0.1, // mg
    manganese: 0.01, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (100g)",
    notes: "Nhiá»u cháº¥t bÃ©o, cholesterol cao",
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
      { unit: 'mieng', weight: 100, description: '1 pháº§n' },
    ],
  },
  // ========== Bá»” SUNG THá»°C PHáº¨M Má»šI - NHÃ“M RAU Cá»¦ ==========
  {
    id: "rau-muong",
    code: "40001",
    name: "Rau muá»‘ng",
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
    vitaminK: 302, // Phylloquinone - ráº¥t cao trong rau lÃ¡ xanh
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 má»› (200g)",
    notes: "GiÃ u vitamin A, C - nhÆ°ng kali cao",
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
      { unit: 'mo', weight: 200, description: '1 má»›' },
    ],
  },
  {
    id: "rau-ngot",
    code: "11011",
    name: "Rau ngÃ³t",
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
    folate: 194, // Âµg - ráº¥t cao trong rau ngÃ³t
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 419, // Phylloquinone - ráº¥t cao trong rau ngÃ³t
    choline: 20.1, // mg
    selenium: 0.8, // Âµg
    copper: 0.2, // mg
    manganese: 0.6, // mg
    iodine: 0, // Âµg
    commonServing: "1 má»› (150g)",
    notes: "Kali ráº¥t cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'mo', weight: 150, description: '1 má»›' },
    ],
  },
  {
    id: "rau-den",
    code: "40015",
    name: "Rau dá»n",
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
    folate: 85, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 1.0, // Tocopherol
    vitaminK: 1140, // Phylloquinone - ráº¥t cao trong rau dá»n
    choline: 6.9, // mg
    selenium: 0.9, // Âµg
    copper: 0.2, // mg
    manganese: 0.9, // mg - cao trong rau dá»n
    iodine: 0, // Âµg
    commonServing: "1 má»› (150g)",
    notes: "Kali ráº¥t cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'mo', weight: 150, description: '1 má»›' },
    ],
  },
  {
    id: "rau-cai",
    code: "40008",
    name: "Rau cáº£i",
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
    folate: 57, // Âµg - cao trong rau lÃ¡ xanh
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.6, // Tocopherol
    vitaminK: 257, // Phylloquinone - ráº¥t cao trong rau cáº£i
    choline: 19.5, // mg
    selenium: 0.8, // Âµg
    copper: 0.1, // mg
    manganese: 0.5, // mg
    iodine: 0, // Âµg
    commonServing: "1 má»› (150g)",
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
      { unit: 'mo', weight: 150, description: '1 má»›' },
    ],
  },
  {
    id: "rau-mong-toi",
    name: "Rau má»“ng tÆ¡i",
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
    vitaminK: 302, // Phylloquinone - cao trong rau lÃ¡ xanh
    choline: 6.0, // mg
    selenium: 0.8, // Âµg
    copper: 0.1, // mg
    manganese: 0.3, // mg
    iodine: 0, // Âµg
    commonServing: "1 má»› (150g)",
    notes: "GiÃ u vitamin A, C",
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
      { unit: 'mo', weight: 150, description: '1 má»›' },
    ],
  },
  {
    id: "cu-cai",
    name: "Cá»§ cáº£i",
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
    folate: 25, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 1.3, // Phylloquinone
    choline: 6.5, // mg
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ (100g)",
    notes: "Ãt kcal, nhiá»u nÆ°á»›c",
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
      { unit: 'cai', weight: 100, description: '1 cá»§' },
    ],
  },
  {
    id: "su-hao",
    name: "Su hÃ o",
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
    folate: 16, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 38.2, // Phylloquinone - cao trong su hÃ o
    choline: 9.2, // mg
    selenium: 0.2, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (150g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'cai', weight: 150, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "bap-cai",
    code: "40005",
    name: "Báº¯p cáº£i",
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
    folate: 43, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 76, // Phylloquinone - cao trong báº¯p cáº£i
    choline: 10.7, // mg
    selenium: 0.3, // Âµg
    copper: 0.02, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 pháº§n (150g)",
    notes: "Kali tháº¥p - tá»‘t cho bá»‡nh tháº­n",
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
      { unit: 'mieng', weight: 150, description: '1 pháº§n' },
    ],
  },
  {
    id: "sup-lo",
    name: "SÃºp lÆ¡",
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
    vitaminB5: 0.7, // Pantothenic acid - cao trong sÃºp lÆ¡
    vitaminB6: 0.18,
    vitaminB7: 1.5, // Biotin (Âµg) - cao trong sÃºp lÆ¡
    folate: 57,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 15.5, // Phylloquinone
    choline: 44.3, // mg - cao trong sÃºp lÆ¡
    selenium: 0.6, // Âµg
    copper: 0.04, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 bÃ´ng vá»«a (200g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'cai', weight: 200, description: '1 bÃ´ng vá»«a' },
    ],
  },
  {
    id: "hanh-tay",
    code: "40057",
    name: "HÃ nh tÃ¢y",
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
    selenium: 0.5, // Âµg
    copper: 0.04, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 cá»§ vá»«a (100g)",
    notes: "Ãt natri - tá»‘t cho THA",
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
      { unit: 'cai', weight: 100, description: '1 cá»§ vá»«a' },
    ],
  },
  {
    id: "toi",
    code: "20096",
    name: "Tá»i",
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
    vitaminB5: 0.6, // Pantothenic acid - cao trong tá»i
    vitaminB6: 1.24, // ráº¥t cao
    vitaminB7: 0, // Biotin
    folate: 3,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 1.7, // Phylloquinone
    choline: 23.2, // mg - cao trong tá»i
    selenium: 14.2, // Âµg - ráº¥t cao trong tá»i
    copper: 0.3, // mg - cao trong tá»i
    manganese: 1.7, // mg - ráº¥t cao trong tá»i
    iodine: 0, // Âµg
    commonServing: "1 tÃ©p (3g)",
    notes: "DÃ¹ng lÃ m gia vá»‹, Ã­t kcal",
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
      { unit: 'tep', weight: 3, description: '1 tÃ©p' },
    ],
  },
  {
    id: "gung",
    code: "11029",
    name: "Gá»«ng",
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
    choline: 28.8, // mg - cao trong gá»«ng
    selenium: 0.7, // Âµg
    copper: 0.23, // mg
    manganese: 0.23, // mg
    iodine: 0, // Âµg
    commonServing: "1 nhÃ¡nh nhá» (10g)",
    notes: "DÃ¹ng lÃ m gia vá»‹",
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
      { unit: 'nhanh', weight: 10, description: '1 nhÃ¡nh nhá»' },
    ],
  },
  {
    id: "nghe",
    code: "30037",
    name: "Nghá»‡",
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
    vitaminE: 4.4, // Tocopherol - ráº¥t cao trong nghá»‡
    vitaminK: 13.4, // Phylloquinone
    choline: 49.2, // mg - cao trong nghá»‡
    selenium: 4.5, // Âµg
    copper: 0.6, // mg - cao trong nghá»‡
    manganese: 2.0, // mg - ráº¥t cao trong nghá»‡
    iodine: 0, // Âµg
    commonServing: "1 cá»§ nhá» (20g)",
    notes: "DÃ¹ng lÃ m gia vá»‹, kali ráº¥t cao",
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
      { unit: 'cai', weight: 20, description: '1 cá»§ nhá»' },
    ],
  },
  {
    id: "dau-xanh",
    code: "60002",
    name: "Äáº­u xanh",
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
    vitaminB5: 1.9, // Pantothenic acid - cao trong Ä‘áº­u
    vitaminB6: 0.38,
    vitaminB7: 0, // Biotin
    folate: 625, // Âµg - ráº¥t cao trong Ä‘áº­u
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.5, // Tocopherol
    vitaminK: 9.0, // Phylloquinone
    choline: 97.9, // mg - cao trong Ä‘áº­u
    selenium: 2.5, // Âµg
    copper: 0.9, // mg - cao trong Ä‘áº­u
    manganese: 1.0, // mg - cao trong Ä‘áº­u
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t chÃ¨ (100g)",
    notes: "Kali vÃ  phá»‘t pho ráº¥t cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'bat', weight: 100, description: '1 bÃ¡t chÃ¨' },
    ],
  },
  {
    id: "dau-den",
    code: "60006",
    name: "Äáº­u Ä‘en",
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
    vitaminB5: 1.8, // Pantothenic acid - cao trong Ä‘áº­u
    vitaminB6: 0.29,
    vitaminB7: 0, // Biotin
    folate: 444, // Âµg - ráº¥t cao trong Ä‘áº­u
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 8.3, // Tocopherol - cao trong Ä‘áº­u phá»¥ng
    vitaminK: 0, // Phylloquinone
    choline: 52.5, // mg - cao trong Ä‘áº­u
    selenium: 7.2, // Âµg
    copper: 1.1, // mg - cao trong Ä‘áº­u
    manganese: 1.9, // mg - cao trong Ä‘áº­u
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t chÃ¨ (100g)",
    notes: "Kali vÃ  phá»‘t pho ráº¥t cao",
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
      { unit: 'bat', weight: 100, description: '1 bÃ¡t chÃ¨' },
    ],
  },
  {
    id: "dau-phung",
    name: "Äáº­u phá»¥ng",
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
    vitaminB3: 12.1, // Niacin - ráº¥t cao trong Ä‘áº­u phá»¥ng
    vitaminB5: 1.8, // Pantothenic acid
    vitaminB6: 0.35,
    vitaminB7: 0, // Biotin
    folate: 240, // Âµg - cao trong Ä‘áº­u
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 8.3, // Tocopherol - ráº¥t cao trong Ä‘áº­u phá»¥ng
    vitaminK: 0, // Phylloquinone
    choline: 52.5, // mg - cao trong Ä‘áº­u
    selenium: 7.2, // Âµg
    copper: 1.1, // mg - cao trong Ä‘áº­u
    manganese: 1.9, // mg - cao trong Ä‘áº­u
    iodine: 0, // Âµg
    commonServing: "1 náº¯m (30g)",
    notes: "Nhiá»u cháº¥t bÃ©o, kali vÃ  phá»‘t pho cao",
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
      { unit: 'nam', weight: 30, description: '1 náº¯m' },
    ],
  },
  {
    id: "dau-nanh",
    code: "80003",
    name: "Äáº­u nÃ nh",
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
    choline: 115.9, // mg - ráº¥t cao trong Ä‘áº­u nÃ nh
    selenium: 17.8, // Âµg - cao trong Ä‘áº­u nÃ nh
    copper: 1.7, // mg - ráº¥t cao trong Ä‘áº­u nÃ nh
    manganese: 2.5, // mg - ráº¥t cao trong Ä‘áº­u nÃ nh
    iodine: 0, // Âµg
    commonServing: "1 bÃ¡t Ä‘áº­u nÃ nh luá»™c (100g)",
    notes: "Kali vÃ  phá»‘t pho ráº¥t cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'bat', weight: 100, description: '1 bÃ¡t' },
    ],
  },
  // ========== Bá»” SUNG THá»°C PHáº¨M Má»šI - NHÃ“M TRÃI CÃ‚Y ==========
  {
    id: "xoai",
    code: "50005",
    name: "XoÃ i",
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
    folate: 43, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.9, // Tocopherol
    vitaminK: 4.2, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.11, // mg
    manganese: 0.06, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ vá»«a (200g)",
    notes: "GI trung bÃ¬nh",
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
      { unit: 'qua', weight: 200, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "chuoi",
    code: "50001",
    name: "Chuá»‘i",
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
    vitaminB6: 0.37, // mg - cao trong chuá»‘i
    vitaminB7: 0, // Biotin
    folate: 20,
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.5, // Phylloquinone
    choline: 9.8, // mg
    selenium: 1.0, // Âµg - cao trong trÃ¡i cÃ¢y
    copper: 0.08, // mg
    manganese: 0.27, // mg - cao trong chuá»‘i
    iodine: 0, // Âµg
    commonServing: "1 quáº£ vá»«a (100g)",
    notes: "Kali cao - cáº©n tháº­n vá»›i bá»‡nh tháº­n",
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
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "du-du",
    code: "50006",
    name: "Äu Ä‘á»§",
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
    selenium: 0.6, // Âµg
    copper: 0.05, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng vá»«a (150g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'mieng', weight: 150, description: '1 miáº¿ng vá»«a' },
    ],
  },
  {
    id: "dua-hau",
    code: "50004",
    name: "DÆ°a háº¥u",
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
    folate: 3, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0.1, // Phylloquinone
    choline: 4.1, // mg
    selenium: 0.4, // Âµg
    copper: 0.04, // mg
    manganese: 0.04, // mg
    iodine: 0, // Âµg
    commonServing: "1 miáº¿ng (200g)",
    notes: "GI cao nhÆ°ng GL tháº¥p do nhiá»u nÆ°á»›c",
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
      { unit: 'mieng', weight: 200, description: '1 miáº¿ng' },
    ],
  },
  {
    id: "mit",
    code: "50011",
    name: "MÃ­t",
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
    folate: 24, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.3, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 0, // mg
    selenium: 0.6, // Âµg
    copper: 0.08, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 mÃºi (50g)",
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
      { unit: 'mui', weight: 50, description: '1 mÃºi' },
    ],
  },
  {
    id: "sau-rieng",
    code: "50012",
    name: "Sáº§u riÃªng",
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
    commonServing: "1 mÃºi (50g)",
    notes: "Nhiá»u kcal, kali cao",
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
      { unit: 'mui', weight: 50, description: '1 mÃºi' },
    ],
  },
  {
    id: "tao",
    code: "50003",
    name: "TÃ¡o",
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
    commonServing: "1 quáº£ vá»«a (150g)",
    notes: "GI tháº¥p, kali tháº¥p - tá»‘t cho Ä‘Ã¡i thÃ¡o Ä‘Æ°á»ng vÃ  bá»‡nh tháº­n",
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
      { unit: 'qua', weight: 150, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "le",
    code: "10001",
    name: "LÃª",
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
    commonServing: "1 quáº£ vá»«a (150g)",
    notes: "GI tháº¥p, kali tháº¥p",
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
      { unit: 'qua', weight: 150, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "cam",
    code: "50002",
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
    commonServing: "1 quáº£ vá»«a (150g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'qua', weight: 150, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "quyt",
    code: "50019",
    name: "QuÃ½t",
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
    commonServing: "1 quáº£ vá»«a (100g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "buoi",
    code: "50010",
    name: "BÆ°á»Ÿi",
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
    folate: 0, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 8.4, // mg
    selenium: 0.1, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "1 mÃºi (100g)",
    notes: "GiÃ u vitamin C, GI tháº¥p",
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
      { unit: 'mui', weight: 100, description: '1 mÃºi' },
    ],
  },
  {
    id: "oi",
    code: "20096",
    name: "á»”i",
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
    vitaminB3: 1.1, // Niacin - cao trong á»•i
    vitaminB5: 0.5, // Pantothenic acid
    vitaminB6: 0.11,
    vitaminB7: 0, // Biotin
    folate: 49, // Âµg
    vitaminB12: 0,
    vitaminD: 0,
    vitaminE: 0.7, // Tocopherol
    vitaminK: 2.6, // Phylloquinone
    choline: 7.6, // mg
    selenium: 0.6, // Âµg
    copper: 0.23, // mg - cao trong á»•i
    manganese: 0.15, // mg
    iodine: 0, // Âµg
    commonServing: "1 quáº£ vá»«a (100g)",
    notes: "Ráº¥t giÃ u vitamin C, kali cao",
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
      { unit: 'qua', weight: 100, description: '1 quáº£ vá»«a' },
    ],
  },
  {
    id: "nhan",
    code: "50029",
    name: "NhÃ£n",
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
    vitaminB2: 0.14, // mg - cao trong nhÃ£n
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
    selenium: 0.1, // Âµg
    copper: 0.2, // mg - cao trong nhÃ£n
    manganese: 0.05, // mg
    iodine: 0, // Âµg
    commonServing: "10 quáº£ (100g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'qua', weight: 10, description: '10 quáº£' },
    ],
  },
  {
    id: "vai",
    code: "20012",
    name: "Váº£i",
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
    selenium: 0.6, // Âµg
    copper: 0.15, // mg
    manganese: 0.05, // mg
    iodine: 0, // Âµg
    commonServing: "10 quáº£ (100g)",
    notes: "GiÃ u vitamin C",
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
      { unit: 'qua', weight: 10, description: '10 quáº£' },
    ],
  },
  {
    id: "chom-chom",
    code: "50014",
    name: "ChÃ´m chÃ´m",
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
    selenium: 0.1, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "5 quáº£ (100g)",
    notes: "Kali tháº¥p - tá»‘t cho bá»‡nh tháº­n",
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
      { unit: 'qua', weight: 20, description: '1 quáº£' },
    ],
  },
  {
    id: "mang-cut",
    code: "50013",
    name: "MÄƒng cá»¥t",
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
    selenium: 0.1, // Âµg
    copper: 0.05, // mg
    manganese: 0.02, // mg
    iodine: 0, // Âµg
    commonServing: "2 quáº£ (100g)",
    notes: "Kali tháº¥p",
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
      { unit: 'qua', weight: 50, description: '1 quáº£' },
    ],
  },
  // ========== Bá»” SUNG THá»°C PHáº¨M Má»šI - NHÃ“M GIA Vá»Š & NÆ¯á»šC CHáº¤M ==========
  {
    id: "nuoc-mam",
    code: "70001",
    name: "NÆ°á»›c máº¯m",
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
    selenium: 2.0, // Âµg
    copper: 0.01, // mg
    manganese: 0.01, // mg
    iodine: 5, // Âµg - tá»« cÃ¡
    commonServing: "1 thÃ¬a canh (15ml)",
    notes: "Natri ráº¥t cao - háº¡n cháº¿ nghiÃªm ngáº·t cho THA",
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
      { unit: 'thia-canh', weight: 15, description: '1 thÃ¬a canh' },
    ],
  },
  {
    id: "nuoc-tuong",
    name: "NÆ°á»›c tÆ°Æ¡ng",
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
    selenium: 0.5, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 thÃ¬a canh (15ml)",
    notes: "Natri ráº¥t cao - háº¡n cháº¿ nghiÃªm ngáº·t cho THA",
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
      { unit: 'thia-canh', weight: 15, description: '1 thÃ¬a canh' },
    ],
  },
  {
    id: "tuong-ot",
    code: "70002",
    name: "TÆ°Æ¡ng á»›t",
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
    selenium: 0.3, // Âµg
    copper: 0.05, // mg
    manganese: 0.1, // mg
    iodine: 0, // Âµg
    commonServing: "1 thÃ¬a cÃ  phÃª (5g)",
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
      { unit: 'thia-ca-phe', weight: 5, description: '1 thÃ¬a cÃ  phÃª' },
    ],
  },
  {
    id: "tuong-den",
    name: "TÆ°Æ¡ng Ä‘en",
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
    selenium: 0.5, // Âµg
    copper: 0.1, // mg
    manganese: 0.2, // mg
    iodine: 0, // Âµg
    commonServing: "1 thÃ¬a canh (15g)",
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
      { unit: 'thia-canh', weight: 15, description: '1 thÃ¬a canh' },
    ],
  },
  {
    id: "mat-ong",
    name: "Máº­t ong",
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
    selenium: 0.8, // Âµg
    copper: 0.04, // mg
    manganese: 0.08, // mg
    iodine: 0, // Âµg
    commonServing: "1 thÃ¬a canh (21g)",
    notes: "GI cao - háº¡n cháº¿ cho Ä‘Ã¡i thÃ¡o Ä‘Æ°á»ng",
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
      { unit: 'thia-canh', weight: 21, description: '1 thÃ¬a canh' },
    ],
  },
  {
    id: "mam-tom",
    code: "70013",
    name: "Máº¯m tÃ´m",
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
    vitaminB7: 0.5, // Biotin (Âµg)
    folate: 10,
    vitaminB12: 1.0,
    vitaminD: 0,
    vitaminE: 0.2, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 5.0, // mg
    selenium: 8.0, // Âµg - cao tá»« tÃ´m
    copper: 0.1, // mg
    manganese: 0.05, // mg
    iodine: 15, // Âµg - cao tá»« tÃ´m
    commonServing: "1 thÃ¬a cÃ  phÃª (5g)",
    notes: "Natri ráº¥t cao - háº¡n cháº¿ nghiÃªm ngáº·t cho THA",
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
      { unit: 'thia-ca-phe', weight: 5, description: '1 thÃ¬a cÃ  phÃª' },
    ],
  },
  {
    id: "mam-nem",
    code: "70012",
    name: "Máº¯m nÃªm",
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
    vitaminB7: 0.3, // Biotin (Âµg)
    folate: 8,
    vitaminB12: 0.8,
    vitaminD: 0,
    vitaminE: 0.1, // Tocopherol
    vitaminK: 0, // Phylloquinone
    choline: 4.0, // mg
    selenium: 6.0, // Âµg - tá»« cÃ¡
    copper: 0.08, // mg
    manganese: 0.04, // mg
    iodine: 12, // Âµg - tá»« cÃ¡
    commonServing: "1 thÃ¬a cÃ  phÃª (5g)",
    notes: "Natri ráº¥t cao",
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
      { unit: 'thia-ca-phe', weight: 5, description: '1 thÃ¬a cÃ  phÃª' },
    ],
  },
];

/**
 * Hợp nhất database:
 * - Ưu tiên dữ liệu chi tiết từ `baseExtendedFoodDatabase`
 * - Bổ sung các món còn thiếu từ `foodDatabase` (food-db.ts)
 * - Đồng bộ `code` theo food-db.ts để tránh gán sai mã
 */
const mergedFoodById = new Map<string, ExtendedFoodItem>();

function scoreExtendedFood(food: ExtendedFoodItem): number {
  const baseScore = Object.values(food).filter(
    (v) => v !== undefined && v !== null
  ).length;
  const diabetesScore = food.diabetes
    ? Object.values(food.diabetes).filter((v) => v !== undefined && v !== null)
        .length
    : 0;
  const goutScore = food.gout
    ? Object.values(food.gout).filter((v) => v !== undefined && v !== null)
        .length
    : 0;
  const kidneyScore = food.kidney
    ? Object.values(food.kidney).filter((v) => v !== undefined && v !== null)
        .length
    : 0;
  const cardioScore = food.cardiovascular
    ? Object.values(food.cardiovascular).filter(
        (v) => v !== undefined && v !== null
      ).length
    : 0;
  const unitsScore = food.vietnameseUnits ? food.vietnameseUnits.length : 0;

  return baseScore + diabetesScore + goutScore + kidneyScore + cardioScore + unitsScore;
}

function mergeFillMissing(
  primary: ExtendedFoodItem,
  secondary: ExtendedFoodItem
): ExtendedFoodItem {
  const out: Record<string, unknown> = { ...primary };
  const sec: Record<string, unknown> = secondary as unknown as Record<string, unknown>;

  for (const key of Object.keys(sec)) {
    const outVal = out[key];
    const secVal = sec[key];

    if (outVal === undefined && secVal !== undefined) {
      out[key] = secVal;
      continue;
    }

    // Merge known nested objects conservatively (fill missing keys only)
    if (
      (key === "diabetes" || key === "gout" || key === "kidney" || key === "cardiovascular") &&
      outVal &&
      secVal &&
      typeof outVal === "object" &&
      typeof secVal === "object" &&
      !Array.isArray(outVal) &&
      !Array.isArray(secVal)
    ) {
      out[key] = { ...(secVal as Record<string, unknown>), ...(outVal as Record<string, unknown>) };
      continue;
    }

    // Prefer the longer vietnameseUnits list if both exist
    if (key === "vietnameseUnits" && Array.isArray(outVal) && Array.isArray(secVal)) {
      if (outVal.length < secVal.length) out[key] = secVal;
    }
  }

  return out as unknown as ExtendedFoodItem;
}

for (const food of baseExtendedFoodDatabase) {
  const existing = mergedFoodById.get(food.id);
  if (!existing) {
    mergedFoodById.set(food.id, food);
    continue;
  }

  // Deduplicate by keeping the richer entry, then fill missing fields from the other.
  const existingScore = scoreExtendedFood(existing);
  const incomingScore = scoreExtendedFood(food);
  const primary = existingScore >= incomingScore ? existing : food;
  const secondary = primary === existing ? food : existing;
  mergedFoodById.set(food.id, mergeFillMissing(primary, secondary));
}

for (const food of foodDatabase) {
  const existing = mergedFoodById.get(food.id);

  if (!existing) {
    mergedFoodById.set(food.id, toExtendedFoodItem(food));
    continue;
  }

  // Đồng bộ code từ food-db (đúng/chuẩn) nếu khác hoặc còn thiếu
  if (food.code && existing.code !== food.code) {
    mergedFoodById.set(food.id, { ...existing, code: food.code });
  }
}

export const extendedFoodDatabase: ExtendedFoodItem[] = Array.from(mergedFoodById.values());

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

/**
 * Convert ExtendedFoodItem to FoodItem (for backward compatibility)
 */
export function toFoodItem(extended: ExtendedFoodItem): import("./food-db").FoodItem {
  return {
    id: extended.id,
    code: extended.code || "",
    name: extended.name,
    nameEn: extended.nameEn,
    category: extended.category,
    servingSize: extended.servingSize,
    servingUnit: extended.servingUnit,
    calories: extended.calories,
    protein: extended.protein,
    carbs: extended.carbs,
    fat: extended.fat,
    sugars: extended.sugars,
    water: extended.water,
    fiber: extended.fiber,
    sodium: extended.sodium,
    potassium: extended.potassium,
    calcium: extended.calcium,
    iron: extended.iron,
    phosphorus: extended.phosphorus,
    magnesium: extended.magnesium,
    zinc: extended.zinc,
    vitaminC: extended.vitaminC,
    vitaminA: extended.vitaminA,
    cholesterol: extended.cholesterol,
    purine: extended.gout?.purine,
    notes: extended.notes,
    commonServing: extended.commonServing,
  };
}

/**
 * Convert FoodItem to ExtendedFoodItem (for migration)
 */
export function toExtendedFoodItem(food: import("./food-db").FoodItem): ExtendedFoodItem {
  return {
    id: food.id,
    code: food.code,
    name: food.name,
    nameEn: food.nameEn,
    category: food.category,
    servingSize: food.servingSize,
    servingUnit: food.servingUnit,
    calories: food.calories,
    protein: food.protein,
    carbs: food.carbs,
    fat: food.fat,
    sugars: food.sugars,
    water: food.water,
    fiber: food.fiber,
    sodium: food.sodium,
    potassium: food.potassium,
    calcium: food.calcium,
    iron: food.iron,
    phosphorus: food.phosphorus,
    magnesium: food.magnesium,
    zinc: food.zinc,
    vitaminC: food.vitaminC,
    vitaminA: food.vitaminA,
    cholesterol: food.cholesterol,
    notes: food.notes,
    commonServing: food.commonServing,
    // Map purine to gout if available
    gout: food.purine ? {
      purine: food.purine,
      purineLevel: food.purine < 50 ? 'low' : food.purine < 150 ? 'medium' : 'high',
    } : undefined,
    // Map potassium/phosphorus to kidney if available
    kidney: (food.potassium !== undefined || food.phosphorus !== undefined) ? {
      potassium: food.potassium || 0,
      phosphorus: food.phosphorus || 0,
    } : undefined,
    // Map cholesterol to cardiovascular if available
    cardiovascular: food.cholesterol !== undefined ? {
      cholesterol: food.cholesterol,
      saturatedFat: 0, // Default, can be updated later
    } : undefined,
  };
}

/**
 * Get food by code (for food-database tool compatibility)
 */
export function getFoodByCode(code: string): ExtendedFoodItem | undefined {
  return extendedFoodDatabase.find((food) => food.code === code);
}

/**
 * Get foods by category (for backward compatibility)
 */
export function getExtendedFoodsByCategory(category: import("./food-db").FoodCategory): ExtendedFoodItem[] {
  return extendedFoodDatabase.filter((food) => food.category === category);
}

/**
 * Get food by ID (for backward compatibility)
 */
export function getExtendedFoodById(id: string): ExtendedFoodItem | undefined {
  return extendedFoodDatabase.find((food) => food.id === id);
}

/**
 * Filter foods by kcal range (for backward compatibility)
 */
export type KcalRange = "all" | "<50" | "50-100" | "100-200" | "200-300" | ">300";

export function filterExtendedFoodsByKcalRange(foods: ExtendedFoodItem[], range: KcalRange): ExtendedFoodItem[] {
  if (range === "all") return foods;

  return foods.filter((food) => {
    const kcal = food.calories;
    switch (range) {
      case "<50":
        return kcal < 50;
      case "50-100":
        return kcal >= 50 && kcal < 100;
      case "100-200":
        return kcal >= 100 && kcal < 200;
      case "200-300":
        return kcal >= 200 && kcal < 300;
      case ">300":
        return kcal >= 300;
      default:
        return true;
    }
  });
}
