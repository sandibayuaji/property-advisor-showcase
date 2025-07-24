import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Award, 
  Users, 
  Target, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    { icon: Award, value: '10+', label: 'Tahun Pengalaman' },
    { icon: Users, value: '500+', label: 'Klien Puas' },
    { icon: Target, value: '98%', label: 'Success Rate' },
    { icon: TrendingUp, value: '50+', label: 'Developer Partner' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Terpercaya',
      description: 'Komitmen penuh pada transparansi dan integritas dalam setiap transaksi properti.'
    },
    {
      icon: Heart,
      title: 'Personal',
      description: 'Pendekatan personal yang disesuaikan dengan kebutuhan unik setiap klien.'
    },
    {
      icon: Target,
      title: 'Profesional',
      description: 'Tim ahli berpengalaman dengan pengetahuan mendalam pasar properti Jakarta.'
    }
  ];

  const certifications = [
    'Certified Real Estate Professional (CREP)',
    'Property Investment Specialist',
    'Licensed Real Estate Broker',
    'Market Research Analyst'
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-slide-in-left">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Tentang Nia Property Advisor
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Partner Terpercaya untuk
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Investasi Properti Anda
              </span>
            </h2>

            <div className="space-y-4 mb-8 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Dengan pengalaman lebih dari 10 tahun di industri properti Jakarta, 
                Nia Property Advisor telah membantu ratusan klien menemukan properti impian 
                dan investasi yang menguntungkan.
              </p>
              
              <p className="leading-relaxed">
                Kami memahami bahwa setiap klien memiliki kebutuhan yang unik. Oleh karena itu, 
                kami menyediakan layanan konsultasi personal yang disesuaikan dengan profil 
                risiko, budget, dan tujuan investasi Anda.
              </p>
            </div>

            {/* Certifications */}
            <div className="mb-8">
              <h4 className="font-semibold text-foreground mb-4">Sertifikasi & Keahlian:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {cert}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90">
                Konsultasi Sekarang
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Download Portfolio
              </Button>
            </div>
          </div>

          {/* Right Content */}
          <div className="animate-slide-in-right">
            {/* Achievements Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center p-6 border-border/50 hover:border-primary/30 transition-colors">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                      <achievement.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{achievement.value}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-foreground mb-4">Nilai-Nilai Kami:</h4>
              {values.map((value, index) => (
                <Card key={index} className="p-4 border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                        <value.icon className="h-5 w-5 text-accent-foreground" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-foreground mb-2">{value.title}</h5>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Personal Quote */}
            <Card className="p-6 bg-gradient-primary text-primary-foreground border-0 mt-8">
              <CardContent className="p-0">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-bold text-accent-foreground">N</span>
                  </div>
                  <div>
                    <div className="font-semibold">Nia Sari, S.T.</div>
                    <div className="text-sm text-primary-foreground/80">Senior Property Advisor</div>
                  </div>
                </div>
                <blockquote className="text-primary-foreground/90 italic">
                  "Saya percaya bahwa setiap orang berhak memiliki rumah impian. 
                  Dengan dedikasi dan pengalaman, saya berkomitmen membantu Anda 
                  menemukan properti yang tidak hanya sesuai kebutuhan, 
                  tetapi juga menjadi investasi terbaik untuk masa depan."
                </blockquote>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-accent fill-current mr-1" />
                  ))}
                  <span className="text-sm text-primary-foreground/80 ml-2">4.9/5 Client Rating</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;