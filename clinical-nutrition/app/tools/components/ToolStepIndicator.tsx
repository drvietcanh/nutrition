"use client";

import Link from "next/link";
import { Activity, Calculator, UtensilsCrossed, CheckCircle2 } from "lucide-react";

/**
 * Step indicator for the three-part clinical nutrition learning journey.
 *
 * This component is deliberately calm and non-judgmental:
 * - it highlights where the learner is in the flow,
 * - it avoids "success/failure" language,
 * - it uses soft colours that fit an educational, non-alarming tone.
 */
export function ToolStepIndicator({ currentStep }: { currentStep: 1 | 2 | 3 }) {
  const steps = [
    { id: 1, label: "Nguy cơ Suy Dinh dưỡng", href: "/tools/malnutrition-screening", icon: Activity },
    { id: 2, label: "Nhu cầu năng lượng & Protein", href: "/tools/energy-protein-calculator", icon: Calculator },
    { id: 3, label: "Lượng Ăn vs Nhu Cầu", href: "/tools/intake-vs-needs", icon: UtensilsCrossed },
  ] as const;

  return (
    <nav
      aria-label="Các bước học tập dinh dưỡng lâm sàng"
      className="mb-4 flex flex-wrap items-center gap-2 text-xs sm:text-sm"
    >
      {steps.map((step, index) => {
        const isCurrent = step.id === currentStep;
        const isCompleted = step.id < currentStep;

        const baseClasses =
          "inline-flex items-center gap-2 rounded-full border px-3 py-1 transition-colors";
        const stateClasses = isCurrent
          ? "border-sky-500 bg-sky-50 text-sky-900"
          : isCompleted
          ? "border-neutral-300 bg-neutral-50 text-neutral-800 hover:bg-neutral-100"
          : "border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50";

        const Icon = step.icon;
        const content = (
          <>
            {isCompleted ? (
              <CheckCircle2 className="w-4 h-4 text-green-600" aria-hidden="true" />
            ) : (
              <Icon className="w-4 h-4" aria-hidden="true" />
            )}
            <span className="font-medium">Bước {step.id}</span>
            <span className="hidden sm:inline">·</span>
            <span className="sm:truncate">{step.label}</span>
          </>
        );

        // Current step is rendered as a span; others as links for easy navigation.
        if (isCurrent) {
          return (
            <span key={step.id} className={`${baseClasses} ${stateClasses}`}>
              {content}
            </span>
          );
        }

        return (
          <Link key={step.id} href={step.href} className={`${baseClasses} ${stateClasses}`}>
            {content}
          </Link>
        );
      })}

      {/* Simple connector line to suggest flow without implying progress "success". */}
      <span className="hidden h-px flex-1 rounded-full bg-neutral-200 sm:block" />
    </nav>
  );
}

