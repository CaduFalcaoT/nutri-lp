import { FileChartLine, MessageCircle, Smartphone, Target } from "lucide-react";
import SpotlightCard from "./featurecard";
import { Button } from "../ui/button";

export default function FeaturesSection() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col px-8 py-16">
      <h2 className="text-brand-secondary text-4xl italic">
        A Estratégia por Trás dos Seus Resultados
      </h2>
      <div className="flex w-full gap-5 py-16">
        <SpotlightCard
          className="custom-spotlight-card group"
          spotlightColor="rgba(255, 255, 255, 0.4)"
        >
          <Target className="z-10 size-16 stroke-[1.5px] text-[#E0273B]" />
          <h3 className="text-brand-primary z-10 text-base font-bold">
            Atendimento Completo
          </h3>{" "}
          <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90">
            Seja qual for a sua meta (emagrecimento, hipertrofia, performance)
            ou desafio (diabetes, TPM, refluxo, intolerâncias), Cecília oferece
            um cuidado que une as frentes clínica e esportiva para atender você
            por inteiro.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card group"
          spotlightColor="rgba(255, 255, 255, 0.4)"
        >
          <Smartphone className="z-10 size-16 stroke-[1.5px] text-[#E0273B]" />
          <h3 className="text-brand-primary z-10 text-base font-bold">
            Seu Plano na Palma da Mão
          </h3>{" "}
          <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90">
            Receba seu plano alimentar em até 24h via aplicativo exclusivo.
            Nele, você pode consultar e acompanhar sua evolução de forma
            prática, a qualquer hora e em qualquer lugar
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card group"
          spotlightColor="rgba(255, 255, 255, 0.4)"
        >
          <MessageCircle className="z-10 size-16 stroke-[1.5px] text-[#E0273B]" />
          <h3 className="text-brand-primary z-10 text-base font-bold">
            Continuidade via WhatsApp
          </h3>{" "}
          <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90">
            O acompanhamento não termina na consulta. Você terá um canal direto
            com Cecília via WhatsApp para tirar dúvidas do dia a dia, pedir
            ajuda no mercado, analisar rótulos, fazer ajustes no plano e
            compartilhar sua evolução.
          </p>
        </SpotlightCard>
        <SpotlightCard
          className="custom-spotlight-card group"
          spotlightColor="rgba(255, 255, 255, 0.4)"
        >
          <FileChartLine className="z-10 size-16 stroke-[1.5px] text-[#E0273B]" />
          <h3 className="text-brand-primary z-10 text-base font-bold">
            Avaliação Corporal Detalhada
          </h3>{" "}
          <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90">
            Acompanhamento preciso da sua evolução. A avaliação presencial
            inclui bioimpedância (Inbody 120) e dobras cutâneas (método ISAK).
            Online, a análise é realizada através do envio de fotos.
          </p>
        </SpotlightCard>
      </div>
      <div className="flex w-full justify-between">
        {" "}
        <p className="text-brand-primary max-w-[460px] text-justify italic">
          Seu resultado começa com o primeiro passo. Envie uma mensagem pelo
          WhatsApp e agende sua consulta para começarmos essa jornada juntos
        </p>
        <Button className="transition-all duration-300 ease-out [background:linear-gradient(257deg,#7A1520_4.53%,#FF5858_95.06%)] hover:[background:linear-gradient(257deg,#9C1E28_4.53%,#FF6B6B_95.06%)]">
          marcar consulta
        </Button>
      </div>
    </div>
  );
}
