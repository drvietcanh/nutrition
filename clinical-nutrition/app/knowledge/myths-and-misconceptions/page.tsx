'use client';

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../../components/Card';

interface Myth {
  id: string;
  myth: string;
  whyItSoundsRight: string;
  whatActuallyHappens: string;
  whatToUnderstandInstead: string;
  clinicalInsight?: string;
}

const myths: Myth[] = [
  {
    id: 'universal-calorie-requirement',
    myth: 'Tất cả bệnh nhân cần cùng một nhu cầu calo (ví dụ: 2000 kcal/ngày)',
    whyItSoundsRight: 'Con số "2000 kcal" quen thuộc từ nhãn thực phẩm và thông điệp sức khỏe chung, khiến nó có vẻ như một tiêu chuẩn phổ quát. Trong môi trường lâm sàng bận rộn, sử dụng một con số duy nhất có vẻ hiệu quả hơn việc tính toán nhu cầu cá nhân.',
    whatActuallyHappens: 'Nhu cầu năng lượng rất cá nhân hóa. Một bệnh nhân cao tuổi ít vận động có thể cần 1200-1400 kcal/ngày, trong khi một bệnh nhân bệnh nặng bị bỏng có thể cần 3000-4000 kcal/ngày. Sử dụng cách tiếp cận "một kích cỡ phù hợp tất cả" có thể không đáp ứng nhu cầu cá nhân và có thể dẫn đến cho ăn quá mức (có thể góp phần gây hội chứng tái nuôi dưỡng - một tình trạng mà dinh dưỡng nhanh gây ra sự thay đổi điện giải) hoặc cho ăn không đủ (có thể làm chậm phục hồi và lành vết thương).',
    whatToUnderstandInstead: 'Nhu cầu calo thay đổi đáng kể dựa trên tuổi, giới tính, thành phần cơ thể, mức độ hoạt động, trạng thái chuyển hóa và tình trạng lâm sàng. Nhu cầu cá nhân có thể được tính toán bằng các công thức đã được xác nhận, điều chỉnh theo tình huống cụ thể của bệnh nhân.',
    clinicalInsight: 'Các tình trạng tăng chuyển hóa (nhiễm trùng huyết, bỏng, chấn thương) cần calo cao hơn vì cơ thể đang làm việc nhiều hơn để chữa lành. Các trạng thái giảm chuyển hóa (người cao tuổi, ít vận động, bệnh mạn tính) cần calo thấp hơn vì cơ thể cần ít năng lượng hơn.'
  },
  {
    id: 'protein-more-is-better',
    myth: 'Nhiều protein hơn luôn tốt hơn cho phục hồi',
    whyItSoundsRight: 'Tư duy "nhiều hơn là tốt hơn" hấp dẫn vì protein rõ ràng quan trọng cho việc chữa lành. Cảm giác an toàn hơn khi sai lệch về phía nhiều hơn là ít hơn. Niềm tin này được củng cố bởi văn hóa thể dục và tiếp thị thực phẩm bổ sung, quảng bá lượng protein cao như có lợi phổ quát.',
    whatActuallyHappens: 'Mặc dù protein đầy đủ là cần thiết cho việc lành vết thương và bảo tồn cơ, nhưng protein quá mức (vượt quá 2.0-2.5 g/kg/ngày trong hầu hết các trường hợp) không mang lại lợi ích bổ sung và có thể làm xấu đi chức năng thận, tăng các triệu chứng urê huyết (tích tụ chất thải trong máu), và tạo ra stress chuyển hóa. Cơ thể không thể lưu trữ protein dư thừa như có thể lưu trữ chất béo.',
    whatToUnderstandInstead: 'Lượng protein quá mức có thể không cải thiện kết quả vượt quá phạm vi tối ưu và có thể gây vấn đề, đặc biệt ở bệnh nhân suy thận. Bằng chứng cho thấy hầu hết bệnh nhân nằm viện cần khoảng 1.2-2.0 g/kg/ngày, với nhu cầu cao hơn (lên đến 2.5 g/kg/ngày) trong các tình trạng cụ thể như bỏng nặng, chấn thương lớn, hoặc bệnh nặng.',
    clinicalInsight: 'Đầy đủ là mục tiêu, không phải tối đa hóa. Theo dõi chức năng thận (creatinine, BUN) có thể giúp hướng dẫn quyết định lượng protein. Cơ thể chỉ có thể sử dụng một lượng protein nhất định cùng một lúc, vì vậy phân bổ lượng ăn vào trong suốt ngày có thể hiệu quả hơn so với liều lớn đơn lẻ.'
  },
  {
    id: 'npo-before-surgery',
    myth: 'Tất cả bệnh nhân phải NPO (không ăn uống) từ nửa đêm trước phẫu thuật',
    whyItSoundsRight: 'Quy tắc "NPO sau nửa đêm" đã là thực hành tiêu chuẩn trong nhiều thập kỷ và có vẻ như một cách tiếp cận an toàn, bảo thủ. Nỗi sợ hít sặc trong gây mê là dễ hiểu, và sự đơn giản của một quy tắc phổ quát làm cho nó dễ thực hiện.',
    whatActuallyHappens: 'Quy tắc truyền thống "NPO sau nửa đêm" dựa trên những lo ngại lỗi thời về nguy cơ hít sặc (thức ăn/chất lỏng vào phổi trong gây mê). Bằng chứng cho thấy cho phép chất lỏng trong suốt lên đến 2 giờ trước phẫu thuật thực sự giảm biến chứng, cải thiện sự thoải mái của bệnh nhân, duy trì hydrat hóa, và có thể cải thiện kiểm soát đường huyết. Nhịn ăn kéo dài làm tăng kháng insulin và dị hóa (phá vỡ cơ).',
    whatToUnderstandInstead: 'Hướng dẫn hiện đại cho phép chất lỏng trong suốt lên đến 2 giờ trước phẫu thuật và bữa ăn nhẹ lên đến 6 giờ trước, giảm biến chứng. Tuân theo giao thức ERAS (Phục hồi nhanh sau phẫu thuật) khi phù hợp. Ngoại lệ bao gồm bệnh nhân có làm rỗng dạ dày chậm, tắc ruột, hoặc yêu cầu phẫu thuật cụ thể.',
    clinicalInsight: 'Bằng chứng cho thấy chất lỏng trong suốt (nước, nước ép trong, cà phê đen) có thể phù hợp 2+ giờ trước phẫu thuật cho nhiều bệnh nhân. Dạ dày làm rỗng chất lỏng trong suốt tương đối nhanh, có thể giảm nguy cơ hít sặc trong khi duy trì hydrat hóa và chức năng chuyển hóa.'
  },
  {
    id: 'vitamin-cures-all',
    myth: 'Vitamin liều cao và thực phẩm bổ sung có thể chữa hoặc ngăn ngừa bệnh',
    whyItSoundsRight: 'Sự hấp dẫn của giải pháp đơn giản rất mạnh mẽ. Vitamin có vẻ tự nhiên và an toàn, và tiếp thị thường quảng bá chúng như thuốc phòng ngừa. Bệnh nhân và đôi khi bác sĩ lâm sàng hy vọng rằng thực phẩm bổ sung có thể bù đắp cho chế độ ăn kém hoặc ngăn ngừa bệnh tật. Logic "không thể gây hại, có thể giúp" rất thuyết phục, ngay cả khi bằng chứng không hỗ trợ nó.',
    whatActuallyHappens: 'Mặc dù thiếu hụt vitamin gây bệnh, nhưng vitamin dư thừa (đặc biệt là vitamin tan trong chất béo A, D, E, K - những chất này được lưu trữ trong cơ thể) có thể độc hại. Vitamin tan trong nước (vitamin B, vitamin C) thường an toàn hơn vì dư thừa được bài tiết trong nước tiểu, nhưng vẫn không mang lại lợi ích khi dùng quá mức. Bằng chứng cho thấy thực phẩm nguyên chất mang lại kết quả tốt hơn so với thực phẩm bổ sung cô lập cho hầu hết mọi người.',
    whatToUnderstandInstead: 'Hầu hết việc bổ sung vitamin vượt quá khuyến nghị hàng ngày không mang lại lợi ích và có thể gây vấn đề trong một số trường hợp. Bằng chứng cho thấy bổ sung có thể phù hợp khi thiếu hụt được xác nhận (giá trị xét nghiệm) hoặc nguy cơ cao tồn tại (ví dụ: phẫu thuật giảm cân, kém hấp thu). Cách tiếp cận ưu tiên thực phẩm thường được ưa chuộng khi có thể.',
    clinicalInsight: 'Vitamin tan trong chất béo (A, D, E, K) có thể tích tụ và gây độc tính vì chúng được lưu trữ trong gan và mô mỡ. Vitamin tan trong nước an toàn hơn nhưng vẫn không mang lại lợi ích khi dùng quá mức. Các nhóm đặc biệt (mang thai, người cao tuổi, kém hấp thu) có thể cần bổ sung có mục tiêu, nhưng vẫn trong phạm vi an toàn.'
  },
  {
    id: 'feeding-tube-always-needed',
    myth: 'Nếu bệnh nhân không thể ăn, họ ngay lập tức cần ống nuôi ăn',
    whyItSoundsRight: 'Mong muốn "làm gì đó" khi bệnh nhân không thể ăn rất mạnh mẽ. Nuôi ăn qua ống có vẻ như can thiệp tích cực, trong khi chờ đợi hoặc sử dụng các lựa chọn thay thế có vẻ như không hành động. Thành viên gia đình thường đánh đồng việc cho ăn với chăm sóc, khiến việc xem xét các lựa chọn thay thế trở nên khó khăn về mặt cảm xúc.',
    whatActuallyHappens: 'Không phải tất cả bệnh nhân không thể ăn đều cần nuôi ăn qua ống. Không thể ăn ngắn hạn (1-3 ngày) ở bệnh nhân được nuôi dưỡng tốt có thể không cần can thiệp. Đối với bệnh nhân sa sút trí tuệ tiến triển hoặc bệnh giai đoạn cuối, bằng chứng cho thấy nuôi ăn qua ống có thể không cải thiện kết quả và có thể giảm chất lượng cuộc sống. Các yếu tố quan trọng cần xem xét bao gồm: tiên lượng bệnh nhân, tình trạng dinh dưỡng, thời gian dự kiến không thể ăn, và mục tiêu của bệnh nhân/gia đình.',
    whatToUnderstandInstead: 'Nhiều lựa chọn thay thế tồn tại, và nuôi ăn qua ống thường được xem xét sau khi đánh giá tình trạng bệnh nhân, tiên lượng và mục tiêu chăm sóc. Các lựa chọn thay thế ngắn hạn có thể bao gồm: thực phẩm bổ sung đường uống (như Ensure), kết cấu được điều chỉnh (nghiền, chất lỏng đặc), hoặc thuốc kích thích cảm giác ngon miệng. Đây là quyết định phức tạp đòi hỏi xem xét cẩn thận và hợp tác nhóm.',
    clinicalInsight: 'Đối với sa sút trí tuệ tiến triển, bằng chứng cho thấy nuôi ăn qua ống không ngăn ngừa hít sặc, cải thiện sống sót, hoặc ngăn ngừa tổn thương do áp lực (loét giường). Việc tham gia bệnh nhân/gia đình vào quyết định về mục tiêu chăm sóc là cần thiết, vì đây thường là quyết định cảm xúc.'
  },
  {
    id: 'diabetes-no-carbs',
    myth: 'Người bệnh tiểu đường nên tránh tất cả carbohydrate',
    whyItSoundsRight: 'Logic có vẻ đơn giản: nếu carbohydrate làm tăng đường huyết, loại bỏ chúng sẽ giúp. Sự đơn giản hóa quá mức này bỏ qua nhu cầu glucose của cơ thể và sự phức tạp của quản lý tiểu đường. Chế độ ăn ít carb có thể cho thấy lợi ích ngắn hạn, dẫn đến kết luận rằng "không carb" thậm chí còn tốt hơn. Nỗi sợ đường huyết cao khiến việc loại bỏ có vẻ an toàn hơn so với điều độ.',
    whatActuallyHappens: 'Carbohydrate là nguồn năng lượng chính của cơ thể, đặc biệt cho não. Loại bỏ carb buộc cơ thể phá vỡ protein (cơ) và chất béo để lấy năng lượng, điều này không hiệu quả và có thể dẫn đến ketosis (một trạng thái chuyển hóa cần theo dõi nếu không kiểm soát). Người bệnh tiểu đường thường có lợi từ lượng carbohydrate nhất quán, được kiểm soát với nhấn mạnh vào carb phức tạp (ngũ cốc nguyên hạt, rau), chất xơ, và thời gian phù hợp với thuốc (insulin, thuốc uống).',
    whatToUnderstandInstead: 'Carbohydrate là cần thiết cho tất cả mọi người, bao gồm người bệnh tiểu đường. Trọng tâm thường là loại, thời gian và số lượng, thay vì loại bỏ. Hướng dẫn dựa trên bằng chứng cho thấy 45-60% calo từ carbohydrate (phù hợp với dân số chung) có thể phù hợp, tập trung vào carbohydrate phức tạp (ngũ cốc nguyên hạt, rau, trái cây) thay vì đường đơn giản.',
    clinicalInsight: 'Điều độ và thời gian quan trọng hơn loại bỏ. Khớp insulin/thuốc với lượng carbohydrate và sử dụng đếm carbohydrate hoặc danh sách trao đổi để lập kế hoạch bữa ăn. Đây là công cụ để giúp quản lý, không phải loại bỏ, carbohydrate.'
  },
  {
    id: 'weight-loss-always-good',
    myth: 'Giảm cân luôn có lợi cho bệnh nhân nằm viện',
    whyItSoundsRight: 'Thông điệp sức khỏe chung rằng "giảm cân là tốt" phổ biến đến mức dễ áp dụng nó một cách phổ quát. Đối với bệnh nhân béo phì, giảm cân trong khi nằm viện có vẻ như một điểm tích cực. Sự khác biệt giữa giảm cân có chủ ý (cho sức khỏe) và giảm cân không chủ ý (dấu hiệu bệnh) không phải lúc nào cũng rõ ràng trong thực hành.',
    whatActuallyHappens: 'Mặc dù giảm cân có chủ ý có thể có lợi cho bệnh nhân ngoại trú béo phì, nhưng giảm cân không chủ ý ở bệnh nhân nằm viện thường là mối quan tâm. Nó thường đại diện cho mất khối lượng cơ thể nạc (cơ), có thể làm chậm phục hồi, tăng nguy cơ nhiễm trùng, kéo dài thời gian nằm viện, và liên quan đến kết quả kém hơn. Ngay cả bệnh nhân béo phì thường cần dinh dưỡng đầy đủ trong bệnh cấp tính - cơ thể họ cần nhiên liệu để chữa lành, ngay cả khi họ có dự trữ chất béo dư thừa.',
    whatToUnderstandInstead: 'Giảm cân không chủ ý ở bệnh nhân nằm viện thường liên quan đến kết quả kém và có thể chỉ ra suy dinh dưỡng hoặc bệnh tiềm ẩn. Theo dõi xu hướng cân nặng có thể hữu ích: mất không chủ ý >5% trong 1 tháng hoặc >10% trong 6 tháng thường được coi là đáng kể. Bệnh nhân béo phì vẫn thường cần protein và vi chất dinh dưỡng đầy đủ trong bệnh cấp tính.',
    clinicalInsight: 'Tập trung vào bảo tồn khối lượng cơ thể nạc (cơ), không chỉ tổng trọng lượng - mất cơ là vấn đề thực sự. Điều tra nguyên nhân: lượng ăn vào không đủ, kém hấp thu (hấp thu chất dinh dưỡng kém), tăng chuyển hóa (tỷ lệ chuyển hóa tăng), hoặc bệnh tiềm ẩn. Sử dụng công cụ sàng lọc đã được xác nhận (MUST, NRS-2002) để xác định bệnh nhân có nguy cơ.'
  },
  {
    id: 'supplements-replace-food',
    myth: 'Thực phẩm bổ sung dinh dưỡng có thể thay thế bữa ăn',
    whyItSoundsRight: 'Thực phẩm bổ sung tiện lợi, có thể đo lường, và có vẻ như một can thiệp được kiểm soát. Khi bệnh nhân gặp khó khăn khi ăn, thực phẩm bổ sung có vẻ như một giải pháp đáng tin cậy. Độ chính xác của việc biết chính xác chất dinh dưỡng mà bệnh nhân đang nhận được có thể hấp dẫn so với sự biến đổi của lượng thức ăn.',
    whatActuallyHappens: 'Mặc dù thực phẩm bổ sung đường uống (ONS như Ensure, Boost) là công cụ có giá trị để đáp ứng nhu cầu dinh dưỡng, chúng nên bổ sung, không thay thế, bữa ăn khi có thể. Thực phẩm nguyên chất cung cấp chất xơ, phytochemical (hợp chất thực vật có lợi ích sức khỏe), và các hợp chất hoạt tính sinh học khác không tìm thấy trong thực phẩm bổ sung. Ngoài ra, hành động ăn có lợi ích xã hội, tâm lý và cảm giác mà thực phẩm bổ sung không thể cung cấp.',
    whatToUnderstandInstead: 'Thực phẩm bổ sung được thiết kế để bổ sung, không thay thế, chế độ ăn cân bằng. Sử dụng thực phẩm bổ sung để lấp đầy khoảng trống dinh dưỡng, không phải như thay thế bữa ăn khi có thể - nghĩ về chúng như "bảo hiểm dinh dưỡng." Khuyến khích cách tiếp cận ưu tiên thực phẩm khi bệnh nhân có thể ăn - ngay cả một lượng nhỏ thực phẩm thật cũng có giá trị.',
    clinicalInsight: 'Thực phẩm bổ sung phù hợp khi: lượng ăn vào đường uống không đủ, nhu cầu tăng (chữa lành, tăng trưởng), hoặc thiếu hụt chất dinh dưỡng cụ thể. Cung cấp thực phẩm bổ sung giữa các bữa ăn, không phải với bữa ăn, để tránh giảm lượng thức ăn. Nhớ: thực phẩm bổ sung hỗ trợ dinh dưỡng, nhưng thực phẩm cung cấp nhiều hơn chất dinh dưỡng - ăn là về nhiều hơn dinh dưỡng.'
  }
];

