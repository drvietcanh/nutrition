import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle, Lightbulb } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Đái tháo đường",
  description:
    "Hướng dẫn giáo dục về carbohydrate counting, quản lý đường huyết, và các nguyên tắc dinh dưỡng dựa trên bằng chứng để kiểm soát đái tháo đường type 1 và type 2.",
  keywords: [
    "đái tháo đường",
    "dinh dưỡng đái tháo đường",
    "carbohydrate counting",
    "quản lý đường huyết",
    "type 1 diabetes",
    "type 2 diabetes",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Đái tháo đường",
    description:
      "Hướng dẫn giáo dục về carbohydrate counting, quản lý đường huyết, và các nguyên tắc dinh dưỡng dựa trên bằng chứng để kiểm soát đái tháo đường type 1 và type 2.",
    url: "https://clinical-nutrition.edu.vn/knowledge/diabetes-nutrition",
  },
};

export default function DiabetesNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Đái tháo đường" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Đái tháo đường: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Đái tháo đường là bệnh mạn tính ảnh hưởng đến cách cơ thể sử dụng đường trong máu. 
            Nếu không kiểm soát tốt, bệnh có thể gây biến chứng ở tim, thận, mắt, thần kinh.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng giữ vai trò trung tâm trong quản lý đái tháo đường:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giúp kiểm soát đường huyết</li>
              <li>Giảm nguy cơ biến chứng</li>
              <li>Hỗ trợ dùng thuốc hiệu quả hơn</li>
              <li>Giữ sức khỏe lâu dài</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này cung cấp kiến thức dinh dưỡng mang tính giáo dục, dựa trên các khuyến cáo y khoa hiện nay.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế và người bệnh hiểu các nguyên tắc dinh dưỡng trong đái tháo đường</li>
            <li>Hỗ trợ tư vấn và thay đổi lối sống một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters in Diabetes */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng đặc biệt Quan trọng trong Đái tháo đường?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Khác với nhiều bệnh mạn tính khác, những gì và bao nhiêu bạn ăn sẽ ảnh hưởng trực tiếp đến đường huyết.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát đường huyết</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Tinh bột và đường trong thức ăn sẽ chuyển thành glucose</li>
                <li>• Hiểu và kiểm soát lượng carbohydrate là chìa khóa để ổn định đường huyết</li>
              </ul>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Phòng ngừa biến chứng</h3>
              <p className="text-sm text-gray-700 mb-2">
                Đường huyết ổn định giúp giảm nguy cơ:
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Bệnh thận</li>
                <li>• Bệnh mắt</li>
                <li>• Tổn thương thần kinh</li>
                <li>• Bệnh tim mạch</li>
              </ul>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2">🔹 Quản lý cân nặng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nhiều người đái tháo đường type 2 bị thừa cân</li>
                <li>• Giảm cân giúp đường huyết dễ kiểm soát hơn, có thể giảm nhu cầu thuốc</li>
              </ul>
            </Card>
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🔹 Bảo vệ tim mạch</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Người đái tháo đường có nguy cơ tim mạch cao</li>
                <li>• Chế độ ăn đúng giúp kiểm soát mỡ máu và huyết áp</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Basic Nutrition Principles */}
      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* Carbohydrate */}
        <Card>
          <CardHeader icon={CheckCircle} title="🍚 Carbohydrate (Tinh bột – Đường)" />
          <CardContent>
            <p className="text-body mb-4">
              Carbohydrate là nhóm chất ảnh hưởng mạnh nhất đến đường huyết.
            </p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mb-4">
              <p className="text-sm text-blue-900">
                <strong>👉 Không cần loại bỏ tinh bột, nhưng cần quản lý đúng cách.</strong>
              </p>
            </div>
            <h3 className="heading-4 mb-3">📏 Đếm Carbohydrate (Carbohydrate Counting)</h3>
            <p className="text-body-sm mb-3">
              Đây là cách phổ biến để kiểm soát đường huyết.
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
              <li><strong>1 phần carbohydrate ≈ 15g carbohydrate</strong></li>
              <li>Mỗi phần có thể làm đường huyết tăng khoảng 30–50 mg/dL (tùy từng người)</li>
            </ul>
            
            {/* Carbohydrate Counting Table */}
            <h4 className="heading-5 mb-3">Gợi ý phân bố carbohydrate</h4>
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thời điểm</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng carb</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Số phần (15g/phần)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bữa sáng</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">45–60 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–4</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Điều chỉnh theo cá nhân</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bữa trưa</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">45–60 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–4</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Điều chỉnh theo cá nhân</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bữa tối</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">45–60 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–4</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Điều chỉnh theo cá nhân</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bữa phụ</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">15–30 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">1–2</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nếu cần</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trước tập</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">15–30 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">1–2</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nếu đường huyết &lt; 100 mg/dL</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <Callout variant="info" title="Lưu ý quan trọng">
              <p className="text-body-sm mb-2">
                Các con số trên chỉ mang tính hướng dẫn. Cần điều chỉnh theo:
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Loại thuốc/insulin</li>
                <li>Mức vận động</li>
                <li>Mục tiêu đường huyết</li>
                <li>Khả năng ăn uống thực tế</li>
              </ul>
              <p className="text-body-sm mt-3 font-semibold">
                👉 Quan trọng hơn số lượng là phân bố đều trong ngày.
              </p>
            </Callout>
            
            <ul className="list-disc space-y-2 pl-6 text-body-sm mb-4 mt-4">
              <li>
                <strong>Phân bố:</strong> Phân bố carbohydrate đều trong ngày giúp tránh tăng đường huyết
                đột ngột sau bữa ăn.
              </li>
              <li>
                <strong>Nguồn tốt:</strong> Ngũ cốc nguyên hạt, trái cây, rau quả, đậu, sản phẩm sữa ít béo.
              </li>
            </ul>

            <h3 className="heading-4 mb-3 mt-4">📊 GI & GL – Hiểu đúng để dùng đúng</h3>
            
            {/* Glycemic Index Table */}
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Nhóm GI</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ví dụ</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ảnh hưởng</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>GI thấp</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Rau, đậu, yến mạch</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Đường huyết tăng chậm</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>GI trung bình</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Gạo lứt, mì</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tăng vừa</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>GI cao</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Cơm trắng, bánh mì trắng, nước ngọt</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tăng nhanh</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="space-y-3 text-body-sm">
              <p>
                <strong>GI:</strong> tốc độ làm tăng đường huyết
              </p>
              <p>
                <strong>GL:</strong> vừa tốc độ, vừa lượng ăn vào
              </p>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
                <p className="text-sm text-blue-900">
                  <strong>👉 Tổng lượng carbohydrate vẫn quan trọng hơn GI đơn thuần.</strong>
                </p>
              </div>
            </div>

            <h3 className="heading-4 mb-3 mt-4">🥬 Chất xơ</h3>
            <div className="space-y-2 text-body-sm">
              <ul className="list-disc space-y-1 pl-6">
                <li>Làm chậm hấp thu đường</li>
                <li>Giúp đường huyết ổn định hơn</li>
                <li>Tốt cho tim mạch và tiêu hóa</li>
              </ul>
              <div className="rounded-lg border border-green-200 bg-green-50 p-3 mt-3">
                <p className="text-sm text-green-900">
                  <strong>👉 Khuyến nghị:</strong> 25–30g/ngày từ rau, trái cây, đậu, ngũ cốc nguyên hạt.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vietnamese Food Carbohydrate Table */}
        <Card className="border-green-200 bg-green-50/30">
          <CardHeader icon={Info} title="Carbohydrate trong Món ăn Việt Nam" />
          <CardContent>
            <p className="text-body-sm mb-4">
              Bảng dưới đây giúp bạn ước tính carbohydrate trong các món ăn phổ biến ở Việt Nam:
            </p>
            
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Món ăn</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Khẩu phần</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Carbohydrate (g)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Số phần (15g)</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cơm trắng</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 bát vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~45g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">3 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">GI cao, nên giảm lượng hoặc dùng gạo lứt</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cơm gạo lứt</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 bát vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~45g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">3 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">GI trung bình, tốt hơn cơm trắng</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bún</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 tô vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~25g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1.5 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Ăn kèm nhiều rau và protein</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phở</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 tô vừa (bánh phở)</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~22g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1.5 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Phụ thuộc lượng bánh phở</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh mì</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 ổ vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~30g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">2 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">GI cao, nên ăn kèm đạm và rau</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh cuốn</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 đĩa vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~25g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1.5 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Có đạm từ thịt bên trong</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Khoai lang</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 củ vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~20g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1.3 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">GI trung bình, nhiều chất xơ</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chuối</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 quả vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~27g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1.8 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Chuối càng chín, GI càng cao</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Xoài chín</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1/2 quả vừa</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">~15g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">1 phần</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">GI trung bình-cao, nên ăn ít</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <Callout variant="info" title="Lưu ý">
              <p className="text-body-sm">
                Các giá trị trên là ước tính. Lượng carbohydrate thực tế có thể thay đổi tùy theo cách nấu, 
                khẩu phần, và từng người. Nên theo dõi đường huyết sau ăn để điều chỉnh phù hợp.
              </p>
            </Callout>
          </CardContent>
        </Card>

        {/* Practical Application Vietnamese */}
        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={Lightbulb} title="Áp dụng Nhanh trong đời sống Việt Nam" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <h4 className="heading-5 mb-2">Khi ăn cơm</h4>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Giảm lượng cơm trắng: thay 1 bát bằng 1/2 bát cơm trắng + 1/2 bát cơm gạo lứt</li>
                  <li>Ăn kèm nhiều rau xanh, thịt/cá để làm chậm hấp thu đường</li>
                  <li>Ăn rau trước, sau đó mới ăn cơm và thức ăn</li>
                  <li>Ví dụ: 1/2 bát cơm + thịt kho + canh chua + rau luộc = ~45g carb</li>
                </ul>
              </div>

              <div>
                <h4 className="heading-5 mb-2">Khi ăn bún/phở</h4>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chú ý lượng bánh: không nên ăn quá nhiều bánh phở/bún</li>
                  <li>Ăn kèm nhiều rau thơm, giá đỗ, rau sống</li>
                  <li>Thêm thịt/cá để có đạm, giúp làm chậm hấp thu đường</li>
                  <li>Hạn chế nước dùng quá ngọt hoặc quá mặn</li>
                  <li>Ví dụ: 1 tô phở vừa + nhiều rau + thịt bò = ~25-30g carb</li>
                </ul>
              </div>

              <div>
                <h4 className="heading-5 mb-2">Trái cây</h4>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Ăn sau bữa ăn chính, không ăn khi đói</li>
                  <li>Chọn trái cây GI thấp: táo, cam, ổi (thay vì xoài chín, chuối chín nẫu)</li>
                  <li>Ăn lượng vừa phải: 1-2 phần mỗi lần (15-30g carb)</li>
                  <li>Tránh ép nước, nên ăn nguyên quả để có chất xơ</li>
                </ul>
              </div>

              <div>
                <h4 className="heading-5 mb-2">Ví dụ bữa ăn trong ngày</h4>
                <div className="bg-white rounded-lg p-3 border border-blue-200">
                  <p className="text-sm font-semibold mb-2">Bữa sáng:</p>
                  <p className="text-sm text-gray-700 mb-2">
                    Cháo yến mạch + trái cây = ~45g carb (3 phần)
                  </p>
                  
                  <p className="text-sm font-semibold mb-2 mt-3">Bữa trưa:</p>
                  <p className="text-sm text-gray-700 mb-2">
                    1/2 bát cơm gạo lứt + thịt gà kho + canh chua + rau luộc = ~45g carb (3 phần)
                  </p>
                  
                  <p className="text-sm font-semibold mb-2 mt-3">Bữa tối:</p>
                  <p className="text-sm text-gray-700 mb-2">
                    1 tô phở vừa + nhiều rau + thịt bò = ~25g carb (1.5 phần)
                  </p>
                  
                  <p className="text-sm font-semibold mb-2 mt-3">Bữa phụ (nếu cần):</p>
                  <p className="text-sm text-gray-700">
                    1 quả táo = ~15g carb (1 phần)
                  </p>
                  
                  <p className="text-xs text-gray-600 mt-3">
                    <strong>Tổng:</strong> ~130g carbohydrate (8-9 phần) - phù hợp cho nhiều người đái tháo đường
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Protein */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🥩 Protein (Chất đạm)</h3>
          <div className="space-y-3 text-body">
            <p>
              Người đái tháo đường không cần ăn nhiều đạm hơn người bình thường
            </p>
            <p>
              <strong>Khuyến nghị chung:</strong> 0.8–1.0 g/kg/ngày
            </p>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-3">
              <p className="text-sm font-semibold text-amber-900 mb-2">📌 Lưu ý:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Đạm không nên dùng để "bù" tinh bột</li>
                <li>Người có bệnh thận cần đánh giá kỹ trước khi tăng đạm</li>
              </ul>
            </div>
            <p className="text-body-sm mt-3">
              <strong>Nguồn tốt:</strong> Thịt nạc, cá, gia cầm, đậu, sản phẩm sữa ít béo, trứng. 
              Ưu tiên protein thực vật và cá có thể tốt cho sức khỏe tim mạch.
            </p>
          </div>
        </div>

        {/* Fat */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🧈 Chất béo</h3>
          <div className="space-y-3 text-body">
            <p>
              Không làm tăng đường huyết trực tiếp, nhưng <strong>rất quan trọng cho tim mạch</strong>.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Nên ưu tiên:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Dầu thực vật</li>
                  <li>Cá béo</li>
                  <li>Các loại hạt</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">Nên hạn chế:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Mỡ động vật</li>
                  <li>Đồ chiên</li>
                  <li>Thức ăn chế biến sẵn</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Energy & Weight Management */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">⚖️ năng lượng & Cân nặng</h3>
          <div className="space-y-3 text-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">Đái tháo đường type 2</p>
                <p className="text-sm text-gray-700">
                  Giảm 5–10% cân nặng có thể cải thiện rõ đường huyết
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Đái tháo đường type 1</p>
                <p className="text-sm text-gray-700">
                  Không cần giảm cân. Mục tiêu là ăn đều – kiểm soát đường huyết
                </p>
              </div>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200 mt-3">
              <p className="text-sm text-red-900">
                <strong>⚠️ Không giảm cân quá nhanh hoặc quá mức.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Nutrition Adjustments by Disease Status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo Thuốc & Vận động
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Điều chỉnh dinh dưỡng cho bệnh nhân đái tháo đường cần được cá nhân hóa dựa trên loại thuốc,
            hoạt động thể chất, và các yếu tố khác:
          </p>

          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">Theo Thuốc</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Insulin / thuốc dễ gây hạ đường huyết → không được bỏ bữa</strong>
              </li>
              <li>
                <strong>Metformin:</strong> Uống với bữa ăn để giảm tác dụng phụ đường tiêu hóa
              </li>
              <li>
                <strong>Sulfonylureas:</strong> Cần ăn đều đặn, không bỏ bữa
              </li>
              <li>
                <strong>DPP-4 inhibitors, GLP-1 agonists:</strong> Ít nguy cơ hạ đường huyết, linh hoạt hơn
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">Theo Vận động</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Tập thể dục có thể làm đường huyết giảm</strong>
              </li>
              <li>
                <strong>Cần theo dõi đường huyết trước – trong – sau tập</strong>
              </li>
              <li>
                <strong>Trước tập:</strong> Nếu đường huyết &lt; 100 mg/dL, có thể cần ăn 15-30g carbohydrate
              </li>
              <li>
                <strong>Sau tập:</strong> Có thể cần ăn thêm carbohydrate hoặc giảm insulin
              </li>
              <li>
                <strong>Tập kéo dài:</strong> Có thể cần ăn carbohydrate trong khi tập (15-30g mỗi 30-60 phút)
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">Theo Bệnh lý Kèm</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Bệnh thận (Diabetic Nephropathy):</strong> Có thể cần hạn chế protein (0.8 g/kg)
                và điều chỉnh natri, potassium, phosphorus tùy theo giai đoạn bệnh thận.
              </li>
              <li>
                <strong>Tăng huyết áp:</strong> Kết hợp DASH diet với quản lý carbohydrate. Hạn chế natri.
              </li>
              <li>
                <strong>Rối loạn lipid máu:</strong> Tập trung vào chất béo lành mạnh, hạn chế chất béo
                bão hòa và trans.
              </li>
              <li>
                <strong>Bệnh tim mạch:</strong> Chế độ ăn Địa Trung Hải hoặc DASH diet có thể phù hợp.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Managing Nutritional Complications */}
      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Trong quá trình quản lý đái tháo đường, có thể gặp một số vấn đề dinh dưỡng cần được giải quyết:
          </p>

          <Card className="border-red-200 bg-red-50">
            <CardHeader icon={AlertTriangle} title="Hạ đường huyết – Điều Người bệnh Cần biết" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Khi đường huyết &lt; 70 mg/dL</strong>
              </p>
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Triệu chứng:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                    <li>Run tay, đói, vã mồ hôi</li>
                    <li>Hoa mắt, mệt, lú lẫn</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-2">Xử trí nhanh:</p>
                  <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                    <li><strong>Ăn 15–20g đường nhanh</strong> (nước trái cây, kẹo, glucose tablets)</li>
                    <li><strong>Kiểm tra lại sau 15 phút</strong></li>
                    <li><strong>Ăn bữa phụ khi ổn định</strong> để tránh hạ đường huyết lại</li>
                  </ul>
                </div>
                <div className="bg-red-100 rounded-lg p-3 border border-red-300 mt-3">
                  <p className="text-sm text-red-900">
                    <strong>👉 Không được bỏ qua hạ đường huyết.</strong>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={AlertCircle} title="Tăng đường huyết (Hyperglycemia)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> Đường huyết cao kéo dài (&gt; 180-200 mg/dL) có thể dẫn đến biến chứng.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Nguyên nhân dinh dưỡng:</strong> Quá nhiều carbohydrate, không tuân thủ chế độ ăn,
                bỏ qua thuốc/insulin.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Xử trí:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Điều chỉnh lượng carbohydrate</li>
                <li>đảm bảo tuân thủ thuốc/insulin</li>
                <li>Uống đủ nước (nếu không có hạn chế dịch)</li>
                <li>Theo dõi ketone nếu đường huyết rất cao (type 1)</li>
              </ul>
              <p className="text-body-sm">
                <strong>Ketoacidosis (DKA) - Cấp cứu:</strong> Ở type 1, đường huyết rất cao kèm ketone
                cao có thể dẫn đến DKA, cần điều trị cấp cứu ngay.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={Info} title="Biến chứng Mạn tính & Dinh dưỡng" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Bệnh thận (Diabetic Nephropathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Có thể cần hạn chế protein (0.8 g/kg hoặc thấp hơn tùy giai đoạn)</li>
                <li>Điều chỉnh natri, potassium, phosphorus</li>
                <li>Quản lý dịch nếu có phù</li>
              </ul>
              <p className="text-body-sm mb-3">
                <strong>Bệnh thần kinh (Diabetic Neuropathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Chế độ ăn đặc biệt có thể không cần thiết, nhưng kiểm soát đường huyết tốt là quan trọng</li>
                <li>Một số người có thể cần điều chỉnh do ảnh hưởng đến tiêu hóa (gastroparesis)</li>
              </ul>
              <p className="text-body-sm mb-3">
                <strong>Bệnh mắt (Diabetic Retinopathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Chất chống oxy hóa (vitamin C, E, lutein) có thể có lợi, nhưng bằng chứng không rõ ràng</li>
                <li>Kiểm soát đường huyết và huyết áp là quan trọng nhất</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Drug-Nutrition Interactions */}
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
            Một số thuốc điều trị đái tháo đường và thuốc khác có tương tác với dinh dưỡng cần được lưu ý:
          </p>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Insulin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Timing với bữa ăn:</strong> Insulin tác dụng nhanh (lispro, aspart, glulisine) được
                tiêm ngay trước hoặc sau bữa ăn, dựa trên lượng carbohydrate.
              </li>
              <li>
                <strong>Carbohydrate-to-insulin ratio:</strong> Tỷ lệ này khác nhau giữa các bệnh nhân
                (ví dụ: 1 đơn vị insulin cho 10-15g carbohydrate). Được điều chỉnh dựa trên đáp ứng.
              </li>
              <li>
                <strong>Correction factor:</strong> Lượng insulin cần để giảm đường huyết xuống mục tiêu
                (ví dụ: 1 đơn vị giảm 30-50 mg/dL).
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Metformin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Uống với bữa ăn để giảm tác dụng phụ đường tiêu hóa (buồn nôn, tiêu chảy).
              </li>
              <li>
                Có thể gây thiếu vitamin B12 nếu dùng lâu dài. Có thể cần bổ sung hoặc theo dõi B12.
              </li>
              <li>
                Không ảnh hưởng trực tiếp đến timing carbohydrate.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Sulfonylureas</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Kích thích tiết insulin, có thể gây hạ đường huyết nếu bỏ bữa ăn hoặc ăn ít carbohydrate.
              </li>
              <li>
                Cần ăn đều đặn, không bỏ bữa.
              </li>
              <li>
                Uống với bữa ăn hoặc trước bữa ăn (tùy thuốc cụ thể).
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Alcohol</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Có thể gây hạ đường huyết, đặc biệt nếu uống khi đói hoặc kết hợp với insulin/sulfonylureas.
              </li>
              <li>
                Nên uống với thức ăn và uống có chừng mực (1-2 ly/ngày cho phụ nữ, 2-3 ly/ngày cho nam).
              </li>
              <li>
                Theo dõi đường huyết khi uống rượu.
              </li>
              <li>
                Một số đồ uống có cồn có carbohydrate (bia, rượu ngọt), cần tính vào tổng carbohydrate.
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

          {/* Monitoring Parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thông số</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mục tiêu</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>HbA1c</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 3-6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 7% (có thể điều chỉnh)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đo mức độ kiểm soát đường huyết trung bình 2-3 tháng</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đường huyết trước ăn</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng ngày (tùy thuộc thuốc)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">80-130 mg/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Self-monitoring, tần suất tùy loại thuốc</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đường huyết sau ăn</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">1-2 giờ sau bữa ăn</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 180 mg/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá đáp ứng với bữa ăn</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng tuần (nếu giảm cân), mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Giảm 5-10% (type 2), duy trì (type 1)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng cho type 2, duy trì cho type 1</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Lipid Profile</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 6-12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">LDL &lt; 100 mg/dL, HDL &gt; 40/50</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá nguy cơ tim mạch</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Huyết áp</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&lt; 130/80 mmHg</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Nguy cơ cao bệnh tim mạch</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Creatinine/eGFR</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 6-12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">eGFR &gt; 60, Creatinine bình thường</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá biến chứng thận</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader icon={CheckCircle} title="HbA1c" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đo mức độ kiểm soát đường huyết trung bình 2-3 tháng</li>
                  <li>Mục tiêu: &lt; 7% (có thể điều chỉnh dựa trên tuổi, bệnh lý kèm)</li>
                  <li>Đo mỗi 3-6 tháng</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Đường huyết (Self-monitoring)" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi trước và sau bữa ăn</li>
                  <li>Mục tiêu: 80-130 mg/dL trước ăn, &lt; 180 mg/dL sau ăn</li>
                  <li>Tần suất tùy thuộc vào loại thuốc và mức độ kiểm soát</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi hàng tuần nếu đang giảm cân</li>
                  <li>Mục tiêu: giảm 5-10% nếu thừa cân (type 2)</li>
                  <li>Duy trì cân nặng ổn định (type 1)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Lipid Profile" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Cholesterol, LDL, HDL, triglycerides</li>
                  <li>Đo mỗi năm hoặc thường xuyên hơn nếu có bệnh tim mạch</li>
                  <li>Mục tiêu: LDL &lt; 100 mg/dL (hoặc &lt; 70 nếu có bệnh tim mạch)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <h3 className="heading-4">Theo dõi & Đánh giá</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li><strong>HbA1c:</strong> mỗi 3–6 tháng</li>
              <li><strong>Đường huyết trước ăn:</strong> 80–130 mg/dL</li>
              <li><strong>Sau ăn:</strong> &lt; 180 mg/dL</li>
              <li>Theo dõi cân nặng, mỡ máu, huyết áp</li>
            </ul>
          </div>
          
          <Callout variant="info" title="Khi nào cần gặp chuyên gia dinh dưỡng?">
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Mới chẩn đoán</li>
              <li>Đường huyết khó kiểm soát</li>
              <li>Có biến chứng (thận, tim)</li>
              <li>Cần kế hoạch ăn chi tiết</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 8. Common Clinical Pitfalls */}
      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các Cạm bẫy lâm sàng Phổ biến
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Loại bỏ hoàn toàn carbohydrate:</strong> Một số bệnh nhân nghĩ rằng cần loại bỏ
              hoàn toàn carbohydrate, nhưng điều này không đúng và có thể nguy hiểm. Carbohydrate là nguồn
              năng lượng quan trọng và cần được quản lý, không loại bỏ.
            </li>
            <li>
              <strong>Quá tập trung vào đường huyết mà bỏ qua chất lượng dinh dưỡng tổng thể:</strong> Chỉ
              tập trung vào kiểm soát đường huyết mà bỏ qua sức khỏe tim mạch, cân nặng, hoặc các yếu tố
              dinh dưỡng khác.
            </li>
            <li>
              <strong>Không điều chỉnh theo thuốc và hoạt động:</strong> Áp dụng cùng một chế độ ăn cho
              tất cả bệnh nhân mà không xem xét loại thuốc (ví dụ: insulin vs metformin), hoạt động thể chất,
              hoặc các yếu tố cá nhân khác.
            </li>
            <li>
              <strong>Không giáo dục về hạ đường huyết:</strong> Không hướng dẫn bệnh nhân nhận biết và
              xử trí hạ đường huyết, có thể dẫn đến tình huống nguy hiểm.
            </li>
            <li>
              <strong>Bỏ qua bệnh lý kèm:</strong> Chỉ tập trung vào đái tháo đường mà bỏ qua bệnh thận,
              tăng huyết áp, hoặc các bệnh lý khác cần điều chỉnh dinh dưỡng.
            </li>
            <li>
              <strong>Không theo dõi đáp ứng:</strong> Khuyến nghị thay đổi chế độ ăn nhưng không theo dõi
              HbA1c, đường huyết, hoặc các chỉ số khác để đánh giá hiệu quả.
            </li>
            <li>
              <strong>Quá cứng nhắc:</strong> Áp dụng quy tắc cứng nhắc mà không linh hoạt dựa trên sở thích,
              văn hóa, và khả năng của bệnh nhân, dẫn đến tuân thủ kém.
            </li>
          </ul>
        </div>
      </section>

      {/* 9. References & Guidelines */}
      <section aria-labelledby="references-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="references-heading" className="heading-2 whitespace-nowrap">
            Tài liệu Tham khảo & Hướng dẫn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Các hướng dẫn chính thức về dinh dưỡng trong đái tháo đường:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American Diabetes Association (ADA):</strong> Hướng dẫn về dinh dưỡng và lối sống
              trong quản lý đái tháo đường, bao gồm carbohydrate counting, glycemic index, và quản lý cân nặng.
            </li>
            <li>
              <strong>Academy of Nutrition and Dietetics:</strong> Hướng dẫn chi tiết về dinh dưỡng y tế
              trong đái tháo đường.
            </li>
            <li>
              <strong>International Diabetes Federation (IDF):</strong> Hướng dẫn toàn cầu về quản lý đái tháo đường.
            </li>
            <li>
              <strong>European Association for the Study of Diabetes (EASD):</strong> Hướng dẫn về dinh dưỡng
              và lối sống trong đái tháo đường.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần Tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân mới được chẩn đoán đái tháo đường</li>
              <li>Đường huyết không kiểm soát tốt dù đã điều chỉnh thuốc</li>
              <li>Cần học carbohydrate counting hoặc meal planning chi tiết</li>
              <li>Có biến chứng (bệnh thận, bệnh tim) cần điều chỉnh phức tạp</li>
              <li>Bệnh nhân yêu cầu hoặc có nguồn lực để tham khảo</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 10. Safety Disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          ⚠️ Nhắc nhở An toàn
        </h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Nội dung này chỉ mang tính giáo dục.
          </p>
          <p className="text-body-sm">
            Mọi khuyến nghị cần được cá nhân hóa theo loại đái tháo đường, thuốc đang dùng, 
            mức vận động và bệnh lý kèm.
          </p>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
          <p className="text-body-sm mt-2">
            Tất cả các khuyến nghị dinh dưỡng cần được điều chỉnh dựa trên đánh giá lâm sàng toàn diện,
            loại đái tháo đường, thuốc đang dùng, hoạt động thể chất, bệnh lý kèm, và sở thích cá nhân
            của từng bệnh nhân. Quản lý đái tháo đường yêu cầu sự hợp tác chặt chẽ giữa bệnh nhân, bác sĩ,
            và chuyên gia dinh dưỡng. Khi còn nghi ngờ, hãy tham khảo ý kiến của chuyên gia dinh dưỡng
            đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
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
                (type 2) hoặc quản lý cân nặng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng trong quản lý cân nặng cho bệnh nhân đái tháo đường.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như vitamin D, B12, folate - quan trọng trong quản lý đái tháo đường,
                đặc biệt nếu dùng metformin lâu dài.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/intake-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Lượng Ăn" />
            <CardContent>
              <p className="text-body-sm">
                So sánh lượng ăn thực tế với nhu cầu ước tính, hữu ích để đánh giá tuân thủ chế độ ăn
                và điều chỉnh carbohydrate.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
