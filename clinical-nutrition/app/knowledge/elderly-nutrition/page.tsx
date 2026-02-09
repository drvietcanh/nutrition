import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { Users, Heart, AlertTriangle, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người cao tuổi",
  description:
    "Hướng dẫn về dinh dưỡng cho người cao tuổi - nhu cầu đặc biệt, thách thức, và cách đảm bảo dinh dưỡng đầy đủ cho sức khỏe tốt ở tuổi già.",
  keywords: [
    "dinh dưỡng người cao tuổi",
    "elderly nutrition",
    "sarcopenia",
    "suy dinh dưỡng người già",
    "vitamin D",
    "calcium",
    "protein người già",
  ],
};

export default function ElderlyNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Người cao tuổi" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng cho Người cao tuổi
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Khi chúng ta già đi, nhu cầu dinh dưỡng và khả năng hấp thu thay đổi. 
          Hiểu về những thay đổi này giúp đảm bảo người cao tuổi nhận được dinh dưỡng đầy đủ 
          để duy trì sức khỏe và chất lượng cuộc sống tốt.
        </p>
      </header>

      {/* Key points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Người cao tuổi có nguy cơ cao bị <strong>suy dinh dưỡng</strong> do nhiều yếu tố
          </li>
          <li>
            Cần <strong>nhiều protein hơn</strong> để duy trì cơ bắp (sarcopenia)
          </li>
          <li>
            Cần chú ý <strong>vitamin D và calcium</strong> cho sức khỏe xương
          </li>
          <li>
            <strong>Uống đủ nước</strong> rất quan trọng (dễ bị thiếu nước)
          </li>
          <li>Thách thức: giảm cảm giác thèm ăn, khó nhai nuốt, bệnh mạn tính</li>
        </ul>
      </Callout>

      {/* Why different */}
      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Dinh dưỡng cho Người cao tuổi Khác biệt?</h2>
        <div className="space-y-4">
          <p className="text-body">
            Khi chúng ta già đi, cơ thể thay đổi theo nhiều cách ảnh hưởng đến dinh dưỡng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Thay đổi cơ thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm khối cơ (sarcopenia)</li>
                <li>• Giảm mật độ xương</li>
                <li>• Chuyển hóa chậm hơn</li>
                <li>• Giảm cảm giác khát nước</li>
                <li>• Thay đổi vị giác, khứu giác</li>
              </ul>
            </Card>
            <Card>
              <h3 className="heading-5 mb-2">Thách thức</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm cảm giác thèm ăn</li>
                <li>• Khó nhai, nuốt</li>
                <li>• Bệnh mạn tính</li>
                <li>• Thuốc ảnh hưởng vị giác</li>
                <li>• Khó khăn trong mua sắm, nấu ăn</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Key nutrients */}
      <section className="space-y-6">
        <h2 className="heading-2">Chất dinh dưỡng Quan trọng cho Người cao tuổi</h2>

        <Card className="border-blue-200 bg-blue-50">
          <h3 className="heading-3 text-blue-900 mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" aria-hidden="true" />
            Protein - Duy trì Cơ bắp
          </h3>
          <div className="space-y-3">
            <p className="text-body text-blue-900">
              Người cao tuổi cần <strong>nhiều protein hơn</strong> (1.0-1.2g/kg/ngày) 
              để duy trì khối cơ và ngăn ngừa sarcopenia (mất cơ do tuổi tác).
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn tốt:</p>
              <p className="text-sm text-gray-700">
                Thịt nạc, cá, trứng, sữa, đậu, đậu phụ. Nên phân bổ đều trong các bữa ăn.
              </p>
            </div>
            <div className="bg-blue-100 rounded-lg p-3 border border-blue-300">
              <p className="text-sm text-blue-900">
                <strong>Ví dụ:</strong> Người 70kg cần 70-84g protein/ngày = 
                1 quả trứng (6g) + 100g thịt gà (30g) + 1 ly sữa (8g) + 
                100g đậu phụ (15g) + các nguồn khác.
              </p>
            </div>
          </div>
        </Card>

        <Card className="border-green-200 bg-green-50">
          <h3 className="heading-3 text-green-900 mb-3">Vitamin D và Calcium - Sức khỏe Xương</h3>
          <div className="space-y-3">
            <p className="text-body text-green-900">
              Người cao tuổi dễ thiếu vitamin D (ít tiếp xúc ánh nắng, khả năng tổng hợp giảm) 
              và cần đủ calcium để duy trì xương chắc khỏe.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Vitamin D:</p>
                <p className="text-xs text-gray-700">
                  Nguồn: Ánh nắng, cá béo, lòng đỏ trứng, sữa bổ sung. 
                  Có thể cần bổ sung 800-1000 IU/ngày.
                </p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Calcium:</p>
                <p className="text-xs text-gray-700">
                  Nguồn: Sữa, sữa chua, phô mai, cá nhỏ ăn cả xương, đậu phụ, 
                  rau xanh đậm. Nhu cầu: 1000-1200mg/ngày.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="border-purple-200 bg-purple-50">
          <h3 className="heading-3 text-purple-900 mb-3">Nước - Dễ bị Thiếu nước</h3>
          <div className="space-y-3">
            <p className="text-body text-purple-900">
              Người cao tuổi dễ bị thiếu nước vì giảm cảm giác khát. 
              Thiếu nước có thể gây táo bón, suy nhược, và các vấn đề sức khỏe nghiêm trọng.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-sm text-gray-700">
                <strong>Khuyến nghị:</strong> Uống ít nhất 1.5-2 lít nước/ngày, 
                hoặc 6-8 ly nước. Có thể bao gồm nước, sữa, canh, trà (ít đường).
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-3 border border-purple-300">
              <p className="text-sm text-purple-900">
                <strong>Dấu hiệu thiếu nước:</strong> Khô miệng, mệt mỏi, nước tiểu sẫm màu, 
                táo bón. Nên uống nước đều đặn, không đợi đến khi khát.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Vitamin B12</h3>
          <p className="text-body-sm">
            Người cao tuổi có thể khó hấp thu vitamin B12, dẫn đến thiếu máu và các vấn đề thần kinh. 
            Nguồn: Thịt, cá, trứng, sữa. Có thể cần bổ sung nếu thiếu.
          </p>
        </Card>
      </section>

      {/* Common challenges */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Thách thức Phổ biến và Cách giải quyết
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Giảm cảm giác Thèm ăn</h3>
            <p className="text-body-sm mb-3">
              Nhiều người cao tuổi ăn ít hơn do giảm vị giác, khứu giác, hoặc các vấn đề sức khỏe.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Ăn nhiều bữa nhỏ:</strong> Thay vì 3 bữa lớn, ăn 5-6 bữa nhỏ trong ngày
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tăng mật độ dinh dưỡng:</strong> Chọn thực phẩm giàu dinh dưỡng, 
                  không chỉ nhiều calo
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Thêm gia vị:</strong> Dùng gia vị, thảo mộc để tăng hương vị 
                  (nếu không có hạn chế về muối)
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Khó nhai, Nuốt</h3>
            <p className="text-body-sm mb-3">
              Răng yếu, răng giả không vừa, hoặc khó nuốt có thể làm giảm lượng ăn vào.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Chế biến mềm:</strong> Nấu chín kỹ, cắt nhỏ, xay nhuyễn nếu cần
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Chọn thực phẩm dễ nhai:</strong> Trứng, cá, đậu phụ, cháo, súp
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Kiểm tra răng giả:</strong> đảm bảo răng giả vừa vặn và thoải mái
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Bệnh mạn tính và Thuốc</h3>
            <p className="text-body-sm mb-3">
              Nhiều người cao tuổi có bệnh mạn tính và dùng nhiều thuốc, có thể ảnh hưởng đến 
              cảm giác thèm ăn và hấp thu dinh dưỡng.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tham khảo bác sĩ:</strong> Nếu thuốc làm giảm cảm giác thèm ăn, 
                  thảo luận với bác sĩ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Điều chỉnh theo bệnh:</strong> Xem các bài viết về dinh dưỡng 
                  cho từng bệnh cụ thể
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Bổ sung nếu cần:</strong> Có thể cần bổ sung vitamin D, B12, 
                  hoặc các chất khác
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">4. Khó khăn trong Mua sắm và Nấu ăn</h3>
            <p className="text-body-sm mb-3">
              Người cao tuổi có thể gặp khó khăn trong việc mua sắm, nấu ăn do sức khỏe, 
              vận động, hoặc sống một mình.
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Hỗ trợ từ gia đình:</strong> Giúp mua sắm, chuẩn bị bữa ăn
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Dịch vụ giao đồ ăn:</strong> Sử dụng dịch vụ giao thực phẩm, 
                  bữa ăn sẵn lành mạnh
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Chuẩn bị sẵn:</strong> Nấu nhiều và chia phần, đông lạnh để dùng dần
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Practical tips */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Mẹo thực tế
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-3">Bữa ăn lành mạnh</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• đảm bảo có protein trong mỗi bữa</li>
              <li>• Nhiều rau củ (dễ nhai, nấu mềm)</li>
              <li>• Ngũ cốc nguyên cám (nếu có thể)</li>
              <li>• Sữa hoặc sản phẩm từ sữa</li>
              <li>• Uống nước đều đặn</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-3">Tăng mật độ dinh dưỡng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Thêm sữa vào cháo, súp</li>
              <li>• Dùng sữa chua, phô mai</li>
              <li>• Thêm trứng vào các món ăn</li>
              <li>• Dùng dầu tốt (dầu ô liu) khi nấu</li>
              <li>• Snack lành mạnh: quả hạch, sữa chua</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Sarcopenia */}
      <section className="space-y-4">
        <h2 className="heading-2">Sarcopenia - Mất cơ do Tuổi tác</h2>
        <Card className="border-amber-200 bg-amber-50">
          <h3 className="heading-4 text-amber-900 mb-3">Sarcopenia là gì?</h3>
          <p className="text-body text-amber-900 mb-3">
            <strong>Sarcopenia</strong> là tình trạng mất khối cơ và sức mạnh cơ do tuổi tác. 
            Điều này có thể dẫn đến yếu cơ, dễ té ngã, và giảm khả năng tự chăm sóc.
          </p>
          <div className="bg-white rounded-lg p-4 border border-amber-200">
            <p className="text-sm font-semibold text-gray-900 mb-2">Cách ngăn ngừa:</p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Đủ protein:</strong> 1.0-1.2g/kg/ngày, phân bổ đều trong ngày
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Vận động:</strong> Tập thể dục nhẹ nhàng, đi bộ, tập sức mạnh (nếu có thể)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Đủ vitamin D:</strong> Quan trọng cho sức khỏe cơ bắp
                </span>
              </li>
            </ul>
          </div>
        </Card>
      </section>

      {/* Related articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/needs-estimation">
            <h3 className="heading-5 mb-2">Ước tính nhu cầu dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Hiểu cách ước tính nhu cầu dinh dưỡng, có thể khác ở người cao tuổi
            </p>
          </Card>
          <Card href="/knowledge/myths-in-clinical-nutrition">
            <h3 className="heading-5 mb-2">Hiểu lầm & Quan niệm Sai</h3>
            <p className="text-sm text-gray-600">
              Một số hiểu lầm về dinh dưỡng người cao tuổi
            </p>
          </Card>
        </div>
      </section>

      {/* Safety disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho người cao tuổi cần được 
          cá nhân hóa dựa trên tình trạng sức khỏe, bệnh mạn tính, và khả năng. Hãy tham khảo 
          ý kiến của chuyên gia dinh dưỡng hoặc bác sĩ để có kế hoạch ăn uống phù hợp.
        </p>
      </Callout>
    </main>
  );
}
