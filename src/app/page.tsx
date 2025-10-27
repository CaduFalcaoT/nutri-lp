import AboutSection from "@/components/aboutsection/aboutsection";
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
    </div>
  );
}
