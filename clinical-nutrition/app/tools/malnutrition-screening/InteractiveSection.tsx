"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import {
  calculateEducationalNrs2002,
  type Nrs2002EducationalResult,
} from "../../../lib/screeners/nrs2002";
import {
  calculateEducationalPgSga,
  type PgSgaEducationalResult,
} from "../../../lib/screeners/pgsga";
import {
  buildMalnutritionInterpretation,
  type InterpretationBlock,
} from "../../../lib/explainers/malnutrition";

type ActiveTool = "nrs-2002" | "pg-sga" | "both";

// Session-only, anonymous inputs used to drive educational screening.
interface MalnutritionFormState {
  ageYears: string;
  sex: ClinicalInput["sex"];
  weightKg: string;
  heightCm: string;
  recentWeightLossPercent: string;
  intakeReductionPercent: string;
  durationReducedIntakeDays: string;
  diseaseContextCode: ClinicalInput["diseaseContextCode"];
}

const initialFormState: MalnutritionFormState = {
  ageYears: "",
  sex: null,
  weightKg: "",
  heightCm: "",
  recentWeightLossPercent: "",
  intakeReductionPercent: "",
  durationReducedIntakeDays: "",
  diseaseContextCode: null,
};

export function InteractiveSection() {
  const [activeTool, setActiveTool] = useState<ActiveTool>("nrs-2002");
  const [form, setForm] = useState<MalnutritionFormState>(initialFormState);
  const [nrsResult, setNrsResult] = useState<Nrs2002EducationalResult | null>(
    null
  );
  const [pgResult, setPgResult] = useState<PgSgaEducationalResult | null>(null);

  // Helper to map the string-based form state into the numeric ClinicalInput model.
  const toClinicalInput = (): ClinicalInput => {
    const toNumberOrNull = (value: string): number | null => {
      if (!value.trim()) return null;
      const parsed = Number(value);
      return Number.isFinite(parsed) ? parsed : null;
    };

    return {
      ageYears: toNumberOrNull(form.ageYears),
      sex: form.sex ?? null,
      weightKg: toNumberOrNull(form.weightKg),
      heightCm: toNumberOrNull(form.heightCm),
      recentWeightLossPercent: toNumberOrNull(form.recentWeightLossPercent),
      intakeReductionPercent: toNumberOrNull(form.intakeReductionPercent),
      diseaseContextCode: form.diseaseContextCode ?? null,
      diseaseContextFreeText: undefined,
    };
  };

  const handleRunScreening = () => {
    const input = toClinicalInput();

    // Run only the selected tool(s); both results remain purely in memory.
    if (activeTool === "nrs-2002" || activeTool === "both") {
      setNrsResult(calculateEducationalNrs2002(input));
    }
    if (activeTool === "pg-sga" || activeTool === "both") {
      setPgResult(calculateEducationalPgSga(input));
    }
  };

  return (
    <section aria-label="Interactive malnutrition risk teaching tool" className="space-y-6">
      <ToolSelector activeTool={activeTool} onChange={setActiveTool} />

      <InputForm
        form={form}
        onChange={setForm}
        onRunScreening={handleRunScreening}
      />

      <ResultPanel
        activeTool={activeTool}
        nrsResult={nrsResult}
        pgResult={pgResult}
      />
    </section>
  );
}

interface ToolSelectorProps {
  activeTool: ActiveTool;
  onChange: (next: ActiveTool) => void;
}

