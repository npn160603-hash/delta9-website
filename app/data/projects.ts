export type Project = {
  slug: string;
  title: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "khai-thac-vang",
    title: "Khai thác vàng",
    image: "/images/projects/gold.jpg",
    shortDescription:
      "Các cơ hội đầu tư và hợp tác trong lĩnh vực khai thác kim loại quý.",
    description:
      "Lĩnh vực khai thác vàng tập trung vào việc nghiên cứu cơ hội, kết nối đối tác và xây dựng các dự án có tính khả thi, minh bạch và bền vững.",
    highlights: [
      "Nghiên cứu tiềm năng thị trường",
      "Kết nối nhà đầu tư và đối tác",
      "Tư vấn chiến lược phát triển dự án",
    ],
  },
  {
    slug: "nang-luong",
    title: "Năng lượng",
    image: "/images/projects/energy.jpg",
    shortDescription:
      "Phát triển năng lượng tái tạo và những giải pháp năng lượng bền vững.",
    description:
      "Chúng tôi tìm kiếm và phát triển các cơ hội trong năng lượng mặt trời, năng lượng gió và những mô hình năng lượng sạch.",
    highlights: [
      "Năng lượng mặt trời",
      "Năng lượng gió",
      "Giải pháp phát triển bền vững",
    ],
  },
  {
    slug: "thuy-san",
    title: "Thủy sản",
    image: "/images/projects/seafood.jpg",
    shortDescription:
      "Nuôi trồng, chế biến và xây dựng chuỗi cung ứng thủy sản.",
    description:
      "Các dự án thủy sản hướng đến việc kết nối sản xuất, chế biến và phân phối để tăng giá trị cho sản phẩm.",
    highlights: [
      "Nuôi trồng thủy sản",
      "Chế biến sản phẩm",
      "Phát triển chuỗi cung ứng",
    ],
  },
  {
    slug: "nong-nghiep",
    title: "Nông nghiệp",
    image: "/images/projects/farm.jpg",
    shortDescription:
      "Ứng dụng công nghệ và phát triển nông nghiệp theo hướng hiện đại.",
    description:
      "Chúng tôi quan tâm đến các mô hình nông nghiệp có khả năng mở rộng, nâng cao năng suất và phát triển lâu dài.",
    highlights: [
      "Nông nghiệp công nghệ cao",
      "Chế biến thực phẩm",
      "Phân phối sản phẩm",
    ],
  },
  {
    slug: "logistics",
    title: "Logistics",
    image: "/images/projects/logistics.jpg",
    shortDescription:
      "Hạ tầng, vận tải và các giải pháp tối ưu chuỗi cung ứng.",
    description:
      "Các dự án logistics tập trung vào việc nâng cao hiệu quả vận chuyển, lưu kho và kết nối thị trường.",
    highlights: [
      "Kho bãi",
      "Vận tải",
      "Quản lý chuỗi cung ứng",
    ],
  },
  {
    slug: "bat-dong-san",
    title: "Bất động sản",
    image: "/images/projects/realestate.jpg",
    shortDescription:
      "Phát triển các dự án bất động sản và cơ sở hạ tầng có tiềm năng.",
    description:
      "Chúng tôi kết nối các nguồn lực cần thiết nhằm nghiên cứu và phát triển những cơ hội bất động sản phù hợp.",
    highlights: [
      "Bất động sản thương mại",
      "Hạ tầng đô thị",
      "Tư vấn phát triển dự án",
    ],
  },
];