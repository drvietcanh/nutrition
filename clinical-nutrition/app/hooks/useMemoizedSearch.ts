"use client";

import { useMemo } from "react";
import { ExtendedFoodItem } from "@/lib/vietnamese-food-extended";

interface SearchOptions {
  query: string;
  foods: ExtendedFoodItem[];
  maxResults?: number;
}

const searchCache = new Map<string, ExtendedFoodItem[]>();
const MAX_CACHE_SIZE = 100;

export function useMemoizedSearch({ query, foods, maxResults = 100 }: SearchOptions) {
  return useMemo(() => {
    if (!query.trim()) {
      return foods.slice(0, maxResults);
    }

    // Check cache
    const cacheKey = `${query.toLowerCase()}_${foods.length}`;
    if (searchCache.has(cacheKey)) {
      return searchCache.get(cacheKey)!;
    }

    // Perform search
    const lowerQuery = query.toLowerCase();
    const results = foods
      .filter(
        (food) =>
          food.name.toLowerCase().includes(lowerQuery) ||
          food.nameEn?.toLowerCase().includes(lowerQuery) ||
          food.id.toLowerCase().includes(lowerQuery)
      )
      .slice(0, maxResults);

    // Cache result
    if (searchCache.size >= MAX_CACHE_SIZE) {
      const firstKey = searchCache.keys().next().value;
      if (firstKey) {
        searchCache.delete(firstKey);
      }
    }
    searchCache.set(cacheKey, results);

    return results;
  }, [query, foods, maxResults]);
}
