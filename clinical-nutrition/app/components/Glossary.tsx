"use client";

import { useState } from "react";
import Link from "next/link";
import { Info, Search } from "lucide-react";

export interface GlossaryTerm {
  term: string;
  definition: string;
  simpleExplanation: string;
  example?: string;
  category: "basic" | "calculation" | "assessment" | "disease";
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "năng lượng (Energy)",
    definition: "Lượng calo cơ thể cần để hoạt động",
    simpleExplanation: "năng lượng là nhiên liệu cho cơ thể, giống như xăng cho xe. Chúng ta đo năng lượng bằng đơn vị kcal (kilocalo).",
    example: "Một người trung bình cần khoảng 2000 kcal mỗi ngày để duy trì hoạt động bình thường.",
    category: "basic",
  },
  {
    term: "Protein",
    definition: "Chất dinh dưỡng cần thiết để xây dựng và sửa chữa cơ thể",
    simpleExplanation: "Protein giống như những viên gạch xây dựng cơ thể. Chúng ta cần protein để cơ bắp, da, tóc và các bộ phận khác của cơ thể hoạt động tốt.",
    example: "Thịt, cá, trứng, đậu đều chứa nhiều protein. Một người 70kg cần khoảng 56-70g protein mỗi ngày.",
    category: "basic",
  },
  {
    term: "BEE (Basal energy Expenditure)",
    definition: "năng lượng cơ bản - lượng năng lượng cơ thể cần khi nghỉ ngơi hoàn toàn",
    simpleExplanation: "Đây là lượng năng lượng cơ thể bạn cần khi bạn chỉ nằm yên, không làm gì cả - không ăn, không vận động, chỉ để tim đập, phổi thở, và các cơ quan hoạt động.",
    example: "Một người 70kg có thể cần khoảng 1500-1700 kcal mỗi ngày chỉ để duy trì các chức năng cơ bản.",
    category: "calculation",
  },
  {
    term: "BMR (Basal metabolic Rate)",
    definition: "Tỷ lệ trao đổi chất cơ bản - tương tự BEE",
    simpleExplanation: "BMR và BEE về cơ bản là giống nhau - đều là lượng năng lượng cơ thể cần khi nghỉ ngơi hoàn toàn.",
    category: "calculation",
  },
  {
    term: "Nhu cầu ước tính",
    definition: "Lượng dinh dưỡng cần thiết được tính toán dựa trên các công thức",
    simpleExplanation: "Đây không phải là số chính xác, mà là một khoảng giá trị. Ví dụ: '1800-2200 kcal/ngày' có nghĩa là nhu cầu có thể nằm trong khoảng này, tùy thuộc vào nhiều yếu tố.",
    example: "Thay vì nói 'bạn cần chính xác 2000 kcal', chúng ta nói 'bạn cần khoảng 1800-2200 kcal'.",
    category: "calculation",
  },
  {
    term: "Suy dinh dưỡng (Malnutrition)",
    definition: "Tình trạng thiếu hoặc thừa dinh dưỡng",
    simpleExplanation: "Suy dinh dưỡng không chỉ có nghĩa là thiếu ăn. Nó có thể là thiếu dinh dưỡng (không đủ), hoặc thừa dinh dưỡng (quá nhiều), hoặc mất cân bằng dinh dưỡng.",
    example: "Một người có thể bị suy dinh dưỡng nếu họ ăn quá ít protein, hoặc quá nhiều đường, hoặc thiếu vitamin.",
    category: "assessment",
  },
  {
    term: "NRS-2002",
    definition: "Công cụ sàng lọc suy dinh dưỡng được sử dụng rộng rãi",
    simpleExplanation: "Đây là một bộ câu hỏi đơn giản giúp xác định xem một người có nguy cơ bị suy dinh dưỡng không. Nó hỏi về cân nặng, lượng ăn, và tình trạng bệnh.",
    category: "assessment",
  },
  {
    term: "PG-SGA",
    definition: "Công cụ đánh giá toàn diện về dinh dưỡng",
    simpleExplanation: "Đây là một công cụ phức tạp hơn NRS-2002, được sử dụng để đánh giá chi tiết hơn về tình trạng dinh dưỡng của một người.",
    category: "assessment",
  },
  {
    term: "BMI (Body mass index)",
    definition: "Chỉ số khối cơ thể - một cách đo cân nặng so với chiều cao",
    simpleExplanation: "BMI giúp xác định xem một người có cân nặng phù hợp với chiều cao không. Công thức: cân nặng (kg) chia cho bình phương chiều cao (m).",
    example: "Một người cao 1.7m, nặng 70kg có BMI = 70 / (1.7 x 1.7) = 24.2, được coi là bình thường.",
    category: "assessment",
  },
  {
    term: "Lượng ăn vào (Intake)",
    definition: "Lượng thức ăn và dinh dưỡng thực tế mà một người ăn vào",
    simpleExplanation: "Đây là lượng thực tế mà người bệnh ăn được, không phải lượng được kê đơn hoặc chuẩn bị. Thường thì lượng ăn vào thấp hơn lượng được kê đơn.",
    example: "Bệnh viện có thể chuẩn bị 2000 kcal, nhưng người bệnh chỉ ăn được 1200 kcal thực tế.",
    category: "assessment",
  },
  {
    term: "Hội chứng tái cho ăn (Refeeding syndrome)",
    definition: "Tình trạng nguy hiểm khi cho ăn quá nhanh sau khi nhịn ăn lâu",
    simpleExplanation: "Khi một người nhịn ăn lâu (nhiều ngày), cơ thể họ thay đổi cách sử dụng năng lượng. Nếu đột ngột cho ăn quá nhiều, có thể gây ra các vấn đề nghiêm trọng về tim và các cơ quan khác.",
    example: "Một người nhịn ăn 5 ngày không nên đột ngột ăn 2000 kcal, mà nên bắt đầu từ 800-1000 kcal và tăng dần.",
    category: "disease",
  },
  {
    term: "Chỉ số Đường huyết (GI - Glycemic index)",
    definition: "Con số đo tốc độ thực phẩm làm tăng đường huyết",
    simpleExplanation: "GI là một con số từ 0-100 cho biết tốc độ một loại thực phẩm làm tăng đường huyết. GI thấp (0-55) = tăng chậm, GI cao (70+) = tăng nhanh.",
    example: "Bánh mì trắng có GI cao (75), đường huyết tăng nhanh. Yến mạch có GI thấp (55), đường huyết tăng chậm và ổn định hơn.",
    category: "basic",
  },
  {
    term: "Tải lượng Đường huyết (GL - Glycemic load)",
    definition: "Tính cả tốc độ (GI) và lượng carbohydrate trong khẩu phần",
    simpleExplanation: "GL tính đến cả tốc độ (GI) và lượng carbohydrate bạn thực sự ăn. GL = (GI × Lượng carb) ÷ 100. GL hữu ích hơn GI vì tính đến cả lượng ăn vào.",
    example: "Dưa hấu có GI cao (72) nhưng ít carb (6g), nên GL chỉ 4 (thấp). Một bát cơm có GI 73 nhưng nhiều carb (45g), nên GL là 33 (cao).",
    category: "basic",
  },
  {
    term: "Trans fat (Chất béo chuyển hóa)",
    definition: "Loại chất béo xấu nhất, nên tránh hoàn toàn",
    simpleExplanation: "Trans fat được tạo ra khi dầu thực vật được xử lý để cứng hơn. Nó làm tăng cholesterol xấu, giảm cholesterol tốt, và tăng nguy cơ bệnh tim. Có trong thực phẩm chế biến sẵn, đồ chiên rán.",
    example: "Bánh quy, bánh ngọt, khoai tây chiên, margarine cứng thường chứa trans fat. Nên đọc nhãn và tránh các sản phẩm có 'partially hydrogenated oil'.",
    category: "basic",
  },
  {
    term: "Chất xơ Hòa tan",
    definition: "Loại chất xơ hòa tan trong nước, tạo thành gel",
    simpleExplanation: "Chất xơ hòa tan hòa tan trong nước và tạo thành gel trong ruột. Giúp giảm cholesterol, ổn định đường huyết, và cảm thấy no lâu hơn.",
    example: "Yến mạch, đậu, táo, cà rốt chứa nhiều chất xơ hòa tan. đặc biệt tốt cho người đái tháo đường và rối loạn lipid máu.",
    category: "basic",
  },
  {
    term: "Chất xơ Không hòa tan",
    definition: "Loại chất xơ không hòa tan trong nước, giúp thức ăn di chuyển nhanh",
    simpleExplanation: "Chất xơ không hòa tan không hòa tan trong nước, giúp thức ăn di chuyển nhanh qua hệ tiêu hóa. Giúp ngăn ngừa táo bón và giữ sức khỏe đường ruột.",
    example: "Gạo lứt, bánh mì nguyên cám, rau xanh, các loại hạt chứa nhiều chất xơ không hòa tan.",
    category: "basic",
  },
  {
    term: "Natri (Sodium)",
    definition: "Khoáng chất trong muối, cần thiết nhưng quá nhiều gây hại",
    simpleExplanation: "Natri là một khoáng chất trong muối ăn. cơ thể cần natri để hoạt động, nhưng quá nhiều natri có thể gây tăng huyết áp, suy tim, bệnh thận. Hầu hết natri đến từ thực phẩm chế biến sẵn.",
    example: "1 thìa cà phê muối chứa khoảng 2,300mg natri. Khuyến nghị: &lt; 2,300mg/ngày cho người khỏe mạnh, &lt; 2,000mg/ngày cho người tăng huyết áp/suy tim.",
    category: "basic",
  },
];

