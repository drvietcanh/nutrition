import type { ReactNode } from "react";
import { DISCLAIMER_COPY } from "../../config/disclaimers";

export default function ToolsLayout({ children }: { children: ReactNode }) {
  const copy = DISCLAIMER_COPY.tools;

  return (
    <section className="space-y-6">
      <aside className="rounded-md border border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-900 sm:text-sm">
        <p className="font-semibold">{copy.header}</p>
        <p className="mt-1">{copy.advisory}</p>
      </aside>

      <div className="grid gap-6 md:grid-cols-2 md:items-start">
        <section aria-labelledby="when-useful-heading" className="space-y-2">
          <h2 id="when-useful-heading" className="text-sm font-semibold">
            {copy.whenUsefulTitle}
          </h2>
          <p className="text-xs text-neutral-700 sm:text-sm">
            {copy.whenUsefulGeneric}
          </p>
        </section>

        <section
          aria-labelledby="when-not-appropriate-heading"
          className="space-y-2"
        >
          <h2 id="when-not-appropriate-heading" className="text-sm font-semibold">
            {copy.whenNotAppropriateTitle}
          </h2>
          <p className="text-xs text-neutral-700 sm:text-sm">
            {copy.whenNotAppropriateGeneric}
          </p>
        </section>
      </div>

      {children}
    </section>
  );
}

