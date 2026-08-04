import {
  Award,
  Users,
  Globe2,
  TrendingUp,
} from "lucide-react";

type Language = "vi" | "en";

type WhyChooseUsProps = {
  lang: Language;
};

export default function WhyChooseUs({
  lang,
}: WhyChooseUsProps) {
  const content =
    lang === "en"
      ? {
          title: "WHY CHOOSE US",
          description:
            "Committed to delivering effective investment and consulting solutions.",

          features: [
            {
              icon: Award,
              title: "15+ Years of Experience",
              description:
                "Supporting domestic and international businesses throughout their development journey.",
            },
            {
              icon: Users,
              title: "200+ Clients",
              description:
                "Hundreds of partners have trusted and selected our services.",
            },
            {
              icon: Globe2,
              title: "Global Partnerships",
              description:
                "Connecting with businesses and strategic partners around the world.",
            },
            {
              icon: TrendingUp,
              title: "500+ Projects",
              description:
                "Successfully supporting and implementing projects across multiple sectors.",
            },
          ],
        }
      : {
          title: "TẠI SAO CHỌN CHÚNG TÔI 123",
          description:
            "Cam kết mang đến những giải pháp đầu tư và tư vấn hiệu quả.",

          features: [
            {
              icon: Award,
              title: "15+ năm kinh nghiệm",
              description:
                "Đồng hành cùng nhiều doanh nghiệp trong và ngoài nước.",
            },
            {
              icon: Users,
              title: "200+ khách hàng",
              description:
                "Hàng trăm đối tác đã tin tưởng lựa chọn dịch vụ.",
            },
            {
              icon: Globe2,
              title: "Đối tác toàn cầu",
              description:
                "Kết nối với nhiều doanh nghiệp và đối tác chiến lược trên toàn thế giới.",
            },
            {
              icon: TrendingUp,
              title: "500+ dự án",
              description:
                "Hỗ trợ và triển khai thành công các dự án trong nhiều lĩnh vực.",
            },
          ],
        };

  return (
    <section
      className="w-full px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24"
      style={{
        backgroundColor: "#17191a",
      }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Tiêu đề */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold leading-tight text-[#78aef8] sm:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>

        {/* Danh sách giá trị nổi bật */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
          {content.features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="group flex min-h-[250px] flex-col items-center rounded-2xl border border-white/20 p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-yellow-400/60 hover:shadow-2xl sm:min-h-[270px] sm:p-8"
                style={{
                  backgroundColor: "#1b1d1e",
                }}
              >
                {/* Icon */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-yellow-500 bg-yellow-500/5 text-yellow-400 shadow-[0_0_0_6px_rgba(234,179,8,0.07)] transition duration-300 group-hover:bg-yellow-500 group-hover:text-slate-950 group-hover:shadow-[0_0_0_9px_rgba(234,179,8,0.12)]">
                  <Icon
                    size={42}
                    strokeWidth={1.8}
                  />
                </div>

                {/* Tiêu đề thẻ */}
                <h3 className="mt-7 text-lg font-bold leading-7 text-white sm:text-xl">
                  {item.title}
                </h3>

                {/* Mô tả */}
                <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}