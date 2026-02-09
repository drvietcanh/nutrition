import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Search, Heart } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tra cứu Thành phần Thực phẩm theo Bệnh",
  description:
    "Tra cứu nhanh thành phần dinh dưỡng của thực phẩm Việt Nam theo từng bệnh: đái tháo đường, gút, thận, tăng huyết áp, tim mạch.",
  keywords: [
    "tra cứu thực phẩm",
    "thành phần dinh dưỡng",
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

export default function FoodLookupByDiseasePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tra cứu Thành phần Thực phẩm theo Bệnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Search className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Tra cứu Thành phần Thực phẩm theo Bệnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tìm kiếm và xem thông tin dinh dưỡng của thực phẩm Việt Nam theo từng bệnh lý.
          Hiểu rõ thành phần nào cần chú ý cho bệnh của bạn.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
            Luôn tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
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
