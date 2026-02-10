/**
 * Validation utilities for clinical nutrition inputs
 * All validations are educational and should provide clear feedback
 */

export interface ValidationResult {
  isValid: boolean;
  error?: string;
}

/**
 * Validate weight in kilograms
 * Reasonable range: 20-300 kg for adults
 */
export function validateWeight(weight: number | null | undefined): ValidationResult {
  if (weight == null) {
    return { isValid: false, error: "Cân nặng là bắt buộc" };
  }

  if (!Number.isFinite(weight)) {
    return { isValid: false, error: "Cân nặng phải là một số hợp lệ" };
  }

  if (weight <= 0) {
    return { isValid: false, error: "Cân nặng phải lớn hơn 0" };
  }

  if (weight < 20) {
    return {
      isValid: false,
      error: "Cân nặng dưới 20 kg có thể không phù hợp cho người lớn. Vui lòng kiểm tra lại.",
    };
  }

  if (weight > 300) {
    return {
      isValid: false,
      error: "Cân nặng trên 300 kg có thể không chính xác. Vui lòng kiểm tra lại.",
    };
  }

  return { isValid: true };
}

/**
 * Validate height in centimeters
 * Reasonable range: 100-250 cm
 */
export function validateHeight(height: number | null | undefined): ValidationResult {
  if (height == null) {
    return { isValid: false, error: "Chiều cao là bắt buộc" };
  }

  if (!Number.isFinite(height)) {
    return { isValid: false, error: "Chiều cao phải là một số hợp lệ" };
  }

  if (height <= 0) {
    return { isValid: false, error: "Chiều cao phải lớn hơn 0" };
  }

  if (height < 100) {
    return {
      isValid: false,
      error: "Chiều cao dưới 100 cm có thể không phù hợp cho người lớn. Vui lòng kiểm tra lại.",
    };
  }

  if (height > 250) {
    return {
      isValid: false,
      error: "Chiều cao trên 250 cm có thể không chính xác. Vui lòng kiểm tra lại.",
    };
  }

  return { isValid: true };
}

/**
 * Validate age in years
 * Reasonable range: 0-150 years
 */
export function validateAge(age: number | null | undefined): ValidationResult {
  if (age == null) {
    return { isValid: true }; // Age is optional
  }

  if (!Number.isFinite(age)) {
    return { isValid: false, error: "Tuổi phải là một số hợp lệ" };
  }

  if (age < 0) {
    return { isValid: false, error: "Tuổi không thể âm" };
  }

  if (age > 150) {
    return {
      isValid: false,
      error: "Tuổi trên 150 năm có thể không chính xác. Vui lòng kiểm tra lại.",
    };
  }

  return { isValid: true };
}

/**
 * Validate percentage (0-100)
 */
export function validatePercentage(
  value: number | null | undefined,
  fieldName: string = "giá trị"
): ValidationResult {
  if (value == null) {
    return { isValid: true }; // Percentages are often optional
  }

  if (!Number.isFinite(value)) {
    return { isValid: false, error: `${fieldName} phải là một số hợp lệ` };
  }

  if (value < 0) {
    return { isValid: false, error: `${fieldName} không thể âm` };
  }

  if (value > 100) {
    return {
      isValid: false,
      error: `${fieldName} không thể vượt quá 100%`,
    };
  }

  return { isValid: true };
}

/**
 * Validate weight loss percentage
 * More strict than general percentage validation
 */
export function validateWeightLossPercent(
  value: number | null | undefined
): ValidationResult {
  const result = validatePercentage(value, "Phần trăm giảm cân");
  if (!result.isValid) {
    return result;
  }

  if (value != null && value > 50) {
    return {
      isValid: false,
      error: "Giảm cân trên 50% là cực kỳ nghiêm trọng. Vui lòng kiểm tra lại giá trị.",
    };
  }

  return { isValid: true };
}

/**
 * Validate intake reduction percentage
 */
export function validateIntakeReductionPercent(
  value: number | null | undefined
): ValidationResult {
  return validatePercentage(value, "Phần trăm giảm lượng ăn vào");
}

/**
 * Validate number of days
 */
export function validateDays(
  days: number | null | undefined,
  fieldName: string = "Số ngày"
): ValidationResult {
  if (days == null) {
    return { isValid: true }; // Days are often optional
  }

  if (!Number.isFinite(days)) {
    return { isValid: false, error: `${fieldName} phải là một số hợp lệ` };
  }

  if (days < 0) {
    return { isValid: false, error: `${fieldName} không thể âm` };
  }

  if (days > 365) {
    return {
      isValid: false,
      error: `${fieldName} trên 365 ngày có thể không chính xác. Vui lòng kiểm tra lại.`,
    };
  }

  return { isValid: true };
}

/**
 * Validate energy intake in kcal/day
 */
export function validateEnergyIntake(
  energy: number | null | undefined
): ValidationResult {
  if (energy == null) {
    return { isValid: true }; // Optional
  }

  if (!Number.isFinite(energy)) {
    return { isValid: false, error: "Lượng năng lượng phải là một số hợp lệ" };
  }

  if (energy < 0) {
    return { isValid: false, error: "Lượng năng lượng không thể âm" };
  }

  if (energy > 10000) {
    return {
      isValid: false,
      error: "Lượng năng lượng trên 10,000 kcal/ngày có thể không chính xác. Vui lòng kiểm tra lại.",
    };
  }

  return { isValid: true };
}

/**
 * Validate protein intake in g/day
 */
export function validateProteinIntake(
  protein: number | null | undefined
): ValidationResult {
  if (protein == null) {
    return { isValid: true }; // Optional
  }

  if (!Number.isFinite(protein)) {
    return { isValid: false, error: "Lượng protein phải là một số hợp lệ" };
  }

  if (protein < 0) {
    return { isValid: false, error: "Lượng protein không thể âm" };
  }

  if (protein > 500) {
    return {
      isValid: false,
      error: "Lượng protein trên 500 g/ngày có thể không chính xác. Vui lòng kiểm tra lại.",
    };
  }

  return { isValid: true };
}

/**
 * Validate that a range is valid (lower <= upper)
 */
export function validateRange(
  lower: number | null | undefined,
  upper: number | null | undefined,
  fieldName: string = "Phạm vi"
): ValidationResult {
  if (lower == null || upper == null) {
    return { isValid: true }; // Optional
  }

  if (!Number.isFinite(lower) || !Number.isFinite(upper)) {
    return { isValid: false, error: `${fieldName} phải chứa các số hợp lệ` };
  }

  if (lower > upper) {
    return {
      isValid: false,
      error: `giá trị thấp hơn (${lower}) không thể lớn hơn giá trị cao hơn (${upper})`,
    };
  }

  return { isValid: true };
}
