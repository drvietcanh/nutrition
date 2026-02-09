/**
 * Vietnamese food database
 * 
 * Nutritional information for Vietnamese foods
 */

export interface FoodItem {
  id: string;
  code: string; // Mã số (ví dụ: "10001") - required for food-database tool
  name: string;
  nameEn?: string;
  category: FoodCategory;
  servingSize: number; // in grams (luôn 100g để chuẩn hóa)
  servingUnit: string; // "g"
  calories: number; // per 100g
  protein: number; // grams per 100g
  carbs: number; // grams per 100g
  fat: number; // grams per 100g
  water?: number; // grams per 100g
  fiber?: number; // grams per 100g
  sodium?: number; // mg per 100g
  potassium?: number; // mg per 100g (K)
  calcium?: number; // mg per 100g (Ca)
  iron?: number; // mg per 100g (Fe)
  phosphorus?: number; // mg per 100g (P)
  magnesium?: number; // mg per 100g (Mg)
  zinc?: number; // mg per 100g (Zn)
  vitaminC?: number; // mg per 100g
  vitaminA?: number; // IU or mcg per 100g
  cholesterol?: number; // mg per 100g
  notes?: string;
  commonServing?: string;
}

export type FoodCategory =
  | "rice-noodles"
  | "meat"
  | "seafood"
  | "vegetables"
  | "fruits"
  | "legumes"
  | "dairy"
  | "condiments"
  | "beverages"
  | "snacks"
  | "soups"
  | "desserts";

