import type { Metadata, Route } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
} from "lucide-react";

import { hasLocale } from "../../dictionaries";

type ServicesPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

/*
  Nội dung riêng cho tiếng Việt và tiếng Anh.
*/
const pageContent = {
  vi: {
    metadataTitle: "Dịch vụ",
    metadataDescription:
      "Các dịch vụ tư vấn, đầu tư và thương mại của Delta 9 Global.",

    smallTitle: "Giải pháp của chúng tôi",
    pageTitle: "Dịch vụ",
    introduction:
      "Các giải pháp được xây dựng dựa trên nhu cầu thực tế của từng doanh nghiệp và từng dự án.",
    contactButton: "Yêu cầu tư vấn →",

    services: [
      {
        icon: Globe2,
        title: "Kinh doanh quốc tế",
        description:
          "Hỗ trợ doanh nghiệp nghiên cứu thị trường, tìm kiếm đối tác và mở rộng hoạt động quốc tế.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Tư vấn đầu tư",
        description:
          "Phân tích cơ hội, xây dựng chiến lược và hỗ trợ triển khai các kế hoạch đầu tư.",
      },
      {
        icon: Building2,
        title: "Phát triển dự án",
        description:
          "Tư vấn mô hình, cấu trúc dự án, kết nối nguồn lực và các đối tác cần thiết.",
      },
      {
        icon: Landmark,
        title: "Quan hệ Chính phủ",
        description:
          "Hỗ trợ doanh nghiệp tiếp cận thông tin, chính sách và các cơ quan có liên quan.",
      },
    ],
  },

  en: {
    metadataTitle: "Services",
    metadataDescription:
      "Consulting, investment and international trade services provided by Delta 9 Global.",

    smallTitle: "Our solutions",
    pageTitle: "Services",
    introduction:
      "Our solutions are designed around the practical needs of each business and individual project.",
    contactButton: "Request a consultation →",

    services: [
      {
        icon: Globe2,
        title: "International Business",
        description:
          "Supporting businesses with market research, partner identification and international expansion.",
      },
      {
        icon: BriefcaseBusiness,
        title: "Investment Consulting",
        description:
          "Analyzing opportunities, developing strategies and supporting the implementation of investment plans.",
      },
      {
        icon: Building2,
        title: "Project Development",
        description:
          "Advising on project models and structures while connecting essential resources and partners.",
      },
      {
        icon: Landmark,
        title: "Government Relations",
        description:
          "Helping businesses access relevant information, policies and government institutions.",
      },
    ],
  },
} as const;

/*
  Tiêu đề và mô tả trên Google/trình duyệt
  cũng thay đổi theo từng ngôn ngữ.
*/
export async function generateMetadata({
  params,
}: ServicesPageProps): Promise<Metadata> {
  const { lang } = await params;

  const selectedLanguage = hasLocale(lang) ? lang : "vi";
  const content = pageContent[selectedLanguage];

  return {
    title: content.metadataTitle,
    description: content.metadataDescription,
  };
}

export default async function ServicesPage({
  params,
}: ServicesPageProps) {
  const { lang } = await params;

  /*
    Chỉ cho phép /vi và /en.
    Các ngôn ngữ khác sẽ hiện trang 404.
  */
  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main>
      {/* Phần đầu trang */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.smallTitle}
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {content.pageTitle}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {content.introduction}
          </p>
        </div>
      </section>

      {/* Danh sách dịch vụ */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {content.services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100">
                  <Icon
                    className="text-yellow-700"
                    size={30}
                  />
                </div>

                <h2 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href={`/${lang}/contact` as Route}
                  className="mt-6 inline-block font-semibold text-yellow-700 transition hover:text-yellow-600"
                >
                  {content.contactButton}
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}