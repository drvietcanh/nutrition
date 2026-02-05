/**
 * Myths Data
 * 
 * Educational Purpose: This file contains the data for common misconceptions
 * in clinical nutrition. Each myth includes:
 * - The common belief (myth)
 * - Why it sounds right (helps readers understand the appeal)
 * - What actually happens in practice (clinical reality)
 * - What to understand instead (evidence-based replacement)
 * - Optional clinical insight (additional context)
 * 
 * Content Philosophy: Non-judgmental, educational approach that helps readers
 * understand misconceptions without shaming, alarmist language, or treatment advice.
 */

export interface Myth {
  id: string;
  myth: string;
  whyItSoundsRight: string;
  whatActuallyHappens: string;
  whatToUnderstandInstead: string;
  clinicalInsight?: string;
}

export const myths: Myth[] = [
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
