import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe2,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const highlights = [
  {
    icon: Globe2,
    title: "Kết nối toàn cầu",
    description:
      "Kết nối doanh nghiệp và nhà đầu tư với những cơ hội phát triển quốc tế.",
  },
  {
    icon: Handshake,
    title: "Đối tác chiến lược",
    description:
      "Xây dựng quan hệ hợp tác lâu dài dựa trên lợi ích và mục tiêu chung.",
  },
  {
    icon: ShieldCheck,
    title: "Chuyên nghiệp và tin cậy",
    description:
      "Ưu tiên tính minh bạch, hiệu quả và giá trị phát triển bền vững.",
  },
];

export default function HomeAbout() {
  return (
    <section
      id="home-about"
      className="bg-[#17191a] px-6 py-20 text-white md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Ảnh và nội dung */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Ảnh bên trái */}
          <div className="relative min-h-[380px] overflow-hidden rounded-2xl shadow-2xl md:min-h-[480px]">
            <Image
              src="/images 1/hero1.jpg"
              alt="Delta 9 kết nối đầu tư và hợp tác quốc tế"
              fill
              priority={false}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            {/* Lớp phủ tối nhẹ */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* Dòng chữ trên ảnh */}
            <div className="absolute bottom-0 left-0 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Vietnam • Southeast Asia • Global
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                Kết Nối Cơ Hội Đầu Tư Toàn Cầu
              </h3>
            </div>
          </div>

          {/* Nội dung bên phải */}
          <div>
            <p className="font-semibold uppercase tracking-[0.25em] text-yellow-500">
              Về Chúng Tôi
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">
              TẬP ĐOÀN TOÀN CẦU DELTA9
              <br />
              Dịch vụ tư vấn kinh doanh và thương mại quốc tế tại Việt Nam.
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-400 md:text-lg">
              Delta9 Global Corporation là một công ty tư vấn kinh doanh và phát triển dự án quốc tế chuyên tạo lập
              quan hệ đối tác chiến lược giữa Việt Nam và thị trường toàn cầu. Chúng tôi cung cấp dịch vụ tư vấn chuyên
              nghiệp cho các cơ quan chính phủ, doanh nghiệp tư nhân, nhà đầu tư, nhà sản xuất và các tổ chức quốc tế đang tìm cách thành lập, 
              mở rộng hoặc đầu tư tại Việt Nam.
            </p>

            <p className="mt-4 leading-8 text-gray-400">
              Chúng tôi hướng tới việc trở thành cầu nối đáng tin cậy giữa Việt
              Nam, Đông Nam Á và các thị trường quốc tế.
            </p>

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-3 rounded bg-yellow-500 px-7 py-4 font-bold text-slate-950 transition hover:-translate-y-1 hover:bg-yellow-400"
            >
              TÌM HIỂU THÊM VỀ CHÚNG TÔI
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>

        {/* Ba giá trị nổi bật */}
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-yellow-500/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-500 text-slate-950">
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}