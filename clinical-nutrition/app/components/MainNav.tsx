"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calculator,
  ChevronDown,
  Home,
  Activity,
  Heart,
  Droplet,
  Ruler,
  AlertTriangle,
  UtensilsCrossed,
  Pill,
} from "lucide-react";
import { generateNavigationGroups, type NavItem, type NavGroup } from "../../lib/content/navigation";

// Generate navigation groups from metadata
const knowledgeGroups: NavGroup[] = generateNavigationGroups();

const toolsItems: NavItem[] = [
  {
    label: "Sàng lọc Suy dinh dưỡng",
    href: "/tools/malnutrition-screening",
    icon: Activity,
  },
  {
    label: "Máy tính năng lượng & Protein",
    href: "/tools/energy-protein-calculator",
    icon: Calculator,
  },
  {
    label: "Đánh giá Lượng ăn",
    href: "/tools/intake-assessment",
    icon: UtensilsCrossed,
  },
  {
    label: "Lượng ăn vs Nhu cầu",
    href: "/tools/intake-vs-needs",
    icon: UtensilsCrossed,
  },
  {
    label: "BMI & Thành phần cơ thể",
    href: "/tools/bmi-body-composition",
    icon: Ruler,
  },
  {
    label: "Nhu cầu dịch",
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
