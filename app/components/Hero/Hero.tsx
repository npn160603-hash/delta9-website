import type { Route } from "next";
import Link from "next/link";

type Language = "vi" | "en";

type HeroContent = {
  title: string[];
  subtitle: string;
  contactButton: string;
};

type HeroProps = {
  lang: Language;
  content: HeroContent;
};

export default function Hero({
  lang,
  content,
}: HeroProps) {
  return (
    <section className="relative min-h-screen">
      {/* Ảnh nền */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images 1/hero.jpg')",
        }}
      />

      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Nội dung */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="w-full px-6 md:px-12 lg:px-32">
          <h1 className="text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            {content.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-6 max-w-5xl text-base leading-8 text-white md:text-xl">
            {content.subtitle}
          </p>

          <Link
            href={`/${lang}/contact` as Route}
            className="mt-8 inline-flex w-fit items-center justify-center rounded bg-yellow-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-yellow-400"
          >
            {content.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}