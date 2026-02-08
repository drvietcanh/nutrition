import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Bone, Milk, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Sức khỏe Xương",
  description:
    "Tổng quan về dinh dưỡng cho sức khỏe xương. Calcium, vitamin D, protein, và các chất dinh dưỡng quan trọng cho xương khỏe mạnh. Phòng ngừa loãng xương.",
  keywords: [
    "sức khỏe xương",
    "bone health",
    "calcium",
    "vitamin D",
    "loãng xương",
    "osteoporosis",
    "xương khỏe mạnh",
  ],
};

export default function NutritionBoneHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Sức khỏe Xương" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Bone className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Sức khỏe Xương</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Xương là khung nâng đỡ cơ thể và cần dinh dưỡng đúng cách để khỏe mạnh. 
          Dinh dưỡng tốt từ khi còn trẻ giúp xây dựng xương chắc khỏe, và dinh dưỡng đúng khi lớn tuổi 
          giúp duy trì và bảo vệ xương. Hiểu về các chất dinh dưỡng cần thiết giúp bạn có xương khỏe mạnh suốt đời.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Calcium</strong> - khoáng chất chính trong xương (1000-1200mg/ngày)
          </li>
          <li>
            <strong>Vitamin D</strong> - giúp hấp thu calcium (600-800 IU/ngày)
          </li>
          <li>
            <strong>Protein</strong> - cần để xây dựng và duy trì xương
          </li>
          <li>
            <strong>Magnesium, Phosphorus</strong> - cũng quan trọng cho xương
          </li>
          <li>
            <strong>Tập thể dục</strong> - quan trọng không kém dinh dưỡng cho xương khỏe mạnh
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Xương Cần Dinh dưỡng?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Xương là mô sống, liên tục được xây dựng và phá vỡ. Dinh dưỡng cung cấp "nguyên liệu" để:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Xây dựng xương mới (đặc biệt khi trẻ)</li>
                <li>• Duy trì xương hiện có</li>
                <li>• Sửa chữa xương bị tổn thương</li>
                <li>• Dự trữ calcium</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu dinh dưỡng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Xương yếu, dễ gãy</li>
                <li>• Loãng xương (osteoporosis)</li>
                <li>• Chậm lành khi gãy xương</li>
                <li>• Mất xương nhanh hơn</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Xương giống như "ngôi nhà" - cần "nguyên liệu" (calcium, protein) để xây dựng và "công nhân" 
            (vitamin D) để sử dụng nguyên liệu. Khi còn trẻ, bạn "xây nhà" (xây dựng xương). 
            Khi lớn tuổi, bạn "bảo trì nhà" (duy trì xương). Dinh dưỡng tốt giúp "nhà" chắc chắn và không bị "hư hỏng".
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất Dinh dưỡng Quan trọng cho Xương</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">1. Calcium (Quan trọng nhất)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Calcium là khoáng chất chính trong xương. 99% calcium trong cơ thể ở trong xương và răng.
            </p>
            <div className="space-y-3">
              <NutrientTable
                title="Nhu cầu Calcium Hàng ngày"
                rows={[
                  { nutrient: "Người lớn (19-50 tuổi)", amount: "1000", unit: "mg/ngày", note: "Cả nam và nữ" },
                  { nutrient: "Phụ nữ (51-70 tuổi)", amount: "1200", unit: "mg/ngày", note: "Tăng để phòng ngừa loãng xương" },
                  { nutrient: "Nam giới (51-70 tuổi)", amount: "1000", unit: "mg/ngày", note: "Giữ nguyên" },
                  { nutrient: "Người trên 70 tuổi", amount: "1200", unit: "mg/ngày", note: "Cả nam và nữ" },
                ]}
              />
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Sữa, sữa chua:</strong> ~300mg calcium/250ml sữa</li>
                  <li>• <strong>Cá nhỏ ăn cả xương (Việt Nam):</strong> Cá cơm, cá khô - có calcium</li>
                  <li>• <strong>Đậu phụ (Việt Nam):</strong> ~350mg calcium/150g</li>
                  <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam) - ~100mg calcium/100g</li>
                  <li>• <strong>Đậu đen, đậu đỏ (Việt Nam):</strong> ~50mg calcium/100g</li>
                </ul>
              </div>
              <ExampleBox variant="tip" title="Ở Việt Nam">
                <p className="text-sm">
                  Sữa, sữa chua, đậu phụ, và cá nhỏ ăn cả xương là nguồn calcium tốt và phổ biến ở Việt Nam. 
                  Rau muống, rau cải cũng cung cấp calcium. Kết hợp nhiều nguồn để đảm bảo đủ calcium.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">2. Vitamin D</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Vitamin D giúp cơ thể hấp thu calcium từ thực phẩm. Không có vitamin D, calcium không được hấp thu tốt.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Ánh nắng mặt trời:</strong> Nguồn chính (phơi nắng 10-15 phút/ngày)</li>
                <li>• <strong>Cá béo:</strong> Cá hồi, cá thu, cá basa (Việt Nam)</li>
                <li>• <strong>Lòng đỏ trứng:</strong> Có vitamin D</li>
                <li>• <strong>Sữa tăng cường:</strong> Có vitamin D (nếu tăng cường)</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ở Việt Nam">
              <p className="text-sm">
                Ánh nắng mặt trời là nguồn vitamin D chính. Phơi nắng 10-15 phút/ngày (tay, chân) 
                giúp cơ thể tạo vitamin D. Cá basa, cá thu cũng cung cấp vitamin D.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 mb-3 text-red-900">3. Protein</h3>
            <p className="text-body-sm text-red-900 mb-3">
              Protein cần thiết để xây dựng và duy trì xương. Khoảng 50% thể tích xương là protein.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Thịt nạc:</strong> Thịt gà, thịt heo, thịt bò</li>
                <li>• <strong>Hải sản:</strong> Cá, tôm, cua (Việt Nam)</li>
                <li>• <strong>Trứng:</strong> Protein hoàn chỉnh</li>
                <li>• <strong>Đậu phụ, đậu (Việt Nam):</strong> Protein thực vật</li>
                <li>• <strong>Sữa, sữa chua:</strong> Protein + calcium</li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">4. Các Khoáng chất Khác</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Magnesium và Phosphorus cũng quan trọng cho xương.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Magnesium:</strong> Rau xanh (rau muống, rau cải - Việt Nam), quả hạch, đậu</li>
                <li>• <strong>Phosphorus:</strong> Thịt, cá, sữa, đậu</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Tốt cho Xương</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Sữa chua + trái cây + quả hạch:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Calcium (sữa chua)</li>
              <li>✓ Protein (sữa chua)</li>
              <li>✓ Magnesium (quả hạch)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa Trưa (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Cá nhỏ ăn cả xương + Canh rau muống:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Calcium (cá nhỏ, rau muống)</li>
              <li>✓ Protein (cá)</li>
              <li>✓ Vitamin D (cá)</li>
              <li>✓ Magnesium (rau muống)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa Tối (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Đậu phụ sốt cà chua + Canh mướp:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Calcium (đậu phụ)</li>
              <li>✓ Protein (đậu phụ)</li>
              <li>✓ Magnesium (mướp)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Sữa hoặc sữa chua:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Calcium</li>
              <li>✓ Protein</li>
              <li>✓ Vitamin D (nếu tăng cường)</li>
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
                <strong>Đủ calcium:</strong> Sữa, sữa chua, đậu phụ, cá nhỏ ăn cả xương, rau xanh. 
                Ăn nhiều nguồn để đảm bảo đủ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phơi nắng:</strong> 10-15 phút/ngày để có vitamin D (quan trọng cho hấp thu calcium).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đủ protein:</strong> Protein cần thiết để xây dựng và duy trì xương.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tập thể dục:</strong> Tập thể dục (đi bộ, chạy, nâng tạ) quan trọng không kém dinh dưỡng 
                cho xương khỏe mạnh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Sữa, sữa chua, đậu phụ, cá nhỏ ăn cả xương, rau xanh 
                là nguồn calcium tốt và phổ biến.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Phòng ngừa Loãng xương</h2>
        <Callout variant="warning" title="Loãng xương (Osteoporosis)">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Loãng xương</strong> là tình trạng xương yếu, dễ gãy. Phụ nữ sau mãn kinh có nguy cơ cao hơn.
            </p>
            <p>
              <strong>Phòng ngừa:</strong> Đủ calcium và vitamin D từ khi còn trẻ, tập thể dục thường xuyên, 
              không hút thuốc, hạn chế rượu.
            </p>
            <p>
              <strong>Nếu có nguy cơ:</strong> Tham khảo bác sĩ về bổ sung calcium và vitamin D, 
              và kiểm tra mật độ xương.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/calcium-bone-health">
            <h3 className="heading-5 mb-2">Calcium và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              chi tiết về calcium cho xương
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-d">
            <h3 className="heading-5 mb-2">Vitamin D</h3>
            <p className="text-sm text-gray-600">
              Vitamin D giúp hấp thu calcium
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein cần thiết cho xương
            </p>
          </Card>
          <Card href="/knowledge/elderly-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Người cao tuổi</h3>
            <p className="text-sm text-gray-600">
              Sức khỏe xương quan trọng khi lớn tuổi
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Sức khỏe xương phụ thuộc vào nhiều yếu tố: 
          dinh dưỡng, tập thể dục, di truyền, hormone. Nếu bạn có nguy cơ loãng xương hoặc đã bị loãng xương, 
          hãy tham khảo bác sĩ về bổ sung calcium và vitamin D, và kế hoạch tập thể dục phù hợp.
        </p>
      </Callout>
    </main>
  );
}
