import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Thought Leadership
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
          Insights From the <em className="text-primary not-italic">Field</em>
        </h2>
        <p className="text-[15px] text-muted-foreground max-w-2xl leading-relaxed mb-12">
          We don’t just build IOS sites — we write about them. Two reads that show how we think.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
              className="group block bg-[#171717] border border-border rounded-xl p-6 md:p-8 hover:border-primary transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-3">
                {post.category}
              </div>
              <h3 className="font-serif text-[22px] md:text-[24px] font-bold text-foreground mb-3 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-[92%]">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                Read on sbarconstruction.com <ArrowUpRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
