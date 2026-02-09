import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Heart, AlertTriangle, Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Chất béo trong chế độ ăn: Hiểu các loại và Ảnh hưởng sức khỏe",
  description:
    "Tìm hiểu về các loại chất béo trong chế độ ăn - chất béo bão hòa, không bão hòa, trans fat - và cách chúng ảnh hưởng đến sức khỏe tim mạch và dinh dưỡng lâm sàng.",
  keywords: [
    "chất béo",
    "dietary fats",
    "trans fat",
    "chất béo bão hòa",
    "chất béo không bão hòa",
    "omega-3",
    "tim mạch",
    "rối loạn lipid máu",
  ],
};

export default function DietaryFatsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chất béo trong chế độ ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Chất béo trong chế độ ăn: Hiểu các loại và Ảnh hưởng sức khỏe
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chất béo là một phần quan trọng của chế độ ăn, nhưng không phải tất cả chất béo đều giống nhau. 
          Hiểu về các loại chất béo khác nhau giúp bạn đưa ra lựa chọn tốt cho sức khỏe.
        </p>
      </header>

      {/* Key points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất béo không bão hòa</strong> (dầu ô liu, cá, quả hạch) - tốt cho sức khỏe
          </li>
          <li>
            <strong>Chất béo bão hòa</strong> (thịt đỏ, bơ) - nên hạn chế
          </li>
          <li>
            <strong>Trans fat</strong> (thực phẩm chế biến) - nên tránh hoàn toàn
          </li>
          <li>Chất béo cần thiết cho cơ thể, nhưng loại và lượng rất quan trọng</li>
        </ul>
      </Callout>

      {/* What is Fat */}
      <section className="space-y-4">
        <h2 className="heading-2">Chất béo là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất béo</strong> cung cấp năng lượng, giúp hấp thu vitamin (A, D, E, K) 
            và bảo vệ cơ quan nội tạng.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Không có chất béo → cơ thể hoạt động kém.</strong>
            </p>
            <p className="text-sm text-blue-900 mt-2">
              Chất béo không phải là "kẻ thù". cơ thể chúng ta cần chất béo để hoạt động tốt.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Chức năng cơ thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Hấp thu vitamin A, D, E, K</strong> - không có chất béo, cơ thể không hấp thu được các vitamin này</li>
                <li>• <strong>Cung cấp năng lượng</strong> - 1g chất béo = 9 calo (nhiều hơn protein và carbohydrate)</li>
                <li>• <strong>Bảo vệ các cơ quan</strong> - như lớp đệm bảo vệ tim, gan, thận</li>
                <li>• Giữ ấm cơ thể</li>
              </ul>
            </Card>
            <Card>
              <h3 className="heading-5 mb-2">Sức khỏe</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Hỗ trợ sức khỏe não bộ</strong> - não cần chất béo để hoạt động</li>
                <li>• <strong>Giúp sản xuất hormone</strong> - nhiều hormone cần chất béo để tạo ra</li>
                <li>• Duy trì làn da khỏe mạnh</li>
                <li>• Hỗ trợ chức năng tế bào</li>
              </ul>
            </Card>
          </div>
          <p className="text-body-sm text-gray-600">
            Vấn đề không phải là chất béo, mà là <strong>loại chất béo</strong> và{" "}
            <strong>lượng chất béo</strong> bạn ăn.
          </p>
        </div>
      </section>

      {/* Not all Fats are the same */}
      <section className="space-y-4">
        <h2 className="heading-2">Không phải chất béo nào cũng giống nhau</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-green-200 bg-green-50/30">
            <h3 className="heading-4 mb-3 text-green-900">✅ Có loại nên dùng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Dầu thực vật</strong> - dầu đậu nành, dầu mè, dầu hướng dương</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Cá béo</strong> - cá thu, cá hồi, cá basa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Chất béo tự nhiên từ hạt, đậu</strong> - đậu phộng, mè</span>
              </li>
            </ul>
          </Card>

          <Card className="border-red-200 bg-red-50/30">
            <h3 className="heading-4 mb-3 text-red-900">❌ Có loại nên hạn chế</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Mỡ động vật nhiều</strong> - mỡ heo, mỡ bò</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Đồ chiên rán</strong> - khoai tây chiên, gà rán</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Thức ăn nhanh</strong> - hamburger, pizza nhiều phô mai</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Vietnamese fat Sources table */}
      <section className="space-y-4">
        <h2 className="heading-2">Bảng nguồn chất béo phổ biến ở Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Bảng dưới đây giúp bạn chọn lựa chất béo phù hợp trong bữa ăn Việt Nam.
          </p>
        </Callout>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nguồn chất béo</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Nhóm</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Dầu đậu nành</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dùng vừa phải, phổ biến ở Việt Nam</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Dầu mè</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Mùi thơm, tốt cho sức khỏe</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Dầu hướng dương</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Chất béo không bão hòa tốt</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá béo</strong> (cá thu, cá hồi, cá basa)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Có lợi tim mạch, giàu Omega-3</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu phộng</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Chất béo tự nhiên, ăn vừa phải</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Mỡ heo</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Hạn chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dùng ít, nhiều chất béo bão hòa</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bơ động vật</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Hạn chế</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều béo bão hòa</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đồ chiên</strong> (khoai tây chiên, gà rán)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tránh thường xuyên</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dễ tăng cân, nhiều calo</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thức ăn nhanh</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tránh thường xuyên</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều chất béo xấu, calo cao</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Does fat make you Fat */}
      <section className="space-y-4">
        <h2 className="heading-2">Ăn béo có làm béo không?</h2>
        <Card className="border-blue-200 bg-blue-50/30">
          <div className="space-y-3">
            <p className="text-body">
              <strong>👉 Không hẳn.</strong>
            </p>
            <p className="text-body-sm">
              Tăng cân phụ thuộc vào <strong>tổng năng lượng</strong> bạn ăn vào, không chỉ chất béo.
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200 mt-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">⚠️ Vấn đề thường là:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Ăn nhiều</strong> - tổng năng lượng vượt quá nhu cầu</li>
                <li>• <strong>Ít vận động</strong> - không đốt cháy năng lượng</li>
                <li>• <strong>Kết hợp nhiều đường + chất béo</strong> - như bánh ngọt, snack</li>
              </ul>
            </div>

            <ExampleBox variant="tip" title="Ví dụ dễ hiểu">
              <p className="text-sm mb-2">
                <strong>Ăn cá hấp với dầu mè</strong> (chất béo tốt) + rau + cơm = không làm tăng cân nếu lượng vừa phải
              </p>
              <p className="text-sm">
                <strong>Ăn nhiều đồ chiên</strong> (chất béo xấu) + nước ngọt + snack = dễ tăng cân vì quá nhiều calo
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Types of Fats */}
      <section className="space-y-6">
        <h2 className="heading-2">Các loại Chất béo</h2>

        {/* Unsaturated fats - Good */}
        <Card className="border-green-200 bg-green-50">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-green-900 mb-2">Chất béo không bão hòa (Tốt)</h3>
              <p className="text-body text-green-900 mb-3">
                Đây là loại chất béo tốt cho sức khỏe. Nên chiếm phần lớn chất béo trong chế độ ăn.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">không bão hòa đơn</h4>
              <p className="text-sm text-gray-700 mb-2">
                Giúp giảm cholesterol xấu (LDL) và tăng cholesterol tốt (HDL).
              </p>
              <p className="text-xs text-gray-600">
                <strong>Nguồn:</strong> Dầu ô liu, dầu đậu phộng, quả bơ, quả hạch (hạnh nhân, 
                hạt điều), hạt (hạt bí, hạt hướng dương)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">không bão hòa đa</h4>
              <p className="text-sm text-gray-700 mb-2">
                Quan trọng cho sức khỏe tim mạch và não bộ.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Nguồn:</strong> Cá béo (cá hồi, cá thu, cá trích), dầu hạt cải, 
                quả óc chó, hạt lanh, Omega-3, Omega-6
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded border border-green-200">
            <p className="text-sm text-gray-700">
              <strong>Omega-3:</strong> đặc biệt quan trọng, có trong cá béo. Giúp giảm viêm, 
            hỗ trợ sức khỏe tim và não. Nên ăn cá 2-3 lần/tuần hoặc bổ sung.
            </p>
          </div>

          <ExampleBox title="Ví dụ thực tế về Chất béo Tốt" className="mt-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">Bữa sáng:</p>
                <p className="text-sm text-gray-700">
                  Bánh mì với dầu ô liu + quả bơ (chất béo không bão hòa đơn)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa trưa:</p>
                <p className="text-sm text-gray-700">
                  Cá hồi nướng (Omega-3) + salad với dầu hạt cải
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa phụ:</p>
                <p className="text-sm text-gray-700">
                  Một nắm hạnh nhân hoặc quả óc chó (chất béo tốt)
                </p>
              </div>
            </div>
          </ExampleBox>
        </Card>

        {/* Saturated fats - Limit */}
        <Card className="border-yellow-200 bg-yellow-50">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-yellow-900 mb-2">Chất béo bão hòa (Nên hạn chế)</h3>
              <p className="text-body text-yellow-900 mb-3">
                Có thể làm tăng cholesterol xấu (LDL) và nguy cơ bệnh tim. 
                Nên hạn chế, không quá 10% tổng năng lượng hàng ngày.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguồn:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Thịt đỏ (thịt bò, thịt heo) - đặc biệt phần mỡ</li>
              <li>• Bơ, mỡ động vật</li>
              <li>• Sữa nguyên kem, phô mai</li>
              <li>• Dầu dừa, dầu cọ (mặc dù có một số tranh cãi)</li>
              <li>• Thực phẩm chế biến sẵn</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Lưu ý:</strong> Không cần tránh hoàn toàn, nhưng nên ăn với lượng vừa phải 
              và chọn nguồn chất béo tốt hơn khi có thể.
            </p>
          </div>
        </Card>

        {/* Trans fats - Avoid */}
        <Card className="border-red-200 bg-red-50">
          <div className="flex items-start gap-3 mb-4">
            <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-red-900 mb-2">Trans fat (Nên tránh hoàn toàn)</h3>
              <p className="text-body text-red-900 mb-3">
                Đây là loại chất béo xấu nhất. Làm tăng cholesterol xấu (LDL), 
                giảm cholesterol tốt (HDL), và tăng nguy cơ bệnh tim, đột quỵ.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">Trans fat là gì?</h4>
              <p className="text-sm text-gray-700 mb-3">
                Trans fat được tạo ra khi dầu thực vật được xử lý bằng quá trình gọi là "hydrogen hóa" 
                để làm cho chúng cứng hơn và bảo quản lâu hơn.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Vấn đề:</strong> cơ thể chúng ta không thể xử lý tốt trans fat, 
                dẫn đến nhiều vấn đề sức khỏe.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">Nguồn trans Fat:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Thực phẩm chế biến sẵn:</strong> Bánh quy, bánh ngọt, bánh rán, 
                    bánh kem, snack đóng gói
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Margarine cứng:</strong> (một số loại, kiểm tra nhãn)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Thực phẩm chiên:</strong> Khoai tây chiên, gà rán, đồ chiên rán
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Shortening:</strong> (mỡ thực vật) dùng trong làm bánh
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm font-semibold text-red-900 mb-2">
                Cách tránh Trans fat:
              </p>
              <ul className="space-y-1 text-sm text-red-800">
                <li>✓ Đọc nhãn thực phẩm - tìm "trans fat", "partially hydrogenated oil"</li>
                <li>✓ Tránh thực phẩm chế biến sẵn, đóng gói</li>
                <li>✓ Chọn thực phẩm tự nhiên, chưa qua chế biến</li>
                <li>✓ Tự nấu ăn ở nhà khi có thể</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Clinical application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Ứng dụng trong Dinh dưỡng lâm sàng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Rối loạn Lipid máu (Mỡ máu cao)</h3>
            <p className="text-body mb-3">
              Đối với người có cholesterol cao hoặc rối loạn lipid máu:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tăng chất béo không bão hòa:</strong> Dầu ô liu, cá, quả hạch, quả bơ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Giảm chất béo bão hòa:</strong> Hạn chế thịt đỏ, bơ, thực phẩm từ sữa nguyên kem
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tránh hoàn toàn trans fat:</strong> Đọc nhãn, tránh thực phẩm chế biến sẵn
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bệnh tim mạch</h3>
            <p className="text-body">
              Chế độ ăn Địa trung hải (nhiều dầu ô liu, cá, quả hạch) đã được chứng minh 
              giúp giảm nguy cơ bệnh tim. Nguyên tắc chính: thay thế chất béo bão hòa bằng 
              chất béo không bão hòa.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Viêm và Bệnh mạn tính</h3>
            <p className="text-body">
              Omega-3 (từ cá, quả óc chó, hạt lanh) có tác dụng chống viêm, có thể hỗ trợ 
              trong các bệnh viêm mạn tính như viêm khớp, bệnh tim.
            </p>
          </Card>
        </div>
      </section>

      {/* Practical application Vietnamese */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Áp dụng thực tế trong Bữa ăn Việt Nam
        </h2>
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="heading-4 mb-3">Nguyên tắc cơ bản</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Dùng dầu thực vật</strong> - dầu đậu nành, dầu mè, dầu hướng dương thay vì mỡ heo
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế chiên rán</strong> - thay bằng luộc, hấp, kho, xào ít dầu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người tim mạch → càng cần chọn chất béo kỹ</strong> - ưu tiên cá, dầu thực vật, tránh mỡ động vật
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Cách chọn chất béo trong món ăn Việt Nam</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">✅ Cách tốt:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Cá kho</strong> - dùng ít dầu, cá tự nhiên có chất béo tốt</li>
                <li>• <strong>Rau xào</strong> - dùng dầu đậu nành hoặc dầu mè, xào nhanh</li>
                <li>• <strong>Canh chua</strong> - ít chất béo, tốt cho sức khỏe</li>
                <li>• <strong>Thịt gà luộc</strong> - bỏ da, ít chất béo</li>
              </ul>
            </div>
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">❌ Nên hạn chế:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• <strong>Thịt kho mỡ</strong> - nhiều mỡ heo, chất béo bão hòa</li>
                <li>• <strong>Đồ chiên</strong> - chả giò chiên, khoai tây chiên</li>
                <li>• <strong>Thịt nướng mỡ</strong> - thịt ba chỉ nướng, nhiều mỡ</li>
              </ul>
            </div>
          </div>
        </Card>

        <ComparisonCard
          goodTitle="Nên làm"
          goodItems={[
            "Dùng dầu đậu nành, dầu mè, dầu hướng dương để nấu ăn",
            "Ăn cá 2-3 lần/tuần (cá thu, cá basa, cá hồi)",
            "Luộc, hấp, kho thay vì chiên rán",
            "Chọn thịt nạc, bỏ da và mỡ",
            "Đọc nhãn thực phẩm để tránh trans fat"
          ]}
          badTitle="Nên tránh"
          badItems={[
            "Dùng nhiều mỡ heo, mỡ động vật",
            "Đồ chiên rán thường xuyên (chả giò, khoai tây chiên)",
            "Thức ăn nhanh, thực phẩm chế biến sẵn",
            "Thịt đỏ nhiều mỡ, thường xuyên",
            "Bánh kẹo, snack đóng gói"
          ]}
        />
      </section>

      {/* How much fat */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên ăn bao nhiêu Chất béo?</h2>
        <Card>
          <p className="text-body mb-4">
            Theo khuyến nghị, chất béo nên chiếm <strong>20-35%</strong> tổng năng lượng hàng ngày:
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
              <span className="font-medium">Chất béo không bão hòa</span>
              <span className="text-green-700 font-semibold">Phần lớn (15-25%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-200">
              <span className="font-medium">Chất béo bão hòa</span>
              <span className="text-yellow-700 font-semibold">Hạn chế (&lt;10%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded border border-red-200">
              <span className="font-medium">Trans fat</span>
              <span className="text-red-700 font-semibold">Tránh hoàn toàn (0%)</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Ví dụ:</strong> Nếu bạn cần 2000 kcal/ngày, chất béo nên cung cấp 400-700 kcal 
            (khoảng 44-78g chất béo), và phần lớn nên là chất béo không bão hòa.
          </p>
        </Card>
      </section>

      {/* Related articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('dietary-fats').map((article) => (
            <Card key={article.slug} href={article.href}>
              <h3 className="heading-5 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có rối loạn lipid máu, 
          bệnh tim mạch, hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến của chuyên gia 
          dinh dưỡng hoặc bác sĩ để có kế hoạch ăn uống phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}
