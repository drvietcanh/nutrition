import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Heart, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh tim mạch",
  description:
    "Hướng dẫn dinh dưỡng tổng quan cho bệnh tim mạch. Nguyên tắc dinh dưỡng lành mạnh cho tim, quản lý cholesterol, huyết áp, và các yếu tố nguy cơ.",
  keywords: [
    "bệnh tim mạch",
    "cardiovascular disease",
    "heart health",
    "cholesterol",
    "huyết áp",
    "dinh dưỡng tim mạch",
  ],
};

export default function CardiovascularDiseaseNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Bệnh mạn tính", href: "/knowledge/chronic-diseases" },
          { label: "Dinh dưỡng trong Bệnh tim mạch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng trong Bệnh tim mạch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng đóng vai trò quan trọng trong phòng ngừa và quản lý bệnh tim mạch. 
          Chế độ ăn lành mạnh cho tim có thể giúp kiểm soát cholesterol, huyết áp, và các yếu tố nguy cơ khác.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất béo:</strong> Hạn chế chất béo bão hòa và trans, ưu tiên chất béo không bão hòa
          </li>
          <li>
            <strong>Natri:</strong> Hạn chế natri để kiểm soát huyết áp
          </li>
          <li>
            <strong>Chất xơ:</strong> Tăng chất xơ từ rau củ, trái cây, ngũ cốc nguyên cám
          </li>
          <li>
            <strong>Omega-3:</strong> Ăn cá béo 2-3 lần/tuần
          </li>
          <li>
            <strong>Rau củ và Trái cây:</strong> Nhiều màu sắc, đa dạng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vì sao dinh dưỡng quan trọng cho Tim mạch?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Dinh dưỡng ảnh hưởng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cholesterol (LDL, HDL)</li>
                <li>• Huyết áp</li>
                <li>• Viêm trong cơ thể</li>
                <li>• Cân nặng</li>
                <li>• Đường huyết</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm nguy cơ đau tim</li>
                <li>• Giảm nguy cơ đột quỵ</li>
                <li>• Cải thiện sức khỏe mạch máu</li>
                <li>• Giảm huyết áp</li>
                <li>• Kiểm soát cân nặng</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguyên tắc Dinh dưỡng Lành mạnh cho Tim</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Quản lý Chất béo</h3>
            <ComparisonCard
              title="Chất béo Tốt vs Xấu"
              items={[
                {
                  label: "Chất béo Tốt (Nên ăn)",
                  good: "Dầu ô liu, dầu hạt cải, cá béo (cá hồi, cá thu), quả hạch, bơ",
                  bad: undefined,
                  note: "Giúp giảm cholesterol xấu (LDL), tăng cholesterol tốt (HDL)"
                },
                {
                  label: "Chất béo Xấu (Nên hạn chế)",
                  good: undefined,
                  bad: "Thịt đỏ mỡ, bơ, phô mai, thực phẩm chế biến sẵn, đồ chiên",
                  note: "Làm tăng cholesterol xấu (LDL), tăng nguy cơ bệnh tim"
                },
              ]}
            />
            <p className="text-body-sm mt-3">
              <strong>khuyến nghị:</strong> Hạn chế chất béo bão hòa &lt; 7% tổng calo, 
              tránh hoàn toàn chất béo trans.
            </p>
          </Card>

          {/* Cholesterol and Saturated Fat Tables */}
          <Card className="border-blue-200 bg-blue-50/30">
            <h3 className="heading-4 mb-3">Bảng Cholesterol và Chất béo Bão hòa trong Thực phẩm Việt Nam</h3>
            <p className="text-body-sm mb-4">
              Dưới đây là bảng phân loại thực phẩm Việt Nam theo hàm lượng cholesterol và chất béo bão hòa:
            </p>

            {/* Cholesterol Table */}
            <h4 className="heading-5 mb-2 mt-4">🍳 Bảng Cholesterol (mg/100g)</h4>
            <p className="text-body-sm mb-3 text-gray-600">
              <strong>Lưu ý:</strong> Khuyến nghị cho người bệnh tim mạch: &lt; 200mg cholesterol/ngày.
            </p>

            {/* Very High Cholesterol */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2">🔴 Rất Cao (&gt;200mg/100g) - Hạn chế Nghiêm ngặt</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Cholesterol (mg/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Gan lợn</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~300-500</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Nội tạng có cholesterol rất cao</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thận lợn</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~300-400</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Nội tạng</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Tim lợn</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~200-300</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Nội tạng</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Lòng đỏ trứng</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~370</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">1 lòng đỏ trứng gà (~17g) có ~63mg cholesterol</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* High Cholesterol */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2 mt-4">🟠 Cao (100-200mg/100g) - Hạn chế</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Cholesterol (mg/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Tôm</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~150-200</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Hải sản</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Cua</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~150-200</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Hải sản</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt mỡ</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~100-150</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Thịt lợn mỡ, thịt bò mỡ</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt nạc</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~70-100</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Thịt lợn nạc, thịt gà (bỏ da)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Low Cholesterol */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2 mt-4">🟢 Thấp (&lt;100mg/100g) - Ăn Tự do</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Cholesterol (mg/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Cá</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~50-100</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Cá các loại (trừ cá có dầu)</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Lòng trắng trứng</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">0</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Không có cholesterol</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Đậu phụ</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">0</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Đạm thực vật, không có cholesterol</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Rau củ quả</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">0</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Không có cholesterol</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Sữa ít béo</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~5-10</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Sữa tách béo, sữa chua ít béo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Saturated Fat Table */}
            <h4 className="heading-5 mb-2 mt-6">🥓 Bảng Chất béo Bão hòa (g/100g)</h4>
            <p className="text-body-sm mb-3 text-gray-600">
              <strong>Lưu ý:</strong> Khuyến nghị cho người bệnh tim mạch: &lt; 7% tổng calo từ chất béo bão hòa 
              (khoảng 15-20g/ngày cho người ăn 2000 calo/ngày).
            </p>

            {/* Very High Saturated Fat */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2">🔴 Rất Cao (&gt;10g/100g) - Tránh Hoàn Toàn</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Chất béo bão hòa (g/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Mỡ lợn</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~40-50</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Mỡ động vật</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Bơ</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~50</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Bơ động vật</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Dầu dừa</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~82</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Dầu thực vật nhưng nhiều bão hòa</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt mỡ</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~15-20</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Thịt lợn mỡ, thịt bò mỡ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* High Saturated Fat */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2 mt-4">🟠 Cao (5-10g/100g) - Hạn chế Nghiêm ngặt</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-orange-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Chất béo bão hòa (g/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Phô mai</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~15-20</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Phô mai các loại</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt nạc</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~5-8</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Thịt lợn nạc, thịt bò nạc</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt gà (có da)</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~5-7</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Nên bỏ da để giảm chất béo bão hòa</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Sữa nguyên kem</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~3-4</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Nên chọn sữa ít béo</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Low Saturated Fat */}
            <h5 className="text-sm font-semibold text-gray-900 mb-2 mt-4">🟢 Thấp (&lt;5g/100g) - Ăn Tự do</h5>
            <div className="overflow-x-auto my-3">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-green-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Thực phẩm</th>
                    <th className="px-4 py-2 text-center text-xs font-semibold text-neutral-900">Chất béo bão hòa (g/100g)</th>
                    <th className="px-4 py-2 text-left text-xs font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Cá</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~1-3</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Cá các loại, tốt cho tim mạch</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Thịt gà (bỏ da)</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~1-2</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Thịt gà nạc, bỏ da</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Đậu phụ</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~0.5-1</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Đạm thực vật, ít chất béo bão hòa</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Dầu thực vật</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~2-3</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Dầu đậu nành, dầu hướng dương, dầu ô liu</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Sữa ít béo</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~1-2</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Sữa tách béo, sữa chua ít béo</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-2 text-xs text-neutral-700"><strong>Rau củ quả</strong></td>
                    <td className="px-4 py-2 text-xs text-neutral-700 text-center">~0</td>
                    <td className="px-4 py-2 text-xs text-neutral-700">Không có chất béo bão hòa</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Vietnamese Dishes Table */}
            <h4 className="heading-5 mb-2 mt-6">🍲 Món Ăn Việt Nam theo Cholesterol và Chất béo Bão hòa</h4>
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Món ăn</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Cholesterol</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Chất béo bão hòa</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt kho tàu (nhiều mỡ)</strong></td>
                    <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Cao</td>
                    <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Rất cao</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nhiều mỡ, nhiều cholesterol</td>
                  </tr>
                  <tr className="bg-red-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Canh xương (nhiều mỡ)</strong></td>
                    <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Cao</td>
                    <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Cao</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nước dùng có nhiều mỡ</td>
                  </tr>
                  <tr className="bg-orange-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Tôm rang</strong></td>
                    <td className="px-4 py-3 text-sm text-orange-700 text-center font-semibold">Cao</td>
                    <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tôm có cholesterol cao</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt gà luộc (bỏ da)</strong></td>
                    <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình</td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tốt hơn nếu bỏ da</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá hấp</strong></td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Rất tốt cho tim mạch</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu phụ sốt cà chua</strong></td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Rất thấp</td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Rất thấp</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Đạm thực vật, tốt cho tim</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau luộc, rau xào (ít dầu)</strong></td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Rất thấp</td>
                    <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Rất thấp</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Rất tốt, nhiều chất xơ</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mt-4">
              <p className="text-sm font-semibold text-amber-900 mb-2">
                💡 Mẹo Giảm Cholesterol và Chất béo Bão hòa
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li><strong>Chọn thịt nạc:</strong> Bỏ mỡ, bỏ da gà trước khi nấu</li>
                <li><strong>Ăn cá thay thịt:</strong> Cá có ít cholesterol và chất béo bão hòa hơn thịt</li>
                <li><strong>Dùng dầu thực vật:</strong> Dầu đậu nành, dầu hướng dương thay vì mỡ động vật</li>
                <li><strong>Hạn chế nội tạng:</strong> Gan, thận, tim có cholesterol rất cao</li>
                <li><strong>Ăn đậu phụ:</strong> Đạm thực vật không có cholesterol</li>
                <li><strong>Chọn sữa ít béo:</strong> Sữa tách béo, sữa chua ít béo</li>
                <li><strong>Trứng:</strong> Có thể ăn nhưng hạn chế lòng đỏ (1-2 lòng đỏ/tuần), lòng trắng ăn tự do</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Hạn chế Natri</h3>
            <p className="text-body-sm mb-3">
              Natri (muối) làm tăng huyết áp, tăng nguy cơ bệnh tim.
            </p>
            <NutrientTable
              rows={[
                { nutrient: "khuyến nghị", amount: "< 2,300", unit: "mg/ngày", note: "Tương đương ~6g muối" },
                { nutrient: "Nếu có tăng huyết áp", amount: "< 1,500", unit: "mg/ngày", note: "Tương đương ~4g muối" },
                { nutrient: "1 muỗng cà phê muối", amount: "2,300", unit: "mg natri", note: "Toàn bộ nhu cầu/ngày" },
              ]}
            />
            <p className="text-body-sm mt-3">
              <strong>Mẹo:</strong> Đọc nhãn thực phẩm, hạn chế thực phẩm chế biến sẵn, 
              sử dụng gia vị thay vì muối.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Tăng chất xơ</h3>
            <p className="text-body-sm mb-3">
              Chất xơ giúp giảm cholesterol và kiểm soát đường huyết.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>khuyến nghị:</strong> 25-30g chất xơ/ngày
              </p>
              <p>
                <strong>Nguồn tốt:</strong> Ngũ cốc nguyên cám, rau củ, trái cây, đậu, đậu lăng
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">4. Omega-3</h3>
            <p className="text-body-sm mb-3">
              Omega-3 giúp giảm viêm và cải thiện sức khỏe tim mạch.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>khuyến nghị:</strong> Ăn cá béo 2-3 lần/tuần
              </p>
              <p>
                <strong>Nguồn:</strong> Cá hồi, cá thu, cá ngừ, cá mòi, hạt chia, quả óc chó
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn lành mạnh cho Tim</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa trưa lành mạnh</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Cá hồi nướng (100g)</p>
                <p className="text-sm text-gray-700">Omega-3, protein nạc</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Rau xanh luộc (nhiều)</p>
                <p className="text-sm text-gray-700">Chất xơ, vitamin, khoáng chất</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Gạo lứt (1 bát)</p>
                <p className="text-sm text-gray-700">Chất xơ, carbohydrate phức tạp</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Dầu ô liu (1 muỗng canh)</p>
                <p className="text-sm text-gray-700">Chất béo không bão hòa</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn protein nạc:</strong> Thịt gà, cá, đậu thay vì thịt đỏ mỡ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá 2-3 lần/tuần:</strong> Cá hồi, cá thu, cá ngừ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế thực phẩm chế biến sẵn:</strong> Thường có nhiều natri và chất béo xấu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc nhãn:</strong> Kiểm tra natri và chất béo bão hòa trên nhãn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu tại nhà:</strong> Kiểm soát được lượng natri và chất béo
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/hypertension-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Tăng huyết áp</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn chi tiết về DASH diet và quản lý natri
            </p>
          </Card>
          <Card href="/knowledge/heart-failure-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Suy tim</h3>
            <p className="text-sm text-gray-600">
              Quản lý natri, dịch, và cân nặng trong suy tim
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về các loại chất béo và ảnh hưởng tim mạch
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong chế độ ăn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho bệnh tim mạch cần được 
          điều chỉnh dựa trên tình trạng cụ thể của từng người. Nếu bạn có bệnh tim mạch, 
          tăng huyết áp, hoặc các yếu tố nguy cơ, hãy tham khảo bác sĩ và chuyên gia dinh dưỡng 
          để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}
