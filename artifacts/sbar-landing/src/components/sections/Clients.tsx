import { motion } from "framer-motion";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-40 md:py-56 border-b border-border">
      <div className="mx-auto max-w-[140rem] px-4 sm:px-6 lg:px-8">
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
              className="w-full h-auto rounded-xl block shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            />
          </motion.div>
      </div>
    </section>
  );
}
