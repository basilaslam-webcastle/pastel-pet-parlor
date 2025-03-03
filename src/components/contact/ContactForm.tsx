
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Check } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    petName: "",
    petType: "",
    service: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        duration: 5000,
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        petName: "",
        petType: "",
        service: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Doe"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="john@example.com"
            required
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(123) 456-7890"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="petName" className="block text-sm font-medium">
            Pet's Name
          </label>
          <Input
            id="petName"
            name="petName"
            value={formData.petName}
            onChange={handleChange}
            placeholder="Buddy"
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="petType" className="block text-sm font-medium">
            Pet Type
          </label>
          <Select value={formData.petType} onValueChange={(value) => handleSelectChange("petType", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select pet type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dog">Dog</SelectItem>
              <SelectItem value="cat">Cat</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label htmlFor="service" className="block text-sm font-medium">
            Service Interested In
          </label>
          <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
            <SelectTrigger>
              <SelectValue placeholder="Select service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="bath">Bath & Brush</SelectItem>
              <SelectItem value="haircut">Full Grooming</SelectItem>
              <SelectItem value="nails">Nail & Paw Care</SelectItem>
              <SelectItem value="spa">Spa Package</SelectItem>
              <SelectItem value="other">Other Service</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about your pet and any special requirements..."
          rows={5}
          className="w-full"
        />
      </div>

      <Button type="submit" className="btn-primary w-full md:w-auto" disabled={isSubmitting}>
        {isSubmitting ? (
          <span className="flex items-center">
            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Sending...
          </span>
        ) : (
          <span className="flex items-center">
            <Check className="mr-2 h-4 w-4" />
            Send Message
          </span>
        )}
      </Button>
    </form>
  );
};

export default ContactForm;
