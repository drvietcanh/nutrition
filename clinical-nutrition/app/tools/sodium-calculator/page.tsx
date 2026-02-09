import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, Droplet } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tính toán Natri trong Bữa Ăn - Tăng huyết áp",
  description:
    "Tính toán tổng lượng natri (muối) trong bữa ăn để kiểm soát huyết áp. Công cụ hữu ích cho người tăng huyết áp.",
  keywords: [
    "natri",
    "muối",
    "tăng huyết áp",
    "huyết áp cao",
    "tính toán natri",
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

export default function SodiumCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tính toán Natri trong Bữa Ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplet className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Tính toán Natri trong Bữa Ăn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tính toán tổng lượng natri (muối) trong bữa ăn để kiểm soát huyết áp.
          Natri có trong muối ăn, nước mắm, nước tương, và nhiều thực phẩm chế biến sẵn.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong>Khuyến nghị về natri:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
            <li>Người bình thường: Không quá 2,300mg natri/ngày (≈ 6g muối)</li>
            <li>Người tăng huyết áp: Không quá 1,500mg natri/ngày (≈ 4g muối)</li>
            <li>1 thìa canh nước mắm (15ml) có khoảng 1,200mg natri</li>
            <li>1g muối = 400mg natri</li>
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
