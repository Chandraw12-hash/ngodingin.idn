import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Layout/Hero";
import Services from "./components/sections/Services";
import Portfolio from "./components/sections/Portfolio";
import Pricing from "./components/sections/Pricing";
import Testimonials from "./components/sections/Testimonials";
import About from "./components/sections/About";
import FAQ from "./components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Pricing />
      <FAQ />
      <Testimonials />
      <About />
      <Footer />
    </main>
  );
}