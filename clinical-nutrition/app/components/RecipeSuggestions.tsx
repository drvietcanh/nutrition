"use client";

import { useState } from "react";
import { ChefHat, Clock, Users, UtensilsCrossed } from "lucide-react";
import { Card } from "./Card";
import type { Recipe } from "../../lib/recipes";
import { getRecipesByFoods } from "../../lib/recipes";

interface RecipeSuggestionsProps {
  selectedFoodIds: string[];
  onRecipeSelect?: (recipe: Recipe) => void;
}

export function RecipeSuggestions({
  selectedFoodIds,
  onRecipeSelect,
}: RecipeSuggestionsProps) {
  const [expandedRecipe, setExpandedRecipe] = useState<string | null>(null);

  const suggestedRecipes = selectedFoodIds.length > 0
    ? getRecipesByFoods(selectedFoodIds)
    : [];

  if (suggestedRecipes.length === 0) {
    return null;
  }

  const toggleRecipe = (recipeId: string) => {
    setExpandedRecipe(expandedRecipe === recipeId ? null : recipeId);
  };

  return (
    <Card>
      <div className="flex items-center gap-2 mb-4">
        <ChefHat className="w-5 h-5 text-blue-600" />
        <h3 className="heading-4">Gợi ý Món ăn</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        Dựa trên thực phẩm bạn đã chọn, đây là một số món ăn Việt Nam bạn có thể nấu:
      </p>
      <div className="space-y-3">
        {suggestedRecipes.slice(0, 5).map((recipe) => (
          <div
            key={recipe.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              type="button"
              onClick={() => toggleRecipe(recipe.id)}
              className="w-full text-left p-4 hover:bg-gray-50 transition-colors focus-ring"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 mb-1">{recipe.name}</h4>
                  {recipe.nameEn && (
                    <p className="text-sm text-gray-600 mb-2">{recipe.nameEn}</p>
                  )}
                  <p className="text-sm text-gray-700 mb-3">{recipe.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                    <div className="flex items-center gap-1">
                      <UtensilsCrossed className="w-4 h-4" />
                      <span>{recipe.nutrition.calories} cal</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{recipe.servings} phần</span>
                    </div>
                    {recipe.prepTime && recipe.cookTime && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{recipe.prepTime + recipe.cookTime} phút</span>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {recipe.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {recipe.nutrition.protein}g protein
                  </div>
                  <div className="text-xs text-gray-600">
                    {recipe.nutrition.carbs}g carbs • {recipe.nutrition.fat}g fat
                  </div>
                </div>
              </div>
            </button>

            {expandedRecipe === recipe.id && (
              <div className="border-t border-gray-200 p-4 bg-gray-50 space-y-4">
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Nguyên liệu:</h5>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {recipe.ingredients.map((ing, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                        {ing.name}: {ing.amount} {ing.unit}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="font-semibold text-gray-900 mb-2">Cách làm:</h5>
                  <ol className="space-y-2 text-sm text-gray-700">
                    {recipe.instructions.map((step, index) => (
                      <li key={index} className="flex gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-semibold">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
                {onRecipeSelect && (
                  <button
                    type="button"
                    onClick={() => onRecipeSelect(recipe)}
                    className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                  >
                    Thêm vào Kế hoạch Bữa ăn
                  </button>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}
