import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { UtensilsCrossed, Search } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Cơ sở Dữ liệu Thực phẩm Việt Nam",
  description:
    "Tìm kiếm thông tin dinh dưỡng của các thực phẩm Việt Nam phổ biến. Tính toán giá trị dinh dưỡng cho nhiều khẩu phần.",
  keywords: [
    "thực phẩm việt nam",
    "giá trị dinh dưỡng",
    "calories",
    "protein",
    "carbohydrate",
    "fat",
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

export default function FoodDatabasePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Cơ sở Dữ liệu Thực phẩm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Cơ sở Dữ liệu Thực phẩm Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tìm kiếm và xem thông tin dinh dưỡng của các thực phẩm Việt Nam phổ biến.
          Tính toán giá trị dinh dưỡng cho nhiều khẩu phần khác nhau.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Giá trị dinh dưỡng là ước tính trung bình và có thể
            thay đổi tùy theo cách chế biến và nguồn gốc thực phẩm.
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
