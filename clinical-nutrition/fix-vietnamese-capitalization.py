#!/usr/bin/env python3
"""
Script tự động sửa lỗi viết hoa tiếng Việt
Quy tắc: Từ ghép tiếng Việt không viết hoa chữ cái đầu của từ thứ hai (trừ đầu câu)
"""

import re
import os
from pathlib import Path

# Danh sách các từ ghép tiếng Việt cần sửa (từ thứ hai không viết hoa)
VIETNAMESE_COMPOUND_WORDS = [
    # Từ ghép phổ biến
    (r'\bLành mạnh\b', 'lành mạnh'),
    (r'\bThực hành\b', 'thực hành'),
    (r'\bPhổ biến\b', 'phổ biến'),
    (r'\bHạn chế\b', 'hạn chế'),
    (r'\bĐiều chỉnh\b', 'điều chỉnh'),
    (r'\bCải thiện\b', 'cải thiện'),
    (r'\bTránh\b', 'tránh'),
    (r'\bTốt\b', 'tốt'),
    (r'\bĂn\b', 'ăn'),
    (r'\bNấu ăn\b', 'nấu ăn'),
    (r'\bCân nặng\b', 'cân nặng'),
    (r'\bCân bằng\b', 'cân bằng'),
    (r'\bThức ăn\b', 'thức ăn'),
    (r'\bĂn uống\b', 'ăn uống'),
    (r'\bBữa ăn\b', 'bữa ăn'),
    (r'\bBữa Trưa\b', 'Bữa trưa'),
    (r'\bBữa Tối\b', 'Bữa tối'),
    (r'\bBữa Sáng\b', 'Bữa sáng'),
    (r'\bĐĩa Ăn\b', 'Đĩa ăn'),
    (r'\bCách Ăn\b', 'Cách ăn'),
    (r'\bChế độ Ăn\b', 'Chế độ ăn'),
    (r'\bPhương pháp\b', 'phương pháp'),
    (r'\bCách dùng\b', 'cách dùng'),
    (r'\bGia vị\b', 'gia vị'),
    (r'\bLựa chọn\b', 'lựa chọn'),
    (r'\bThực phẩm\b', 'thực phẩm'),
    (r'\bHiểu lầm\b', 'hiểu lầm'),
    (r'\bCác loại\b', 'các loại'),
    (r'\bẢnh hưởng Sức khỏe\b', 'Ảnh hưởng sức khỏe'),
    (r'\bChất béo Bão hòa\b', 'Chất béo bão hòa'),
    (r'\bSức khỏe\b', 'sức khỏe'),
    (r'\bBão hòa\b', 'bão hòa'),
    (r'\bNhanh\b', 'nhanh'),
    (r'\bKiểu\b', 'kiểu'),
]

# Pattern đặc biệt - cần xử lý cẩn thận
SPECIAL_PATTERNS = [
    # Pattern: "Từ1 Từ2" → "Từ1 từ2" (trừ đầu câu)
    (r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)', 
     lambda m: m.group(1) + ' ' + m.group(2).lower()),
]

def fix_capitalization_in_text(text, is_title=False):
    """
    Sửa lỗi viết hoa trong text
    is_title: True nếu là tiêu đề (giữ nguyên viết hoa từ đầu)
    """
    original_text = text
    
    # Sửa các từ ghép cụ thể
    for pattern, replacement in VIETNAMESE_COMPOUND_WORDS:
        # Không sửa nếu là từ đầu câu (sau dấu chấm, dấu hỏi, dấu chấm than)
        # Hoặc nếu là đầu dòng trong tiêu đề
        if is_title and pattern.startswith(r'\b') and text.startswith(pattern[2:-2].split()[0]):
            # Giữ nguyên nếu là từ đầu tiên trong tiêu đề
            continue
        
        # Sửa các instance không phải đầu câu
        def replace_func(match):
            matched = match.group(0)
            # Kiểm tra xem có phải đầu câu không
            start_pos = match.start()
            if start_pos == 0:
                # Đầu câu - giữ nguyên viết hoa
                return matched
            # Kiểm tra ký tự trước đó
            prev_char = text[start_pos - 1] if start_pos > 0 else ''
            if prev_char in '.!?\n':
                # Sau dấu câu - giữ nguyên viết hoa
                return matched
            # Không phải đầu câu - sửa thành chữ thường
            return replacement
        
        text = re.sub(pattern, replace_func, text, flags=re.IGNORECASE)
    
    return text

# Whitelist các tên riêng, tổ chức, thuật ngữ cần giữ nguyên viết hoa
PROPER_NOUNS_WHITELIST = {
    # Tên địa danh Việt Nam
    'Việt', 'Nam', 'Hà', 'Nội', 'Sài', 'Gòn', 'Đà', 'Nẵng', 'Huế', 'Châu', 'Âu',
    # Tên tổ chức, hiệp hội
    'American', 'College', 'Diabetes', 'Association', 'Heart', 'Institute', 'World', 'Health', 'Organization',
    'European', 'Society', 'International', 'Federation', 'National', 'Blood',
    # Thuật ngữ y khoa tiếng Anh
    'BMI', 'IBW', 'ABW', 'BSA', 'BMR', 'REE', 'TEE', 'GERD', 'IBS', 'CKD', 'COPD',
    # Tên riêng khác
    'Du', 'Bois', 'St', 'Jeor', 'Harris', 'Benedict',
}

