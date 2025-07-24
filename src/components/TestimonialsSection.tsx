import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star, Quote, ArrowLeft, ArrowRight, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      role: 'Entrepreneur',
      company: 'PT. Digital Nusantara',
      rating: 5,
      message: 'Luar biasa! Nia membantu saya menemukan apartemen investasi yang sempurna di area SCBD. Proses sangat transparan dan profesional. ROI yang didapat melebihi ekspektasi saya.',
      property: 'Apartemen SCBD Residences',
      investment: 'ROI 12% per tahun',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      id: 2,
      name: 'Sarah Wijaya',
      role: 'Marketing Manager',
      company: 'Multinational Corp',
      rating: 5,
      message: 'Pelayanan yang sangat personal dan detail. Nia benar-benar memahami kebutuhan keluarga kami. Rumah yang kami beli sekarang menjadi tempat yang sempurna untuk anak-anak.',
      property: 'Rumah Cluster PIK 2',
      investment: 'Nilai properti naik 15%',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b55c?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      role: 'Investment Banker',
      company: 'Global Investment Bank',
      rating: 5,
      message: 'Sebagai banker, saya sangat teliti dalam investasi. Nia memberikan analisis pasar yang akurat dan membantu saya membangun portfolio properti yang diversifikasi.',
      property: 'Multiple Properties Portfolio',
      investment: 'Portfolio senilai 10M',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      id: 4,
      name: 'Linda Chen',
      role: 'Business Owner',
      company: 'Chen Family Business',
      rating: 5,
      message: 'Pengalaman membeli properti pertama bersama Nia sangat menyenangkan. Dia sabar menjelaskan setiap detail legal dan memberikan saran yang sangat valuable.',
      property: 'Townhouse Alam Sutera',
      investment: 'First Time Buyer Success',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      verified: true
    },
    {
      id: 5,
      name: 'Robert Tan',
      role: 'Tech Executive',
      company: 'Leading Tech Company',
      rating: 5,
      message: 'Nia memiliki network yang luas dan akses ke properti off-market yang berkualitas. Berkat bantuannya, saya mendapat penthouse dengan harga di bawah market rate.',
      property: 'Penthouse Kemang Village',
      investment: 'Hemat 500 juta',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
      verified: true
    }
  ];

  const stats = [
    { value: '4.9/5', label: 'Client Rating' },
    { value: '500+', label: 'Happy Clients' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '10+', label: 'Years Experience' }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-hero text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium mb-4">
            <MessageSquare className="h-4 w-4 mr-2" />
            Testimoni Klien
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Apa Kata Klien Kami?
          </h2>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Lebih dari 500 klien telah mempercayakan kebutuhan properti mereka kepada kami. 
            Inilah cerita sukses mereka.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 animate-fade-in-up">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
              <div className="text-sm text-primary-foreground/70">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/10 backdrop-blur-md border-primary-foreground/20 text-card-foreground animate-scale-in">
            <CardContent className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <Quote className="h-12 w-12 text-accent/50" />
                <div className="flex items-center">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current mr-1" />
                  ))}
                </div>
              </div>
              
              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-primary-foreground">
                "{testimonials[currentTestimonial].message}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage src={testimonials[currentTestimonial].avatar} />
                    <AvatarFallback>{testimonials[currentTestimonial].name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center">
                      <h4 className="text-lg font-semibold text-primary-foreground mr-2">
                        {testimonials[currentTestimonial].name}
                      </h4>
                      {testimonials[currentTestimonial].verified && (
                        <Badge className="bg-accent/20 text-accent border-accent/30">
                          Verified
                        </Badge>
                      )}
                    </div>
                    <p className="text-primary-foreground/70">
                      {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].company}
                    </p>
                    <div className="text-sm text-accent mt-1">
                      {testimonials[currentTestimonial].property} • {testimonials[currentTestimonial].investment}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={prevTestimonial}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                    onClick={nextTestimonial}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial 
                  ? 'bg-accent scale-125' 
                  : 'bg-primary-foreground/30 hover:bg-primary-foreground/50'
              }`}
              onClick={() => setCurrentTestimonial(index)}
            />
          ))}
        </div>

        {/* Other Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials
            .filter((_, index) => index !== currentTestimonial)
            .slice(0, 3)
            .map((testimonial, index) => (
              <Card 
                key={testimonial.id} 
                className="bg-card/5 backdrop-blur-sm border-primary-foreground/10 hover:bg-card/10 transition-all duration-300 cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setCurrentTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="h-10 w-10 mr-3">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="font-semibold text-primary-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-primary-foreground/70">
                        {testimonial.role}
                      </div>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-3 w-3 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-primary-foreground/80 line-clamp-3">
                    "{testimonial.message}"
                  </p>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
