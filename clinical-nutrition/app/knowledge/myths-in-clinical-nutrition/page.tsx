'use client';

/**
 * Myths in Clinical Nutrition Page
 * 
 * Educational Purpose: This page helps readers recognize common misconceptions
 * in clinical nutrition practice, understand why these beliefs persist, and learn
 * evidence-based approaches to improve safe nutrition care.
 * 
 * Design Philosophy: Non-judgmental, educational approach that encourages reflection
 * and learning without shaming, alarmist language, or treatment advice.
 */

import { useState } from 'react';
import MythCard from './components/MythCard';
import { myths, type Myth } from './data/myths';

export default function MythsInClinicalNutritionPage() {
  const [expandedMyth, setExpandedMyth] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter myths based on search term - educational: helps users find relevant content
  const filteredMyths = myths.filter(myth =>
    myth.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whyItSoundsRight.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatActuallyHappens.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatToUnderstandInstead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMyth = (id: string) => {
    setExpandedMyth(expandedMyth === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section 1: Title & Introduction */}
        {/* Educational: Sets context and explains the purpose without judgment */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common Misconceptions in Clinical Nutrition
          </h1>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Have you ever wondered why certain nutrition practices persist despite evidence suggesting otherwise? 
                Many common beliefs in clinical nutrition stem from <strong>oversimplification</strong>—taking complex, 
                individualized concepts and reducing them to simple rules that feel easier to remember and apply.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                While these simplified approaches can feel safe and straightforward, <strong>clinical nutrition requires 
                context and judgment</strong>. What works for one patient may not work for another. The same intervention 
                can be appropriate or inappropriate depending on the patient's condition, prognosis, metabolic state, and 
                goals of care. There are rarely universal answers—only thoughtful questions and evidence-informed decisions.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This resource explores common misconceptions not to criticize, but to understand. We're curious about 
                why these beliefs persist and how we can approach nutrition care with greater nuance. 
                <strong> Correcting these myths improves patient care</strong> by helping us make more appropriate, 
                individualized decisions that better serve our patients' needs.
              </p>
            </section>
            <section className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-3">How to Use This Resource</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Whether you're a nurse documenting intake, a medical student on rounds, or a clinician writing nutrition orders, 
                you've likely encountered these common beliefs. This resource helps you:
              </p>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-6">
                <li><strong>Recognize</strong> when common beliefs might need questioning in your daily practice</li>
                <li><strong>Understand</strong> why these beliefs persist (they often have logical origins)</li>
                <li><strong>Learn</strong> the clinical reasoning behind evidence-based approaches</li>
                <li><strong>Improve</strong> safe use of nutrition assessment and intervention tools</li>
              </ul>
              <p className="text-gray-700 text-xs mt-4 italic">
                <strong>Note:</strong> Medical terms are explained in context. If you encounter unfamiliar terminology, 
                consider it an opportunity to build your clinical vocabulary.
              </p>
            </section>
          </div>
        </header>

        {/* Section 2: Why Myths Persist in Clinical Nutrition */}
        {/* Educational: Helps readers understand the logical origins of misconceptions */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8" aria-labelledby="why-myths-persist-heading">
          <h2 id="why-myths-persist-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Why Do These Beliefs Persist?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding why misconceptions persist helps us recognize them in practice and approach change with empathy. 
            These beliefs often continue because of:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Desire for Simple Rules</h3>
              <p className="text-sm text-gray-700">
                Simple rules feel safer and easier to apply than complex, individualized approaches. 
                "2000 kcal for everyone" is easier to remember than calculating individual needs, even if less accurate. 
                In busy clinical settings, simple rules reduce decision fatigue and feel more manageable.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Overreliance on Numbers or Labs</h3>
              <p className="text-sm text-gray-700">
                Numbers and lab values feel objective and definitive, but they don't tell the whole story. 
                Focusing solely on a single lab value (like albumin) or a specific number (like BMI) can lead us 
                to miss the broader clinical picture and individual patient needs.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Misinterpretation of Guidelines</h3>
              <p className="text-sm text-gray-700">
                Clinical guidelines provide evidence-based recommendations, but they're meant to guide judgment, 
                not replace it. When guidelines are applied too rigidly or without considering patient context, 
                they can lead to inappropriate care. Guidelines are tools, not rules.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Mixing Community Nutrition Advice with Clinical Care</h3>
              <p className="text-sm text-gray-700">
                General nutrition advice for healthy populations (like "eat less carbs" or "more protein is better") 
                doesn't always apply to sick, hospitalized patients. What's appropriate for community health may not be 
                appropriate in clinical settings where patients have different metabolic needs.
              </p>
            </article>
          </div>
        </section>

        {/* Search Functionality */}
        {/* Educational: Helps users find specific misconceptions they're interested in */}
        <div className="mb-6 sm:mb-8">
          <label htmlFor="myth-search" className="sr-only">Search myths and misconceptions</label>
          <input
            id="myth-search"
            type="search"
            placeholder="Search myths and misconceptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-label="Search myths and misconceptions"
          />
        </div>

        {/* Section 3: Myth Sections */}
        {/* Educational: Each myth card provides structured learning about misconceptions */}
        <section className="mb-12" aria-labelledby="myths-heading">
          <h2 id="myths-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Common Misconceptions in Practice
          </h2>
          {filteredMyths.length === 0 ? (
            <div className="text-center py-12 text-gray-500" role="status" aria-live="polite">
              No myths found matching your search.
            </div>
          ) : (
            <ol className="space-y-4" aria-label="List of common misconceptions">
              {filteredMyths.map((myth) => (
                <li key={myth.id}>
                  <MythCard
                    myth={myth}
                    isExpanded={expandedMyth === myth.id}
                    onToggle={() => toggleMyth(myth.id)}
                  />
                </li>
              ))}
            </ol>
          )}
        </section>

        {/* Section 4: Common Themes */}
        {/* Educational: Helps readers identify patterns across misconceptions */}
        <section className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg" aria-labelledby="common-themes-heading">
          <h2 id="common-themes-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Common Themes Across These Misconceptions
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As you reflect on these misconceptions, you'll notice several recurring themes that appear across different beliefs. 
            Understanding these themes helps us recognize when similar thinking patterns might be influencing our practice:
          </p>
          <div className="space-y-6">
            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">1.</span>
                Context Matters
              </h3>
              <p className="text-gray-700 leading-relaxed">
                The same intervention can be appropriate or inappropriate depending on the patient's condition, prognosis, 
                metabolic state, and goals of care. What works for a healthy outpatient may not work for a hospitalized patient. 
                What's appropriate for one clinical situation may not be appropriate in another. Consider the full clinical picture 
                before applying general rules or guidelines.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Example: Weight loss may be beneficial for an obese outpatient, but unintentional weight loss in a hospitalized 
                patient is concerning, even if they're obese.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">2.</span>
                Trends Matter More Than Single Values
              </h3>
              <p className="text-gray-700 leading-relaxed">
                A single lab value, weight measurement, or calorie count tells you very little. What matters is the trend over time. 
                Is the patient improving? Getting worse? Staying stable? Single values can be misleading, but trends reveal the true 
                clinical picture. Focus on patterns and changes rather than isolated numbers.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Example: A single day of low intake isn't necessarily concerning, but a pattern of declining intake over several 
                days requires attention.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">3.</span>
                Numbers Support Thinking, Not Replace It
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Calculations, lab values, and measurements are tools to inform your clinical judgment, not to replace it. 
                Numbers provide data, but you provide the interpretation. Use calculations and measurements to support your thinking, 
                but always consider the patient's individual circumstances, response to interventions, and overall clinical picture. 
                The number is a starting point, not an endpoint.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Example: A calculated calorie requirement is an estimate based on equations. Monitor the patient's response and 
                adjust based on how they're actually doing, not just the number.
              </p>
            </article>
          </div>
        </section>

        {/* Section 5: What to Remember */}
        {/* Educational: Key principles to guide practice */}
        <section className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg" aria-labelledby="remember-heading">
          <h2 id="remember-heading" className="text-2xl font-bold text-gray-900 mb-4">
            What to Remember
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As you reflect on these common misconceptions, keep these key principles in mind:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">1.</span>
                Individualization Matters
              </h3>
              <p className="text-sm text-gray-700">
                Nutrition needs vary significantly between patients. What works for one patient may not work for another, 
                even with similar conditions. Individual assessment and calculation of needs is typically important.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">2.</span>
                More Isn't Always Better
              </h3>
              <p className="text-sm text-gray-700">
                Adequacy is typically the goal, not maximization. Excessive nutrients may not provide additional benefit and can be problematic. The focus is usually on meeting needs rather than exceeding them.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">3.</span>
                Context Is Critical
              </h3>
              <p className="text-sm text-gray-700">
                The same intervention can be appropriate or inappropriate depending on the patient's condition, 
                prognosis, and goals of care. Considering the full clinical picture is typically important.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">4.</span>
                Evidence Evolves
              </h3>
              <p className="text-sm text-gray-700">
                Practices that were standard decades ago may not align with current evidence. Stay current with 
                guidelines and be open to updating your practice.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">5.</span>
                Question Assumptions
              </h3>
              <p className="text-sm text-gray-700">
                When you hear "we always do it this way," ask why. Understanding the rationale helps you identify 
                when practices need updating.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">6.</span>
                Collaboration Improves Care
              </h3>
              <p className="text-sm text-gray-700">
                Work with dietitians, nurses, physicians, and other team members. Different perspectives help identify 
                assumptions and improve decision-making.
              </p>
            </article>
          </div>
        </section>

        {/* Section 6: Safety & Perspective */}
        {/* Educational: Important disclaimers and context about using this resource */}
        <section className="mb-12 space-y-6" aria-labelledby="safety-heading">
          {/* Clear Disclaimer */}
          <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg" role="alert" aria-live="polite">
            <h2 id="safety-heading" className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Important Disclaimer
            </h2>
            <p className="text-sm text-red-900 leading-relaxed font-medium">
              This resource is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. 
              The information provided should not replace professional clinical judgment or multidisciplinary team consultation. 
              Always consult with qualified healthcare professionals for patient-specific nutrition care decisions.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Safety & Perspective
            </h2>
            <div className="space-y-6">
              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Nutrition Tools Help Guide Attention
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Nutrition assessment tools, calculators, screening instruments, and guidelines are designed to help you 
                  identify areas that need attention and provide a framework for thinking about nutrition care. They help 
                  you focus on what matters most and ensure you don't miss important considerations. Think of them as 
                  navigational aids that point you in the right direction, not as destinations themselves.
                </p>
              </article>

              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  They Do Not Replace Multidisciplinary Care
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  No tool, calculation, or guideline can replace the expertise and collaboration of a multidisciplinary team. 
                  Effective nutrition care requires input from registered dietitians, physicians, nurses, pharmacists, 
                  physical therapists, and other specialists who each bring unique perspectives. Tools support team 
                  decision-making; they don't eliminate the need for team collaboration. The best nutrition care happens 
                  when team members work together, sharing knowledge and perspectives.
                </p>
              </article>

              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Clinical Judgment Remains Central
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Clinical judgment—your ability to assess, interpret, and make decisions based on the full clinical picture—is 
                  irreplaceable. Tools provide data and suggestions, but you must interpret that information in the context of 
                  each unique patient situation. Consider the patient's condition, prognosis, goals of care, family preferences, 
                  and institutional resources. Numbers and guidelines inform your judgment; they don't replace it. When tools 
                  and clinical judgment conflict, trust your judgment and consult with your team.
                </p>
              </article>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  When in Doubt, Consult
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  If you're uncertain about a nutrition decision, consult with:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-6">
                  <li><strong>Registered Dietitians:</strong> Nutrition assessment and planning experts</li>
                  <li><strong>Clinical Nutrition Support Teams:</strong> For complex cases requiring specialized nutrition support</li>
                  <li><strong>Your Clinical Team:</strong> Physicians, nurses, and other providers who know the patient</li>
                  <li><strong>Clinical Guidelines:</strong> Current evidence-based recommendations from professional organizations</li>
                </ul>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  About This Resource
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  All information is based on current clinical guidelines from leading nutrition organizations including 
                  ASPEN (American Society for Parenteral and Enteral Nutrition), ESPEN (European Society for Clinical 
                  Nutrition and Metabolism), and the Academy of Nutrition and Dietetics. Our goal is to support safe, 
                  evidence-based nutrition practice through education and reflection, not criticism. Regular updates ensure 
                  alignment with the latest evidence.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Call-to-Action */}
        {/* Educational: Encourages continued learning and application */}
        <section className="mb-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg" aria-labelledby="cta-heading">
          <div className="text-center mb-6">
            <h2 id="cta-heading" className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Apply What You've Learned?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Understanding these misconceptions is valuable, but putting that knowledge into practice is where real learning happens. 
              We invite you to continue your journey with these supportive next steps:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Explore Assessment Tools</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Practice with our interactive nutrition assessment and calculation tools. These tools help you apply what you've learned 
                in a hands-on way, building confidence as you work through real scenarios.
              </p>
              <div className="text-center">
                <a 
                  href="/tools" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Explore Tools
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Read the Assessment Overview</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Deepen your understanding by reading our comprehensive overview of the clinical nutrition assessment process. 
                See how screening, needs estimation, and intake assessment work together to form a complete picture.
              </p>
              <div className="text-center">
                <a 
                  href="/knowledge/assessment-process" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Read Overview
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Apply to Case Examples</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Put your learning into practice by working through case examples. See how the principles you've learned apply 
                to real patient scenarios, building your clinical reasoning skills along the way.
              </p>
              <div className="text-center">
                <a 
                  href="/cases" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  View Cases
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          <blockquote className="mt-8 p-5 bg-white rounded-lg border border-gray-200 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Remember, learning is a journey, not a destination. Every patient encounter is an opportunity to apply what you've learned 
              and continue growing in your practice. You're building skills that will serve you and your patients well."
            </p>
          </blockquote>
        </section>
      </div>
    </main>
  );
}
