import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Utensils, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bữa Ăn Gia đình Việt Nam: Cân bằng Dinh dưỡng",
  description:
    "Hiểu về cấu trúc bữa ăn gia đình Việt Nam truyền thống - cơm + canh + món mặn + rau. Cách cân bằng dinh dưỡng và ví dụ bữa ăn lành mạnh.",
  keywords: [
    "bữa ăn gia đình",
    "cấu trúc bữa ăn",
    "bữa ăn Việt Nam",
    "cân bằng dinh dưỡng",
    "cơm canh món mặn",
  ],
};

export default function VietnameseFamilyMealsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực hành Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Bữa Ăn Gia đình Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Utensils className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Bữa Ăn Gia đình Việt Nam: Cân bằng Dinh dưỡng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Bữa ăn gia đình Việt Nam truyền thống có cấu trúc cân bằng tự nhiên: cơm (carbohydrate), 
          canh (nước, vitamin), món mặn (protein), và rau (vitamin, chất xơ). 
          Hiểu về cấu trúc này giúp bạn tạo bữa ăn lành mạnh.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Cấu trúc:</strong> Cơm + Canh + Món mặn + Rau
          </li>
          <li>
            <strong>Cơm:</strong> Carbohydrate - năng lượng chính
          </li>
          <li>
            <strong>Canh:</strong> Nước, vitamin, khoáng chất
          </li>
          <li>
            <strong>Món mặn:</strong> Protein - thịt, cá, đậu phụ
          </li>
          <li>
            <strong>Rau:</strong> Vitamin, khoáng chất, chất xơ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Cấu trúc Bữa ăn Gia đình Việt Nam</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">1. Cơm (Carbohydrate)</h3>
              <p className="text-xs text-blue-800 mb-2">
                Nguồn năng lượng chính. 1-2 bát cơm tùy nhu cầu.
              </p>
              <p className="text-xs text-blue-800">
                <strong>Tips:</strong> Chọn gạo lứt để có nhiều chất xơ và vitamin B hơn.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-sm font-semibold text-green-900 mb-2">2. Canh (Nước, Vitamin)</h3>
              <p className="text-xs text-green-800 mb-2">
                Cung cấp nước, vitamin, khoáng chất. 1 bát canh.
              </p>
              <p className="text-xs text-green-800">
                <strong>Tips:</strong> Canh rau, canh cá - ít dầu mỡ, nhiều dinh dưỡng.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-4 border border-red-200">
              <h3 className="text-sm font-semibold text-red-900 mb-2">3. Món mặn (Protein)</h3>
              <p className="text-xs text-red-800 mb-2">
                Thịt, cá, đậu phụ - nguồn protein. 1 phần vừa.
              </p>
              <p className="text-xs text-red-800">
                <strong>Tips:</strong> Ưu tiên cá, tôm, đậu phụ - ít béo, nhiều protein.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">4. Rau (Vitamin, Chất xơ)</h3>
              <p className="text-xs text-purple-800 mb-2">
                Rau luộc, rau xào - vitamin, khoáng chất, chất xơ. 1 phần.
              </p>
              <p className="text-xs text-purple-800">
                <strong>Tips:</strong> Rau luộc giữ nhiều dinh dưỡng hơn rau xào.
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ Cấu trúc Bữa ăn">
          <p className="text-sm mb-2">
            <strong>Bữa trưa gia đình:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>1-2 bát cơm (carbohydrate)</li>
            <li>1 bát canh rau muống (nước, vitamin)</li>
            <li>1 phần cá kho tộ (protein)</li>
            <li>1 phần rau cải luộc (vitamin, chất xơ)</li>
          </ul>
          <p className="text-sm mt-2">
            <strong>Kết quả:</strong> Cân bằng carbohydrate, protein, vitamin, chất xơ.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Cân bằng</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Tỷ lệ các nhóm thực phẩm trong bữa ăn Việt Nam:
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Carbohydrate (Cơm): 40-50%</p>
              <p className="text-xs text-gray-700">
                1-2 bát cơm tùy nhu cầu năng lượng. Chọn gạo lứt để có nhiều chất xơ hơn.
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Protein (Món mặn): 20-30%</p>
              <p className="text-xs text-gray-700">
                1 phần thịt/cá/đậu phụ (khoảng 100-150g). Ưu tiên cá, tôm, đậu phụ.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Rau (Vitamin, Chất xơ): 20-30%</p>
              <p className="text-xs text-gray-700">
                1 phần rau (khoảng 100-150g). Rau luộc, rau xào, hoặc trong canh.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Canh (Nước, Vitamin): 10-20%</p>
              <p className="text-xs text-gray-700">
                1 bát canh. Cung cấp nước, vitamin, khoáng chất.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Gia đình</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExampleBox variant="info" title="Bữa Trưa">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cơm trắng (1-2 bát)</li>
              <li>Canh chua cá (1 bát)</li>
              <li>Cá kho tộ (1 phần)</li>
              <li>Rau muống luộc (1 phần)</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (cơm), Protein (cá), Vitamin (canh, rau), Chất xơ (rau).
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Bữa Tối">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cơm trắng (1-2 bát)</li>
              <li>Canh mướp nấu tôm (1 bát)</li>
              <li>Thịt kho tiêu (1 phần)</li>
              <li>Rau cải xào (1 phần)</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (cơm), Protein (tôm, thịt), Vitamin (canh, rau), Chất xơ (rau).
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bữa ăn Cân bằng vs Không Cân bằng</h2>
        <ComparisonCard
          title="So sánh Bữa ăn"
          better={{
            title: "Bữa ăn Cân bằng",
            items: [
              "Cơm (1-2 bát) - carbohydrate",
              "Canh (1 bát) - nước, vitamin",
              "Món mặn (1 phần) - protein",
              "Rau (1 phần) - vitamin, chất xơ",
              "Đa dạng thực phẩm",
            ],
          }}
          worse={{
            title: "Bữa ăn Không Cân bằng",
            items: [
              "Quá nhiều cơm, ít rau",
              "Quá nhiều thịt, ít rau",
              "Không có canh",
              "Quá nhiều dầu mỡ",
              "Ít đa dạng",
            ],
          }}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tuân theo cấu trúc:</strong> Cơm + Canh + Món mặn + Rau - đảm bảo cân bằng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Thay đổi món mặn, rau, canh để có nhiều dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên:</strong> Cá, tôm, đậu phụ (ít béo), rau luộc (giữ dinh dưỡng).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn gạo lứt:</strong> Gạo lứt có nhiều chất xơ và vitamin B hơn gạo trắng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn gia đình
            </p>
          </Card>
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan Dinh dưỡng Đa lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về các chất dinh dưỡng đa lượng
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Đĩa Ăn Lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách tạo đĩa ăn lành mạnh
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu dinh dưỡng có thể thay đổi tùy theo 
          tuổi, giới tính, mức độ hoạt động. Hãy điều chỉnh khẩu phần phù hợp với nhu cầu của bạn 
          và tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}
