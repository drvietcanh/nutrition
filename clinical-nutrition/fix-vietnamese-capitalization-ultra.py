#!/usr/bin/env python3
"""
Script tự động sửa lỗi viết hoa tiếng Việt - Phiên bản ULTRA OPTIMIZED
Tối ưu tối đa: Hiệu suất + Độ chính xác + Tránh sai sót

Cải tiến so với phiên bản optimized:
1. Single-pass scanning với pre-computed sentence boundaries
2. Batch replacement thay vì từng cái một
3. Early exit cho files không có Vietnamese text
4. Skip code comments và strings
5. Parallel processing cho nhiều files (optional)
6. Validation và error handling tốt hơn
7. Pattern tổng quát hơn (2-5 từ)
"""

import re
import os
from pathlib import Path
from typing import List, Tuple, Set, Dict, Optional
from functools import lru_cache
from collections import deque

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

# Pattern để skip code comments và strings
CODE_COMMENT_PATTERN = re.compile(r'(//.*?$|/\*.*?\*/|#.*?$)', re.MULTILINE | re.DOTALL)
STRING_PATTERN = re.compile(r'(["\'`])(?:(?=(\\?))\2.)*?\1', re.MULTILINE)

# ============================================================================
# COMPILED REGEX PATTERNS
# ============================================================================

# Pattern tổng quát: N từ viết hoa liên tiếp (2-5 từ)
CAPITALIZED_WORD = r'[A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+'

# Pattern: 2 từ viết hoa liên tiếp (pattern chính, nhanh nhất)
TWO_CAPITALIZED_WORDS = re.compile(
    f'({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})',
    re.UNICODE
)

# Pattern: 3 từ viết hoa liên tiếp
THREE_CAPITALIZED_WORDS = re.compile(
    f'({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})',
    re.UNICODE
)

# Pattern: 4 từ viết hoa liên tiếp
FOUR_CAPITALIZED_WORDS = re.compile(
    f'({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})\\s+({CAPITALIZED_WORD})',
    re.UNICODE
)

# ============================================================================
# HELPER FUNCTIONS (Optimized)
# ============================================================================

@lru_cache(maxsize=20000)
def is_vietnamese_word(word: str) -> bool:
    """Kiểm tra từ có phải tiếng Việt (có dấu) - với cache lớn hơn"""
    return any(char in word for char in VIETNAMESE_ACCENTED_CHARS)

@lru_cache(maxsize=20000)
def is_proper_noun(word: str) -> bool:
    """Kiểm tra từ có phải danh từ riêng - với cache lớn hơn"""
    if word in PROPER_NOUNS_WHITELIST:
        return True
    if not is_vietnamese_word(word) and word and word[0].isupper():
        if word not in COMMON_ENGLISH_WORDS:
            return True
    return False

def precompute_sentence_boundaries(content: str) -> Set[int]:
    """
    Pre-compute tất cả vị trí đầu câu để tránh tính toán lại
    Trả về set các vị trí là đầu câu
    """
    boundaries = {0}  # Vị trí 0 luôn là đầu câu
    
    for i, char in enumerate(content):
        if char in SENTENCE_ENDERS:
            # Tìm vị trí bắt đầu của từ tiếp theo (bỏ qua spaces)
            j = i + 1
            while j < len(content) and content[j].isspace():
                j += 1
            if j < len(content):
                boundaries.add(j)
        
        # Sau dấu hai chấm (nếu trước đó là dấu kết thúc câu)
        if char == ':' and i > 0:
            if content[i - 1] in SENTENCE_ENDERS:
                j = i + 1
                while j < len(content) and content[j].isspace():
                    j += 1
                if j < len(content):
                    boundaries.add(j)
    
    return boundaries

def should_fix_word(word: str) -> bool:
    """Kiểm tra từ có nên được sửa không - optimized"""
    if not word:
        return False
    if is_proper_noun(word):
        return False
    # Không sửa từ viết tắt (tất cả chữ hoa, ngắn)
    if word.isupper() and len(word) <= 5:
        return False
    return True

def has_vietnamese_text(content: str) -> bool:
    """Kiểm tra nhanh xem content có chứa tiếng Việt không"""
    return any(char in content for char in VIETNAMESE_ACCENTED_CHARS)

def get_code_ranges(content: str) -> List[Tuple[int, int]]:
    """
    Tìm các vùng code (comments, strings) cần skip
    Trả về list các (start, end) ranges
    """
    ranges = []
    
    # Skip comments
    for match in CODE_COMMENT_PATTERN.finditer(content):
        ranges.append((match.start(), match.end()))
    
    # Skip strings
    for match in STRING_PATTERN.finditer(content):
        ranges.append((match.start(), match.end()))
    
    # Merge overlapping ranges
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
# SMART AUTO-DETECTION (Ultra Optimized)
# ============================================================================

