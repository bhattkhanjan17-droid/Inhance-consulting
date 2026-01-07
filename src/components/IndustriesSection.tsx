import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const industries = [
  {
    title: "Retail & E-commerce",
    description:
      "Design personalised, data-rich shopping journeys that keep inventory, fulfillment, and loyalty in sync.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Modernise patient, clinical, and operational workflows with compliant automation and trusted insights.",
  },
  {
    title: "Finance & Insurance",
    description:
      "Strengthen risk, compliance, and customer experiences through intelligent analytics and secure platforms.",
  },
  {
    title: "Manufacturing & Logistics",
    description:
      "Connect plants, partners, and supply chains with predictive visibility and resilient operations.",
  },
  {
    title: "Education & EdTech",
    description:
      "Enable adaptive learning and modern campus experiences with data-led platforms and automation.",
  },
];

const IndustriesSection = () => {
  return (
    <section id="industries" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Sector Expertise that Scales"
          description="We pair deep industry knowledge with proven delivery frameworks so every recommendation is grounded in the realities of your market, customers, and regulation."
          className="mb-16 max-w-3xl"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="rounded-3xl border border-border bg-card/70 p-6 shadow-card/50"
            >
              {/* <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Industry
              </p> */}
              <h3 className="mt-2 text-xl font-semibold">{industry.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
