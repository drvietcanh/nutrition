import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://clinical-nutrition.edu.vn";

  const knowledgePages = [
    "assessment-process",
    "intake-assessment",
    "why-intake-falls-short",
    "no-single-number-in-clinical-nutrition",
    "hypertension-nutrition",
    "diabetes-nutrition",
    "heart-failure-nutrition",
    "dyslipidemia-nutrition",
    "ckd-nutrition",
    "dialysis-nutrition",
    "liver-disease-nutrition",
    "ibd-nutrition",
    "copd-nutrition",
    "cancer-nutrition",
    "emergency-nutrition",
    "sports-nutrition",
  ];

  const toolPages = [
    "malnutrition-screening",
    "energy-protein-calculator",
    "intake-assessment",
    "intake-vs-needs",
    "bmi-body-composition",
    "fluid-requirements",
    "refeeding-syndrome-risk",
    "micronutrient-assessment",
    "food-database",
  ];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...knowledgePages.map((page) => ({
      url: `${baseUrl}/knowledge/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...toolPages.map((page) => ({
      url: `${baseUrl}/tools/${page}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
