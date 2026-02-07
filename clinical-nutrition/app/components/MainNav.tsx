"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  Home,
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
  Search,
  TrendingUp,
  Leaf,
  Wheat,
  Sun,
  Shield,
  Calendar,
  Baby,
  Users,
  DollarSign,
  Apple,
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
        label: "Chất béo trong Chế độ Ăn",
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
  {
    label: "Vitamin & Khoáng chất",
    href: "/knowledge/vitamins-minerals",
    items: [
      {
        label: "Vitamin D và Sức khỏe Xương",
        href: "/knowledge/vitamins-minerals/vitamin-d",
        icon: Sun,
      },
      {
        label: "Sắt và Thiếu máu",
        href: "/knowledge/vitamins-minerals/iron-anemia",
        icon: Droplet,
      },
      {
        label: "Canxi và Sức khỏe Xương",
        href: "/knowledge/vitamins-minerals/calcium-bone-health",
        icon: Heart,
      },
      {
        label: "Vitamin B12 và Năng lượng",
        href: "/knowledge/vitamins-minerals/vitamin-b12-energy",
        icon: Activity,
      },
      {
        label: "Kali và Huyết áp",
        href: "/knowledge/vitamins-minerals/potassium-blood-pressure",
        icon: Heart,
      },
      {
        label: "Kẽm và Miễn dịch",
        href: "/knowledge/vitamins-minerals/zinc-immunity",
        icon: Shield,
      },
    ],
  },
  {
    label: "Dinh dưỡng Hàng ngày",
    href: "/knowledge/daily-practices",
    items: [
      {
        label: "Đọc Nhãn Thực phẩm",
        href: "/knowledge/daily-practices/reading-food-labels",
        icon: FileText,
      },
      {
        label: "Lập Kế hoạch Bữa ăn",
        href: "/knowledge/daily-practices/meal-planning",
        icon: Calendar,
      },
      {
        label: "Phương pháp Nấu ăn Lành mạnh",
        href: "/knowledge/daily-practices/healthy-cooking-methods",
        icon: UtensilsCrossed,
      },
      {
        label: "Ăn uống Lành mạnh khi Đi ăn Ngoài",
        href: "/knowledge/daily-practices/eating-out-healthy",
        icon: UtensilsCrossed,
      },
      {
        label: "Snacking Thông minh",
        href: "/knowledge/daily-practices/smart-snacking",
        icon: Leaf,
      },
      {
        label: "Dinh dưỡng với Ngân sách Hạn hẹp",
        href: "/knowledge/daily-practices/nutrition-on-budget",
        icon: DollarSign,
      },
    ],
  },
  {
    label: "Dinh dưỡng Theo Độ tuổi",
    href: "/knowledge/life-stages",
    items: [
      {
        label: "Dinh dưỡng cho Phụ nữ Mang thai",
        href: "/knowledge/life-stages/pregnancy-nutrition",
        icon: Baby,
      },
      {
        label: "Dinh dưỡng Người cao tuổi",
        href: "/knowledge/elderly-nutrition",
        icon: Users,
      },
      {
        label: "Dinh dưỡng cho Trẻ em và Thanh thiếu niên",
        href: "/knowledge/life-stages/children-nutrition",
        icon: Baby,
      },
    ],
  },
  {
    label: "Chủ đề Đặc biệt",
    href: "/knowledge/special-topics",
    items: [
      {
        label: "Sức khỏe Đường ruột và Probiotics",
        href: "/knowledge/special-topics/gut-health-probiotics",
        icon: Heart,
      },
      {
        label: "Omega-3 và Sức khỏe Tim mạch",
        href: "/knowledge/special-topics/omega-3-heart-health",
        icon: Heart,
      },
      {
        label: "Quản lý Cân nặng Lành mạnh",
        href: "/knowledge/special-topics/healthy-weight-management",
        icon: TrendingUp,
      },
      {
        label: "Hiểu lầm Dinh dưỡng Phổ biến",
        href: "/knowledge/special-topics/nutrition-myths-public",
        icon: AlertCircle,
      },
      {
        label: "Chất chống Oxy hóa trong Thực phẩm",
        href: "/knowledge/special-topics/antioxidants-foods",
        icon: Leaf,
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
    label: "Máy tính Năng lượng & Protein",
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
    label: "BMI & Thành phần Cơ thể",
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

interface DropdownMenuProps {
  groups: NavGroup[];
  isOpen: boolean;
  onClose: () => void;
}

function KnowledgeDropdown({ groups, isOpen, onClose }: DropdownMenuProps) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full mt-2 w-80 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
      <div className="p-2">
        {groups.map((group) => (
          <div key={group.href} className="mb-4 last:mb-0">
            <Link
              href={group.href}
              onClick={onClose}
              className={`block px-3 py-2 text-sm font-semibold text-gray-900 hover:bg-blue-50 rounded ${
                pathname === group.href ? "bg-blue-50 text-blue-700" : ""
              }`}
            >
              {group.label}
            </Link>
            <div className="mt-1 space-y-0.5">
              {group.items.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className={`flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-blue-50 rounded ${
                      pathname === item.href
                        ? "bg-blue-50 text-blue-700 font-medium"
                        : ""
                    }`}
                  >
                    {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ToolsDropdown({
  items,
  isOpen,
  onClose,
}: {
  items: NavItem[];
  isOpen: boolean;
  onClose: () => void;
}) {
  const pathname = usePathname();

  if (!isOpen) return null;

  return (
    <div className="absolute left-0 top-full mt-2 w-72 rounded-lg border border-gray-200 bg-white shadow-lg z-50">
      <div className="p-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-green-50 rounded ${
                pathname === item.href
                  ? "bg-green-50 text-green-700 font-medium"
                  : ""
              }`}
            >
              {Icon && <Icon className="w-4 h-4" aria-hidden="true" />}
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export function MainNav() {
  const pathname = usePathname();
  const [knowledgeOpen, setKnowledgeOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const knowledgeRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        knowledgeRef.current &&
        !knowledgeRef.current.contains(event.target as Node)
      ) {
        setKnowledgeOpen(false);
      }
      if (
        toolsRef.current &&
        !toolsRef.current.contains(event.target as Node)
      ) {
        setToolsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const isKnowledgeActive =
    pathname?.startsWith("/knowledge") || pathname === "/knowledge";
  const isToolsActive = pathname?.startsWith("/tools") || pathname === "/tools";

  return (
    <nav className="hidden md:flex items-center gap-1" aria-label="Điều hướng chính">
      <Link
        href="/"
        className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring ${
          pathname === "/"
            ? "bg-blue-100 text-blue-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        <span className="flex items-center gap-2">
          <Home className="w-4 h-4" aria-hidden="true" />
          Trang chủ
        </span>
      </Link>

      <div ref={knowledgeRef} className="relative">
        <button
          type="button"
          onClick={() => {
            setKnowledgeOpen(!knowledgeOpen);
            setToolsOpen(false);
          }}
          onMouseEnter={() => setKnowledgeOpen(true)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring flex items-center gap-1 ${
            isKnowledgeActive
              ? "bg-blue-100 text-blue-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-expanded={knowledgeOpen}
          aria-haspopup="true"
        >
          <BookOpen className="w-4 h-4" aria-hidden="true" />
          <span>Kiến thức</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              knowledgeOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
        <KnowledgeDropdown
          groups={knowledgeGroups}
          isOpen={knowledgeOpen}
          onClose={() => setKnowledgeOpen(false)}
        />
      </div>

      <div ref={toolsRef} className="relative">
        <button
          type="button"
          onClick={() => {
            setToolsOpen(!toolsOpen);
            setKnowledgeOpen(false);
          }}
          onMouseEnter={() => setToolsOpen(true)}
          className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors focus-ring flex items-center gap-1 ${
            isToolsActive
              ? "bg-green-100 text-green-700"
              : "text-gray-700 hover:bg-gray-100"
          }`}
          aria-expanded={toolsOpen}
          aria-haspopup="true"
        >
          <Calculator className="w-4 h-4" aria-hidden="true" />
          <span>Công cụ</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              toolsOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
        <ToolsDropdown
          items={toolsItems}
          isOpen={toolsOpen}
          onClose={() => setToolsOpen(false)}
        />
      </div>
    </nav>
  );
}
