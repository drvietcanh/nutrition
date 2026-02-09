import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Heart, Apple, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng Lão hóa Khỏe mạnh",
  description:
    "Dinh dưỡng cho người cao tuổi - cách ăn uống để lão hóa khỏe mạnh, duy trì sức khỏe, và phòng ngừa bệnh tật. Nhu cầu dinh dưỡng đặc biệt.",
  keywords: [
    "dinh dưỡng người cao tuổi",
    "nutrition aging",
    "lão hóa khỏe mạnh",
    "healthy aging",
    "elderly nutrition",
    "duy trì sức khỏe",
  ],
};

export default function NutritionAgingWellPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng Lão hóa Khỏe mạnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng Lão hóa Khỏe mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Lão hóa là quá trình tự nhiên, nhưng dinh dưỡng đúng cách có thể giúp bạn lão hóa khỏe mạnh, 
          duy trì sức khỏe, và giảm nguy cơ bệnh tật. Hiểu về nhu cầu dinh dưỡng đặc biệt khi lớn tuổi 
          giúp bạn sống khỏe mạnh và độc lập hơn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Protein:</strong> Cần nhiều hơn để duy trì cơ bắp (1.0-1.2g/kg/ngày)
          </li>
          <li>
            <strong>Calcium và Vitamin D:</strong> Quan trọng cho xương khỏe mạnh
          </li>
          <li>
            <strong>Vitamin B12:</strong> Hấp thu giảm khi lớn tuổi, cần chú ý
          </li>
          <li>
            <strong>Chất xơ:</strong> Quan trọng cho tiêu hóa, nhưng cần tăng từ từ
          </li>
          <li>
            <strong>Nước:</strong> Người cao tuổi dễ thiếu nước, cần uống đủ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Thay đổi Dinh dưỡng khi Lớn tuổi</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Khi lớn tuổi, cơ thể có những thay đổi ảnh hưởng đến dinh dưỡng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Thay đổi:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Trao đổi chất chậm hơn (cần ít calo hơn)</li>
                <li>• Mất cơ bắp (cần nhiều protein hơn)</li>
                <li>• Hấp thu dinh dưỡng giảm</li>
                <li>• Cảm giác thèm ăn giảm</li>
                <li>• Khả năng nhai, nuốt có thể giảm</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Cần chú ý:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Đủ protein để duy trì cơ bắp</li>
                <li>• Đủ vitamin và khoáng chất</li>
                <li>• Đủ nước</li>
                <li>• Chất xơ cho tiêu hóa</li>
                <li>• Thực phẩm dễ nhai, dễ tiêu</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Khi lớn tuổi, cơ thể giống như "xe cũ" - cần "bảo dưỡng" đặc biệt. 
            Cần "nhiên liệu tốt" (dinh dưỡng) nhưng với "công thức đặc biệt" - 
            nhiều protein hơn để duy trì cơ bắp, nhiều vitamin hơn vì hấp thu giảm, 
            và thực phẩm dễ tiêu hơn.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">nhu cầu dinh dưỡng đặc biệt</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 mb-3 text-red-900">1. Protein (Tăng)</h3>
            <p className="text-body-sm text-red-900 mb-3">
              Người cao tuổi cần nhiều protein hơn (1.0-1.2g/kg/ngày) để duy trì cơ bắp và sức mạnh.
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
            <ExampleBox variant="tip" title="Ở Việt Nam">
              <p className="text-sm">
                Cá, tôm, cua là nguồn protein tốt và dễ tiêu cho người cao tuổi. 
                Cháo cá, canh chua cá là món ăn phù hợp - dễ tiêu, có protein, có nước.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">2. Calcium và Vitamin D</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Quan trọng cho xương khỏe mạnh. Người cao tuổi cần nhiều hơn để phòng ngừa loãng xương.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Sữa, sữa chua:</strong> Calcium + vitamin D (nếu tăng cường)</li>
                <li>• <strong>Cá nhỏ ăn cả xương (Việt Nam):</strong> Cá cơm, cá khô - có calcium</li>
                <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam) - có calcium</li>
                <li>• <strong>Ánh nắng:</strong> Vitamin D (phơi nắng 10-15 phút/ngày)</li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">3. Vitamin B12</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Hấp thu vitamin B12 giảm khi lớn tuổi. Cần chú ý đảm bảo đủ.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Thịt, cá, trứng:</strong> Nguồn chính của vitamin B12</li>
                <li>• <strong>Sữa, sữa chua:</strong> Có vitamin B12</li>
                <li>• <strong>Ở Việt Nam:</strong> Thịt, cá, trứng trong bữa ăn hàng ngày</li>
              </ul>
            </div>
            <ExampleBox variant="warning" title="Lưu ý">
              <p className="text-sm">
                Một số người cao tuổi có thể cần bổ sung vitamin B12 nếu hấp thu kém. 
                tham khảo bác sĩ nếu cần.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">4. Chất xơ</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Quan trọng cho tiêu hóa, nhưng cần tăng từ từ và đảm bảo uống đủ nước.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Rau củ:</strong> Rau muống, rau cải, mướp (Việt Nam) - nấu mềm</li>
                <li>• <strong>Trái cây:</strong> Ổi, xoài, đu đủ (Việt Nam)</li>
                <li>• <strong>Ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch (nấu mềm)</li>
                <li>• <strong>Đậu:</strong> Đậu đen, đậu đỏ (Việt Nam) - nấu mềm</li>
              </ul>
            </div>
            <ExampleBox variant="warning" title="Lưu ý">
              <p className="text-sm">
                Tăng chất xơ từ từ để cơ thể quen. đảm bảo uống đủ nước. 
                Rau củ nấu mềm dễ tiêu hơn rau sống cho người cao tuổi.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">5. Nước</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Người cao tuổi dễ thiếu nước vì cảm giác khát giảm. Cần chú ý uống đủ nước.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nước lọc</li>
                <li>• <strong>Canh, cháo (Việt Nam):</strong> Cung cấp nước + dinh dưỡng</li>
                <li>• Trái cây, rau củ (có nhiều nước)</li>
                <li>• <strong>Trà ấm (Việt Nam):</strong> Trà xanh, trà gừng</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Mẹo">
              <p className="text-sm">
                Đặt nước ở nơi dễ thấy, uống nước thường xuyên ngay cả khi không khát. 
                Canh, cháo là cách tốt để cung cấp nước cho người cao tuổi.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn cho Người cao tuổi</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cháo thịt gà + rau thơm (Việt Nam):</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Protein (thịt gà) - duy trì cơ bắp</li>
              <li>✓ Dễ tiêu, ấm bụng</li>
              <li>✓ Nước (hydration)</li>
              <li>✓ Vitamin từ rau thơm</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa trưa</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm mềm + Cá kho mềm + Canh rau muống:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Protein (cá) - dễ tiêu</li>
              <li>✓ Calcium (cá nhỏ ăn cả xương)</li>
              <li>✓ Vitamin B12 (cá)</li>
              <li>✓ Chất xơ (rau muống nấu mềm)</li>
              <li>✓ Nước (canh)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa tối</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm mềm + Đậu phụ sốt cà chua + Canh mướp:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Protein (đậu phụ) - dễ tiêu</li>
              <li>✓ Calcium (đậu phụ)</li>
              <li>✓ Vitamin C (cà chua)</li>
              <li>✓ Chất xơ (mướp nấu mềm)</li>
              <li>✓ Nước (canh)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Sữa chua + trái cây mềm:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Protein (sữa chua)</li>
              <li>✓ Calcium (sữa chua)</li>
              <li>✓ Vitamin C (trái cây)</li>
              <li>✓ Probiotic (sữa chua)</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành cho Người cao tuổi</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đủ protein:</strong> Ăn protein ở mỗi bữa để duy trì cơ bắp. Chọn loại dễ tiêu (cá, trứng, đậu phụ).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thực phẩm dễ nhai, dễ tiêu:</strong> Cháo, canh, thịt/cá nấu mềm, rau củ nấu mềm.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống đủ nước:</strong> Uống nước thường xuyên, có thể dùng canh, cháo để cung cấp nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều bữa nhỏ:</strong> Nếu không muốn ăn nhiều một lúc, ăn nhiều bữa nhỏ trong ngày.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Cháo, canh là món ăn lý tưởng - dễ tiêu, có đủ dinh dưỡng, có nước, ấm bụng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phơi nắng:</strong> 10-15 phút/ngày để có vitamin D (quan trọng cho xương).
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/elderly-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Người cao tuổi</h3>
            <p className="text-sm text-gray-600">
              chi tiết về dinh dưỡng cho người cao tuổi
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein quan trọng để duy trì cơ bắp khi lớn tuổi
            </p>
          </Card>
          <Card href="/knowledge/calcium-bone-health">
            <h3 className="heading-5 mb-2">Calcium và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Calcium quan trọng cho xương khỏe mạnh
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-soups-nutrition">
            <h3 className="heading-5 mb-2">Canh Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Canh là món ăn lý tưởng cho người cao tuổi
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu dinh dưỡng của người cao tuổi khác nhau 
          tùy theo tình trạng sức khỏe, bệnh lý, và khả năng ăn uống. Nếu bạn có bệnh lý đặc biệt 
          (bệnh thận, bệnh tim, đái tháo đường), hãy tham khảo chuyên gia dinh dưỡng để có kế hoạch 
          ăn uống phù hợp. Một số người cao tuổi có thể cần bổ sung vitamin hoặc khoáng chất, 
          nên tham khảo bác sĩ.
        </p>
      </Callout>
    </main>
  );
}
