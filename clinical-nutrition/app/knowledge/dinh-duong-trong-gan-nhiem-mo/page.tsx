import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Gan nhiễm mỡ",
  description:
    "Hướng dẫn dinh dưỡng cho gan nhiễm mỡ - giảm mỡ gan, kiểm soát đường và mỡ máu. Gan nhiễm mỡ có thể đảo ngược nếu điều chỉnh dinh dưỡng và lối sống đúng",
  keywords: [
    "gan nhiễm mỡ",
    "NAFLD",
    "dinh dưỡng gan",
    "giảm mỡ gan",
    "chất béo",
    "đường huyết",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Gan nhiễm mỡ",
    description:
      "Hướng dẫn dinh dưỡng cho gan nhiễm mỡ - giảm mỡ gan, kiểm soát đường và mỡ máu.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-gan-nhiem-mo",
  },
};

export default function DinhDuongTrongGanNhiemMoPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-gan-nhiem-mo');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Gan nhiễm mỡ" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Gan nhiễm mỡ: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Gan nhiễm mỡ (NAFLD - Non-Alcoholic Fatty Liver Disease) là tình trạng tích tụ mỡ trong gan 
            không do rượu. Đây là bệnh gan mạn tính phổ biến nhất, thường liên quan đến béo phì, 
            đái tháo đường, và rối loạn lipid máu.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Tin tốt: Gan nhiễm mỡ có thể đảo ngược!</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Điều chỉnh dinh dưỡng và lối sống đúng có thể giảm mỡ gan</li>
              <li>Giảm cân 5-10% có thể cải thiện đáng kể</li>
              <li>Kiểm soát đường huyết và mỡ máu</li>
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
            <li>Giúp nhân viên y tế và người bệnh hiểu các nguyên tắc dinh dưỡng trong gan nhiễm mỡ</li>
            <li>Hỗ trợ tư vấn và thay đổi lối sống một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Dinh dưỡng đóng vai trò trung tâm trong điều trị gan nhiễm mỡ:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Giảm mỡ gan</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm cân giúp giảm mỡ tích tụ trong gan</li>
                <li>• Cải thiện chức năng gan</li>
              </ul>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát Đường huyết</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm đường và tinh bột tinh chế</li>
                <li>• Chọn carbohydrate phức hợp</li>
                <li>• Giảm kháng insulin</li>
              </ul>
            </Card>
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🔹 Kiểm soát Mỡ máu</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm chất béo bão hòa</li>
                <li>• Tăng chất béo không bão hòa</li>
                <li>• Giảm cholesterol</li>
              </ul>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2">🔹 Giảm Viêm</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Chọn thực phẩm chống viêm</li>
                <li>• Tránh thực phẩm chế biến sẵn</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader
            icon={CheckCircle}
            title="🍽️ Giảm Cân (nếu thừa cân)"
          />
          <CardContent>
            <p className="text-body mb-4">
              Giảm cân là biện pháp quan trọng nhất để giảm mỡ gan.
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Mục tiêu: Giảm 5-10% cân nặng hiện tại</li>
              <li>Giảm cân từ từ: 0.5-1kg/tuần</li>
              <li>Giảm năng lượng: 500-1000 kcal/ngày so với nhu cầu</li>
              <li>Kết hợp với vận động thể chất</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            icon={Info}
            title="🍞 Quản lý Carbohydrate"
          />
          <CardContent>
            <p className="text-body mb-4">
              Giảm đường và tinh bột tinh chế, chọn carbohydrate phức hợp.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2 text-red-700">❌ Hạn chế:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đường: nước ngọt, bánh kẹo, mứt</li>
                  <li>Tinh bột tinh chế: bánh mì trắng, gạo trắng, mì gói</li>
                  <li>Thực phẩm có chỉ số đường huyết cao</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2 text-green-700">✅ Nên ăn:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Ngũ cốc nguyên hạt: gạo lứt, yến mạch, bánh mì nguyên cám</li>
                  <li>Rau củ quả: nhiều chất xơ, ít đường</li>
                  <li>Đậu đỗ: giàu chất xơ và protein</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            icon={AlertTriangle}
            title="🥑 Chọn Chất béo Đúng"
          />
          <CardContent>
            <p className="text-body mb-4">
              Chọn chất béo lành mạnh, hạn chế chất béo không tốt.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2 text-green-700">✅ Nên ăn:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chất béo không bão hòa: dầu ô liu, dầu hạt cải, bơ, các loại hạt</li>
                  <li>Omega-3: cá béo (cá hồi, cá thu), quả óc chó</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2 text-red-700">❌ Hạn chế:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chất béo bão hòa: thịt đỏ, mỡ động vật</li>
                  <li>Chất béo trans: thực phẩm chế biến sẵn, đồ chiên rán</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

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
                <strong>1. Giảm cân từ từ:</strong> Không giảm quá nhanh, có thể gây hại cho gan.
              </li>
              <li>
                <strong>2. Tăng rau củ quả:</strong> Ít nhất 5 phần/ngày, giàu chất chống oxy hóa.
              </li>
              <li>
                <strong>3. Chọn protein nạc:</strong> Cá, thịt gà, đậu đỗ thay vì thịt đỏ.
              </li>
              <li>
                <strong>4. Hạn chế rượu bia:</strong> Tốt nhất là không uống, hoặc uống rất ít.
              </li>
              <li>
                <strong>5. Vận động thể chất:</strong> Ít nhất 150 phút/tuần vận động vừa phải.
              </li>
              <li>
                <strong>6. Theo dõi định kỳ:</strong> Tái khám và kiểm tra chức năng gan theo chỉ định.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}
