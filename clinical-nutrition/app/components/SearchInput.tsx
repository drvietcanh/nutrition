"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { Search, X, Clock, TrendingUp } from "lucide-react";
import { ExtendedFoodItem } from "@/lib/vietnamese-food-extended";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onSelect?: (item: ExtendedFoodItem) => void;
  suggestions?: ExtendedFoodItem[];
  showHistory?: boolean;
  maxHistory?: number;
  className?: string;
}

const HISTORY_KEY = "nutrition_search_history";
const MAX_HISTORY_ITEMS = 10;

export function SearchInput({
  value,
  onChange,
  placeholder = "Tìm kiếm thực phẩm...",
  onSelect,
  suggestions = [],
  showHistory = true,
  maxHistory = MAX_HISTORY_ITEMS,
  className = "",
}: SearchInputProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Load search history from localStorage
  useEffect(() => {
    if (showHistory && typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(HISTORY_KEY);
        if (stored) {
          setSearchHistory(JSON.parse(stored));
        }
      } catch (e) {
        console.error("Failed to load search history", e);
      }
    }
  }, [showHistory]);

  // Save search history to localStorage
  const saveToHistory = (query: string) => {
    if (!query.trim() || !showHistory) return;
    
    setSearchHistory((prev) => {
      const updated = [query, ...prev.filter((q) => q !== query)].slice(0, maxHistory);
      try {
        localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
      } catch (e) {
        console.error("Failed to save search history", e);
      }
      return updated;
    });
  };

  // Filtered suggestions
  const filteredSuggestions = useMemo(() => {
    if (!value.trim()) return suggestions.slice(0, 10);
    const lowerValue = value.toLowerCase();
    return suggestions
      .filter(
        (item) =>
          item.name.toLowerCase().includes(lowerValue) ||
          item.nameEn?.toLowerCase().includes(lowerValue)
      )
      .slice(0, 10);
  }, [value, suggestions]);

  // Filtered history
  const filteredHistory = useMemo(() => {
    if (!value.trim()) return searchHistory.slice(0, 5);
    const lowerValue = value.toLowerCase();
    return searchHistory
      .filter((item) => item.toLowerCase().includes(lowerValue))
      .slice(0, 5);
  }, [value, searchHistory]);

  // Handle input change
  const handleChange = (newValue: string) => {
    onChange(newValue);
    setIsOpen(true);
  };

  // Handle suggestion select
  const handleSelectSuggestion = (item: ExtendedFoodItem) => {
    onChange(item.name);
    saveToHistory(item.name);
    setIsOpen(false);
    if (onSelect) {
      onSelect(item);
    }
    inputRef.current?.blur();
  };

  // Handle history select
  const handleSelectHistory = (query: string) => {
    onChange(query);
    setIsOpen(false);
    inputRef.current?.blur();
  };

  // Clear history
  const handleClearHistory = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSearchHistory([]);
    try {
      localStorage.removeItem(HISTORY_KEY);
    } catch (e) {
      console.error("Failed to clear search history", e);
    }
  };

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  const hasResults = filteredSuggestions.length > 0 || filteredHistory.length > 0;
  const showDropdown = isOpen && (value.trim() || showHistory) && hasResults;

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {value && (
          <button
            type="button"
            onClick={() => {
              onChange("");
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            aria-label="Xóa"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          id="search-suggestions"
          className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-96 overflow-y-auto"
          role="listbox"
          aria-label="Gợi ý tìm kiếm"
        >
          {/* Search History */}
          {showHistory && filteredHistory.length > 0 && (
            <div className="p-2 border-b border-gray-200">
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1 text-xs font-medium text-gray-500">
                  <Clock className="w-3 h-3" />
                  Lịch sử tìm kiếm
                </div>
                <button
                  type="button"
                  onClick={handleClearHistory}
                  className="text-xs text-gray-400 hover:text-gray-600"
                >
                  Xóa
                </button>
              </div>
              {filteredHistory.map((query, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleSelectHistory(query)}
                  className="w-full text-left px-2 py-1.5 text-sm hover:bg-gray-100 rounded flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="option"
                  aria-label={`Chọn từ lịch sử: ${query}`}
                >
                  <Clock className="w-3 h-3 text-gray-400" aria-hidden="true" />
                  <span>{query}</span>
                </button>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {filteredSuggestions.length > 0 && (
            <div className="p-2">
              {!value.trim() && (
                <div className="flex items-center gap-1 text-xs font-medium text-gray-500 mb-1 px-2">
                  <TrendingUp className="w-3 h-3" />
                  Gợi ý
                </div>
              )}
              {filteredSuggestions.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelectSuggestion(item)}
                  className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  role="option"
                  aria-label={`${item.name}${item.nameEn ? ` (${item.nameEn})` : ""}, ${item.calories} calories`}
                >
                  <div className="font-medium text-sm text-gray-900">{item.name}</div>
                  {item.nameEn && (
                    <div className="text-xs text-gray-500">{item.nameEn}</div>
                  )}
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500">
                      {item.calories} kcal
                    </span>
                    {item.category && (
                      <span className="text-xs px-1.5 py-0.5 bg-gray-100 text-gray-600 rounded">
                        {item.category}
                      </span>
                    )}
                  </div>
                </button>
              ))}
            </div>
          )}

          {/* No results */}
          {!hasResults && value.trim() && (
            <div className="p-4 text-center text-sm text-gray-500">
              Không tìm thấy kết quả
            </div>
          )}
        </div>
      )}
    </div>
  );
}
