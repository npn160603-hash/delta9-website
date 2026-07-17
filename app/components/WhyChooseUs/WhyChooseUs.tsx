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
          title: "TẠI SAO CHỌN CHÚNG TÔI",
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Tiêu đề */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-blue-900 md:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-500">
            {content.description}
          </p>
        </div>

        {/* Danh sách giá trị nổi bật */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {content.features.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-xl border border-gray-200 bg-white p-8 text-center shadow transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <Icon
                  size={55}
                  className="mx-auto text-yellow-500"
                />

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-500">
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