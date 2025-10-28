import SingleTestimonial from "./singletestimonial";

const testimonialsContent = [
  {
    userName: "Marcelo Correa",
    description:
      "Consulta muito boa, muito atenta a todas minhas demandas e vontades. Dieta muito fácil de seguir!",
    profilePictureURL:
      "https://lh3.googleusercontent.com/a-/ALV-UjUP6UBLg1aqMHE6XDi61EcSJ_HPHlpxWDPMDEL7bv3yBSAIvoi8=w90-h90-p-rp-mo-br100",
    stars: 5,
  },
  {
    userName: "Milena Mello",
    description:
      "Ciça é uma nutricionista maravilhosa! Extremamente dedicada, empática, humana e competente.",
    profilePictureURL:
      "https://lh3.googleusercontent.com/a/ACg8ocJyhiWJISV6S4fCjHwcvwh16xjtzAHq3ApuW91nwq0l3uc5GQ=s64-c-rp-mo-br100",
    stars: 5,
  },
  {
    userName: "Maria Fernanda Andrade",
    description: "Excelente em tudo que faz 👏👏👏 e o consultório é lindo!",
    profilePictureURL:
      "https://lh3.googleusercontent.com/a-/ALV-UjXTHJdHG3hclG6xJ1YcD-6YRTWjl_DocPkr91pQBH3FzPck6lhvXw=s64-c-rp-mo-br100",
    stars: 5,
  },
];

export type Testimonial = (typeof testimonialsContent)[0];

export default function Testimonials() {
  return (
    <div className="bg-brand-card w-full rounded-b-4xl py-16 shadow-xl">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col items-start gap-8 px-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-brand-secondary text-4xl italic">
            Aprovado por Quem Confia
          </h2>
          <p className="text-brand-secondary text-sm">
            Nossa maior recompensa é a satisfação dos nossos pacientes.
            <br /> Confira o que eles estão dizendo no Google.
          </p>
        </div>
        <div className="flex w-full gap-5">
          {testimonialsContent.map((t) => (
            <SingleTestimonial key={t.userName} testimonial={t} />
          ))}
        </div>
      </div>
    </div>
  );
}
