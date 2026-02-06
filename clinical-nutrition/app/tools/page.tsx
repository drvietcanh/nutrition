import Link from "next/link";
import { Activity, Calculator, UtensilsCrossed, ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../components/Card";

export default function ToolsIndexPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calculator className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="text-3xl font-bold sm:text-4xl text-gray-900">
            Công cụ Tương tác
          </h1>
        </div>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thực hành với các công cụ tương tác để sàng lọc suy dinh dưỡng, tính toán năng lượng và protein, 
          và đánh giá lượng ăn vào. Các công cụ này được thiết kế cho mục đích giáo dục.
        </p>
      </header>

      <section className="space-y-6">
        <Card href="/tools/malnutrition-screening">
          <CardHeader
            icon={Activity}
            title="Nguy cơ Suy Dinh dưỡng – Công cụ Giảng dạy"
          />
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
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
              Sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/energy-protein-calculator">
          <CardHeader
            icon={Calculator}
            title="Nhu cầu Năng lượng & Protein – Máy tính Giảng dạy"
          />
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
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
              Sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>

        <Card href="/tools/intake-vs-needs">
          <CardHeader
            icon={UtensilsCrossed}
            title="Lượng Ăn vs Nhu Cầu – Công cụ So sánh"
          />
          <CardContent>
            <p className="text-gray-700 leading-relaxed">
              So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính. Hiểu khoảng cách giữa 
              nhu cầu tính toán và lượng ăn thực tế, và các yếu tố thực tế tạo ra những khoảng cách này.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/tools/intake-vs-needs"
              className="inline-flex items-center text-base font-medium text-green-700 hover:text-green-900"
            >
              Sử dụng Công cụ <ArrowRight className="w-4 h-4 ml-1" aria-hidden="true" />
            </Link>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}

