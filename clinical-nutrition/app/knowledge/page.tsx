import Link from "next/link";
import { BookOpen, Activity, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata = {
  title: "Cơ sở Kiến thức Dinh dưỡng Lâm sàng",
  description: "Nội dung giáo dục về dinh dưỡng lâm sàng, bao gồm cơ sở kiến thức và dinh dưỡng trong bệnh mạn tính.",
};

export default function KnowledgePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[{ label: "Cơ sở Kiến thức" }]} />
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Cơ sở Kiến thức Dinh dưỡng Lâm sàng
          </h1>
        </div>
        <p className="text-body-lg">
          Nội dung giáo dục về dinh dưỡng lâm sàng được tổ chức thành hai phần chính:
          <strong> Cơ sở Kiến thức Dinh dưỡng Lâm sàng</strong> và <strong>Dinh dưỡng trong Bệnh Mạn tính</strong>.
        </p>
      </header>

      {/* Clinical Foundations Section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 className="heading-2 whitespace-nowrap">
            Cơ sở Kiến thức Dinh dưỡng Lâm sàng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        
        <Card href="/knowledge/clinical-foundations">
          <CardHeader
            icon={BookOpen}
            title="Cơ sở Kiến thức Dinh dưỡng Lâm sàng"
          />
          <CardContent>
            <p className="text-body">
              Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, và lập luận lâm sàng.
              Tìm hiểu cách các bác sĩ lâm sàng suy nghĩ về dinh dưỡng và cách áp dụng các nguyên tắc này trong thực hành.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-sm mt-4 text-neutral-700">
              <li>Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng</li>
              <li>Đánh giá Dinh dưỡng Lâm sàng: Quy trình Đầy đủ</li>
              <li>Ước tính Nhu cầu Dinh dưỡng</li>
              <li>Đánh giá Lượng Ăn</li>
              <li>Và nhiều hơn nữa...</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/clinical-foundations"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      {/* Chronic Diseases Section */}
      <section className="space-y-6 mt-8">
        <Card href="/knowledge/myths-in-clinical-nutrition">
          <CardHeader
            icon={AlertCircle}
            title="Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng"
          />
          <CardContent>
            <p className="text-body">
              Điều chỉnh dựa trên bằng chứng cho các hiểu lầm phổ biến vẫn tồn tại trong thực hành y tế và điều dưỡng.
              Tìm hiểu sự thật đằng sau các hiểu lầm phổ biến về nhu cầu calo, nhu cầu protein, quy trình NPO, và nhiều hơn nữa.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/assessment-process">
          <CardHeader
            icon={ClipboardCheck}
            title="Đánh giá Dinh dưỡng Lâm sàng: Hướng dẫn Đơn giản về Toàn bộ Quy trình"
          />
          <CardContent>
            <p className="text-body">
              Hiểu quy trình đánh giá dinh dưỡng lâm sàng đầy đủ từ sàng lọc đến theo dõi.
              Tìm hiểu cách sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn kết nối để tạo thành bức tranh hoàn chỉnh.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/needs-estimation">
          <CardHeader
            icon={Calculator}
            title="Ước tính Nhu cầu Dinh dưỡng: Vì sao Khoảng Quan trọng Hơn Số Chính xác"
          />
          <CardContent>
            <p className="text-body">
              Tìm hiểu vì sao nhu cầu dinh dưỡng là ước tính, không phải mục tiêu chính xác. Hiểu các phương pháp ước tính khác nhau,
              tầm quan trọng của khoảng, và vì sao đánh giá lại là cần thiết.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/needs-estimation"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/why-intake-falls-short">
          <CardHeader
            icon={FileText}
            title="Vì sao Lượng Dinh dưỡng Ăn vào Thường Thiếu so với Nhu cầu Đã Tính"
          />
          <CardContent>
            <p className="text-body">
              Hiểu các yếu tố thực tế—liên quan đến bệnh nhân, hệ thống, và lâm sàng—tạo ra khoảng cách
              giữa nhu cầu dinh dưỡng đã tính và lượng ăn thực tế trong môi trường nội trú và ngoại trú.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/why-intake-falls-short"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/intake-assessment">
          <CardHeader
            icon={UtensilsCrossed}
            title="Đánh giá Lượng Ăn: Hiểu Người Bệnh Thực sự Nhận được Gì"
          />
          <CardContent>
            <p className="text-body">
              Khám phá sự khác biệt giữa dinh dưỡng được kê đơn và được cung cấp, vì sao lượng ăn thường thiếu,
              và tầm quan trọng của xu hướng so với dữ liệu một ngày.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/intake-assessment"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>
      </section>

        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 className="heading-2 whitespace-nowrap">
            Dinh dưỡng trong Bệnh Mạn tính
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card href="/knowledge/chronic-diseases">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Bệnh Mạn tính"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng trong các bệnh mạn tính phổ biến. Mỗi bài viết bao gồm các nguyên tắc dinh dưỡng
              dựa trên bằng chứng, điều chỉnh theo giai đoạn bệnh, quản lý biến chứng, và theo dõi.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-sm mt-4 text-neutral-700">
              <li>Tăng huyết áp, Đái tháo đường, Suy tim</li>
              <li>Rối loạn Lipid máu, Bệnh thận mạn (CKD), Lọc máu</li>
              <li>Bệnh gan mạn, Bệnh viêm ruột (IBD), COPD</li>
              <li>Ung thư (Tổng quan)</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/chronic-diseases"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </CardFooter>
        </Card>
      </section>

      <Card>
        <CardHeader
          icon={Activity}
          title="Công cụ Tương tác"
        />
        <CardContent>
          <p className="text-gray-700 leading-relaxed mb-4">
            Thực hành những gì bạn đã học với các công cụ tương tác của chúng tôi:
        </p>
          <ul className="list-disc space-y-2 pl-6 text-gray-700">
          <li>
            <Link href="/tools/malnutrition-screening" className="text-blue-700 hover:text-blue-900 hover:underline">
                Công cụ Sàng lọc Suy Dinh dưỡng
            </Link>
          </li>
          <li>
            <Link href="/tools/energy-protein-calculator" className="text-blue-700 hover:text-blue-900 hover:underline">
                Máy tính Năng lượng & Protein
            </Link>
          </li>
          <li>
            <Link href="/tools/intake-assessment" className="text-blue-700 hover:text-blue-900 hover:underline">
                Bảng Đánh giá Lượng Ăn
            </Link>
          </li>
        </ul>
        </CardContent>
      </Card>
    </main>
  );
}
