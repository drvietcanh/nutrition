/**
 * Meal Planner Calculator
 * 
 * Helps users plan meals based on nutritional requirements
 */

import type { FoodItem } from "../food-db";

export interface MealPlan {
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snacks: Meal[];
}

export interface Meal {
  foods: MealFood[];
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
}

export interface MealFood {
  food: FoodItem;
  servings: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface NutritionalTargets {
  calories: number;
  protein: number; // in grams
  carbs?: number; // in grams, optional
  fat?: number; // in grams, optional
}

export interface MealPlanResult {
  plan: MealPlan;
  totals: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  targets: NutritionalTargets;
  gaps: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
  percentages: {
    calories: number; // percentage of target met
    protein: number;
    carbs: number;
    fat: number;
  };
}

/**
 * Calculate nutrition for a meal
 */
function calculateMealNutrition(meal: Meal): {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
} {
  return meal.foods.reduce(
    (acc, mealFood) => ({
      calories: acc.calories + mealFood.calories,
      protein: acc.protein + mealFood.protein,
      carbs: acc.carbs + mealFood.carbs,
      fat: acc.fat + mealFood.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 }
  );
}

/**
 * Create meal plan from foods and targets
 */
export function createMealPlan(
  foods: Array<{ food: FoodItem; servings: number; meal: "breakfast" | "lunch" | "dinner" | "snack" }>,
  targets: NutritionalTargets
): MealPlanResult {
  // Group foods by meal
  const breakfastFoods = foods
    .filter((f) => f.meal === "breakfast")
    .map((f) => ({
      food: f.food,
      servings: f.servings,
      calories: (f.food.calories * f.servings) / (f.food.servingSize / 100),
      protein: (f.food.protein * f.servings) / (f.food.servingSize / 100),
      carbs: (f.food.carbs * f.servings) / (f.food.servingSize / 100),
      fat: (f.food.fat * f.servings) / (f.food.servingSize / 100),
    }));

  const lunchFoods = foods
    .filter((f) => f.meal === "lunch")
    .map((f) => ({
      food: f.food,
      servings: f.servings,
      calories: (f.food.calories * f.servings) / (f.food.servingSize / 100),
      protein: (f.food.protein * f.servings) / (f.food.servingSize / 100),
      carbs: (f.food.carbs * f.servings) / (f.food.servingSize / 100),
      fat: (f.food.fat * f.servings) / (f.food.servingSize / 100),
    }));

  const dinnerFoods = foods
    .filter((f) => f.meal === "dinner")
    .map((f) => ({
      food: f.food,
      servings: f.servings,
      calories: (f.food.calories * f.servings) / (f.food.servingSize / 100),
      protein: (f.food.protein * f.servings) / (f.food.servingSize / 100),
      carbs: (f.food.carbs * f.servings) / (f.food.servingSize / 100),
      fat: (f.food.fat * f.servings) / (f.food.servingSize / 100),
    }));

  const snackFoods = foods
    .filter((f) => f.meal === "snack")
    .map((f) => ({
      food: f.food,
      servings: f.servings,
      calories: (f.food.calories * f.servings) / (f.food.servingSize / 100),
      protein: (f.food.protein * f.servings) / (f.food.servingSize / 100),
      carbs: (f.food.carbs * f.servings) / (f.food.servingSize / 100),
      fat: (f.food.fat * f.servings) / (f.food.servingSize / 100),
    }));

  const breakfastNutrition = calculateMealNutrition({ foods: breakfastFoods } as Meal);
  const breakfast: Meal = {
    foods: breakfastFoods,
    totalCalories: breakfastNutrition.calories,
    totalProtein: breakfastNutrition.protein,
    totalCarbs: breakfastNutrition.carbs,
    totalFat: breakfastNutrition.fat,
  };

  const lunchNutrition = calculateMealNutrition({ foods: lunchFoods } as Meal);
  const lunch: Meal = {
    foods: lunchFoods,
    totalCalories: lunchNutrition.calories,
    totalProtein: lunchNutrition.protein,
    totalCarbs: lunchNutrition.carbs,
    totalFat: lunchNutrition.fat,
  };

  const dinnerNutrition = calculateMealNutrition({ foods: dinnerFoods } as Meal);
  const dinner: Meal = {
    foods: dinnerFoods,
    totalCalories: dinnerNutrition.calories,
    totalProtein: dinnerNutrition.protein,
    totalCarbs: dinnerNutrition.carbs,
    totalFat: dinnerNutrition.fat,
  };

  const snacks: Meal[] = snackFoods.length > 0
    ? (() => {
        const snackNutrition = calculateMealNutrition({ foods: snackFoods } as Meal);
        return [
          {
            foods: snackFoods,
            totalCalories: snackNutrition.calories,
            totalProtein: snackNutrition.protein,
            totalCarbs: snackNutrition.carbs,
            totalFat: snackNutrition.fat,
          },
        ];
      })()
    : [];

  const plan: MealPlan = {
    breakfast,
    lunch,
    dinner,
    snacks,
  };

  // Calculate totals
  const totals = {
    calories: breakfast.totalCalories + lunch.totalCalories + dinner.totalCalories + snacks.reduce((sum, s) => sum + s.totalCalories, 0),
    protein: breakfast.totalProtein + lunch.totalProtein + dinner.totalProtein + snacks.reduce((sum, s) => sum + s.totalProtein, 0),
    carbs: breakfast.totalCarbs + lunch.totalCarbs + dinner.totalCarbs + snacks.reduce((sum, s) => sum + s.totalCarbs, 0),
    fat: breakfast.totalFat + lunch.totalFat + dinner.totalFat + snacks.reduce((sum, s) => sum + s.totalFat, 0),
  };

  // Calculate gaps
  const gaps = {
    calories: targets.calories - totals.calories,
    protein: targets.protein - totals.protein,
    carbs: (targets.carbs || 0) - totals.carbs,
    fat: (targets.fat || 0) - totals.fat,
  };

  // Calculate percentages
  const percentages = {
    calories: targets.calories > 0 ? (totals.calories / targets.calories) * 100 : 0,
    protein: targets.protein > 0 ? (totals.protein / targets.protein) * 100 : 0,
    carbs: (targets.carbs || 0) > 0 ? (totals.carbs / (targets.carbs || 1)) * 100 : 0,
    fat: (targets.fat || 0) > 0 ? (totals.fat / (targets.fat || 1)) * 100 : 0,
  };

  return {
    plan,
    totals,
    targets,
    gaps,
    percentages,
  };
}
