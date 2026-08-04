import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

type Language = "vi" | "en";

type NewsProps = {
  lang: Language;
};

export default function News({
  lang,
}: NewsProps) {
  const content =
    lang === "en"
      ? {
          newsTitle: "LATEST NEWS & INSIGHTS",
          newsButton: "VIEW ALL NEWS",

          investmentTitle: "INVESTMENT OPPORTUNITIES",

          investmentDescription:
            "Explore strategic investment and project development opportunities in Vietnam and Southeast Asia.",

          investmentItems: [
            "International investment connections",
            "Renewable energy development",
            "Agriculture and aquaculture",
            "Infrastructure and real estate",
          ],

          investmentButton: "DISCUSS OPPORTUNITIES",

          newsItems: [
            {
              image: "/images/news/bat-tay.jpg",

              title:
                "Delta9 Global Strengthens Partnerships in Vietnam",

              description:
                "Strengthening cooperation with government leaders and private enterprises to promote investment and sustainable development.",

              date: "May 20, 2025",
            },

            {
              image: "/images/news/nang-luong-sun.jpg",

              title:
                "Renewable Energy Projects Drive Growth Across Southeast Asia",

              description:
                "Clean energy initiatives continue to attract investors and support sustainable economic growth across the region.",

              date: "April 28, 2025",
            },

            {
              image: "/images/news/nuoi-trong.jpg",

              title:
                "Aquaculture Development: A Key Driver of Food Security and Economic Growth",

              description:
                "Advanced aquaculture projects are creating new opportunities for communities, businesses and international investors.",

              date: "April 15, 2025",
            },
          ],
        }
      : {
          newsTitle: "TIN TỨC & THÔNG TIN MỚI NHẤT",
          newsButton: "XEM TẤT CẢ TIN TỨC",

          investmentTitle: "CƠ HỘI ĐẦU TƯ",

          investmentDescription:
            "Khám phá các cơ hội đầu tư chiến lược và phát triển dự án tại Việt Nam và Đông Nam Á.",

          investmentItems: [
            "Kết nối đầu tư quốc tế",
            "Phát triển năng lượng tái tạo",
            "Nông nghiệp và nuôi trồng thủy sản",
            "Cơ sở hạ tầng và bất động sản",
          ],

          investmentButton: "TRAO ĐỔI CƠ HỘI ĐẦU TƯ",

          newsItems: [
            {
              image: "/images/news/bat-tay.jpg",

              title:
                "Tập đoàn Delta9 Global tăng cường quan hệ hợp tác tại Việt Nam",

              description:
                "Thúc đẩy hợp tác với các nhà lãnh đạo Chính phủ và doanh nghiệp tư nhân nhằm hỗ trợ đầu tư và phát triển bền vững.",

              date: "Ngày 20 tháng 5 năm 2025",
            },

            {
              image: "/images/news/nang-luong-sun.jpg",

              title:
                "Các dự án năng lượng tái tạo tạo động lực phát triển tại Đông Nam Á",

              description:
                "Các sáng kiến năng lượng sạch tiếp tục thu hút nhà đầu tư và thúc đẩy tăng trưởng bền vững trên toàn khu vực.",

              date: "Ngày 28 tháng 4 năm 2025",
            },

            {
              image: "/images/news/nuoi-trong.jpg",

              title:
                "Phát triển nuôi trồng thủy sản: Động lực quan trọng cho an ninh lương thực và tăng trưởng kinh tế",

              description:
                "Các dự án nuôi trồng thủy sản tiên tiến đang tạo ra nhiều cơ hội cho cộng đồng, doanh nghiệp và nhà đầu tư quốc tế.",

              date: "Ngày 15 tháng 4 năm 2025",
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
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {/* Khung tin tức */}
          <div
            className="overflow-hidden rounded-2xl border border-white/15 p-5 shadow-xl sm:p-7 md:p-8 lg:col-span-2"
            style={{
              backgroundColor: "#1b1d1e",
            }}
          >
            {/* Tiêu đề */}
            <div className="flex flex-col gap-4 border-b border-white/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
              <h2 className="text-xl font-bold uppercase leading-7 text-[#78aef8] sm:text-2xl">
                {content.newsTitle}
              </h2>

              <Link
                href={`/${lang}/news` as Route}
                className="w-fit shrink-0 text-xs font-bold uppercase tracking-wide text-yellow-400 transition hover:text-yellow-300"
              >
                {content.newsButton}
              </Link>
            </div>

            {/* Danh sách bài viết */}
            <div className="divide-y divide-white/10">
              {content.newsItems.map((item) => (
                <article
                  key={item.title}
                  className="grid grid-cols-1 gap-5 py-6 sm:grid-cols-[180px_1fr] sm:items-start"
                >
                  {/* Ảnh tin tức */}
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl sm:h-28 sm:aspect-auto">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, 180px"
                      className="object-cover transition duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Nội dung */}
                  <div className="min-w-0">
                    <h3 className="break-words text-lg font-bold leading-7 text-white transition hover:text-yellow-400">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {item.description}
                    </p>

                    <p className="mt-3 text-xs font-medium text-slate-500">
                      {item.date}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Khung cơ hội đầu tư */}
          <div className="rounded-2xl border border-yellow-400/25 bg-[#1f2150] p-6 text-white shadow-xl sm:p-8">
            <h2 className="text-2xl font-bold uppercase leading-8 text-yellow-400">
              {content.investmentTitle}
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
              {content.investmentDescription}
            </p>

            <ul className="mt-7 space-y-3">
              {content.investmentItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-medium leading-6 text-slate-200 sm:px-5"
                >
                  <span className="shrink-0 font-bold text-yellow-400">
                    ✓
                  </span>

                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href={`/${lang}/contact` as Route}
              className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-yellow-500 px-5 py-4 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-400 sm:w-auto sm:px-6"
            >
              {content.investmentButton}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}