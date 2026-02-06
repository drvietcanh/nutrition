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
      aria-label="Công cụ giảng dạy lượng ăn vào so với nhu cầu ước tính"
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
        3. Nhập nhu cầu hàng ngày ước tính (phạm vi giáo dục)
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Sử dụng một phạm vi giáo dục từ hướng dẫn hoặc từ công cụ năng lượng &amp;
        protein (ví dụ: 1750–2100 kcal/ngày và 70–105 g/ngày).
        Mục đích là so sánh phạm vi này với những gì thực sự đang được nhận.
      </p>
      <form className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối thấp hơn của phạm vi thường phản ánh điểm khởi đầu thận trọng."
          >
            Nhu cầu năng lượng ước tính – cuối thấp hơn (kcal/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 1750"
            value={state.energyLower}
            onChange={(e) => update("energyLower", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: cho một người trưởng thành 70&nbsp;kg sử dụng ~25 kcal/kg/ngày, cuối thấp hơn
            có thể khoảng 1750 kcal/ngày.
          </p>
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối cao hơn đánh dấu một phạm vi rộng rãi hơn có thể phù hợp khi khả năng chịu đựng và diễn biến lâm sàng trở nên rõ ràng hơn."
          >
            Nhu cầu năng lượng ước tính – cuối cao hơn (kcal/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 2100"
            value={state.energyUpper}
            onChange={(e) => update("energyUpper", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: cho cùng một người, sử dụng ~30 kcal/kg/ngày cho khoảng 2100
            kcal/ngày.
          </p>
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: phạm vi protein thường mở rộng trong bệnh tật để cho phép nhu cầu cao hơn và biến đổi địa phương."
          >
            Nhu cầu protein ước tính – cuối thấp hơn (g/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 70"
            value={state.proteinLower}
            onChange={(e) => update("proteinLower", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: 1.0 g/kg/ngày cho một người trưởng thành 70&nbsp;kg sẽ khoảng 70 g/ngày.
          </p>
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối cao hơn phản ánh cung cấp protein rộng rãi hơn trong một số hướng dẫn, đặc biệt trong bệnh dị hóa."
          >
            Nhu cầu protein ước tính – cuối cao hơn (g/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 105"
            value={state.proteinUpper}
            onChange={(e) => update("proteinUpper", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: 1.5 g/kg/ngày cho cùng một người trưởng thành cho khoảng 105 g/ngày.
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
        4. Nhập lượng ăn vào gần đúng trong một khoảng thời gian gần đây
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Sử dụng thông tin tốt nhất có sẵn (ví dụ: lượng ăn vào qua đường miệng đã ghi chép,
        hồ sơ dinh dưỡng qua ống thông/tĩnh mạch, hoặc nhớ lại 24 giờ). Mục tiêu là
        hiểu khoảng cách giữa nhu cầu ước tính và lượng ăn vào thực tế, không phải để
        tạo chỉ định.
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
            title="Tại sao quan trọng: so sánh lượng ăn vào năng lượng hàng ngày với phạm vi nhu cầu ước tính làm nổi bật việc cung cấp dưới hoặc quá mức."
          >
            Lượng ăn vào năng lượng hàng ngày gần đúng (kcal/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 1200"
            value={state.energyIntake}
            onChange={(e) => update("energyIntake", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: cộng năng lượng từ lượng ăn vào qua đường miệng và bất kỳ hỗ trợ dinh dưỡng nào,
            sau đó chia cho số ngày quan sát.
          </p>
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: lượng ăn vào protein thường thấp hơn lượng ăn vào năng lượng như một phần trăm của nhu cầu ước tính, đặc biệt với bữa ăn nhỏ."
          >
            Lượng ăn vào protein hàng ngày gần đúng (g/ngày)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 45"
            value={state.proteinIntake}
            onChange={(e) => update("proteinIntake", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: sử dụng hồ sơ thực phẩm hoặc tài liệu hỗ trợ dinh dưỡng để
            ước tính tổng gram protein mỗi ngày.
          </p>
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: lượng ăn vào trong một ngày duy nhất có thể gây hiểu lầm; các bác sĩ lâm sàng thường xem xét các mẫu trong vài ngày."
          >
            Số ngày quan sát
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={1}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm sm:max-w-xs"
            placeholder="ví dụ: 3"
            value={state.daysObserved}
            onChange={(e) => update("daysObserved", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: nếu bạn có dữ liệu lượng ăn vào trong 3 ngày, nhập 3 để nhấn mạnh
            xu hướng thay vì một ngày duy nhất.
          </p>
        </div>

        {/* Percentage of meals consumed (optional helper) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: nhiều ghi chép khoa mô tả lượng ăn vào như một phần trăm thô của bữa ăn đã ăn, điều này có thể giúp giải thích tại sao lượng ăn vào được tính toán trông thấp."
          >
            Phần trăm bữa ăn tiêu thụ gần đúng (tùy chọn)
          </label>
          <input
            type="number"
            inputMode="numeric"
            min={0}
            max={100}
            className="w-full rounded-md border border-neutral-300 px-2 py-1 text-sm"
            placeholder="ví dụ: 50"
            value={state.mealsPercent}
            onChange={(e) => update("mealsPercent", e.target.value)}
          />
          <p className="text-xs text-neutral-600">
            Ví dụ: &quot;khoảng một nửa bữa ăn đã ăn&quot; có thể được nhập như
            khoảng 50%.
          </p>
        </div>

        {/* Route label (oral / mixed / unspecified, educational only) */}
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: mẫu lượng ăn vào thường khác nhau khi dinh dưỡng chủ yếu qua đường miệng, chủ yếu nuôi ăn qua ống, hoặc hỗn hợp, nhưng công cụ này không khuyến nghị đường dùng."
          >
            Đường dinh dưỡng chính (nhãn giáo dục, tùy chọn)
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
            <option value="">Chọn (ví dụ: qua đường miệng)</option>
            <option value="oral">Chủ yếu lượng ăn vào qua đường miệng</option>
            <option value="mixed">Hỗn hợp qua đường miệng và hỗ trợ dinh dưỡng</option>
            <option value="unspecified">Không xác định / không được ghi chép</option>
          </select>
          <p className="text-xs text-neutral-600">
            Ví dụ: chọn &quot;Hỗn hợp&quot; nếu cả thực phẩm và hỗ trợ dinh dưỡng
            đóng góp đáng kể vào lượng ăn vào.
          </p>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            So sánh nhu cầu và lượng ăn vào (giáo dục)
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
          5. Khoảng cách giữa nhu cầu và lượng ăn vào
        </h2>
        <p>
          Sau khi bạn nhập một phạm vi nhu cầu giáo dục và một lượng ăn vào gần đúng,
          phần này sẽ cho thấy cách chúng so sánh và cung cấp các điểm giảng dạy
          về cách các bác sĩ lâm sàng có thể giải thích các mẫu tương tự.
        </p>
      </section>
    );
  }

  const energyCoverageText =
    result.energyCoveragePercent != null
      ? `${result.energyCoveragePercent}% của điểm giữa phạm vi nhu cầu`
      : "dữ liệu không đủ để so sánh";

  const proteinCoverageText =
    result.proteinCoveragePercent != null
      ? `${result.proteinCoveragePercent}% của điểm giữa phạm vi nhu cầu`
      : "dữ liệu không đủ để so sánh";

  const formatGap = (gap: number | null, unit: "kcal" | "g") => {
    if (gap == null || !Number.isFinite(gap)) return "khoảng cách không thể được mô tả với dữ liệu hiện tại";
    const rounded = Math.round(Math.abs(gap));
    if (rounded === 0) return "rất gần với điểm giữa phạm vi nhu cầu";
    if (gap < 0) {
      return `khoảng ${rounded} ${unit}/ngày dưới điểm giữa phạm vi nhu cầu`;
    }
    return `khoảng ${rounded} ${unit}/ngày trên điểm giữa phạm vi nhu cầu`;
  };

  const energyGapText = formatGap(result.energyGapKcalPerDay, "kcal");
  const proteinGapText = formatGap(result.proteinGapGramsPerDay, "g");

  const adequacyLabel = (category: typeof result.energyCategory) => {
    switch (category) {
      case "much_lower":
        return "thấp hơn đáng kể so với phạm vi giáo dục này (không đầy đủ đáng kể từ góc độ giảng dạy)";
      case "somewhat_lower":
        return "thấp hơn một chút so với phạm vi giáo dục này (đầy đủ một phần)";
      case "approximate":
        return "rộng rãi trong phạm vi giáo dục này (đầy đủ trong nhiều ví dụ giảng dạy)";
      case "higher":
        return "trên phạm vi giáo dục này; trong thực hành điều này có thể hoặc không phù hợp";
      default:
        return "không thể được phân loại với thông tin hiện tại";
    }
  };

  const energyBandText =
    result.energyMidpoint != null
      ? `Điểm giữa phạm vi nhu cầu năng lượng ≈ ${Math.round(
          result.energyMidpoint
        )} kcal/ngày`
      : "Phạm vi nhu cầu năng lượng không được cung cấp";

  const proteinBandText =
    result.proteinMidpoint != null
      ? `Điểm giữa phạm vi nhu cầu protein ≈ ${Math.round(
          result.proteinMidpoint
        )} g/ngày`
      : "Phạm vi nhu cầu protein không được cung cấp";

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
        5. Khoảng cách giữa nhu cầu và lượng ăn vào (chế độ xem giáo dục)
      </h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs font-semibold text-neutral-700">
            So sánh năng lượng
          </p>
          <p className="text-xs text-neutral-700">
            {energyBandText}. Lượng ăn vào ước tính là{" "}
            <strong>{energyCoverageText}</strong> và{" "}
            <strong>{energyGapText}</strong> (đầy đủ năng lượng là{" "}
            {adequacyLabel(result.energyCategory)}).
          </p>
          <div className="mt-1 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className={`h-2 rounded-full ${energyBarClass}`} />
            </div>
            <p className="text-[11px] text-neutral-500">
              Thanh này cho thấy một cách định tính cách lượng ăn vào so sánh với điểm giữa
              của phạm vi nhu cầu giáo dục (không theo tỷ lệ).
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-semibold text-neutral-700">
            So sánh protein
          </p>
          <p className="text-xs text-neutral-700">
            {proteinBandText}. Lượng ăn vào ước tính là{" "}
            <strong>{proteinCoverageText}</strong> và{" "}
            <strong>{proteinGapText}</strong> (đầy đủ protein là{" "}
            {adequacyLabel(result.proteinCategory)}).
          </p>
          <div className="mt-1 space-y-1">
            <div className="h-2 w-full rounded-full bg-neutral-100">
              <div className={`h-2 rounded-full ${proteinBarClass}`} />
            </div>
            <p className="text-[11px] text-neutral-500">
              Dải này làm cho khoảng cách protein hiển thị mà không gợi ý một
              mục tiêu cụ thể.
            </p>
          </div>
        </div>
      </div>

      {/* Interpretation & learning points from the comparison helper */}
      <section className="space-y-1 border-t border-dashed border-neutral-200 pt-2">
        <p className="text-xs font-semibold text-neutral-700">
          Giải thích &amp; điểm học tập
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
          <p className="font-semibold">Giới hạn và lưu ý</p>
          {result.missingFields.length > 0 && (
            <p>
              Một số thông tin bị thiếu hoặc gần đúng:{" "}
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

