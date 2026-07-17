export type ProjectLanguage = "vi" | "en";

export type LocalizedText = {
  vi: string;
  en: string;
};

export type LocalizedList = {
  vi: string[];
  en: string[];
};

export type Project = {
  slug: string;
  image: string;
  title: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  highlights: LocalizedList;
};

export const projects: Project[] = [
  {
    slug: "khai-thac-vang",

    image: "/images/projects/gold.jpg",

    title: {
      vi: "Khai thác vàng",
      en: "Gold Mining",
    },

    shortDescription: {
      vi: "Các cơ hội đầu tư và hợp tác trong lĩnh vực khai thác kim loại quý.",
      en: "Investment and partnership opportunities in the precious metals mining sector.",
    },

    description: {
      vi: "Lĩnh vực khai thác vàng tập trung vào việc nghiên cứu cơ hội, kết nối đối tác và xây dựng các dự án có tính khả thi, minh bạch và bền vững.",
      en: "The gold mining sector focuses on identifying opportunities, connecting strategic partners and developing feasible, transparent and sustainable projects.",
    },

    highlights: {
      vi: [
        "Nghiên cứu tiềm năng thị trường",
        "Kết nối nhà đầu tư và đối tác",
        "Tư vấn chiến lược phát triển dự án",
      ],

      en: [
        "Market potential research",
        "Investor and partner connections",
        "Project development strategy consulting",
      ],
    },
  },

  {
    slug: "nang-luong",

    image: "/images/projects/energy.jpg",

    title: {
      vi: "Năng lượng",
      en: "Energy",
    },

    shortDescription: {
      vi: "Phát triển năng lượng tái tạo và những giải pháp năng lượng bền vững.",
      en: "Developing renewable energy and sustainable energy solutions.",
    },

    description: {
      vi: "Chúng tôi tìm kiếm và phát triển các cơ hội trong năng lượng mặt trời, năng lượng gió và những mô hình năng lượng sạch.",
      en: "We identify and develop opportunities in solar energy, wind energy and clean energy solutions.",
    },

    highlights: {
      vi: [
        "Năng lượng mặt trời",
        "Năng lượng gió",
        "Giải pháp phát triển bền vững",
      ],

      en: [
        "Solar energy",
        "Wind energy",
        "Sustainable development solutions",
      ],
    },
  },

  {
    slug: "thuy-san",

    image: "/images/projects/seafood.jpg",

    title: {
      vi: "Thủy sản",
      en: "Aquaculture and Fisheries",
    },

    shortDescription: {
      vi: "Nuôi trồng, chế biến và xây dựng chuỗi cung ứng thủy sản.",
      en: "Aquaculture, seafood processing and supply chain development.",
    },

    description: {
      vi: "Các dự án thủy sản hướng đến việc kết nối sản xuất, chế biến và phân phối để tăng giá trị cho sản phẩm.",
      en: "Our aquaculture and fisheries projects connect production, processing and distribution to increase product value and strengthen market access.",
    },

    highlights: {
      vi: [
        "Nuôi trồng thủy sản",
        "Chế biến sản phẩm",
        "Phát triển chuỗi cung ứng",
      ],

      en: [
        "Aquaculture development",
        "Seafood processing",
        "Supply chain development",
      ],
    },
  },

  {
    slug: "nong-nghiep",

    image: "/images/projects/farm.jpg",

    title: {
      vi: "Nông nghiệp",
      en: "Agriculture",
    },

    shortDescription: {
      vi: "Ứng dụng công nghệ và phát triển nông nghiệp theo hướng hiện đại.",
      en: "Applying technology to develop modern and sustainable agriculture.",
    },

    description: {
      vi: "Chúng tôi quan tâm đến các mô hình nông nghiệp có khả năng mở rộng, nâng cao năng suất và phát triển lâu dài.",
      en: "We focus on scalable agricultural models that improve productivity, strengthen value chains and support long-term development.",
    },

    highlights: {
      vi: [
        "Nông nghiệp công nghệ cao",
        "Chế biến thực phẩm",
        "Phân phối sản phẩm",
      ],

      en: [
        "High-tech agriculture",
        "Food processing",
        "Product distribution",
      ],
    },
  },

  {
    slug: "logistics",

    image: "/images/projects/logistics.jpg",

    title: {
      vi: "Hậu cần",
      en: "Logistics",
    },

    shortDescription: {
      vi: "Hạ tầng, vận tải và các giải pháp tối ưu chuỗi cung ứng.",
      en: "Infrastructure, transportation and supply chain optimization solutions.",
    },

    description: {
      vi: "Các dự án logistics tập trung vào việc nâng cao hiệu quả vận chuyển, lưu kho và kết nối thị trường.",
      en: "Our logistics projects focus on improving transportation efficiency, warehousing operations and connections between businesses and markets.",
    },

    highlights: {
      vi: [
        "Kho bãi",
        "Vận tải",
        "Quản lý chuỗi cung ứng",
      ],

      en: [
        "Warehousing",
        "Transportation",
        "Supply chain management",
      ],
    },
  },

  {
    slug: "bat-dong-san",

    image: "/images/projects/realestate.jpg",

    title: {
      vi: "Bất động sản",
      en: "Real Estate",
    },

    shortDescription: {
      vi: "Phát triển các dự án bất động sản và cơ sở hạ tầng có tiềm năng.",
      en: "Developing promising real estate and infrastructure projects.",
    },

    description: {
      vi: "Chúng tôi kết nối các nguồn lực cần thiết nhằm nghiên cứu và phát triển những cơ hội bất động sản phù hợp.",
      en: "We connect investors, partners and essential resources to identify and develop suitable real estate and infrastructure opportunities.",
    },

    highlights: {
      vi: [
        "Bất động sản thương mại",
        "Hạ tầng đô thị",
        "Tư vấn phát triển dự án",
      ],

      en: [
        "Commercial real estate",
        "Urban infrastructure",
        "Project development consulting",
      ],
    },
  },
];