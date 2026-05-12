import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Blog() {
  const posts = [
    {
      category: "Construction Guides",
      title: "Asphalt vs. Concrete vs. Stabilized Aggregate for IOS",
      excerpt: "The surface is the most expensive and critical component of any IOS site. We break down the cost-to-lifespan ratio of the three main options.",
      link: "https://www.sbarconstruction.com/blog/asphalt-vs-concrete-vs-stabilized-aggregate-for-ios"
    },
    {
      category: "Market Insights",
      title: "What Fleet Operators Actually Look for in a Yard",
      excerpt: "Location matters, but functionality dictates the lease rate. Understanding the infrastructure demands of modern logistics tenants.",
      link: "https://www.sbarconstruction.com/blog/what-fleet-operators-look-for"
    }
  ];

  return (
    <section id="insights" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Knowledge Base
        </div>
        <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-12">
          Insights From the <em className="text-primary not-italic">Field</em>
        </h2>

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
              className="group block bg-card border border-border border-t-2 border-t-primary rounded-xl p-8 hover:bg-secondary transition-colors duration-300"
            >
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-3">
                {post.category}
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-[14px] text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>
              <div className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary transition-all duration-200 group-hover:gap-3">
                Read Article <ArrowUpRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
