import type { Route } from "next";
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

          license: "License Number: E0107302019-9",

          address:
            "580 W Nye Lane, Suite 202, Carson City, NV 89703, United States",

          privacy: "Privacy Policy",
          terms: "Terms of Use",
          rights: "All Rights Reserved.",
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

          industriesTitle: "CÁC NGÀNH CÔNG NGHIỆP",

          industries: [
            "Khai thác mỏ & Kim loại quý",
            "Năng lượng tái tạo",
            "Nông nghiệp & Chế biến thực phẩm",
            "Nuôi trồng thủy hải sản",
            "Cơ sở hạ tầng & Bất động sản",
            "Sản xuất & Hậu cần",
          ],

          contactTitle: "LIÊN HỆ VỚI CHÚNG TÔI",

          license: "Số giấy phép: E0107302019-9",

          address:
            "580 W Nye Lane, Suite 202, Carson City, NV 89703, Hoa Kỳ",

          privacy: "Chính sách bảo mật",
          terms: "Điều khoản sử dụng",
          rights: "Đã đăng ký bản quyền.",
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
    <footer className="bg-blue-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Logo và giới thiệu */}
          <div>
            <Link
              href={`/${lang}` as Route}
              className="inline-block text-2xl font-bold transition hover:text-yellow-400"
            >
              DELTA9
            </Link>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              {content.description}
            </p>
          </div>

          {/* Liên kết nhanh */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              {content.linksTitle}
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              {quickLinks.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <Link
                    href={item.href}
                    className="transition hover:text-yellow-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Các ngành */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              {content.industriesTitle}
            </h3>

            <ul className="space-y-3 text-sm leading-6 text-gray-300">
              {content.industries.map((industry) => (
                <li key={industry}>
                  {industry}
                </li>
              ))}
            </ul>
          </div>

          {/* Thông tin liên hệ */}
          <div>
            <h3 className="mb-4 font-bold uppercase">
              {content.contactTitle}
            </h3>

            <ul className="space-y-3 break-words text-sm leading-6 text-gray-300">
              <li>
                Mr. Trí Đức Nguyễn
              </li>

              <li>
                <a
                  href="mailto:triducnguyen@thedelta9global.com"
                  className="transition hover:text-yellow-400"
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

              <li>
                {content.license}
              </li>

              <li>
                {content.address}
              </li>
            </ul>
          </div>

          {/* QR */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex h-28 w-28 items-center justify-center rounded bg-white font-semibold text-black">
              QR
            </div>
          </div>
        </div>
      </div>

      {/* Thanh cuối Footer */}
      <div className="border-t border-blue-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-4 text-center text-xs text-gray-400 md:flex-row md:px-8 md:text-left">
          <p>
            © {currentYear} The Delta9 Global Corporation.{" "}
            {content.rights}
          </p>

          <div className="flex gap-4">
            <span>
              {content.privacy}
            </span>

            <span>
              {content.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}