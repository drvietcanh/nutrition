import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, FlaskConical } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tính toán Kali và Phốt pho - Bệnh thận",
  description:
    "Tính toán tổng lượng kali và phốt pho trong bữa ăn cho người bệnh thận. So sánh với nhu cầu theo giai đoạn CKD.",
  keywords: [
    "kali",
    "potassium",
    "phốt pho",
    "phosphorus",
    "bệnh thận",
    "CKD",
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

export default function KidneyMineralsCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tính toán Kali và Phốt pho" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <FlaskConical className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Tính toán Kali và Phốt pho</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tính toán tổng lượng kali và phốt pho trong bữa ăn cho người bệnh thận.
          So sánh với nhu cầu theo giai đoạn CKD và nhận gợi ý điều chỉnh.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900 mb-2">
            <strong>Khuyến nghị theo giai đoạn CKD:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-blue-900">
            <li><strong>Giai đoạn 3:</strong> Phốt pho &lt; 800-1000mg/ngày, Kali theo dõi</li>
            <li><strong>Giai đoạn 4-5:</strong> Phốt pho &lt; 800mg/ngày, Kali &lt; 2-3g/ngày</li>
            <li><strong>Lưu ý:</strong> Chỉ hạn chế khi kali/phốt pho máu tăng, không nên kiêng máy móc</li>
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
            Chế độ ăn phải thay đổi theo từng giai đoạn bệnh thận và tình trạng cụ thể.
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
