#!/usr/bin/env python3
"""
Script tự động sửa lỗi viết hoa tiếng Việt - Phiên bản tối ưu
Quy tắc: Từ ghép tiếng Việt không viết hoa chữ cái đầu của từ thứ hai (trừ đầu câu)

Cải tiến:
- Tự động phát hiện pattern thông minh hơn
- Tối ưu hiệu suất với regex compiled
- Context-aware replacement
- Batch processing
"""

import re
import os
from pathlib import Path
from typing import List, Tuple, Set, Pattern
from functools import lru_cache

# ============================================================================
# CONFIGURATION
# ============================================================================

# Whitelist các tên riêng, tổ chức, thuật ngữ cần giữ nguyên viết hoa
PROPER_NOUNS_WHITELIST: Set[str] = {
    # Tên địa danh Việt Nam
    'Việt', 'Nam', 'Hà', 'Nội', 'Sài', 'Gòn', 'Đà', 'Nẵng', 'Huế', 'Châu', 'Âu',
    # Tên tổ chức, hiệp hội
    'American', 'College', 'Diabetes', 'Association', 'Heart', 'Institute', 'World', 
    'Health', 'Organization', 'European', 'Society', 'International', 'Federation', 
    'National', 'Blood',
    # Thuật ngữ y khoa tiếng Anh
    'BMI', 'IBW', 'ABW', 'BSA', 'BMR', 'REE', 'TEE', 'GERD', 'IBS', 'CKD', 'COPD',
    # Tên riêng khác
    'Du', 'Bois', 'St', 'Jeor', 'Harris', 'Benedict',
    # Từ viết tắt phổ biến
    'AI', 'API', 'UI', 'UX', 'HTML', 'CSS', 'JS', 'TS', 'JSON', 'XML',
}

# Từ tiếng Anh phổ biến trong tiếng Việt (không phải proper noun)
COMMON_ENGLISH_WORDS: Set[str] = {
    'The', 'And', 'Or', 'But', 'For', 'With', 'From', 'To', 'In', 'On', 'At', 'By',
    'A', 'An', 'As', 'Is', 'Are', 'Was', 'Were', 'Be', 'Been', 'Being',
    'Have', 'Has', 'Had', 'Do', 'Does', 'Did', 'Will', 'Would', 'Should', 'Could',
    'Can', 'May', 'Might', 'Must', 'Shall',
}

# Ký tự kết thúc câu
SENTENCE_ENDERS = '.!?\n'
# Ký tự sau đó thường là đầu câu
SENTENCE_STARTERS = SENTENCE_ENDERS + ':'

# Ký tự tiếng Việt có dấu
VIETNAMESE_ACCENTED_CHARS = 'àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ'

# ============================================================================
# COMPILED REGEX PATTERNS (Tối ưu hiệu suất)
# ============================================================================

# Pattern: Từ viết hoa (chữ cái đầu viết hoa, phần còn lại viết thường)
CAPITALIZED_WORD = re.compile(
    r'[A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+'
)

# Pattern: Hai từ viết hoa liên tiếp (pattern chính để phát hiện lỗi)
TWO_CAPITALIZED_WORDS = re.compile(
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    r'\s+'
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
)

# Pattern: Ba từ viết hoa liên tiếp
THREE_CAPITALIZED_WORDS = re.compile(
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    r'\s+'
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    r'\s+'
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
)

# Pattern: Từ viết hoa đứng sau từ viết thường (có thể là đầu câu mới)
LOWERCASE_TO_CAPITALIZED = re.compile(
    r'([a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    r'\s+'
    r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ]'
    r'[a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
)

# ============================================================================
# HELPER FUNCTIONS
# ============================================================================

@lru_cache(maxsize=10000)
def is_vietnamese_word(word: str) -> bool:
    """
    Kiểm tra xem từ có phải là tiếng Việt không (có dấu)
    Sử dụng cache để tối ưu hiệu suất
    """
    return any(char in word for char in VIETNAMESE_ACCENTED_CHARS)

@lru_cache(maxsize=10000)
def is_proper_noun(word: str) -> bool:
    """
    Kiểm tra xem từ có phải là danh từ riêng không
    Sử dụng cache để tối ưu hiệu suất
    """
    # Kiểm tra trong whitelist
    if word in PROPER_NOUNS_WHITELIST:
        return True
    
    # Từ tiếng Anh không có dấu thường là tên riêng hoặc thuật ngữ
    if not is_vietnamese_word(word) and word[0].isupper():
        # Loại trừ các từ tiếng Anh phổ biến
        if word not in COMMON_ENGLISH_WORDS:
            return True
    
    return False

def is_sentence_start(pos: int, content: str) -> bool:
    """
    Kiểm tra xem vị trí có phải là đầu câu không
    """
    if pos == 0:
        return True
    
    # Kiểm tra ký tự trước đó
    prev_char = content[pos - 1]
    
    # Nếu là dấu kết thúc câu, thì đây là đầu câu mới
    if prev_char in SENTENCE_ENDERS:
        return True
    
    # Nếu là dấu hai chấm và trước đó là dấu kết thúc câu
    if prev_char == ':' and pos > 1:
        prev_prev_char = content[pos - 2]
        if prev_prev_char in SENTENCE_ENDERS:
            return True
    
    return False

