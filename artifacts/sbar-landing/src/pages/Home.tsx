import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { VideoSection } from "@/components/sections/Video";
import { Footprint } from "@/components/sections/Footprint";
import { Clients } from "@/components/sections/Clients";
import { Sponsorships } from "@/components/sections/Sponsorships";
import { Newsletter } from "@/components/sections/Newsletter";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <VideoSection />
        <Footprint />
        <Clients />
        <Sponsorships />
        <Newsletter />
        <Contact />
      </main>
    </div>
  );
}
