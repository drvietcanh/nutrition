'use client';

/**
 * Why Intake Falls Short Page
 * 
 * Educational Purpose: This page helps readers understand:
 * - Why calculating needs does not guarantee adequate intake
 * - Why intake failure is common and expected in illness
 * - How clinicians interpret intake gaps realistically
 * 
 * Target Audience: Clinicians, nurses, dietitians, and medical students who need
 * to understand the gap between calculated needs and actual intake.
 * 
 * Design Philosophy: 
 * - Normalize the problem: Intake gaps are common and expected, not failures
 * - Reduce frustration and blame: Help readers understand this isn't anyone's fault
 * - Improve practical reasoning: Guide realistic interpretation of intake gaps
 */

import Link from 'next/link';
import KnowledgeSection from './components/KnowledgeSection';
import ClinicalRealityCallout from './components/ClinicalRealityCallout';
import CommonPitfallCallout from './components/CommonPitfallCallout';
import FactorCard from './components/FactorCard';

export default function WhyIntakeFallsShortPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Educational: Opening scenario normalizes the experience and reduces frustration.
          Uses relatable timeline (Monday to Friday) to help readers identify with the situation. */}
      {/* 1. Title & Opening Scenario */}
      {/* Educational: Opening scenario normalizes the experience and reduces frustration.
          Uses relatable timeline (Monday to Friday) to help readers identify with the situation. */}
      <header className="space-y-4">
        <h1 className="text-2xl font-semibold sm:text-3xl text-gray-900">
          Why Nutritional Intake Often Falls Short of Calculated Requirements
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            <strong>Monday morning:</strong> You assess a 65-year-old patient recovering from surgery. 
            Using standard equations, you calculate their nutritional needs: 1,800 kcal and 80g protein per day. 
            You order a regular diet with high-protein supplements twice daily. The plan looks solid.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            <strong>Friday afternoon:</strong> You review the week's intake records. Despite your careful 
            calculation and appropriate orders, the patient has been consuming only about 1,200 kcal and 50g 
            protein per day—roughly 65% of what you calculated they need. You wonder: "Why is there such a gap?"
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            If this scenario feels familiar, you're not alone. This gap between calculated requirements and 
            actual intake happens every day in clinical practice. It's not a failure—it's the reality of 
            providing nutrition care to people who are unwell.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Understanding why this happens—and that it's expected—helps us interpret intake gaps with 
            empathy rather than frustration, make practical decisions, and provide better care. This page 
            explores the real-world factors that create these gaps and how to think about them realistically.
          </p>
        </div>
      </header>

      {/* 2. The Gap Between Calculation and Reality */}
      {/* Educational: Explains why calculated needs and actual intake differ.
          Normalizes gaps and sets realistic expectations. Uses visual comparison
          to help readers understand the concept. */}
      <section
        aria-labelledby="reality-gap-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="reality-gap-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          The Gap Between Calculation and Reality
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          In clinical nutrition, there's often a difference between:
        </p>
        {/* Educational: Visual comparison helps readers understand the distinction
            between calculated requirements (ideal) and actual intake (reality). */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Calculated Requirements</h3>
            <p className="text-sm text-gray-700">
              The estimated nutritional needs based on equations, clinical assessment, and guidelines. 
              This represents what we <em>aim for</em>, not necessarily what we can achieve.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Actual Intake</h3>
            <p className="text-sm text-gray-700">
              What the patient <em>actually</em> consumes or receives. This is what affects 
              health outcomes, and it's often less than calculated needs—and that's okay.
            </p>
          </div>
        </div>

        {/* Educational: Three key concepts that explain why gaps occur.
            Each concept builds understanding without blame. */}
        <div className="space-y-4 mt-6">
          {/* Educational: Helps readers understand that calculations have limitations
              and don't account for real-world barriers. */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Calculations Assume Ideal Conditions</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nutritional equations and guidelines are based on research conducted under relatively controlled 
              conditions. They assume patients can eat when hungry, have normal appetite, aren't interrupted 
              by procedures, and have access to appealing food at appropriate times. In reality, clinical 
              settings are far from ideal. Patients are unwell, procedures interrupt meals, medications affect 
              appetite, and food service operates on fixed schedules. The calculation gives us a target, but 
              it doesn't account for the real-world barriers patients face.
            </p>
          </div>

          {/* Educational: Explains compounding effect of multiple barriers.
              Helps readers understand why gaps are so common. */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Real Patients Face Multiple Barriers</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Unlike the ideal conditions assumed by calculations, real patients face multiple barriers 
              simultaneously. A patient might be nauseous from medications, miss meals due to procedures, 
              find hospital food unappealing, and be too fatigued to eat—all in the same day. These barriers 
              don't just add up; they compound. When a patient is nauseous, they're less likely to eat 
              even if food is available. When they miss a meal due to a procedure, they may not feel hungry 
              when the next meal arrives. Understanding that multiple barriers work together helps explain 
              why intake gaps are so common.
            </p>
          </div>

          {/* Educational: Reframes intake as dynamic process, not static event.
              Helps readers understand why monitoring and adjustment matter. */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Intake Is a Process, Not a Single Event</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              We often think of nutrition intake as a simple equation: order food → patient eats → needs met. 
              But intake is actually a complex process that happens over time, influenced by many factors. 
              A patient's ability and willingness to eat changes throughout the day, from day to day, and 
              as their condition changes. What they can eat on Monday after surgery may be very different 
              from what they can eat on Friday as they recover. Intake isn't a single event we can control—it's 
              an ongoing process that we monitor, support, and adapt to as the patient's situation evolves.
            </p>
          </div>
        </div>

        {/* Educational: Normalizes intake gaps as expected, not failures */}
        <ClinicalRealityCallout>
          <p className="mb-2">
            Intake gaps are common and expected, especially during acute illness. This is not a failure 
            of the patient, the care team, or the system. It's a normal part of clinical nutrition practice.
          </p>
          <p>
            Calculating needs gives us a target, but many factors beyond our control affect whether 
            that target is reached. The goal is not perfection, but understanding the gap and making 
            realistic, practical decisions about nutrition care.
          </p>
        </ClinicalRealityCallout>

        {/* Educational: Role-specific examples help different readers see themselves
            in the scenarios. Reduces frustration by normalizing the experience. */}
        {/* Practical Examples for Different Roles */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Real-World Scenarios You Might Encounter:</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium mb-1">As a nurse documenting intake:</p>
              <p className="text-gray-600">
                You note that a patient ordered for 1,800 kcal/day only ate about 50% of each meal. 
                This isn't unusual—especially if they had a procedure today or are experiencing nausea. 
                Document what they actually consumed. The team needs to know the real intake, not what was served.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">As a clinician reviewing intake:</p>
              <p className="text-gray-600">
                You see a patient receiving 70% of calculated needs. Before adjusting orders, consider: 
                Is this expected given their clinical situation? Are they improving? Sometimes 70% is 
                adequate for the current context, and intake will improve as they recover.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">As a medical student on rounds:</p>
              <p className="text-gray-600">
                You hear that a patient isn't meeting their nutritional goals. This is a learning 
                opportunity—ask why. Understanding the factors (procedures, symptoms, system issues) 
                helps you learn to interpret intake gaps realistically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Patient-Related Factors */}
      {/* Educational: Explains patient-specific barriers without blame.
          Emphasizes these are normal responses to illness, not patient failures.
          Each factor card normalizes a specific barrier. */}
      <section
        aria-labelledby="patient-factors-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="patient-factors-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Patient-Related Factors
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          During illness, the body and mind respond in ways that naturally reduce intake. These aren't 
          failures or refusals—they're normal physiological and psychological responses to being unwell. 
          <strong> These factors are common and expected</strong> in clinical practice. Understanding this 
          helps us approach intake gaps with empathy rather than frustration:
        </p>

        {/* Educational: Each factor card explains a specific barrier with
            emphasis on "common and expected" to reduce blame. */}
        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Poor Appetite</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Loss of appetite (anorexia) is one of the most common reasons for reduced intake during illness. 
              It can be caused by:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>The body's stress response to illness (inflammatory cytokines suppress appetite)</li>
              <li>Pain, discomfort, or nausea</li>
              <li>Medications that affect appetite</li>
              <li>Depression or anxiety</li>
              <li>Fatigue making eating feel like too much effort</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Poor appetite during illness is a normal 
              physiological response, not a patient choice or lack of willpower. It's the body's way of 
              conserving energy for healing.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Early Satiety</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Patients may feel full after eating only small amounts. This can occur due to:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Delayed gastric emptying from illness or medications</li>
              <li>Abdominal distension or pressure</li>
              <li>Slowed digestion during illness</li>
              <li>Medications affecting stomach motility</li>
              <li>Anxiety affecting digestion</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Early satiety is a normal response to illness, 
              not a sign that the patient isn't trying. They physically cannot eat more, even if they want to.
            </p>
          </article>

          <article className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fatigue</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Illness and treatment cause fatigue that makes eating physically exhausting:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Chewing and swallowing require energy that patients may not have</li>
              <li>Meal preparation or self-feeding becomes too tiring</li>
              <li>Patients may fall asleep during meals</li>
              <li>Fatigue reduces motivation to eat</li>
              <li>Treatment side effects compound fatigue</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Fatigue during illness is normal. Eating requires 
              energy, and when patients are exhausted, eating can feel overwhelming. This isn't laziness—it's 
              the reality of being unwell.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Taste Changes</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Illness, medications, and treatments can dramatically alter how food tastes:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Metallic taste from medications or treatments</li>
              <li>Altered taste perception (dysgeusia) making food taste bland, bitter, or "off"</li>
              <li>Loss of taste sensation</li>
              <li>Foods that were once favorites become unappealing</li>
              <li>Changes in smell affecting taste perception</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Taste changes are normal side effects of illness 
              and treatment. When food doesn't taste right, patients naturally eat less. This isn't pickiness—it's 
              a physiological response.
            </p>
          </article>

          <article className="border-l-4 border-pink-500 bg-pink-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Psychological Stress</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              The stress of illness and hospitalization significantly impacts eating:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Anxiety about diagnosis, treatment, or outcomes</li>
              <li>Depression reducing interest in food</li>
              <li>Stress from being in an unfamiliar environment</li>
              <li>Worry about family, work, or finances</li>
              <li>Fear about food safety, restrictions, or making things worse</li>
              <li>Grief, sadness, or emotional distress</li>
              <li>Loss of control and independence</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Psychological stress during illness is normal. 
              It's not a character flaw or lack of resilience—it's a natural response to being unwell and 
              facing uncertainty. Stress directly affects appetite and digestion.
            </p>
          </article>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
            Common Pitfall
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Avoid assuming a single factor causes intake gaps.</strong> These factors often occur 
            together. A patient might have poor appetite <em>and</em> early satiety <em>and</em> fatigue 
            <em>and</em> taste changes <em>and</em> psychological stress—all at the same time. This 
            compounding effect is why intake gaps are so common. It's not that patients aren't trying; 
            it's that multiple normal responses to illness are working together to reduce intake.
          </p>
        </div>
      </section>

      {/* 4. Illness-Related Factors */}
      {/* Educational: Explains how illness itself creates barriers to eating.
          Emphasizes these are direct consequences of being unwell, not patient choices.
          Helps readers understand why intake failure is expected in illness. */}
      <section
        aria-labelledby="illness-factors-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="illness-factors-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Illness-Related Factors
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Illness itself creates barriers to eating. These are direct consequences of being unwell, not 
          patient choices or failures. Understanding how illness affects intake helps clinicians interpret 
          gaps realistically:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-cyan-500 bg-cyan-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Inflammation</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              When the body is fighting infection or healing from injury, inflammation occurs. This natural 
              response affects eating in several ways:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Inflammatory signals suppress appetite—this is the body's way of conserving energy</li>
              <li>Patients may feel generally unwell and not want to eat</li>
              <li>Fever and malaise reduce interest in food</li>
              <li>Even when patients want to eat, inflammation can make eating feel difficult</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Reduced appetite during inflammation is a normal 
              physiological response. As inflammation resolves, appetite typically returns.
            </p>
          </article>

          <article className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Pain</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Pain directly interferes with eating:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Pain reduces appetite and makes eating unpleasant</li>
              <li>Chewing or swallowing may be painful (e.g., after surgery, with mouth sores)</li>
              <li>Abdominal pain makes eating feel risky or uncomfortable</li>
              <li>Pain medications may cause nausea or drowsiness</li>
              <li>Patients may avoid eating to prevent triggering pain</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> When patients are in pain, eating becomes a 
              lower priority. Pain management often takes precedence over nutrition, and that's appropriate.
            </p>
          </article>

          <article className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Nausea</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Nausea is one of the most common barriers to eating during illness:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Nausea makes the thought of food unappealing</li>
              <li>Patients may be afraid to eat because they fear vomiting</li>
              <li>Even small amounts of food can trigger nausea</li>
              <li>Nausea can be constant or come in waves</li>
              <li>Smells of food may trigger nausea</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Nausea during illness is normal. It's not that 
              patients don't want to eat—they physically cannot tolerate food when nauseous. This is a 
              protective mechanism.
            </p>
          </article>

          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Dyspnea (Breathing Difficulties)</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              When patients have trouble breathing, eating becomes challenging:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Breathing takes priority over eating—patients focus on getting air, not food</li>
              <li>Chewing and swallowing require holding breath briefly, which is difficult when dyspneic</li>
              <li>Eating increases oxygen demand, making breathing feel harder</li>
              <li>Patients may need oxygen during meals, which can interfere with eating</li>
              <li>Anxiety about breathing can reduce appetite</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> When patients are struggling to breathe, eating 
              is understandably not a priority. Breathing comes first, and that's appropriate.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Functional Limitations</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Illness can limit a patient's ability to physically eat:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Weakness or paralysis preventing self-feeding</li>
              <li>Difficulty swallowing (dysphagia) requiring modified textures or tube feeding</li>
              <li>Hand tremors, coordination problems, or weakness making it hard to hold utensils</li>
              <li>Positioning restrictions (e.g., must stay flat, can't sit up to eat)</li>
              <li>Dependence on others to feed them, which may not always be available</li>
              <li>Fatigue making the physical act of eating too exhausting</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Functional limitations are consequences of illness 
              or treatment, not patient choices. Patients may want to eat but physically cannot do so 
              independently or safely.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Clinical Reality
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            These illness-related factors often occur together. A patient might have inflammation 
            <em>and</em> pain <em>and</em> nausea <em>and</em> dyspnea <em>and</em> functional 
            limitations—all at once. This compounding effect explains why intake gaps are so common 
            during acute illness. It's not a failure—it's the reality of being unwell.
          </p>
        </div>
      </section>

      {/* 5. Care-Delivery Factors */}
      {/* Educational: Explains practical issues in care delivery that affect intake.
          Highlights "Prescribed ≠ Delivered" concept. Helps readers understand
          system-level factors without blaming individuals. */}
      <section
        aria-labelledby="care-delivery-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="care-delivery-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Care-Delivery Factors
        </h2>
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mb-4">
          <p className="text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
            Clinical Reality
          </p>
          <p className="text-base text-gray-900 leading-relaxed font-semibold mb-2">
            Prescribed ≠ Delivered
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            What is <strong>prescribed</strong> (ordered, planned, recommended) is often different from what 
            is <strong>delivered</strong> (actually consumed or received). This gap is common and expected. 
            Only delivered nutrition affects patient outcomes—a perfect prescription that isn't consumed 
            doesn't help the patient.
          </p>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          How care is delivered—from meal service to feeding tube management—affects intake. These practical 
          issues are inherent to providing care in busy clinical environments:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fasting for Procedures</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Patients frequently miss meals due to fasting requirements:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>NPO (nothing by mouth) orders before procedures, surgeries, or tests</li>
              <li>Extended fasting periods when procedures are delayed</li>
              <li>Multiple procedures requiring repeated fasting over several days</li>
              <li>Unclear or overly conservative NPO orders extending beyond necessary time</li>
              <li>Delayed meal service after procedures, even when NPO is lifted</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A patient ordered for breakfast, lunch, and dinner may miss lunch 
              entirely if they're NPO from midnight for a 2 PM procedure. Even after the procedure, they 
              may not receive a meal until dinner time—missing an entire meal.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For nurses:</strong> You may see patients who are NPO for extended periods due to 
              procedure delays or multiple tests. This is expected, not a documentation error. 
              <strong>For medical students:</strong> Understanding that procedures require fasting helps 
              explain why intake gaps occur even when nutrition is ordered.
            </p>
            <p className="text-sm text-gray-600 italic mt-1">
              <strong>This is common and expected.</strong> Fasting for procedures is necessary for safety, 
              not a system failure. These interruptions are expected parts of clinical care.
            </p>
          </article>

          <article className="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Missed Meals</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Meals may be missed for reasons beyond fasting:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Meals arrive during procedures, tests, or when patient is sleeping</li>
              <li>Patient is off the unit for imaging or other tests during meal times</li>
              <li>Meals are delayed due to staffing or logistics issues</li>
              <li>Patient is too unwell to eat when meal arrives</li>
              <li>Meals are removed before patient can eat (e.g., due to procedure timing)</li>
              <li>Patient refuses meal, and no alternative is offered in time</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A patient ordered for three meals per day may only receive two if 
              breakfast arrives while they're in radiology, lunch is removed because they're going to 
              surgery, and dinner arrives when they're too nauseous to eat.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> In busy clinical settings, meals may be missed 
              due to competing priorities. This isn't a failure—it's the reality of complex care.
            </p>
          </article>

          <article className="border-l-4 border-teal-500 bg-teal-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Feeding Interruptions</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Tube feeding is frequently interrupted, reducing delivered nutrition:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Holds for procedures, tests, or medications</li>
              <li>Pump malfunctions or disconnections</li>
              <li>High gastric residuals requiring rate reduction or temporary hold</li>
              <li>Tube dislodgement or clogging</li>
              <li>Patient positioning issues affecting tolerance</li>
              <li>Overnight alarms that aren't addressed immediately</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A patient ordered for 1,600 kcal/day via continuous tube feeding 
              at 80 mL/hour may only receive 1,000-1,200 kcal/day due to:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mt-1">
              <li>4-hour hold before procedure + 4-hour hold after = 8 hours without feeding (33% reduction)</li>
              <li>Rate reduced to 40 mL/hour for tolerance issues (50% reduction)</li>
              <li>Overnight pump alarm that wasn't addressed for 2 hours</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>For nurses monitoring tube feeds:</strong> Check the pump's <strong>delivered volume</strong>, 
              not just the ordered rate. The ordered rate tells you what was prescribed, but the delivered 
              volume tells you what the patient actually received.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Tube feeding interruptions are necessary for 
              procedures, safety, and tolerance. The goal is to monitor and minimize gaps, not eliminate 
              all interruptions.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Poor Timing of Meals</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Meal timing may not align with when patients can actually eat:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Fixed meal times that don't match patient appetite patterns</li>
              <li>Meals served when patient is nauseous, in pain, or too tired</li>
              <li>Meals arrive during peak medication side effects</li>
              <li>Insufficient time between meals for digestion</li>
              <li>Meals served when patient is most symptomatic (e.g., morning nausea)</li>
              <li>No snacks available between scheduled meals when patient feels able to eat</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A patient with morning nausea may be unable to eat breakfast at 
              8 AM but feel ready to eat at 10 AM. However, the next meal isn't until noon, and by then 
              they may be nauseous again or have missed their window of opportunity.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For nurses:</strong> You may notice patients who can't eat during scheduled meal 
              times due to symptoms, procedures, or sleep. This is a common reality. Documenting actual 
              intake (not just what was served) helps the team understand the real situation.
            </p>
            <p className="text-sm text-gray-600 italic mt-1">
              <strong>This is common and expected.</strong> Fixed meal times are necessary for efficient 
              food service operations. This is a system constraint, not a failure. We work within these 
              constraints while finding ways to optimize intake.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Clinical Reality
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Prescribed nutrition (what's ordered) and delivered nutrition (what's actually consumed) 
            are often different. This gap is normal and expected. Regular intake assessment helps identify 
            the real gap between prescription and delivery, allowing clinicians to make informed decisions 
            about nutrition care.
          </p>
        </div>
      </section>

      {/* 6. System & Workflow Factors */}
      {/* Educational: Explains system-level challenges that affect intake.
          Maintains system-focused tone, not blaming individuals. Helps readers
          understand structural constraints in healthcare delivery. */}
      <section
        aria-labelledby="system-workflow-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="system-workflow-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          System & Workflow Factors
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Healthcare systems and workflows create inherent challenges that affect intake. These aren't 
          failures of individual staff or departments—they're realities of providing care in busy, complex 
          environments. Understanding these system-level factors helps explain why intake gaps occur even 
          when everyone is doing their best:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Staffing Constraints</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Limited staffing affects nutrition care in several ways:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Not enough staff to assist patients with meals</li>
              <li>Staff pulled to other patient care needs during meal times</li>
              <li>Insufficient time to encourage eating or offer alternatives</li>
              <li>Limited availability to monitor tube feeding or respond to alarms promptly</li>
              <li>High patient-to-staff ratios making individualized attention difficult</li>
              <li>Staff fatigue affecting ability to provide optimal nutrition support</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A nurse may want to help a patient eat, but if they're managing 
              multiple patients with competing care needs, meal assistance may not be possible. This isn't a 
              failure of the nurse—it's a system constraint.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Staffing constraints are system-level issues, 
              not individual failures. Healthcare workers do their best within available resources, but 
              limited staffing affects all aspects of care, including nutrition.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Lack of Monitoring</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Inadequate monitoring of nutrition intake can allow gaps to go unnoticed:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>No systematic process for tracking actual intake vs. ordered nutrition</li>
              <li>Tube feeding pumps not regularly checked for delivered volume</li>
              <li>Intake documentation not consistently reviewed or acted upon</li>
              <li>No alerts or flags when intake falls below thresholds</li>
              <li>Limited visibility of intake trends over time</li>
              <li>Gaps between shifts in monitoring continuity</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A patient's tube feeding may be running at the ordered rate, but 
              if no one checks the pump's delivered volume, interruptions may go unnoticed. The system 
              assumes delivery matches orders, but reality may differ.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Monitoring gaps are system-level issues related 
              to workflow design, not individual oversight. Without systematic monitoring processes, intake 
              gaps can persist unnoticed.
            </p>
          </article>

          <article className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Communication Gaps</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Communication challenges between team members affect nutrition care:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Nutrition goals not clearly communicated to all team members</li>
              <li>Intake concerns not passed between shifts effectively</li>
              <li>Dietitian recommendations not consistently shared with nursing staff</li>
              <li>Changes in patient condition affecting intake not communicated promptly</li>
              <li>Family-provided foods or supplements not communicated to the team</li>
              <li>Multiple communication channels (chart, verbal, electronic) leading to missed information</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> A dietitian may recommend a specific approach to improve intake, 
              but if this isn't communicated clearly to nursing staff, it may not be implemented. This 
              isn't anyone's fault—it's a communication system issue.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Communication gaps are inherent to complex 
              healthcare systems with multiple team members, shifts, and communication channels. These 
              are system-level challenges, not individual communication failures.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Inadequate Follow-Up</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Limited follow-up on nutrition support can allow intake gaps to persist:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>No systematic process to check if nutrition support approaches were effective</li>
              <li>Supplements ordered but not consistently offered or consumed</li>
              <li>Diet modifications made but not followed up to assess impact</li>
              <li>Intake concerns identified but not revisited</li>
              <li>No clear responsibility for following up on nutrition support</li>
              <li>Limited time or resources for ongoing nutrition monitoring</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Example:</strong> High-protein supplements may be ordered, but if there's no follow-up 
              to ensure they're actually being offered and consumed, the intended effect may not be achieved. 
              This isn't a failure of individual staff—it's a system issue with follow-up processes.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>This is common and expected.</strong> Inadequate follow-up is a system-level issue 
              related to workflow design and resource allocation, not individual neglect. Without systematic 
              follow-up processes, nutrition support may not achieve its intended effect.
            </p>
          </article>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
            Common Pitfall
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Avoid blaming individuals for system-level issues.</strong> These system and workflow 
            factors are not about individual performance or effort. They're about how healthcare systems are 
            structured and resourced. Healthcare workers do their best within system constraints, but these 
            constraints affect nutrition care. Understanding this helps us address system-level issues rather 
            than blaming individuals.
          </p>
        </div>
      </section>

      {/* 7. How Clinicians Interpret Intake Shortfalls */}
      {/* Educational: Provides practical reasoning framework for interpreting gaps.
          Helps readers develop clinical judgment skills. Focuses on trends,
          context, and realistic expectations rather than perfection. */}
      <section
        aria-labelledby="interpretation-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="interpretation-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          How Clinicians Interpret Intake Shortfalls
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Understanding that intake gaps are normal and expected helps clinicians interpret them realistically 
          and make practical decisions. Here's how experienced clinicians approach intake shortfalls:
        </p>

        <div className="space-y-4 mt-4">
          <article className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Look at Trends, Not Single Days</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Experienced clinicians understand that a single day of low intake is often not concerning—it's 
              expected during illness. Instead, they focus on patterns over time:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>Is intake improving over several days?</li>
              <li>Is it stable at a reasonable level?</li>
              <li>Is it declining over time?</li>
              <li>Are there patterns related to procedures or symptoms?</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Example:</strong> A patient eating 40% of meals on Monday (post-surgery day) but 70% 
              by Friday shows an improving trend. This is more meaningful than a single low day. Clinicians 
              look at the trajectory, not isolated values.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For nurses documenting intake:</strong> Don't worry if one day shows low intake—especially 
              after a procedure or during acute illness. What matters is the pattern over 3-5 days. Is the 
              patient improving? That's what the team needs to know.
            </p>
          </article>

          <article className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Prioritize Protein Gaps</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              While both energy (calories) and protein matter, clinicians often prioritize protein intake 
              because:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>Protein is essential for healing, immune function, and maintaining muscle mass</li>
              <li>Protein deficits can have more immediate clinical consequences than energy deficits</li>
              <li>Protein needs are often harder to meet than energy needs</li>
              <li>Protein supplementation may be more feasible than increasing overall intake</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Example:</strong> A patient receiving 80% of energy needs but only 50% of protein needs 
              may have different considerations than one missing both. Clinicians often prioritize addressing 
              protein gaps when making decisions about nutrition support.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For clinicians:</strong> When reviewing intake, check both energy and protein separately. 
              Understanding which is more affected helps inform clinical reasoning about nutrition support 
              decisions.
            </p>
          </article>

          <article className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Balance Risk of Underfeeding vs. Overfeeding</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Clinicians must balance competing concerns:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li><strong>Underfeeding considerations:</strong> Inadequate nutrition can impair healing, weaken 
              immune function, and lead to muscle loss</li>
              <li><strong>Overfeeding considerations:</strong> Aggressive nutrition support can cause complications 
              (refeeding syndrome, hyperglycemia, fluid overload) especially in patients with organ dysfunction</li>
              <li><strong>Context matters:</strong> The balance shifts based on patient condition, acuity, 
              and clinical trajectory</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Example:</strong> A stable patient with good appetite may tolerate higher nutrition 
              intake. However, a patient with organ dysfunction may need more cautious, gradual nutrition 
              support to avoid complications. Clinicians consider these factors based on the clinical situation.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For clinicians:</strong> The goal isn't always maximum nutrition—it's appropriate 
              nutrition for the clinical context. Sometimes accepting a moderate intake gap is safer than 
              forcing higher intake that could cause harm.
            </p>
          </article>

          <article className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Reassess as Condition Evolves</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Patient conditions change, and nutrition needs and intake capacity change with them. Clinicians 
              regularly reassess:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>As patients recover, intake capacity typically improves</li>
              <li>As symptoms resolve, barriers to eating decrease</li>
              <li>As condition stabilizes, nutrition goals may shift</li>
              <li>As procedures complete, interruptions decrease</li>
              <li>As medications change, side effects affecting intake may change</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Example:</strong> A patient who could only tolerate 50% of meals during acute illness 
              may improve to 80% as symptoms resolve. Clinicians adjust expectations and approaches as the 
              patient's condition evolves, rather than maintaining the same approach throughout.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>For all healthcare workers:</strong> Intake assessment isn't a one-time event—it's an 
              ongoing process. Regular reassessment helps identify when approaches are effective, when they 
              need adjustment, and when intake gaps are resolving naturally as the patient recovers.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Clinical Reality
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Experienced clinicians don't expect perfect intake. They look at trends, prioritize what matters 
            most (often protein), balance risks, and adjust as the patient's condition evolves. This practical 
            approach recognizes that intake gaps are normal and focuses on what's achievable and appropriate 
            for each patient's situation.
          </p>
        </div>
      </section>

      {/* 8. What to Take Away */}
      {/* Educational: Summarizes three key points for retention.
          Reinforces main messages: gaps are common, calculations are starting points,
          monitoring matters more than perfection. */}
      <section
        aria-labelledby="takeaway-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="takeaway-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          What to Take Away
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          As you work with patients experiencing intake gaps, remember these three essential points:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Intake Shortfall Is Common</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Intake gaps are not unusual, unexpected, or a sign that something has gone wrong. They are 
              common and expected, especially during acute illness. Multiple factors—patient-related, 
              illness-related, care-delivery, and system factors—work together to create these gaps.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Remember:</strong> When you see a patient eating 60-70% of calculated needs, this isn't 
              a crisis—it's often normal for that clinical situation. Intake gaps are the rule, not the exception, 
              in clinical nutrition practice.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Calculation Is a Starting Point</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Calculating nutritional needs gives us a target to aim for, but it's just the beginning. 
              Calculations assume ideal conditions that rarely exist in real clinical settings. They don't 
              account for the many barriers patients face—appetite changes, procedures, symptoms, system 
              constraints, and more.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Remember:</strong> The calculated requirement is a guide, not a mandate. It helps us 
              understand what we're aiming for, but actual intake will often be different—and that's okay. 
              The calculation is a starting point for planning, not a rigid target that must be met.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Monitoring and Adjustment Matter More Than Perfection</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              What matters most is not achieving 100% of calculated needs, but rather:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li><strong>Monitoring actual intake</strong> to understand what patients are really receiving</li>
              <li><strong>Looking at trends</strong> over time, not just single-day values</li>
              <li><strong>Adjusting approaches</strong> based on what's actually happening</li>
              <li><strong>Reassessing</strong> as the patient's condition evolves</li>
              <li><strong>Focusing on what's achievable</strong> and appropriate for the clinical context</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Remember:</strong> Perfect intake is rarely achievable or necessary. What matters is 
              understanding the gap, monitoring trends, and making practical adjustments. Regular monitoring 
              and thoughtful adjustment lead to better outcomes than striving for an unattainable perfect target.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-6">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Clinical Reality
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Intake shortfalls are common. Calculations give us a starting point, but they don't guarantee 
            intake. What matters most is monitoring what patients actually receive, understanding why gaps 
            occur, and making practical adjustments based on real-world circumstances. This approach—focused 
            on monitoring and adjustment rather than perfection—leads to better nutrition care and better 
            patient outcomes.
          </p>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      {/* Educational: Encourages practical application of learning.
          Links to tools for hands-on practice. Supportive, practical tone
          helps readers feel capable of applying the concepts. */}
      <section
        aria-labelledby="cta-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="cta-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Put This Into Practice
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Now that you understand why intake gaps occur, here are practical ways to apply this knowledge:
        </p>

        <div className="space-y-4 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Use Tool 03 to Visualize Gaps
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The <Link href="/tools/intake-vs-needs" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Intake vs. Needs Comparison Tool
              </Link> helps you see the gap between calculated requirements and actual intake. 
              This visualization makes it easier to understand the magnitude of gaps and identify 
              patterns over time.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Try it:</strong> Enter a patient's calculated needs and their actual intake. 
              The tool will show you the gap visually, helping you see whether the shortfall is in 
              energy, protein, or both. This practical visualization reinforces that gaps are normal 
              and helps you interpret them in context.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Revisit Tool 02 Assumptions
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              The <Link href="/tools/energy-protein-calculator" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Energy & Protein Calculator (Tool 02)
              </Link> helps you estimate nutritional needs. Now that you understand intake gaps, 
              revisit this tool with new perspective.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Remember:</strong> The numbers from Tool 02 are starting points, not rigid targets. 
              When you calculate needs, keep in mind that actual intake will likely be lower—and that's 
              expected. Use the calculated range as a guide for planning, but don't be surprised or 
              frustrated when intake falls short. The calculation helps you understand what you're aiming 
              for, but monitoring actual intake tells you what's really happening.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Apply Reasoning to Case Examples
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              As you work with patients, practice applying the reasoning from this page:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 mb-3">
              <li>When you see an intake gap, ask: <em>"What factors are contributing?"</em> Consider 
              patient-related, illness-related, care-delivery, and system factors.</li>
              <li>Look at trends over several days, not just single-day values. Is intake improving, 
              stable, or declining?</li>
              <li>Interpret gaps in context. A 30% gap in a patient who just had surgery is different 
              from a 30% gap in a stable patient.</li>
              <li>Focus on monitoring and adjustment rather than achieving perfect intake.</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Practice:</strong> The next time you review a patient's intake records, use this 
              framework. Identify the factors contributing to any gaps, assess trends, and consider 
              what approaches are realistic and appropriate. This practical reasoning will help you 
              understand nutrition care better.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>You've got this.</strong> Understanding why intake gaps occur is the first step. 
            Using these tools and applying this reasoning in practice will help you interpret intake 
            gaps realistically and make practical decisions about nutrition care. Remember: intake 
            shortfalls are common, calculations are starting points, and monitoring and adjustment 
            matter more than perfection.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Note:</strong> This resource is for educational purposes. Individual patient situations vary, 
          and clinical judgment should always guide nutrition care decisions. When in doubt, consult with 
          registered dietitians and the clinical team.
        </p>
      </div>
    </main>
  );
}
