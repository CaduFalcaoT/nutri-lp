import AboutSection from "@/components/aboutsection/aboutsection";
import FaqSection from "@/components/faqsection/faqsection";
import FeaturesSection from "@/components/featuressection/featuressection";
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
    </div>
  );
}
