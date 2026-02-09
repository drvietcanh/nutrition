import type { Metadata } from "next";
import Link from "next/link";
import {
  BookOpen,
  Calculator,
  TrendingUp,
  Clock,
  Heart,
  ArrowRight,
  Activity,
  UtensilsCrossed,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/Card";
import { articles } from "../../lib/content/articles";
import { TOOL_CATALOG } from "../../config/tool-metadata";
import { RecentTools } from "./RecentTools";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Tổng quan về nền tảng giáo dục dinh dưỡng lâm sàng",
};

export default function DashboardPage() {
  const totalArticles = articles.length;
  const totalTools = TOOL_CATALOG.length;
  const popularArticles = articles
    .filter((a) => a.level === "foundation")
    .slice(0, 6);

  const stats = [
    {
      label: "Bài viết Kiến thức",
      value: totalArticles,
      icon: BookOpen,
      color: "blue",
      href: "/knowledge",
    },
    {
      label: "Công cụ Tương tác",
      value: totalTools,
      icon: Calculator,
      color: "green",
      href: "/tools",
    },
    {
      label: "Thực phẩm Việt Nam",
      value: "100+",
      icon: UtensilsCrossed,
      color: "amber",
      href: "/tools/food-database",
    },
  ];

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <header className="space-y-3">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Dashboard
        </h1>
        <p className="text-body-lg text-gray-600">
          Tổng quan về nền tảng giáo dục dinh dưỡng lâm sàng
        </p>
      </header>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          const colorClasses = {
            blue: "bg-blue-100 text-blue-600",
            green: "bg-green-100 text-green-600",
            amber: "bg-amber-100 text-amber-600",
          };

          return (
            <Link key={stat.label} href={stat.href}>
              <Card className="hover:border-blue-300 transition-colors">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[stat.color as keyof typeof colorClasses]}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Popular Articles */}
        <Card>
          <CardHeader
            icon={TrendingUp}
            title="Bài viết Phổ biến"
          />
          <CardContent>
            <div className="space-y-3">
              {popularArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={article.href}
                  className="block p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
                >
                  <h3 className="font-semibold text-gray-900 mb-1">
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

        {/* Quick Links */}
        <Card>
          <CardHeader
            icon={Activity}
            title="Liên kết Nhanh"
          />
          <CardContent>
            <div className="space-y-3">
              <Link
                href="/tools/energy-protein-calculator"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Máy tính Năng lượng & Protein
                  </p>
                  <p className="text-sm text-gray-600">
                    Tính toán nhu cầu dinh dưỡng
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="/tools/meal-planner"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Lập kế hoạch Bữa ăn
                  </p>
                  <p className="text-sm text-gray-600">
                    Tạo kế hoạch ăn uống hàng ngày
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="/tools/food-database"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-green-300 hover:bg-green-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Cơ sở Dữ liệu Thực phẩm
                  </p>
                  <p className="text-sm text-gray-600">
                    Tìm kiếm thông tin dinh dưỡng
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
              <Link
                href="/knowledge/myths-in-clinical-nutrition"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors"
              >
                <div>
                  <p className="font-medium text-gray-900">
                    Hiểu lầm & Quan niệm Sai
                  </p>
                  <p className="text-sm text-gray-600">
                    Tìm hiểu sự thật về dinh dưỡng
                  </p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Tools - Client Component */}
      <RecentTools />
    </main>
  );
}
