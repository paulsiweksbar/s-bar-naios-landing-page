import { motion } from "framer-motion";
import projectAbf from "@assets/project_abf_freight.jpg";
import projectIov from "@assets/project_iov_broadway.jpg";

export function Projects() {
  const projects = [
    {
      title: "ABF Freight — Denver Terminal",
      description: "Full terminal remodel covering office, dock, maintenance building, and yard. Major infrastructure upgrades, MEP modernization, restrooms, break rooms, and dock door enclosures across a 108-door cross-dock.",
      stats: "5,000 SF Offices  ·  15,000 SF Warehouses  ·  Denver, CO",
      image: projectAbf,
      tags: ["National MSA", "20+ Projects"]
    },
    {
      title: "IOV Broadway — Spec Remodel",
      description: "Selected by Industrial Outdoor Ventures for a full 12,136 SF office remodel — demolition, sealed concrete floors, bathroom and breakroom renovation, LED lighting conversion, full interior/exterior paint, and building envelope sealing.",
      stats: "12,136 SF  ·  Denver, CO",
      image: projectIov,
      tags: ["Office Make-Ready", "6-Week Timeline"]
    }
  ];

  return (
    <section id="projects" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Past Work
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
          Recent <em className="text-primary not-italic">IOS Projects</em>
        </h2>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed mb-12">
          A sample of completed work across Texas, Georgia, Colorado, and beyond.
        </p>

        <div className="flex flex-col gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-card border border-border rounded-xl overflow-hidden grid grid-cols-1 md:grid-cols-[1.4fr_1fr] min-h-[240px] hover:border-primary transition-colors duration-300"
            >
              <div className="relative overflow-hidden h-[200px] md:h-auto">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:hidden" />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-center gap-3">
                <div className="flex gap-2 flex-wrap mb-1">
                  {project.tags.map((tag, tIdx) => (
                    <span 
                      key={tIdx} 
                      className={`text-[9px] font-bold tracking-[1px] uppercase px-2.5 py-1 rounded-md ${
                        tIdx === 0 
                          ? "bg-primary text-black" 
                          : "bg-secondary text-muted-foreground border border-border"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-serif text-[15px] font-bold text-foreground leading-snug">
                  {project.title}
                </h3>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="text-[12px] text-primary font-semibold border-t border-border pt-3 mt-1">
                  {project.stats}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
