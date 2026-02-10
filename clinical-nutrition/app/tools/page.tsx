import Link from "next/link";
import { Activity, Calculator, UtensilsCrossed, ArrowRight, Ruler, Droplet, AlertTriangle, Pill, Search, ClipboardCheck, Calendar, FlaskConical, BarChart3, RefreshCw, CalendarDays, Zap, Heart } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card";
import { Breadcrumb } from "../components/Breadcrumb";
import { Callout } from "../components/Callout";

export default function ToolsIndexPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[{ label: "Công cụ Tương tác" }]} />
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calculator className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Công cụ Tương tác
          </h1>
        </div>
        <p className="text-body-lg">
          Thực hành với các công cụ tương tác để sàng lọc suy dinh dưỡng, tính toán năng lượng và protein, 
          và đánh giá lượng ăn vào. Các công cụ này được thiết kế cho mục đích giáo dục.
        </p>
      </header>

      <Callout variant="warning" title="Lưu ý về mục đích giáo dục">
        <p className="text-body-sm">
          Các công cụ trên nền tảng này được thiết kế để hỗ trợ học tập và minh họa khái niệm. 
          Kết quả không thay thế đánh giá lâm sàng đầy đủ và quyết định của đội ngũ y tế.
        </p>
      </Callout>

      <section className="space-y-8 tool-page-section">
        <h2 className="heading-2">Sàng lọc & đánh giá tổng quan</h2>
        <Card href="/tools/malnutrition-screening">
          <CardHeader
            icon={Activity}
            title="Nguy cơ Suy dinh dưỡng – Công cụ giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Khám phá cách các công cụ sàng lọc phổ biến (NRS-2002, PG-SGA) đánh giá nguy cơ suy dinh dưỡng 
              sử dụng các đầu vào ví dụ đơn giản. Hiểu cách sụt cân, giảm lượng ăn, và bối cảnh bệnh 
              ảnh hưởng đến đánh giá nguy cơ.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/malnutrition-screening"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <h2 className="heading-2 mt-10">Tính toán nhu cầu & cân bằng ăn vào</h2>
        <Card href="/tools/energy-protein-calculator">
          <CardHeader
            icon={Calculator}
            title="Nhu cầu năng lượng & Protein – Máy tính giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Tính toán nhu cầu năng lượng và protein ước tính dựa trên các phương trình tiêu chuẩn. 
              Hiểu vì sao nhu cầu là ước tính (khoảng) chứ không phải số chính xác, và cách các yếu tố 
              như tuổi, giới tính, và bối cảnh bệnh ảnh hưởng đến tính toán.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/energy-protein-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/intake-vs-needs">
          <CardHeader
            icon={UtensilsCrossed}
            title="Lượng ăn vs Nhu cầu – Công cụ So sánh"
          />
          <CardContent>
            <p className="text-body">
              So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính. Hiểu khoảng cách giữa 
              nhu cầu ước tính và lượng ăn thực tế, cùng các yếu tố thực tế tạo ra những khoảng cách này.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/intake-vs-needs"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/bmi-body-composition">
          <CardHeader
            icon={Ruler}
            title="BMI & Thành phần cơ thể – Công cụ giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Tính BMI, Cân nặng Lý tưởng (IBW), Cân nặng Điều chỉnh (ABW), và Diện tích Bề mặt cơ thể (BSA).
              Hiểu cách các chỉ số này được sử dụng trong đánh giá dinh dưỡng lâm sàng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/bmi-body-composition"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/fluid-requirements">
          <CardHeader
            icon={Droplet}
            title="Nhu cầu dịch – Công cụ giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Tính nhu cầu dịch hàng ngày sử dụng các quy tắc giáo dục và điều chỉnh dựa trên
              tình trạng lâm sàng. Hiểu cách cân bằng dịch được quản lý trong thực hành lâm sàng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/fluid-requirements"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/refeeding-syndrome-risk">
          <CardHeader
            icon={AlertTriangle}
            title="Đánh giá Nguy cơ Hội chứng Tái cho Ăn – Công cụ giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Đánh giá nguy cơ hội chứng tái cho ăn dựa trên các yếu tố nguy cơ lâm sàng.
              Hiểu tầm quan trọng của đánh giá nguy cơ trước khi bắt đầu dinh dưỡng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/refeeding-syndrome-risk"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/micronutrient-assessment">
          <CardHeader
            icon={Pill}
            title="Đánh giá Vi chất – Công cụ giảng dạy"
          />
          <CardContent>
            <p className="text-body">
              Ước tính nhu cầu vi chất (vitamin và khoáng chất) dựa trên tuổi, giới tính,
              và tình trạng lâm sàng. Hiểu tầm quan trọng của vi chất trong dinh dưỡng lâm sàng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/micronutrient-assessment"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <h2 className="heading-2 mt-10">Cơ sở dữ liệu thực phẩm & lập kế hoạch bữa ăn</h2>
        <Card href="/tools/food-database">
          <CardHeader
            icon={UtensilsCrossed}
            title="Cơ sở Dữ liệu Thực phẩm Việt Nam"
          />
          <CardContent>
            <p className="text-body">
              Tìm kiếm và xem thông tin dinh dưỡng của các thực phẩm Việt Nam phổ biến.
              Tính toán giá trị dinh dưỡng cho nhiều khẩu phần khác nhau.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/food-database"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/meal-planner">
          <CardHeader
            icon={UtensilsCrossed}
            title="Lập kế hoạch Bữa ăn"
          />
          <CardContent>
            <p className="text-body">
              Lập kế hoạch bữa ăn dựa trên nhu cầu dinh dưỡng. Chọn thực phẩm từ cơ sở dữ liệu 
              và phân bổ vào các bữa ăn để đáp ứng nhu cầu hàng ngày.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/meal-planner"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/unit-converter">
          <CardHeader
            icon={Ruler}
            title="Chuyển đổi Đơn vị Việt Nam"
          />
          <CardContent>
            <p className="text-body">
              Chuyển đổi giữa các đơn vị Việt Nam (bát, thìa, đĩa, tô...) và gram. 
              Tiện dụng cho việc tính toán dinh dưỡng và lập thực đơn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/unit-converter"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <h2 className="heading-2 mt-10">Công cụ cho bệnh lý cụ thể</h2>
        <Card href="/tools/food-lookup-by-disease">
          <CardHeader
            icon={Search}
            title="Tra cứu Thành phần Thực phẩm theo Bệnh"
          />
          <CardContent>
            <p className="text-body">
              Tìm kiếm và xem thông tin dinh dưỡng của thực phẩm Việt Nam theo từng bệnh lý.
              Hiểu rõ thành phần nào cần chú ý cho bệnh của bạn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/food-lookup-by-disease"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/gl-calculator">
          <CardHeader
            icon={Calculator}
            title="Tính toán GL cho Bữa Ăn"
          />
          <CardContent>
            <p className="text-body">
              Tính toán Glycemic Load (GL) của bữa ăn để đánh giá ảnh hưởng đến đường huyết.
              Công cụ hữu ích cho người đái tháo đường.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/gl-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/sodium-calculator">
          <CardHeader
            icon={Droplet}
            title="Tính toán Natri trong Bữa Ăn"
          />
          <CardContent>
            <p className="text-body">
              Tính toán tổng lượng natri (muối) trong bữa ăn để kiểm soát huyết áp.
              Công cụ hữu ích cho người tăng huyết áp.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/sodium-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/purine-calculator">
          <CardHeader
            icon={AlertTriangle}
            title="Tính toán Purin trong Bữa Ăn"
          />
          <CardContent>
            <p className="text-body">
              Tính toán tổng lượng purin trong bữa ăn để tránh vượt quá ngưỡng và giảm nguy cơ cơn gút cấp.
              Công cụ hữu ích cho người bị bệnh gút.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/purine-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/meal-assessment">
          <CardHeader
            icon={ClipboardCheck}
            title="Đánh giá Bữa Ăn theo Bệnh"
          />
          <CardContent>
            <p className="text-body">
              Đánh giá tổng thể một bữa ăn có phù hợp với bệnh lý không.
              Công cụ sẽ phân tích các thành phần dinh dưỡng và đưa ra gợi ý cải thiện.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/meal-assessment"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/vietnamese-dish-lookup">
          <CardHeader
            icon={UtensilsCrossed}
            title="Tra cứu Món Ăn Việt Nam"
          />
          <CardContent>
            <p className="text-body">
              Tìm kiếm và xem thông tin dinh dưỡng của các món ăn Việt Nam phổ biến.
              Hiểu rõ món ăn nào phù hợp với bệnh lý của bạn và cách điều chỉnh để phù hợp hơn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/vietnamese-dish-lookup"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/disease-meal-planner">
          <CardHeader
            icon={Calendar}
            title="Lập Thực đơn theo Bệnh"
          />
          <CardContent>
            <p className="text-body">
              Tự động gợi ý thực đơn phù hợp với bệnh lý. 
              Chọn bệnh, nhập nhu cầu dinh dưỡng, và nhận thực đơn gợi ý cho cả ngày.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/disease-meal-planner"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/kidney-minerals-calculator">
          <CardHeader
            icon={FlaskConical}
            title="Tính toán Kali và Phốt pho"
          />
          <CardContent>
            <p className="text-body">
              Tính toán tổng lượng kali và phốt pho trong bữa ăn cho người bệnh thận.
              So sánh với nhu cầu theo giai đoạn CKD và nhận gợi ý điều chỉnh.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/kidney-minerals-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/cholesterol-calculator">
          <CardHeader
            icon={Heart}
            title="Tính toán Cholesterol và Chất béo Bão hòa"
          />
          <CardContent>
            <p className="text-body">
              Tính toán tổng lượng cholesterol và chất béo bão hòa trong bữa ăn để bảo vệ sức khỏe tim mạch.
              Công cụ hữu ích cho người bệnh tim mạch.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/cholesterol-calculator"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/daily-menu-assessment">
          <CardHeader
            icon={Calendar}
            title="Đánh giá Thực đơn Một Ngày"
          />
          <CardContent>
            <p className="text-body">
              Đánh giá tổng thể thực đơn một ngày (sáng, trưa, tối, phụ) có phù hợp với bệnh lý không.
              Phân tích dinh dưỡng và đưa ra gợi ý cải thiện.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/daily-menu-assessment"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/food-comparison">
          <CardHeader
            icon={BarChart3}
            title="So sánh Thực phẩm"
          />
          <CardContent>
            <p className="text-body">
              So sánh dinh dưỡng và phù hợp với bệnh lý của nhiều thực phẩm cùng lúc.
              Giúp lựa chọn thực phẩm tốt nhất cho bệnh của bạn.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/food-comparison"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/food-substitution">
          <CardHeader
            icon={RefreshCw}
            title="Tìm Thực phẩm Thay thế"
          />
          <CardContent>
            <p className="text-body">
              Tìm thực phẩm thay thế phù hợp hơn với bệnh lý của bạn.
              Công cụ gợi ý các lựa chọn tốt hơn dựa trên dinh dưỡng và đánh giá bệnh lý.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/food-substitution"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/weekly-meal-planner">
          <CardHeader
            icon={CalendarDays}
            title="Lập Thực đơn Tuần"
          />
          <CardContent>
            <p className="text-body">
              Lập thực đơn cho cả tuần phù hợp với bệnh lý.
              Tự động gợi ý món ăn đa dạng, cân bằng dinh dưỡng cho 7 ngày.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/weekly-meal-planner"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

      </section>
    </main>
  );
}

