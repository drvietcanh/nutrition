import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ShoppingCart, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đi Chợ Thông minh ở Việt Nam",
  description:
    "Hướng dẫn cách đi chợ thông minh ở Việt Nam - chọn thực phẩm tươi, đọc nhãn, so sánh giá, mua theo mùa. Checklist đi chợ.",
  keywords: [
    "đi chợ",
    "mua sắm thực phẩm",
    "chợ Việt Nam",
    "thực phẩm tươi",
    "đọc nhãn",
    "mua theo mùa",
  ],
};

export default function SmartShoppingVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực hành Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Đi Chợ Thông minh ở Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Đi Chợ Thông minh ở Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đi chợ thông minh giúp bạn mua được thực phẩm tươi ngon, giá tốt, và đảm bảo dinh dưỡng. 
          Ở Việt Nam, có nhiều cách để đi chợ hiệu quả, từ chợ truyền thống đến siêu thị.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chọn thực phẩm tươi:</strong> Rau xanh, thịt đỏ tươi, cá còn sống/bơi
          </li>
          <li>
            <strong>Đọc nhãn:</strong> Hiểu thông tin dinh dưỡng, thành phần, hạn sử dụng
          </li>
          <li>
            <strong>So sánh giá:</strong> Chợ vs siêu thị, mua theo mùa để tiết kiệm
          </li>
          <li>
            <strong>Mua theo mùa:</strong> Thực phẩm theo mùa rẻ hơn, tươi hơn, dinh dưỡng hơn
          </li>
          <li>
            <strong>Checklist:</strong> Lập danh sách trước khi đi chợ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Chọn Thực phẩm Tươi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Rau Củ</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Lá xanh, không héo, không vàng</li>
              <li>✓ Củ cứng, không mềm, không thối</li>
              <li>✓ Không có vết thâm, sâu bệnh</li>
              <li>✓ Mùi thơm tự nhiên</li>
            </ul>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Rau muống:</strong> Lá xanh, thân giòn, không héo. 
                <strong>Rau cải:</strong> Lá xanh, không vàng, không sâu.
              </p>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Thịt</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Màu đỏ tươi (thịt bò, heo), hồng (thịt gà)</li>
              <li>✓ Không có mùi hôi, mùi thối</li>
              <li>✓ Không có vết thâm, đen</li>
              <li>✓ Mua ở nơi uy tín, có bảo quản lạnh</li>
            </ul>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Thịt heo:</strong> Màu đỏ tươi, không có mùi hôi. 
                <strong>Thịt gà:</strong> Màu hồng, da vàng nhạt, không có mùi.
              </p>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Cá</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Mắt trong, không đục</li>
              <li>✓ Mang đỏ tươi, không thâm</li>
              <li>✓ Vảy sáng, không rụng</li>
              <li>✓ Thịt chắc, không mềm</li>
              <li>✓ Không có mùi tanh nồng</li>
            </ul>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Cá tươi:</strong> Mắt trong, mang đỏ, vảy sáng. 
                <strong>Cá sống:</strong> Bơi nhanh, không chậm chạp.
              </p>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Trái cây</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Màu sắc tươi, không thâm</li>
              <li>✓ Vỏ không bị dập, nứt</li>
              <li>✓ Mùi thơm tự nhiên</li>
              <li>✓ Chín vừa, không quá chín</li>
            </ul>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Xoài:</strong> Màu vàng, mùi thơm, không dập. 
                <strong>Ổi:</strong> Vỏ xanh, không thâm, giòn.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Đọc Nhãn Thực phẩm</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Đọc nhãn giúp bạn hiểu về thành phần, dinh dưỡng, và hạn sử dụng của thực phẩm.
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thông tin Quan trọng:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Thành phần:</strong> Xem có chất phụ gia, chất bảo quản không</li>
                <li>• <strong>Dinh dưỡng:</strong> Calo, protein, chất béo, carbohydrate, natri</li>
                <li>• <strong>Hạn sử dụng:</strong> Ngày sản xuất, hạn sử dụng</li>
                <li>• <strong>Xuất xứ:</strong> Nơi sản xuất, nguồn gốc</li>
              </ul>
            </div>
            <ExampleBox variant="info" title="Ví dụ Đọc Nhãn">
              <p className="text-sm mb-2">
                <strong>Nước mắm:</strong> Xem thành phần (cá, muối), natri (mg/100ml), 
                hạn sử dụng. Chọn nước mắm ít natri nếu có.
              </p>
              <p className="text-sm">
                <strong>Sữa chua:</strong> Xem thành phần (sữa, đường), protein, calo. 
                Chọn sữa chua ít đường, nhiều protein.
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Giá: Chợ vs Siêu thị</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Chợ truyền thống:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>✓ Rẻ hơn (thường)</li>
                <li>✓ Tươi hơn (mua sáng sớm)</li>
                <li>✓ Có thể mặc cả</li>
                <li>✓ Thực phẩm địa phương</li>
                <li>✗ Cần kiểm tra chất lượng</li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Siêu thị:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>✓ Có nhãn, dễ đọc</li>
                <li>✓ Bảo quản tốt</li>
                <li>✓ Nhiều lựa chọn</li>
                <li>✓ Có thể đổi trả</li>
                <li>✗ Đắt hơn (thường)</li>
              </ul>
            </div>
          </div>
          <ExampleBox variant="tip" title="Tips">
            <p className="text-sm">
              Mua <strong>rau củ, thịt, cá</strong> ở chợ (rẻ, tươi). 
              Mua <strong>thực phẩm đóng gói</strong> ở siêu thị (có nhãn, dễ đọc).
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mua Theo Mùa</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Thực phẩm theo mùa rẻ hơn, tươi hơn, và dinh dưỡng hơn.
          </p>
          <div className="space-y-2">
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Mùa Hè:</p>
              <p className="text-xs text-gray-700">
                Dưa hấu, thanh long, xoài, ổi, rau muống, rau cải - rẻ, tươi, nhiều nước.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Mùa Đông:</p>
              <p className="text-xs text-gray-700">
                Bắp cải, cà rốt, khoai lang, cam, quýt - rẻ, tươi, giàu vitamin C.
              </p>
            </div>
          </div>
          <ExampleBox variant="tip" title="Lợi ích">
            <p className="text-sm">
              Mua theo mùa giúp <strong>tiết kiệm tiền</strong> (rẻ hơn 30-50%), 
              <strong>tươi hơn</strong> (không cần bảo quản lâu), 
              và <strong>dinh dưỡng hơn</strong> (thu hoạch đúng mùa).
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Checklist Đi Chợ</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lập danh sách:</strong> Viết trước những gì cần mua
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đi sáng sớm:</strong> Thực phẩm tươi nhất vào buổi sáng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm tra chất lượng:</strong> Xem, ngửi, sờ thực phẩm
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>So sánh giá:</strong> Đi nhiều gian hàng để so sánh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua đủ, không mua thừa:</strong> Tránh lãng phí
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/seasonal-foods-vietnam">
            <h3 className="heading-5 mb-2">Thực phẩm Theo Mùa</h3>
            <p className="text-sm text-gray-600">
              chi tiết về thực phẩm theo mùa ở Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn chế</h3>
            <p className="text-sm text-gray-600">
              Cách tiết kiệm khi mua thực phẩm
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
          Thông tin này chỉ dành cho mục đích giáo dục. Chất lượng thực phẩm có thể thay đổi 
          tùy theo nguồn và cách bảo quản. Hãy mua ở nơi uy tín và bảo quản đúng cách sau khi mua.
        </p>
      </Callout>
    </main>
  );
}
