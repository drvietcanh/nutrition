import Link from "next/link";
import { SectionHeading } from "./components/SectionHeading";
import { ContentSection } from "./components/ContentSection";
import { EducationalNote } from "./components/EducationalNote";
import { ContentBlock } from "./components/ContentBlock";

/**
 * Nutrition Assessment Overview Page
 * 
 * Educational Intent:
 * This page provides a high-level overview of clinical nutrition assessment,
 * serving as an entry point for understanding the assessment process.
 * It explains key concepts without providing treatment recommendations,
 * using descriptive rather than imperative language.
 * 
 * Target Audience:
 * - Clinicians new to clinical nutrition
 * - Nurses involved in screening
 * - Medical students
 * - Educated readers interested in understanding the process
 */
export default function NutritionAssessmentOverviewPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      {/* 
        Page Header
        Educational Intent: Introduces the topic and sets expectations
        for what readers will learn, emphasizing educational purpose
      */}
      <header className="space-y-5 border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
          Nutrition Assessment Overview
        </h1>
        <ContentBlock>
          <p>
            Clinical nutrition assessment is a structured process that helps healthcare teams understand
            a person's nutritional status and needs. This overview explains the fundamental concepts
            and how they work together in clinical practice.
          </p>
          <p>
            This content is designed for educational purposes to help you understand assessment concepts.
            It does not provide treatment recommendations or replace clinical guidelines or professional training.
          </p>
        </ContentBlock>
      </header>

      {/* 
        What is Nutrition Assessment?
        Educational Intent: Defines the concept clearly, explaining it as
        a process rather than a single calculation or test
      */}
      <ContentSection ariaLabelledBy="what-is-heading">
        <SectionHeading id="what-is-heading">
          What is Nutrition Assessment?
        </SectionHeading>
        <ContentBlock>
          <p>
            Nutrition assessment is <strong>a systematic process</strong> of gathering and interpreting
            information about a person's nutritional status. It's not a single test or calculation,
            but rather a way of thinking about nutrition in the context of health and illness.
          </p>
          <p>
            The assessment process typically involves three main steps:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Screening</strong>: A quick check to identify if there's a nutrition risk
              that may need attention
            </li>
            <li>
              <strong>Needs estimation</strong>: Estimating what the person's body likely needs
              in terms of energy, protein, and other nutrients
            </li>
            <li>
              <strong>Intake assessment</strong>: Measuring what the person is actually consuming
              and comparing it to estimated needs
            </li>
          </ul>
          <p>
            These steps work together to help clinicians understand the full picture of a person's
            nutrition situation and identify where attention may be needed.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        Why Assessment Matters
        Educational Intent: Explains the value of assessment without
        making alarmist claims or providing treatment directives
      */}
      <ContentSection ariaLabelledBy="why-matters-heading">
        <SectionHeading id="why-matters-heading">
          Why Assessment Matters
        </SectionHeading>
        <ContentBlock>
          <p>
            Nutrition assessment helps healthcare teams answer important questions about a person's
            nutritional status. It provides structure for thinking about nutrition in clinical settings
            and helps identify situations where nutrition may be a concern.
          </p>
          <p>
            Assessment is valuable because it:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Helps identify nutrition concerns early, when there may be more options available
            </li>
            <li>
              Provides a framework for understanding how nutrition relates to a person's overall health
            </li>
            <li>
              Supports clinical reasoning by organizing information in a structured way
            </li>
            <li>
              Helps prioritize attention and resources based on identified needs
            </li>
          </ul>
          <EducationalNote variant="info" title="Assessment Informs, Not Dictates">
            <p>
              Assessment helps prioritize attention and guides clinical reasoning, but it doesn't
              replace professional judgment or patient preferences. Assessment informs decisions—
              it doesn't make them automatically.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        The Assessment Process
        Educational Intent: Provides a clear overview of the process flow
        without prescribing specific actions or treatments
      */}
      <ContentSection ariaLabelledBy="process-heading">
        <SectionHeading id="process-heading">
          The Assessment Process
        </SectionHeading>
        <ContentBlock>
          <p>
            Assessment follows a logical sequence where each step builds on the previous one.
            Understanding this flow helps make sense of how the pieces fit together.
          </p>
        </ContentBlock>

        {/* 
          Step 1: Screening
          Educational Intent: Explains screening as a first step without
          prescribing when or how it must be done
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Step 1: Screening
          </h3>
          <ContentBlock>
            <p>
              Screening is typically the first step. It's a quick check to identify whether there's
              a nutrition risk that may need further attention. Screening tools use simple questions
              about weight changes, appetite, and illness to provide a risk score.
            </p>
            <p>
              Common screening tools include NRS-2002 and PG-SGA. These tools are designed to be
              fast and practical, usually taking just a few minutes to complete.
            </p>
            <p>
              Screening identifies <strong>risk</strong>, not diagnosis. A high-risk screening result
              indicates that a full assessment may be helpful, not that malnutrition is definitely present.
            </p>
          </ContentBlock>
        </div>

        {/* 
          Step 2: Needs Estimation
          Educational Intent: Explains needs estimation as a conceptual step,
          avoiding presentation of formulas as definitive answers
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Step 2: Needs Estimation
          </h3>
          <ContentBlock>
            <p>
              Once screening identifies a potential risk, the next step is estimating what the person's
              body likely needs. This involves considering factors like age, size, activity level,
              and clinical context (illness, recovery, special conditions).
            </p>
            <p>
              It's important to understand that needs are <strong>estimates, not exact targets</strong>.
              Different estimation methods exist, and they often produce different numbers. This is
              normal and expected—no single method fits all situations.
            </p>
            <p>
              Clinicians typically think in <strong>ranges</strong> rather than exact numbers. For example,
              "1,600–2,000 kcal/day" or "25–30 kcal/kg/day" acknowledges uncertainty and allows flexibility.
            </p>
          </ContentBlock>
        </div>

        {/* 
          Step 3: Intake Assessment
          Educational Intent: Explains how to assess actual intake without
          prescribing specific monitoring protocols
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Step 3: Intake Assessment
          </h3>
          <ContentBlock>
            <p>
              The final step is assessing what the person is actually consuming. This involves measuring
              actual intake and comparing it to estimated needs to identify any gaps.
            </p>
            <p>
              There's often a difference between <strong>prescribed</strong> (what was ordered or planned)
              and <strong>delivered</strong> (what was actually consumed) nutrition. Only delivered nutrition
              affects health outcomes.
            </p>
            <p>
              Clinicians typically look at <strong>trends over time</strong> rather than single-day snapshots.
              Patterns matter more than isolated days because day-to-day variation is normal.
            </p>
          </ContentBlock>
        </div>
      </ContentSection>

      {/* 
        Key Concepts
        Educational Intent: Highlights important concepts that help readers
        understand assessment thinking, not specific protocols
      */}
      <ContentSection ariaLabelledBy="concepts-heading">
        <SectionHeading id="concepts-heading">
          Key Concepts to Understand
        </SectionHeading>
        <ContentBlock>
          <p>
            Understanding these concepts helps make sense of how assessment works in practice:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Assessment is Dynamic
            </h3>
            <ContentBlock>
              <p>
                A person's nutrition needs change over time—with illness, recovery, activity level,
                and life circumstances. What was appropriate last week may not be right today.
                That's why assessment includes regular reassessment and adjustment.
              </p>
            </ContentBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Assessment is Context-Dependent
            </h3>
            <ContentBlock>
              <p>
                The same numbers mean different things for different people in different situations.
                A person recovering from surgery has different needs than someone managing a chronic condition.
                Someone with kidney disease needs different considerations than someone with heart disease.
                Context shapes everything.
              </p>
            </ContentBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Numbers Inform, Not Prescribe
            </h3>
            <ContentBlock>
              <p>
                Numbers from screening tools, needs calculations, and intake assessments are informative,
                not prescriptive. They help structure thinking, but they don't make decisions automatically.
                Clinical judgment, patient preferences, and goals of care all play essential roles.
              </p>
            </ContentBlock>
          </div>
        </div>
      </ContentSection>

      {/* 
        Common Misunderstandings
        Educational Intent: Addresses misconceptions to help readers
        develop accurate understanding, not to prescribe behavior
      */}
      <ContentSection ariaLabelledBy="misunderstandings-heading">
        <SectionHeading id="misunderstandings-heading">
          Common Misunderstandings
        </SectionHeading>
        <div className="space-y-4">
          <EducationalNote variant="warning" title='❌ "If I calculate the needs, the job is done"'>
            <p>
              <strong>Reality</strong>: Calculating needs is just the beginning. Assessment typically involves
              evaluating actual intake, identifying gaps, considering options, monitoring response, and
              reassessing regularly. Needs estimation provides a target, but assessment is an ongoing process.
            </p>
          </EducationalNote>

          <EducationalNote variant="warning" title='❌ "Screening tools diagnose malnutrition"'>
            <p>
              <strong>Reality</strong>: Screening tools identify risk, not diagnosis. They indicate who may
              benefit from further assessment, not who definitely has malnutrition. Diagnosis requires
              comprehensive assessment including detailed history, physical examination, laboratory data,
              and clinical judgment.
            </p>
          </EducationalNote>

          <EducationalNote variant="warning" title='❌ "The formula gives the correct answer"'>
            <p>
              <strong>Reality</strong>: Formulas provide estimates, not exact requirements. Different methods
              produce different numbers, and that's normal. Formulas help structure thinking, but clinical
              judgment and patient response guide actual decisions.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        Learn More
        Educational Intent: Guides readers to more detailed content
        and tools for learning, not for clinical decision-making
      */}
      <ContentSection ariaLabelledBy="learn-more-heading">
        <SectionHeading id="learn-more-heading" variant="blue">
          Learn More
        </SectionHeading>
        <ContentBlock>
          <p>
            This overview provides a high-level introduction to nutrition assessment. For more detailed
            information, explore these resources:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Detailed Process Guide
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Learn about the complete assessment process, including how screening, needs estimation,
              and intake assessment work together.
            </p>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Read the full guide →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Interactive Tools
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Practice the assessment process with our interactive tools designed for learning:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-blue-800 mb-3">
              <li>
                <Link href="/tools/malnutrition-screening" className="underline">
                  Malnutrition Screening Tool
                </Link>
              </li>
              <li>
                <Link href="/tools/energy-protein-calculator" className="underline">
                  Energy & Protein Calculator
                </Link>
              </li>
              <li>
                <Link href="/tools/intake-assessment" className="underline">
                  Intake Assessment Worksheet
                </Link>
              </li>
            </ul>
            <p className="text-xs text-blue-700 italic">
              These tools are for educational purposes only and should not be used for clinical decision-making.
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
            <strong>This site and its tools are for educational purposes only.</strong> They do not provide
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
            This content is designed to support learning and understanding of clinical nutrition assessment
            concepts. It helps you practice the thinking process and see how different factors influence
            estimates and assessments.
          </p>
          <p>
            However, these tools and content cannot and should not be used to make clinical decisions.
            Real clinical assessment requires comprehensive evaluation, professional judgment, and consideration
            of the full clinical context—none of which can be captured by online tools or educational content alone.
          </p>
        </ContentBlock>
      </ContentSection>
    </main>
  );
}
