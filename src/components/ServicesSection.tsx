import { motion } from "framer-motion";
import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Brain,
  CheckCircle,
  KanbanSquare,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";

const services = [
  {
    icon: Brain,
    title: "AI Consulting & Intelligent Automation",
    description:
      "Our AI Consulting services help organisations harness the power of artificial intelligence to accelerate performance, unlock efficiencies, and create new sources of value. From identifying high impact AI opportunities to building and integrating custom solutions, we guide you through every stage of your AI transformation journey.",
    features: [],
    detailedDescription: "",
    capabilities: [
      {
        title: "AI Consulting",
        description:
          "Strategic guidance to identify high value AI use cases, assess readiness, and shape a roadmap that aligns with your business goals.",
      },
      {
        title: "Custom AI Solutions",
        description:
          "Tailored AI models, automations, and intelligent tools designed to solve your unique operational and strategic challenges.",
      },
      {
        title: "Data Intelligence",
        description:
          "Advanced analytics and machine learning capabilities that transform raw data into predictive insights and smarter decisions.",
      },
      {
        title: "Automation",
        description:
          "Seamless integration of AI into your systems, workflows, and digital platforms — accelerating productivity, reducing manual effort, and enabling your teams to work smarter, not harder.",
      },
      {
        title: "Model Optimisation",
        description:
          "Continuous tuning, retraining, and performance monitoring to keep your AI solutions accurate, efficient, and future ready.",
      },
    ],
    approach: [
      {
        title: "Discovery & Strategy",
        description:
          "We begin by understanding your goals, challenges, and data landscape. This helps us identify the most impactful AI opportunities and define a clear, actionable roadmap.",
      },
      {
        title: "Design & Development",
        description:
          "Frame use cases, test feasibility, and produce a prototype in weeks, not months.",
      },
      {
        title: "Deployment & Support",
        description:
          "We integrate AI seamlessly into your environment, ensure smooth adoption, and provide ongoing optimisation and support to maintain long term value.",
      },
    ],
  },
  {
    icon: LineChart,
    title: "Data Analytics & Visualisation",
    description:
      "We transform data into meaningful insights through advanced analytics, automation, and intuitive visualisation. Our solutions empower smarter decisions, stronger governance, and scalable growth.",
    features: [],
    detailedDescription: "",
    capabilities: [
      {
        title: "Data Driven Insights",
        description:
          "We build analytics solutions that uncover trends, risks, and opportunities to support smarter decision making.",
      },
      {
        title: "Modern BI & Automation Tools",
        description:
          "We work across Power BI, Power Automate, Power Apps, Power Pages, Databricks, Tableau, and Qlik Sense to deliver scalable, secure, and future ready solutions.",
      },
      {
        title: "Tailored Analytics Strategy",
        description:
          "We design data strategies aligned to your business needs, ensuring clarity, governance, and continuous improvement.",
      },
      {
        title: "Productivity & Efficiency Gains",
        description:
          "Our solutions streamline processes, enhance security, and enable scalable growth across your organisation.",
      }
    ],
    approach: [
      {
        title: "End to End Analytics Delivery",
        description:
          "We design, build, and integrate analytics solutions that fit seamlessly into your existing technology landscape.",
      },
      {
        title: "Expertise + Industry Leading Tools",
        description:
          "Our PMO, analytics, and visualisation specialists combine deep expertise with proven accelerators to deliver measurable value.",
      },
      {
        title: "Tailored, Insight Led Solutions",
        description:
          "We create solutions that reflect your unique context, ensuring clarity, usability, and long-term adoption.",
      },
      {
        title: "Strategic Enablement",
        description:
          "We help your teams understand and leverage data effectively, empowering confident, insight driven decisions.",
      },
    ],
  },
  {
    icon: Workflow,
    title: "Project Delivery",
    description:
      "We lead digital initiatives from planning to delivery, ensuring clarity, control, and alignment at every stage. Our experienced project managers bring structure, transparency, and discipline to complex digital programmes.",
    features: [],
    detailedDescription: "",
    capabilities: [
      {
        title: "End to End Project Delivery",
        description:
          "We plan, manage, and orchestrate digital initiatives from initiation to implementation.",
      },
      {
        title: "Cross Industry Expertise",
        description:
          "Our project managers bring experience from small implementations to global transformation programmes.",
      },
      {
        title: "Tailored Delivery Frameworks",
        description:
          "We adapt Agile, Waterfall, or hybrid approaches to suit your project’s needs.",
      },
      {
        title: "Risk & Stakeholder Management",
        description:
          "We ensure clear communication, proactive risk control, and alignment across all stakeholders.",
      },
    ],
    approach: [
      {
        title: "Experienced Delivery Leadership",
        description:
          "Our project managers bring proven methods, industry insights, and structured governance.",
      },
      {
        title: "Clear, Transparent Execution",
        description:
          "We provide consistent reporting, milestone tracking, and issue management to keep delivery on course.",
      },
      {
        title: "Modern Tools & Methodologies",
        description:
          "We use cutting edge delivery tools and best practices to ensure efficiency and quality.",
      },
      {
        title: "Outcome Focused Approach",
        description:
          "Every project is delivered with a focus on value, timelines, and measurable results.",
      },
          ],
  },
  {
    icon: KanbanSquare,
    title: "Project & Programme PMO",
    description:
      "We build PMO functions that bring rigour, visibility, and consistency to delivery. Our frameworks, dashboards, and governance models ensure projects and programmes stay on track and deliver real business value.",
    features: [],
    detailedDescription: "",
    capabilities: [
      {
        title: "PMO Setup & Governance",
        description:
          "We define scope, governance, processes, and reporting frameworks tailored to your organisation.",
      },
      {
        title: "Finance & Contract Management",
        description:
          "We create dashboards and reporting tools that track delivery health, risks, and performance.",
      },
      {
        title: "Planning & Scheduling Management",
        description:
          "We monitor progress, manage dependencies, and ensure milestones are achieved on time and within budget.",
      },
      {
        title: "Resource Management",
        description:
          "We apply Agile, DevOps, and Lean Six Sigma practices to strengthen delivery capability.",
      },
    ],
    approach: [
      {
        title: "Balanced Rigour & Flexibility",
        description:
          "Our PMO model combines structure with adaptability to support evolving programme needs.",
      },
      {
        title: "Hands On Delivery Support",
        description:
          "We work closely with teams to manage risks, issues, and dependencies proactively.",
      },
      {
        title: "Tailored PMO Toolkits",
        description:
          "We deploy frameworks, templates, and dashboards designed specifically for your context.",
      },
      {
        title: "Value Driven Governance",
        description:
          "Our PMO approach ensures alignment, accountability, and measurable business outcomes.",
      },
    ],
  },
  {
    icon: ShieldCheck,
    title: "Value Assurance & Benefits Management",
    description:
      "We ensure digital investments deliver the outcomes they promise. Through structured benefits planning, tracking, and assurance, we help organisations maximise ROI and maintain accountability throughout the transformation lifecycle.",
    features: [],
    detailedDescription: "",
    capabilities: [
      {
        title: "Benefits Identification & Planning",
        description:
          "We define expected benefits, value drivers, KPIs, and OKRs aligned to programme goals.",
      },
      {
        title: "Benefits Realisation Frameworks",
        description:
          "We create structured plans that outline how, when, and where value will be delivered.",
      },
      {
        title: "Progress Tracking & Reporting",
        description:
          "We monitor benefits throughout the programme lifecycle and provide transparent reporting.",
      },
      {
        title: "Investment Optimisation",
        description:
          "We help organisations maximise ROI by identifying value leakage and recommending corrective actions.",
      },
    ],
    approach: [
      {
        title: "Collaborative Value Definition",
        description:
          "We work with stakeholders to align benefits with strategic objectives and business needs.",
      },
      {
        title: "Continuous Monitoring & Assurance",
        description:
          "We track progress against OKRs and adjust plans as circumstances evolve.",
      },
      {
        title: "Holistic View of People, Process & Technology",
        description:
          "Our approach considers all interdependencies to ensure benefits are realistic and achievable.",
      },
      {
        title: "End to End Value Support",
        description:
          "From planning to realisation, we ensure your digital programmes stay on track to deliver measurable outcomes.",
      },
    ],
  },
];

