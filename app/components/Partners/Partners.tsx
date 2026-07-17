import type { Route } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  UserRound,
} from "lucide-react";

import { publicPartners } from "../../data/partners";

type Language = "vi" | "en";

type PartnersProps = {
  lang: Language;
};

function getInitials(company: string) {
  return company
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export default function Partners({
  lang,
}: PartnersProps) {
  const content =
    lang === "en"
      ? {
          eyebrow: "GLOBAL NETWORK",
          title: "OUR PARTNERS",
          description:
            "Building international business connections through a trusted network of companies, investors and industry representatives.",
          representativeLabel: "Representative",
          viewAll: "VIEW ALL PARTNERS",
        }
      : {
          eyebrow: "MẠNG LƯỚI TOÀN CẦU",
          title: "ĐỐI TÁC CỦA CHÚNG TÔI",
          description:
            "Phát triển các kết nối kinh doanh quốc tế thông qua mạng lưới doanh nghiệp, nhà đầu tư và đại diện trong nhiều lĩnh vực.",
          representativeLabel: "Đại diện",
          viewAll: "XEM TẤT CẢ ĐỐI TÁC",
        };

  const featuredPartners = publicPartners.slice(0, 4);

  return (
    <section className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        {/* Tiêu đề */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            {content.description}
          </p>
        </div>

        {/* Danh sách đối tác */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {featuredPartners.map((partner) => (
            <article
              key={partner.slug}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-500 text-xl font-bold text-slate-950">
                {getInitials(partner.company)}
              </div>

              <div className="mt-6">
                <Building2
                  size={20}
                  className="text-yellow-400"
                />

                <h3 className="mt-3 text-xl font-bold">
                  {partner.company}
                </h3>
              </div>

              {partner.representative && (
                <div className="mt-5 flex items-start gap-3 text-sm text-slate-300">
                  <UserRound
                    size={18}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />

                  <p>
                    <span className="block text-xs uppercase tracking-wider text-slate-500">
                      {content.representativeLabel}
                    </span>

                    <span className="mt-1 block">
                      {partner.representative}
                    </span>
                  </p>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Nút xem tất cả */}
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/partners` as Route}
            className="inline-flex items-center gap-3 rounded-lg bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-400"
          >
            {content.viewAll}

            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
}