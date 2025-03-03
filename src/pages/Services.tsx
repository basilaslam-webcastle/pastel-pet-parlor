
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ServiceList from "@/components/services/ServiceList";
import PricingTable from "@/components/services/PricingTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Scissors, Calculator } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-petcare-blue/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Services</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional grooming services tailored to your pet's individual needs, delivered with care and expertise
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <Tabs defaultValue="services" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="services" className="flex items-center gap-2">
                    <Scissors className="h-4 w-4" />
                    <span>Services</span>
                  </TabsTrigger>
                  <TabsTrigger value="pricing" className="flex items-center gap-2">
                    <Calculator className="h-4 w-4" />
                    <span>Pricing</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="services" className="space-y-4">
                <ServiceList />
              </TabsContent>
              
              <TabsContent value="pricing" className="space-y-4">
                <PricingTable />
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
