import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calendar, ClipboardCheck } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Đánh giá Thực đơn Một Ngày",
  description:
    "Đánh giá tổng thể thực đơn một ngày (sáng, trưa, tối, phụ) có phù hợp với bệnh lý không. Phân tích dinh dưỡng và đưa ra gợi ý cải thiện.",
  keywords: [
    "đánh giá thực đơn",
    "thực đơn một ngày",
    "dinh dưỡng",
    "bệnh lý",
    "phân tích",
  ],
};

const InteractiveSection = dynamic(
  () => import("./InteractiveSection").then((mod) => ({ default: mod.InteractiveSection })),
  {
    loading: () => (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" text="Đang tải công cụ..." />
      </div>
    ),
  }
);

export default function DailyMenuAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Đánh giá Thực đơn Một Ngày" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Đánh giá Thực đơn Một Ngày</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đánh giá tổng thể thực đơn một ngày (sáng, trưa, tối, phụ) có phù hợp với bệnh lý không.
          Công cụ sẽ phân tích dinh dưỡng và đưa ra gợi ý cải thiện cho cả ngày.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
            Thực đơn thực tế cần được điều chỉnh dựa trên tình trạng cụ thể của bạn.
            Luôn tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn phù hợp.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" text="Đang tải..." />
          </div>
        }
      >
        <InteractiveSection />
      </Suspense>
    </main>
  );
}
