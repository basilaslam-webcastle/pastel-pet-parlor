
import { Bath, Scissors, Dog, Cat, Heart } from "lucide-react";
import ServiceCard from "../ui/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Bath,
      title: "Bath & Brush",
      description: "A thorough bath with premium shampoo followed by a gentle brush to remove loose fur and detangle."
    },
    {
      icon: Scissors,
      title: "Full Grooming",
      description: "Complete grooming service including bath, haircut, nail trimming, ear cleaning, and more."
    },
    {
      icon: Dog,
      title: "Dog Styling",
      description: "Breed-specific haircuts to keep your dog looking their best while maintaining comfort and health."
    },
    {
      icon: Cat,
      title: "Cat Grooming",
      description: "Specialized grooming services for cats of all breeds, focusing on comfort and stress reduction."
    },
    {
      icon: Heart,
      title: "Spa Treatments",
      description: "Luxurious treatments including de-shedding, moisturizing, and aromatherapy for pampered pets."
    },
  ];

  return (
    <section className="py-20 bg-petcare-gray/30">
      <div className="container-custom">
        <h2 className="section-title">Our Premium Services</h2>
        <p className="section-subtitle">
          We offer a comprehensive range of grooming services tailored to your pet's specific needs
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((service, index) => (
            <div key={service.title} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button className="btn-primary" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
