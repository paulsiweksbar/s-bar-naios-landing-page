import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwCQZvCNkaVICQcE4IOW4SDSJJfnfeoHt3W2LYOW4Xb9trLJtkUDsjMCIDsQYz0JyrxiA/exec";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    setError("");
    
    try {
      // Use form data approach which works better with Google Apps Script
      const formData = new FormData();
      formData.append("email", email);
      
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
      });
      
      setIsSubmitted(true);
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Newsletter
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#171717] border border-border rounded-xl p-6 sm:p-8 md:p-12 lg:p-16 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-foreground mb-4">
                S-Bar Construction projects and updates delivered to your inbox
              </h2>
              <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-xl mx-auto">
                Subscribe to our newsletter read by industry experts. Get insights on IOS development, project updates, and market trends.
              </p>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-3 text-primary py-4"
              >
                <CheckCircle size={24} />
                <span className="font-medium">Thanks for subscribing!</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-xl mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email"
                    required
                    className="flex-1 px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 whitespace-nowrap"
                  >
                    {isLoading ? "Subscribing..." : "Subscribe"}
                    {!isLoading && <ArrowRight size={18} />}
                  </button>
                </div>
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </form>
            )}

            <p className="text-[11px] text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
