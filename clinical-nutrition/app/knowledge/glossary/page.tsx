import { Breadcrumb } from "../../../components/Breadcrumb";
import { GlossaryContent } from "./GlossaryContent";

export const metadata = {
  title: "Thuật ngữ - Từ điển Dinh dưỡng Lâm sàng",
  description: "Từ điển các thuật ngữ dinh dưỡng lâm sàng được giải thích một cách đơn giản và dễ hiểu.",
};

export default function GlossaryPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb items={[{ label: "Kiến thức", href: "/knowledge" }, { label: "Thuật ngữ" }]} />
      
      <header className="space-y-4">
        <h1 className="heading-1">
          Từ điển Thuật ngữ Dinh dưỡng Lâm sàng
        </h1>
        <p className="text-body-lg text-gray-700">
          Tất cả thuật ngữ chuyên môn được giải thích bằng ngôn ngữ đơn giản, dễ hiểu. 
          Hãy tìm kiếm hoặc duyệt theo danh mục.
        </p>
      </header>

      <GlossaryContent />
    </main>
  );
}
