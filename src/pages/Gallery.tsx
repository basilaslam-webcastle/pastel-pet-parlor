
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24">
        <section className="py-12 bg-petcare-blue/10">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">Our Gallery</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our collection of pet transformations and see the quality of our grooming services
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <GalleryGrid />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
