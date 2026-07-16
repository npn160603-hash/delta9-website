import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  Building2,
  Globe2,
  Landmark,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dịch vụ",
  description: "Các dịch vụ tư vấn, đầu tư và thương mại của Delta 9 Global.",
};

const services = [
  {
    icon: Globe2,
    title: "Kinh doanh quốc tế",
    description:
      "Hỗ trợ doanh nghiệp nghiên cứu thị trường, tìm kiếm đối tác và mở rộng hoạt động quốc tế.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Tư vấn đầu tư",
    description:
      "Phân tích cơ hội, xây dựng chiến lược và hỗ trợ triển khai các kế hoạch đầu tư.",
  },
  {
    icon: Building2,
    title: "Phát triển dự án",
    description:
      "Tư vấn mô hình, cấu trúc dự án, kết nối nguồn lực và các đối tác cần thiết.",
  },
  {
    icon: Landmark,
    title: "Quan hệ Chính phủ",
    description:
      "Hỗ trợ doanh nghiệp tiếp cận thông tin, chính sách và các cơ quan có liên quan.",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Giải pháp của chúng tôi
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Dịch vụ
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            Các giải pháp được xây dựng dựa trên nhu cầu thực tế của từng
            doanh nghiệp và từng dự án.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-yellow-100">
                  <Icon className="text-yellow-700" size={30} />
                </div>

                <h2 className="mt-6 text-2xl font-bold">
                  {service.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.description}
                </p>

                <Link
                  href="/contact"
                  className="mt-6 inline-block font-semibold text-yellow-700 hover:text-yellow-600"
                >
                  Yêu cầu tư vấn →
                </Link>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}