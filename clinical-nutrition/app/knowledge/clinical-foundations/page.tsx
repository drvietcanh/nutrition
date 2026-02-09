import type { Metadata } from "next";
import Link from "next/link";
import { AlertCircle, ClipboardCheck, Calculator, FileText, UtensilsCrossed, BookOpen, Info } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cơ sở Kiến thức Dinh dưỡng lâm sàng",
  description: "Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, và lập luận lâm sàng.",
};

export default function ClinicalFoundationsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[
        { label: "Cơ sở Kiến thức", href: "/knowledge" },
        { label: "Cơ sở Kiến thức Dinh dưỡng lâm sàng" }
      ]} />
      
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Cơ sở Kiến thức Dinh dưỡng lâm sàng
          </h1>
        </div>
        <p className="text-body-lg">
          Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, và lập luận lâm sàng.
          Tìm hiểu cách các bác sĩ lâm sàng suy nghĩ về dinh dưỡng và cách áp dụng các nguyên tắc này trong thực hành.
        </p>
      </header>

      <section className="space-y-6">
        <Card href="/knowledge/myths-in-clinical-nutrition">
          <CardHeader
            icon={AlertCircle}
            title="Hiểu lầm & Quan niệm Sai trong Dinh dưỡng lâm sàng"
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
            title="Đánh giá Dinh dưỡng lâm sàng: Hướng dẫn đơn giản về Toàn bộ Quy trình"
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

        <Card href="/knowledge/nutrition-assessment-overview">
          <CardHeader
            icon={Info}
            title="Tổng quan đánh Giá dinh dưỡng"
          />
          <CardContent>
            <p className="text-body">
              Tổng quan về quy trình đánh giá dinh dưỡng lâm sàng, các khái niệm cơ bản và cách chúng hoạt động cùng nhau.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/nutrition-assessment-overview"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/needs-estimation">
          <CardHeader
            icon={Calculator}
            title="Ước tính nhu cầu dinh dưỡng: Vì sao Khoảng quan trọng hơn Số chính xác"
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

        <Card href="/knowledge/no-single-number-in-clinical-nutrition">
          <CardHeader
            icon={Info}
            title="Tại sao không Có con số Phổ quát cho nhu Cầu dinh Dưỡng"
          />
          <CardContent>
            <p className="text-body">
              Hiểu tại sao không có một con số phổ quát cho nhu cầu dinh dưỡng và cách các bác sĩ lâm sàng
              sử dụng khoảng giá trị và phán đoán lâm sàng trong thực hành.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/no-single-number-in-clinical-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/why-no-universal-number">
          <CardHeader
            icon={Info}
            title="Tại sao không Có con số Phổ quát"
          />
          <CardContent>
            <p className="text-body">
              Khám phá lý do tại sao dinh dưỡng lâm sàng không thể được giảm xuống thành các con số phổ quát
              và cách các bác sĩ lâm sàng suy nghĩ về ước tính nhu cầu.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/why-no-universal-number"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/why-intake-falls-short">
          <CardHeader
            icon={FileText}
            title="Vì sao Lượng dinh dưỡng Ăn vào Thường thiếu so với Nhu cầu Đã tính"
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
            title="Đánh giá Lượng ăn: Hiểu người bệnh thực sự Nhận được Gì"
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

        <Card href="/knowledge/myths-and-misconceptions">
          <CardHeader
            icon={AlertCircle}
            title="Hiểu lầm phổ biến trong Dinh dưỡng lâm sàng"
          />
          <CardContent>
            <p className="text-body">
              Khám phá các hiểu lầm phổ biến trong dinh dưỡng lâm sàng, hiểu tại sao chúng tồn tại,
              và học cách tiếp cận dựa trên bằng chứng để cải thiện chăm sóc dinh dưỡng an toàn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/myths-and-misconceptions"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}
