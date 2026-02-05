'use client';

import { useState } from 'react';

interface Myth {
  id: string;
  myth: string;
  whyItSoundsRight: string;
  whatActuallyHappens: string;
  whatToUnderstandInstead: string;
  clinicalInsight?: string;
}

const myths: Myth[] = [
  {
    id: 'universal-calorie-requirement',
    myth: 'All patients need the same calorie requirement (e.g., 2000 kcal/day)',
    whyItSoundsRight: 'The "2000 kcal" figure is familiar from food labels and general health messaging, making it feel like a universal standard. In busy clinical settings, using a single number feels more efficient than calculating individual needs.',
    whatActuallyHappens: 'Energy needs are highly individualized. A sedentary elderly patient may need 1200-1400 kcal/day, while a critically ill patient with burns may need 3000-4000 kcal/day. Using a "one-size-fits-all" approach may not meet individual needs and can lead to overfeeding (which may contribute to refeeding syndrome - a condition where rapid nutrition causes electrolyte shifts) or underfeeding (which may delay recovery and wound healing).',
    whatToUnderstandInstead: 'Calorie requirements vary dramatically based on age, sex, body composition, activity level, metabolic state, and clinical condition. Individual needs can be calculated using validated equations adjusted for the patient\'s specific situation.',
    clinicalInsight: 'Hypermetabolic conditions (sepsis, burns, trauma) require higher calories because the body is working harder to heal. Hypometabolic states (elderly, sedentary, chronic illness) require lower calories because the body needs less energy.'
  },
  {
    id: 'protein-more-is-better',
    myth: 'More protein is always better for recovery',
    whyItSoundsRight: 'The "more is better" mindset is appealing because protein is clearly important for healing. It feels safer to err on the side of more rather than less. This belief is reinforced by fitness culture and supplement marketing that promotes high protein intake as universally beneficial.',
    whatActuallyHappens: 'While adequate protein is essential for wound healing and muscle preservation, excessive protein (beyond 2.0-2.5 g/kg/day in most cases) provides no additional benefit and can worsen renal function, increase uremic symptoms (build-up of waste products in the blood), and create metabolic stress. The body cannot store excess protein like it can store fat.',
    whatToUnderstandInstead: 'Excessive protein intake may not improve outcomes beyond optimal ranges and can be problematic, especially in patients with renal impairment. Evidence suggests that most hospitalized patients need approximately 1.2-2.0 g/kg/day, with higher needs (up to 2.5 g/kg/day) in specific conditions like severe burns, major trauma, or critical illness.',
    clinicalInsight: 'Adequacy is the goal, not maximization. Monitoring renal function (creatinine, BUN) can help guide protein intake decisions. The body can only utilize so much protein at once, so distributing intake throughout the day may be more effective than large single doses.'
  },
  {
    id: 'npo-before-surgery',
    myth: 'All patients must be NPO (nothing by mouth) from midnight before surgery',
    whyItSoundsRight: 'The "NPO after midnight" rule has been standard practice for decades and feels like a safe, conservative approach. Fear of aspiration during anesthesia is understandable, and the simplicity of a universal rule makes it easy to implement.',
    whatActuallyHappens: 'The traditional "NPO after midnight" rule was based on outdated concerns about aspiration risk (food/liquid entering the lungs during anesthesia). Evidence shows that allowing clear liquids up to 2 hours before surgery actually reduces complications, improves patient comfort, maintains hydration, and may improve glycemic control. Prolonged fasting increases insulin resistance and catabolism (muscle breakdown).',
    whatToUnderstandInstead: 'Modern guidelines allow clear liquids up to 2 hours before surgery and light meals up to 6 hours before, reducing complications. Follow ERAS (Enhanced Recovery After Surgery) protocols when appropriate. Exceptions include patients with delayed gastric emptying, bowel obstruction, or specific surgical requirements.',
    clinicalInsight: 'Evidence suggests that clear liquids (water, clear juice, black coffee) may be appropriate 2+ hours before surgery for many patients. The stomach empties clear liquids relatively quickly, which may reduce aspiration risk while maintaining hydration and metabolic function.'
  },
  {
    id: 'vitamin-cures-all',
    myth: 'High-dose vitamins and supplements can cure or prevent disease',
    whyItSoundsRight: 'The appeal of simple solutions is powerful. Vitamins feel natural and safe, and marketing often promotes them as preventive medicine. Patients and sometimes clinicians hope that supplements can compensate for poor diets or prevent illness. The "can\'t hurt, might help" logic is compelling, even when evidence doesn\'t support it.',
    whatActuallyHappens: 'While vitamin deficiencies cause disease, excess vitamins (especially fat-soluble vitamins A, D, E, K - these are stored in the body) can be toxic. Water-soluble vitamins (B vitamins, vitamin C) are generally safer because excess is excreted in urine, but still provide no benefit when taken in excess. Evidence shows that whole foods provide better outcomes than isolated supplements for most people.',
    whatToUnderstandInstead: 'Most vitamin supplementation beyond recommended daily allowances provides no benefit and may cause problems in some cases. Evidence suggests supplementation may be appropriate when deficiency is confirmed (lab values) or high risk exists (e.g., bariatric surgery, malabsorption). A food-first approach is often preferred when possible.',
    clinicalInsight: 'Fat-soluble vitamins (A, D, E, K) can accumulate and cause toxicity because they\'re stored in the liver and fat tissue. Water-soluble vitamins are safer but still provide no benefit in excess. Special populations (pregnancy, elderly, malabsorption) may need targeted supplementation, but still within safe ranges.'
  },
  {
    id: 'feeding-tube-always-needed',
    myth: 'If a patient can\'t eat, they immediately need a feeding tube',
    whyItSoundsRight: 'The desire to "do something" when a patient can\'t eat is strong. Tube feeding feels like active intervention, while waiting or using alternatives can feel like inaction. Family members often equate feeding with care, making it emotionally difficult to consider alternatives.',
    whatActuallyHappens: 'Not all patients who can\'t eat need tube feeding. Short-term inability to eat (1-3 days) in well-nourished patients may not require intervention. For patients with advanced dementia or terminal illness, evidence suggests that tube feeding may not improve outcomes and may decrease quality of life. Important factors to consider include: patient prognosis, nutritional status, expected duration of inability to eat, and patient/family goals.',
    whatToUnderstandInstead: 'Many alternatives exist, and tube feeding is typically considered after assessing the patient\'s condition, prognosis, and goals of care. Short-term alternatives may include: oral nutritional supplements (like Ensure), modified textures (pureed, thickened liquids), or appetite stimulants. This is a complex decision that requires careful consideration and team collaboration.',
    clinicalInsight: 'For advanced dementia, evidence shows tube feeding does not prevent aspiration, improve survival, or prevent pressure injuries (bed sores). Involving patient/family in decision-making about goals of care is essential, as this is often an emotional decision.'
  },
  {
    id: 'diabetes-no-carbs',
    myth: 'People with diabetes should avoid all carbohydrates',
    whyItSoundsRight: 'The logic seems straightforward: if carbohydrates raise blood sugar, eliminating them should help. This oversimplification ignores the body\'s need for glucose and the complexity of diabetes management. Low-carb diets can show short-term benefits, leading to the conclusion that "no carbs" is even better. The fear of high blood sugar makes elimination feel safer than moderation.',
    whatActuallyHappens: 'Carbohydrates are the body\'s primary energy source, especially for the brain. Eliminating carbs forces the body to break down protein (muscle) and fat for energy, which is inefficient and may lead to ketosis (a metabolic state that requires monitoring if uncontrolled). People with diabetes typically benefit from consistent, controlled carbohydrate intake with emphasis on complex carbs (whole grains, vegetables), fiber, and appropriate timing with medications (insulin, oral medications).',
    whatToUnderstandInstead: 'Carbohydrates are essential for everyone, including people with diabetes. The focus is typically on type, timing, and quantity, rather than elimination. Evidence-based guidelines suggest that 45-60% of calories from carbohydrates (consistent with general population) may be appropriate, focusing on complex carbohydrates (whole grains, vegetables, fruits) rather than simple sugars.',
    clinicalInsight: 'Moderation and timing matter more than elimination. Match insulin/medications to carbohydrate intake and use carbohydrate counting or exchange lists for meal planning. These are tools to help manage, not eliminate, carbohydrates.'
  },
  {
    id: 'weight-loss-always-good',
    myth: 'Weight loss is always beneficial for hospitalized patients',
    whyItSoundsRight: 'The general health message that "weight loss is good" is so pervasive that it\'s easy to apply it universally. For obese patients, weight loss during hospitalization might seem like a silver lining. The distinction between intentional weight loss (for health) and unintentional weight loss (a sign of illness) isn\'t always clear in practice.',
    whatActuallyHappens: 'While intentional weight loss may benefit obese outpatients, unintentional weight loss in hospitalized patients is often a concern. It frequently represents loss of lean body mass (muscle), which may delay recovery, increase infection risk, prolong hospital stay, and be associated with poorer outcomes. Even obese patients typically need adequate nutrition during acute illness - their bodies need fuel to heal, even if they have excess fat stores.',
    whatToUnderstandInstead: 'Unintentional weight loss in hospitalized patients is often associated with poor outcomes and may indicate malnutrition or underlying disease. Monitoring weight trends can be helpful: unintentional loss >5% in 1 month or >10% in 6 months is typically considered significant. Obese patients still typically need adequate protein and micronutrients during acute illness.',
    clinicalInsight: 'Focus on preserving lean body mass (muscle), not just total weight - muscle loss is the real problem. Investigate cause: inadequate intake, malabsorption (poor nutrient absorption), hypermetabolism (increased metabolic rate), or underlying disease. Use validated screening tools (MUST, NRS-2002) to identify at-risk patients.'
  },
  {
    id: 'supplements-replace-food',
    myth: 'Nutritional supplements can replace meals',
    whyItSoundsRight: 'Supplements are convenient, measurable, and feel like a controlled intervention. When patients struggle to eat, supplements can feel like a reliable solution. The precision of knowing exactly what nutrients a patient is getting can be appealing compared to the variability of food intake.',
    whatActuallyHappens: 'While oral nutritional supplements (ONS like Ensure, Boost) are valuable tools for meeting nutritional needs, they should complement, not replace, meals when possible. Whole foods provide fiber, phytochemicals (plant compounds with health benefits), and other bioactive compounds not found in supplements. Additionally, the act of eating has social, psychological, and sensory benefits that supplements cannot provide.',
    whatToUnderstandInstead: 'Supplements are designed to supplement, not replace, a balanced diet. Use supplements to fill nutritional gaps, not as meal replacements when possible - think of them as "nutrition insurance." Encourage a food-first approach when the patient can eat - even small amounts of real food are valuable.',
    clinicalInsight: 'Supplements are appropriate when: inadequate oral intake, increased needs (healing, growth), or specific nutrient deficiencies. Offer supplements between meals, not with meals, to avoid reducing food intake. Remember: supplements support nutrition, but food provides more than nutrients - eating is about more than nutrition.'
  }
];

