
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import BlurryCard from "./BlurryCard";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  className?: string;
}

const ServiceCard = ({ icon: Icon, title, description, className }: ServiceCardProps) => {
  return (
    <BlurryCard className={cn("h-full flex flex-col items-center text-center", className)}>
      <div className="mb-4 p-4 bg-petcare-blue/20 rounded-full">
        <Icon className="h-8 w-8 text-primary" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </BlurryCard>
  );
};

export default ServiceCard;
