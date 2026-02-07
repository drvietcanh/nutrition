import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ToolStepIndicator } from "../components/ToolStepIndicator";
import { ToolNavigation } from "../components/ToolNavigation";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Đánh giá Nguy cơ Hội chứng Tái cho Ăn",
  description:
    "Đánh giá nguy cơ hội chứng tái cho ăn dựa trên các yếu tố nguy cơ lâm sàng. Công cụ giáo dục để hiểu tầm quan trọng của đánh giá nguy cơ trước khi bắt đầu dinh dưỡng.",
  keywords: [
    "hội chứng tái cho ăn",
    "refeeding syndrome",
    "đánh giá nguy cơ",
    "dinh dưỡng lâm sàng",
    "điện giải",
    "phosphorus",
  ],
  openGraph: {
    title: "Đánh giá Nguy cơ Hội chứng Tái cho Ăn – Công cụ Giảng dạy",
    description:
      "Đánh giá nguy cơ hội chứng tái cho ăn dựa trên các yếu tố nguy cơ lâm sàng. Công cụ giáo dục để hiểu tầm quan trọng của đánh giá nguy cơ trước khi bắt đầu dinh dưỡng.",
    url: "https://clinical-nutrition.edu.vn/tools/refeeding-syndrome-risk",
  },
};

const InteractiveSection = dynamic(
  () =>
    import("./InteractiveSection").then((mod) => ({
      default: mod.InteractiveSection,
    })),
  {
    loading: () => (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" text="Đang tải công cụ..." />
      </div>
    ),
  }
);

export default function RefeedingSyndromeRiskPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <ToolStepIndicator currentStep={1} />

      {/* 1. Title + brief explanation */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Đánh giá Nguy cơ Hội chứng Tái cho Ăn – Công cụ Giảng dạy
          </h1>
        </div>
        <p className="text-body-lg">
          Trang này minh họa cách đánh giá nguy cơ hội chứng tái cho ăn dựa trên các yếu tố nguy cơ
          lâm sàng. Đánh giá này là <strong>giáo dục, không phải chẩn đoán</strong>.
        </p>
      </header>

      {/* 2. What is refeeding syndrome? */}
      <section
        aria-labelledby="what-is-heading"
        className="space-y-4 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="what-is-heading" className="heading-3">
          2. Hội chứng Tái cho Ăn là gì?
        </h2>
        <p className="text-body-sm">
          Hội chứng tái cho ăn là một biến chứng nghiêm trọng có thể xảy ra khi bắt đầu dinh dưỡng
          sau một thời gian nhịn ăn hoặc giảm ăn đáng kể. Nó liên quan đến sự dịch chuyển điện giải
          (đặc biệt là phosphorus, magnesium, potassium) khi cơ thể chuyển từ trạng thái catabolic
          sang anabolic.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            <strong>Yếu tố nguy cơ chính:</strong> BMI thấp, giảm cân đáng kể, nhịn ăn kéo dài,
            giảm lượng ăn nghiêm trọng, nghiện rượu, hóa trị.
          </li>
          <li>
            <strong>Dấu hiệu:</strong> Giảm phosphorus, magnesium, potassium; phù; suy tim;
            rối loạn nhịp tim; yếu cơ; co giật.
          </li>
          <li>
            <strong>Phòng ngừa:</strong> Đánh giá nguy cơ trước khi bắt đầu dinh dưỡng, bổ sung
            điện giải và vi chất, bắt đầu với tốc độ thấp và tăng dần.
          </li>
        </ul>
      </section>

      {/* 3. Interactive calculator */}
      <Suspense
        fallback={
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" text="Đang tải công cụ..." />
          </div>
        }
      >
        <InteractiveSection />
      </Suspense>

      {/* 4. Interpretation & learning points */}
      <section aria-labelledby="learning-heading" className="space-y-4">
        <h2 id="learning-heading" className="heading-3">
          4. Diễn giải & điểm học tập
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            Đánh giá nguy cơ này là giáo dục và cần được kết hợp với đánh giá lâm sàng toàn diện,
            bao gồm xét nghiệm điện giải và vi chất.
          </li>
          <li>
            Nguy cơ cao không có nghĩa là không thể bắt đầu dinh dưỡng, mà có nghĩa là cần
            chuẩn bị và theo dõi chặt chẽ hơn.
          </li>
          <li>
            Trong thực hành, các bác sĩ lâm sàng sẽ điều chỉnh tốc độ và loại dinh dưỡng dựa trên
            đánh giá nguy cơ, xét nghiệm, và đáp ứng của bệnh nhân.
          </li>
          <li>
            Hướng dẫn địa phương có thể khác nhau về cách đánh giá và quản lý nguy cơ hội chứng
            tái cho ăn.
          </li>
        </ul>
      </section>

      {/* 5. Common clinical pitfalls */}
      <section
        aria-labelledby="pitfalls-heading"
        className="space-y-4 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="pitfalls-heading" className="heading-3">
          5. Các cạm bẫy lâm sàng phổ biến
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            Không đánh giá nguy cơ trước khi bắt đầu dinh dưỡng ở những người có{" "}
            <strong>yếu tố nguy cơ</strong>, có thể dẫn đến hội chứng tái cho ăn.
          </li>
          <li>
            Bắt đầu dinh dưỡng với tốc độ quá cao ở những người có{" "}
            <strong>nguy cơ cao</strong>, không điều chỉnh dựa trên đánh giá nguy cơ.
          </li>
          <li>
            Không theo dõi <strong>điện giải và vi chất</strong> trước và trong khi bắt đầu
            dinh dưỡng ở những người có nguy cơ.
          </li>
        </ul>
      </section>

      {/* 6. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          6. Nhắc nhở an toàn
        </h2>
        <p className="text-body-sm">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân,
          và không được sử dụng để ra quyết định lâm sàng hoặc quản lý hội chứng tái cho ăn.
        </p>
      </section>

      <ToolNavigation currentStep={1} />
    </main>
  );
}