def is_vietnamese_word(word):
    """
    Kiểm tra xem từ có phải là tiếng Việt không (có dấu)
    """
    vietnamese_chars = 'àáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ'
    return any(char in word for char in vietnamese_chars)

def is_proper_noun(word):
    """
    Kiểm tra xem từ có phải là danh từ riêng không
    """
    # Kiểm tra trong whitelist
    if word in PROPER_NOUNS_WHITELIST:
        return True
    
    # Từ tiếng Anh không có dấu thường là tên riêng hoặc thuật ngữ
    if not is_vietnamese_word(word) and word[0].isupper():
        # Loại trừ một số từ tiếng Anh phổ biến trong tiếng Việt
        common_english_words = {'The', 'And', 'Or', 'But', 'For', 'With', 'From', 'To', 'In', 'On', 'At', 'By'}
        if word not in common_english_words:
            return True
    
    return False

def auto_detect_capitalization_patterns(content):
    """
    Tự động phát hiện các pattern viết hoa sai trong tiếng Việt
    Trả về danh sách các pattern cần sửa
    Chỉ áp dụng cho từ tiếng Việt (có dấu) và không phải danh từ riêng
    """
    detected_patterns = set()
    
    # Pattern 1: "Từ1 Từ2" trong đó cả hai đều viết hoa chữ cái đầu
    # và không phải đầu câu
    # Ví dụ: "Nhu cầu Dinh dưỡng", "Khoảng giá trị Quan trọng"
    pattern1 = r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    
    for match in re.finditer(pattern1, content):
        start_pos = match.start()
        # Kiểm tra xem có phải đầu câu không
        if start_pos > 0:
            prev_char = content[start_pos - 1]
            # Nếu không phải sau dấu câu, có thể là lỗi
            if prev_char not in '.!?\n:':
                word1 = match.group(1)
                word2 = match.group(2)
                
                # Bỏ qua nếu là danh từ riêng
                if is_proper_noun(word1) or is_proper_noun(word2):
                    continue
                
                # Chỉ sửa nếu ít nhất một trong hai từ là tiếng Việt (có dấu)
                # Hoặc cả hai đều là tiếng Việt
                if is_vietnamese_word(word1) or is_vietnamese_word(word2):
                    pattern_text = match.group(0)
                    replacement = word1 + ' ' + word2.lower()
                    detected_patterns.add((pattern_text, replacement))
    
    # Pattern 2: "Từ1 Từ2 Từ3" - nhiều từ viết hoa liên tiếp
    pattern2 = r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    
    for match in re.finditer(pattern2, content):
        start_pos = match.start()
        if start_pos > 0:
            prev_char = content[start_pos - 1]
            if prev_char not in '.!?\n:':
                word1 = match.group(1)
                word2 = match.group(2)
                word3 = match.group(3)
                
                # Bỏ qua nếu có danh từ riêng
                if is_proper_noun(word1) or is_proper_noun(word2) or is_proper_noun(word3):
                    continue
                
                # Chỉ sửa nếu có ít nhất một từ tiếng Việt
                if is_vietnamese_word(word1) or is_vietnamese_word(word2) or is_vietnamese_word(word3):
                    pattern_text = match.group(0)
                    replacement = word1 + ' ' + word2.lower() + ' ' + word3.lower()
                    detected_patterns.add((pattern_text, replacement))
    
    return detected_patterns

