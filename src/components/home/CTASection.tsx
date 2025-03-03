
import { Button } from "@/components/ui/button";
import { CalendarIcon, ClockIcon, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const CTASection = () => {
  const benefits = [
    "Experienced professional groomers",
    "Premium products that are gentle on pets",
    "Calm, stress-free environment",
    "Customized grooming to your pet's needs",
    "Convenient online booking",
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-paw-pattern"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-petcare-blue/30 rounded-full blur-3xl"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-petcare-green/30 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-xl border border-white/20 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-display font-semibold leading-tight text-foreground">
                Ready to give your pet the <span className="text-primary">grooming experience</span> they deserve?
              </h2>
              
              <p className="text-muted-foreground">
                Book your appointment today and let our expert groomers pamper your furry friend in a relaxing, stress-free environment.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 shrink-0" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="pt-4">
                <Button className="btn-primary" size="lg" asChild>
                  <Link to="/contact">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Book Appointment
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="bg-petcare-blue/10 p-6 rounded-2xl border border-petcare-blue/30">
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-2 border-b border-petcare-blue/20">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 text-primary mr-2" />
                    <span>Monday - Friday</span>
                  </div>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-petcare-blue/20">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 text-primary mr-2" />
                    <span>Saturday</span>
                  </div>
                  <span className="font-medium">9:00 AM - 4:00 PM</span>
                </div>
                
                <div className="flex justify-between items-center pb-2 border-b border-petcare-blue/20">
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 text-primary mr-2" />
                    <span>Sunday</span>
                  </div>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
              
              <div className="mt-6 bg-primary/10 p-4 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Note:</strong> We recommend booking at least 48 hours in advance, especially for weekend appointments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
