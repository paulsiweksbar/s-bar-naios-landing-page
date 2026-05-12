import { motion } from "framer-motion";
import clientsLogoGrid from "@assets/clients_logo_grid.png";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  return (
    <section className="py-20 border-b border-border">
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

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card border border-border rounded-xl p-4 md:p-6 flex items-center justify-center"
          >
            <img
              src={clientsLogoGrid}
              alt="Logos of S-Bar Construction Clients"
              className="w-full max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
