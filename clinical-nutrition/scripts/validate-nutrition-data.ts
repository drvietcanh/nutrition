/**
 * Validation script for Vietnamese food nutrition database
 * Checks data consistency, completeness, and compliance with standards
 */

import { readFileSync } from 'fs';
import { join } from 'path';

interface ValidationResult {
  totalItems: number;
  missingRequiredFields: Array<{ id: string; name: string; missingFields: string[] }>;
  duplicateFields: Array<{ id: string; name: string; field: string; locations: string[] }>;
  inconsistentData: Array<{ id: string; name: string; issue: string }>;
  missingOptionalFields: {
    sugars: number;
    water: number;
    fiber: number;
    vitaminB1: number;
    vitaminB2: number;
    vitaminB6: number;
    folate: number;
    vitaminB12: number;
    vitaminD: number;
  };
  statistics: {
    hasDiabetesInfo: number;
    hasGoutInfo: number;
    hasKidneyInfo: number;
    hasCardiovascularInfo: number;
  };
}

// Required fields according to Vietnamese standard (Thông tư 29/2023/TT-BYT)
const REQUIRED_FIELDS = ['calories', 'protein', 'carbs', 'fat', 'sodium'];

// Fields that appear in multiple locations (potential duplicates)
const DUPLICATE_CANDIDATES = {
  potassium: ['base', 'kidney'],
  phosphorus: ['base', 'kidney'],
  cholesterol: ['base', 'cardiovascular'],
};

