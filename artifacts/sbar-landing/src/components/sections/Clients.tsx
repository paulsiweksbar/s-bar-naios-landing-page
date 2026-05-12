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
          {/* Featured Partner Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#0c1e3e] border border-[#1d3a5e] rounded-xl p-8 md:p-10 mb-12 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
              <div className="w-16 h-16 rounded-xl bg-[#1d3a5e] flex items-center justify-center flex-shrink-0 text-3xl shadow-lg border border-blue-400/20">
                🏢
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Proud Partner of Industrial Outdoor Ventures</h3>
                <p className="text-[14px] text-[#7eb3e0] leading-relaxed max-w-xl">
                  S-Bar Construction serves as the primary general contracting partner for IOV, 
                  the first national real estate investor focused exclusively on the outdoor storage space.
                </p>
                <div className="flex gap-4 mt-6 flex-wrap">
                  {iovStats.map((stat, i) => (
                    <div key={i} className="bg-[#12284f] border border-[#214373] rounded-md px-4 py-2">
                      <div className="text-white font-bold text-sm">{stat.value}</div>
                      <div className="text-[#6297c4] text-[10px] uppercase tracking-wider">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
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
              className="bg-card border border-border rounded-xl p-8 flex items-center justify-center"
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
