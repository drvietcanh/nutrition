"use client";

import { useState } from "react";
import type { EnergyProteinRange } from "../../../lib/calculators/energyProtein";
import {
  compareNeedsAndIntake,
  type IntakeInputs,
  type NeedsVsIntakeResult,
} from "../../../lib/calculators/intakeGap";

interface NeedsFormState {
  energyLower: string;
  energyUpper: string;
  proteinLower: string;
  proteinUpper: string;
}

interface IntakeFormState {
  energyIntake: string;
  proteinIntake: string;
  daysObserved: string;
  mealsPercent: string;
  routeLabel: "" | "oral" | "mixed" | "unspecified";
}

const initialNeedsForm: NeedsFormState = {
  energyLower: "",
  energyUpper: "",
  proteinLower: "",
  proteinUpper: "",
};

const initialIntakeForm: IntakeFormState = {
  energyIntake: "",
  proteinIntake: "",
  daysObserved: "",
  mealsPercent: "",
  routeLabel: "",
};

export function InteractiveSection() {
  const [needsForm, setNeedsForm] = useState<NeedsFormState>(initialNeedsForm);
  const [intakeForm, setIntakeForm] =
    useState<IntakeFormState>(initialIntakeForm);
  const [result, setResult] = useState<NeedsVsIntakeResult | null>(null);

  const toRange = (): EnergyProteinRange => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    const energyLower = toNumberOrNull(needsForm.energyLower);
    const energyUpper = toNumberOrNull(needsForm.energyUpper);
    const proteinLower = toNumberOrNull(needsForm.proteinLower);
    const proteinUpper = toNumberOrNull(needsForm.proteinUpper);

    return {
      energyKcalPerDay:
        energyLower != null && energyUpper != null
          ? { lower: energyLower, upper: energyUpper }
          : null,
      proteinGramsPerDay:
        proteinLower != null && proteinUpper != null
          ? { lower: proteinLower, upper: proteinUpper }
          : null,
      proteinGramsPerKgPerDay: null,
    };
  };

  const toIntake = (): IntakeInputs => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    return {
      energyKcalPerDay: toNumberOrNull(intakeForm.energyIntake),
      proteinGramsPerDay: toNumberOrNull(intakeForm.proteinIntake),
      daysObserved: toNumberOrNull(intakeForm.daysObserved),
    };
  };

  const handleCompare = () => {
    const needsRange = toRange();
    const intake = toIntake();

    setResult(compareNeedsAndIntake(needsRange, intake));
  };

  return (
    <section
      aria-label="Intake versus estimated needs teaching tool"
      className="space-y-6"
    >
      <NeedsForm state={needsForm} onChange={setNeedsForm} />
      <IntakeForm state={intakeForm} onChange={setIntakeForm} onCompare={handleCompare} />
      <ResultPanel result={result} />
    </section>
  );
}

interface NeedsFormProps {
  state: NeedsFormState;
  onChange: (next: NeedsFormState) => void;
}

