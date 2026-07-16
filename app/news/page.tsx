import type { Metadata } from "next";

import { newsItems } from "../data/news";

export const metadata: Metadata = {
  title: "Tin tức",
  description: "Tin tức và những thông tin mới từ Delta 9 Global.",
};

export default function NewsPage() {
  return (
    <main className="bg-slate-100">
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            News & Insights
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Tin tức
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl space-y-6">
          {newsItems.map((item) => (
            <article
              key={item.id}
              className="rounded-2xl bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-semibold text-yellow-700">
                {item.date}
              </p>

              <h2 className="mt-3 text-2xl font-bold">
                {item.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-block font-semibold text-yellow-700 hover:text-yellow-600"
                >
                  Đọc bài báo →
                </a>
              ) : (
                <span className="mt-5 inline-block text-sm text-slate-400">
                  Link bài báo sẽ được cập nhật
                </span>
              )}
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}