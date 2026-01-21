import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import EmbeddedForm from "@/components/EmbeddedForm";

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

const contactFormUrl =
  "https://forms.office.com/Pages/DesignPageV2.aspx?origin=NeoPortalPage&subpage=design&groupid=17577823-c51a-4689-8bfa-d837b2907835&id=TCVP4JU2iEGM7Tkrky-hnCN4VxcaxYlGi_rYN7KQeDVURjNCVkRVSFRTRFU2S0hQR0dYWUZIM1A0MSQlQCN0PWcu&topview=Preview";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

          {/* Embedded Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card p-6 rounded-2xl shadow-card"
          >
            <EmbeddedForm
              src={contactFormUrl}
              title="Inhance Consulting Contact Form"
              height={720}
              fallbackLabel="Open the contact form"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
