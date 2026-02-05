import Link from "next/link";

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
      ? { href: "/tools/malnutrition-screening", label: "Step 1 – Malnutrition Risk" }
      : { href: "/tools/energy-protein-calculator", label: "Step 2 – Energy & Protein Needs" };

  const next =
    currentStep === 3
      ? null
      : currentStep === 1
      ? { href: "/tools/energy-protein-calculator", label: "Step 2 – Energy & Protein Needs" }
      : { href: "/tools/intake-vs-needs", label: "Step 3 – Intake vs Needs" };

  return (
    <nav
      aria-label="Tool navigation"
      className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-neutral-200 pt-4 text-xs sm:text-sm"
    >
      <div>
        {previous ? (
          <Link
            href={previous.href}
            className="inline-flex items-center gap-1 text-neutral-700 hover:text-neutral-900"
          >
            <span aria-hidden="true">←</span>
            <span>{previous.label}</span>
          </Link>
        ) : (
          <span className="text-neutral-400">Start of learning journey</span>
        )}
      </div>

      <div className="text-right">
        {next ? (
          <Link
            href={next.href}
            className="inline-flex items-center gap-1 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-1.5 font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            <span>{next.label}</span>
            <span aria-hidden="true">→</span>
          </Link>
        ) : (
          <span className="text-neutral-500">
            You have reached the final step; you can revisit earlier tools at any time.
          </span>
        )}
      </div>
    </nav>
  );
}

