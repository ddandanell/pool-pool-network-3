import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { AlertTriangle, Check, ArrowRight, Clock, Phone, Zap } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

export function GreenPoolRescueBali() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEOHead
        title="Green Pool Rescue Bali | Emergency Pool Cleaning 24/7"
        description="Emergency green pool rescue Bali service! Transform murky pools to crystal clear in 24hrs. Algae removal experts. Available now in all Bali areas!"
        keywords="green pool rescue Bali, emergency pool cleaning Bali, algae removal Bali, green pool fix, murky pool cleaning, swamp pool rescue Bali"
        canonicalUrl="https://balipoolcare.online/green-pool-rescue-bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-destructive/5 via-background to-destructive/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-destructive/10 border border-destructive/20 text-destructive mb-6">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm font-mono font-bold uppercase tracking-wider">24/7 Emergency Service</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Emergency Green Pool Rescue Bali - Transform Your Pool in 24 Hours
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Green pool rescue Bali emergency services restore swamp-like pools to crystal clarity. Expert algae removal and water recovery available 24/7 across all Bali areas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg bg-destructive hover:bg-destructive/90">
                  <Phone className="mr-2 w-5 h-5" />
                  Emergency Service Now
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg" onClick={() => setIsBookingOpen(true)}>
                  Get Immediate Quote
                </Button>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span>24-48 Hour Recovery</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-primary" />
                  <span>Same-Day Response</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>24/7 Availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Pools Turn Green in Bali */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Pools Turn Green So Fast in Bali's Tropical Climate
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
              <p>
                <strong>Green pool rescue Bali</strong> services are frequently needed due to the island's unique tropical environment. Bali's tropical environment creates perfect conditions for explosive algae growth. High temperatures (28-32°C), intense sunlight, and humidity levels above 80% allow algae spores to multiply within hours when chlorine levels drop. At BalipoolCare.online, we specialize in rapid algae removal and water recovery for pools that have turned green due to neglect, equipment failure, or extended vacancy.
              </p>

              <p>
                Extended monsoon rains dilute pool chemicals further, while warm water temperatures accelerate bacterial and algae reproduction. Power outages affecting pumps, neglected vacation properties, and equipment malfunctions commonly lead to green pool emergencies in Bali. Our <strong>green pool rescue Bali</strong> service addresses all these scenarios with immediate response and professional recovery protocols.
              </p>

              <div className="grid md:grid-cols-2 gap-6 my-12">
                <Card className="border-destructive/20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      Common Causes
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Chlorine levels drop below 1 ppm</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Pump or filtration system failure</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Extended property vacancy (7+ days)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Power outages stopping circulation</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Heavy monsoon rainfall dilution</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-destructive">•</span>
                        <span>Neglected chemical maintenance</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card className="border-primary/20">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-primary" />
                      Our Solutions
                    </h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>24/7 emergency response team</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Professional-strength shock treatment</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Specialized algae elimination</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Complete water recovery</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Prevention plan included</span>
                      </li>
                      <li className="flex gap-2">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span>Guaranteed crystal clarity</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Green Pool Rescue Process */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Fast-Acting Green Pool Rescue Process
              </h2>

              <div className="space-y-6">
                {[
                  {
                    step: "1",
                    title: "Immediate Assessment",
                    description: "Our technicians evaluate water condition, identify algae type (green, yellow, or black), and determine the severity level. We photograph the starting condition for comparison.",
                    time: "0-2 hours"
                  },
                  {
                    step: "2",
                    title: "Shock Treatment Application",
                    description: "Apply professional-strength chlorine shock treatment (typically 3-5x normal dose) to kill algae and oxidize organic contaminants. This is the critical first step in green pool rescue.",
                    time: "2-4 hours"
                  },
                  {
                    step: "3",
                    title: "Targeted Algaecide Treatment",
                    description: "Specialized algaecide targets specific algae types. We use professional-grade products not available to consumers for faster, more effective results.",
                    time: "4-6 hours"
                  },
                  {
                    step: "4",
                    title: "Filter Cleaning & Dead Algae Removal",
                    description: "As algae dies, it must be filtered out. We clean or backwash filters multiple times, removing dead algae and debris that would otherwise recirculate.",
                    time: "6-12 hours"
                  },
                  {
                    step: "5",
                    title: "Continuous Circulation",
                    description: "Pool pump runs continuously for 24-48 hours during recovery. This ensures chemicals circulate thoroughly and dead algae filters out completely.",
                    time: "12-24 hours"
                  },
                  {
                    step: "6",
                    title: "Chemical Rebalancing",
                    description: "Once algae clears, we restore optimal water chemistry: pH 7.2-7.6, alkalinity 80-120 ppm, chlorine 1-3 ppm. This prevents immediate re-growth.",
                    time: "24-36 hours"
                  },
                  {
                    step: "7",
                    title: "Final Clarification & Polishing",
                    description: "Pool clarifier helps fine particles clump together for easier filtration. We vacuum any remaining sediment and polish water to crystal clarity.",
                    time: "36-48 hours"
                  },
                  {
                    step: "8",
                    title: "Prevention Plan & Follow-up",
                    description: "We provide a customized prevention plan to avoid future green pool incidents. Includes maintenance schedule, chemical guidelines, and equipment checks.",
                    time: "48+ hours"
                  }
                ].map((phase) => (
                  <Card key={phase.step} className="overflow-hidden border-l-4 border-l-primary">
                    <CardContent className="p-6">
                      <div className="flex gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                            <span className="text-xl font-bold text-primary font-mono">{phase.step}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold">{phase.title}</h3>
                            <span className="text-sm text-muted-foreground font-mono">{phase.time}</span>
                          </div>
                          <p className="text-muted-foreground">{phase.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Emergency Response Availability */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Green Pool Rescue Bali Emergency Service Availability
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Same-Day Service Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    Available 24/7 across all Bali regions. Same-day service in major areas:
                  </p>
                  <ul className="space-y-2">
                    {["Seminyak", "Canggu", "Sanur", "Nusa Dua", "Kuta", "Legian"].map(area => (
                      <li key={area} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Next-Day Response Areas</h3>
                  <p className="text-muted-foreground mb-4">
                    Next-day response for outlying regions:
                  </p>
                  <ul className="space-y-2">
                    {["Ubud", "Uluwatu", "Jimbaran", "Denpasar", "Tabanan", "Northern Bali"].map(area => (
                      <li key={area} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-primary" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Emergency Pricing</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    <strong>Green pool rescue Bali</strong> pricing depends on pool size and algae severity. Basic rescue starts at competitive rates. Emergency services carry premium rates due to priority scheduling and intensive treatment requirements. Contact us for immediate quote and same-day service scheduling.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" onClick={() => setIsBookingOpen(true)}>
                      Get Emergency Quote Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button size="lg" variant="outline">
                      <Phone className="mr-2 w-4 h-4" />
                      Call 24/7 Hotline
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prevent Future Green Pool Emergencies
              </h2>
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                Once recovered, maintain with regular pool cleaning to prevent future green pool incidents.
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Regular Pool Cleaning</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Once recovered, maintain with regular <Link href="/pool-cleaning-bali" className="text-primary hover:underline">pool cleaning services</Link> to prevent recurrence.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Ongoing Maintenance</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Prevent future problems with our <Link href="/swimming-pool-maintenance-bali" className="text-primary hover:underline">maintenance programs</Link> designed for Bali.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Chemical Balance</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Understand proper <Link href="/pool-chemical-balancing-bali" className="text-primary hover:underline">chemical balance</Link> to keep water crystal clear.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-4 text-white">Don't Wait - Green Pools Get Worse Fast!</h3>
                <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                  Every day you wait, algae multiplies and treatment becomes more difficult and expensive. Call now for immediate green pool rescue Bali service and have your pool crystal clear by tomorrow.
                </p>
                <Button size="lg" className="h-14 px-8 bg-destructive hover:bg-destructive/90">
                  <Phone className="mr-2 w-5 h-5" />
                  Emergency Response - Call Now
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
