import { useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: "2JWCS3Ng550",
    title: "ABF Denver: Complete Facility Remodel",
    label: "Field Work",
  },
  {
    id: "aEDS0bxm0qw",
    title: "IOV Laredo - Industrial Facility Remodel",
    label: "Field Work",
  },
  {
    id: "2EMfgMXup7o",
    title: "GCWA - Full Roof Renovation",
    label: "Field Work",
    thumbnail: "/gcwa-calder-thumbnail.png",
  },
];

function VideoCard({ video, index }: { video: typeof VIDEOS[0]; index: number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = video.thumbnail || `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <div className="bg-card border border-border rounded-xl overflow-hidden h-full">
        <div className="relative aspect-video overflow-hidden">
          {isPlaying ? (
            <iframe
              src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          ) : (
            <button
              onClick={() => setIsPlaying(true)}
              className="group w-full h-full cursor-pointer"
              aria-label={`Play ${video.title}`}
            >
              <img
                src={thumbnailUrl}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-colors duration-300 group-hover:bg-black/20">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center transform transition-transform duration-300 group-hover:scale-110 shadow-lg">
                  <Play size={20} fill="black" className="text-black ml-1" />
                </div>
              </div>
            </button>
          )}
        </div>
        <div className="p-5">
          <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-2">
            {video.label}
          </div>
          <h3 className="font-serif text-sm md:text-base font-bold text-foreground">
            {video.title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

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

        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {VIDEOS.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
