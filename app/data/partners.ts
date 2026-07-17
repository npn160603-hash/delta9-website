export type PartnerLanguage = "vi" | "en";

export type LocalizedPartnerText = {
  vi: string;
  en: string;
};

export type Partner = {
  slug: string;
  company: string;
  representative?: string;
  role?: LocalizedPartnerText;
  email?: string;
  phone?: string;
  website?: string;
  description: LocalizedPartnerText;
  published: boolean;
};

export const partners: Partner[] = [
  {
    slug: "apec-group",

    company: "APEC GROUP",

    representative: "Colin Archer",

    role: {
      vi: "Giám đốc điều hành",
      en: "Chief Executive Officer",
    },

    email: "colinarcher@apecgroup.org",

    description: {
      vi: "Đối tác trong mạng lưới kết nối kinh doanh, đầu tư và hợp tác quốc tế của Delta9 Global.",
      en: "A partner within Delta9 Global's international business, investment and cooperation network.",
    },

    published: true,
  },

  {
    slug: "witucki-capital-holdings",

    company: "Witucki Capital Holdings, LLC",

    representative: "Timothy Witucki",

    role: {
      vi: "Đối tác điều hành",
      en: "Managing Partner",
    },

    email: "Timothy@Wituckicapital.com",

    phone: "+1 (415) 484-0575",

    website: "https://wituckicapital.com/",

    description: {
      vi: "Đối tác trong các hoạt động kết nối đầu tư, phát triển dự án và hợp tác kinh doanh quốc tế.",
      en: "A partner supporting investment connections, project development and international business cooperation.",
    },

    published: true,
  },

  {
    slug: "aucopia-international-asia",

    company: "AuCopia International Asia",

    representative: "Frank Podesta",

    role: {
      vi: "Đại diện đối tác",
      en: "Partner Representative",
    },

    email: "fp@aucopia.com",

    website:
      "https://aucopia.com/aucopia-international-asia",

    description: {
      vi: "Đối tác trong mạng lưới hợp tác quốc tế và phát triển cơ hội kinh doanh tại thị trường châu Á.",
      en: "A partner within an international cooperation network focused on developing business opportunities in Asian markets.",
    },

    published: true,
  },

  {
    slug: "lebon-realty",

    company: "Lebon Realty Inc.",

    website: "https://www.lebonrealtors.com/",

    description: {
      vi: "Đối tác trong lĩnh vực bất động sản, kết nối thị trường và phát triển cơ hội kinh doanh.",
      en: "A partner in real estate, market connections and business opportunity development.",
    },

    published: true,
  },

  /*
    Chưa công khai vì chưa có đủ thông tin về
    công ty, chức danh và cách viết chính xác của tên.
  */
  {
    slug: "alex-junita",

    company: "Thông tin doanh nghiệp đang cập nhật",

    representative: "Alex Junita",

    email: "Alexjuntillanorcal@gmail.com",

    description: {
      vi: "Thông tin đối tác đang được cập nhật.",
      en: "Partner information is currently being updated.",
    },

    published: false,
  },
];

export const publicPartners = partners.filter(
  (partner) => partner.published,
);