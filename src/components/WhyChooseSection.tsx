import { motion } from "framer-motion";
import { Handshake, ShieldCheck, BarChart3, Sparkles } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const differentiators = [
  {
    icon: Handshake,
    title: "Transparent and collaborative process",
    description:
      "We work in the open, share progress frequently, and co-create every milestone with your stakeholders.",
  },
  {
    icon: Sparkles,
    title: "Proven expertise in AI and data science",
    description:
      "Specialists across strategy, engineering, and design help you unlock value from advanced analytics quickly.",
  },
  {
    icon: BarChart3,
    title: "Scalable solutions tailored to your growth",
    description:
      "Modular architectures and operating models mean your programmes can expand without losing control.",
  },
  {
    icon: ShieldCheck,
    title: "Ethical and responsible AI practices",
    description:
      "Governance frameworks ensure your innovation remains secure, compliant, and trustworthy.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-choose-us" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          eyebrow="Why Choose Inhance"
          title="Confidence at Every Step"
          description="Our teams plug in wherever you need them—ensuring programmes are visible, measurable, and ethically delivered from day one."
          className="max-w-2xl mb-14"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group rounded-3xl border border-border bg-card/70 p-6 shadow-card/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold flex-1">{item.title}</h3>
              </div>
              {/* <p className="mt-3 text-sm text-muted-foreground">{item.description}</p> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
