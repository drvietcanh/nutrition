#!/usr/bin/env python3
"""
Script tự động sửa lỗi viết hoa tiếng Việt - Phiên bản FINAL OPTIMIZED
Tối ưu tối đa: Hiệu suất + Độ chính xác + Tránh sai sót + Validation

Tính năng:
1. Single-pass scanning với pre-computed sentence boundaries
2. Batch replacement
3. Early exit cho files không có Vietnamese text
4. Skip code comments và strings
5. Validation và error handling
6. Dry-run mode để preview
7. Debug mode để kiểm tra
"""

import re
import os
import sys
import time
from pathlib import Path
from typing import List, Tuple, Set, Optional
from functools import lru_cache

# ============================================================================
# CONFIGURATION
# ============================================================================

PROPER_NOUNS_WHITELIST: Set[str] = {
    'Việt', 'Nam', 'Hà', 'Nội', 'Sài', 'Gòn', 'Đà', 'Nẵng', 'Huế', 'Châu', 'Âu',
    'American', 'College', 'Diabetes', 'Association', 'Heart', 'Institute', 'World', 
    'Health', 'Organization', 'European', 'Society', 'International', 'Federation', 
    'National', 'Blood',
    'BMI', 'IBW', 'ABW', 'BSA', 'BMR', 'REE', 'TEE', 'GERD', 'IBS', 'CKD', 'COPD',
    'Du', 'Bois', 'St', 'Jeor', 'Harris', 'Benedict',
    'AI', 'API', 'UI', 'UX', 'HTML', 'CSS', 'JS', 'TS', 'JSON', 'XML',
}

COMMON_ENGLISH_WORDS: Set[str] = {
    'The', 'And', 'Or', 'But', 'For', 'With', 'From', 'To', 'In', 'On', 'At', 'By',
    'A', 'An', 'As', 'Is', 'Are', 'Was', 'Were', 'Be', 'Been', 'Being',
    'Have', 'Has', 'Had', 'Do', 'Does', 'Did', 'Will', 'Would', 'Should', 'Could',
    'Can', 'May', 'Might', 'Must', 'Shall',
}

SENTENCE_ENDERS = '.!?\n'
VIETNAMESE_ACCENTED_CHARS = 'àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ'

# ============================================================================
# COMPILED REGEX PATTERNS
# ============================================================================

CAPITALIZED_WORD = r'[A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+'

TWO_CAPITALIZED_WORDS = re.compile(
    f'({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})',
    re.UNICODE
)

THREE_CAPITALIZED_WORDS = re.compile(
    f'({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})',
    re.UNICODE
)

# Pattern để skip code comments và strings
CODE_COMMENT_PATTERN = re.compile(r'(//.*?$|/\*.*?\*/|#.*?$)', re.MULTILINE | re.DOTALL)
STRING_PATTERN = re.compile(r'(["\'`])(?:(?=(\\?))\2.)*?\1', re.MULTILINE)

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

@lru_cache(maxsize=20000)
def is_vietnamese_word(word: str) -> bool:
    """Kiểm tra từ có phải tiếng Việt (có dấu)"""
    if not word:
        return False
    return any(char in word for char in VIETNAMESE_ACCENTED_CHARS)

@lru_cache(maxsize=20000)
def is_proper_noun(word: str) -> bool:
    """Kiểm tra từ có phải danh từ riêng"""
    if not word:
        return False
    if word in PROPER_NOUNS_WHITELIST:
        return True
    if not is_vietnamese_word(word) and word[0].isupper():
        if word not in COMMON_ENGLISH_WORDS:
            return True
    return False

def precompute_sentence_boundaries(content: str) -> Set[int]:
    """Pre-compute tất cả vị trí đầu câu"""
    boundaries = {0}
    
    for i, char in enumerate(content):
        if char in SENTENCE_ENDERS:
            j = i + 1
            while j < len(content) and content[j].isspace():
                j += 1
            if j < len(content):
                boundaries.add(j)
        
        if char == ':' and i > 0:
            if content[i - 1] in SENTENCE_ENDERS:
                j = i + 1
                while j < len(content) and content[j].isspace():
                    j += 1
                if j < len(content):
                    boundaries.add(j)
    
    return boundaries

def should_fix_word(word: str) -> bool:
    """Kiểm tra từ có nên được sửa không"""
    if not word:
        return False
    if is_proper_noun(word):
        return False
    if word.isupper() and len(word) <= 5:
        return False
    return True

def has_vietnamese_text(content: str) -> bool:
    """Kiểm tra nhanh xem content có chứa tiếng Việt không"""
    return any(char in content for char in VIETNAMESE_ACCENTED_CHARS)

def get_code_ranges(content: str) -> List[Tuple[int, int]]:
    """Tìm các vùng code (comments, strings) cần skip"""
    ranges = []
    
    for match in CODE_COMMENT_PATTERN.finditer(content):
        ranges.append((match.start(), match.end()))
    
    for match in STRING_PATTERN.finditer(content):
        ranges.append((match.start(), match.end()))
    
    if not ranges:
        return []
    
    ranges.sort()
    merged = [ranges[0]]
    for start, end in ranges[1:]:
        last_start, last_end = merged[-1]
        if start <= last_end:
            merged[-1] = (last_start, max(last_end, end))
        else:
            merged.append((start, end))
    
    return merged

def is_in_code_range(pos: int, code_ranges: List[Tuple[int, int]]) -> bool:
    """Kiểm tra vị trí có nằm trong code range không"""
    for start, end in code_ranges:
        if start <= pos < end:
            return True
    return False

