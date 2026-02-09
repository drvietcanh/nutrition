"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Calculator, Clock, Filter, TrendingUp } from "lucide-react";
import {
  searchContent,
  getAutocompleteSuggestions,
  getPopularSearches,
  getSearchHistory,
  saveSearchHistory,
  clearSearchHistory,
  type SearchOptions,
} from "../../lib/search";
import { type ArticleCategory } from "../../lib/content/articles";

interface SearchModalEnhancedProps {
  onClose: () => void;
}

export function SearchModalEnhanced({ onClose }: SearchModalEnhancedProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<ReturnType<typeof searchContent>>([]);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<SearchOptions>({});
  const [showHistory, setShowHistory] = useState(true);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const history = getSearchHistory();
  const popularSearches = getPopularSearches();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setSuggestions([]);
      return;
    }

    // Get autocomplete suggestions
    const autocomplete = getAutocompleteSuggestions(query);
    setSuggestions(autocomplete);

    // Perform search
    const searchResults = searchContent(query, filters);
    setResults(searchResults);
  }, [query, filters]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "Enter" && results.length > 0) {
      handleResultClick(results[0].href);
    } else if (e.key === "ArrowDown" && suggestions.length > 0) {
      e.preventDefault();
      setQuery(suggestions[0]);
    }
  };

  const handleResultClick = (href: string) => {
    if (query.trim()) {
      saveSearchHistory(query);
    }
    router.push(href);
    onClose();
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
    inputRef.current?.focus();
  };

  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem);
    inputRef.current?.focus();
  };

  const handleFilterChange = (key: keyof SearchOptions, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  function highlightText(text: string, query: string): React.ReactNode {
    if (!query.trim()) return text;
    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return (
      <>
        {parts.map((part, i) =>
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-yellow-200 font-medium">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  }

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-x-4 top-20 mx-auto max-w-3xl bg-white rounded-lg shadow-xl z-50 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Tìm kiếm kiến thức hoặc công cụ..."
            className="flex-1 outline-none text-base"
            aria-label="Tìm kiếm"
          />
          <button
            type="button"
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded hover:bg-gray-100 focus-ring ${
              showFilters ? "bg-blue-50 text-blue-600" : ""
            }`}
            aria-label="Bộ lọc"
          >
            <Filter className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 focus-ring"
            aria-label="Đóng"
          >
            <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>

        {/* Filters */}
        {showFilters && (
          <div className="px-4 py-3 border-b border-gray-200 bg-gray-50">
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Danh mục
                </label>
                <select
                  value={filters.category || "all"}
                  onChange={(e) =>
                    handleFilterChange(
                      "category",
                      e.target.value === "all" ? undefined : e.target.value
                    )
                  }
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="all">Tất cả</option>
                  <option value="clinical-foundations">Cơ sở Kiến thức</option>
                  <option value="chronic-diseases">Bệnh mạn tính</option>
                  <option value="vitamins-minerals">Vitamin & Khoáng chất</option>
                  <option value="daily-practices">Dinh dưỡng Hàng ngày</option>
                  <option value="life-stages">Theo độ tuổi</option>
                  <option value="special-topics">Chủ đề đặc biệt</option>
                  <option value="general-nutrition">Dinh dưỡng Tổng quát</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">
                  Mức độ
                </label>
                <select
                  value={filters.level || "all"}
                  onChange={(e) =>
                    handleFilterChange(
                      "level",
                      e.target.value === "all" ? undefined : e.target.value
                    )
                  }
                  className="text-sm border border-gray-300 rounded px-2 py-1"
                >
                  <option value="all">Tất cả</option>
                  <option value="foundation">Cơ bản</option>
                  <option value="intermediate">Trung bình</option>
                  <option value="advanced">Nâng cao</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto flex-1">
          {!query.trim() && (
            <div className="p-6">
              {showHistory && history.length > 0 && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Clock className="w-4 h-4" aria-hidden="true" />
                      Lịch sử Tìm kiếm
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        clearSearchHistory();
                        setShowHistory(false);
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700"
                    >
                      Xóa
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {history.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => handleHistoryClick(item)}
                        className="px-3 py-1.5 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" aria-hidden="true" />
                  Tìm kiếm Phổ biến
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleSuggestionClick(item)}
                      className="px-3 py-1.5 text-sm bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {query.trim() && suggestions.length > 0 && results.length === 0 && (
            <div className="p-4 border-b border-gray-200">
              <p className="text-xs font-medium text-gray-500 mb-2">
                Gợi ý:
              </p>
              <div className="space-y-1">
                {suggestions.map((suggestion) => (
                  <button
                    key={suggestion}
                    type="button"
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <Search className="w-4 h-4 inline mr-2 text-gray-400" />
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}

          {query.trim() && results.length === 0 && suggestions.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p>Không tìm thấy kết quả cho &quot;{query}&quot;</p>
              <p className="text-sm mt-2">
                Thử tìm kiếm với từ khóa khác hoặc xóa bộ lọc
              </p>
            </div>
          )}

          {results.length > 0 && (
            <div className="p-2">
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-3 py-2">
                {results.length} kết quả
              </div>
              <ul className="space-y-1">
                {results.map((result) => (
                  <li key={result.href}>
                    <button
                      type="button"
                      onClick={() => handleResultClick(result.href)}
                      className="w-full text-left px-3 py-3 rounded-lg hover:bg-gray-100 focus-ring flex items-start gap-3"
                    >
                      {result.category === "knowledge" ? (
                        <BookOpen
                          className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                      ) : (
                        <Calculator
                          className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-900">
                          {highlightText(result.title, query)}
                        </div>
                        {result.description && (
                          <div className="text-sm text-gray-600 mt-1">
                            {highlightText(result.description, query)}
                          </div>
                        )}
                        {result.tags && result.tags.length > 0 && (
                          <div className="flex flex-wrap gap-1 mt-1">
                            {result.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div className="text-xs text-gray-400 mt-1">
                          {result.href}
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-gray-200 text-xs text-gray-500">
          <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> để đóng •{" "}
          <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> để chọn •{" "}
          <kbd className="px-2 py-1 bg-gray-100 rounded">↓</kbd> để chọn gợi ý
        </div>
      </div>
    </>
  );
}
