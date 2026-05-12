import { motion } from "framer-motion";
import { CheckCircle2, Crosshair, Navigation, Clock } from "lucide-react";

export function About() {
  const values = [
    {
      title: "IOS-Focused",
      description: "We work exclusively in the IOS space — not a side service, our entire focus.",
      icon: <Crosshair size={18} className="text-primary mt-1 flex-shrink-0" />
    },
    {
      title: "Single Point of Contact",
      description: "From permit to final walkthrough — one team, one number, no confusion.",
      icon: <Navigation size={18} className="text-primary mt-1 flex-shrink-0" />
    },
    {
      title: "Operator Mindset",
      description: "We build sites that work for tenants — durable surfaces, proper lighting, real security.",
      icon: <CheckCircle2 size={18} className="text-primary mt-1 flex-shrink-0" />
    },
    {
      title: "On Time, Every Time",
      description: "100% on-time completion rate. Your schedule is the schedule we hit.",
      icon: <Clock size={18} className="text-primary mt-1 flex-shrink-0" />
    }
  ];

  return (
    <section id="about" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
              Who We Are
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-6">
              Not just available for IOS.<br />
              <em className="text-primary not-italic">Built for it.</em>
            </h2>
            <div className="space-y-4 text-muted-foreground text-[15px] leading-relaxed mb-8">
              <p>
                S-Bar Construction is a commercial and industrial general contractor focused on one thing: helping IOS owners, operators, and investors get their sites built right — on time and on budget.
              </p>
              <p>
                We understand what tenants need to operate and what owners need to perform. That combination — construction expertise meets IOS fluency — is what makes us different from a general GC who's never walked a yard.
              </p>
              <p>
                From raw parcel to fully operational site — one contractor, one point of contact, no surprises.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, staggerChildren: 0.1 }}
            className="flex flex-col gap-4"
          >
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                className="bg-card border border-border border-l-[3px] border-l-primary rounded-xl p-5 md:p-6 hover:bg-secondary transition-colors duration-200 flex gap-4"
              >
                {value.icon}
                <div>
                  <h3 className="text-[13px] font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
