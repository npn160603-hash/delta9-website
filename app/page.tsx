import HomeAbout from "./components/HomeAbout/HomeAbout";
import News from "./components/New/New";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeAbout />
      <About />
      <Projects />
      <WhyChooseUs />
      <News />
    </main>
  );
}