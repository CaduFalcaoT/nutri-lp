import Image from "next/image";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-[1280px] px-5 pt-8 lg:px-8">
      <Image
        src="/logotipo.png"
        alt="logo"
        height={65}
        width={284}
        quality={100}
        className="aspect-auto w-[200px] lg:w-[284px]"
      />
    </header>
  );
}
