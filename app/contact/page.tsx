import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Liên hệ và trao đổi cơ hội hợp tác với Delta 9 Global.",
};

export default function ContactPage() {
  return (
    <main>
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            Contact
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Liên hệ với chúng tôi
          </h1>

          <p className="mt-6 text-lg text-slate-300">
            Trao đổi về đầu tư, dự án và những cơ hội hợp tác.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold">
              Thông tin liên hệ
            </h2>

            <div className="mt-8 space-y-5">
              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <MapPin className="shrink-0 text-yellow-700" />

                <div>
                  <h3 className="font-bold">Địa chỉ</h3>
                  <p className="mt-1 text-slate-600">
                    580 W Nye Lane Ste 202 Thành phố Carson, NV 89703, Hoa Kỳ
                  </p>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <Phone className="shrink-0 text-yellow-700" />

                <div>
                  <h3 className="font-bold">Điện thoại</h3>
                  <a
                    href="tel:+84123456789"
                    className="mt-1 block text-slate-600 hover:text-yellow-700"
                  >
                    (510) 703-4722
                  </a>
                </div>
              </div>

              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <Mail className="shrink-0 text-yellow-700" />

                <div>
                  <h3 className="font-bold">Email</h3>
                  <a
                    href="mailto:info@delta9global.com"
                    className="mt-1 block text-slate-600 hover:text-yellow-700"
                  >
                    triducnguyen@thedelta9global.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              Gửi yêu cầu tư vấn
            </h2>

            <form className="mt-8 space-y-5">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm">
                  Họ và tên
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-400"
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm">
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-400"
                  placeholder="Nhập email"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm">
                  Nội dung
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full resize-none rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none focus:border-yellow-400"
                  placeholder="Nhập nội dung cần trao đổi"
                />
              </div>

              <button
                type="button"
                className="w-full rounded-lg bg-yellow-500 px-6 py-4 font-bold text-slate-950 hover:bg-yellow-400"
              >
                Gửi liên hệ
              </button>

              <p className="text-sm text-slate-400">
                Nút hiện mới là giao diện. Chưa gửi dữ liệu cho đến khi kết
                nối dịch vụ email hoặc hệ thống xử lý biểu mẫu.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}