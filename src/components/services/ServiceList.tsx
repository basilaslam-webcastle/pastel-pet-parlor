
import { Bath, Scissors, PawPrint, Heart, Paintbrush, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import BlurryCard from "../ui/BlurryCard";
import { cn } from "@/lib/utils";

interface Service {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  duration: string;
  features: string[];
  price: string;
  popular?: boolean;
}

const ServiceList = () => {
  const services: Service[] = [
    {
      id: "bath",
      icon: Bath,
      title: "Bath & Brush",
      description: "A refreshing bath with premium shampoo followed by a thorough brushing to remove loose fur and detangle.",
      duration: "45-60 min",
      features: [
        "Premium pH-balanced shampoo",
        "Conditioner treatment",
        "Blow dry",
        "Brush out",
        "Ear cleaning",
        "Nail trimming",
      ],
      price: "From $45",
    },
    {
      id: "haircut",
      icon: Scissors,
      title: "Full Grooming",
      description: "Complete grooming service tailored to your pet's breed and your preferences.",
      duration: "1.5-2 hours",
      features: [
        "Everything in Bath & Brush",
        "Haircut & styling",
        "Face, feet & sanitary trim",
        "Paw pad trimming",
        "Anal gland expression",
        "Cologne spritz",
      ],
      price: "From $75",
      popular: true,
    },
    {
      id: "nails",
      icon: PawPrint,
      title: "Nail & Paw Care",
      description: "Keep your pet's paws healthy and comfortable with our specialized nail and paw care services.",
      duration: "20-30 min",
      features: [
        "Nail trimming & filing",
        "Paw pad trimming",
        "Paw moisturizing treatment",
        "Nail grinding",
        "Paw massage",
      ],
      price: "From $25",
    },
    {
      id: "spa",
      icon: Heart,
      title: "Spa Package",
      description: "Pamper your pet with our luxurious spa package that includes premium treatments for ultimate relaxation.",
      duration: "2-2.5 hours",
      features: [
        "Everything in Full Grooming",
        "Aromatherapy bath",
        "Blueberry facial",
        "De-shedding treatment",
        "Paw moisturizing treatment",
        "Teeth brushing",
      ],
      price: "From $95",
    },
    {
      id: "teeth",
      icon: Droplets,
      title: "Teeth Cleaning",
      description: "Maintain your pet's dental health with our gentle and effective teeth cleaning service.",
      duration: "20-30 min",
      features: [
        "Teeth brushing",
        "Breath freshener",
        "Gum inspection",
        "Tooth gel application",
        "Home care advice",
      ],
      price: "From $20",
    },
    {
      id: "deshedding",
      icon: Paintbrush,
      title: "De-shedding Treatment",
      description: "Reduce shedding by up to 90% with our specialized de-shedding treatment for pets with heavy coats.",
      duration: "1-1.5 hours",
      features: [
        "Special de-shedding shampoo",
        "Conditioning treatment",
        "Thorough brush-out",
        "High-velocity blow dry",
        "Specialized de-shedding tools",
        "Coat health assessment",
      ],
      price: "From $60",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {services.map((service, index) => {
        const IconComponent = service.icon;
        
        return (
          <BlurryCard 
            key={service.id}
            className={cn(
              "flex flex-col h-full transition-all duration-500", 
              service.popular ? "border-primary border-2 relative" : ""
            )}
          >
            {service.popular && (
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-primary text-white text-xs px-3 py-1 rounded-full font-medium">
                Most Popular
              </div>
            )}
            
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-petcare-blue/20 rounded-lg text-primary">
                <IconComponent className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
            </div>
            
            <p className="text-muted-foreground mb-4">{service.description}</p>
            
            <div className="bg-petcare-gray/30 rounded-lg p-3 mb-4">
              <div className="text-sm text-muted-foreground">Duration</div>
              <div className="font-medium">{service.duration}</div>
            </div>
            
            <div className="flex-grow">
              <h4 className="font-medium mb-2">What's included:</h4>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <PawPrint className="h-4 w-4 text-primary mr-2 mt-1 shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mt-auto pt-4 border-t border-border">
              <div className="flex justify-between items-center mb-4">
                <span className="text-muted-foreground">Starting at</span>
                <span className="text-2xl font-semibold">{service.price}</span>
              </div>
              
              <Button className="w-full">Book Now</Button>
            </div>
          </BlurryCard>
        );
      })}
    </div>
  );
};

export default ServiceList;
