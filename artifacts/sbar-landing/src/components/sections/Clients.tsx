import { motion } from "framer-motion";
import clientsLogoGrid from "@assets/clients_logo_grid.png";

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
          <div className="text-center mt-10">
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