// Step 1: users enter or copy an educational needs range from another tool or guideline.
function NeedsForm({ state, onChange }: NeedsFormProps) {
  const update = <K extends keyof NeedsFormState>(
    key: K,
    value: NeedsFormState[K]
  ) => onChange({ ...state, [key]: value });

  return (
    <section aria-labelledby="needs-heading" className="space-y-3">
      <h2 id="needs-heading" className="text-base font-semibold sm:text-lg">
        3. Enter estimated daily needs (educational range)
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Use an educational range from a guideline or from the energy &amp;
        protein tool (for example, 1750–2100 kcal/day and 70–105 g/day). The
        aim is to compare this band with what is actually being received.
      </p>
      <form className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the lower end of the range often reflects a cautious starting point."
          >
            Estimated energy needs – lower end (kcal/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 1750"
            value={state.energyLower}
            onChange={(e) => update("energyLower", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: for a 70&nbsp;kg adult using ~25 kcal/kg/day, the lower end
            could be about 1750 kcal/day.
          </p>
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the upper end marks a more generous band that may be appropriate as tolerance and clinical course become clearer."
          >
            Estimated energy needs – upper end (kcal/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 2100"
            value={state.energyUpper}
            onChange={(e) => update("energyUpper", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: for the same person, using ~30 kcal/kg/day gives about 2100
            kcal/day.
          </p>
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: protein ranges often widen in illness to allow for higher needs and local variation."
          >
            Estimated protein needs – lower end (g/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 70"
            value={state.proteinLower}
            onChange={(e) => update("proteinLower", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: 1.0 g/kg/day for a 70&nbsp;kg adult would be about 70 g/day.
          </p>
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the upper end reflects more generous protein provision in some guidelines, especially during catabolic illness."
          >
            Estimated protein needs – upper end (g/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 105"
            value={state.proteinUpper}
            onChange={(e) => update("proteinUpper", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: 1.5 g/kg/day for the same adult gives about 105 g/day.
          </p>
        </div>
      </form>
    </section>
  );
}

interface IntakeFormProps {
  state: IntakeFormState;
  onChange: (next: IntakeFormState) => void;
  onCompare: () => void;
}

// Step 2: users estimate what is actually being received over a defined period.
function IntakeForm({ state, onChange, onCompare }: IntakeFormProps) {
  const update = <K extends keyof IntakeFormState>(
    key: K,
    value: IntakeFormState[K]
  ) => onChange({ ...state, [key]: value });

  return (
    <section aria-labelledby="intake-heading" className="space-y-3">
      <h2 id="intake-heading" className="text-base font-semibold sm:text-lg">
        4. Enter approximate intake over a recent period
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Use best-available information (for example, charted oral intake,
        enteral/parenteral nutrition records, or a 24-hour recall). The goal is
        to understand the gap between estimated needs and actual intake, not to
        generate orders.
      </p>

      <form
        className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onCompare();
        }}
      >
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: comparing daily energy intake with an estimated needs band highlights under- or over-provision."
          >
            Approximate daily energy intake (kcal/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 1200"
            value={state.energyIntake}
            onChange={(e) => update("energyIntake", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: add together energy from oral intake and any nutrition
            support, then divide by the number of days observed.
          </p>
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: protein intake is often lower than energy intake as a percentage of estimated needs, especially with small meals."
          >
            Approximate daily protein intake (g/day)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 45"
            value={state.proteinIntake}
            onChange={(e) => update("proteinIntake", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: use food records or nutrition support documentation to
            estimate total grams of protein per day.
          </p>
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: intake on a single day can be misleading; clinicians usually look at patterns over several days."
          >
            Number of days observed
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm sm:max-w-xs"
            placeholder="e.g., 3"
            value={state.daysObserved}
            onChange={(e) => update("daysObserved", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: if you have 3 days of intake data, enter 3 to emphasise
            trends rather than a single day.
          </p>
        </div>

        {/* Percentage of meals consumed (optional helper) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: many ward notes describe intake as a rough percentage of meals eaten, which can help explain why calculated intake looks low."
          >
            Approximate percentage of meals consumed (optional)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 50"
            value={state.mealsPercent}
            onChange={(e) => update("mealsPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: &quot;about half of meals eaten&quot; could be entered as
            roughly 50%.
          </p>
        </div>

        {/* Route label (oral / mixed / unspecified, educational only) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: intake patterns often differ when nutrition is mainly oral, mainly tube feeding, or a mixture, but this tool does not recommend routes."
          >
            Main route of nutrition (educational label, optional)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={state.routeLabel}
            onChange={(e) =>
              update(
                "routeLabel",
                e.target.value as IntakeFormState["routeLabel"]
              )
            }
          >
            <option value="">Select (e.g., oral)</option>
            <option value="oral">Mostly oral intake</option>
            <option value="mixed">Mixed oral and nutrition support</option>
            <option value="unspecified">Unspecified / not documented</option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: choose &quot;Mixed&quot; if both food and nutrition
            support contribute meaningfully to intake.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Compare needs and intake (educational)
          </button>
        </div>
      </form>
    </section>
  );
}

interface ResultPanelProps {
  result: NeedsVsIntakeResult | null;
}

// Step 5: make the gap visible and explain it in neutral, advisory terms.
function ResultPanel({ result }: ResultPanelProps) {
  if (!result) {
    return (
      <section
        aria-labelledby="result-heading"
        className="space-y-3 rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
      >
        <h2 id="result-heading" className="text-base font-semibold sm:text-lg">
          5. Gap between needs and intake
        </h2>
        <p>
          After you enter an educational needs band and an approximate intake,
          this section will show how they compare and offer teaching points
          about how clinicians might interpret similar patterns.
        </p>
      </section>
    );
  }

  const energyCoverageText =
    result.energyCoveragePercent != null
      ? `${result.energyCoveragePercent}% of the midpoint of the needs band`
      : "insufficient data to compare";

  const proteinCoverageText =
    result.proteinCoveragePercent != null
      ? `${result.proteinCoveragePercent}% of the midpoint of the needs band`
      : "insufficient data to compare";

  const formatGap = (gap: number | null, unit: "kcal" | "g") => {
    if (gap == null || !Number.isFinite(gap)) return "gap cannot be described with the current data";
    const rounded = Math.round(Math.abs(gap));
    if (rounded === 0) return "very close to the midpoint of the needs band";
    if (gap < 0) {
      return `about ${rounded} ${unit}/day below the midpoint of the needs band`;
    }
    return `about ${rounded} ${unit}/day above the midpoint of the needs band`;
  };

  const energyGapText = formatGap(result.energyGapKcalPerDay, "kcal");
  const proteinGapText = formatGap(result.proteinGapGramsPerDay, "g");

  const adequacyLabel = (category: typeof result.energyCategory) => {
    switch (category) {
      case "much_lower":
        return "markedly below this educational band (markedly inadequate from a teaching perspective)";
      case "somewhat_lower":
        return "somewhat below this educational band (partially adequate)";
      case "approximate":
        return "broadly within this educational band (adequate in many teaching examples)";
      case "higher":
        return "above this educational band; in practice this may or may not be appropriate";
      default:
        return "cannot be categorised with the current information";
    }
  };

  const energyBandText =
    result.energyMidpoint != null
      ? `Midpoint of energy needs band ≈ ${Math.round(
          result.energyMidpoint
        )} kcal/day`
      : "Energy needs band not provided";

  const proteinBandText =
    result.proteinMidpoint != null
      ? `Midpoint of protein needs band ≈ ${Math.round(
          result.proteinMidpoint
        )} g/day`
      : "Protein needs band not provided";

  const energyBarClass =
    result.energyCategory === "much_lower"
      ? "w-1/4 bg-sky-100"
      : result.energyCategory === "somewhat_lower"
      ? "w-2/4 bg-sky-100"
      : result.energyCategory === "approximate"
      ? "w-3/4 bg-emerald-100"
      : result.energyCategory === "higher"
      ? "w-full bg-sky-100"
      : "w-1/3 bg-neutral-100";

  const proteinBarClass =
    result.proteinCategory === "much_lower"
      ? "w-1/4 bg-sky-100"
      : result.proteinCategory === "somewhat_lower"
      ? "w-2/4 bg-sky-100"
      : result.proteinCategory === "approximate"
      ? "w-3/4 bg-emerald-100"
      : result.proteinCategory === "higher"
      ? "w-full bg-sky-100"
      : "w-1/3 bg-neutral-100";

  return (
    <section
      aria-labelledby="result-heading"
      className="space-y-4 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800"
    >
      <h2 id="result-heading" className="text-base font-semibold sm:text-lg">
        5. Gap between needs and intake (educational view)
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-neutral-700">
            Energy comparison
          </p>
          <p className="text-xs text-neutral-700">
            {energyBandText}. Estimated intake is{" "}
            <strong>{energyCoverageText}</strong> and{" "}
            <strong>{energyGapText}</strong> (energy adequacy is{" "}
            {adequacyLabel(result.energyCategory)}).
          </p>
          <div className="mt-1 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className={`h-2 rounded-full ${energyBarClass}`} />
            </div>
            <p className="text-[11px] text-neutral-500">
              The bar qualitatively shows how intake compares with the midpoint
              of the educational needs band (not to scale).
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-neutral-700">
            Protein comparison
          </p>
          <p className="text-xs text-neutral-700">
            {proteinBandText}. Estimated intake is{" "}
            <strong>{proteinCoverageText}</strong> and{" "}
            <strong>{proteinGapText}</strong> (protein adequacy is{" "}
            {adequacyLabel(result.proteinCategory)}).
          </p>
          <div className="mt-1 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className={`h-2 rounded-full ${proteinBarClass}`} />
            </div>
            <p className="text-[11px] text-neutral-500">
              This band makes the protein gap visible without suggesting a
              specific target.
            </p>
          </div>
        </div>
      </div>

      {/* Interpretation & learning points from the comparison helper */}
      <section className="space-y-1 border-t border-dashed border-neutral-200 pt-2">
        <p className="text-xs font-semibold text-neutral-700">
          Interpretation &amp; learning points
        </p>
        <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
          {result.interpretation.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </section>

      {/* Limitations and caveats */}
      {(result.missingFields.length > 0 || result.warnings.length > 0) && (
        <section className="space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Limitations and caveats</p>
          {result.missingFields.length > 0 && (
            <p>
              Some information was missing or approximate:{" "}
              {result.missingFields.join(", ")}.
            </p>
          )}
          {result.warnings.length > 0 && (
            <ul className="list-disc space-y-0.5 pl-5">
              {result.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          )}
        </section>
      )}
    </section>
  );
}

