import { Check } from "lucide-react";
import { Button } from "../ui/button";

export default function AboutSection() {
  return (
    <div className="w-full py-16 [background:linear-gradient(50deg,_#520E1C_22.72%,_#7A1520_99.76%)]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-around px-8">
        <video
          src="/Video1.mp4"
          playsInline
          controls
          className="aspect-auto h-[645px] w-[360px] rounded-4xl"
          poster="/poster.jpg"
        ></video>
        <div className="flex flex-col items-start gap-8">
          <h3 className="mb-4 text-4xl text-white/90">Sobre Cecília Melo</h3>
          <p className="w-[600px] text-white/90">
            Apaixonada por transformar vidas pela nutrição, Cecília ajuda há 5
            anos pessoas a atingirem seus objetivos com equilíbrio e prazer. Sua
            abordagem personalizada combina nutrição clínica e esportiva,
            baseada em ciência, respeitando a rotina de cada um e promovendo
            resultados leves para saúde, disposição e bem-estar.
          </p>
          <ul className="space-y-2 text-white/90">
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
