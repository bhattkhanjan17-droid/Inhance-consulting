import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, ArrowRight, Sparkles, Coffee, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const positions = [
  {
    title: "Senior Strategy Consultant",
    department: "Strategy",
    location: "New York",
    type: "Full-time",
  },
  {
    title: "Digital Transformation Lead",
    department: "Technology",
    location: "San Francisco",
    type: "Full-time",
  },
  {
    title: "Business Analyst",
    department: "Operations",
    location: "London",
    type: "Full-time",
  },
  {
    title: "Change Management Specialist",
    department: "People & Culture",
    location: "Singapore",
    type: "Full-time",
  },
];

const perks = [
  { icon: Sparkles, label: "Competitive Compensation" },
  { icon: Heart, label: "Comprehensive Benefits" },
  { icon: Rocket, label: "Career Growth" },
  { icon: Coffee, label: "Flexible Work" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-wider text-sm"
            >
              Careers
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold"
            >
              Join Our Team of{" "}
              <span className="text-gradient-gold">Visionaries</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              We're always looking for talented individuals who are passionate
              about making a difference. Join us in shaping the future of
              business consulting.
            </motion.p>

            {/* Perks */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 grid grid-cols-2 gap-4"
            >
              {perks.map((perk, index) => (
                <div
                  key={perk.label}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-xl"
                >
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                    <perk.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium">{perk.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-accent uppercase tracking-wider">
                      {position.department}
                    </span>
                    <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="pt-4"
            >
              <Button variant="hero-outline" size="lg" className="w-full sm:w-auto">
                View All Openings
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
