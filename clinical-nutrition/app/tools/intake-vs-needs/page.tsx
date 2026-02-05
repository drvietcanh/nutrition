"use client";

import { useState } from "react";
import type {
  IntakeComparisonInputs,
  IntakeComparisonResult,
} from "../../../lib/calculators/intakeComparison";
import {
  compareIntakeToNeeds,
} from "../../../lib/calculators/intakeComparison";
import type { EnergyProteinRange } from "../../../lib/calculators/energyProtein";

interface NeedsState {
  energyLower: string;
  energyUpper: string;
  proteinLower: string;
  proteinUpper: string;
}

interface IntakeState {
  energyIntake: string;
  proteinIntake: string;
  daysObserved: string;
  mealsPercent: string;
  routeLabel: "" | "oral" | "mixed" | "unspecified";
}

const initialNeedsState: NeedsState = {
  energyLower: "",
  energyUpper: "",
  proteinLower: "",
  proteinUpper: "",
};

const initialIntakeState: IntakeState = {
  energyIntake: "",
  proteinIntake: "",
  daysObserved: "",
  mealsPercent: "",
  routeLabel: "",
};

export default function IntakeVsNeedsPage() {
  const [needs, setNeeds] = useState<NeedsState>(initialNeedsState);
  const [intake, setIntake] = useState<IntakeState>(initialIntakeState);
  const [comparison, setComparison] =
    useState<IntakeComparisonResult | null>(null);

  const toNeedsRange = (): EnergyProteinRange => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    const energyLower = toNumberOrNull(needs.energyLower);
    const energyUpper = toNumberOrNull(needs.energyUpper);
    const proteinLower = toNumberOrNull(needs.proteinLower);
    const proteinUpper = toNumberOrNull(needs.proteinUpper);

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

  const toIntakeInputs = (): IntakeComparisonInputs => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    return {
      energyKcalPerDay: toNumberOrNull(intake.energyIntake),
      proteinGramsPerDay: toNumberOrNull(intake.proteinIntake),
      daysObserved: toNumberOrNull(intake.daysObserved),
    };
  };

  const handleCompare = () => {
    const needsRange = toNeedsRange();
    const intakeInputs = toIntakeInputs();
    setComparison(compareIntakeToNeeds(needsRange, intakeInputs));
  };

  return (
    <main className="space-y-8">
      {/* 1. Title + short explanation */}
      <header className="space-y-2">
        <h1 className="text-xl font-semibold sm:text-2xl">
          Intake vs Estimated Needs – Teaching Tool
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          This page compares an <strong>educational estimate</strong> of energy
          and protein needs with what is actually being provided over a recent
          period. It is designed to make gaps visible and support reasoning,
          not to prescribe interventions.
        </p>
      </header>

      {/* 2. Why intake assessment matters */}
      <section
        aria-labelledby="why-heading"
        className="space-y-2 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="why-heading" className="text-base font-semibold sm:text-lg">
          2. Why intake assessment matters
        </h2>
        <p className="text-sm text-neutral-700 sm:text-base">
          In many clinical settings, patients receive less nutrition than
          simple estimates suggest. Understanding this gap helps explain weight
          changes, fatigue, and recovery patterns, but it still needs to be
          interpreted in the full clinical context.
        </p>
      </section>

      {/* 3–5. Needs input, intake input, and comparison */}
      <section className="space-y-6">
        <NeedsInput state={needs} onChange={setNeeds} />
        <IntakeInput state={intake} onChange={setIntake} onCompare={handleCompare} />
        <ComparisonPanel comparison={comparison} />
      </section>

      {/* 6. Interpretation & learning points (page-level) */}
      <section
        aria-labelledby="page-learning-heading"
        className="space-y-3 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="page-learning-heading"
          className="text-base font-semibold sm:text-lg"
        >
          6. Interpretation &amp; learning points
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Intake below an educational needs band is a{" "}
            <strong>prompt to ask why</strong>, not proof of harm on its own.
          </li>
          <li>
            Short-term dips can be acceptable when there is a clear reason and
            recovery is underway; persistent gaps over several days deserve more
            attention.
          </li>
          <li>
            Real-world decisions rely on clinicians combining these estimates
            with symptoms, function, organ status, and patient goals.
          </li>
        </ul>
      </section>

      {/* 7. Common clinical patterns */}
      <section
        aria-labelledby="patterns-heading"
        className="space-y-3 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="patterns-heading"
          className="text-base font-semibold sm:text-lg"
        >
          7. Common intake vs needs patterns
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Intake &lt;50% of needs for several days often prompts clinicians to
            re-check data, explore reasons for low intake, and consider local
            pathways.
          </li>
          <li>
            Protein intake is frequently lower than energy intake as a
            percentage of needs, especially when meals are small or
            carbohydrate-heavy.
          </li>
          <li>
            Energy may appear adequate while protein is relatively low,
            highlighting the importance of looking at{" "}
            <strong>both energy and protein</strong>.
          </li>
          <li>
            Day-to-day fluctuations are common; trends over several days are
            usually more informative than any single value.
          </li>
        </ul>
      </section>

      {/* 8. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-2">
        <h2
          id="safety-heading"
          className="text-base font-semibold sm:text-lg"
        >
          8. Safety reminder
        </h2>
        <p className="text-xs text-neutral-600 sm:text-sm">
          This tool is for <strong>education only</strong>. It does not provide
          medical advice, diagnosis, or treatment, does not create a
          clinician–patient relationship, and must not be used to prescribe
          diets, feeds, or other interventions.
        </p>
      </section>
    </main>
  );
}

interface NeedsInputProps {
  state: NeedsState;
  onChange: (next: NeedsState) => void;
}

// NeedsInput: manual re-entry of an educational needs band (from guidelines or Tool 02).
function NeedsInput({ state, onChange }: NeedsInputProps) {
  const update = <K extends keyof NeedsState>(key: K, value: NeedsState[K]) =>
    onChange({ ...state, [key]: value });

  return (
    <section aria-labelledby="needs-input-heading" className="space-y-3">
      <h2
        id="needs-input-heading"
        className="text-base font-semibold sm:text-lg"
      >
        3. Estimated daily needs (educational band)
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Enter an energy and protein band from a guideline or from the energy
        &amp; protein tool. This step is for{" "}
        <strong>learning continuity only</strong>; it does not link tools or
        prescribe doses.
      </p>
      <form className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the lower end often reflects a cautious starting point in many examples."
          >
            Energy needs – lower end (kcal/day)
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
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the upper end defines a more generous band that may or may not be appropriate in practice."
          >
            Energy needs – upper end (kcal/day)
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: protein ranges help frame the quality of intake, not just total calories."
          >
            Protein needs – lower end (g/day)
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
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the upper end reflects more generous protein provision in some teaching examples."
          >
            Protein needs – upper end (g/day)
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
        </div>
      </form>
    </section>
  );
}

interface IntakeInputProps {
  state: IntakeState;
  onChange: (next: IntakeState) => void;
  onCompare: () => void;
}

// IntakeInput: approximate delivered intake over a recent period, kept anonymous and session-only.
function IntakeInput({ state, onChange, onCompare }: IntakeInputProps) {
  const update = <K extends keyof IntakeState>(key: K, value: IntakeState[K]) =>
    onChange({ ...state, [key]: value });

  return (
    <section aria-labelledby="intake-input-heading" className="space-y-3">
      <h2
        id="intake-input-heading"
        className="text-base font-semibold sm:text-lg"
      >
        4. Approximate daily intake over a recent period
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Use best-available information (for example, charted oral intake,
        nutrition support records, or a 24-hour recall). These values are
        educational estimates, not legal documentation.
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
            title="Why it matters: comparing daily energy intake with an estimated band makes under- or over-provision visible."
          >
            Energy intake (kcal/day)
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: protein intake often lags behind energy intake as a percentage of estimated needs."
          >
            Protein intake (g/day)
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
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: a single day may not reflect the typical pattern; several days give more context."
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: rough 'percentage of meals eaten' notes can help explain why calculated intake looks low."
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: patterns differ when intake is mostly oral, mostly tube feeding, or mixed; this label is descriptive only."
          >
            Main route of nutrition (optional, educational label)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={state.routeLabel}
            onChange={(e) =>
              update(
                "routeLabel",
                e.target.value as IntakeState["routeLabel"]
              )
            }
          >
            <option value="">Select (e.g., oral)</option>
            <option value="oral">Mostly oral intake</option>
            <option value="mixed">Mixed oral and nutrition support</option>
            <option value="unspecified">Unspecified / not documented</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Compare intake with needs (educational)
          </button>
        </div>
      </form>
    </section>
  );
}

interface ComparisonPanelProps {
  comparison: IntakeComparisonResult | null;
}

// ComparisonPanel: visual and textual summary of the gap between needs and intake.
function ComparisonPanel({ comparison }: ComparisonPanelProps) {
  if (!comparison) {
    return (
      <section
        aria-labelledby="comparison-heading"
        className="space-y-3 rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700"
      >
        <h2
          id="comparison-heading"
          className="text-base font-semibold sm:text-lg"
        >
          5. Comparison between intake and needs
        </h2>
        <p>
          After you enter an educational needs band and approximate intake, this
          section will show how they compare and offer neutral teaching points
          about common patterns.
        </p>
      </section>
    );
  }

  return (
    <section
      aria-labelledby="comparison-heading"
      className="space-y-4 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800"
    >
      <h2
        id="comparison-heading"
        className="text-base font-semibold sm:text-lg"
      >
        5. Comparison between intake and needs (educational view)
      </h2>
      <ComparisonBands comparison={comparison} />
      <InterpretationBlock comparison={comparison} />
    </section>
  );
}

interface ComparisonBandsProps {
  comparison: IntakeComparisonResult;
}

// Visual bands emphasising patterns rather than exact numbers.
function ComparisonBands({ comparison }: ComparisonBandsProps) {
  const {
    energyMidpoint,
    proteinMidpoint,
    energyCoveragePercent,
    proteinCoveragePercent,
    energyGapKcalPerDay,
    proteinGapGramsPerDay,
    energyCategory,
    proteinCategory,
  } = comparison;

  const formatCoverage = (value: number | null) =>
    value != null
      ? `${value}% of the midpoint of the needs band`
      : "unable to describe with the current data";

  const formatGap = (gap: number | null, unit: "kcal" | "g") => {
    if (gap == null || !Number.isFinite(gap)) {
      return "gap cannot be described with the current data";
    }
    const rounded = Math.round(Math.abs(gap));
    if (rounded === 0) return "very close to the midpoint of the needs band";
    if (gap < 0) {
      return `about ${rounded} ${unit}/day below the midpoint of the needs band`;
    }
    return `about ${rounded} ${unit}/day above the midpoint of the needs band`;
  };

  const adequacyLabel = (category: typeof energyCategory) => {
    switch (category) {
      case "much_lower":
        return "markedly below this educational band (markedly inadequate from a teaching perspective)";
      case "somewhat_lower":
        return "somewhat below this educational band (partially adequate)";
      case "approximate":
        return "broadly within this educational band (often considered adequate in teaching scenarios)";
      case "higher":
        return "above this educational band; in practice this may or may not be appropriate";
      default:
        return "cannot be categorised with the current information";
    }
  };

  const energyBarClass =
    energyCategory === "much_lower"
      ? "w-1/4 bg-sky-100"
      : energyCategory === "somewhat_lower"
      ? "w-2/4 bg-sky-100"
      : energyCategory === "approximate"
      ? "w-3/4 bg-emerald-100"
      : energyCategory === "higher"
      ? "w-full bg-sky-100"
      : "w-1/3 bg-neutral-100";

  const proteinBarClass =
    proteinCategory === "much_lower"
      ? "w-1/4 bg-sky-100"
      : proteinCategory === "somewhat_lower"
      ? "w-2/4 bg-sky-100"
      : proteinCategory === "approximate"
      ? "w-3/4 bg-emerald-100"
      : proteinCategory === "higher"
      ? "w-full bg-sky-100"
      : "w-1/3 bg-neutral-100";

  return (
    <div className="grid gap-4 md:grid-cols-2">
      <div className="space-y-2">
        <p className="text-xs font-semibold text-neutral-700">
          Energy comparison
        </p>
        <p className="text-xs text-neutral-700">
          {energyMidpoint != null
            ? `Midpoint of needs band ≈ ${Math.round(energyMidpoint)} kcal/day.`
            : "Energy needs band not provided."}{" "}
          Estimated intake is{" "}
          <strong>{formatCoverage(energyCoveragePercent)}</strong> and{" "}
          <strong>{formatGap(energyGapKcalPerDay, "kcal")}</strong> (energy
          adequacy is {adequacyLabel(energyCategory)}).
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
          {proteinMidpoint != null
            ? `Midpoint of needs band ≈ ${Math.round(proteinMidpoint)} g/day.`
            : "Protein needs band not provided."}{" "}
          Estimated intake is{" "}
          <strong>{formatCoverage(proteinCoveragePercent)}</strong> and{" "}
          <strong>{formatGap(proteinGapGramsPerDay, "g")}</strong> (protein
          adequacy is {adequacyLabel(proteinCategory)}).
        </p>
        <div className="mt-1 space-y-1">
          <div className="h-2 w-full rounded-full bg-neutral-100">
            <div className={`h-2 rounded-full ${proteinBarClass}`} />
          </div>
          <p className="text-[11px] text-neutral-500">
            This band makes protein gaps visible without suggesting specific
            targets or actions.
          </p>
        </div>
      </div>
    </div>
  );
}

interface InterpretationBlockProps {
  comparison: IntakeComparisonResult;
}

// InterpretationBlock: neutral, non-directive explanation of what the pattern may mean.
function InterpretationBlock({ comparison }: InterpretationBlockProps) {
  return (
    <section className="space-y-1 border-t border-dashed border-neutral-200 pt-2">
      <p className="text-xs font-semibold text-neutral-700">
        Interpretation &amp; learning points (educational only)
      </p>
      <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
        {comparison.interpretation.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {(comparison.missingFields.length > 0 ||
        comparison.warnings.length > 0) && (
        <div className="mt-2 space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Limitations and caveats</p>
          {comparison.missingFields.length > 0 && (
            <p>
              Some information was missing or approximate:{" "}
              {comparison.missingFields.join(", ")}.
            </p>
          )}
          {comparison.warnings.length > 0 && (
            <ul className="list-disc space-y-0.5 pl-5">
              {comparison.warnings.map((warning) => (
                <li key={warning}>{warning}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </section>
  );
}

