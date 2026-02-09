import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calendar, Heart } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Lập Thực đơn theo Bệnh",
  description:
    "Tự động gợi ý thực đơn phù hợp với bệnh lý. Chọn bệnh, nhập nhu cầu, và nhận thực đơn gợi ý cho cả ngày.",
  keywords: [
    "lập thực đơn",
    "thực đơn",
    "bệnh lý",
    "đái tháo đường",
    "gút",
    "thận",
    "tăng huyết áp",
    "tim mạch",
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

export default function DiseaseMealPlannerPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Lập Thực đơn theo Bệnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Lập Thực đơn theo Bệnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tự động gợi ý thực đơn phù hợp với bệnh lý của bạn. 
          Chọn bệnh, nhập nhu cầu dinh dưỡng, và nhận thực đơn gợi ý cho cả ngày.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục và gợi ý. 
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
