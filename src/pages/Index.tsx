import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import PillarsSection from "@/components/PillarsSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import CategoriesSection from "@/components/CategoriesSection";
import ContactSection from "@/components/ContactSection";
import PartnersSection from "@/components/PartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <PillarsSection />
      <BenefitsSection />
      <ProcessSection />
      <CategoriesSection />
      <ContactSection />
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default Index;
