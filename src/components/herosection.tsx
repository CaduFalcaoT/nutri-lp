import Image from "next/image";
import { Button } from "./ui/button";

export default function HeroSection() {
  return (
    <div className="w-full relative flex h-[632px] items-center">
      <div className="flex flex-col gap-9 items-start">
        <h1
          className="text-5xl font-bold italic"
          style={{
            background: "linear-gradient(86deg, #7A1520 1.95%, #B52A2A 63.52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saúde e desempenho <br /> sem complicar sua rotina
        </h1>
        <p className="text-brand-secondary w-[600px]">
          Nutrição clínica e esportiva para quem treina e busca performance com
          saúde. Unindo ciência e estratégia de forma acessível , sem restrições
          desnecessárias para caber na sua rotina.
        </p>
        <Button className="transition-all duration-300 ease-out">
          marcar consulta
        </Button>
      </div>
      <Image
        src="/Cecilia_Melo_HeroImage.png"
        width={623}
        height={592}
        alt="Cecília Melo hero image"
        quality={100}
        className="absolute bottom-0 right-0"
      />
    </div>
  );
}
