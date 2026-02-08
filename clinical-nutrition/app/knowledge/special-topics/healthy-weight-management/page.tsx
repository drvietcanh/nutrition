import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { TrendingUp, CheckCircle2, AlertCircle, Activity } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Quản lý Cân nặng lành mạnh",
  description:
    "Hướng dẫn cách quản lý cân nặng lành mạnh - không phải ăn kiêng cực đoan mà là thay đổi lối sống bền vững, cân bằng dinh dưỡng và vận động.",
  keywords: [
    "quản lý cân nặng",
    "giảm cân",
    "tăng cân",
    "dinh dưỡng",
    "lối sống",
  ],
};

export default function HealthyWeightManagementPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Quản lý Cân nặng lành mạnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Quản lý Cân nặng lành mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Quản lý cân nặng lành mạnh không phải là ăn kiêng cực đoan hay bỏ đói bản thân. 
          Đó là về việc tạo ra thói quen ăn uống và lối sống bền vững, 
          giúp bạn đạt và duy trì cân nặng phù hợp với sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Quản lý cân nặng lành mạnh là <strong>thay đổi lối sống bền vững</strong>, không phải ăn kiêng tạm thời
          </li>
          <li>
            <strong>Cân bằng năng lượng:</strong> Ăn đủ (không quá nhiều, không quá ít) + vận động
          </li>
          <li>
            <strong>Chọn thực phẩm giàu dinh dưỡng:</strong> Rau củ, trái cây, protein nạc, ngũ cốc nguyên cám
          </li>
          <li>
            <strong>Kiên nhẫn:</strong> Thay đổi cân nặng lành mạnh cần thời gian (0.5-1kg/tuần)
          </li>
          <li>
            <strong>Mỗi người khác nhau:</strong> Cân nặng phù hợp phụ thuộc vào nhiều yếu tố
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nguyên tắc Cơ bản</h2>
        <Card>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Cân bằng năng lượng</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cân nặng thay đổi khi có sự mất cân bằng giữa năng lượng ăn vào và năng lượng tiêu hao:
              </p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Ăn nhiều hơn tiêu hao</strong> → Tăng cân</li>
                <li>• <strong>Ăn ít hơn tiêu hao</strong> → Giảm cân</li>
                <li>• <strong>Cân bằng</strong> → Duy trì cân nặng</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-sm font-semibold text-gray-900 mb-2">Chọn Thực phẩm Giàu Dinh dưỡng</h3>
              <p className="text-sm text-gray-700">
                Thay vì chỉ đếm calo, hãy chọn thực phẩm giàu dinh dưỡng: 
                rau củ, trái cây, protein nạc, ngũ cốc nguyên cám. 
                Chúng giúp bạn no lâu hơn và cung cấp nhiều vitamin, khoáng chất.
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
                <strong>Ăn nhiều rau củ, trái cây:</strong> Ít calo, nhiều chất xơ, giúp no
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn protein nạc:</strong> Thịt gà, cá, đậu thay vì thịt mỡ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch thay vì gạo trắng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Vận động thường xuyên:</strong> Đi bộ, tập thể dục ít nhất 30 phút/ngày
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ngủ đủ giấc:</strong> Thiếu ngủ có thể ảnh hưởng đến cân nặng
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Bỏ bữa sẽ giảm cân nhanh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bỏ bữa có thể làm chậm trao đổi chất và khiến bạn ăn nhiều hơn sau đó. 
                Ăn đều đặn, đủ bữa tốt hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ăn ít calo là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chất lượng thực phẩm cũng quan trọng. 
                200 calo từ rau củ khác với 200 calo từ bánh kẹo.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Có thể giảm cân nhanh và an toàn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Giảm cân lành mạnh là 0.5-1kg/tuần. 
                Giảm quá nhanh có thể mất cơ và không bền vững.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Lập kế hoạch giúp quản lý cân nặng
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Chọn carbohydrate đúng cho quản lý cân nặng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Quản lý cân nặng là vấn đề phức tạp và cá nhân. 
          Nếu bạn có vấn đề về cân nặng hoặc đang muốn thay đổi cân nặng, 
          hãy tham khảo ý kiến của bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}
