/**
 * Educational helpers to compare estimated needs with actual intake.
 *
 * This file re-exports the core comparison logic from `intakeGap.ts` with
 * names that are easy to use from UI components. All functions are:
 * - pure and JSON-serialisable,
 * - suitable for serverless and client-side use,
 * - intended for education only (not for prescribing or decision support).
 */

import type { EnergyProteinRange } from "./energyProtein";
import {
  compareNeedsAndIntake,
  type IntakeInputs,
  type NeedsVsIntakeResult,
} from "./intakeGap";

export type IntakeComparisonInputs = IntakeInputs;
export type IntakeComparisonResult = NeedsVsIntakeResult;

/**
 * Compare an educational energy/protein needs band with an approximate
 * daily intake. The result is a qualitative description of the "gap"
 * (for example, markedly below / partially adequate / broadly similar),
 * plus neutral teaching points.
 *
 * This function must NOT be used to trigger clinical actions; it is for
 * teaching and reasoning practice only.
 */
export function compareIntakeToNeeds(
  needs: EnergyProteinRange,
  intake: IntakeComparisonInputs
): IntakeComparisonResult {
  return compareNeedsAndIntake(needs, intake);
}

