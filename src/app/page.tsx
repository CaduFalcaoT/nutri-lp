import AboutSection from "@/components/aboutsection/aboutsection";
import Header from "@/components/header";
import HeroSection from "@/components/herosection/herosection";

export default function Home() {
  return (
    <div className="flex-col justify-center">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