export default function MythsAndMisconceptionsPage() {
  const [expandedMyth, setExpandedMyth] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section 1: Title & Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Common Misconceptions in Clinical Nutrition
          </h1>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
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
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
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
            </div>
          </div>
        </div>

        {/* Section 2: Why Myths Persist in Clinical Nutrition */}
        <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Do These Beliefs Persist?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Understanding why misconceptions persist helps us recognize them in practice and approach change with empathy. 
            These beliefs often continue because of:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Desire for Simple Rules</h3>
              <p className="text-sm text-gray-700">
                Simple rules feel safer and easier to apply than complex, individualized approaches. 
                "2000 kcal for everyone" is easier to remember than calculating individual needs, even if less accurate. 
                In busy clinical settings, simple rules reduce decision fatigue and feel more manageable.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Overreliance on Numbers or Labs</h3>
              <p className="text-sm text-gray-700">
                Numbers and lab values feel objective and definitive, but they don't tell the whole story. 
                Focusing solely on a single lab value (like albumin) or a specific number (like BMI) can lead us 
                to miss the broader clinical picture and individual patient needs.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Misinterpretation of Guidelines</h3>
              <p className="text-sm text-gray-700">
                Clinical guidelines provide evidence-based recommendations, but they're meant to guide judgment, 
                not replace it. When guidelines are applied too rigidly or without considering patient context, 
                they can lead to inappropriate care. Guidelines are tools, not rules.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Mixing Community Nutrition Advice with Clinical Care</h3>
              <p className="text-sm text-gray-700">
                General nutrition advice for healthy populations (like "eat less carbs" or "more protein is better") 
                doesn't always apply to sick, hospitalized patients. What's appropriate for community health may not be 
                appropriate in clinical settings where patients have different metabolic needs.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Search myths and misconceptions..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-label="Search myths and misconceptions"
          />
        </div>

        {/* Section 3: Myth Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Common Misconceptions in Practice
          </h2>
          <div className="space-y-4">
          {filteredMyths.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              No myths found matching your search.
            </div>
          ) : (
            filteredMyths.map((myth) => (
              <div
                key={myth.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
              >
                <button
                  onClick={() => toggleMyth(myth.id)}
                  className="w-full text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={expandedMyth === myth.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 self-start">
                          MYTH
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                          {myth.myth}
                        </h2>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform ${
                          expandedMyth === myth.id ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedMyth === myth.id && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t-2 border-gray-200 pt-5 sm:pt-6 space-y-4 sm:space-y-5">
                    {/* Why It Sounds Right */}
                    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 sm:p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Why It Sounds Right
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {myth.whyItSoundsRight}
                      </p>
                    </div>

                    {/* What Actually Happens in Practice */}
                    <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-lg p-4 sm:p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                        <span className="text-gray-600">•</span>
                        What Actually Happens in Practice
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {myth.whatActuallyHappens}
                      </p>
                    </div>

                    {/* What to Understand Instead - Highlighted as Reality */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-600 text-white">
                          REALITY
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          What to Understand Instead
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                        {myth.whatToUnderstandInstead}
                      </p>
                    </div>

                    {/* Clinical Insight */}
                    {myth.clinicalInsight && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4 sm:p-5">
                        <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                          <span className="text-blue-600">•</span>
                          Clinical Insight
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {myth.clinicalInsight}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
          </div>
        </div>

        {/* Section 4: Common Themes */}
        <div className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Common Themes Across These Misconceptions
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As you reflect on these misconceptions, you'll notice several recurring themes that appear across different beliefs. 
            Understanding these themes helps us recognize when similar thinking patterns might be influencing our practice:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">1.</span>
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
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">2.</span>
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
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">3.</span>
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
            </div>
          </div>
        </div>

        {/* Section 5: What to Remember */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            What to Remember
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            As you reflect on these common misconceptions, keep these key principles in mind:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">1.</span>
                Individualization Matters
              </h3>
              <p className="text-sm text-gray-700">
                Nutrition needs vary significantly between patients. What works for one patient may not work for another, 
                even with similar conditions. Individual assessment and calculation of needs is typically important.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">2.</span>
                More Isn't Always Better
              </h3>
              <p className="text-sm text-gray-700">
                Adequacy is typically the goal, not maximization. Excessive nutrients may not provide additional benefit and can be problematic. The focus is usually on meeting needs rather than exceeding them.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">3.</span>
                Context Is Critical
              </h3>
              <p className="text-sm text-gray-700">
                The same intervention can be appropriate or inappropriate depending on the patient's condition, 
                prognosis, and goals of care. Considering the full clinical picture is typically important.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">4.</span>
                Evidence Evolves
              </h3>
              <p className="text-sm text-gray-700">
                Practices that were standard decades ago may not align with current evidence. Stay current with 
                guidelines and be open to updating your practice.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">5.</span>
                Question Assumptions
              </h3>
              <p className="text-sm text-gray-700">
                When you hear "we always do it this way," ask why. Understanding the rationale helps you identify 
                when practices need updating.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">6.</span>
                Collaboration Improves Care
              </h3>
              <p className="text-sm text-gray-700">
                Work with dietitians, nurses, physicians, and other team members. Different perspectives help identify 
                assumptions and improve decision-making.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Safety & Perspective */}
        <div className="mb-12 space-y-6">
          {/* Clear Disclaimer */}
          <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
            <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
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
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Nutrition Tools Help Guide Attention
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Nutrition assessment tools, calculators, screening instruments, and guidelines are designed to help you 
                  identify areas that need attention and provide a framework for thinking about nutrition care. They help 
                  you focus on what matters most and ensure you don't miss important considerations. Think of them as 
                  navigational aids that point you in the right direction, not as destinations themselves.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
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
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
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
              </div>

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
        </div>

        {/* Section 7: Call-to-Action */}
        <div className="mb-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Ready to Apply What You've Learned?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Understanding these misconceptions is valuable, but putting that knowledge into practice is where real learning happens. 
              We invite you to continue your journey with these supportive next steps:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
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
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto">
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
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
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
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 bg-white rounded-lg border border-gray-200 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Remember, learning is a journey, not a destination. Every patient encounter is an opportunity to apply what you've learned 
              and continue growing in your practice. You're building skills that will serve you and your patients well."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
