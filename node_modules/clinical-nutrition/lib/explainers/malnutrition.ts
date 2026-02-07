import type { RiskCategory } from "../screeners/nrs2002";

export interface InterpretationBlock {
  /**
   * Neutral explanation of what this pattern of findings usually means
   * in everyday clinical practice, phrased for education.
   */
  whatItUsuallyMeans: string[];
  /**
   * Typical next steps that clinicians might consider after a concerning
   * screening pattern, described as possibilities rather than directives.
   */
  whatCliniciansOftenConsiderNext: string[];
  /**
   * Common pitfalls and confounders that can make screening results
   * misleading (e.g., oedema, fluid shifts, acute inflammation).
   */
  commonPitfalls: string[];
}

/**
 * Build an educational interpretation block for a malnutrition risk
 * screening result. This function is deliberately qualitative and
 * non-directive: it does not recommend specific actions.
 */
export function buildMalnutritionInterpretation(
  riskCategory: RiskCategory
): InterpretationBlock {
  if (riskCategory === "low") {
    return {
      whatItUsuallyMeans: [
        "Trong thực hành lâm sàng, một mẫu sàng lọc nguy cơ thấp hơn thường có nghĩa là không có dấu hiệu cảnh báo mạnh ngay lập tức cho giảm cân gần đây hoặc vấn đề lượng ăn vào kéo dài.",
        "Nó không chứng minh rằng dinh dưỡng là đầy đủ, nhưng gợi ý rằng các vấn đề khác có thể cấp bách hơn để giải quyết trước.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Tiếp tục quan sát cân nặng, lượng ăn vào, và tình trạng chức năng theo thời gian.",
        "Sàng lọc lại nếu tình huống lâm sàng thay đổi, chẳng hạn như bệnh mới hoặc giảm cảm giác ngon miệng.",
        "Xem xét tiền sử dinh dưỡng chi tiết hơn nếu có mối quan tâm bổ sung không được nắm bắt bởi công cụ sàng lọc.",
      ],
      commonPitfalls: [
        "Dựa vào kết quả sàng lọc một mình mà không hỏi về thay đổi gần đây trong cảm giác ngon miệng, triệu chứng, hoặc suy giảm chức năng.",
        "Bỏ lỡ nguy cơ ở những người đã có thay đổi rất dần dần trong một khoảng thời gian dài hoặc những người không thể dễ dàng báo cáo tiền sử của họ.",
      ],
    };
  }

  if (riskCategory === "high") {
    return {
      whatItUsuallyMeans: [
        "Trong thực hành lâm sàng, một mẫu sàng lọc nguy cơ cao hơn thường được đối xử như một tín hiệu rằng dinh dưỡng có thể là một đóng góp quan trọng cho nguy cơ tổng thể.",
        "Nó không xác nhận suy dinh dưỡng, nhưng nó thường khiến các bác sĩ lâm sàng xem xét kỹ hơn về lượng ăn vào, tiền sử cân nặng, và chức năng.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Sắp xếp một đánh giá dinh dưỡng đầy đủ hơn, nơi có sẵn, để khám phá nguyên nhân, mức độ nghiêm trọng, và hỗ trợ tiềm năng.",
        "Xem xét lại thuốc, triệu chứng, và bệnh tiềm ẩn để hiểu tại sao lượng ăn vào hoặc cân nặng đã thay đổi.",
        "Kiểm tra hướng dẫn địa phương hoặc quy trình mô tả cách phản ứng với kết quả sàng lọc dinh dưỡng dương tính.",
      ],
      commonPitfalls: [
        "Giải thích một mẫu nguy cơ cao hơn như một kế hoạch điều trị tự nó, không có đánh giá lâm sàng rộng hơn.",
        "Bỏ qua các yếu tố gây nhiễu như phù, hồi sức dịch, hoặc cổ trướng thể tích lớn, có thể che giấu giảm cân.",
        "Bỏ qua ảnh hưởng của viêm cấp tính hoặc nhiễm trùng, có thể thay đổi cân nặng và lượng ăn vào mà không phản ánh tình trạng dài hạn.",
      ],
    };
  }

  // "increased" or "unknown" are handled together with cautious language.
  if (riskCategory === "increased") {
    return {
      whatItUsuallyMeans: [
        "Trong thực hành lâm sàng, một mẫu 'nguy cơ tăng' thường được đối xử như một tín hiệu sớm rằng chú ý gần hơn đến dinh dưỡng có thể hữu ích.",
        "Nó gợi ý rằng có một số đặc điểm đáng quan tâm, nhưng toàn bộ bức tranh vẫn cần được xác nhận với chi tiết hơn.",
      ],
      whatCliniciansOftenConsiderNext: [
        "Làm rõ quá trình thời gian của giảm cân và giảm lượng ăn vào.",
        "Tìm kiếm các đóng góp có thể đảo ngược, chẳng hạn như buồn nôn, đau, hoặc khó khăn tiếp cận thực phẩm.",
        "Thảo luận các phát hiện với đồng nghiệp (ví dụ, chuyên gia dinh dưỡng hoặc bác sĩ lâm sàng cao cấp) nếu có sẵn.",
      ],
      commonPitfalls: [
        "Giả định rằng 'nguy cơ tăng' tự động có nghĩa là suy dinh dưỡng đang hiện diện.",
        "Quên kiểm tra lại thông tin khi tiền sử mới trở nên có sẵn hoặc khi triệu chứng thay đổi.",
      ],
    };
  }

  return {
    whatItUsuallyMeans: [
      "Khi các mảnh thông tin quan trọng bị thiếu, trở nên khó khăn để nói nhiều về nguy cơ dinh dưỡng ngay cả trong bối cảnh giảng dạy.",
      "Trong thực hành, các bác sĩ lâm sàng thường cố gắng thu thập chi tiết hơn trước khi giải thích kết quả.",
    ],
    whatCliniciansOftenConsiderNext: [
      "Làm rõ khoảng trống trong tiền sử, chẳng hạn như khung thời gian cho thay đổi cân nặng hoặc lý do cho giảm lượng ăn vào.",
      "Hỏi về triệu chứng hoặc yếu tố xã hội có thể không được nắm bắt trong các câu hỏi sàng lọc ban đầu.",
    ],
    commonPitfalls: [
      "Giải thích quá mức một kết quả sàng lọc không đầy đủ như thể nó là dứt khoát.",
      "Không nhận ra rằng dữ liệu thiếu có thể che giấu các vấn đề quan trọng về mặt lâm sàng.",
    ],
  };
}

