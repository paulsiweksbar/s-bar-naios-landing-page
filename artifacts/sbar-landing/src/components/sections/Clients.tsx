import { motion } from "framer-motion";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-24 md:py-28 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <img src={workWithImage} alt="Who We Work With" className="w-full h-auto rounded-xl block" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
