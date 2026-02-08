import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Bottom-of-page navigation for the three-step tool flow.
 *
 * This component keeps navigation gentle and advisory:
 * - it never blocks movement between steps,
 * - it does not imply "pass/fail",
 * - it simply reminds learners what came before and what comes next.
 */
export function ToolNavigation(props: {
  currentStep: 1 | 2 | 3;
}) {
  const { currentStep } = props;

  const previous =
    currentStep === 1
      ? null
      : currentStep === 2
      ? { href: "/tools/malnutrition-screening", label: "Bước 1 – Nguy cơ Suy Dinh dưỡng" }
      : { href: "/tools/energy-protein-calculator", label: "Bước 2 – Nhu cầu năng lượng & Protein" };

  const next =
    currentStep === 3
      ? null
      : currentStep === 1
      ? { href: "/tools/energy-protein-calculator", label: "Bước 2 – Nhu cầu năng lượng & Protein" }
      : { href: "/tools/intake-vs-needs", label: "Bước 3 – Lượng Ăn vs Nhu Cầu" };

  return (
    <nav
      aria-label="Điều hướng công cụ"
      className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4 text-xs sm:text-sm"
    >
      <div>
        {previous ? (
          <Link
            href={previous.href}
            className="inline-flex items-center gap-1.5 text-neutral-700 hover:text-neutral-900 transition-colors focus-ring rounded"
          >
            <ChevronLeft className="w-4 h-4" aria-hidden="true" />
            <span>{previous.label}</span>
          </Link>
        ) : (
          <span className="text-neutral-400">Bắt đầu hành trình học tập</span>
        )}
      </div>

      <div className="text-right">
        {next ? (
          <Link
            href={next.href}
            className="inline-flex items-center gap-1.5 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 font-medium text-white shadow-sm hover:bg-neutral-800 transition-colors focus-ring"
          >
            <span>{next.label}</span>
            <ChevronRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        ) : (
          <span className="text-neutral-500">
            Bạn đã đến bước cuối cùng; bạn có thể xem lại các công cụ trước đó bất cứ lúc nào.
          </span>
        )}
      </div>
    </nav>
  );
}

