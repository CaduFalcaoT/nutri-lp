import { Check } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div
      className="w-full py-16 [background:linear-gradient(50deg,_#520E1C_22.72%,_#7A1520_99.76%)]"
      id="aboutsection"
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-around px-5 sm:px-8">
        <video
          src="/Video1.mp4"
          playsInline
          controls
          className="hidden aspect-auto h-[645px] w-[360px] rounded-4xl xl:block"
          poster="/poster.jpg"
        ></video>

        <div className="flex flex-col items-center gap-8 xl:items-start">
          <h3 className="text-[7.2vw] text-white/90 sm:text-[5vw] xl:mb-4 xl:text-4xl">
            Sobre Cecília Melo
          </h3>
          <Image
            src="/aboutmobile.png"
            width={360}
            height={280}
            className="aspect-auto w-[90%] object-cover sm:w-[70%] xl:hidden"
            alt="Nutricionísta Cecília Melo"
            quality={100}
          />
          <p className="hidden w-[600px] text-white/90 xl:inline">
            Apaixonada por transformar vidas pela nutrição, Cecília ajuda há 5
            anos pessoas a atingirem seus objetivos com equilíbrio e prazer. Sua
            abordagem personalizada combina nutrição clínica e esportiva,
            baseada em ciência, respeitando a rotina de cada um e promovendo
            resultados leves para saúde, disposição e bem-estar.
          </p>
          <p className="w-full text-justify text-[3.8vw] hyphens-auto text-white/90 sm:text-[2vw] xl:hidden">
            Apaixonada por transformar vidas pela nutrição, Cecília ajuda há 5
            anos pessoas a atingirem seus objetivos com equilíbrio e prazer. Sua
            abordagem personalizada, baseada em ciência, respeita a rotina de
            cada um e promove resultados leves para saúde, disposição e
            bem-estar.
          </p>
          <ul className="flex w-full flex-col space-y-2 text-white/90">
            <li className="flex gap-2">
              <Check /> Resultados sem Restrições
            </li>
            <li className="flex gap-2">
              <Check /> Ciência e Estratégia
            </li>
            <li className="flex gap-2">
              <Check /> Acompanhamento de Perto
            </li>
          </ul>
          <Button variant="secondary" className="mt-4">
            marcar consulta
          </Button>
        </div>
      </div>
    </div>
  );
}
