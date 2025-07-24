import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Nia Property
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Partner terpercaya untuk semua kebutuhan properti Anda di Jakarta dan sekitarnya.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-accent" />
                <span className="text-primary-foreground/80">+62 123 456 7890</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-accent" />
                <span className="text-primary-foreground/80">info@niapropertyad.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-4 w-4 mr-3 text-accent mt-1" />
                <span className="text-primary-foreground/80">Jakarta Selatan, DKI Jakarta</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Menu</h4>
            <div className="space-y-2">
              {['Beranda', 'Layanan', 'Properti', 'Tentang', 'Kontak'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="block text-primary-foreground/80 hover:text-accent transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-semibold mb-4">Konsultasi Gratis</h4>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Dapatkan konsultasi properti gratis sekarang juga!
            </p>
            <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Hubungi Sekarang
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <Separator className="bg-primary-foreground/20 mb-8" />
        
        <div className="text-center text-primary-foreground/60 text-sm">
          <p>&copy; 2024 Nia Property Advisor. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;