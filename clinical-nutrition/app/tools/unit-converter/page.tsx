import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, Ruler } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Chuyển đổi Đơn vị Việt Nam",
  description:
    "Chuyển đổi giữa các đơn vị Việt Nam (bát, thìa, đĩa, tô...) và gram. Tiện dụng cho việc tính toán dinh dưỡng.",
  keywords: [
    "chuyển đổi đơn vị",
    "bát",
    "thìa",
    "đĩa",
    "tô",
    "gram",
    "đơn vị việt nam",
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

export default function UnitConverterPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Chuyển đổi Đơn vị Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Ruler className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Chuyển đổi Đơn vị Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chuyển đổi giữa các đơn vị Việt Nam phổ biến (bát, thìa, đĩa, tô...) và gram.
          Tiện dụng cho việc tính toán dinh dưỡng và lập thực đơn.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Các giá trị chuyển đổi là ước tính trung bình. 
            Kích thước thực tế có thể thay đổi tùy theo bát, thìa, và cách đong đo của từng người.
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
