import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import sbarLogo from "@assets/sbar_logo.png";

export function Contact() {
  return (
    <>
      <section id="contact" className="py-24 border-b border-border bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-20 items-start">
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight text-foreground mb-6">
                Ready to build?<br />
                <em className="text-primary not-italic">Let's talk specs.</em>
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-10 max-w-md">
                Reach out to discuss your upcoming IOS project. We operate across North America and bring specialized expertise to every bid.
              </p>
              
              <div className="space-y-6">
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

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8 shadow-xl"
            >
              <h3 className="text-xl font-bold text-foreground mb-2">Request a Bid</h3>
              <p className="text-[13px] text-muted-foreground mb-8">
                Fill out the form below and our estimating team will get back to you within 24 hours.
              </p>
              
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">First Name</label>
                    <input type="text" className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="John" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Last Name</label>
                    <input type="text" className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Company</label>
                    <input type="text" className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="Acme Logistics" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Email</label>
                    <input type="email" className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Project Type</label>
                  <select className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors appearance-none cursor-pointer">
                    <option>Ground-Up Development</option>
                    <option>Yard Expansion / Paving</option>
                    <option>Facility Remodel</option>
                    <option>Maintenance Agreement</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-semibold uppercase tracking-[1.5px] text-muted-foreground">Project Details</label>
                  <textarea 
                    className="w-full bg-[#111] border border-border rounded-lg px-4 py-3 text-[14px] text-foreground focus:outline-none focus:border-primary transition-colors min-h-[100px] resize-y" 
                    placeholder="Location, acreage, scope of work..."
                  ></textarea>
                </div>
                
                <Button className="w-full font-bold tracking-wide py-6 text-[14px] mt-2 group hover-elevate">
                  Submit Inquiry
                  <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
                </Button>
                <p className="text-[11px] text-muted-foreground text-center mt-4">
                  Information submitted is secure and will only be used by our estimating team.
                </p>
              </form>
            </motion.div>

          </div>
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