type Service = (typeof services)[0];


const ServicesSection = () => {
  const [activeService, setActiveService] = useState<Service>(services[0]);
  const [activeInfoTab, setActiveInfoTab] = useState<"capabilities" | "approach">(
    "capabilities"
  );
  const showApproach = false;

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Our Services"
          title={
            <>
              Comprehensive Solutions for{" "}
              <span className="text-gradient-gold">Every Challenge</span>
            </>
          }
          description="At Inhance, we help organisations navigate digital transformation with confidence. Our services are designed to enhance performance, strengthen delivery, and unlock measurable value across your business. With deep expertise in technology, project delivery, and value realisation, we partner with you to turn strategy into outcomes through four core service areas."
          className="mb-16 max-w-3xl"
        />

        {/* Timeline / Accordion Layout */}
        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div className="relative">
            <div className="hidden lg:block absolute left-4 top-4 bottom-4 bg-border" />
            <div className="space-y-4">
              {services.map((service, index) => {
                const isActive = activeService.title === service.title;
                return (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActiveService(service)}
                    className={`w-full text-left rounded-2xl border px-4 py-5 transition-all duration-200 ${
                      isActive
                        ? "border-accent bg-accent/10 shadow-card"
                        : "border-border bg-card/60 hover:border-accent/60"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`mt-1 w-10 h-10 rounded-full flex items-center justify-center ${
                          isActive
                            ? "bg-accent text-accent-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <service.icon
                          className={`w-5 h-5 ${
                            isActive ? "text-accent-foreground" : "text-muted-foreground"
                          }`}
                        />
                      </div>
                      <div>
                        {/* <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                          Capability
                        </p> */}
                        <p className="mt-1 font-medium leading-tight">
                          {service.title}
                        </p>
                        {/* <p className="mt-2 text-sm text-muted-foreground">
                          {service.description}
                        </p> */}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div
            key={activeService.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-card/80 rounded-3xl border border-border shadow-card p-6 md:p-8 space-y-6"
          >
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center">
                  <activeService.icon className="w-6 h-6 text-foreground" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-accent font-semibold">
                    Focus Area
                  </p>
                  <h3 className="text-2xl font-display font-semibold">
                    {activeService.title}
                  </h3>
                </div>
              </div>
              <p className="text-base text-muted-foreground">
                {activeService.description}
              </p>
            </div>

            {activeService.detailedDescription && (
              <p className="text-sm leading-relaxed text-muted-foreground">
                {activeService.detailedDescription}
              </p>
            )}

            {activeService.features.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Highlights
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {activeService.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-accent mt-2" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h4 className="font-semibold text-lg">Our Capabilities</h4>
                  {/* <p className="text-sm text-muted-foreground">
                    Toggle between the services we provide and the way we deliver them.
                  </p> */}
                </div>
                {showApproach && (
                  <div className="flex rounded-full border border-border bg-card/60 p-1">
                    {[
                      { key: "capabilities", label: "Our Capabilities" },
                      { key: "approach", label: "Our Approach" },
                    ].map(({ key, label }) => (
                      <button
                        key={key}
                        type="button"
                        onClick={() => setActiveInfoTab(key as "capabilities" | "approach")}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors ${
                          activeInfoTab === key
                            ? "bg-accent text-accent-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {activeInfoTab === "capabilities" || !showApproach ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {activeService.capabilities.map((item) => (
                    <div
                      key={item.title}
                      className="group border border-border/60 rounded-2xl bg-card/50 p-4 hover:border-accent/60 transition-colors"
                    >
                      <h5 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h5>
                      <p className="text-sm text-muted-foreground mt-2">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {activeService.approach.map((item, index) => (
                    <div key={item.title} className="space-y-2">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-[#182534] text-white flex items-center justify-center shadow-card shrink-0 font-semibold">
                          {String(index + 1).padStart(2, "0")}
                        </div>
                        <div className="flex-1 border border-border/60 rounded-2xl bg-card/50 p-4 hover:border-accent/60 transition-colors">
                          <h5 className="text-lg font-semibold text-foreground">
                            {item.title}
                          </h5>
                          <p className="text-sm text-muted-foreground mt-2">
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {index < activeService.approach.length - 1 && (
                        <div className="flex items-center gap-3 text-[#182534]">
                          <span className="h-px flex-1 bg-[#182534]/15" />
                          <div className="w-8 h-8 rounded-full bg-gradient-gold border border-white/30 shadow-card flex items-center justify-center">
                            <ArrowDown className="w-4 h-4" />
                          </div>
                          <span className="h-px flex-1 bg-[#182534]/15" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* <div>
              <h4 className="font-semibold text-lg mb-4">Why clients choose us</h4>
              <div className="space-y-3">
                {activeService.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-secondary/40 p-4"
                  >
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5" />
                    <span className="text-sm text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div> */}

            <div className="flex flex-wrap gap-4 pt-4 border-t border-border">
              <Button
                variant="gold"
                size="lg"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Talk to our team
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              {/* <Button variant="outline" size="lg">
                Download overview
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
