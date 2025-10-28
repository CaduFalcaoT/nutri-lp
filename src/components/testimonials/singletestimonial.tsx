import { Quote, Star } from "lucide-react";
import { type Testimonial } from "./testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
export default function SingleTestimonial({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  const starsRange = [...Array(Math.round(testimonial.stars)).keys()];
  return (
    <div className="flex w-full flex-col justify-between gap-5 p-4">
      <div className="space-y-5">
        <Quote className="text-brand-secondary size-8 stroke-[1.5px]" />
        <p className="text-brand-secondary italic">{testimonial.description}</p>
      </div>

      <div className="flex items-center gap-2">
        <Avatar className="size-12">
          <AvatarImage src={testimonial.profilePictureURL} />
          <AvatarFallback className="bg-brand-secondary">
            {testimonial.userName[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-0.5">
          <p className="text-brand-secondary text-sm italic">
            {testimonial.userName}
          </p>
          <span className="flex">
            {starsRange.map((i) => (
              <Star
                className="size-4 fill-amber-500 stroke-amber-500 shadow-lg"
                key={i}
              />
            ))}
          </span>
        </div>
      </div>
    </div>
  );
}
