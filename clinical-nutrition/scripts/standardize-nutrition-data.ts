/**
 * Script to standardize nutrition data structure
 * Removes duplicate fields (potassium, phosphorus, cholesterol) from base FoodItem
 * when they exist in disease-specific sections
 */

import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const filePath = join(__dirname, '../lib/vietnamese-food-extended.ts');
let content = readFileSync(filePath, 'utf-8');

// Pattern to match a food item block
const itemPattern = /(\{[^}]*id:\s*"([^"]+)"[^}]*\})/gs;

let changesCount = 0;
const items = Array.from(content.matchAll(itemPattern));

console.log(`Found ${items.length} items to process...`);

for (const match of items) {
  const fullMatch = match[0];
  const id = match[2];
  
  // Check if item has kidney section with potassium/phosphorus
  const hasKidney = /kidney:\s*\{[^}]*\}/s.test(fullMatch);
  const hasCardiovascular = /cardiovascular:\s*\{[^}]*\}/s.test(fullMatch);
  
  let modified = fullMatch;
  let itemChanged = false;
  
  // Remove potassium and phosphorus from base if they exist in kidney section
  if (hasKidney) {
    // Remove standalone potassium: line
    modified = modified.replace(/^\s+potassium:\s*[\d.]+,\s*\n/gm, '');
    // Remove potassium: from object (not in kidney section)
    modified = modified.replace(/(?<!kidney:\s*\{[^}]*)\bpotassium:\s*[\d.]+,\s*\n/g, '');
    
    // Remove standalone phosphorus: line
    modified = modified.replace(/^\s+phosphorus:\s*[\d.]+,\s*\n/gm, '');
    // Remove phosphorus: from object (not in kidney section)
    modified = modified.replace(/(?<!kidney:\s*\{[^}]*)\bphosphorus:\s*[\d.]+,\s*\n/g, '');
  }
  
  // Remove cholesterol from base if it exists in cardiovascular section
  if (hasCardiovascular) {
    // Remove standalone cholesterol: line (not in cardiovascular section)
    modified = modified.replace(/(?<!cardiovascular:\s*\{[^}]*)\bcholesterol:\s*[\d.]+,\s*\n/g, '');
  }
  
  if (modified !== fullMatch) {
    content = content.replace(fullMatch, modified);
    changesCount++;
    console.log(`  - Updated ${id}`);
  }
}

if (changesCount > 0) {
  writeFileSync(filePath, content, 'utf-8');
  console.log(`\n✅ Standardized ${changesCount} items`);
} else {
  console.log('\n✅ No changes needed - data is already standardized');
}
