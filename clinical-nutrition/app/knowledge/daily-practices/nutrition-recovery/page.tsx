import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Heart, ArrowUp, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng Phục hồi",
  description:
    "Dinh dưỡng sau khi khỏi bệnh, sau phẫu thuật, hoặc sau chấn thương. Cách ăn uống để hỗ trợ phục hồi nhanh và hiệu quả.",
  keywords: [
    "dinh dưỡng phục hồi",
    "nutrition recovery",
    "phục hồi sau bệnh",
    "phục hồi sau phẫu thuật",
    "protein phục hồi",
    "vitamin phục hồi",
  ],
};

export default function NutritionRecoveryPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Dinh dưỡng Phục hồi" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <ArrowUp className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng Phục hồi</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Sau khi khỏi bệnh, phẫu thuật, hoặc chấn thương, cơ thể cần dinh dưỡng đặc biệt để phục hồi. 
          Hiểu cách ăn uống trong giai đoạn phục hồi giúp bạn hồi phục nhanh hơn và trở lại sức khỏe tốt.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Protein</strong> là quan trọng nhất - cần để sửa chữa mô, vết thương
          </li>
          <li>
            <strong>Vitamin C</strong> - hỗ trợ chữa lành vết thương, tạo collagen
          </li>
          <li>
            <strong>Zinc</strong> - cần thiết cho chữa lành vết thương
          </li>
          <li>
            <strong>Đủ nước</strong> - cần cho mọi quá trình phục hồi
          </li>
          <li>
            <strong>Calo đủ</strong> - cơ thể cần năng lượng để phục hồi
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Dinh dưỡng Quan trọng trong Phục hồi?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Khi cơ thể phục hồi (sau bệnh, phẫu thuật, chấn thương), nó cần "nguyên liệu" để:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Quá trình phục hồi:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sửa chữa mô bị tổn thương</li>
                <li>• Chữa lành vết thương</li>
                <li>• Tái tạo tế bào</li>
                <li>• Phục hồi cơ bắp (nếu mất cơ)</li>
                <li>• Tăng cường hệ miễn dịch</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chất dinh dưỡng cần:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Protein (sửa chữa mô)</li>
                <li>• Vitamin C (tạo collagen)</li>
                <li>• Zinc (chữa lành vết thương)</li>
                <li>• Calo (năng lượng)</li>
                <li>• Nước (mọi quá trình)</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Phục hồi giống như "sửa chữa nhà". Khi nhà bị hư hỏng, bạn cần "nguyên liệu" (gạch, xi măng) 
            để sửa. Tương tự, khi cơ thể cần phục hồi, nó cần "nguyên liệu" từ thực phẩm - protein, vitamin, 
            khoáng chất - để sửa chữa và phục hồi.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất Dinh dưỡng Quan trọng cho Phục hồi</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 mb-3 text-red-900">1. Protein (Quan trọng nhất)</h3>
            <p className="text-body-sm text-red-900 mb-3">
              Protein cần thiết để sửa chữa mô, chữa lành vết thương, và phục hồi cơ bắp.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Thịt nạc:</strong> Thịt gà, thịt heo nạc, thịt bò nạc</li>
                <li>• <strong>Hải sản:</strong> Cá, tôm, cua (Việt Nam) - dễ tiêu, có protein</li>
                <li>• <strong>Trứng:</strong> Dễ tiêu, có protein hoàn chỉnh</li>
                <li>• <strong>Đậu phụ (Việt Nam):</strong> Protein thực vật, dễ tiêu</li>
                <li>• <strong>Sữa, sữa chua:</strong> Protein + canxi</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3 border border-red-200 mt-2">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu:</p>
              <p className="text-xs text-gray-700">
                Khi phục hồi, có thể cần nhiều protein hơn bình thường (1.2-1.5g/kg/ngày thay vì 0.8-1.0g/kg/ngày).
              </p>
            </div>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">2. Vitamin C</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Vitamin C cần thiết để tạo collagen (protein trong da, xương, mạch máu) và chữa lành vết thương.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Trái cây:</strong> Cam, chanh, ổi, xoài (Việt Nam)</li>
                <li>• <strong>Rau củ:</strong> Ớt chuông, cà chua, đậu bắp (trong canh chua Việt Nam)</li>
                <li>• <strong>Canh chua (Việt Nam):</strong> Cà chua, đậu bắp có vitamin C</li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">3. Zinc (Kẽm)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Zinc cần thiết cho chữa lành vết thương và chức năng miễn dịch.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Thịt:</strong> Thịt gà, thịt heo, thịt bò</li>
                <li>• <strong>Hải sản:</strong> Cá, tôm, cua (Việt Nam)</li>
                <li>• <strong>Đậu:</strong> Đậu phộng, đậu đen (Việt Nam)</li>
              </ul>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">4. Calo và Nước</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              cơ thể cần năng lượng (calo) và nước để phục hồi.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Calo:</strong> Có thể cần nhiều hơn bình thường để phục hồi</li>
                <li>• <strong>Nước:</strong> Đủ nước (8-10 ly/ngày) cho mọi quá trình phục hồi</li>
                <li>• <strong>Canh, cháo (Việt Nam):</strong> Cung cấp cả nước và calo</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Phục hồi</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cháo thịt gà + rau thơm (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein từ thịt gà (phục hồi mô)</li>
              <li>Carbohydrate từ gạo (năng lượng)</li>
              <li>Vitamin C từ rau thơm (chữa lành vết thương)</li>
              <li>Nước từ cháo (hydration)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa trưa</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Canh chua cá + Rau muống luộc (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein từ cá (phục hồi mô, zinc)</li>
              <li>Vitamin C từ cà chua, đậu bắp trong canh chua (chữa lành vết thương)</li>
              <li>Vitamin A, K từ rau muống</li>
              <li>Carbohydrate từ cơm (năng lượng)</li>
              <li>Nước từ canh (hydration)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa tối</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Tôm hấp + Canh mướp + Rau cải luộc (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein từ tôm (phục hồi mô, zinc)</li>
              <li>Vitamin từ rau củ</li>
              <li>Carbohydrate từ cơm</li>
              <li>Nước từ canh</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Trái cây</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Ổi, cam, xoài (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Vitamin C (chữa lành vết thương)</li>
              <li>Chất xơ, chất chống oxy hóa</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên protein:</strong> Đảm bảo có đủ protein trong mỗi bữa - thịt nạc, cá, trứng, đậu phụ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều trái cây và rau củ:</strong> Cung cấp vitamin C, A, và các chất chống oxy hóa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đủ nước:</strong> Uống nước thường xuyên, có thể dùng canh, cháo để cung cấp nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Cháo, canh là món ăn lý tưởng - dễ tiêu, có đủ dinh dưỡng, có nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn nhiều bữa nhỏ:</strong> Nếu không muốn ăn nhiều một lúc, ăn nhiều bữa nhỏ trong ngày.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Phục hồi Sau Phẫu thuật</h2>
        <Callout variant="warning" title="Lưu ý đặc biệt">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Sau phẫu thuật:</strong> Cần tuân theo hướng dẫn của bác sĩ về chế độ ăn. 
              Một số phẫu thuật cần chế độ ăn đặc biệt (ăn lỏng, ăn mềm).
            </p>
            <p>
              <strong>Vết thương:</strong> Cần đủ protein và vitamin C để chữa lành. 
              Tránh đồ cay, nóng có thể gây khó chịu.
            </p>
            <p>
              <strong>Tham khảo chuyên gia:</strong> Nếu phẫu thuật lớn, nên tham khảo chuyên gia dinh dưỡng 
              về chế độ ăn phù hợp.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-during-illness">
            <h3 className="heading-5 mb-2">Dinh dưỡng khi Bị bệnh</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng trong giai đoạn bị bệnh
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein quan trọng cho phục hồi
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Vitamin C cần thiết cho chữa lành vết thương
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/zinc-immunity">
            <h3 className="heading-5 mb-2">Kẽm và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Zinc cần thiết cho chữa lành vết thương
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng phục hồi phụ thuộc vào loại bệnh, 
          phẫu thuật, hoặc chấn thương. Nếu bạn đang phục hồi sau phẫu thuật lớn, có vết thương nghiêm trọng, 
          hoặc có bệnh lý đặc biệt, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để có kế hoạch ăn uống phù hợp.
        </p>
      </Callout>
    </main>
  );
}
