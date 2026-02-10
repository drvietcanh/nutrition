/**
 * Vietnamese Recipes Database
 * 
 * Common Vietnamese dishes with nutritional information
 */

export interface Recipe {
  id: string;
  name: string;
  nameEn?: string;
  description: string;
  ingredients: RecipeIngredient[];
  instructions: string[];
  servings: number;
  prepTime?: number; // in minutes
  cookTime?: number; // in minutes
  category: RecipeCategory;
  tags: string[];
  nutrition: {
    calories: number; // per serving
    protein: number; // grams per serving
    carbs: number; // grams per serving
    fat: number; // grams per serving
  };
}

export interface RecipeIngredient {
  foodId: string; // Reference to food-db
  name: string;
  amount: number;
  unit: string;
}

export type RecipeCategory =
  | "main-dish"
  | "soup"
  | "side-dish"
  | "breakfast"
  | "snack"
  | "dessert";

export const recipes: Recipe[] = [
  {
    id: "pho-bo",
    name: "Phở Bò",
    nameEn: "Beef Pho",
    description: "Món phở bò truyền thống Việt Nam với nước dùng trong, thịt bò mềm và bánh phở.",
    ingredients: [
      { foodId: "bun-pho", name: "Bánh phở", amount: 200, unit: "g" },
      { foodId: "thit-bo", name: "Thịt bò", amount: 100, unit: "g" },
      { foodId: "hanh-tay", name: "Hành tây", amount: 50, unit: "g" },
      { foodId: "rau-thom", name: "Rau thơm", amount: 20, unit: "g" },
    ],
    instructions: [
      "Nấu nước dùng từ xương bò và gia vị",
      "Luộc bánh phở cho mềm",
      "Thái thịt bò mỏng",
      "Xếp bánh phở, thịt bò vào tô",
      "Rưới nước dùng nóng",
      "Thêm hành tây và rau thơm",
    ],
    servings: 1,
    prepTime: 15,
    cookTime: 30,
    category: "main-dish",
    tags: ["pho", "beef", "noodles", "traditional"],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 60,
      fat: 12,
    },
  },
  {
    id: "com-ga",
    name: "Cơm Gà",
    nameEn: "Chicken Rice",
    description: "Cơm gà thơm ngon với gà luộc, cơm nấu nước gà và nước mắm gừng.",
    ingredients: [
      { foodId: "com-trang", name: "Cơm trắng", amount: 200, unit: "g" },
      { foodId: "thit-ga", name: "Thịt gà", amount: 150, unit: "g" },
      { foodId: "rau-xanh", name: "Rau xanh", amount: 100, unit: "g" },
    ],
    instructions: [
      "Luộc gà với gia vị",
      "Nấu cơm với nước luộc gà",
      "Xé thịt gà",
      "Bày cơm, gà và rau ra đĩa",
      "Dùng kèm nước mắm gừng",
    ],
    servings: 1,
    prepTime: 10,
    cookTime: 40,
    category: "main-dish",
    tags: ["chicken", "rice", "traditional"],
    nutrition: {
      calories: 550,
      protein: 35,
      carbs: 70,
      fat: 15,
    },
  },
  {
    id: "bun-cha",
    name: "Bún Chả",
    nameEn: "Grilled Pork with Noodles",
    description: "Bún chả Hà Nội với thịt nướng, bún tươi và nước mắm chua ngọt.",
    ingredients: [
      { foodId: "bun-tuoi", name: "Bún tươi", amount: 150, unit: "g" },
      { foodId: "thit-lon", name: "Thịt lợn nướng", amount: 120, unit: "g" },
      { foodId: "rau-xanh", name: "Rau sống", amount: 100, unit: "g" },
    ],
    instructions: [
      "Ướp thịt với gia vị",
      "Nướng thịt trên than",
      "Chuẩn bị bún tươi",
      "Làm nước mắm chua ngọt",
      "Bày bún, thịt và rau",
      "Dùng kèm nước mắm",
    ],
    servings: 1,
    prepTime: 20,
    cookTime: 15,
    category: "main-dish",
    tags: ["pork", "noodles", "grilled", "hanoi"],
    nutrition: {
      calories: 480,
      protein: 28,
      carbs: 55,
      fat: 16,
    },
  },
  {
    id: "canh-chua-ca",
    name: "Canh Chua Cá",
    nameEn: "Sour Fish Soup",
    description: "Canh chua cá với vị chua ngọt, cá tươi và rau củ.",
    ingredients: [
      { foodId: "ca-basa", name: "Cá basa", amount: 150, unit: "g" },
      { foodId: "ca-chua", name: "Cà chua", amount: 100, unit: "g" },
      { foodId: "dau-okra", name: "Đậu bắp", amount: 50, unit: "g" },
      { foodId: "rau-ngo", name: "Rau ngò", amount: 20, unit: "g" },
    ],
    instructions: [
      "Làm sạch cá",
      "Nấu nước dùng với me hoặc chanh",
      "Cho cá vào nấu",
      "Thêm cà chua và đậu bắp",
      "Nêm nếm vừa ăn",
      "Thêm rau ngò trước khi tắt bếp",
    ],
    servings: 2,
    prepTime: 15,
    cookTime: 20,
    category: "soup",
    tags: ["seafood", "soup", "sour", "traditional"],
    nutrition: {
      calories: 180,
      protein: 20,
      carbs: 12,
      fat: 6,
    },
  },
  {
    id: "banh-mi",
    name: "Bánh Mì",
    nameEn: "Vietnamese Baguette",
    description: "Bánh mì Việt Nam với nhân đa dạng như thịt nguội, pate, chả lụa.",
    ingredients: [
      { foodId: "banh-mi", name: "Bánh mì", amount: 1, unit: "cái" },
      { foodId: "thit-nguoi", name: "Thịt nguội", amount: 50, unit: "g" },
      { foodId: "rau-xanh", name: "Rau củ", amount: 30, unit: "g" },
    ],
    instructions: [
      "Cắt bánh mì",
      "Phết pate và bơ",
      "Xếp thịt nguội và chả lụa",
      "Thêm rau củ tươi",
      "Rưới nước mắm pha",
    ],
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    category: "breakfast",
    tags: ["bread", "breakfast", "quick"],
    nutrition: {
      calories: 350,
      protein: 15,
      carbs: 45,
      fat: 12,
    },
  },
];

/**
 * Get recipes that contain any of the specified food IDs
 */
export function getRecipesByFoods(foodIds: string[]): Recipe[] {
  return recipes.filter((recipe) =>
    recipe.ingredients.some((ing) => foodIds.includes(ing.foodId))
  );
}

/**
 * Get recipes by category
 */
export function getRecipesByCategory(category: RecipeCategory): Recipe[] {
  return recipes.filter((recipe) => recipe.category === category);
}

/**
 * Search recipes by name or tags
 */
export function searchRecipes(query: string): Recipe[] {
  const lowerQuery = query.toLowerCase();
  return recipes.filter(
    (recipe) =>
      recipe.name.toLowerCase().includes(lowerQuery) ||
      recipe.nameEn?.toLowerCase().includes(lowerQuery) ||
      recipe.tags.some((tag) => tag.toLowerCase().includes(lowerQuery)) ||
      recipe.description.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get recipe by ID
 */
export function getRecipe(id: string): Recipe | undefined {
  return recipes.find((recipe) => recipe.id === id);
}
