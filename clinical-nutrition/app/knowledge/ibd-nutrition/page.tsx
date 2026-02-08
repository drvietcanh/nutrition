import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh viêm ruột (IBD)",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng trong Crohn's disease và Ulcerative Colitis. Bao gồm quản lý năng lượng, protein, vi chất, và điều chỉnh theo đợt cấp và thời kỳ ổn định.",
  keywords: [
    "bệnh viêm ruột",
    "IBD",
    "Crohn's disease",
    "Ulcerative Colitis",
    "viêm ruột",
    "dinh dưỡng IBD",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh viêm ruột (IBD)",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng trong Crohn's disease và Ulcerative Colitis. Bao gồm quản lý năng lượng, protein, vi chất, và điều chỉnh theo đợt cấp và thời kỳ ổn định.",
    url: "https://clinical-nutrition.edu.vn/knowledge/ibd-nutrition",
  },
};

export default function IBDNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh viêm ruột (IBD)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            🟢 Dinh dưỡng trong Bệnh viêm ruột (IBD): Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh viêm ruột (IBD) bao gồm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Crohn</li>
            <li>Viêm loét đại tràng (Ulcerative Colitis)</li>
          </ul>
          <p className="text-body">
            Đây là các bệnh viêm mạn tính của đường tiêu hóa, diễn tiến từng đợt, xen kẽ:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Đợt cấp (bùng phát)</li>
            <li>Giai đoạn ổn định</li>
          </ul>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng đóng vai trò rất quan trọng, giúp:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giảm triệu chứng</li>
              <li>Phòng suy dinh dưỡng</li>
              <li>Hỗ trợ điều trị và hồi phục</li>
            </ul>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế, người bệnh và người nhà hiểu đúng về dinh dưỡng trong IBD</li>
            <li>Tránh các sai lầm phổ biến như kiêng quá mức hoặc nhịn ăn kéo dài</li>
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
            Vì sao Dinh dưỡng Đặc biệt Quan trọng trong IBD?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Người bệnh IBD rất dễ suy dinh dưỡng, do:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li>Ruột viêm → hấp thu kém</li>
            <li>Tiêu chảy, mất chất</li>
            <li>Đau bụng → ăn ít</li>
            <li>Tự kiêng nhiều loại thực phẩm</li>
          </ul>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Nếu dinh dưỡng kém:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Bệnh nặng hơn</li>
              <li>Hồi phục chậm</li>
              <li>Dễ tái phát</li>
              <li>Giảm chất lượng cuộc sống</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-1">📌 Nguyên tắc quan trọng:</p>
            <p className="text-sm text-green-900">
              <strong>IBD không phải là bệnh "càng kiêng càng tốt".</strong>
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
          <CardHeader icon={CheckCircle} title="🔥 Năng lượng & 🥩 Protein" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Năng lượng</p>
                <p className="text-sm text-gray-700 mb-2">Cần đủ năng lượng để:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>Duy trì cân nặng</li>
                  <li>Tránh suy dinh dưỡng</li>
                </ul>
                <p className="text-sm text-gray-700">
                  Trong đợt cấp hoặc sau phẫu thuật:
                </p>
                <p className="text-sm text-gray-700">
                  Có thể cần nhiều năng lượng hơn
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Protein (Chất đạm)</p>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Khuyến nghị:</strong> 1,2 – 1,5 g/kg/ngày
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Vai trò:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Chữa lành niêm mạc ruột</li>
                  <li>Giữ khối cơ</li>
                  <li>Phòng sụt cân</li>
                </ul>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2 mt-2">
                  <p className="text-sm text-blue-900">
                    <strong>👉 Không nên kiêng đạm kéo dài.</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🍽️ Chế độ Ăn Theo Từng Giai đoạn Bệnh" />
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">🔴 Đợt cấp (bùng phát)</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Mục tiêu:</strong> giảm kích thích ruột – vẫn đảm bảo đủ chất
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Có thể cần:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>Ăn ít chất xơ</li>
                  <li>Giảm chất béo</li>
                  <li>Chia nhỏ bữa</li>
                  <li>Thức ăn mềm, dễ tiêu</li>
                  <li>Trường hợp nặng: có thể cần ăn lỏng hoặc bổ sung dinh dưỡng</li>
                </ul>
                <p className="text-sm font-semibold text-gray-900 mb-1">❌ Tránh:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Rau sống</li>
                  <li>Trái cây nhiều xơ</li>
                  <li>Đồ cay, rượu bia</li>
                  <li>Thực phẩm gây triệu chứng cá nhân</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">🟢 Giai đoạn ổn định</h4>
                <p className="text-sm text-gray-700 mb-2">
                  <strong>Mục tiêu:</strong> ăn gần như bình thường – đa dạng – đủ chất
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Nguyên tắc:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Ăn đa dạng thực phẩm</li>
                  <li>Không tự ý kiêng kéo dài</li>
                  <li>Tránh những món đã từng gây triệu chứng cho cá nhân</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-3">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý quan trọng:</p>
                <p className="text-sm text-amber-900">
                  Không có một chế độ ăn "chuẩn" cho tất cả bệnh nhân IBD.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="🧬 Vi chất Dinh dưỡng – Dễ Thiếu trong IBD" />
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các vi chất thường thiếu:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Sắt → thiếu máu</li>
                  <li>Vitamin B12</li>
                  <li>Folate</li>
                  <li>Vitamin D</li>
                  <li>Kẽm</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nguyên nhân:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
                  <li>Hấp thu kém</li>
                  <li>Mất qua tiêu chảy</li>
                  <li>Ăn kiêng kéo dài</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-sm text-blue-900 mb-2">
                  <strong>👉 Cần:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                  <li>Theo dõi xét nghiệm</li>
                  <li>Bổ sung khi cần, theo chỉ định</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Tình trạng Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* IBD Disease Status Comparison Table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tình trạng</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Năng lượng</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Protein</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Chế độ ăn</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Đợt cấp</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Có thể tăng</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Ít xơ, dễ tiêu</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bổ sung nếu cần</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Ổn định</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Đủ duy trì cân</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường, đa dạng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tránh món gây triệu chứng</td>
              </tr>
            </tbody>
          </table>
        </div>
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
              Rất thường gặp trong IBD.
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sụt cân</li>
              <li>Mệt mỏi</li>
              <li>Giảm khối cơ</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Tăng năng lượng và protein</li>
                <li>Chia nhỏ bữa</li>
                <li>Bổ sung dinh dưỡng khi cần</li>
                <li>Theo dõi albumin, prealbumin</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={Info} title="🧪 Thiếu vi chất" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Thiếu máu do thiếu sắt</li>
              <li>Thiếu vitamin D, B12</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-white p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Bổ sung theo xét nghiệm</li>
                <li>Không tự ý dùng liều cao kéo dài</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Những Hiểu lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-red-200 bg-red-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• "IBD là phải kiêng suốt đời"</li>
              <li>• "Hết đợt cấp vẫn không dám ăn"</li>
              <li>• "Càng ăn ít thì ruột càng đỡ viêm"</li>
              <li>• "Tự loại bỏ nhiều nhóm thực phẩm"</li>
            </ul>
            <div className="rounded-lg border border-red-200 bg-white p-3 mt-3">
              <p className="text-sm text-red-900">
                <strong>👉 Những điều này dễ dẫn đến suy dinh dưỡng.</strong>
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong IBD phải cá nhân hóa theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Loại bệnh (Crohn hay viêm loét đại tràng)</li>
            <li>Vị trí ruột bị viêm</li>
            <li>Giai đoạn bệnh (đợt cấp hay ổn định)</li>
            <li>Khả năng dung nạp của từng người</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>👉 Khi triệu chứng kéo dài hoặc sụt cân, nên trao đổi với bác sĩ hoặc chuyên gia dinh dưỡng.</strong>
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
