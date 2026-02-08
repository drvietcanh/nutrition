import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ComparisonCard } from "../../components/ComparisonCard";
import { ExampleBox } from "../../components/ExampleBox";
import { PortionSizeGuide } from "../../components/PortionSizeGuide";
import { NutrientTable } from "../../components/NutrientTable";
import { Wheat, TrendingUp, Lightbulb, CheckCircle2, AlertCircle, XCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbohydrate (Tinh bột và Đường) trong Dinh dưỡng lâm sàng",
  description:
    "Hiểu về carbohydrate - nguồn năng lượng chính của cơ thể, các loại carbohydrate, vai trò, và cách chọn lựa đúng cho sức khỏe.",
  keywords: [
    "carbohydrate",
    "tinh bột",
    "đường",
    "glucose",
    "đái tháo đường",
    "năng lượng",
    "glycemic index",
  ],
};

export default function CarbohydratesPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Carbohydrate (Tinh bột và Đường)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Wheat className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">
            Carbohydrate (Tinh bột và Đường) trong Dinh dưỡng lâm sàng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Carbohydrate (hay còn gọi là tinh bột và đường) là nguồn năng lượng chính của cơ thể. 
          Hiểu về các loại carbohydrate khác nhau giúp bạn đưa ra lựa chọn tốt cho sức khỏe, 
          đặc biệt nếu bạn có đái tháo đường hoặc cần quản lý cân nặng.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Carbohydrate</strong> là nguồn năng lượng chính của cơ thể
          </li>
          <li>
            <strong>Carbohydrate đơn giản</strong> (đường) - hấp thu nhanh, nên hạn chế
          </li>
          <li>
            <strong>Carbohydrate phức tạp</strong> (tinh bột) - hấp thu chậm, tốt hơn
          </li>
          <li>Nên chọn carbohydrate nguyên cám, giàu chất xơ</li>
          <li>Carbohydrate chiếm 45-65% tổng năng lượng hàng ngày</li>
        </ul>
      </Callout>

      {/* What are Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2">Tinh bột (Carbohydrate) là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Tinh bột (carbohydrate)</strong> là nguồn năng lượng chính cho cơ thể, đặc biệt cho:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2 text-center">🧠 Não</h3>
              <p className="text-sm text-gray-700 text-center">Cần tinh bột để hoạt động</p>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2 text-center">💪 Cơ bắp</h3>
              <p className="text-sm text-gray-700 text-center">Cần tinh bột để vận động</p>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2 text-center">⚡ Hoạt động hàng ngày</h3>
              <p className="text-sm text-gray-700 text-center">Cần tinh bột để có năng lượng</p>
            </Card>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Có thể hiểu đơn giản:</strong> Tinh bột là "xăng" cho cơ thể. 
              Giống như xe cần xăng để chạy, cơ thể cần tinh bột để hoạt động.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Tinh bột</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Cung cấp năng lượng nhanh</strong> - cho hoạt động tức thì</li>
                  <li>• <strong>Giúp cơ thể hoạt động tỉnh táo</strong> - não cần glucose</li>
                  <li>• <strong>Hỗ trợ vận động và lao động trí óc</strong> - cơ bắp và não cần năng lượng</li>
                  <li>• Dự trữ năng lượng (glycogen)</li>
                  <li>• Tiết kiệm protein (không dùng protein làm năng lượng)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn thực phẩm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Ngũ cốc (gạo, lúa mì, yến mạch)</li>
                  <li>• Trái cây</li>
                  <li>• Rau củ (khoai tây, khoai lang)</li>
                  <li>• Đậu, đậu lăng</li>
                  <li>• Đường, mật ong</li>
                </ul>
              </div>
            </div>

            <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
              <p className="text-sm text-red-900">
                <strong>⚠️ Không có tinh bột →</strong> cơ thể dễ mệt, chóng mặt, giảm tập trung. 
                Não và cơ bắp không có đủ năng lượng để hoạt động.
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Not All Carbs Are The Same */}
      <section className="space-y-4">
        <h2 className="heading-2">Không phải tinh bột nào cũng giống nhau</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-yellow-200 bg-yellow-50/30">
            <h3 className="heading-4 mb-3 text-yellow-900">Tinh bột Tinh chế</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Dễ làm đường huyết tăng nhanh</strong> - không tốt cho sức khỏe</li>
              <li>• Ít chất xơ, ít dinh dưỡng</li>
              <li>• Nhanh đói, dễ ăn quá nhiều</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Ví dụ: Cơm trắng, bánh mì trắng, bún
            </p>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <h3 className="heading-4 mb-3 text-green-900">Tinh bột Nguyên cám</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Tăng đường huyết chậm hơn</strong> - tốt cho sức khỏe</li>
              <li>• <strong>No lâu hơn</strong> - có nhiều chất xơ</li>
              <li>• Nhiều dinh dưỡng hơn</li>
            </ul>
            <p className="text-xs text-gray-600 mt-2">
              Ví dụ: Gạo lứt, bánh mì nguyên cám, khoai lang
            </p>
          </Card>
        </div>

        <Callout variant="info" title="👉 Vấn đề không phải là ăn hay không ăn tinh bột">
          <p className="text-body-sm">
            Mà là <strong>chọn loại và lượng phù hợp</strong>. Không cần cắt bỏ hoàn toàn tinh bột, 
            chỉ cần chọn loại tốt và ăn đúng lượng.
          </p>
        </Callout>
      </section>

      {/* Vietnamese Carbohydrate Table */}
      <section className="space-y-4">
        <h2 className="heading-2">Bảng Tinh bột Phổ biến ở Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Bảng dưới đây giúp bạn hiểu về ảnh hưởng của các loại tinh bột phổ biến đến đường huyết.
          </p>
        </Callout>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Nhóm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Ảnh hưởng đường huyết</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cơm trắng</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Tinh chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tăng nhanh</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ăn nhiều dễ tăng đường</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Gạo lứt</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nguyên cám</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Tăng chậm hơn</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Cần kiểm soát lượng</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bún</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Tinh chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tăng nhanh</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ít chất xơ</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phở</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Tinh chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Phụ thuộc lượng bánh</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh mì trắng</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Tinh chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tăng nhanh</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhanh đói</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh mì nguyên cám</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nguyên cám</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Chậm hơn</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tốt hơn bánh mì trắng</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Khoai lang</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Tự nhiên</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">No lâu, nhiều chất xơ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Who Needs to Pay Attention */}
      <section className="space-y-4">
        <h2 className="heading-2">Ai cần chú ý Tinh bột?</h2>
        <Card className="border-amber-200 bg-amber-50/30">
          <div className="space-y-3">
            <p className="text-body-sm mb-3">
              Một số người cần chú ý đặc biệt đến lượng và loại tinh bột:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Người đái tháo đường</strong> - cần kiểm soát đường huyết</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Tiền đái tháo đường</strong> - phòng ngừa bệnh tiến triển</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Thừa cân, béo phì</strong> - cần kiểm soát lượng calo</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Ít vận động</strong> - không đốt cháy nhiều năng lượng</span>
              </li>
            </ul>
            <Callout variant="info" title="👉 Không cần cắt bỏ, chỉ cần ăn đúng cách">
              <p className="text-body-sm">
                Những người này không cần loại bỏ hoàn toàn tinh bột, chỉ cần:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
                <li>Chọn loại tốt (nguyên cám thay vì tinh chế)</li>
                <li>Ăn lượng vừa phải</li>
                <li>Ăn kèm rau và đạm</li>
                <li>Phân bố đều trong ngày</li>
              </ul>
            </Callout>
          </div>
        </Card>
      </section>

      {/* Types of Carbs */}
      <section className="space-y-6">
        <h2 className="heading-2">Hai Loại Carbohydrate Chính</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simple Carbs */}
          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-3 text-yellow-900 mb-3">Carbohydrate Đơn giản (Đường)</h3>
            <p className="text-body text-yellow-900 mb-4">
              Cấu trúc đơn giản, hấp thu nhanh vào máu. Làm đường huyết tăng nhanh.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Đặc điểm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hấp thu nhanh, đường huyết tăng nhanh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ít chất xơ, ít giá trị dinh dưỡng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nên hạn chế, đặc biệt người đái tháo đường</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
                <p className="text-xs text-gray-700">
                  Đường trắng, đường nâu, mật ong, nước ngọt, bánh kẹo, 
                  trái cây (tự nhiên nhưng vẫn là đường đơn giản)
                </p>
              </div>
            </div>
          </Card>

          {/* Complex Carbs */}
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-3 text-green-900 mb-3">Carbohydrate Phức tạp (Tinh bột)</h3>
            <p className="text-body text-green-900 mb-4">
              Cấu trúc phức tạp hơn, hấp thu chậm. Làm đường huyết tăng chậm và ổn định hơn.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Đặc điểm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hấp thu chậm, đường huyết tăng ổn định</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thường có nhiều chất xơ và dinh dưỡng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tốt cho sức khỏe, nên chọn loại này</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
                <p className="text-xs text-gray-700">
                  Gạo lứt, bánh mì nguyên cám, yến mạch, khoai lang, đậu, 
                  rau củ, ngũ cốc nguyên cám
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <strong>Lưu ý:</strong> Trái cây chứa đường đơn giản (fructose), nhưng cũng có chất xơ 
            và nhiều vitamin, nên vẫn tốt cho sức khỏe. Nước ép trái cây thì ít chất xơ hơn, 
            nên hạn chế hơn trái cây nguyên quả.
          </p>
        </div>
      </section>

      {/* Sugar Section */}
      <section className="space-y-4">
        <h2 className="heading-2">Đường – Không chỉ có "Ngọt"</h2>
        <div className="space-y-4">
          <div>
            <h3 className="heading-3 mb-3">Đường là gì?</h3>
            <p className="text-body mb-3">
              <strong>Đường</strong> là dạng carbohydrate hấp thu rất nhanh, làm đường huyết tăng nhanh.
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm text-blue-900">
                <strong>👉 Đường cho năng lượng nhanh nhưng không no lâu.</strong>
              </p>
              <p className="text-sm text-blue-900 mt-2">
                Khác với tinh bột phức tạp (như cơm, bánh mì) giúp no lâu, đường chỉ cho năng lượng tức thì 
                nhưng nhanh đói lại.
              </p>
            </div>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Đường có ở đâu?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Đường thêm vào:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Đường cát (đường trắng)</li>
                  <li>• Mật ong</li>
                  <li>• Đường nâu</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Thực phẩm có đường:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Nước ngọt, trà sữa</strong> - rất nhiều đường</li>
                  <li>• <strong>Bánh kẹo</strong> - nhiều đường</li>
                  <li>• <strong>Nước ép trái cây</strong> - đường tự nhiên nhưng nhiều</li>
                  <li>• Sữa có đường</li>
                  <li>• Chè, kem</li>
                </ul>
              </div>
            </div>
            <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
              <p className="text-sm text-red-900">
                <strong>⚠️ Nhiều người ăn nhiều đường mà không nhận ra.</strong> 
                Đường có thể ẩn trong nhiều thực phẩm mà bạn không nghĩ đến.
              </p>
            </div>
          </Card>

          <Card className="border-amber-200 bg-amber-50/30">
            <h3 className="heading-4 mb-3 text-amber-900">Không phải cứ "ít ăn cơm" là ít đường</h3>
            <p className="text-body-sm mb-3">
              Nhiều người nghĩ rằng chỉ cần giảm cơm là giảm đường, nhưng thực tế:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Uống nước ngọt</strong> - 1 lon có thể bằng 1 bát cơm về lượng đường</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Uống sữa có đường</strong> - nhiều đường hơn bạn nghĩ</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Ăn bánh, chè</strong> - rất nhiều đường</span>
              </li>
            </ul>
            <Callout variant="warning" title="👉 Những thứ này làm đường huyết tăng mạnh hơn cả cơm">
              <p className="text-body-sm">
                Vì đường hấp thu rất nhanh, không có chất xơ để làm chậm. 
                Vậy nên uống 1 lon nước ngọt có thể làm đường huyết tăng nhanh hơn ăn 1 bát cơm.
              </p>
            </Callout>
          </Card>
        </div>
      </section>

      {/* Vietnamese Sugar Sources Table */}
      <section className="space-y-4">
        <h2 className="heading-2">Bảng nguồn Đường Phổ biến ở Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Bảng dưới đây giúp bạn nhận biết các nguồn đường phổ biến và lượng đường tương đối.
          </p>
        </Callout>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng đường</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước ngọt</strong> (1 lon 330ml)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Rất cao (~35g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Không khuyến khích, tương đương 1 bát cơm</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trà sữa</strong> (1 ly)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Rất cao (~40-50g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dễ tăng cân, đường huyết tăng mạnh</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chè ngọt</strong> (1 bát)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao (~25-30g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều đường, nên ăn ít</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa có đường</strong> (1 ly 250ml)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình (~15g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Cần kiểm soát, nên chọn sữa không đường</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trái cây</strong> (1 quả vừa)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Tự nhiên (~15-20g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ăn nguyên quả tốt hơn, có chất xơ</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước ép trái cây</strong> (1 ly 250ml)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao (~25-30g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dễ uống quá nhiều, ít chất xơ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh ngọt</strong> (1 cái vừa)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao (~20-30g)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều đường và chất béo</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kẹo</strong> (1 viên)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Rất cao (~5g/viên)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Hầu như chỉ có đường</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How Much Sugar */}
      <section className="space-y-4">
        <h2 className="heading-2">Ăn Đường Bao nhiêu là Hợp lý?</h2>
        <Card className="border-blue-200 bg-blue-50/30">
          <div className="space-y-3">
            <p className="text-body">
              <strong>Không cần cấm tuyệt đối</strong> - đường không phải là "chất độc", nhưng cần ăn đúng cách.
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Khuyến nghị:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• <strong>Nhưng nên hạn chế đường thêm vào</strong> - đường cát, đường trong nước ngọt, bánh kẹo</li>
                <li>• <strong>Ưu tiên vị ngọt tự nhiên từ trái cây</strong> - trái cây có đường nhưng cũng có chất xơ và vitamin</li>
                <li>• Khuyến nghị: &lt; 50g đường/ngày (tương đương 10-12 thìa cà phê)</li>
                <li>• Lý tưởng: &lt; 25g đường/ngày (tương đương 5-6 thìa cà phê)</li>
              </ul>
            </div>

            <ExampleBox variant="tip" title="Ví dụ dễ hiểu">
              <p className="text-sm mb-2">
                <strong>Không tốt:</strong> 1 lon nước ngọt (35g đường) + 1 ly trà sữa (45g đường) = 80g đường/ngày (quá nhiều!)
              </p>
              <p className="text-sm">
                <strong>Tốt hơn:</strong> 1 quả táo (15g đường tự nhiên) + 1 quả cam (12g đường tự nhiên) = 27g đường/ngày (vừa phải)
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Practical Application Sugar */}
      <section className="space-y-4">
        <h2 className="heading-2">Áp dụng Thực tế</h2>
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="heading-4 mb-3">Mẹo Giảm Đường trong Đời sống Việt Nam</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Giảm nước ngọt, trà sữa</strong> - thay bằng nước lọc, trà không đường, hoặc chỉ uống 1-2 lần/tuần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn trái cây nguyên múi</strong> - thay vì nước ép, ăn nguyên quả để có chất xơ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tập đọc nhãn thực phẩm</strong> - kiểm tra lượng đường trên nhãn, chọn sản phẩm ít đường hơn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Giảm đường khi nấu ăn</strong> - giảm dần lượng đường trong chè, nước mắm pha
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn sữa không đường</strong> - thay vì sữa có đường, chọn sữa không đường
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Cách Giảm Đường</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">❌ Trước:</p>
              <p className="text-sm text-gray-700">
                Uống 1 ly trà sữa/ngày (45g đường) + 1 lon nước ngọt (35g đường) = 80g đường/ngày
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">✅ Sau:</p>
              <p className="text-sm text-gray-700">
                Uống trà không đường + nước lọc + 1 quả táo (15g đường tự nhiên) = 15g đường/ngày
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
              <p className="text-sm font-semibold text-green-900">
                Giảm từ 80g xuống 15g đường/ngày - cải thiện đáng kể!
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* How Much Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Ăn Bao nhiêu Carbohydrate?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Carbohydrate nên chiếm <strong>45-65%</strong> tổng năng lượng hàng ngày:
            </p>
            <NutrientTable
              title="Ví dụ Nhu cầu Carbohydrate"
              rows={[
                { nutrient: "Người khỏe mạnh (2000 calo/ngày)", amount: "225-325", unit: "g/ngày", highlight: "good", note: "45-65% tổng calo" },
                { nutrient: "Người đái tháo đường", amount: "Điều chỉnh", note: "Phân bổ đều, chọn loại phức tạp" },
                { nutrient: "Người tập thể dục nhiều", amount: "Có thể cao hơn", note: "Cần nhiều năng lượng" },
              ]}
            />
            <ExampleBox variant="tip" title="Ví dụ Thực tế">
              <p className="mb-2">
                <strong>2000 calo/ngày = 225-325g carbohydrate:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bữa sáng: Yến mạch (50g) + trái cây (20g) = 70g</li>
                <li>Bữa trưa: <strong>Cơm (80g) + rau củ (10g) = 90g</strong> - Bữa ăn Việt Nam</li>
                <li>Bữa tối: <strong>Bún bò (60g) + rau sống (10g) = 70g</strong> - Món ăn Việt Nam</li>
                <li>Snack: Trái cây (20g) = 20g</li>
                <li><strong>Tổng: ~250g carbohydrate</strong></li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Lưu ý:</strong> Cơm, bún, phở là nguồn carbohydrate phổ biến trong bữa ăn Việt Nam. 
                Có thể kết hợp với gạo lứt, khoai lang để có nhiều chất xơ hơn.
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Application in Vietnamese Meals */}
      <section className="space-y-4">
        <h2 className="heading-2">Áp dụng trong Bữa ăn Việt Nam</h2>
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="heading-4 mb-3">Nguyên tắc cơ bản</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không ăn quá nhiều tinh bột trong một bữa</strong> - 1 bát cơm vừa là đủ, không cần 2-3 bát
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nên ăn kèm rau và đạm</strong> - rau và thịt/cá giúp làm chậm hấp thu đường từ tinh bột
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không ăn tinh bột đơn lẻ</strong> - không nên chỉ ăn bánh mì không, nên ăn kèm thịt/cá và rau
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Bữa ăn Việt Nam Đúng cách</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">✅ Bữa ăn tốt:</p>
              <p className="text-sm text-gray-700">
                1 bát cơm (vừa) + thịt kho + canh rau + rau luộc = cân bằng, đường huyết tăng chậm
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">❌ Bữa ăn không tốt:</p>
              <p className="text-sm text-gray-700">
                2-3 bát cơm + ít rau + ít đạm = quá nhiều tinh bột, đường huyết tăng nhanh
              </p>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">❌ Bữa ăn không tốt:</p>
              <p className="text-sm text-gray-700">
                Chỉ ăn bánh mì không (không có thịt, không có rau) = tinh bột đơn lẻ, đường huyết tăng nhanh
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Carbohydrate Việt Nam Phổ biến">
          <p className="mb-2">
            <strong>Cơm</strong> là nguồn carbohydrate chính trong bữa ăn Việt Nam. Có thể chọn gạo lứt 
            thay vì gạo trắng để có nhiều chất xơ và dinh dưỡng hơn.
          </p>
          <p className="mb-2">
            <strong>Bún, phở, bánh cuốn</strong> là các loại carbohydrate phổ biến trong món ăn Việt Nam. 
            Chúng thường được ăn kèm với protein (thịt, cá, tôm) và rau, tạo thành bữa ăn cân bằng.
          </p>
          <p>
            <strong>Bánh chưng, bánh tét</strong> là món ăn truyền thống Việt Nam, thường được ăn trong 
            dịp Tết. Chúng chứa nhiều carbohydrate từ gạo nếp, nhưng cũng có đậu xanh và thịt, cung cấp 
            cả protein. Nên ăn vừa phải vì calo cao.
          </p>
        </ExampleBox>
      </section>

      {/* Portion Examples */}
      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Khẩu phần Carbohydrate</h2>
            <PortionSizeGuide
              title="Khẩu phần Carbohydrate Phổ biến"
              items={[
                { food: "Cơm trắng (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~200 calo, 45g carb" },
                { food: "Gạo lứt (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~200 calo, 45g carb" },
                { food: "Bún (Việt Nam)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~110 calo, 25g carb" },
                { food: "Phở (bánh phở)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~100 calo, 22g carb" },
                { food: "Bánh cuốn (Việt Nam)", portion: "1 đĩa", visual: "Bằng nắm tay", calories: "~120 calo, 25g carb" },
                { food: "Bánh chưng (Việt Nam)", portion: "1 miếng nhỏ (100g)", visual: "Bằng nắm tay", calories: "~180 calo, 30g carb" },
                { food: "Bánh tét (Việt Nam)", portion: "1 miếng nhỏ (100g)", visual: "Bằng nắm tay", calories: "~180 calo, 30g carb" },
                { food: "Bánh mì nguyên cám", portion: "1 lát", visual: "Bằng lòng bàn tay", calories: "~80 calo, 15g carb" },
                { food: "Yến mạch (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~150 calo, 27g carb" },
                { food: "Khoai tây (nướng)", portion: "1 củ vừa", visual: "Bằng nắm tay", calories: "~150 calo, 35g carb" },
                { food: "Khoai lang (Việt Nam)", portion: "1 củ vừa", visual: "Bằng nắm tay", calories: "~86 calo, 20g carb" },
                { food: "Chuối", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "~100 calo, 27g carb" },
                { food: "Táo", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "~80 calo, 21g carb" },
              ]}
            />
      </section>

      {/* Choosing Good Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách Chọn Carbohydrate Tốt
        </h2>
        <div className="space-y-4">
          <ComparisonCard
            title="So sánh: Carbohydrate Tốt vs Nên hạn chế"
            items={[
              {
                label: "Ngũ cốc",
                good: "Gạo lứt, yến mạch, bánh mì nguyên cám - nhiều chất xơ, vitamin",
                bad: "Gạo trắng, bánh mì trắng - ít chất xơ, ít dinh dưỡng",
                note: "Ngũ cốc nguyên cám tốt hơn nhiều so với ngũ cốc tinh chế. Ở Việt Nam, có thể thay gạo trắng bằng gạo lứt."
              },
              {
                label: "Món ăn Việt Nam",
                good: "Bún, phở với nhiều rau và protein nạc - cân bằng dinh dưỡng",
                bad: "Bún, phở với ít rau, nhiều dầu mỡ - nhiều calo, ít dinh dưỡng",
                note: "Bún, phở có thể là bữa ăn lành mạnh nếu có đủ rau và protein nạc"
              },
              {
                label: "Rau củ",
                good: "Khoai lang, khoai tây luộc/nướng - carbohydrate + chất xơ + vitamin",
                bad: "Khoai tây chiên, snack - nhiều chất béo, calo cao",
                note: "Cách chế biến quan trọng không kém loại thực phẩm"
              },
              {
                label: "Trái cây",
                good: "Trái cây nguyên quả - đường tự nhiên + chất xơ + vitamin",
                bad: "Nước ép đóng hộp, nước ngọt - nhiều đường, ít chất xơ",
                note: "Trái cây nguyên quả tốt hơn nước ép vì có chất xơ"
              },
            ]}
          />

          <Card>
            <h3 className="heading-4 mb-3">Tại sao chọn Carbohydrate nguyên cám?</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Ngũ cốc nguyên cám</strong> (gạo lứt, bánh mì nguyên cám) giữ lại 
                phần cám và mầm, chứa nhiều chất xơ, vitamin, và khoáng chất hơn so với 
                ngũ cốc tinh chế (gạo trắng, bánh mì trắng).
              </p>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
                <p className="text-sm text-green-900">
                  <strong>Lợi ích:</strong> Chất xơ giúp làm chậm hấp thu đường, giữ đường huyết ổn định, 
                  và giúp bạn cảm thấy no lâu hơn.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Clinical Application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Ứng dụng trong Dinh dưỡng lâm sàng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đái tháo đường</h3>
            <p className="text-body mb-3">
              Người đái tháo đường cần chú ý đặc biệt đến carbohydrate:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Chọn carbohydrate phức tạp:</strong> Gạo lứt, yến mạch, đậu thay vì 
                  gạo trắng, bánh mì trắng
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Phân bổ đều trong ngày:</strong> Ăn nhiều bữa nhỏ thay vì ít bữa lớn
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Kết hợp với protein và chất béo:</strong> Giúp làm chậm hấp thu đường
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Hạn chế đường đơn giản:</strong> Tránh nước ngọt, bánh kẹo, đường
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Xem thêm bài viết về{" "}
              <Link href="/knowledge/glycemic-index-load" className="text-blue-600 hover:underline">
                Chỉ số Đường huyết (GI) và GL
              </Link>
              {" "}để hiểu rõ hơn.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Cân nặng</h3>
            <p className="text-body">
              Carbohydrate phức tạp, giàu chất xơ giúp bạn cảm thấy no lâu hơn, 
              hỗ trợ quản lý cân nặng. Tránh carbohydrate tinh chế và đường đơn giản 
              có thể giúp giảm lượng calo không cần thiết.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Hoạt động Thể chất</h3>
            <p className="text-body">
              Carbohydrate là nguồn năng lượng chính cho hoạt động thể chất. 
              Người vận động nhiều có thể cần nhiều carbohydrate hơn, nhưng vẫn nên 
              chọn loại phức tạp, nguyên cám.
            </p>
          </Card>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến về Carbohydrate</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">"Carbohydrate làm tăng cân"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Carbohydrate không tự động làm tăng cân. 
              Vấn đề là loại và lượng carbohydrate bạn ăn. Carbohydrate phức tạp, 
              nguyên cám thực sự có thể hỗ trợ quản lý cân nặng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Người đái tháo đường không được ăn carbohydrate"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Người đái tháo đường vẫn cần carbohydrate, 
              nhưng cần chọn loại đúng và phân bổ đều. Carbohydrate phức tạp, giàu chất xơ 
              là lựa chọn tốt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Tất cả carbohydrate đều giống nhau"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Không phải! Carbohydrate phức tạp (gạo lứt, yến mạch) 
              khác rất nhiều so với carbohydrate đơn giản (đường, bánh kẹo) về cách chúng 
              ảnh hưởng đến sức khỏe.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các Chất Dinh dưỡng Đa lượng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate trong tổng thể dinh dưỡng
            </p>
          </Card>
          <Card href="/knowledge/glycemic-index-load">
            <h3 className="heading-5 mb-2">Chỉ số Đường huyết (GI) và GL</h3>
            <p className="text-sm text-gray-600">
              Hiểu cách carbohydrate ảnh hưởng đến đường huyết
            </p>
          </Card>
          <Card href="/knowledge/diabetes-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Đái tháo đường</h3>
            <p className="text-sm text-gray-600">
              Quản lý carbohydrate trong đái tháo đường
            </p>
          </Card>
          <Card href="/knowledge/dietary-fiber">
            <h3 className="heading-5 mb-2">Chất xơ trong Dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate nguyên cám thường giàu chất xơ
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate cung cấp năng lượng
            </p>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có đái tháo đường, 
          cần quản lý cân nặng, hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến 
          của chuyên gia dinh dưỡng để có kế hoạch ăn uống phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}
