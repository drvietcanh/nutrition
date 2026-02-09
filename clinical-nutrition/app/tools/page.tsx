import Link from "next/link";
import { Activity, Calculator, UtensilsCrossed, ArrowRight, Ruler, Droplet, AlertTriangle, Pill } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card";
import { Breadcrumb } from "../components/Breadcrumb";

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

      <section className="space-y-6">
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
      </section>
    </main>
  );
}

