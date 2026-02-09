import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Ung thư (Tổng quan)",
  description:
    "Hướng dẫn giáo dục tổng quan về dinh dưỡng trong ung thư. Bao gồm quản lý năng lượng, protein, vi chất, quản lý tác dụng phụ điều trị, và hỗ trợ điều trị.",
  keywords: [
    "ung thư",
    "cancer",
    "dinh dưỡng ung thư",
    "cancer nutrition",
    "tác dụng phụ điều trị",
    "hỗ trợ điều trị",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Ung thư (Tổng quan)",
    description:
      "Hướng dẫn giáo dục tổng quan về dinh dưỡng trong ung thư. Bao gồm quản lý năng lượng, protein, vi chất, quản lý tác dụng phụ điều trị, và hỗ trợ điều trị.",
    url: "https://clinical-nutrition.edu.vn/knowledge/cancer-nutrition",
  },
};

export default function CancerNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Ung thư" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            🎗️ Dinh dưỡng trong Ung thư: Hướng dẫn Giáo dục (Tổng quan)
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Ung thư và các phương pháp điều trị (phẫu thuật, hóa trị, xạ trị, miễn dịch…) ảnh hưởng rất mạnh đến dinh dưỡng của người bệnh.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng không chữa khỏi ung thư, nhưng có vai trò cực kỳ quan trọng trong:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giữ sức</li>
              <li>Chịu đựng được điều trị</li>
              <li>Giảm tác dụng phụ</li>
              <li>Cải thiện chất lượng cuộc sống</li>
              <li>Ảnh hưởng đến tiên lượng lâu dài</li>
            </ul>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
            <li>Giúp nhân viên y tế, người bệnh và người nhà hiểu đúng về vai trò của dinh dưỡng trong ung thư</li>
            <li>Tránh các sai lầm phổ biến và nguy hiểm trong ăn uống</li>
          </ul>
          <p className="text-body-sm font-semibold text-red-600">
            ⚠️ Lưu ý quan trọng: Dinh dưỡng trong ung thư không có một công thức chung, mà phụ thuộc vào:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
            <li>Loại ung thư</li>
            <li>Giai đoạn bệnh</li>
            <li>Phương pháp điều trị</li>
            <li>Đáp ứng và khả năng ăn uống của từng người</li>
          </ul>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Ung thư?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Người bệnh ung thư rất dễ suy dinh dưỡng, do nhiều nguyên nhân cùng lúc:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li><strong>🔥 Tăng chuyển hóa:</strong> cơ thể tiêu hao năng lượng và protein nhiều hơn</li>
            <li><strong>🍽️ Ăn kém:</strong> chán ăn, buồn nôn, thay đổi vị giác</li>
            <li><strong>🦠 Hấp thu kém:</strong> niêm mạc tiêu hóa bị ảnh hưởng</li>
            <li><strong>💧 Mất chất:</strong> tiêu chảy, nôn ói</li>
          </ul>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Suy dinh dưỡng trong ung thư có thể:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Làm người bệnh yếu nhanh</li>
              <li>Giảm khả năng chịu hóa trị / xạ trị</li>
              <li>Tăng biến chứng và nhiễm trùng</li>
              <li>Giảm chất lượng sống</li>
              <li>Ảnh hưởng xấu đến tiên lượng</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-1">📌 Thông điệp cốt lõi:</p>
            <p className="text-sm text-green-900">
              <strong>Ung thư không giết người bệnh nhanh bằng suy dinh dưỡng.</strong>
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
          <CardHeader icon={CheckCircle} title="🔥 năng lượng (Calories)" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nhu cầu năng lượng</p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Khuyến nghị chung:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>30–35 kcal/kg/ngày</li>
                  <li>Có thể cần cao hơn (35–40 kcal/kg/ngày) nếu:
                    <ul className="list-disc space-y-1 pl-6 mt-1">
                      <li>Sụt cân</li>
                      <li>Suy dinh dưỡng</li>
                      <li>Đang điều trị tích cực</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900 mb-2">
                  <li>Không phải bệnh nhân ung thư nào cũng gầy</li>
                  <li>Một số người thừa cân, cần điều chỉnh phù hợp</li>
                </ul>
                <p className="text-sm text-amber-900">
                  <strong>👉 Mục tiêu:</strong> Không sụt cân – giữ sức – không để cơ thể kiệt quệ.
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
                <li>Chữa lành mô</li>
                <li>Phục hồi sau điều trị</li>
                <li>Tăng khả năng chịu đựng hóa trị/xạ trị</li>
              </ul>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Nhu cầu protein</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>Thông thường: 1,2 – 1,5 g/kg/ngày</li>
                  <li>Có thể cần 1,5 – 2,0 g/kg/ngày nếu:
                    <ul className="list-disc space-y-1 pl-6 mt-1">
                      <li>Suy dinh dưỡng</li>
                      <li>Đang điều trị tích cực</li>
                      <li>Có vết thương, sau phẫu thuật</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-sm text-blue-900 mb-2">
                  <strong>👉 Ưu tiên:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                  <li>Thịt nạc</li>
                  <li>Cá</li>
                  <li>Trứng</li>
                  <li>Sữa</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm text-red-900">
                  <strong>❌ Không nên kiêng đạm vì sợ "nuôi ung thư" – đây là hiểu lầm nguy hiểm.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🧬 Vi chất Dinh dưỡng" />
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Người bệnh ung thư thường thiếu:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Sắt → thiếu máu</li>
                  <li>Vitamin B12, folate</li>
                  <li>Vitamin D</li>
                  <li>Kẽm</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">👉 Nguyên nhân:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
                  <li>Ăn ít</li>
                  <li>Hấp thu kém</li>
                  <li>Mất qua tiêu hóa</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý quan trọng:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                  <li>Chỉ bổ sung khi cần</li>
                  <li>Không tự ý dùng liều cao chất chống oxy hóa, vì:
                    <ul className="list-disc space-y-1 pl-6 mt-1">
                      <li>Có thể tương tác với hóa trị/xạ trị</li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="vietnamese-foods-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="vietnamese-foods-heading" className="heading-2 whitespace-nowrap">
            🍽️ Bảng thực phẩm Việt Nam cho Bệnh nhân Ung thư
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🥩 NHÓM GIÀU PROTEIN (RẤT QUAN TRỌNG)" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN ĂN (ưu tiên)</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lợi ích</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Thịt heo nạc</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ kiếm, dễ ăn</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Nấu mềm, tránh chiên</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Thịt gà bỏ da</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đạm tốt, dễ tiêu</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Hấp, luộc</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Cá (cá quả, cá basa, cá hồi)</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đạm tốt, ít béo</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Cá béo có omega-3</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Trứng gà</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đạm chất lượng cao</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">1 quả/ngày nếu ăn được</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đậu phụ</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ ăn, đạm thực vật</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Phù hợp khi chán thịt</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Sữa, sữa chua</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đạm + năng lượng</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Chọn loại dễ uống</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 mb-2">⚠️ CẦN LƯU Ý</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-amber-200">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Thịt chế biến (xúc xích, jambon)</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Nhiều muối, phụ gia</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Thịt nướng cháy</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Có chất gây hại</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🍚 NHÓM TINH BỘT – NĂNG LƯỢNG" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN ĂN</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lợi ích</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Cơm trắng</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ ăn, dễ tiêu</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Cháo</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Phù hợp khi mệt, buồn nôn</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Bún, phở</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ ăn, quen thuộc</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Khoai lang</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">năng lượng + xơ nhẹ</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Bánh mì mềm</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ ăn khi chán cơm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mt-3">
                  <p className="text-sm text-blue-900">
                    <strong>👉 Không cần kiêng tinh bột nếu không có chỉ định đặc biệt.</strong>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 mb-2">⚠️ HẠN CHẾ</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-amber-200">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Bánh ngọt, kẹo nhiều đường</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Ít dinh dưỡng</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Nước ngọt có gas</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Gây đầy bụng</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🥬 RAU CỦ & TRÁI CÂY" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN ĂN (linh hoạt theo dung nạp)</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Rau muống, mồng tơi</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Nấu chín, mềm</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Bí đỏ, cà rốt</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ tiêu</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Chuối</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ ăn, cung cấp năng lượng</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Đu đủ chín</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ tiêu</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Táo (gọt vỏ)</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Khi tiêu hóa tốt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-3">
                  <p className="text-sm text-amber-900">
                    <strong>📌 Khi tiêu chảy hoặc viêm niêm mạc → giảm rau sống.</strong>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 mb-2">⚠️ CẦN THẬN TRỌNG</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-amber-200">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Rau sống</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ kích thích ruột</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Trái cây quá chua</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Gây khó chịu</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Rau nhiều xơ cứng</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Khó tiêu khi mệt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🧈 CHẤT BÉO" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN DÙNG</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lợi ích</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dầu đậu nành, dầu mè</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">năng lượng cao</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Dầu ô liu</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Tốt cho tim mạch</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Cá béo</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Omega-3, chống viêm</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-amber-700 mb-2">⚠️ HẠN CHẾ</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-amber-200">
                    <thead className="bg-amber-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Mỡ động vật nhiều</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Khó tiêu</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Đồ chiên rán</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Gây buồn nôn</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🥛 SỮA & SẢN PHẨM DINH DƯỠNG" />
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN CÂN NHẮC</p>
              <div className="overflow-x-auto my-3">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                  <thead className="bg-green-50">
                    <tr>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Sản phẩm</th>
                      <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Khi nào dùng</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-2 text-xs text-neutral-700">Sữa tươi</td>
                      <td className="px-4 py-2 text-xs text-neutral-700">Khi ăn uống kém</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-2 text-xs text-neutral-700">Sữa giàu đạm</td>
                      <td className="px-4 py-2 text-xs text-neutral-700">Sụt cân, suy dinh dưỡng</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-xs text-neutral-700">Thức uống dinh dưỡng y học</td>
                      <td className="px-4 py-2 text-xs text-neutral-700">Không ăn đủ qua bữa</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>👉 Dùng bổ sung, không thay hoàn toàn bữa ăn nếu còn ăn được.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🍵 ĐỒ UỐNG" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✅ NÊN</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                    <thead className="bg-green-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Đồ uống</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Nước lọc</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Uống từng ngụm</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Nước ấm</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Dễ chịu</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Nước điện giải</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Khi tiêu chảy</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 mb-2">❌ TRÁNH</p>
                <div className="overflow-x-auto my-3">
                  <table className="min-w-full divide-y divide-neutral-200 border border-red-200">
                    <thead className="bg-red-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Đồ uống</th>
                        <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Lý do</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-neutral-200">
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Rượu bia</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Hại gan</td>
                      </tr>
                      <tr className="bg-neutral-50">
                        <td className="px-4 py-2 text-xs text-neutral-700">Nước ngọt</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Đầy bụng</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-xs text-neutral-700">Trà đặc, cà phê đặc</td>
                        <td className="px-4 py-2 text-xs text-neutral-700">Kích thích</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="myths-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="myths-heading" className="heading-2 whitespace-nowrap">
            🚫 Những hiểu lầm phổ biến (Cần ghi rõ)
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <Card className="border-red-200 bg-red-50/30">
          <CardContent>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-sm font-semibold text-red-900 mb-1">❌ "Ăn đường nuôi tế bào ung thư"</p>
                <p className="text-sm text-gray-700">
                  ➡️ <strong>Sai</strong> – đường là nguồn năng lượng cần thiết, vấn đề là ăn đủ và đúng, không phải kiêng tuyệt đối.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-sm font-semibold text-red-900 mb-1">❌ "Ung thư phải nhịn ăn cho tế bào ung thư chết"</p>
                <p className="text-sm text-gray-700">
                  ➡️ <strong>Nguy hiểm</strong> – nhịn ăn làm người bệnh yếu nhanh hơn ung thư.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="text-sm font-semibold text-red-900 mb-1">❌ "Chỉ ăn rau, bỏ thịt"</p>
                <p className="text-sm text-gray-700">
                  ➡️ <strong>Sai</strong> – thiếu đạm làm giảm khả năng chịu điều trị.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="golden-principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="golden-principles-heading" className="heading-2 whitespace-nowrap">
            📌 Nguyên tắc Vàng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <Card className="border-yellow-300 bg-yellow-50/50 shadow-lg">
          <CardHeader icon={CheckCircle} title="🎯 Mục tiêu Dinh dưỡng trong Ung thư" />
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span>Không sụt cân</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span>Đủ đạm</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span>Ăn được là tốt</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span>Không kiêng cực đoan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">✔</span>
                <span>Điều chỉnh theo triệu chứng</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="treatment-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="treatment-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo giai đoạn & Điều trị
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* Cancer treatment Stages table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Giai đoạn</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">năng lượng</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Protein</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mục tiêu</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Trước điều trị</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">30–35 kcal/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Chuẩn bị thể trạng</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Trong điều trị</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">30–40 kcal/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,5–2,0 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Giữ sức, giảm tác dụng phụ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Sau điều trị</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">30–35 kcal/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Phục hồi, phòng tái phát</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
          <h3 className="heading-4">Trước điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Đánh giá và cải thiện tình trạng dinh dưỡng nếu có thể</li>
            <li>Giáo dục về tác dụng phụ có thể xảy ra</li>
            <li>Chuẩn bị cho điều trị</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-red-200 bg-red-50/50 p-5">
          <h3 className="heading-4">Trong điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Quản lý tác dụng phụ (buồn nôn, nôn, tiêu chảy, thay đổi vị giác)</li>
            <li>Tăng năng lượng và protein nếu có suy dinh dưỡng</li>
            <li>Bổ sung dinh dưỡng nếu cần</li>
            <li>Điều chỉnh dựa trên đáp ứng và khả năng dung nạp</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
          <h3 className="heading-4">Sau điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Phục hồi dinh dưỡng</li>
            <li>Quản lý tác dụng phụ kéo dài</li>
            <li>Duy trì sức khỏe và phòng ngừa tái phát</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="symptoms-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="symptoms-heading" className="heading-2 whitespace-nowrap">
            Quản lý Tác dụng Phụ & Triệu chứng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader icon={AlertTriangle} title="🤢 Buồn nôn – Nôn" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Ăn nhiều bữa nhỏ</li>
              <li>Tránh mùi mạnh</li>
              <li>Thức ăn nguội/lạnh thường dễ chịu hơn</li>
              <li>Uống nước giữa các bữa, không uống nhiều lúc ăn</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={Info} title="👅 Thay đổi vị giác" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Dùng gia vị, thảo mộc</li>
              <li>Súc miệng trước ăn</li>
              <li>Tránh dụng cụ kim loại nếu thấy vị khó chịu</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-green-200 bg-green-50/30">
          <CardHeader icon={AlertCircle} title="🥣 Khó nuốt" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Thức ăn mềm, lỏng</li>
              <li>Cắt nhỏ</li>
              <li>Tránh thức ăn khô, cứng</li>
              <li>Có thể cần thức ăn y học / bổ sung dinh dưỡng</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={Info} title="💩 Tiêu chảy" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Giảm chất xơ, chất béo</li>
              <li>Tránh sữa nếu không dung nạp</li>
              <li>Uống đủ nước và điện giải</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader icon={AlertTriangle} title="⚠️ Suy dinh dưỡng" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-3">
              Rất thường gặp.
            </p>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Tăng năng lượng và protein</li>
                <li>Bổ sung dinh dưỡng đường uống</li>
                <li>Trường hợp nặng: nuôi ăn qua ống hoặc tĩnh mạch</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={Info} title="🧠 Cachexia (Suy mòn ung thư)" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Mất cơ và mỡ không chỉ do ăn ít
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Do viêm và rối loạn chuyển hóa
            </p>
            <div className="rounded-lg border border-red-200 bg-white p-3">
              <p className="text-sm text-red-900 mb-2">
                <strong>👉 Quản lý phức tạp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
                <li>Dinh dưỡng tích cực</li>
                <li>Có thể cần thuốc hỗ trợ</li>
                <li>Theo dõi sát</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng-Điều trị
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={Info} title="Hóa trị" />
            <CardContent>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
                <li>Buồn nôn, nôn, tiêu chảy, loét miệng</li>
                <li>Điều chỉnh ăn theo triệu chứng</li>
              </ul>
              <div className="bg-red-50 rounded-lg p-2 border border-red-200">
                <p className="text-sm text-red-900">
                  <strong>⚠️ Tránh tự ý dùng chất chống oxy hóa liều cao.</strong>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader icon={Info} title="Xạ trị" />
            <CardContent>
              <p className="text-sm text-gray-700 mb-2">
                Tác dụng phụ tùy vị trí:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                <li>Đầu–cổ: khó nuốt, loét miệng</li>
                <li>Ngực: viêm thực quản</li>
                <li>Bụng: tiêu chảy</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={Info} title="Phẫu thuật" />
            <CardContent>
              <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                <li>Trước mổ: cải thiện dinh dưỡng nếu có thể</li>
                <li>Sau mổ: tăng đạm để lành vết thương</li>
              </ul>
            </CardContent>
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
              <thead className="bg-green-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Cân nặng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Hàng tuần</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Không giảm &gt; 5%</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Albumin</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">1–3 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 3,5 g/dL</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Lượng ăn</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Thường xuyên</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Đủ năng lượng &amp; đạm</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Tác dụng phụ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Kiểm soát tốt</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Vi chất</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Khi nghi ngờ thiếu</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường</td>
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
            Các cạm bẫy
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <Card className="border-red-200 bg-red-50/30">
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Nhịn ăn vì sợ "nuôi ung thư"</li>
            <li>• Kiêng đạm kéo dài</li>
            <li>• Không xử lý sớm tác dụng phụ</li>
            <li>• Dùng thực phẩm chức năng không kiểm soát</li>
          </ul>
        </Card>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong ung thư phải cá nhân hóa theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Loại ung thư</li>
            <li>Giai đoạn bệnh</li>
            <li>Phác đồ điều trị</li>
            <li>Khả năng ăn uống thực tế</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900 mb-2">
              <strong>Chế độ ăn cần cá nhân hóa</strong>
            </p>
            <p className="text-sm text-red-900 mb-2">
              <strong>Khi:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900 mb-2">
              <li>Sụt cân nhanh</li>
              <li>Ăn &lt; 50% khẩu phần</li>
              <li>Nôn/tiêu chảy kéo dài</li>
            </ul>
            <p className="text-sm text-red-900">
              <strong>→ Cần đánh giá dinh dưỡng sớm</strong>
            </p>
          </div>
          <div className="mt-3 p-2 bg-white rounded border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>👉 Luôn phối hợp với bác sĩ và chuyên gia dinh dưỡng khi cần.</strong>
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
                Tính toán nhu cầu năng lượng cao (30-40 kcal/kg) và protein (1.5-2.0 g/kg) cho bệnh nhân ung thư,
                đặc biệt quan trọng trong điều trị tích cực và phòng ngừa suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như sắt, B12, folate, vitamin D, kẽm - rất quan trọng trong quản lý ung thư
                do nguy cơ thiếu hụt cao.
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
          <Card href="/tools/refeeding-syndrome-risk">
            <CardHeader icon={CheckCircle} title="Đánh giá Nguy cơ Tái cho Ăn" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nguy cơ hội chứng tái cho ăn ở bệnh nhân ung thư có suy dinh dưỡng.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
