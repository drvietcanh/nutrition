import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Heart, CheckCircle2, Fish, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omega-3 và Sức khỏe Tim mạch",
  description:
    "Hiểu về omega-3 - chất béo tốt quan trọng cho sức khỏe tim mạch, não bộ, và viêm. Nguồn thực phẩm giàu omega-3.",
  keywords: [
    "omega-3",
    "chất béo tốt",
    "tim mạch",
    "cá",
    "dinh dưỡng",
  ],
};

export default function Omega3HeartHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Omega-3 và Sức khỏe Tim mạch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Omega-3 và Sức khỏe Tim mạch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Omega-3 là một loại chất béo tốt (chất béo không bão hòa) quan trọng cho sức khỏe tim mạch, 
          não bộ, và giảm viêm. cơ thể không thể tự tạo ra omega-3, nên cần lấy từ thực phẩm.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Omega-3</strong> là chất béo tốt quan trọng cho tim mạch và não bộ
          </li>
          <li>
            <strong>Cá béo</strong> (cá hồi, cá thu) là nguồn tốt nhất
          </li>
          <li>
            <strong>Hạt lanh, hạt chia, quả óc chó</strong> cũng chứa omega-3 (cho người ăn chay)
          </li>
          <li>
            Giúp giảm viêm, giảm nguy cơ bệnh tim, hỗ trợ chức năng não
          </li>
          <li>
            Nên ăn cá béo 2-3 lần/tuần
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Omega-3 là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Omega-3</strong> là một loại chất béo không bão hòa đa (polyunsaturated fat) 
            được gọi là "chất béo tốt". Khác với chất béo bão hòa và trans fat, omega-3 có nhiều lợi ích cho sức khỏe.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Omega-3 giống như "dầu bôi trơn" cho cơ thể - 
              giúp tim mạch hoạt động tốt, não bộ hoạt động hiệu quả, và giảm viêm (sưng tấy) trong cơ thể.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Lợi ích của Omega-3</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Giảm nguy cơ bệnh tim mạch</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hỗ trợ chức năng não bộ, trí nhớ</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Giảm viêm trong cơ thể</span>
              </li>
              <li className="flex items-start gap-2">
                <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hỗ trợ sức khỏe mắt</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Omega-3</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3 flex items-center gap-2">
              <Fish className="w-5 h-5" aria-hidden="true" />
              Cá béo (Nguồn tốt nhất)
            </h3>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Fish className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá hồi:</strong> 100g ≈ 1-2g omega-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <Fish className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá thu:</strong> 100g ≈ 2-3g omega-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <Fish className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá ngừ:</strong> 100g ≈ 0.5-1g omega-3</span>
                </li>
                <li className="flex items-start gap-2">
                  <Fish className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá mòi:</strong> 100g ≈ 1-2g omega-3</span>
                </li>
              </ul>
              <p className="text-xs text-blue-900 mt-2">
                <strong>Khuyến nghị:</strong> Ăn cá béo 2-3 lần/tuần (mỗi lần ~100-150g)
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Nguồn Khác (Cho người ăn chay)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Hạt lanh:</strong> 30g ≈ 6-7g omega-3</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Hạt chia:</strong> 30g ≈ 5g omega-3</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Quả óc chó:</strong> 30g ≈ 2-3g omega-3</span>
              </li>
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Dầu hạt lanh, dầu óc chó:</strong> Có thể dùng trong salad</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần bao nhiêu Omega-3?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Không có khuyến nghị chính xác, nhưng:
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Khuyến nghị chung:</strong> Ăn cá béo 2-3 lần/tuần (mỗi lần ~100-150g) 
                hoặc ~250-500mg omega-3/ngày từ thực phẩm.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <p className="text-sm text-green-900">
                <strong>Ví dụ:</strong> 1 bữa cá hồi (150g) ≈ 1.5-3g omega-3, 
                đủ cho cả tuần nếu ăn 2-3 lần/tuần.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá béo 2-3 lần/tuần:</strong> Cá hồi, cá thu, cá ngừ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người ăn chay:</strong> Ăn hạt lanh, hạt chia, quả óc chó thường xuyên
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn cá tươi hoặc đông lạnh:</strong> Cả hai đều tốt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu đơn giản:</strong> Nướng, hấp thay vì chiên để giữ omega-3
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Omega-3 là chất béo tốt
            </p>
          </Card>
          <Card href="/knowledge/heart-failure-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Suy tim</h3>
            <p className="text-sm text-gray-600">
              Omega-3 quan trọng cho tim mạch
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Omega-3 từ thực phẩm thường an toàn, 
          nhưng nếu bạn đang cân nhắc viên uống omega-3 liều cao, hãy tham khảo ý kiến của bác sĩ, 
          đặc biệt nếu bạn đang dùng thuốc chống đông máu.
        </p>
      </Callout>
    </main>
  );
}
