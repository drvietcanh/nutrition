import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { UtensilsCrossed, Search } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tra cứu Món Ăn Việt Nam",
  description:
    "Tra cứu thông tin dinh dưỡng và đánh giá phù hợp với bệnh lý của các món ăn Việt Nam phổ biến.",
  keywords: [
    "món ăn việt nam",
    "phở",
    "bún",
    "cơm",
    "canh",
    "dinh dưỡng",
    "tra cứu món ăn",
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

export default function VietnameseDishLookupPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tra cứu Món Ăn Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Tra cứu Món Ăn Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tìm kiếm và xem thông tin dinh dưỡng của các món ăn Việt Nam phổ biến.
          Hiểu rõ món ăn nào phù hợp với bệnh lý của bạn và cách điều chỉnh để phù hợp hơn.
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
