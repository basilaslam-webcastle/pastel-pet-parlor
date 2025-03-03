
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeamSection from "@/components/about/TeamSection";
import { Button } from "@/components/ui/button";
import { Quote, CheckCircle, PawPrint } from "lucide-react";
import BlurryCard from "@/components/ui/BlurryCard";

const About = () => {
  const values = [
    {
      title: "Gentle Care",
      description: "We handle every pet with the utmost gentleness and patience, ensuring their comfort throughout their visit."
    },
    {
      title: "Quality Products",
      description: "We use only premium, pet-safe products that are gentle on your pet's skin and coat while delivering excellent results."
    },
    {
      title: "Personalized Service",
      description: "Every pet is unique, and we tailor our grooming services to meet their individual needs and preferences."
    },
    {
      title: "Continuous Education",
      description: "Our team regularly updates their skills and knowledge to provide the best care using modern grooming techniques."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-petcare-blue/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">About Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Meet the passionate team behind Pawsome Grooming and discover what makes our pet grooming service exceptional
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1583511655826-05700442b0b9" 
                    alt="Groomer with dog" 
                    className="w-full h-auto"
                  />
                </div>
                
                <div className="absolute -bottom-6 -right-6 transform rotate-6">
                  <BlurryCard className="p-4 border-2 border-white">
                    <Quote className="h-8 w-8 text-primary mb-2" />
                    <p className="italic text-sm">
                      "We treat every pet as if they were our own."
                    </p>
                  </BlurryCard>
                </div>
              </div>
              
              <div className="space-y-6">
                <h2 className="text-3xl font-display font-semibold">Our Story</h2>
                <p className="text-muted-foreground">
                  Pawsome Grooming was founded in 2015 by Emily Johnson, a certified pet groomer with a vision to create a stress-free grooming experience for all pets. What started as a small home-based service has grown into a full-service grooming salon with a team of dedicated professionals.
                </p>
                <p className="text-muted-foreground">
                  Our journey began from a deep love for animals and a recognition that many pets experience stress during grooming. We set out to change that by creating a calm, patient approach that puts your pet's comfort first.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve hundreds of pets in our community, building lasting relationships with both pets and their owners. Our commitment to gentle handling, quality care, and beautiful results remains at the heart of everything we do.
                </p>
                
                <Button className="btn-primary">Learn More</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-petcare-peach/10">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title">Our Values</h2>
            <p className="section-subtitle">The principles that guide us in providing exceptional care for your pets</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {values.map((value, index) => (
                <BlurryCard key={index} className="flex h-full p-6">
                  <CheckCircle className="h-8 w-8 text-primary shrink-0 mr-4" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </BlurryCard>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="section-title">Meet Our Team</h2>
            <p className="section-subtitle">
              Our experienced groomers are passionate about providing excellent care for your pets
            </p>
            
            <div className="mt-12">
              <TeamSection />
            </div>
          </div>
        </section>

        <section className="py-16 bg-petcare-green/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <PawPrint className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-display font-semibold mb-6">Ready to experience the Pawsome difference?</h2>
              <p className="text-muted-foreground mb-8">
                Book an appointment today and see why pets and their owners love our grooming services.
              </p>
              <Button className="btn-primary" size="lg">Book Your Pet's Visit</Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
