import {
  Briefcase,
  Building2,
  Landmark,
  Globe,
} from "lucide-react";

export default function About() {
  const services = [
    {
      icon: Briefcase,
      title: "Phát triển Kinh doanh",
      desc: "Gia nhập thị trường, hợp tác chiến lược và mở rộng kinh doanh. Thành lập liên doanh. Chiến lược mở rộng kinh doanh. Hỗ trợ đầu tư."
    },
    {
      icon: Building2,
      title: "Đầu tư & Dự án",
      desc: "Tư vấn đầu tư trực tiếp từ nước ngoài. Nghiên cứu tính khả thi của dự án. Phân tích cơ hội đầu tư. Phối hợp thẩm định. Đại diện cho nhà đầu tư."
    },
    {
      icon: Landmark,
      title: "Quan hệ Chính phủ & Thể chế",
      desc: "Phối hợp với các bộ ngành chính phủ và chính quyền. Hỗ trợ thủ tục đầu tư. Trình bày dự án và hợp tác với các bên liên quan. Các sáng kiến hợp tác quốc tế."
    },
    {
      icon: Globe,
      title: "Thương mại Quốc tế",
      desc: "Tư vấn xuất nhập khẩu. Tìm nguồn cung ứng quốc tế. Phát triển chuỗi cung ứng. Hướng dẫn tuân thủ và đàm phán thương mại."
    }
  ];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-4xl font-bold text-blue-900">

          DỊCH VỤ CỦA CHÚNG TÔI

        </h2>

        <p className="mx-auto mt-6 max-w-3xl text-center text-gray-600">

          Chúng tôi hỗ trợ doanh nghiệp và nhà đầu tư
          tạo ra giá trị bền vững thông qua các giải pháp
          tư vấn và kết nối chiến lược.

        </p>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => {

            const Icon = service.icon;

            return (

              <div
                key={service.title}
                className="rounded-xl p-6 text-center transition hover:shadow-xl"
              >

                <Icon
                  size={60}
                  className="mx-auto text-blue-900"
                />

                <h3 className="mt-6 text-xl font-bold">

                  {service.title}

                </h3>

                <p className="mt-4 text-gray-500">

                  {service.desc}

                </p>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}