"use client";

interface LoadingSkeletonProps {
  variant?: "text" | "card" | "list" | "chart";
  lines?: number;
  className?: string;
}

export function LoadingSkeleton({
  variant = "text",
  lines = 3,
  className = "",
}: LoadingSkeletonProps) {
  if (variant === "text") {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className="h-4 bg-gray-200 rounded animate-pulse"
            style={{ width: i === lines - 1 ? "75%" : "100%" }}
          />
        ))}
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div
        className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
      >
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-4 animate-pulse" />
        <div className="space-y-2">
          {Array.from({ length: lines }).map((_, i) => (
            <div
              key={i}
              className="h-4 bg-gray-200 rounded animate-pulse"
              style={{ width: i === lines - 1 ? "60%" : "100%" }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "list") {
    return (
      <div className={`space-y-3 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-200 rounded-lg animate-pulse" />
            <div className="flex-1 space-y-2">
              <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse" />
              <div className="h-3 bg-gray-200 rounded w-1/2 animate-pulse" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === "chart") {
    return (
      <div className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}>
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4 animate-pulse" />
        <div className="h-64 bg-gray-200 rounded animate-pulse" />
      </div>
    );
  }

  return null;
}
