import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Moon, Coffee, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Giấc ngủ",
  description:
    "Mối liên hệ giữa dinh dưỡng và giấc ngủ. Thực phẩm giúp ngủ tốt, thực phẩm nên tránh trước khi ngủ, và practical tips.",
  keywords: [
    "dinh dưỡng và giấc ngủ",
    "nutrition sleep",
    "thực phẩm giúp ngủ",
    "insomnia",
    "melatonin",
  ],
};

export default function NutritionSleepPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Giấc ngủ" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Moon className="w-8 h-8 text-indigo-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Giấc ngủ</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng và giấc ngủ có mối liên hệ chặt chẽ. Những gì bạn ăn có thể ảnh hưởng đến chất lượng 
          giấc ngủ, và giấc ngủ ảnh hưởng đến cách cơ thể xử lý thức ăn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Thực phẩm giúp ngủ:</strong> Thực phẩm giàu tryptophan, magnesium, melatonin
          </li>
          <li>
            <strong>Tránh trước khi ngủ:</strong> Cà phê, rượu, đồ ăn nhiều chất béo, đồ ngọt
          </li>
          <li>
            <strong>Thời gian ăn:</strong> Ăn quá gần giờ ngủ có thể ảnh hưởng đến giấc ngủ
          </li>
          <li>
            <strong>Hydration:</strong> Uống đủ nước, nhưng tránh uống quá nhiều trước khi ngủ
          </li>
          <li>
            <strong>Bữa tối:</strong> Bữa tối nhẹ, cân bằng tốt hơn bữa tối nặng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Giúp ngủ tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu tryptophan</h3>
          <p className="text-body-sm mb-3">
            Tryptophan là axit amin giúp tạo serotonin và melatonin - hormone giúp ngủ.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Sữa, sữa chua:</strong> Giàu tryptophan, có thể uống ấm trước khi ngủ</p>
            <p>• <strong>Trứng:</strong> Nguồn tryptophan tốt</p>
            <p>• <strong>Chuối:</strong> Có tryptophan và magnesium</p>
            <p>• <strong>Quả hạch:</strong> Hạnh nhân, óc chó có tryptophan và magnesium</p>
            <p>• <strong>Yến mạch:</strong> Có tryptophan và carbohydrate giúp hấp thu tryptophan</p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu magnesium</h3>
          <p className="text-body-sm mb-3">
            Magnesium giúp thư giãn cơ bắp và thần kinh, có thể giúp ngủ tốt hơn.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• <strong>Quả hạch:</strong> Hạnh nhân, hạt điều</p>
            <p>• <strong>Hạt:</strong> Hạt bí, hạt hướng dương</p>
            <p>• <strong>Rau xanh đậm:</strong> Rau chân vịt</p>
            <p>• <strong>Đậu:</strong> Đậu đen, đậu lăng</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Nên tránh Trước khi ngủ</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Ảnh hưởng Giấc ngủ</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Cà phê, Trà (có caffeine)</p>
              <p className="text-sm text-gray-700">
                Caffeine có thể tồn tại trong cơ thể 6-8 giờ. Tránh cà phê, trà, nước ngọt có caffeine 
                sau 2-3 giờ chiều.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Rượu</p>
              <p className="text-sm text-gray-700">
                Rượu có thể giúp ngủ nhanh nhưng làm giảm chất lượng giấc ngủ, dễ thức giấc.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ ăn Nhiều chất béo</p>
              <p className="text-sm text-gray-700">
                Khó tiêu, có thể gây khó chịu, ảnh hưởng đến giấc ngủ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ ngọt, Nhiều đường</p>
              <p className="text-sm text-gray-700">
                Có thể làm tăng đường huyết, sau đó giảm, ảnh hưởng đến giấc ngủ.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Bữa tối nhẹ: Ăn bữa tối nhẹ, cân bằng 2-3 giờ trước khi ngủ' },
            { type: 'tip', text: 'Snack nhẹ trước ngủ: Nếu đói, ăn snack nhẹ như sữa ấm, chuối, quả hạch' },
            { type: 'tip', text: 'Tránh caffeine: Không uống cà phê, trà sau 2-3 giờ chiều' },
            { type: 'check', text: 'Uống nước đủ: Uống đủ nước trong ngày, nhưng tránh uống quá nhiều trước khi ngủ' },
            { type: 'check', text: 'Bữa tối cân bằng: Protein + carbohydrate + rau củ, không quá nhiều chất béo' },
            { type: 'warning', text: 'Tránh rượu: Rượu ảnh hưởng đến chất lượng giấc ngủ' },
            { type: 'info', text: 'Thời gian ăn: Ăn quá gần giờ ngủ có thể ảnh hưởng đến giấc ngủ' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa tối và Snack trước Ngủ</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa tối lành mạnh (2-3 giờ trước ngủ)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Cá hồi nướng + rau xanh + khoai tây (nhẹ, cân bằng)</p>
            <p>• Thịt gà nạc + rau luộc + cơm (protein + carb + rau)</p>
            <p>• Đậu phụ + rau xào + cơm (nhẹ, dễ tiêu)</p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Snack trước Ngủ (Nếu đói)</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Sữa ấm (tryptophan, giúp thư giãn)</p>
            <p>• Chuối (tryptophan + magnesium)</p>
            <p>• Quả hạch nhỏ (hạnh nhân, óc chó)</p>
            <p>• Yến mạch nhỏ (tryptophan + carb)</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/magnesium-health">
            <h3 className="heading-5 mb-2">Magnesium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Magnesium có thể ảnh hưởng đến giấc ngủ
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng có thể ảnh hưởng đến giấc ngủ, 
          nhưng nếu bạn có vấn đề về giấc ngủ nghiêm trọng hoặc kéo dài, hãy tham khảo bác sĩ. 
          Có nhiều nguyên nhân gây mất ngủ, không chỉ dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}
