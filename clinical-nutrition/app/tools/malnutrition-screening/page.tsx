import { InteractiveSection } from "./InteractiveSection";

export default function MalnutritionScreeningPage() {
  return (
    <main className="space-y-8">
      {/* 1. Title + short intro */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Malnutrition Risk – Teaching Tool
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          This page helps you explore how common screening tools think about{" "}
          <strong>risk of malnutrition</strong> using simplified, de-identified
          example inputs.
        </p>
      </header>

      {/* 2. What is malnutrition risk? */}
      <section aria-labelledby="what-is-risk-heading" className="space-y-2">
        <h2
          id="what-is-risk-heading"
          className="text-base font-semibold sm:text-lg"
        >
          1. What is “malnutrition risk”?
        </h2>
        <p className="text-sm text-neutral-700 sm:text-base">
          Screening tools such as NRS-2002 and PG-SGA are designed to flag{" "}
          <strong>people who might be at higher nutritional risk</strong> so
          that a fuller assessment can be done. A positive screen does not
          confirm a diagnosis, and a negative screen does not guarantee that
          nutrition is adequate.
        </p>
        <p className="text-sm text-neutral-700 sm:text-base">
          This teaching tool focuses on how these screeners use information like
          recent weight loss, reduced intake, and disease context to raise or
          lower concern. It does not make clinical decisions or recommend
          treatments.
        </p>
      </section>

      {/* 2–5. Tool selector, input form, and interactive educational result */}
      <InteractiveSection />

      {/* 6. Interpretation & learning points */}
      <section aria-labelledby="learning-heading" className="space-y-3">
        <h2
          id="learning-heading"
          className="text-base font-semibold sm:text-lg"
        >
          5. Interpretation &amp; learning points
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Screening tools are designed to be{" "}
            <strong>quick and sensitive</strong>, not perfect; they err on the
            side of flagging people who might deserve a closer look.
          </li>
          <li>
            A “higher risk” pattern means{" "}
            <strong>“consider a full nutrition assessment”</strong>, not
            “malnutrition is present” or “start a particular treatment”.
          </li>
          <li>
            Different hospitals and guidelines may use slightly different
            thresholds, so always interpret scores in the context of{" "}
            <strong>local policies and senior clinical judgment</strong>.
          </li>
        </ul>
      </section>

      {/* 7. When to use / When not to use – tool-specific wording */}
      <section aria-labelledby="when-to-use-heading" className="space-y-3">
        <h2
          id="when-to-use-heading"
          className="text-base font-semibold sm:text-lg"
        >
          6. When to use / When not to use this teaching tool
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">
              When this tool is useful
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700 sm:text-sm">
              <li>
                Teaching students or colleagues how common malnutrition
                screeners think about risk.
              </li>
              <li>
                Exploring how changes in weight loss, intake, or disease stress
                might influence concern about nutritional status.
              </li>
              <li>
                Preparing for exams or journal clubs that involve nutrition
                screening tools.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">
              When this tool is NOT appropriate
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700 sm:text-sm">
              <li>
                Making clinical decisions for an individual patient (e.g.,
                admissions, feeding routes, prescriptions).
              </li>
              <li>
                Replacing a full nutrition assessment or multidisciplinary team
                review.
              </li>
              <li>
                Managing emergencies or time-critical situations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Safety disclaimer – local reiteration */}
      <section aria-labelledby="safety-heading" className="space-y-2">
        <h2
          id="safety-heading"
          className="text-base font-semibold sm:text-lg"
        >
          7. Safety reminder
        </h2>
        <p className="text-xs text-neutral-600 sm:text-sm">
          This page is for <strong>education only</strong>. It does not provide
          medical advice, diagnosis, or treatment, does not create a
          clinician–patient relationship, and must not be used for clinical
          decision-making or emergency care.
        </p>
      </section>
    </main>
  );
}


