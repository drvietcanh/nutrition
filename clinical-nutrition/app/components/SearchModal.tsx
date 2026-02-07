"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Search, X, BookOpen, Calculator, FileText } from "lucide-react";

interface SearchResult {
  title: string;
  href: string;
  category: "knowledge" | "tool";
  description?: string;
}

// Simple search index - in production, this could be generated from MDX files
const searchIndex: SearchResult[] = [
  // Knowledge pages
  {
    title: "Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng",
    href: "/knowledge/myths-in-clinical-nutrition",
    category: "knowledge",
    description: "Điều chỉnh dựa trên bằng chứng cho các hiểu lầm phổ biến",
  },
  {
    title: "Quy trình Đánh giá Dinh dưỡng Lâm sàng",
    href: "/knowledge/assessment-process",
    category: "knowledge",
    description: "Hướng dẫn đầy đủ về đánh giá dinh dưỡng lâm sàng",
  },
  {
    title: "Ước tính Nhu cầu Dinh dưỡng",
    href: "/knowledge/needs-estimation",
    category: "knowledge",
    description: "Vì sao khoảng quan trọng hơn số chính xác",
  },
  {
    title: "Đánh giá Lượng Ăn",
    href: "/knowledge/intake-assessment",
    category: "knowledge",
    description: "Hiểu người bệnh thực sự nhận được gì",
  },
  {
    title: "Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)",
    href: "/knowledge/glycemic-index-load",
    category: "knowledge",
    description: "Hiểu cách thực phẩm ảnh hưởng đến đường huyết",
  },
  {
    title: "Chất béo trong Chế độ Ăn",
    href: "/knowledge/dietary-fats",
    category: "knowledge",
    description: "Hiểu các loại chất béo và ảnh hưởng sức khỏe",
  },
  {
    title: "Chất xơ trong Dinh dưỡng Lâm sàng",
    href: "/knowledge/dietary-fiber",
    category: "knowledge",
    description: "Hiểu về chất xơ hòa tan và không hòa tan, lợi ích sức khỏe",
  },
  {
    title: "Natri (Muối) và Sức khỏe",
    href: "/knowledge/sodium-health",
    category: "knowledge",
    description: "Hiểu về natri trong chế độ ăn và cách giảm natri",
  },
  {
    title: "Carbohydrate (Tinh bột và Đường)",
    href: "/knowledge/carbohydrates",
    category: "knowledge",
    description: "Hiểu về carbohydrate - nguồn năng lượng chính",
  },
  {
    title: "Dinh dưỡng cho Người cao tuổi",
    href: "/knowledge/elderly-nutrition",
    category: "knowledge",
    description: "Hướng dẫn dinh dưỡng cho người cao tuổi",
  },
  {
    title: "Hydration: Nước và Dịch",
    href: "/knowledge/hydration",
    category: "knowledge",
    description: "Hiểu về nhu cầu nước và hydration",
  },
  {
    title: "Tổng quan về các Chất Dinh dưỡng Đa lượng",
    href: "/knowledge/macronutrients-overview",
    category: "knowledge",
    description: "Tổng quan về carbohydrate, protein, và chất béo",
  },
  {
    title: "Vì sao Lượng Ăn Thường Thiếu",
    href: "/knowledge/why-intake-falls-short",
    category: "knowledge",
    description: "Các yếu tố thực tế tạo ra khoảng cách",
  },
  {
    title: "Dinh dưỡng Đái tháo đường",
    href: "/knowledge/diabetes-nutrition",
    category: "knowledge",
  },
  {
    title: "Dinh dưỡng Tăng huyết áp",
    href: "/knowledge/hypertension-nutrition",
    category: "knowledge",
  },
  {
    title: "Dinh dưỡng Suy tim",
    href: "/knowledge/heart-failure-nutrition",
    category: "knowledge",
  },
  // Vitamin & Khoáng chất
  {
    title: "Vitamin D và Sức khỏe Xương",
    href: "/knowledge/vitamins-minerals/vitamin-d",
    category: "knowledge",
    description: "Hiểu về vitamin D - vai trò quan trọng trong sức khỏe xương, nguồn thực phẩm, và cách đảm bảo đủ vitamin D",
  },
  {
    title: "Sắt và Thiếu máu",
    href: "/knowledge/vitamins-minerals/iron-anemia",
    category: "knowledge",
    description: "Hiểu về sắt - khoáng chất quan trọng để tạo máu, nguồn thực phẩm giàu sắt, và cách phòng ngừa thiếu máu",
  },
  {
    title: "Canxi và Sức khỏe Xương",
    href: "/knowledge/vitamins-minerals/calcium-bone-health",
    category: "knowledge",
    description: "Hiểu về canxi - khoáng chất quan trọng nhất cho xương chắc khỏe, nguồn thực phẩm giàu canxi",
  },
  {
    title: "Vitamin B12 và Năng lượng",
    href: "/knowledge/vitamins-minerals/vitamin-b12-energy",
    category: "knowledge",
    description: "Hiểu về vitamin B12 - vitamin quan trọng cho năng lượng, tạo máu, và chức năng thần kinh",
  },
  {
    title: "Kali và Huyết áp",
    href: "/knowledge/vitamins-minerals/potassium-blood-pressure",
    category: "knowledge",
    description: "Hiểu về kali - khoáng chất quan trọng giúp kiểm soát huyết áp, nguồn thực phẩm giàu kali",
  },
  {
    title: "Kẽm và Miễn dịch",
    href: "/knowledge/vitamins-minerals/zinc-immunity",
    category: "knowledge",
    description: "Hiểu về kẽm - khoáng chất quan trọng cho hệ miễn dịch, chữa lành vết thương, và tăng trưởng",
  },
  // Dinh dưỡng Hàng ngày
  {
    title: "Đọc Nhãn Thực phẩm: Hướng dẫn Đơn giản",
    href: "/knowledge/daily-practices/reading-food-labels",
    category: "knowledge",
    description: "Hướng dẫn cách đọc và hiểu nhãn thực phẩm để chọn lựa thực phẩm lành mạnh",
  },
  {
    title: "Lập Kế hoạch Bữa ăn Hàng ngày",
    href: "/knowledge/daily-practices/meal-planning",
    category: "knowledge",
    description: "Hướng dẫn cách lập kế hoạch bữa ăn đơn giản, thực tế để đảm bảo dinh dưỡng đầy đủ",
  },
  // Dinh dưỡng Theo Độ tuổi
  {
    title: "Dinh dưỡng cho Phụ nữ Mang thai",
    href: "/knowledge/life-stages/pregnancy-nutrition",
    category: "knowledge",
    description: "Hướng dẫn dinh dưỡng cho phụ nữ mang thai - nhu cầu đặc biệt về sắt, axit folic, canxi",
  },
  // Dinh dưỡng Hàng ngày (tiếp)
  {
    title: "Phương pháp Nấu ăn Lành mạnh",
    href: "/knowledge/daily-practices/healthy-cooking-methods",
    category: "knowledge",
    description: "Hướng dẫn các phương pháp nấu ăn lành mạnh giúp giữ lại dinh dưỡng, giảm chất béo",
  },
  {
    title: "Ăn uống Lành mạnh khi Đi ăn Ngoài",
    href: "/knowledge/daily-practices/eating-out-healthy",
    category: "knowledge",
    description: "Hướng dẫn cách chọn lựa thực phẩm lành mạnh khi đi ăn ngoài, tips cho nhà hàng",
  },
  {
    title: "Snacking Thông minh",
    href: "/knowledge/daily-practices/smart-snacking",
    category: "knowledge",
    description: "Hướng dẫn cách snack thông minh - chọn snack lành mạnh, kiểm soát khẩu phần",
  },
  {
    title: "Dinh dưỡng với Ngân sách Hạn hẹp",
    href: "/knowledge/daily-practices/nutrition-on-budget",
    category: "knowledge",
    description: "Hướng dẫn cách ăn uống lành mạnh với ngân sách hạn hẹp - chọn thực phẩm giá trị dinh dưỡng cao",
  },
  // Chủ đề Đặc biệt
  {
    title: "Sức khỏe Đường ruột và Probiotics",
    href: "/knowledge/special-topics/gut-health-probiotics",
    category: "knowledge",
    description: "Hiểu về sức khỏe đường ruột, probiotics, và prebiotics - vai trò trong tiêu hóa, miễn dịch",
  },
  {
    title: "Omega-3 và Sức khỏe Tim mạch",
    href: "/knowledge/special-topics/omega-3-heart-health",
    category: "knowledge",
    description: "Hiểu về omega-3 - chất béo tốt quan trọng cho sức khỏe tim mạch, não bộ, và viêm",
  },
  {
    title: "Quản lý Cân nặng Lành mạnh",
    href: "/knowledge/special-topics/healthy-weight-management",
    category: "knowledge",
    description: "Hướng dẫn cách quản lý cân nặng lành mạnh - thay đổi lối sống bền vững, cân bằng dinh dưỡng",
  },
  {
    title: "Hiểu lầm Dinh dưỡng Phổ biến (Cho Công chúng)",
    href: "/knowledge/special-topics/nutrition-myths-public",
    category: "knowledge",
    description: "Điều chỉnh các hiểu lầm dinh dưỡng phổ biến trong công chúng - từ ăn đêm đến carbs",
  },
  {
    title: "Dinh dưỡng cho Trẻ em và Thanh thiếu niên",
    href: "/knowledge/life-stages/children-nutrition",
    category: "knowledge",
    description: "Hướng dẫn dinh dưỡng cho trẻ em và thanh thiếu niên - nhu cầu đặc biệt cho tăng trưởng",
  },
  {
    title: "Chất chống Oxy hóa trong Thực phẩm",
    href: "/knowledge/special-topics/antioxidants-foods",
    category: "knowledge",
    description: "Hiểu về chất chống oxy hóa - hợp chất tự nhiên trong thực phẩm giúp bảo vệ tế bào",
  },
  // Tools
  {
    title: "Sàng lọc Suy Dinh dưỡng",
    href: "/tools/malnutrition-screening",
    category: "tool",
    description: "Công cụ sàng lọc nguy cơ suy dinh dưỡng",
  },
  {
    title: "Máy tính Năng lượng & Protein",
    href: "/tools/energy-protein-calculator",
    category: "tool",
    description: "Tính toán nhu cầu năng lượng và protein",
  },
  {
    title: "Đánh giá Lượng Ăn",
    href: "/tools/intake-assessment",
    category: "tool",
    description: "Đánh giá lượng dinh dưỡng thực tế",
  },
  {
    title: "BMI & Thành phần Cơ thể",
    href: "/tools/bmi-body-composition",
    category: "tool",
    description: "Tính BMI, IBW, ABW, BSA",
  },
  {
    title: "Nhu cầu Dịch",
    href: "/tools/fluid-requirements",
    category: "tool",
    description: "Tính nhu cầu dịch hàng ngày",
  },
];

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

