import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Droplet, CheckCircle2, AlertCircle, Beef, Leaf, Apple } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sắt và Thiếu máu",
  description:
    "Hiểu về sắt - khoáng chất quan trọng để tạo máu, nguồn thực phẩm giàu sắt, và cách phòng ngừa thiếu máu do thiếu sắt.",
  keywords: [
    "sắt",
    "thiếu máu",
    "hemoglobin",
    "thực phẩm giàu sắt",
    "dinh dưỡng",
  ],
};

export default function IronAnemiaPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Sắt và Thiếu máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplet className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Sắt và Thiếu máu</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Sắt là khoáng chất quan trọng giúp cơ thể tạo ra hemoglobin - chất vận chuyển oxy trong máu. 
          Thiếu sắt có thể dẫn đến thiếu máu, khiến bạn cảm thấy mệt mỏi, yếu ớt. 
          Hiểu về sắt giúp bạn đảm bảo cơ thể có đủ lượng cần thiết.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Sắt</strong> giúp tạo hemoglobin - vận chuyển oxy trong máu
          </li>
          <li>
            Thiếu sắt dẫn đến <strong>thiếu máu</strong> - mệt mỏi, yếu ớt, da xanh xao
          </li>
          <li>
            <strong>Thịt đỏ, gan, đậu, rau xanh</strong> là nguồn sắt tốt
          </li>
          <li>
            Sắt từ thịt (heme) dễ hấp thu hơn sắt từ thực vật (non-heme)
          </li>
          <li>
            Vitamin C giúp tăng hấp thu sắt từ thực vật
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Sắt là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Sắt</strong> là một khoáng chất thiết yếu mà cơ thể cần để tạo ra hemoglobin - 
            protein trong hồng cầu giúp vận chuyển oxy từ phổi đến các bộ phận khác của cơ thể. 
            Không có đủ sắt, cơ thể không thể tạo đủ hemoglobin, dẫn đến thiếu máu.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Sắt giống như "xe tải" vận chuyển oxy trong máu. 
              Nếu thiếu "xe tải", oxy không thể đến đủ các bộ phận của cơ thể, khiến bạn cảm thấy mệt mỏi, 
              khó thở, và yếu ớt.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Dấu hiệu Thiếu sắt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Triệu chứng thường gặp:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mệt mỏi, yếu ớt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Da xanh xao, nhợt nhạt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Khó thở khi vận động</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chóng mặt, đau đầu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Móng tay dễ gãy, mỏng</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Ai có nguy cơ cao?</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Phụ nữ (mất máu khi hành kinh)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Phụ nữ mang thai</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Trẻ em đang lớn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Người ăn chay (ít sắt heme)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Người mất máu (chấn thương, phẫu thuật)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn thực phẩm Giàu sắt</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3 flex items-center gap-2">
              <Beef className="w-5 h-5" aria-hidden="true" />
              Sắt heme (từ động vật) - Dễ hấp thu hơn
            </h3>
            <p className="text-body text-red-900 mb-3">
              Sắt từ thịt, cá, gia cầm được gọi là "sắt heme" - cơ thể hấp thu tốt hơn sắt từ thực vật.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Thịt đỏ:</strong> thịt bò, thịt heo (100g ≈ 2-3mg sắt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Gan:</strong> gan bò, gan heo (100g ≈ 6-8mg sắt) - nguồn rất tốt!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Thịt gia cầm:</strong> thịt gà, thịt vịt (100g ≈ 1-2mg sắt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá:</strong> cá thu, cá ngừ (100g ≈ 1-2mg sắt)</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3 flex items-center gap-2">
              <Leaf className="w-5 h-5" aria-hidden="true" />
              Sắt non-heme (từ thực vật) - Cần kết hợp với Vitamin C
            </h3>
            <p className="text-body text-green-900 mb-3">
              Sắt từ thực vật khó hấp thu hơn, nhưng kết hợp với vitamin C (cam, ớt chuông) sẽ giúp tăng hấp thu.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Đậu:</strong> đậu đen, đậu đỏ, đậu lăng (100g nấu chín ≈ 2-3mg sắt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Rau xanh:</strong> rau bina, cải xoăn (100g ≈ 2-3mg sắt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Hạt:</strong> hạt bí, hạt hướng dương (30g ≈ 2-3mg sắt)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Ngũ cốc tăng cường:</strong> bột yến mạch, bánh mì (kiểm tra nhãn)</span>
                </li>
              </ul>
            </div>
          </Card>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Mẹo tăng hấp thu sắt:</strong> Ăn thực phẩm giàu sắt cùng với thực phẩm giàu vitamin C 
              (cam, ớt chuông, cà chua, bông cải xanh) sẽ giúp cơ thể hấp thu sắt tốt hơn. 
              Ví dụ: ăn đậu với ớt chuông, hoặc uống nước cam sau bữa ăn có rau xanh.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần bao nhiêu Sắt?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu sắt thay đổi theo tuổi, giới tính, và tình trạng sức khỏe:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nam giới (19-50 tuổi)</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">8 mg/ngày</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nữ giới (19-50 tuổi)</h3>
                <p className="text-2xl font-bold text-red-600 mb-1">18 mg/ngày</p>
                <p className="text-xs text-gray-600">(Mất máu khi hành kinh)</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ mang thai</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">27 mg/ngày</p>
                <p className="text-xs text-gray-600">(Cần nhiều hơn cho thai nhi)</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người trên 50 tuổi</h3>
                <p className="text-2xl font-bold text-purple-600 mb-1">8 mg/ngày</p>
                <p className="text-xs text-gray-600">(Cả nam và nữ)</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
              <p className="text-sm text-amber-900">
                <strong>Ví dụ bữa ăn đủ sắt:</strong> 100g thịt bò (2-3mg) + 100g đậu đen (2mg) + 
                rau bina (2mg) + ớt chuông (vitamin C) = ~6-7mg sắt trong một bữa.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 1: Phụ nữ trẻ, hành kinh nhiều</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Chị mai, 28 tuổi, ăn chay, hành kinh nhiều, thường xuyên mệt mỏi, da xanh xao.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Ăn đậu, đậu lăng mỗi ngày (đậu đen, đậu đỏ)</li>
              <li>Ăn rau xanh đậm (rau bina, cải xoăn) thường xuyên</li>
              <li>Kết hợp với vitamin C: ăn ớt chuông, uống nước cam</li>
              <li>Chọn ngũ cốc tăng cường sắt</li>
              <li>Tham khảo bác sĩ về viên uống bổ sung sắt (có thể cần)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 2: Phụ nữ mang thai</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Chị hoa, 30 tuổi, mang thai 3 tháng, cần 27mg sắt/ngày.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Ăn thịt đỏ, gan 2-3 lần/tuần</li>
              <li>Ăn đậu, rau xanh mỗi ngày</li>
              <li>Uống viên sắt theo chỉ định của bác sĩ (thường cần bổ sung)</li>
              <li>Kết hợp với vitamin C để tăng hấp thu</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp sắt với vitamin C:</strong> Ăn cam, ớt chuông, cà chua cùng bữa ăn có sắt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh trà/cà phê với bữa ăn:</strong> Chất tanin trong trà/cà phê làm giảm hấp thu sắt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu bằng nồi gang:</strong> Nồi gang có thể thêm một ít sắt vào thức ăn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người ăn chay:</strong> Cần ăn nhiều đậu, rau xanh, và kết hợp với vitamin C
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ăn rau xanh là đủ sắt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Sắt từ thực vật khó hấp thu hơn. Nếu bạn ăn chay, cần ăn nhiều hơn 
                và kết hợp với vitamin C. Người có nguy cơ cao (phụ nữ, mang thai) có thể cần bổ sung.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Càng nhiều sắt càng tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quá nhiều sắt có thể gây hại. Không nên tự ý uống viên sắt liều cao 
                mà không có chỉ định của bác sĩ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Thiếu máu = thiếu sắt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thiếu máu có thể do nhiều nguyên nhân (thiếu B12, bệnh mạn tính, mất máu). 
                Cần xét nghiệm để xác định nguyên nhân chính xác.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/vitamin-b12-energy">
            <h3 className="heading-5 mb-2">Vitamin B12 và năng lượng</h3>
            <p className="text-sm text-gray-600">
              B12 cũng quan trọng cho tạo máu và năng lượng
            </p>
          </Card>
          <Card href="/knowledge/life-stages/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Phụ nữ mang thai cần nhiều sắt hơn
            </p>
          </Card>
          <Card href="/knowledge/protein-co-ban-trong-lam-sang">
            <h3 className="heading-5 mb-2">Protein cơ bản</h3>
            <p className="text-sm text-gray-600">
              Thịt là nguồn sắt heme tốt
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có triệu chứng thiếu máu (mệt mỏi, da xanh xao), 
          hoặc nghi ngờ thiếu sắt, hãy tham khảo ý kiến của bác sĩ để được xét nghiệm và tư vấn phù hợp. 
          Không nên tự ý uống viên sắt liều cao mà không có chỉ định.
        </p>
      </Callout>
    </main>
  );
}
