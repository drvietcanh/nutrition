import { InteractiveSection } from "./InteractiveSection";

export default function EnergyProteinCalculatorPage() {
  return (
    <main className="space-y-8">
      {/* 1. Title + brief explanation */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Energy &amp; Protein Needs – Teaching Tool
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          This page illustrates how clinicians often estimate daily energy and
          protein needs using simple weight-based rules and equation-style
          approaches. The numbers shown are{" "}
          <strong>educational ranges, not prescriptions</strong>.
        </p>
      </header>

      {/* 2. Why estimate needs? */}
      <section
        aria-labelledby="why-estimate-heading"
        className="space-y-2 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="why-estimate-heading"
          className="text-base font-semibold sm:text-lg"
        >
          2. Why do we estimate energy &amp; protein needs?
        </h2>
        <p className="text-sm text-neutral-700 sm:text-base">
          In clinical nutrition, we rarely know the exact requirement for an
          individual person. Instead, we use <strong>reasonable ranges</strong>{" "}
          based on weight, clinical context, and guidelines, then adjust based
          on how the person responds over time.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Energy estimates aim to avoid both underfeeding and overfeeding,
            especially during illness and recovery.
          </li>
          <li>
            Protein ranges support the maintenance or rebuilding of lean mass,
            but must be balanced against organ function and tolerance.
          </li>
          <li>
            Different methods (simple weight-based, equation-based, stress
            factors) are <strong>tools to structure thinking</strong>, not
            final answers.
          </li>
        </ul>
      </section>

      {/* 3–5. Method selector, inputs, and educational result ranges */}
      <InteractiveSection />

      {/* 6. Interpretation & learning points (global for the page) */}
      <section aria-labelledby="learning-heading" className="space-y-3">
        <h2
          id="learning-heading"
          className="text-base font-semibold sm:text-lg"
        >
          6. Interpretation &amp; learning points
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Ranges are usually more useful than single &quot;correct&quot;
            numbers, because real needs shift with time, stress, and activity.
          </li>
          <li>
            Simple rules and equations work best when they are{" "}
            <strong>combined with clinical judgment</strong>, local protocols,
            and regular review.
          </li>
          <li>
            When in doubt, clinicians generally start cautiously, monitor
            tolerance and progress, and adjust rather than relying on a single
            calculation.
          </li>
        </ul>
      </section>

      {/* 7. Common clinical pitfalls */}
      <section
        aria-labelledby="pitfalls-heading"
        className="space-y-3 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="pitfalls-heading"
          className="text-base font-semibold sm:text-lg"
        >
          7. Common clinical pitfalls
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Relying on actual body weight alone in people with significant{" "}
            <strong>edema, ascites, or fluid shifts</strong>, which can hide
            loss of lean tissue.
          </li>
          <li>
            Applying the same ranges to everyone without considering{" "}
            <strong>organ function</strong> (for example, advanced renal or
            liver disease) or <strong>refeeding risk</strong>.
          </li>
          <li>
            Treating a calculation as a prescription rather than{" "}
            <strong>a starting point for a monitored plan</strong>.
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
          decision-making or to prescribe diets, feeds, or medications.
        </p>
      </section>
    </main>
  );
}

