import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import clientsImage from "@assets/Customers_(2)_1778658115233.png";

export function Blog() {
  const posts = [
    {
      category: "Industrial Construction",
      title: "Why Active-Facility Construction Is a Different Discipline — And Why Most Contractors Can't Do It",
      excerpt: "The best GC for your vacant building and the best GC for your operating facility are not the same contractor. S-Bar has completed nearly 20 projects for ABF Freight — every one executed while the facility remained fully operational.",
      link: "https://www.sbarconstruction.com/blogs/why-active-facility-construction-is-a-different-discipline-and-why-most-contractors-cant-do-it"
    },
    {
      category: "Industrial ROI",
      title: "Raise the Roof, Not the Budget: Why \"Raising the Roof\" Is the Smartest ROI in Modern Industrial Construction",
      excerpt: "In the industrial real estate market of 2026, clear height is the difference between a fully leased asset and a vacancy problem. Here's why raising the roof is the highest-return capital move available to industrial owners.",
      link: "https://www.sbarconstruction.com/blogs/why-raising-the-roof-is-the-smartest-roi-in-modern-industrial-construction"
    }
  ];

  return (
    <section id="insights" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
            Who we work with
          </div>
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            src={clientsImage}
            alt="Who We Work With"
            className="w-full h-auto block object-cover"
          />
        </div>
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Thought Leadership
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
          Insights From the <em className="text-primary not-italic">Field</em>
        </h2>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed mb-12">
          We don’t just build IOS sites — we write about them. Two reads that show how we think.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, idx) => (
            <motion.a
              key={idx}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group block bg-[#171717] border border-border rounded-xl p-5 md:p-6 hover:border-primary transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary">
                  {post.category}
                </div>
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-primary transition-colors group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                  <ArrowUpRight size={14} />
                </div>
              </div>
              <h3 className="font-serif text-[18px] md:text-[19px] font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-muted-foreground leading-relaxed mb-5">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-[12px] font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                Read on sbarconstruction.com
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
