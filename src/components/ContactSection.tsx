import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeader from "@/components/SectionHeader";

const contactInfo = [
  {
    icon: Mail,
    label: "For sales or service enquiries",
    value: "Info@inhanceconsulting.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 9429002080",
  },
];

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const ContactSection = () => {
  const ref = useRef(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.error("Missing EmailJS environment variables");
      setStatus("error");
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        formRef.current?.reset();
      })
      .catch((error) => {
        console.error("EmailJS error", error);
        setStatus("error");
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Content */}
          <div>
            <SectionHeader
              align="left"
              eyebrow="Contact Us"
              title={
                <>
                  Let's Start a{" "}
                  <span className="text-gradient-gold">Conversation</span>
                </>
              }
              description="Ready to transform your business? Get in touch with our team to discuss how we can help you achieve your goals."
              className="max-w-2xl"
            />

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {info.label}
                    </div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-card p-8 rounded-2xl shadow-card space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <Input
                    placeholder="John"
                    name="user_name"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Phone Number
                  </label>
                  <Input
                    placeholder="+1 (555) 123-4567"
                    name="user_phone"
                    className="bg-background border-border focus:border-accent focus:ring-accent"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="john@company.com"
                  name="user_email"
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Company
                </label>
                <Input
                  placeholder="Your Company"
                  name="company"
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

               <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Service of Interest
                </label>
                <Input
                  placeholder="Service of Interest"
                  name="service"
                  className="bg-background border-border focus:border-accent focus:ring-accent"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your project..."
                  rows={4}
                  name="message"
                  className="bg-background border-border focus:border-accent focus:ring-accent resize-none"
                />
              </div>

              <div className="space-y-3">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {status === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      {isSubmitting ? "Sending" : "Send Message"}
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
                {status === "error" && (
                  <p className="text-sm text-destructive text-center">
                    Something went wrong. Please try again or email Info@inhanceconsulting.com.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
