/**
 * Recommendation Engine
 * 
 * Provides article recommendations based on:
 * - Tags similarity
 * - Category matching
 * - Reading level
 * - Related articles
 */

import { articles, type ArticleMetadata } from "./content/articles";

interface RecommendationOptions {
  maxResults?: number;
  excludeSlugs?: string[];
  preferredLevel?: ArticleMetadata["level"];
  preferredCategory?: ArticleMetadata["category"];
}

/**
 * Get recommended articles based on tags similarity
 */
export function getRecommendationsByTags(
  currentArticle: ArticleMetadata,
  options: RecommendationOptions = {}
): ArticleMetadata[] {
  const {
    maxResults = 5,
    excludeSlugs = [],
    preferredLevel,
    preferredCategory,
  } = options;

  // Get articles with similar tags
  const scoredArticles = articles
    .filter(
      (article) =>
        article.slug !== currentArticle.slug &&
        !excludeSlugs.includes(article.slug)
    )
    .map((article) => {
      // Calculate tag similarity score
      const commonTags = currentArticle.tags.filter((tag) =>
        article.tags.includes(tag)
      );
      let score = commonTags.length;

      // Boost score for same category
      if (article.category === currentArticle.category) {
        score += 2;
      }

      // Boost score for preferred level
      if (preferredLevel && article.level === preferredLevel) {
        score += 1;
      }

      // Boost score for preferred category
      if (preferredCategory && article.category === preferredCategory) {
        score += 1;
      }

      // Boost score if in related articles
      if (currentArticle.relatedArticles.includes(article.slug)) {
        score += 3;
      }

      return { article, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((item) => item.article);

  return scoredArticles;
}

/**
 * Get recommendations based on related articles
 */
export function getRecommendationsByRelated(
  currentArticle: ArticleMetadata,
  options: RecommendationOptions = {}
): ArticleMetadata[] {
  const { maxResults = 5, excludeSlugs = [] } = options;

  const related = currentArticle.relatedArticles
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter(
      (article): article is ArticleMetadata =>
        article !== undefined && !excludeSlugs.includes(article.slug)
    )
    .slice(0, maxResults);

  return related;
}

/**
 * Get recommendations for a category
 */
export function getRecommendationsByCategory(
  category: ArticleMetadata["category"],
  options: RecommendationOptions = {}
): ArticleMetadata[] {
  const { maxResults = 10, excludeSlugs = [] } = options;

  return articles
    .filter(
      (article) =>
        article.category === category && !excludeSlugs.includes(article.slug)
    )
    .slice(0, maxResults);
}

/**
 * Get personalized recommendations based on reading history
 */
export function getPersonalizedRecommendations(
  readArticles: string[],
  options: RecommendationOptions = {}
): ArticleMetadata[] {
  const { maxResults = 10 } = options;

  if (readArticles.length === 0) {
    // Return popular/foundation articles
    return articles
      .filter((a) => a.level === "foundation")
      .slice(0, maxResults);
  }

  // Get all tags from read articles
  const readTags = new Set<string>();
  readArticles.forEach((slug) => {
    const article = articles.find((a) => a.slug === slug);
    if (article) {
      article.tags.forEach((tag) => readTags.add(tag));
    }
  });

  // Score articles based on tag overlap
  const scored = articles
    .filter((article) => !readArticles.includes(article.slug))
    .map((article) => {
      const overlap = article.tags.filter((tag) => readTags.has(tag)).length;
      return { article, score: overlap };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, maxResults)
    .map((item) => item.article);

  return scored;
}

/**
 * Get next article in learning path
 */
export function getNextInPath(
  currentArticle: ArticleMetadata,
  completedArticles: string[] = []
): ArticleMetadata | null {
  // Check related articles first
  const nextRelated = currentArticle.relatedArticles.find(
    (slug) => !completedArticles.includes(slug)
  );

  if (nextRelated) {
    const article = articles.find((a) => a.slug === nextRelated);
    if (article) return article;
  }

  // Check same category, same or next level
  const sameCategory = articles.filter(
    (a) =>
      a.category === currentArticle.category &&
      a.slug !== currentArticle.slug &&
      !completedArticles.includes(a.slug)
  );

  if (sameCategory.length > 0) {
    // Prefer same level, then next level
    const sameLevel = sameCategory.find((a) => a.level === currentArticle.level);
    if (sameLevel) return sameLevel;

    const nextLevel = sameCategory.find(
      (a) =>
        (currentArticle.level === "foundation" && a.level === "intermediate") ||
        (currentArticle.level === "intermediate" && a.level === "advanced")
    );
    if (nextLevel) return nextLevel;

    return sameCategory[0];
  }

  return null;
}
