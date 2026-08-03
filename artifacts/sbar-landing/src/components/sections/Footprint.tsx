import { motion } from "framer-motion";

export function Footprint() {
  return (
    <section id="footprint" className="py-12 md:py-16 lg:py-20 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          National IOS Footprint
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground mb-6 md:mb-8 lg:mb-12">
          Where We <em className="text-primary not-italic">Build</em>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden shadow-lg -mx-4 md:mx-0 lg:-mx-8 xl:-mx-16"
        >
          <img
            src="/national-footprint.png"
            alt="S-Bar Construction National Project Footprint - 12 Active States, 5 Pending, 22 Active Cities, 1 Territory"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
