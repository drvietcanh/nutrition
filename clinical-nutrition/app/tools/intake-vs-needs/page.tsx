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
          Lượng Ăn vs Nhu Cầu Ước Tính – Công cụ Giảng dạy
        </h1>
        <p className="text-sm text-neutral-700 sm:text-base">
          Trang này so sánh một <strong>ước tính giáo dục</strong> về nhu cầu năng lượng
          và protein với những gì thực sự được cung cấp trong một khoảng thời gian gần đây.
          Nó được thiết kế để làm cho các khoảng cách hiển thị và hỗ trợ lý luận,
          không phải để chỉ định can thiệp.
        </p>
      </header>

      {/* 2. Why intake assessment matters */}
      <section
        aria-labelledby="why-heading"
        className="space-y-2 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="why-heading" className="text-base font-semibold sm:text-lg">
          2. Tại sao đánh giá lượng ăn vào quan trọng
        </h2>
        <p className="text-sm text-neutral-700 sm:text-base">
          Trong nhiều môi trường lâm sàng, bệnh nhân nhận được ít dinh dưỡng hơn
          so với các ước tính đơn giản gợi ý. Hiểu khoảng cách này giúp giải thích thay đổi
          cân nặng, mệt mỏi, và mẫu phục hồi, nhưng nó vẫn cần được
          giải thích trong toàn bộ bối cảnh lâm sàng.
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
          6. Giải thích &amp; điểm học tập
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Lượng ăn vào dưới phạm vi nhu cầu giáo dục là một{" "}
            <strong>gợi ý để hỏi tại sao</strong>, không phải bằng chứng về tác hại tự nó.
          </li>
          <li>
            Sự giảm ngắn hạn có thể chấp nhận được khi có lý do rõ ràng và
            phục hồi đang diễn ra; khoảng cách dai dẳng trong vài ngày xứng đáng được chú ý
            nhiều hơn.
          </li>
          <li>
            Quyết định trong thế giới thực dựa vào các bác sĩ lâm sàng kết hợp các ước tính này
            với triệu chứng, chức năng, tình trạng cơ quan, và mục tiêu bệnh nhân.
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
          7. Mẫu lượng ăn vs nhu cầu phổ biến
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Lượng ăn vào &lt;50% nhu cầu trong vài ngày thường khiến các bác sĩ lâm sàng
            kiểm tra lại dữ liệu, khám phá lý do lượng ăn vào thấp, và xem xét
            quy trình địa phương.
          </li>
          <li>
            Lượng ăn vào protein thường thấp hơn lượng ăn vào năng lượng như một
            phần trăm của nhu cầu, đặc biệt khi bữa ăn nhỏ hoặc
            giàu carbohydrate.
          </li>
          <li>
            Năng lượng có thể xuất hiện đầy đủ trong khi protein tương đối thấp,
            làm nổi bật tầm quan trọng của việc xem xét{" "}
            <strong>cả năng lượng và protein</strong>.
          </li>
          <li>
            Biến động hàng ngày là phổ biến; xu hướng trong vài ngày
            thường cung cấp thông tin hơn bất kỳ giá trị đơn lẻ nào.
          </li>
        </ul>
      </section>

      {/* 8. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-2">
        <h2
          id="safety-heading"
          className="text-base font-semibold sm:text-lg"
        >
          8. Nhắc nhở an toàn
        </h2>
        <p className="text-xs text-neutral-600 sm:text-sm">
          Công cụ này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ
          bác sĩ–bệnh nhân, và không được sử dụng để chỉ định
          chế độ ăn, thức ăn, hoặc các can thiệp khác.
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
        3. Nhu cầu hàng ngày ước tính (phạm vi giáo dục)
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Nhập một phạm vi năng lượng và protein từ hướng dẫn hoặc từ công cụ
        năng lượng &amp; protein. Bước này chỉ dành cho{" "}
        <strong>tính liên tục học tập</strong>; nó không liên kết công cụ hoặc
        chỉ định liều lượng.
      </p>
      <form className="grid gap-4 rounded-md border border-neutral-200 bg-white p-4 sm:grid-cols-2 sm:gap-6">
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối thấp hơn thường phản ánh điểm khởi đầu thận trọng trong nhiều ví dụ."
          >
            Nhu cầu năng lượng – cuối thấp hơn (kcal/ngày)
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
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối cao hơn định nghĩa một phạm vi rộng rãi hơn có thể hoặc không phù hợp trong thực hành."
          >
            Nhu cầu năng lượng – cuối cao hơn (kcal/ngày)
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: phạm vi protein giúp khung chất lượng lượng ăn vào, không chỉ tổng calo."
          >
            Nhu cầu protein – cuối thấp hơn (g/ngày)
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
        </div>
        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: cuối cao hơn phản ánh cung cấp protein rộng rãi hơn trong một số ví dụ giảng dạy."
          >
            Nhu cầu protein – cuối cao hơn (g/ngày)
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
        4. Lượng ăn vào hàng ngày gần đúng trong một khoảng thời gian gần đây
      </h2>
      <p className="text-sm text-neutral-700 sm:text-base">
        Sử dụng thông tin tốt nhất có sẵn (ví dụ: lượng ăn vào qua đường miệng đã ghi chép,
        hồ sơ hỗ trợ dinh dưỡng, hoặc nhớ lại 24 giờ). Các giá trị này là
        ước tính giáo dục, không phải tài liệu pháp lý.
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
            title="Tại sao quan trọng: so sánh lượng ăn vào năng lượng hàng ngày với phạm vi ước tính làm cho việc cung cấp dưới hoặc quá mức hiển thị."
          >
            Lượng ăn vào năng lượng (kcal/ngày)
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: lượng ăn vào protein thường tụt lại phía sau lượng ăn vào năng lượng như một phần trăm của nhu cầu ước tính."
          >
            Lượng ăn vào protein (g/ngày)
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
        </div>

        <div className="space-y-1 sm:col-span-2">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: một ngày duy nhất có thể không phản ánh mẫu điển hình; vài ngày cung cấp thêm bối cảnh."
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: ghi chép thô 'phần trăm bữa ăn đã ăn' có thể giúp giải thích tại sao lượng ăn vào được tính toán trông thấp."
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
        </div>

        <div className="space-y-1">
          <label
            className="block text-xs font-medium text-neutral-800 sm:text-sm"
            title="Tại sao quan trọng: mẫu khác nhau khi lượng ăn vào chủ yếu qua đường miệng, chủ yếu nuôi ăn qua ống, hoặc hỗn hợp; nhãn này chỉ mang tính mô tả."
          >
            Đường dinh dưỡng chính (tùy chọn, nhãn giáo dục)
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
            <option value="">Chọn (ví dụ: qua đường miệng)</option>
            <option value="oral">Chủ yếu lượng ăn vào qua đường miệng</option>
            <option value="mixed">Hỗn hợp qua đường miệng và hỗ trợ dinh dưỡng</option>
            <option value="unspecified">Không xác định / không được ghi chép</option>
          </select>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            className="inline-flex items-center rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-neutral-800"
          >
            So sánh lượng ăn vào với nhu cầu (giáo dục)
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
          5. So sánh giữa lượng ăn vào và nhu cầu
        </h2>
        <p>
          Sau khi bạn nhập một phạm vi nhu cầu giáo dục và lượng ăn vào gần đúng, phần này
          sẽ cho thấy cách chúng so sánh và cung cấp các điểm giảng dạy trung lập
          về các mẫu phổ biến.
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
        5. So sánh giữa lượng ăn vào và nhu cầu (chế độ xem giáo dục)
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
      ? `${value}% của điểm giữa phạm vi nhu cầu`
      : "không thể mô tả với dữ liệu hiện tại";

  const formatGap = (gap: number | null, unit: "kcal" | "g") => {
    if (gap == null || !Number.isFinite(gap)) {
      return "khoảng cách không thể được mô tả với dữ liệu hiện tại";
    }
    const rounded = Math.round(Math.abs(gap));
    if (rounded === 0) return "rất gần với điểm giữa phạm vi nhu cầu";
    if (gap < 0) {
      return `khoảng ${rounded} ${unit}/ngày dưới điểm giữa phạm vi nhu cầu`;
    }
    return `khoảng ${rounded} ${unit}/ngày trên điểm giữa phạm vi nhu cầu`;
  };

  const adequacyLabel = (category: typeof energyCategory) => {
    switch (category) {
      case "much_lower":
        return "thấp hơn đáng kể so với phạm vi giáo dục này (không đầy đủ đáng kể từ góc độ giảng dạy)";
      case "somewhat_lower":
        return "thấp hơn một chút so với phạm vi giáo dục này (đầy đủ một phần)";
      case "approximate":
        return "rộng rãi trong phạm vi giáo dục này (thường được coi là đầy đủ trong các kịch bản giảng dạy)";
      case "higher":
        return "trên phạm vi giáo dục này; trong thực hành điều này có thể hoặc không phù hợp";
      default:
        return "không thể được phân loại với thông tin hiện tại";
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
          So sánh năng lượng
        </p>
        <p className="text-xs text-neutral-700">
          {energyMidpoint != null
            ? `Điểm giữa phạm vi nhu cầu ≈ ${Math.round(energyMidpoint)} kcal/ngày.`
            : "Phạm vi nhu cầu năng lượng không được cung cấp."}{" "}
          Lượng ăn vào ước tính là{" "}
          <strong>{formatCoverage(energyCoveragePercent)}</strong> và{" "}
          <strong>{formatGap(energyGapKcalPerDay, "kcal")}</strong> (đầy đủ
          năng lượng là {adequacyLabel(energyCategory)}).
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
          {proteinMidpoint != null
            ? `Điểm giữa phạm vi nhu cầu ≈ ${Math.round(proteinMidpoint)} g/ngày.`
            : "Phạm vi nhu cầu protein không được cung cấp."}{" "}
          Lượng ăn vào ước tính là{" "}
          <strong>{formatCoverage(proteinCoveragePercent)}</strong> và{" "}
          <strong>{formatGap(proteinGapGramsPerDay, "g")}</strong> (đầy đủ
          protein là {adequacyLabel(proteinCategory)}).
        </p>
        <div className="mt-1 space-y-1">
          <div className="h-2 w-full rounded-full bg-neutral-100">
            <div className={`h-2 rounded-full ${proteinBarClass}`} />
          </div>
          <p className="text-[11px] text-neutral-500">
            Dải này làm cho khoảng cách protein hiển thị mà không gợi ý
            mục tiêu hoặc hành động cụ thể.
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
        Giải thích &amp; điểm học tập (chỉ giáo dục)
      </p>
      <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700">
        {comparison.interpretation.map((line) => (
          <li key={line}>{line}</li>
        ))}
      </ul>
      {(comparison.missingFields.length > 0 ||
        comparison.warnings.length > 0) && (
        <div className="mt-2 space-y-1 rounded-md border border-amber-100 bg-amber-50 p-2 text-xs text-amber-900">
          <p className="font-semibold">Giới hạn và lưu ý</p>
          {comparison.missingFields.length > 0 && (
            <p>
              Một số thông tin bị thiếu hoặc gần đúng:{" "}
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

