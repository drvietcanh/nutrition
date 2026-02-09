import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Leaf, Heart, Lightbulb, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Chất xơ trong Dinh dưỡng lâm sàng",
  description:
    "Tìm hiểu về chất xơ - chất xơ hòa tan và không hòa tan, lợi ích sức khỏe, nhu cầu, nguồn thực phẩm, và cách áp dụng trong dinh dưỡng lâm sàng.",
  keywords: [
    "chất xơ",
    "dietary fiber",
    "chất xơ hòa tan",
    "chất xơ không hòa tan",
    "tiêu hóa",
    "đái tháo đường",
    "tim mạch",
  ],
};

export default function DietaryFiberPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chất xơ trong Dinh dưỡng lâm sàng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Chất xơ trong Dinh dưỡng lâm sàng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chất xơ là một phần quan trọng của chế độ ăn lành mạnh, nhưng nhiều người không ăn đủ. 
          Tìm hiểu về các loại chất xơ, lợi ích sức khỏe, và cách tăng lượng chất xơ trong chế độ ăn.
        </p>
      </header>

      {/* Key points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất xơ hòa tan</strong> - giúp giảm cholesterol và ổn định đường huyết
          </li>
          <li>
            <strong>Chất xơ không hòa tan</strong> - giúp tiêu hóa và ngăn ngừa táo bón
          </li>
          <li>Nhu cầu: 25-30g/ngày cho người lớn</li>
          <li>Nguồn tốt: rau, trái cây, ngũ cốc nguyên cám, đậu</li>
        </ul>
      </Callout>

      {/* What is Fiber */}
      <section className="space-y-4">
        <h2 className="heading-2">Chất xơ là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất xơ</strong> là phần của thực vật không tiêu hóa, nhưng rất cần cho ruột.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Có thể ví:</strong> Chất xơ là "chổi quét" của hệ tiêu hóa. 
              Nó giúp làm sạch đường ruột, đẩy thức ăn đi qua hệ tiêu hóa một cách trơn tru.
            </p>
          </div>

          <p className="text-body-sm text-gray-700">
            Không giống như các chất dinh dưỡng khác (protein, carbohydrate, chất béo) được hấp thu, 
            chất xơ đi qua hệ tiêu hóa và có nhiều tác dụng quan trọng cho sức khỏe.
          </p>
        </div>
      </section>

      {/* Benefits of Fiber */}
      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích của chất xơ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-green-200 bg-green-50/30">
            <h3 className="heading-5 mb-2">Giúp tiêu hóa tốt</h3>
            <p className="text-sm text-gray-700">
              Chất xơ giúp thức ăn di chuyển qua ruột dễ dàng, ngăn ngừa táo bón và giữ cho hệ tiêu hóa khỏe mạnh.
            </p>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <h3 className="heading-5 mb-2">Giảm táo bón</h3>
            <p className="text-sm text-gray-700">
              Chất xơ không hòa tan giúp phân mềm và dễ đi ngoài, đặc biệt quan trọng cho người hay bị táo bón.
            </p>
          </Card>

          <Card className="border-blue-200 bg-blue-50/30">
            <h3 className="heading-5 mb-2">Giúp đường huyết tăng chậm</h3>
            <p className="text-sm text-gray-700">
              Chất xơ làm chậm hấp thu đường, giúp đường huyết tăng chậm và ổn định hơn. 
              Rất tốt cho người đái tháo đường.
            </p>
          </Card>

          <Card className="border-blue-200 bg-blue-50/30">
            <h3 className="heading-5 mb-2">Hỗ trợ giảm mỡ máu</h3>
            <p className="text-sm text-gray-700">
              Chất xơ hòa tan giúp giảm cholesterol xấu (LDL), từ đó giảm nguy cơ bệnh tim mạch.
            </p>
          </Card>
        </div>
      </section>

      {/* Not more is Better */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Không phải ăn càng nhiều chất xơ càng tốt
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-red-200 bg-red-50/30">
            <h3 className="heading-4 mb-3 text-red-900">❌ Thiếu chất xơ:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Táo bón</strong> - khó đi ngoài, phân cứng</li>
              <li>• <strong>Đường huyết dao động</strong> - tăng nhanh sau ăn</li>
              <li>• <strong>Tăng mỡ máu</strong> - cholesterol cao</li>
              <li>• Dễ tăng cân - không no lâu</li>
            </ul>
          </Card>

          <Card className="border-amber-200 bg-amber-50/30">
            <h3 className="heading-4 mb-3 text-amber-900">⚠️ Quá nhiều chất xơ:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Đầy bụng</strong> - khó chịu, chướng bụng</li>
              <li>• <strong>Khó tiêu</strong> - đầy hơi, khí trong ruột</li>
              <li>• <strong>Không phù hợp người già</strong> - hệ tiêu hóa yếu</li>
              <li>• <strong>Không phù hợp bệnh ruột</strong> - viêm ruột, hẹp ruột</li>
            </ul>
          </Card>
        </div>

        <Callout variant="info" title="👉 Vì vậy">
          <p className="text-body-sm">
            <strong>Ăn đủ chất xơ</strong> (25-30g/ngày) là tốt nhất. Không cần quá nhiều, 
            nhưng cũng không nên thiếu. Mỗi người có nhu cầu khác nhau tùy theo tuổi và tình trạng sức khỏe.
          </p>
        </Callout>
      </section>

      {/* Vietnamese fiber Table */}
      <section className="space-y-4">
        <h2 className="heading-2">Bảng chất xơ trong thực phẩm Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Hàm lượng chất xơ dưới đây là ước tính, có thể thay đổi tùy theo cách chế biến và từng loại thực phẩm.
          </p>
        </Callout>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Hàm lượng xơ</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau xanh</strong> (rau muống, rau cải, rau lang)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nên ăn hàng ngày, 1-2 bát/ngày</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau muống</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dễ ăn, phổ biến</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu xanh</strong> (nấu chín)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">No lâu, tốt cho đường huyết</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu đen, đậu đỏ</strong> (nấu chín)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều chất xơ, giàu dinh dưỡng</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Táo</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tốt cho ruột, nên ăn cả vỏ</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chuối</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Không nên ăn quá nhiều (1-2 quả/ngày)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Ổi</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Trái cây Việt Nam giàu chất xơ</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Gạo lứt</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tốt hơn gạo trắng (gạo trắng ít chất xơ)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Khoai lang</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nhiều chất xơ, tốt cho tiêu hóa</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu bắp, mướp, bầu</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Rau quả Việt Nam giàu chất xơ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Fiber and Blood sugar */}
      <section className="space-y-4">
        <h2 className="heading-2">Chất xơ & Đường huyết</h2>
        <Card className="border-blue-200 bg-blue-50/30">
          <div className="space-y-3">
            <p className="text-body">
              Chất xơ có vai trò quan trọng trong kiểm soát đường huyết:
            </p>
            
            <div className="bg-white rounded-lg p-4 border border-blue-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Có chất xơ → đường huyết tăng chậm</strong> - chất xơ làm chậm hấp thu đường vào máu</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Bữa ăn nhiều rau → GL thấp hơn</strong> - rau giúp giảm tải lượng đường huyết của bữa ăn</span>
                </li>
              </ul>
            </div>

            <Callout variant="info" title="👉 Đây là lý do nên ăn rau trước hoặc cùng bữa chính">
              <p className="text-body-sm">
                Khi bạn ăn rau trước hoặc cùng với cơm, chất xơ trong rau sẽ làm chậm hấp thu đường từ cơm, 
                giúp đường huyết tăng chậm và ổn định hơn. Điều này đặc biệt quan trọng cho người đái tháo đường.
              </p>
            </Callout>

            <ExampleBox variant="tip" title="Ví dụ thực tế">
              <p className="text-sm mb-2">
                <strong>Bữa ăn tốt:</strong> Ăn rau luộc trước → sau đó ăn cơm + thịt = đường huyết tăng chậm
              </p>
              <p className="text-sm">
                <strong>Bữa ăn không tốt:</strong> Chỉ ăn cơm + thịt, không có rau = đường huyết tăng nhanh
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Types of Fiber */}
      <section className="space-y-6">
        <h2 className="heading-2">Hai loại Chất xơ Chính</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soluble fiber */}
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-3 text-blue-900 mb-3">Chất xơ Hòa tan</h3>
            <p className="text-body text-blue-900 mb-4">
              Hòa tan trong nước, tạo thành gel trong ruột. Giúp làm chậm tiêu hóa và hấp thu.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm cholesterol xấu (LDL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ổn định đường huyết (tốt cho đái tháo đường)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp cảm thấy no lâu hơn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ sức khỏe tim mạch</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn thực phẩm:</p>
                <p className="text-xs text-gray-700">
                  Yến mạch, lúa mạch, đậu, đậu lăng, táo, cam, cà rốt, 
                  bông cải xanh, quả bơ. <strong>Ở Việt Nam:</strong> Đậu đen, đậu đỏ, đậu bắp, 
                  mướp, bầu, cà chua, cà rốt.
                </p>
              </div>
            </div>
          </Card>

          {/* Insoluble fiber */}
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-3 text-green-900 mb-3">Chất xơ Không hòa tan</h3>
            <p className="text-body text-green-900 mb-4">
              Không hòa tan trong nước, giúp thức ăn di chuyển nhanh hơn qua hệ tiêu hóa.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ngăn ngừa và điều trị táo bón</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp phân mềm và dễ đi ngoài</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm nguy cơ bệnh trĩ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ sức khỏe đường ruột</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn thực phẩm:</p>
                <p className="text-xs text-gray-700">
                  Gạo lứt, bánh mì nguyên cám, các loại hạt, rau xanh, 
                  cà rốt, cà chua, dưa chuột. <strong>Ở Việt Nam:</strong> Rau muống, rau cải, 
                  rau lang, đậu bắp, mướp, bầu, khoai lang.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <strong>Lưu ý:</strong> Hầu hết thực phẩm chứa cả hai loại chất xơ, 
            nhưng một số có nhiều loại này hơn loại kia. Điều quan trọng là ăn đa dạng 
            các thực phẩm giàu chất xơ để nhận được cả hai loại.
          </p>
        </div>
      </section>

      {/* Health benefits */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-600" aria-hidden="true" />
          Lợi ích sức khỏe của Chất xơ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tim mạch</h3>
            <p className="text-body-sm">
              Chất xơ hòa tan giúp giảm cholesterol xấu (LDL), từ đó giảm nguy cơ bệnh tim 
              và đột quỵ. Ăn đủ chất xơ có thể giảm nguy cơ bệnh tim đến 30%.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Đái tháo đường</h3>
            <p className="text-body-sm">
              Chất xơ làm chậm hấp thu đường, giúp đường huyết tăng chậm và ổn định hơn. 
              Điều này đặc biệt quan trọng cho người đái tháo đường.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tiêu hóa</h3>
            <p className="text-body-sm">
              Chất xơ giúp ngăn ngừa táo bón, giảm nguy cơ bệnh trĩ, và có thể giảm nguy cơ 
              ung thư đại tràng. Nó cũng hỗ trợ vi khuẩn tốt trong ruột.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Cân nặng</h3>
            <p className="text-body-sm">
              Thực phẩm giàu chất xơ thường ít calo hơn và giúp bạn cảm thấy no lâu hơn, 
              hỗ trợ quản lý cân nặng.
            </p>
          </Card>
        </div>
      </section>

      {/* How much fiber */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên ăn bao nhiêu Chất xơ?</h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nam giới</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">30-38g/ngày</p>
                <p className="text-xs text-gray-600">Tùy theo tuổi và mức độ hoạt động</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nữ giới</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">21-25g/ngày</p>
                <p className="text-xs text-gray-600">Tùy theo tuổi và mức độ hoạt động</p>
              </div>
            </div>

            <ExampleBox title="Ví dụ thực tế để đạt 25g chất xơ/ngày" className="mt-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Ví dụ 1 (Tổng quát):</strong>
                </p>
                <p className="text-sm text-gray-700">
                  <strong>1 bát yến mạch</strong> (4g) + <strong>1 quả táo</strong> (4g) + 
                  <strong>1 bát đậu</strong> (8g) + <strong>1 bát rau xanh</strong> (5g) + 
                  <strong>1 lát bánh mì nguyên cám</strong> (2g) + <strong>1 quả chuối</strong> (3g)
                </p>
                <p className="text-sm font-semibold text-green-700 mb-3">
                  = 26g chất xơ (đạt mục tiêu!)
                </p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Ví dụ 2 (món ăn Việt Nam):</strong>
                </p>
                <p className="text-sm text-gray-700">
                  <strong>1 bát cơm gạo lứt</strong> (3g) + <strong>1 bát canh rau muống</strong> (3g) + 
                  <strong>1 đĩa rau cải luộc</strong> (4g) + <strong>1 bát đậu đen</strong> (8g) + 
                  <strong>1 quả ổi</strong> (5g) + <strong>1 quả xoài</strong> (3g)
                </p>
                <p className="text-sm font-semibold text-green-700">
                  = 26g chất xơ (đạt mục tiêu với món ăn Việt Nam!)
                </p>
              </div>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Application in Vietnamese meals */}
      <section className="space-y-4">
        <h2 className="heading-2">Áp dụng trong bữa ăn Việt Nam</h2>
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="heading-4 mb-3">Nguyên tắc cơ bản</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mỗi bữa có rau</strong> - không cần quá nhiều, chỉ cần 1-2 món rau mỗi bữa
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không cần quá nhiều</strong> - 25-30g/ngày là đủ, không cần ăn quá mức
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên đa dạng rau củ</strong> - ăn nhiều loại rau khác nhau để có đủ chất xơ và dinh dưỡng
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Bữa ăn Việt Nam Có đủ Chất xơ</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Bữa trưa mẫu:</p>
              <p className="text-sm text-gray-700">
                1 bát cơm + thịt kho + <strong>canh rau muống</strong> + <strong>rau cải luộc</strong> = ~8-10g chất xơ
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Bữa tối mẫu:</p>
              <p className="text-sm text-gray-700">
                1 bát cơm gạo lứt + cá kho + <strong>canh mướp</strong> + <strong>đậu bắp luộc</strong> = ~10-12g chất xơ
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Bữa phụ:</p>
              <p className="text-sm text-gray-700">
                <strong>1 quả ổi</strong> hoặc <strong>1 quả táo</strong> = ~4-5g chất xơ
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
              <p className="text-sm font-semibold text-green-900">
                Tổng trong ngày: ~25-30g chất xơ - đạt mục tiêu!
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Practical tips */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách tăng lượng Chất xơ trong chế độ ăn
        </h2>
        <div className="space-y-4">
          <TipCard
            title="Mẹo tăng chất xơ"
            tips={[
              "Bắt đầu từ từ: Tăng dần lượng chất xơ để cơ thể quen dần. Tăng đột ngột có thể gây đầy hơi, chướng bụng",
              "Uống nhiều nước: Chất xơ cần nước để hoạt động tốt. Nên uống ít nhất 8 ly nước/ngày",
              "Ăn trái cây và rau cả vỏ: Vỏ thường chứa nhiều chất xơ (như táo, khoai tây)",
              "Chọn ngũ cốc nguyên cám: Gạo lứt, bánh mì nguyên cám, yến mạch thay vì các sản phẩm tinh chế",
              "Thêm đậu vào bữa ăn: Đậu, đậu lăng là nguồn chất xơ tuyệt vời",
              "Ăn trái cây thay vì uống nước ép: Trái cây nguyên quả có nhiều chất xơ hơn nước ép"
            ]}
          />

          <ExampleBox title="Ví dụ bữa ăn giàu chất xơ trong ngày">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">Bữa sáng:</p>
                <p className="text-sm text-gray-700">
                  Yến mạch với quả mọng và hạt chia (~8g chất xơ) hoặc 
                  <strong> Cháo đậu đen + rau thơm (~6g chất xơ)</strong>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa trưa:</p>
                <p className="text-sm text-gray-700">
                  Salad với đậu, rau xanh, và bánh mì nguyên cám (~12g chất xơ) hoặc
                  <strong> Cơm + canh rau muống + đậu bắp luộc (~10g chất xơ)</strong>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa tối:</p>
                <p className="text-sm text-gray-700">
                  Cơm gạo lứt với thịt và rau xanh (~6g chất xơ) hoặc
                  <strong> Cơm + canh mướp + rau cải xào (~8g chất xơ)</strong>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Trái cây:</p>
                <p className="text-sm text-gray-700">
                  <strong>Ổi, xoài, thanh long</strong> - trái cây Việt Nam giàu chất xơ (~5g chất xơ)
                </p>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-200 mt-3">
                <p className="text-sm font-semibold text-green-900">
                  Tổng cộng: ~26-29g chất xơ - đạt mục tiêu hàng ngày!
                </p>
              </div>
            </div>
          </ExampleBox>
        </div>
      </section>

      {/* Clinical considerations */}
      <section className="space-y-4">
        <h2 className="heading-2">Lưu ý trong Dinh dưỡng lâm sàng</h2>
        <div className="space-y-4">
          <Callout variant="warning" title="Một số tình trạng cần cẩn thận">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Bệnh viêm ruột (IBD):</strong> Trong giai đoạn cấp, có thể cần giảm chất xơ 
                tạm thời. tham khảo ý kiến chuyên gia.
              </li>
              <li>
                <strong>Hẹp ruột:</strong> Có thể cần hạn chế chất xơ không hòa tan.
              </li>
              <li>
                <strong>Sau phẫu thuật tiêu hóa:</strong> Cần điều chỉnh theo hướng dẫn của bác sĩ.
              </li>
              <li>
                <strong>Người cao tuổi:</strong> Có thể cần tăng chất xơ từ từ và đảm bảo uống đủ nước.
              </li>
            </ul>
          </Callout>

          <Card>
            <h3 className="heading-4 mb-3">Tác dụng phụ có thể gặp</h3>
            <p className="text-body-sm mb-3">
              Khi tăng lượng chất xơ đột ngột, bạn có thể gặp:
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Đầy hơi, chướng bụng</li>
              <li>• Khí trong ruột</li>
              <li>• Táo bón (nếu không uống đủ nước)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              <strong>Giải pháp:</strong> Tăng từ từ, uống nhiều nước, và cơ thể sẽ quen dần.
            </p>
          </Card>
        </div>
      </section>

      {/* Related articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('dietary-fiber').map((article) => (
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
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có các vấn đề về tiêu hóa 
          hoặc các bệnh lý khác, hãy tham khảo ý kiến của chuyên gia dinh dưỡng hoặc bác sĩ 
          trước khi thay đổi đáng kể lượng chất xơ trong chế độ ăn.
        </p>
      </Callout>
    </main>
  );
}
