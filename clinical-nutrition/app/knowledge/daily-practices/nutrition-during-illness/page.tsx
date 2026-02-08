import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Heart, Droplet, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng khi Bị bệnh",
  description:
    "Hướng dẫn dinh dưỡng khi bị bệnh - cách ăn uống để hỗ trợ phục hồi, giữ nước, và cung cấp năng lượng khi cơ thể cần nhất.",
  keywords: [
    "dinh dưỡng khi bị bệnh",
    "nutrition during illness",
    "ăn uống khi ốm",
    "phục hồi",
    "hydration",
    "cảm cúm",
  ],
};

export default function NutritionDuringIllnessPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Dinh dưỡng khi Bị bệnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng khi Bị bệnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Khi bị bệnh, cơ thể cần dinh dưỡng để phục hồi, nhưng thường không muốn ăn hoặc khó ăn. 
          Hiểu cách ăn uống khi bị bệnh giúp bạn hỗ trợ cơ thể phục hồi nhanh hơn và cảm thấy tốt hơn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Giữ nước</strong> là quan trọng nhất - uống nhiều nước, nước canh, trà ấm
          </li>
          <li>
            <strong>Ăn nhẹ, dễ tiêu:</strong> Cháo, soup, trái cây mềm khi không muốn ăn
          </li>
          <li>
            <strong>Protein nhẹ:</strong> Trứng, sữa chua, đậu phụ để hỗ trợ phục hồi
          </li>
          <li>
            <strong>Vitamin C:</strong> Trái cây, nước cam để hỗ trợ hệ miễn dịch
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Cháo, canh là món ăn lý tưởng khi bị bệnh
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nguyên tắc Dinh dưỡng khi Bị bệnh</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">1. Giữ Nước (Quan trọng nhất)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Khi bị bệnh, cơ thể mất nước qua sốt, đổ mồ hôi, hoặc nôn mửa. Giữ nước là ưu tiên số một.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nên uống:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nước lọc (quan trọng nhất)</li>
                <li>• Nước canh, soup (cung cấp nước + dinh dưỡng)</li>
                <li>• Trà ấm (trà gừng, trà chanh mật ong)</li>
                <li>• Nước dừa (cung cấp điện giải)</li>
                <li>• <strong>Cháo loãng (Việt Nam) - vừa có nước vừa có dinh dưỡng</strong></li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3 border border-blue-200 mt-2">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nên tránh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nước ngọt, nước có gas</li>
                <li>• Cà phê, rượu (làm mất nước)</li>
                <li>• Đồ uống quá lạnh hoặc quá nóng</li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">2. Ăn Nhẹ, Dễ Tiêu</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Khi bị bệnh, dạ dày thường nhạy cảm. Ăn nhẹ, dễ tiêu giúp cơ thể hấp thu dinh dưỡng mà không gây khó chịu.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Món ăn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Cháo (Việt Nam):</strong> Cháo thịt gà, cháo cá - dễ tiêu, ấm bụng, có dinh dưỡng</li>
                <li>• <strong>Canh (Việt Nam):</strong> Canh rau, canh thịt - cung cấp nước + dinh dưỡng</li>
                <li>• Soup (súp gà, súp rau củ)</li>
                <li>• Trái cây mềm (chuối, táo nghiền)</li>
                <li>• Sữa chua (dễ tiêu, có probiotic)</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-3 border border-green-200 mt-2">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nên tránh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Đồ chiên, nhiều dầu mỡ</li>
                <li>• Đồ cay, nóng</li>
                <li>• Đồ quá ngọt hoặc quá mặn</li>
                <li>• Thức ăn khó tiêu (thịt mỡ, đồ nhiều chất béo)</li>
              </ul>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">3. Protein Nhẹ</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Protein cần thiết để phục hồi, nhưng cần chọn loại nhẹ, dễ tiêu.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn protein tốt khi bị bệnh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Trứng:</strong> Trứng luộc, trứng chưng - dễ tiêu, có protein</li>
                <li>• <strong>Sữa chua:</strong> Dễ tiêu, có probiotic</li>
                <li>• <strong>Đậu phụ (Việt Nam):</strong> Dễ tiêu, có protein thực vật</li>
                <li>• <strong>Thịt gà nạc (trong cháo):</strong> Dễ tiêu, có protein</li>
                <li>• <strong>Cá nạc (trong cháo/canh):</strong> Dễ tiêu, có protein</li>
              </ul>
            </div>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">4. Vitamin C</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Vitamin C hỗ trợ hệ miễn dịch và có thể giúp phục hồi nhanh hơn.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn vitamin C khi bị bệnh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Nước cam, chanh (Việt Nam):</strong> Dễ uống, có vitamin C</li>
                <li>• <strong>Trái cây mềm:</strong> Ổi, xoài, đu đủ (Việt Nam)</li>
                <li>• <strong>Canh chua (Việt Nam):</strong> Cà chua, đậu bắp có vitamin C</li>
                <li>• Trà chanh mật ong (ấm, dễ uống)</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Món ăn Việt Nam khi Bị bệnh</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Cháo - Món Ăn Lý tưởng</h3>
            <p className="text-body-sm mb-3">
              Cháo là món ăn hoàn hảo khi bị bệnh: dễ tiêu, ấm bụng, có nước, và có thể có đủ dinh dưỡng.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Cháo thịt gà:</strong> Protein từ gà + gạo + nước + rau thơm = đủ dinh dưỡng, dễ tiêu</p>
              <p>• <strong>Cháo cá:</strong> Protein từ cá + gạo + nước + rau thơm = đủ dinh dưỡng, dễ tiêu</p>
              <p>• <strong>Cháo đậu xanh:</strong> Protein thực vật + gạo + nước = dễ tiêu, có dinh dưỡng</p>
            </div>
            <ExampleBox variant="tip" title="Tại sao Cháo Tốt khi Bị bệnh">
              <p className="text-sm">
                Cháo có nước (hydration), carbohydrate (năng lượng), protein (phục hồi), 
                và dễ tiêu. Nấu loãng, ấm, có thể thêm rau thơm để có vitamin. 
                Đây là lý do tại sao cháo là món ăn truyền thống khi bị bệnh ở Việt Nam.
              </p>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Canh - Cung cấp Nước và Dinh dưỡng</h3>
            <p className="text-body-sm mb-3">
              Canh cung cấp nước và dinh dưỡng, đặc biệt tốt khi bị bệnh.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Canh rau muống:</strong> Nước + vitamin từ rau + dễ tiêu</p>
              <p>• <strong>Canh mướp:</strong> Nước + vitamin + có thể có protein từ tôm</p>
              <p>• <strong>Canh chua cá:</strong> Nước + protein từ cá + vitamin C từ cà chua, đậu bắp</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực đơn khi Bị bệnh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Khi Không Muốn Ăn</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Nước:</strong> Nước lọc, nước canh, trà ấm</p>
              <p>• <strong>Cháo loãng:</strong> Cháo thịt gà loãng, ấm</p>
              <p>• <strong>Trái cây mềm:</strong> Chuối, đu đủ</p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Khi Có thể Ăn Một Chút</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Cháo đầy đủ:</strong> Cháo thịt gà + rau thơm</p>
              <p>• <strong>Canh:</strong> Canh rau muống, canh mướp</p>
              <p>• <strong>Trứng:</strong> Trứng luộc, trứng chưng</p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Khi Bắt đầu Phục hồi</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Cơm nhão:</strong> Cơm mềm + canh + món mặn nhẹ</p>
              <p>• <strong>Bún:</strong> Bún với nhiều rau, ít bún</p>
              <p>• <strong>Trái cây:</strong> Ổi, xoài, cam</p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Khi Gần Khỏi</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Bữa ăn bình thường:</strong> Nhưng vẫn nhẹ, dễ tiêu</p>
              <p>• <strong>Nhiều rau củ:</strong> Để bổ sung vitamin</p>
              <p>• <strong>Protein nạc:</strong> Thịt gà, cá, đậu phụ</p>
            </div>
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
                <strong>Ưu tiên giữ nước:</strong> Uống nước thường xuyên, ngay cả khi không muốn. 
                Nước canh, cháo cũng cung cấp nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn nhiều bữa nhỏ:</strong> Thay vì 3 bữa lớn, ăn nhiều bữa nhỏ, dễ tiêu hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn món dễ tiêu:</strong> Cháo, canh, soup thay vì đồ chiên, nhiều dầu mỡ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng cháo, canh - món ăn truyền thống khi bị bệnh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Khi nôn mửa hoặc tiêu chảy:</strong> Uống nước từ từ, có thể dùng nước dừa hoặc 
                dung dịch bù nước. Ăn rất nhẹ, dễ tiêu.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Khi Nào Cần Tham khảo Bác sĩ</h2>
        <Callout variant="error" title="Cần Tham khảo Bác sĩ">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Khi không thể giữ nước:</strong> nôn mửa liên tục, không thể uống nước, 
              hoặc có dấu hiệu mất nước nghiêm trọng (khô miệng, không đi tiểu, yếu).
            </p>
            <p>
              <strong>Khi không ăn được trong nhiều ngày:</strong> Nếu không thể ăn gì trong 2-3 ngày, 
              cần tham khảo bác sĩ.
            </p>
            <p>
              <strong>Khi có bệnh lý đặc biệt:</strong> Đái tháo đường, bệnh thận, hoặc các bệnh lý khác 
              cần điều chỉnh dinh dưỡng đặc biệt khi bị bệnh.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Nước và Dịch</h3>
            <p className="text-sm text-gray-600">
              Giữ nước quan trọng khi bị bệnh
            </p>
          </Card>
          <Card href="/knowledge/nutrition-recovery">
            <h3 className="heading-5 mb-2">Dinh dưỡng Phục hồi</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng sau khi khỏi bệnh
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Vitamin C hỗ trợ hệ miễn dịch
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng khi bị bệnh hỗ trợ phục hồi, 
          nhưng không thay thế điều trị y tế. Nếu bạn có triệu chứng nghiêm trọng, không thể giữ nước, 
          hoặc có bệnh lý đặc biệt, hãy tham khảo bác sĩ ngay lập tức.
        </p>
      </Callout>
    </main>
  );
}
