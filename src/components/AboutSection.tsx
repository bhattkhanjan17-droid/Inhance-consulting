import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Lightbulb, Shield } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      // "We embrace modern technologies, emerging tools, and forward thinking approaches to solve complex problems. At Inhance, innovation isn’t just about adopting the latest trends—it’s about applying the right solutions to unlock new possibilities and accelerate digital transformation.",
      "We embrace modern technologies, emerging tools, and forward thinking."
  },
  {
    icon: Shield,
    title: "Collaboration",
    description:
      // "We partner closely with our clients, working as an extension of their teams. By understanding their goals, challenges, and operating realities, we cocreate solutions that are practical, scalable, and aligned with long term success.",
      "We partner closely with our clients, working as an extension of their teams."
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      // "We measure our success by the outcomes we deliver. Every engagement is driven by a commitment to excellence, integrity, and accountability—ensuring our work creates real, measurable value for our clients and their organisations.",
      "We measure our success by the outcomes we deliver."
  },
  {
    icon: Award,
    title: "Execution Excellence",
    description:
      // "We turn ideas into reality through structured delivery, clear ownership, and disciplined project execution. Our focus is on timelines, quality, and accountability — ensuring solutions don’t just look good on paper, but work in practice.",
      "We turn ideas into reality through structured delivery, clear ownership, and disciplined project execution."
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <SectionHeader
              align="left"
              eyebrow="About Us"
              title={
                <>
                  Elevating Businesses to{" "}
                  <span className="text-gradient-gold">New Heights</span>
                </>
              }
              className="max-w-2xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-muted-foreground"
            >
              <span className="font-semibold uppercase tracking-wider">
                Our Philosophy
              </span>
              <p>We believe that technology should enhance human capability — not replace it. 
              Our approach blends deep technical expertise with practical delivery experience, 
              ensuring solutions that are scalable, sustainable, and aligned with real business needs.
              </p>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              <span className="font-semibold uppercase tracking-wider">
                Our Vision
              </span>
              <p>To empower organisations worldwide to make smarter decisions, deliver projects with confidence, 
                and embrace digital transformation through data, technology, and innovation.</p>
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              <span className="font-semibold uppercase tracking-wider">
                Our Misson
              </span>
              <p>Our mission is to deliver insight‑driven solutions, simplify complex challenges 
                through structured project delivery, enable responsible AI adoption, 
                and build trusted partnerships that create measurable, lasting value.</p>
            </motion.p>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <value.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
