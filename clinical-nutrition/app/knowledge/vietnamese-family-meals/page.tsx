import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { UtensilsCrossed, Carrot, Fish, Wheat, Apple, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bữa ăn Gia đình Việt Nam: Cân bằng Dinh dưỡng",
  description:
    "Cách tổ chức bữa ăn gia đình kiểu Việt Nam (cơm + canh + món mặn + rau) để đảm bảo cân bằng dinh dưỡng. Ví dụ thực tế bữa trưa, bữa tối.",
  keywords: [
    "bữa ăn gia đình",
    "cơm canh",
    "cân bằng dinh dưỡng",
    "bữa ăn Việt Nam",
    "family meals",
  ],
};

export default function VietnameseFamilyMealsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Bữa ăn Gia đình Việt Nam: Cân bằng Dinh dưỡng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Bữa ăn Gia đình Việt Nam: Cân bằng Dinh dưỡng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Bữa ăn gia đình Việt Nam truyền thống có cấu trúc cân bằng tự nhiên: cơm (carbohydrate), 
          canh (dịch và rau củ), món mặn (protein), và rau (vitamin, chất xơ). 
          Hiểu cách tổ chức bữa ăn này giúp bạn đảm bảo dinh dưỡng đầy đủ.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Cấu trúc bữa ăn Việt Nam:</strong> Cơm + Canh + Món mặn + Rau
          </li>
          <li>
            <strong>Cơm:</strong> Carbohydrate - nguồn năng lượng chính
          </li>
          <li>
            <strong>Canh:</strong> dịch, rau củ, có thể có protein
          </li>
          <li>
            <strong>Món mặn:</strong> Protein (thịt, cá, đậu phụ)
          </li>
          <li>
            <strong>Rau:</strong> Vitamin, khoáng chất, chất xơ
          </li>
          <li>
            Cấu trúc này tự nhiên <strong>cân bằng dinh dưỡng</strong>
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Cấu trúc Bữa ăn Gia đình Việt Nam</h2>
        <div className="space-y-4">
          <p className="text-body">
            Bữa ăn gia đình Việt Nam truyền thống thường có <strong>4 thành phần chính</strong>, 
            tạo nên một bữa ăn cân bằng dinh dưỡng tự nhiên.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">4 Thành phần Chính</h3>
            <div className="space-y-4">
              <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wheat className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-amber-900">1. Cơm (Carbohydrate)</h4>
                </div>
                <p className="text-sm text-amber-900 mb-2">
                  Nguồn năng lượng chính. Có thể là cơm trắng, cơm gạo lứt, hoặc bún, phở.
                </p>
                <p className="text-xs text-amber-800">
                  <strong>Vai trò:</strong> Cung cấp năng lượng cho hoạt động hàng ngày
                </p>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Fish className="w-5 h-5 text-blue-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-blue-900">2. Canh (dịch + Rau củ)</h4>
                </div>
                <p className="text-sm text-blue-900 mb-2">
                  Cung cấp dịch, rau củ, và có thể có protein (canh chua cá, canh thịt).
                </p>
                <p className="text-xs text-blue-800">
                  <strong>Vai trò:</strong> Hydration, vitamin, khoáng chất từ rau củ
                </p>
              </div>

              <div className="rounded-lg border-2 border-red-200 bg-red-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Fish className="w-5 h-5 text-red-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-red-900">3. Món mặn (Protein)</h4>
                </div>
                <p className="text-sm text-red-900 mb-2">
                  Thịt, cá, đậu phụ, chả, giò - nguồn protein chính.
                </p>
                <p className="text-xs text-red-800">
                  <strong>Vai trò:</strong> Xây dựng và sửa chữa cơ thể
                </p>
              </div>

              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Carrot className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-green-900">4. Rau (Vitamin + Chất xơ)</h4>
                </div>
                <p className="text-sm text-green-900 mb-2">
                  Rau luộc, rau xào, rau sống - nguồn vitamin, khoáng chất, chất xơ.
                </p>
                <p className="text-xs text-green-800">
                  <strong>Vai trò:</strong> Vitamin, khoáng chất, chất xơ, hỗ trợ tiêu hóa
                </p>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Một bữa ăn gia đình Việt Nam điển hình: <strong>Cơm</strong> (carbohydrate) + 
              <strong> Canh chua cá</strong> (dịch + protein + rau củ) + <strong>Cá kho</strong> (protein) + 
              <strong> Rau muống luộc</strong> (vitamin, chất xơ). 
              Tất cả trong một bữa ăn, tự nhiên cân bằng dinh dưỡng.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Cụ thể</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa trưa Gia đình</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Wheat className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Cơm (1-1.5 bát)</p>
                  <p className="text-sm text-gray-700">
                    Carbohydrate - nguồn năng lượng chính. Có thể chọn gạo lứt để có nhiều chất xơ hơn.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Canh chua cá (1 bát)</p>
                  <p className="text-sm text-gray-700">
                    Cá (protein) + cà chua, dứa, đậu bắp (rau củ) + nước dùng (dịch). 
                    Món ăn cân bằng, giàu dinh dưỡng.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Cá kho (100g)</p>
                  <p className="text-sm text-gray-700">
                    Protein chất lượng cao. Có thể kho với ít nước mắm, nhiều gia vị tự nhiên.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Carrot className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Rau muống luộc (100g)</p>
                  <p className="text-sm text-gray-700">
                    Vitamin A, C, sắt, chất xơ. Luộc nhanh giữ được dinh dưỡng.
                  </p>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
                <p className="text-sm font-semibold text-green-900">
                  Tổng: Cân bằng carbohydrate, protein, rau củ, dịch - đầy đủ dinh dưỡng!
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa tối gia đình</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Wheat className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Cơm (1 bát)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Canh rau (1 bát)</p>
                  <p className="text-sm text-gray-700">
                    Canh rau cải, canh bầu - dịch + vitamin từ rau củ.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Thịt kho tiêu (100g)</p>
                  <p className="text-sm text-gray-700">
                    Protein từ thịt. Kho với ít nước mắm, nhiều gia vị tự nhiên.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Carrot className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Rau cải xào (100g)</p>
                  <p className="text-sm text-gray-700">
                    Vitamin K, canxi, chất xơ. Xào với ít dầu, nhiều rau.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách cân bằng Dinh dưỡng trong Bữa ăn</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Tỷ lệ Khuyến nghị</h3>
            <div className="space-y-3">
              <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
                <p className="text-sm font-semibold text-amber-900 mb-1">Cơm: 1/4 đĩa</p>
                <p className="text-xs text-amber-800">Carbohydrate - nguồn năng lượng</p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-1">Món mặn: 1/4 đĩa</p>
                <p className="text-xs text-red-800">Protein - xây dựng cơ thể</p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-1">Rau: 1/2 đĩa</p>
                <p className="text-xs text-green-800">Vitamin, khoáng chất, chất xơ</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-1">Canh: 1 bát nhỏ</p>
                <p className="text-xs text-blue-800">dịch + rau củ</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Lưu ý:</strong> Đây là hướng dẫn, không phải quy tắc cứng nhắc. 
              Điều chỉnh theo nhu cầu của bạn.
            </p>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Cân bằng">
            <p className="mb-2">
              <strong>Bữa trưa cân bằng:</strong> 1 bát cơm (carb) + 1 bát canh chua cá (dịch + protein + rau) + 
              100g cá kho (protein) + 100g rau muống luộc (vitamin, chất xơ).
            </p>
            <p>
              Tất cả trong một bữa ăn, tự nhiên có đủ các nhóm thực phẩm cần thiết.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Bữa ăn cân bằng vs Không cân bằng</h2>
        <ComparisonCard
          title="Ví dụ So sánh"
          items={[
            {
              label: "Bữa trưa",
              good: "Cơm + canh chua cá + cá kho + rau muống luộc = Cân bằng carbohydrate, protein, rau củ, dịch",
              bad: "Cơm + thịt kho + không có canh + ít rau = Thiếu rau củ, thiếu dịch",
              note: "Bữa ăn cân bằng có đủ các nhóm thực phẩm, bữa không cân bằng thiếu rau củ"
            },
            {
              label: "Bữa tối",
              good: "Cơm + canh rau + thịt kho + rau cải xào = Đầy đủ dinh dưỡng",
              bad: "Cơm + thịt kho + không có canh + không có rau = Thiếu vitamin, chất xơ",
              note: "Rau củ rất quan trọng - không nên bỏ qua"
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
                <strong>Luôn có rau:</strong> Mỗi bữa nên có ít nhất một món rau (luộc, xào, hoặc trong canh).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Canh là quan trọng:</strong> Canh cung cấp dịch và rau củ. 
                Không chỉ là nước, mà còn có dinh dưỡng từ rau củ trong canh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng món mặn:</strong> Thay đổi giữa thịt, cá, đậu phụ để có đa dạng protein.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn cơm phù hợp:</strong> Cơm trắng tốt, nhưng gạo lứt có nhiều chất xơ hơn. 
                Có thể kết hợp cả hai.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không cần phức tạp:</strong> Bữa ăn đơn giản với 4 thành phần cơ bản đã đủ dinh dưỡng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Điều chỉnh Theo nhu cầu</h2>
        <Card>
          <h3 className="heading-4 mb-3">Khi nào cần điều chỉnh?</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Người đái tháo đường:</strong> Có thể giảm cơm, tăng rau củ. 
              Chọn gạo lứt thay vì cơm trắng. Chú ý đến carbohydrate trong canh (khoai tây, bắp).
            </p>
            <p>
              <strong>Người muốn giảm cân:</strong> Có thể giảm cơm (1/2 bát thay vì 1 bát), 
              tăng rau củ, chọn món mặn ít chất béo.
            </p>
            <p>
              <strong>Người cần nhiều protein:</strong> Có thể tăng món mặn, thêm đậu phụ, 
              hoặc chọn canh có protein (canh chua cá, canh thịt).
            </p>
            <p>
              <strong>Người tăng huyết áp:</strong> Chú ý đến natri trong canh và món kho. 
              Giảm nước mắm, chọn canh ít muối.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Phải có đủ 4 món mỗi bữa"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đây là hướng dẫn, không phải quy tắc cứng nhắc. 
                Quan trọng là đảm bảo đủ các nhóm thực phẩm trong ngày, không nhất thiết mỗi bữa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Canh chỉ là nước, không có dinh dưỡng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Canh có rau củ, có thể có protein (canh chua cá, canh thịt). 
                Canh cung cấp dịch, vitamin, khoáng chất từ rau củ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cơm làm tăng cân, nên tránh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Cơm là nguồn năng lượng tốt. Vấn đề là lượng cơm, 
                không phải bản thân cơm. Ăn vừa phải (1-1.5 bát) là tốt.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Cân bằng Bữa ăn: Đĩa ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn cách chia đĩa ăn với món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn gia đình
            </p>
          </Card>
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các chất dinh dưỡng đa lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về carbohydrate, protein, chất béo trong bữa ăn
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Cấu trúc bữa ăn gia đình Việt Nam là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi người có nhu cầu và tình huống khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}
