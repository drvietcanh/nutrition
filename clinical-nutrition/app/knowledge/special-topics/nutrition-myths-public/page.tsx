import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiểu lầm Dinh dưỡng Phổ biến (Cho công chúng)",
  description:
    "Điều chỉnh các hiểu lầm dinh dưỡng phổ biến trong công chúng - từ 'ăn đêm làm tăng cân' đến 'carbs là xấu'. Hiểu sự thật đằng sau các quan niệm sai lầm.",
  keywords: [
    "hiểu lầm dinh dưỡng",
    "quan niệm sai",
    "myths",
    "dinh dưỡng",
  ],
};

export default function NutritionMythsPublicPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Hiểu lầm Dinh dưỡng Phổ biến" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <AlertCircle className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">Hiểu lầm Dinh dưỡng Phổ biến (Cho công chúng)</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Có rất nhiều hiểu lầm về dinh dưỡng lan truyền trong công chúng. 
          Một số có thể vô hại, nhưng một số khác có thể dẫn đến chế độ ăn không lành mạnh 
          hoặc lo lắng không cần thiết. Hãy cùng tìm hiểu sự thật đằng sau các hiểu lầm phổ biến.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Nhiều hiểu lầm dinh dưỡng <strong>không dựa trên bằng chứng khoa học</strong>
          </li>
          <li>
            Dinh dưỡng lành mạnh thường <strong>đơn giản hơn</strong> những gì bạn nghĩ
          </li>
          <li>
            <strong>Không có "siêu thực phẩm"</strong> hay "thực phẩm độc hại" tuyệt đối
          </li>
          <li>
            <strong>Cân bằng và đa dạng</strong> là chìa khóa
          </li>
          <li>
            Nếu nghe quá tốt để thành sự thật, có thể là hiểu lầm
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="heading-5 text-red-900 mb-2">"Ăn đêm làm tăng cân"</h3>
                <p className="text-body-sm text-red-900 mb-2">
                  <strong>Sự thật:</strong> Không phải thời gian bạn ăn, mà là <strong>tổng lượng calo</strong> bạn ăn trong ngày. 
                  Nếu bạn ăn nhiều calo hơn cơ thể cần, bạn sẽ tăng cân dù ăn vào lúc nào.
                </p>
                <p className="text-xs text-red-800">
                  Tuy nhiên, ăn quá muộn có thể ảnh hưởng đến giấc ngủ, và khi mệt mỏi bạn có thể chọn thực phẩm không tốt.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="heading-5 text-red-900 mb-2">"Carbohydrate làm tăng cân"</h3>
                <p className="text-body-sm text-red-900 mb-2">
                  <strong>Sự thật:</strong> Carbohydrate không tự động làm tăng cân. 
                  Vấn đề là <strong>loại và lượng</strong> carbohydrate. Carbohydrate phức tạp, nguyên cám 
                  (gạo lứt, yến mạch) thực sự có thể hỗ trợ quản lý cân nặng.
                </p>
                <p className="text-xs text-red-800">
                  Carbohydrate tinh chế và đường đơn giản (bánh kẹo, nước ngọt) mới là vấn đề khi ăn quá nhiều.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="heading-5 text-red-900 mb-2">"Chất béo làm bạn béo"</h3>
                <p className="text-body-sm text-red-900 mb-2">
                  <strong>Sự thật:</strong> Không phải tất cả chất béo đều xấu. 
                  <strong>Chất béo tốt</strong> (omega-3, dầu ô liu) thực sự cần thiết cho sức khỏe. 
                  Vấn đề là loại chất béo và tổng lượng calo.
                </p>
                <p className="text-xs text-red-800">
                  Chất béo bão hòa và trans fat mới là vấn đề khi ăn quá nhiều.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="heading-5 text-red-900 mb-2">"Cần ăn kiêng để giảm cân"</h3>
                <p className="text-body-sm text-red-900 mb-2">
                  <strong>Sự thật:</strong> Ăn kiêng cực đoan thường không bền vững và có thể gây hại. 
                  <strong>Thay đổi lối sống</strong> - ăn uống cân bằng, vận động - mới là cách lành mạnh và bền vững.
                </p>
                <p className="text-xs text-red-800">
                  Ăn kiêng tạm thời thường dẫn đến tăng cân lại sau đó.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <div className="flex items-start gap-3">
              <XCircle className="w-6 h-6 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <h3 className="heading-5 text-red-900 mb-2">"Thực phẩm hữu cơ luôn tốt hơn"</h3>
                <p className="text-body-sm text-red-900 mb-2">
                  <strong>Sự thật:</strong> Thực phẩm hữu cơ có thể tốt cho môi trường, 
                  nhưng về mặt dinh dưỡng, <strong>không khác biệt đáng kể</strong> so với thực phẩm thông thường. 
                  Quan trọng hơn là ăn đủ rau củ, trái cây, dù hữu cơ hay không.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Sự thật về Dinh dưỡng Lành mạnh</h2>
        <Card className="border-green-200 bg-green-50">
          <h3 className="heading-4 text-green-900 mb-3">Nguyên tắc Đơn giản</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span><strong>Ăn đa dạng:</strong> Nhiều loại thực phẩm khác nhau</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span><strong>Ưu tiên thực phẩm tươi:</strong> Rau củ, trái cây, thịt tươi</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span><strong>Cân bằng:</strong> Không có thực phẩm "tốt" hay "xấu" tuyệt đối</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span><strong>Hạn chế thực phẩm chế biến sẵn:</strong> Nhiều đường, muối, chất béo không tốt</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span><strong>Vận động:</strong> Quan trọng như dinh dưỡng</span>
            </li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu đúng về carbohydrate
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu đúng về chất béo
            </p>
          </Card>
          <Card href="/knowledge/special-topics/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách quản lý cân nặng đúng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng là một lĩnh vực phức tạp, 
          và có nhiều quan điểm khác nhau. Nếu bạn có câu hỏi cụ thể về dinh dưỡng, 
          hãy tham khảo ý kiến của chuyên gia dinh dưỡng để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}
