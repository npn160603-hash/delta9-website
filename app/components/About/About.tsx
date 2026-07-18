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
    <section className="bg-[#17191a] px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Tiêu đề */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#78aef8] sm:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 text-sm leading-7 text-gray-300 sm:mt-6 sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>

        {/* Danh sách dịch vụ */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-4">
          {content.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group flex flex-col rounded-2xl border border-white/20 bg-white/[0.02] p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-500/60 hover:bg-white/[0.05] hover:shadow-2xl sm:p-7"
              >
                {/* Vòng tròn màu vàng bao quanh icon */}
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500/5 text-yellow-400 shadow-[0_0_0_7px_rgba(234,179,8,0.08)] transition duration-300 group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:shadow-[0_0_0_10px_rgba(234,179,8,0.12)] sm:h-24 sm:w-24">
                  <Icon
                    size={42}
                    strokeWidth={1.8}
                    className="transition duration-300 sm:h-12 sm:w-12"
                  />
                </div>

                <h3 className="mt-8 text-xl font-bold leading-7 text-white">
                  {service.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400 sm:text-base">
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