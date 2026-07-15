import Footer from "./components/Footer/Footer";
import News from "./components/New/New";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <WhyChooseUs />
      <News />
      <Footer />
    </main>
  );
}