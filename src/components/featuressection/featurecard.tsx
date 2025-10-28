import { ReactNode } from "react";

const FeatureCard = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className: string;
}) => {
  return (
    <div
      className={`relative flex w-full flex-col items-center gap-6 overflow-hidden rounded-4xl border border-none bg-[#EFEFEF] px-4 py-13 shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-3 hover:bg-[#ffffff] ${className}`}
    >
      {children}
    </div>
  );
};

export default FeatureCard;
