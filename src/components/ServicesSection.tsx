import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Home, 
  Search, 
  Calculator, 
  FileText, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock,
  ArrowRight 
} from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: 'Pencarian Properti',
      description: 'Bantuan mencari properti sesuai kriteria dan budget Anda dengan akses database lengkap.',
      features: ['Database 10,000+ properti', 'Filter pencarian canggih', 'Lokasi survey langsung'],
      color: 'bg-blue-500'
    },
    {
      icon: Calculator,
      title: 'Konsultasi Investasi',
      description: 'Analisis mendalam untuk investasi properti yang menguntungkan dan sesuai profil risiko.',
      features: ['Analisis ROI properti', 'Proyeksi harga masa depan', 'Strategi investasi personal'],
      color: 'bg-green-500'
    },
    {
      icon: FileText,
      title: 'Bantuan Legal & Dokumen',
      description: 'Pendampingan lengkap untuk proses legal dan administrasi pembelian properti.',
      features: ['Pengecekan legal properti', 'Bantuan KPR', 'Proses akad jual beli'],
      color: 'bg-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Analisis Pasar',
      description: 'Riset pasar mendalam untuk membantu keputusan investasi properti yang tepat.',
      features: ['Tren harga properti', 'Analisis lokasi strategis', 'Proyeksi pengembangan area'],
      color: 'bg-orange-500'
    },
    {
      icon: Users,
      title: 'Jual Properti',
      description: 'Layanan pemasaran properti dengan strategi marketing yang efektif dan jaringan luas.',
      features: ['Marketing digital', 'Penilaian harga properti', 'Negosiasi dengan pembeli'],
      color: 'bg-red-500'
    },
    {
      icon: Shield,
      title: 'After Sales Service',
      description: 'Dukungan berkelanjutan setelah transaksi untuk memastikan kepuasan Anda.',
      features: ['Garansi transaksi', 'Bantuan serah terima', 'Konsultasi lanjutan'],
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Home className="h-4 w-4 mr-2" />
            Layanan Profesional
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Solusi Lengkap Kebutuhan
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Properti Anda
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dari pencarian hingga investasi, kami menyediakan layanan end-to-end 
            untuk semua kebutuhan properti Anda.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-border/50 hover:border-primary/30 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  Pelajari Lebih Lanjut
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="inline-block p-8 bg-gradient-primary text-primary-foreground border-0 animate-scale-in">
            <div className="flex items-center justify-center mb-4">
              <Clock className="h-8 w-8 mr-3" />
              <h3 className="text-2xl font-bold">Konsultasi Gratis 30 Menit</h3>
            </div>
            <p className="text-primary-foreground/90 mb-6 max-w-md">
              Dapatkan konsultasi gratis dengan property advisor berpengalaman untuk 
              mendiskusikan kebutuhan properti Anda.
            </p>
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            >
              Jadwalkan Konsultasi
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;