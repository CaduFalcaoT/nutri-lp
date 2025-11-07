import { Button } from "../ui/button";

export default function CtaSection() {
  return (
    <div className="mx-auto flex w-full lg:px-8">
      <div className="flex h-[464px] w-full flex-col items-center justify-center gap-12 bg-[radial-gradient(81.38%_100%_at_50%_0%,_#8C1A27_0%,_#270509_100%)] px-8 lg:gap-16 lg:rounded-4xl">
        <h3 className="text-center text-[8vw] leading-tight font-bold text-white/90 italic lg:text-start lg:text-[40px] lg:leading-none">
          Pronto para começar a sua mudança?
        </h3>
        <Button variant="secondary">Agendar Agora</Button>
      </div>
    </div>
  );
}
