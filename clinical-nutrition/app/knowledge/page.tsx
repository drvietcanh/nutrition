import Link from "next/link";

export default function KnowledgePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Clinical Nutrition Knowledge Base
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Educational content explaining clinical nutrition concepts, assessment processes, and clinical reasoning.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Myths & Misconceptions in Clinical Nutrition
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Evidence-based corrections to common misconceptions that persist in medical and nursing practice.
            Learn the truth behind widespread myths about calorie requirements, protein needs, NPO protocols, and more.
          </p>
          <Link
            href="/knowledge/myths-in-clinical-nutrition"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Read more →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/assessment-process"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Clinical Nutrition Assessment: A Simple Guide to the Whole Process
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Understand the complete clinical nutrition assessment process from screening to follow-up.
            Learn how screening, needs estimation, and intake assessment connect to form a complete picture.
          </p>
          <Link
            href="/knowledge/assessment-process"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Read more →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/needs-estimation"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Estimating Nutrition Needs: Why Ranges Matter More Than Exact Numbers
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Learn why nutrition needs are estimates, not exact targets. Understand different estimation methods,
            the importance of ranges, and why reassessment is essential.
          </p>
          <Link
            href="/knowledge/needs-estimation"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Read more →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/why-intake-falls-short"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Why Nutritional Intake Often Falls Short of Calculated Requirements
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Understand the real-world factors—patient-related, system-related, and clinical—that create gaps
            between calculated nutritional needs and actual intake in inpatient and outpatient settings.
          </p>
          <Link
            href="/knowledge/why-intake-falls-short"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Read more →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/intake-assessment"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Intake Assessment: Understanding What People Actually Receive
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Explore the difference between prescribed and delivered nutrition, why intake often falls short,
            and the critical importance of trends over single-day data.
          </p>
          <Link
            href="/knowledge/intake-assessment"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Read more →
          </Link>
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-semibold mb-3">
          Interactive Tools
        </h2>
        <p className="text-base text-neutral-700 mb-4">
          Practice what you've learned with our interactive tools:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <Link href="/tools/malnutrition-screening" className="text-blue-700 hover:text-blue-900 hover:underline">
              Malnutrition Screening Tool
            </Link>
          </li>
          <li>
            <Link href="/tools/energy-protein-calculator" className="text-blue-700 hover:text-blue-900 hover:underline">
              Energy & Protein Calculator
            </Link>
          </li>
          <li>
            <Link href="/tools/intake-assessment" className="text-blue-700 hover:text-blue-900 hover:underline">
              Intake Assessment Worksheet
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
