
import { cn } from "@/lib/utils";
import React from "react";

interface BlurryCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

const BlurryCard = ({ children, className, hoverEffect = true }: BlurryCardProps) => {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 overflow-hidden",
        hoverEffect && "hover:translate-y-[-4px]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default BlurryCard;
