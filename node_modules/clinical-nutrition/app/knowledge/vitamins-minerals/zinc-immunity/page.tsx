import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Shield, CheckCircle2, AlertCircle, Beef, Leaf, Wheat } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kẽm và Miễn dịch",
  description:
    "Hiểu về kẽm - khoáng chất quan trọng cho hệ miễn dịch, chữa lành vết thương, và tăng trưởng. Nguồn thực phẩm giàu kẽm.",
  keywords: [
    "kẽm",
    "zinc",
    "miễn dịch",
    "chữa lành",
    "dinh dưỡng",
  ],
};

export default function ZincImmunityPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Kẽm và Miễn dịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Kẽm và Miễn dịch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Kẽm là khoáng chất quan trọng cho hệ miễn dịch, giúp cơ thể chống lại nhiễm trùng. 
          Kẽm cũng cần thiết cho chữa lành vết thương, tăng trưởng, và nhiều chức năng khác. 
          Thiếu kẽm có thể làm suy yếu hệ miễn dịch.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Kẽm</strong> quan trọng cho hệ miễn dịch và chữa lành vết thương
          </li>
          <li>
            <strong>Thịt, hải sản, đậu, hạt</strong> là nguồn kẽm tốt
          </li>
          <li>
            Kẽm từ thịt dễ hấp thu hơn kẽm từ thực vật
          </li>
          <li>
            Thiếu kẽm làm suy yếu hệ miễn dịch, dễ nhiễm trùng
          </li>
          <li>
            Quá nhiều kẽm cũng có thể gây hại
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Kẽm là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Kẽm</strong> là một khoáng chất vi lượng (cần ít nhưng quan trọng) đóng vai trò trong nhiều chức năng của cơ thể. 
            Kẽm đặc biệt quan trọng cho hệ miễn dịch - hệ thống bảo vệ cơ thể khỏi bệnh tật.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Kẽm giống như "vũ khí" của hệ miễn dịch. 
              Khi bạn bị cảm lạnh hoặc vết thương, kẽm giúp cơ thể tạo ra các tế bào miễn dịch 
              và chữa lành nhanh hơn. Không có đủ kẽm, hệ miễn dịch yếu đi, dễ bị bệnh.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Kẽm</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ hệ miễn dịch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chữa lành vết thương</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tăng trưởng và phát triển</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng vị giác và khứu giác</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Điều gì xảy ra khi thiếu?</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hệ miễn dịch yếu, dễ nhiễm trùng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Vết thương chậm lành</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mất vị giác, khứu giác</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ở trẻ em: chậm lớn</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Thực phẩm Giàu Kẽm</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3 flex items-center gap-2">
              <Beef className="w-5 h-5" aria-hidden="true" />
              Thịt và Hải sản (Nguồn tốt nhất)
            </h3>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Thịt bò:</strong> 100g ≈ 5-7mg kẽm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Thịt heo:</strong> 100g ≈ 2-3mg kẽm</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Hàu:</strong> 100g ≈ 16-20mg kẽm - nguồn rất tốt!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Tôm, cua:</strong> 100g ≈ 2-3mg kẽm</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Nguồn Khác</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Wheat className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Hạt bí:</strong> 30g ≈ 2-3mg kẽm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wheat className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Hạt điều:</strong> 30g ≈ 1.5-2mg kẽm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Đậu:</strong> 100g nấu chín ≈ 1-2mg kẽm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Wheat className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Ngũ cốc nguyên cám:</strong> 100g ≈ 2-3mg kẽm</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Lưu ý:</p>
                <p className="text-xs text-gray-700">
                  Kẽm từ thực vật khó hấp thu hơn. Người ăn chay cần ăn nhiều hơn hoặc bổ sung.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần Bao nhiêu Kẽm?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu kẽm không cao, nhưng quan trọng là phải có đủ:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nam giới</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">11 mg/ngày</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nữ giới</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">8 mg/ngày</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ mang thai</h3>
                <p className="text-2xl font-bold text-purple-600 mb-1">11 mg/ngày</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ cho con bú</h3>
                <p className="text-2xl font-bold text-amber-600 mb-1">12 mg/ngày</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-green-900">
                <strong>Ví dụ:</strong> 100g thịt bò (5-7mg) + 30g hạt bí (2-3mg) = ~7-10mg kẽm - đủ cho hầu hết mọi người.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Kẽm và Hệ miễn dịch</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Kẽm đóng vai trò quan trọng trong hệ miễn dịch:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-6">
              <li>Giúp tạo ra các tế bào miễn dịch (tế bào T, tế bào B)</li>
              <li>Hỗ trợ chức năng của các tế bào miễn dịch</li>
              <li>Giúp chống lại vi khuẩn và virus</li>
              <li>Hỗ trợ chữa lành vết thương và viêm</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Nghiên cứu cho thấy:</strong> Bổ sung kẽm trong vòng 24 giờ đầu khi bị cảm lạnh 
                có thể giúp giảm thời gian bị bệnh. Tuy nhiên, không nên lạm dụng - quá nhiều kẽm có thể gây hại.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế</h2>
        <Card>
          <h3 className="heading-5 mb-2">Ví dụ: Người hay bị cảm lạnh</h3>
          <p className="text-body-sm mb-2">
            <strong>Tình huống:</strong> Chị Mai, 35 tuổi, ăn chay, hay bị cảm lạnh, vết thương chậm lành. 
            Có thể thiếu kẽm.
          </p>
          <p className="text-body-sm mb-2">
            <strong>Giải pháp:</strong>
          </p>
          <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
            <li>Ăn hạt bí, hạt điều thường xuyên (30g/ngày)</li>
            <li>Ăn đậu, đậu lăng mỗi ngày</li>
            <li>Chọn ngũ cốc nguyên cám</li>
            <li>Nếu vẫn thiếu, tham khảo bác sĩ về viên bổ sung kẽm</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn thịt, hải sản:</strong> Nguồn kẽm tốt nhất và dễ hấp thu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người ăn chay:</strong> Ăn nhiều hạt, đậu, ngũ cốc nguyên cám
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Khi bị cảm:</strong> Có thể bổ sung kẽm sớm (tham khảo bác sĩ)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không lạm dụng:</strong> Quá nhiều kẽm có thể gây hại, không nên tự ý uống liều cao
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Càng nhiều kẽm càng tốt cho miễn dịch"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quá nhiều kẽm (trên 40mg/ngày) có thể gây hại, làm suy yếu hệ miễn dịch, 
                và gây thiếu đồng. Không nên tự ý uống liều cao.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần uống viên kẽm khi bị cảm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quan trọng hơn là đảm bảo đủ kẽm hàng ngày từ thực phẩm. 
                Viên kẽm chỉ nên dùng khi thực sự thiếu hoặc theo chỉ định bác sĩ.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Sắt cũng quan trọng cho sức khỏe
            </p>
          </Card>
          <Card href="/knowledge/protein-co-ban-trong-lam-sang">
            <h3 className="heading-5 mb-2">Protein cơ bản</h3>
            <p className="text-sm text-gray-600">
              Thịt là nguồn kẽm tốt
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn nghi ngờ thiếu kẽm, 
          hoặc đang cân nhắc bổ sung, hãy tham khảo ý kiến của bác sĩ. 
          Không nên tự ý uống viên kẽm liều cao - quá nhiều kẽm có thể gây hại.
        </p>
      </Callout>
    </main>
  );
}
