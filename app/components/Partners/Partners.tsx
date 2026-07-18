import type { Route } from "next";
import Image from "next/image";
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
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl">
        {/* Tiêu đề */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400 sm:tracking-[0.25em]">
            {content.eyebrow}
          </p>

          <h2 className="mt-4 text-3xl font-bold sm:text-4xl md:text-5xl">
            {content.title}
          </h2>

          <p className="mt-5 text-sm leading-7 text-slate-300 sm:mt-6 sm:text-base sm:leading-8">
            {content.description}
          </p>
        </div>

        {/* Danh sách đối tác */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-4">
          {featuredPartners.map((partner) => (
            <article
              key={partner.slug}
              className="flex min-h-[220px] flex-col rounded-2xl border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/10 hover:shadow-xl sm:min-h-[240px] sm:p-6"
            >
              {/* Logo và tên công ty */}
              <div className="flex items-start gap-4">
                {/* Logo vuông nhỏ */}
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/10 bg-white p-1.5 shadow-sm sm:h-20 sm:w-20">
                  {partner.logo ? (
                    <Image
                      src={partner.logo}
                      alt={`${partner.company} logo`}
                      fill
                      sizes="80px"
                      className="object-contain p-1.5"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-lg font-bold text-slate-900 sm:text-xl">
                        {getInitials(partner.company)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Tên công ty */}
                <div className="min-w-0 pt-1">
                  <Building2
                    size={19}
                    className="text-yellow-400"
                  />

                  <h3 className="mt-2 break-words text-lg font-bold leading-6 sm:text-xl sm:leading-7">
                    {partner.company}
                  </h3>
                </div>
              </div>

              {/* Người đại diện */}
              {partner.representative && (
                <div className="mt-6 flex items-start gap-3 border-t border-white/10 pt-5 text-sm text-slate-300">
                  <UserRound
                    size={18}
                    className="mt-0.5 shrink-0 text-yellow-400"
                  />

                  <div className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                      {content.representativeLabel}
                    </span>

                    <span className="mt-1 block break-words text-sm text-white">
                      {partner.representative}
                    </span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Nút xem tất cả */}
        <div className="mt-10 text-center sm:mt-12">
          <Link
            href={`/${lang}/partners` as Route}
            className="inline-flex w-full items-center justify-center gap-3 rounded-lg bg-yellow-500 px-6 py-4 text-sm font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-400 sm:w-auto sm:px-8 sm:text-base"
          >
            {content.viewAll}

            <ArrowRight
              size={20}
              className="shrink-0"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}