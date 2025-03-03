
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PawPrint } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden relative">
      {/* Background shapes */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/6 w-72 h-72 rounded-full bg-petcare-blue/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 rounded-full bg-petcare-green/30 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-2">
              <PawPrint className="mr-1 h-4 w-4" />
              <span>Professional Pet Grooming</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
              Where Your Pets Get the <span className="text-primary">Royal Treatment</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              We provide exceptional grooming services for all pets, using premium products and gentle techniques to ensure your furry friends look and feel their best.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button className="btn-outline" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-petcare-blue/80 flex items-center justify-center text-white">
                  5⭐
                </div>
                <div className="w-10 h-10 rounded-full bg-petcare-green/80 flex items-center justify-center text-petcare-dark">
                  <PawPrint className="h-5 w-5" />
                </div>
              </div>
              <div className="text-sm">
                <span className="font-semibold">Trusted by 1000+ pet owners</span>
                <p className="text-muted-foreground">5-star rated on Google & Yelp</p>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in animate-delay-300">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1535268647677-300dbf3d78d1" 
                alt="Happy groomed pet" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-petcare-peach/60 rounded-full blur-md"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-petcare-blue/60 rounded-full blur-md"></div>
            
            {/* Accent circles */}
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white p-2 rounded-full shadow-xl">
              <div className="bg-petcare-green rounded-full w-full h-full flex items-center justify-center">
                <PawPrint className="h-8 w-8 text-primary animate-subtle-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
