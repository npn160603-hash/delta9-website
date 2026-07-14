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

        <div className="mx-auto w-full max-w-7xl px-8">

          <h1 className="text-6xl font-bold text-white leading-tight">

            Connecting

            <br />

            Investment

            <br />

            Opportunities

          </h1>

          <p className="mt-6 text-xl text-white">

            Finance • Investment • Consulting

          </p>

          <button className="mt-8 rounded bg-yellow-500 px-8 py-4 text-white">

            CONTACT US

          </button>

        </div>

      </div>

    </section>
  );
}