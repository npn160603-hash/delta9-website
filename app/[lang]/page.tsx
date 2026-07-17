import FeaturedVenture from "../components/FeaturedVenture/FeaturedVenture";
import { notFound } from "next/navigation";
import Partners from "../components/Partners/Partners";
import HomeAbout from "../components/HomeAbout/HomeAbout";
import News from "../components/New/New";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";

import {
  getDictionary,
  hasLocale,
} from "../dictionaries";

type HomePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export default async function HomePage({
  params,
}: HomePageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang);

  return (
    <main>
      <Hero
        lang={lang}
        content={dictionary.hero}
      />

      <HomeAbout lang={lang} />

      <About lang={lang} />

      <Projects lang={lang} />
      
      <FeaturedVenture lang={lang} />

      <Partners lang={lang} />

      <WhyChooseUs lang={lang} />

      <News lang={lang} />
      
    </main>
  );
}