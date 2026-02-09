import Link from "next/link";
import { BookOpen, Activity, ArrowRight, AlertCircle, ClipboardCheck, Calculator, FileText, UtensilsCrossed, Heart, TrendingUp, Leaf, AlertTriangle, Wheat, Users, Droplet, PieChart } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card";
import { Breadcrumb } from "../components/Breadcrumb";

export const metadata = {
  title: "Cơ sở Kiến thức Dinh dưỡng lâm sàng",
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
            Cơ sở Kiến thức Dinh dưỡng lâm sàng
          </h1>
        </div>
        <p className="text-body-lg">
          Nội dung giáo dục về dinh dưỡng lâm sàng được tổ chức thành hai phần chính:
          <strong> Cơ sở Kiến thức Dinh dưỡng lâm sàng</strong> và <strong>Dinh dưỡng trong Bệnh mạn tính</strong>.
        </p>
      </header>

      {/* Clinical foundations section */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 className="heading-2 whitespace-nowrap">
            Cơ sở Kiến thức Dinh dưỡng lâm sàng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        
        <Card href="/knowledge/clinical-foundations">
          <CardHeader
            icon={BookOpen}
            title="Cơ sở Kiến thức Dinh dưỡng lâm sàng"
          />
          <CardContent>
            <p className="text-body">
              Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, và lập luận lâm sàng.
              Tìm hiểu cách các bác sĩ lâm sàng suy nghĩ về dinh dưỡng và cách áp dụng các nguyên tắc này trong thực hành.
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-sm mt-4 text-neutral-700">
              <li>Hiểu lầm & Quan niệm Sai trong Dinh dưỡng lâm sàng</li>
              <li>Đánh giá Dinh dưỡng lâm sàng: Quy trình Đầy đủ</li>
              <li>Ước tính nhu cầu dinh dưỡng</li>
              <li>Đánh giá Lượng ăn</li>
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

      {/* Chronic diseases section */}
      <section className="space-y-6 mt-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 className="heading-2 whitespace-nowrap">
            Dinh dưỡng trong Bệnh mạn tính
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

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
            title="Đánh giá Lượng ăn: Hiểu người Bệnh thực sự Nhận được Gì"
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

        <Card href="/knowledge/glycemic-index-load">
          <CardHeader
            icon={Calculator}
            title="Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)"
          />
          <CardContent>
            <p className="text-body">
              Hiểu về GI và GL - cách thực phẩm ảnh hưởng đến đường huyết. 
              Tìm hiểu cách chọn thực phẩm phù hợp cho người đái tháo đường và quản lý đường huyết.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/glycemic-index-load"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/dietary-fats">
          <CardHeader
            icon={Heart}
            title="Chất béo trong chế độ ăn: Hiểu các loại và Ảnh hưởng sức khỏe"
          />
          <CardContent>
            <p className="text-body">
              Tìm hiểu về các loại chất béo - chất béo bão hòa, không bão hòa, và trans fat. 
              Hiểu cách chúng ảnh hưởng đến sức khỏe tim mạch và cách chọn lựa đúng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/dietary-fats"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/dietary-fiber">
          <CardHeader
            icon={Leaf}
            title="Chất xơ trong Dinh dưỡng lâm sàng"
          />
          <CardContent>
            <p className="text-body">
              Tìm hiểu về chất xơ hòa tan và không hòa tan, lợi ích sức khỏe, nguồn thực phẩm, 
              và cách tăng lượng chất xơ trong chế độ ăn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/dietary-fiber"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/sodium-health">
          <CardHeader
            icon={AlertTriangle}
            title="Natri (Muối) và Sức khỏe"
          />
          <CardContent>
            <p className="text-body">
              Hiểu về natri trong chế độ ăn - vai trò, tác hại của thừa natri, 
              và cách giảm natri cho người tăng huyết áp, suy tim, bệnh thận.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/sodium-health"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/carbohydrates">
          <CardHeader
            icon={Wheat}
            title="Carbohydrate (tinh bột và đường)"
          />
          <CardContent>
            <p className="text-body">
              Hiểu về carbohydrate - nguồn năng lượng chính, các loại carbohydrate, 
              và cách chọn lựa đúng cho sức khỏe, đặc biệt cho người đái tháo đường.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/carbohydrates"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/chronic-diseases">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Bệnh mạn tính"
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

        <Card href="/knowledge/elderly-nutrition">
          <CardHeader
            icon={Users}
            title="Dinh dưỡng cho Người cao tuổi"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn về dinh dưỡng cho người cao tuổi - nhu cầu đặc biệt, thách thức, 
              và cách đảm bảo dinh dưỡng đầy đủ. Tìm hiểu về sarcopenia, vitamin D, 
              và các vấn đề dinh dưỡng phổ biến ở tuổi già.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/elderly-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/hydration">
          <CardHeader
            icon={Droplet}
            title="Hydration: Nước và dịch"
          />
          <CardContent>
            <p className="text-body">
              Hiểu về nhu cầu nước và dịch, tầm quan trọng của hydration, dấu hiệu thiếu nước, 
              và cách đảm bảo đủ nước cho sức khỏe tốt.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/hydration"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/macronutrients-overview">
          <CardHeader
            icon={PieChart}
            title="Tổng quan về các chất dinh dưỡng đa lượng"
          />
          <CardContent>
            <p className="text-body">
              Tổng quan về ba chất dinh dưỡng đa lượng chính - carbohydrate, protein, và chất béo. 
              Hiểu vai trò, nhu cầu, và cách cân bằng chúng trong chế độ ăn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/macronutrients-overview"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>
      </section>

      {/* Tools section */}
      <section className="space-y-6 mt-8">
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
                Công cụ Sàng lọc Suy dinh dưỡng
            </Link>
          </li>
          <li>
            <Link href="/tools/energy-protein-calculator" className="text-blue-700 hover:text-blue-900 hover:underline">
                Máy tính năng lượng & Protein
            </Link>
          </li>
          <li>
            <Link href="/tools/intake-assessment" className="text-blue-700 hover:text-blue-900 hover:underline">
                Bảng đánh giá Lượng ăn
            </Link>
          </li>
        </ul>
        </CardContent>
      </Card>
      </section>
    </main>
  );
}
