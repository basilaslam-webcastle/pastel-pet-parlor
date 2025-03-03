
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import BlurryCard from "../ui/BlurryCard";

const BusinessInfo = () => {
  const businessHours = [
    { day: "Monday", hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];

  return (
    <div className="space-y-6">
      <BlurryCard>
        <div className="flex items-start space-x-4">
          <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-2">Our Location</h4>
            <p className="text-muted-foreground">123 Pawsome Street</p>
            <p className="text-muted-foreground">Pet City, PC 12345</p>
            <div className="mt-2">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-sm inline-flex items-center hover:underline"
              >
                View on Google Maps
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </BlurryCard>

      <BlurryCard>
        <div className="flex items-start space-x-4">
          <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-2">Phone</h4>
            <p className="text-muted-foreground">(123) 456-7890</p>
          </div>
        </div>
      </BlurryCard>

      <BlurryCard>
        <div className="flex items-start space-x-4">
          <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-2">Email</h4>
            <p className="text-muted-foreground">info@pawsomegrooming.com</p>
          </div>
        </div>
      </BlurryCard>

      <BlurryCard>
        <div className="flex items-start space-x-4">
          <Clock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium mb-2">Business Hours</h4>
            <div className="space-y-1">
              {businessHours.map((item) => (
                <div key={item.day} className="flex justify-between">
                  <span className="text-muted-foreground">{item.day}</span>
                  <span className={item.day === "Sunday" ? "text-red-500 font-medium" : ""}>{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </BlurryCard>
    </div>
  );
};

export default BusinessInfo;
