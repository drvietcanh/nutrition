import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh gout",
  description:
    "Hướng dẫn dinh dưỡng cho bệnh gout - purin, rượu bia, và cách kiểm soát. Gout là bệnh mạn, cần điều trị suốt đời. Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric",
  keywords: ["gout", "gút", "acid uric", "purin", "dinh dưỡng"],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh gout",
    description: "Hướng dẫn dinh dưỡng cho bệnh gout.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-benh-gut-va-tang-acid-uric",
  },
};

export default function DinhDuongTrongBenhGutVaTangAcidUricPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-benh-gut-va-tang-acid-uric');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh gout" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Bệnh gout: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh gout là bệnh mạn tính do tăng acid uric trong máu, gây viêm khớp. 
            Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric.
          </p>
          <Callout variant="warning" title="Quan trọng">
            <p className="text-body-sm">
              Gout là bệnh mạn, cần điều trị suốt đời. Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric.
            </p>
          </Callout>
          <Callout variant="info" title="Mục đích Giáo dục">
            <p className="text-body-sm">
              Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
            </p>
          </Callout>
        </div>
      </header>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={AlertCircle} title="❌ Hạn chế Purin cao" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nội tạng động vật: gan, thận, tim</li>
              <li>Thịt đỏ: thịt bò, thịt heo</li>
              <li>Hải sản: tôm, cua, cá mòi, cá cơm</li>
              <li>Nước dùng thịt, canh xương</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="✅ Nên ăn" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Protein nạc: thịt gà, cá trắng (vừa phải)</li>
              <li>Rau củ quả: hầu hết rau củ đều tốt</li>
              <li>Sữa ít béo, sữa chua</li>
              <li>Ngũ cốc nguyên hạt</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="🍺 Tránh rượu bia" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Rượu bia làm tăng acid uric và giảm đào thải</li>
              <li>đặc biệt tránh bia trong cơn gout cấp</li>
              <li>Tốt nhất là không uống</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="💧 Uống đủ Nước" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>2-3 lít nước/ngày</li>
              <li>Giúp đào thải acid uric</li>
              <li>Nước lọc là tốt nhất</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Purine Content Tables */}
      <section aria-labelledby="purine-tables-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="purine-tables-heading" className="heading-2 whitespace-nowrap">
            Bảng Hàm lượng Purin trong Thực phẩm Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <div className="space-y-4">
          <p className="text-body-lg">
            Purin là chất có trong nhiều thực phẩm. Khi cơ thể phân hủy purin, tạo ra acid uric. 
            Người bị gút nên hạn chế thực phẩm có nhiều purin. Dưới đây là bảng phân loại cho thực phẩm Việt Nam:
          </p>

          {/* Very High Purine Table */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader icon={AlertCircle} title="🔴 Rất Cao (>200mg/100g) - Nên Tránh Hoàn Toàn" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có rất nhiều purin, nên tránh hoàn toàn, đặc biệt trong cơn gút cấp:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Purin (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Gan lợn</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~300</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nội tạng có purin cao nhất</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thận lợn</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~210</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nội tạng</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá cơm khô</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~400</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá khô có purin rất cao</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá mòi</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~210</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá biển nhỏ</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước dùng thịt đậm đặc</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">Rất cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Canh xương, nước phở đậm đặc</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* High Purine Table */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardHeader icon={AlertCircle} title="🟠 Cao (150-200mg/100g) - Hạn chế Nghiêm ngặt" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có nhiều purin, nên hạn chế nghiêm ngặt, chỉ ăn 1-2 lần/tuần với lượng nhỏ:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Purin (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt bò</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~160</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Thịt đỏ có purin cao</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt lợn nạc</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~150</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Ăn ít, chọn thịt nạc</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá thu</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~180</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá biển</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá hồi</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~170</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá biển</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Tôm</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~150</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Hải sản</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cua</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~150</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Hải sản</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Medium Purine Table */}
          <Card className="border-yellow-200 bg-yellow-50/30">
            <CardHeader icon={CheckCircle} title="🟡 Trung bình (50-150mg/100g) - Ăn Vừa phải" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có purin trung bình, có thể ăn vừa phải (2-3 lần/tuần):
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-yellow-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Purin (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt gà</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~140</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Chọn thịt nạc, bỏ da</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt vịt</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~138</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Bỏ da, bỏ mỡ</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá lóc (cá quả)</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~100-120</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá đồng, tốt hơn cá biển</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá rô</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~100-120</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá đồng</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá trê</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~100-120</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá đồng</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu phụ</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~50</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Đạm thực vật, tốt hơn thịt</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu xanh, đậu đỏ</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~50-100</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Đạm thực vật</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Low Purine Table */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🟢 Thấp (<50mg/100g) - Ăn Tự do" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có ít purin, có thể ăn tự do:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Purin (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Hầu hết rau củ quả</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt;50</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Rau muống, rau cải, cà chua, dưa chuột...</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa, sữa chua</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~0-10</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Rất ít purin, tốt cho người gút</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trứng</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~0-5</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nguồn đạm tốt, ít purin</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Gạo, bánh mì</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center"><50</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Tinh bột</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trái cây</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center"><50</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Chuối, cam, táo, ổi...</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Vietnamese Dishes Purine Table */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={Info} title="🍲 Món Ăn Việt Nam theo Hàm lượng Purin" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Dưới đây là phân loại một số món ăn Việt Nam phổ biến theo hàm lượng purin:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Món ăn</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Hàm lượng Purin</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Canh xương</strong></td>
                      <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Rất cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nước dùng đậm đặc từ xương có purin rất cao</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phở bò (nước dùng đậm)</strong></td>
                      <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nước phở đậm đặc từ xương bò</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt kho tàu</strong></td>
                      <td className="px-4 py-3 text-sm text-orange-700 text-center font-semibold">Cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Thịt lợn + nước dùng đậm đặc</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Tôm rang</strong></td>
                      <td className="px-4 py-3 text-sm text-orange-700 text-center font-semibold">Cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Tôm có purin cao</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá kho</strong></td>
                      <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình-cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Tùy loại cá (cá đồng tốt hơn cá biển)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Canh chua cá</strong></td>
                      <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu dùng cá trắng (cá lóc, cá rô), nước canh loãng</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt gà luộc</strong></td>
                      <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Bỏ da, bỏ nước luộc</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu phụ sốt cà chua</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp-trung bình</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Đạm thực vật, tốt cho người gút</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau luộc, rau xào</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Ăn tự do, rất tốt</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trứng luộc, trứng chiên</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nguồn đạm tốt, ít purin</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Tips for reducing purine */}
          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-amber-900 mb-2">
              💡 Mẹo Giảm Purin khi Chế biến
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li><strong>Luộc thịt/cá:</strong> Luộc thịt, cá rồi bỏ nước luộc - purin sẽ hòa tan vào nước, giảm được một phần</li>
              <li><strong>Nấu canh:</strong> Nấu canh loãng, không nấu đậm đặc - nước canh đậm đặc có nhiều purin</li>
              <li><strong>Chọn cá đồng:</strong> Cá đồng (cá lóc, cá rô, cá trê) có ít purin hơn cá biển</li>
              <li><strong>Bỏ nội tạng:</strong> Tuyệt đối không ăn nội tạng (gan, thận, tim)</li>
              <li><strong>Chọn đạm thực vật:</strong> Đậu phụ, đậu các loại có ít purin hơn thịt</li>
              <li><strong>Uống nhiều nước:</strong> Uống 2-3 lít nước/ngày giúp đào thải acid uric</li>
            </ul>
          </div>

          {/* Sample menu */}
          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader icon={CheckCircle} title="📋 Thực đơn Mẫu cho Người Bị Gút" />
            <CardContent>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="font-medium text-gray-900 mb-1">🌅 Bữa sáng:</p>
                  <p className="text-gray-700">Cháo yến mạch + Trứng luộc + Rau sống</p>
                  <p className="text-xs text-gray-600 italic">→ Tất cả đều ít purin</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">🌞 Bữa trưa:</p>
                  <p className="text-gray-700">Cơm + Cá lóc hấp (luộc, bỏ nước) + Canh rau cải (nấu loãng) + Rau muống luộc</p>
                  <p className="text-xs text-gray-600 italic">→ Cá đồng có purin trung bình, nấu đúng cách</p>
                </div>
                <div>
                  <p className="font-medium text-gray-900 mb-1">🌙 Bữa tối:</p>
                  <p className="text-gray-700">Cơm + Đậu phụ sốt cà chua + Canh mướp + Rau sống</p>
                  <p className="text-xs text-gray-600 italic">→ Đạm thực vật, ít purin</p>
                </div>
                <div className="bg-white rounded p-3 border border-purple-200 mt-3">
                  <p className="text-xs font-semibold text-purple-900 mb-1">⚠️ Lưu ý:</p>
                  <p className="text-xs text-gray-700">
                    Tránh hoàn toàn: Nội tạng, cá cơm khô, nước dùng đậm đặc, rượu bia. 
                    Hạn chế: Thịt đỏ, hải sản (chỉ 1-2 lần/tuần với lượng nhỏ).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {article && <RelatedContent currentArticle={article} />}
    </main>
  );
}
