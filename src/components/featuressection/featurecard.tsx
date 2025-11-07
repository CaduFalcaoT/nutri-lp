import { ReactNode } from "react";

const FeatureCard = ({
  title = "",
  description = "",
  icon = false,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) => {
  return (
    <div
      className={`relative flex w-full flex-col gap-5 overflow-hidden rounded-4xl border border-none bg-[#EFEFEF] px-4 py-10 pb-12 shadow-lg transition-all duration-300 ease-in-out lg:items-center lg:gap-6 lg:pt-14 lg:pb-18 lg:hover:-translate-y-3 lg:hover:bg-[#ffffff]`}
    >
      <span className="flex items-end gap-2 lg:flex-col lg:items-center lg:gap-6">
        {icon}
        <h3 className="text-brand-primary z-10 pb-1 text-[4vw] font-bold lg:text-base">
          {title}
        </h3>{" "}
      </span>
      <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
