
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  petType: "dog" | "cat" | "other";
}

const GalleryGrid = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [activePetType, setActivePetType] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e",
      alt: "Golden Retriever before and after grooming",
      category: "before-after",
      petType: "dog",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1518155317743-a8ff43ea6a5f",
      alt: "Poodle with stylish haircut",
      category: "haircut",
      petType: "dog",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
      alt: "Cat after bath and brushing",
      category: "bath",
      petType: "cat",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1596492784531-6e6eb5ea9993",
      alt: "Schnauzer before and after grooming",
      category: "before-after",
      petType: "dog",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc",
      alt: "Spa treatment for Shih Tzu",
      category: "spa",
      petType: "dog",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1537151672256-6caf2e9f8c95",
      alt: "Cat getting nail trim",
      category: "nails",
      petType: "cat",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1583511655826-05700442b0b9",
      alt: "Husky before and after deshedding",
      category: "deshedding",
      petType: "dog",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca",
      alt: "Yorkie with fancy haircut",
      category: "haircut",
      petType: "dog",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1503256207526-0d5d80fa2f47",
      alt: "Persian cat before and after grooming",
      category: "before-after",
      petType: "cat",
    },
  ];

  const filters = [
    { value: "all", label: "All Services" },
    { value: "before-after", label: "Before & After" },
    { value: "haircut", label: "Haircuts" },
    { value: "bath", label: "Bath & Brush" },
    { value: "spa", label: "Spa Treatments" },
    { value: "nails", label: "Nail Care" },
    { value: "deshedding", label: "Deshedding" },
  ];

  const petTypes = [
    { value: "all", label: "All Pets" },
    { value: "dog", label: "Dogs" },
    { value: "cat", label: "Cats" },
    { value: "other", label: "Other Pets" },
  ];

  const filteredImages = images.filter((image) => {
    const matchesCategory = activeFilter === "all" || image.category === activeFilter;
    const matchesPetType = activePetType === "all" || image.petType === activePetType;
    return matchesCategory && matchesPetType;
  });

  return (
    <div>
      {/* Filters */}
      <div className="mb-8 space-y-4">
        <div className="flex flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter.value}
              variant={activeFilter === filter.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter(filter.value)}
              className="rounded-full"
            >
              {filter.label}
            </Button>
          ))}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {petTypes.map((type) => (
            <Button
              key={type.value}
              variant={activePetType === type.value ? "default" : "outline"}
              size="sm"
              onClick={() => setActivePetType(type.value)}
              className="rounded-full"
            >
              {type.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl w-full">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white mt-4 text-center">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* Empty state */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No images match the selected filters. Try adjusting your selection.</p>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
