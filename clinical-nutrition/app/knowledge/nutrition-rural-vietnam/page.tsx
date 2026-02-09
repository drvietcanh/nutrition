import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Leaf, CheckCircle2, Home } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người sống ở Nông thôn",
  description:
    "Tận dụng thực phẩm địa phương, tự trồng, cách bảo quản. Tips tận dụng vườn nhà. Cách xây dựng chế độ ăn lành mạnh với thực phẩm địa phương.",
  keywords: [
    "nông thôn",
    "rural",
    "thực phẩm địa phương",
    "tự trồng",
    "vườn nhà",
    "local foods",
  ],
};

export default function NutritionRuralVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người sống ở Nông thôn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Home className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người sống ở Nông thôn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Sống ở nông thôn có nhiều lợi thế về dinh dưỡng: thực phẩm tươi sống, tự trồng, địa phương. 
          Tìm hiểu cách tận dụng những lợi thế này để xây dựng chế độ ăn lành mạnh, tiết kiệm.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Lợi thế:</strong> Thực phẩm tươi sống, tự trồng, địa phương, rẻ, nhiều dinh dưỡng
          </li>
          <li>
            <strong>Tận dụng vườn nhà:</strong> Trồng rau củ, trái cây trong vườn
          </li>
          <li>
            <strong>Thực phẩm địa phương:</strong> Cá sông, thịt gà vườn, trứng gà vườn
          </li>
          <li>
            <strong>Bảo quản:</strong> Cách bảo quản thực phẩm tươi để dùng quanh năm
          </li>
          <li>
            <strong>Tiết kiệm:</strong> Tự trồng, tự nuôi giúp tiết kiệm tiền đáng kể
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi thế Dinh dưỡng ở Nông thôn</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Ưu điểm</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Thực phẩm tươi sống:</strong> Rau củ, trái cây mới thu hoạch, tươi ngon, 
                  nhiều dinh dưỡng
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tự trồng:</strong> Kiểm soát được cách trồng, ít hóa chất, an toàn
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Thực phẩm địa phương:</strong> Cá sông, thịt gà vườn, trứng gà vườn - 
                  tươi, ngon, rẻ
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tiết kiệm:</strong> Tự trồng, tự nuôi giúp tiết kiệm 50-70% chi phí thực phẩm
                </span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Đa dạng:</strong> Có thể trồng nhiều loại rau củ, trái cây khác nhau
                </span>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ">
            <p className="mb-2">
              <strong>Vườn nhà:</strong> Trồng rau muống, rau cải, đậu bắp, mướp, bầu. 
              Mỗi ngày có rau tươi, không cần mua. Tiết kiệm 100,000-200,000đ/tháng.
            </p>
            <p>
              <strong>Gà vườn:</strong> Nuôi gà vườn, có trứng và thịt tươi. 
              Trứng gà vườn giàu dinh dưỡng hơn trứng công nghiệp.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tận dụng Vườn nhà</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Rau củ dễ Trồng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau xanh:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Rau muống (dễ trồng, nhanh thu hoạch)</li>
                  <li>• Rau cải (nhiều loại)</li>
                  <li>• Rau lang (dễ trồng, nhiều dinh dưỡng)</li>
                  <li>• Rau dền</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Rau củ khác:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Đậu bắp</li>
                  <li>• Mướp</li>
                  <li>• Bầu</li>
                  <li>• Cà chua</li>
                  <li>• Ớt</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Trái cây Dễ trồng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Cây ngắn Ngày:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Đu đủ (nhanh thu hoạch)</li>
                  <li>• Chuối (dễ trồng)</li>
                  <li>• Ổi (nhiều quả)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Cây dài ngày:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Xoài</li>
                  <li>• Nhãn</li>
                  <li>• Chôm chôm</li>
                  <li>• Cam, quýt</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Tips trồng Rau">
            <p className="mb-2">
              <strong>Bắt đầu đơn giản:</strong> Trồng rau muống, rau cải - dễ trồng, nhanh thu hoạch (2-3 tuần). 
              Không cần nhiều diện tích.
            </p>
            <p>
              <strong>Tận dụng không gian:</strong> Trồng trong chậu, thùng xốp nếu không có đất. 
              Trồng trên mái, sân thượng.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Địa phương</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Protein địa phương</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Cá sông:</strong> Cá sông tươi, giàu protein, omega-3. Rẻ hơn cá biển, 
                tươi ngon hơn. Có thể tự câu hoặc mua ở chợ địa phương.
              </p>
              <p>
                <strong>Thịt gà vườn:</strong> Gà vườn thịt chắc, ngon, giàu protein. 
                Nuôi tự nhiên, ít hóa chất hơn gà công nghiệp.
              </p>
              <p>
                <strong>Trứng gà vườn:</strong> Trứng gà vườn giàu dinh dưỡng hơn trứng công nghiệp. 
                Có thể tự nuôi gà để có trứng tươi.
              </p>
              <p>
                <strong>Thịt heo địa phương:</strong> Mua từ người nuôi địa phương, tươi, rẻ hơn.
              </p>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ">
            <p className="mb-2">
              <strong>Cá sông:</strong> Cá rô, cá trê, cá lóc - tươi, rẻ (20,000-40,000đ/kg), 
              giàu protein. Có thể nấu canh chua, kho, hấp.
            </p>
            <p>
              <strong>Gà vườn:</strong> Thịt chắc, ngon, giàu protein. Có thể nấu canh, kho, luộc. 
              Nuôi tự nhiên, an toàn hơn.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách bảo quản Thực phẩm</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bảo quản Rau củ</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Tủ lạnh:</strong> Rau củ tươi bảo quản trong tủ lạnh 3-7 ngày. 
              Không rửa trước khi bảo quản, rửa trước khi dùng.
            </p>
            <p>
              <strong>Đông lạnh:</strong> Rau củ có thể đông lạnh để dùng trái mùa. 
              Đông lạnh giữ được nhiều dinh dưỡng.
            </p>
            <p>
              <strong>Làm khô:</strong> Một số rau củ có thể phơi khô, sấy khô để dùng quanh năm.
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Bảo quản Trái cây</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Tủ lạnh:</strong> Trái cây chín bảo quản trong tủ lạnh. 
              Trái cây chưa chín để ở nhiệt độ phòng để chín.
            </p>
            <p>
              <strong>Làm mứt:</strong> Trái cây mùa có thể làm mứt để dùng quanh năm. 
              Lưu ý: mứt có nhiều đường, nên ăn ít.
            </p>
            <p>
              <strong>Đông lạnh:</strong> Trái cây có thể đông lạnh để dùng trái mùa.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Thực phẩm Địa phương vs Thành thị</h2>
        <ComparisonCard
          goodTitle="Thực phẩm Địa phương (Nông thôn)"
          goodItems={[
            "Rau củ tươi, mới thu hoạch - nhiều dinh dưỡng",
            "Tự trồng - kiểm soát được cách trồng, ít hóa chất",
            "Rẻ hơn 50-70% - không qua trung gian",
            "Cá sông, thịt gà vườn tươi - ngon, giàu dinh dưỡng",
            "Trứng gà vườn - giàu dinh dưỡng hơn trứng công nghiệp"
          ]}
          badTitle="Thực phẩm Thành thị"
          badItems={[
            "Rau củ có thể đã bảo quản lâu - ít tươi hơn",
            "Qua nhiều trung gian - có thể nhiều hóa chất",
            "Đắt hơn - phải trả cho vận chuyển, bảo quản",
            "Thịt cá có thể đã đóng gói, ít tươi hơn",
            "Trứng công nghiệp - có thể ít dinh dưỡng hơn"
          ]}
          note="Thực phẩm địa phương ở nông thôn có nhiều lợi thế về dinh dưỡng và giá cả."
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bắt đầu trồng rau:</strong> Trồng rau muống, rau cải - dễ trồng, nhanh thu hoạch. 
                Không cần nhiều diện tích.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nuôi gà vườn:</strong> Nuôi gà vườn để có trứng và thịt tươi. 
                Trứng gà vườn giàu dinh dưỡng hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mua địa phương:</strong> Mua cá sông, thịt từ người nuôi địa phương. 
                Tươi, rẻ, hỗ trợ cộng đồng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bảo quản:</strong> Đông lạnh, làm mứt, sấy khô thực phẩm mùa để dùng quanh năm.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Trồng nhiều loại rau củ, trái cây khác nhau để có đa dạng dinh dưỡng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn với Thực phẩm Địa phương</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa trưa Địa phương</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Cơm</strong> (tự trồng hoặc mua địa phương)
            </p>
            <p>
              <strong>Cá sông kho</strong> (cá rô, cá trê - tươi, rẻ) + rau muống luộc (tự trồng) + 
              canh rau (rau vườn)
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Tất cả thực phẩm địa phương, tươi, rẻ, giàu dinh dưỡng. 
              Chi phí: ~20,000-30,000đ/bữa (rẻ hơn nhiều so với thành thị).
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Bữa tối địa phương</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Cơm</strong> + <strong>thịt gà vườn luộc</strong> (tự nuôi) + 
              <strong> rau cải xào</strong> (tự trồng) + <strong>canh bầu</strong> (tự trồng)
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Thực phẩm tự trồng, tự nuôi - an toàn, tươi, giàu dinh dưỡng. 
              Chi phí: ~15,000-25,000đ/bữa (chỉ tính công, không tính giá thị trường).
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm nông thôn không đủ dinh dưỡng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Thực phẩm nông thôn tươi sống, tự trồng thường 
                có nhiều dinh dưỡng hơn thực phẩm thành thị đã bảo quản lâu.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tự trồng tốn thời gian, không đáng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Tự trồng rau củ không tốn nhiều thời gian, và tiết kiệm rất nhiều tiền. 
                Chỉ cần 15-30 phút/ngày chăm sóc.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần nhiều đất mới trồng được"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể trồng trong chậu, thùng xốp, trên mái, sân thượng. 
                Không cần nhiều đất.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn hẹp</h3>
            <p className="text-sm text-gray-600">
              Tự trồng giúp tiết kiệm tiền
            </p>
          </Card>
          <Card href="/knowledge/seasonal-foods-vietnam">
            <h3 className="heading-5 mb-2">Thực phẩm Theo mùa ở Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Trồng theo mùa để có thực phẩm tươi ngon
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm địa phương
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Tự trồng và tận dụng thực phẩm địa phương là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi người có điều kiện và tình huống khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}
