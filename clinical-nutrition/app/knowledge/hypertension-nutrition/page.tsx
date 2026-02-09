import type { Metadata } from "next";
import Link from "next/link";
import { Heart, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Tăng huyết áp",
  description:
    "Hướng dẫn giáo dục về DASH diet, quản lý natri và kali, và các nguyên tắc dinh dưỡng dựa trên bằng chứng để kiểm soát tăng huyết áp.",
  keywords: [
    "tăng huyết áp",
    "dinh dưỡng tăng huyết áp",
    "DASH diet",
    "quản lý natri",
    "kali",
    "bệnh tim mạch",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Tăng huyết áp",
    description:
      "Hướng dẫn giáo dục về DASH diet, quản lý natri và kali, và các nguyên tắc dinh dưỡng dựa trên bằng chứng để kiểm soát tăng huyết áp.",
    url: "https://clinical-nutrition.edu.vn/knowledge/hypertension-nutrition",
  },
};

export default function HypertensionNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Tăng huyết áp" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Tăng huyết áp: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Tăng huyết áp là một bệnh mạn tính rất phổ biến. Nhiều người mắc bệnh trong thời gian dài mà không có 
            triệu chứng rõ ràng, nhưng nếu không kiểm soát tốt có thể gây biến chứng tim mạch, đột quỵ, suy thận.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng đóng vai trò rất quan trọng trong việc:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Phòng ngừa tăng huyết áp</li>
              <li>Hỗ trợ kiểm soát huyết áp bên cạnh thuốc</li>
              <li>Giảm nguy cơ biến chứng lâu dài</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này cung cấp kiến thức dinh dưỡng mang tính giáo dục, dựa trên các khuyến cáo y khoa hiện nay, 
            giúp hiểu đúng và áp dụng hợp lý trong cuộc sống hàng ngày.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp bác sĩ, điều dưỡng, sinh viên y, và người bệnh hiểu các nguyên tắc dinh dưỡng trong tăng huyết áp</li>
            <li>Hỗ trợ tư vấn và thay đổi lối sống một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá lâm sàng cá nhân hoặc tư vấn trực tiếp từ bác sĩ 
            hay chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      {/* 2. Why nutrition matters in Hypertension */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao dinh dưỡng quan trọng trong Tăng huyết áp?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Chế độ ăn ảnh hưởng trực tiếp đến huyết áp. Một số yếu tố dinh dưỡng quan trọng gồm:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Muối (natri)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ăn mặn làm huyết áp tăng ở nhiều người</li>
                <li>• Giảm muối có thể giúp hạ huyết áp, đặc biệt ở người nhạy cảm với muối</li>
              </ul>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Kali</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giúp cân bằng tác dụng của muối</li>
                <li>• Hỗ trợ mạch máu giãn ra → huyết áp giảm</li>
              </ul>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2">🔹 Cân nặng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thừa cân, béo phì làm tăng nguy cơ tăng huyết áp</li>
                <li>• Giảm cân giúp huyết áp giảm rõ rệt</li>
              </ul>
            </Card>
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🔹 Chế độ ăn tổng thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Chế độ ăn lành mạnh (như DASH) giúp hạ huyết áp rõ ràng</li>
                <li>• Không chỉ một chất, mà toàn bộ cách ăn uống đều quan trọng</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Basic nutrition Principles */}
      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* DASH Diet */}
        <Card>
          <CardHeader
            icon={CheckCircle}
            title="🍽️ Chế độ ăn DASH (Dietary approaches to Stop hypertension)"
          />
          <CardContent>
            <p className="text-body mb-4">
              DASH là chế độ ăn được thiết kế để hỗ trợ giảm huyết áp một cách tự nhiên.
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mb-4">
              <p className="text-sm text-blue-900">
                <strong>👉 Nhiều nghiên cứu cho thấy:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900 mt-2">
                <li>DASH giúp giảm huyết áp</li>
                <li>Hiệu quả rõ hơn khi ăn nhạt hơn</li>
              </ul>
            </div>
            <h3 className="heading-4 mb-3">Các thành phần chính của DASH:</h3>
            
            {/* DASH Diet table */}
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nhóm thực phẩm</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng khuyến nghị</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ví dụ dễ hiểu</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Lợi ích</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trái cây</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">4–5 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Táo, cam, chuối</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Giàu kali, chất xơ</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">4–5 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Rau xanh, rau luộc</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Kali, magie</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa ít béo</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">2–3 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Sữa, sữa chua</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Canxi, đạm</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Ngũ cốc nguyên hạt</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">6–8 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Gạo lứt, bánh mì nguyên cám</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Chất xơ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đạm nạc</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">≤ 6 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Cá, thịt nạc, trứng, đậu</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Đạm</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chất béo tốt</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">2–3 phần/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Dầu thực vật</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tốt cho tim mạch</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <Callout variant="info" title="Lưu ý về khẩu phần">
              <p className="text-body-sm mb-2">
                Các con số trên mang tính hướng dẫn chung. Trong thực tế, cần điều chỉnh theo:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Tuổi</li>
                <li>Cân nặng</li>
                <li>Mức độ vận động</li>
                <li>Văn hóa ăn uống</li>
                <li>Khả năng kinh tế</li>
              </ul>
              <p className="text-body-sm mt-3 font-semibold">
                👉 Mục tiêu chính: Ăn đa dạng, nhiều rau – trái cây, ít muối, ít đồ chế biến sẵn.
              </p>
            </Callout>
            
            <ul className="list-disc space-y-2 pl-6 text-body-sm mt-4">
              <li>
                <strong>Hạn chế:</strong> Natri &lt; 2.3g/ngày (hoặc &lt; 1.5g/ngày nếu có nguy cơ cao), 
                chất béo bão hòa, đường, và thực phẩm chế biến sẵn.
              </li>
            </ul>
            <p className="text-body-sm mt-4 italic">
              <strong>Lưu ý:</strong> DASH diet là một hướng dẫn giáo dục. Trong thực hành, các bác sĩ lâm sàng
              sẽ điều chỉnh dựa trên sở thích, văn hóa, và khả năng của từng bệnh nhân.
            </p>
          </CardContent>
        </Card>

        {/* Sodium */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🧂 Muối (Natri) – Yếu tố quan trọng nhất</h3>
          <h4 className="heading-4 mb-3">khuyến nghị chung</h4>
          
          {/* Sodium recommendations table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nhóm</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">khuyến nghị Natri</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tương đương Muối</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Người lớn khỏe mạnh</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2.3g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 6g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">khuyến nghị chung</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Tăng huyết áp</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2.3g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 6g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mục tiêu ban đầu</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nguy cơ cao</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 1.5g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 4g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">THA độ 2, suy tim, CKD</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bệnh thận mạn</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 5g/ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Tùy giai đoạn CKD</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div className="space-y-3 text-body">
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
              <p className="text-sm text-blue-900">
                <strong>👉 Không cần ăn nhạt tuyệt đối, nhưng không nên ăn mặn.</strong>
              </p>
            </div>
            <h4 className="heading-4 mb-3">Nguồn muối "ẩn" thường gặp</h4>
            <p>
              Phần lớn muối không đến từ muối chấm, mà từ:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li><strong>Mì gói</strong></li>
              <li><strong>Đồ hộp, đồ đông lạnh</strong></li>
              <li><strong>Thức ăn nhanh</strong></li>
              <li><strong>Nước mắm, nước tương, gia vị</strong></li>
              <li><strong>Xúc xích, thịt nguội</strong></li>
              <li><strong>Bánh mì, phô mai</strong></li>
            </ul>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
              <p className="text-sm font-semibold text-green-900 mb-1">📌 Mẹo:</p>
              <p className="text-sm text-green-900">
                Thực phẩm được coi là "ít muối" nếu &lt; 140 mg natri/khẩu phần.
              </p>
            </div>
          </div>
        </div>

        {/* Potassium */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🥬 Kali – Cần nhưng phải đúng người</h3>
          <div className="space-y-3 text-body">
            <h4 className="heading-4 mb-2">Vai trò của kali</h4>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Giúp giảm tác dụng của muối</li>
              <li>Hỗ trợ mạch máu giãn ra</li>
              <li>Có lợi cho huyết áp</li>
            </ul>
            <h4 className="heading-4 mb-2 mt-4">Nguồn kali tốt</h4>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li><strong>Trái cây:</strong> chuối, cam, bơ</li>
              <li><strong>Rau:</strong> rau xanh, cà chua, khoai</li>
              <li>Đậu, sữa ít béo</li>
              <li>Cá, thịt nạc</li>
            </ul>
            <Callout variant="warning" title="⚠️ Lưu ý quan trọng">
              <p className="text-body-sm">
                Người bệnh thận hoặc đang dùng một số thuốc huyết áp (ACEi, ARB, lợi tiểu giữ kali) 
                cần theo dõi kali máu, không nên tự ý tăng kali.
              </p>
            </Callout>
          </div>
        </div>

        {/* Other nutrients */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Các chất dinh dưỡng Khác</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Magnesium:</strong> Một số nghiên cứu cho thấy magie có thể giúp giảm huyết áp nhẹ.
              Nguồn tốt: rau lá xanh, các loại hạt, ngũ cốc nguyên hạt, đậu.
            </p>
            <p>
              <strong>Canxi:</strong> Canxi từ sản phẩm sữa có thể có tác dụng bảo vệ nhẹ. Tuy nhiên,
              bổ sung canxi không được khuyến nghị cho mục đích giảm huyết áp.
            </p>
            <p>
              <strong>Chất xơ:</strong> Chế độ ăn giàu chất xơ (từ trái cây, rau, ngũ cốc nguyên hạt)
              có liên quan đến huyết áp thấp hơn và sức khỏe tim mạch tốt hơn.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Nutrition adjustments by Disease status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo tình trạng Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Điều chỉnh dinh dưỡng cho bệnh nhân tăng huyết áp cần được cá nhân hóa dựa trên nhiều yếu tố:
          </p>

          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">Mức độ Tăng huyết áp</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Tăng huyết áp độ 1 (140-159/90-99 mmHg):</strong> Bắt đầu với thay đổi lối sống,
                bao gồm DASH diet và hạn chế natri &lt; 2.3g/ngày.
              </li>
              <li>
                <strong>Tăng huyết áp độ 2 (≥ 160/100 mmHg):</strong> Thường cần thuốc kết hợp với
                thay đổi lối sống. Có thể cần hạn chế natri nghiêm ngặt hơn (&lt; 1.5g/ngày).
              </li>
              <li>
                <strong>Tăng huyết áp kháng trị:</strong> Cần đánh giá kỹ về tuân thủ, thuốc, và các
                yếu tố góp phần. Dinh dưỡng vẫn quan trọng nhưng cần kết hợp với quản lý thuốc tích cực.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">bệnh lý Kèm</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Bệnh thận:</strong> Cần hạn chế natri, và có thể cần hạn chế kali, phosphorus
                tùy theo giai đoạn bệnh thận.
              </li>
              <li>
                <strong>Đái tháo đường:</strong> Kết hợp DASH diet với quản lý carbohydrate. Chú ý
                đến glycemic control.
              </li>
              <li>
                <strong>Suy tim:</strong> Hạn chế natri nghiêm ngặt (&lt; 2g/ngày) và có thể cần hạn chế dịch.
              </li>
              <li>
                <strong>Thừa cân/Béo phì:</strong> Giảm cân là một trong những can thiệp hiệu quả nhất
                để giảm huyết áp. Mục tiêu giảm 5-10% cân nặng có thể giúp giảm huyết áp đáng kể.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">Độ nhạy cảm với Muối</h3>
            <p className="text-body-sm">
              Không phải tất cả mọi người đều nhạy cảm với muối. Một số người có thể giảm huyết áp đáng kể
              khi giảm natri, trong khi những người khác có thể không có phản ứng rõ ràng. Tuy nhiên,
              hạn chế natri vẫn được khuyến nghị cho tất cả người tăng huyết áp vì lợi ích sức khỏe tổng thể.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Common difficulties & Solutions */}
      <section aria-labelledby="difficulties-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="difficulties-heading" className="heading-2 whitespace-nowrap">
            Một số Khó khăn Thường gặp & Cách xử lý
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Trong quá trình quản lý tăng huyết áp, có thể gặp một số vấn đề dinh dưỡng cần được giải quyết:
          </p>

          <Card>
            <CardHeader icon={AlertCircle} title="Khó ăn nhạt" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>👉 Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li><strong>Giảm từ từ</strong> - không cần cắt giảm đột ngột</li>
                <li><strong>Dùng gia vị tự nhiên</strong> - chanh, gừng, tỏi để tăng hương vị</li>
                <li><strong>Nấu ăn tại nhà</strong> - tự kiểm soát lượng muối</li>
                <li>Hướng dẫn đọc nhãn dinh dưỡng</li>
                <li>Giáo dục về nguồn natri ẩn trong thực phẩm</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={Info} title="Tăng kali không phù hợp" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>👉 Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li><strong>Đánh giá thận trước</strong> - kiểm tra chức năng thận</li>
                <li><strong>Theo dõi xét nghiệm</strong> - kiểm tra kali máu thường xuyên</li>
                <li><strong>Điều chỉnh DASH cho phù hợp</strong> - không áp dụng cứng nhắc</li>
                <li>tham khảo chuyên gia dinh dưỡng khi cần</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={AlertCircle} title="Kiêng quá mức" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>👉 Nhấn mạnh:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li><strong>Ăn là để sống khỏe</strong> - không phải để khổ sở</li>
                <li><strong>Không cần cắt bỏ cực đoan</strong> - cân bằng là chìa khóa</li>
                <li><strong>Điều chỉnh theo khả năng thực tế</strong> - từng bước một</li>
                <li>Giáo dục về thực phẩm lành mạnh thay vì chỉ tập trung vào hạn chế</li>
                <li>Theo dõi tình trạng dinh dưỡng tổng thể</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Drug-Nutrition interactions */}
      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng-Thuốc
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Một số thuốc điều trị tăng huyết áp có tương tác với dinh dưỡng cần được lưu ý:
          </p>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Thuốc lợi tiểu (Diuretics)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Thiazide diuretics:</strong> Có thể gây mất kali và magie. Có thể cần bổ sung
                hoặc tăng kali trong chế độ ăn. Tuy nhiên, cần thận trọng ở bệnh nhân có bệnh thận.
              </li>
              <li>
                <strong>Loop diuretics:</strong> Cũng có thể gây mất kali và magie. Theo dõi điện giải.
              </li>
              <li>
                <strong>Potassium-sparing diuretics:</strong> Giữ kali, có thể dẫn đến tăng kali máu,
                đặc biệt nếu kết hợp với chế độ ăn giàu kali hoặc bổ sung kali.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">ACE Inhibitors và ARBs</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Có thể gây tăng kali máu, đặc biệt ở bệnh nhân có bệnh thận hoặc đang dùng
                potassium-sparing diuretics.
              </li>
              <li>
                Cần theo dõi kali máu, đặc biệt khi bắt đầu thuốc hoặc thay đổi chế độ ăn.
              </li>
              <li>
                Có thể cần hạn chế kali trong chế độ ăn ở một số bệnh nhân.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Thời điểm Ăn uống</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Hầu hết thuốc huyết áp có thể uống với hoặc không với thức ăn, nhưng nên uống đều đặn
                cùng một thời điểm mỗi ngày.
              </li>
              <li>
                Một số thuốc (ví dụ: một số beta-blockers) có thể uống với thức ăn để giảm tác dụng phụ.
              </li>
              <li>
                Luôn kiểm tra hướng dẫn sử dụng thuốc cụ thể.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Monitoring & Reassessment */}
      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi & Đánh giá lại
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Theo dõi đều đặn là quan trọng để đánh giá hiệu quả của can thiệp dinh dưỡng và điều chỉnh
            khi cần:
          </p>

          {/* Monitoring parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thông số</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mục tiêu/Giá trị bình thường</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Huyết áp</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng ngày (tại nhà), mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 130/80 mmHg (hoặc theo mục tiêu cá nhân)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá đáp ứng với thay đổi chế độ ăn</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng tuần (nếu giảm cân), mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">BMI 18.5-24.9 (hoặc mục tiêu cá nhân)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Giảm 5-10% cân nặng có thể giảm HA đáng kể</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kali máu</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Khi bắt đầu/thay đổi thuốc, định kỳ nếu có nguy cơ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">3.5-5.0 mEq/L</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng nếu dùng lợi tiểu, ACE/ARB</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Creatinine/eGFR</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Định kỳ 3-6 tháng, hoặc khi có nguy cơ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">eGFR &gt; 60, Creatinine bình thường</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá chức năng thận, điều chỉnh kali</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Lượng natri ăn vào</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Ước tính qua nhật ký thực phẩm</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2.3g/ngày (hoặc &lt; 1.5g nếu nguy cơ cao)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Ước tính, không chính xác hoàn toàn</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader icon={CheckCircle} title="Huyết áp" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi huyết áp thường xuyên</li>
                  <li>Đánh giá đáp ứng với thay đổi dinh dưỡng</li>
                  <li>Mục tiêu: &lt; 130/80 mmHg (theo hầu hết hướng dẫn)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi cân nặng hàng tuần (nếu đang giảm cân)</li>
                  <li>Mục tiêu: giảm 5-10% cân nặng nếu thừa cân</li>
                  <li>Đánh giá BMI</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Điện giải" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Kali máu (đặc biệt nếu dùng diuretics hoặc ACE inhibitors)</li>
                  <li>Magie (nếu dùng diuretics)</li>
                  <li>Natri (nếu có triệu chứng hoặc nghi ngờ mất cân bằng)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Tuân thủ" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đánh giá tuân thủ chế độ ăn</li>
                  <li>Ước tính lượng natri ăn vào (nếu có thể)</li>
                  <li>Điều chỉnh dựa trên khả năng và sở thích</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <h3 className="heading-4">Theo dõi & Đánh giá</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li><strong>Đo huyết áp thường xuyên</strong> - tại nhà và khi khám</li>
              <li><strong>Theo dõi cân nặng</strong> - đặc biệt nếu đang giảm cân</li>
              <li><strong>Kiểm tra điện giải khi cần</strong> - kali, natri nếu có triệu chứng</li>
              <li><strong>Đánh giá lại sau 2–4 tuần</strong> khi thay đổi chế độ ăn</li>
            </ul>
          </div>
          
          <Callout variant="info" title="Khi nào cần gặp chuyên gia dinh dưỡng?">
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Có nhiều bệnh kèm</li>
              <li>Khó tuân thủ</li>
              <li>Cần kế hoạch ăn chi tiết</li>
              <li>Có bệnh thận, suy tim kèm tăng huyết áp</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 8. Common clinical pitfalls */}
      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các cạm bẫy lâm sàng Phổ biến
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Hạn chế natri quá mức không cần thiết:</strong> Một số bác sĩ có thể khuyến nghị
              hạn chế natri quá mức (&lt; 1g/ngày) mà không cần thiết, có thể ảnh hưởng đến chất lượng
              cuộc sống và tuân thủ. Hầu hết bệnh nhân có thể đạt mục tiêu với &lt; 2.3g/ngày.
            </li>
            <li>
              <strong>Bỏ qua các yếu tố khác:</strong> Chỉ tập trung vào natri mà bỏ qua cân nặng, hoạt động
              thể chất, stress, và các yếu tố lối sống khác cũng quan trọng trong kiểm soát huyết áp.
            </li>
            <li>
              <strong>Không xem xét tương tác thuốc:</strong> Không đánh giá tương tác giữa chế độ ăn
              (đặc biệt là kali) và thuốc huyết áp, có thể dẫn đến tăng hoặc giảm kali máu nguy hiểm.
            </li>
            <li>
              <strong>Không điều chỉnh cho bệnh lý kèm:</strong> Áp dụng cùng một chế độ ăn cho tất cả
              bệnh nhân mà không xem xét bệnh thận, suy tim, hoặc các bệnh lý khác cần điều chỉnh đặc biệt.
            </li>
            <li>
              <strong>Không theo dõi đáp ứng:</strong> khuyến nghị thay đổi chế độ ăn nhưng không theo dõi
              huyết áp, cân nặng, hoặc các chỉ số khác để đánh giá hiệu quả.
            </li>
            <li>
              <strong>Không giáo dục bệnh nhân đầy đủ:</strong> Chỉ nói "ăn ít muối" mà không giải thích
              nguồn natri ẩn, cách đọc nhãn, hoặc cách nấu ăn ít muối, dẫn đến tuân thủ kém.
            </li>
          </ul>
        </div>
      </section>

      {/* 9. References & Guidelines */}
      <section aria-labelledby="references-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="references-heading" className="heading-2 whitespace-nowrap">
            Tài liệu tham khảo & Hướng dẫn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Các hướng dẫn chính thức về dinh dưỡng trong tăng huyết áp:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American heart association (AHA):</strong> Hướng dẫn về chế độ ăn và lối sống
              để giảm huyết áp, bao gồm DASH diet.
            </li>
            <li>
              <strong>American college of Cardiology (ACC):</strong> Hướng dẫn về quản lý tăng huyết áp,
              bao gồm vai trò của dinh dưỡng.
            </li>
            <li>
              <strong>National heart, Lung, and Blood institute (NHLBI):</strong> Thông tin chi tiết về
              DASH diet và nghiên cứu DASH.
            </li>
            <li>
              <strong>World health organization (WHO):</strong> khuyến nghị về giảm natri trong chế độ ăn.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân có nhiều bệnh lý kèm cần điều chỉnh phức tạp</li>
              <li>Tuân thủ kém dù đã giáo dục cơ bản</li>
              <li>Cần kế hoạch bữa ăn chi tiết</li>
              <li>Có vấn đề dinh dưỡng phức tạp (ví dụ: bệnh thận + tăng huyết áp)</li>
              <li>Bệnh nhân yêu cầu hoặc có nguồn lực để tham khảo</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 10. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          ⚠️ Nhắc nhở An toàn
        </h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Nội dung này chỉ mang tính giáo dục.
          </p>
          <p className="text-body-sm">
            Mọi khuyến nghị cần được điều chỉnh theo từng người, dựa trên bệnh lý, thuốc đang dùng và 
            đánh giá của bác sĩ điều trị.
          </p>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
          <p className="text-body-sm mt-2">
            Tất cả các khuyến nghị dinh dưỡng cần được điều chỉnh dựa trên đánh giá lâm sàng toàn diện,
            bệnh lý kèm, thuốc đang dùng, và sở thích cá nhân của từng bệnh nhân. Khi còn nghi ngờ,
            hãy tham khảo ý kiến của chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
      </section>

      {/* Related tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">
          Công cụ liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần giảm cân.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng trong quản lý cân nặng cho bệnh nhân tăng huyết áp.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch, đặc biệt quan trọng nếu bệnh nhân có suy tim hoặc bệnh thận kèm theo.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như kali, magie, canxi - quan trọng trong quản lý tăng huyết áp.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
