import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Building2,
  Factory,
  Globe2,
  Handshake,
  Leaf,
  PackageCheck,
  Route as RouteIcon,
} from "lucide-react";

import { hasLocale } from "../../../dictionaries";

type HealthyNaturalVietnamPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const pageContent = {
  vi: {
    metadata: {
      title: "Healthy Natural Vietnam",
      description:
        "Tìm hiểu dự án phát triển thương hiệu chăm sóc sức khỏe cao cấp Healthy Natural Vietnam.",
    },

    hero: {
      eyebrow: "DỰ ÁN NỔI BẬT",
      title: "Healthy Natural Vietnam",
      subtitle:
        "Dự án phát triển thương hiệu chăm sóc sức khỏe cao cấp tại Việt Nam.",
      description:
        "Một sáng kiến tập trung vào phát triển thương hiệu, chiến lược sản phẩm, chất lượng vận hành, hệ thống phân phối và hợp tác thương mại.",
      back: "← Quay lại danh sách dự án",
    },

    overview: {
      eyebrow: "TỔNG QUAN DỰ ÁN",
      title:
        "Phát triển một thương hiệu chăm sóc sức khỏe mang định hướng cao cấp và bản sắc Việt Nam",
      paragraphs: [
        "Healthy Natural Vietnam được định hướng trở thành một thương hiệu chăm sóc sức khỏe tự nhiên, kết hợp nhận diện cao cấp với nền tảng phát triển tại Việt Nam.",
        "Dự án tập trung vào xây dựng thương hiệu, phát triển sản phẩm, thiết lập hệ thống kiểm soát chất lượng và mở rộng các kênh phân phối thương mại.",
        "Kế hoạch được triển khai theo nhiều giai đoạn, từ hoàn thiện nền tảng thương hiệu và vận hành đến mở rộng hệ thống phân phối và hợp tác khu vực.",
      ],
    },

    pillarsTitle: "CÁC TRỤ CỘT PHÁT TRIỂN",

    pillars: [
      {
        icon: Leaf,
        title: "Định vị thương hiệu",
        description:
          "Xây dựng hình ảnh chăm sóc sức khỏe tự nhiên cao cấp với phong cách xanh đậm, vàng nhạt và thiết kế tối giản.",
      },
      {
        icon: PackageCheck,
        title: "Chiến lược sản phẩm",
        description:
          "Phát triển danh mục sản phẩm theo định hướng rõ ràng, thiết kế đồng nhất và thông tin minh bạch.",
      },
      {
        icon: Factory,
        title: "Vận hành và chất lượng",
        description:
          "Tập trung vào truy xuất lô hàng, kiểm tra chất lượng, tài liệu phân tích và nhãn sản phẩm phù hợp.",
      },
      {
        icon: Building2,
        title: "Hệ thống phân phối",
        description:
          "Phát triển kết hợp giữa đối tác tổ chức, nhà phân phối, bán lẻ hiện đại và kênh trực tuyến.",
      },
      {
        icon: Handshake,
        title: "Hợp tác thương mại",
        description:
          "Tìm kiếm các mối quan hệ dài hạn với nhà đầu tư, đối tác phân phối và đơn vị phát triển thị trường.",
      },
      {
        icon: Globe2,
        title: "Mở rộng khu vực",
        description:
          "Xây dựng nền tảng tại Việt Nam trước khi tiếp cận các cơ hội hợp tác và phân phối trong khu vực.",
      },
    ],

    brand: {
      eyebrow: "ĐỊNH VỊ THƯƠNG HIỆU",
      title: "Phong cách tự nhiên, chuyên nghiệp và cao cấp",
      description:
        "Nhận diện Healthy Natural Vietnam sử dụng tông xanh đậm và vàng nhạt, hướng đến hình ảnh bình tĩnh, đáng tin cậy và chuyên nghiệp.",
      imageAlt:
        "Định vị và nhận diện thương hiệu Healthy Natural Vietnam",
    },

    quality: {
      eyebrow: "VẬN HÀNH VÀ CHẤT LƯỢNG",
      title: "Phát triển quy trình có cấu trúc và khả năng truy xuất",
      description:
        "Dự án định hướng xây dựng hệ thống vận hành có kiểm soát, bao gồm quản lý nguồn cung, truy xuất lô hàng, kiểm tra độc lập và tài liệu chất lượng.",
      points: [
        "Quản lý nguồn cung và quy trình vận hành",
        "Truy xuất lô hàng và tài liệu sản phẩm",
        "Kiểm tra chất lượng độc lập",
        "Nhãn sản phẩm bằng tiếng Việt và tiếng Anh",
      ],
      imageAlt:
        "Hệ thống vận hành và kiểm soát chất lượng Healthy Natural Vietnam",
    },

    roadmap: {
      eyebrow: "LỘ TRÌNH PHÁT TRIỂN",
      title: "Triển khai theo ba giai đoạn",
      phases: [
        {
          title: "Giai đoạn 1: Xây dựng nền tảng",
          description:
            "Hoàn thiện thương hiệu, thiết lập quy trình vận hành, xây dựng nền tảng trực tuyến và kết nối các nhà phân phối đầu tiên.",
        },
        {
          title: "Giai đoạn 2: Mở rộng",
          description:
            "Phát triển quan hệ với các đối tác tổ chức, triển khai thử nghiệm bán lẻ và mở rộng hoạt động truyền thông.",
        },
        {
          title: "Giai đoạn 3: Phát triển quy mô",
          description:
            "Mở rộng hệ thống phân phối, phát triển danh mục sản phẩm và nghiên cứu các cơ hội hợp tác khu vực.",
        },
      ],
    },

    cta: {
      title: "Quan tâm đến cơ hội hợp tác?",
      description:
        "Liên hệ với Delta9 Global để trao đổi về phát triển dự án, phân phối, đầu tư và hợp tác thương mại.",
      button: "TRAO ĐỔI VỀ DỰ ÁN",
    },

    notice:
      "Nội dung trên là phần giới thiệu tổng quan của dự án. Thông tin tài chính, hợp đồng, kế hoạch nội bộ và các tài liệu bảo mật không được công bố trên website.",
  },

  en: {
    metadata: {
      title: "Healthy Natural Vietnam",
      description:
        "Explore the Healthy Natural Vietnam premium wellness brand development initiative.",
    },

    hero: {
      eyebrow: "FEATURED VENTURE",
      title: "Healthy Natural Vietnam",
      subtitle:
        "A premium wellness brand development initiative in Vietnam.",
      description:
        "An initiative focused on brand development, product strategy, operational quality, distribution infrastructure and commercial partnerships.",
      back: "← Back to Projects",
    },

    overview: {
      eyebrow: "PROJECT OVERVIEW",
      title:
        "Developing a premium wellness brand with a distinctive Vietnamese identity",
      paragraphs: [
        "Healthy Natural Vietnam is positioned as a natural wellness brand combining premium visual identity with a development foundation in Vietnam.",
        "The initiative focuses on brand building, product development, quality control systems and the expansion of commercial distribution channels.",
        "The project follows a phased roadmap covering brand establishment, operational development, distribution expansion and regional cooperation.",
      ],
    },

    pillarsTitle: "DEVELOPMENT PILLARS",

    pillars: [
      {
        icon: Leaf,
        title: "Brand Positioning",
        description:
          "Building a premium natural wellness identity using deep green, muted gold and refined minimal design.",
      },
      {
        icon: PackageCheck,
        title: "Product Strategy",
        description:
          "Developing a clearly structured product portfolio with consistent design and transparent information.",
      },
      {
        icon: Factory,
        title: "Operations and Quality",
        description:
          "Focusing on batch traceability, quality testing, analytical documentation and appropriate product labeling.",
      },
      {
        icon: Building2,
        title: "Distribution Network",
        description:
          "Combining institutional partnerships, distributors, modern retail and direct online channels.",
      },
      {
        icon: Handshake,
        title: "Commercial Partnerships",
        description:
          "Building long-term relationships with investors, distributors and market development partners.",
      },
      {
        icon: Globe2,
        title: "Regional Expansion",
        description:
          "Establishing a strong foundation in Vietnam before pursuing regional distribution and cooperation opportunities.",
      },
    ],

    brand: {
      eyebrow: "BRAND POSITIONING",
      title: "Natural, professional and premium",
      description:
        "Healthy Natural Vietnam uses a deep green and muted gold visual identity designed to communicate calmness, credibility and professional quality.",
      imageAlt:
        "Healthy Natural Vietnam brand positioning and visual identity",
    },

    quality: {
      eyebrow: "OPERATIONS AND QUALITY",
      title: "Developing structured and traceable processes",
      description:
        "The initiative is designed around controlled operations, including supply management, batch traceability, independent testing and quality documentation.",
      points: [
        "Supply and operational process management",
        "Batch traceability and product documentation",
        "Independent quality testing",
        "Vietnamese and English product labeling",
      ],
      imageAlt:
        "Healthy Natural Vietnam operations and quality control",
    },

    roadmap: {
      eyebrow: "DEVELOPMENT ROADMAP",
      title: "A three-phase implementation plan",
      phases: [
        {
          title: "Phase 1: Foundation",
          description:
            "Complete brand development, establish operational processes, build the digital platform and connect initial distributors.",
        },
        {
          title: "Phase 2: Expansion",
          description:
            "Develop institutional relationships, conduct retail pilots and expand communication activities.",
        },
        {
          title: "Phase 3: Scale",
          description:
            "Expand distribution, develop the product portfolio and pursue regional cooperation opportunities.",
        },
      ],
    },

    cta: {
      title: "Interested in partnership opportunities?",
      description:
        "Contact Delta9 Global to discuss project development, distribution, investment and commercial cooperation.",
      button: "DISCUSS THE PROJECT",
    },

    notice:
      "This page provides a public project overview. Financial information, contracts, internal plans and confidential materials are not published on the website.",
  },
} as const;

