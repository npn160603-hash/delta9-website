import Image from "next/image";

const projects = [
  {
    title: "Khai thác vàng",
    image: "/images/projects/gold.jpg",
  },
  {
    title: "Năng lượng",
    image: "/images/projects/energy.jpg",
  },
  {
    title: "Thủy sản",
    image: "/images/projects/seafood.jpg",
  },
  {
    title: "Nông nghiệp",
    image: "/images/projects/farm.jpg",
  },
  {
    title: "Logistics",
    image: "/images/projects/logistics.jpg",
  },
  {
    title: "Bất động sản",
    image: "/images/projects/realestate.jpg",
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-4xl font-bold text-blue-900">
          CÁC LĨNH VỰC DỰ ÁN
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <div
              key={project.title}
              className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="h-60 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}