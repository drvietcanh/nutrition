import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong COPD",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng trong bệnh phổi tắc nghẽn mạn tính. Bao gồm quản lý năng lượng, protein, và điều chỉnh carbohydrate/chất béo để giảm gánh hô hấp.",
  keywords: [
    "COPD",
    "bệnh phổi tắc nghẽn mạn tính",
    "dinh dưỡng COPD",
    "gánh hô hấp",
    "carbohydrate",
    "chất béo",
  ],
  openGraph: {
    title: "Dinh dưỡng trong COPD",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng trong bệnh phổi tắc nghẽn mạn tính. Bao gồm quản lý năng lượng, protein, và điều chỉnh carbohydrate/chất béo để giảm gánh hô hấp.",
    url: "https://clinical-nutrition.edu.vn/knowledge/copd-nutrition",
  },
};

export default function COPDNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong COPD" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong COPD: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            COPD (Bệnh phổi tắc nghẽn mạn tính) là bệnh mạn tính của đường hô hấp, gây:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Khó thở kéo dài</li>
            <li>Giảm khả năng gắng sức</li>
            <li>Mệt mỏi</li>
            <li>Giảm chất lượng cuộc sống</li>
          </ul>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Ít người biết rằng dinh dưỡng ảnh hưởng rất lớn đến COPD, đặc biệt là:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Sức mạnh cơ hô hấp</li>
              <li>Khả năng thở</li>
              <li>Nguy cơ đợt cấp và nhập viện</li>
            </ul>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế, người bệnh và người nhà hiểu đúng vai trò của dinh dưỡng trong COPD</li>
            <li>Tránh các sai lầm thường gặp như ăn quá ít hoặc ăn không đúng cách</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin mang tính giáo dục, không thay thế tư vấn cá nhân của bác sĩ.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng đặc biệt Quan trọng trong COPD?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Người bệnh COPD rất dễ suy dinh dưỡng, vì:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li>Khó thở → tốn nhiều năng lượng hơn khi thở</li>
            <li>Mệt → ăn kém</li>
            <li>Đợt cấp → sụt cân nhanh</li>
          </ul>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Suy dinh dưỡng làm yếu cơ hô hấp, dẫn đến:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Thở càng khó</li>
              <li>Hồi phục chậm</li>
              <li>Dễ tái nhập viện</li>
              <li>Tăng nguy cơ tử vong</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-1">📌 Nguyên tắc cốt lõi:</p>
            <p className="text-sm text-green-900">
              <strong>COPD không chỉ là bệnh phổi, mà còn là bệnh "mất cơ".</strong>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🔥 năng lượng (Calories)" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nhu cầu năng lượng</p>
                <p className="text-sm text-gray-700 mb-2">
                  Người COPD thường tiêu hao năng lượng nhiều hơn
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">khuyến nghị chung:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>30–35 kcal/kg/ngày</li>
                  <li>Có thể cao hơn nếu:
                    <ul className="list-disc space-y-1 pl-6 mt-1">
                      <li>Gầy</li>
                      <li>Sụt cân</li>
                      <li>COPD nặng</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý quan trọng:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900 mb-2">
                  <li>Không phải tất cả bệnh nhân COPD đều cần ăn nhiều</li>
                  <li>Một số người COPD thừa cân hoặc béo phì, cần điều chỉnh khác</li>
                </ul>
                <p className="text-sm text-amber-900">
                  <strong>👉 Mục tiêu:</strong> Giữ cân nặng hợp lý – không sụt cân – không tăng quá mức.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🥩 Protein (Chất đạm) – RẤT QUAN TRỌNG" />
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm font-semibold text-gray-900 mb-2">Protein giúp:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
                <li>Giữ cơ</li>
                <li>Duy trì cơ hô hấp (cơ hoành, cơ liên sườn)</li>
              </ul>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">khuyến nghị</p>
                <p className="text-sm text-gray-700 mb-3">1,2 – 1,5 g/kg/ngày</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-1">📌 Nếu ăn thiếu đạm:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
                  <li>Cơ yếu</li>
                  <li>Thở mệt hơn</li>
                  <li>Phục hồi kém sau đợt cấp</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-sm text-blue-900 mb-2">
                  <strong>👉 Nên:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                  <li>Chia đều đạm trong ngày</li>
                  <li>Ưu tiên thịt nạc, cá, trứng, sữa</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🍚 Carbohydrate & 🧈 Chất béo – liên quan đến CO₂" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Vì sao cần chú ý?</p>
                <p className="text-sm text-gray-700 mb-2">
                  Khi cơ thể chuyển hóa thức ăn:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Carbohydrate tạo ra nhiều CO₂ hơn</li>
                  <li>CO₂ nhiều → tăng gánh cho hô hấp</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Điều chỉnh trong COPD nặng</p>
                <div className="overflow-x-auto my-4">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-100">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nhóm chất</th>
                        <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">khuyến nghị</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Carbohydrate</td>
                        <td className="px-4 py-3 text-sm text-neutral-700 text-center">Có thể giảm</td>
                        <td className="px-4 py-3 text-sm text-neutral-700">Tạo nhiều CO₂</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Chất béo</td>
                        <td className="px-4 py-3 text-sm text-neutral-700 text-center">Có thể tăng vừa phải</td>
                        <td className="px-4 py-3 text-sm text-neutral-700">Tạo ít CO₂ hơn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Gợi ý (khi COPD nặng):</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900 mb-2">
                  <li>Carbohydrate: &lt; 40% tổng năng lượng</li>
                  <li>Chất béo: &gt; 40% tổng năng lượng</li>
                </ul>
                <p className="text-sm font-semibold text-amber-900 mb-1">⚠️ Lưu ý:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900 mb-2">
                  <li>Không áp dụng máy móc cho mọi bệnh nhân</li>
                  <li>Cần cân bằng với nguy cơ tim mạch</li>
                </ul>
                <p className="text-sm text-amber-900">
                  <strong>👉 thực tế:</strong> Chỉ điều chỉnh tỷ lệ này khi COPD nặng, tăng CO₂, khó cai máy thở
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader icon={AlertTriangle} title="⚠️ Suy dinh dưỡng" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Rất phổ biến ở COPD nặng.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sụt cân</li>
              <li>Gầy</li>
              <li>Mệt</li>
              <li>Yếu cơ</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Tăng năng lượng và protein</li>
                <li>Chia nhỏ bữa</li>
                <li>Bổ sung dinh dưỡng khi cần</li>
                <li>Theo dõi cân nặng và albumin</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={Info} title="⚖️ Thừa cân / Béo phì" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Một số bệnh nhân COPD thừa cân.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Vấn đề:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Bụng to → hạn chế di động cơ hoành</li>
              <li>Thở khó hơn khi gắng sức</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-white p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Mục tiêu:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Giảm cân từ từ</li>
                <li>Không giảm đạm</li>
                <li>Không nhịn ăn</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Monitoring section */}
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
            Theo dõi đều đặn là quan trọng để đánh giá hiệu quả của can thiệp dinh dưỡng và điều chỉnh khi cần:
          </p>
          
          {/* Monitoring parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-green-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ý nghĩa</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Cân nặng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">BMI ~ 20–25</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Phát hiện sụt cân</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Albumin</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 3,5 g/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá dinh dưỡng</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Chức năng hô hấp</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">FEV₁, SpO₂</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mức độ COPD</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Sức mạnh cơ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Duy trì / cải thiện</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Cơ hô hấp</td>
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
            Những sai lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <Card className="border-red-200 bg-red-50/30">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Ăn ít vì sợ mệt</li>
            <li>• Kiêng đạm kéo dài</li>
            <li>• Chỉ chú ý thuốc mà bỏ qua dinh dưỡng</li>
            <li>• Giảm cân quá nhanh ở người COPD gầy</li>
          </ul>
        </Card>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong COPD cần cá nhân hóa theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Mức độ COPD</li>
            <li>Tình trạng cân nặng</li>
            <li>Có tăng CO₂ hay không</li>
            <li>bệnh lý tim mạch kèm theo</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>👉 Khi có sụt cân, mệt nhiều hoặc đợt cấp tái diễn, nên đánh giá dinh dưỡng sớm.</strong>
            </p>
          </div>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
        </Callout>
      </section>
    </main>
  );
}
