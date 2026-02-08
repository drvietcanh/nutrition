"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Home,
  BookOpen,
  Calculator,
  ChevronRight,
  AlertCircle,
  ClipboardCheck,
  FileText,
  UtensilsCrossed,
  Activity,
  Heart,
  Droplet,
  Ruler,
  AlertTriangle,
  Pill,
  TrendingUp,
  Leaf,
  Wheat,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

const knowledgeGroups: NavGroup[] = [
  {
    label: "Cơ sở Kiến thức",
    href: "/knowledge/clinical-foundations",
    items: [
      {
        label: "Hiểu lầm & Quan niệm Sai",
        href: "/knowledge/myths-in-clinical-nutrition",
        icon: AlertCircle,
      },
      {
        label: "Quy trình Đánh giá",
        href: "/knowledge/assessment-process",
        icon: ClipboardCheck,
      },
      {
        label: "Ước tính Nhu cầu",
        href: "/knowledge/needs-estimation",
        icon: Calculator,
      },
      {
        label: "Đánh giá Lượng Ăn",
        href: "/knowledge/intake-assessment",
        icon: UtensilsCrossed,
      },
      {
        label: "Vì sao Lượng Ăn Thường Thiếu",
        href: "/knowledge/why-intake-falls-short",
        icon: FileText,
      },
      {
        label: "Chỉ số Đường huyết (GI) và GL",
        href: "/knowledge/glycemic-index-load",
        icon: Calculator,
      },
      {
        label: "Chất béo trong Chế độ ăn",
        href: "/knowledge/dietary-fats",
        icon: Heart,
      },
      {
        label: "Chất xơ trong Dinh dưỡng",
        href: "/knowledge/dietary-fiber",
        icon: FileText,
      },
      {
        label: "Natri (Muối) và Sức khỏe",
        href: "/knowledge/sodium-health",
        icon: AlertCircle,
      },
      {
        label: "Carbohydrate (Tinh bột và Đường)",
        href: "/knowledge/carbohydrates",
        icon: Calculator,
      },
      {
        label: "Dinh dưỡng Người cao tuổi",
        href: "/knowledge/elderly-nutrition",
        icon: FileText,
      },
      {
        label: "Hydration: Nước và Dịch",
        href: "/knowledge/hydration",
        icon: Droplet,
      },
      {
        label: "Tổng quan Chất Dinh dưỡng Đa lượng",
        href: "/knowledge/macronutrients-overview",
        icon: FileText,
      },
    ],
  },
  {
    label: "Dinh dưỡng Bệnh Mạn tính",
    href: "/knowledge/chronic-diseases",
    items: [
      {
        label: "Đái tháo đường",
        href: "/knowledge/diabetes-nutrition",
        icon: Heart,
      },
      {
        label: "Tăng huyết áp",
        href: "/knowledge/hypertension-nutrition",
        icon: Heart,
      },
      {
        label: "Suy tim",
        href: "/knowledge/heart-failure-nutrition",
        icon: Heart,
      },
      {
        label: "Bệnh thận mạn",
        href: "/knowledge/ckd-nutrition",
        icon: Heart,
      },
      {
        label: "Bệnh gan",
        href: "/knowledge/liver-disease-nutrition",
        icon: Heart,
      },
      {
        label: "COPD",
        href: "/knowledge/copd-nutrition",
        icon: Heart,
      },
      {
        label: "Ung thư",
        href: "/knowledge/cancer-nutrition",
        icon: Heart,
      },
    ],
  },
];

const toolsItems: NavItem[] = [
  {
    label: "Sàng lọc Suy Dinh dưỡng",
    href: "/tools/malnutrition-screening",
    icon: Activity,
  },
  {
    label: "Máy tính năng lượng & Protein",
    href: "/tools/energy-protein-calculator",
    icon: Calculator,
  },
  {
    label: "Đánh giá Lượng Ăn",
    href: "/tools/intake-assessment",
    icon: UtensilsCrossed,
  },
  {
    label: "Lượng Ăn vs Nhu Cầu",
    href: "/tools/intake-vs-needs",
    icon: UtensilsCrossed,
  },
  {
    label: "BMI & Thành phần cơ thể",
    href: "/tools/bmi-body-composition",
    icon: Ruler,
  },
  {
    label: "Nhu cầu Dịch",
    href: "/tools/fluid-requirements",
    icon: Droplet,
  },
  {
    label: "Nguy cơ Hội chứng Tái cho Ăn",
    href: "/tools/refeeding-syndrome-risk",
    icon: AlertTriangle,
  },
  {
    label: "Đánh giá Vi chất",
    href: "/tools/micronutrient-assessment",
    icon: Pill,
  },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus-ring"
        aria-label="Mở menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <X className="w-6 h-6" aria-hidden="true" />
        ) : (
          <Menu className="w-6 h-6" aria-hidden="true" />
        )}
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <nav
            className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto md:hidden"
            aria-label="Điều hướng di động"
          >
            <div className="px-4 py-6 space-y-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-base font-medium ${
                  pathname === "/"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Home className="w-5 h-5" aria-hidden="true" />
                <span>Trang chủ</span>
              </Link>

              {/* Knowledge Section */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection("knowledge")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                    pathname?.startsWith("/knowledge")
                      ? "bg-blue-100 text-blue-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5" aria-hidden="true" />
                    <span>Kiến thức</span>
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === "knowledge" ? "rotate-90" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {expandedSection === "knowledge" && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                    {knowledgeGroups.map((group) => (
                      <div key={group.href} className="py-2">
                        <Link
                          href={group.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50 rounded"
                        >
                          {group.label}
                        </Link>
                        <div className="mt-1 space-y-1">
                          {group.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className={`flex items-center gap-3 px-4 py-2 text-sm rounded ${
                                  pathname === item.href
                                    ? "bg-blue-50 text-blue-700 font-medium"
                                    : "text-gray-700 hover:bg-gray-50"
                                }`}
                              >
                                {Icon && (
                                  <Icon className="w-4 h-4" aria-hidden="true" />
                                )}
                                <span>{item.label}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Tools Section */}
              <div>
                <button
                  type="button"
                  onClick={() => toggleSection("tools")}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg text-base font-medium ${
                    pathname?.startsWith("/tools")
                      ? "bg-green-100 text-green-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <Calculator className="w-5 h-5" aria-hidden="true" />
                    <span>Công cụ</span>
                  </span>
                  <ChevronRight
                    className={`w-5 h-5 transition-transform ${
                      expandedSection === "tools" ? "rotate-90" : ""
                    }`}
                    aria-hidden="true"
                  />
                </button>
                {expandedSection === "tools" && (
                  <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-4">
                    {toolsItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center gap-3 px-4 py-2 text-sm rounded ${
                            pathname === item.href
                              ? "bg-green-50 text-green-700 font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {Icon && (
                            <Icon className="w-4 h-4" aria-hidden="true" />
                          )}
                          <span>{item.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </>
      )}
    </>
  );
}
