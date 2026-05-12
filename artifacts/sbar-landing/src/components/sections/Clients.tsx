import { motion } from "framer-motion";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-20 border-b border-border">
      <div className="mx-auto max-w-[140rem] px-6 sm:px-8 lg:px-12">
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
