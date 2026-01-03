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
    icon: LineChart,
    title: "Strategic Planning",
    description:
      "Develop comprehensive strategies aligned with your vision and market opportunities.",
    features: ["Market Analysis", "Growth Roadmaps", "Competitive Positioning"],
    detailedDescription:
      "Our strategic planning services help organizations define their long-term vision and create actionable roadmaps to achieve sustainable growth. We combine rigorous market analysis with deep industry expertise to identify opportunities and build competitive advantages.",
    benefits: [
      "Clear vision and mission alignment across the organization",
      "Data-driven market opportunity identification",
      "Actionable 3-5 year strategic roadmaps",
      "Competitive landscape analysis and positioning",
      "Risk assessment and mitigation strategies",
      "KPI frameworks for tracking progress",
    ],
    process: [
      "Discovery & Assessment",
      "Market Research",
      "Strategy Development",
      "Implementation Planning",
    ],
  },
  {
    icon: Settings,
    title: "Operational Excellence",
    description:
      "Optimize processes and systems to enhance efficiency and reduce costs.",
    features: ["Process Optimization", "Cost Reduction", "Quality Management"],
    detailedDescription:
      "We help organizations streamline operations, eliminate waste, and build systems that scale. Our operational excellence methodology combines lean principles with modern technology to drive efficiency improvements across your entire value chain.",
    benefits: [
      "20-40% reduction in operational costs",
      "Improved process cycle times and throughput",
      "Enhanced quality and reduced defect rates",
      "Standardized processes and best practices",
      "Scalable operational frameworks",
      "Real-time performance monitoring dashboards",
    ],
    process: [
      "Process Mapping",
      "Bottleneck Analysis",
      "Solution Design",
      "Implementation & Training",
    ],
  },
  {
    icon: Cpu,
    title: "Digital Transformation",
    description:
      "Navigate the digital landscape with innovative technology solutions.",
    features: ["Tech Strategy", "Cloud Migration", "Data Analytics"],
    detailedDescription:
      "Transform your business with cutting-edge digital solutions. We guide organizations through their digital journey, from strategy development to implementation, ensuring technology investments deliver measurable business value.",
    benefits: [
      "Comprehensive digital maturity assessment",
      "Cloud-first architecture and migration",
      "Advanced analytics and AI capabilities",
      "Enhanced customer experience platforms",
      "Cybersecurity and data governance",
      "Agile delivery methodologies",
    ],
    process: [
      "Digital Assessment",
      "Technology Roadmap",
      "Pilot Programs",
      "Enterprise Rollout",
    ],
  },
  {
    icon: Users2,
    title: "Organizational Change",
    description:
      "Transform culture and capabilities to drive sustainable performance.",
    features: ["Change Management", "Leadership Development", "Team Building"],
    detailedDescription:
      "Successful transformation requires more than new processes—it requires people to embrace change. Our organizational change practice helps leaders build cultures of innovation, develop talent, and drive adoption of new ways of working.",
    benefits: [
      "Change readiness assessment and planning",
      "Leadership alignment and coaching",
      "Communication strategy and execution",
      "Training program development",
      "Culture transformation initiatives",
      "Sustainable change adoption metrics",
    ],
    process: [
      "Stakeholder Analysis",
      "Change Strategy",
      "Enablement Programs",
      "Adoption & Reinforcement",
    ],
  },
  {
    icon: BarChart3,
    title: "Financial Advisory",
    description:
      "Expert guidance on financial strategy, M&A, and value creation.",
    features: ["M&A Advisory", "Valuation", "Due Diligence"],
    detailedDescription:
      "Our financial advisory team provides strategic guidance on transactions, valuations, and financial optimization. We help clients maximize value through mergers, acquisitions, divestitures, and capital structure optimization.",
    benefits: [
      "Independent and objective valuation analysis",
      "Comprehensive due diligence support",
      "Deal structuring and negotiation support",
      "Post-merger integration planning",
      "Working capital optimization",
      "Financial performance improvement",
    ],
    process: [
      "Opportunity Assessment",
      "Valuation & Analysis",
      "Transaction Support",
      "Integration Planning",
    ],
  },
  {
    icon: Briefcase,
    title: "Risk Management",
    description:
      "Identify, assess, and mitigate risks to protect your business.",
    features: ["Risk Assessment", "Compliance", "Business Continuity"],
    detailedDescription:
      "In an increasingly complex business environment, effective risk management is essential. We help organizations identify, assess, and mitigate risks while building resilience and ensuring regulatory compliance.",
    benefits: [
      "Enterprise risk assessment frameworks",
      "Regulatory compliance programs",
      "Business continuity and disaster recovery",
      "Cybersecurity risk management",
      "Third-party risk management",
      "Risk culture and governance",
    ],
    process: [
      "Risk Identification",
      "Impact Assessment",
      "Mitigation Planning",
      "Monitoring & Reporting",
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
            <>
              <DialogHeader>
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-14 h-14 bg-gradient-gold rounded-xl flex items-center justify-center">
                    <selectedService.icon className="w-7 h-7 text-foreground" />
                  </div>
                  <div>
                    <DialogTitle className="text-2xl font-display">
                      {selectedService.title}
                    </DialogTitle>
                    <DialogDescription className="text-muted-foreground">
                      {selectedService.description}
                    </DialogDescription>
                  </div>
                </div>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Detailed Description */}
                <div>
                  <p className="text-foreground leading-relaxed">
                    {selectedService.detailedDescription}
                  </p>
                </div>

                {/* Process */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Our Process</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {selectedService.process.map((step, index) => (
                      <div
                        key={step}
                        className="relative bg-secondary rounded-xl p-4 text-center"
                      >
                        <div className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-sm font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h4 className="font-semibold text-lg mb-4">Key Benefits</h4>
                  <div className="grid gap-3">
                    {selectedService.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-3 p-3 bg-secondary/50 rounded-lg"
                      >
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button
                    variant="gold"
                    size="lg"
                    className="flex-1"
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
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setSelectedService(null)}
                  >
                    Close
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ServicesSection;
