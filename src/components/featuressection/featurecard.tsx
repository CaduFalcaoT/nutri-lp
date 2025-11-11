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
      className={`relative flex w-full flex-col gap-5 overflow-hidden rounded-4xl border border-none bg-[#EFEFEF] px-4 py-10 pb-12 shadow-sm transition-all duration-300 ease-in-out sm:items-center sm:gap-6 sm:hover:-translate-y-3 sm:hover:bg-[#ffffff] xl:pt-14 xl:pb-18`}
    >
      <span className="flex items-end gap-2 sm:flex-col sm:items-center sm:gap-6">
        {icon}
        <h3 className="text-brand-primary z-10 text-[3.8vw] font-bold sm:text-base">
          {title}
        </h3>{" "}
      </span>
      <p className="text-brand-secondary text-justify text-sm break-words hyphens-auto opacity-90 sm:w-[85%] sm:text-center xl:w-auto xl:text-justify">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