def detect_capitalization_errors(text):
    """
    Tự động phát hiện các lỗi viết hoa tiếng Việt
    Pattern: Từ viết hoa đứng sau một từ khác (không phải đầu câu) và không phải danh từ riêng
    """
    errors = []
    
    # Pattern: Từ viết hoa đứng sau một từ khác (có khoảng trắng)
    # Ví dụ: "Nhu cầu Dinh dưỡng", "Khoảng giá trị Quan trọng"
    # Regex: tìm pattern "Từ1 Từ2" trong đó cả hai đều viết hoa chữ cái đầu
    pattern = r'([a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    
    for match in re.finditer(pattern, text):
        start_pos = match.start()
        # Kiểm tra xem có phải đầu câu không
        if start_pos > 0:
            prev_char = text[start_pos - 1]
            # Nếu không phải sau dấu câu hoặc đầu dòng, có thể là lỗi
            if prev_char not in '.!?\n:':
                word1 = match.group(1)
                word2 = match.group(2)
                # Loại trừ một số trường hợp đặc biệt
                # Danh từ riêng thường có chữ cái đầu viết hoa ở cả hai từ
                # Nhưng trong tiếng Việt, từ thứ hai thường không viết hoa
                errors.append((match.group(0), word1 + ' ' + word2.lower(), start_pos))
    
    # Pattern: "Từ1 Từ2 Từ3" - nhiều từ viết hoa liên tiếp
    # Ví dụ: "Khoảng giá trị Quan trọng Hơn"
    pattern2 = r'([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)\s+([A-ZÀÁẢÃẠĂẮẰẲẴẶÂẤẦẨẪẬÈÉẺẼẸÊẾỀỂỄỆÌÍỈĨỊÒÓỎÕỌÔỐỒỔỖỘƠỚỜỞỠỢÙÚỦŨỤƯỨỪỬỮỰỲÝỶỸỴĐ][a-zàáảãạăắằẳẵặâấầẩẫậèéẻẽẹêếềểễệìíỉĩịòóỏõọôốồổỗộơớờởỡợùúủũụưứừửữựỳýỷỹỵđ]+)'
    
    for match in re.finditer(pattern2, text):
        start_pos = match.start()
        if start_pos > 0:
            prev_char = text[start_pos - 1]
            if prev_char not in '.!?\n:':
                word1 = match.group(1)
                word2 = match.group(2)
                word3 = match.group(3)
                # Giữ nguyên từ đầu, viết thường các từ sau
                errors.append((match.group(0), word1 + ' ' + word2.lower() + ' ' + word3.lower(), start_pos))
    
    return errors

