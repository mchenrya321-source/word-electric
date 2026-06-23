import { Navbar } from "@/components/Navbar";
import { MobileCallBar } from "@/components/MobileCallBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { CallToAction } from "@/components/CallToAction";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Gallery />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
