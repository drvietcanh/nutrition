import type { Metadata } from "next";
import Link from "next/link";
import { Activity, Heart, Droplet, Pill } from "lucide-react";
import { Card, CardHeader, CardContent, CardFooter } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh mạn tính",
  description: "Hướng dẫn giáo dục về dinh dưỡng trong các bệnh mạn tính phổ biến như tăng huyết áp, đái tháo đường, bệnh thận mạn, suy tim, và nhiều hơn nữa.",
};

export default function ChronicDiseasesPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[
        { label: "Cơ sở Kiến thức", href: "/knowledge" },
        { label: "Dinh dưỡng trong Bệnh mạn tính" }
      ]} />
      
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Bệnh mạn tính
          </h1>
        </div>
        <p className="text-body-lg">
          Hướng dẫn giáo dục về dinh dưỡng trong các bệnh mạn tính phổ biến. Mỗi bài viết bao gồm các nguyên tắc dinh dưỡng
          dựa trên bằng chứng, điều chỉnh theo giai đoạn bệnh, quản lý biến chứng, và theo dõi.
        </p>
      </header>

      <section className="space-y-6">
        <Card href="/knowledge/hypertension-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Tăng huyết áp"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về DASH diet, quản lý natri và kali, và các nguyên tắc dinh dưỡng
              dựa trên bằng chứng để kiểm soát tăng huyết áp.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/hypertension-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/diabetes-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Đái tháo đường"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về carbohydrate counting, quản lý đường huyết, và các nguyên tắc dinh dưỡng
              dựa trên bằng chứng để kiểm soát đái tháo đường type 1 và type 2.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/diabetes-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/heart-failure-nutrition">
          <CardHeader
            icon={Heart}
            title="Dinh dưỡng trong Suy tim"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về quản lý natri, dịch, và cân nặng trong suy tim. Bao gồm điều chỉnh theo
              mức độ suy tim (NYHA class) và quản lý biến chứng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/heart-failure-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/dyslipidemia-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Rối loạn Lipid máu"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về quản lý chất béo, cholesterol, và triglycerides. Bao gồm chế độ ăn
              lành mạnh cho tim mạch và điều chỉnh theo loại rối loạn lipid.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/dyslipidemia-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/ckd-nutrition">
          <CardHeader
            icon={Droplet}
            title="Dinh dưỡng trong Bệnh thận mạn (CKD)"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng trong bệnh thận mạn theo giai đoạn. Bao gồm quản lý protein,
              phosphorus, potassium, natri, và dịch để làm chậm tiến triển và quản lý biến chứng.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/ckd-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/dialysis-nutrition">
          <CardHeader
            icon={Droplet}
            title="Dinh dưỡng trong Lọc máu"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng cho bệnh nhân lọc máu (hemodialysis và peritoneal dialysis).
              Bao gồm điều chỉnh protein, phosphorus, potassium, và dịch.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/dialysis-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/liver-disease-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Bệnh gan mạn"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng trong bệnh gan mạn (viêm gan, xơ gan). Bao gồm quản lý protein,
              natri, dịch, và vi chất, cũng như quản lý cổ trướng và bệnh não gan.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/liver-disease-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/ibd-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong Bệnh viêm ruột (IBD)"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng trong Crohn's disease và Ulcerative colitis. Bao gồm quản lý
              năng lượng, protein, vi chất, và điều chỉnh theo đợt cấp và thời kỳ ổn định.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/ibd-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/copd-nutrition">
          <CardHeader
            icon={Activity}
            title="Dinh dưỡng trong COPD"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục về dinh dưỡng trong bệnh phổi tắc nghẽn mạn tính. Bao gồm quản lý năng lượng,
              protein, và điều chỉnh carbohydrate/chất béo để giảm gánh hô hấp.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/copd-nutrition"
              className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900"
            >
              Đọc thêm →
            </Link>
          </CardFooter>
        </Card>

        <Card href="/knowledge/cancer-nutrition">
          <CardHeader
            icon={Pill}
            title="Dinh dưỡng trong Ung thư (Tổng quan)"
          />
          <CardContent>
            <p className="text-body">
              Hướng dẫn giáo dục tổng quan về dinh dưỡng trong ung thư. Bao gồm quản lý năng lượng, protein,
              vi chất, quản lý tác dụng phụ điều trị, và hỗ trợ điều trị.
            </p>
          </CardContent>
          <CardFooter>
            <Link
              href="/knowledge/cancer-nutrition"
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
