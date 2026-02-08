import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Droplet, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin K và Đông máu",
  description:
    "Hiểu về vitamin K - vitamin quan trọng cho đông máu và sức khỏe xương. Nguồn thực phẩm, nhu cầu, và warnings về warfarin interaction.",
  keywords: [
    "vitamin K",
    "đông máu",
    "blood clotting",
    "warfarin",
    "xương",
  ],
};

export default function VitaminKBloodClottingPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Vitamin K và Đông máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplet className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin K và Đông máu</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin K là một vitamin quan trọng cho quá trình đông máu và sức khỏe xương. 
          đặc biệt quan trọng cho người dùng warfarin (thuốc chống đông máu) - cần chú ý đến lượng vitamin K.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin K</strong> quan trọng cho đông máu và sức khỏe xương
          </li>
          <li>
            <strong>Nhu cầu:</strong> 90-120mcg/ngày cho người lớn (nữ 90mcg, nam 120mcg)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Rau xanh đậm (rau chân vịt, bông cải), dầu thực vật
          </li>
          <li>
            <strong>Warfarin:</strong> Vitamin K ảnh hưởng đến tác dụng của warfarin - cần ổn định lượng
          </li>
          <li>
            <strong>Quan trọng:</strong> Không tránh hoàn toàn vitamin K khi dùng warfarin, chỉ cần ổn định
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin K là gì và Vai trò của nó?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Đông máu (ngăn chảy máu quá nhiều)</li>
                <li>• Sức khỏe xương</li>
                <li>• Sức khỏe mạch máu</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Chảy máu quá nhiều</li>
                <li>• Dễ bầm tím</li>
                <li>• Chảy máu nướu</li>
                <li>• Xương yếu (nếu thiếu lâu dài)</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Vitamin K Tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu Vitamin K</h3>
          <NutrientTable
            title="Hàm lượng Vitamin K trong Thực phẩm"
            rows={[
              { nutrient: "Rau chân vịt (100g, sống)", amount: "483", unit: "mcg", highlight: "good", note: "Rất giàu!" },
              { nutrient: "Bông cải xanh (100g, nấu chín)", amount: "141", unit: "mcg", highlight: "good" },
              { nutrient: "Cải xoăn (100g, sống)", amount: "817", unit: "mcg", highlight: "good", note: "Rất giàu!" },
              { nutrient: "Rau cải thìa (100g, nấu chín)", amount: "108", unit: "mcg", highlight: "good" },
              { nutrient: "Dầu đậu nành (1 muỗng canh)", amount: "25", unit: "mcg", highlight: "moderate" },
              { nutrient: "Dầu ô liu (1 muỗng canh)", amount: "8", unit: "mcg", highlight: "moderate" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin K và Warfarin</h2>
        <Callout variant="error" title="QUAN TRỌNG: Tương tác với Warfarin">
          <div className="space-y-2 text-body-sm">
            <p>
              <strong>Warfarin</strong> là thuốc chống đông máu. Vitamin K làm giảm tác dụng của warfarin.
            </p>
            <p>
              <strong>Quan trọng:</strong> Không phải tránh hoàn toàn vitamin K, mà cần <strong>ổn định lượng</strong> 
              mỗi ngày. Thay đổi đột ngột lượng vitamin K có thể ảnh hưởng đến tác dụng của warfarin.
            </p>
            <p>
              <strong>Nên làm:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Ăn lượng vitamin K ổn định mỗi ngày</li>
              <li>Nếu muốn thay đổi, thay đổi từ từ</li>
              <li>Theo dõi INR (xét nghiệm đông máu) thường xuyên</li>
              <li>Tham khảo bác sĩ trước khi thay đổi chế độ ăn</li>
            </ul>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn rau xanh đậm:</strong> Rau chân vịt, bông cải xanh, cải xoăn giàu vitamin K
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nếu dùng warfarin:</strong> Ăn lượng vitamin K ổn định, không thay đổi đột ngột
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Ăn đa dạng rau củ để có đủ vitamin K và các chất dinh dưỡng khác
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/calcium-bone-health">
            <h3 className="heading-5 mb-2">Canxi và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Vitamin K cũng quan trọng cho xương
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn đang dùng warfarin hoặc thuốc chống đông máu khác, 
          <strong> rất quan trọng</strong> là tham khảo bác sĩ về lượng vitamin K trong chế độ ăn. 
          Không tự ý thay đổi chế độ ăn mà không tham khảo bác sĩ.
        </p>
      </Callout>
    </main>
  );
}
