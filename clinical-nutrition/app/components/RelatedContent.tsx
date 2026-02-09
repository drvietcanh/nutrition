"use client";

import Link from "next/link";
import { BookOpen, ArrowRight, Calculator } from "lucide-react";
import { Card } from "./Card";
import {
  getRecommendationsByTags,
  getRecommendationsByRelated,
} from "../../lib/recommendations";
import { articles, type ArticleMetadata } from "../../lib/content/articles";

interface RelatedContentProps {
  currentArticle: ArticleMetadata;
  maxResults?: number;
  showTools?: boolean;
}

export function RelatedContent({
  currentArticle,
  maxResults = 5,
  showTools = true,
}: RelatedContentProps) {
  // Get recommendations
  const relatedByTags = getRecommendationsByTags(currentArticle, {
    maxResults: Math.ceil(maxResults / 2),
  });
  const relatedByRelated = getRecommendationsByRelated(currentArticle, {
    maxResults: Math.ceil(maxResults / 2),
  });

  // Combine and deduplicate
  const allRelated = [
    ...relatedByRelated,
    ...relatedByTags.filter(
      (a) => !relatedByRelated.some((r) => r.slug === a.slug)
    ),
  ].slice(0, maxResults);

  // Get related tools
  const relatedTools = currentArticle.toolLinks || [];

  if (allRelated.length === 0 && relatedTools.length === 0) {
    return null;
  }

  return (
    <div className="mt-12 space-y-8">
      {allRelated.length > 0 && (
        <section>
          <h2 className="heading-3 mb-6 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" aria-hidden="true" />
            Bài viết liên quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {allRelated.map((article) => (
              <Card
                key={article.slug}
                href={article.href}
                className="hover:border-blue-400 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen
                      className="w-5 h-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="heading-5 mb-1">{article.title}</h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {article.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-sm text-blue-600">
                      <span>Đọc thêm</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}

      {showTools && relatedTools.length > 0 && (
        <section>
          <h2 className="heading-3 mb-6 flex items-center gap-2">
            <Calculator className="w-6 h-6 text-green-600" aria-hidden="true" />
            Công cụ liên quan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedTools.map((toolSlug) => {
              // Map tool slugs to names (simplified - should be in a config)
              const toolNames: Record<string, string> = {
                "malnutrition-screening": "Sàng lọc Suy dinh dưỡng",
                "energy-protein-calculator": "Máy tính năng lượng & Protein",
                "intake-assessment": "Đánh giá Lượng ăn",
                "bmi-body-composition": "BMI & Thành phần cơ thể",
                "fluid-requirements": "Nhu cầu Dịch",
                "refeeding-syndrome-risk": "Đánh giá Nguy cơ Hội chứng Tái cho Ăn",
                "micronutrient-assessment": "Đánh giá Vi chất",
              };

              const toolName = toolNames[toolSlug] || toolSlug;

              return (
                <Card
                  key={toolSlug}
                  href={`/tools/${toolSlug}`}
                  className="hover:border-green-400 transition-all"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calculator
                        className="w-5 h-5 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="heading-5 mb-1">{toolName}</h3>
                      <div className="mt-2 flex items-center gap-2 text-sm text-green-600">
                        <span>Sử dụng công cụ</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
