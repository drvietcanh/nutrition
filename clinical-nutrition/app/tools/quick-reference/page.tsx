import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Table, BookOpen } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Bảng Tra cứu Nhanh",
  description:
    "Bảng tra cứu nhanh thành phần dinh dưỡng theo từng bệnh lý: GI/GL cho đái tháo đường, purin cho bệnh gút, kali/phốt pho cho bệnh thận, natri cho tăng huyết áp, cholesterol cho tim mạch.",
  keywords: [
    "bảng tra cứu",
    "GI GL",
    "purin",
    "kali",
    "phốt pho",
    "natri",
    "cholesterol",
    "đái tháo đường",
    "bệnh gút",
    "bệnh thận",
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

export default function QuickReferencePage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Bảng Tra cứu Nhanh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Table className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Bảng Tra cứu Nhanh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Bảng tra cứu nhanh thành phần dinh dưỡng quan trọng theo từng bệnh lý.
          Giúp bạn nhanh chóng tìm thực phẩm phù hợp với tình trạng sức khỏe của mình.
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
