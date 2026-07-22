import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb from "@assets/Youtube_Thumbnails_for_SBAR_1778601364891.png";

const YOUTUBE_VIDEO_ID = "2JWCS3Ng550";

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);

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
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            <div className="relative aspect-video md:aspect-[21/9] overflow-hidden">
              {isPlaying ? (
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                  title="S-Bar Construction Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group w-full h-full cursor-pointer"
                  aria-label="Play video"
                >
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
                </button>
              )}
            </div>
            <div className="p-6">
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
                Featured Video
              </div>
              <h3 className="font-serif text-base md:text-lg font-bold text-foreground">
                The Anatomy of a Modern IOS Site
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
