import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    category: "Digital Transformation",
    title: "Global Retail Chain Modernization",
    description:
      "Helped a $5B retail company implement omnichannel strategy, resulting in 40% increase in online revenue.",
    metrics: [
      { label: "Revenue Growth", value: "+40%" },
      { label: "Customer Retention", value: "+25%" },
    ],
    color: "from-amber-500 to-orange-600",
  },
  {
    category: "Operational Excellence",
    title: "Manufacturing Efficiency Overhaul",
    description:
      "Redesigned operations for a leading manufacturer, achieving significant cost savings and improved throughput.",
    metrics: [
      { label: "Cost Reduction", value: "35%" },
      { label: "Productivity", value: "+50%" },
    ],
    color: "from-primary to-navy-light",
  },
  {
    category: "Strategic Planning",
    title: "Fintech Market Expansion",
    description:
      "Developed market entry strategy for a fintech startup, securing Series B funding and new market presence.",
    metrics: [
      { label: "Markets Entered", value: "5" },
      { label: "Funding Raised", value: "$45M" },
    ],
    color: "from-emerald-500 to-teal-600",
  },
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-accent font-semibold uppercase tracking-wider text-sm"
            >
              Case Studies
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold"
            >
              Proven Results,{" "}
              <span className="text-accent">Real Impact</span>
            </motion.h2>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group"
          >
            View All Case Studies
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-primary-foreground/10 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${study.color}`} />

              <div className="p-8">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-accent/20 text-accent rounded-full mb-4">
                  {study.category}
                </span>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {study.title}
                </h3>

                <p className="text-primary-foreground/70 mb-6 text-sm">
                  {study.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-primary-foreground/10">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="flex items-center gap-1 text-accent">
                        <TrendingUp className="w-4 h-4" />
                        <span className="text-2xl font-bold">{metric.value}</span>
                      </div>
                      <div className="text-xs text-primary-foreground/60">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
