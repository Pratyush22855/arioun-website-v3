import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      {/* Full-page particle network — fixed behind everything */}
      <ParticleBackground />

      <div className="relative" style={{ zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <HowItWorks />
          <Stats />
          <FAQ />
          <CTA />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
