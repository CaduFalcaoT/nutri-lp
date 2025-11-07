"use client";

import Image from "next/image";
import CircularText from "../ui/circulartext";

export default function Submarca() {
  return (
    <span
      className="group absolute top-0 right-0 z-10 -mt-12 hidden lg:block"
      onClick={() =>
        document
          .getElementById("aboutsection")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <CircularText
        text="Cecília Melo * Nutricionista * "
        onHover="slowDown"
        spinDuration={30}
        className="custom-class z-11 uppercase opacity-90"
      />
      <Image
        src="/icone_logomarca.png"
        width={64}
        height={64}
        className="absolute top-1/2 left-[calc(50%-1px)] -z-1 -translate-1/2 cursor-pointer opacity-60 transition-transform duration-600 ease-out group-hover:scale-120"
        alt="icone logomarca"
        quality={100}
      />
    </span>
  );
}
