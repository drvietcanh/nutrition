"use client";

import Link from "next/link";

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
    { id: 1, label: "Malnutrition Risk", href: "/tools/malnutrition-screening" },
    { id: 2, label: "Energy & Protein Needs", href: "/tools/energy-protein-calculator" },
    { id: 3, label: "Intake vs Needs", href: "/tools/intake-vs-needs" },
  ] as const;

  return (
    <nav
      aria-label="Clinical nutrition learning steps"
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

        const content = (
          <>
            <span className="font-medium">Step {step.id}</span>
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

