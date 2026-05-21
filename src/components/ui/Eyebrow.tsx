import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
  color?: "default" | "gold" | "indigo";
}

export function Eyebrow({ children, className, color = "default" }: EyebrowProps) {
  return (
    <span
      className={cn(
        "eyebrow block",
        {
          "text-[#444444]": color === "default",
          "text-[#EA6B0E]": color === "gold",
          "text-[#1F3A8A]": color === "indigo",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
