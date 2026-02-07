/**
 * Lightweight, session-only clinical inputs that are safe to send to
 * serverless endpoints and store in memory without identifying a person.
 * All fields are JSON-serializable primitives or nulls.
 */

export type ClinicalSex =
  | "female"
  | "male"
  | "intersex"
  | "unspecified"
  | "unknown";

export type DiseaseContextCode =
  | "general_medical"
  | "surgical"
  | "oncology"
  | "icu"
  | "gastrointestinal"
  | "renal"
  | "hepatic"
  | "other";

export interface ClinicalInput {
  /**
   * Age in completed years:
   * used by screening tools and calculators (e.g., NRS-2002 age adjustment),
   * but coarse enough to avoid identifying a specific person.
   */
  ageYears: number | null;

  /**
   * Clinical sex / sex at birth:
   * needed because many reference values and equations differ by sex,
   * but stored as a simple categorical value with no gender identity details.
   */
  sex: ClinicalSex | null;

  /**
   * Current body weight in kilograms:
   * core input for energy/protein estimations and weight-loss calculations,
   * kept as a numeric value without any dates or identifiers attached.
   */
  weightKg: number | null;

  /**
   * Stature in centimeters:
   * enables BMI and height-based formulae while remaining non-identifying
   * when stored without dates, locations, or other linkage fields.
   */
  heightCm: number | null;

  /**
   * Approximate unintentional weight loss as a percentage of previous weight (0–100):
   * directly supports malnutrition screening logic (e.g., NRS, PG-SGA) in a compact form
   * without storing absolute historical weights or time-stamped weight records.
   */
  recentWeightLossPercent: number | null;

  /**
   * Approximate reduction in usual energy intake as a percentage (0–100):
   * represents how much the patient is eating relative to usual intake,
   * which is clinically meaningful for risk assessment but remains de-identified.
   */
  intakeReductionPercent: number | null;

  /**
   * Structured code for the main disease or care context:
   * lets tools adjust reasoning for common patterns (e.g., oncology vs ICU)
   * while avoiding specific diagnoses or coded medical record data.
   */
  diseaseContextCode: DiseaseContextCode | null;

  /**
   * Optional free-text description of the clinical scenario:
   * allows richer educational cases (e.g., “post-op colorectal surgery”)
   * while remaining session-only and avoiding names, dates, or identifiers by design.
   */
  diseaseContextFreeText?: string;
}

