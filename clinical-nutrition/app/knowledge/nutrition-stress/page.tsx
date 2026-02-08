import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Brain, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Stress",
  description:
    "Mối liên hệ giữa dinh dưỡng và stress. Thực phẩm giúp giảm stress, thực phẩm nên tránh, và food-mood connection.",
  keywords: [
    "dinh dưỡng và stress",
    "nutrition stress",
    "food mood",
    "thực phẩm giảm stress",
    "anxiety",
  ],
};

export default function NutritionStressPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Stress" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Stress</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng và stress có mối liên hệ hai chiều. Stress có thể ảnh hưởng đến cách bạn ăn, 
          và những gì bạn ăn có thể ảnh hưởng đến mức độ stress của bạn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Thực phẩm giúp giảm stress:</strong> Thực phẩm giàu B vitamins, magnesium, omega-3, chất xơ
          </li>
          <li>
            <strong>Tránh:</strong> Đồ ngọt, caffeine quá nhiều, rượu, thực phẩm chế biến sẵn
          </li>
          <li>
            <strong>Ăn đều đặn:</strong> Bỏ bữa có thể làm tăng stress
          </li>
          <li>
            <strong>Hydration:</strong> Uống đủ nước quan trọng
          </li>
          <li>
            <strong>Lưu ý:</strong> Dinh dưỡng chỉ là một phần, cần kết hợp với quản lý stress khác
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Giúp Giảm Stress</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu B Vitamins</h3>
          <p className="text-body-sm mb-3">
            B vitamins (đặc biệt B6, B9, B12) quan trọng cho sản xuất serotonin và dopamine - 
            hormone "hạnh phúc".
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Ngũ cốc nguyên cám:</strong> Yến mạch, gạo lứt, bánh mì nguyên cám</p>
            <p>• <strong>Đậu, đậu lăng:</strong> Giàu B vitamins</p>
            <p>• <strong>Rau xanh đậm:</strong> Rau chân vịt, bông cải xanh (folate/B9)</p>
            <p>• <strong>Trứng, sữa:</strong> B12</p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu Magnesium</h3>
          <p className="text-body-sm mb-3">
            Magnesium giúp thư giãn cơ bắp và thần kinh, có thể giúp giảm stress.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Quả hạch:</strong> Hạnh nhân, hạt điều</p>
            <p>• <strong>Hạt:</strong> Hạt bí, hạt hướng dương</p>
            <p>• <strong>Đậu:</strong> Đậu đen, đậu lăng</p>
            <p>• <strong>Rau xanh đậm:</strong> Rau chân vịt</p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Omega-3</h3>
          <p className="text-body-sm mb-3">
            Omega-3 có thể giúp giảm viêm và cải thiện tâm trạng.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Cá béo:</strong> Cá hồi, cá thu, cá ngừ</p>
            <p>• <strong>Hạt chia, hạt lanh:</strong> Nguồn thực vật</p>
            <p>• <strong>Quả óc chó:</strong> Có omega-3</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Nên tránh Khi Stress</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Có thể Tăng Stress</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ Ngọt, Nhiều Đường</p>
              <p className="text-sm text-gray-700">
                Có thể làm tăng đường huyết nhanh, sau đó giảm, gây mệt mỏi và căng thẳng hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Caffeine Quá Nhiều</p>
              <p className="text-sm text-gray-700">
                Có thể làm tăng lo lắng, bồn chồn, khó ngủ - tăng stress.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Rượu</p>
              <p className="text-sm text-gray-700">
                Có thể giúp thư giãn tạm thời nhưng sau đó có thể làm tăng lo lắng và stress.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Thực phẩm Chế biến Sẵn</p>
              <p className="text-sm text-gray-700">
                Thường có nhiều đường, muối, chất béo xấu - không tốt cho sức khỏe tổng thể.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Ăn đều đặn: Bỏ bữa có thể làm tăng stress. Ăn đều đặn giúp ổn định đường huyết và tâm trạng' },
            { type: 'tip', text: 'Bữa sáng quan trọng: Bắt đầu ngày với bữa sáng cân bằng giúp ổn định tâm trạng' },
            { type: 'tip', text: 'Snack lành mạnh: Mang theo snack lành mạnh (quả hạch, trái cây) để tránh chọn đồ không tốt khi stress' },
            { type: 'check', text: 'Uống đủ nước: Mất nước có thể làm tăng stress và mệt mỏi' },
            { type: 'check', text: 'Ăn đa dạng: đảm bảo đủ các nhóm thực phẩm để có đủ dinh dưỡng' },
            { type: 'warning', text: 'Tránh "comfort food" không tốt: Khi stress, dễ chọn đồ ngọt, đồ chiên - cố gắng chọn đồ lành mạnh hơn' },
            { type: 'info', text: 'Kết hợp với quản lý stress khác: Dinh dưỡng chỉ là một phần, cần ngủ đủ, tập thể dục, quản lý stress' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Giúp Giảm Stress</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa Trưa Cân bằng</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Cá hồi (omega-3) + rau xanh đậm (B vitamins, magnesium) + gạo lứt (B vitamins)</p>
            <p>• Thịt gà nạc (protein) + bông cải xanh (B vitamins, magnesium) + khoai tây</p>
            <p>• Đậu đen (B vitamins, magnesium) + gạo lứt + rau xanh</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-sleep">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Giấc ngủ</h3>
            <p className="text-sm text-gray-600">
              Giấc ngủ cũng ảnh hưởng đến stress
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/magnesium-health">
            <h3 className="heading-5 mb-2">Magnesium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Magnesium có thể giúp giảm stress
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng có thể ảnh hưởng đến stress, 
          nhưng nếu bạn có stress nghiêm trọng hoặc lo lắng, hãy tham khảo bác sĩ hoặc chuyên gia 
          sức khỏe tâm thần. Dinh dưỡng chỉ là một phần của quản lý stress.
        </p>
      </Callout>
    </main>
  );
}
