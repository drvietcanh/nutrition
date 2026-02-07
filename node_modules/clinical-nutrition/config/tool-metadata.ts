export type ToolCategory = "screener" | "calculator" | "worksheet";

export interface ToolMetadata {
  id: string;
  title: string;
  category: ToolCategory;
  summary: string;
  educationalFocus: string;
}

export const TOOL_CATALOG: ToolMetadata[] = [
  {
    id: "malnutrition-screening",
    title: "Sàng lọc Suy Dinh dưỡng",
    category: "screener",
    summary: "Câu hỏi có cấu trúc để hỗ trợ nhận diện bệnh nhân có nguy cơ suy dinh dưỡng.",
    educationalFocus:
      "Dạy cách diễn giải tiêu chí sàng lọc suy dinh dưỡng phổ biến và giới hạn.",
  },
  {
    id: "energy-protein-calculator",
    title: "Máy tính Năng lượng & Protein",
    category: "calculator",
    summary: "Ước tính nhu cầu năng lượng và protein hàng ngày cho các tình huống giáo dục.",
    educationalFocus:
      "Giúp người học hiểu cách đặc điểm bệnh nhân ảnh hưởng đến nhu cầu ước tính.",
  },
  {
    id: "intake-assessment",
    title: "Bảng Đánh giá Lượng Ăn",
    category: "worksheet",
    summary: "Hướng dẫn đánh giá có hệ thống lượng ăn qua đường miệng/ống thông/tĩnh mạch theo thời gian.",
    educationalFocus:
      "Hỗ trợ tư duy có cấu trúc về mức độ đầy đủ của lượng ăn so với nhu cầu ước tính.",
  },
];

