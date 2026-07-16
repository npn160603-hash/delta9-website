import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { projects } from "../data/projects";

export const metadata: Metadata = {
  title: "Dự án",
  description: "Khám phá các lĩnh vực dự án của Delta 9 Global.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-slate-100">
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Investment Portfolio
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Các lĩnh vực dự án
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Khám phá các lĩnh vực đầu tư và phát triển trọng điểm.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="p-7">
                <h2 className="text-2xl font-bold text-slate-900">
                  {project.title}
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  {project.shortDescription}
                </p>

                <span className="mt-5 inline-block font-semibold text-yellow-700">
                  Xem chi tiết →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}