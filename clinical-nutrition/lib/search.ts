/**
 * Enhanced search utilities
 * 
 * Provides advanced search functionality with:
 * - Full-text search
 * - Filters
 * - Autocomplete
 * - Search history
 */

import Fuse from "fuse.js";
import { articles, type ArticleMetadata, type ArticleCategory } from "./content/articles";

// Tools search index
const toolsIndex = [
  {
    title: "Sàng lọc Suy dinh dưỡng",
    href: "/tools/malnutrition-screening",
    category: "tool" as const,
    description: "Công cụ sàng lọc nguy cơ suy dinh dưỡng",
    tags: ["sàng lọc", "suy dinh dưỡng", "NRS-2002", "PG-SGA"],
  },
  {
    title: "Máy tính năng lượng & Protein",
    href: "/tools/energy-protein-calculator",
    category: "tool" as const,
    description: "Tính toán nhu cầu năng lượng và protein",
    tags: ["năng lượng", "protein", "calo", "BMR", "TDEE"],
  },
  {
    title: "Đánh giá Lượng ăn",
    href: "/tools/intake-assessment",
    category: "tool" as const,
    description: "Đánh giá lượng dinh dưỡng thực tế",
    tags: ["lượng ăn", "đánh giá", "dinh dưỡng"],
  },
  {
    title: "BMI & Thành phần cơ thể",
    href: "/tools/bmi-body-composition",
    category: "tool" as const,
    description: "Tính BMI, IBW, ABW, BSA",
    tags: ["BMI", "cân nặng", "chiều cao", "IBW", "BSA"],
  },
  {
    title: "Nhu cầu Dịch",
    href: "/tools/fluid-requirements",
    category: "tool" as const,
    description: "Tính nhu cầu dịch hàng ngày",
    tags: ["nước", "dịch", "hydration"],
  },
  {
    title: "Đánh giá Nguy cơ Hội chứng Tái cho Ăn",
    href: "/tools/refeeding-syndrome-risk",
    category: "tool" as const,
    description: "Đánh giá nguy cơ hội chứng tái cho ăn",
    tags: ["tái cho ăn", "nguy cơ", "hội chứng"],
  },
  {
    title: "Đánh giá Vi chất",
    href: "/tools/micronutrient-assessment",
    category: "tool" as const,
    description: "Ước tính nhu cầu vi chất",
    tags: ["vitamin", "khoáng chất", "vi chất"],
  },
];

export type SearchResult = {
  title: string;
  href: string;
  category: "knowledge" | "tool";
  description?: string;
  tags?: string[];
  score?: number;
};

// Configure fuse.js for articles
const articlesFuse = new Fuse(articles, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "tags", weight: 0.2 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
});

// Configure fuse.js for tools
const toolsFuse = new Fuse(toolsIndex, {
  keys: [
    { name: "title", weight: 0.5 },
    { name: "description", weight: 0.3 },
    { name: "tags", weight: 0.2 },
  ],
  threshold: 0.3,
  includeScore: true,
  minMatchCharLength: 2,
});

export interface SearchOptions {
  category?: ArticleCategory | "all";
  level?: ArticleMetadata["level"] | "all";
  maxResults?: number;
}

/**
 * Search articles and tools
 */
export function searchContent(
  query: string,
  options: SearchOptions = {}
): SearchResult[] {
  const { category, level, maxResults = 20 } = options;

  if (!query.trim()) {
    return [];
  }

  // Search articles
  let articleResults = articlesFuse.search(query).map((result) => ({
    title: result.item.title,
    href: result.item.href,
    category: "knowledge" as const,
    description: result.item.description,
    tags: result.item.tags,
    score: result.score,
  }));

  // Apply filters
  if (category && category !== "all") {
    articleResults = articleResults.filter(
      (r) => articles.find((a) => a.href === r.href)?.category === category
    );
  }

  if (level && level !== "all") {
    articleResults = articleResults.filter(
      (r) => articles.find((a) => a.href === r.href)?.level === level
    );
  }

  // Search tools
  const toolResults = toolsFuse.search(query).map((result) => ({
    ...result.item,
    score: result.score,
  }));

  // Combine and sort by score
  const allResults = [...articleResults, ...toolResults].sort((a, b) => {
    const scoreA = a.score ?? 1;
    const scoreB = b.score ?? 1;
    return scoreA - scoreB;
  });

  return allResults.slice(0, maxResults);
}

/**
 * Get autocomplete suggestions
 */
export function getAutocompleteSuggestions(query: string, maxResults = 5): string[] {
  if (!query.trim() || query.length < 2) {
    return [];
  }

  const suggestions = new Set<string>();

  // Get matching titles
  const lowerQuery = query.toLowerCase();
  articles.forEach((article) => {
    if (article.title.toLowerCase().includes(lowerQuery)) {
      suggestions.add(article.title);
    }
  });

  toolsIndex.forEach((tool) => {
    if (tool.title.toLowerCase().includes(lowerQuery)) {
      suggestions.add(tool.title);
    }
  });

  return Array.from(suggestions).slice(0, maxResults);
}

/**
 * Get popular searches
 */
export function getPopularSearches(): string[] {
  return [
    "dinh dưỡng đái tháo đường",
    "nhu cầu protein",
    "suy dinh dưỡng",
    "BMI",
    "dinh dưỡng tim mạch",
    "vitamin D",
    "chất xơ",
    "nước",
  ];
}

/**
 * Save search to history (localStorage)
 */
export function saveSearchHistory(query: string): void {
  if (typeof window === "undefined") return;

  try {
    const history = getSearchHistory();
    const updated = [query, ...history.filter((q) => q !== query)].slice(0, 10);
    localStorage.setItem("search-history", JSON.stringify(updated));
  } catch (error) {
    // Ignore localStorage errors
  }
}

/**
 * Get search history
 */
export function getSearchHistory(): string[] {
  if (typeof window === "undefined") return [];

  try {
    const stored = localStorage.getItem("search-history");
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    return [];
  }
}

/**
 * Clear search history
 */
export function clearSearchHistory(): void {
  if (typeof window === "undefined") return;

  try {
    localStorage.removeItem("search-history");
  } catch (error) {
    // Ignore localStorage errors
  }
}
