import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

type Language = "vi" | "en";

type FooterProps = {
  lang: Language;
};

export default function Footer({
  lang,
}: FooterProps) {
  const currentYear = new Date().getFullYear();

  const content =
    lang === "en"
      ? {
          description:
            "Building global partnerships through Vietnam. We connect investment opportunities and innovations for the future.",

          linksTitle: "QUICK LINKS",

          links: {
            about: "About Us",
            services: "Services",
            projects: "Projects",
            investment: "Investment Opportunities",
            government: "Government Relations",
            contact: "Contact",
            partners: "Partners",
          },

          industriesTitle: "INDUSTRIES",

          industries: [
            "Mining & Precious Metals",
            "Renewable Energy",
            "Agriculture & Food Processing",
            "Aquaculture & Fisheries",
            "Infrastructure & Real Estate",
            "Manufacturing & Logistics",
          ],

          contactTitle: "CONTACT US",

          representative: "Mr. Trí Đức Nguyễn",

          license:
            "License Number: E0107302019-9",

          address:
            "580 W Nye Lane, Suite 202, Carson City, NV 89703, United States",

          privacy: "Privacy Policy",
          terms: "Terms of Use",
          rights: "All Rights Reserved.",
          qrLabel: "Company QR",
        }
      : {
          description:
            "Xây dựng quan hệ đối tác toàn cầu thông qua Việt Nam. Chúng tôi kết nối các cơ hội đầu tư và đổi mới trong tương lai.",

          linksTitle: "LIÊN KẾT",

          links: {
            about: "Về chúng tôi",
            services: "Dịch vụ",
            projects: "Dự án",
            investment: "Cơ hội đầu tư",
            government: "Quan hệ Chính phủ",
            contact: "Liên hệ",
            partners: "Đối tác",
          },

          industriesTitle:
            "CÁC NGÀNH CÔNG NGHIỆP",

          industries: [
            "Khai thác mỏ & Kim loại quý",
            "Năng lượng tái tạo",
            "Nông nghiệp & Chế biến thực phẩm",
            "Nuôi trồng thủy hải sản",
            "Cơ sở hạ tầng & Bất động sản",
            "Sản xuất & Hậu cần",
          ],

          contactTitle:
            "LIÊN HỆ VỚI CHÚNG TÔI",

          representative: "Mr. Trí Đức Nguyễn",

          license:
            "Số giấy phép: E0107302019-9",

          address:
            "580 W Nye Lane, Suite 202, Carson City, NV 89703, Hoa Kỳ",

          privacy: "Chính sách bảo mật",
          terms: "Điều khoản sử dụng",
          rights: "Đã đăng ký bản quyền.",
          qrLabel: "Mã QR công ty",
        };

  const quickLinks = [
    {
      label: content.links.about,
      href: `/${lang}/about` as Route,
    },
    {
      label: content.links.services,
      href: `/${lang}/services` as Route,
    },
    {
      label: content.links.projects,
      href: `/${lang}/projects` as Route,
    },
    {
      label: content.links.investment,
      href: `/${lang}/projects` as Route,
    },
    {
      label: content.links.government,
      href: `/${lang}/services` as Route,
    },
    {
      label: content.links.partners,
      href: `/${lang}/partners` as Route,
    },
    {
      label: content.links.contact,
      href: `/${lang}/contact` as Route,
    },
  ];

  return (
    <footer className="bg-[#1f2150] text-white">
      {/* Nội dung chính Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.85fr_1.15fr_1.25fr_auto] lg:gap-8">
          {/* Logo và giới thiệu */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href={`/${lang}` as Route}
              className="group inline-flex items-center gap-3"
              aria-label="The Delta9 Global Corporation"
            >
              {/* Logo */}
              <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border-2 border-yellow-400 bg-[#f7f3e9] p-1.5 shadow-[0_0_0_3px_rgba(250,204,21,0.12),0_6px_18px_rgba(0,0,0,0.3)] transition duration-300 group-hover:scale-105 group-hover:border-yellow-300 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.35)] sm:h-16 sm:w-16">
                <div className="pointer-events-none absolute inset-0 rounded-[10px] bg-gradient-to-br from-white/50 via-transparent to-yellow-400/10" />

                <div className="relative h-full w-full">
                  <Image
                    src="/images/delta9-logo-v2.png"
                    alt="The Delta9 Global Corporation logo"
                    fill
                    sizes="64px"
                    className="object-contain p-0.5"
                  />
                </div>
              </div>

              {/* Tên công ty */}
              <div className="min-w-0 leading-tight">
                <span className="block whitespace-nowrap text-lg font-extrabold tracking-wide text-white sm:text-xl">
                  THE DELTA9
                </span>

                <span className="mt-1 block whitespace-nowrap text-[9px] font-bold uppercase tracking-[0.18em] text-yellow-400 sm:text-[11px]">
                  Global Corporation
                </span>
              </div>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-300">
              {content.description}
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              {content.linksTitle}
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li
                  key={`${item.href}-${item.label}`}
                >
                  <Link
                    href={item.href}
                    className="inline-block transition duration-200 hover:translate-x-1 hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Các ngành */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              {content.industriesTitle}
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              {content.industries.map(
                (industry) => (
                  <li key={industry}>
                    {industry}
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div className="min-w-0">
            <h3 className="text-sm font-bold uppercase tracking-wider text-yellow-400">
              {content.contactTitle}
            </h3>

            <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
              <li className="font-semibold text-white">
                {content.representative}
              </li>

              <li className="min-w-0">
                <a
                  href="mailto:triducnguyen@thedelta9global.com"
                  className="block break-all transition hover:text-yellow-400"
                >
                  triducnguyen@thedelta9global.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+15107034722"
                  className="transition hover:text-yellow-400"
                >
                  (510) 703-4722
                </a>
              </li>

              <li className="break-words">
                {content.license}
              </li>

              <li className="break-words">
                {content.address}
              </li>
            </ul>
          </div>

          {/* QR */}
          <div className="flex flex-col items-start sm:items-center lg:items-end">
            <div className="flex h-28 w-28 items-center justify-center rounded-xl border-2 border-yellow-400/50 bg-white font-bold text-slate-900 shadow-lg">
              QR
            </div>

            <p className="mt-3 text-xs text-slate-400">
              {content.qrLabel}
            </p>
          </div>
        </div>
      </div>

      {/* Thanh cuối Footer */}
      <div className="border-t border-white/10 bg-[#17183c]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-center text-xs leading-5 text-slate-400 sm:px-6 md:flex-row md:text-left lg:px-8">
          <p>
            © {currentYear} The Delta9 Global
            Corporation. {content.rights}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 md:justify-end">
            <span className="transition hover:text-yellow-400">
              {content.privacy}
            </span>

            <span className="transition hover:text-yellow-400">
              {content.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}