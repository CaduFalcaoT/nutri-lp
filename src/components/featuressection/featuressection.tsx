import FeatureCard from "./featurecard";
import { Button } from "../ui/button";
import {
  IconFileChartLine,
  IconGradientDefs,
  IconMessageCircle,
  IconSmartphone,
  IconTarget,
} from "./icons";

export default function FeaturesSection() {
  return (
    <>
      <IconGradientDefs />
      <div className="mx-auto flex w-full max-w-[1280px] flex-col px-5 py-16 sm:px-8">
        <h2 className="text-brand-secondary text-center text-[7.2vw] italic sm:text-[5vw] xl:text-start xl:text-4xl">
          A Estratégia por Trás dos Seus Resultados
        </h2>
        <div className="flex w-full flex-col gap-5 py-10 xl:flex-row xl:py-16">
          <FeatureCard
            title="Atendimento Completo"
            description="Seja qual for a sua meta (emagrecimento, hipertrofia, performance)
            ou desafio (diabetes, TPM, refluxo, intolerâncias), Cecília integra
            cuidado clínico e esportivo para você."
            icon={<IconTarget className="z-10 size-14 xl:size-16" />}
          />
          <FeatureCard
            title="Seu Plano na Palma da Mão"
            description="Receba seu plano alimentar em até 24h via aplicativo exclusivo.
            Nele, você pode consultar e acompanhar sua evolução de forma
            prática, a qualquer hora e em qualquer lugar"
            icon={<IconSmartphone className="z-10 size-14 xl:size-16" />}
          />
          <FeatureCard
            title="Continuidade via WhatsApp"
            description="Conte com um canal direto com Cecília pelo WhatsApp para tirar
            dúvidas do dia a dia, pedir ajuda no mercado, analisar rótulos,
            fazer ajustes no plano e compartilhar sua evolução."
            icon={<IconMessageCircle className="z-10 size-14 xl:size-16" />}
          />
          <FeatureCard
            title="Avaliação Corporal Detalhada"
            description="Acompanhamento preciso da sua evolução. A avaliação presencial
            inclui bioimpedância (Inbody 120) e dobras cutâneas (ISAK). Online,
            a análise é realizada via envio de fotos."
            icon={<IconFileChartLine className="z-10 size-14 xl:size-16" />}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-8 xl:flex-row xl:items-start xl:gap-0">
          {" "}
          <p className="text-brand-primary max-w-[460px] text-justify text-[3.6vw] italic sm:text-[2vw] xl:text-base">
            Seu resultado começa com o primeiro passo. Envie uma mensagem pelo
            WhatsApp e agende sua consulta para começarmos essa jornada juntos
          </p>
          <Button className="transition-all duration-300 ease-out xl:[background:linear-gradient(257deg,#7A1520_4.53%,#FF5858_95.06%)] xl:hover:[background:linear-gradient(257deg,#9C1E28_4.53%,#FF6B6B_95.06%)]">
            marcar consulta
          </Button>
        </div>
      </div>
    </>
  );
}
