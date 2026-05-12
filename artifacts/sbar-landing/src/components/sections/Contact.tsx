import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import sbarLogo from "@assets/sbar_logo.png";

export function Contact() {
  return (
    <>
      <section id="contact" className="py-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-card border border-border rounded-xl p-8 md:p-10 shadow-xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
              Request a Bid
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-md">
              Fill out the form below and our estimating team will get back to you within 24 hours.
            </p>
            <div className="space-y-5">
              <a href="mailto:info@sbarconstruction.com" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} />
                </div>
                <span className="text-[14px] font-medium text-foreground">info@sbarconstruction.com</span>
              </a>
              <a href="tel:7135550198" className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone size={18} />
                </div>
                <span className="text-[14px] font-medium text-foreground">(713) 555-0198</span>
              </a>
              <div className="flex items-center gap-4 text-muted-foreground group">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                  <MapPin size={18} />
                </div>
                <span className="text-[14px] font-medium text-foreground">Houston, TX (HQ)</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#080c14] pt-12 pb-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#222]">
            <a href="https://www.sbarconstruction.com/" target="_blank" rel="noopener noreferrer">
              <img src={sbarLogo} alt="S-Bar Construction" className="h-10 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </a>
            
            <div className="flex items-center gap-8 flex-wrap justify-center">
              <a href="mailto:info@sbarconstruction.com" className="text-[13px] font-medium text-[#aaaaaa] hover:text-primary transition-colors flex items-center gap-2">
                <Mail size={16} /> info@sbarconstruction.com
              </a>
              <a href="https://www.sbarconstruction.com/" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-[#aaaaaa] hover:text-primary transition-colors flex items-center gap-2">
                Website
              </a>
            </div>
          </div>
          
          <div className="text-[12px] text-[#666] text-center mt-6">
            &copy; {new Date().getFullYear()} S-Bar Construction. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
