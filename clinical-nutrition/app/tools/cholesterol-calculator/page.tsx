import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, Heart } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tính toán Cholesterol và Chất béo Bão hòa - Tim mạch",
  description:
    "Tính toán tổng lượng cholesterol và chất béo bão hòa trong bữa ăn. Công cụ hữu ích cho người bệnh tim mạch.",
  keywords: [
    "cholesterol",
    "chất béo bão hòa",
    "tim mạch",
    "bệnh tim",
    "tính toán",
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

export default function CholesterolCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tính toán Cholesterol và Chất béo Bão hòa" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Tính toán Cholesterol và Chất béo Bão hòa</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tính toán tổng lượng cholesterol và chất béo bão hòa trong bữa ăn để bảo vệ sức khỏe tim mạch.
          Cholesterol và chất béo bão hòa cao làm tăng nguy cơ bệnh tim mạch.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong>Khuyến nghị:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
            <li><strong>Cholesterol:</strong> &lt; 200mg/ngày cho người bệnh tim mạch</li>
            <li><strong>Chất béo bão hòa:</strong> &lt; 7% tổng calo (khoảng 15-20g/ngày cho người ăn 2000 calo)</li>
            <li>Ưu tiên chất béo không bão hòa (dầu thực vật, cá béo)</li>
            <li>Tránh chất béo trans hoàn toàn</li>
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
