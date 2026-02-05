import type { EnergyProteinRange } from "./energyProtein";

export type CoverageCategory = "much_lower" | "somewhat_lower" | "approximate" | "higher" | "unknown";

export interface IntakeInputs {
  /** Approximate daily energy actually received (kcal/day). */
  energyKcalPerDay: number | null;
  /** Approximate daily protein actually received (g/day). */
  proteinGramsPerDay: number | null;
  /** Optional number of days over which intake was observed (for trends). */
  daysObserved: number | null;
}

export interface NeedsVsIntakeResult {
  energyMidpoint: number | null;
  proteinMidpoint: number | null;
  energyCoveragePercent: number | null;
  proteinCoveragePercent: number | null;
  /** Signed daily difference between intake and midpoint of needs (kcal/day). */
  energyGapKcalPerDay: number | null;
  /** Signed daily difference between intake and midpoint of needs (g/day). */
  proteinGapGramsPerDay: number | null;
  energyCategory: CoverageCategory;
  proteinCategory: CoverageCategory;
  missingFields: string[];
  warnings: string[];
  /** Neutral explanations of how clinicians might think about this pattern. */
  interpretation: string[];
}

/**
 * Compare an educational needs range with an approximate intake and build a
 * qualitative description of the "gap". All values are approximate and
 * intended only for teaching.
 */
export function compareNeedsAndIntake(
  needs: EnergyProteinRange,
  intake: IntakeInputs
): NeedsVsIntakeResult {
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const interpretation: string[] = [];

  const energyMidpoint =
    needs.energyKcalPerDay != null
      ? (needs.energyKcalPerDay.lower + needs.energyKcalPerDay.upper) / 2
      : null;
  const proteinMidpoint =
    needs.proteinGramsPerDay != null
      ? (needs.proteinGramsPerDay.lower + needs.proteinGramsPerDay.upper) / 2
      : null;

  if (energyMidpoint == null) {
    missingFields.push("estimatedEnergyRange");
  }
  if (proteinMidpoint == null) {
    missingFields.push("estimatedProteinRange");
  }
  if (intake.energyKcalPerDay == null) {
    missingFields.push("actualEnergyIntake");
  }
  if (intake.proteinGramsPerDay == null) {
    missingFields.push("actualProteinIntake");
  }

  let energyCoveragePercent: number | null = null;
  let proteinCoveragePercent: number | null = null;

  if (energyMidpoint && intake.energyKcalPerDay != null) {
    energyCoveragePercent = Math.round(
      (intake.energyKcalPerDay / energyMidpoint) * 100
    );
  }
  if (proteinMidpoint && intake.proteinGramsPerDay != null) {
    proteinCoveragePercent = Math.round(
      (intake.proteinGramsPerDay / proteinMidpoint) * 100
    );
  }

  let energyGapKcalPerDay: number | null = null;
  let proteinGapGramsPerDay: number | null = null;

  if (energyMidpoint && intake.energyKcalPerDay != null) {
    energyGapKcalPerDay = intake.energyKcalPerDay - energyMidpoint;
  }
  if (proteinMidpoint && intake.proteinGramsPerDay != null) {
    proteinGapGramsPerDay = intake.proteinGramsPerDay - proteinMidpoint;
  }

  const energyCategory = categorizeCoverage(energyCoveragePercent);
  const proteinCategory = categorizeCoverage(proteinCoveragePercent);

  if (intake.daysObserved == null || intake.daysObserved <= 0) {
    warnings.push(
      "Intake was entered without a clear observation period; in practice, clinicians usually look at patterns over several days."
    );
  } else if (intake.daysObserved < 3) {
    interpretation.push(
      "This snapshot covers only a short period; in practice, repeated observations over several days give a more reliable picture."
    );
  } else {
    interpretation.push(
      "Looking at intake over several days can help distinguish a brief dip from a persistent gap between needs and intake."
    );
  }

  buildEnergyInterpretation(energyCategory, interpretation);
  buildProteinInterpretation(proteinCategory, interpretation);

  if (energyCoveragePercent != null && (energyCoveragePercent < 50 || energyCoveragePercent > 150)) {
    warnings.push(
      "The gap between estimated needs and intake is large; in practice, clinicians would confirm the data and consider whether it reflects measurement issues or a real clinical concern."
    );
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Some information was missing or approximate; these comparisons are for education only and should not be used for individual decisions."
    );
  }

  return {
    energyMidpoint,
    proteinMidpoint,
    energyCoveragePercent,
    proteinCoveragePercent,
    energyGapKcalPerDay,
    proteinGapGramsPerDay,
    energyCategory,
    proteinCategory,
    missingFields,
    warnings,
    interpretation,
  };
}

function categorizeCoverage(
  coveragePercent: number | null
): CoverageCategory {
  if (coveragePercent == null || !Number.isFinite(coveragePercent)) {
    return "unknown";
  }
  if (coveragePercent < 70) return "much_lower";
  if (coveragePercent < 90) return "somewhat_lower";
  if (coveragePercent <= 120) return "approximate";
  return "higher";
}

function buildEnergyInterpretation(
  category: CoverageCategory,
  lines: string[]
) {
  if (category === "unknown") {
    lines.push(
      "Because key information about needs or intake is missing, it is difficult to say much about the energy gap even in a teaching context."
    );
    return;
  }

  if (category === "much_lower") {
    lines.push(
      "When estimated energy intake is clearly below the educational needs range, clinicians often ask why intake is low (for example, symptoms, procedures, or access issues) before deciding what to change."
    );
    return;
  }

  if (category === "somewhat_lower") {
    lines.push(
      "A moderate energy shortfall over several days may prompt closer monitoring and discussion, but does not automatically mean that intake must be increased on a specific day."
    );
    return;
  }

  if (category === "approximate") {
    lines.push(
      "When estimated intake is broadly in the same band as educational needs, attention often shifts to tolerance, metabolic response, and longer-term trends rather than chasing exact numbers."
    );
    return;
  }

  if (category === "higher") {
    lines.push(
      "If estimated intake is consistently above an educational needs band, clinicians may check for signs of intolerance or overfeeding, while also confirming that the underlying needs estimate is appropriate."
    );
  }
}

function buildProteinInterpretation(
  category: CoverageCategory,
  lines: string[]
) {
  if (category === "unknown") {
    lines.push(
      "Unclear protein intake makes it hard to comment on adequacy, particularly in older or chronically unwell patients where protein often deserves special attention."
    );
    return;
  }

  if (category === "much_lower" || category === "somewhat_lower") {
    lines.push(
      "When protein intake falls well below educational estimates, clinicians often consider whether symptoms, food choices, or route limit access to protein-rich options."
    );
    return;
  }

  if (category === "approximate") {
    lines.push(
      "Protein intake in a similar band to educational estimates suggests that other factors (such as activity, inflammation, and function) will shape longer-term outcomes."
    );
    return;
  }

  if (category === "higher") {
    lines.push(
      "Higher protein intakes can be appropriate for some clinical situations, but in practice they are interpreted in the light of renal and hepatic function, tolerance, and local guidance."
    );
  }
}

