import SingleTestimonial from "./singletestimonial";

const testimonialsContent = [
  {
    userName: "Marcelo Correa",
    description:
      "Consulta muito boa, muito atenta a todas minhas demandas e vontades. Dieta muito fácil de seguir!",
    profilePictureURL: "",
    stars: 5,
  },
  {
    userName: "Marcelo Correa",
    description:
      "Consulta muito boa, muito atenta a todas minhas demandas e vontades. Dieta muito fácil de seguir!",
    profilePictureURL: "",
    stars: 5,
  },
  {
    userName: "Marcelo Correa",
    description:
      "Consulta muito boa, muito atenta a todas minhas demandas e vontades. Dieta muito fácil de seguir!",
    profilePictureURL: "",
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
