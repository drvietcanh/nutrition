/**
 * Analytics Utilities
 * 
 * Provides analytics tracking functionality
 * Can be extended to integrate with Google Analytics, Plausible, etc.
 */

// Track page views
export function trackPageView(path: string) {
  if (typeof window === "undefined") return;

  // Example: Google Analytics 4
  if (typeof window.gtag !== "undefined") {
    window.gtag("config", process.env.NEXT_PUBLIC_GA_ID || "", {
      page_path: path,
    });
  }

  // Example: Plausible
  if (typeof window.plausible !== "undefined") {
    window.plausible("pageview", { url: path });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] Page view:", path);
  }
}

// Track events
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  if (typeof window === "undefined") return;

  // Example: Google Analytics 4
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);
  }

  // Example: Plausible
  if (typeof window.plausible !== "undefined") {
    window.plausible(eventName, { props: eventParams });
  }

  // Console log for development
  if (process.env.NODE_ENV === "development") {
    console.log("[Analytics] Event:", eventName, eventParams);
  }
}

// Track tool usage
export function trackToolUsage(toolName: string, action: string) {
  trackEvent("tool_usage", {
    tool: toolName,
    action: action,
  });
}

// Track article views
export function trackArticleView(articleSlug: string, articleTitle: string) {
  trackEvent("article_view", {
    article_slug: articleSlug,
    article_title: articleTitle,
  });
}

// Track search queries
export function trackSearch(query: string, resultCount: number) {
  trackEvent("search", {
    query: query,
    result_count: resultCount,
  });
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (eventName: string, options?: { props?: Record<string, any>; url?: string }) => void;
  }
}
