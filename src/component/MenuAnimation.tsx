import { ArrowRight } from "lucide-react";
import { cn } from "../utils/utils";

interface MenuAnimationProps {
  menuItems: string;
  description: string;
  className?: string;
}

export default function MenuAnimation({
  menuItems,
  description,
  className,
}: MenuAnimationProps) {
  return (
    <div
      className={cn(
        "flex min-w-fit flex-col gap-2 overflow-hidden px-10",
        className
      )}
    >
      <div className="group flex items-center gap-2">
        <ArrowRight className="size-5 -translate-x-full opacity-0 transition-all duration-300 ease-out hover:z-20 group-hover:translate-x-0 group-hover:text-[#F1FE92] group-hover:opacity-100 md:size-10" />

        <h1 className="z-10 -translate-x-6 cursor-pointer font-mono font-semibold transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:text-[#F1FE92] dark:text-white md:-translate-x-12 md:text-4xl md:group-hover:translate-x-0">
          {menuItems}
        </h1>
      </div>
      <h1 className="text-sm text-left">{description}</h1>
    </div>
  );
}
