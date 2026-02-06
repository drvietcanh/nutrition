import type { EnergyProteinRange } from "./energyProtein";

export type CoverageCategory = "much_lower" | "somewhat_lower" | "approximate" | "higher" | "unknown";

export interface IntakeInputs {
  /** Approximate daily energy actually received (kcal/day). */
  energyKcalPerDay: number | null;
  /** Approximate daily protein actually received (g/day). */
  proteinGramsPerDay: number | null;
  /** Optional number of days over which intake was observed (for trends). */
  daysObserved: number | null;
}

export interface NeedsVsIntakeResult {
  energyMidpoint: number | null;
  proteinMidpoint: number | null;
  energyCoveragePercent: number | null;
  proteinCoveragePercent: number | null;
  /** Signed daily difference between intake and midpoint of needs (kcal/day). */
  energyGapKcalPerDay: number | null;
  /** Signed daily difference between intake and midpoint of needs (g/day). */
  proteinGapGramsPerDay: number | null;
  energyCategory: CoverageCategory;
  proteinCategory: CoverageCategory;
  missingFields: string[];
  warnings: string[];
  /** Neutral explanations of how clinicians might think about this pattern. */
  interpretation: string[];
}

/**
 * Compare an educational needs range with an approximate intake and build a
 * qualitative description of the "gap". All values are approximate and
 * intended only for teaching.
 */
export function compareNeedsAndIntake(
  needs: EnergyProteinRange,
  intake: IntakeInputs
): NeedsVsIntakeResult {
  const missingFields: string[] = [];
  const warnings: string[] = [];
  const interpretation: string[] = [];

  const energyMidpoint =
    needs.energyKcalPerDay != null
      ? (needs.energyKcalPerDay.lower + needs.energyKcalPerDay.upper) / 2
      : null;
  const proteinMidpoint =
    needs.proteinGramsPerDay != null
      ? (needs.proteinGramsPerDay.lower + needs.proteinGramsPerDay.upper) / 2
      : null;

  if (energyMidpoint == null) {
    missingFields.push("estimatedEnergyRange");
  }
  if (proteinMidpoint == null) {
    missingFields.push("estimatedProteinRange");
  }
  if (intake.energyKcalPerDay == null) {
    missingFields.push("actualEnergyIntake");
  }
  if (intake.proteinGramsPerDay == null) {
    missingFields.push("actualProteinIntake");
  }

  let energyCoveragePercent: number | null = null;
  let proteinCoveragePercent: number | null = null;

  if (energyMidpoint && intake.energyKcalPerDay != null) {
    energyCoveragePercent = Math.round(
      (intake.energyKcalPerDay / energyMidpoint) * 100
    );
  }
  if (proteinMidpoint && intake.proteinGramsPerDay != null) {
    proteinCoveragePercent = Math.round(
      (intake.proteinGramsPerDay / proteinMidpoint) * 100
    );
  }

  let energyGapKcalPerDay: number | null = null;
  let proteinGapGramsPerDay: number | null = null;

  if (energyMidpoint && intake.energyKcalPerDay != null) {
    energyGapKcalPerDay = intake.energyKcalPerDay - energyMidpoint;
  }
  if (proteinMidpoint && intake.proteinGramsPerDay != null) {
    proteinGapGramsPerDay = intake.proteinGramsPerDay - proteinMidpoint;
  }

  const energyCategory = categorizeCoverage(energyCoveragePercent);
  const proteinCategory = categorizeCoverage(proteinCoveragePercent);

  if (intake.daysObserved == null || intake.daysObserved <= 0) {
    warnings.push(
      "Lượng ăn vào được nhập mà không có khoảng thời gian quan sát rõ ràng; trong thực hành, các bác sĩ lâm sàng thường xem xét các mẫu trong vài ngày."
    );
  } else if (intake.daysObserved < 3) {
    interpretation.push(
      "Ảnh chụp này chỉ bao gồm một khoảng thời gian ngắn; trong thực hành, quan sát lặp lại trong vài ngày cho một bức tranh đáng tin cậy hơn."
    );
  } else {
    interpretation.push(
      "Xem xét lượng ăn vào trong vài ngày có thể giúp phân biệt một sự giảm ngắn hạn với một khoảng cách dai dẳng giữa nhu cầu và lượng ăn vào."
    );
  }

  buildEnergyInterpretation(energyCategory, interpretation);
  buildProteinInterpretation(proteinCategory, interpretation);

  if (energyCoveragePercent != null && (energyCoveragePercent < 50 || energyCoveragePercent > 150)) {
    warnings.push(
      "Khoảng cách giữa nhu cầu ước tính và lượng ăn vào là lớn; trong thực hành, các bác sĩ lâm sàng sẽ xác nhận dữ liệu và xem xét liệu nó có phản ánh vấn đề đo lường hoặc mối quan tâm lâm sàng thực sự không."
    );
  }

  if (missingFields.length > 0) {
    warnings.push(
      "Một số thông tin bị thiếu hoặc gần đúng; các so sánh này chỉ dành cho giáo dục và không nên được sử dụng cho quyết định cá nhân."
    );
  }

  return {
    energyMidpoint,
    proteinMidpoint,
    energyCoveragePercent,
    proteinCoveragePercent,
    energyGapKcalPerDay,
    proteinGapGramsPerDay,
    energyCategory,
    proteinCategory,
    missingFields,
    warnings,
    interpretation,
  };
}

