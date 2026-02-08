import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Calendar, Leaf, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Theo Mùa ở Việt Nam",
  description:
    "Khám phá thực phẩm theo mùa ở Việt Nam - mùa xuân, hè, thu, đông. Lợi ích của thực phẩm theo mùa (rẻ hơn, tươi hơn, dinh dưỡng hơn) và cách bảo quản.",
  keywords: [
    "thực phẩm theo mùa",
    "seasonal foods",
    "mùa xuân",
    "mùa hè",
    "mùa thu",
    "mùa đông",
    "thực phẩm Việt Nam",
  ],
};

export default function SeasonalFoodsVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Tổng quát", href: "/knowledge/general-nutrition" },
          { label: "Thực phẩm Theo Mùa ở Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Theo Mùa ở Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Thực phẩm theo mùa ở Việt Nam rất đa dạng, từ rau củ đến trái cây. 
          Mua thực phẩm theo mùa giúp bạn có thực phẩm tươi ngon, rẻ hơn, và dinh dưỡng hơn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Lợi ích:</strong> Rẻ hơn 30-50%, tươi hơn, dinh dưỡng hơn
          </li>
          <li>
            <strong>Mùa xuân:</strong> Rau cải, rau muống, đậu bắp, trái cây mùa xuân
          </li>
          <li>
            <strong>Mùa hè:</strong> Dưa hấu, thanh long, xoài, ổi, rau muống
          </li>
          <li>
            <strong>Mùa thu:</strong> Bắp cải, cà rốt, khoai lang, cam, quýt
          </li>
          <li>
            <strong>Mùa đông:</strong> Rau cải, cà rốt, khoai lang, trái cây mùa đông
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích Thực phẩm Theo Mùa</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Rẻ hơn</p>
              <p className="text-xs text-gray-700">
                Rẻ hơn 30-50% so với thực phẩm trái mùa vì nguồn cung dồi dào.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Tươi hơn</p>
              <p className="text-xs text-gray-700">
                Tươi hơn vì thu hoạch đúng mùa, không cần bảo quản lâu.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Dinh dưỡng hơn</p>
              <p className="text-xs text-gray-700">
                Dinh dưỡng hơn vì thu hoạch đúng độ chín, giữ được nhiều vitamin.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Theo Mùa</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">Mùa Xuân (Tháng 2-4)</h3>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <p className="text-xs text-gray-700 mb-2">
                Rau cải, rau muống, đậu bắp, mướp - tươi, rẻ, giàu vitamin.
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1">Trái cây:</p>
              <p className="text-xs text-gray-700">
                Xoài, ổi, thanh long - tươi, ngon, giàu vitamin C.
              </p>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">Mùa Hè (Tháng 5-7)</h3>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <p className="text-xs text-gray-700 mb-2">
                Rau muống, rau lang, đậu bắp, mướp - nhiều nước, giải nhiệt.
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1">Trái cây:</p>
              <p className="text-xs text-gray-700">
                Dưa hấu, thanh long, xoài, ổi - nhiều nước, giải nhiệt, giàu vitamin C.
              </p>
            </div>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">Mùa Thu (Tháng 8-10)</h3>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <p className="text-xs text-gray-700 mb-2">
                Bắp cải, cà rốt, khoai lang - giàu vitamin, beta-carotene.
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1">Trái cây:</p>
              <p className="text-xs text-gray-700">
                Cam, quýt, bưởi - giàu vitamin C, tăng cường miễn dịch.
              </p>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">Mùa Đông (Tháng 11-1)</h3>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <p className="text-xs text-gray-700 mb-2">
                Rau cải, cà rốt, khoai lang - giàu vitamin, beta-carotene.
              </p>
              <p className="text-xs font-semibold text-gray-900 mb-1">Trái cây:</p>
              <p className="text-xs text-gray-700">
                Cam, quýt, bưởi - giàu vitamin C, tăng cường miễn dịch.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Bảo quản</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Bảo quản ở nơi mát, khô ráo</li>
                <li>• Có thể phơi khô để dùng lâu</li>
                <li>• Có thể muối chua để dùng lâu</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Trái cây:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Bảo quản ở nơi mát, khô ráo</li>
                <li>• Có thể làm mứt để dùng lâu</li>
                <li>• Có thể phơi khô để dùng lâu</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua theo mùa:</strong> Mua thực phẩm theo mùa để có giá tốt và tươi ngon.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bảo quản:</strong> Bảo quản thực phẩm theo mùa để dùng lâu (phơi khô, muối chua).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm theo mùa để có đủ dinh dưỡng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn chế</h3>
            <p className="text-sm text-gray-600">
              Mua thực phẩm theo mùa để tiết kiệm
            </p>
          </Card>
          <Card href="/knowledge/smart-shopping-vietnam">
            <h3 className="heading-5 mb-2">Đi Chợ Thông minh</h3>
            <p className="text-sm text-gray-600">
              Cách mua thực phẩm theo mùa
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Thực phẩm theo mùa có thể thay đổi tùy theo 
          vùng miền và khí hậu. Hãy tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}
