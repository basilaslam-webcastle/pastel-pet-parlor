
import TestimonialCard from "../ui/TestimonialCard";
import { Button } from "@/components/ui/button";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      petName: "Bella",
      petType: "Golden Retriever",
      content: "My dog Bella always looks amazing after her appointments! The team is so gentle and caring with her. She actually gets excited when we pull up to the salon now!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1",
    },
    {
      name: "Michael Rodriguez",
      petName: "Max",
      petType: "Shih Tzu",
      content: "I've been to many groomers before finding Pawsome, and no one has ever done such an amazing job with Max. He looks so handsome after every visit!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
    },
    {
      name: "Emily Chen",
      petName: "Luna",
      petType: "Persian Cat",
      content: "Luna is usually very stressed at groomers, but the team here is so patient and gentle with her. They take their time and ensure she's comfortable throughout the process.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d",
    },
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <h2 className="section-title">What Pet Parents Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it. Hear from the happy pet parents who trust us with their furry family members
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline">
            Read More Testimonials
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
