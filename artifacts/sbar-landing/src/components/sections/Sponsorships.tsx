import { motion } from "framer-motion";
import { Calendar, MapPin, Building2 } from "lucide-react";

const currentSponsorship = {
  name: "National Industrial Outdoor Storage Conference",
  organizer: "BISNOW",
  date: "Thu, Aug 6, 2026",
  location: "Jersey City, NJ",
  url: "https://www.bisnow.com",
};

const pastSponsorships = [
  {
    name: "Denver Industrial Outlook",
    organizer: "BISNOW",
    location: "Denver, CO",
    url: "https://www.bisnow.com/events/denver/industrial/denver-industrial-outlook-9806",
  },
  {
    name: "Houston Industrial Summit",
    organizer: "BISNOW",
    location: "Houston, TX",
    url: "https://www.bisnow.com/events/houston/industrial/houston-industrial-summit-10111",
  },
  {
    name: "Austin Industrial Summit",
    organizer: "BISNOW",
    location: "Austin, TX",
    url: "https://www.bisnow.com/events/austin/industrial/2026-austin-industrial-summit-10077",
  },
];

export function Sponsorships() {
  return (
    <section id="sponsorships" className="py-20 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[2.5px] uppercase text-primary mb-4 before:content-[''] before:w-5 before:h-px before:bg-primary">
          Event Sponsorship
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="bg-[#171717] border border-border rounded-xl p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
        >
          <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-primary mb-3">
            Currently Sponsoring
          </div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold leading-tight text-foreground mb-5">
            {currentSponsorship.name}
          </h2>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[13px] md:text-[14px] text-muted-foreground">
              <div className="inline-flex items-center gap-2">
                <Calendar size={16} className="text-primary shrink-0" />
                {currentSponsorship.date}
              </div>
              <div className="inline-flex items-center gap-2">
                <MapPin size={16} className="text-primary shrink-0" />
                {currentSponsorship.location}
              </div>
              <div className="inline-flex items-center gap-2">
                <Building2 size={16} className="text-primary shrink-0" />
                {currentSponsorship.organizer}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-muted-foreground mt-12 mb-4">
          Previously Sponsored
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pastSponsorships.map((event, idx) => (
            <motion.a
              key={idx}
              href={event.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group flex items-center gap-3 bg-[#171717] border border-border rounded-xl p-4 hover:border-primary transition-colors duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
            >
              <div className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                <Calendar size={15} />
              </div>
              <div className="min-w-0">
                <div className="text-[14px] font-bold text-foreground leading-snug truncate group-hover:text-primary transition-colors">
                  {event.name}
                </div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-muted-foreground mt-0.5">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={12} className="text-primary shrink-0" />
                    {event.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Building2 size={12} className="text-primary shrink-0" />
                    {event.organizer}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
