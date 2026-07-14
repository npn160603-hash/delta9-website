import { Award, Users, Globe2, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "15+ năm kinh nghiệm",
    description: "Đồng hành cùng nhiều doanh nghiệp trong và ngoài nước.",
  },
  {
    icon: Users,
    title: "200+ khách hàng",
    description: "Hàng trăm đối tác đã tin tưởng lựa chọn dịch vụ.",
  },
  {
    icon: Globe2,
    title: "Đối tác toàn cầu",
    description: "Kết nối với nhiều doanh nghiệp trên toàn thế giới.",
  },
  {
    icon: TrendingUp,
    title: "500+ dự án",
    description: "Thực hiện thành công nhiều dự án quy mô lớn.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-blue-900">
          TẠI SAO CHỌN CHÚNG TÔI
        </h2>

        <p className="mt-5 text-center text-gray-500">
          Cam kết mang đến những giải pháp đầu tư và tư vấn hiệu quả.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {

            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border p-8 text-center shadow transition hover:-translate-y-2 hover:shadow-xl"
              >

                <Icon
                  size={55}
                  className="mx-auto text-yellow-500"
                />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-500">
                  {item.description}
                </p>

              </div>
            );

          })}

        </div>

      </div>
    </section>
  );
}