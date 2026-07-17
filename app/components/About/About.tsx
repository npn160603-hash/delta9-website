import {
  Briefcase,
  Building2,
  Landmark,
  Globe,
} from "lucide-react";

type Language = "vi" | "en";

type AboutProps = {
  lang: Language;
};

export default function About({
  lang,
}: AboutProps) {
  const content =
    lang === "en"
      ? {
          title: "OUR SERVICES",

          description:
            "We support businesses and investors in creating sustainable value through professional consulting and strategic connection solutions.",

          services: [
            {
              icon: Briefcase,
              title: "Business Development",
              description:
                "Market entry, strategic partnerships and business expansion. Joint venture establishment, business growth strategies and investment support.",
            },
            {
              icon: Building2,
              title: "Investment & Projects",
              description:
                "Foreign direct investment consulting, project feasibility studies, investment opportunity analysis, due diligence coordination and investor representation.",
            },
            {
              icon: Landmark,
              title: "Government & Institutional Relations",
              description:
                "Coordination with government ministries and local authorities, investment procedure support, project presentations, stakeholder engagement and international cooperation initiatives.",
            },
            {
              icon: Globe,
              title: "International Trade",
              description:
                "Import and export consulting, international sourcing, supply chain development, regulatory compliance guidance and trade negotiations.",
            },
          ],
        }
      : {
          title: "DỊCH VỤ CỦA CHÚNG TÔI",

          description:
            "Chúng tôi hỗ trợ doanh nghiệp và nhà đầu tư tạo ra giá trị bền vững thông qua các giải pháp tư vấn chuyên nghiệp và kết nối chiến lược.",

          services: [
            {
              icon: Briefcase,
              title: "Phát triển Kinh doanh",
              description:
                "Gia nhập thị trường, hợp tác chiến lược và mở rộng kinh doanh. Thành lập liên doanh, xây dựng chiến lược phát triển và hỗ trợ đầu tư.",
            },
            {
              icon: Building2,
              title: "Đầu tư & Dự án",
              description:
                "Tư vấn đầu tư trực tiếp nước ngoài, nghiên cứu tính khả thi của dự án, phân tích cơ hội đầu tư, phối hợp thẩm định và đại diện cho nhà đầu tư.",
            },
            {
              icon: Landmark,
              title: "Quan hệ Chính phủ & Thể chế",
              description:
                "Phối hợp với các bộ, ngành và chính quyền địa phương, hỗ trợ thủ tục đầu tư, trình bày dự án, kết nối các bên liên quan và triển khai sáng kiến hợp tác quốc tế.",
            },
            {
              icon: Globe,
              title: "Thương mại Quốc tế",
              description:
                "Tư vấn xuất nhập khẩu, tìm nguồn cung ứng quốc tế, phát triển chuỗi cung ứng, hướng dẫn tuân thủ và hỗ trợ đàm phán thương mại.",
            },
          ],
        };

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Tiêu đề */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-600">
            {content.description}
          </p>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-xl border border-gray-100 bg-white p-6 text-center transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={60}
                  className="mx-auto text-blue-900"
                />

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
                  {service.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}