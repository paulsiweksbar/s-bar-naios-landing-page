import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 border-b border-border text-center overflow-hidden relative">
      {/* Subtle background noise/gradient could go here */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary border border-border text-[11px] font-semibold tracking-[1.5px] uppercase text-primary mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          The IOS General Contractor
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.12] sm:leading-[1.08] tracking-tight text-foreground mb-6 max-w-5xl mx-auto text-balance"
        >
          <span className="block">Raising the Bar</span>
          <span className="block mt-2 sm:mt-3">in <em className="text-primary not-italic">Industrial Outdoor Storage.</em></span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          S-Bar Construction builds, upgrades, and maintains IOS sites across North America.
          Fast timelines. Zero surprises. Sites that perform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="mt-14 sm:mt-16 md:mt-20 rounded-xl overflow-hidden flex flex-col md:flex-row bg-card mx-auto max-w-4xl"
        >
          <div className="flex-1 p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-border">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-none mb-2">100%</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-[1px]">On-Time Completion</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 text-center border-b md:border-b-0 md:border-r border-border">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-none mb-2">12+</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-[1px]">States Active</div>
          </div>
          <div className="flex-1 p-6 sm:p-8 text-center">
            <div className="font-serif text-3xl sm:text-4xl font-bold text-primary leading-none mb-2">25+</div>
            <div className="text-[11px] text-muted-foreground uppercase tracking-[1px]">IOS Projects Delivered</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
