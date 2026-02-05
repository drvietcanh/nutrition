import Link from "next/link";

export default function NeedsEstimationPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Estimating Nutrition Needs: Why Ranges Matter More Than Exact Numbers
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          In clinical nutrition, we estimate energy, protein, and other nutrient needs to guide care.
          Understanding <strong>why these are estimates, not exact targets</strong> is fundamental to safe practice.
        </p>
      </header>

      {/* Why Needs Are Estimates */}
      <section
        aria-labelledby="why-estimates-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="why-estimates-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Why Needs Are Estimates, Not Exact Targets
        </h2>
        <p className="text-base text-neutral-700">
          No formula can tell you the <em>exact</em> calorie or protein requirement for a specific person on a specific day.
          Here's why:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-base text-neutral-700">
          <li>
            <strong>Individual variation</strong>: Two people with the same age, weight, and condition can have different metabolic rates,
            activity patterns, and responses to food. Genetics, body composition, and even gut bacteria play roles.
          </li>
          <li>
            <strong>Dynamic needs</strong>: Requirements change day-to-day based on stress, sleep, illness severity, healing, activity,
            and even mood. A person recovering from surgery one week may need more than the same person a month later.
          </li>
          <li>
            <strong>Measurement limitations</strong>: We can't directly measure someone's "true" energy needs without specialized equipment
            (like indirect calorimetry), which isn't practical for most clinical settings. Even then, results vary with time and conditions.
          </li>
          <li>
            <strong>Context matters</strong>: The same person may need different amounts depending on whether they're trying to maintain weight,
            gain muscle, support healing, or manage a chronic condition. Goals and clinical priorities shape the target range.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Therefore, <strong>estimates are starting points</strong>, not prescriptions. They help structure thinking and guide initial planning,
          but they must be combined with <strong>clinical judgment, monitoring, and regular reassessment</strong>.
        </p>
      </section>

      {/* Different Methods and Why They Differ */}
      <section
        aria-labelledby="methods-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="methods-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Different Methods and Why They Differ
        </h2>
        <p className="text-base text-neutral-700">
          Clinicians use various methods to estimate needs. Each has strengths and limitations, and they often produce different numbers.
          This is <strong>normal and expected</strong>, not a sign that one is "wrong."
        </p>

        <div className="space-y-4 mt-4">
          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">1. Simple Weight-Based Rules</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Examples: "25–30 kcal/kg/day for energy" or "1.2–1.5 g protein/kg/day"
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Why they're used</strong>: Quick, easy to remember, work reasonably well for many stable adults.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Limitations</strong>: Don't account for activity, illness severity, or body composition. Can be misleading in people with
              significant edema, ascites, or muscle wasting (where actual body weight doesn't reflect lean mass).
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">2. Predictive Equations</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Examples: Harris-Benedict, Mifflin-St Jeor, Schofield equations (often adjusted with activity and stress factors)
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Why they're used</strong>: More detailed, account for age, sex, height, weight, and sometimes activity.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Limitations</strong>: Still based on population averages, not individual needs. Different equations can give different results
              for the same person. Stress factors (multipliers for illness) are rough estimates and vary by source.
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">3. Indirect Calorimetry</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Measures oxygen consumption and carbon dioxide production to calculate resting energy expenditure
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Why it's used</strong>: More accurate for the specific person at that moment, especially useful in critical care.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Limitations</strong>: Requires equipment, time, and expertise. Results still vary with time of day, recent food intake,
              and clinical state. Not practical for routine use in most settings.
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">4. Clinical Judgment + Guidelines</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Combining experience, published guidelines, and patient-specific factors
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Why it's used</strong>: Considers the whole picture: condition, goals, tolerance, organ function, and practical constraints.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Limitations</strong>: Requires training and experience. Less "objective" than numbers, but often more clinically relevant.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Key Takeaway:
          </p>
          <p className="text-sm text-blue-800">
            Different methods exist because <strong>no single approach fits all situations</strong>. Experienced clinicians often use multiple
            methods, compare results, and choose a reasonable range based on the clinical context. The goal is not to find the "correct answer,"
            but to establish a <strong>safe, reasonable starting point</strong> that can be monitored and adjusted.
          </p>
        </div>
      </section>

      {/* Importance of Ranges */}
      <section
        aria-labelledby="ranges-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="ranges-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          The Importance of Ranges, Not Single Numbers
        </h2>
        <p className="text-base text-neutral-700">
          Instead of saying "this person needs exactly 1,800 calories," clinicians think in ranges:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Energy ranges</strong>: e.g., "1,600–2,000 kcal/day" or "25–30 kcal/kg/day"
          </li>
          <li>
            <strong>Protein ranges</strong>: e.g., "60–90 g/day" or "1.0–1.5 g/kg/day"
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Why ranges matter:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>They acknowledge uncertainty</strong>: We don't know the exact need, so a range reflects realistic variation.
          </li>
          <li>
            <strong>They allow flexibility</strong>: A person might do well anywhere within the range, depending on appetite, tolerance, and other factors.
          </li>
          <li>
            <strong>They guide monitoring</strong>: If someone consistently falls below the range (or above it, if that's a concern), it signals a need to reassess.
          </li>
          <li>
            <strong>They prevent overconfidence</strong>: A single number can feel like a "target" to hit precisely, which isn't how nutrition works in real life.
          </li>
        </ul>
        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Clinical Example:
          </p>
          <p className="text-sm text-neutral-700">
            A 70-year-old woman recovering from hip surgery might have an estimated energy range of 1,500–1,800 kcal/day.
            If she's eating 1,550 kcal/day and maintaining weight, that's fine—she's within the range.
            If she's only getting 900 kcal/day and losing weight, that's a concern—she's well below the range and needs intervention.
            The range helps identify when action is needed, not just whether a single number is "met."
          </p>
        </div>
      </section>

      {/* Reassessment Is Essential */}
      <section
        aria-labelledby="reassessment-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="reassessment-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Reassessment Is Essential: Needs Change Over Time
        </h2>
        <p className="text-base text-neutral-700">
          Initial estimates are <strong>not set in stone</strong>. Regular reassessment is a core part of clinical nutrition practice.
        </p>
        <p className="text-base text-neutral-700">
          When and why to reassess:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Clinical changes</strong>: If someone's condition improves or worsens, their needs may change.
            For example, someone with severe infection may need more energy and protein during the acute phase, but less as they recover.
          </li>
          <li>
            <strong>Weight changes</strong>: If someone is losing or gaining weight unintentionally, the estimate may need adjustment.
            (Note: weight changes can also reflect fluid shifts, not just nutrition.)
          </li>
          <li>
            <strong>Functional changes</strong>: If someone becomes more or less active, their energy needs change.
          </li>
          <li>
            <strong>Tolerance issues</strong>: If someone can't tolerate the estimated amount (e.g., nausea, diarrhea, poor appetite),
            the plan needs to be adjusted to what's realistic, not just what was calculated.
          </li>
          <li>
            <strong>Time-based review</strong>: Even without obvious changes, periodic review (e.g., weekly in hospital, monthly in outpatient)
            ensures the plan stays appropriate.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          The process is <strong>iterative</strong>: estimate → implement → monitor → reassess → adjust → repeat.
        </p>
      </section>

      {/* Avoiding the "Correct Answer" Trap */}
      <section
        aria-labelledby="trap-heading"
        className="space-y-4 rounded-lg border border-amber-200 bg-amber-50 p-6"
      >
        <h2
          id="trap-heading"
          className="text-xl font-semibold text-amber-900 sm:text-2xl"
        >
          Avoiding the "Correct Answer" Trap
        </h2>
        <p className="text-base text-amber-800">
          It's tempting to treat formulas as if they produce "correct answers." This mindset can lead to:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-amber-800">
          <li>
            <strong>Over-reliance on numbers</strong>: Ignoring clinical signs (like poor wound healing, fatigue, or muscle loss) because
            "the calculation says they're getting enough."
          </li>
          <li>
            <strong>Rigid plans</strong>: Insisting someone must hit an exact number, even when it's causing problems or isn't realistic.
          </li>
          <li>
            <strong>Missing the bigger picture</strong>: Focusing on calories and protein while overlooking other important factors
            (like hydration, micronutrients, food quality, or quality of life).
          </li>
        </ul>
        <p className="text-base text-amber-800">
          Instead, think of estimates as <strong>tools to structure thinking</strong>, not final answers.
          They help answer: "Is this person likely getting too little, too much, or somewhere in a reasonable range?"
          The answer guides action, but clinical judgment, patient preferences, and ongoing monitoring determine the actual plan.
        </p>
      </section>

      {/* Summary */}
      <section
        aria-labelledby="summary-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="summary-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Summary: Key Principles
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            Needs are <strong>estimates, not exact targets</strong>, because individual variation, dynamic conditions, and measurement limitations make precision impossible.
          </li>
          <li>
            <strong>Different methods exist</strong> and produce different numbers—this is normal. Choose methods appropriate for the situation and use ranges.
          </li>
          <li>
            <strong>Ranges are more useful than single numbers</strong> because they acknowledge uncertainty, allow flexibility, and guide monitoring.
          </li>
          <li>
            <strong>Reassessment is essential</strong>—needs change with clinical condition, activity, tolerance, and time.
          </li>
          <li>
            Avoid treating formulas as "correct answers." Use estimates to <strong>structure thinking and guide safe starting points</strong>,
            then adjust based on how the person responds.
          </li>
        </ul>
      </section>

      {/* Link to Tool */}
      <section className="space-y-4 rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
        <h2 className="text-xl font-semibold text-blue-900 sm:text-2xl">
          Try It Yourself: Energy & Protein Calculator
        </h2>
        <p className="text-base text-blue-800">
          Our interactive calculator demonstrates how different methods produce different estimates and why ranges matter.
          Use it to explore how patient characteristics influence estimated needs.
        </p>
        <div className="mt-4">
          <Link
            href="/tools/energy-protein-calculator"
            className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Open Energy & Protein Calculator →
          </Link>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <section className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-xs text-neutral-600 sm:text-sm">
          This page is for <strong>education only</strong>. It does not provide medical advice, diagnosis, or treatment,
          does not create a clinician–patient relationship, and must not be used for clinical decision-making or to prescribe diets, feeds, or medications.
        </p>
      </section>
    </main>
  );
}
