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
          "text-[#4A4A4A]": color === "default",
          "text-[#C9A24A]": color === "gold",
          "text-[#1F3A8A]": color === "indigo",
        },
        className
      )}
    >
      {children}
    </span>
  );
}
