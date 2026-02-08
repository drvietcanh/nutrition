import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { ShoppingCart, CheckCircle2, AlertCircle, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đi Chợ Thông minh ở Việt Nam",
  description:
    "Hướng dẫn chọn thực phẩm tươi, đọc nhãn, so sánh giá, mua theo mùa ở chợ Việt Nam. Tips thực tế để mua sắm thông minh và tiết kiệm.",
  keywords: [
    "đi chợ",
    "mua sắm",
    "chợ Việt Nam",
    "thực phẩm tươi",
    "chọn thực phẩm",
    "mua theo mùa",
  ],
};

export default function SmartShoppingVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Đi Chợ Thông minh ở Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Đi Chợ Thông minh ở Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đi chợ thông minh giúp bạn chọn được thực phẩm tươi ngon, giàu dinh dưỡng, và tiết kiệm tiền. 
          Với một vài mẹo đơn giản, bạn có thể mua sắm hiệu quả hơn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chọn thực phẩm tươi:</strong> Rau xanh, thịt cá tươi, trái cây chín vừa
          </li>
          <li>
            <strong>Mua theo mùa:</strong> Thực phẩm mùa vụ rẻ hơn, tươi ngon hơn
          </li>
          <li>
            <strong>So sánh giá:</strong> Kiểm tra giá/kg, không chỉ giá gói
          </li>
          <li>
            <strong>Đọc nhãn:</strong> Kiểm tra thông tin dinh dưỡng trên sản phẩm đóng gói
          </li>
          <li>
            <strong>Lập danh sách:</strong> Tránh mua thừa, lãng phí
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Chọn Thực phẩm Tươi</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Chọn Rau Củ Tươi</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Dấu hiệu Rau Tươi:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Lá xanh, không vàng, không héo</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thân cứng, không mềm nhũn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Không có vết thâm, sâu bệnh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mùi thơm tự nhiên, không mùi lạ</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">Tránh:</p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• Rau vàng, héo, mềm nhũn</li>
                  <li>• Rau có vết thâm, sâu bệnh</li>
                  <li>• Rau có mùi lạ, mùi hóa chất</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Chọn Thịt Cá Tươi</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Dấu hiệu Thịt Cá Tươi:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Thịt:</strong> Màu đỏ tươi, không thâm, không nhớt, mùi thơm tự nhiên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Cá:</strong> Mắt trong, mang đỏ tươi, thịt chắc, không nhớt, mùi biển nhẹ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Tôm:</strong> Vỏ cứng, trong, không đen, mùi biển nhẹ</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">Tránh:</p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• Thịt thâm, nhớt, mùi hôi</li>
                  <li>• Cá mắt đục, mang thâm, thịt mềm, mùi tanh nồng</li>
                  <li>• Tôm vỏ mềm, đen, mùi hôi</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Chọn Trái cây Tươi</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Dấu hiệu Trái cây Tươi:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Vỏ căng, không nhăn, không thâm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mùi thơm tự nhiên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chín vừa (không quá xanh, không quá chín)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ thực tế">
            <p className="mb-2">
              <strong>Rau muống tươi:</strong> Lá xanh tươi, thân cứng, không héo. 
              Khi bẻ thân, có tiếng "rắc" - dấu hiệu rau tươi.
            </p>
            <p className="mb-2">
              <strong>Cá tươi:</strong> Mắt trong, sáng. Mang đỏ tươi. Thịt chắc, ấn vào không lõm. 
              Mùi biển nhẹ, không tanh nồng.
            </p>
            <p>
              <strong>Ổi tươi:</strong> Vỏ căng, xanh hoặc vàng nhẹ. Mùi thơm. 
              Không quá mềm (quá chín) hoặc quá cứng (quá xanh).
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mua Theo Mùa - Tiết kiệm và Tươi ngon</h2>
        <div className="space-y-4">
          <p className="text-body">
            Thực phẩm theo mùa thường <strong>rẻ hơn, tươi ngon hơn</strong>, và có nhiều dinh dưỡng hơn 
            so với thực phẩm trái mùa.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Thực phẩm Theo Mùa ở Việt Nam</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Mùa Xuân (Tháng 2-4):</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau: Rau muống, rau cải, rau dền</li>
                  <li>• Trái cây: Dâu tây, cam, quýt</li>
                  <li>• Cá: Cá tươi nhiều</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Mùa Hè (Tháng 5-7):</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau: Rau muống, mướp, đậu bắp, bầu</li>
                  <li>• Trái cây: Xoài, ổi, thanh long, nhãn</li>
                  <li>• Cá: Cá biển tươi</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Mùa Thu (Tháng 8-10):</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau: Rau cải, bông cải, cà rốt</li>
                  <li>• Trái cây: Bưởi, cam, quýt, chôm chôm</li>
                  <li>• Cá: Cá tươi</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Mùa Đông (Tháng 11-1):</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau: Rau cải, cà rốt, khoai tây</li>
                  <li>• Trái cây: Cam, quýt, bưởi</li>
                  <li>• Cá: Cá tươi</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ">
            <p className="mb-2">
              <strong>Mùa hè:</strong> Xoài, ổi, thanh long rẻ và ngon nhất vào mùa hè (tháng 5-7). 
              Mua vào mùa này tiết kiệm 30-50% so với trái mùa.
            </p>
            <p>
              <strong>Mùa đông:</strong> Cam, quýt, bưởi rẻ và ngon nhất vào mùa đông (tháng 11-1). 
              Giàu vitamin C, tốt cho mùa lạnh.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Giá: Chợ vs Siêu thị</h2>
        <ComparisonCard
          goodTitle="Chợ"
          goodItems={[
            "Thực phẩm tươi sống, mới thu hoạch",
            "Giá thường rẻ hơn (đặc biệt rau củ, thịt cá)",
            "Có thể mặc cả, thương lượng",
            "Nhiều lựa chọn, đa dạng",
            "Hỗ trợ người bán địa phương"
          ]}
          badTitle="Siêu thị"
          badItems={[
            "Thực phẩm có thể đã đóng gói, ít tươi hơn",
            "Giá thường cao hơn (đặc biệt rau củ)",
            "Không thể mặc cả",
            "Lựa chọn có thể hạn chế hơn",
            "Thực phẩm có thể đã qua xử lý"
          ]}
          note="Cả hai đều có ưu điểm. Nên kết hợp: mua thực phẩm tươi ở chợ, mua đồ khô ở siêu thị."
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Đọc Nhãn Thực phẩm</h2>
        <div className="space-y-4">
          <p className="text-body">
            Khi mua thực phẩm đóng gói, đọc nhãn giúp bạn biết giá trị dinh dưỡng và chọn sản phẩm tốt hơn.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Những gì Cần Kiểm tra trên Nhãn</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">Thông tin Quan trọng:</p>
                <ul className="space-y-1 text-sm text-blue-900">
                  <li>• <strong>Khẩu phần (serving size):</strong> Lượng thực phẩm trong một khẩu phần</li>
                  <li>• <strong>năng lượng (calo):</strong> Số calo trong một khẩu phần</li>
                  <li>• <strong>Protein:</strong> Lượng protein (g)</li>
                  <li>• <strong>Carbohydrate:</strong> Lượng carbohydrate (g)</li>
                  <li>• <strong>Chất béo:</strong> Lượng chất béo (g)</li>
                  <li>• <strong>Natri:</strong> Lượng natri (mg) - quan trọng cho người tăng huyết áp</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ Đọc Nhãn">
            <p className="mb-2">
              <strong>Nhãn nước mắm:</strong> 1 thìa canh (15ml) = 1,000mg natri. 
              Nếu bạn cần hạn chế natri, nên dùng ít nước mắm hoặc chọn loại ít natri.
            </p>
            <p>
              <strong>Nhãn bánh mì:</strong> 1 lát (30g) = 80 calo, 15g carbohydrate. 
              Nếu ăn 2 lát, bạn nhận được 160 calo và 30g carbohydrate.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lập danh sách mua sắm:</strong> Viết ra những gì cần mua trước khi đi chợ. 
                Tránh mua thừa, lãng phí.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đi chợ sớm:</strong> Thực phẩm tươi nhất vào buổi sáng sớm. 
                Tránh đi chợ vào cuối ngày khi thực phẩm có thể không còn tươi.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>So sánh giá:</strong> Kiểm tra giá/kg, không chỉ giá gói. 
                Đôi khi gói lớn hơn rẻ hơn tính theo kg.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua theo mùa:</strong> Thực phẩm mùa vụ rẻ hơn và tươi ngon hơn. 
                Hỏi người bán về thực phẩm mùa vụ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm tra thực phẩm:</strong> Xem, ngửi, sờ thực phẩm trước khi mua. 
                Đừng ngại yêu cầu người bán cho xem thực phẩm.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc nhãn:</strong> Với thực phẩm đóng gói, đọc nhãn để biết giá trị dinh dưỡng. 
                Chọn sản phẩm ít natri, ít đường, nhiều chất xơ.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Checklist Đi Chợ</h2>
        <Card>
          <h3 className="heading-4 mb-3">Danh sách Kiểm tra</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Trước khi đi chợ:</p>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Lập danh sách mua sắm</li>
                  <li>• Kiểm tra tủ lạnh (tránh mua trùng lặp)</li>
                  <li>• Chuẩn bị túi, giỏ đi chợ</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Khi đi chợ:</p>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Kiểm tra thực phẩm tươi (xem, ngửi, sờ)</li>
                  <li>• So sánh giá giữa các quầy</li>
                  <li>• Mua theo danh sách (tránh mua thừa)</li>
                  <li>• Đọc nhãn thực phẩm đóng gói</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <input type="checkbox" className="mt-1" />
              <div>
                <p className="text-sm font-semibold text-gray-900">Sau khi mua:</p>
                <ul className="text-xs text-gray-700 space-y-1 mt-1">
                  <li>• Bảo quản thực phẩm đúng cách (tủ lạnh, nơi khô ráo)</li>
                  <li>• Sử dụng thực phẩm tươi trước (rau củ, thịt cá)</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm ở siêu thị luôn tốt hơn chợ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Thực phẩm ở chợ thường tươi hơn và rẻ hơn, 
                đặc biệt rau củ, thịt cá. Siêu thị tiện lợi hơn nhưng có thể đắt hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm đắt hơn luôn tốt hơn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không nhất thiết! Thực phẩm tươi, theo mùa thường rẻ hơn 
                nhưng tốt hơn thực phẩm trái mùa, đóng gói đắt tiền.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không cần đọc nhãn, chỉ cần nhìn thực phẩm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Với thực phẩm tươi, nhìn là đủ. Nhưng với thực phẩm đóng gói, 
                đọc nhãn rất quan trọng để biết giá trị dinh dưỡng và natri.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/reading-food-labels">
            <h3 className="heading-5 mb-2">Đọc Nhãn Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn chi tiết cách đọc nhãn dinh dưỡng
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn hẹp</h3>
            <p className="text-sm text-gray-600">
              Cách mua sắm tiết kiệm và lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/seasonal-foods-vietnam">
            <h3 className="heading-5 mb-2">Thực phẩm Theo Mùa ở Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Calendar thực phẩm theo mùa
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
          Thông tin này chỉ dành cho mục đích giáo dục. Cách chọn thực phẩm là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi người có sở thích và tình huống khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}
