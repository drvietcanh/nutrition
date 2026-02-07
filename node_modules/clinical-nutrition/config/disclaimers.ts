export const DISCLAIMER_COPY = {
  global: {
    /**
     * Short banner text shown on every page in the root layout.
     * Must be concise but clearly state the educational, non‑clinical nature of the site.
     */
    bannerShort:
      "Chỉ dùng cho mục đích giáo dục – không dùng để chẩn đoán, quyết định điều trị, hoặc cấp cứu.",

    /**
     * Full global disclaimer that can be linked from the banner or footer.
     */
    full:
      "Trang web này chỉ dùng cho mục đích giáo dục. Không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng hoặc chăm sóc cấp cứu.",
  },
  tools: {
    /**
     * Shared heading for tool-level disclaimer blocks.
     */
    header: "Cách sử dụng các công cụ này an toàn",

    /**
     * Advisory copy that appears at the top of every tool page, reinforcing
     * that outputs are educational estimates and must be interpreted by a clinician.
     */
    advisory:
      "Các công cụ này được thiết kế để hỗ trợ tư duy lâm sàng và giáo dục. Chúng cung cấp ước tính và điểm thảo luận, không phải quyết định lâm sàng hay hướng dẫn điều trị.",

    /**
     * Section titles required on every tool page.
     */
    whenUsefulTitle: "Khi nào công cụ này hữu ích",
    whenNotAppropriateTitle: "Khi nào công cụ này KHÔNG phù hợp",

    /**
     * Generic guidance that can be overridden per-tool but should be present
     * by default to ensure no tool ships without basic usage boundaries.
     */
    whenUsefulGeneric:
      "Sử dụng công cụ này để khám phá cách các thay đổi trong thông tin lâm sàng (ví dụ: tuổi, cân nặng, lượng ăn) ảnh hưởng đến đánh giá nguy cơ và lập luận dinh dưỡng trong các trường hợp giả định hoặc đã ẩn danh.",
    whenNotAppropriateGeneric:
      "Không sử dụng công cụ này để chẩn đoán hoặc xác nhận chẩn đoán, kê đơn điều trị, hoặc xử lý cấp cứu thời gian thực. Luôn dựa vào chính sách địa phương, hướng dẫn, và phán đoán lâm sàng của bác sĩ có kinh nghiệm.",
  },
  templates: {
    /**
     * Reusable phrases for framing numerical results and outputs as advisory.
     */
    resultPhrasing: [
      "Đây là ước tính giáo dục dựa trên thông tin bạn đã nhập.",
      "Sử dụng kết quả này như điểm khởi đầu cho thảo luận, không phải như quyết định cuối cùng.",
      "Giá trị có thể khác với hướng dẫn địa phương hoặc quy trình của cơ sở.",
    ],
    /**
     * Phrases that reinforce clinician responsibility and non‑directive language.
     */
    clinicianResponsibility: [
      "Quyết định lâm sàng phải luôn được đưa ra bởi bác sĩ có trình độ sử dụng đầy đủ thông tin lâm sàng.",
      "Công cụ này không thay thế quy trình địa phương, đánh giá đa ngành, hoặc quyết định chung với bệnh nhân.",
    ],
    /**
     * Phrases to clearly exclude emergency or time-critical use.
     */
    notForEmergencyUse: [
      "Không sử dụng công cụ này cho phân loại cấp cứu hoặc quyết định điều trị cấp thời.",
      "Trong trường hợp cấp cứu, hãy tuân theo quy trình cấp cứu địa phương và tìm kiếm hỗ trợ y tế khẩn cấp.",
    ],
  },
} as const;

export type DisclaimerCopy = typeof DISCLAIMER_COPY;

// Backwards-compatible alias for the main global disclaimer text.
export const GLOBAL_DISCLAIMER = DISCLAIMER_COPY.global.full;

