import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Heart, CheckCircle2, AlertCircle, Leaf, Milk } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sức khỏe Đường ruột và Probiotics",
  description:
    "Hiểu về sức khỏe đường ruột, probiotics, và prebiotics - vai trò trong tiêu hóa, miễn dịch, và cách bổ sung qua thực phẩm.",
  keywords: [
    "probiotics",
    "prebiotics",
    "đường ruột",
    "tiêu hóa",
    "dinh dưỡng",
  ],
};

export default function GutHealthProbioticsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Sức khỏe Đường ruột và Probiotics" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Sức khỏe Đường ruột và Probiotics</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đường ruột khỏe mạnh là nền tảng của sức khỏe tổng thể. 
          Probiotics (lợi khuẩn) và prebiotics (thức ăn cho lợi khuẩn) 
          đóng vai trò quan trọng trong việc duy trì sức khỏe đường ruột, 
          hỗ trợ tiêu hóa và hệ miễn dịch.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Probiotics</strong> là lợi khuẩn sống giúp đường ruột khỏe mạnh
          </li>
          <li>
            <strong>Prebiotics</strong> là thức ăn cho lợi khuẩn (chất xơ)
          </li>
          <li>
            <strong>Sữa chua, kefir, kim chi</strong> là nguồn probiotics tự nhiên
          </li>
          <li>
            <strong>Rau củ, trái cây, ngũ cốc nguyên cám</strong> chứa prebiotics
          </li>
          <li>
            Đường ruột khỏe mạnh hỗ trợ tiêu hóa, miễn dịch, và sức khỏe tinh thần
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Probiotics là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Probiotics</strong> là các vi khuẩn sống có lợi cho sức khỏe, đặc biệt là đường ruột. 
            Chúng giúp cân bằng hệ vi sinh đường ruột, hỗ trợ tiêu hóa, và có thể tăng cường hệ miễn dịch.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Đường ruột giống như một "khu vườn" với nhiều loại vi khuẩn. 
              Probiotics giống như "hạt giống tốt" giúp khu vườn khỏe mạnh, 
              trong khi prebiotics giống như "phân bón" nuôi dưỡng các vi khuẩn tốt.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Lợi ích của Probiotics</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hỗ trợ tiêu hóa, giảm đầy hơi, táo bón</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Tăng cường hệ miễn dịch</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Có thể giúp giảm tiêu chảy (đặc biệt sau dùng kháng sinh)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hỗ trợ sức khỏe tinh thần (mối liên hệ ruột-não)</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Probiotics</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-green-700 mb-2">✓ Nguồn tự nhiên:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Sữa chua:</strong> Chọn loại có "vi khuẩn sống"</span>
                </li>
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Kefir:</strong> Đồ uống lên men từ sữa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Kim chi, dưa muối:</strong> Rau củ lên men</span>
                </li>
                <li className="flex items-start gap-2">
                  <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Miso, tempeh:</strong> Đậu nành lên men</span>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Lưu ý:</p>
              <p className="text-xs text-gray-700">
                Không phải tất cả sữa chua đều có probiotics. 
                Kiểm tra nhãn để tìm "vi khuẩn sống" hoặc "live cultures".
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Prebiotics - Thức ăn cho Lợi khuẩn</h2>
        <Card>
          <p className="text-body mb-3">
            <strong>Prebiotics</strong> là chất xơ không tiêu hóa được, đóng vai trò như "thức ăn" cho lợi khuẩn. 
            Ăn prebiotics giúp nuôi dưỡng probiotics trong đường ruột.
          </p>
          <div>
            <p className="text-sm font-semibold text-green-700 mb-2">Nguồn Prebiotics:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Tỏi, hành tây</li>
              <li>• Chuối, táo</li>
              <li>• Yến mạch, lúa mì nguyên cám</li>
              <li>• Rau xanh, bông cải xanh</li>
            </ul>
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
                <strong>Ăn sữa chua mỗi ngày:</strong> Chọn loại có vi khuẩn sống
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn nhiều rau củ, trái cây:</strong> Cung cấp prebiotics
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thử thực phẩm lên men:</strong> Kim chi, dưa muối (với lượng vừa phải)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Viên uống probiotics:</strong> Chỉ nên dùng khi thực sự cần, tham khảo bác sĩ
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/dietary-fiber">
            <h3 className="heading-5 mb-2">Chất xơ trong Dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Chất xơ là prebiotics
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Bao gồm thực phẩm có probiotics
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Probiotics từ thực phẩm thường an toàn, 
          nhưng nếu bạn có vấn đề về đường ruột hoặc đang cân nhắc viên uống probiotics, 
          hãy tham khảo ý kiến của bác sĩ.
        </p>
      </Callout>
    </main>
  );
}
