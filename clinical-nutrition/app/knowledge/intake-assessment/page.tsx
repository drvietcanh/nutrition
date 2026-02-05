import Link from "next/link";

export default function IntakeAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Intake Assessment: Understanding What People Actually Receive
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Knowing what someone <em>should</em> get (estimated needs) is only half the picture.
          Understanding what they <strong>actually receive</strong>—and why there's often a gap—is essential for effective nutrition care.
        </p>
      </header>

      {/* Prescribed vs Delivered */}
      <section
        aria-labelledby="prescribed-vs-delivered-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="prescribed-vs-delivered-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Prescribed vs. Delivered: The Gap Between Plan and Reality
        </h2>
        <p className="text-base text-neutral-700">
          In clinical settings, there's often a difference between:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Prescribed nutrition</strong>: What was ordered, planned, or recommended (e.g., "1,800 kcal/day via oral diet + supplements"
            or "tube feed at 60 mL/hour providing 1,500 kcal/day").
          </li>
          <li>
            <strong>Delivered nutrition</strong>: What the person actually consumed or received (e.g., they ate half their meals, refused supplements,
            or the tube feed was held for 8 hours due to procedures).
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          This gap matters because <strong>only delivered nutrition affects health outcomes</strong>. A perfect plan that isn't followed doesn't help.
        </p>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Clinical Example 1: Hospital Meal Service
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            A patient is prescribed a "regular diet" estimated to provide ~1,800 kcal/day. However:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>They're nauseous and only eat 30% of each meal.</li>
            <li>Meals are delayed due to tests, so they miss lunch entirely.</li>
            <li>They don't like the food choices and skip several items.</li>
            <li>Family brings snacks, but these aren't documented in the chart.</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Result</strong>: Prescribed ~1,800 kcal/day, but actual delivered intake may be closer to 800–1,000 kcal/day.
            Without assessing actual intake, the care team might assume the patient is meeting needs when they're not.
          </p>
        </div>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Clinical Example 2: Enteral (Tube) Feeding
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            A patient has a nasogastric tube with orders for "continuous feed at 80 mL/hour, providing 1,600 kcal/day." However:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>The feed is held for 4 hours before and after a procedure (8 hours total).</li>
            <li>The pump malfunctions overnight, and no one notices until morning.</li>
            <li>The patient experiences high gastric residuals, so the rate is reduced to 40 mL/hour for tolerance.</li>
            <li>Flushes with water aren't counted toward nutrition, but they do add volume.</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Result</strong>: Prescribed 1,600 kcal/day, but actual delivered may be closer to 800–1,000 kcal/day due to holds,
            rate reductions, and interruptions. Regular intake assessment helps identify these gaps early.
          </p>
        </div>
      </section>

      {/* Why Intake Often Falls Short */}
      <section
        aria-labelledby="falls-short-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="falls-short-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Why Intake Often Falls Short in Practice
        </h2>
        <p className="text-base text-neutral-700">
          Understanding <strong>why</strong> intake falls short helps clinicians address root causes, not just symptoms.
          Common reasons include:
        </p>

        <div className="space-y-4 mt-4">
          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">1. Symptoms and Side Effects</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Nausea and vomiting</strong>: Make eating unpleasant or impossible.</li>
              <li><strong>Early satiety</strong>: Feeling full after small amounts (common in illness, certain medications, or conditions affecting stomach emptying).</li>
              <li><strong>Pain</strong>: Abdominal pain, mouth sores, or swallowing difficulties reduce intake.</li>
              <li><strong>Fatigue</strong>: Too tired to eat, chew, or prepare food.</li>
              <li><strong>Altered taste or smell</strong>: Food doesn't taste right, reducing appetite.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">2. Medical Procedures and Scheduling</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Fasting orders</strong>: NPO (nothing by mouth) before procedures, surgeries, or tests.</li>
              <li><strong>Procedure delays</strong>: Tests run late, extending fasting periods beyond planned.</li>
              <li><strong>Meal timing conflicts</strong>: Meals arrive during rounds, tests, or when the patient is sleeping.</li>
              <li><strong>Multiple appointments</strong>: Outpatient visits scheduled during usual meal times.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">3. Food Access and Preferences</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Food quality and variety</strong>: Limited options, unappealing textures, or foods that don't match cultural preferences.</li>
              <li><strong>Dietary restrictions</strong>: Therapeutic diets (e.g., low-sodium, diabetic, renal) may limit palatable options.</li>
              <li><strong>Texture modifications</strong>: Pureed or minced diets may be unappealing, leading to reduced intake.</li>
              <li><strong>Limited access</strong>: No kitchen facilities, difficulty shopping, or financial constraints.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">4. System and Documentation Issues</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Incomplete documentation</strong>: Snacks, family-provided food, or supplements not recorded in charts.</li>
              <li><strong>Miscommunication</strong>: Orders not clearly communicated, or staff not aware of nutrition goals.</li>
              <li><strong>Staffing constraints</strong>: Not enough time to assist with meals, monitor intake, or provide encouragement.</li>
              <li><strong>Equipment problems</strong>: Feeding pumps malfunction, tube clogs, or delivery systems fail.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">5. Psychological and Social Factors</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Depression or anxiety</strong>: Reduce appetite and motivation to eat.</li>
              <li><strong>Social isolation</strong>: Eating alone reduces intake compared to eating with others.</li>
              <li><strong>Loss of independence</strong>: Frustration with needing help to eat, leading to refusal.</li>
              <li><strong>Fear or misconceptions</strong>: Worry that eating will worsen symptoms or that certain foods are "forbidden."</li>
            </ul>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Clinical Insight:
          </p>
          <p className="text-sm text-blue-800">
            When intake falls short, it's rarely just "the patient won't eat." There's usually a <strong>reason</strong>—symptoms, procedures,
            system issues, or psychological factors. Identifying and addressing these reasons is more effective than simply increasing the prescription
            or adding more supplements that may also go uneaten.
          </p>
        </div>
      </section>

      {/* Importance of Trends */}
      <section
        aria-labelledby="trends-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="trends-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          The Importance of Trend Over Single-Day Data
        </h2>
        <p className="text-base text-neutral-700">
          A single day of intake data can be misleading. Clinicians focus on <strong>patterns over time</strong> because:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Day-to-day variation is normal</strong>: People don't eat the same amount every day. A low day after a procedure or during
            a bad symptom day is expected and may not be concerning if it's isolated.
          </li>
          <li>
            <strong>Single days can be outliers</strong>: One day might be unusually high (special occasion, family visit) or unusually low
            (procedure, severe symptoms). The trend shows the real pattern.
          </li>
          <li>
            <strong>Small deficits accumulate</strong>: Missing 200–300 kcal/day might not seem like much, but over a week that's 1,400–2,100 kcal,
            which can contribute to weight loss and poor outcomes.
          </li>
          <li>
            <strong>Trends show response to interventions</strong>: Is intake improving after starting anti-nausea medication? Is it declining
            as a condition worsens? Trends answer these questions better than single snapshots.
          </li>
        </ul>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Clinical Example: Interpreting Trends
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            A hospitalized patient's daily intake over 7 days:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Day 1: 1,200 kcal (admission day, many tests)</li>
            <li>Day 2: 1,800 kcal (good day)</li>
            <li>Day 3: 600 kcal (surgery, NPO most of day)</li>
            <li>Day 4: 1,000 kcal (post-op, some nausea)</li>
            <li>Day 5: 1,400 kcal (improving)</li>
            <li>Day 6: 1,600 kcal (continuing to improve)</li>
            <li>Day 7: 1,800 kcal (back to baseline)</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Single-day view</strong>: Day 3 looks alarming (only 600 kcal), but it's expected post-surgery.
          </p>
          <p className="text-sm text-neutral-700">
            <strong>Trend view</strong>: The overall pattern shows recovery—intake dropped around surgery but is trending upward.
            Average over 7 days is ~1,340 kcal/day. If estimated needs are 1,600–1,800 kcal/day, there's still a gap, but the trend is positive.
            The care team might focus on supporting continued improvement rather than drastic interventions.
          </p>
        </div>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Clinical Example: Concerning Trend
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            Another patient's intake over 7 days:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Day 1: 1,600 kcal</li>
            <li>Day 2: 1,400 kcal</li>
            <li>Day 3: 1,200 kcal</li>
            <li>Day 4: 1,000 kcal</li>
            <li>Day 5: 900 kcal</li>
            <li>Day 6: 800 kcal</li>
            <li>Day 7: 700 kcal</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Trend view</strong>: This is a <strong>declining trend</strong> without an obvious reason (like surgery).
            Even though no single day is catastrophically low, the consistent downward pattern signals a problem that needs investigation.
            Possible causes: worsening symptoms, medication side effects, depression, or an underlying condition progression.
          </p>
        </div>

        <p className="text-base text-neutral-700 mt-4">
          Clinicians typically look at <strong>3–7 days of intake data</strong> to assess trends, depending on the setting and urgency.
          In critical care, daily review is common. In stable outpatient settings, weekly or monthly reviews may be sufficient.
        </p>
      </section>

      {/* How Clinicians Assess Intake */}
      <section
        aria-labelledby="how-assess-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="how-assess-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          How Clinicians Assess Intake
        </h2>
        <p className="text-base text-neutral-700">
          Methods vary by setting and resources:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Food records and charts</strong>: Documentation of what was ordered, served, and consumed (often as percentages: "ate 50% of breakfast").
          </li>
          <li>
            <strong>24-hour recalls</strong>: Asking the person (or caregiver) to describe everything eaten in the last 24 hours.
          </li>
          <li>
            <strong>Food frequency questionnaires</strong>: How often certain foods or food groups are consumed.
          </li>
          <li>
            <strong>Weighed food records</strong>: More accurate but time-consuming; weighing food before and after meals.
          </li>
          <li>
            <strong>Tube feed records</strong>: Volume delivered, rate, holds, and residuals.
          </li>
          <li>
            <strong>Combined methods</strong>: Using multiple approaches to get a complete picture.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          All methods have limitations (memory, estimation errors, incomplete documentation), which is another reason why <strong>trends matter more than perfect single-day accuracy</strong>.
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
            There's often a gap between <strong>prescribed</strong> (what was ordered/planned) and <strong>delivered</strong> (what was actually consumed).
            Only delivered nutrition affects outcomes.
          </li>
          <li>
            Intake often falls short due to <strong>symptoms, procedures, food access, system issues, or psychological factors</strong>.
            Understanding the "why" helps address root causes.
          </li>
          <li>
            <strong>Trends over 3–7 days</strong> are more meaningful than single-day data because they show patterns, account for normal variation,
            and reveal accumulating deficits or improvements.
          </li>
          <li>
            Regular intake assessment helps identify gaps early, monitor response to interventions, and guide adjustments to the nutrition plan.
          </li>
        </ul>
      </section>

      {/* Link to Tool */}
      <section className="space-y-4 rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
        <h2 className="text-xl font-semibold text-blue-900 sm:text-2xl">
          Try It Yourself: Intake Assessment Worksheet
        </h2>
        <p className="text-base text-blue-800">
          Our interactive worksheet helps you systematically review intake over time and compare it with estimated needs.
          Use it to practice identifying gaps and understanding why intake might fall short.
        </p>
        <div className="mt-4">
          <Link
            href="/tools/intake-assessment"
            className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Open Intake Assessment Worksheet →
          </Link>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <section className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-xs text-neutral-600 sm:text-sm">
          This page is for <strong>education only</strong>. It does not provide medical advice, diagnosis, or treatment,
          does not create a clinician–patient relationship, and must not be used for clinical decision-making, orders, or prescriptions.
        </p>
      </section>
    </main>
  );
}
