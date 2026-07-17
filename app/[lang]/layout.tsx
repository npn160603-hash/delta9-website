import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import {
  getDictionary,
  hasLocale,
  locales,
} from "../dictionaries";

export function generateStaticParams() {
  return locales.map((lang) => ({
    lang,
  }));
}

type LanguageLayoutProps = {
  children: ReactNode;
  params: Promise<{
    lang: string;
  }>;
};

export default async function LanguageLayout({
  children,
  params,
}: LanguageLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <>
      <Navbar
        lang={lang}
        labels={dictionary.nav}
      />

      {children}

      <Footer lang={lang} />
    </>
  );
}