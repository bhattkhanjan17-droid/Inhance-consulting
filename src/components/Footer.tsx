import { motion } from "framer-motion";
import { Linkedin, Twitter, Instagram, ArrowUp } from "lucide-react";
import InhanceLogo from "@/images/Inhance.png";

const footerLinks = {
  company: [
    { label: "About Us", href: "#about" },
    { label: "Careers", href: "#careers" },
  ],
  services: [
    { label: "Retail & E-commerce", href: "#services" },
    { label: "Healthcare & Life Sciences", href: "#services" },
    { label: "Finance & Insurance", href: "#services" },
    { label: "Manufacturing & Logistics", href: "#services" },
    { label: "Education & EdTech", href: "#services" },
  ],
  resources: [
    { label: "Case Studies", href: "#case-studies" },
    // { label: "Insights", href: "#" },
    // { label: "Events", href: "#" },
    { label: "Contact", href: "#contact" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    if (href === "#") return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#182534] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src={InhanceLogo}
                alt="Inhance Consulting logo"
                className="h-10 w-auto drop-shadow-sm"
                loading="lazy"
                style={{ height: "65px" }}
              />
            </div>
            <p className="text-white/70 max-w-sm mb-6">
              Empowering organizations to reach their full potential through
              strategic consulting and innovative solutions.
            </p>
            {/* <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-[#182534] transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Inhance Consulting. All rights reserved.
          </p>
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-sm text-white/70 hover:text-accent transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
