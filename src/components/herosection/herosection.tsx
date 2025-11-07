import Image from "next/image";
import { Button } from "../ui/button";
import Review from "./review";
import Submarca from "./submarca";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1280px] items-center p-5 py-8 lg:h-[632px] lg:p-8">
      <div className="absolute top-0 left-0 -z-1 -mt-[50%] -ml-[15%] hidden h-[678px] w-[1000px] rounded-full bg-[#FF6B6B] opacity-40 [filter:blur(130px)] lg:flex"></div>
      <div className="absolute top-0 left-0 -z-1 -mt-[60%] -ml-[10%] h-[300px] w-[424px] rounded-full bg-[#FF6B6B] opacity-50 [filter:blur(100px)] lg:hidden"></div>
      <div className="flex flex-col items-center gap-9 py-5 lg:items-start lg:py-0">
        <Review />
        <h1
          className="text-center text-[7.2vw] leading-tight font-bold italic lg:text-start lg:text-5xl lg:leading-none"
          style={{
            background: "linear-gradient(86deg, #7A1520 1.95%, #B52A2A 63.52%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Saúde e desempenho <br /> sem complicar sua rotina
        </h1>
        <p className="text-brand-secondary hidden w-[600px] lg:inline">
          Nutrição clínica e esportiva para quem treina e busca performance com
          saúde. Unindo ciência e estratégia de forma acessível , sem restrições
          desnecessárias para caber na sua rotina.
        </p>
        <p className="text-brand-secondary -mt-4 max-w-full text-center text-[3.8vw] hyphens-auto lg:hidden">
          Nutrição clínica e esportiva, com método prático e acessível, sem
          restrições e exageros.
        </p>
        <video
          src="/Video1.mp4"
          playsInline
          controls
          poster="/postermobile.png"
          className="bg-brand-secondary aspect-video w-full rounded-4xl lg:hidden"
        ></video>
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
      <Submarca />
      <Image
        src="/Cecilia_Melo_HeroImage.png"
        width={623}
        height={592}
        alt="Cecília Melo heroimage"
        quality={100}
        className="absolute right-0 bottom-0 hidden lg:block"
      />
    </div>
  );
}
