import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  BarChart3,
  Briefcase,
  Cpu,
  LineChart,
  Settings,
  Users2,
  ArrowRight,
  X,
  CheckCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Users2,
    title: "AI Consultancy",
    description:
      "We help organisations adopt AI responsibly, effectively, and in ways that create real business value. Our approach focuses on identifying practical use cases, improving operational efficiency, and ensuring AI is implemented with the right governance, controls, and ethical considerations. Whether you’re exploring AI for the first time or scaling existing capabilities, we guide you through every step of the journey.",
    features: [],
    detailedDescription:
      "",
    benefits: [
      "AI readiness assessments to evaluate current capabilities, risks, and opportunities",
      "Use case identification & prioritisation aligned to business goals",
      "AI powered automation solutions to streamline processes and reduce manual effort",
      "Proof of concept development to validate ideas quickly and cost effectively",
      "Training & adoption support to help teams understand and use AI confidently.",
    ],
    process: [
      "We focus on Business first approach solving real problems",
      "Rapid prototyping, Early visibility and quick wins to demonstrate value",
      "Clear governance, Safe and Ethical AI Framework",
      "Collaborative delivery to co create solutions",
      "Designing solutions that grow with your organisation",
    ],
  },
  {
    icon: LineChart,
    title: "Data Analytics & Visualisation",
    description:
      "We help organisations turn data into meaningful insights through advanced analytics, automation, and intuitive visualisation.",
    features: [],
    detailedDescription:
      "",
    benefits: [
      "Collaborative workshops to understand business needs",
      "Rapid prototyping for early visibility",
      "Scalable data models and governance frameworks",
      "User friendly dashboards designed for decision makers",
      "Wide Range of Standard (Power Bi, Tableau etc.), and Customized tools/reports",
    ],
    process: [
      "Dashboard design & development",
      "Data modelling & data quality improvement",
      "KPI frameworks & performance reporting",
      "Automated reporting solutions",
      "Insight generation & storytelling with data",
    ],
  },
  {
    icon: Settings,
    title: "Product/Project Delivery & Management",
    description:
      "We help organisations deliver Product/Projects with confidence, clarity, and control. Our team brings structured delivery expertise, proven methodologies, and hands‑on experience to ensure projects are executed on time, within budget, and to the highest standard.",
    features: [],
    detailedDescription:
      "",
    benefits: [
      "Certified project managers with multi industry experience",
      "Transparent reporting and Structured governance",
      "Structured delivery frameworks tailored to your organisation",
      "Prioritising value, quality, and measurable results at every stage",
      "Consistent communication and alignment across teams",
    ],
    process: [
      "End to end Product/Project management",
      "Project setup & governance",
      "Risk, issue, and dependency management",
      "Stakeholder engagement & communication planning",
      "Agile, Waterfall, and hybrid delivery models",
    ],
  },
  {
    icon: Cpu,
    title: "Digital Product/Project Management Office (Digital PMO)",
    description:
      "We modernise traditional PMOs by integrating digital tools, automation, and real‑time reporting to create a more efficient, transparent, and insight‑driven project environment. Our Digital PMO approach enhances governance, streamlines workflows, and provides leaders with the visibility they need to make faster, smarter decisions.",
    features: [],
    detailedDescription:
      "",
    benefits: [
      "Assessment of current PMO maturity",
      "Implementation of digital tools (Power Platform, Jira, Smartsheet, etc.)",
      "Training and change management",
      "Proven Delivery and Operating Model",
      "Centre of Excellence- Continuous Improvement",
    ],
    process: [
      "Digital PMO setup & transformation",
      "Performance Management",
      "Finance, Resource & capacity planning",
      "Governance frameworks",
      "Planning & Scheduling Management",
      "Risk & Issues Management",
    ],
  },
  
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedService, setSelectedService] = useState<
    (typeof services)[0] | null
  >(null);

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
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(service)}
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

      {/* Service Detail Dialog */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <DialogHeader>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="flex items-center gap-4 mb-2"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 15,
                      delay: 0.2,
                    }}
                    className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center"
                  >
                    <selectedService.icon className="w-7 h-7 text-foreground" />
                  </motion.div>
                  <div>
                    <DialogTitle className="text-2xl font-display">
                      {selectedService.title}
                    </DialogTitle>
                    {/* <DialogDescription className="text-muted-foreground">
                      {selectedService.description}
                    </DialogDescription> */}
                  </div>
                </motion.div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Detailed Description */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  <p className="text-foreground leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </motion.div>

                {/* Process */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <h4 className="font-semibold text-lg mb-4">What we offer</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedService.process.map((step, index) => (
                      <motion.div
                        key={step}
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.4 + index * 0.1,
                          type: "spring",
                          stiffness: 150,
                        }}
                        className="relative bg-secondary rounded-xl p-4 text-center"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            delay: 0.5 + index * 0.1,
                          }}
                          className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold"
                        >
                          {index + 1}
                        </motion.div>
                        <span className="text-sm font-medium">{step}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Benefits */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  <h4 className="font-semibold text-lg mb-4">How we do it</h4>
                  <div className="grid gap-3">
                    {selectedService.benefits.map((benefit, index) => (
                      <motion.div
                        key={benefit}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.4,
                          delay: 0.6 + index * 0.08,
                          ease: "easeOut",
                        }}
                        className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            delay: 0.7 + index * 0.08,
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        </motion.div>
                        <span className="text-sm text-foreground">
                          {benefit}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                  className="flex gap-4 pt-4 border-t border-border"
                >
                  <motion.div
                    className="flex-1"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="gold"
                      size="lg"
                      className="w-full"
                      onClick={() => {
                        setSelectedService(null);
                        const element = document.querySelector("#contact");
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setSelectedService(null)}
                    >
                      Close
                    </Button>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