function categorizeCoverage(
  coveragePercent: number | null
): CoverageCategory {
  if (coveragePercent == null || !Number.isFinite(coveragePercent)) {
    return "unknown";
  }
  if (coveragePercent < 70) return "much_lower";
  if (coveragePercent < 90) return "somewhat_lower";
  if (coveragePercent <= 120) return "approximate";
  return "higher";
}

function buildEnergyInterpretation(
  category: CoverageCategory,
  lines: string[]
) {
  if (category === "unknown") {
    lines.push(
      "Vì thông tin chính về nhu cầu hoặc lượng ăn vào bị thiếu, khó khăn để nói nhiều về khoảng cách năng lượng ngay cả trong bối cảnh giảng dạy."
    );
    return;
  }

  if (category === "much_lower") {
    lines.push(
      "Khi lượng ăn vào năng lượng ước tính rõ ràng dưới phạm vi nhu cầu giáo dục, các bác sĩ lâm sàng thường hỏi tại sao lượng ăn vào thấp (ví dụ, triệu chứng, thủ thuật, hoặc vấn đề tiếp cận) trước khi quyết định thay đổi gì."
    );
    return;
  }

  if (category === "somewhat_lower") {
    lines.push(
      "Một thiếu hụt năng lượng vừa phải trong vài ngày có thể khiến theo dõi và thảo luận gần hơn, nhưng không tự động có nghĩa là lượng ăn vào phải được tăng lên vào một ngày cụ thể."
    );
    return;
  }

  if (category === "approximate") {
    lines.push(
      "Khi lượng ăn vào ước tính rộng rãi trong cùng phạm vi như nhu cầu giáo dục, sự chú ý thường chuyển sang khả năng dung nạp, phản ứng chuyển hóa, và xu hướng dài hạn thay vì theo đuổi con số chính xác."
    );
    return;
  }

  if (category === "higher") {
    lines.push(
      "Nếu lượng ăn vào ước tính liên tục trên phạm vi nhu cầu giáo dục, các bác sĩ lâm sàng có thể kiểm tra các dấu hiệu không dung nạp hoặc cho ăn quá mức, đồng thời xác nhận rằng ước tính nhu cầu cơ bản là phù hợp."
    );
  }
}

function buildProteinInterpretation(
  category: CoverageCategory,
  lines: string[]
) {
  if (category === "unknown") {
    lines.push(
      "Lượng ăn vào protein không rõ ràng làm khó khăn để nhận xét về tính đầy đủ, đặc biệt ở bệnh nhân cao tuổi hoặc bệnh mạn tính nơi protein thường xứng đáng được chú ý đặc biệt."
    );
    return;
  }

  if (category === "much_lower" || category === "somewhat_lower") {
    lines.push(
      "Khi lượng ăn vào protein rơi xuống dưới đáng kể so với ước tính giáo dục, các bác sĩ lâm sàng thường xem xét liệu triệu chứng, lựa chọn thực phẩm, hoặc đường dùng có hạn chế tiếp cận các lựa chọn giàu protein không."
    );
    return;
  }

  if (category === "approximate") {
    lines.push(
      "Lượng ăn vào protein trong phạm vi tương tự như ước tính giáo dục gợi ý rằng các yếu tố khác (như hoạt động, viêm, và chức năng) sẽ định hình kết quả dài hạn."
    );
    return;
  }

  if (category === "higher") {
    lines.push(
      "Lượng ăn vào protein cao hơn có thể phù hợp cho một số tình huống lâm sàng, nhưng trong thực hành chúng được giải thích dựa trên chức năng thận và gan, khả năng dung nạp, và hướng dẫn địa phương."
    );
  }
}

