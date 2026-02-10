import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  ArrowRight,
  Activity,
  UtensilsCrossed,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/Card";
import { articles } from "../../lib/content/articles";
import { TOOL_CATALOG, type ToolMetadata } from "../../config/tool-metadata";
import { RecentTools } from "./RecentTools";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Trung tâm công cụ và kiến thức dinh dưỡng lâm sàng",
};

const FEATURED_TOOL_IDS = [
  "energy-protein-calculator",
  "malnutrition-screening",
  "intake-assessment",
  "meal-planner",
] as const;

const categoryStyles: Record<
  ToolMetadata["category"],
  { iconBg: string; pillBg: string; pillText: string }
> = {
  screener: {
    iconBg: "bg-amber-100 text-amber-600",
    pillBg: "bg-amber-50",
    pillText: "text-amber-700",
  },
  calculator: {
    iconBg: "bg-blue-100 text-blue-600",
    pillBg: "bg-blue-50",
    pillText: "text-blue-700",
  },
  worksheet: {
    iconBg: "bg-green-100 text-green-600",
    pillBg: "bg-green-50",
    pillText: "text-green-700",
  },
};

export default function DashboardPage() {
  const totalArticles = articles.length;
  const totalTools = TOOL_CATALOG.length;
  const popularArticles = articles
    .filter((a) => a.level === "foundation")
    .slice(0, 4);

  const featuredTools: ToolMetadata[] = FEATURED_TOOL_IDS.map((id) => {
    return TOOL_CATALOG.find((t) => t.id === id)!;
  }).filter(Boolean);

  const stats = [
    {
      label: "Bài viết Kiến thức",
      value: totalArticles,
      icon: BookOpen,
      href: "/knowledge",
    },
    {
      label: "Công cụ Tương tác",
      value: totalTools,
      icon: Calculator,
      href: "/tools",
    },
    {
      label: "Thực phẩm Việt Nam",
      value: "100+",
      icon: UtensilsCrossed,
      href: "/tools/food-database",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-10 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      {/* Hero */}
      <header className="space-y-4">
        <p className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
          Trung tâm hành động · Công cụ & Kiến thức dinh dưỡng lâm sàng
        </p>
        <div className="space-y-3">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Bắt đầu với công cụ dinh dưỡng
          </h1>
          <p className="text-body-lg text-gray-600 max-w-2xl">
            Truy cập nhanh các công cụ tính toán, lập kế hoạch và cơ sở dữ liệu
            để minh hoạ khái niệm dinh dưỡng lâm sàng trong thực hành.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span>
            {totalTools} công cụ · {totalArticles} bài viết kiến thức
          </span>
          <span className="hidden sm:inline text-gray-300">•</span>
          <span className="sm:inline">
            Thiết kế cho mục đích giáo dục, không thay thế tư vấn điều trị.
          </span>
        </div>
      </header>

      {/* Primary tools */}
      <section className="space-y-4">
        <div className="flex items-center justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Công cụ chính
            </h2>
            <p className="text-sm text-gray-600">
              Các công cụ bạn sẽ dùng thường xuyên trong giảng dạy và thực hành.
            </p>
          </div>
          <Link
            href="/tools"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            Xem tất cả
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredTools.map((tool) => {
            const style = categoryStyles[tool.category];

            return (
              <Link key={tool.id} href={`/tools/${tool.id}`}>
                <Card className="h-full transition-colors hover:border-blue-300 hover:bg-blue-50/40">
                  <div className="flex items-start gap-3">
                    <div
                      className={`mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl ${style.iconBg}`}
                    >
                      <Calculator className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-900">
                          {tool.title}
                        </h3>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${style.pillBg} ${style.pillText}`}
                        >
                          {tool.category === "screener" && "Sàng lọc"}
                          {tool.category === "calculator" && "Máy tính"}
                          {tool.category === "worksheet" && "Bảng làm việc"}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {tool.summary}
                      </p>
                      <p className="inline-flex items-center text-sm font-medium text-blue-600">
                        Mở công cụ
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent tools */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold text-gray-900">
          Tiếp tục từ lần trước
        </h2>
        <p className="text-sm text-gray-600">
          Mở lại nhanh các công cụ bạn vừa sử dụng gần đây.
        </p>
        <RecentTools />
      </section>

      {/* Knowledge & quick links */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Suggested articles */}
        <Card>
          <CardHeader icon={TrendingUp} title="Kiến thức nên xem" />
          <CardContent>
            <div className="space-y-3">
              {popularArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className="block rounded-lg px-3 py-2 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 mb-0.5">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {article.description}
                  </p>
                </Link>
              ))}
            </div>
            <div className="mt-4">
              <Link
                href="/knowledge"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium text-sm"
              >
                Xem tất cả bài viết <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Other links & overview */}
        <Card>
          <CardHeader icon={Activity} title="Liên kết & tổng quan" />
          <CardContent>
            <div className="space-y-3">
              <Link
                href="/tools/food-database"
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Cơ sở Dữ liệu Thực phẩm Việt Nam
                  </p>
                  <p className="text-sm text-gray-600">
                    Tra cứu nhanh thành phần dinh dưỡng theo thực phẩm.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>

              <Link
                href="/knowledge/myths-in-clinical-nutrition"
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Hiểu lầm trong dinh dưỡng lâm sàng
                  </p>
                  <p className="text-sm text-gray-600">
                    Gỡ bỏ các quan niệm sai thường gặp.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>

              <Link
                href="/knowledge/why-intake-falls-short"
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Vì sao lượng ăn thường không đủ?
                  </p>
                  <p className="text-sm text-gray-600">
                    Hiểu các rào cản trong thực tế lâm sàng.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>

              <Link
                href="/knowledge/why-no-universal-number"
                className="flex items-center justify-between rounded-lg border border-gray-200 px-3 py-2 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Vì sao không có một con số nhu cầu duy nhất?
                  </p>
                  <p className="text-sm text-gray-600">
                    Cách hiểu đúng về khoảng nhu cầu dinh dưỡng.
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-sm text-gray-600">
                {stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <Link
                      key={stat.label}
                      href={stat.href}
                      className="flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 hover:bg-gray-100 transition-colors"
                    >
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm">
                        <Icon className="h-4 w-4 text-gray-500" />
                      </span>
                      <div>
                        <p className="text-xs text-gray-500">{stat.label}</p>
                        <p className="text-sm font-semibold text-gray-900">
                          {stat.value}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
