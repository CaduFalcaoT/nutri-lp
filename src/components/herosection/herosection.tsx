import Image from "next/image";
import { Button } from "../ui/button";
import Review from "./review";
import CircularText from "../ui/circulartext";

export default function HeroSection() {
  return (
    <div className="relative mx-auto flex h-[632px] w-full max-w-[1280px] items-center p-8">
      <div className="absolute top-0 left-0 -z-1 -mt-[50%] -ml-[15%] h-[678px] w-[1000px] rounded-full bg-[#FF6B6B] opacity-40 [filter:blur(130px)]"></div>
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
      <span className="group absolute top-0 right-0 z-10 -mt-12">
        <CircularText
          text="Cecília Melo * Nutricionista * "
          onHover="slowDown"
          spinDuration={20}
          className="custom-class z-11 uppercase opacity-90"
        />
        <Image
          src="/icone_logomarca.png"
          width={64}
          height={64}
          className="absolute top-1/2 left-[calc(50%-1px)] -z-1 -translate-1/2 cursor-pointer opacity-75 transition-transform duration-500 ease-out group-hover:scale-120"
          alt="icone logomarca"
          quality={1}
        />
      </span>
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
