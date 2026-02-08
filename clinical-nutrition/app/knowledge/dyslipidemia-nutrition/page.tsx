import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Rối loạn Lipid máu",
  description:
    "Hướng dẫn giáo dục về quản lý chất béo, cholesterol, và triglycerides. Bao gồm chế độ ăn lành mạnh cho tim mạch và điều chỉnh theo loại rối loạn lipid.",
  keywords: [
    "rối loạn lipid máu",
    "dyslipidemia",
    "cholesterol",
    "triglycerides",
    "chế độ ăn tim mạch",
    "chất béo",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Rối loạn Lipid máu",
    description:
      "Hướng dẫn giáo dục về quản lý chất béo, cholesterol, và triglycerides. Bao gồm chế độ ăn lành mạnh cho tim mạch và điều chỉnh theo loại rối loạn lipid.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dyslipidemia-nutrition",
  },
};

export default function DyslipidemiaNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Rối loạn Lipid máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Rối loạn Lipid máu: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Rối loạn lipid máu là tình trạng mỡ máu cao hoặc mất cân bằng, thường gặp nhất là:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Cholesterol xấu (LDL) cao</li>
            <li>Triglycerides cao</li>
            <li>Cholesterol tốt (HDL) thấp</li>
          </ul>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Đây là yếu tố nguy cơ quan trọng của bệnh tim mạch, đột quỵ.</strong>
            </p>
            <p className="text-sm text-blue-900">
              Dinh dưỡng đóng vai trò trung tâm trong kiểm soát mỡ máu, bên cạnh thuốc và vận động.
            </p>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp bác sĩ, điều dưỡng, sinh viên y khoa và người bệnh hiểu các nguyên tắc dinh dưỡng trong rối loạn lipid máu</li>
            <li>Hỗ trợ thay đổi lối sống một cách đúng – bền vững</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin mang tính giáo dục, không thay thế đánh giá và chỉ định cá nhân của bác sĩ.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Rối loạn Lipid máu?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Những gì bạn ăn ảnh hưởng trực tiếp đến mỡ máu:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li>Một số loại chất béo làm LDL tăng</li>
            <li>Một số loại thực phẩm giúp giảm LDL, giảm triglycerides</li>
            <li>Ăn uống không hợp lý có thể làm thuốc kém hiệu quả</li>
          </ul>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-900">
              <strong>👉 Chỉ cần điều chỉnh ăn uống đúng cách, nhiều người đã cải thiện mỡ máu rõ rệt.</strong>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🧈 Chất béo – Hiểu đúng để Chọn đúng" />
          <CardContent>
            <p className="text-body mb-4">
              Không phải chất béo nào cũng xấu. <strong>Loại chất béo quan trọng hơn số lượng.</strong>
            </p>
            <h4 className="heading-4 mb-3">Các loại chất béo và ảnh hưởng</h4>
            {/* Fat Types Table */}
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Loại chất béo</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Nên hay hạn chế</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thường có trong</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ảnh hưởng mỡ máu</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chất béo bão hòa</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Hạn chế</span></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Thịt đỏ, mỡ heo, bơ, phô mai</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tăng LDL</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chất béo trans</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Tránh</span></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Đồ chiên, bánh ngọt, đồ chế biến</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tăng LDL, giảm HDL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chất béo không bão hòa đơn</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Dầu ô liu, bơ, hạt</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Giảm LDL, tăng HDL</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chất béo không bão hòa đa</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên dùng</span></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Cá béo, hạt lanh, óc chó</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Giảm LDL</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Omega-3</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Nên bổ sung</span></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Cá hồi, cá thu, cá mòi</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Giảm triglycerides</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-4">
              <p className="text-sm font-semibold text-green-900 mb-1">📌 Mẹo nhớ nhanh:</p>
              <p className="text-sm text-green-900">
                Bớt mỡ động vật – tăng dầu thực vật và cá.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🥚 Cholesterol trong Thực phẩm – Đừng Quá lo</h3>
          <div className="space-y-3 text-body">
            <p>
              Cholesterol trong thức ăn (trứng, tôm…) ảnh hưởng ít hơn so với chất béo bão hòa
            </p>
            <p>
              Không cần kiêng tuyệt đối trứng hay tôm
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-sm text-blue-900">
                <strong>👉 Nguyên tắc:</strong> Ăn vừa phải – không ăn quá thường xuyên – chú ý cách chế biến.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🥬 Chất xơ – "Trợ thủ" Giảm LDL</h3>
          <div className="space-y-3 text-body">
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Chất xơ hòa tan giúp giảm LDL cholesterol</li>
              <li>Còn giúp no lâu, tốt cho tiêu hóa</li>
            </ul>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn chất xơ tốt:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                <li>Yến mạch</li>
                <li>Đậu, đậu lăng</li>
                <li>Rau xanh</li>
                <li>Trái cây</li>
              </ul>
            </div>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3 mt-3">
              <p className="text-sm text-green-900">
                <strong>👉 Khuyến nghị:</strong> 25–30 g chất xơ/ngày
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🍚 Tinh bột & Đường – Liên quan Chặt chẽ với Triglycerides</h3>
          <div className="space-y-3 text-body">
            <p>
              Ăn nhiều đường và tinh bột tinh chế → triglycerides tăng
            </p>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Đặc biệt là:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                <li>Nước ngọt</li>
                <li>Trà sữa</li>
                <li>Bánh kẹo</li>
                <li>Cơm trắng, bún, bánh mì trắng ăn nhiều</li>
              </ul>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 mt-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Nên:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Giảm đường thêm vào</li>
                <li>Ưu tiên ngũ cốc nguyên hạt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Từng Loại Rối loạn Lipid
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">🔹 LDL cholesterol cao</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Giảm mỡ động vật</li>
              <li>Tránh chất béo trans</li>
              <li>Tăng chất xơ hòa tan</li>
              <li>Áp dụng chế độ ăn Địa Trung Hải hoặc DASH</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">🔹 Triglycerides cao</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Giảm đường và tinh bột tinh chế</li>
              <li>Hạn chế rượu bia</li>
              <li>Tăng cá béo (omega-3)</li>
              <li>Giảm cân nếu thừa cân</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">🔹 HDL thấp</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Tăng vận động thể chất</li>
              <li>Bỏ thuốc lá</li>
              <li>Dùng chất béo tốt (dầu thực vật, cá)</li>
              <li>Tránh ăn quá nhiều tinh bột tinh chế</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng – Thuốc
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-amber-200 bg-amber-50/30">
            <h3 className="heading-4 mb-3">Statins</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Một số statins không nên dùng chung với nước bưởi</li>
              <li>• Nước bưởi có thể làm tăng tác dụng phụ của thuốc</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3 mt-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>👉 Khuyên bệnh nhân:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Tránh hoặc hạn chế nước bưởi</li>
                <li>Hỏi bác sĩ hoặc đọc kỹ hướng dẫn thuốc</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi & Đánh giá
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          {/* Monitoring Parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>LDL-C</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">4–12 tuần sau thay đổi, sau đó 6–12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 100 mg/dL (&lt; 70 nếu nguy cơ cao)</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>HDL-C</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Cùng lipid profile</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 40 (nam), &gt; 50 (nữ)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Triglycerides</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Cùng lipid profile</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 150 mg/dL</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cholesterol toàn phần</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Cùng lipid profile</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 200 mg/dL</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">BMI 18.5–24.9</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Những Sai lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-red-200 bg-red-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Chỉ quan tâm cholesterol mà bỏ qua triglycerides</li>
              <li>• Kiêng mỡ cực đoan nhưng vẫn ăn nhiều đường</li>
              <li>• Không chú ý tương tác thuốc (nước bưởi – statins)</li>
              <li>• Bỏ qua vai trò của vận động và cân nặng</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần giảm cân
                để cải thiện lipid profile.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng trong quản lý cân nặng cho bệnh nhân rối loạn lipid máu.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Nội dung này chỉ mang tính giáo dục sức khỏe.
          </p>
          <p className="text-body-sm">
            Mọi khuyến nghị cần được cá nhân hóa dựa trên:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
            <li>Mức độ rối loạn lipid</li>
            <li>Nguy cơ tim mạch</li>
            <li>Thuốc đang dùng</li>
            <li>Thói quen sinh hoạt và khả năng tuân thủ</li>
          </ul>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
        </Callout>
      </section>
    </main>
  );
}
