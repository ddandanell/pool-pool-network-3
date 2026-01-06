import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Droplet, TestTube, Calendar, Shield, Sun, Cloud, Leaf, ArrowRight, CheckCircle2, Clock } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";

const maintenanceBenefits = [
  {
    icon: Shield,
    title: "Prevent Major Repairs",
    description: "Regular maintenance catches small issues before they become big problems. Protect your investment."
  },
  {
    icon: Sun,
    title: "Crystal Clear Water",
    description: "Proper chemical balance and cleaning keeps your pool water sparkling clean and safe for swimming."
  },
  {
    icon: Clock,
    title: "Extended Equipment Life",
    description: "Well-maintained pumps, filters, and systems last years longer, protecting your investment."
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Approach",
    description: "Our sustainable practices minimize chemical use while maximizing effectiveness."
  }
];

const maintenanceProcess = [
  {
    step: "1",
    title: "Water Testing",
    description: "We test pH, chlorine, alkalinity, calcium hardness, and TDS levels using professional-grade testing equipment."
  },
  {
    step: "2",
    title: "Chemical Balancing",
    description: "Based on test results, we adjust chemicals to maintain perfect water balance for Bali's conditions."
  },
  {
    step: "3",
    title: "Surface Cleaning",
    description: "Skimming debris, brushing walls and floor, vacuuming sediment, and cleaning the waterline."
  },
  {
    step: "4",
    title: "Equipment Check",
    description: "Inspect pump, filter, skimmer baskets, and all equipment. Clean or service as needed."
  },
  {
    step: "5",
    title: "Filter Maintenance",
    description: "Backwash sand filters or clean cartridge filters to ensure optimal water circulation."
  },
  {
    step: "6",
    title: "Report & Recommendations",
    description: "Provide a detailed report with any recommendations for repairs or improvements."
  }
];

