
import { StarIcon } from "lucide-react";
import BlurryCard from "./BlurryCard";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  petName: string;
  petType: string;
  content: string;
  rating: number;
  image?: string;
  className?: string;
}

const TestimonialCard = ({
  name,
  petName,
  petType,
  content,
  rating = 5,
  image,
  className,
}: TestimonialCardProps) => {
  return (
    <BlurryCard className={cn("h-full flex flex-col", className)}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-sm text-muted-foreground">
            Owner of {petName} ({petType})
          </p>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <StarIcon
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating ? "text-amber-400 fill-amber-400" : "text-gray-300"
              )}
            />
          ))}
        </div>
      </div>

      {image && (
        <div className="relative h-40 w-full mb-4 overflow-hidden rounded-lg">
          <img
            src={image}
            alt={`${petName} after grooming`}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      <p className="text-muted-foreground flex-grow">{content}</p>
    </BlurryCard>
  );
};

export default TestimonialCard;
