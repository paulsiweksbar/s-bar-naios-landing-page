import { motion } from "framer-motion";
import { HardHat, Zap, ShieldCheck, Building2, Wrench, ClipboardList } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Full Site Buildout",
      description: "From raw land to operational yard — grading, drainage, heavy-duty paving, and site infrastructure built to handle fleet and logistics tenants.",
      icon: <HardHat size={28} className="text-primary" />
    },
    {
      title: "Electrical & Lighting",
      description: "Full LED site lighting for 24/7 operations, electrical service, and EV-ready infrastructure for modern fleet tenants.",
      icon: <Zap size={28} className="text-primary" />
    },
    {
      title: "Security & Perimeter",
      description: "High-security fencing, automated gates, and camera-ready access control — the security setup tenants expect and lenders want to see.",
      icon: <ShieldCheck size={28} className="text-primary" />
    },
    {
      title: "Office & Amenities",
      description: "Guard booths, modular offices, driver restrooms, and numbered stall systems that reduce tenant friction and support longer leases.",
      icon: <Building2 size={28} className="text-primary" />
    },
    {
      title: "Maintenance & CapEx",
      description: "Surface repairs, lighting upkeep, and planned capital programs that protect your site quality and keep occupancy strong.",
      icon: <Wrench size={28} className="text-primary" />
    },
    {
      title: "Tenant Improvement",
      description: "Custom buildouts for IOS operators — loading pads, dispatch zones, on-site storage, and access improvements that speed up lease-up.",
      icon: <ClipboardList size={28} className="text-primary" />
    }
  ];

  return (
    <section id="services" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Capabilities
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
          Complete IOS <em className="text-primary not-italic">Site Services</em>
        </h2>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed mb-12">
          Everything required to take a raw parcel or distressed yard and turn it into a high-performing logistics asset.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-card border border-border rounded-xl p-6 hover:bg-secondary hover:border-primary transition-all duration-300 group"
            >
              <div className="mb-4 transform transition-transform duration-300 group-hover:scale-110 origin-left">
                {service.icon}
              </div>
              <h3 className="text-[15px] font-bold text-foreground mb-2">{service.title}</h3>
              <p className="text-[13px] text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