export const foodDatabase: FoodItem[] = [
  // Rice & Noodles
  {
    id: "com-trang",
    code: "10001",
    name: "Cơm trắng",
    nameEn: "White rice",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    water: 68.4,
    fiber: 0.4,
    sodium: 1,
    potassium: 35,
    calcium: 8,
    iron: 0.8,
    phosphorus: 33,
    magnesium: 12,
    zinc: 0.4,
    commonServing: "1 bát nhỏ (100g)",
  },
  {
    id: "pho-bo",
    code: "10002",
    name: "Phở bò",
    nameEn: "Beef pho",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 117, // 350/3 normalized to 100g
    protein: 6.7, // 20/3
    carbs: 15, // 45/3
    fat: 2.7, // 8/3
    water: 75,
    fiber: 0.7, // 2/3
    sodium: 400, // 1200/3
    potassium: 80,
    calcium: 15,
    iron: 1.2,
    phosphorus: 50,
    magnesium: 18,
    zinc: 0.8,
    commonServing: "1 tô vừa (300g)",
    notes: "Bao gồm bánh phở, thịt bò, nước dùng",
  },
  {
    id: "bun-cha",
    code: "10003",
    name: "Bún chả",
    nameEn: "Grilled pork with noodles",
    category: "rice-noodles",
    servingSize: 100,
    servingUnit: "g",
    calories: 168, // 420/2.5 normalized to 100g
    protein: 10, // 25/2.5
    carbs: 20, // 50/2.5
    fat: 4.8, // 12/2.5
    water: 65,
    fiber: 0.6, // 1.5/2.5
    sodium: 320, // 800/2.5
    potassium: 120,
    calcium: 20,
    iron: 1.5,
    phosphorus: 60,
    magnesium: 22,
    zinc: 1.2,
    commonServing: "1 phần (250g)",
  },

  // Meat
  {
    id: "thit-heo-nac",
    code: "20001",
    name: "Thịt heo nạc",
    nameEn: "Lean pork",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 143,
    protein: 27,
    carbs: 0,
    fat: 3.5,
    water: 69,
    sodium: 62,
    potassium: 360,
    calcium: 8,
    iron: 0.9,
    phosphorus: 220,
    magnesium: 25,
    zinc: 2.1,
    cholesterol: 62,
    commonServing: "100g (khoảng 1 lòng bàn tay)",
  },
  {
    id: "thit-ga",
    code: "20002",
    name: "Thịt gà",
    nameEn: "Chicken",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 165,
    protein: 31,
    carbs: 0,
    fat: 3.6,
    water: 65,
    sodium: 74,
    potassium: 256,
    calcium: 15,
    iron: 0.9,
    phosphorus: 220,
    magnesium: 28,
    zinc: 1.3,
    cholesterol: 85,
    commonServing: "100g (khoảng 1 lòng bàn tay)",
  },
  {
    id: "thit-bo",
    code: "20003",
    name: "Thịt bò",
    nameEn: "Beef",
    category: "meat",
    servingSize: 100,
    servingUnit: "g",
    calories: 250,
    protein: 26,
    carbs: 0,
    fat: 15,
    water: 58,
    sodium: 72,
    potassium: 315,
    calcium: 18,
    iron: 2.6,
    phosphorus: 198,
    magnesium: 21,
    zinc: 4.8,
    cholesterol: 90,
    commonServing: "100g (khoảng 1 lòng bàn tay)",
  },

  // Seafood
  {
    id: "ca-basa",
    code: "30001",
    name: "Cá basa",
    nameEn: "Basa fish",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 162,
    protein: 18,
    carbs: 0,
    fat: 9,
    water: 72,
    sodium: 45,
    potassium: 280,
    calcium: 15,
    iron: 0.5,
    phosphorus: 200,
    magnesium: 25,
    zinc: 0.8,
    cholesterol: 55,
    commonServing: "100g (1 miếng vừa)",
  },
  {
    id: "tom",
    code: "30002",
    name: "Tôm",
    nameEn: "Shrimp",
    category: "seafood",
    servingSize: 100,
    servingUnit: "g",
    calories: 99,
    protein: 24,
    carbs: 0.2,
    fat: 0.3,
    water: 75,
    sodium: 111,
    potassium: 259,
    calcium: 52,
    iron: 0.3,
    phosphorus: 237,
    magnesium: 37,
    zinc: 1.1,
    cholesterol: 152,
    commonServing: "100g (khoảng 8-10 con vừa)",
  },

  // Vegetables
  {
    id: "rau-muong",
    code: "40001",
    name: "Rau muống",
    nameEn: "Water spinach",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 19,
    protein: 2.6,
    carbs: 3.1,
    fat: 0.2,
    water: 92,
    fiber: 2.1,
    sodium: 79,
    potassium: 312,
    calcium: 77,
    iron: 1.7,
    phosphorus: 39,
    magnesium: 71,
    zinc: 0.4,
    vitaminC: 55,
    vitaminA: 3158,
    commonServing: "100g (1 bó nhỏ)",
  },
  {
    id: "cai-xanh",
    code: "40002",
    name: "Cải xanh",
    nameEn: "Chinese cabbage",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 16,
    protein: 1.5,
    carbs: 3.2,
    fat: 0.2,
    water: 95,
    fiber: 1.2,
    sodium: 65,
    potassium: 252,
    calcium: 105,
    iron: 0.8,
    phosphorus: 37,
    magnesium: 19,
    zinc: 0.2,
    vitaminC: 36,
    vitaminA: 4468,
    commonServing: "100g",
  },
  {
    id: "ca-chua",
    code: "40003",
    name: "Cà chua",
    nameEn: "Tomato",
    category: "vegetables",
    servingSize: 100,
    servingUnit: "g",
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fat: 0.2,
    water: 94,
    fiber: 1.2,
    sodium: 5,
    potassium: 237,
    calcium: 10,
    iron: 0.3,
    phosphorus: 24,
    magnesium: 11,
    zinc: 0.2,
    vitaminC: 14,
    vitaminA: 833,
    commonServing: "100g (1-2 quả vừa)",
  },

  // Fruits
  {
    id: "chuoi",
    code: "50001",
    name: "Chuối",
    nameEn: "Banana",
    category: "fruits",
    servingSize: 100,
    servingUnit: "g",
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fat: 0.3,
    water: 75,
    fiber: 2.6,
    sodium: 1,
    potassium: 358,
    calcium: 5,
    iron: 0.3,
    phosphorus: 22,
    magnesium: 27,
    zinc: 0.2,
    vitaminC: 8.7,
    commonServing: "100g (1 quả vừa)",
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
    water: 87,
    fiber: 2.4,
    sodium: 0,
    potassium: 181,
    calcium: 40,
    iron: 0.1,
    phosphorus: 14,
    magnesium: 10,
    zinc: 0.1,
    vitaminC: 53.2,
    vitaminA: 225,
    commonServing: "100g (1 quả vừa)",
  },

  // Legumes
  {
    id: "dau-phu",
    code: "60001",
    name: "Đậu phụ",
    nameEn: "Tofu",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 76,
    protein: 8,
    carbs: 1.9,
    fat: 4.8,
    water: 85,
    fiber: 0.3,
    sodium: 7,
    potassium: 121,
    calcium: 350,
    iron: 5.4,
    phosphorus: 97,
    magnesium: 30,
    zinc: 0.8,
    commonServing: "100g (1 miếng vừa)",
  },
  {
    id: "dau-xanh",
    code: "60002",
    name: "Đậu xanh",
    nameEn: "Mung beans",
    category: "legumes",
    servingSize: 100,
    servingUnit: "g",
    calories: 347,
    protein: 24,
    carbs: 63,
    fat: 1.2,
    water: 10,
    fiber: 16.3,
    sodium: 15,
    potassium: 1246,
    calcium: 132,
    iron: 6.7,
    phosphorus: 367,
    magnesium: 189,
    zinc: 2.8,
    commonServing: "100g (nấu chín)",
  },

  // Condiments
  {
    id: "nuoc-mam",
    code: "70001",
    name: "Nước mắm",
    nameEn: "Fish sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 53, // 8/15*100 normalized to 100g
    protein: 8.7, // 1.3/15*100
    carbs: 5.3, // 0.8/15*100
    fat: 0,
    water: 85,
    sodium: 10000, // 1500/15*100
    potassium: 200,
    calcium: 20,
    iron: 0.5,
    phosphorus: 50,
    magnesium: 15,
    zinc: 0.3,
    commonServing: "1 muỗng canh (15ml)",
    notes: "Rất nhiều natri - dùng ít cho người tăng huyết áp",
  },
  {
    id: "tuong-ot",
    code: "70002",
    name: "Tương ớt",
    nameEn: "Chili sauce",
    category: "condiments",
    servingSize: 100,
    servingUnit: "g",
    calories: 100, // 15/15*100 normalized to 100g
    protein: 2, // 0.3/15*100
    carbs: 23.3, // 3.5/15*100
    fat: 0.7, // 0.1/15*100
    water: 73,
    sodium: 1333, // 200/15*100
    potassium: 150,
    calcium: 10,
    iron: 0.3,
    phosphorus: 30,
    magnesium: 12,
    zinc: 0.2,
    vitaminC: 33, // 5/15*100
    commonServing: "1 muỗng canh (15g)",
  },
];

