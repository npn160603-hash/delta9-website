import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  Factory,
  Handshake,
  Leaf,
} from "lucide-react";

type Language = "vi" | "en";

type FeaturedVentureProps = {
  lang: Language;
};

export default function FeaturedVenture({
  lang,
}: FeaturedVentureProps) {
  const content =
    lang === "en"
      ? {
          eyebrow: "FEATURED VENTURE",
          title: "Healthy Natural Vietnam",
          subtitle:
            "Premium wellness brand development initiative in Vietnam.",
          description:
            "Healthy Natural Vietnam is focused on brand development, product strategy, quality control, distribution infrastructure and international commercial partnerships.",
          features: [
            {
              icon: Leaf,
              title: "Premium Brand",
              description:
                "A refined natural wellness identity inspired by Vietnam.",
            },
            {
              icon: Factory,
              title: "Quality Development",
              description:
                "A structured approach to production, traceability and quality assurance.",
            },
            {
              icon: Handshake,
              title: "Commercial Partnerships",
              description:
                "Building distribution and international business relationships.",
            },
            {
              icon: BadgeCheck,
              title: "Phased Roadmap",
              description:
                "A multi-stage development plan covering launch, expansion and regional growth.",
            },
          ],
          button: "EXPLORE THE PROJECT",
          imageAlt:
            "Healthy Natural Vietnam premium wellness brand project",
        }
      : {
          eyebrow: "DỰ ÁN NỔI BẬT",
          title: "Healthy Natural Vietnam",
          subtitle:
            "Dự án phát triển thương hiệu chăm sóc sức khỏe cao cấp tại Việt Nam.",
          description:
            "Healthy Natural Vietnam tập trung vào phát triển thương hiệu, chiến lược sản phẩm, kiểm soát chất lượng, hệ thống phân phối và các quan hệ hợp tác thương mại quốc tế.",
          features: [
            {
              icon: Leaf,
              title: "Thương hiệu cao cấp",
              description:
                "Định vị thương hiệu chăm sóc sức khỏe tự nhiên mang bản sắc Việt Nam.",
            },
            {
              icon: Factory,
              title: "Phát triển chất lượng",
              description:
                "Xây dựng quy trình sản xuất, truy xuất và kiểm soát chất lượng.",
            },
            {
              icon: Handshake,
              title: "Hợp tác thương mại",
              description:
                "Phát triển mạng lưới phân phối và quan hệ kinh doanh quốc tế.",
            },
            {
              icon: BadgeCheck,
              title: "Lộ trình nhiều giai đoạn",
              description:
                "Kế hoạch triển khai từ xây dựng nền tảng đến mở rộng thị trường khu vực.",
            },
          ],
          button: "KHÁM PHÁ DỰ ÁN",
          imageAlt:
            "Dự án thương hiệu chăm sóc sức khỏe Healthy Natural Vietnam",
        };

  return (
    <section className="bg-[#0f3d2e] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Ảnh dự án */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/10 bg-white shadow-2xl">
           <Image
              src="/images/healthy-natural-vietnam/hero.png"
              alt={content.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-contain"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d2b06a]">
                Healthy Natural Vietnam
              </p>

              <p className="mt-2 text-lg font-semibold">
                Premium Wellness Initiative
              </p>
            </div>
          </div>

          {/* Nội dung */}
          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-[#d2b06a]">
              {content.eyebrow}
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
              {content.title}
            </h2>

            <p className="mt-5 text-xl font-semibold leading-8 text-[#e0c38a]">
              {content.subtitle}
            </p>

            <p className="mt-6 max-w-2xl leading-8 text-emerald-50/80">
              {content.description}
            </p>

            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {content.features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <article
                    key={feature.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <Icon
                      size={26}
                      className="text-[#d2b06a]"
                    />

                    <h3 className="mt-4 font-bold">
                      {feature.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-emerald-50/70">
                      {feature.description}
                    </p>
                  </article>
                );
              })}
            </div>

            <Link
              href={
                `/${lang}/projects/healthy-natural-vietnam` as Route
              }
              className="mt-9 inline-flex items-center gap-3 rounded-lg bg-[#d2b06a] px-8 py-4 font-bold text-[#0f3d2e] transition hover:-translate-y-1 hover:bg-[#e2c88e]"
            >
              {content.button}

              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}