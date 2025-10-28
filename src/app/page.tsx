import AboutSection from "@/components/aboutsection/aboutsection";
import CtaSection from "@/components/ctasection/ctasection";
import FaqSection from "@/components/faqsection/faqsection";
import FeaturesSection from "@/components/featuressection/featuressection";
import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/herosection/herosection";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home() {
  return (
    <div className="flex-col justify-center">
      <Header />
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <Testimonials />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
