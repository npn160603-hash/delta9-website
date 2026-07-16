import Image from "next/image";
import Link from "next/link";

import { projects } from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="bg-[#202223] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-yellow-500">
            Danh mục đầu tư
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            CÁC LĨNH VỰC DỰ ÁN
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Khám phá các lĩnh vực đầu tư và phát triển trọng điểm của chúng
            tôi.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group overflow-hidden rounded-xl bg-[#17191a] shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm text-gray-400">
                  Xem thông tin chi tiết →
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className="inline-block rounded-lg bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-400"
          >
            Xem tất cả dự án
          </Link>
        </div>
      </div>
    </section>
  );
}