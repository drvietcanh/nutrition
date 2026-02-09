import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Sparkles, Apple, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Sức khỏe Da",
  description:
    "Mối liên hệ giữa dinh dưỡng và sức khỏe da. Các chất dinh dưỡng quan trọng cho da, thực phẩm tốt cho da, và cách hỗ trợ sức khỏe da qua dinh dưỡng.",
  keywords: [
    "dinh dưỡng da",
    "nutrition skin health",
    "sức khỏe da",
    "vitamin C da",
    "vitamin E da",
    "collagen",
    "chất chống oxy hóa",
  ],
};

export default function NutritionSkinHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Sức khỏe Da" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Sức khỏe Da</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Da là cơ quan lớn nhất của cơ thể và phản ánh sức khỏe tổng thể. Dinh dưỡng đóng vai trò quan trọng 
          trong sức khỏe da - từ việc tạo collagen đến bảo vệ khỏi tổn thương. 
          Hiểu về các chất dinh dưỡng cần thiết giúp bạn hỗ trợ sức khỏe da từ bên trong.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin C</strong> - cần thiết để tạo collagen, bảo vệ da khỏi tổn thương
          </li>
          <li>
            <strong>Vitamin E</strong> - chất chống oxy hóa, bảo vệ da khỏi tia UV
          </li>
          <li>
            <strong>Vitamin A</strong> - hỗ trợ tái tạo tế bào da
          </li>
          <li>
            <strong>Omega-3</strong> - giữ ẩm da, giảm viêm
          </li>
          <li>
            <strong>Nước</strong> - giữ ẩm da từ bên trong
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Dinh dưỡng ảnh hưởng đến Da như thế nào?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Da cần nhiều chất dinh dưỡng để:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Tạo collagen (protein trong da)</li>
                <li>• Tái tạo tế bào da</li>
                <li>• Bảo vệ khỏi tia UV</li>
                <li>• Giữ ẩm</li>
                <li>• Chữa lành vết thương</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu dinh dưỡng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Da khô, nứt nẻ</li>
                <li>• Chậm lành vết thương</li>
                <li>• Da xỉn màu</li>
                <li>• Dễ bị tổn thương</li>
                <li>• Lão hóa nhanh</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Da giống như "bức tường" bảo vệ cơ thể. Để "bức tường" chắc chắn và đẹp, cần "nguyên liệu" tốt. 
            Vitamin C giống như "xi măng" để tạo collagen (khung của da). Vitamin E giống như "lớp sơn bảo vệ" 
            chống lại tia UV. Nước giống như "nước" để giữ ẩm. Khi có đủ "nguyên liệu", da khỏe mạnh và đẹp.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất dinh dưỡng Quan trọng cho Da</h2>
        <div className="space-y-4">
          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">1. Vitamin C</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Vitamin C cần thiết để tạo collagen (protein chính trong da) và hoạt động như chất chống oxy hóa.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Trái cây:</strong> Cam, chanh, ổi, xoài (Việt Nam)</li>
                <li>• <strong>Rau củ:</strong> Ớt chuông, cà chua, đậu bắp (trong canh chua Việt Nam)</li>
                <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam)</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ở Việt Nam">
              <p className="text-sm">
                Ổi, xoài, cam là nguồn vitamin C tuyệt vời và phổ biến ở Việt Nam. 
                Canh chua với cà chua, đậu bắp cũng cung cấp vitamin C.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">2. Vitamin E</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Vitamin E là chất chống oxy hóa mạnh, bảo vệ da khỏi tổn thương do tia UV và môi trường.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Dầu thực vật:</strong> Dầu đậu nành, dầu mè (Việt Nam)</li>
                <li>• <strong>Quả hạch:</strong> Đậu phộng, hạt điều (Việt Nam)</li>
                <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam)</li>
                <li>• Trái bơ</li>
              </ul>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">3. Vitamin A</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Vitamin A hỗ trợ tái tạo tế bào da và có thể giúp giảm mụn.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Rau củ màu cam/vàng:</strong> Cà rốt, khoai lang, bí đỏ</li>
                <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam)</li>
                <li>• <strong>Trái cây:</strong> Xoài, đu đủ (Việt Nam)</li>
                <li>• Trứng, sữa</li>
              </ul>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">4. Omega-3</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Omega-3 giúp giữ ẩm da, giảm viêm, và có thể giúp giảm mụn.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Cá béo:</strong> Cá hồi, cá thu, cá basa (Việt Nam)</li>
                <li>• <strong>Quả hạch:</strong> Óc chó, hạnh nhân</li>
                <li>• <strong>Hạt:</strong> Hạt chia, hạt lanh</li>
              </ul>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">5. Nước</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Nước giữ ẩm da từ bên trong. Thiếu nước làm da khô, nứt nẻ.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nước lọc</li>
                <li>• <strong>Canh, cháo (Việt Nam):</strong> Cung cấp nước + dinh dưỡng</li>
                <li>• Trái cây, rau củ (có nhiều nước)</li>
                <li>• <strong>Nước dừa (Việt Nam):</strong> Cung cấp nước + điện giải</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Tốt cho Da</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Yến mạch + trái cây (ổi, xoài) + quả hạch:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Vitamin C (trái cây)</li>
              <li>✓ Vitamin E (quả hạch)</li>
              <li>✓ Chất chống oxy hóa</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa trưa (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Cá kho + Canh chua cá + Rau muống:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Omega-3 (cá)</li>
              <li>✓ Vitamin C (cà chua, đậu bắp trong canh chua)</li>
              <li>✓ Vitamin A, E (rau muống)</li>
              <li>✓ Nước (canh)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa tối (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Tôm rang + Rau cải xào với dầu:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Protein (tôm)</li>
              <li>✓ Vitamin A, C (rau cải)</li>
              <li>✓ Vitamin E (dầu)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Trái cây</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Ổi, xoài, cam (Việt Nam):</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Vitamin C (nhiều)</li>
              <li>✓ Vitamin A (xoài)</li>
              <li>✓ Chất chống oxy hóa</li>
              <li>✓ Nước</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Tốt vs Nên hạn chế cho Da</h2>
        <ComparisonCard
          title="So sánh: Thực phẩm Tốt vs Nên hạn chế cho Da"
          items={[
            {
              label: "Đường",
              good: "Hạn chế đường - đường có thể làm tăng viêm, ảnh hưởng đến collagen, gây mụn",
              bad: "Nhiều đường (nước ngọt, bánh kẹo) - có thể làm da xấu hơn, tăng mụn",
              note: "Hạn chế đường, đặc biệt đường tinh chế"
            },
            {
              label: "Chất béo",
              good: "Chất béo tốt (cá, quả hạch, dầu thực vật) - giữ ẩm da, giảm viêm",
              bad: "Chất béo không tốt (đồ chiên, thực phẩm chế biến) - có thể tăng viêm, ảnh hưởng đến da",
              note: "Chọn chất béo tốt từ cá, quả hạch, dầu thực vật"
            },
            {
              label: "Rau củ và Trái cây",
              good: "Nhiều rau củ, trái cây - vitamin C, A, E, chất chống oxy hóa, nước",
              bad: "Ít rau củ, trái cây - thiếu vitamin và chất chống oxy hóa cho da",
              note: "Ăn nhiều rau củ và trái cây mỗi ngày"
            },
            {
              label: "Nước",
              good: "Đủ nước (8-10 ly/ngày) - giữ ẩm da từ bên trong",
              bad: "Thiếu nước - da khô, nứt nẻ",
              note: "Uống đủ nước, có thể dùng canh, cháo để cung cấp nước"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều trái cây và rau củ:</strong> Cung cấp vitamin C, A, E, và chất chống oxy hóa cho da.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá thường xuyên:</strong> Cá cung cấp omega-3 cho da. Ăn 2-3 lần/tuần.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đủ nước:</strong> Uống 8-10 ly nước/ngày. Canh, cháo cũng cung cấp nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế đường:</strong> Đường có thể ảnh hưởng đến collagen và gây mụn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng trái cây địa phương (ổi, xoài, cam) và cá phong phú 
                để có vitamin C và omega-3 cho da.
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
              <p className="text-sm font-semibold mb-1">"Cần bổ sung collagen để có da đẹp"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> cơ thể tự tạo collagen từ protein và vitamin C. 
                Ăn đủ protein và vitamin C từ thực phẩm thường đủ. Bổ sung collagen không tự động 
                làm da đẹp hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần một 'siêu thực phẩm' là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không có một thực phẩm nào có thể "chữa" da. 
                Quan trọng là chế độ ăn cân bằng, đa dạng với nhiều vitamin và chất chống oxy hóa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Uống nhiều nước sẽ làm da đẹp ngay"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nước quan trọng, nhưng không phải "thần kỳ". 
                Cần kết hợp với dinh dưỡng tốt (vitamin, chất chống oxy hóa) và chăm sóc da đúng cách.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Vitamin C cần thiết để tạo collagen cho da
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-e-antioxidant">
            <h3 className="heading-5 mb-2">Vitamin E và Chất chống Oxy hóa</h3>
            <p className="text-sm text-gray-600">
              Vitamin E bảo vệ da khỏi tổn thương
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Omega-3 và chất béo tốt cho da
            </p>
          </Card>
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Nước và dịch</h3>
            <p className="text-sm text-gray-600">
              Nước giữ ẩm da từ bên trong
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng hỗ trợ sức khỏe da, 
          nhưng không thể thay thế chăm sóc da đúng cách (bảo vệ khỏi tia UV, dưỡng ẩm, vệ sinh). 
          Nếu bạn có các vấn đề về da nghiêm trọng (mụn nặng, viêm da, v.v.), 
          hãy tham khảo bác sĩ da liễu. Dinh dưỡng là một phần của chăm sóc da, không phải toàn bộ.
        </p>
      </Callout>
    </main>
  );
}
