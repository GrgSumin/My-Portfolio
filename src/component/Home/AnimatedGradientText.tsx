import { cn } from "../../utils/utils";

export default function AnimatedGradientText({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "bg-size animate-bg-position bg-gradient-to-r from-[#F1FE92] from-30% via-[#BAB3A9] via-50% to-[#BAB3A9] to-80% bg-[length:200%_auto] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
