import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { DiagnosticProcess } from "@/components/DiagnosticProcess";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { useState } from "react";
import { Activity, Cog, Droplet, Wrench, ShieldCheck, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

// Assets
import leakImg from "@assets/generated_images/pool_leak_detection_equipment.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";

export function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const services = [
    {
      title: "Ultrasonic Leak Detection",
      description: "Advanced acoustic listening technology to pinpoint leaks in shell or pipework without destructive digging.",
      icon: Activity,
      image: leakImg
    },
    {
      title: "Pump Mechanics & Repair",
      description: "Bearing replacement, seal kits, and motor rewinding for Hayward, Pentair, and Astral pumps.",
      icon: Cog,
      image: pumpImg
    },
    {
      title: "Filtration Engineering",
      description: "Sand changes, lateral repairs, and glass media upgrades to restore crystal clear water clarity.",
      icon: Droplet
    },
    {
      title: "Structural Tiling",
      description: "Underwater epoxy grouting and cracked tile replacement. We fix structural integrity issues.",
      icon: Wrench
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      
      <main className="pt-16">
        <Hero onBookClick={() => setIsBookingOpen(true)} />

        {/* Technical Differentiator Banner */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• Authorized Hayward Techs</span>
            <span>• Acoustic Hydrophones</span>
            <span>• Pressure Testing to 5 BAR</span>
            <span>• 1 Year Repair Warranty</span>
            <span>• Digital Reports</span>
            <span>• Authorized Pentair Techs</span>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Services</h2>
              <p className="text-muted-foreground max-w-xl">
                We specialize in the hard stuff. While others just clean, we engineer solutions for complex hydraulic and structural problems.
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">View Full Service Menu</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <ServiceCard 
                key={i} 
                title={s.title} 
                description={s.description} 
                icon={s.icon} 
                image={s.image}
              />
            ))}
          </div>
        </section>

        <DiagnosticProcess />

        {/* CTA Section */}
        <section className="py-20 bg-foreground text-background relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
          
          <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Stop losing water. <br /><span className="text-primary">Start saving money.</span></h2>
              <p className="text-gray-400 text-lg mb-8">
                A leaking pool costs you millions in water bills and chemicals every year. 
                Our diagnostic visit is IDR 500k, fully credited if you proceed with repairs.
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
                  <span className="text-white">IDR 1.2jt</span>
                </div>
                <div className="text-xs text-gray-500 pt-2">
                  *Example of what you receive after our visit.
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <BookingModal open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </div>
  );
}
