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
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-4 items-stretch">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#0f2851] border border-[#213f66] rounded-xl p-6 md:p-8 flex items-center"
            >
              <div className="flex items-start gap-4 md:gap-5">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-[#1d3a5e] border border-[#3b5f88] flex items-center justify-center text-2xl shrink-0">
                  🏢
                </div>
                <div className="min-w-0">
                  <h3 className="text-[20px] md:text-[22px] font-bold text-white mb-2 leading-tight">
                    Proud Partner of Industrial Outdoor Ventures
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#8fb7df] leading-relaxed max-w-xl">
                    S-Bar Construction serves as the primary general contracting partner for IOV, the first national real estate investor focused exclusively on the outdoor storage space.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-[#102443] border border-[#213f66] rounded-xl p-5 md:p-6 flex flex-wrap gap-3 justify-between"
            >
              {iovStats.map((stat, i) => (
                <div key={i} className="min-w-[110px] flex-1 bg-[#12284f] border border-[#29496f] rounded-lg px-4 py-3">
                  <div className="text-white font-bold text-[14px] mb-1">{stat.label}</div>
                  <div className="text-[#8fb7df] text-[10px] uppercase tracking-[1.6px]">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </div>

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
