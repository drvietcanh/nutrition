import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, TrendingUp } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tính toán GL cho Bữa Ăn - Đái tháo đường",
  description:
    "Tính toán Glycemic Load (GL) của bữa ăn để đánh giá ảnh hưởng đến đường huyết. Công cụ hữu ích cho người đái tháo đường.",
  keywords: [
    "glycemic load",
    "GL",
    "đái tháo đường",
    "đường huyết",
    "tính toán GL",
    "bữa ăn",
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

export default function GLCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tính toán GL cho Bữa Ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Tính toán GL cho Bữa Ăn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tính toán Glycemic Load (GL) của bữa ăn để đánh giá ảnh hưởng đến đường huyết.
          GL kết hợp cả tốc độ (GI) và lượng carbohydrate trong khẩu phần.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong>GL là gì?</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
            <li><strong>GI (Glycemic Index):</strong> Tốc độ làm tăng đường huyết (0-100)</li>
            <li><strong>GL (Glycemic Load):</strong> Vừa tốc độ, vừa lượng ăn vào. GL = (GI × lượng carb) ÷ 100</li>
            <li><strong>Phân loại GL:</strong> Thấp (≤10), Trung bình (11-19), Cao (≥20)</li>
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-900">
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
