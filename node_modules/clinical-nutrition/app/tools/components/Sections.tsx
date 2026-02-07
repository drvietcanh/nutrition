import type { ReactNode } from "react";

/**
 * Shared layout patterns for input and result areas.
 *
 * These are intentionally minimal wrappers that:
 * - keep visual structure consistent across tools,
 * - make it clear which content is "input" vs "result",
 * - reinforce the educational, non-alarming nature of the tools.
 */

export function InputSection(props: {
  title: string;
  children: ReactNode;
  description?: string;
}) {
  const { title, children, description } = props;

  return (
    <section className="space-y-3">
      <header className="space-y-1">
        <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
        {description ? (
          <p className="text-sm text-neutral-700 sm:text-base">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

export function ResultSection(props: {
  title: string;
  children: ReactNode;
  description?: string;
}) {
  const { title, children, description } = props;

  return (
    <section className="space-y-3 rounded-md border border-neutral-200 bg-white p-4">
      <header className="space-y-1">
        <h2 className="text-base font-semibold sm:text-lg">{title}</h2>
        {description ? (
          <p className="text-sm text-neutral-700 sm:text-base">{description}</p>
        ) : null}
      </header>
      {children}
    </section>
  );
}

