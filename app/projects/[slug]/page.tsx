import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { projects } from "../../data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main>
      <section className="bg-slate-900 px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/projects"
            className="font-semibold text-yellow-400 hover:text-yellow-300"
          >
            ← Quay lại danh sách dự án
          </Link>

          <h1 className="mt-8 text-4xl font-bold md:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {project.shortDescription}
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl">
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-yellow-700">
              Tổng quan dự án
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Cơ hội trong lĩnh vực {project.title}
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              {project.description}
            </p>

            <h3 className="mt-8 text-xl font-bold">
              Các định hướng chính
            </h3>

            <ul className="mt-4 space-y-3">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="rounded-lg bg-slate-100 px-5 py-4 text-slate-700"
                >
                  ✓ {highlight}
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="mt-8 inline-block rounded bg-yellow-500 px-8 py-4 font-bold text-slate-950 hover:bg-yellow-400"
            >
              Trao đổi về dự án
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}