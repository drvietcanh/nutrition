/**
 * Global behavioral rules for all clinical tools in this project.
 *
 * These rules are enforced at the UI and API layers to keep tools
 * educational, advisory, and safe for a public-facing environment.
 */

export const TOOL_BEHAVIOR_RULES = {
  /**
   * Tools must clearly explain what they do, what inputs they use, and
   * how the underlying concept works BEFORE running any calculations.
   */
  explainBeforeCalculate: true,

  /**
   * Every numerical or categorical result must be paired with human-readable
   * interpretation text that frames the output as an estimate or teaching aid,
   * not as a directive or clinical decision.
   */
  requireInterpretationText: true,

  /**
   * Each tool page must include explicit guidance on appropriate use:
   * - "When this tool is useful"
   * - "When this tool is NOT appropriate"
   * These sections should be visible without scrolling past the main result.
   */
  requireUsageContextSections: {
    whenUseful: true,
    whenNotAppropriate: true,
  },

  /**
   * Hard prohibitions for all tools – these are project-wide guarantees.
   */
  forbiddenCapabilities: {
    /**
     * Tools must never make automatic clinical decisions (e.g., "admit to ICU",
     * "start enteral feeding") or present outputs as decisions made on behalf
     * of a clinician.
     */
    automaticClinicalDecisions: true,

    /**
     * Tools must not generate prescriptive treatment instructions
     * (e.g., specific orders, drug doses, or feeding regimens).
     * Any suggestions must be framed as educational examples only.
     */
    treatmentInstructions: true,

    /**
     * Tools may not persist patient-level data (identifiers, clinical inputs,
     * or results) beyond the current session. Implementations should avoid
     * databases and long-lived storage for tool inputs/results.
     */
    persistentPatientData: true,
  },
} as const;

export type ToolBehaviorRules = typeof TOOL_BEHAVIOR_RULES;

