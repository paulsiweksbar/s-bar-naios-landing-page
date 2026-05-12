import { motion } from "framer-motion";
import clientsLogoGrid from "@assets/clients_logo_grid.png";
import workWithImage from "@assets/Screenshot_2026-05-12_at_9.42.46_PM_1778602367669.png";

export function Clients() {
  const iovStats = [
    { label: "20+", value: "Active States" },
    { label: "$100M+", value: "Capital Deployed" },
    { label: "2024", value: "Partner of the Year" }
  ];

  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <img src={workWithImage} alt="Who We Work With" className="w-full h-auto rounded-xl block" />
          </motion.div>

          <div className="text-center">
            <div className="text-[11px] text-muted-foreground uppercase tracking-[1.5px] mb-6">
              Trusted by Industry Leaders
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-6 md:p-8 flex items-center justify-center"
            >
              <img
                src={clientsLogoGrid}
                alt="Logos of S-Bar Construction Clients"
                className="max-w-full h-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
