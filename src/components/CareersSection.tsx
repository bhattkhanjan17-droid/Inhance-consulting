import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Sparkles, Coffee, Heart, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const perks = [
  { icon: Sparkles, label: "Competitive Compensation" },
  { icon: Heart, label: "Comprehensive Benefits" },
  { icon: Rocket, label: "Career Growth" },
  { icon: Coffee, label: "Flexible Work" },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

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
              Join Our Team {" "}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-lg text-muted-foreground"
            >
              We’re always looking for talented individuals who are passionate about data, technology, and delivery excellence.
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

          {/* Application Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-8 rounded-3xl shadow-card border border-border"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Full Name</label>
                  <Input
                    placeholder="Jane Doe"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email Address</label>
                  <Input
                    type="email"
                    placeholder="jane@company.com"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone Number</label>
                  <Input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Position Applying For</label>
                  <Input
                    placeholder="e.g. Digital PMO Lead"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Years of Experience</label>
                  <Input
                    type="number"
                    min={0}
                    placeholder="8"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Upload CV (PDF/Word)</label>
                  <Input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="bg-background border-border focus:border-accent focus:ring-accent file:bg-secondary file:border-0 file:px-3 file:py-1.5 file:text-sm file:font-medium file:text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">Additional Comments (optional)</label>
                <Textarea
                  placeholder="Tell us what excites you about joining Inhance..."
                  rows={4}
                  className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="lg"
                className="w-full"
                disabled={isSubmitted}
              >
                {isSubmitted ? "Application Sent" : "Submit Application"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;
