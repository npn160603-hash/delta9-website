import type { Metadata } from "next";
import Image from "next/image";
import {
  Building2,
  ExternalLink,
  Mail,
  Phone,
  UserRound,
} from "lucide-react";
import { notFound } from "next/navigation";

import { publicPartners } from "../../data/partners";
import { hasLocale } from "../../dictionaries";

type PartnersPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const pageContent = {
  vi: {
    metadata: {
      title: "Đối tác",
      description:
        "Khám phá mạng lưới đối tác và kết nối kinh doanh quốc tế của Delta9 Global.",
    },

    hero: {
      eyebrow: "MẠNG LƯỚI HỢP TÁC",
      title: "ĐỐI TÁC CỦA CHÚNG TÔI",
      description:
        "Delta9 Global xây dựng mạng lưới kết nối với các doanh nghiệp, nhà đầu tư và đại diện quốc tế nhằm phát triển những cơ hội hợp tác lâu dài.",
    },

    labels: {
      representative: "Người đại diện",
      role: "Chức danh",
      email: "Email",
      phone: "Điện thoại",
      website: "TRUY CẬP WEBSITE",
    },

    notice:
      "Thông tin trên trang được cung cấp nhằm giới thiệu mạng lưới quan hệ và đối tác kinh doanh của Delta9 Global.",
  },

  en: {
    metadata: {
      title: "Partners",
      description:
        "Explore Delta9 Global's international partner and business connection network.",
    },

    hero: {
      eyebrow: "PARTNERSHIP NETWORK",
      title: "OUR PARTNERS",
      description:
        "Delta9 Global builds connections with companies, investors and international representatives to develop long-term cooperation opportunities.",
    },

    labels: {
      representative: "Representative",
      role: "Title",
      email: "Email",
      phone: "Phone",
      website: "VISIT WEBSITE",
    },

    notice:
      "The information on this page is provided to introduce Delta9 Global's network of business relationships and partners.",
  },
} as const;

export async function generateMetadata({
  params,
}: PartnersPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const content = pageContent[lang];

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function PartnersPage({
  params,
}: PartnersPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main className="bg-[#17191a]">
      {/* Phần đầu trang */}
      <section className="bg-slate-950 px-4 py-16 text-center text-white sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:tracking-[0.25em]">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-slate-300 sm:text-lg sm:leading-8">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Danh sách đối tác */}
      <section className="px-4 py-16 sm:px-6 sm:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {publicPartners.map((partner) => (
              <article
                key={partner.slug}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-white transition duration-300 hover:-translate-y-1 hover:border-yellow-500/40 hover:bg-white/[0.05] hover:shadow-xl sm:p-7"
              >
                {/* Logo, tên công ty và mô tả */}
                <div className="flex items-start gap-4 sm:gap-5">
                  {/* Logo đối tác */}
                  <div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white p-1.5 shadow-sm sm:h-20 sm:w-20">
                    {partner.logo ? (
                      <Image
                        src={partner.logo}
                        alt={`${partner.company} logo`}
                        fill
                        sizes="80px"
                        className="object-contain p-2"
                      />
                    ) : (
                      <Building2
                        size={30}
                        className="text-yellow-500"
                      />
                    )}
                  </div>

                  {/* Tên và mô tả */}
                  <div className="min-w-0 flex-1">
                    <h2 className="break-words text-xl font-bold leading-7 text-white sm:text-2xl">
                      {partner.company}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-slate-400 sm:text-base">
                      {partner.description[lang]}
                    </p>
                  </div>
                </div>

                {/* Thông tin chi tiết */}
                <div className="mt-7 space-y-5 border-t border-white/15 pt-6">
                  {partner.representative && (
                    <div className="flex items-start gap-3">
                      <UserRound
                        size={20}
                        className="mt-1 shrink-0 text-yellow-400"
                      />

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {content.labels.representative}
                        </p>

                        <p className="mt-1 break-words font-semibold text-white">
                          {partner.representative}
                        </p>
                      </div>
                    </div>
                  )}

                  {partner.role && (
                    <div className="pl-8">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                        {content.labels.role}
                      </p>

                      <p className="mt-1 text-slate-300">
                        {partner.role[lang]}
                      </p>
                    </div>
                  )}

                  {partner.email && (
                    <div className="flex items-start gap-3">
                      <Mail
                        size={20}
                        className="mt-1 shrink-0 text-yellow-400"
                      />

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {content.labels.email}
                        </p>

                        <a
                          href={`mailto:${partner.email}`}
                          className="mt-1 block break-all text-slate-300 transition hover:text-yellow-400"
                        >
                          {partner.email}
                        </a>
                      </div>
                    </div>
                  )}

                  {partner.phone && (
                    <div className="flex items-start gap-3">
                      <Phone
                        size={20}
                        className="mt-1 shrink-0 text-yellow-400"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {content.labels.phone}
                        </p>

                        <a
                          href={`tel:${partner.phone.replace(
                            /[^\d+]/g,
                            "",
                          )}`}
                          className="mt-1 block text-slate-300 transition hover:text-yellow-400"
                        >
                          {partner.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {/* Website */}
                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-yellow-500 px-5 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-yellow-400 sm:w-auto sm:px-6"
                  >
                    {content.labels.website}

                    <ExternalLink
                      size={18}
                      className="shrink-0"
                    />
                  </a>
                )}
              </article>
            ))}
          </div>

          <p className="mx-auto mt-12 max-w-3xl text-center text-sm leading-6 text-slate-500">
            {content.notice}
          </p>
        </div>
      </section>
    </main>
  );
}