export default function MythsAndMisconceptionsPage() {
  const [expandedMyth, setExpandedMyth] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredMyths = myths.filter(myth =>
    myth.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whyItSoundsRight.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatActuallyHappens.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatToUnderstandInstead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMyth = (id: string) => {
    setExpandedMyth(expandedMyth === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section 1: Title & Introduction */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Những Quan Niệm Sai Lầm Phổ Biến trong Dinh Dưỡng Lâm Sàng
          </h1>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Bạn đã bao giờ tự hỏi tại sao một số thực hành dinh dưỡng vẫn tồn tại mặc dù bằng chứng gợi ý ngược lại? 
                Nhiều niềm tin phổ biến trong dinh dưỡng lâm sàng bắt nguồn từ <strong>sự đơn giản hóa quá mức</strong>—lấy các khái niệm 
                phức tạp, cá nhân hóa và giảm chúng thành các quy tắc đơn giản dễ nhớ và áp dụng hơn.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mặc dù các cách tiếp cận đơn giản hóa này có thể cảm thấy an toàn và thẳng thắn, <strong>dinh dưỡng lâm sàng đòi hỏi 
                bối cảnh và phán đoán</strong>. Điều gì hiệu quả cho một bệnh nhân có thể không hiệu quả cho bệnh nhân khác. Cùng một can thiệp 
                có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, tiên lượng, trạng thái chuyển hóa và 
                mục tiêu chăm sóc. Hiếm khi có câu trả lời phổ quát—chỉ có những câu hỏi suy nghĩ và quyết định dựa trên bằng chứng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tài nguyên này khám phá những quan niệm sai lầm phổ biến không phải để chỉ trích, mà để hiểu. Chúng tôi tò mò về 
                tại sao những niềm tin này vẫn tồn tại và cách chúng ta có thể tiếp cận chăm sóc dinh dưỡng với sự tinh tế hơn. 
                <strong> Sửa chữa những quan niệm sai lầm này cải thiện chăm sóc bệnh nhân</strong> bằng cách giúp chúng ta đưa ra quyết định 
                phù hợp hơn, cá nhân hóa hơn, phục vụ tốt hơn nhu cầu của bệnh nhân.
              </p>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-3">Cách Sử Dụng Tài Nguyên Này</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Dù bạn là y tá ghi chép lượng ăn vào, sinh viên y khoa trong vòng tròn, hay bác sĩ lâm sàng viết chỉ định dinh dưỡng, 
                bạn có thể đã gặp những niềm tin phổ biến này. Tài nguyên này giúp bạn:
              </p>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-6">
                <li><strong>Nhận biết</strong> khi nào các niềm tin phổ biến có thể cần được đặt câu hỏi trong thực hành hàng ngày của bạn</li>
                <li><strong>Hiểu</strong> tại sao những niềm tin này vẫn tồn tại (chúng thường có nguồn gốc logic)</li>
                <li><strong>Học</strong> lý luận lâm sàng đằng sau các cách tiếp cận dựa trên bằng chứng</li>
                <li><strong>Cải thiện</strong> việc sử dụng an toàn các công cụ đánh giá và can thiệp dinh dưỡng</li>
              </ul>
              <p className="text-gray-700 text-xs mt-4 italic">
                <strong>Lưu ý:</strong> Thuật ngữ y tế được giải thích trong ngữ cảnh. Nếu bạn gặp thuật ngữ không quen thuộc, 
                hãy coi đó là cơ hội để xây dựng vốn từ vựng lâm sàng của bạn.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Why Myths Persist in Clinical Nutrition */}
        <div className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Tại Sao Những Niềm Tin Này Vẫn Tồn Tại?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hiểu tại sao những quan niệm sai lầm vẫn tồn tại giúp chúng ta nhận biết chúng trong thực hành và tiếp cận thay đổi với sự đồng cảm. 
            Những niềm tin này thường tiếp tục vì:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Mong Muốn Quy Tắc Đơn Giản</h3>
              <p className="text-sm text-gray-700">
                Quy tắc đơn giản cảm thấy an toàn hơn và dễ áp dụng hơn so với các cách tiếp cận phức tạp, cá nhân hóa. 
                "2000 kcal cho mọi người" dễ nhớ hơn so với tính toán nhu cầu cá nhân, ngay cả khi kém chính xác hơn. 
                Trong môi trường lâm sàng bận rộn, quy tắc đơn giản giảm mệt mỏi quyết định và cảm thấy dễ quản lý hơn.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Phụ Thuộc Quá Mức vào Số Liệu hoặc Xét Nghiệm</h3>
              <p className="text-sm text-gray-700">
                Số liệu và giá trị xét nghiệm có vẻ khách quan và dứt khoát, nhưng chúng không kể toàn bộ câu chuyện. 
                Chỉ tập trung vào một giá trị xét nghiệm duy nhất (như albumin) hoặc một con số cụ thể (như BMI) có thể khiến chúng ta 
                bỏ lỡ bức tranh lâm sàng rộng hơn và nhu cầu cá nhân của bệnh nhân.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Hiểu Sai Hướng Dẫn</h3>
              <p className="text-sm text-gray-700">
                Hướng dẫn lâm sàng cung cấp khuyến nghị dựa trên bằng chứng, nhưng chúng được thiết kế để hướng dẫn phán đoán, 
                không thay thế nó. Khi hướng dẫn được áp dụng quá cứng nhắc hoặc không xem xét bối cảnh bệnh nhân, 
                chúng có thể dẫn đến chăm sóc không phù hợp. Hướng dẫn là công cụ, không phải quy tắc.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Trộn Lẫn Lời Khuyên Dinh Dưỡng Cộng Đồng với Chăm Sóc Lâm Sàng</h3>
              <p className="text-sm text-gray-700">
                Lời khuyên dinh dưỡng chung cho dân số khỏe mạnh (như "ăn ít carb" hoặc "nhiều protein hơn là tốt hơn") 
                không phải lúc nào cũng áp dụng cho bệnh nhân bệnh, nằm viện. Điều phù hợp cho sức khỏe cộng đồng có thể không 
                phù hợp trong môi trường lâm sàng nơi bệnh nhân có nhu cầu chuyển hóa khác nhau.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Tìm kiếm quan niệm sai lầm..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-label="Tìm kiếm quan niệm sai lầm"
          />
        </div>

        {/* Section 3: Myth Sections */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Những Quan Niệm Sai Lầm Phổ Biến trong Thực Hành
          </h2>
          <div className="space-y-4">
          {filteredMyths.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              Không tìm thấy quan niệm sai lầm nào phù hợp với tìm kiếm của bạn.
            </div>
          ) : (
            filteredMyths.map((myth) => (
              <div
                key={myth.id}
                className="bg-white rounded-xl shadow-sm border-2 border-gray-200 overflow-hidden transition-all hover:shadow-md hover:border-gray-300"
              >
                <button
                  onClick={() => toggleMyth(myth.id)}
                  className="w-full text-left p-5 sm:p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  aria-expanded={expandedMyth === myth.id}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3">
                        <span className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200 self-start">
                          QUAN NIỆM SAI
                        </span>
                        <h2 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                          {myth.myth}
                        </h2>
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className={`w-5 h-5 sm:w-6 sm:h-6 text-gray-400 transition-transform ${
                          expandedMyth === myth.id ? 'transform rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>

                {expandedMyth === myth.id && (
                  <div className="px-5 sm:px-6 pb-5 sm:pb-6 border-t-2 border-gray-200 pt-5 sm:pt-6 space-y-4 sm:space-y-5">
                    {/* Why It Sounds Right */}
                    <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-lg p-4 sm:p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                        <span className="text-amber-600">•</span>
                        Tại Sao Nghe Có Vẻ Đúng
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {myth.whyItSoundsRight}
                      </p>
                    </div>

                    {/* What Actually Happens in Practice */}
                    <div className="bg-gray-50 border-l-4 border-gray-400 rounded-r-lg p-4 sm:p-5">
                      <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                        <span className="text-gray-600">•</span>
                        Điều Gì Thực Sự Xảy Ra trong Thực Hành
                      </h3>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {myth.whatActuallyHappens}
                      </p>
                    </div>

                    {/* What to Understand Instead - Highlighted as Reality */}
                    <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4 sm:p-5 shadow-sm">
                      <div className="flex items-center gap-2 mb-2.5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold bg-green-600 text-white">
                          THỰC TẾ
                        </span>
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide">
                          Điều Cần Hiểu Thay Vào Đó
                        </h3>
                      </div>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
                        {myth.whatToUnderstandInstead}
                      </p>
                    </div>

                    {/* Clinical Insight */}
                    {myth.clinicalInsight && (
                      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-lg p-4 sm:p-5">
                        <h3 className="text-sm font-bold text-gray-900 mb-2.5 uppercase tracking-wide flex items-center gap-2">
                          <span className="text-blue-600">•</span>
                          Góc Nhìn Lâm Sàng
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {myth.clinicalInsight}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
          </div>
        </div>

        {/* Section 4: Common Themes */}
        <div className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Các Chủ Đề Chung Trong Những Quan Niệm Sai Lầm Này
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Khi bạn suy ngẫm về những quan niệm sai lầm này, bạn sẽ nhận thấy một số chủ đề lặp lại xuất hiện trong các niềm tin khác nhau. 
            Hiểu những chủ đề này giúp chúng ta nhận biết khi nào các mô hình suy nghĩ tương tự có thể đang ảnh hưởng đến thực hành của chúng ta:
          </p>
          <div className="space-y-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">1.</span>
                Bối Cảnh Quan Trọng
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cùng một can thiệp có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, tiên lượng, 
                trạng thái chuyển hóa và mục tiêu chăm sóc. Điều gì hiệu quả cho bệnh nhân ngoại trú khỏe mạnh có thể không hiệu quả cho bệnh nhân nằm viện. 
                Điều gì phù hợp cho một tình huống lâm sàng có thể không phù hợp trong tình huống khác. Xem xét toàn bộ bức tranh lâm sàng 
                trước khi áp dụng quy tắc hoặc hướng dẫn chung.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Giảm cân có thể có lợi cho bệnh nhân ngoại trú béo phì, nhưng giảm cân không chủ ý ở bệnh nhân nằm viện 
                là đáng lo ngại, ngay cả khi họ béo phì.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">2.</span>
                Xu Hướng Quan Trọng Hơn Giá Trị Đơn Lẻ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Một giá trị xét nghiệm đơn lẻ, đo cân nặng, hoặc đếm calo cho bạn biết rất ít. Điều quan trọng là xu hướng theo thời gian. 
                Bệnh nhân có đang cải thiện không? Trở nên tệ hơn? Giữ ổn định? Giá trị đơn lẻ có thể gây hiểu lầm, nhưng xu hướng tiết lộ 
                bức tranh lâm sàng thực sự. Tập trung vào các mô hình và thay đổi thay vì các con số cô lập.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Một ngày lượng ăn vào thấp không nhất thiết đáng lo ngại, nhưng một mô hình lượng ăn vào giảm trong vài 
                ngày cần được chú ý.
              </p>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl">3.</span>
                Số Liệu Hỗ Trợ Tư Duy, Không Thay Thế Nó
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tính toán, giá trị xét nghiệm và đo lường là công cụ để thông báo phán đoán lâm sàng của bạn, không phải để thay thế nó. 
                Số liệu cung cấp dữ liệu, nhưng bạn cung cấp sự giải thích. Sử dụng tính toán và đo lường để hỗ trợ suy nghĩ của bạn, 
                nhưng luôn xem xét hoàn cảnh cá nhân của bệnh nhân, phản ứng với can thiệp và bức tranh lâm sàng tổng thể. 
                Con số là điểm khởi đầu, không phải điểm kết thúc.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Nhu cầu calo được tính toán là một ước tính dựa trên các phương trình. Theo dõi phản ứng của bệnh nhân và 
                điều chỉnh dựa trên cách họ thực sự đang làm, không chỉ dựa trên con số.
              </p>
            </div>
          </div>
        </div>

        {/* Section 5: What to Remember */}
        <div className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Điều Cần Nhớ
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Khi bạn suy ngẫm về những quan niệm sai lầm phổ biến này, hãy ghi nhớ những nguyên tắc chính sau:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">1.</span>
                Cá Nhân Hóa Quan Trọng
              </h3>
              <p className="text-sm text-gray-700">
                Nhu cầu dinh dưỡng thay đổi đáng kể giữa các bệnh nhân. Điều gì hiệu quả cho một bệnh nhân có thể không hiệu quả cho bệnh nhân khác, 
                ngay cả với tình trạng tương tự. Đánh giá và tính toán nhu cầu cá nhân thường quan trọng.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">2.</span>
                Nhiều Hơn Không Phải Luôn Tốt Hơn
              </h3>
              <p className="text-sm text-gray-700">
                Đầy đủ thường là mục tiêu, không phải tối đa hóa. Chất dinh dưỡng quá mức có thể không mang lại lợi ích bổ sung và có thể gây vấn đề. Trọng tâm thường là đáp ứng nhu cầu thay vì vượt quá chúng.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">3.</span>
                Bối Cảnh Là Quan Trọng
              </h3>
              <p className="text-sm text-gray-700">
                Cùng một can thiệp có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, 
                tiên lượng và mục tiêu chăm sóc. Xem xét toàn bộ bức tranh lâm sàng thường quan trọng.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">4.</span>
                Bằng Chứng Phát Triển
              </h3>
              <p className="text-sm text-gray-700">
                Các thực hành từng là tiêu chuẩn nhiều thập kỷ trước có thể không phù hợp với bằng chứng hiện tại. Hãy cập nhật với 
                hướng dẫn và cởi mở với việc cập nhật thực hành của bạn.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">5.</span>
                Đặt Câu Hỏi Về Giả Định
              </h3>
              <p className="text-sm text-gray-700">
                Khi bạn nghe "chúng ta luôn làm theo cách này," hãy hỏi tại sao. Hiểu lý do giúp bạn xác định 
                khi nào các thực hành cần được cập nhật.
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600">6.</span>
                Hợp Tác Cải Thiện Chăm Sóc
              </h3>
              <p className="text-sm text-gray-700">
                Làm việc với chuyên gia dinh dưỡng, y tá, bác sĩ và các thành viên nhóm khác. Các góc nhìn khác nhau giúp xác định 
                giả định và cải thiện quyết định.
              </p>
            </div>
          </div>
        </div>

        {/* Section 6: Safety & Perspective */}
        <div className="mb-12 space-y-6">
          {/* Clear Disclaimer */}
          <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
            <h2 className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Tuyên Bố Miễn Trừ Trách Nhiệm Quan Trọng
            </h2>
            <p className="text-sm text-red-900 leading-relaxed font-medium">
              Tài nguyên này chỉ dành cho mục đích giáo dục và không cấu thành lời khuyên y tế, chẩn đoán hoặc điều trị. 
              Thông tin được cung cấp không nên thay thế phán đoán lâm sàng chuyên nghiệp hoặc tư vấn nhóm đa ngành. 
              Luôn tư vấn với các chuyên gia chăm sóc sức khỏe có trình độ cho các quyết định chăm sóc dinh dưỡng cụ thể cho bệnh nhân.
            </p>
          </div>

          {/* Main Content */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              An Toàn & Góc Nhìn
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Công Cụ Dinh Dưỡng Giúp Hướng Dẫn Sự Chú Ý
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Công cụ đánh giá dinh dưỡng, máy tính, công cụ sàng lọc và hướng dẫn được thiết kế để giúp bạn 
                  xác định các lĩnh vực cần chú ý và cung cấp khung tư duy về chăm sóc dinh dưỡng. Chúng giúp 
                  bạn tập trung vào điều quan trọng nhất và đảm bảo bạn không bỏ lỡ các cân nhắc quan trọng. Hãy nghĩ về chúng như 
                  công cụ điều hướng chỉ cho bạn hướng đúng, không phải là điểm đến.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Chúng Không Thay Thế Chăm Sóc Đa Ngành
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Không có công cụ, tính toán hoặc hướng dẫn nào có thể thay thế chuyên môn và hợp tác của nhóm đa ngành. 
                  Chăm sóc dinh dưỡng hiệu quả đòi hỏi đầu vào từ chuyên gia dinh dưỡng đã đăng ký, bác sĩ, y tá, dược sĩ, 
                  nhà vật lý trị liệu và các chuyên gia khác, mỗi người mang lại góc nhìn độc đáo. Công cụ hỗ trợ 
                  quyết định nhóm; chúng không loại bỏ nhu cầu hợp tác nhóm. Chăm sóc dinh dưỡng tốt nhất xảy ra 
                  khi các thành viên nhóm làm việc cùng nhau, chia sẻ kiến thức và góc nhìn.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Phán Đoán Lâm Sàng Vẫn Là Trung Tâm
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Phán đoán lâm sàng—khả năng của bạn để đánh giá, giải thích và đưa ra quyết định dựa trên toàn bộ bức tranh lâm sàng—là 
                  không thể thay thế. Công cụ cung cấp dữ liệu và gợi ý, nhưng bạn phải giải thích thông tin đó trong ngữ cảnh của 
                  mỗi tình huống bệnh nhân độc đáo. Xem xét tình trạng bệnh nhân, tiên lượng, mục tiêu chăm sóc, sở thích gia đình, 
                  và nguồn lực tổ chức. Số liệu và hướng dẫn thông báo phán đoán của bạn; chúng không thay thế nó. Khi công cụ 
                  và phán đoán lâm sàng xung đột, hãy tin tưởng phán đoán của bạn và tư vấn với nhóm của bạn.
                </p>
              </div>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Khi Nghi Ngờ, Hãy Tư Vấn
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Nếu bạn không chắc chắn về quyết định dinh dưỡng, hãy tư vấn với:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-6">
                  <li><strong>Chuyên Gia Dinh Dưỡng Đã Đăng Ký:</strong> Chuyên gia đánh giá và lập kế hoạch dinh dưỡng</li>
                  <li><strong>Nhóm Hỗ Trợ Dinh Dưỡng Lâm Sàng:</strong> Cho các trường hợp phức tạp cần hỗ trợ dinh dưỡng chuyên biệt</li>
                  <li><strong>Nhóm Lâm Sàng Của Bạn:</strong> Bác sĩ, y tá và các nhà cung cấp khác biết bệnh nhân</li>
                  <li><strong>Hướng Dẫn Lâm Sàng:</strong> Khuyến nghị dựa trên bằng chứng hiện tại từ các tổ chức chuyên nghiệp</li>
                </ul>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Về Tài Nguyên Này
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Tất cả thông tin dựa trên hướng dẫn lâm sàng hiện tại từ các tổ chức dinh dưỡng hàng đầu bao gồm 
                  ASPEN (Hiệp hội Dinh dưỡng Đường Tĩnh Mạch và Đường Ruột Hoa Kỳ), ESPEN (Hiệp hội Dinh dưỡng Lâm sàng và Chuyển hóa Châu Âu), 
                  và Học viện Dinh dưỡng và Chế độ Ăn uống. Mục tiêu của chúng tôi là hỗ trợ thực hành dinh dưỡng an toàn, 
                  dựa trên bằng chứng thông qua giáo dục và suy ngẫm, không phải chỉ trích. Cập nhật thường xuyên đảm bảo 
                  phù hợp với bằng chứng mới nhất.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 7: Call-to-Action */}
        <div className="mb-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Sẵn Sàng Áp Dụng Những Gì Bạn Đã Học?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Hiểu những quan niệm sai lầm này là có giá trị, nhưng đưa kiến thức đó vào thực hành là nơi học tập thực sự xảy ra. 
              Chúng tôi mời bạn tiếp tục hành trình của mình với các bước tiếp theo hỗ trợ sau:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Khám Phá Công Cụ Đánh Giá</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Thực hành với các công cụ đánh giá và tính toán dinh dưỡng tương tác của chúng tôi. Những công cụ này giúp bạn áp dụng những gì bạn đã học 
                một cách thực hành, xây dựng sự tự tin khi bạn làm việc qua các tình huống thực tế.
              </p>
              <div className="text-center">
                <a 
                  href="/tools" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Khám Phá Công Cụ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Đọc Tổng Quan Đánh Giá</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Đào sâu hiểu biết của bạn bằng cách đọc tổng quan toàn diện của chúng tôi về quy trình đánh giá dinh dưỡng lâm sàng. 
                Xem cách sàng lọc, ước tính nhu cầu và đánh giá lượng ăn vào làm việc cùng nhau để tạo thành một bức tranh hoàn chỉnh.
              </p>
              <div className="text-center">
                <a 
                  href="/knowledge/assessment-process" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Đọc Tổng Quan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Áp Dụng Vào Ví Dụ Ca Bệnh</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Đưa việc học của bạn vào thực hành bằng cách làm việc qua các ví dụ ca bệnh. Xem cách các nguyên tắc bạn đã học áp dụng 
                vào các tình huống bệnh nhân thực tế, xây dựng kỹ năng lý luận lâm sàng của bạn trên đường đi.
              </p>
              <div className="text-center">
                <a 
                  href="/cases" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Xem Ca Bệnh
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 bg-white rounded-lg border border-gray-200 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Hãy nhớ, học tập là một hành trình, không phải điểm đến. Mỗi lần gặp bệnh nhân là cơ hội để áp dụng những gì bạn đã học 
              và tiếp tục phát triển trong thực hành của bạn. Bạn đang xây dựng các kỹ năng sẽ phục vụ bạn và bệnh nhân của bạn tốt."
            </p>
          </div>
        </div>

        {/* Related Tools */}
        <section className="mb-12 space-y-4" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl font-bold text-gray-900">
            Công cụ Liên quan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Các công cụ giáo dục này giúp bạn thực hành các nguyên tắc đã học và hiểu cách áp dụng chúng trong đánh giá dinh dưỡng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card href="/tools/energy-protein-calculator">
              <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
              <CardContent>
                <p className="text-body-sm">
                  Công cụ giáo dục để ước tính nhu cầu năng lượng và protein, minh họa các khoảng giá trị
                  và cách các bác sĩ lâm sàng sử dụng ước tính trong thực hành.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/malnutrition-screening">
              <CardHeader icon={CheckCircle} title="Nguy cơ Suy Dinh dưỡng" />
              <CardContent>
                <p className="text-body-sm">
                  Khám phá cách các công cụ sàng lọc đánh giá nguy cơ suy dinh dưỡng,
                  hiểu rằng sàng lọc là điểm khởi đầu, không phải chẩn đoán.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/intake-assessment">
              <CardHeader icon={CheckCircle} title="Đánh giá Lượng Ăn" />
              <CardContent>
                <p className="text-body-sm">
                  So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính,
                  minh họa khoảng cách thường gặp trong thực hành lâm sàng.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/bmi-body-composition">
              <CardHeader icon={CheckCircle} title="BMI & Thành phần Cơ thể" />
              <CardContent>
                <p className="text-body-sm">
                  Tính các chỉ số cơ bản như BMI, IBW, ABW, và BSA,
                  hiểu rằng các chỉ số này là công cụ hỗ trợ, không phải câu trả lời cuối cùng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
