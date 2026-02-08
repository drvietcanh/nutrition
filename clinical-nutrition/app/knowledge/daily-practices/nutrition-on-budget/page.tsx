import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { DollarSign, CheckCircle2, AlertCircle, ShoppingCart } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng với Ngân sách Hạn hẹp",
  description:
    "Hướng dẫn cách ăn uống lành mạnh với ngân sách hạn hẹp - chọn thực phẩm giá trị dinh dưỡng cao, mua sắm thông minh, và lập kế hoạch.",
  keywords: [
    "dinh dưỡng giá rẻ",
    "ăn uống tiết kiệm",
    "ngân sách",
    "dinh dưỡng",
  ],
};

export default function NutritionOnBudgetPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng với Ngân sách Hạn hẹp" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <DollarSign className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng với Ngân sách Hạn hẹp</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Ăn uống lành mạnh không nhất thiết phải đắt tiền. 
          Với một vài mẹo thông minh, bạn có thể có chế độ ăn đầy đủ dinh dưỡng 
          mà vẫn phù hợp với ngân sách của mình.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Đậu, trứng, ngũ cốc nguyên cám</strong> là thực phẩm giá rẻ, giàu dinh dưỡng
          </li>
          <li>
            <strong>Mua theo mùa</strong> - trái cây, rau củ mùa vụ thường rẻ hơn
          </li>
          <li>
            <strong>Lập kế hoạch mua sắm</strong> giúp tránh lãng phí
          </li>
          <li>
            <strong>Nấu ở nhà</strong> thường rẻ hơn và lành mạnh hơn ăn ngoài
          </li>
          <li>
            <strong>Mua số lượng lớn</strong> (khi có thể) để tiết kiệm
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Giá rẻ, Giàu Dinh dưỡng</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-green-700 mb-2">✓ Thực phẩm tốt, giá rẻ:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Đậu:</strong> Đậu đen, đậu đỏ, đậu lăng (giàu protein, chất xơ)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Trứng:</strong> Giàu protein, vitamin, giá rẻ</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch (mua số lượng lớn)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Khoai tây, khoai lang:</strong> Giàu carbohydrate, vitamin</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Rau củ mùa vụ:</strong> Rẻ hơn khi mua đúng mùa</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ bữa ăn giá rẻ:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Cơm + đậu đen + rau cải = ~15,000đ</li>
                <li>• Trứng + bánh mì + cà chua = ~10,000đ</li>
                <li>• Khoai tây + trứng + rau = ~12,000đ</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Thực phẩm Giá rẻ ở Chợ Việt Nam">
          <p className="text-sm mb-2">
            <strong>Ở chợ Việt Nam:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-2">
            <li><strong>Đậu đen, đậu đỏ:</strong> ~20,000-30,000đ/kg - giàu protein, chất xơ</li>
            <li><strong>Trứng:</strong> ~3,000-4,000đ/quả - giàu protein, vitamin</li>
            <li><strong>Rau muống, rau cải:</strong> ~10,000-15,000đ/kg (theo mùa) - giàu vitamin, chất xơ</li>
            <li><strong>Khoai lang:</strong> ~15,000-20,000đ/kg - giàu carbohydrate, beta-carotene</li>
            <li><strong>Cá nhỏ (cá cơm, cá khô):</strong> ~50,000-80,000đ/kg - giàu protein, calcium</li>
          </ul>
          <p className="text-sm">
            <strong>Tips:</strong> Mua ở chợ thường rẻ hơn siêu thị 20-30%. Mua theo mùa để có giá tốt nhất.
          </p>
        </ExampleBox>

        <ExampleBox variant="tip" title="Thực phẩm Theo Mùa ở Việt Nam">
          <p className="text-sm mb-2">
            <strong>Mua theo mùa giúp tiết kiệm 30-50%:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-2">
            <li><strong>Mùa hè:</strong> Dưa hấu, thanh long, xoài, ổi - rẻ, tươi, nhiều nước</li>
            <li><strong>Mùa đông:</strong> Bắp cải, cà rốt, khoai lang, cam, quýt - rẻ, tươi, giàu vitamin C</li>
            <li><strong>Rau theo mùa:</strong> Rau muống, rau cải - rẻ hơn khi mua đúng mùa</li>
          </ul>
          <p className="text-sm">
            <strong>Ví dụ:</strong> Xoài mùa hè ~20,000đ/kg, trái mùa ~50,000đ/kg. 
            Mua theo mùa giúp tiết kiệm và có thực phẩm tươi ngon hơn.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mẹo Mua sắm Thông minh</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lập danh sách mua sắm:</strong> Tránh mua thừa, lãng phí
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua theo mùa:</strong> Trái cây, rau củ mùa vụ rẻ hơn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua số lượng lớn:</strong> Ngũ cốc, đậu khô (khi có thể)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>So sánh giá:</strong> Kiểm tra giá/kg, không chỉ giá gói
              </p>
            </div>
            <div className="flex items-start gap-2">
              <ShoppingCart className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua thực phẩm đông lạnh:</strong> Rau củ đông lạnh thường rẻ và vẫn dinh dưỡng
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="tip" title="Cách Mua sắm ở Chợ để Tiết kiệm">
          <p className="text-sm mb-2">
            <strong>Tips mua sắm ở chợ Việt Nam:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-2">
            <li><strong>Đi sáng sớm:</strong> Thực phẩm tươi nhất, có thể mặc cả</li>
            <li><strong>So sánh giá:</strong> Đi nhiều gian hàng để so sánh giá</li>
            <li><strong>Mua theo mùa:</strong> Rau củ, trái cây theo mùa rẻ hơn 30-50%</li>
            <li><strong>Mua số lượng lớn:</strong> Đậu, gạo mua số lượng lớn rẻ hơn</li>
            <li><strong>Mặc cả:</strong> Ở chợ có thể mặc cả để có giá tốt hơn</li>
          </ul>
          <p className="text-sm">
            <strong>Ví dụ:</strong> Mua đậu đen 5kg thay vì 1kg - tiết kiệm 10-15%. 
            Mua rau muống mùa hè thay vì trái mùa - tiết kiệm 30-40%.
          </p>
        </ExampleBox>

        <ComparisonCard
          title="So sánh Giá: Chợ vs Siêu thị"
          goodTitle="Chợ truyền thống"
          goodItems={[
            "Rẻ hơn 20-30% (thường)",
            "Tươi hơn (mua sáng sớm)",
            "Có thể mặc cả",
            "Thực phẩm địa phương",
            "Rau củ, thịt, cá tươi",
          ]}
          badTitle="Siêu thị"
          badItems={[
            "Đắt hơn 20-30% (thường)",
            "Có nhãn, dễ đọc",
            "Bảo quản tốt",
            "Nhiều lựa chọn",
            "Thực phẩm đóng gói",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Lập kế hoạch giúp tiết kiệm tiền
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Nấu ở nhà rẻ hơn và lành mạnh hơn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Ăn uống lành mạnh với ngân sách hạn hẹp là có thể, 
          nhưng cần lập kế hoạch và chọn lựa thông minh.
        </p>
      </Callout>
    </main>
  );
}
