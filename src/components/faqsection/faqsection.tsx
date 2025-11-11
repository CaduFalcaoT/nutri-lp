import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqItems = [
  {
    title: "Como funciona o acompanhamento nutricional?",
    description:
      "O acompanhamento é dividido em 4 etapas: um questionário pré-consulta para um atendimento mais estratégico; a consulta com anamnese e avaliação corporal; o recebimento do plano alimentar via app; e o suporte contínuo via WhatsApp para dúvidas e ajustes.",
  },
  {
    title: "Que tipo de objetivo a Cecília pode me ajudar a alcançar?",
    description:
      "Cecília atua tanto na nutrição clínica quanto na esportiva, auxiliando em metas de emagrecimento, hipertrofia e performance, além de lidar com condições como diabetes, refluxo, TPM, doenças autoimunes e intolerância à lactose.",
  },
  {
    title: "Em quanto tempo eu recebo meu plano alimentar?",
    description:
      "O plano alimentar é entregue em até 24 horas após a consulta (ou ao final dela) através do aplicativo exclusivo Webdiet.",
  },
  {
    title: "Existe suporte entre as consultas?",
    description:
      "Sim. Durante todo o período de acompanhamento, você tem suporte via WhatsApp para tirar dúvidas rápidas, pedir ajuda com escolhas, analisar produtos e trocar feedbacks semanais.",
  },
  {
    title: "Qual a duração de uma consulta?",
    description: "As consultas têm uma duração média de 1 hora e 30 minutos.",
  },
];

export default function FaqSection() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center gap-12 px-5 py-16 sm:px-8 xl:flex-row xl:items-start xl:gap-24">
      <Image
        src="/CeciliaMeloFoto2.png"
        width={436}
        height={543}
        className="hidden flex-none rounded-4xl shadow-xl shadow-black/20 xl:inline"
        alt="Cecilia Melo Atendimento Nutricional"
        quality={100}
      />
      <Image
        src="/faqmobile.png"
        width={360}
        height={360}
        className="w-[90%] flex-none rounded-4xl shadow-sm shadow-black/20 sm:hidden"
        alt="Cecilia Melo Atendimento Nutricional"
        quality={100}
      />

      <div className="flex w-full max-w-full flex-col gap-4 xl:pt-10">
        <h3 className="text-brand-primary text-center text-[7.2vw] italic sm:text-[5vw] xl:text-4xl">
          Dúvida Frequentes
        </h3>
        <Accordion type="single" collapsible defaultValue="item-1">
          {faqItems.map((faq, idx) => {
            return (
              <AccordionItem
                key={idx}
                value={`item-${1 + idx}`}
                className="flex"
              >
                <p className="text-brand-primary w-16 flex-none py-2 text-3xl italic">
                  {`0${idx + 1}`}
                </p>
                <div className="flex w-full flex-col">
                  <AccordionTrigger>{faq.title}</AccordionTrigger>
                  <AccordionContent>{faq.description}</AccordionContent>
                </div>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
