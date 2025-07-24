import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Bed, 
  Bath, 
  Car, 
  Maximize, 
  Star, 
  ArrowRight,
  Eye,
  Heart,
  Building
} from 'lucide-react';

const PropertiesSection = () => {
  const properties = [
    {
      id: 1,
      title: 'Apartemen Mewah CBD Sudirman',
      location: 'Sudirman, Jakarta Pusat',
      price: 'Rp 2.8 Miliar',
      monthlyPrice: 'Rp 25 Juta/bulan',
      type: 'Apartemen',
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      area: 85,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=400&fit=crop',
      tags: ['Ready Stock', 'Strategis', 'Investasi'],
      rating: 4.8,
      views: 1250,
      isPopular: true
    },
    {
      id: 2,
      title: 'Rumah Modern PIK 2',
      location: 'Pantai Indah Kapuk, Jakarta Utara',
      price: 'Rp 4.2 Miliar',
      monthlyPrice: 'Rp 35 Juta/bulan',
      type: 'Rumah',
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      area: 120,
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=600&h=400&fit=crop',
      tags: ['Waterfront', 'Modern', 'Eksklusif'],
      rating: 4.9,
      views: 890,
      isPopular: false
    },
    {
      id: 3,
      title: 'Townhouse Alam Sutera',
      location: 'Alam Sutera, Tangerang',
      price: 'Rp 1.8 Miliar',
      monthlyPrice: 'Rp 18 Juta/bulan',
      type: 'Townhouse',
      bedrooms: 3,
      bathrooms: 2,
      parking: 2,
      area: 96,
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?w=600&h=400&fit=crop',
      tags: ['Cluster', 'Family Friendly', 'Green Area'],
      rating: 4.7,
      views: 720,
      isPopular: false
    },
    {
      id: 4,
      title: 'Penthouse SCBD Premium',
      location: 'SCBD, Jakarta Selatan',
      price: 'Rp 8.5 Miliar',
      monthlyPrice: 'Rp 75 Juta/bulan',
      type: 'Penthouse',
      bedrooms: 4,
      bathrooms: 4,
      parking: 3,
      area: 200,
      image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?w=600&h=400&fit=crop',
      tags: ['Luxury', 'Sky Garden', 'Premium'],
      rating: 5.0,
      views: 2100,
      isPopular: true
    },
    {
      id: 5,
      title: 'Apartemen Strategis Kemang',
      location: 'Kemang, Jakarta Selatan',
      price: 'Rp 1.2 Miliar',
      monthlyPrice: 'Rp 12 Juta/bulan',
      type: 'Apartemen',
      bedrooms: 1,
      bathrooms: 1,
      parking: 1,
      area: 45,
      image: 'https://images.unsplash.com/photo-1439337153520-7082a56a81f4?w=600&h=400&fit=crop',
      tags: ['Studio', 'Millennials', 'Trendy'],
      rating: 4.6,
      views: 650,
      isPopular: false
    },
    {
      id: 6,
      title: 'Villa Sentul City Resort',
      location: 'Sentul City, Bogor',
      price: 'Rp 3.5 Miliar',
      monthlyPrice: 'Rp 30 Juta/bulan',
      type: 'Villa',
      bedrooms: 4,
      bathrooms: 3,
      parking: 3,
      area: 250,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop',
      tags: ['Resort Living', 'Golf View', 'Nature'],
      rating: 4.8,
      views: 980,
      isPopular: false
    }
  ];

  return (
    <section id="properties" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building className="h-4 w-4 mr-2" />
            Properti Pilihan
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Properti Premium
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              Eksklusif untuk Anda
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Koleksi properti terbaik yang telah dikurasi khusus dengan lokasi strategis 
            dan potensi investasi menguntungkan.
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {properties.map((property, index) => (
            <Card 
              key={property.id} 
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Section */}
              <div className="relative overflow-hidden">
                {property.isPopular && (
                  <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                )}
                <div className="absolute top-4 right-4 z-10 flex gap-2">
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 hover:bg-background">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="secondary" className="h-8 w-8 bg-background/80 hover:bg-background">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>
                
                <div 
                  className="h-64 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                  style={{ backgroundImage: `url(${property.image})` }}
                />
                
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {property.tags.slice(0, 2).map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-background/90 text-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content Section */}
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {property.type}
                  </Badge>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Eye className="h-3 w-3 mr-1" />
                    {property.views.toLocaleString()}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {property.title}
                </h3>
                
                <div className="flex items-center text-muted-foreground text-sm">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span className="line-clamp-1">{property.location}</span>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                {/* Property Features */}
                <div className="flex items-center justify-between py-4 border-t border-b border-border/50">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Bed className="h-4 w-4 mr-1" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Bath className="h-4 w-4 mr-1" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Car className="h-4 w-4 mr-1" />
                    <span>{property.parking}</span>
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Maximize className="h-4 w-4 mr-1" />
                    <span>{property.area}m²</span>
                  </div>
                </div>

                {/* Price and Rating */}
                <div className="pt-4">
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <div className="text-2xl font-bold text-primary">{property.price}</div>
                      <div className="text-sm text-muted-foreground">{property.monthlyPrice}</div>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-accent fill-current mr-1" />
                      <span className="text-sm font-medium">{property.rating}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button className="flex-1" variant="outline">
                      Lihat Detail
                    </Button>
                    <Button className="flex-1 bg-gradient-primary hover:opacity-90">
                      Hubungi Agen
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button size="lg" variant="outline" className="animate-scale-in">
            Lihat Semua Properti
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;