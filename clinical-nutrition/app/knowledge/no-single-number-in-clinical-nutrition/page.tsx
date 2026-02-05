import Link from "next/link";
import { SectionHeading } from "../nutrition-assessment-overview/components/SectionHeading";
import { ContentSection } from "../nutrition-assessment-overview/components/ContentSection";
import { EducationalNote } from "../nutrition-assessment-overview/components/EducationalNote";
import { ContentBlock } from "../nutrition-assessment-overview/components/ContentBlock";

/**
 * Why There's No Universal Number for Nutrition Needs
 * 
 * Educational Intent:
 * This page explains why clinical nutrition assessment does not rely on
 * a single universal number for energy or protein needs. It helps readers
 * understand the complexity of nutrition needs and why ranges and clinical
 * judgment are essential.
 * 
 * Target Audience:
 * - Clinicians early in practice (residents, early-career physicians)
 * - Nurses involved in nutrition care (screening, monitoring, implementation)
 * - Medical students learning about clinical nutrition
 * - Educated readers interested in understanding clinical nutrition concepts
 * 
 * Educational Approach:
 * - Explains concepts clearly for learners at different stages
 * - Uses accessible language while maintaining clinical accuracy
 * - Provides practical examples relevant to clinical practice
 * - Explains concepts without providing treatment recommendations
 * - Uses descriptive rather than imperative language
 * - Emphasizes clinical reasoning over formulas
 * - Clarifies that this is educational content, not a clinical guideline
 */
export default function WhyNoUniversalNumberPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 sm:space-y-12 px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      {/* 
        1. Title & Opening Question
        Educational Intent: Introduces the central question that many
        clinicians, nurses, and students ask, setting up the exploration
        of why there's no simple answer. Uses a conversational, inviting tone
        to draw readers in without judgment.
      */}
      <header className="space-y-4 sm:space-y-5 border-b border-neutral-200 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-neutral-900">
          Why There's No Universal Number for Nutrition Needs
        </h1>
        <ContentBlock>
          <p className="text-xl font-medium text-neutral-800 mb-4">
            "Why can't we just calculate the number and follow it?"
          </p>
          <p>
            It's a question many of us have asked—whether you're a clinician early in practice, a nurse involved
            in nutrition care, a medical student learning the ropes, or someone curious about how clinical nutrition
            actually works. It seems like it should be straightforward: enter the patient's weight, age, and condition,
            get the answer, and follow it.
          </p>
          <p>
            And honestly, that would be easier. A single, clear number would make planning simpler and decisions
            more straightforward. But here's the thing: <strong>clinical nutrition doesn't work that way</strong>.
            There's no universal number that applies to everyone, or even to the same person in different situations.
          </p>
          <p>
            This page explores why that is—and why understanding this actually helps us provide better, safer
            nutrition care. We'll look at why patients with the same weight may have different needs, why needs
            change over time, what formulas really do (and don't do), and how experienced clinicians actually
            approach this in practice.
          </p>
          <p className="text-base text-neutral-600 italic border-l-4 border-blue-200 pl-4 py-2 bg-blue-50/50 rounded-r">
            This content is designed for educational purposes to help you understand nutrition needs estimation
            and reduce overconfidence in numbers. It does not provide treatment recommendations or replace clinical
            guidelines or professional training. If you're new to clinical nutrition, take your time with these
            concepts—they form the foundation for safe and effective nutrition care.
          </p>
        </ContentBlock>
      </header>

      {/* 
        2. The Appeal of "One Correct Number"
        Educational Intent: Acknowledges why people want a simple answer
        and validates that desire, while explaining why it doesn't work
        in clinical nutrition. Explains the psychological appeal of clear
        formulas, single targets, and exact-looking results.
      */}
      <ContentSection ariaLabelledBy="appeal-heading">
        <SectionHeading id="appeal-heading">
          The Appeal of "One Correct Number"
        </SectionHeading>
        <ContentBlock>
          <p>
            It's natural to want a simple answer. A single number would be clear, definitive, and easy to use.
            You could calculate it once, write it in the chart, and know exactly what to aim for. This appeal
            is understandable, especially when you're learning or when clinical situations feel complex.
          </p>
          <p>
            Many clinicians and learners are drawn to this approach for several reasons:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Clear formulas</strong>: Step-by-step calculations with specific inputs and outputs feel
              structured and learnable. They provide a sense of mastery—"if I follow the steps correctly, I'll
              get the right answer." For students learning clinical nutrition, formulas offer a concrete way
              to approach what can feel like an abstract problem.
            </li>
            <li>
              <strong>Single targets</strong>: Having one number to aim for simplifies decision-making. Instead
              of navigating uncertainty and ranges, you have a clear goal. For clinicians early in practice,
              this can feel reassuring—you know what to write in the chart, what to order, what to monitor.
              For nurses following protocols, it provides clear direction.
            </li>
            <li>
              <strong>Exact-looking results</strong>: When a calculator shows "1,847 calories" or "72.3 grams of
              protein," it looks precise and authoritative. That precision feels scientific and reliable. It's
              easier to defend a specific number than to explain why you're working with a range.
            </li>
          </ul>
          <p>
            There's something else at play here, too: <strong>numbers feel safe and objective</strong>. In a field
            where so much depends on judgment, experience, and interpretation, numbers offer a sense of certainty.
            They seem to remove ambiguity. If the formula says 1,800 calories, that feels more concrete than
            "probably somewhere between 1,600 and 2,000, depending on how they respond."
          </p>
          <p>
            Numbers also <strong>simplify complex decisions</strong>. Clinical nutrition involves weighing many
            factors: the patient's condition, their goals of care, what they can tolerate, what's practically
            possible, and how they're responding. A single number cuts through that complexity. It gives you
            something concrete to work with, something you can document, something you can defend if questioned.
          </p>
          <p>
            Many clinical tools seem to promise this: enter the patient's weight, age, and condition, and get
            "the answer." For clinicians early in practice, this can feel reassuring. For nurses following protocols,
            it can seem straightforward. For students learning calculations, it can appear like there's a right
            way to do it.
          </p>
          <p>
            However, <strong>clinical nutrition doesn't work that way</strong>. There's no universal number that
            applies to everyone, or even to the same person in different situations. Understanding why this is the
            case—and why it's actually a good thing—helps healthcare teams provide better, safer nutrition care.
          </p>
          <EducationalNote variant="info" title="Why This Matters">
            <p>
              The desire for a single correct number can lead to overconfidence in calculations and underconfidence
              in clinical judgment. Understanding why there's no universal number helps clinicians, nurses, and
              students use tools appropriately—as aids to thinking, not replacements for judgment. Recognizing the
              appeal of clear formulas and exact numbers helps us understand why we're drawn to them, which is the
              first step in using them more safely.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        3. Why Nutrition Needs Vary Between Patients
        Educational Intent: Explains the key sources of variability in
        nutrition needs, using accessible language without deep biochemical
        detail. Focuses on practical factors that clinicians and nurses
        can observe and consider.
      */}
      <ContentSection ariaLabelledBy="variation-heading">
        <SectionHeading id="variation-heading">
          Why Nutrition Needs Vary Between Patients
        </SectionHeading>
        <ContentBlock>
          <p>
            Two patients with the same weight, age, height, and even the same medical condition can have very
            different nutrition needs. This isn't a flaw in assessment—it's a reflection of real biological and
            clinical variation. Understanding why this happens helps explain why there's no universal number.
          </p>
          <p>
            Here are the key sources of variability that make a difference in clinical practice:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Body composition</strong>: Two people with the same weight can have very different amounts
              of muscle versus fat. Muscle tissue uses more energy than fat tissue, even at rest. Someone with
              more muscle mass (visible muscle definition, stronger grip strength) typically needs more energy
              than someone with more fat mass, even if they weigh the same. This is something nurses and clinicians
              can observe during physical assessment.
            </li>
            <li>
              <strong>Illness severity</strong>: Two patients with the same diagnosis can have very different
              disease severity, which affects how much energy their body needs. For example, two patients with
              heart failure may have different cardiac function—one might be stable and active, while another
              might be in severe heart failure with limited activity. The more severe the illness, the more it
              can affect metabolic demands. This is why understanding the full clinical picture matters more
              than just knowing the diagnosis.
            </li>
            <li>
              <strong>Inflammation and stress response</strong>: When the body is dealing with inflammation,
              infection, surgery, or other stressors, it needs more energy. This is why someone recovering from
              surgery may need more than the same person when they're stable. The stress response increases
              metabolic demands, sometimes significantly. This can change day-to-day based on procedures, infections,
              or other clinical events. Nurses monitoring for signs of infection or inflammation, and clinicians
              tracking procedures and complications, can observe these changes.
            </li>
            <li>
              <strong>Physical activity</strong>: How much someone moves affects their energy needs. Someone who
              is walking daily, doing physical therapy, or generally more active needs more energy than someone
              who is bedbound or mostly sedentary. This can change during a hospital stay—someone might start
              bedbound after surgery but become more active as they recover. Nurses observing activity levels
              and clinicians tracking functional status notice these changes, which formulas can't predict.
            </li>
            <li>
              <strong>Age and functional status</strong>: Older adults may have different needs than younger
              adults, and functional status (how well someone can perform daily activities) matters too. Someone
              who is independent and active may have different needs than someone who is frail or dependent, even
              at the same age. Functional status can change during illness and recovery, affecting needs over time.
            </li>
          </ul>
          <EducationalNote variant="clinical-insight">
            <p>
              <strong>Clinical observation:</strong> Consider two patients with the same weight, age, and diagnosis.
              Patient A has more muscle mass (visible muscle definition, stronger grip), is more active, and has
              better organ function. Patient B has more fat mass, is less active, and has more severe illness.
            </p>
            <p>
              Even though they weigh the same, their actual energy needs may differ significantly. A formula that
              only considers weight would give both patients the same target, missing this important difference.
              This is why nurses observing activity levels and body composition, and clinicians considering illness
              severity and functional status, matter so much.
            </p>
          </EducationalNote>
          <p>
            These sources of variability mean that even with the same inputs (age, weight, condition), two people
            may have different actual needs. Formulas can't capture this individual variation, which is why they
            provide estimates, not exact requirements. This is also why clinical observation—what nurses see,
            what patients report, what the care team observes—is so valuable in nutrition assessment.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        4. Why Needs Change Over Time
        Educational Intent: Explains that needs are dynamic, not static,
        emphasizing that needs today may not be needs tomorrow. Highlights
        differences between acute illness, recovery, and rehabilitation, and
        emphasizes that reassessment is central to clinical nutrition.
      */}
      <ContentSection ariaLabelledBy="dynamic-heading">
        <SectionHeading id="dynamic-heading">
          Why Needs Change Over Time
        </SectionHeading>
        <ContentBlock>
          <p>
            A person's nutrition needs aren't static—they change over time. <strong>What someone needs today may
            not be what they need tomorrow</strong>. This dynamic nature is another reason why there's no universal
            number. Even if you could determine someone's "exact" need today, it might not be exact tomorrow.
          </p>
          <p>
            Understanding how needs change helps explain why a single calculation isn't enough. Here are three
            important ways needs shift over time:
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Acute Illness, Recovery, and Rehabilitation Differ
              </h3>
              <p>
                The same person has different needs depending on where they are in their illness and recovery:
              </p>
              <ul className="list-disc space-y-2 pl-6 mt-3">
                <li>
                  <strong>During acute illness</strong>: When someone is critically ill, their body may need more
                  energy to fight infection, heal, or maintain basic functions. However, they may also be unable to
                  tolerate much nutrition due to nausea, pain, or other symptoms. This creates a challenging
                  situation where needs might be high, but tolerance is low.
                </li>
                <li>
                  <strong>During recovery</strong>: As someone starts to recover, their body needs energy and protein
                  to rebuild tissue, heal wounds, and regain strength. This is often when needs are highest—the body
                  is both fighting illness and actively healing. At the same time, appetite and tolerance often improve,
                  making it possible to meet these increased needs.
                </li>
                <li>
                  <strong>During rehabilitation</strong>: As someone moves into rehabilitation, they're often more
                  active, which increases energy needs. However, the stress of acute illness may have passed, so
                  metabolic demands might be different than during the acute phase. The focus shifts from healing
                  to rebuilding strength and function.
                </li>
              </ul>
              <p className="mt-3">
                A calculation done during acute illness won't fit the recovery phase. A calculation done during
                recovery won't fit rehabilitation. This is why reassessment matters—the person's needs change
                as their situation changes.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Intake Tolerance Changes Before Needs Do
              </h3>
              <p>
                There's an important timing issue in clinical nutrition: <strong>what someone can actually tolerate
                often changes before their calculated needs do</strong>. This creates a gap between what formulas
                suggest and what's actually possible.
              </p>
              <p>
                For example, someone might be nauseous, in pain, or struggling with depression, making it difficult
                to eat. Their calculated needs might suggest 1,800 calories, but they can only tolerate 800–1,000
                calories right now. The calculation doesn't change, but their ability to meet it does.
              </p>
              <p>
                Conversely, as someone recovers, their appetite and tolerance often improve before their calculated
                needs decrease. They might be able to eat more than the initial calculation suggested, or they might
                need more than the calculation suggests because they're actively healing and becoming more active.
              </p>
              <p>
                This is why nurses' daily observations about what patients actually consume are so valuable—they
                show the gap between what's calculated and what's possible. It's also why addressing symptoms (nausea,
                pain, depression) is often the first step in nutrition care, before trying to meet calculated targets.
              </p>
            </div>
          </div>

          <EducationalNote variant="clinical-insight">
            <p>
              <strong>Why reassessment matters:</strong> Because needs change over time, reassessment is central to
              clinical nutrition. Initial estimates are starting points, not fixed targets. Regular reassessment
              helps ensure that nutrition support remains appropriate as circumstances change.
            </p>
            <p>
              In practice, this means:
            </p>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>
                Calculating needs once isn't enough—reassessment is typically needed regularly as the person's
                condition, activity, and tolerance change
              </li>
              <li>
                Nurses' daily monitoring of intake, symptoms, and patient response provides essential information
                for reassessment
              </li>
              <li>
                Clinicians' regular reassessment catches changes that calculations can't predict
              </li>
              <li>
                The care team adjusts the plan based on what's actually happening, not just what calculations suggest
              </li>
            </ul>
            <p className="mt-2">
              This ongoing process of assessment, monitoring, and adjustment is what makes nutrition care effective.
              It's not about finding the "right number" once—it's about staying responsive to change.
            </p>
          </EducationalNote>
          <p>
            This dynamic nature means that even if you could determine someone's "exact" need today, it might not
            be exact tomorrow. A single universal number can't account for this variability over time. This is why
            <strong>reassessment is central to clinical nutrition</strong>—not as an optional step, but as a core
            part of how nutrition care works.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        5. What Formulas Really Do (and Don't Do)
        Educational Intent: Explains what estimation formulas actually
        provide, their limitations, and why different methods produce
        different numbers. Clearly states that formulas do not "measure"
        true needs and emphasizes their role as starting estimates based
        on populations, not individuals.
      */}
      <ContentSection ariaLabelledBy="formulas-heading">
        <SectionHeading id="formulas-heading">
          What Formulas Really Do (and Don't Do)
        </SectionHeading>
        <ContentBlock>
          <p>
            Estimation formulas are valuable tools, but understanding what they actually do—and what they don't
            do—is essential for using them safely and effectively.
          </p>
          <EducationalNote variant="warning" title="Formulas Do Not 'Measure' True Needs">
            <p>
              <strong>It's important to understand: formulas do not "measure" true needs.</strong> They provide
              estimates based on population averages, not individual measurements. To actually measure someone's
              energy needs, you would need specialized equipment (like indirect calorimetry) that measures oxygen
              consumption and carbon dioxide production. Most clinical settings don't have this equipment, and
              even when they do, results can vary with time and conditions.
            </p>
            <p>
              Formulas estimate needs based on what worked for groups of people in research studies. They don't
              measure what a specific person actually needs. This distinction matters because it helps us understand
              that formulas provide starting points, not definitive answers.
            </p>
          </EducationalNote>

          <p className="mt-6">
            <strong>What formulas do:</strong>
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Provide a starting estimate</strong>: Formulas give you a reasonable starting point to begin
              with. This estimate can then be adjusted based on clinical observation, patient response, and ongoing
              monitoring. Think of it as a starting point, not a destination. For clinicians early in practice and
              students learning, this starting point helps structure initial thinking about what might be appropriate.
            </li>
            <li>
              <strong>Are based on populations, not individuals</strong>: Formulas were developed from studies of
              groups of people. They give you an average estimate for someone with similar characteristics (age,
              weight, activity level), not an individual requirement. Your specific patient may need more or less
              than the average person in those studies. This is why two patients with the same inputs can have
              different actual needs—they're individuals, not averages.
            </li>
            <li>
              <strong>Help structure thinking, not replace it</strong>: Formulas help organize information (age,
              weight, activity) in a systematic way, which supports clinical reasoning. They provide a framework
              for thinking about needs estimation. However, they don't replace the need to consider the whole person,
              their context, their response, and clinical judgment. They structure thinking—they don't do the
              thinking for you.
            </li>
          </ul>

          <p className="mt-6">
            <strong>What formulas don't do:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Provide exact individual requirements</strong>: They can't tell you what a specific person
              actually needs on a specific day. They provide estimates, not exact values.
            </li>
            <li>
              <strong>Account for all individual variation</strong>: They can't capture body composition differences,
              genetic factors, gut microbiome, or many other individual characteristics that affect needs.
            </li>
            <li>
              <strong>Predict dynamic changes</strong>: They can't account for how needs change day-to-day based
              on stress, sleep, illness fluctuations, or other dynamic factors.
            </li>
            <li>
              <strong>Replace clinical judgment</strong>: They can't see the whole person, assess tolerance, consider
              goals of care, or adapt to unique circumstances. That requires clinical judgment.
            </li>
            <li>
              <strong>Account for context</strong>: They can't consider goals of care, organ function, tolerance,
              practical constraints, or other contextual factors that shape what's actually appropriate.
            </li>
          </ul>

          <p className="mt-6">
            <strong>Why different formulas produce different numbers:</strong>
          </p>
          <p>
            Clinicians use various methods to estimate needs. These include simple weight-based rules (e.g.,
            "25–30 kcal/kg/day"), predictive equations (e.g., Harris-Benedict, Mifflin-St Jeor), and clinical
            judgment combined with guidelines.
          </p>
          <p>
            <strong>These methods often produce different numbers, and that's normal.</strong> It's not a sign
            that one is "wrong" or another is "right." Different methods exist because they were developed for
            different purposes, populations, or situations. For example:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Some formulas were developed for healthy populations and may not fit ill patients well
            </li>
            <li>
              Some were developed for specific age groups or conditions
            </li>
            <li>
              Some account for more factors (like activity) than others
            </li>
            <li>
              Some are simpler and easier to use, while others are more complex
            </li>
          </ul>
          <p>
            Experienced clinicians often use multiple methods, compare results, and choose a reasonable range
            based on the clinical context. The goal isn't to find the "correct answer," but to establish a
            <strong>safe, reasonable starting point</strong> that can be monitored and adjusted.
          </p>
          <EducationalNote variant="warning" title="The Risk of Overconfidence">
            <p>
              Treating formulas as if they provide exact answers can lead to overconfidence in numbers. This is
              a common pitfall for clinicians early in practice, nurses following protocols, and students learning
              calculations. Overconfidence can cause healthcare teams to overlook clinical signs (like poor wound
              healing, continued weight loss, or patient-reported fatigue) because "the calculation says they're
              getting enough." Formulas inform, but clinical judgment and patient response determine what's
              actually appropriate.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        6. Clinical Examples Illustrating Variability
        Educational Intent: Provides concrete examples showing how
        needs vary in real clinical situations, helping readers understand
        the concepts through practical scenarios
      */}
      <ContentSection ariaLabelledBy="examples-heading">
        <SectionHeading id="examples-heading">
          Clinical Examples Illustrating Variability
        </SectionHeading>
        <ContentBlock>
          <p>
            Real clinical examples help illustrate why there's no universal number. These scenarios show how
            the same calculation can mean different things in different situations, and why clinical judgment
            matters more than formulas.
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Example 1: Two Patients, Same Weight, Different Illness Severity
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              Two patients both weigh 70 kg and are 65 years old. Both have heart failure. A simple weight-based
              calculation might suggest the same target for both. However:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-3">
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">Patient A:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Stable heart failure, well-controlled</li>
                  <li>Walking daily, independent with activities</li>
                  <li>Good appetite, eating regular meals</li>
                  <li>No recent hospitalizations</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">Patient B:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Severe heart failure, recently decompensated</li>
                  <li>Short of breath with minimal activity, mostly bedbound</li>
                  <li>Poor appetite, feeling full quickly</li>
                  <li>Multiple recent hospitalizations</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-neutral-700">
              <strong>The reasoning:</strong> Patient A is stable and active, so their body needs energy for daily
              activities and maintaining their current status. Patient B is in severe heart failure, which increases
              metabolic demands, but they're also less active and struggling with appetite. The same calculation
              doesn't account for these differences. The care team needs to consider illness severity, activity level,
              and what the patient can actually tolerate—not just weight. This is why nurses observing activity and
              clinicians assessing illness severity matter so much.
            </p>
          </div>

          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Example 2: Same Patient, Different Stages of Illness
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              A 60-year-old patient is admitted with pneumonia. Over the course of their hospital stay, their needs
              change as their condition changes:
            </p>
            <div className="space-y-3 mb-3">
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Day 1 (Acute illness):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Fever, infection, body fighting illness</li>
                  <li>Bedbound, minimal activity</li>
                  <li>Poor appetite, feeling unwell</li>
                  <li>Body needs energy to fight infection, but patient can't eat much</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Day 5 (Recovery):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Infection improving, fever resolved</li>
                  <li>Starting to walk, more active</li>
                  <li>Appetite returning, eating better</li>
                  <li>Body needs energy for both recovery and increased activity</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Day 10 (Rehabilitation):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Infection resolved, stable</li>
                  <li>Very active, doing physical therapy</li>
                  <li>Good appetite, eating well</li>
                  <li>Body needs energy for activity and rebuilding strength</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-neutral-700">
              <strong>The reasoning:</strong> During acute illness, the body needs energy to fight infection, but
              the patient often can't eat much. During recovery, needs increase because the body is both fighting
              illness and healing, and activity is increasing. During rehabilitation, needs may be highest because
              the person is very active and rebuilding strength. A single calculation from Day 1 wouldn't fit Days
              5 or 10. This is why reassessment matters—the person's needs change as their situation changes. Nurses
              monitoring daily intake and clinicians reassessing regularly catch these changes.
            </p>
          </div>

          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Example 3: Adequate Energy, But Insufficient Protein
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              A patient recovering from surgery is eating well and meeting their estimated energy needs. However,
              the nurse notices:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 mb-3">
              <li>Wound healing is slow</li>
              <li>Patient is losing muscle mass despite eating enough calories</li>
              <li>Patient reports feeling weak</li>
              <li>Looking at what they're actually eating: mostly carbohydrates (bread, pasta, fruit), very little
              protein (meat, eggs, dairy)</li>
            </ul>
            <p className="text-sm text-neutral-700 mb-3">
              The patient is getting enough energy (calories), but not enough protein to support healing and maintain
              muscle mass.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>The reasoning:</strong> Energy and protein needs are different. Someone can meet their energy
              needs but still not get enough protein. This is especially important during recovery, when the body
              needs protein to heal wounds and rebuild tissue. Simply looking at total calories misses this. The care
              team needs to consider not just how much the patient is eating, but what they're eating. This is why
              nurses documenting what patients actually consume (not just how much) is so valuable—it reveals gaps
              that calculations might miss. The solution isn't necessarily more calories, but ensuring adequate protein
              within what the patient can tolerate.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 
        7. Common Mistakes When Chasing Exact Numbers
        Educational Intent: Addresses common mistakes that occur when
        treating estimates as exact values, correcting them gently without
        blame. Helps readers understand why these mistakes happen and how
        to avoid them.
      */}
      <ContentSection ariaLabelledBy="mistakes-heading">
        <SectionHeading id="mistakes-heading">
          Common Mistakes When Chasing Exact Numbers
        </SectionHeading>
        <ContentBlock>
          <p>
            When we treat calculated needs as exact values, several common mistakes can occur. These mistakes are
            understandable—they often come from wanting to do the right thing and having clear guidance. Understanding
            why these mistakes happen helps us avoid them and use clinical tools more safely.
          </p>
        </ContentBlock>
        <div className="mt-6 space-y-4 sm:space-y-5">
          <EducationalNote variant="common-pitfall" title='Treating Calculated Needs as Prescriptions'>
            <p>
              <strong>What happens:</strong> A calculation suggests a specific number (e.g., 1,800 calories), and
              the care team treats this as a prescription that must be met, regardless of what the patient can
              actually tolerate or what fits their situation.
            </p>
            <p>
              <strong>Why this happens:</strong> It's natural to want clear direction. A specific number feels
              definitive and actionable. For clinicians early in practice or nurses following protocols, having a
              clear target can feel reassuring.
            </p>
            <p>
              <strong>Why it's a problem:</strong> Calculations provide starting estimates, not prescriptions. What
              a person can actually tolerate, what fits their goals of care, and what's practically possible all
              matter more than what a formula suggests. Trying to force a specific number can lead to discomfort,
              intolerance, or inappropriate care.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians use calculations
              to establish a reasonable range, then start conservatively within that range. They adjust based on
              what the patient can actually tolerate and how they respond. The calculation guides them, but patient
              response determines the plan.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Ignoring Tolerance and Intake'>
            <p>
              <strong>What happens:</strong> The care team focuses on meeting calculated needs but doesn't pay enough
              attention to what the patient is actually eating or what they can tolerate. The nurse documents that
              the patient is eating only 30–40% of meals, but the plan doesn't change because "they need 1,800 calories."
            </p>
            <p>
              <strong>Why this happens:</strong> It's easy to focus on the target number and lose sight of what's
              actually happening. When there's a gap between what's calculated and what's possible, it can feel
              like the solution is to push harder to meet the target.
            </p>
            <p>
              <strong>Why it's a problem:</strong> What patients actually consume matters more than what calculations
              suggest they should consume. If someone can't tolerate the calculated amount, forcing it won't help.
              Ignoring tolerance and actual intake can lead to wasted food, patient discomfort, and missed opportunities
              to address underlying issues (like nausea, pain, or depression) that are preventing adequate intake.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians pay close attention
              to what patients actually eat and what they can tolerate. Nurses' daily documentation of intake is
              essential—it shows the gap between calculated needs and reality. Many care teams address symptoms and
              barriers to eating first, then gradually increase intake as tolerated. The goal is meeting needs
              within what's possible, not forcing an impossible target.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Overfeeding Early Acute Illness'>
            <p>
              <strong>What happens:</strong> A patient is admitted with severe infection or critical illness. The
              care team calculates needs and immediately tries to meet the full target, even though the patient is
              very ill, may be on a ventilator, and their body is in a stressed state.
            </p>
            <p>
              <strong>Why this happens:</strong> It's natural to want to support someone who's very ill. The
              calculation suggests a target, and it feels like meeting that target will help. There's often concern
              about underfeeding, which can lead to trying to maximize intake.
            </p>
            <p>
              <strong>Why it's a problem:</strong> During early acute illness, the body is in a stressed state.
              Overfeeding during this phase may increase metabolic stress, worsen organ function, or cause
              complications. The body may not be able to process large amounts of nutrition effectively during
              severe illness. Starting with aggressive feeding may not be appropriate.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> During early acute illness, many experienced
              clinicians start conservatively. The body's ability to process nutrition is often reduced during
              severe illness. They may gradually increase nutrition as the patient stabilizes and their condition
              improves. This is especially important in critical illness, where tolerance is often limited. The
              goal is supporting the body without overwhelming it during the most stressed phase.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Underestimating Protein in Elderly Patients'>
            <p>
              <strong>What happens:</strong> An elderly patient is recovering from surgery or illness. The care team
              focuses on meeting energy (calorie) needs but doesn't pay enough attention to protein. The patient
              may be getting enough calories but not enough protein to support healing and maintain muscle mass.
            </p>
            <p>
              <strong>Why this happens:</strong> It's common to focus on total calories as the main target. Protein
              needs can get overlooked, especially if the patient is eating and meeting calorie goals. For elderly
              patients, who may have reduced appetite and smaller portions, it's easy to miss that they're not getting
              enough protein within what they can eat.
            </p>
            <p>
              <strong>Why it's a problem:</strong> Elderly patients are at higher risk for muscle loss, especially
              during illness and recovery. They need adequate protein to heal wounds, maintain muscle mass, and
              recover function. Getting enough calories but not enough protein can lead to slow healing, continued
              muscle loss, weakness, and poor recovery. This is especially important because elderly patients may
              have less margin for error—they can't afford to lose muscle mass.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians pay attention to
              both energy and protein needs, especially in elderly patients. They look at what patients are actually
              eating—are they getting protein-rich foods, or mostly carbohydrates? Some care teams consider protein
              supplements or high-protein foods if needed, within what patients can tolerate. Nurses documenting
              what patients actually consume (not just how much) helps identify protein gaps. The goal is meeting
              both energy and protein needs, not just calories.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        8. How Clinicians Use Ranges Instead of Targets
        Educational Intent: Explains why clinicians work with ranges,
        how ranges allow flexibility, and how monitoring guides adjustment.
        Avoids specific numeric cutoffs to focus on concepts and reasoning.
      */}
      <ContentSection ariaLabelledBy="ranges-heading">
        <SectionHeading id="ranges-heading">
          How Clinicians Use Ranges Instead of Targets
        </SectionHeading>
        <ContentBlock>
          <p>
            Instead of chasing exact numbers, experienced clinicians think in <strong>ranges</strong>. This
            approach acknowledges uncertainty, allows flexibility, and supports safer nutrition care.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Why Clinicians Work with Ranges
              </h3>
              <p>
                Clinicians work with ranges because they recognize that nutrition needs are estimates, not exact
                values. A range acknowledges that we don't know the precise need—we're working with estimates
                based on population averages, not individual measurements.
              </p>
              <p>
                Working with ranges is more honest than claiming an exact number. It reflects the reality that
                different estimation methods produce different results, and that's normal. It also acknowledges
                that individual variation means the same calculation might not fit everyone, or even the same
                person in different situations.
              </p>
              <p>
                Ranges also prevent overconfidence. A single number can feel like a "target" to hit precisely, which
                isn't how nutrition works. Ranges remind us that we're working with estimates, not exact values.
                This helps clinicians, nurses, and students avoid the trap of treating calculations as definitive
                answers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                How Ranges Allow Flexibility
              </h3>
              <p>
                Ranges allow flexibility because a person might do well anywhere within the range, depending on
                their appetite, tolerance, activity level, and other factors. This flexibility is important when
                dealing with real patients who have varying daily capacity.
              </p>
              <p>
                For example, someone might do well at the lower end of the range on days when they're feeling unwell
                or have less appetite, and at the higher end on days when they're feeling better and more active.
                The range accommodates this natural variation without creating rigid targets that don't fit reality.
              </p>
              <p>
                Ranges also allow the care team to start conservatively and adjust based on what the patient can
                actually tolerate. Instead of trying to hit an exact number immediately, the team can start within
                the range and adjust up or down based on patient response. This approach is safer and more realistic
                than forcing a specific target.
              </p>
              <p>
                This flexibility is especially important because tolerance and intake can change day-to-day. A
                range accommodates these changes, while a single number would require constant adjustment or create
                unrealistic expectations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                How Monitoring Guides Adjustment
              </h3>
              <p>
                Ranges guide monitoring and adjustment. If someone consistently falls below the range, it signals
                a need to reassess—maybe the range needs adjustment, or maybe there are barriers to eating that need
                to be addressed. If someone consistently exceeds the range, it might signal that the range needs
                adjustment, or that there are concerns about overfeeding.
              </p>
              <p>
                However, the range itself isn't the only guide. More importantly, monitoring how the person responds
                guides adjustment. If someone is doing well (healing, maintaining weight, feeling better) even if
                they're below the calculated range, that might be appropriate for them. If someone is struggling
                (poor healing, continued weight loss, weakness) even if they're meeting the range, that signals
                a need to reassess.
              </p>
              <p>
                Nurses' daily monitoring of intake, symptoms, and patient response provides essential information
                for adjustment. This monitoring shows not just whether someone meets a number, but how they're
                actually responding. Clinicians use this information to adjust the plan—not just to hit a target,
                but to support the person's actual needs and response.
              </p>
              <p>
                This ongoing process of monitoring and adjustment is what makes ranges useful. The range provides
                structure and guidance, but patient response determines the actual plan. This is why reassessment
                is central to clinical nutrition—the range is a starting point, not a fixed destination.
              </p>
            </div>
          </div>

          <EducationalNote variant="clinical-insight">
            <p>
              <strong>How experienced clinicians work:</strong> A clinician calculates needs using multiple methods
              and gets different results from each method. They establish a range to account for this variation and
              uncertainty. They start the patient conservatively within the range. The nurse monitors daily intake
              and observes how the patient is tolerating nutrition and how they're responding clinically. Based on
              this monitoring, the care team adjusts—they might gradually increase if the patient is tolerating well
              and showing signs of improvement, or they might stay where they are, or even decrease if there are
              concerns. The range guides them, but patient response determines the actual plan.
            </p>
          </EducationalNote>
          <p>
            This approach recognizes that nutrition needs are complex, dynamic, and context-dependent. There's no
            universal number because people and situations are too varied for simple answers. Ranges provide
            structure while maintaining the flexibility that real clinical care requires.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        9. What to Take Away
        Educational Intent: Synthesizes key points with a calm, reassuring
        tone. Summarizes the three main takeaways: no single correct number
        exists, numbers support thinking not decisions, and clinical context
        and reassessment matter most.
      */}
      <ContentSection ariaLabelledBy="takeaway-heading">
        <SectionHeading id="takeaway-heading" variant="blue">
          What to Take Away
        </SectionHeading>
        <ContentBlock>
          <p>
            Understanding why there's no universal number for nutrition needs can feel overwhelming at first, but
            it's actually reassuring. It means you don't need to find the "perfect" number—you need to think
            thoughtfully about what's appropriate for each person in their specific situation. Here are the key
            takeaways to guide your practice:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              No Single Correct Number Exists
            </h3>
            <p className="text-blue-800 mb-2">
              This is actually good news. It means you don't need to worry about finding the "perfect" answer.
              Different estimation methods produce different numbers, and that's normal. Patients with the same
              weight may have different needs. Needs change over time. This variation is real and expected—it's
              not a flaw in your assessment or a sign that you're doing something wrong.
            </p>
            <p className="text-blue-800">
              Instead of chasing an exact number, think in ranges. Ranges acknowledge uncertainty and allow
              flexibility. They provide useful guidance without creating rigid targets that don't fit reality.
              This approach is more honest and more practical than trying to find a single "correct" answer.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Numbers Support Thinking, Not Decisions
            </h3>
            <p className="text-blue-800 mb-2">
              Clinical tools—calculators, formulas, screening tools—are valuable. They help you estimate needs,
              identify ranges, and structure your thinking. They provide starting points and help you consider
              important factors. But they don't make decisions for you.
            </p>
            <p className="text-blue-800">
              Numbers inform your thinking, but clinical judgment guides your decisions. The whole person—their
              symptoms, their context, their response, their goals of care—matters more than any calculation.
              Use tools to support your thinking, but let judgment determine the plan. This isn't about ignoring
              numbers—it's about using them appropriately, as aids to thinking rather than replacements for judgment.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Clinical Context and Reassessment Matter Most
            </h3>
            <p className="text-blue-800 mb-2">
              The most important factors in nutrition care aren't the numbers from calculations—they're the clinical
              context and ongoing reassessment. What's the person's situation? What are their goals? What can they
              actually tolerate? How are they responding? These questions matter more than any formula.
            </p>
            <p className="text-blue-800">
              Reassessment is central to clinical nutrition. Initial estimates are starting points, not fixed
              targets. Regular reassessment—informed by nurses' daily monitoring, patient response, and clinical
              changes—ensures that nutrition support remains appropriate as circumstances change. This ongoing
              process of assessment, monitoring, and adjustment is what makes nutrition care effective. It's not
              about finding the right number once—it's about staying responsive to change.
            </p>
          </div>

          <EducationalNote variant="info" title="A Calm Reminder">
            <p>
              If you're feeling uncertain about nutrition needs estimation, that's understandable. This is complex,
              and there's no simple answer. But remember: you don't need to find the perfect number. You need to
              think thoughtfully, consider the whole person, monitor response, and adjust as needed. That's what
              experienced clinicians do—not because they have all the answers, but because they recognize that
              thoughtful, responsive care matters more than exact calculations.
            </p>
            <p>
              Use tools to support your thinking. Pay attention to what patients actually consume and how they
              respond. Consider clinical context. Reassess regularly. Trust your judgment. This approach—thinking
              in ranges, monitoring response, adjusting as needed—is how effective nutrition care works. You don't
              need to have all the answers right away. You just need to think thoughtfully and stay responsive to
              what you observe.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        Learn More
        Educational Intent: Guides readers to more detailed content
        about needs estimation and assessment processes
      */}
      <ContentSection ariaLabelledBy="learn-more-heading">
        <SectionHeading id="learn-more-heading" variant="blue">
          Learn More
        </SectionHeading>
        <ContentBlock>
          <p>
            This page explains why there's no universal number. For more detailed information about how
            needs are estimated in practice, explore these resources:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Needs Estimation in Detail
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Learn more about different estimation methods, why ranges matter, and how clinicians
              approach needs estimation in practice.
            </p>
            <Link
              href="/knowledge/needs-estimation"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Read about needs estimation →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              The Complete Assessment Process
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Understand how needs estimation fits into the broader assessment process, including
              screening and intake assessment.
            </p>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Read the assessment guide →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Interactive Tools
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Practice needs estimation with our interactive calculator, designed for learning:
            </p>
            <Link
              href="/tools/energy-protein-calculator"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Energy & Protein Calculator →
            </Link>
            <p className="text-xs text-blue-700 mt-2 italic">
              This tool is for educational purposes only and should not be used for clinical decision-making.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 
        Safety & Limitations
        Educational Intent: Clearly states the educational purpose and
        limitations, ensuring readers understand this is not a clinical tool
      */}
      <ContentSection ariaLabelledBy="safety-heading">
        <SectionHeading id="safety-heading" variant="amber">
          Safety & Limitations
        </SectionHeading>
        <EducationalNote variant="warning" title="⚠️ Important Disclaimer">
          <p className="mb-2">
            <strong>This site and its content are for educational purposes only.</strong> They do not provide
            medical advice, diagnosis, or treatment. They do not create a clinician–patient relationship.
            They must not be used for clinical decision-making, prescribing diets or feeds, or making
            treatment decisions.
          </p>
          <p>
            If you have concerns about nutrition status or health, consult with a qualified healthcare
            provider or registered dietitian for a personalized, clinical assessment.
          </p>
        </EducationalNote>

        <ContentBlock className="mt-6">
          <p>
            This content is designed to support learning and understanding of clinical nutrition concepts.
            It helps you understand why nutrition needs can't be reduced to universal numbers and how
            clinicians think about needs estimation in practice.
          </p>
          <p>
            However, this content cannot and should not be used to make clinical decisions. Real clinical
            assessment requires comprehensive evaluation, professional judgment, and consideration of the
            full clinical context—none of which can be captured by educational content alone.
          </p>
        </ContentBlock>
      </ContentSection>
    </main>
  );
}
