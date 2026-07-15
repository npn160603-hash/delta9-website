export default function News() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-8">

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">

          {/* Latest News */}
          <div className="rounded-lg border border-gray-200 bg-white p-8 shadow">

            <h2 className="mb-6 text-2xl font-bold uppercase text-blue-900">
              TIN TỨC
            </h2>

            <div className="space-y-6">

              <div className="h-28 rounded bg-gray-200"></div>

              <div className="h-28 rounded bg-gray-200"></div>

              <div className="h-28 rounded bg-gray-200"></div>

            </div>

          </div>

          {/* Investment */}
          <div className="rounded-lg bg-blue-900 p-8 text-white shadow">

            <h2 className="mb-6 text-2xl font-bold uppercase">
              CƠ HỘI ĐẦU TƯ
            </h2>

            <div className="h-72 rounded bg-blue-800"></div>

          </div>

        </div>

      </div>
    </section>
  );
}