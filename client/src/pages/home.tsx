import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { DiagnosticProcess } from "@/components/DiagnosticProcess";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { useState } from "react";
import { Activity, Cog, Droplet, Wrench, ShieldCheck, Search, ArrowRight, Building, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";

// Assets
import leakImg from "@assets/generated_images/pool_leak_detection_equipment.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";
import heroImg from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";

export function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: "Pool Maintenance Bali",
      description: "Weekly and monthly pool maintenance designed for Bali's tropical climate. Keep your pool crystal clear year-round.",
      icon: Sparkles,
      image: heroImg,
      link: "/pool-maintenance"
    },
    {
      title: "Pool Repair Bali",
      description: "Expert leak detection, pump repair, and equipment service. We diagnose and fix pool problems fast.",
      icon: Wrench,
      image: leakImg,
      link: "/pool-repair"
    },
    {
      title: "Pool Installation Bali",
      description: "Custom pool design and construction. From infinity pools to villa pools, we build your dream.",
      icon: Building,
      image: pumpImg,
      link: "/pool-installation"
    },
    {
      title: "Equipment Service",
      description: "Pump repairs, filter maintenance, and system upgrades for all major brands including Hayward and Pentair.",
      icon: Cog,
      image: pumpImg,
      link: "/pool-repair"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Service Bali | Expert Pool Maintenance, Repair & Installation | Bali Pool Care"
        description="Bali's premier pool service company. Expert pool maintenance, repair, leak detection, and installation for villas, resorts, and homes. 15+ years experience. 24/7 emergency service. Contact us via WhatsApp."
        keywords="pool service Bali, pool maintenance Bali, pool cleaning Bali, pool repair Bali, swimming pool installation Bali, Bali pool experts, pool leak detection Bali, villa pool service Bali"
      />
      <Navbar />
      
      <main className="pt-16">
        <Hero onBookClick={() => setIsBookingOpen(true)} />

        {/* Technical Differentiator Banner */}
        <section className="bg-primary py-4 overflow-hidden" aria-label="Company highlights">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• 15+ Years Experience</span>
            <span>• 500+ Projects Completed</span>
            <span>• 50+ Certified Technicians</span>
            <span>• 1 Year Warranty</span>
            <span>• 24/7 Emergency Service</span>
            <span>• All Bali Areas</span>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bali's Most Trusted Pool Service Provider
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Welcome to Bali Pool Care, your expert partner for all pool services in Bali. Since 2010, we've been helping villa owners, resort managers, and homeowners keep their pools in pristine condition. Our team of 50+ certified technicians combines local expertise with international standards to deliver exceptional results. We collaborate with trusted partners like <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Aqua Pure Bali</a> for comprehensive water quality solutions.
                </p>
                <p>
                  Operating a pool in Bali's tropical climate presents unique challenges—from rapid algae growth due to warmth and humidity, to equipment wear from constant use and monsoon season complications. That's why our pool services are specifically designed for Bali's conditions. As part of the broader <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Bali pool service network</a>, we don't just maintain pools; we understand them.
                </p>
                <p>
                  Whether you need weekly maintenance to keep your villa pool sparkling, emergency repair for a leaking resort pool, or expert installation of a new infinity pool overlooking rice fields, Bali Pool Care has you covered. Experience the difference of working with Bali's pool experts.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/services">
                  <Button size="lg" className="h-12 px-8">
                    Our Services <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-12 px-8">
                    Get Free Quote
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Technicians</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Customer Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border" aria-labelledby="services-heading">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <h2 id="services-heading" className="text-3xl md:text-4xl font-bold mb-4">Pool Services in Bali</h2>
                <p className="text-muted-foreground max-w-xl">
                  Comprehensive pool solutions for villas, resorts, and residential properties across Bali. From routine maintenance to complex installations.
                </p>
              </div>
              <Link href="/services">
                <Button variant="outline" className="hidden md:flex">
                  View All Services <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((s, i) => (
                <Link key={i} href={s.link}>
                  <ServiceCard 
                    title={s.title} 
                    description={s.description} 
                    icon={s.icon} 
                    image={s.image}
                  />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <DiagnosticProcess />

        {/* Why Choose Us */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Bali Pool Care?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another pool company. Here's what sets our pool service in Bali apart.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Activity className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Advanced Diagnostics</h3>
                <p className="text-muted-foreground text-sm">
                  We use ultrasonic leak detection and pressure testing to diagnose problems accurately—no guesswork, just precision solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">1 Year Warranty</h3>
                <p className="text-muted-foreground text-sm">
                  All our repair work comes with a 1-year warranty. We stand behind our craftsmanship and use only quality materials and parts.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Droplet className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Bali Climate Experts</h3>
                <p className="text-muted-foreground text-sm">
                  We understand Bali's unique pool challenges: humidity, monsoons, mineral-rich water. Our solutions are tailored to the tropics.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
          
          <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop losing water. <br /><span className="text-primary">Start saving money.</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                A leaking pool costs you millions in water bills and chemicals every year. 
                Contact us to get a price for our diagnostic visit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-14 px-8 text-lg" onClick={() => setIsBookingOpen(true)}>
                  Book Diagnostic Now
                </Button>
                <div className="flex items-center gap-2 text-sm text-gray-400 px-4 py-2 border border-white/10 rounded-md">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-auto p-8 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm max-w-sm">
              <h3 className="font-mono text-primary mb-4 flex items-center gap-2">
                <Search className="w-4 h-4" />
                SAMPLE_REPORT.PDF
              </h3>
              <div className="space-y-4 text-sm text-gray-300 font-mono">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Leak Rate:</span>
                  <span className="text-destructive">-25mm / day</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Pressure Test:</span>
                  <span className="text-destructive">FAIL (Return Line)</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Est. Cost:</span>
                  <span className="text-white">Contact us</span>
                </div>
                <div className="text-xs text-gray-500 pt-2">
                  *Example of what you receive after our visit.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas We Serve */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pool Service Areas in Bali
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We provide pool maintenance, repair, and installation services across the entire island of Bali.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Jimbaran", "Uluwatu", "Kuta", "Legian", "Denpasar", "Gianyar", "Tabanan"].map((area) => (
              <span key={area} className="px-4 py-2 bg-muted rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors">
                Pool Service {area}
              </span>
            ))}
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}
