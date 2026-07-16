import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Giới thiệu",
  description:
    "Tìm hiểu về Delta 9 Global, tầm nhìn, sứ mệnh và giá trị cốt lõi.",
};

const values = [
  {
    title: "Tầm nhìn",
    description:
      "Trở thành cầu nối đáng tin cậy giữa doanh nghiệp, nhà đầu tư và các cơ hội phát triển quốc tế.",
  },
  {
    title: "Sứ mệnh",
    description:
      "Sứ mệnh của chúng tôi là thúc đẩy phát triển kinh tế bền vững thông qua đầu tư chiến lược, thương mại quốc tế, chuyển giao công nghệ và hợp tác kinh doanh xuyên biên giới.",
  },
  {
    title: "Giá trị cốt lõi",
    description:
      "Chính trực, chuyên nghiệp, hợp tác lâu dài và tập trung vào hiệu quả thực tế.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-slate-900 px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Delta 9 Global
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            TẬP ĐOÀN TOÀN CẦU DELTA9
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Dịch vụ tư vấn kinh doanh và thương mại quốc tế tại Việt Nam.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <p className="font-semibold uppercase tracking-widest text-yellow-600">
              Câu chuyện của chúng tôi
            </p>

            <h2 className="mt-4 text-3xl font-bold text-slate-900">
              Delta9 Global Corporation là một công ty tư vấn kinh doanh và phát triển dự án quốc tế chuyên tạo lập quan hệ đối tác chiến lược giữa Việt Nam và thị trường toàn cầu. 
              Chúng tôi cung cấp dịch vụ tư vấn chuyên nghiệp cho các cơ quan chính phủ, doanh nghiệp tư nhân, nhà đầu tư, nhà sản xuất và các tổ chức quốc tế đang tìm cách thành 
              lập, mở rộng hoặc đầu tư tại Việt Nam.

            </h2>
          </div>

          <div className="space-y-5 leading-8 text-slate-600">
            <p>
              Delta 9 Global hoạt động trong lĩnh vực tư vấn, kết nối đầu
              tư, phát triển dự án và thương mại quốc tế.
            </p>

            <p>
              Chúng tôi đồng hành cùng doanh nghiệp trong quá trình nghiên
              cứu thị trường, xác định cơ hội và xây dựng quan hệ đối tác
              chiến lược.
              Với mạng lưới rộng khắp các đối tác kinh doanh, các mối quan hệ với chính phủ và các chuyên gia trong ngành, Delta9 Global 
              Corporation đóng vai trò là cầu nối đáng tin cậy, kết nối các cơ hội giữa Việt Nam, Hoa Kỳ, Philippines và các thị trường quốc tế khác.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-100 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-3">
            {values.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <h2 className="text-2xl font-bold text-slate-900">
                  {item.title}
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-block rounded bg-yellow-500 px-8 py-4 font-bold text-slate-950 transition hover:bg-yellow-400"
            >
              Liên hệ với chúng tôi
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}