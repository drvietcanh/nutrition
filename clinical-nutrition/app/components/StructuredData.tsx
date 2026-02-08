/**
 * Structured Data Component
 * 
 * Provides JSON-LD structured data for SEO
 */

interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Generate Article structured data
 */
export function generateArticleStructuredData({
  title,
  description,
  url,
  datePublished,
  dateModified,
  author,
  image,
}: {
  title: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  author?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    url: url,
    datePublished: datePublished || new Date().toISOString(),
    dateModified: dateModified || new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: author || "Clinical Nutrition Education",
    },
    publisher: {
      "@type": "Organization",
      name: "Clinical Nutrition Education",
      logo: {
        "@type": "ImageObject",
        url: image || "https://clinical-nutrition.edu.vn/logo.png",
      },
    },
    image: image,
  };
}

/**
 * Generate WebSite structured data
 */
export function generateWebSiteStructuredData({
  name,
  url,
  description,
  searchAction,
}: {
  name: string;
  url: string;
  description: string;
  searchAction?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: name,
    url: url,
    description: description,
    potentialAction: searchAction
      ? {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate: searchAction,
          },
          "query-input": "required name=search_term_string",
        }
      : undefined,
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbStructuredData(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
