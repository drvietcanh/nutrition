import type { ReactNode } from "react";
import { ToolStepIndicator } from "./ToolStepIndicator";
import { ToolNavigation } from "./ToolNavigation";

/**
 * Unified layout shell for all clinical nutrition tools.
 *
 * Pages can use this to:
 * - show a consistent step indicator and navigation,
 * - keep headers, body, and learning summary aligned across tools,
 * - reinforce that tools form a single educational journey.
 *
 * This component does not introduce any business logic; it only organises
 * content visually and structurally for a calmer, more predictable UX.
 */
export function ToolPageLayout(props: {
  step: 1 | 2 | 3;
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
}) {
  const { step, title, subtitle, children, footer } = props;

  return (
    <div className="space-y-6">
      <header className="space-y-2">
        <ToolStepIndicator currentStep={step} />
        <div className="space-y-1">
          <h1 className="text-xl font-semibold sm:text-2xl">{title}</h1>
          <p className="text-sm text-neutral-700 sm:text-base">{subtitle}</p>
        </div>
      </header>

      <div className="space-y-8">{children}</div>

      {footer}

      <ToolNavigation currentStep={step} />
    </div>
  );
}

