import Link from "next/link";
import { BookOpen, Calculator, ArrowRight, AlertCircle, FileText, Activity, UtensilsCrossed, ClipboardCheck, PlayCircle, HelpCircle, CheckCircle2, Sparkles } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "./components/Card";
import { Callout } from "./components/Callout";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" aria-hidden="true" />
            <span>Nền tảng giáo dục dinh dưỡng lâm sàng</span>
          </div>
          <h1 className="heading-1 mb-6">
            Hiểu dinh dưỡng lâm sàng một Cách đơn giản
          </h1>
          <p className="text-body-lg max-w-3xl mx-auto mb-8 text-gray-700">
            Học các khái niệm dinh dưỡng lâm sàng và sử dụng công cụ tương tác để thực hành. 
            Tất cả nội dung được trình bày dễ hiểu, phù hợp cho cả người không có chuyên môn.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/getting-started"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors focus-ring shadow-md"
            >
              <PlayCircle className="w-5 h-5" aria-hidden="true" />
              Bắt đầu ở đây
            </Link>
            <Link
              href="/knowledge"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors focus-ring"
            >
              <BookOpen className="w-5 h-5" aria-hidden="true" />
              Tìm hiểu Kiến thức
            </Link>
          </div>
        </div>

        {/* Quick start Guide */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Hướng dẫn Nhanh</h2>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Bắt đầu với 4 bước đơn giản để hiểu và sử dụng dinh dưỡng lâm sàng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="heading-5 mb-2">Tìm hiểu cơ bản</h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Đọc về các khái niệm cơ bản và hiểu lầm phổ biến
              </p>
              <Link
                href="/knowledge/myths-in-clinical-nutrition"
                className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1"
              >
                Bắt đầu <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="heading-5 mb-2">sử dụng Công cụ</h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Thực hành với các công cụ tính toán và đánh giá
              </p>
              <Link
                href="/tools/energy-protein-calculator"
                className="text-green-600 hover:text-green-700 font-medium text-sm inline-flex items-center gap-1"
              >
                Thử ngay <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="heading-5 mb-2">Học quy trình</h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Hiểu cách đánh giá dinh dưỡng từ đầu đến cuối
              </p>
              <Link
                href="/knowledge/assessment-process"
                className="text-purple-600 hover:text-purple-700 font-medium text-sm inline-flex items-center gap-1"
              >
                Tìm hiểu <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Card>
            <Card className="text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-amber-600">4</span>
              </div>
              <h3 className="heading-5 mb-2">Áp dụng thực tế</h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Tìm hiểu về dinh dưỡng cho các bệnh mạn tính
              </p>
              <Link
                href="/knowledge/chronic-diseases"
                className="text-amber-600 hover:text-amber-700 font-medium text-sm inline-flex items-center gap-1"
              >
                Khám phá <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </Card>
          </div>
        </section>

        {/* Main navigation Cards */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Khám phá Nội dung</h2>
            <p className="text-body text-gray-600">
              Chọn cách bạn muốn học về dinh dưỡng lâm sàng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Knowledge base card */}
            <Card href="/knowledge">
              <CardHeader
                icon={BookOpen}
                title="Tìm hiểu Kiến thức"
              />
              <CardContent>
                <p className="text-body mb-4">
                  Học các khái niệm dinh dưỡng lâm sàng được giải thích một cách dễ hiểu, 
                  từ cơ bản đến nâng cao. Phù hợp cho người mới bắt đầu.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hiểu lầm và quan niệm sai phổ biến</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Quy trình đánh giá dinh dưỡng đầy đủ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Dinh dưỡng cho các bệnh mạn tính</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800">
                  Khám phá Kiến thức <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </span>
              </CardFooter>
            </Card>

            {/* Tools card */}
            <Card href="/tools">
              <CardHeader
                icon={Calculator}
                title="sử dụng Công cụ"
              />
              <CardContent>
                <p className="text-body mb-4">
                  Thực hành với các công cụ tương tác để hiểu cách tính toán và đánh giá dinh dưỡng. 
                  Tất cả công cụ đều có hướng dẫn chi tiết.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Máy tính năng lượng và protein</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Sàng lọc suy dinh dưỡng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đánh giá lượng ăn vào</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <span className="inline-flex items-center text-green-600 font-medium group-hover:text-green-800">
                  sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
                </span>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Popular content section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Nội dung Phổ biến</h2>
            <p className="text-body text-gray-600">
              Các bài viết và công cụ được xem nhiều nhất
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="group p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <AlertCircle className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Hiểu lầm & Quan niệm Sai</h3>
              </div>
              <p className="text-sm text-gray-600">
                Tìm hiểu sự thật đằng sau các hiểu lầm phổ biến về dinh dưỡng lâm sàng
              </p>
            </Link>
            <Link
              href="/tools/energy-protein-calculator"
              className="group p-5 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Calculator className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Máy tính năng lượng & Protein</h3>
              </div>
              <p className="text-sm text-gray-600">
                Tính toán nhu cầu dinh dưỡng một cách đơn giản và dễ hiểu
              </p>
            </Link>
            <Link
              href="/knowledge/assessment-process"
              className="group p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ClipboardCheck className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Quy trình Đánh giá</h3>
              </div>
              <p className="text-sm text-gray-600">
                Hướng dẫn từng bước về đánh giá dinh dưỡng lâm sàng
              </p>
            </Link>
            <Link
              href="/tools/malnutrition-screening"
              className="group p-5 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Sàng lọc Suy dinh dưỡng</h3>
              </div>
              <p className="text-sm text-gray-600">
                Tìm hiểu cách xác định nguy cơ suy dinh dưỡng
              </p>
            </Link>
            <Link
              href="/knowledge/why-intake-falls-short"
              className="group p-5 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Vì sao Lượng ăn Thường thiếu</h3>
              </div>
              <p className="text-sm text-gray-600">
                Hiểu các yếu tố thực tế ảnh hưởng đến lượng ăn vào
              </p>
            </Link>
            <Link
              href="/tools/intake-assessment"
              className="group p-5 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-all focus-ring"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <UtensilsCrossed className="w-5 h-5 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="heading-5">Đánh giá Lượng ăn</h3>
              </div>
              <p className="text-sm text-gray-600">
                Học cách đánh giá lượng dinh dưỡng thực tế người bệnh nhận được
              </p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-3">Câu hỏi Thường gặp</h2>
            <p className="text-body text-gray-600">
              Những câu hỏi phổ biến về dinh dưỡng lâm sàng
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader
                icon={HelpCircle}
                title="Tôi không có chuyên môn y tế, có thể sử dụng nền tảng này không?"
              />
              <CardContent>
                <p className="text-body">
                  Có! Nền tảng này được thiết kế để dễ hiểu cho mọi người. 
                  Tất cả thuật ngữ chuyên môn đều được giải thích bằng ngôn ngữ đơn giản, 
                  và có nhiều ví dụ thực tế để giúp bạn hiểu.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                icon={HelpCircle}
                title="Các công cụ tính toán có chính xác không?"
              />
              <CardContent>
                <p className="text-body">
                  Các công cụ cung cấp ước tính dựa trên các phương trình tiêu chuẩn, 
                  nhưng kết quả chỉ mang tính giáo dục. Trong thực tế lâm sàng, 
                  cần có đánh giá toàn diện từ chuyên gia dinh dưỡng.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                icon={HelpCircle}
                title="Tôi nên bắt đầu từ đâu?"
              />
              <CardContent>
                <p className="text-body">
                  Chúng tôi khuyên bạn bắt đầu từ trang{" "}
                  <Link href="/getting-started" className="text-blue-600 hover:underline font-medium">
                    Bắt đầu ở đây
                  </Link>
                  {" "}để có hướng dẫn chi tiết. Hoặc bạn có thể bắt đầu với bài viết về 
                  "Hiểu lầm & Quan niệm Sai" để hiểu những điều cơ bản.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader
                icon={HelpCircle}
                title="Nội dung có được cập nhật thường xuyên không?"
              />
              <CardContent>
                <p className="text-body">
                  Nội dung được dựa trên các hướng dẫn và nghiên cứu mới nhất. 
                  Chúng tôi cập nhật khi có thông tin mới quan trọng về dinh dưỡng lâm sàng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About section */}
        <Callout variant="info" title="Về nền tảng Này">
          <p className="mb-3">
            Nền tảng này được thiết kế để giúp mọi người hiểu các khái niệm dinh dưỡng lâm sàng 
            một cách đơn giản và dễ tiếp cận. Tất cả nội dung được trình bày bằng ngôn ngữ dễ hiểu, 
            phù hợp cho cả người không có chuyên môn y tế.
          </p>
          <p className="mb-3">
            Tất cả nội dung mang tính giáo dục và nên được sử dụng để hỗ trợ, không thay thế, 
            phán đoán lâm sàng và hợp tác đa ngành.
          </p>
          <p className="text-sm italic border-t border-blue-200 pt-3">
            <strong>Lưu ý quan trọng:</strong> Công cụ và hướng dẫn cung cấp thông tin cho phán đoán của bạn; 
            chúng không thay thế nó. Khi còn nghi ngờ, hãy tham khảo ý kiến của chuyên gia dinh dưỡng 
            đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
      </main>
    </div>
  );
}