interface SearchModalProps {
  onClose: () => void;
}

export function SearchModal({ onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const filtered = searchIndex.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description?.toLowerCase().includes(lowerQuery)
    );
    setResults(filtered);
  }, [query]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    } else if (e.key === "Enter" && results.length > 0) {
      router.push(results[0].href);
      onClose();
    }
  };

  const handleResultClick = (href: string) => {
    router.push(href);
    onClose();
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
        aria-hidden="true"
      />
      <div className="fixed inset-x-4 top-20 mx-auto max-w-2xl bg-white rounded-lg shadow-xl z-50 max-h-[80vh] flex flex-col">
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
            onClick={onClose}
            className="p-1 rounded hover:bg-gray-100 focus-ring"
            aria-label="Đóng"
          >
            <X className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>

        <div className="overflow-y-auto flex-1">
          {query.trim() && results.length === 0 && (
            <div className="p-8 text-center text-gray-500">
              <p>Không tìm thấy kết quả cho &quot;{query}&quot;</p>
              <p className="text-sm mt-2">
                Thử tìm kiếm với từ khóa khác
              </p>
            </div>
          )}

          {!query.trim() && (
            <div className="p-8 text-center text-gray-500">
              <p>Nhập từ khóa để tìm kiếm...</p>
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

        <div className="p-3 border-t border-gray-200 text-xs text-gray-500">
          <kbd className="px-2 py-1 bg-gray-100 rounded">Esc</kbd> để đóng •{" "}
          <kbd className="px-2 py-1 bg-gray-100 rounded">Enter</kbd> để chọn
        </div>
      </div>
    </>
  );
}