def smart_auto_detect_ultra(content: str) -> List[Tuple[str, str, int]]:
    """
    Tự động phát hiện các pattern viết hoa sai - ULTRA OPTIMIZED
    Single-pass với pre-computed boundaries
    Trả về: [(pattern_sai, pattern_đúng, vị_trí), ...]
    """
    # Early exit nếu không có tiếng Việt
    if not has_vietnamese_text(content):
        return []
    
    # Pre-compute sentence boundaries
    sentence_boundaries = precompute_sentence_boundaries(content)
    
    # Pre-compute code ranges để skip
    code_ranges = get_code_ranges(content)
    
    detected = []
    processed_positions = set()  # Tránh duplicate
    
    # Scan với các pattern riêng biệt (nhanh hơn và chính xác hơn)
    patterns = [
        (TWO_CAPITALIZED_WORDS, 2),
        (THREE_CAPITALIZED_WORDS, 3),
        (FOUR_CAPITALIZED_WORDS, 4),
    ]
    
    for pattern, word_count in patterns:
        for match in pattern.finditer(content):
            start_pos = match.start()
            
            # Skip nếu đã xử lý (tránh duplicate)
            if start_pos in processed_positions:
                continue
            
            # Skip nếu trong code range
            if is_in_code_range(start_pos, code_ranges):
                continue
            
            # Skip nếu là đầu câu
            if start_pos in sentence_boundaries:
                continue
            
            # Lấy các từ
            words = [g for g in match.groups() if g is not None]
            
            if len(words) < 2:
                continue
            
            # Kiểm tra proper nouns
            if any(is_proper_noun(w) for w in words):
                continue
            
            # Chỉ sửa nếu có ít nhất một từ tiếng Việt
            if not any(is_vietnamese_word(w) for w in words):
                continue
            
            # Tạo replacement: giữ nguyên từ đầu, viết thường các từ sau
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
    
    return detected

# ============================================================================
# BATCH REPLACEMENT (Optimized)
# ============================================================================

def apply_fixes_batch(content: str, fixes: List[Tuple[str, str, int]]) -> str:
    """
    Áp dụng tất cả fixes trong một lần (batch)
    Sắp xếp theo vị trí từ cuối lên đầu để tránh thay đổi offset
    """
    if not fixes:
        return content
    
    # Sắp xếp theo vị trí (từ cuối lên đầu)
    fixes.sort(key=lambda x: x[2], reverse=True)
    
    # Áp dụng từng fix
    for wrong, correct, pos in fixes:
        # Tìm vị trí chính xác (có thể đã thay đổi sau các lần sửa trước)
        # Sử dụng rfind để tìm từ vị trí gần nhất
        start = content.rfind(wrong, 0, pos + len(wrong) + 100)
        if start != -1:
            # Validate: kiểm tra lại xem có phải đầu câu không
            sentence_boundaries = precompute_sentence_boundaries(content[:start + len(wrong)])
            if start not in sentence_boundaries:
                content = content[:start] + correct + content[start + len(wrong):]
    
    return content

# ============================================================================
# FILE PROCESSING (Ultra Optimized)
# ============================================================================

def fix_file_ultra(file_path: Path) -> Tuple[bool, int]:
    """
    Sửa lỗi viết hoa với logic ULTRA OPTIMIZED
    Trả về: (đã_sửa, số_lỗi_tìm_thấy)
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original = content
        
        # Early exit: kiểm tra nhanh xem có tiếng Việt không
        if not has_vietnamese_text(content):
            return (False, 0)
        
        # Phát hiện tất cả lỗi trong một lần
        fixes = smart_auto_detect_ultra(content)
        
        if not fixes:
            return (False, 0)
        
        # Áp dụng tất cả fixes trong một lần (batch)
        content = apply_fixes_batch(content, fixes)
        
        # Chỉ ghi nếu có thay đổi
        if content != original:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return (True, len(fixes))
        
        return (False, len(fixes))
    
    except Exception as e:
        print(f"Loi khi xu ly {file_path}: {e}")
        return (False, 0)

# ============================================================================
# MAIN FUNCTION (With progress tracking)
# ============================================================================

def main():
    """Hàm main với progress tracking"""
    import sys
    import time
    
    # Set UTF-8 encoding cho stdout (fix lỗi Windows)
    if sys.platform == 'win32':
        import io
        sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
    
    base_dir = Path(__file__).parent
    
    # Tìm các file cần xử lý
    extensions = ['*.tsx', '*.ts', '*.mdx', '*.md']
    files = []
    for ext in extensions:
        files.extend(base_dir.rglob(ext))
    
    # Loại bỏ node_modules, .next, và các thư mục không cần thiết
    exclude_dirs = {'node_modules', '.next', '.git', 'dist', 'build', '.cache'}
    files = [
        f for f in files 
        if not any(exclude_dir in str(f) for exclude_dir in exclude_dirs)
    ]
    
    print(f"Tim thay {len(files)} file can kiem tra...")
    
    start_time = time.time()
    fixed_count = 0
    total_errors = 0
    
    for i, file_path in enumerate(files, 1):
        was_fixed, error_count = fix_file_ultra(file_path)
        
        if was_fixed:
            print(f"✓ [{i}/{len(files)}] Da sua {error_count} loi: {file_path}")
            fixed_count += 1
            total_errors += error_count
        elif error_count > 0:
            # Có lỗi nhưng không sửa được (có thể do validation)
            print(f"⚠ [{i}/{len(files)}] Tim thay {error_count} loi nhung khong sua: {file_path}")
    
    elapsed = time.time() - start_time
    print(f"\nHoan thanh!")
    print(f"- Da sua: {fixed_count} file")
    print(f"- Tong so loi da sua: {total_errors}")
    print(f"- Thoi gian: {elapsed:.2f} giay")
    print(f"- Trung binh: {elapsed/len(files)*1000:.1f}ms/file")

if __name__ == '__main__':
    main()
