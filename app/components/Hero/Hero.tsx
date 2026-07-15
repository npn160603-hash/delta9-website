export default function Hero() {
  return (
    <section className="relative h-screen">

      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/images 1/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex h-full items-center">

        <div className="w-full px-32">

          <h1 className="text-6xl font-bold text-white leading-tight">

            KẾT NỐI TOÀN CẦU

            <br />

            CƠ HỘI VỚI

            <br />

            VIỆT NAM & ĐÔNG NAM Á

          </h1>

          <p className="mt-6 text-xl text-white">

            Tư Vấn Kinh Doanh Quốc Tế • Tư Vấn Đầu Tư • Phát Triển Dự Án • Quan Hệ Chính Phủ

          </p>

          <button className="mt-8 rounded bg-yellow-500 px-8 py-4 text-white">

            LIÊN HỆ

          </button>

        </div>

      </div>

    </section>
  );
}