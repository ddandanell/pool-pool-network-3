import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Sparkles, Check, ArrowRight, Clock, Shield, Users } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

export function PoolCleaningBali() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEOHead
        title="Pool Cleaning Bali | Professional Pool Cleaning Services"
        description="Professional pool cleaning Bali services for villas, resorts & homes. Weekly cleaning, debris removal & water treatment. Best prices guaranteed!"
        keywords="pool cleaning Bali, pool cleaning services Bali, professional pool cleaning, weekly pool cleaning Bali, villa pool cleaning, resort pool cleaning Bali"
        canonicalUrl="https://balipoolcare.online/pool-cleaning-bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-primary/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-mono font-bold uppercase tracking-wider">Expert Pool Cleaning</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
                Expert Pool Cleaning Bali Services for Crystal Clear Water
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Professional pool cleaning Bali services designed for tropical climates. Keep your pool pristine with our comprehensive cleaning solutions for villas, resorts, and homes across Bali.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg" onClick={() => setIsBookingOpen(true)}>
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>Same-Day Service</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span>100% Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  <span>15+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pool Cleaning in Bali Requires Special Expertise */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Why Pool Cleaning in Bali Requires Special Expertise
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                Professional <strong>pool cleaning Bali</strong> services are essential for maintaining healthy, beautiful pools in tropical climates. Our expert team at BalipoolCare.online provides comprehensive pool cleaning solutions for residential villas, luxury resorts, and commercial properties throughout Bali. With over 15 years of experience in <strong>pool cleaning Bali</strong>, we understand the unique challenges posed by humidity, monsoons, and tropical vegetation.
              </p>

              <p>
                Bali's year-round warmth and high humidity create the perfect environment for rapid algae growth and bacterial development. Tropical rainfall introduces debris, leaves, and contaminants that can quickly overwhelm your pool's filtration system. Our <strong>pool cleaning Bali</strong> services address these specific challenges with specialized techniques and eco-friendly products designed for tropical conditions. Regular professional cleaning prevents green water, maintains equipment efficiency, and ensures safe swimming conditions for your family and guests.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Tropical Climate Challenges</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Rapid algae growth from heat & humidity</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Heavy debris from tropical vegetation</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Monsoon rainfall diluting chemicals</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Accelerated equipment wear</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4">Our Solutions</h3>
                    <ul className="space-y-3">
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Specialized tropical cleaning techniques</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Eco-friendly, climate-specific products</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Preventive maintenance protocols</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Equipment longevity optimization</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Our Comprehensive Pool Cleaning Bali Process */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Comprehensive Pool Cleaning Bali Process
              </h2>

              <div className="space-y-8">
                {[
                  {
                    number: "01",
                    title: "Surface Skimming & Debris Removal",
                    description: "We remove all floating debris, leaves, insects, and surface contaminants using professional skimming equipment."
                  },
                  {
                    number: "02",
                    title: "Wall & Floor Brushing",
                    description: "Thorough brushing of pool walls, steps, corners, and floor to dislodge algae, bacteria, and biofilm buildup."
                  },
                  {
                    number: "03",
                    title: "Vacuuming & Sediment Extraction",
                    description: "Complete vacuuming removes settled debris, dead algae, and sediment from the pool floor and hard-to-reach areas."
                  },
                  {
                    number: "04",
                    title: "Filter Basket Cleaning",
                    description: "Skimmer and pump baskets are emptied and cleaned to ensure optimal filtration and circulation."
                  },
                  {
                    number: "05",
                    title: "Water Testing & Chemical Adjustment",
                    description: "Professional water testing for pH, chlorine, alkalinity, and other parameters, followed by precise chemical balancing."
                  },
                  {
                    number: "06",
                    title: "Equipment Inspection",
                    description: "Comprehensive check of pumps, filters, heaters, and other equipment to identify potential issues before they become problems."
                  },
                  {
                    number: "07",
                    title: "Tile Line Scrubbing",
                    description: "Removal of waterline stains, calcium deposits, and scum buildup for a pristine appearance."
                  },
                  {
                    number: "08",
                    title: "Final Quality Check",
                    description: "Complete inspection ensuring crystal clear water, proper chemical balance, and optimal equipment operation."
                  }
                ].map((step) => (
                  <Card key={step.number} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary font-mono">{step.number}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pool Cleaning Bali Packages & Pricing */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Pool Cleaning Bali Packages & Pricing
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Flexible pool cleaning service packages designed for your specific needs and pool usage patterns in Bali's tropical environment.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Weekly Service",
                  frequency: "Once per week",
                  ideal: "Rental villas with high usage",
                  features: [
                    "Full cleaning service",
                    "Chemical testing & balancing",
                    "Equipment inspection",
                    "Debris removal",
                    "Filter basket cleaning",
                    "Water quality report"
                  ]
                },
                {
                  name: "Bi-Weekly Service",
                  frequency: "Twice per month",
                  ideal: "Residential homes",
                  features: [
                    "Complete pool cleaning",
                    "Chemical balancing",
                    "Equipment check",
                    "Surface skimming",
                    "Vacuuming",
                    "Maintenance report"
                  ],
                  popular: true
                },
                {
                  name: "Monthly Deep Clean",
                  frequency: "Once per month",
                  ideal: "Seasonal properties",
                  features: [
                    "Intensive deep cleaning",
                    "Comprehensive testing",
                    "Full equipment service",
                    "Stain removal",
                    "Tile line scrubbing",
                    "Detailed inspection"
                  ]
                }
              ].map((pkg) => (
                <Card key={pkg.name} className={`relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}>
                  {pkg.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="pt-8 pb-6">
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-primary font-semibold mb-1">{pkg.frequency}</p>
                    <p className="text-sm text-muted-foreground mb-6">Ideal for: {pkg.ideal}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, idx) => (
                        <li key={idx} className="flex gap-2 text-sm">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => setIsBookingOpen(true)}
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-4">
                Our <strong>pool cleaning Bali</strong> services cover Seminyak, Canggu, Ubud, Sanur, Nusa Dua, Jimbaran, Uluwatu, Kuta, Legian, Denpasar, and surrounding areas. Same-day service available for emergency cleaning requests.
              </p>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Pool Care Solutions in Bali
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                Beyond pool cleaning, we offer comprehensive pool services to keep your pool in perfect condition year-round.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Swimming Pool Maintenance</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Learn more about our ongoing <Link href="/swimming-pool-maintenance-bali" className="text-primary hover:underline">swimming pool maintenance services</Link> for complete care.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Green Pool Rescue</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Need emergency <Link href="/green-pool-rescue-bali" className="text-primary hover:underline">green pool rescue</Link>? We transform murky pools in 24 hours.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Chemical Balancing</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Discover our expert <Link href="/pool-chemical-balancing-bali" className="text-primary hover:underline">pool chemical balancing services</Link> for perfect water.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-12">
                <Button size="lg" className="h-14 px-8" onClick={() => setIsBookingOpen(true)}>
                  Schedule Your Pool Cleaning Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
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
