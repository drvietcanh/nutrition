/**
 * Formatting utilities for numbers and clinical values
 */

/**
 * Format a number with locale-specific formatting
 */
export function formatNumber(
  value: number | null | undefined,
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  if (value == null || !Number.isFinite(value)) {
    return "—";
  }

  return value.toLocaleString("vi-VN", {
    minimumFractionDigits: options?.minimumFractionDigits ?? 0,
    maximumFractionDigits: options?.maximumFractionDigits ?? 2,
  });
}

/**
 * Format a percentage value
 */
export function formatPercentage(
  value: number | null | undefined,
  decimals: number = 1
): string {
  if (value == null || !Number.isFinite(value)) {
    return "—";
  }

  return `${value.toFixed(decimals)}%`;
}

/**
 * Format weight in kilograms
 */
export function formatWeight(weight: number | null | undefined): string {
  return formatNumber(weight, { maximumFractionDigits: 1 }) + " kg";
}

/**
 * Format height in centimeters
 */
export function formatHeight(height: number | null | undefined): string {
  return formatNumber(height, { maximumFractionDigits: 0 }) + " cm";
}

/**
 * Format energy in kcal
 */
export function formatEnergy(energy: number | null | undefined): string {
  return formatNumber(energy, { maximumFractionDigits: 0 }) + " kcal";
}

/**
 * Format protein in grams
 */
export function formatProtein(protein: number | null | undefined): string {
  return formatNumber(protein, { maximumFractionDigits: 1 }) + " g";
}

/**
 * Format a range (e.g., "1,500–2,000 kcal")
 */
export function formatRange(
  lower: number | null | undefined,
  upper: number | null | undefined,
  unit: string = "",
  options?: {
    minimumFractionDigits?: number;
    maximumFractionDigits?: number;
  }
): string {
  if (lower == null || upper == null) {
    return "—";
  }

  const lowerFormatted = formatNumber(lower, options);
  const upperFormatted = formatNumber(upper, options);
  const unitStr = unit ? ` ${unit}` : "";

  return `${lowerFormatted}–${upperFormatted}${unitStr}`;
}

/**
 * Parse a string to number, returning null if invalid
 */
export function parseNumber(value: string): number | null {
  if (!value || !value.trim()) {
    return null;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : null;
}
