import { motion } from "framer-motion";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Clients
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-12">
          Who We <em className="text-primary not-italic">Work With</em>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <img
            src={workWithImage}
            alt="Who We Work With"
            className="w-full h-auto rounded-xl block object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
