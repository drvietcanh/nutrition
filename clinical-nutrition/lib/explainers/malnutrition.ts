import type { RiskCategory } from "../screeners/nrs2002";

export interface InterpretationBlock {
  /**
   * Neutral explanation of what this pattern of findings usually means
   * in everyday clinical practice, phrased for education.
   */
  whatItUsuallyMeans: string[];
  /**
   * Typical next steps that clinicians might consider after a concerning
   * screening pattern, described as possibilities rather than directives.
   */
  whatCliniciansOftenConsiderNext: string[];
  /**
   * Common pitfalls and confounders that can make screening results
   * misleading (e.g., oedema, fluid shifts, acute inflammation).
   */
  commonPitfalls: string[];
}

/**
 * Build an educational interpretation block for a malnutrition risk
 * screening result. This function is deliberately qualitative and
 * non-directive: it does not recommend specific actions.
 */
export function buildMalnutritionInterpretation(
  riskCategory: RiskCategory
): InterpretationBlock {
  if (riskCategory === "low") {
    return {
      whatItUsuallyMeans: [
        "In clinical practice, a lower-risk screening pattern often means there are no strong immediate red flags for recent weight loss or sustained intake problems.",
        "It does not prove that nutrition is adequate, but suggests that other problems may be more urgent to address first.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Continuing to observe weight, intake, and functional status over time.",
        "Re-screening if the clinical situation changes, such as a new illness or reduced appetite.",
        "Considering a more detailed nutrition history if there are additional concerns not captured by the screener.",
      ],
      commonPitfalls: [
        "Relying on the screening result alone without asking about recent changes in appetite, symptoms, or functional decline.",
        "Missing risk in people who have had very gradual changes over a long period or who cannot easily report their history.",
      ],
    };
  }

  if (riskCategory === "high") {
    return {
      whatItUsuallyMeans: [
        "In clinical practice, a higher-risk screening pattern is often treated as a signal that nutrition may be an important contributor to overall risk.",
        "It does not confirm malnutrition, but it usually prompts clinicians to look more closely at intake, weight history, and function.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Arranging a fuller nutrition assessment, where available, to explore causes, severity, and potential supports.",
        "Reviewing medication, symptoms, and underlying disease to understand why intake or weight have changed.",
        "Checking local guidelines or pathways that describe how to respond to positive nutrition screening results.",
      ],
      commonPitfalls: [
        "Interpreting a higher-risk pattern as a treatment plan on its own, without a broader clinical assessment.",
        "Overlooking confounders such as oedema, fluid resuscitation, or large-volume ascites, which can hide weight loss.",
        "Ignoring the influence of acute inflammation or infection, which can change weight and intake without reflecting long-term status.",
      ],
    };
  }

  // "increased" or "unknown" are handled together with cautious language.
  if (riskCategory === "increased") {
    return {
      whatItUsuallyMeans: [
        "In clinical practice, an 'increased risk' pattern is often treated as an early signal that closer attention to nutrition may be helpful.",
        "It suggests that there are some concerning features, but the overall picture still needs to be confirmed with more detail.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Clarifying the time course of weight loss and reduced intake.",
        "Looking for reversible contributors, such as nausea, pain, or difficulties accessing food.",
        "Discussing the findings with colleagues (for example, dietitians or senior clinicians) if available.",
      ],
      commonPitfalls: [
        "Assuming that 'increased risk' automatically means malnutrition is present.",
        "Forgetting to re-check the information when new history becomes available or when symptoms change.",
      ],
    };
  }

  return {
    whatItUsuallyMeans: [
      "When important pieces of information are missing, it becomes difficult to say very much about nutritional risk even in a teaching context.",
      "In practice, clinicians would usually try to gather more detail before interpreting the result.",
    ],
    whatCliniciansOftenConsiderNext: [
      "Clarifying gaps in the history, such as time frames for weight change or reasons for reduced intake.",
      "Asking about symptoms or social factors that might not have been captured in the initial screening questions.",
    ],
    commonPitfalls: [
      "Over-interpreting an incomplete screening result as if it were definitive.",
      "Failing to recognise that missing data can hide clinically important problems.",
    ],
  };
}

