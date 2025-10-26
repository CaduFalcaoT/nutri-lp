import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1280px] px-8 pt-8">
      <Image
        src="/logotipo.png"
        alt="logo"
        height={65}
        width={284}
        quality={80}
      />
    </header>
  );
}
