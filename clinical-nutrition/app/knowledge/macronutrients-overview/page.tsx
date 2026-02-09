import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { PieChart, Wheat, Heart, Droplet, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Tổng quan về các chất dinh dưỡng đa lượng (Macronutrients)",
  description:
    "Tổng quan về ba chất dinh dưỡng đa lượng chính - carbohydrate, protein, và chất béo - vai trò, nhu cầu, và cách cân bằng trong chế độ ăn.",
  keywords: [
    "macronutrients",
    "chất dinh dưỡng đa lượng",
    "carbohydrate",
    "protein",
    "chất béo",
    "cân bằng dinh dưỡng",
    "chế độ ăn",
  ],
};

export default function MacronutrientsOverviewPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Tổng quan về các chất dinh dưỡng đa lượng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <PieChart className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Tổng quan về các chất dinh dưỡng đa lượng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          cơ thể chúng ta cần ba chất dinh dưỡng đa lượng chính: <strong>Carbohydrate</strong>, 
          <strong> Protein</strong>, và <strong>Chất béo</strong>. Hiểu về vai trò và cách cân bằng 
          chúng giúp bạn có chế độ ăn lành mạnh.
        </p>
      </header>

      {/* Key points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Carbohydrate</strong> - nguồn năng lượng chính (45-65% năng lượng)
          </li>
          <li>
            <strong>Protein</strong> - xây dựng và sửa chữa cơ thể (10-35% năng lượng)
          </li>
          <li>
            <strong>Chất béo</strong> - năng lượng và chức năng quan trọng (20-35% năng lượng)
          </li>
          <li>Cả ba đều cần thiết, không nên loại bỏ hoàn toàn bất kỳ chất nào</li>
          <li>Cân bằng và chọn loại đúng quan trọng hơn tỷ lệ chính xác</li>
        </ul>
      </Callout>

      {/* Overview */}
      <section className="space-y-4">
        <h2 className="heading-2">Chất dinh dưỡng đa lượng là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất dinh dưỡng đa lượng (Macronutrients)</strong> là các chất dinh dưỡng mà cơ thể 
            cần với <strong>lượng lớn</strong> để hoạt động. Có ba loại chính: Carbohydrate, Protein, và Chất béo.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Nếu cơ thể là một ngôi nhà, thì carbohydrate là nhiên liệu 
              (điện, gas), protein là vật liệu xây dựng (gạch, xi măng), và chất béo là lớp cách nhiệt 
              và bảo vệ. Tất cả đều cần thiết!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-amber-200 bg-amber-50">
              <div className="text-center">
                <Wheat className="w-12 h-12 text-amber-600 mx-auto mb-3" aria-hidden="true" />
                <h3 className="heading-4 text-amber-900 mb-2">Carbohydrate</h3>
                <p className="text-2xl font-bold text-amber-600 mb-1">45-65%</p>
                <p className="text-xs text-gray-600">tổng năng lượng</p>
              </div>
            </Card>

            <Card className="border-blue-200 bg-blue-50">
              <div className="text-center">
                <Heart className="w-12 h-12 text-blue-600 mx-auto mb-3" aria-hidden="true" />
                <h3 className="heading-4 text-blue-900 mb-2">Protein</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">10-35%</p>
                <p className="text-xs text-gray-600">tổng năng lượng</p>
              </div>
            </Card>

            <Card className="border-green-200 bg-green-50">
              <div className="text-center">
                <Droplet className="w-12 h-12 text-green-600 mx-auto mb-3" aria-hidden="true" />
                <h3 className="heading-4 text-green-900 mb-2">Chất béo</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">20-35%</p>
                <p className="text-xs text-gray-600">tổng năng lượng</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Carbohydrate section */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Wheat className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Carbohydrate (tinh bột và đường)
        </h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Vai trò</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Nguồn năng lượng chính của cơ thể</li>
                  <li>• Hỗ trợ chức năng não bộ</li>
                  <li>• Dự trữ năng lượng (glycogen)</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-amber-600">45-65%</p>
                <p className="text-xs text-gray-600">năng lượng</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm text-amber-900">
                <strong>Nên chọn:</strong> Carbohydrate phức tạp, nguyên cám (gạo lứt, yến mạch, 
                bánh mì nguyên cám) thay vì carbohydrate tinh chế (gạo trắng, bánh mì trắng, đường).
              </p>
            </div>
            <p className="text-xs text-gray-600">
              Xem chi tiết:{" "}
              <Link href="/knowledge/carbohydrates" className="text-blue-600 hover:underline">
                Carbohydrate (tinh bột và đường)
              </Link>
            </p>
          </div>
        </Card>
      </section>

      {/* Protein section */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Protein
        </h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Vai trò</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Xây dựng và sửa chữa cơ bắp, da, tóc</li>
                  <li>• Tạo enzyme và hormone</li>
                  <li>• Hỗ trợ hệ miễn dịch</li>
                  <li>• Cung cấp năng lượng (khi cần)</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">10-35%</p>
                <p className="text-xs text-gray-600">năng lượng</p>
                <p className="text-xs text-gray-600 mt-1">0.8-1.2g/kg</p>
              </div>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Nguồn tốt:</strong> Thịt nạc, cá, trứng, sữa, đậu, đậu phụ. 
                Nên có protein trong mỗi bữa ăn.
              </p>
            </div>
            <p className="text-xs text-gray-600">
              Xem chi tiết trong bài viết về{" "}
              <Link href="/knowledge/needs-estimation" className="text-blue-600 hover:underline">
                Ước tính nhu cầu dinh dưỡng
              </Link>
            </p>
          </div>
        </Card>
      </section>

      {/* Fat section */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Droplet className="w-6 h-6 text-green-600" aria-hidden="true" />
          Chất béo
        </h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Vai trò</h3>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cung cấp năng lượng (nhiều calo nhất)</li>
                  <li>• Hấp thu vitamin A, D, E, K</li>
                  <li>• Bảo vệ các cơ quan</li>
                  <li>• Hỗ trợ sức khỏe não và tim</li>
                </ul>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">20-35%</p>
                <p className="text-xs text-gray-600">năng lượng</p>
              </div>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm text-green-900">
                <strong>Nên chọn:</strong> Chất béo không bão hòa (dầu ô liu, cá, quả hạch) 
                thay vì chất béo bão hòa và trans fat.
              </p>
            </div>
            <p className="text-xs text-gray-600">
              Xem chi tiết:{" "}
              <Link href="/knowledge/dietary-fats" className="text-blue-600 hover:underline">
                Chất béo trong chế độ ăn
              </Link>
            </p>
          </div>
        </Card>
      </section>

      {/* Balancing macronutrients */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách cân bằng các chất dinh dưỡng đa lượng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nguyên tắc chung</h3>
            <div className="space-y-3">
              <p className="text-body-sm">
                Không có tỷ lệ "hoàn hảo" cho mọi người. Tỷ lệ phù hợp phụ thuộc vào:
              </p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Tuổi:</strong> Người cao tuổi cần nhiều protein hơn
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Mức độ hoạt động:</strong> Vận động nhiều cần nhiều carbohydrate hơn
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Tình trạng sức khỏe:</strong> Đái tháo đường, bệnh thận cần điều chỉnh
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>
                    <strong>Mục tiêu:</strong> Quản lý cân nặng, tăng cơ, kiểm soát đường huyết
                  </span>
                </li>
              </ul>
            </div>
          </Card>

          <ExampleBox title="Ví dụ bữa ăn cân bằng (2000 kcal)">
            <div className="space-y-2">
              <p className="text-sm text-gray-700">
                <strong>Carbohydrate (50%):</strong> 1 bát cơm gạo lứt + rau củ
              </p>
              <p className="text-sm text-gray-700">
                <strong>Protein (25%):</strong> 100g thịt gà hoặc cá
              </p>
              <p className="text-sm text-gray-700">
                <strong>Chất béo (25%):</strong> Dầu ô liu khi nấu + quả bơ
              </p>
              <p className="text-xs text-gray-600 mt-2">
                Đây chỉ là ví dụ. Tỷ lệ có thể thay đổi tùy nhu cầu cá nhân.
              </p>
            </div>
          </ExampleBox>
        </div>
      </section>

      {/* Common mistakes */}
      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">"Loại bỏ hoàn toàn một chất dinh dưỡng"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Cả ba chất dinh dưỡng đều cần thiết. 
              Loại bỏ hoàn toàn carbohydrate, protein, hoặc chất béo đều không tốt cho sức khỏe. 
              Vấn đề là chọn loại đúng và lượng phù hợp.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Tỷ lệ chính xác là quan trọng nhất"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Chọn loại đúng (carbohydrate nguyên cám, protein nạc, 
              chất béo không bão hòa) quan trọng hơn tỷ lệ chính xác. 
              Một chế độ ăn với tỷ lệ "hoàn hảo" nhưng chọn loại sai vẫn không tốt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Chất béo làm tăng cân"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Chất béo có nhiều calo hơn, nhưng chất béo tốt (không bão hòa) 
              thực sự có thể hỗ trợ quản lý cân nặng bằng cách giúp bạn cảm thấy no lâu hơn.
            </p>
          </Card>
        </div>
      </section>

      {/* Related articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết chi tiết</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('macronutrients-overview').map((article) => (
            <Card key={article.slug} href={article.href}>
              <h3 className="heading-5 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Tỷ lệ chất dinh dưỡng đa lượng cần được 
          điều chỉnh dựa trên tình trạng sức khỏe, bệnh mạn tính, và nhu cầu cá nhân. 
          Hãy tham khảo ý kiến của chuyên gia dinh dưỡng để có kế hoạch ăn uống phù hợp.
        </p>
      </Callout>
    </main>
  );
}
