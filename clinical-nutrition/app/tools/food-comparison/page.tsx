import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Scale, BarChart3 } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "So sánh Thực phẩm",
  description:
    "So sánh dinh dưỡng và phù hợp với bệnh lý của nhiều thực phẩm cùng lúc. Giúp lựa chọn thực phẩm tốt nhất cho bệnh của bạn.",
  keywords: [
    "so sánh thực phẩm",
    "dinh dưỡng",
    "bệnh lý",
    "lựa chọn thực phẩm",
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

export default function FoodComparisonPage() {
  return (
    <main className="mx-auto max-w-5xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "So sánh Thực phẩm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <BarChart3 className="w-8 h-8 text-indigo-600" aria-hidden="true" />
          <h1 className="heading-1">So sánh Thực phẩm</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          So sánh dinh dưỡng và phù hợp với bệnh lý của nhiều thực phẩm cùng lúc.
          Giúp bạn lựa chọn thực phẩm tốt nhất cho bệnh của mình.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
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