/**
 * Search foods by name
 */
export function searchFoods(query: string): FoodItem[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return foodDatabase.filter(
    (food) =>
      food.name.toLowerCase().includes(lowerQuery) ||
      food.nameEn?.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get foods by category
 */
export function getFoodsByCategory(category: FoodCategory): FoodItem[] {
  return foodDatabase.filter((food) => food.category === category);
}

/**
 * Get food by ID
 */
export function getFoodById(id: string): FoodItem | undefined {
  return foodDatabase.find((food) => food.id === id);
}

/**
 * Calculate nutrition for multiple servings
 */
export function calculateNutrition(
  food: FoodItem,
  servings: number
): Omit<FoodItem, "id" | "code" | "name" | "nameEn" | "category" | "notes" | "commonServing"> {
  const multiplier = servings;
  return {
    servingSize: food.servingSize * multiplier,
    servingUnit: food.servingUnit,
    calories: food.calories * multiplier,
    protein: food.protein * multiplier,
    carbs: food.carbs * multiplier,
    fat: food.fat * multiplier,
    water: food.water ? food.water * multiplier : undefined,
    fiber: food.fiber ? food.fiber * multiplier : undefined,
    sodium: food.sodium ? food.sodium * multiplier : undefined,
    potassium: food.potassium ? food.potassium * multiplier : undefined,
    calcium: food.calcium ? food.calcium * multiplier : undefined,
    iron: food.iron ? food.iron * multiplier : undefined,
    phosphorus: food.phosphorus ? food.phosphorus * multiplier : undefined,
    magnesium: food.magnesium ? food.magnesium * multiplier : undefined,
    zinc: food.zinc ? food.zinc * multiplier : undefined,
    vitaminC: food.vitaminC ? food.vitaminC * multiplier : undefined,
    vitaminA: food.vitaminA ? food.vitaminA * multiplier : undefined,
    cholesterol: food.cholesterol ? food.cholesterol * multiplier : undefined,
  };
}

/**
 * Get nutrition values per 100g (already normalized in our database)
 */
export function getNutritionPer100g(food: FoodItem): Omit<FoodItem, "id" | "code" | "name" | "nameEn" | "category" | "notes" | "commonServing"> {
  return {
    servingSize: 100,
    servingUnit: "g",
    calories: food.calories,
    protein: food.protein,
    carbs: food.carbs,
    fat: food.fat,
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
  };
}

/**
 * Filter foods by kcal range
 */
export type KcalRange = "all" | "<50" | "50-100" | "100-200" | "200-300" | ">300";

export function filterFoodsByKcalRange(foods: FoodItem[], range: KcalRange): FoodItem[] {
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
