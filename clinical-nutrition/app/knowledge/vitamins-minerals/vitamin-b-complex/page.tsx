import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Zap, Wheat, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin B Complex và năng lượng",
  description:
    "Hiểu về vitamin B complex - nhóm vitamin quan trọng cho năng lượng, chức năng não, và sức khỏe tổng thể. Các loại vitamin B, nguồn thực phẩm, và nhu cầu.",
  keywords: [
    "vitamin B",
    "vitamin B complex",
    "năng lượng",
    "energy",
    "chức năng não",
    "thiamine",
    "riboflavin",
    "niacin",
  ],
};

export default function VitaminBComplexPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Vitamin B Complex và năng lượng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin B Complex và năng lượng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin B Complex là nhóm 8 vitamin B khác nhau, mỗi loại có vai trò riêng nhưng cùng làm việc 
          để hỗ trợ năng lượng, chức năng não, và sức khỏe tổng thể. Hiểu về vitamin B complex giúp bạn 
          đảm bảo cơ thể có đủ "nhiên liệu" để hoạt động tốt.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin B Complex</strong> gồm 8 vitamin B khác nhau, mỗi loại có vai trò riêng
          </li>
          <li>
            <strong>Vai trò chính:</strong> Chuyển đổi thực phẩm thành năng lượng, chức năng não, tạo tế bào máu
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Ngũ cốc nguyên cám, thịt, cá, trứng, đậu, rau xanh
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Gạo lứt, đậu đen, đậu đỏ, thịt, cá, rau muống, rau cải
          </li>
          <li>
            <strong>Thiếu:</strong> Có thể gây mệt mỏi, yếu, vấn đề thần kinh
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin B Complex là gì?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            <strong>Vitamin B Complex</strong> gồm 8 vitamin B:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">8 Vitamin B:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• B1 (Thiamine)</li>
                <li>• B2 (Riboflavin)</li>
                <li>• B3 (Niacin)</li>
                <li>• B5 (Pantothenic acid)</li>
                <li>• B6 (Pyridoxine)</li>
                <li>• B7 (Biotin)</li>
                <li>• B9 (Folate/Folic acid)</li>
                <li>• B12 (Cobalamin)</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Vai trò chung:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Chuyển đổi thực phẩm thành năng lượng</li>
                <li>• Chức năng não</li>
                <li>• Tạo tế bào máu</li>
                <li>• Sản xuất DNA</li>
                <li>• Hỗ trợ hệ thần kinh</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Vitamin B Complex giống như "đội công nhân" trong nhà máy năng lượng. 
            Khi bạn ăn thực phẩm (carbohydrate, protein, chất béo), vitamin B giúp "chuyển đổi" 
            chúng thành năng lượng mà cơ thể có thể sử dụng. Không có vitamin B, 
            cơ thể không thể tạo năng lượng từ thực phẩm, dẫn đến mệt mỏi, yếu.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Các loại Vitamin B và Vai trò</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">B1 (Thiamine) - năng lượng</h3>
            <p className="text-body-sm mb-2">
              Giúp chuyển đổi carbohydrate thành năng lượng.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Ngũ cốc nguyên cám, thịt heo, đậu. 
              <strong> Ở Việt Nam:</strong> Gạo lứt, đậu đen, đậu đỏ, thịt heo.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">B2 (Riboflavin) - năng lượng và Da</h3>
            <p className="text-body-sm mb-2">
              Giúp chuyển đổi thực phẩm thành năng lượng, hỗ trợ sức khỏe da và mắt.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Sữa, trứng, thịt, rau xanh. 
              <strong> Ở Việt Nam:</strong> Sữa, trứng, thịt, rau muống, rau cải.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">B3 (Niacin) - năng lượng và Cholesterol</h3>
            <p className="text-body-sm mb-2">
              Giúp chuyển đổi thực phẩm thành năng lượng, có thể hỗ trợ sức khỏe tim mạch.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Thịt, cá, ngũ cốc nguyên cám. 
              <strong> Ở Việt Nam:</strong> Thịt, cá, gạo lứt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">B6 (Pyridoxine) - Chức năng Não</h3>
            <p className="text-body-sm mb-2">
              Quan trọng cho chức năng não, tạo chất dẫn truyền thần kinh, và tạo tế bào máu.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Thịt, cá, đậu, ngũ cốc nguyên cám. 
              <strong> Ở Việt Nam:</strong> Thịt, cá, đậu đen, đậu đỏ, gạo lứt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">B9 (Folate) - Tế bào Máu và Phụ nữ Mang thai</h3>
            <p className="text-body-sm mb-2">
              Quan trọng cho tạo tế bào máu và phát triển thai nhi. đặc biệt quan trọng cho phụ nữ mang thai.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Rau xanh, đậu, ngũ cốc nguyên cám. 
              <strong> Ở Việt Nam:</strong> Rau muống, rau cải, đậu đen, đậu đỏ, gạo lứt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">B12 (Cobalamin) - Tế bào Máu và Thần kinh</h3>
            <p className="text-body-sm mb-2">
              Quan trọng cho tạo tế bào máu và chức năng thần kinh. Chỉ có trong thực phẩm động vật.
            </p>
            <p className="text-xs text-gray-700">
              <strong>Nguồn:</strong> Thịt, cá, trứng, sữa. 
              <strong> Ở Việt Nam:</strong> Thịt, cá, tôm, cua, trứng, sữa.
            </p>
            <ExampleBox variant="warning" title="Lưu ý cho Người ăn chay">
              <p className="text-sm">
                Vitamin B12 chỉ có trong thực phẩm động vật. Người ăn chay nghiêm ngặt có thể cần bổ sung B12. 
                tham khảo bác sĩ nếu cần.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn vitamin B Complex tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu vitamin B</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Ngũ cốc nguyên cám:</p>
              <p className="text-xs text-gray-700">
                Gạo lứt, yến mạch, bánh mì nguyên cám - có nhiều vitamin B (B1, B3, B6, B9). 
                <strong> Ở Việt Nam:</strong> Gạo lứt là lựa chọn tốt thay vì gạo trắng.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thịt, Cá, Trứng:</p>
              <p className="text-xs text-gray-700">
                Thịt, cá, trứng - có nhiều vitamin B (B1, B2, B3, B6, B12). 
                <strong> Ở Việt Nam:</strong> Thịt, cá, tôm, cua, trứng trong bữa ăn hàng ngày.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Đậu:</p>
              <p className="text-xs text-gray-700">
                Đậu đen, đậu đỏ, đậu lăng - có nhiều vitamin B (B1, B6, B9). 
                <strong> Ở Việt Nam:</strong> Đậu đen, đậu đỏ rất phổ biến.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Rau xanh:</p>
              <p className="text-xs text-gray-700">
                Rau muống, rau cải - có nhiều folate (B9). 
                <strong> Ở Việt Nam:</strong> Rau muống, rau cải rất phổ biến.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Sữa, Sữa chua:</p>
              <p className="text-xs text-gray-700">
                Sữa, sữa chua - có nhiều vitamin B (B2, B12).
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Vitamin B trong món ăn Việt Nam">
          <p className="mb-2">
            <strong>Bữa ăn Việt Nam truyền thống</strong> (cơm + thịt/cá + rau) tự nhiên cung cấp nhiều vitamin B:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-2">
            <li><strong>Cơm (gạo lứt):</strong> B1, B3, B6, B9</li>
            <li><strong>Thịt/cá:</strong> B1, B2, B3, B6, B12</li>
            <li><strong>Rau muống, rau cải:</strong> B9 (folate)</li>
            <li><strong>Đậu đen, đậu đỏ:</strong> B1, B6, B9</li>
          </ul>
          <p>
            Chọn gạo lứt thay vì gạo trắng để có nhiều vitamin B hơn.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thiếu vitamin B và Hậu quả</h2>
        <Callout variant="warning" title="Hậu quả của Thiếu vitamin B">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Thiếu B1 (Thiamine):</strong> Mệt mỏi, yếu, vấn đề thần kinh (beriberi).
            </p>
            <p>
              <strong>Thiếu B9 (Folate):</strong> Thiếu máu, đặc biệt quan trọng cho phụ nữ mang thai.
            </p>
            <p>
              <strong>Thiếu B12:</strong> Thiếu máu, vấn đề thần kinh, mệt mỏi.
            </p>
            <p>
              <strong>Thiếu nhiều vitamin B:</strong> Mệt mỏi, yếu, khó tập trung, vấn đề thần kinh.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch, bánh mì nguyên cám 
                có nhiều vitamin B hơn ngũ cốc tinh chế.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đa dạng:</strong> Thịt, cá, đậu, rau xanh, ngũ cốc - đảm bảo đủ tất cả vitamin B.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Bữa ăn Việt Nam truyền thống (cơm + thịt/cá + rau) 
                tự nhiên cung cấp nhiều vitamin B. Chọn gạo lứt để có nhiều hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người ăn chay:</strong> Cần chú ý vitamin B12 (chỉ có trong thực phẩm động vật). 
                Có thể cần bổ sung.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Vitamin B giúp chuyển đổi thực phẩm thành năng lượng
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Vitamin B giúp chuyển đổi carbohydrate thành năng lượng
            </p>
          </Card>
          <Card href="/knowledge/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Folate (B9) quan trọng cho phụ nữ mang thai
            </p>
          </Card>
          <Card href="/knowledge/vegetarian-vegan-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Ăn chay</h3>
            <p className="text-sm text-gray-600">
              Người ăn chay cần chú ý vitamin B12
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Hầu hết người khỏe mạnh có thể đủ vitamin B 
          từ thực phẩm nếu ăn đa dạng. Một số người (người ăn chay nghiêm ngặt, người cao tuổi, 
          phụ nữ mang thai) có thể cần bổ sung. Nếu bạn có triệu chứng thiếu vitamin B hoặc có bệnh lý đặc biệt, 
          hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}
