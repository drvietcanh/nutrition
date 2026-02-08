import Link from "next/link";
import { BookOpen, Calculator, Mail, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-16">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" aria-hidden="true" />
              <span className="text-lg font-bold text-gray-900">
                Dinh dưỡng lâm sàng
              </span>
            </div>
            <p className="text-sm text-gray-600">
              Nền tảng giáo dục công cộng về dinh dưỡng lâm sàng và công cụ
              tương tác.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Điều hướng
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Kiến thức
                </Link>
              </li>
              <li>
                <Link
                  href="/tools"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Công cụ
                </Link>
              </li>
              <li>
                <Link
                  href="/getting-started"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bắt đầu
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Tài nguyên
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/knowledge/clinical-foundations"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Cơ sở Kiến thức
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/chronic-diseases"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Bệnh Mạn tính
                </Link>
              </li>
              <li>
                <Link
                  href="/knowledge/glossary"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors"
                >
                  Thuật ngữ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">
              Liên hệ
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:info@clinical-nutrition.edu.vn"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/drvietcanh/nutrition"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-2"
                >
                  <Github className="w-4 h-4" aria-hidden="true" />
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              © {currentYear} Dinh dưỡng lâm sàng. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <Link
                href="/disclaimer"
                className="hover:text-blue-600 transition-colors"
              >
                Tuyên bố Miễn trừ
              </Link>
              <Link
                href="/privacy"
                className="hover:text-blue-600 transition-colors"
              >
                Quyền Riêng tư
              </Link>
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-500 text-center">
            Nội dung chỉ mang tính giáo dục. Không thay thế tư vấn y tế chuyên
            nghiệp.
          </p>
        </div>
      </div>
    </footer>
  );
}
