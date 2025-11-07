"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  // Mostrar o botão apenas quando o usuário rolar para baixo
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* if (!visible) return null; */

  return (
    <button
      onClick={scrollToTop}
      className={`bg-brand-secondary hover:bg-brand-secondary/90 fixed right-6 bottom-6 z-50 flex size-14 cursor-pointer items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 hover:scale-110 lg:size-12 ${visible ? "" : "pointer-events-none opacity-0"}`}
      aria-label="Voltar ao topo"
    >
      <ArrowUp className="size-6" />
    </button>
  );
}
