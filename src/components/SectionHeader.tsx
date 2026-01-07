import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  tone?: "default" | "onDark";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

const toneStyles = {
  default: {
    title: "text-foreground",
    description: "text-muted-foreground",
  },
  onDark: {
    title: "text-primary-foreground",
    description: "text-primary-foreground/80",
  },
};

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  tone = "default",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName,
}: SectionHeaderProps) => {
  const alignmentClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={cn("space-y-4", alignmentClasses, className)}>
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-flex items-center justify-center rounded-full px-5 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.45em] text-background bg-gradient-gold border border-white/10 backdrop-blur-sm",
            align === "center" ? "mx-auto" : "",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className={cn(
          "mt-4 text-3xl md:text-4xl lg:text-5xl font-display font-bold",
          toneStyles[tone].title,
          titleClassName
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={cn(
            "text-base md:text-lg leading-relaxed",
            align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl",
            toneStyles[tone].description,
            descriptionClassName
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeader;
