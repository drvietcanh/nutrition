import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { Calendar, CheckCircle2, DollarSign } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Theo Mùa ở Việt Nam",
  description:
    "Thực phẩm theo mùa ở Việt Nam, lợi ích, cách chọn và bảo quản. Calendar thực phẩm theo mùa. Tips mua sắm theo mùa để tiết kiệm và tươi ngon.",
  keywords: [
    "thực phẩm theo mùa",
    "seasonal foods",
    "mùa xuân",
    "mùa hè",
    "mùa thu",
    "mùa đông",
    "calendar",
  ],
};

export default function SeasonalFoodsVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực phẩm Theo Mùa ở Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Theo Mùa ở Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Thực phẩm theo mùa thường rẻ hơn, tươi ngon hơn, và có nhiều dinh dưỡng hơn so với thực phẩm trái mùa. 
          Tìm hiểu về thực phẩm theo mùa ở Việt Nam và cách tận dụng chúng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Lợi ích:</strong> Rẻ hơn, tươi ngon hơn, nhiều dinh dưỡng hơn
          </li>
          <li>
            <strong>Mùa xuân:</strong> Rau cải, rau muống, dâu tây, cam quýt
          </li>
          <li>
            <strong>Mùa hè:</strong> Rau muống, mướp, đậu bắp, xoài, ổi, thanh long, nhãn
          </li>
          <li>
            <strong>Mùa thu:</strong> Rau cải, bông cải, bưởi, cam quýt, chôm chôm
          </li>
          <li>
            <strong>Mùa đông:</strong> Rau cải, cà rốt, khoai tây, cam quýt, bưởi
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Thực phẩm Theo Mùa Tốt hơn?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✓ Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Rẻ hơn 30-50% so với trái mùa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tươi ngon hơn - mới thu hoạch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhiều dinh dưỡng hơn - chín tự nhiên</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ nông dân địa phương</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thân thiện môi trường - ít vận chuyển</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-red-700 mb-2">✗ Thực phẩm Trái mùa:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Đắt hơn - phải nhập khẩu hoặc bảo quản</li>
                  <li>• Ít tươi hơn - có thể đã bảo quản lâu</li>
                  <li>• Ít dinh dưỡng hơn - thu hoạch sớm, chín nhân tạo</li>
                  <li>• Nhiều hóa chất - để bảo quản lâu</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ">
            <p className="mb-2">
              <strong>Xoài mùa hè:</strong> 30,000đ/kg, tươi ngon, ngọt tự nhiên, giàu vitamin A, C.
            </p>
            <p>
              <strong>Xoài trái mùa:</strong> 80,000đ/kg, có thể đã bảo quản lâu, ít ngọt hơn, 
              ít vitamin hơn.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Calendar Thực phẩm Theo Mùa</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Mùa Xuân (Tháng 2-4)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau Củ:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau muống (bắt đầu mùa)</li>
                  <li>• Rau cải (nhiều loại)</li>
                  <li>• Rau dền</li>
                  <li>• Cà chua (bắt đầu)</li>
                  <li>• Đậu bắp (bắt đầu)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Trái cây:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Dâu tây</li>
                  <li>• Cam, quýt (cuối mùa)</li>
                  <li>• Bưởi (cuối mùa)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Mùa Hè (Tháng 5-7)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau Củ:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau muống (nhiều nhất)</li>
                  <li>• Mướp</li>
                  <li>• Đậu bắp</li>
                  <li>• Bầu</li>
                  <li>• Cà chua</li>
                  <li>• Ớt chuông</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Trái cây:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Xoài (nhiều nhất, rẻ nhất)</li>
                  <li>• Ổi</li>
                  <li>• Thanh long</li>
                  <li>• Nhãn</li>
                  <li>• Chôm chôm</li>
                  <li>• Dưa hấu</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Mùa Thu (Tháng 8-10)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau Củ:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau cải (nhiều loại)</li>
                  <li>• Bông cải xanh</li>
                  <li>• Cà rốt (bắt đầu)</li>
                  <li>• Khoai tây (bắt đầu)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Trái cây:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Bưởi (bắt đầu mùa)</li>
                  <li>• Cam, quýt (bắt đầu)</li>
                  <li>• Chôm chôm (cuối mùa)</li>
                  <li>• Nhãn (cuối mùa)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Mùa Đông (Tháng 11-1)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau Củ:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau cải (nhiều loại)</li>
                  <li>• Cà rốt</li>
                  <li>• Khoai tây</li>
                  <li>• Khoai lang</li>
                  <li>• Bông cải xanh</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Trái cây:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cam, quýt (nhiều nhất, rẻ nhất)</li>
                  <li>• Bưởi</li>
                  <li>• Táo (nhập khẩu)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích Dinh dưỡng Thực phẩm Theo Mùa</h2>
        <Card>
          <h3 className="heading-4 mb-3">So sánh Giá trị Dinh dưỡng</h3>
          <NutrientTable
            title="Ví dụ: Xoài Mùa vs Trái Mùa"
            rows={[
              { nutrient: "Xoài mùa hè (tươi)", amount: "60 calo, 60mg vitamin C", highlight: "good", note: "Chín tự nhiên, giàu vitamin" },
              { nutrient: "Xoài trái mùa (bảo quản)", amount: "60 calo, 40mg vitamin C", highlight: "moderate", note: "Có thể mất một số vitamin" },
            ]}
          />
          <p className="text-xs text-gray-600 mt-3">
            <strong>Lưu ý:</strong> Thực phẩm theo mùa, chín tự nhiên thường có nhiều vitamin và chất chống oxy hóa hơn 
            thực phẩm thu hoạch sớm, chín nhân tạo.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Bảo quản Thực phẩm Theo Mùa</h2>
        <Card>
          <h3 className="heading-4 mb-3">Tips Bảo quản</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Rau củ:</strong> Bảo quản trong tủ lạnh, không rửa trước khi bảo quản. 
                Rửa trước khi dùng. Một số rau có thể để ở nhiệt độ phòng (khoai tây, hành tây).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trái cây:</strong> Bảo quản trong tủ lạnh nếu đã chín. 
                Trái cây chưa chín có thể để ở nhiệt độ phòng để chín.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đông lạnh:</strong> Có thể đông lạnh rau củ, trái cây mùa để dùng trái mùa. 
                Đông lạnh giữ được nhiều dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Làm mứt, sấy khô:</strong> Có thể làm mứt, sấy khô trái cây mùa để dùng quanh năm.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Mua sắm Theo Mùa</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hỏi người bán:</strong> Hỏi người bán ở chợ về thực phẩm mùa vụ. 
                Họ thường biết rõ thực phẩm nào đang mùa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Quan sát giá:</strong> Thực phẩm mùa vụ thường rẻ hơn nhiều. 
                Nếu giá cao, có thể là trái mùa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua nhiều khi mùa:</strong> Mua nhiều thực phẩm mùa để đông lạnh, 
                làm mứt, sấy khô dùng quanh năm.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <DollarSign className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lập kế hoạch:</strong> Lập kế hoạch mua sắm theo mùa. 
                Biết thực phẩm nào mùa nào giúp mua sắm hiệu quả hơn.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế</h2>
        <ExampleBox variant="tip" title="Ví dụ Mua sắm Theo Mùa">
          <p className="mb-2">
            <strong>Mùa hè (tháng 6):</strong> Mua xoài (30,000đ/kg), ổi (20,000đ/kg), thanh long (25,000đ/kg). 
            Rẻ, tươi, ngon. Có thể mua nhiều để đông lạnh.
          </p>
          <p className="mb-2">
            <strong>Mùa đông (tháng 12):</strong> Mua cam (25,000đ/kg), quýt (30,000đ/kg), bưởi (20,000đ/kg). 
            Rẻ, tươi, giàu vitamin C - tốt cho mùa lạnh.
          </p>
          <p>
            <strong>Tiết kiệm:</strong> Mua theo mùa có thể tiết kiệm 30-50% so với trái mùa. 
            Với ngân sách hạn hẹp, mua theo mùa là cách tốt nhất.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm trái mùa tốt hơn vì đắt hơn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Thực phẩm trái mùa đắt vì phải nhập khẩu hoặc bảo quản, 
                không phải vì tốt hơn. Thực phẩm theo mùa thường tốt hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tất cả thực phẩm đều có quanh năm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nhiều thực phẩm có quanh năm nhưng chất lượng và giá khác nhau. 
                Thực phẩm mùa vụ tươi ngon và rẻ hơn nhiều.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn hẹp</h3>
            <p className="text-sm text-gray-600">
              Mua theo mùa giúp tiết kiệm tiền
            </p>
          </Card>
          <Card href="/knowledge/smart-shopping-vietnam">
            <h3 className="heading-5 mb-2">Đi Chợ Thông minh ở Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cách chọn thực phẩm theo mùa
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
          Thông tin này chỉ dành cho mục đích giáo dục. Calendar thực phẩm theo mùa có thể khác nhau 
          tùy theo vùng miền và điều kiện thời tiết. Hỏi người bán ở chợ địa phương để biết thực phẩm 
          nào đang mùa ở khu vực của bạn.
        </p>
      </Callout>
    </main>
  );
}
