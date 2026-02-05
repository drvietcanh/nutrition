export const DISCLAIMER_COPY = {
  global: {
    /**
     * Short banner text shown on every page in the root layout.
     * Must be concise but clearly state the educational, non‑clinical nature of the site.
     */
    bannerShort:
      "Education only – not for diagnosis, treatment decisions, or emergencies.",

    /**
     * Full global disclaimer that can be linked from the banner or footer.
     */
    full:
      "This site is for education only. It does not provide medical advice, diagnosis, or treatment, does not create a clinician–patient relationship, and must not be used for clinical decision-making or emergency care.",
  },
  tools: {
    /**
     * Shared heading for tool-level disclaimer blocks.
     */
    header: "How to use these tools safely",

    /**
     * Advisory copy that appears at the top of every tool page, reinforcing
     * that outputs are educational estimates and must be interpreted by a clinician.
     */
    advisory:
      "These tools are designed to support clinical reasoning and education. They provide estimates and discussion points, not clinical decisions or treatment instructions.",

    /**
     * Section titles required on every tool page.
     */
    whenUsefulTitle: "When this tool is useful",
    whenNotAppropriateTitle: "When this tool is NOT appropriate",

    /**
     * Generic guidance that can be overridden per-tool but should be present
     * by default to ensure no tool ships without basic usage boundaries.
     */
    whenUsefulGeneric:
      "Use this tool to explore how changes in clinical inputs (e.g., age, weight, intake) influence risk assessment and nutritional reasoning in hypothetical or de‑identified cases.",
    whenNotAppropriateGeneric:
      "Do not use this tool to make or confirm diagnoses, prescribe treatments, or manage real‑time emergencies. Always rely on local policies, guidelines, and senior clinical judgment.",
  },
  templates: {
    /**
     * Reusable phrases for framing numerical results and outputs as advisory.
     */
    resultPhrasing: [
      "This is an educational estimate based on the information you entered.",
      "Use this result as a starting point for discussion, not as a final decision.",
      "Values may differ from local guidelines or institutional protocols.",
    ],
    /**
     * Phrases that reinforce clinician responsibility and non‑directive language.
     */
    clinicianResponsibility: [
      "Clinical decisions must always be made by a qualified clinician using full clinical information.",
      "This tool does not replace local protocols, multidisciplinary review, or shared decision-making with patients.",
    ],
    /**
     * Phrases to clearly exclude emergency or time-critical use.
     */
    notForEmergencyUse: [
      "Do not use this tool for emergency triage or time‑critical treatment decisions.",
      "In an emergency, follow your local emergency protocols and seek urgent medical assistance.",
    ],
  },
} as const;

export type DisclaimerCopy = typeof DISCLAIMER_COPY;

// Backwards-compatible alias for the main global disclaimer text.
export const GLOBAL_DISCLAIMER = DISCLAIMER_COPY.global.full;

