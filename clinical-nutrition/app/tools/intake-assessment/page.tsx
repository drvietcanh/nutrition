import { InteractiveSection } from "./InteractiveSection";

export default function IntakeAssessmentPage() {
  return (
    <main className="space-y-8">
      {/* 1. Title + brief explanation */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Intake Assessment – Teaching Tool
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          This page helps you compare an{" "}
          <strong>educational estimate of energy and protein needs</strong> with
          what is actually being provided over a short period. The focus is on
          understanding gaps, not on prescribing diets or feeds.
        </p>
      </header>

      {/* 2. Why compare needs and intake? */}
      <section
        aria-labelledby="why-compare-heading"
        className="space-y-2 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="why-compare-heading"
          className="text-base font-semibold sm:text-lg"
        >
          2. Why compare estimated needs with actual intake?
        </h2>
        <p className="text-sm text-neutral-700 sm:text-base">
          In clinical settings, patients often receive less (or occasionally
          more) than an educational estimate of their energy and protein needs.
          Seeing this gap clearly can support clinical reasoning about{" "}
          <strong>why intake looks the way it does</strong> and what trends
          might mean over time.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Shortfalls may reflect symptoms, procedures, access, food choices,
            or system factors rather than a simple &quot;failure to eat&quot;.
          </li>
          <li>
            Apparent &quot;overfeeding&quot; may stem from generous estimates,
            mixing methods, or transient changes in intake.
          </li>
          <li>
            Clinicians usually pay more attention to{" "}
            <strong>patterns over several days</strong> than to a single day in
            isolation.
          </li>
        </ul>
      </section>

      {/* 3–5. Needs range, intake estimate, and comparison */}
      <InteractiveSection />

      {/* 6. Common clinical reasons for gaps */}
      <section
        aria-labelledby="reasons-heading"
        className="space-y-3 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="reasons-heading"
          className="text-base font-semibold sm:text-lg"
        >
          6. Why intake often falls short in practice
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Symptoms such as pain, nausea, early satiety, or breathlessness can
            limit what patients feel able to eat or drink.
          </li>
          <li>
            Tests, procedures, fasting orders, and scheduling can reduce time
            available for meals and snacks.
          </li>
          <li>
            Texture, route, and food preferences influence how much of what is
            offered is actually consumed.
          </li>
          <li>
            Documentation may miss snacks, supplements, or family-provided food,
            so charted intake can under- or overestimate reality.
          </li>
        </ul>
      </section>

      {/* 7. How clinicians think about trends */}
      <section aria-labelledby="trends-heading" className="space-y-3">
        <h2
          id="trends-heading"
          className="text-base font-semibold sm:text-lg"
        >
          7. Thinking in trends, not single days
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            A single low-intake day around a major procedure may be less
            concerning than several low-intake days without a clear reason.
          </li>
          <li>
            Small changes in intake can accumulate over a week; clinicians often
            look back at several days before drawing conclusions.
          </li>
          <li>
            Reassessment is routine: estimates, intake records, and plans are
            revisited as the clinical situation changes.
          </li>
        </ul>
      </section>

      {/* 8. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-2">
        <h2
          id="safety-heading"
          className="text-base font-semibold sm:text-lg"
        >
          8. Safety reminder
        </h2>
        <p className="text-xs text-neutral-600 sm:text-sm">
          This page is for <strong>education only</strong>. It does not provide
          medical advice, diagnosis, or treatment, does not create a
          clinician–patient relationship, and must not be used for clinical
          decision-making, orders, or prescriptions.
        </p>
      </section>
    </main>
  );
}

