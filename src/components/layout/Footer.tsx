
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, PawPrint } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-petcare-blue/20 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <PawPrint className="h-8 w-8 text-primary" />
              <span className="text-xl font-display font-semibold">Pawsome Grooming</span>
            </div>
            <p className="text-muted-foreground max-w-xs">
              Professional pet grooming services with a gentle touch, making your pets look and feel their best.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-muted-foreground hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/services#bath" className="text-muted-foreground hover:text-primary transition-colors">Bath & Brush</a>
              </li>
              <li>
                <a href="/services#haircut" className="text-muted-foreground hover:text-primary transition-colors">Full Grooming</a>
              </li>
              <li>
                <a href="/services#nails" className="text-muted-foreground hover:text-primary transition-colors">Nail Trimming</a>
              </li>
              <li>
                <a href="/services#teeth" className="text-muted-foreground hover:text-primary transition-colors">Teeth Cleaning</a>
              </li>
              <li>
                <a href="/services#spa" className="text-muted-foreground hover:text-primary transition-colors">Spa Treatments</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-muted-foreground">123 Pawsome Street, Pet City, PC 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary shrink-0" />
                <span className="text-muted-foreground">info@pawsomegrooming.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Pawsome Grooming. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
