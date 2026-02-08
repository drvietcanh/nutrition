import type { Metadata } from "next";
import Link from "next/link";
import { Heart, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng sau Nhồi máu cơ tim",
  description:
    "Hướng dẫn dinh dưỡng sau nhồi máu cơ tim - chất béo, muối, và phòng ngừa thứ phát. Dinh dưỡng + thuốc + vận động = bộ ba bắt buộc",
  keywords: [
    "nhồi máu cơ tim",
    "dinh dưỡng sau nhồi máu cơ tim",
    "phòng ngừa thứ phát",
    "bệnh tim mạch",
    "cholesterol",
    "chất béo",
  ],
  openGraph: {
    title: "Dinh dưỡng sau Nhồi máu cơ tim",
    description:
      "Hướng dẫn dinh dưỡng sau nhồi máu cơ tim - chất béo, muối, và phòng ngừa thứ phát.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-sau-nhoi-mau-co-tim",
  },
};

export default function DinhDuongSauNhoiMauCoTimPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-sau-nhoi-mau-co-tim');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng sau Nhồi máu cơ tim" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng sau Nhồi máu cơ tim: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Nhồi máu cơ tim (heart attack) là một biến cố tim mạch nghiêm trọng. Sau khi trải qua nhồi máu cơ tim, 
            việc phòng ngừa thứ phát (secondary prevention) là rất quan trọng để giảm nguy cơ tái phát và biến chứng.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng + Thuốc + Vận động = Bộ ba bắt buộc:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Dinh dưỡng lành mạnh giúp giảm cholesterol, huyết áp, và kiểm soát cân nặng</li>
              <li>Kết hợp với thuốc theo chỉ định của bác sĩ</li>
              <li>Vận động thể chất phù hợp</li>
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
            <li>Giúp nhân viên y tế và người bệnh hiểu các nguyên tắc dinh dưỡng sau nhồi máu cơ tim</li>
            <li>Hỗ trợ tư vấn và thay đổi lối sống một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng sau Nhồi máu cơ tim?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Sau nhồi máu cơ tim, mục tiêu dinh dưỡng là phòng ngừa thứ phát - giảm nguy cơ tái phát và biến chứng.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-200 bg-red-50/30">
              <h3 className="heading-5 mb-2">🔹 Giảm Cholesterol</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm LDL cholesterol (cholesterol xấu)</li>
                <li>• Tăng HDL cholesterol (cholesterol tốt)</li>
                <li>• Giảm nguy cơ xơ vữa động mạch</li>
              </ul>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát Huyết áp</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm muối (natri)</li>
                <li>• Tăng kali từ rau củ quả</li>
                <li>• Hỗ trợ kiểm soát huyết áp</li>
              </ul>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát Cân nặng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm cân nếu thừa cân, béo phì</li>
                <li>• Giảm gánh nặng cho tim</li>
                <li>• Cải thiện chức năng tim</li>
              </ul>
            </Card>
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát Đường huyết</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nếu có đái tháo đường, kiểm soát đường huyết tốt</li>
                <li>• Giảm nguy cơ biến chứng tim mạch</li>
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

        {/* Chất béo */}
        <Card>
          <CardHeader
            icon={CheckCircle}
            title="🥑 Quản lý Chất béo"
          />
          <CardContent>
            <p className="text-body mb-4">
              Chất béo là yếu tố quan trọng trong dinh dưỡng sau nhồi máu cơ tim.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="heading-5 mb-2 text-green-700">✅ Nên ăn:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chất béo không bão hòa đơn: dầu ô liu, dầu hạt cải, bơ, các loại hạt</li>
                  <li>Chất béo không bão hòa đa: cá béo (cá hồi, cá thu), quả óc chó, hạt lanh</li>
                  <li>Omega-3: cá béo, hạt chia, hạt lanh</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2 text-red-700">❌ Nên hạn chế:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chất béo bão hòa: thịt đỏ, mỡ động vật, bơ, phô mai</li>
                  <li>Chất béo trans: thực phẩm chế biến sẵn, bánh kẹo, đồ chiên rán</li>
                  <li>Thực phẩm giàu cholesterol: lòng đỏ trứng (hạn chế), nội tạng động vật</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Muối */}
        <Card>
          <CardHeader
            icon={AlertTriangle}
            title="🧂 Giảm Muối (Natri)"
          />
          <CardContent>
            <p className="text-body mb-4">
              Giảm muối giúp kiểm soát huyết áp, giảm gánh nặng cho tim.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Mục tiêu:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Dưới 2g natri/ngày (tương đương 5g muối/ngày)</li>
                  <li>Nếu có suy tim, có thể cần giảm hơn nữa theo chỉ định bác sĩ</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Cách giảm muối:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Nấu ăn tại nhà, kiểm soát lượng muối</li>
                  <li>Hạn chế thực phẩm chế biến sẵn, đồ đóng hộp</li>
                  <li>Dùng gia vị thay thế: tỏi, gừng, chanh, rau thơm</li>
                  <li>Đọc nhãn thực phẩm, chọn sản phẩm ít natri</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chế độ ăn tổng thể */}
        <Card>
          <CardHeader
            icon={Info}
            title="🍽️ Chế độ ăn Tổng thể"
          />
          <CardContent>
            <p className="text-body mb-4">
              Chế độ ăn Địa Trung Hải (Mediterranean diet) hoặc DASH được khuyến cáo cho người sau nhồi máu cơ tim.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Nguyên tắc:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Nhiều rau củ quả: ít nhất 5 phần/ngày</li>
                  <li>Ngũ cốc nguyên hạt: gạo lứt, bánh mì nguyên cám, yến mạch</li>
                  <li>Protein nạc: cá, thịt gà (bỏ da), đậu đỗ</li>
                  <li>Hạn chế thịt đỏ: tối đa 1-2 lần/tuần</li>
                  <li>Chất béo lành mạnh: dầu ô liu, các loại hạt</li>
                  <li>Hạn chế đường và thực phẩm chế biến sẵn</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Practical Tips */}
      <section aria-labelledby="tips-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="tips-heading" className="heading-2 whitespace-nowrap">
            Lời khuyên thực hành
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardContent>
            <ul className="space-y-3 text-body">
              <li>
                <strong>1. Ăn cá ít nhất 2 lần/tuần:</strong> Cá béo (cá hồi, cá thu, cá trích) giàu omega-3, 
                tốt cho tim mạch.
              </li>
              <li>
                <strong>2. Tăng rau củ quả:</strong> Ít nhất 5 phần/ngày, đa dạng màu sắc để có nhiều chất chống oxy hóa.
              </li>
              <li>
                <strong>3. Chọn ngũ cốc nguyên hạt:</strong> Thay gạo trắng bằng gạo lứt, bánh mì trắng bằng bánh mì nguyên cám.
              </li>
              <li>
                <strong>4. Hạn chế thực phẩm chế biến sẵn:</strong> Thường chứa nhiều muối, đường, chất béo không tốt.
              </li>
              <li>
                <strong>5. Kiểm soát khẩu phần:</strong> Ăn vừa đủ, không quá no, chia nhỏ bữa ăn nếu cần.
              </li>
              <li>
                <strong>6. Uống đủ nước:</strong> Nước lọc là tốt nhất, hạn chế nước ngọt, nước có ga.
              </li>
              <li>
                <strong>7. Hạn chế rượu bia:</strong> Nếu uống, chỉ uống vừa phải (theo chỉ định bác sĩ).
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 5. Monitoring and Follow-up */}
      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi và Tái khám
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Callout variant="warning" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Sau nhồi máu cơ tim, cần:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Tái khám định kỳ theo chỉ định bác sĩ</li>
            <li>Theo dõi huyết áp, cholesterol, đường huyết (nếu có đái tháo đường)</li>
            <li>Uống thuốc đều đặn theo chỉ định</li>
            <li>Vận động thể chất phù hợp (theo hướng dẫn bác sĩ)</li>
            <li>Bỏ thuốc lá nếu đang hút</li>
          </ul>
        </Callout>
      </section>

      {/* Related Content */}
      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}
