import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { TrendingUp, CheckCircle, ArrowRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

type CaseStudy = {
  category: string;
  title: string;
  description: string;
  metrics: { label: string; value: string }[];
  color: string;
  dialog?: {
    summary: string;
    duration: string;
    stats: { label: string; value: string }[];
    challenges: string[];
    approach: string[];
    outcomes: string[];
  };
};

const caseStudies: CaseStudy[] = [
  {
    category: "Digital Transformation",
    title: "Transforming a $300M Portfolio for a Global Energy Leader",
    description:
      "Modernised portfolio governance, tooling, and insight loops to improve transparency and delivery confidence across four regions.",
    metrics: [
      // { label: "Portfolio Value", value: "$300M" },
      // { label: "Reporting Time", value: "-20%" },
    ],
    color: "from-amber-500 to-orange-600",
    dialog: {
      summary:
        "The client managed a large, multi region $300m portfolio but faced significant inefficiencies, including:",
      duration: "18-month global program",
      stats: [
        { label: "Regions aligned", value: "4" },
        { label: "Programs governed", value: "12" },
        { label: "Agile teams", value: "14" },
      ],
      challenges: [
        "Non standardised tools and templates across PMO teams",
        "Fragmented reporting and inconsistent KPIs",
        "Heavy reliance on manual spreadsheets for RAID tracking",
        "Limited portfolio-level visibility for C-suite stakeholders",
      ],
      approach: [
        "Rapid assessment to identify gaps, pain points, and improvement opportunities",
        "Standardised frameworks for reporting, KPIs, and project governance",
        "Digital PMO enablement with automated reporting, real time dashboards, and integrated risk/issue tracking",
        "Training and adoption support to embed new ways of working",
        "Continuous improvement loop to refine tools and insights over time"
      ],
      outcomes: [
        "20% reduction in reporting time through automation",
        "Improved visibility across the entire $300m portfolio",
        "Greater consistency and accountability across teams",
        "Reduced operational effort and cost through streamlined processes",
      ],
    },
  },
];

const bestPractices = [
  "User centric design",
  "Data driven decision making",
  "Agile, iterative delivery",
  "Strong governance and controls",
  "Collaborative co creation with client teams",
  "Focus on measurable, sustainable impact",
];

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-24 bg-primary text-primary-foreground">
      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        {/* <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <SectionHeader
            align="left"
            tone="onDark"
            eyebrow="Case Studies & Best Practices"
            title={
              <>
                Proven Results,{" "}
                <span className="text-accent">Real Impact</span>
              </>
            }
            description="With over a decade of cross industry experience, Inhance Consulting helps organisations improve delivery performance, strengthen governance, and unlock value through data driven insights and modern PMO practices. Below is a snapshot of how we supported a global energy client in transforming a major portfolio."
            className="max-w-3xl"
          />
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-semibold group"
          >
            View All Case Studies
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.button>
        </div> */}
        {/* Case Studies Grid temporarily hidden for future use */}
        {false && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`group relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-primary-foreground/10 transition-all duration-300 ${
                  study.dialog ? "cursor-pointer" : ""
                }`}
                onClick={() => study.dialog && setActiveStudy(study)}
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

                  {study.dialog && (
                    <div className="flex items-center justify-between text-xs text-accent font-semibold mb-4">
                      <span>Tap to explore</span>
                      <span>↗</span>
                    </div>
                  )}

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
        )}
        <br></br>
        {/* Best Practices */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 bg-primary-foreground/5 rounded-3xl border border-primary-foreground/10 p-8"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <p className="text-md uppercase tracking-[0.3em] text-accent font-semibold">
                Best Practices We Follow
              </p>
              <h3 className="text-2xl font-display font-semibold mt-2">
                How we deliver dependable transformation
              </h3>
              <p className="text-primary-foreground/80 mt-2 text-sm">
                Every engagement leverages a consistent playbook that keeps teams aligned, insight-led, and focused on creating lasting value.
              </p>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {bestPractices.map((practice, index) => (
              <motion.div
                key={practice}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.05 }}
                className="flex items-start gap-3 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 p-4"
              >
                <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center font-semibold text-sm">
                  {index + 1}
                </div>
                <span className="text-sm font-medium text-primary-foreground/90">
                  {practice}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>

      <Dialog open={!!activeStudy} onOpenChange={() => setActiveStudy(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {activeStudy?.dialog && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-4 mb-2"
                >
                  <motion.div
                    initial={{ scale: 0.8, rotate: -10 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center shadow-gold"
                  >
                    <TrendingUp className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <div>
                    <p className="uppercase text-xs tracking-wide text-accent font-semibold">
                      {activeStudy.category}
                    </p>
                    <DialogTitle className="text-2xl font-display">
                      {activeStudy.title}
                    </DialogTitle>
                    
                  </div>
                </motion.div>
              </DialogHeader>

              <div className="space-y-8 mt-6">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="text-md"
                >
                  {activeStudy.dialog.summary}
                </motion.p>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold mb-4">Challenges we inherited</h4>
                  <div className="grid gap-3">
                    {activeStudy.dialog.challenges.map((challenge, index) => (
                      <motion.div
                        key={challenge}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.35 + index * 0.05 }}
                        className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                        <span className="text-md">
                          {challenge}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <h4 className="text-lg font-semibold mb-4">Our approach</h4>
                  <div className="grid gap-3">
                    {activeStudy.dialog.approach.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.45 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-full bg-accent/20 text-accent flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="text-md">
                          {step}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="text-lg font-semibold mb-4">Business impact</h4>
                  <div className="grid gap-3">
                    {activeStudy.dialog.outcomes.map((outcome, index) => (
                      <motion.div
                        key={outcome}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.55 + index * 0.05 }}
                        className="flex items-start gap-3 bg-primary-foreground/5 rounded-xl"
                      >
                        <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                        <span className="text-md">
                          {outcome}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.section>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-primary-foreground/10"
                >
                  <Button
                    variant="gold"
                    className="flex-1"
                    onClick={() => {
                      setActiveStudy(null);
                      const element = document.querySelector("#contact");
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    Discuss a similar engagement
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button variant="outline" onClick={() => setActiveStudy(null)}>
                    Close
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CaseStudiesSection;
