import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { hasLocale } from "../../dictionaries";

type AboutPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const pageContent = {
  vi: {
    metadata: {
      title: "Giới thiệu",
      description:
        "Tìm hiểu về Delta9 Global, tầm nhìn, sứ mệnh và giá trị cốt lõi.",
    },

    hero: {
      eyebrow: "Delta9 Global",
      title: "TẬP ĐOÀN TOÀN CẦU DELTA9",
      description:
        "Dịch vụ tư vấn kinh doanh và thương mại quốc tế tại Việt Nam.",
    },

    story: {
      eyebrow: "CÂU CHUYỆN CỦA CHÚNG TÔI",

      title:
        "Delta9 Global Corporation là một công ty tư vấn kinh doanh và phát triển dự án quốc tế chuyên tạo lập quan hệ đối tác chiến lược giữa Việt Nam và thị trường toàn cầu.",

      introduction:
        "Chúng tôi cung cấp dịch vụ tư vấn chuyên nghiệp cho các cơ quan chính phủ, doanh nghiệp tư nhân, nhà đầu tư, nhà sản xuất và các tổ chức quốc tế đang tìm cách thành lập, mở rộng hoặc đầu tư tại Việt Nam.",

      paragraphs: [
        "Delta9 Global hoạt động trong lĩnh vực tư vấn, kết nối đầu tư, phát triển dự án và thương mại quốc tế.",

        "Chúng tôi đồng hành cùng doanh nghiệp trong quá trình nghiên cứu thị trường, xác định cơ hội và xây dựng quan hệ đối tác chiến lược.",

        "Với mạng lưới rộng khắp các đối tác kinh doanh, các mối quan hệ với chính phủ và các chuyên gia trong ngành, Delta9 Global Corporation đóng vai trò là cầu nối đáng tin cậy, kết nối các cơ hội giữa Việt Nam, Hoa Kỳ, Philippines và các thị trường quốc tế khác.",
      ],
    },

    values: [
      {
        title: "Tầm nhìn",
        description:
          "Trở thành cầu nối đáng tin cậy giữa doanh nghiệp, nhà đầu tư và các cơ hội phát triển quốc tế.",
      },
      {
        title: "Sứ mệnh",
        description:
          "Thúc đẩy phát triển kinh tế bền vững thông qua đầu tư chiến lược, thương mại quốc tế, chuyển giao công nghệ và hợp tác kinh doanh xuyên biên giới.",
      },
      {
        title: "Giá trị cốt lõi",
        description:
          "Chính trực, chuyên nghiệp, hợp tác lâu dài và tập trung vào hiệu quả thực tế.",
      },
    ],

    contactButton: "LIÊN HỆ VỚI CHÚNG TÔI",
  },

  en: {
    metadata: {
      title: "About Us",
      description:
        "Learn about Delta9 Global, our vision, mission and core values.",
    },

    hero: {
      eyebrow: "Delta9 Global",
      title: "DELTA9 GLOBAL CORPORATION",
      description:
        "International business and trade consulting services in Vietnam.",
    },

    story: {
      eyebrow: "OUR STORY",

      title:
        "Delta9 Global Corporation is an international business consulting and project development company specializing in building strategic partnerships between Vietnam and global markets.",

      introduction:
        "We provide professional consulting services to government agencies, private enterprises, investors, manufacturers and international organizations seeking to establish, expand or invest in Vietnam.",

      paragraphs: [
        "Delta9 Global operates in business consulting, investment connections, project development and international trade.",

        "We support businesses throughout the process of conducting market research, identifying opportunities and building strategic partnerships.",

        "Through an extensive network of business partners, government relationships and industry experts, Delta9 Global Corporation serves as a trusted bridge connecting opportunities between Vietnam, the United States, the Philippines and other international markets.",
      ],
    },

    values: [
      {
        title: "Vision",
        description:
          "To become a trusted bridge connecting businesses, investors and international development opportunities.",
      },
      {
        title: "Mission",
        description:
          "To promote sustainable economic development through strategic investment, international trade, technology transfer and cross-border business cooperation.",
      },
      {
        title: "Core Values",
        description:
          "Integrity, professionalism, long-term collaboration and a strong focus on practical results.",
      },
    ],

    contactButton: "CONTACT US",
  },
} as const;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  return {
    title: pageContent[lang].metadata.title,
    description: pageContent[lang].metadata.description,
  };
}

export default async function AboutPage({
  params,
}: AboutPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main>
      {/* Phần đầu trang */}
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Câu chuyện công ty */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-yellow-600">
              {content.story.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-slate-900">
              {content.story.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {content.story.introduction}
            </p>
          </div>

          <div className="space-y-5 leading-8 text-slate-600">
            {content.story.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tầm nhìn, sứ mệnh và giá trị */}
      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {content.values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href={`/${lang}/contact` as Route}
              className="inline-block rounded bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-400"
            >
              {content.contactButton}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}