export async function generateMetadata({
  params,
}: HealthyNaturalVietnamPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  return {
    title: pageContent[lang].metadata.title,
    description: pageContent[lang].metadata.description,
  };
}

export default async function HealthyNaturalVietnamPage({
  params,
}: HealthyNaturalVietnamPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden bg-[#0f3d2e] text-white">
        <Image
          src="/images/healthy-natural-vietnam/hero.png"
          alt={content.hero.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-[#0f3d2e]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d2e] via-[#0f3d2e]/80 to-transparent" />

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl flex-col justify-center px-6 py-24">
          <Link
            href={`/${lang}/projects` as Route}
            className="w-fit font-bold text-[#e0c38a] transition hover:text-white"
          >
            {content.hero.back}
          </Link>

          <p className="mt-14 font-bold uppercase tracking-[0.25em] text-[#d2b06a]">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            {content.hero.title}
          </h1>

          <p className="mt-6 max-w-3xl text-xl font-semibold leading-8 text-[#e0c38a]">
            {content.hero.subtitle}
          </p>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-50/80">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Tổng quan */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#b28b42]">
              {content.overview.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0f3d2e] md:text-5xl">
              {content.overview.title}
            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-600">
            {content.overview.paragraphs.map((paragraph) => (
              <p key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Các trụ cột */}
      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#0f3d2e] md:text-5xl">
            {content.pillarsTitle}
          </h2>

          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
            {content.pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <article
                  key={pillar.title}
                  className="rounded-2xl bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#0f3d2e] text-[#d2b06a]">
                    <Icon size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-[#0f3d2e]">
                    {pillar.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Thương hiệu */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-white shadow-xl">
            <Image
              src="/images/healthy-natural-vietnam/brand.png"
              alt={content.brand.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>

          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#b28b42]">
              {content.brand.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight text-[#0f3d2e] md:text-5xl">
              {content.brand.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {content.brand.description}
            </p>
          </div>
        </div>
      </section>

      {/* Chất lượng */}
      <section className="bg-[#0f3d2e] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="font-bold uppercase tracking-[0.2em] text-[#d2b06a]">
              {content.quality.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
              {content.quality.title}
            </h2>

            <p className="mt-6 leading-8 text-emerald-50/80">
              {content.quality.description}
            </p>

            <ul className="mt-8 space-y-4">
              {content.quality.points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4"
                >
                  <BadgeCheck
                    size={21}
                    className="mt-0.5 shrink-0 text-[#d2b06a]"
                  />

                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-white shadow-xl">
            <Image
              src="/images/healthy-natural-vietnam/quality.png"
              alt={content.quality.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Lộ trình */}
      <section className="bg-slate-100 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <RouteIcon
              size={45}
              className="mx-auto text-[#b28b42]"
            />

            <p className="mt-5 font-bold uppercase tracking-[0.2em] text-[#b28b42]">
              {content.roadmap.eyebrow}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#0f3d2e] md:text-5xl">
              {content.roadmap.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {content.roadmap.phases.map((phase, index) => (
              <article
                key={phase.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d2b06a] text-lg font-bold text-[#0f3d2e]">
                  {index + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#0f3d2e]">
                  {phase.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {phase.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Liên hệ */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-[#0f3d2e] px-7 py-14 text-center text-white md:px-14">
          <Handshake
            size={48}
            className="mx-auto text-[#d2b06a]"
          />

          <h2 className="mt-6 text-3xl font-bold md:text-5xl">
            {content.cta.title}
          </h2>

          <p className="mx-auto mt-5 max-w-3xl leading-8 text-emerald-50/80">
            {content.cta.description}
          </p>

          <Link
            href={`/${lang}/contact` as Route}
            className="mt-8 inline-block rounded-lg bg-[#d2b06a] px-8 py-4 font-bold text-[#0f3d2e] transition hover:bg-[#e2c88e]"
          >
            {content.cta.button}
          </Link>
        </div>

        <p className="mx-auto mt-10 max-w-4xl text-center text-sm leading-6 text-slate-500">
          {content.notice}
        </p>
      </section>
    </main>
  );
}