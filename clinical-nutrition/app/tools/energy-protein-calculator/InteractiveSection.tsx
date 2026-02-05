"use client";

import { useState } from "react";
import type { ClinicalInput } from "../../../lib/clinical-input";
import {
  calculateSimpleWeightBasedNeeds,
  calculateEquationStyleNeeds,
  type EnergyProteinEducationalResult,
  type EstimationMethod,
} from "../../../lib/calculators/energyProtein";

type MethodTab = EstimationMethod | "both";

interface FormState {
  ageYears: string;
  sex: ClinicalInput["sex"];
  weightKg: string;
  heightCm: string;
  diseaseContextCode: ClinicalInput["diseaseContextCode"];
  activityLevel: "" | "bedrest" | "light" | "mobile";
  bodySizeFlag: "" | "obesity" | "underweight";
}

const initialFormState: FormState = {
  ageYears: "",
  sex: null,
  weightKg: "",
  heightCm: "",
  diseaseContextCode: null,
  activityLevel: "",
  bodySizeFlag: "",
};

export function InteractiveSection() {
  const [activeMethod, setActiveMethod] = useState<MethodTab>("simple-weight-based");
  const [form, setForm] = useState<FormState>(initialFormState);
  const [simpleResult, setSimpleResult] =
    useState<EnergyProteinEducationalResult | null>(null);
  const [equationResult, setEquationResult] =
    useState<EnergyProteinEducationalResult | null>(null);

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
      recentWeightLossPercent: null,
      intakeReductionPercent: null,
      diseaseContextCode: form.diseaseContextCode ?? null,
      diseaseContextFreeText: undefined,
    };
  };

  const handleEstimate = () => {
    const input = toClinicalInput();

    if (activeMethod === "simple-weight-based" || activeMethod === "both") {
      setSimpleResult(calculateSimpleWeightBasedNeeds(input));
    }
    if (activeMethod === "equation-educational" || activeMethod === "both") {
      setEquationResult(calculateEquationStyleNeeds(input));
    }
  };

  return (
    <section
      aria-label="Interactive energy and protein needs teaching tool"
      className="space-y-6"
    >
      <MethodSelector activeMethod={activeMethod} onChange={setActiveMethod} />

      <InputForm
        form={form}
        onChange={setForm}
        onEstimate={handleEstimate}
      />

      <ResultPanel
        activeMethod={activeMethod}
        simpleResult={simpleResult}
        equationResult={equationResult}
      />
    </section>
  );
}

interface MethodSelectorProps {
  activeMethod: MethodTab;
  onChange: (next: MethodTab) => void;
}

