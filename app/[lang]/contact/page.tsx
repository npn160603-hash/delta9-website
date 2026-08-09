import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { notFound } from "next/navigation";

import { hasLocale } from "../../dictionaries";
import ContactForm from "./ContactForm";

type ContactPageProps = {
  params: Promise<{
    lang: string;
  }>;
};

const pageContent = {
  vi: {
    metadata: {
      title: "Liên hệ",
      description:
        "Liên hệ và trao đổi cơ hội hợp tác với Delta9 Global.",
    },

    hero: {
      eyebrow: "LIÊN HỆ",
      title: "Liên hệ với chúng tôi",
      description:
        "Trao đổi về đầu tư, dự án và những cơ hội hợp tác.",
    },

    contactInformation: {
      title: "Thông tin liên hệ",
      addressLabel: "Địa chỉ",
      address:
        "580 W Nye Lane, Suite 202, Carson City, NV 89703, Hoa Kỳ",
      phoneLabel: "Điện thoại",
      phone: "(510) 703-4722",
      emailLabel: "Email",
      email: "triducnguyen@thedelta9global.com",
    },

    form: {
      title: "Gửi yêu cầu tư vấn",
      nameLabel: "Họ và tên",
      namePlaceholder: "Nhập họ và tên",
      emailLabel: "Email",
      emailPlaceholder: "Nhập địa chỉ email",
      messageLabel: "Nội dung",
      messagePlaceholder: "Nhập nội dung cần trao đổi",
      submitButton: "Gửi liên hệ",
      sendingButton: "Đang gửi...",
      successMessage:
        "Yêu cầu đã được gửi thành công. Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.",
      errorMessage:
        "Chưa thể gửi yêu cầu. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.",
      notice:
        "Thông tin của bạn chỉ được sử dụng để phản hồi yêu cầu liên hệ này.",
    },
  },

  en: {
    metadata: {
      title: "Contact",
      description:
        "Contact Delta9 Global to discuss investment and partnership opportunities.",
    },

    hero: {
      eyebrow: "CONTACT",
      title: "Contact Us",
      description:
        "Discuss investment, projects and potential partnership opportunities.",
    },

    contactInformation: {
      title: "Contact Information",
      addressLabel: "Address",
      address:
        "580 W Nye Lane, Suite 202, Carson City, NV 89703, United States",
      phoneLabel: "Phone",
      phone: "(510) 703-4722",
      emailLabel: "Email",
      email: "triducnguyen@thedelta9global.com",
    },

    form: {
      title: "Submit a Consultation Request",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your full name",
      emailLabel: "Email",
      emailPlaceholder: "Enter your email address",
      messageLabel: "Message",
      messagePlaceholder: "Enter the details you would like to discuss",
      submitButton: "Send Message",
      sendingButton: "Sending...",
      successMessage:
        "Your request has been sent successfully. We will contact you as soon as possible.",
      errorMessage:
        "We could not send your request. Please try again later or contact us directly by email.",
      notice:
        "Your information will only be used to respond to this contact request.",
    },
  },
} as const;

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    return {};
  }

  const content = pageContent[lang];

  return {
    title: content.metadata.title,
    description: content.metadata.description,
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const content = pageContent[lang];

  return (
    <main>
      {/* Phần đầu trang */}
      <section className="bg-slate-900 px-6 py-24 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="font-semibold uppercase tracking-[0.25em] text-yellow-400">
            {content.hero.eyebrow}
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            {content.hero.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {content.hero.description}
          </p>
        </div>
      </section>

      {/* Thông tin và biểu mẫu */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Thông tin liên hệ */}
          <div>
            <h2 className="text-3xl font-bold text-slate-900">
              {content.contactInformation.title}
            </h2>

            <div className="mt-8 space-y-5">
              {/* Địa chỉ */}
              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <MapPin className="shrink-0 text-yellow-700" />

                <div>
                  <h3 className="font-bold text-slate-900">
                    {content.contactInformation.addressLabel}
                  </h3>

                  <p className="mt-1 leading-7 text-slate-600">
                    {content.contactInformation.address}
                  </p>
                </div>
              </div>

              {/* Điện thoại */}
              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <Phone className="shrink-0 text-yellow-700" />

                <div>
                  <h3 className="font-bold text-slate-900">
                    {content.contactInformation.phoneLabel}
                  </h3>

                  <a
                    href="tel:+15107034722"
                    className="mt-1 block text-slate-600 transition hover:text-yellow-700"
                  >
                    {content.contactInformation.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex gap-4 rounded-xl bg-slate-100 p-5">
                <Mail className="shrink-0 text-yellow-700" />

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    {content.contactInformation.emailLabel}
                  </h3>

                  <a
                    href="mailto:triducnguyen@thedelta9global.com"
                    className="mt-1 block break-words text-slate-600 transition hover:text-yellow-700"
                  >
                    {content.contactInformation.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Biểu mẫu liên hệ */}
          <div className="rounded-2xl bg-slate-900 p-8 text-white">
            <h2 className="text-3xl font-bold">
              {content.form.title}
            </h2>

            <ContactForm content={content.form} lang={lang} />
          </div>
        </div>
      </section>
    </main>
  );
}
