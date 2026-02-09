import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Activity, Fish, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Iodine và Sức khỏe Tuyến giáp",
  description:
    "Hiểu về iodine - khoáng chất quan trọng cho chức năng tuyến giáp, sự trao đổi chất, và phát triển. Nguồn thực phẩm và nhu cầu.",
  keywords: [
    "iodine",
    "iod",
    "tuyến giáp",
    "thyroid",
    "muối iod",
    "hải sản",
    "trao đổi chất",
  ],
};

export default function IodineThyroidPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Iodine và Sức khỏe Tuyến giáp" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Iodine và Sức khỏe Tuyến giáp</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Iodine là một khoáng chất vi lượng quan trọng cho chức năng tuyến giáp, điều chỉnh sự trao đổi chất, 
          và phát triển. Mặc dù cần với lượng nhỏ, thiếu iodine có thể gây ra các vấn đề nghiêm trọng về sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Iodine</strong> cần thiết cho chức năng tuyến giáp và sự trao đổi chất
          </li>
          <li>
            <strong>Nhu cầu:</strong> 150mcg/ngày cho người lớn (cả nam và nữ)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Muối iod, hải sản, rong biển, sữa, trứng
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Muối iod, cá, tôm, cua, rong biển là nguồn iodine tốt
          </li>
          <li>
            <strong>Thiếu:</strong> Có thể gây bướu cổ, suy giảm chức năng tuyến giáp, ảnh hưởng phát triển
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Iodine là gì và Vai trò của nó?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Tạo hormone tuyến giáp</li>
                  <li>• Điều chỉnh sự trao đổi chất</li>
                  <li>• Phát triển não bộ (quan trọng cho trẻ em)</li>
                  <li>• Phát triển xương</li>
                  <li>• Điều chỉnh nhiệt độ cơ thể</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Bướu cổ (tuyến giáp to)</li>
                  <li>• Suy giảm chức năng tuyến giáp</li>
                  <li>• Mệt mỏi, tăng cân</li>
                  <li>• Ảnh hưởng phát triển (trẻ em)</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Iodine giống như "nguyên liệu" để tuyến giáp tạo ra hormone. Tuyến giáp là "nhà máy", 
              và iodine là "nguyên liệu" cần thiết. Không có đủ iodine, "nhà máy" không thể hoạt động tốt, 
              dẫn đến các vấn đề về trao đổi chất và sức khỏe.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Iodine</h2>
        <Card>
          <NutrientTable
            title="Nhu cầu Iodine hàng ngày"
            rows={[
              { nutrient: "Người lớn (nam và nữ)", amount: "150", unit: "mcg/ngày", note: "Microgram" },
              { nutrient: "Phụ nữ mang thai", amount: "220", unit: "mcg/ngày", note: "Tăng để phát triển thai nhi" },
              { nutrient: "Phụ nữ cho con bú", amount: "290", unit: "mcg/ngày", note: "Tăng để cung cấp cho trẻ" },
            ]}
          />
        </Card>

        <ExampleBox variant="tip" title="Ví dụ thực tế">
          <p className="mb-2">
            <strong>150mcg iodine/ngày có thể đạt được từ:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>1/4 muỗng cà phê muối iod (75mcg) + 100g cá (50mcg) = 125mcg</li>
            <li><strong>1/4 muỗng cà phê muối iod (Việt Nam) (75mcg) + 100g tôm (40mcg) + 1 quả trứng (25mcg) = 140mcg</strong></li>
            <li>100g rong biển (có thể rất cao, cần chú ý không ăn quá nhiều)</li>
          </ul>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn iodine Tốt</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">1. Muối iod (Nguồn quan trọng nhất)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Muối iod là nguồn iodine chính và đáng tin cậy nhất. Ở Việt Nam, muối iod được khuyến nghị sử dụng.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Lượng iodine:</p>
              <p className="text-xs text-gray-700">
                1/4 muỗng cà phê muối iod = ~75mcg iodine (một nửa nhu cầu hàng ngày)
              </p>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Lưu ý:</strong> Chỉ cần một lượng nhỏ muối iod là đủ. Không nên ăn nhiều muối chỉ để có iodine.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Hải sản</h3>
            <NutrientTable
              rows={[
                { nutrient: "Rong biển (10g khô)", amount: "~200-300", unit: "mcg", note: "Rất cao (chú ý không ăn quá nhiều)" },
                { nutrient: "Cá biển (100g)", amount: "~50", unit: "mcg", note: "Tốt" },
                { nutrient: "Tôm (100g)", amount: "~40", unit: "mcg", note: "Tốt, phổ biến Việt Nam" },
                { nutrient: "Cua (100g)", amount: "~30", unit: "mcg", note: "Tốt, phổ biến Việt Nam" },
                { nutrient: "Ốc (100g)", amount: "~20", unit: "mcg", note: "Tốt, phổ biến Việt Nam" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Sữa và Trứng</h3>
            <NutrientTable
              rows={[
                { nutrient: "Sữa (250ml)", amount: "~50", unit: "mcg", note: "Tốt" },
                { nutrient: "Trứng (1 quả)", amount: "~25", unit: "mcg", note: "Tốt" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Iodine trong món ăn Việt Nam">
            <p className="mb-2">
              <strong>Muối iod</strong> là nguồn iodine chính ở Việt Nam. sử dụng muối iod trong nấu ăn 
              hàng ngày giúp đảm bảo đủ iodine.
            </p>
            <p className="mb-2">
              <strong>Hải sản</strong> (cá, tôm, cua, ốc) là nguồn iodine tốt và phổ biến ở Việt Nam. 
              Ăn hải sản 2-3 lần/tuần giúp bổ sung iodine.
            </p>
            <p>
              <strong>Rong biển</strong> rất giàu iodine, nhưng cần chú ý không ăn quá nhiều vì có thể gây thừa iodine.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tuyến giáp và Sức khỏe</h2>
        <Card>
          <h3 className="heading-4 mb-3">Vai trò của Tuyến giáp</h3>
          <p className="text-body-sm mb-3">
            <strong>Tuyến giáp</strong> là một tuyến nhỏ ở cổ, sử dụng iodine để tạo ra hormone tuyến giáp. 
            Hormone này điều chỉnh:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sự trao đổi chất (tốc độ đốt calo)</li>
                <li>• Nhiệt độ cơ thể</li>
                <li>• Nhịp tim</li>
                <li>• Phát triển và tăng trưởng</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu iodine:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Tuyến giáp không tạo đủ hormone</li>
                <li>• Trao đổi chất chậm</li>
                <li>• Mệt mỏi, tăng cân</li>
                <li>• Bướu cổ (tuyến giáp to)</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thiếu iodine và Hậu quả</h2>
        <Callout variant="warning" title="Hậu quả của Thiếu iodine">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Ở người lớn:</strong> Bướu cổ, suy giảm chức năng tuyến giáp, mệt mỏi, tăng cân, 
              suy giảm nhận thức.
            </p>
            <p>
              <strong>Ở phụ nữ mang thai:</strong> Ảnh hưởng nghiêm trọng đến phát triển não bộ của thai nhi, 
              có thể gây chậm phát triển trí tuệ.
            </p>
            <p>
              <strong>Ở trẻ em:</strong> Chậm phát triển, suy giảm nhận thức, ảnh hưởng học tập.
            </p>
          </div>
        </Callout>

        <Card>
          <h3 className="heading-4 mb-3">Phòng ngừa Thiếu iodine</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>sử dụng muối iod:</strong> Đây là cách đơn giản và hiệu quả nhất để đảm bảo đủ iodine. 
              Ở Việt Nam, nên sử dụng muối iod trong nấu ăn hàng ngày.
            </p>
            <p>
              <strong>Ăn hải sản:</strong> Cá, tôm, cua, ốc là nguồn iodine tốt. Ăn 2-3 lần/tuần.
            </p>
            <p>
              <strong>Phụ nữ mang thai:</strong> Cần nhiều iodine hơn. Nên tham khảo bác sĩ về bổ sung nếu cần.
            </p>
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
                <strong>sử dụng muối iod:</strong> Chọn muối iod thay vì muối thường. Chỉ cần một lượng nhỏ là đủ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn hải sản:</strong> Cá, tôm, cua, ốc 2-3 lần/tuần để bổ sung iodine.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Muối iod và hải sản phong phú giúp đảm bảo đủ iodine.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý rong biển:</strong> Rất giàu iodine, không nên ăn quá nhiều vì có thể gây thừa iodine.
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
              <p className="text-sm font-semibold mb-1">"Cần ăn nhiều muối để có iodine"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chỉ cần một lượng nhỏ muối iod là đủ. Ăn nhiều muối không tốt cho sức khỏe. 
                Quan trọng là chọn muối iod, không phải ăn nhiều muối.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tất cả muối đều có iodine"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chỉ muối iod mới có iodine. Muối thường không có iodine. 
                Cần kiểm tra nhãn để đảm bảo là muối iod.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Muối iod và cách sử dụng muối lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Hải sản Việt Nam là nguồn iodine tốt
            </p>
          </Card>
          <Card href="/knowledge/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Iodine quan trọng cho phụ nữ mang thai
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Iodine từ thực phẩm thường an toàn, 
          nhưng bổ sung quá nhiều iodine (trên 1100mcg/ngày) có thể gây hại. 
          Nếu bạn có vấn đề về tuyến giáp hoặc đang dùng thuốc tuyến giáp, hãy tham khảo bác sĩ 
          trước khi thay đổi lượng iodine. Phụ nữ mang thai cần nhiều iodine hơn, 
          nên tham khảo bác sĩ về bổ sung nếu cần.
        </p>
      </Callout>
    </main>
  );
}
