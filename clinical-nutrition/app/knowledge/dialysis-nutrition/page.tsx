import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Lọc máu",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng cho bệnh nhân lọc máu (hemodialysis và peritoneal dialysis). Bao gồm điều chỉnh protein, phosphorus, potassium, và dịch.",
  keywords: [
    "lọc máu",
    "dialysis",
    "hemodialysis",
    "peritoneal dialysis",
    "dinh dưỡng lọc máu",
    "protein",
    "phosphorus",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Lọc máu",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng cho bệnh nhân lọc máu (hemodialysis và peritoneal dialysis). Bao gồm điều chỉnh protein, phosphorus, potassium, và dịch.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dialysis-nutrition",
  },
};

export default function DialysisNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Lọc máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            🩺 Dinh dưỡng trong Lọc máu: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh nhân lọc máu (chạy thận nhân tạo hoặc lọc màng bụng) có nhu cầu dinh dưỡng rất đặc biệt.
            Khi thận không còn làm việc hiệu quả, máy lọc sẽ thay thế một phần chức năng thận, nhưng đồng thời cũng làm mất đi protein và chất dinh dưỡng.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Vì vậy, ăn uống đúng cách giúp người lọc máu:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giữ sức khỏe tốt hơn</li>
              <li>Giảm biến chứng</li>
              <li>Ít mệt, ít nhập viện</li>
              <li>Nâng cao chất lượng cuộc sống</li>
            </ul>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế và người bệnh hiểu nguyên tắc dinh dưỡng trong lọc máu</li>
            <li>Tránh kiêng sai, kiêng quá mức hoặc ăn thiếu chất</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin mang tính giáo dục, không thay thế tư vấn cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng đặc biệt Quan trọng ở Bệnh nhân Lọc máu?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            So với bệnh thận mạn chưa lọc máu, người lọc máu có nguy cơ suy dinh dưỡng cao hơn vì:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li>Mất protein qua quá trình lọc</li>
            <li>Ăn uống kém, chán ăn</li>
            <li>Phải kiêng nhiều loại thực phẩm</li>
            <li>Có nhiều bệnh kèm theo</li>
          </ul>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Ăn thiếu đạm – thiếu năng lượng sẽ khiến:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Mệt mỏi</li>
              <li>Yếu cơ</li>
              <li>Nhiễm trùng nhiều hơn</li>
              <li>Tăng nguy cơ tử vong</li>
            </ul>
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

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={CheckCircle} title="🥩 Protein (Chất đạm) – PHẢI ĂN NHIỀU HƠN CKD CHƯA LỌC" />
          <CardContent>
            <div className="bg-red-100 rounded-lg p-3 mb-3 border border-red-300">
              <p className="text-sm font-semibold text-red-900">
                Đây là điểm quan trọng nhất.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Nhu cầu protein</p>
                <p className="text-sm text-gray-700">
                  1,2 – 1,5 g/kg cân nặng/ngày
                </p>
                <p className="text-sm text-gray-700">
                  Cao hơn rõ rệt so với bệnh thận chưa lọc máu
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Vì sao cần nhiều đạm?</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Chạy thận nhân tạo: mất ~10–12 g protein mỗi lần lọc</li>
                  <li>Lọc màng bụng: mất ~5–15 g protein mỗi ngày</li>
                </ul>
              </div>
              <div className="rounded-lg border border-red-200 bg-white p-3">
                <p className="text-sm text-red-900">
                  <strong>👉 Không tăng đạm = suy dinh dưỡng rất nhanh</strong>
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Nguồn đạm nên ưu tiên</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Thịt nạc</li>
                  <li>Cá</li>
                  <li>Trứng</li>
                  <li>Sữa (theo tư vấn)</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                  <li>Chia đều đạm trong ngày</li>
                  <li>Không dồn nhiều vào một bữa</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="🦴 Phospho" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Lọc máu chỉ loại bỏ được một phần phospho
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Phospho cao gây:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Ngứa</li>
              <li>Đau xương</li>
              <li>Vôi hóa mạch máu</li>
            </ul>
            <p className="text-sm font-semibold text-gray-900 mb-2">khuyến nghị</p>
            <p className="text-sm text-gray-700 mb-3">
              &lt; 800–1000 mg/ngày
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn phospho cao</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sữa, phô mai</li>
              <li>Đậu, hạt</li>
              <li>Thịt</li>
              <li>Thực phẩm chế biến sẵn (phospho "ẩn")</li>
            </ul>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-900 mb-1">
                <strong>👉 Thuốc gắn phospho:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-green-900">
                <li>Uống cùng bữa ăn</li>
                <li>rất quan trọng, không được quên</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🍌 Kali" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-3">
              Kali cao có thể gây loạn nhịp tim nguy hiểm.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chạy thận nhân tạo (Hemodialysis)</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Kali dễ tích tụ giữa các lần lọc</li>
                  <li>Thường cần hạn chế &lt; 2–3 g/ngày</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lọc màng bụng (Peritoneal dialysis)</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Lọc liên tục → kali linh hoạt hơn</li>
                  <li>Tuy nhiên vẫn phải theo dõi xét nghiệm</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>📌 Không kiêng kali máy móc – kiêng theo kali máu.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertTriangle} title="🧂 Muối & 💧 Nước" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Muối (Natri)</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>&lt; 2 g natri/ngày</li>
                  <li>Ăn mặn → khát nhiều → uống nhiều nước → quá tải dịch</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nước (dịch)</p>
                <p className="text-sm text-gray-700 mb-2">
                  Hạn chế nước rất quan trọng, đặc biệt với chạy thận nhân tạo.
                </p>
                <div className="space-y-2 mb-2">
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Chạy thận nhân tạo</p>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                      <li>Lượng nước/ngày ≈ 500 ml + lượng nước tiểu còn lại</li>
                      <li>Mục tiêu tăng cân giữa 2 lần lọc: 1–2 kg</li>
                      <li>Tăng &gt; 3–4 kg → nguy hiểm</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Lọc màng bụng</p>
                    <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                      <li>Linh hoạt hơn</li>
                      <li>Nhưng vẫn cần theo dõi phù và cân nặng</li>
                    </ul>
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-2 border border-blue-200">
                  <p className="text-sm text-blue-900">
                    <strong>📌 Mẹo nhớ:</strong> Càng ăn mặn → càng khát → càng nguy hiểm.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🔥 năng lượng (Calories)" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Cần đủ năng lượng để không sụt cân
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">khuyến nghị: 30–35 kcal/kg/ngày</p>
            <p className="text-sm text-gray-700 mb-2">Điều chỉnh theo:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Tuổi</li>
              <li>Mức độ hoạt động</li>
              <li>Tình trạng dinh dưỡng</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-sm text-blue-900 mb-1">
                <strong>👉 Lọc màng bụng:</strong>
              </p>
              <p className="text-sm text-blue-900">
                dịch lọc có glucose. Có thể cung cấp thêm 150–300 kcal/ngày
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="types-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="types-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo loại lọc máu
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        
        {/* Dialysis types comparison table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nội dung</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Chạy thận nhân tạo</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lọc màng bụng</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Đạm</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg (có thể cao hơn)</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Phospho</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 800–1000 mg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 800–1000 mg</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Kali</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2–3 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Linh hoạt hơn</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Nước</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">500 ml + nước tiểu</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Linh hoạt hơn</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Tăng cân</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1–2 kg giữa các lần lọc</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo dõi hàng ngày</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card>
          <CardHeader icon={Info} title="Hemodialysis" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 1.2-1.5 g/kg/ngày</li>
              <li>Phosphorus: &lt; 800-1000 mg/ngày</li>
              <li>Potassium: &lt; 2-3g/ngày (tùy tần suất lọc)</li>
              <li>dịch: 500ml + lượng nước tiểu/ngày</li>
              <li>Tăng cân giữa các lần lọc: 1-2 kg</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Peritoneal dialysis" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 1.2-1.5 g/kg/ngày (có thể cần cao hơn do mất protein qua dịch lọc)</li>
              <li>Phosphorus: &lt; 800-1000 mg/ngày</li>
              <li>Potassium: Có thể linh hoạt hơn do lọc liên tục</li>
              <li>dịch: Có thể linh hoạt hơn, nhưng vẫn cần theo dõi</li>
              <li>Lưu ý: dịch lọc chứa glucose có thể cung cấp năng lượng (150-300 kcal/ngày)</li>
            </ul>
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
              Rất hay gặp ở bệnh nhân lọc máu.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Biểu hiện:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sụt cân</li>
              <li>Mệt nhiều</li>
              <li>Albumin thấp</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Tăng đạm và năng lượng</li>
                <li>Bổ sung dinh dưỡng khi cần</li>
                <li>Theo dõi albumin, prealbumin</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={AlertCircle} title="🦴 Rối loạn xương – khoáng" />
          <CardContent>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Phospho cao</li>
              <li>• Vitamin D thấp</li>
              <li>• PTH tăng</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-white p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Cần:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Ăn giảm phospho</li>
                <li>Uống thuốc gắn phospho đúng cách</li>
                <li>Bổ sung vitamin D theo chỉ định</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={Info} title="🩸 Thiếu máu" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Thường gặp ở bệnh nhân lọc máu
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Cần:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Đủ sắt</li>
              <li>Đủ B12, folate</li>
              <li>EPO chỉ hiệu quả khi đủ sắt</li>
            </ul>
            <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý:</p>
              <p className="text-sm text-amber-900">
                Sắt uống cách xa thuốc gắn phospho 1–2 giờ
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Thuốc – Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-amber-200 bg-amber-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Thuốc gắn phospho:</strong> uống cùng bữa ăn</li>
              <li>• <strong>Vitamin D:</strong> uống với bữa ăn</li>
              <li>• <strong>Sắt:</strong> tránh uống chung với thuốc gắn phospho</li>
              <li>• <strong>EPO:</strong> cần đủ sắt mới hiệu quả</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3 mt-3">
              <p className="text-sm text-amber-900">
                <strong>👉 Không tự ý thay đổi ăn uống khi đang dùng thuốc.</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi
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
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Albumin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Hàng tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 3,5 g/dL</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phospho</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Thường xuyên</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3,5–5,5 mg/dL</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kali</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Thường xuyên</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3,5–5,0 mEq/L</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần lọc (HD)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Tăng 1–2 kg</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>PTH</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo mục tiêu</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Hemoglobin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Thường xuyên</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">10–12 g/dL</td>
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
        <div className="space-y-4 text-body-lg">
          <Card className="border-red-200 bg-red-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Ăn đạm như CKD chưa lọc → thiếu đạm</li>
              <li>• Không theo dõi tăng cân giữa các lần lọc</li>
              <li>• Quên phospho "ẩn" trong đồ chế biến</li>
              <li>• Áp dụng cùng một chế độ ăn cho HD và PD</li>
            </ul>
          </Card>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong lọc máu rất phức tạp và phải cá nhân hóa theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Loại lọc máu</li>
            <li>Tần suất lọc</li>
            <li>Lượng nước tiểu còn lại</li>
            <li>xét nghiệm</li>
            <li>Tình trạng dinh dưỡng thực tế</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>👉 Khi có nghi ngờ, nên tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.</strong>
            </p>
          </div>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu protein cao (1.2-1.5 g/kg) và năng lượng cho bệnh nhân lọc máu,
                đặc biệt quan trọng để phòng ngừa suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như phosphorus, potassium, vitamin D - rất quan trọng trong quản lý lọc máu.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch với điều chỉnh cho lọc máu, đặc biệt quan trọng trong quản lý quá tải dịch.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng để theo dõi tình trạng dinh dưỡng và phát hiện suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
