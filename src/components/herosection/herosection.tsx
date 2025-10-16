import Image from "next/image";
import { Button } from "../ui/button";
import Review from "./review";
import CircularText from "../ui/circulartext";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex h-[632px] w-full max-w-[1280px] items-center p-8">
      <div className="bg-brand-secondary absolute top-0 left-0 -z-1 -mt-[50%] -ml-[30%] h-[678px] w-[1000px] rounded-full opacity-20 [filter:blur(130.6999969482422px)]"></div>
      <div className="flex flex-col items-start gap-9">
        <Review />
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
        src="/submarca.png"
        width={190}
        height={190}
        alt="Nutricionista Logomarca"
        quality={100}
        className="absolute top-0 right-0 z-10 -mt-10 hidden animate-[spin_30s_linear_infinite]"
      />
      <CircularText
        text="Cecília Melo * Nutricionista * "
        onHover="speedUp"
        spinDuration={20}
        className="custom-class absolute top-0 right-0 z-10 -mt-12 uppercase opacity-90"
      />
      <Image
        src="/Cecilia_Melo_HeroImage.png"
        width={623}
        height={592}
        alt="Cecília Melo heroimage"
        quality={100}
        className="absolute right-0 bottom-0"
      />
    </div>
  );
}