def should_fix_word(word: str) -> bool:
    """
    Kiểm tra xem từ có nên được sửa không
    """
    # Không sửa nếu là danh từ riêng
    if is_proper_noun(word):
        return False
    
    # Không sửa nếu là từ viết tắt (tất cả chữ cái đều viết hoa)
    if word.isupper() and len(word) <= 5:
        return False
    
    return True

# ============================================================================
# SMART DETECTION FUNCTIONS
# ============================================================================

def smart_detect_capitalization_errors(content: str) -> List[Tuple[str, str, int]]:
    """
    Tự động phát hiện các lỗi viết hoa tiếng Việt một cách thông minh
    Trả về danh sách (pattern_sai, pattern_đúng, vị_trí)
    """
    errors = []
    
    # Pattern 1: Hai từ viết hoa liên tiếp
    for match in TWO_CAPITALIZED_WORDS.finditer(content):
        start_pos = match.start()
        
        # Bỏ qua nếu là đầu câu
        if is_sentence_start(start_pos, content):
            continue
        
        word1 = match.group(1)
        word2 = match.group(2)
        
        # Bỏ qua nếu là danh từ riêng
        if is_proper_noun(word1) or is_proper_noun(word2):
            continue
        
        # Chỉ sửa nếu ít nhất một từ là tiếng Việt
        if is_vietnamese_word(word1) or is_vietnamese_word(word2):
            # Kiểm tra xem có nên sửa không
            if should_fix_word(word2):
                pattern_wrong = match.group(0)
                pattern_correct = f"{word1} {word2.lower()}"
                errors.append((pattern_wrong, pattern_correct, start_pos))
    
    # Pattern 2: Ba từ viết hoa liên tiếp
    for match in THREE_CAPITALIZED_WORDS.finditer(content):
        start_pos = match.start()
        
        # Bỏ qua nếu là đầu câu
        if is_sentence_start(start_pos, content):
            continue
        
        word1 = match.group(1)
        word2 = match.group(2)
        word3 = match.group(3)
        
        # Bỏ qua nếu có danh từ riêng
        if is_proper_noun(word1) or is_proper_noun(word2) or is_proper_noun(word3):
            continue
        
        # Chỉ sửa nếu có ít nhất một từ là tiếng Việt
        if (is_vietnamese_word(word1) or is_vietnamese_word(word2) or 
            is_vietnamese_word(word3)):
            # Kiểm tra xem có nên sửa không
            if should_fix_word(word2) and should_fix_word(word3):
                pattern_wrong = match.group(0)
                pattern_correct = f"{word1} {word2.lower()} {word3.lower()}"
                errors.append((pattern_wrong, pattern_correct, start_pos))
    
    return errors

def apply_smart_fixes(content: str) -> str:
    """
    Áp dụng các sửa chữa thông minh vào nội dung
    """
    # Phát hiện lỗi
    errors = smart_detect_capitalization_errors(content)
    
    # Sắp xếp theo vị trí (từ cuối lên đầu) để tránh thay đổi offset
    errors.sort(key=lambda x: x[2], reverse=True)
    
    # Áp dụng các sửa chữa
    for pattern_wrong, pattern_correct, pos in errors:
        # Tìm vị trí chính xác của pattern trong content
        # (vì pos có thể đã thay đổi sau các lần sửa trước)
        start = content.rfind(pattern_wrong, 0, pos + len(pattern_wrong))
        if start != -1:
            # Kiểm tra lại xem có phải đầu câu không (sau khi đã sửa)
            if not is_sentence_start(start, content):
                content = content[:start] + pattern_correct + content[start + len(pattern_wrong):]
    
    return content

# ============================================================================
# FILE PROCESSING
# ============================================================================

def fix_file_smart(file_path: Path) -> bool:
    """
    Sửa lỗi viết hoa trong một file sử dụng logic thông minh
    """
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Áp dụng các sửa chữa thông minh
        content = apply_smart_fixes(content)
        
        # Chỉ ghi file nếu có thay đổi
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    
    except Exception as e:
        print(f"Lỗi khi xử lý {file_path}: {e}")
        return False

def main():
    """
    Hàm main để chạy script
    """
    base_dir = Path(__file__).parent
    
    # Tìm tất cả các file .tsx, .ts, .mdx, .md
    file_extensions = ['*.tsx', '*.ts', '*.mdx', '*.md']
    files_to_check = []
    
    for ext in file_extensions:
        files_to_check.extend(base_dir.rglob(ext))
    
    # Loại bỏ các file trong node_modules và .next
    files_to_check = [
        f for f in files_to_check
        if 'node_modules' not in str(f) and '.next' not in str(f)
    ]
    
    print(f"Tìm thấy {len(files_to_check)} file cần kiểm tra...")
    
    fixed_count = 0
    for file_path in files_to_check:
        if fix_file_smart(file_path):
            print(f"✓ Đã sửa: {file_path}")
            fixed_count += 1
    
    print(f"\nHoàn thành! Đã sửa {fixed_count} file.")

if __name__ == '__main__':
    main()
