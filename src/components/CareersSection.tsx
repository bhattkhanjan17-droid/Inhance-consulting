import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import EmbeddedForm from "@/components/EmbeddedForm";

const careersEmail = "careers@inhanceconsultiing.com";

type JobDetailSection = {
  title: string;
  items: string[];
};

type JobOpening = {
  title: string;
  location: string;
  type: string;
  summary: string;
  roleSummary?: string;
  experience?: string[];
  qualifications?: string[];
  detailSections?: JobDetailSection[];
  mustHave?: string[];
  responsibilities?: string[];
  requirements?: string[];
};

const jobOpenings: JobOpening[] = [
  {
    title: "PMO – Finance Analyst",
    location: "London, UK (Hybrid)",
    type: "Full-time",
    summary:
      "Support enterprise PMO finance governance by translating delivery metrics into actionable insights and executive-ready reporting.",
    roleSummary:
      "The PMO – Finance Analyst supports project and portfolio financial management by planning, tracking, and analyzing costs. The role partners with project managers, finance teams, vendors, and senior stakeholders to ensure effective financial planning, performance management, and decision support.",
    experience: [
      "Minimum 3 years of relevant experience in PMO finance, project finance, or financial analysis roles",
    ],
    qualifications: [
      "MBA (Finance)",
      "CA / ICWA / Cost Accountant (or equivalent professional qualification)",
    ],
    detailSections: [
      {
        title: "Planning & Forecasting",
        items: [
          "Support project and portfolio financial planning and forecasting",
          "Prepare and maintain budgets, forecasts, and financial plans",
          "Track actual costs against approved budgets",
        ],
      },
      {
        title: "Cost Performance & Variance Analysis",
        items: [
          "Monitor cost performance across projects and portfolios",
          "Perform variance analysis (budget vs. actual vs. forecast)",
          "Identify financial risks, trends, and improvement opportunities",
          "Support performance management and financial reviews",
        ],
      },
      {
        title: "Contract & Vendor Management",
        items: [
          "Create and manage purchase orders (POs)",
          "Track contract values, spend, and vendor payments",
          "Coordinate with vendors on invoicing and compliance",
          "Ensure adherence to financial and procurement policies",
        ],
      },
      {
        title: "Stakeholder Management",
        items: [
          "Partner with project managers, PMO, finance, and procurement teams",
          "Engage with senior business stakeholders on financial performance",
          "Prepare and present financial reports, dashboards, and insights",
          "Support leadership decision-making with accurate financial data",
        ],
      },
    ],
    mustHave: [
      "Strong experience in planning, forecasting, and performance management",
      "Advanced proficiency in MS Excel (advanced formulas, pivot tables, data analysis)",
      "Hands-on experience with Power BI for dashboards and reporting",
      "Strong verbal and written communication skills",
      "Experience working with senior business stakeholders",
      "High attention to detail with strong analytical and problem-solving skills",
    ],
  },
];

const CareersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);

  const careersFormUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScNbftzSYiWqfrIplXZ2wJA40Tf5h9Vu8sMwxcsqKAwpgpIeQ/viewform?pli=1";

  return (
    <section id="careers" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <SectionHeader
              align="left"
              eyebrow="Careers"
              title="Join Our Team"
              description="We’re always looking for talented individuals who are passionate about data, technology, and delivery excellence."
              className="max-w-2xl"
            />
            <div className="mt-4 text-md text-muted-foreground">
              Directly Email your CV to
              <a
                href={`mailto:${careersEmail}`}
                className="inline-flex items-center gap-1 font-semibold ml-2"
              >
                <Mail className="w-4 h-4" />
                {careersEmail}
              </a>
            </div>

            {/* Open Roles */}
            <div className="mt-8 space-y-6">
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="border border-border rounded-2xl bg-card/60 p-6 hover:border-accent/60 transition-colors"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[0.65rem] uppercase tracking-[0.4em] text-muted-foreground mb-1">
                        Open Role
                      </p>
                      <h3 className="text-lg font-semibold text-foreground">
                        {job.title}
                      </h3>
                    </div>
                    <Button variant="hero-outline" onClick={() => setActiveJob(job)}>
                      View Details
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Careers Form Embed */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card p-6 rounded-3xl shadow-card border border-border"
          >
            <EmbeddedForm
              src={careersFormUrl}
              title="Inhance Consulting Careers Form"
              height={760}
              fallbackLabel="Open the careers application form"
            />
          </motion.div>
        </div>
      </div>

      <Dialog open={!!activeJob} onOpenChange={() => setActiveJob(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          {activeJob && (
            <div className="space-y-6 overflow-x-auto">
              <DialogHeader>
                <DialogTitle>{activeJob.title}</DialogTitle>
                <DialogDescription className="flex flex-wrap gap-4 text-sm">
                  {/* <span className="inline-flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {activeJob.location}
                  </span> */}
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="w-4 h-4" />
                    {activeJob.type}
                  </span>
                </DialogDescription>
              </DialogHeader>

              {activeJob.roleSummary && (
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {activeJob.roleSummary}
                </p>
              )}

              {(activeJob.experience?.length || activeJob.qualifications?.length) && (
                <div className="grid gap-6 md:grid-cols-2">
                  {activeJob.experience?.length && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Experience
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {activeJob.experience.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {activeJob.qualifications?.length && (
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                        Qualifications
                      </h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {activeJob.qualifications.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-accent">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {activeJob.detailSections?.map((section) => (
                <div key={section.title}>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    {section.title}
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {activeJob.responsibilities?.length && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {activeJob.responsibilities.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeJob.requirements?.length && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {activeJob.requirements.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeJob.mustHave?.length && (
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground mb-3">
                    Must-Have Skills & Experience
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {activeJob.mustHave.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-accent">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button variant="hero-outline" onClick={() => setActiveJob(null)}>
                  Close
                </Button>
                <Button variant="gold" asChild>
                  <a href={careersFormUrl} target="_blank" rel="noreferrer">
                    Open careers form
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CareersSection;
