/**
 * Vietnamese food database
 * 
 * Nutritional information for Vietnamese foods
 */

export interface FoodItem {
  id: string;
  name: string;
  nameEn?: string;
  category: FoodCategory;
  servingSize: number; // in grams
  servingUnit: string;
  calories: number; // per serving
  protein: number; // grams
  carbs: number; // grams
  fat: number; // grams
  fiber?: number; // grams
  sodium?: number; // mg
  calcium?: number; // mg
  iron?: number; // mg
  vitaminC?: number; // mg
  vitaminA?: number; // IU
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
  },
  {
    id: "bun-cha",
    name: "Bún chả",
    nameEn: "Grilled pork with noodles",
    category: "rice-noodles",
    servingSize: 250,
    servingUnit: "g",
    calories: 420,
    protein: 25,
    carbs: 50,
    fat: 12,
    fiber: 1.5,
    sodium: 800,
    commonServing: "1 phần (250g)",
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
  },
  {
    id: "tuong-ot",
    name: "Tương ớt",
    nameEn: "Chili sauce",
    category: "condiments",
    servingSize: 15,
    servingUnit: "g",
    calories: 15,
    protein: 0.3,
    carbs: 3.5,
    fat: 0.1,
    sodium: 200,
    vitaminC: 5,
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
): Omit<FoodItem, "id" | "name" | "nameEn" | "category" | "notes" | "commonServing"> {
  const multiplier = servings;
  return {
    servingSize: food.servingSize * multiplier,
    servingUnit: food.servingUnit,
    calories: food.calories * multiplier,
    protein: food.protein * multiplier,
    carbs: food.carbs * multiplier,
    fat: food.fat * multiplier,
    fiber: food.fiber ? food.fiber * multiplier : undefined,
    sodium: food.sodium ? food.sodium * multiplier : undefined,
    calcium: food.calcium ? food.calcium * multiplier : undefined,
    iron: food.iron ? food.iron * multiplier : undefined,
    vitaminC: food.vitaminC ? food.vitaminC * multiplier : undefined,
    vitaminA: food.vitaminA ? food.vitaminA * multiplier : undefined,
  };
}
