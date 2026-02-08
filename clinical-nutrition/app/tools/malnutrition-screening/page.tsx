import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ToolStepIndicator } from "../components/ToolStepIndicator";
import { ToolNavigation } from "../components/ToolNavigation";
import { Activity, AlertCircle, CheckCircle } from "lucide-react";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Nguy cơ Suy Dinh dưỡng",
  description:
    "Khám phá cách các công cụ sàng lọc phổ biến (NRS-2002, PG-SGA) đánh giá nguy cơ suy dinh dưỡng sử dụng các đầu vào ví dụ đơn giản. Hiểu cách sụt cân, giảm lượng ăn, và bối cảnh bệnh ảnh hưởng đến đánh giá nguy cơ.",
  keywords: [
    "sàng lọc suy dinh dưỡng",
    "malnutrition screening",
    "NRS-2002",
    "PG-SGA",
    "đánh giá nguy cơ",
    "dinh dưỡng lâm sàng",
  ],
  openGraph: {
    title: "Nguy cơ Suy Dinh dưỡng – Công cụ Giảng dạy",
    description:
      "Khám phá cách các công cụ sàng lọc phổ biến (NRS-2002, PG-SGA) đánh giá nguy cơ suy dinh dưỡng sử dụng các đầu vào ví dụ đơn giản. Hiểu cách sụt cân, giảm lượng ăn, và bối cảnh bệnh ảnh hưởng đến đánh giá nguy cơ.",
    url: "https://clinical-nutrition.edu.vn/tools/malnutrition-screening",
  },
};

const InteractiveSection = dynamic(() => import("./InteractiveSection").then(mod => ({ default: mod.InteractiveSection })), {
  loading: () => (
    <div className="flex justify-center py-12">
      <LoadingSpinner size="lg" text="Đang tải công cụ..." />
    </div>
  ),
});

export default function MalnutritionScreeningPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <ToolStepIndicator currentStep={1} />
      
      {/* 1. Title + short intro */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Nguy cơ Suy Dinh dưỡng – Công cụ Giảng dạy
          </h1>
        </div>
        <p className="text-body-lg">
          Trang này giúp bạn khám phá cách các công cụ sàng lọc phổ biến đánh giá{" "}
          <strong>nguy cơ suy dinh dưỡng</strong> sử dụng các đầu vào ví dụ đơn giản, đã ẩn danh.
        </p>
      </header>

      {/* 2. What is malnutrition risk? */}
      <section aria-labelledby="what-is-risk-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
          <h2
            id="what-is-risk-heading"
            className="heading-3"
          >
            "Nguy cơ suy dinh dưỡng" là gì?
          </h2>
        </div>
        <p className="text-body-sm">
          Các công cụ sàng lọc như NRS-2002 và PG-SGA được thiết kế để đánh dấu{" "}
          <strong>những người có thể có nguy cơ dinh dưỡng cao hơn</strong> để
          có thể thực hiện đánh giá đầy đủ hơn. Sàng lọc dương tính không
          xác nhận chẩn đoán, và sàng lọc âm tính không đảm bảo rằng
          dinh dưỡng là đầy đủ.
        </p>
        <p className="text-body-sm">
          Công cụ giảng dạy này tập trung vào cách các công cụ sàng lọc này sử dụng thông tin như
          sụt cân gần đây, giảm lượng ăn, và bối cảnh bệnh để tăng hoặc
          giảm mức quan ngại. Nó không đưa ra quyết định lâm sàng hoặc khuyến nghị
          điều trị.
        </p>
      </section>

      {/* 2–5. Tool selector, input form, and interactive educational result */}
      <Suspense fallback={
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" text="Đang tải công cụ..." />
        </div>
      }>
      <InteractiveSection />
      </Suspense>

      {/* 6. Interpretation & learning points */}
      <section aria-labelledby="learning-heading" className="space-y-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-green-600" aria-hidden="true" />
          <h2
            id="learning-heading"
            className="heading-3"
          >
            Diễn giải & điểm học tập
          </h2>
        </div>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Các công cụ sàng lọc được thiết kế để{" "}
            <strong>nhanh và nhạy cảm</strong>, không hoàn hảo; chúng có xu hướng
            đánh dấu những người có thể cần được xem xét kỹ hơn.
          </li>
          <li>
            Mô hình "nguy cơ cao hơn" có nghĩa là{" "}
            <strong>"xem xét đánh giá dinh dưỡng đầy đủ"</strong>, không phải
            "suy dinh dưỡng đang hiện diện" hoặc "bắt đầu một điều trị cụ thể".
          </li>
          <li>
            Các bệnh viện và hướng dẫn khác nhau có thể sử dụng ngưỡng hơi khác nhau,
            vì vậy luôn diễn giải điểm số trong bối cảnh{" "}
            <strong>chính sách địa phương và phán đoán lâm sàng của bác sĩ có kinh nghiệm</strong>.
          </li>
        </ul>
      </section>

      {/* 7. When to use / When not to use – tool-specific wording */}
      <section aria-labelledby="when-to-use-heading" className="space-y-4">
        <h2
          id="when-to-use-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Khi nào sử dụng / Khi nào không sử dụng công cụ giảng dạy này
        </h2>
        <div className="grid gap-6 md:grid-cols-2 md:items-start">
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">
              Khi công cụ này hữu ích
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700 sm:text-sm">
              <li>
                Dạy sinh viên hoặc đồng nghiệp cách các công cụ sàng lọc suy dinh dưỡng
                phổ biến đánh giá nguy cơ.
              </li>
              <li>
                Khám phá cách thay đổi trong sụt cân, lượng ăn, hoặc stress bệnh
                có thể ảnh hưởng đến quan ngại về tình trạng dinh dưỡng.
              </li>
              <li>
                Chuẩn bị cho kỳ thi hoặc câu lạc bộ tạp chí liên quan đến công cụ
                sàng lọc dinh dưỡng.
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="text-sm font-semibold">
              Khi công cụ này KHÔNG phù hợp
            </h3>
            <ul className="list-disc space-y-1 pl-5 text-xs text-neutral-700 sm:text-sm">
              <li>
                Đưa ra quyết định lâm sàng cho một người bệnh cụ thể (ví dụ:
                nhập viện, đường cho ăn, kê đơn).
              </li>
              <li>
                thay thế đánh giá dinh dưỡng đầy đủ hoặc đánh giá đa ngành
                của nhóm.
              </li>
              <li>
                Xử lý cấp cứu hoặc tình huống cấp thời.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 8. Safety disclaimer – local reiteration */}
      <section aria-labelledby="safety-heading" className="space-y-3">
        <h2
          id="safety-heading"
          className="heading-4"
        >
          Nhắc nhở an toàn
        </h2>
        <p className="text-sm text-gray-600 sm:text-base leading-relaxed">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ
          bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng
          hoặc chăm sóc cấp cứu.
        </p>
      </section>

      <ToolNavigation currentStep={1} />
    </main>
  );
}
