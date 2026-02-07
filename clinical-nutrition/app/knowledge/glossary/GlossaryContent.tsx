"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { glossaryTerms, type GlossaryTerm } from "../../../components/Glossary";

export function GlossaryContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { value: "all", label: "Tất cả" },
    { value: "basic", label: "Cơ bản" },
    { value: "calculation", label: "Tính toán" },
    { value: "assessment", label: "Đánh giá" },
    { value: "disease", label: "Bệnh lý" },
  ];

  const filteredTerms = glossaryTerms.filter((term) => {
    const matchesSearch =
      term.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchQuery.toLowerCase()) ||
      term.simpleExplanation.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || term.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm kiếm thuật ngữ..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            aria-label="Tìm kiếm thuật ngữ"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors focus-ring ${
                selectedCategory === cat.value
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredTerms.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p>Không tìm thấy thuật ngữ nào phù hợp.</p>
            <p className="text-sm mt-2">Thử tìm kiếm với từ khóa khác.</p>
          </div>
        ) : (
          <>
            <p className="text-sm text-gray-600">
              Tìm thấy {filteredTerms.length} thuật ngữ
            </p>
            {filteredTerms.map((term) => (
              <GlossaryCard key={term.term} term={term} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}

function GlossaryCard({ term }: { term: GlossaryTerm }) {
  const categoryLabels: Record<string, string> = {
    basic: "Cơ bản",
    calculation: "Tính toán",
    assessment: "Đánh giá",
    disease: "Bệnh lý",
  };

  const categoryColors: Record<string, string> = {
    basic: "bg-blue-100 text-blue-700",
    calculation: "bg-green-100 text-green-700",
    assessment: "bg-purple-100 text-purple-700",
    disease: "bg-amber-100 text-amber-700",
  };

  return (
    <div className="border border-gray-200 rounded-lg p-6 bg-white hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h3 className="heading-4 text-gray-900">{term.term}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[term.category]}`}>
          {categoryLabels[term.category]}
        </span>
      </div>
      
      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Định nghĩa ngắn:</p>
          <p className="text-body text-gray-700">{term.definition}</p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-gray-600 mb-1">Giải thích đơn giản:</p>
          <p className="text-body text-gray-700">{term.simpleExplanation}</p>
        </div>
        
        {term.example && (
          <div>
            <p className="text-sm font-medium text-gray-600 mb-1">Ví dụ:</p>
            <p className="text-body-sm text-gray-600 italic">{term.example}</p>
          </div>
        )}
      </div>
    </div>
  );
}
