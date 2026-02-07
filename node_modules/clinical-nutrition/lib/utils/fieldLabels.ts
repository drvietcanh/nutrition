/**
 * Vietnamese labels for field names used in missingFields arrays.
 * These are displayed to users when information is missing.
 */
export function getFieldLabel(fieldName: string): string {
  const labels: Record<string, string> = {
    // Intake comparison fields
    estimatedEnergyRange: "phạm vi năng lượng ước tính",
    estimatedProteinRange: "phạm vi protein ước tính",
    actualEnergyIntake: "lượng ăn vào năng lượng thực tế",
    actualProteinIntake: "lượng ăn vào protein thực tế",
    
    // Clinical input fields
    weightKg: "cân nặng",
    heightCm: "chiều cao",
    ageYears: "tuổi",
    recentWeightLossPercent: "phần trăm giảm cân gần đây",
    intakeReductionPercent: "phần trăm giảm lượng ăn vào",
    diseaseContextCode: "bối cảnh bệnh",
  };

  return labels[fieldName] || fieldName;
}

/**
 * Convert an array of field names to Vietnamese labels, joined with commas.
 */
export function formatMissingFields(fields: string[]): string {
  return fields.map(getFieldLabel).join(", ");
}