export function PoolMaintenance() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Maintenance Bali | Weekly & Monthly Pool Care Services | Bali Pool Pros"
        description="Professional pool maintenance services in Bali. Weekly cleaning, water testing, chemical balancing, and equipment care for villas, resorts, and homes. Keep your pool crystal clear year-round."
        keywords="pool maintenance Bali, pool cleaning service Bali, weekly pool maintenance, pool care Bali, swimming pool maintenance, pool water testing Bali, pool chemical service Bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Professional pool maintenance service in Bali - crystal clear swimming pool"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                <Sparkles className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Expert Pool Care</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pool Maintenance <span className="text-primary">Bali</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Keep your pool sparkling clean and safe with professional maintenance designed for Bali's tropical climate. Weekly and monthly programs tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Schedule Maintenance <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  Contact us to get a price
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Banner */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• Weekly Service Available</span>
            <span>• Professional Water Testing</span>
            <span>• Eco-Friendly Products</span>
            <span>• All Bali Areas</span>
            <span>• Flexible Scheduling</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Professional Pool Maintenance Services in Bali
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Maintaining a pool in Bali requires specialized knowledge and consistent care. The island's tropical climate—with high humidity, intense sunlight, and seasonal monsoons—creates unique challenges for pool owners. Algae can bloom rapidly, water chemistry fluctuates frequently, and debris from tropical vegetation accumulates quickly.
                </p>
                <p>
                  At Bali Pool Pros, our pool maintenance services are specifically designed to address these Bali-specific challenges. Our experienced technicians understand the delicate balance required to keep your pool water crystal clear and safe for swimming, while protecting your equipment from premature wear in the demanding tropical environment.
                </p>
                <p>
                  Whether you own a private villa in Ubud, manage a beachfront resort in Seminyak, or have a family pool in Sanur, our maintenance programs keep your pool in perfect condition year-round. We offer flexible scheduling, transparent service, and eco-friendly practices that protect both your pool and Bali's beautiful environment.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={pumpImg}
                alt="Pool maintenance equipment and pump system in Bali"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">500+</p>
                    <p className="text-sm text-muted-foreground">Pools Maintained Monthly</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Benefits of Regular Pool Maintenance in Bali
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Investing in professional pool maintenance saves you money, protects your health, and ensures your pool is always ready for a refreshing swim.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {maintenanceBenefits.map((benefit, index) => (
                <Card key={index} className="text-center p-6 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <benefit.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Pool Maintenance is Essential in Bali's Climate
            </h2>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Bali's tropical climate, while perfect for outdoor living, presents significant challenges for pool maintenance. Understanding these challenges is the first step to keeping your pool in optimal condition. Here's why regular professional maintenance is crucial for pools in Bali. We partner with leading water treatment specialists like <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Aqua Pure Bali</a> to deliver comprehensive pool care solutions.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">The Humidity Challenge</h3>
              <p>
                Bali's high humidity, often exceeding 80%, accelerates the growth of algae and bacteria in pool water. Without proper chemical balance and regular treatment, green algae can bloom within days, turning your sparkling pool into an unsightly mess. Our maintenance program, aligned with the standards of the <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Bali pool service network</a>, includes preventive algaecide treatment and consistent chlorine management to keep algae at bay.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Monsoon Season Considerations</h3>
              <p>
                During Bali's wet season (November to March), heavy rains can dramatically alter your pool's water chemistry. Rainwater dilutes chemicals, raises water levels, and introduces contaminants. Our technicians increase their vigilance during monsoon season, adjusting chemical treatments and managing water levels to maintain perfect balance despite the weather.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Tropical Debris Management</h3>
              <p>
                Bali's lush vegetation is beautiful, but falling leaves, flowers, and organic matter create constant maintenance demands. Decomposing organic material affects water chemistry and can clog filters. Our regular skimming and filter cleaning prevents debris buildup and keeps your pool pristine.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Water Quality in Bali</h3>
              <p>
                The mineral content in Bali's water supply varies by region and can affect pool chemistry. Some areas have hard water that causes calcium scaling, while others may have high iron content that stains pool surfaces. Our technicians test for these local variations and adjust maintenance protocols accordingly.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Equipment Protection</h3>
              <p>
                Pool equipment in Bali works harder than in temperate climates. Pumps run longer to maintain circulation in warm water, and salt air in coastal areas accelerates corrosion. Regular maintenance includes equipment inspection and preventive care that extends the life of your valuable pool systems.
              </p>
            </div>
          </div>
        </section>

        {/* Maintenance Process */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Pool Maintenance Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every maintenance visit follows our comprehensive checklist to ensure nothing is missed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {maintenanceProcess.map((process, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{process.title}</h3>
                      <p className="text-sm text-muted-foreground">{process.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pool Maintenance Packages in Bali
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Flexible maintenance plans to suit every pool and budget. All packages include our satisfaction guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Weekly Care</h3>
                <p className="text-lg font-bold text-primary">Contact us to get a price</p>
              </div>
              <ul className="space-y-3 mb-6">
                {["Weekly service visit", "Water testing & balancing", "Skimming & vacuuming", "Filter cleaning", "Equipment inspection", "Monthly report"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-6 border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="text-center mb-6">
                <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Premium Care</h3>
                <p className="text-lg font-bold text-primary">Contact us to get a price</p>
              </div>
              <ul className="space-y-3 mb-6">
                {["Twice weekly visits", "Full water chemistry testing", "Deep cleaning included", "Priority scheduling", "Equipment maintenance", "24/7 support access", "Quarterly deep clean"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full">Get Started</Button>
              </Link>
            </Card>

            <Card className="p-6 hover:border-primary/50 transition-colors">
              <div className="text-center mb-6">
                <TestTube className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">Resort Package</h3>
                <p className="text-3xl font-bold text-primary">Custom</p>
                <p className="text-sm text-muted-foreground">tailored quote</p>
              </div>
              <ul className="space-y-3 mb-6">
                {["Daily service available", "Multiple pool coverage", "Dedicated technician team", "Emergency response", "Staff training", "Compliance documentation", "Quarterly reviews"].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <Button className="w-full">Request Quote</Button>
              </Link>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Start Your Pool Maintenance Plan Today
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Don't let your pool suffer in Bali's demanding climate. Let our experts handle the maintenance while you enjoy crystal-clear water every day.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white/20 hover:bg-white/10">
                    View All Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
