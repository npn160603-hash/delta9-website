import type { Metadata, Route } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "../../../data/projects";
import {
  hasLocale,
  locales,
} from "../../../dictionaries";

type Language = "vi" | "en";

type LocalizedText =
  | string
  | {
      vi: string;
      en: string;
    };

type LocalizedList =
  | string[]
  | {
      vi: string[];
      en: string[];
    };

/*
  Hàm này lấy đúng nội dung theo ngôn ngữ.

  Nếu dữ liệu vẫn chỉ là một chuỗi tiếng Việt,
  nó tạm thời trả về chuỗi đó để website không bị lỗi.
*/
function getLocalizedText(
  value: LocalizedText,
  lang: Language,
) {
  if (typeof value === "string") {
    return value;
  }

  return value[lang];
}

/*
  Tương tự nhưng dành cho danh sách highlights.
*/
function getLocalizedList(
  value: LocalizedList,
  lang: Language,
) {
  if (Array.isArray(value)) {
    return value;
  }

  return value[lang];
}

/*
  Tạo trước các đường dẫn:

  /vi/projects/nang-luong
  /en/projects/nang-luong
  ...
*/
export function generateStaticParams() {
  return locales.flatMap((lang) =>
    projects.map((project) => ({
      lang,
      slug: project.slug,
    })),
  );
}

type ProjectDetailPageProps = {
  params: Promise<{
    lang: string;
    slug: string;
  }>;
};

/*
  Metadata riêng cho từng dự án và từng ngôn ngữ.
*/
export async function generateMetadata({
  params,
}: ProjectDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    return {};
  }

  const title = getLocalizedText(
    project.title,
    lang,
  );

  const description = getLocalizedText(
    project.shortDescription,
    lang,
  );

  return {
    title,
    description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const project = projects.find(
    (item) => item.slug === slug,
  );

  if (!project) {
    notFound();
  }

  /*
    Lấy nội dung dự án theo ngôn ngữ hiện tại.
  */
  const title = getLocalizedText(
    project.title,
    lang,
  );

  const shortDescription = getLocalizedText(
    project.shortDescription,
    lang,
  );

  const description = getLocalizedText(
    project.description,
    lang,
  );

  const highlights = getLocalizedList(
    project.highlights,
    lang,
  );

  const labels =
    lang === "en"
      ? {
          back: "← Back to Projects",
          overview: "Project Overview",
          opportunity: "Opportunities in",
          highlights: "Key Directions",
          contact: "Discuss This Project",
        }
      : {
          back: "← Quay lại danh sách dự án",
          overview: "Tổng quan dự án",
          opportunity: "Cơ hội trong lĩnh vực",
          highlights: "Các định hướng chính",
          contact: "Trao đổi về dự án",
        };

  return (
    <main>
      {/* Phần đầu trang */}
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href={`/${lang}/projects` as Route}
            className="font-semibold text-yellow-400 transition hover:text-yellow-300"
          >
            {labels.back}
          </Link>

          <h1 className="mt-8 text-4xl font-bold md:text-6xl">
            {title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {shortDescription}
          </p>
        </div>
      </section>

      {/* Nội dung dự án */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Ảnh dự án */}
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={project.image}
              alt={title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Thông tin dự án */}
          <div>
            <p className="font-semibold uppercase tracking-widest text-yellow-700">
              {labels.overview}
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              {labels.opportunity} {title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {description}
            </p>

            <h3 className="mt-8 text-xl font-bold text-slate-900">
              {labels.highlights}
            </h3>

            <ul className="mt-4 space-y-3">
              {highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg bg-slate-100 px-5 py-4 text-slate-700"
                >
                  ✓ {highlight}
                </li>
              ))}
            </ul>

            <Link
              href={`/${lang}/contact` as Route}
              className="mt-8 inline-block rounded bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-400"
            >
              {labels.contact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}