# ============================================================================
# SMART AUTO-DETECTION
# ============================================================================

def smart_auto_detect(content: str, debug: bool = False) -> List[Tuple[str, str, int]]:
    """
    Tự động phát hiện các pattern viết hoa sai
    Trả về: [(pattern_sai, pattern_đúng, vị_trí), ...]
    """
    if not has_vietnamese_text(content):
        return []
    
    sentence_boundaries = precompute_sentence_boundaries(content)
    code_ranges = get_code_ranges(content)
    detected = []
    processed_positions = set()
    
    patterns = [
        (TWO_CAPITALIZED_WORDS, 2),
        (THREE_CAPITALIZED_WORDS, 3),
    ]
    
    for pattern, word_count in patterns:
        for match in pattern.finditer(content):
            start_pos = match.start()
            
            if start_pos in processed_positions:
                continue
            
            if is_in_code_range(start_pos, code_ranges):
                continue
            
            if start_pos in sentence_boundaries:
                continue
            
            words = [g for g in match.groups() if g is not None]
            
            if len(words) < 2:
                continue
            
            if any(is_proper_noun(w) for w in words):
                continue
            
            if not any(is_vietnamese_word(w) for w in words):
                continue
            
            fixed_words = [words[0]]
            should_fix = True
            
            for word in words[1:]:
                if should_fix_word(word):
                    fixed_words.append(word.lower())
                else:
                    should_fix = False
                    break
            
            if should_fix and len(fixed_words) > 1:
                wrong = match.group(0)
                correct = ' '.join(fixed_words)
                detected.append((wrong, correct, start_pos))
                processed_positions.add(start_pos)
                
                if debug:
                    # Show context
                    context_start = max(0, start_pos - 20)
                    context_end = min(len(content), start_pos + len(wrong) + 20)
                    context = content[context_start:context_end].replace('\n', ' ')
                    print(f"  Found: '{wrong}' -> '{correct}'")
                    print(f"  Context: ...{context}...")
    
    return detected

# ============================================================================
# BATCH REPLACEMENT
# ============================================================================

def apply_fixes_batch(content: str, fixes: List[Tuple[str, str, int]]) -> str:
    """Áp dụng tất cả fixes trong một lần (batch)"""
    if not fixes:
        return content
    
    fixes.sort(key=lambda x: x[2], reverse=True)
    
    for wrong, correct, pos in fixes:
        start = content.rfind(wrong, 0, pos + len(wrong) + 100)
        if start != -1:
            sentence_boundaries = precompute_sentence_boundaries(content[:start + len(wrong)])
            if start not in sentence_boundaries:
                content = content[:start] + correct + content[start + len(wrong):]
    
    return content

# ============================================================================
# FILE PROCESSING
# ============================================================================

def fix_file(file_path: Path, dry_run: bool = False, debug: bool = False) -> Tuple[bool, int]:
    """
    Sửa lỗi viết hoa
    Trả về: (đã_sửa, số_lỗi_tìm_thấy)
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        if not has_vietnamese_text(content):
            return (False, 0)
        
        fixes = smart_auto_detect(content, debug=debug)
        
        if not fixes:
            return (False, 0)
        
        if debug:
            print(f"\nFile: {file_path}")
            print(f"Found {len(fixes)} errors:")
        
        if not dry_run:
            content = apply_fixes_batch(content, fixes)
            
            if content != original:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                return (True, len(fixes))
        
        return (False, len(fixes))
    
    except Exception as e:
        print(f"Loi khi xu ly {file_path}: {e}")
        return (False, 0)

# ============================================================================
# MAIN FUNCTION
# ============================================================================

def main():
    """Hàm main"""
    # Set UTF-8 encoding
    if sys.platform == 'win32':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    
    # Parse arguments
    dry_run = '--dry-run' in sys.argv or '-d' in sys.argv
    debug = '--debug' in sys.argv or '-v' in sys.argv
    
    base_dir = Path(__file__).parent
    
    # Find files
    extensions = ['*.tsx', '*.ts', '*.mdx', '*.md']
    files = []
    for ext in extensions:
        files.extend(base_dir.rglob(ext))
    
    exclude_dirs = {'node_modules', '.next', '.git', 'dist', 'build', '.cache'}
    files = [
        f for f in files 
        if not any(exclude_dir in str(f) for exclude_dir in exclude_dirs)
    ]
    
    mode_str = "DRY-RUN" if dry_run else "FIX"
    print(f"[{mode_str}] Tim thay {len(files)} file can kiem tra...")
    if debug:
        print("[DEBUG MODE]")
    
    start_time = time.time()
    fixed_count = 0
    total_errors = 0
    
    for i, file_path in enumerate(files, 1):
        was_fixed, error_count = fix_file(file_path, dry_run=dry_run, debug=debug)
        
        if was_fixed:
            print(f"✓ [{i}/{len(files)}] Da sua {error_count} loi: {file_path}")
            fixed_count += 1
            total_errors += error_count
        elif error_count > 0:
            action = "se sua" if dry_run else "tim thay"
            print(f"⚠ [{i}/{len(files)}] {action} {error_count} loi: {file_path}")
            total_errors += error_count
    
    elapsed = time.time() - start_time
    print(f"\nHoan thanh!")
    if dry_run:
        print(f"- Se sua: {fixed_count} file")
    else:
        print(f"- Da sua: {fixed_count} file")
    print(f"- Tong so loi: {total_errors}")
    print(f"- Thoi gian: {elapsed:.2f} giay")
    print(f"- Trung binh: {elapsed/len(files)*1000:.1f}ms/file")

if __name__ == '__main__':
    main()
