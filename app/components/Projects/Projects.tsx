import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../../data/projects";

type Language = "vi" | "en";

type ProjectsProps = {
  lang: Language;
};

const projectNames: Record<
  string,
  {
    vi: string;
    en: string;
  }
> = {
  "khai-thac-vang": {
    vi: "Khai thác vàng",
    en: "Gold Mining",
  },

  "nang-luong": {
    vi: "Năng lượng",
    en: "Energy",
  },

  "thuy-san": {
    vi: "Thủy sản",
    en: "Aquaculture",
  },

  "nong-nghiep": {
    vi: "Nông nghiệp",
    en: "Agriculture",
  },

  logistics: {
    vi: "Hậu cần",
    en: "Logistics",
  },

  "bat-dong-san": {
    vi: "Bất động sản",
    en: "Real Estate",
  },
};

export default function Projects({
  lang,
}: ProjectsProps) {
  const content =
    lang === "en"
      ? {
          smallTitle: "Investment Portfolio",
          title: "PROJECT SECTORS",
          description:
            "Explore our key investment and development sectors.",
          detailButton: "View project details →",
          allProjectsButton: "View all projects",
        }
      : {
          smallTitle: "Danh mục đầu tư",
          title: "CÁC LĨNH VỰC DỰ ÁN",
          description:
            "Khám phá các lĩnh vực đầu tư và phát triển trọng điểm của chúng tôi.",
          detailButton: "Xem thông tin chi tiết →",
          allProjectsButton: "Xem tất cả dự án",
        };

  return (
    <section
      id="projects"
      className="bg-[#202223] px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Tiêu đề phần dự án */}
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-yellow-500">
            {content.smallTitle}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            {content.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            {content.description}
          </p>
        </div>

        {/* Danh sách dự án */}
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const translatedTitle =
              projectNames[project.slug]?.[lang] ??
              project.title;

            return (
              <Link
                key={project.slug}
                href={
                  `/${lang}/projects/${project.slug}` as Route
                }
                className="group overflow-hidden rounded-xl bg-[#17191a] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={translatedTitle}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {translatedTitle}
                  </h3>

                  <p className="mt-3 text-sm text-gray-400">
                    {content.detailButton}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Nút xem tất cả */}
        <div className="mt-12 text-center">
          <Link
            href={`/${lang}/projects` as Route}
            className="inline-block rounded-lg bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-400"
          >
            {content.allProjectsButton}
          </Link>
        </div>
      </div>
    </section>
  );
}