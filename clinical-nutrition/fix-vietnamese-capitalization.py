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
        ]
        
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

def main():
    """Hàm chính"""
    base_dir = Path(__file__).parent
    
    # Tìm tất cả file .tsx và .ts trong thư mục app và lib
    files_to_fix = []
    for ext in ['*.tsx', '*.ts']:
        files_to_fix.extend(base_dir.glob(f'app/**/{ext}'))
        files_to_fix.extend(base_dir.glob(f'lib/**/{ext}'))
    
    # Loại bỏ node_modules và các thư mục không cần thiết
    files_to_fix = [f for f in files_to_fix if 'node_modules' not in str(f)]
    
    import sys
    import io
    # Set UTF-8 encoding for stdout
    sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8', errors='replace')
    
    print(f"Tim thay {len(files_to_fix)} file can kiem tra...")
    
    fixed_count = 0
    for file_path in files_to_fix:
        if fix_file(file_path):
            print(f"✓ Da sua: {file_path}")
            fixed_count += 1
    
    print(f"\nHoan thanh! Da sua {fixed_count} file.")

if __name__ == '__main__':
    main()
