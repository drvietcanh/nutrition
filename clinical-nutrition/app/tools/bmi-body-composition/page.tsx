import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ToolStepIndicator } from "../components/ToolStepIndicator";
import { ToolNavigation } from "../components/ToolNavigation";
import { Ruler } from "lucide-react";

export const metadata: Metadata = {
  title: "BMI & Thành phần cơ thể",
  description:
    "Tính BMI, Cân nặng Lý tưởng (IBW), Cân nặng Điều chỉnh (ABW), và Diện tích Bề mặt cơ thể (BSA). Công cụ giáo dục để hiểu cách các chỉ số này được sử dụng trong đánh giá dinh dưỡng lâm sàng.",
  keywords: [
    "BMI",
    "body mass index",
    "IBW",
    "ideal body weight",
    "ABW",
    "adjusted body weight",
    "BSA",
    "body surface area",
    "dinh dưỡng lâm sàng",
  ],
  openGraph: {
    title: "BMI & Thành phần cơ thể – Công cụ giảng dạy",
    description:
      "Tính BMI, Cân nặng Lý tưởng (IBW), Cân nặng Điều chỉnh (ABW), và Diện tích Bề mặt cơ thể (BSA). Công cụ giáo dục để hiểu cách các chỉ số này được sử dụng trong đánh giá dinh dưỡng lâm sàng.",
    url: "https://clinical-nutrition.edu.vn/tools/bmi-body-composition",
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

export default function BMIBodyCompositionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <ToolStepIndicator currentStep={1} />

      {/* 1. Title + brief explanation */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Ruler className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            BMI & Thành phần cơ thể – Công cụ giảng dạy
          </h1>
        </div>
        <p className="text-body-lg">
          Trang này minh họa cách tính BMI (Body mass index), Cân nặng Lý tưởng (IBW),
          Cân nặng Điều chỉnh (ABW), và Diện tích Bề mặt cơ thể (BSA). Các con số hiển thị là{" "}
          <strong>khoảng giáo dục, không phải chẩn đoán</strong>.
        </p>
      </header>

      {/* 2. Why calculate BMI and body composition? */}
      <section
        aria-labelledby="why-calculate-heading"
        className="space-y-4 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="why-calculate-heading" className="heading-3">
          2. Vì sao tính BMI và thành phần cơ thể?
        </h2>
        <p className="text-body-sm">
          BMI và các chỉ số thành phần cơ thể là công cụ sàng lọc hữu ích trong đánh giá dinh dưỡng lâm sàng.
          Chúng giúp đặt cân nặng vào bối cảnh chiều cao và cung cấp điểm khởi đầu cho các tính toán dinh dưỡng.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            <strong>BMI</strong> giúp phân loại tình trạng dinh dưỡng và xác định nguy cơ liên quan đến cân nặng.
          </li>
          <li>
            <strong>Cân nặng Lý tưởng (IBW)</strong> là ước tính về cân nặng "khỏe mạnh" dựa trên chiều cao và giới tính,
            thường được sử dụng trong một số tính toán lâm sàng.
          </li>
          <li>
            <strong>Cân nặng Điều chỉnh (ABW)</strong> được sử dụng trong béo phì để điều chỉnh các tính toán dinh dưỡng,
            vì cân nặng thực tế có thể dẫn đến ước tính quá cao.
          </li>
          <li>
            <strong>Diện tích Bề mặt cơ thể (BSA)</strong> được sử dụng trong một số tính toán dược lý và lâm sàng.
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
            BMI là một công cụ sàng lọc, không phải là thước đo hoàn chỉnh. nó không phân biệt giữa khối mỡ và khối nạc,
            và có thể bị ảnh hưởng bởi phù, cổ trướng, hoặc khối lượng cơ cao.
          </li>
          <li>
            Các công thức IBW khác nhau (Devine, Hamwi, Robinson) có thể cho kết quả khác nhau.
            Trong thực hành, các bác sĩ lâm sàng thường sử dụng công thức phù hợp với hướng dẫn địa phương.
          </li>
          <li>
            Trong béo phì, việc sử dụng ABW hoặc IBW thay vì cân nặng thực tế cho các tính toán dinh dưỡng
            là một chủ đề thảo luận trong lâm sàng và có thể khác nhau tùy theo hướng dẫn.
          </li>
          <li>
            Tất cả các chỉ số này nên được diễn giải trong toàn bộ bối cảnh lâm sàng, bao gồm tiền sử,
            khám lâm sàng, và các chỉ số dinh dưỡng khác.
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
            Dựa vào BMI một mình mà không xem xét <strong>phù, cổ trướng, hoặc dịch chuyển</strong>,
            có thể che giấu tình trạng dinh dưỡng thực tế.
          </li>
          <li>
            sử dụng cân nặng thực tế cho tất cả tính toán trong <strong>béo phì nặng</strong>
            mà không xem xét ABW hoặc IBW, có thể dẫn đến ước tính nhu cầu quá cao.
          </li>
          <li>
            Coi IBW như một "mục tiêu" cứng nhắc thay vì một <strong>ước tính giáo dục</strong>
            cần được điều chỉnh dựa trên bối cảnh lâm sàng.
          </li>
        </ul>
      </section>

      {/* 6. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          6. Nhắc nhở an toàn
        </h2>
        <p className="text-body-sm">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân,
          và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
        </p>
      </section>

      <ToolNavigation currentStep={1} />
    </main>
  );
}
