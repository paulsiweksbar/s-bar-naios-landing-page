import { motion } from "framer-motion";
import allCustomers from "@assets/all-customers.png";

export function Clients() {
  return (
    <section id="clients" className="py-12 md:py-16 lg:py-20 border-b border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Clients
        </div>
        <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground mb-6 md:mb-8 lg:mb-12">
          Who We <em className="text-primary not-italic">Work With</em>
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full bg-black p-2 sm:p-4 md:p-5 rounded-lg md:rounded-xl -mx-4 md:mx-0"
        >
          <img
            src={allCustomers}
            alt="Who We Work With"
            className="w-full h-auto block object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}