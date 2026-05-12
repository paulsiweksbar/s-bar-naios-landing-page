import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb from "@assets/field_video_thumbnail.jpg";

export function VideoSection() {
  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Media
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-12">
          In the <em className="text-primary not-italic">Field</em>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a 
            href="https://www.youtube.com/watch?v=kYJmQ0s4M_c" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group block bg-card border border-border rounded-xl overflow-hidden hover:border-primary transition-colors duration-300"
          >
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
              <img 
                src={videoThumb} 
                alt="Watch S-Bar in the field" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Play size={24} fill="black" className="text-black ml-1" />
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
                Featured Video
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                The Anatomy of a Modern IOS Site
              </h3>
              <p className="text-[14px] text-muted-foreground max-w-3xl">
                Walk the yard with our project managers as we break down the critical infrastructure components that separate a basic parking lot from a high-yield industrial asset.
              </p>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
