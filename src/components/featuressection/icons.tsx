// Defina um ID único para o seu gradiente
const gradientId = "icon-stroke-gradient";

type IconProps = React.ComponentProps<"svg">;

// Crie um componente para renderizar as definições do gradiente SVG
// (Ele fica oculto, mas o ID fica disponível para os ícones usarem)
export function IconGradientDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }}>
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="100%" y2="0%">
          {/* Suas cores: de bl (#7A1520) para tr (#FF5858) */}
          <stop offset="0%" style={{ stopColor: "#7A1520" }} />
          <stop offset="100%" style={{ stopColor: "#FF5858" }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function IconTarget(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`} // Aplicado aqui
      strokeWidth="1.5" // Aplicado aqui (vem do seu stroke-[1.5px])
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passa a className ("z-10 size-16")
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

export function IconSmartphone(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`} // Aplicado aqui
      strokeWidth="1.5" // Aplicado aqui
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passa a className
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  );
}

export function IconMessageCircle(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`} // Aplicado aqui
      strokeWidth="1.5" // Aplicado aqui
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passa a className
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}

// Componentes SVG customizados que recebem props (como className)
// e aplicam o gradiente e o stroke-width desejados

export function IconFileChartLine(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={`url(#${gradientId})`} // Aplicado aqui
      strokeWidth="1.5" // Aplicado aqui
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props} // Passa a className
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="m16 13-3.5 3.5-2-2L8 17" />
    </svg>
  );
}
