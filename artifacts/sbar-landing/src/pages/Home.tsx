import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { VideoSection } from "@/components/sections/Video";
import { Blog } from "@/components/sections/Blog";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Services />
        <VideoSection />
        <Blog />
        <Clients />
        <Contact />
      </main>
    </div>
  );
}
