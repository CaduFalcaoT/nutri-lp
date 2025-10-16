import Header from "@/components/header";
import HeroSection from "@/components/herosection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[1280px] mx-auto p-8 flex-col justify-center">
      <Header />
      <HeroSection />
    </div>
  );
}
