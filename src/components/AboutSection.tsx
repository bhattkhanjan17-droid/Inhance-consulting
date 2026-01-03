import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Globe, Lightbulb, Shield } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "We embrace cutting-edge methodologies to solve complex business challenges.",
  },
  {
    icon: Shield,
    title: "Trusted Partnership",
    description:
      "Building long-term relationships based on transparency and mutual success.",
  },
  {
    icon: Globe,
    title: "Global Perspective",
    description:
      "Leveraging worldwide insights while understanding local market dynamics.",
  },
  {
    icon: Award,
    title: "Excellence Driven",
    description:
      "Committed to delivering exceptional results that exceed expectations.",
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent font-semibold uppercase tracking-wider text-sm">
                About Us
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-bold">
                Elevating Businesses to{" "}
                <span className="text-gradient-gold">New Heights</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Founded in 2008, Ascend Consulting has grown from a boutique
              advisory firm to a leading global consultancy. We've helped
              hundreds of organizations navigate complex transformations and
              achieve sustainable growth.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground"
            >
              Our team of seasoned professionals brings diverse expertise across
              industries, combining strategic vision with practical execution to
              deliver measurable results for our clients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-2 gap-6 pt-4"
            >
              <div className="space-y-1">
                <div className="text-3xl font-display font-bold text-foreground">
                  500+
                </div>
                <div className="text-sm text-muted-foreground">
                  Clients Worldwide
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-display font-bold text-foreground">
                  35+
                </div>
                <div className="text-sm text-muted-foreground">
                  Countries Served
                </div>
              </div>
            </motion.div>
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
