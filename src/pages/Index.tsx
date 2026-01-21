import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import CareersSection from "@/components/CareersSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CaseStudiesSection />
      <WhyChooseSection />
      <CareersSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
