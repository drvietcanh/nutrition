import Link from "next/link";
import { ArrowRight, BookOpen, Calculator, CheckCircle2, PlayCircle, Lightbulb, Target, Users } from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/Card";
import { Callout } from "../components/Callout";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata = {
  title: "Bắt đầu ở đây - Hướng dẫn cho Người Mới",
  description: "Hướng dẫn từng bước để bắt đầu học về dinh dưỡng lâm sàng một cách đơn giản và dễ hiểu.",
};

export default function GettingStartedPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[{ label: "Bắt đầu ở đây" }]} />
      
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <PlayCircle className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Bắt đầu ở đây
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chào mừng bạn đến với nền tảng giáo dục dinh dưỡng lâm sàng! 
          Trang này sẽ hướng dẫn bạn từng bước để bắt đầu học về dinh dưỡng lâm sàng một cách đơn giản và dễ hiểu.
        </p>
      </header>

      {/* Learning Path */}
      <section className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="heading-2 mb-3">Lộ trình Học tập</h2>
          <p className="text-body text-gray-600">
            Theo dõi 4 bước đơn giản này để nắm vững kiến thức cơ bản về dinh dưỡng lâm sàng
          </p>
        </div>

        <div className="space-y-6">
          {/* Step 1 */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3">Hiểu các Khái niệm Cơ bản</h3>
                <p className="text-body mb-4">
                  Bắt đầu bằng việc tìm hiểu những hiểu lầm phổ biến về dinh dưỡng lâm sàng. 
                  Điều này giúp bạn có nền tảng vững chắc trước khi học các khái niệm phức tạp hơn.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đọc bài viết về <strong>Hiểu lầm & Quan niệm Sai</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hiểu vì sao không có "số chính xác" trong dinh dưỡng lâm sàng</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Học về các thuật ngữ cơ bản (năng lượng, protein, nhu cầu...)</span>
                  </li>
                </ul>
                <Link
                  href="/knowledge/myths-in-clinical-nutrition"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors focus-ring"
                >
                  Bắt đầu bước 1 <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Step 2 */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3">Thực hành với Công cụ</h3>
                <p className="text-body mb-4">
                  Sử dụng các công cụ tương tác để hiểu cách tính toán nhu cầu dinh dưỡng. 
                  Đây là cách tốt nhất để áp dụng kiến thức bạn đã học.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thử <strong>Máy tính năng lượng & Protein</strong> với dữ liệu mẫu</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Xem cách các yếu tố khác nhau ảnh hưởng đến kết quả</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thử các công cụ khác như Sàng lọc Suy Dinh dưỡng</span>
                  </li>
                </ul>
                <Link
                  href="/tools/energy-protein-calculator"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus-ring"
                >
                  Bắt đầu bước 2 <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Step 3 */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3">Học Quy trình Đánh giá</h3>
                <p className="text-body mb-4">
                  Hiểu cách các chuyên gia đánh giá dinh dưỡng từ đầu đến cuối. 
                  Đây là phần quan trọng để hiểu cách áp dụng kiến thức trong thực tế.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đọc về <strong>Quy trình Đánh giá Dinh dưỡng</strong></span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hiểu cách sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Học về các yếu tố ảnh hưởng đến lượng ăn vào</span>
                  </li>
                </ul>
                <Link
                  href="/knowledge/assessment-process"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors focus-ring"
                >
                  Bắt đầu bước 3 <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>

          {/* Step 4 */}
          <Card>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-3 mb-3">Áp dụng cho Bệnh Cụ thể</h3>
                <p className="text-body mb-4">
                  Tìm hiểu về dinh dưỡng cho các bệnh mạn tính phổ biến. 
                  Đây là nơi bạn áp dụng tất cả kiến thức đã học vào các tình huống thực tế.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đọc về dinh dưỡng cho các bệnh như đái tháo đường, tăng huyết áp, suy tim...</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hiểu cách điều chỉnh dinh dưỡng theo từng loại bệnh</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Học về các lưu ý đặc biệt cho từng tình trạng</span>
                  </li>
                </ul>
                <Link
                  href="/knowledge/chronic-diseases"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white font-medium rounded-lg hover:bg-amber-700 transition-colors focus-ring"
                >
                  Bắt đầu bước 4 <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Tips Section */}
      <section className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="heading-2 mb-3">Mẹo Học tập Hiệu quả</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader
              icon={Lightbulb}
              title="Đọc kỹ các giải thích"
            />
            <CardContent>
              <p className="text-body-sm">
                Mỗi thuật ngữ chuyên môn đều có giải thích đơn giản. 
                Hãy đọc kỹ để hiểu rõ thay vì chỉ nhớ thuộc lòng.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              icon={Target}
              title="Thực hành với ví dụ"
            />
            <CardContent>
              <p className="text-body-sm">
                Sử dụng các công cụ với dữ liệu mẫu để hiểu cách chúng hoạt động. 
                Thử thay đổi các giá trị để xem kết quả thay đổi như thế nào.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              icon={BookOpen}
              title="Đọc theo thứ tự"
            />
            <CardContent>
              <p className="text-body-sm">
                Các bài viết được sắp xếp theo thứ tự từ cơ bản đến nâng cao. 
                Hãy đọc theo thứ tự để hiểu tốt hơn.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader
              icon={Users}
              title="Tham khảo khi cần"
            />
            <CardContent>
              <p className="text-body-sm">
                Nếu có thắc mắc, hãy sử dụng tính năng tìm kiếm hoặc 
                tham khảo ý kiến của chuyên gia dinh dưỡng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Common Questions */}
      <section className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="heading-2 mb-3">Câu hỏi Thường gặp</h2>
        </div>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Tôi nên dành bao nhiêu thời gian để học?</h3>
            <p className="text-body">
              Bạn có thể học theo tốc độ của mình. Mỗi bài viết thường mất 10-15 phút để đọc, 
              và mỗi công cụ có thể mất 5-10 phút để thử. Chúng tôi khuyên bạn học từng chút một 
              thay vì cố gắng học tất cả cùng lúc.
            </p>
          </Card>
          <Card>
            <h3 className="heading-4 mb-3">Tôi có cần kiến thức y tế trước đó không?</h3>
            <p className="text-body">
              Không cần! Nền tảng này được thiết kế để dễ hiểu cho mọi người. 
              Tất cả thuật ngữ chuyên môn đều được giải thích bằng ngôn ngữ đơn giản, 
              và có nhiều ví dụ thực tế để giúp bạn hiểu.
            </p>
          </Card>
          <Card>
            <h3 className="heading-4 mb-3">Tôi có thể sử dụng các công cụ cho bệnh nhân thật không?</h3>
            <p className="text-body">
              Các công cụ này chỉ dành cho mục đích giáo dục. Trong thực tế lâm sàng, 
              cần có đánh giá toàn diện từ chuyên gia dinh dưỡng đã đăng ký. 
              Kết quả từ các công cụ chỉ là ước tính và không thay thế phán đoán lâm sàng.
            </p>
          </Card>
        </div>
      </section>

      {/* Next Steps */}
      <Callout variant="info" title="Sẵn sàng Bắt đầu?">
        <p className="mb-3">
          Bây giờ bạn đã hiểu lộ trình học tập, hãy bắt đầu với bước đầu tiên: 
          tìm hiểu về các hiểu lầm phổ biến trong dinh dưỡng lâm sàng.
        </p>
        <Link
          href="/knowledge/myths-in-clinical-nutrition"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus-ring"
        >
          Bắt đầu học ngay <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Link>
      </Callout>
    </main>
  );
}
