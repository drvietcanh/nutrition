import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ToolStepIndicator } from "../components/ToolStepIndicator";
import { ToolNavigation } from "../components/ToolNavigation";
import { Droplet } from "lucide-react";

export const metadata: Metadata = {
  title: "Nhu cầu dịch",
  description:
    "Tính nhu cầu dịch hàng ngày sử dụng các quy tắc giáo dục (Holliday-Segar, 30-35ml/kg) và điều chỉnh dựa trên tình trạng lâm sàng. Công cụ giáo dục để hiểu cách cân bằng dịch được quản lý trong thực hành lâm sàng.",
  keywords: [
    "nhu cầu dịch",
    "fluid requirements",
    "Holliday-Segar",
    "cân bằng dịch",
    "fluid balance",
    "dinh dưỡng lâm sàng",
  ],
  openGraph: {
    title: "Nhu cầu dịch – Công cụ giảng dạy",
    description:
      "Tính nhu cầu dịch hàng ngày sử dụng các quy tắc giáo dục (Holliday-Segar, 30-35ml/kg) và điều chỉnh dựa trên tình trạng lâm sàng. Công cụ giáo dục để hiểu cách cân bằng dịch được quản lý trong thực hành lâm sàng.",
    url: "https://clinical-nutrition.edu.vn/tools/fluid-requirements",
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

export default function FluidRequirementsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <ToolStepIndicator currentStep={1} />

      {/* 1. Title + brief explanation */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplet className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Nhu cầu dịch – Công cụ giảng dạy
          </h1>
        </div>
        <p className="text-body-lg">
          Trang này minh họa cách tính nhu cầu dịch hàng ngày sử dụng các quy tắc giáo dục
          và điều chỉnh dựa trên tình trạng lâm sàng. Các con số hiển thị là{" "}
          <strong>ước tính giáo dục, không phải kê đơn</strong>.
        </p>
      </header>

      {/* 2. Why calculate fluid requirements? */}
      <section
        aria-labelledby="why-calculate-heading"
        className="space-y-4 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="why-calculate-heading" className="heading-3">
          2. Vì sao tính nhu cầu dịch?
        </h2>
        <p className="text-body-sm">
          Cân bằng dịch là một phần quan trọng của chăm sóc lâm sàng. Nhu cầu dịch thay đổi
          dựa trên tuổi, cân nặng, tình trạng bệnh, và môi trường.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            <strong>Nhu cầu cơ bản</strong> được tính bằng phương pháp Holliday-Segar cho trẻ em
            hoặc 30-35 ml/kg cho người lớn.
          </li>
          <li>
            <strong>Điều chỉnh</strong> có thể cần thiết cho sốt, tiêu chảy, nôn, hoặc các tình trạng
            yêu cầu hạn chế dịch (suy tim, suy thận, suy gan).
          </li>
          <li>
            Trong thực hành, các bác sĩ lâm sàng sẽ theo dõi cân bằng dịch (input/output),
            dấu hiệu sinh tồn, và đánh giá lâm sàng để điều chỉnh.
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
            Nhu cầu dịch là ước tính và cần được điều chỉnh dựa trên đánh giá lâm sàng,
            bao gồm lượng nước tiểu, dấu hiệu quá tải dịch, và đáp ứng của bệnh nhân.
          </li>
          <li>
            Các tình trạng như suy tim, suy thận, và suy gan thường yêu cầu hạn chế dịch,
            nhưng mức độ hạn chế phụ thuộc vào mức độ bệnh và đáp ứng của bệnh nhân.
          </li>
          <li>
            Trong thực hành, các bác sĩ lâm sàng sẽ theo dõi cân bằng dịch (input/output)
            và điều chỉnh dựa trên đáp ứng lâm sàng thay vì dựa vào một phép tính duy nhất.
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
            Không điều chỉnh nhu cầu dịch cho các tình trạng yêu cầu hạn chế dịch
            (suy tim, suy thận, suy gan), có thể dẫn đến quá tải dịch.
          </li>
          <li>
            Không xem xét <strong>lượng nước tiểu và cân bằng dịch</strong> khi điều chỉnh
            nhu cầu dịch, chỉ dựa vào công thức.
          </li>
          <li>
            Coi một phép tính như một kê đơn thay vì{" "}
            <strong>điểm khởi đầu cho một kế hoạch được theo dõi</strong>.
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
          và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn dịch truyền.
        </p>
      </section>

      <ToolNavigation currentStep={1} />
    </main>
  );
}
