import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  BarChart3,
  Briefcase,
  Cpu,
  LineChart,
  Settings,
  Users2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: LineChart,
    title: "Strategic Planning",
    description:
      "Develop comprehensive strategies aligned with your vision and market opportunities.",
    features: ["Market Analysis", "Growth Roadmaps", "Competitive Positioning"],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description:
      "Optimize processes and systems to enhance efficiency and reduce costs.",
    features: ["Process Optimization", "Cost Reduction", "Quality Management"],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Navigate the digital landscape with innovative technology solutions.",
    features: ["Tech Strategy", "Cloud Migration", "Data Analytics"],
  },
  {
    icon: Users2,
    title: "Organizational Change",
    description:
      "Transform culture and capabilities to drive sustainable performance.",
    features: ["Change Management", "Leadership Development", "Team Building"],
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "Expert guidance on financial strategy, M&A, and value creation.",
    features: ["M&A Advisory", "Valuation", "Due Diligence"],
  },
  {
    icon: Briefcase,
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate risks to protect your business.",
    features: ["Risk Assessment", "Compliance", "Business Continuity"],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-accent font-semibold uppercase tracking-wider text-sm"
          >
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold"
          >
            Comprehensive Solutions for{" "}
            <span className="text-gradient-gold">Every Challenge</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            We offer end-to-end consulting services tailored to meet the unique
            needs of your organization.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
