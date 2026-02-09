import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ToolStepIndicator } from "../components/ToolStepIndicator";
import { ToolNavigation } from "../components/ToolNavigation";
import { Pill } from "lucide-react";

export const metadata: Metadata = {
  title: "Đánh giá Vi chất",
  description:
    "Ước tính nhu cầu vi chất (vitamin và khoáng chất) dựa trên tuổi, giới tính, và tình trạng lâm sàng. Công cụ giáo dục để hiểu tầm quan trọng của vi chất trong dinh dưỡng lâm sàng.",
  keywords: [
    "vi chất",
    "micronutrients",
    "vitamin",
    "khoáng chất",
    "RDA",
    "DRI",
    "dinh dưỡng lâm sàng",
  ],
  openGraph: {
    title: "Đánh giá Vi chất – Công cụ giảng dạy",
    description:
      "Ước tính nhu cầu vi chất (vitamin và khoáng chất) dựa trên tuổi, giới tính, và tình trạng lâm sàng. Công cụ giáo dục để hiểu tầm quan trọng của vi chất trong dinh dưỡng lâm sàng.",
    url: "https://clinical-nutrition.edu.vn/tools/micronutrient-assessment",
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

export default function MicronutrientAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <ToolStepIndicator currentStep={1} />

      {/* 1. Title + brief explanation */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Pill className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Đánh giá Vi chất – Công cụ giảng dạy
          </h1>
        </div>
        <p className="text-body-lg">
          Trang này minh họa cách ước tính nhu cầu vi chất (vitamin và khoáng chất) dựa trên
          tuổi, giới tính, và tình trạng lâm sàng. Các giá trị hiển thị là{" "}
          <strong>ước tính giáo dục, không phải kê đơn</strong>.
        </p>
      </header>

      {/* 2. Why assess micronutrients? */}
      <section
        aria-labelledby="why-assess-heading"
        className="space-y-4 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2 id="why-assess-heading" className="heading-3">
          2. Vì sao đánh giá vi chất?
        </h2>
        <p className="text-body-sm">
          Vi chất (vitamin và khoáng chất) đóng vai trò quan trọng trong nhiều chức năng cơ thể,
          bao gồm chuyển hóa, miễn dịch, và sản xuất tế bào máu. Thiếu vi chất có thể xảy ra trong
          suy dinh dưỡng, bệnh tiêu hóa, hoặc một số bệnh lý mạn tính.
        </p>
        <ul className="list-disc space-y-2 pl-5 text-body-sm">
          <li>
            <strong>Vitamin D, B12, Folate:</strong> Quan trọng cho sức khỏe xương, thần kinh,
            và sản xuất tế bào máu.
          </li>
          <li>
            <strong>Sắt, Kẽm, Magie:</strong> Quan trọng cho vận chuyển oxy, miễn dịch,
            và chuyển hóa năng lượng.
          </li>
          <li>
            Nhu cầu vi chất thay đổi dựa trên tuổi, giới tính, tình trạng sinh lý (thai kỳ, cho con bú),
            và tình trạng bệnh.
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
            Các giá trị này dựa trên RDA (Recommended dietary Allowance) và DRI (Dietary reference intake)
            cho người khỏe mạnh. Nhu cầu thực tế có thể thay đổi dựa trên tình trạng bệnh và các yếu tố cá nhân.
          </li>
          <li>
            Thiếu vi chất nên được đánh giá thông qua xét nghiệm và đánh giá lâm sàng,
            không chỉ dựa vào nhu cầu ước tính.
          </li>
          <li>
            Bổ sung vi chất nên được điều chỉnh dựa trên đánh giá lâm sàng, xét nghiệm,
            và đáp ứng của bệnh nhân, không chỉ dựa vào nhu cầu ước tính.
          </li>
          <li>
            Một số vi chất có thể độc hại nếu dùng quá liều (ví dụ, sắt, vitamin D),
            vì vậy cần thận trọng khi bổ sung.
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
            Bổ sung vi chất mà không đánh giá tình trạng thực tế thông qua{" "}
            <strong>xét nghiệm và đánh giá lâm sàng</strong>, có thể dẫn đến bổ sung không cần thiết
            hoặc bỏ sót thiếu hụt.
          </li>
          <li>
            Không điều chỉnh nhu cầu vi chất cho các tình trạng bệnh đặc biệt
            (ví dụ, bệnh thận, bệnh gan), có thể dẫn đến bổ sung không phù hợp.
          </li>
          <li>
            Bổ sung quá liều một số vi chất (ví dụ, sắt, vitamin D) mà không theo dõi,
            có thể dẫn đến độc tính.
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
          và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn bổ sung vi chất.
        </p>
      </section>

      <ToolNavigation currentStep={1} />
    </main>
  );
}
