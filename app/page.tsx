import AboutMe from "@/components/about-me";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Introduction from "@/components/introduction";
import { Navbar } from "@/components/navbar";
import { ParticlesDemo } from "@/components/ParticlesDemo";
import Services from "@/components/services";
import Testimonials from "@/components/testimonilas";
import Portfolio from "@/components/ui/portfolio";

export default function Home() {
  return (
    <main className="pb-40">
      <ParticlesDemo />
      <Navbar />
      <Introduction />
      <AboutMe />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      {/* <ThreeDCardDemo /> */}
      <Contact />
      <Footer />
    </main>
  );
}
