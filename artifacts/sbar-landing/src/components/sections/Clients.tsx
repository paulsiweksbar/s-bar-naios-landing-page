import { motion } from "framer-motion";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-6xl mx-auto"
        >
          <img
            src={workWithImage}
            alt="Who We Work With"
            className="w-full h-auto rounded-xl block"
          />
        </motion.div>
      </div>
    </section>
  );
}
