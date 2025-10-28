import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cecília Melo - Nutricionista",
  description: "Atendimento Nutricional Clínico e Esportivo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`font-[Nexa] antialiased`}>{children}</body>
    </html>
  );
}
