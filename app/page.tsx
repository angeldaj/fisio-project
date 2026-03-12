import { About } from "@/components/home/about";
import { Contact } from "@/components/home/contact";
import { CtaBanner } from "@/components/home/cta-banner";
import { Footer } from "@/components/home/footer";
import { Hero } from "@/components/home/hero";
import { Navbar } from "@/components/home/navbar";
import { Process } from "@/components/home/process";
import { Services } from "@/components/home/services";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-[family-name:var(--font-body)]">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <About />
      <CtaBanner />
      <Contact />
      <Footer />
    </div>
  );
}
