/**
 * Myths Data
 * 
 * Educational Purpose: This file contains the data for common misconceptions
 * in clinical nutrition. Each myth includes:
 * - The common belief (myth)
 * - Why it sounds right (helps readers understand the appeal)
 * - What actually happens in practice (clinical reality)
 * - What to understand instead (evidence-based replacement)
 * - Optional clinical insight (additional context)
 * 
 * Content Philosophy: Non-judgmental, educational approach that helps readers
 * understand misconceptions without shaming, alarmist language, or treatment advice.
 */

export interface Myth {
  id: string;
  myth: string;
  whyItSoundsRight: string;
  whatActuallyHappens: string;
  whatToUnderstandInstead: string;
  clinicalInsight?: string;
}

export const myths: Myth[] = [
  {
    id: 'universal-calorie-requirement',
    myth: 'Tất cả bệnh nhân cần cùng một nhu cầu calo (ví dụ: 2000 kcal/ngày)',
    whyItSoundsRight: 'Con số "2000 kcal" quen thuộc từ nhãn thực phẩm và thông điệp sức khỏe chung, khiến nó cảm thấy như một tiêu chuẩn phổ quát. Trong môi trường lâm sàng bận rộn, sử dụng một con số duy nhất cảm thấy hiệu quả hơn so với tính toán nhu cầu cá nhân.',
    whatActuallyHappens: 'Nhu cầu năng lượng được cá thể hóa cao. Một bệnh nhân cao tuổi ít vận động có thể cần 1200-1400 kcal/ngày, trong khi một bệnh nhân bệnh nặng với bỏng có thể cần 3000-4000 kcal/ngày. Sử dụng cách tiếp cận "một kích cỡ phù hợp tất cả" có thể không đáp ứng nhu cầu cá nhân và có thể dẫn đến cho ăn quá mức (có thể góp phần vào hội chứng tái cho ăn - một tình trạng nơi dinh dưỡng nhanh gây ra sự dịch chuyển điện giải) hoặc cho ăn thiếu (có thể trì hoãn phục hồi và lành vết thương).',
    whatToUnderstandInstead: 'Nhu cầu calo thay đổi đáng kể dựa trên tuổi, giới tính, thành phần cơ thể, mức độ hoạt động, trạng thái chuyển hóa, và tình trạng lâm sàng. Nhu cầu cá nhân có thể được tính toán sử dụng các phương trình đã được xác nhận điều chỉnh cho tình huống cụ thể của bệnh nhân.',
    clinicalInsight: 'Các tình trạng tăng chuyển hóa (nhiễm trùng huyết, bỏng, chấn thương) yêu cầu calo cao hơn vì cơ thể đang làm việc chăm chỉ hơn để chữa lành. Các trạng thái giảm chuyển hóa (cao tuổi, ít vận động, bệnh mạn tính) yêu cầu calo thấp hơn vì cơ thể cần ít năng lượng hơn.'
  },
  {
    id: 'protein-more-is-better',
    myth: 'Nhiều protein hơn luôn tốt hơn cho phục hồi',
    whyItSoundsRight: 'Tư duy "nhiều hơn là tốt hơn" hấp dẫn vì protein rõ ràng quan trọng cho chữa lành. Cảm thấy an toàn hơn khi sai lệch về phía nhiều hơn thay vì ít hơn. Niềm tin này được củng cố bởi văn hóa thể dục và tiếp thị bổ sung thúc đẩy lượng ăn vào protein cao như có lợi phổ quát.',
    whatActuallyHappens: 'Mặc dù protein đầy đủ là cần thiết cho chữa lành vết thương và bảo tồn cơ, protein quá mức (vượt quá 2.0-2.5 g/kg/ngày trong hầu hết các trường hợp) không cung cấp lợi ích bổ sung và có thể làm xấu đi chức năng thận, tăng triệu chứng urê huyết (tích tụ sản phẩm thải trong máu), và tạo ra stress chuyển hóa. cơ thể không thể lưu trữ protein dư thừa như nó có thể lưu trữ chất béo.',
    whatToUnderstandInstead: 'Lượng ăn vào protein quá mức có thể không cải thiện kết quả vượt quá phạm vi tối ưu và có thể có vấn đề, đặc biệt ở bệnh nhân suy giảm chức năng thận. Bằng chứng gợi ý rằng hầu hết bệnh nhân nằm viện cần khoảng 1.2-2.0 g/kg/ngày, với nhu cầu cao hơn (lên đến 2.5 g/kg/ngày) trong các tình trạng cụ thể như bỏng nặng, chấn thương lớn, hoặc bệnh nặng.',
    clinicalInsight: 'Tính đầy đủ là mục tiêu, không phải tối đa hóa. Theo dõi chức năng thận (creatinine, BUN) có thể giúp hướng dẫn quyết định lượng ăn vào protein. cơ thể chỉ có thể sử dụng một lượng protein nhất định cùng một lúc, vì vậy phân phối lượng ăn vào trong suốt ngày có thể hiệu quả hơn so với liều đơn lớn.'
  },
  {
    id: 'npo-before-surgery',
    myth: 'Tất cả bệnh nhân phải NPO (không ăn uống qua đường miệng) từ nửa đêm trước phẫu thuật',
    whyItSoundsRight: 'Quy tắc "NPO sau nửa đêm" đã là thực hành tiêu chuẩn trong nhiều thập kỷ và cảm thấy như một cách tiếp cận an toàn, bảo thủ. Nỗi sợ hít sặc trong gây mê là dễ hiểu, và sự đơn giản của một quy tắc phổ quát làm cho nó dễ thực hiện.',
    whatActuallyHappens: 'Quy tắc truyền thống "NPO sau nửa đêm" dựa trên mối quan tâm lỗi thời về nguy cơ hít sặc (thực phẩm/chất lỏng vào phổi trong gây mê). Bằng chứng cho thấy rằng cho phép chất lỏng trong suốt lên đến 2 giờ trước phẫu thuật thực sự giảm biến chứng, cải thiện sự thoải mái của bệnh nhân, duy trì hydrat hóa, và có thể cải thiện kiểm soát đường huyết. Nhịn ăn kéo dài tăng kháng insulin và dị hóa (phá vỡ cơ).',
    whatToUnderstandInstead: 'Hướng dẫn hiện đại cho phép chất lỏng trong suốt lên đến 2 giờ trước phẫu thuật và bữa ăn nhẹ lên đến 6 giờ trước, giảm biến chứng. Tuân theo giao thức ERAS (Phục hồi Tăng cường Sau Phẫu thuật) khi phù hợp. Ngoại lệ bao gồm bệnh nhân có làm rỗng dạ dày chậm, tắc ruột, hoặc yêu cầu phẫu thuật cụ thể.',
    clinicalInsight: 'Bằng chứng gợi ý rằng chất lỏng trong suốt (nước, nước ép trong suốt, cà phê đen) có thể phù hợp 2+ giờ trước phẫu thuật cho nhiều bệnh nhân. Dạ dày làm rỗng chất lỏng trong suốt tương đối nhanh, có thể giảm nguy cơ hít sặc trong khi duy trì hydrat hóa và chức năng chuyển hóa.'
  },
  {
    id: 'vitamin-cures-all',
    myth: 'Vitamin liều cao và bổ sung có thể chữa hoặc ngăn ngừa bệnh',
    whyItSoundsRight: 'Sự hấp dẫn của giải pháp đơn giản là mạnh mẽ. Vitamin cảm thấy tự nhiên và an toàn, và tiếp thị thường thúc đẩy chúng như thuốc phòng ngừa. Bệnh nhân và đôi khi bác sĩ lâm sàng hy vọng rằng bổ sung có thể bù đắp cho chế độ ăn kém hoặc ngăn ngừa bệnh tật. Logic "không thể làm hại, có thể giúp" là thuyết phục, ngay cả khi bằng chứng không hỗ trợ nó.',
    whatActuallyHappens: 'Mặc dù thiếu hụt vitamin gây bệnh, vitamin dư thừa (đặc biệt là vitamin tan trong chất béo A, D, E, K - những chất này được lưu trữ trong cơ thể) có thể độc hại. Vitamin tan trong nước (vitamin B, vitamin C) thường an toàn hơn vì dư thừa được bài tiết trong nước tiểu, nhưng vẫn không cung cấp lợi ích khi được dùng quá mức. Bằng chứng cho thấy thực phẩm toàn phần cung cấp kết quả tốt hơn so với bổ sung cô lập cho hầu hết mọi người.',
    whatToUnderstandInstead: 'Hầu hết bổ sung vitamin vượt quá lượng khuyến nghị hàng ngày không cung cấp lợi ích và có thể gây ra vấn đề trong một số trường hợp. Bằng chứng gợi ý rằng bổ sung có thể phù hợp khi thiếu hụt được xác nhận (giá trị xét nghiệm) hoặc nguy cơ cao tồn tại (ví dụ, phẫu thuật giảm cân, kém hấp thu). Cách tiếp cận thực phẩm đầu tiên thường được ưa chuộng khi có thể.',
    clinicalInsight: 'Vitamin tan trong chất béo (A, D, E, K) có thể tích tụ và gây độc tính vì chúng được lưu trữ trong gan và mô mỡ. Vitamin tan trong nước an toàn hơn nhưng vẫn không cung cấp lợi ích khi dư thừa. Các nhóm dân số đặc biệt (mang thai, cao tuổi, kém hấp thu) có thể cần bổ sung có mục tiêu, nhưng vẫn trong phạm vi an toàn.'
  },
  {
    id: 'feeding-tube-always-needed',
    myth: 'Nếu bệnh nhân không thể ăn, họ ngay lập tức cần một ống cho ăn',
    whyItSoundsRight: 'Mong muốn "làm gì đó" khi bệnh nhân không thể ăn là mạnh mẽ. Cho ăn qua ống cảm thấy như can thiệp tích cực, trong khi chờ đợi hoặc sử dụng các lựa chọn thay thế có thể cảm thấy như không hành động. Thành viên gia đình thường đánh đồng cho ăn với chăm sóc, làm cho nó khó khăn về mặt cảm xúc để xem xét các lựa chọn thay thế.',
    whatActuallyHappens: 'Không phải tất cả bệnh nhân không thể ăn đều cần cho ăn qua ống. Không thể ăn ngắn hạn (1-3 ngày) ở bệnh nhân được nuôi dưỡng tốt có thể không yêu cầu can thiệp. Đối với bệnh nhân sa sút trí tuệ tiến triển hoặc bệnh giai đoạn cuối, bằng chứng gợi ý rằng cho ăn qua ống có thể không cải thiện kết quả và có thể giảm chất lượng cuộc sống. Các yếu tố quan trọng cần xem xét bao gồm: tiên lượng bệnh nhân, tình trạng dinh dưỡng, thời gian dự kiến không thể ăn, và mục tiêu chăm sóc bệnh nhân/gia đình.',
    whatToUnderstandInstead: 'Nhiều lựa chọn thay thế tồn tại, và cho ăn qua ống thường được xem xét sau khi đánh giá tình trạng bệnh nhân, tiên lượng, và mục tiêu chăm sóc. Các lựa chọn thay thế ngắn hạn có thể bao gồm: bổ sung dinh dưỡng qua đường miệng (như Ensure), kết cấu được sửa đổi (nghiền, chất lỏng đặc), hoặc chất kích thích cảm giác ngon miệng. Đây là một quyết định phức tạp yêu cầu xem xét cẩn thận và hợp tác nhóm.',
    clinicalInsight: 'Đối với sa sút trí tuệ tiến triển, bằng chứng cho thấy cho ăn qua ống không ngăn ngừa hít sặc, cải thiện sống sót, hoặc ngăn ngừa tổn thương do áp lực (loét giường). Liên quan bệnh nhân/gia đình trong quyết định về mục tiêu chăm sóc là cần thiết, vì đây thường là một quyết định cảm xúc.'
  },
  {
    id: 'diabetes-no-carbs',
    myth: 'Người mắc bệnh tiểu đường nên tránh tất cả carbohydrate',
    whyItSoundsRight: 'Logic có vẻ đơn giản: nếu carbohydrate làm tăng đường huyết, loại bỏ chúng sẽ giúp. Sự đơn giản hóa quá mức này bỏ qua nhu cầu glucose của cơ thể và sự phức tạp của quản lý bệnh tiểu đường. Chế độ ăn ít carb có thể cho thấy lợi ích ngắn hạn, dẫn đến kết luận rằng "không carb" thậm chí tốt hơn. Nỗi sợ đường huyết cao làm cho việc loại bỏ cảm thấy an toàn hơn so với điều độ.',
    whatActuallyHappens: 'Carbohydrate là nguồn năng lượng chính của cơ thể, đặc biệt cho não. Loại bỏ carb buộc cơ thể phân hủy protein (cơ) và chất béo để lấy năng lượng, điều này không hiệu quả và có thể dẫn đến ketosis (một trạng thái chuyển hóa yêu cầu theo dõi nếu không kiểm soát). Người mắc bệnh tiểu đường thường có lợi từ lượng ăn vào carbohydrate nhất quán, được kiểm soát với nhấn mạnh vào carb phức tạp (ngũ cốc nguyên hạt, rau), chất xơ, và thời gian phù hợp với thuốc (insulin, thuốc uống).',
    whatToUnderstandInstead: 'Carbohydrate là cần thiết cho mọi người, bao gồm người mắc bệnh tiểu đường. Trọng tâm thường là loại, thời gian, và số lượng, thay vì loại bỏ. Hướng dẫn dựa trên bằng chứng gợi ý rằng 45-60% calo từ carbohydrate (nhất quán với dân số chung) có thể phù hợp, tập trung vào carbohydrate phức tạp (ngũ cốc nguyên hạt, rau, trái cây) thay vì đường đơn giản.',
    clinicalInsight: 'Điều độ và thời gian quan trọng hơn loại bỏ. Khớp insulin/thuốc với lượng ăn vào carbohydrate và sử dụng đếm carbohydrate hoặc danh sách trao đổi cho lập kế hoạch bữa ăn. Đây là công cụ để giúp quản lý, không loại bỏ, carbohydrate.'
  },
  {
    id: 'weight-loss-always-good',
    myth: 'Giảm cân luôn có lợi cho bệnh nhân nằm viện',
    whyItSoundsRight: 'Thông điệp sức khỏe chung rằng "giảm cân là tốt" phổ biến đến mức dễ áp dụng nó phổ quát. Đối với bệnh nhân béo phì, giảm cân trong khi nằm viện có thể có vẻ như một điểm sáng. Sự phân biệt giữa giảm cân có chủ ý (cho sức khỏe) và giảm cân không chủ ý (dấu hiệu bệnh tật) không phải lúc nào cũng rõ ràng trong thực hành.',
    whatActuallyHappens: 'Mặc dù giảm cân có chủ ý có thể có lợi cho bệnh nhân ngoại trú béo phì, giảm cân không chủ ý ở bệnh nhân nằm viện thường là mối quan tâm. Nó thường xuyên đại diện cho mất khối lượng cơ thể nạc (cơ), có thể trì hoãn phục hồi, tăng nguy cơ nhiễm trùng, kéo dài thời gian nằm viện, và liên quan đến kết quả kém hơn. Ngay cả bệnh nhân béo phì thường cần dinh dưỡng đầy đủ trong bệnh cấp tính - cơ thể họ cần nhiên liệu để chữa lành, ngay cả khi họ có kho dự trữ chất béo dư thừa.',
    whatToUnderstandInstead: 'Giảm cân không chủ ý ở bệnh nhân nằm viện thường liên quan đến kết quả kém và có thể chỉ ra suy dinh dưỡng hoặc bệnh tiềm ẩn. Theo dõi xu hướng cân nặng có thể hữu ích: mất không chủ ý >5% trong 1 tháng hoặc >10% trong 6 tháng thường được coi là đáng kể. Bệnh nhân béo phì vẫn thường cần protein đầy đủ và vi chất dinh dưỡng trong bệnh cấp tính.',
    clinicalInsight: 'Tập trung vào bảo tồn khối lượng cơ thể nạc (cơ), không chỉ tổng cân nặng - mất cơ là vấn đề thực sự. Điều tra nguyên nhân: lượng ăn vào không đầy đủ, kém hấp thu (hấp thu chất dinh dưỡng kém), tăng chuyển hóa (tỷ lệ chuyển hóa tăng), hoặc bệnh tiềm ẩn. Sử dụng công cụ sàng lọc đã được xác nhận (MUST, NRS-2002) để xác định bệnh nhân có nguy cơ.'
  },
  {
    id: 'supplements-replace-food',
    myth: 'Bổ sung dinh dưỡng có thể thay thế bữa ăn',
    whyItSoundsRight: 'Bổ sung tiện lợi, có thể đo lường, và cảm thấy như một can thiệp được kiểm soát. Khi bệnh nhân gặp khó khăn để ăn, bổ sung có thể cảm thấy như một giải pháp đáng tin cậy. Độ chính xác của việc biết chính xác chất dinh dưỡng mà bệnh nhân đang nhận được có thể hấp dẫn so với sự biến đổi của lượng ăn vào thực phẩm.',
    whatActuallyHappens: 'Mặc dù bổ sung dinh dưỡng qua đường miệng (ONS như Ensure, Boost) là công cụ có giá trị để đáp ứng nhu cầu dinh dưỡng, chúng nên bổ sung, không thay thế, bữa ăn khi có thể. Thực phẩm toàn phần cung cấp chất xơ, phytochemical (hợp chất thực vật có lợi ích sức khỏe), và các hợp chất hoạt tính sinh học khác không tìm thấy trong bổ sung. Ngoài ra, hành động ăn có lợi ích xã hội, tâm lý, và cảm giác mà bổ sung không thể cung cấp.',
    whatToUnderstandInstead: 'Bổ sung được thiết kế để bổ sung, không thay thế, một chế độ ăn cân bằng. Sử dụng bổ sung để lấp đầy khoảng trống dinh dưỡng, không như thay thế bữa ăn khi có thể - nghĩ về chúng như "bảo hiểm dinh dưỡng." Khuyến khích cách tiếp cận thực phẩm đầu tiên khi bệnh nhân có thể ăn - ngay cả một lượng nhỏ thực phẩm thực sự cũng có giá trị.',
    clinicalInsight: 'Bổ sung phù hợp khi: lượng ăn vào qua đường miệng không đầy đủ, nhu cầu tăng (chữa lành, tăng trưởng), hoặc thiếu hụt chất dinh dưỡng cụ thể. Cung cấp bổ sung giữa các bữa ăn, không với bữa ăn, để tránh giảm lượng ăn vào thực phẩm. Nhớ: bổ sung hỗ trợ dinh dưỡng, nhưng thực phẩm cung cấp nhiều hơn chất dinh dưỡng - ăn là về nhiều hơn dinh dưỡng.'
  }
];
