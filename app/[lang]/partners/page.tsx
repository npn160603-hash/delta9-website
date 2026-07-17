import type { Metadata } from "next";
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
    <main className="bg-slate-100">
      {/* Phần đầu trang */}
      <section className="bg-slate-950 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Danh sách đối tác */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            {publicPartners.map((partner) => (
              <article
                key={partner.slug}
                className="rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-yellow-500 text-slate-950">
                    <Building2 size={28} />
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {partner.company}
                    </h2>

                    <p className="mt-3 leading-7 text-slate-600">
                      {partner.description[lang]}
                    </p>
                  </div>
                </div>

                <div className="mt-7 space-y-4 border-t border-slate-200 pt-6">
                  {partner.representative && (
                    <div className="flex items-start gap-3">
                      <UserRound
                        size={20}
                        className="mt-1 shrink-0 text-yellow-700"
                      />

                      <div>
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {content.labels.representative}
                        </p>

                        <p className="mt-1 font-semibold text-slate-900">
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

                      <p className="mt-1 text-slate-700">
                        {partner.role[lang]}
                      </p>
                    </div>
                  )}

                  {partner.email && (
                    <div className="flex items-start gap-3">
                      <Mail
                        size={20}
                        className="mt-1 shrink-0 text-yellow-700"
                      />

                      <div className="min-w-0">
                        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                          {content.labels.email}
                        </p>

                        <a
                          href={`mailto:${partner.email}`}
                          className="mt-1 block break-words text-slate-700 transition hover:text-yellow-700"
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
                        className="mt-1 shrink-0 text-yellow-700"
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
                          className="mt-1 block text-slate-700 transition hover:text-yellow-700"
                        >
                          {partner.phone}
                        </a>
                      </div>
                    </div>
                  )}
                </div>

                {partner.website && (
                  <a
                    href={partner.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-7 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-bold text-white transition hover:bg-yellow-500 hover:text-slate-950"
                  >
                    {content.labels.website}

                    <ExternalLink size={18} />
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