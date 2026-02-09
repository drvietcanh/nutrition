import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Zap, Search } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tra cứu Nhanh",
  description:
    "Tra cứu nhanh thông tin dinh dưỡng và phù hợp với bệnh lý của thực phẩm. Công cụ nhỏ gọn, nhanh chóng.",
  keywords: [
    "tra cứu nhanh",
    "thực phẩm",
    "dinh dưỡng",
    "bệnh lý",
    "quick lookup",
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

export default function QuickLookupPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tra cứu Nhanh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Tra cứu Nhanh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tra cứu nhanh thông tin dinh dưỡng và phù hợp với bệnh lý của thực phẩm.
          Công cụ nhỏ gọn, nhanh chóng, phù hợp để sử dụng khi đọc bài viết.
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