function validateNutritionData(): ValidationResult {
  const filePath = join(__dirname, '../lib/vietnamese-food-extended.ts');
  const content = readFileSync(filePath, 'utf-8');

  // Extract all food items (simplified parsing)
  const itemMatches = content.matchAll(/id:\s*"([^"]+)"/g);
  const itemIds: string[] = [];
  for (const match of itemMatches) {
    itemIds.push(match[1]);
  }

  const result: ValidationResult = {
    totalItems: itemIds.length,
    missingRequiredFields: [],
    duplicateFields: [],
    inconsistentData: [],
    missingOptionalFields: {
      sugars: 0,
      water: 0,
      fiber: 0,
      vitaminB1: 0,
      vitaminB2: 0,
      vitaminB6: 0,
      folate: 0,
      vitaminB12: 0,
      vitaminD: 0,
    },
    statistics: {
      hasDiabetesInfo: 0,
      hasGoutInfo: 0,
      hasKidneyInfo: 0,
      hasCardiovascularInfo: 0,
    },
  };

  // Check each item
  for (const id of itemIds) {
    // Find the item block
    const itemPattern = new RegExp(
      `id:\\s*"${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}"[^}]*\\{[^}]*\\}`,
      's'
    );
    const itemMatch = content.match(itemPattern);
    if (!itemMatch) continue;

    const itemContent = itemMatch[0];
    const nameMatch = itemContent.match(/name:\s*"([^"]+)"/);
    const name = nameMatch ? nameMatch[1] : id;

    // Check required fields
    const missingFields: string[] = [];
    for (const field of REQUIRED_FIELDS) {
      const fieldPattern = new RegExp(`\\b${field}:\\s*[^,\\n}]+`, 'i');
      if (!fieldPattern.test(itemContent)) {
        missingFields.push(field);
      }
    }
    if (missingFields.length > 0) {
      result.missingRequiredFields.push({ id, name, missingFields });
    }

    // Check for duplicate fields
    for (const [field, locations] of Object.entries(DUPLICATE_CANDIDATES)) {
      const basePattern = new RegExp(`\\b${field}:\\s*[^,\\n}]+`, 'i');
      const hasBase = basePattern.test(itemContent);
      
      const locationsFound: string[] = [];
      if (hasBase) locationsFound.push('base');
      
      if (field === 'potassium' || field === 'phosphorus') {
        const kidneyPattern = /kidney:\s*\{[^}]*\}/s;
        const kidneyMatch = itemContent.match(kidneyPattern);
        if (kidneyMatch && new RegExp(`\\b${field}:`, 'i').test(kidneyMatch[0])) {
          locationsFound.push('kidney');
        }
      }
      
      if (field === 'cholesterol') {
        const cardioPattern = /cardiovascular:\s*\{[^}]*\}/s;
        const cardioMatch = itemContent.match(cardioPattern);
        if (cardioMatch && new RegExp(`\\b${field}:`, 'i').test(cardioMatch[0])) {
          locationsFound.push('cardiovascular');
        }
      }

      if (locationsFound.length > 1) {
        result.duplicateFields.push({ id, name, field, locations: locationsFound });
      }
    }

    // Check optional fields
    if (!/\bsugars:\s*/.test(itemContent)) result.missingOptionalFields.sugars++;
    if (!/\bwater:\s*/.test(itemContent)) result.missingOptionalFields.water++;
    if (!/\bfiber:\s*/.test(itemContent)) result.missingOptionalFields.fiber++;
    if (!/\bvitaminB1:\s*/.test(itemContent)) result.missingOptionalFields.vitaminB1++;
    if (!/\bvitaminB2:\s*/.test(itemContent)) result.missingOptionalFields.vitaminB2++;
    if (!/\bvitaminB6:\s*/.test(itemContent)) result.missingOptionalFields.vitaminB6++;
    if (!/\bfolate:\s*/.test(itemContent)) result.missingOptionalFields.folate++;
    if (!/\bvitaminB12:\s*/.test(itemContent)) result.missingOptionalFields.vitaminB12++;
    if (!/\bvitaminD:\s*/.test(itemContent)) result.missingOptionalFields.vitaminD++;

    // Check disease-specific info
    if (/\bdiabetes:\s*\{/.test(itemContent)) result.statistics.hasDiabetesInfo++;
    if (/\bgout:\s*\{/.test(itemContent)) result.statistics.hasGoutInfo++;
    if (/\bkidney:\s*\{/.test(itemContent)) result.statistics.hasKidneyInfo++;
    if (/\bcardiovascular:\s*\{/.test(itemContent)) result.statistics.hasCardiovascularInfo++;
  }

  return result;
}

// Run validation
const results = validateNutritionData();

console.log('=== NUTRITION DATA VALIDATION REPORT ===\n');
console.log(`Total items: ${results.totalItems}\n`);

console.log('=== REQUIRED FIELDS (Vietnamese Standard) ===');
if (results.missingRequiredFields.length === 0) {
  console.log('✅ All items have required fields (calories, protein, carbs, fat, sodium)');
} else {
  console.log(`❌ ${results.missingRequiredFields.length} items missing required fields:`);
  results.missingRequiredFields.slice(0, 10).forEach(item => {
    console.log(`  - ${item.name} (${item.id}): missing ${item.missingFields.join(', ')}`);
  });
  if (results.missingRequiredFields.length > 10) {
    console.log(`  ... and ${results.missingRequiredFields.length - 10} more`);
  }
}

console.log('\n=== DUPLICATE FIELDS ===');
if (results.duplicateFields.length === 0) {
  console.log('✅ No duplicate fields found');
} else {
  console.log(`⚠️  ${results.duplicateFields.length} items have duplicate fields:`);
  results.duplicateFields.slice(0, 10).forEach(item => {
    console.log(`  - ${item.name} (${item.id}): ${item.field} in ${item.locations.join(' and ')}`);
  });
  if (results.duplicateFields.length > 10) {
    console.log(`  ... and ${results.duplicateFields.length - 10} more`);
  }
}

console.log('\n=== OPTIONAL FIELDS COVERAGE ===');
const optionalFields = [
  { key: 'sugars', label: 'Sugars' },
  { key: 'water', label: 'Water' },
  { key: 'fiber', label: 'Fiber' },
  { key: 'vitaminB1', label: 'Vitamin B1' },
  { key: 'vitaminB2', label: 'Vitamin B2' },
  { key: 'vitaminB6', label: 'Vitamin B6' },
  { key: 'folate', label: 'Folate' },
  { key: 'vitaminB12', label: 'Vitamin B12' },
  { key: 'vitaminD', label: 'Vitamin D' },
];
optionalFields.forEach(field => {
  const missing = results.missingOptionalFields[field.key as keyof typeof results.missingOptionalFields];
  const coverage = ((results.totalItems - missing) / results.totalItems * 100).toFixed(1);
  console.log(`  ${field.label}: ${results.totalItems - missing}/${results.totalItems} (${coverage}%)`);
});

console.log('\n=== DISEASE-SPECIFIC INFO COVERAGE ===');
console.log(`  Diabetes (GI/GL): ${results.statistics.hasDiabetesInfo}/${results.totalItems} (${(results.statistics.hasDiabetesInfo / results.totalItems * 100).toFixed(1)}%)`);
console.log(`  Gout (Purine): ${results.statistics.hasGoutInfo}/${results.totalItems} (${(results.statistics.hasGoutInfo / results.totalItems * 100).toFixed(1)}%)`);
console.log(`  Kidney (K/P): ${results.statistics.hasKidneyInfo}/${results.totalItems} (${(results.statistics.hasKidneyInfo / results.totalItems * 100).toFixed(1)}%)`);
console.log(`  Cardiovascular: ${results.statistics.hasCardiovascularInfo}/${results.totalItems} (${(results.statistics.hasCardiovascularInfo / results.totalItems * 100).toFixed(1)}%)`);

console.log('\n=== RECOMMENDATIONS ===');
console.log('1. Standardize field locations (remove duplicates)');
console.log('2. Add missing optional fields where data is available');
console.log('3. Ensure all items comply with Vietnamese standard (Thông tư 29/2023/TT-BYT)');
console.log('4. Consider adding missing nutrients per international standards (Vitamin E, K, B3, B5, etc.)');
