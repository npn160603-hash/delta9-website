import type { Route } from "next";
import Image from "next/image";
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
  const imageAlt = content.title.join(" ");

  return (
    <section className="relative isolate min-h-[calc(100svh-76px)] overflow-hidden bg-slate-950 text-white lg:min-h-[calc(100vh-80px)]">
      {/* Ảnh nền */}
      <Image
        src="/images 1/hero.jpg"
        alt={imageAlt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-[65%_center] sm:object-center"
      />

      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Lớp gradient giúp chữ dễ đọc */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/15 sm:from-slate-950/85 sm:via-slate-950/50 sm:to-transparent" />

      {/* Nội dung */}
      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-76px)] max-w-7xl items-end px-4 pb-14 pt-24 sm:items-center sm:px-6 sm:py-20 lg:min-h-[calc(100vh-80px)] lg:px-8">
        <div className="w-full max-w-5xl">
          <h1 className="break-words text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {content.title.map((line, index) => (
              <span
                key={`${line}-${index}`}
                className="block"
              >
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-5 max-w-full text-sm font-medium leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8 md:text-lg lg:text-xl">
  {content.subtitle.split("\n").map((line, index) => (
    <span
      key={`${line}-${index}`}
      className="block break-words lg:whitespace-nowrap"
    >
      {line}
    </span>
  ))}
</div>

          <Link
            href={`/${lang}/contact` as Route}
            className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-yellow-500 px-6 py-4 text-sm font-bold text-slate-950 shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-yellow-400 sm:mt-8 sm:w-auto sm:px-8 sm:text-base"
          >
            {content.contactButton}
          </Link>
        </div>
      </div>
    </section>
  );
}