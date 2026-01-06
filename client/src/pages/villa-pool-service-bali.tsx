import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building2, Check, ArrowRight, Star, Calendar, Camera } from "lucide-react";
import { useState } from "react";
import { BookingModal } from "@/components/BookingModal";

export function VillaPoolServiceBali() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <SEOHead
        title="Villa Pool Service Bali | Vacation Rental Pool Maintenance"
        description="Professional villa pool service Bali for rental properties. Guest-ready pools guaranteed. Pre-arrival cleaning & weekly maintenance. Book now!"
        keywords="villa pool service Bali, vacation rental pool maintenance, rental villa pool cleaning, guest-ready pool service, villa pool care Bali"
        canonicalUrl="https://balipoolcare.online/villa-pool-service-bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-br from-primary/5 via-background to-accent/5">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-mono font-bold uppercase tracking-wider">Villa Specialists</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Premium Villa Pool Service Bali for Vacation Rental Properties
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Specialized <strong>villa pool service Bali</strong> for vacation rental properties ensures your guests always arrive to pristine pool conditions. Protect your 5-star reviews with our guest-ready guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="h-14 px-8 text-lg" onClick={() => setIsBookingOpen(true)}>
                  Get Villa Service Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Link href="/contact">
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg">
                    Property Manager Info
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-primary" />
                  <span>5-Star Guest Guarantee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-primary" />
                  <span>Flexible Scheduling</span>
                </div>
                <div className="flex items-center gap-2">
                  <Camera className="w-4 h-4 text-primary" />
                  <span>Photo Documentation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Villa Pools Need Specialized Service */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Why Villa Pool Service Requires Specialized Attention
            </h2>
            
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-6 mb-12">
              <p>
                Specialized <strong>villa pool service Bali</strong> for vacation rental properties ensures your guests always arrive to pristine pool conditions. At BalipoolCare.online, we understand the unique demands of rental villa pool maintenance - frequent turnover, varying usage patterns, and the need for consistent quality. Our <strong>villa pool service Bali</strong> programs keep your pool guest-ready 24/7, protecting your property's reputation and 5-star reviews. We coordinate seamlessly with villa managers and housekeeping teams to maintain perfect timing.
              </p>

              <p>
                Vacation rental villas face distinct pool maintenance challenges. Guest usage varies dramatically - from families with children creating heavy chlorine demand to quiet couples barely using the pool. Back-to-back bookings require rapid turnaround cleaning. Guests may add sunscreen, oils, and contaminants that conventional maintenance schedules don't address. Our <strong>villa pool service Bali</strong> accounts for these variables with flexible scheduling, pre-arrival inspections, and post-checkout deep cleaning. We ensure every guest discovers a spotless, inviting pool regardless of previous usage patterns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Rental Villa Challenges</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Varying guest usage patterns</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Back-to-back booking turnover</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Sunscreen and oil contamination</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>High-traffic usage stress</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">•</span>
                      <span>Guest satisfaction critical</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-bold mb-4">Our Villa Solutions</h3>
                  <ul className="space-y-3">
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Pre-arrival deep cleaning</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Flexible scheduling coordination</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Post-checkout service</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Emergency response 24/7</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Manager communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Villa Pool Service Programs */}
        <section className="py-16 md:py-20 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Our Villa Pool Service Bali Maintenance Programs
              </h2>

              <div className="space-y-6">
                {[
                  {
                    title: "Pre-Arrival Deep Clean",
                    description: "Complete cleaning and chemical balancing before each guest arrival. Pool is inspected 24 hours before check-in to guarantee crystal clear water and perfect chemistry.",
                    features: ["Full surface cleaning", "Chemical testing & balancing", "Equipment verification", "Photo documentation", "Final quality check"]
                  },
                  {
                    title: "Weekly Maintenance",
                    description: "Regular service for long-term bookings ensures pools stay perfect throughout extended guest stays. Scheduled on optimal days coordinated with your booking calendar.",
                    features: ["Weekly cleaning service", "Chemical adjustment", "Equipment inspection", "Guest satisfaction focus", "Minimal disruption"]
                  },
                  {
                    title: "Emergency Response",
                    description: "24/7 availability for guest complaints or issues. We respond within 2 hours to resolve problems and maintain your 5-star rating and guest satisfaction.",
                    features: ["2-hour response time", "Same-day resolution", "Guest communication", "Problem documentation", "Follow-up verification"]
                  },
                  {
                    title: "Post-Checkout Service",
                    description: "Thorough cleaning after departure prepares pool for the next guests. Addresses heavy usage impacts and restores optimal conditions quickly.",
                    features: ["Deep cleaning", "Shock treatment if needed", "Equipment reset", "Damage assessment", "Preparation for next guests"]
                  },
                  {
                    title: "Peak Season Intensified Service",
                    description: "Increased frequency during high-occupancy periods ensures consistent quality despite heavy usage. Perfect for properties with consecutive bookings.",
                    features: ["More frequent visits", "Enhanced chemical monitoring", "Proactive maintenance", "Priority scheduling", "Quality assurance"]
                  },
                  {
                    title: "Manager Coordination",
                    description: "Seamless communication with property managers including automated scheduling, service notifications, and detailed reporting for every visit.",
                    features: ["Calendar integration", "Automated notifications", "Digital reports", "Photo evidence", "Direct communication"]
                  }
                ].map((program, idx) => (
                  <Card key={idx}>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-3">{program.title}</h3>
                      <p className="text-muted-foreground mb-4">{program.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {program.features.map((feature, i) => (
                          <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Guest-Ready Guarantee */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center">
                <Star className="w-16 h-16 text-primary mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Guest-Ready Pool Guarantee for Villa Properties
                </h2>
                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    Our <strong>villa pool service Bali</strong> guarantee means pools are crystal clear, properly heated (if applicable), equipment functioning, and chemistry balanced for every check-in. We inspect pools within 24 hours of guest arrival to ensure perfection. If any guest reports pool issues, we respond within 2 hours to resolve problems and maintain your 5-star rating.
                  </p>
                  <p className="font-semibold text-foreground">
                    Serving major villa rental areas including Seminyak, Canggu, Ubud, Sanur, Nusa Dua, Jimbaran, and Uluwatu. Flexible scheduling coordinates with your booking calendar. Last-minute availability for unexpected bookings.
                  </p>
                </div>
                <Button size="lg" className="mt-8 h-14 px-8" onClick={() => setIsBookingOpen(true)}>
                  Protect Your 5-Star Reviews - Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 md:py-20 bg-foreground text-background">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Complete Villa Pool Care Solutions
              </h2>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Pool Cleaning</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      Learn about our detailed <Link href="/pool-cleaning-bali" className="text-primary hover:underline">pool cleaning process</Link> for villas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Maintenance Programs</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      View <Link href="/swimming-pool-maintenance-bali" className="text-primary hover:underline">maintenance options</Link> for private villas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-white/5 border-white/10">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-3 text-white">Emergency Service</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      <Link href="/green-pool-rescue-bali" className="text-primary hover:underline">Emergency service</Link> for rental property issues.
                    </p>
                  </CardContent>
                </Card>
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