// Lets the user choose which educational screening framework they want to explore.
function ToolSelector({ activeTool, onChange }: ToolSelectorProps) {
  return (
    <section aria-labelledby="tool-selector-heading" className="space-y-3">
      <h2
        id="tool-selector-heading"
        className="text-base font-semibold sm:text-lg"
      >
        2. Choose a screening perspective
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Select which screening framework you want to explore. The same
        anonymous inputs can be interpreted through NRS-2002, PG-SGA, or both
        side by side.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange("nrs-2002")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "nrs-2002"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          NRS-2002 (educational)
        </button>
        <button
          type="button"
          onClick={() => onChange("pg-sga")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "pg-sga"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          PG-SGA (educational)
        </button>
        <button
          type="button"
          onClick={() => onChange("both")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeTool === "both"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          Compare both
        </button>
      </div>
      <p className="text-xs text-neutral-600 sm:text-sm">
        These views are simplified, educational approximations. They illustrate
        how the tools think about risk, not how to make clinical decisions.
      </p>
    </section>
  );
}

interface InputFormProps {
  form: MalnutritionFormState;
  onChange: (next: MalnutritionFormState) => void;
  onRunScreening: () => void;
}

// Step-by-step input form that collects anonymous, session-only data.
function InputForm({ form, onChange, onRunScreening }: InputFormProps) {
  const update = <K extends keyof MalnutritionFormState>(
    key: K,
    value: MalnutritionFormState[K]
  ) => {
    onChange({ ...form, [key]: value });
  };

  return (
    <section aria-labelledby="inputs-heading" className="space-y-3">
      <h2 id="inputs-heading" className="text-base font-semibold sm:text-lg">
        3. Enter example clinical information
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Use anonymous, hypothetical values only. These fields are kept
        intentionally small: they are here to illustrate which ingredients the
        screeners care about, not to capture real patient records.
      </p>

      <form
        className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onRunScreening();
        }}
      >
        {/* Age */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: NRS-2002 and other tools may give extra weight to older age because baseline vulnerability is higher."
          >
            Age (years)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 45"
            value={form.ageYears}
            onChange={(e) => update("ageYears", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: a 72-year-old with the same weight loss as a 25-year-old
            may be considered at slightly higher risk.
          </p>
        </div>

        {/* Sex */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: some reference ranges and equations differ by sex, which can change how 'low weight' or 'low intake' is interpreted."
          >
            Sex (for reference values)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.sex ?? ""}
            onChange={(e) =>
              update("sex", (e.target.value || null) as MalnutritionFormState["sex"])
            }
          >
            <option value="">Select (e.g., female)</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="intersex">Intersex</option>
            <option value="unspecified">Unspecified</option>
            <option value="unknown">Unknown</option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: a 60&nbsp;kg adult may be low for one sex but within
            reference range for another.
          </p>
        </div>

        {/* Current weight */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: current weight helps estimate energy/protein needs and puts weight loss in context."
          >
            Current weight (kg)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 60"
            value={form.weightKg}
            onChange={(e) => update("weightKg", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: 60&nbsp;kg after losing 6&nbsp;kg in 3&nbsp;months is a
            10% loss.
          </p>
        </div>

        {/* Height */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: height is used with weight to think about body mass (e.g., BMI) and long-term nutritional status."
          >
            Height (cm)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 165"
            value={form.heightCm}
            onChange={(e) => update("heightCm", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: 60&nbsp;kg at 165&nbsp;cm gives a BMI around 22.
          </p>
        </div>

        {/* Recent weight loss */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: unintentional weight loss over weeks–months is a key red flag in both NRS-2002 and PG-SGA."
          >
            Recent unintentional weight loss (%)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 7"
            value={form.recentWeightLossPercent}
            onChange={(e) => update("recentWeightLossPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: a 7% loss over 3&nbsp;months is often considered
            clinically important.
          </p>
        </div>

        {/* Intake reduction */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: eating substantially less than usual for days–weeks increases the risk that requirements are not being met."
          >
            Reduction in usual intake (%)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 50"
            value={form.intakeReductionPercent}
            onChange={(e) => update("intakeReductionPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: eating about half as much as usual (50% reduction) for a
            week or more is a strong concern signal.
          </p>
        </div>

        {/* Duration of reduced intake */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: the longer intake is reduced, the more likely deficits accumulate and translate into weight loss and functional impact."
          >
            Duration of reduced intake (days)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 7"
            value={form.durationReducedIntakeDays}
            onChange={(e) =>
              update("durationReducedIntakeDays", e.target.value)
            }
          />
          <p className="text-xs text-neutral-600">
            Example: &gt;7&nbsp;days of clearly reduced intake is usually more
            worrying than 1–2&nbsp;days around an acute illness.
          </p>
        </div>

        {/* Disease context (optional, selectable) */}
        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: conditions with high inflammatory or catabolic burden (e.g., major surgery, sepsis, advanced cancer) amplify nutritional risk."
          >
            Disease context (optional)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.diseaseContextCode ?? ""}
            onChange={(e) =>
              update(
                "diseaseContextCode",
                (e.target.value || null) as MalnutritionFormState["diseaseContextCode"]
              )
            }
          >
            <option value="">
              Select (optional, e.g., general medical)
            </option>
            <option value="general_medical">General medical ward</option>
            <option value="surgical">Postoperative / surgical</option>
            <option value="oncology">Oncology</option>
            <option value="icu">Intensive care</option>
            <option value="gastrointestinal">Gastrointestinal disease</option>
            <option value="renal">Renal disease</option>
            <option value="hepatic">Liver disease</option>
            <option value="other">Other / mixed</option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: select &quot;Oncology&quot; for an adult on chemotherapy,
            or &quot;Postoperative / surgical&quot; after major surgery.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Run educational screening
          </button>
        </div>
      </form>
    </section>
  );
}

interface ResultPanelProps {
  activeTool: ActiveTool;
  nrsResult: Nrs2002EducationalResult | null;
  pgResult: PgSgaEducationalResult | null;
}

// Displays the chosen screening tool result(s) with neutral, advisory wording.
function ResultPanel({ activeTool, nrsResult, pgResult }: ResultPanelProps) {
  const showNrs = activeTool === "nrs-2002" || activeTool === "both";
  const showPg = activeTool === "pg-sga" || activeTool === "both";

  return (
    <section aria-labelledby="result-heading" className="space-y-3">
      <h2 id="result-heading" className="text-base font-semibold sm:text-lg">
        4. Educational screening result
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        The panels below show how each screening framework might think about
        the information you entered. These are simplified, educational
        approximations and <strong>not</strong> diagnostic tools.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {showNrs && (
          <SingleToolResult
            label="NRS-2002"
            result={nrsResult}
            variant="nrs"
          />
        )}
        {showPg && (
          <SingleToolResult
            label="PG-SGA"
            result={pgResult}
            variant="pg"
          />
        )}
      </div>
    </section>
  );
}

type Variant = "nrs" | "pg";

interface SingleToolResultProps {
  label: string;
  result: Nrs2002EducationalResult | PgSgaEducationalResult | null;
  variant: Variant;
}

function SingleToolResult({ label, result, variant }: SingleToolResultProps) {
  if (!result) {
    return (
      <div className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        Enter example values and run the screening to see how {label} might
        interpret them in an educational way.
      </div>
    );
  }

  const interpretation: InterpretationBlock = buildMalnutritionInterpretation(
    result.riskCategory
  );

  const riskLabel =
    result.riskCategory === "low"
      ? "Low concern"
      : result.riskCategory === "increased"
      ? "Increased concern"
      : result.riskCategory === "high"
      ? "Higher concern"
      : "Insufficient data";

  const badgeColor =
    result.riskCategory === "low"
      ? "bg-emerald-50 text-emerald-800 border-emerald-100"
      : result.riskCategory === "unknown"
      ? "bg-neutral-50 text-neutral-800 border-neutral-200"
      : // increased / high – calm, non-alarming neutral/blue tones
        "bg-sky-50 text-sky-900 border-sky-100";

  return (
    <article className="space-y-3 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
      {/* Header with tool name and category */}
      <header className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-xs uppercase tracking-wide text-neutral-500">
            Screening framework
          </p>
          <p className="text-sm font-semibold">
            {variant === "nrs"
              ? "NRS-2002 (educational approximation)"
              : "PG-SGA (educational approximation)"}
          </p>
        </div>
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${badgeColor}`}
        >
          <span>{riskLabel}</span>
          <span className="text-[10px] uppercase tracking-wide text-neutral-500">
            Confidence: {result.confidence}
          </span>
        </div>
      </header>

      {/* Score and plain-language explanation */}
      <section className="space-y-1">
        <p className="text-xs text-neutral-600">
          Total educational score (not for clinical use):{" "}
          <strong>
            {result.approximateScore != null
              ? result.approximateScore
              : "not calculable"}
          </strong>
        </p>
        <p className="text-sm text-neutral-800">{result.summaryExplanation}</p>
      </section>

      {/* Why this result appeared */}
      {result.whyThisResult.length > 0 && (
        <section className="space-y-1">
          <p className="text-xs font-semibold text-neutral-700">
            Why this educational result appeared
          </p>
          <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
            {result.whyThisResult.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Interpretation and learning points (uses explainer helper) */}
      <section className="space-y-2 border-t border-dashed border-neutral-200 pt-2">
        <p className="text-xs font-semibold text-neutral-700">
          Interpretation &amp; learning points
        </p>
        <Explainer interpretation={interpretation} />
      </section>

      {/* Missing data / warnings */}
      {(result.missingFields.length > 0 || result.warnings.length > 0) && (
        <section className="space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Limitations of this estimate</p>
          {result.missingFields.length > 0 && (
            <p>
              Some information was missing or unclear:{" "}
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
    </article>
  );
}

interface ExplainerProps {
  interpretation: InterpretationBlock;
}

// Neutral, educational explanation of what the pattern might prompt in practice.
function Explainer({ interpretation }: ExplainerProps) {
  return (
    <div className="space-y-3 text-xs text-neutral-700 sm:text-sm">
      <div>
        <p className="font-semibold">
          What this pattern usually means in practice
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.whatItUsuallyMeans.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold">
          What clinicians often consider next (not instructions)
        </p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.whatCliniciansOftenConsiderNext.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div>
        <p className="font-semibold">Common pitfalls and confounders</p>
        <ul className="list-disc space-y-1 pl-5">
          {interpretation.commonPitfalls.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

