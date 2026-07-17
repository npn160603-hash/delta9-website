import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "../../data/projects";
import { hasLocale } from "../../dictionaries";

type ProjectsPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const pageContent = {
  vi: {
    metadata: {
      title: "Dự án",
      description:
        "Khám phá các lĩnh vực dự án của Delta9 Global.",
    },

    hero: {
      eyebrow: "DANH MỤC ĐẦU TƯ",
      title: "CÁC LĨNH VỰC DỰ ÁN",
      description:
        "Khám phá các lĩnh vực đầu tư và phát triển trọng điểm.",
    },

    detailButton: "Xem chi tiết →",
  },

  en: {
    metadata: {
      title: "Projects",
      description:
        "Explore Delta9 Global's investment and project development sectors.",
    },

    hero: {
      eyebrow: "INVESTMENT PORTFOLIO",
      title: "PROJECT SECTORS",
      description:
        "Explore our key investment and development sectors.",
    },

    detailButton: "View Details →",
  },
} as const;

export async function generateMetadata({
  params,
}: ProjectsPageProps): Promise<Metadata> {
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

export default async function ProjectsPage({
  params,
}: ProjectsPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main className="bg-slate-100">
      {/* Phần đầu trang */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
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

      {/* Danh sách dự án */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const title = project.title[lang];
            const shortDescription =
              project.shortDescription[lang];

            return (
              <Link
                key={project.slug}
                href={
                  `/${lang}/projects/${project.slug}` as Route
                }
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-7">
                  <h2 className="text-2xl font-bold text-slate-900">
                    {title}
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    {shortDescription}
                  </p>

                  <span className="mt-5 inline-block font-semibold text-yellow-700 transition group-hover:text-yellow-600">
                    {content.detailButton}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </main>
  );
}