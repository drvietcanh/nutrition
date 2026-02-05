export type ToolCategory = "screener" | "calculator" | "worksheet";

export interface ToolMetadata {
  id: string;
  title: string;
  category: ToolCategory;
  summary: string;
  educationalFocus: string;
}

export const TOOL_CATALOG: ToolMetadata[] = [
  {
    id: "malnutrition-screening",
    title: "Malnutrition Screening",
    category: "screener",
    summary: "Structured questions to support recognition of patients at risk of malnutrition.",
    educationalFocus:
      "Teaches how to interpret common malnutrition screening criteria and limitations.",
  },
  {
    id: "energy-protein-calculator",
    title: "Energy & Protein Calculator",
    category: "calculator",
    summary: "Estimates daily energy and protein requirements for educational scenarios.",
    educationalFocus:
      "Helps learners understand how patient characteristics influence estimated needs.",
  },
  {
    id: "intake-assessment",
    title: "Intake Assessment Worksheet",
    category: "worksheet",
    summary: "Guides systematic review of oral/enteral/parenteral intake over time.",
    educationalFocus:
      "Supports structured thinking about adequacy of intake versus estimated needs.",
  },
];