def fix_file(file_path):
    """Sửa lỗi viết hoa trong một file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Sửa các pattern cụ thể
        replacements = [
            # Pattern: "Tips Thực hành" → "Tips thực hành"
            (r'Tips Thực hành', 'Tips thực hành'),
            (r'Lời khuyên Thực hành', 'Lời khuyên thực hành'),
            
            # Pattern: "Chế độ Ăn" → "Chế độ ăn"
            (r'Chế độ Ăn', 'Chế độ ăn'),
            
            # Pattern: "Hiểu lầm Phổ biến" → "Hiểu lầm phổ biến"
            (r'Hiểu lầm Phổ biến', 'Hiểu lầm phổ biến'),
            
            # Pattern: "Nên Hạn chế" → "Nên hạn chế"
            (r'Nên Hạn chế', 'Nên hạn chế'),
            (r'Nên Hạn chế', 'Nên hạn chế'),
            
            # Pattern: "Nên Tránh" → "Nên tránh"
            (r'Nên Tránh', 'Nên tránh'),
            
            # Pattern: "Nên Cải thiện" → "Nên cải thiện"
            (r'Nên Cải thiện', 'Nên cải thiện'),
            
            # Pattern: "Cần Điều chỉnh" → "Cần điều chỉnh"
            (r'Cần Điều chỉnh', 'Cần điều chỉnh'),
            
            # Pattern: "Phương pháp Tốt" → "Phương pháp tốt"
            (r'Phương pháp Tốt', 'Phương pháp tốt'),
            
            # Pattern: "Cách Dùng Tốt" → "Cách dùng tốt"
            (r'Cách Dùng Tốt', 'Cách dùng tốt'),
            (r'Cách Dùng Nên Hạn chế', 'Cách dùng nên hạn chế'),
            
            # Pattern: "Gia vị Tốt" → "Gia vị tốt"
            (r'Gia vị Tốt', 'Gia vị tốt'),
            
            # Pattern: "Thực phẩm Nên Tránh" → "Thực phẩm nên tránh"
            (r'Thực phẩm Nên Tránh', 'Thực phẩm nên tránh'),
            
            # Pattern: "Lựa chọn Nên Hạn chế" → "Lựa chọn nên hạn chế"
            (r'Lựa chọn Nên Hạn chế', 'Lựa chọn nên hạn chế'),
            
            # Pattern: "Snack Nên Hạn chế" → "Snack nên hạn chế"
            (r'Snack Nên Hạn chế', 'Snack nên hạn chế'),
            
            # Pattern: "Chất béo Bão hòa" → "Chất béo bão hòa"
            (r'Chất béo Bão hòa', 'Chất béo bão hòa'),
            
            # Pattern: "Hiểu các Loại" → "Hiểu các loại"
            (r'Hiểu các Loại', 'Hiểu các loại'),
            
            # Pattern: "Ảnh hưởng Sức khỏe" → "Ảnh hưởng sức khỏe"
            (r'Ảnh hưởng Sức khỏe', 'Ảnh hưởng sức khỏe'),
            
            # Pattern: "Bữa Trưa" (trong nội dung) → "Bữa trưa"
            (r'Bữa Trưa(?!\s)', 'Bữa trưa'),
            
            # Pattern: "Bữa Tối" (trong nội dung) → "Bữa tối"
            (r'Bữa Tối(?!\s)', 'Bữa tối'),
            
            # Pattern: "Bữa Sáng" (trong nội dung) → "Bữa sáng"
            (r'Bữa Sáng(?!\s)', 'Bữa sáng'),
            
            # Pattern: "Đĩa Ăn" → "Đĩa ăn"
            (r'Đĩa Ăn', 'Đĩa ăn'),
            
            # Pattern: "Cách Ăn" → "Cách ăn"
            (r'Cách Ăn', 'Cách ăn'),
            
            # Pattern: "Phương pháp Nên Hạn chế" → "Phương pháp nên hạn chế"
            (r'Phương pháp Nên Hạn chế', 'Phương pháp nên hạn chế'),
            
            # Pattern: "Các Phương pháp Phổ biến" → "Các Phương pháp phổ biến"
            (r'Các Phương pháp Phổ biến', 'Các Phương pháp phổ biến'),
            
            # Pattern: "Chất béo trong Chế độ Ăn" → "Chất béo trong Chế độ ăn"
            (r'Chất béo trong Chế độ Ăn', 'Chất béo trong Chế độ ăn'),
            
            # Pattern: "Bữa Ăn" → "Bữa ăn" (trong nội dung, không phải đầu câu)
            (r'Bữa Ăn', 'Bữa ăn'),
            
            # Pattern: "Cách Cân bằng" → "Cách cân bằng"
            (r'Cách Cân bằng', 'Cách cân bằng'),
            
            # Pattern: "Bữa ăn Cân bằng" → "Bữa ăn cân bằng"
            (r'Bữa ăn Cân bằng', 'Bữa ăn cân bằng'),
            
            # Pattern: "Bữa ăn Không Cân bằng" → "Bữa ăn không Cân bằng"
            (r'Bữa ăn Không Cân bằng', 'Bữa ăn không Cân bằng'),
            
            # Pattern: "Lập Kế hoạch Bữa ăn" → "Lập Kế hoạch Bữa ăn" (giữ nguyên vì là tiêu đề)
            # Pattern: "Cấu trúc Bữa ăn" → "Cấu trúc Bữa ăn" (giữ nguyên)
            
            # Pattern: "Ví dụ Bữa ăn" → "Ví dụ Bữa ăn" (giữ nguyên)
            
            # Pattern: "So sánh Bữa ăn" → "So sánh Bữa ăn" (giữ nguyên)
            
            # Pattern: "Các Loại" → "Các loại" (khi không phải đầu câu)
            (r'Các Loại', 'Các loại'),
            
            # Pattern: "Bảng Nguồn" → "Bảng nguồn" (khi không phải đầu câu)
            (r'Bảng Nguồn', 'Bảng nguồn'),
            
            # Pattern: "Chi tiết" → "chi tiết" (khi không phải đầu câu)
            (r'Chi tiết', 'chi tiết'),
            
            # Pattern: "Năng lượng" → "năng lượng" (khi không phải đầu câu)
            (r'Năng lượng', 'năng lượng'),
            
            # Pattern: "Cơ thể" → "cơ thể" (khi không phải đầu câu)
            (r'Cơ thể', 'cơ thể'),
            
            # Pattern: "Uống Bao nhiêu Nước là Đủ" → "Uống bao nhiêu nước là đủ"
            (r'Uống Bao nhiêu Nước là Đủ', 'Uống bao nhiêu nước là đủ'),
            
            # Pattern: "Thiếu Nước" → "Thiếu nước"
            (r'Thiếu Nước', 'Thiếu nước'),
            
            # Pattern: "Dấu hiệu Thiếu Nước" → "Dấu hiệu thiếu nước"
            (r'Dấu hiệu Thiếu Nước', 'Dấu hiệu thiếu nước'),
            
            # Pattern: "Ai dễ bị Thiếu Nước" → "Ai dễ bị thiếu nước"
            (r'Ai dễ bị Thiếu Nước', 'Ai dễ bị thiếu nước'),
            
            # Pattern: "Tiêu chảy và Nôn mửa" → "Tiêu chảy và nôn mửa"
            (r'Tiêu chảy và Nôn mửa', 'Tiêu chảy và nôn mửa'),
            
            # Pattern: "Mẹo Đảm bảo Đủ Nước" → "Mẹo đảm bảo đủ nước"
            (r'Mẹo Đảm bảo Đủ Nước', 'Mẹo đảm bảo đủ nước'),
            
            # Pattern: "Lưu ý Đặc biệt" → "Lưu ý đặc biệt"
            (r'Lưu ý Đặc biệt', 'Lưu ý đặc biệt'),
            
            # Pattern: "Cách Uống Nước Đúng" → "Cách uống nước đúng"
            (r'Cách Uống Nước Đúng', 'Cách uống nước đúng'),
            
            # Pattern: "Ứng dụng trong Dinh dưỡng Lâm sàng" → "Ứng dụng trong Dinh dưỡng lâm sàng"
            (r'Ứng dụng trong Dinh dưỡng Lâm sàng', 'Ứng dụng trong Dinh dưỡng lâm sàng'),
            
            # Pattern: "Dinh dưỡng Lâm sàng" → "Dinh dưỡng lâm sàng"
            (r'Dinh dưỡng Lâm sàng', 'Dinh dưỡng lâm sàng'),
            
            # Pattern: "Lâm sàng" → "lâm sàng" (khi không phải đầu câu)
            (r'Lâm sàng', 'lâm sàng'),
            
            # Pattern: "đến từ Đâu" → "đến từ đâu"
            (r'đến từ Đâu', 'đến từ đâu'),
            
            # Pattern: "Bảng Nguồn Nước trong Đời sống" → "Bảng nguồn nước trong Đời sống"
            (r'Bảng Nguồn Nước trong Đời sống', 'Bảng nguồn nước trong Đời sống'),
            
            # Pattern: "Đảm bảo" → "đảm bảo" (khi không phải đầu câu)
            (r'Đảm bảo', 'đảm bảo'),
            
            # Pattern: "Đủ Nước" → "đủ nước" (khi không phải đầu câu)
            (r'Đủ Nước', 'đủ nước'),
            
            # Pattern: "Đặc biệt" → "đặc biệt" (khi không phải đầu câu)
            (r'Đặc biệt', 'đặc biệt'),
            
            # Pattern: "Nôn mửa" → "nôn mửa" (khi không phải đầu câu)
            (r'Nôn mửa', 'nôn mửa'),
            
            # Pattern: "Nước và Dịch trong Dinh dưỡng Lâm sàng" → "Nước và Dịch trong Dinh dưỡng lâm sàng"
            (r'Nước và Dịch trong Dinh dưỡng Lâm sàng', 'Nước và Dịch trong Dinh dưỡng lâm sàng'),
            
            # Pattern: "Ăn nhiều Muối" → "Ăn nhiều muối"
            (r'Ăn nhiều Muối', 'Ăn nhiều muối'),
            
            # Pattern: "Nên Ăn Bao nhiêu" → "Nên ăn bao nhiêu"
            (r'Nên Ăn Bao nhiêu', 'Nên ăn bao nhiêu'),
            
            # Pattern: "Nguồn Muối Phổ biến trong Bữa ăn" → "Nguồn muối phổ biến trong Bữa ăn"
            (r'Nguồn Muối Phổ biến trong Bữa ăn', 'Nguồn muối phổ biến trong Bữa ăn'),
            
            # Pattern: "Áp dụng Thực tế" → "Áp dụng thực tế"
            (r'Áp dụng Thực tế', 'Áp dụng thực tế'),
            
            # Pattern: "Nguyên tắc Giảm Muối trong Đời sống" → "Nguyên tắc giảm muối trong Đời sống"
            (r'Nguyên tắc Giảm Muối trong Đời sống', 'Nguyên tắc giảm muối trong Đời sống'),
            
            # Pattern: "Giảm Muối" → "giảm muối" (khi không phải đầu câu)
            (r'Giảm Muối', 'giảm muối'),
            
            # Pattern: "Thực tế" → "thực tế" (khi không phải đầu câu)
            (r'Thực tế', 'thực tế'),
            
            # Pattern: "Đời sống" → "đời sống" (khi không phải đầu câu)
            (r'Đời sống', 'đời sống'),
            
            # Pattern: "Bao nhiêu" → "bao nhiêu" (khi không phải đầu câu)
            (r'Bao nhiêu', 'bao nhiêu'),
            
            # Pattern: "Nguồn Muối" → "Nguồn muối" (khi không phải đầu câu)
            (r'Nguồn Muối', 'Nguồn muối'),
            
            # Pattern: "Truyền thống" → "truyền thống" (khi không phải đầu câu)
            (r'Truyền thống', 'truyền thống'),
            
            # Pattern: "Giá trị Dinh dưỡng Nước mắm" → "Giá trị dinh dưỡng Nước mắm"
            (r'Giá trị Dinh dưỡng Nước mắm', 'Giá trị dinh dưỡng Nước mắm'),
            
            # Pattern: "Cách Dùng Nước mắm Đúng cách" → "Cách dùng Nước mắm đúng cách"
            (r'Cách Dùng Nước mắm Đúng cách', 'Cách dùng Nước mắm đúng cách'),
            
            # Pattern: "Cách Dùng Đúng" → "Cách dùng đúng"
            (r'Cách Dùng Đúng', 'Cách dùng đúng'),
            
            # Pattern: "Gia vị Thay thế" → "Gia vị thay thế"
            (r'Gia vị Thay thế', 'Gia vị thay thế'),
            
            # Pattern: "Thực phẩm Lên men Tốt" → "Thực phẩm lên men tốt"
            (r'Thực phẩm Lên men Tốt', 'Thực phẩm lên men tốt'),
            
            # Pattern: "Dùng Ít" → "Dùng ít"
            (r'Dùng Ít', 'Dùng ít'),
            
            # Pattern: "Bài viết Liên quan" → "Bài viết liên quan"
            (r'Bài viết Liên quan', 'Bài viết liên quan'),
            
            # Pattern: "Điều chỉnh Cho Người có Bệnh lý" → "Điều chỉnh cho Người có bệnh lý"
            (r'Điều chỉnh Cho Người có Bệnh lý', 'Điều chỉnh cho Người có bệnh lý'),
            
            # Pattern: "Món Ăn Truyền thống" → "Món ăn truyền thống"
            (r'Món Ăn Truyền thống', 'Món ăn truyền thống'),
            
            # Pattern: "Phương pháp Truyền thống" → "Phương pháp truyền thống"
            (r'Phương pháp Truyền thống', 'Phương pháp truyền thống'),
            
            # Pattern: "Chợ Truyền thống" → "Chợ truyền thống"
            (r'Chợ Truyền thống', 'Chợ truyền thống'),
            
            # Pattern: "Gia vị Truyền thống" → "Gia vị truyền thống"
            (r'Gia vị Truyền thống', 'Gia vị truyền thống'),
            
            # Pattern: "Thay thế" → "thay thế" (khi không phải đầu câu)
            (r'Thay thế', 'thay thế'),
            
            # Pattern: "Lên men" → "lên men" (khi không phải đầu câu)
            (r'Lên men', 'lên men'),
            
            # Pattern: "Liên quan" → "liên quan" (khi không phải đầu câu)
            (r'Liên quan', 'liên quan'),
            
            # Pattern: "Bệnh lý" → "bệnh lý" (khi không phải đầu câu)
            (r'Bệnh lý', 'bệnh lý'),
            
            # Pattern: "Đúng cách" → "đúng cách" (khi không phải đầu câu)
            (r'Đúng cách', 'đúng cách'),
            
            # Pattern: "Nhu cầu Dinh dưỡng" → "nhu cầu dinh dưỡng" (khi không phải đầu câu)
            (r'Nhu cầu Dinh dưỡng', 'nhu cầu dinh dưỡng'),
            
            # Pattern: "Ước tính Nhu cầu Dinh dưỡng" → "Ước tính nhu cầu dinh dưỡng"
            (r'Ước tính Nhu cầu Dinh dưỡng', 'Ước tính nhu cầu dinh dưỡng'),
            
            # Pattern: "Vì sao Khoảng giá trị Quan trọng Hơn Con số Chính xác" → "Vì sao khoảng giá trị quan trọng hơn con số chính xác"
            (r'Vì sao Khoảng giá trị Quan trọng Hơn Con số Chính xác', 'Vì sao khoảng giá trị quan trọng hơn con số chính xác'),
            
            # Pattern: "Vì sao Nhu cầu Là Ước tính, Không phải Mục tiêu Chính xác" → "Vì sao nhu cầu là ước tính, không phải mục tiêu chính xác"
            (r'Vì sao Nhu cầu Là Ước tính, Không phải Mục tiêu Chính xác', 'Vì sao nhu cầu là ước tính, không phải mục tiêu chính xác'),
            
            # Pattern: "Tầm quan trọng của Khoảng giá trị" → "Tầm quan trọng của khoảng giá trị"
            (r'Tầm quan trọng của Khoảng giá trị', 'Tầm quan trọng của khoảng giá trị'),
            
            # Pattern: "Không phải Con số Đơn lẻ" → "Không phải con số đơn lẻ"
            (r'Không phải Con số Đơn lẻ', 'Không phải con số đơn lẻ'),
            
            # Pattern: "Khoảng giá trị" → "khoảng giá trị" (khi không phải đầu câu)
            (r'Khoảng giá trị', 'khoảng giá trị'),
            
            # Pattern: "Con số Chính xác" → "con số chính xác" (khi không phải đầu câu)
            (r'Con số Chính xác', 'con số chính xác'),
            
            # Pattern: "Con số Đơn lẻ" → "con số đơn lẻ" (khi không phải đầu câu)
            (r'Con số Đơn lẻ', 'con số đơn lẻ'),
            
            # Pattern: "Quan trọng Hơn" → "quan trọng hơn" (khi không phải đầu câu)
            (r'Quan trọng Hơn', 'quan trọng hơn'),
            
            # Pattern: "Mục tiêu Chính xác" → "mục tiêu chính xác" (khi không phải đầu câu)
            (r'Mục tiêu Chính xác', 'mục tiêu chính xác'),
            
            # Pattern: "Là Ước tính" → "là ước tính" (khi không phải đầu câu)
            (r'Là Ước tính', 'là ước tính'),
            
            # Pattern: "Tinh bột và Đường" → "tinh bột và đường" (khi không phải đầu câu)
            (r'Tinh bột và Đường', 'tinh bột và đường'),
            
            # Pattern: "Tinh chế" → "tinh chế" (khi không phải đầu câu)
            (r'Tinh chế', 'tinh chế'),
            
            # Pattern: "Nguyên cám" → "nguyên cám" (khi không phải đầu câu)
            (r'Nguyên cám', 'nguyên cám'),
            
            # Pattern: "Hợp lý" → "hợp lý" (khi không phải đầu câu)
            (r'Hợp lý', 'hợp lý'),
            
            # Pattern: "Ví dụ Cách giảm đường" → "Ví dụ cách giảm đường"
            (r'Ví dụ Cách giảm đường', 'Ví dụ cách giảm đường'),
            
            # Pattern: "Áp dụng trong Bữa ăn" → "Áp dụng trong bữa ăn"
            (r'Áp dụng trong Bữa ăn', 'Áp dụng trong bữa ăn'),
            
            # Pattern: "Khẩu phần" → "khẩu phần" (khi không phải đầu câu)
            (r'Khẩu phần', 'khẩu phần'),
            
            # Pattern: "Thể chất" → "thể chất" (khi không phải đầu câu)
            (r'Thể chất', 'thể chất'),
            
            # Pattern: "các Chất dinh dưỡng Đa lượng" → "các chất dinh dưỡng đa lượng"
            (r'các Chất dinh dưỡng Đa lượng', 'các chất dinh dưỡng đa lượng'),
            
            # Pattern: "Chất dinh dưỡng Đa lượng" → "chất dinh dưỡng đa lượng" (khi không phải đầu câu)
            (r'Chất dinh dưỡng Đa lượng', 'chất dinh dưỡng đa lượng'),
            
            # Pattern: "trong Chế độ ăn" → "trong chế độ ăn"
            (r'trong Chế độ ăn', 'trong chế độ ăn'),
            
            # Pattern: "nguồn Chất béo Phổ biến" → "nguồn chất béo phổ biến"
            (r'nguồn Chất béo Phổ biến', 'nguồn chất béo phổ biến'),
            
            # Pattern: "Chất béo Không bão hòa" → "Chất béo không bão hòa"
            (r'Chất béo Không bão hòa', 'Chất béo không bão hòa'),
            
            # Pattern: "Nên tránh Hoàn toàn" → "Nên tránh hoàn toàn"
            (r'Nên tránh Hoàn toàn', 'Nên tránh hoàn toàn'),
            
            # Pattern: "Vì sao Dinh dưỡng Quan trọng" → "Vì sao dinh dưỡng quan trọng"
            (r'Vì sao Dinh dưỡng Quan trọng', 'Vì sao dinh dưỡng quan trọng'),
            
            # Pattern: "Tài liệu Tham khảo & Hướng dẫn" → "Tài liệu tham khảo & Hướng dẫn"
            (r'Tài liệu Tham khảo & Hướng dẫn', 'Tài liệu tham khảo & Hướng dẫn'),
            
            # Pattern: "Nhu cầu Dịch – Công cụ Giảng dạy" → "Nhu cầu dịch – Công cụ giảng dạy"
            (r'Nhu cầu Dịch – Công cụ Giảng dạy', 'Nhu cầu dịch – Công cụ giảng dạy'),
            
            # Pattern: "Hướng dẫn Sử dụng" → "Hướng dẫn sử dụng"
            (r'Hướng dẫn Sử dụng', 'Hướng dẫn sử dụng'),
            
            # Pattern: "Những điều Cần tránh" → "Những điều cần tránh"
            (r'Những điều Cần tránh', 'Những điều cần tránh'),
            
            # Pattern: "Canh Việt Nam và Dinh dưỡng" → "Canh Việt Nam và dinh dưỡng"
            (r'Canh Việt Nam và Dinh dưỡng', 'Canh Việt Nam và dinh dưỡng'),
            
            # Pattern: "Các loại Canh Việt Nam Phổ biến" → "Các loại Canh Việt Nam phổ biến"
            (r'Các loại Canh Việt Nam Phổ biến', 'Các loại Canh Việt Nam phổ biến'),
            
            # Pattern: "Hoạt động Thể chất" → "Hoạt động thể chất"
            (r'Hoạt động Thể chất', 'Hoạt động thể chất'),
            
            # Pattern: "Tinh bột Tinh chế" → "Tinh bột tinh chế"
            (r'Tinh bột Tinh chế', 'Tinh bột tinh chế'),
            
            # Pattern: "Tinh bột Nguyên cám" → "Tinh bột nguyên cám"
            (r'Tinh bột Nguyên cám', 'Tinh bột nguyên cám'),
            
            # Pattern: "Đa lượng" → "đa lượng" (khi không phải đầu câu)
            (r'Đa lượng', 'đa lượng'),
            
            # Pattern: "Không bão hòa" → "không bão hòa" (khi không phải đầu câu)
            (r'Không bão hòa', 'không bão hòa'),
            
            # Pattern: "Hoàn toàn" → "hoàn toàn" (khi không phải đầu câu)
            (r'Hoàn toàn', 'hoàn toàn'),
            
            # Pattern: "Tham khảo" → "tham khảo" (khi không phải đầu câu)
            (r'Tham khảo', 'tham khảo'),
            
            # Pattern: "Giảng dạy" → "giảng dạy" (khi không phải đầu câu)
            (r'Giảng dạy', 'giảng dạy'),
            
            # Pattern: "Sử dụng" → "sử dụng" (khi không phải đầu câu)
            (r'Sử dụng', 'sử dụng'),
            
            # Pattern: "Nhu cầu Dịch" → "Nhu cầu dịch" (trừ khi là tên tool riêng)
            (r'Nhu cầu Dịch', 'Nhu cầu dịch'),
            
            # Pattern: "Máy tính Nhu cầu Dịch" → "Máy tính nhu cầu dịch"
            (r'Máy tính Nhu cầu Dịch', 'Máy tính nhu cầu dịch'),
            
            # Pattern: "Khẩu phần Đồ" → "Khẩu phần đồ"
            (r'Khẩu phần Đồ', 'Khẩu phần đồ'),
            
            # Pattern: "Lưu ý về Khẩu phần" → "Lưu ý về khẩu phần"
            (r'Lưu ý về Khẩu phần', 'Lưu ý về khẩu phần'),
            
            # Pattern: "Ví dụ Khẩu phần" → "Ví dụ khẩu phần"
            (r'Ví dụ Khẩu phần', 'Ví dụ khẩu phần'),
            
            # Pattern: "Cách ước lượng Khẩu phần" → "Cách ước lượng khẩu phần"
            (r'Cách ước lượng Khẩu phần', 'Cách ước lượng khẩu phần'),
            
            # Pattern: "So sánh: Khẩu phần" → "So sánh: khẩu phần"
            (r'So sánh: Khẩu phần', 'So sánh: khẩu phần'),
            
            # Pattern: "Khẩu phần Carbohydrate" → "Khẩu phần carbohydrate"
            (r'Khẩu phần Carbohydrate', 'Khẩu phần carbohydrate'),
            
            # Pattern: "Dịch" → "dịch" (khi không phải đầu câu và không phải tên riêng)
            (r'\bDịch\b', 'dịch'),
        ]
        
        # Tự động phát hiện các pattern mới và áp dụng trực tiếp
        auto_detected = auto_detect_capitalization_patterns(content)
        for pattern_text, replacement in auto_detected:
            # Áp dụng pattern tự động phát hiện
            def replace_auto_pattern(match):
                start = match.start()
                if start == 0:
                    return match.group(0)
                prev_char = content[start - 1]
                if prev_char in '.!?\n:':
                    return match.group(0)
                return replacement
            
            pattern_regex = re.escape(pattern_text)
            content = re.sub(pattern_regex, replace_auto_pattern, content)
        
        for pattern, replacement in replacements:
            # Không sửa nếu là từ đầu câu
            def replace_with_context(match):
                start = match.start()
                # Kiểm tra ký tự trước đó
                if start == 0:
                    return match.group(0)  # Đầu file - giữ nguyên
                prev_char = content[start - 1]
                if prev_char in '.!?\n':
                    return match.group(0)  # Sau dấu câu - giữ nguyên
                return replacement
            
            content = re.sub(pattern, replace_with_context, content)
        
        # Chỉ ghi file nếu có thay đổi
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    
    except Exception as e:
        print(f"Lỗi khi xử lý {file_path}: {e}")
        return False

def scan_all_files_for_patterns():
    """
    Quét toàn bộ codebase để tìm các pattern viết hoa sai
    Trả về danh sách các pattern cần thêm vào script
    """
    base_dir = Path(__file__).parent
    
    # Tìm tất cả file .tsx và .ts
    files_to_scan = []
    for ext in ['*.tsx', '*.ts']:
        files_to_scan.extend(base_dir.glob(f'app/**/{ext}'))
        files_to_scan.extend(base_dir.glob(f'lib/**/{ext}'))
    
    files_to_scan = [f for f in files_to_scan if 'node_modules' not in str(f)]
    
    all_patterns = set()
    
    print(f"Đang quét {len(files_to_scan)} file để tìm pattern viết hoa sai...")
    
    for file_path in files_to_scan:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            patterns = auto_detect_capitalization_patterns(content)
            if patterns:
                all_patterns.update(patterns)
        except Exception as e:
            pass  # Bỏ qua lỗi
    
    print(f"\nTìm thấy {len(all_patterns)} pattern viết hoa sai:")
    for pattern, replacement in sorted(all_patterns):
        print(f"  '{pattern}' → '{replacement}'")
    
    return all_patterns

def main():
    """Hàm chính"""
    import sys
    import io
    # Set UTF-8 encoding for stdout
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    
    # Kiểm tra argument: nếu có --scan thì chỉ quét, không sửa
    if len(sys.argv) > 1 and sys.argv[1] == '--scan':
        scan_all_files_for_patterns()
        return
    
    base_dir = Path(__file__).parent
    
    # Tìm tất cả file .tsx và .ts trong thư mục app và lib
    files_to_fix = []
    for ext in ['*.tsx', '*.ts']:
        files_to_fix.extend(base_dir.glob(f'app/**/{ext}'))
        files_to_fix.extend(base_dir.glob(f'lib/**/{ext}'))
    
    # Loại bỏ node_modules và các thư mục không cần thiết
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in str(f)]
    
    print(f"Tim thay {len(files_to_fix)} file can kiem tra...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            print(f"✓ Da sua: {file_path}")
            fixed_count += 1
    
    print(f"\nHoan thanh! Da sua {fixed_count} file.")

if __name__ == '__main__':
    main()
