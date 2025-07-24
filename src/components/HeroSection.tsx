import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play, Star, ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { value: '500+', label: 'Properti Terjual' },
    { value: '98%', label: 'Kepuasan Klien' },
    { value: '10+', label: 'Tahun Pengalaman' },
    { value: '50+', label: 'Developer Partner' },
  ];

  const benefits = [
    'Konsultasi properti profesional',
    'Proses cepat & transparan',
    'Dukungan penuh hingga serah terima',
    'Network developer terpercaya'
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?w=1920&h=1080&fit=crop&crop=buildings")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute bottom-40 right-20 w-16 h-16 bg-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-accent/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Star className="h-4 w-4 mr-2 fill-current" />
              Property Advisor Terpercaya #1 Jakarta
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 animate-fade-in-up">
              Temukan
              <span className="block bg-gradient-accent bg-clip-text text-transparent">
                Properti Impian
              </span>
              Anda Bersama Kami
            </h1>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Dengan pengalaman 10+ tahun di industri properti, kami siap membantu Anda 
              menemukan investasi properti terbaik di Jakarta dan sekitarnya.
            </p>

            {/* Benefits List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-primary-foreground/90">
                  <CheckCircle className="h-5 w-5 text-accent mr-3 flex-shrink-0" />
                  <span className="text-sm">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
                Konsultasi Gratis Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Play className="mr-2 h-5 w-5" />
                Lihat Video Testimoni
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative animate-slide-in-right">
            <div className="grid gap-6">
              <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-card/95 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Konsultasi Personal</h3>
                    <p className="text-sm text-muted-foreground">Analisis kebutuhan & budget</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Dapatkan konsultasi personal untuk menemukan properti yang sesuai dengan kebutuhan dan budget Anda.
                </p>
              </Card>

              <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-card/95 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mr-4">
                    <Star className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Properti Premium</h3>
                    <p className="text-sm text-muted-foreground">Akses eksklusif ke properti terbaik</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Akses eksklusif ke properti premium dari developer terpercaya dengan harga terbaik.
                </p>
              </Card>

              <Card className="p-6 bg-card/90 backdrop-blur-sm border-primary/20 hover:bg-card/95 transition-all duration-300 hover:shadow-lg hover:scale-105">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mr-4">
                    <ArrowRight className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground">Proses Mudah</h3>
                    <p className="text-sm text-muted-foreground">Dari survey hingga akad</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Proses yang mudah dan transparan mulai dari survey hingga proses akad jual beli.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;