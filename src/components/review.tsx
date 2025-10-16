import { Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function Review() {
  return (
    <div className="flex gap-2 items-center -mb-4">
      <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2">
        <Avatar>
          <AvatarImage src="https://lh3.googleusercontent.com/a-/ALV-UjUP6UBLg1aqMHE6XDi61EcSJ_HPHlpxWDPMDEL7bv3yBSAIvoi8=w90-h90-p-rp-mo-br100" />
          <AvatarFallback>MC</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://lh3.googleusercontent.com/a/ACg8ocJyhiWJISV6S4fCjHwcvwh16xjtzAHq3ApuW91nwq0l3uc5GQ=s64-c-rp-mo-br100" />
          <AvatarFallback>M</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://lh3.googleusercontent.com/a-/ALV-UjXTHJdHG3hclG6xJ1YcD-6YRTWjl_DocPkr91pQBH3FzPck6lhvXw=s64-c-rp-mo-br100" />
          <AvatarFallback>MF</AvatarFallback>
        </Avatar>
      </div>
      <div className="flex flex-col gap-0.5">
        <div className="flex">
          <Star className="fill-amber-500 stroke-amber-500" />
          <Star className="fill-amber-500 stroke-amber-500" />
          <Star className="fill-amber-500 stroke-amber-500" />
          <Star className="fill-amber-500 stroke-amber-500" />
          <Star className="fill-amber-500 stroke-amber-500" />
        </div>
        <p className="italic text-xs uppercase text-brand-primary opacity-90">
          4.99 Avaliado no google
        </p>
      </div>
    </div>
  );
}
