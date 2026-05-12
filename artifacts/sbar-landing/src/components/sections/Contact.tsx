import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import sbarLogo from "@assets/sbar_logo.png";

export function Contact() {
  return (
    <>
      <section id="contact" className="py-20 border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 items-center"
          >
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
                Get in touch
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
                Let's build your <em className="text-primary not-italic">IOS site.</em>
              </h2>
              <p className="text-[14px] md:text-[15px] text-muted-foreground leading-relaxed max-w-lg">
                Acquiring a new yard, repositioning an existing site, or need a reliable contractor for ongoing CapEx? Reach out — we're a straightforward conversation, not a sales pitch.
              </p>
            </div>

            <div className="lg:justify-self-end space-y-5">
              <a href="mailto:adam@sbarconstruction.com" className="flex items-center gap-3 text-[13px] md:text-[14px] text-muted-foreground hover:text-primary transition-colors">
                <Mail size={14} className="text-primary shrink-0" />
                <span className="font-medium text-foreground">adam@sbarconstruction.com</span>
              </a>
              <div className="flex items-center gap-3 text-[13px] md:text-[14px] text-muted-foreground">
                <MapPin size={14} className="text-primary shrink-0" />
                <span>Houston, TX · Serving North America</span>
              </div>
              <a href="https://www.sbarconstruction.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[13px] md:text-[14px] text-muted-foreground hover:text-primary transition-colors">
                <Globe size={14} className="text-primary shrink-0" />
                <span className="font-medium text-foreground">sbarconstruction.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080c14] pt-12 pb-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#222]">
            <a href="https://www.sbarconstruction.com/" target="_blank" rel="noopener noreferrer">
              <img src={sbarLogo} alt="S-Bar Construction" className="h-14 md:h-16 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            
          </div>
          
          <div className="text-[12px] text-[#666] text-center mt-6">
            &copy; {new Date().getFullYear()} S-Bar Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
