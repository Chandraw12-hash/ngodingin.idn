import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Layout/Hero";
import TechMarquee from "./components/sections/TechMarquee";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Portfolio from "./components/sections/Portfolio";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import About from "./components/sections/About";
import CtaBand from "./components/sections/CtaBand";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Services />
      <Process />
      <Portfolio />
      <Pricing />
      <Testimonials />
      <FAQ />
      <About />
      <CtaBand />
      <Footer />
    </main>
  );
}
