
import BlurryCard from "../ui/BlurryCard";
import { Facebook, Instagram, Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
}

const TeamSection = () => {
  const team: TeamMember[] = [
    {
      name: "Emily Johnson",
      role: "Head Groomer & Owner",
      bio: "With over 10 years of experience in pet grooming, Emily founded Pawsome Grooming to provide loving, professional care for all pets. She specializes in working with anxious pets and creative styling.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
      socialLinks: {
        instagram: "#",
        facebook: "#",
      },
    },
    {
      name: "Michael Rodriguez",
      role: "Senior Groomer",
      bio: "Michael has been grooming pets for 7 years and is certified in all breed standards. He has a special talent for precision cuts and is known for his gentle handling of senior pets.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6",
      socialLinks: {
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "Sophie Chen",
      role: "Cat Specialist",
      bio: "Sophie has specialized training in feline grooming techniques. Her calm approach makes even the most stressed cats comfortable, and she's an expert in handling different coat types.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
      socialLinks: {
        facebook: "#",
        instagram: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Williams",
      role: "Groomer & Receptionist",
      bio: "David combines grooming skills with excellent customer service. He helps coordinate appointments and ensures all pets' special needs are noted and addressed during their visit.",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      socialLinks: {
        instagram: "#",
      },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {team.map((member, index) => (
        <BlurryCard key={index} className="overflow-hidden flex flex-col h-full">
          <div className="aspect-[3/2] rounded-lg overflow-hidden mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

          <div className="flex-grow">
            <h3 className="text-xl font-semibold">{member.name}</h3>
            <p className="text-primary font-medium mb-3">{member.role}</p>
            <p className="text-muted-foreground">{member.bio}</p>
          </div>

          {member.socialLinks && (
            <div className="flex space-x-3 mt-4 pt-4 border-t border-border">
              {member.socialLinks.facebook && (
                <a href={member.socialLinks.facebook} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name}'s Facebook`}>
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {member.socialLinks.instagram && (
                <a href={member.socialLinks.instagram} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name}'s Instagram`}>
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {member.socialLinks.linkedin && (
                <a href={member.socialLinks.linkedin} className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name}'s LinkedIn`}>
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          )}
        </BlurryCard>
      ))}
    </div>
  );
};

export default TeamSection;
