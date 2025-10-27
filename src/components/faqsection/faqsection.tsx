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
      "O acompanhamento é dividido em 4 etapas: um questionário pré-consulta para um atendimento mais estratégico; a consulta com anamnese e avaliação corporal; o recebimento do plano alimentar via app; e o suporte contínuo via WhatsApp para dúvidas e ajustes.",
  },
  {
    title: "Em quanto tempo eu recebo meu plano alimentar?",
    description:
      "O acompanhamento é dividido em 4 etapas: um questionário pré-consulta para um atendimento mais estratégico; a consulta com anamnese e avaliação corporal; o recebimento do plano alimentar via app; e o suporte contínuo via WhatsApp para dúvidas e ajustes.",
  },
  {
    title: "Existe suporte entre as consultas?",
    description:
      "O acompanhamento é dividido em 4 etapas: um questionário pré-consulta para um atendimento mais estratégico; a consulta com anamnese e avaliação corporal; o recebimento do plano alimentar via app; e o suporte contínuo via WhatsApp para dúvidas e ajustes.",
  },
  {
    title: "Qual a duração de uma consulta?",
    description:
      "O acompanhamento é dividido em 4 etapas: um questionário pré-consulta para um atendimento mais estratégico; a consulta com anamnese e avaliação corporal; o recebimento do plano alimentar via app; e o suporte contínuo via WhatsApp para dúvidas e ajustes.",
  },
];

export default function FaqSection() {
  return (
    <div className="mx-auto flex w-full max-w-[1280px] items-start gap-24 px-8 py-16">
      <Image
        src="/CeciliaMeloFoto2.png"
        width={436}
        height={543}
        className="flex-none rounded-4xl shadow-xl shadow-black/20"
        alt="Cecilia Melo Atendimento Nutricional"
        quality={100}
      />
      <div className="flex w-full max-w-full flex-col gap-4 pt-10">
        <h3 className="text-brand-primary text-4xl italic">
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
