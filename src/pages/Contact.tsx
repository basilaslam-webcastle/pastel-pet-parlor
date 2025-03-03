
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactForm from "@/components/contact/ContactForm";
import BusinessInfo from "@/components/contact/BusinessInfo";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-petcare-blue/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Contact Us</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We'd love to hear from you! Get in touch with any questions or to book an appointment
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              
              <div>
                <h2 className="text-2xl font-display font-semibold mb-6">Get in Touch</h2>
                <BusinessInfo />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-2xl font-display font-semibold mb-6 text-center">Find Us</h2>
            <div className="rounded-xl overflow-hidden shadow-lg h-96">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30595512356!2d-74.25986548248684!3d40.69714941887498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sjp!4v1625647158893!5m2!1sen!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