// Lets the user switch between simple weight-based and equation-style views.
function MethodSelector({ activeMethod, onChange }: MethodSelectorProps) {
  return (
    <section aria-labelledby="method-selector-heading" className="space-y-3">
      <h2
        id="method-selector-heading"
        className="text-base font-semibold sm:text-lg"
      >
        3. Choose an estimation method
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Different approaches to estimating requirements answer slightly
        different questions. Use this section to compare a simple
        weight-based rule of thumb with a stress-adjusted, equation-style
        estimate.
      </p>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => onChange("simple-weight-based")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeMethod === "simple-weight-based"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          Simple weight-based
        </button>
        <button
          type="button"
          onClick={() => onChange("equation-educational")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeMethod === "equation-educational"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          Equation-style (educational)
        </button>
        <button
          type="button"
          onClick={() => onChange("both")}
          className={`rounded-md border px-3 py-2 text-sm shadow-sm ${
            activeMethod === "both"
              ? "border-neutral-800 bg-neutral-900 text-white"
              : "border-neutral-300 bg-white text-neutral-900 hover:bg-neutral-50"
          }`}
        >
          Compare both
        </button>
      </div>
      <p className="text-xs text-neutral-600 sm:text-sm">
        These methods show different ways of thinking about the same problem.
        They are starting points for discussion, not prescriptions.
      </p>
    </section>
  );
}

interface InputFormProps {
  form: FormState;
  onChange: (next: FormState) => void;
  onEstimate: () => void;
}

// Collects anonymous, session-only inputs needed for weight-based reasoning.
function InputForm({ form, onChange, onEstimate }: InputFormProps) {
  const update = <K extends keyof FormState>(
    key: K,
    value: FormState[K]
  ) => onChange({ ...form, [key]: value });

  return (
    <section aria-labelledby="inputs-heading" className="space-y-3">
      <h2 id="inputs-heading" className="text-base font-semibold sm:text-lg">
        4. Enter example clinical information
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Use anonymous, hypothetical values only. The aim is to understand how
        weight and clinical context shape estimated requirements, not to
        manage real patients.
      </p>

      <form
        className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6"
        onSubmit={(event) => {
          event.preventDefault();
          onEstimate();
        }}
      >
        {/* Age */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: some equations and guidelines adjust requirements for older or younger adults."
          >
            Age (years)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 65"
            value={form.ageYears}
            onChange={(e) => update("ageYears", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: a 30-year-old and an 85-year-old with the same weight may
            have different requirements and tolerance.
          </p>
        </div>

        {/* Sex */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: reference values and body composition often differ by sex."
          >
            Sex (for reference values)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.sex ?? ""}
            onChange={(e) =>
              update("sex", (e.target.value || null) as FormState["sex"])
            }
          >
            <option value="">Select (optional)</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
            <option value="intersex">Intersex</option>
            <option value="unspecified">Unspecified</option>
            <option value="unknown">Unknown</option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: some equations use sex as one of several input variables.
          </p>
        </div>

        {/* Weight */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: most bedside methods use body weight as the main anchor for energy and protein ranges."
          >
            Current weight (kg)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 70"
            value={form.weightKg}
            onChange={(e) => update("weightKg", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: using 70&nbsp;kg with a 25–30 kcal/kg rule gives roughly
            1750–2100&nbsp;kcal/day as a starting band.
          </p>
        </div>

        {/* Height */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: height helps interpret weight (for example, via BMI or adjusted body weight in obesity)."
          >
            Height (cm)
          </label>
          <input
            type="number"
            inputMode="decimal"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="e.g., 170"
            value={form.heightCm}
            onChange={(e) => update("heightCm", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Example: 70&nbsp;kg at 170&nbsp;cm has a different context than
            70&nbsp;kg at 150&nbsp;cm.
          </p>
        </div>

        {/* Disease context */}
        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: higher-stress clinical contexts (for example, major surgery, sepsis, ICU) often lead to higher estimated requirements."
          >
            Clinical context (illness / stress level, optional)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.diseaseContextCode ?? ""}
            onChange={(e) =>
              update(
                "diseaseContextCode",
                (e.target.value || null) as FormState["diseaseContextCode"]
              )
            }
          >
            <option value="">
              Select (optional, e.g., stable / mild illness)
            </option>
            <option value="general_medical">
              Stable / mild illness (general medical ward)
            </option>
            <option value="surgical">
              Moderate stress (postoperative / surgical)
            </option>
            <option value="oncology">
              Moderate–higher stress (oncology, active treatment)
            </option>
            <option value="icu">
              Severe illness / critical care (ICU)
            </option>
            <option value="gastrointestinal">
              GI disease (malabsorption, IBD, pancreatitis)
            </option>
            <option value="renal">Renal disease</option>
            <option value="hepatic">Liver disease</option>
            <option value="other">Other / mixed</option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: selecting &quot;Severe illness / critical care&quot; will
            illustrate how stress adjustments can nudge ranges upwards compared
            with a stable general medical ward.
          </p>
        </div>

        {/* Activity level (optional) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: more mobile patients often have slightly higher energy expenditure than those on strict bedrest."
          >
            Activity level (optional)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.activityLevel}
            onChange={(e) =>
              update("activityLevel", e.target.value as FormState["activityLevel"])
            }
          >
            <option value="">Select (e.g., bedrest)</option>
            <option value="bedrest">Bedrest / mostly in bed</option>
            <option value="light">
              Light activity (mostly in chair / short walks)
            </option>
            <option value="mobile">
              Mobile on ward (independent walking, rehab)
            </option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: an independently mobile patient may tolerate the upper end
            of an energy range more easily than someone on strict bedrest.
          </p>
        </div>

        {/* Obesity / underweight flag (optional, educational) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Why it matters: very low or very high body size can change how clinicians use simple weight-based rules and when they consider adjusted weights."
          >
            Body size context (optional, educational)
          </label>
          <select
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            value={form.bodySizeFlag}
            onChange={(e) =>
              update("bodySizeFlag", e.target.value as FormState["bodySizeFlag"])
            }
          >
            <option value="">Select (e.g., typical range)</option>
            <option value="underweight">Underweight / low BMI</option>
            <option value="obesity">
              Obesity (where adjusted body weight may be discussed)
            </option>
          </select>
          <p className="text-xs text-neutral-600">
            Example: in severe obesity, some teams discuss using adjusted or
            ideal body weight when applying g/kg rules of thumb.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            Show educational ranges
          </button>
        </div>
      </form>
    </section>
  );
}

interface ResultPanelProps {
  activeMethod: MethodTab;
  simpleResult: EnergyProteinEducationalResult | null;
  equationResult: EnergyProteinEducationalResult | null;
}

// Shows calm, advisory ranges for each selected method.
function ResultPanel({
  activeMethod,
  simpleResult,
  equationResult,
}: ResultPanelProps) {
  const showSimple =
    activeMethod === "simple-weight-based" || activeMethod === "both";
  const showEquation =
    activeMethod === "equation-educational" || activeMethod === "both";

  return (
    <section aria-labelledby="results-heading" className="space-y-3">
      <h2 id="results-heading" className="text-base font-semibold sm:text-lg">
        5. Educational ranges (not prescriptions)
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        These bands show how different methods might frame daily energy and
        protein needs. They are meant to support reasoning and discussion,
        not to generate diet plans or orders.
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        {showSimple && (
          <SingleMethodResult
            heading="Simple weight-based"
            result={simpleResult}
          />
        )}
        {showEquation && (
          <SingleMethodResult
            heading="Equation-style (educational)"
            result={equationResult}
          />
        )}
      </div>
    </section>
  );
}

interface SingleMethodResultProps {
  heading: string;
  result: EnergyProteinEducationalResult | null;
}

function SingleMethodResult({ heading, result }: SingleMethodResultProps) {
  if (!result) {
    return (
      <div className="rounded-md border border-dashed border-neutral-200 bg-neutral-50 p-4 text-sm text-neutral-700">
        Enter example values and run the estimation to see how this approach
        frames daily energy and protein needs.
      </div>
    );
  }

  const { ranges } = result;

  const energyText =
    ranges.energyKcalPerDay &&
    `${ranges.energyKcalPerDay.lower.toLocaleString()}–${ranges.energyKcalPerDay.upper.toLocaleString()} kcal/day`;

  const proteinText =
    ranges.proteinGramsPerDay &&
    `${ranges.proteinGramsPerDay.lower.toLocaleString()}–${ranges.proteinGramsPerDay.upper.toLocaleString()} g/day`;

  const proteinPerKgText =
    ranges.proteinGramsPerKgPerDay &&
    `${ranges.proteinGramsPerKgPerDay.lower}–${ranges.proteinGramsPerKgPerDay.upper} g/kg/day`;

  return (
    <article className="space-y-3 rounded-md border border-neutral-200 bg-white p-4 text-sm text-neutral-800">
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-wide text-neutral-500">
          Estimation approach
        </p>
        <p className="text-sm font-semibold">{heading}</p>
        <p className="text-xs text-neutral-600">{result.methodLabel}</p>
      </header>

      <section className="space-y-1">
        <p className="text-xs font-semibold text-neutral-700">
          Illustrative daily ranges
        </p>
        <ul className="space-y-0.5 text-xs text-neutral-700">
          <li>
            Energy:{" "}
            <strong>{energyText ?? "insufficient data to illustrate"}</strong>
          </li>
          <li>
            Protein (total):{" "}
            <strong>{proteinText ?? "insufficient data to illustrate"}</strong>
          </li>
          <li>
            Protein (per kg):{" "}
            <strong>
              {proteinPerKgText ?? "insufficient data to illustrate"}
            </strong>
          </li>
        </ul>

        {/* Simple visual band to support comparison between methods.
            This band is qualitative and not drawn to scale. */}
        {ranges.energyKcalPerDay && (
          <div className="mt-2 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className="h-2 w-3/4 rounded-full bg-sky-100" />
            </div>
            <p className="text-[11px] text-neutral-500">
              Visual band only (not to scale). Use the numbers above for
              approximate ranges.
            </p>
          </div>
        )}
      </section>

      {/* Interpretation, assumptions & learning points */}
      <InterpretationBlock
        explanation={result.explanation}
        clinicalContextNotes={result.clinicalContextNotes}
      />

      {/* Common pitfalls */}
      {(result.warnings.length > 0 || result.missingFields.length > 0) && (
        <section className="space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Common pitfalls and caveats</p>
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

interface InterpretationBlockProps {
  explanation: string[];
  clinicalContextNotes: string[];
}

// Neutral, educational interpretation block explaining assumptions and typical use.
function InterpretationBlock({
  explanation,
  clinicalContextNotes,
}: InterpretationBlockProps) {
  return (
    <section className="space-y-1 border-t border-dashed border-neutral-200 pt-2">
      <p className="text-xs font-semibold text-neutral-700">
        Key assumptions, interpretation &amp; learning points
      </p>
      <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
        {explanation.map((line) => (
          <li key={line}>{line}</li>
        ))}
        {clinicalContextNotes.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
    </section>
  );
}

