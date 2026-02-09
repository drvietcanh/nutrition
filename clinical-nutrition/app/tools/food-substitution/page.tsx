import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { RefreshCw, Search } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tìm Thực phẩm Thay thế",
  description:
    "Tìm thực phẩm thay thế phù hợp hơn với bệnh lý của bạn. Công cụ gợi ý các lựa chọn tốt hơn dựa trên dinh dưỡng và đánh giá bệnh lý.",
  keywords: [
    "thực phẩm thay thế",
    "thay thế",
    "lựa chọn thực phẩm",
    "bệnh lý",
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

export default function FoodSubstitutionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tìm Thực phẩm Thay thế" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-8 h-8 text-teal-600" aria-hidden="true" />
          <h1 className="heading-1">Tìm Thực phẩm Thay thế</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tìm thực phẩm thay thế phù hợp hơn với bệnh lý của bạn.
          Công cụ sẽ gợi ý các lựa chọn tốt hơn dựa trên dinh dưỡng và đánh giá bệnh lý.
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