export function GlossaryTermComponent({ term, children }: { term: string; children: React.ReactNode }) {
  const glossaryTerm = glossaryTerms.find((t) => t.term.toLowerCase().includes(term.toLowerCase()) || term.toLowerCase().includes(t.term.toLowerCase()));
  
  if (!glossaryTerm) return <>{children}</>;

  return (
    <Tooltip term={glossaryTerm.term} definition={glossaryTerm.simpleExplanation}>
      {children}
    </Tooltip>
  );
}

// Simple tooltip component
function Tooltip({ term, definition, children }: { term: string; definition: string; children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <span
        className="underline decoration-dotted decoration-blue-500 cursor-help text-blue-700"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        tabIndex={0}
        aria-describedby={`tooltip-${term.replace(/\s+/g, '-')}`}
      >
        {children}
      </span>
      {isOpen && (
        <div
          id={`tooltip-${term.replace(/\s+/g, '-')}`}
          className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-72 p-3 bg-gray-900 text-white text-sm rounded-lg shadow-lg z-50 pointer-events-none"
          role="tooltip"
        >
          <div className="flex items-start gap-2">
            <Info className="w-4 h-4 text-blue-300 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <div>
              <div className="font-semibold mb-1">{term}</div>
              <div className="text-gray-200">{definition}</div>
            </div>
          </div>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
            <div className="w-2 h-2 bg-gray-900 transform rotate-45"></div>
          </div>
        </div>
      )}
    </span>
  );
}
