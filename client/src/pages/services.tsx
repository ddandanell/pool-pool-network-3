import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "wouter";
import { Activity, Cog, Droplet, Wrench, Building, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@assets/generated_images/modern_pool_pump_system.png";
import leakImg from "@assets/generated_images/pool_leak_detection_equipment.png";

const services = [
  {
    title: "Pool Maintenance Bali",
    slug: "/pool-maintenance",
    icon: Sparkles,
    description: "Regular maintenance keeps your pool sparkling clean and safe. Our weekly and monthly maintenance programs are designed specifically for Bali's tropical climate, preventing algae growth and equipment issues before they become costly problems.",
    features: ["Weekly water testing", "Chemical balancing", "Skimming & vacuuming", "Filter cleaning", "Equipment inspection"],
    image: heroImage
  },
  {
    title: "Pool Repair Bali",
    slug: "/pool-repair",
    icon: Wrench,
    description: "From minor fixes to major repairs, our certified technicians handle all pool repair needs. We specialize in leak detection, pump repairs, filter systems, and structural repairs using advanced diagnostic equipment.",
    features: ["Leak detection & repair", "Pump overhaul", "Filter maintenance", "Tile replacement", "Plumbing repair"],
    image: leakImg
  },
  {
    title: "Pool Installation Bali",
    slug: "/pool-installation",
    icon: Building,
    description: "Build your dream pool with Bali's expert installation team. From design consultation to final finishing, we create stunning pools that complement Bali's tropical beauty while meeting international quality standards.",
    features: ["Design consultation", "Excavation & construction", "Infinity pool specialists", "Equipment installation", "Tiling & finishing"],
    image: heroImage
  },
  {
    title: "Pool Cleaning Bali",
    slug: "/services",
    icon: Droplet,
    description: "Professional cleaning services for crystal-clear water. Our cleaning team uses eco-friendly products and thorough techniques to remove algae, debris, and buildup, keeping your pool inviting and healthy.",
    features: ["Deep cleaning", "Algae removal", "Surface brushing", "Tile descaling", "Drain & refill"],
    image: leakImg
  },
  {
    title: "Leak Detection",
    slug: "/pool-repair",
    icon: Activity,
    description: "Stop water loss with our advanced leak detection technology. Using ultrasonic equipment and pressure testing, we locate leaks with precision—saving you money on water bills and preventing structural damage.",
    features: ["Ultrasonic scanning", "Pressure testing", "Dye testing", "Non-destructive methods", "Detailed reporting"],
    image: leakImg
  },
  {
    title: "Equipment Services",
    slug: "/pool-repair",
    icon: Cog,
    description: "Pump repairs, filter maintenance, and equipment upgrades for all major brands. Our technicians are certified to service Hayward, Pentair, Astral, and more—keeping your pool systems running efficiently.",
    features: ["Pump repair & replacement", "Filter media changes", "Heater servicing", "Automation systems", "Energy efficiency upgrades"],
    image: heroImage
  }
];

export function Services() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Services in Bali | Maintenance, Repair & Installation | Bali Pool Pros"
        description="Comprehensive pool services in Bali: maintenance, repair, installation, cleaning, and leak detection. Expert technicians serving villas, resorts, and homes across Bali. Get a free quote today."
        keywords="pool services Bali, pool maintenance Bali, pool repair Bali, pool installation Bali, pool cleaning Bali, pool leak detection Bali, swimming pool service Bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Professional pool service equipment in Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Complete <span className="text-primary">Pool Services</span> in Bali
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                From routine maintenance to complex repairs and stunning new installations, we offer comprehensive pool services tailored to Bali's unique tropical environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8" asChild>
                  <a href="https://wa.me/6282237565997" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Banner */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• 15+ Years Experience</span>
            <span>• 50+ Certified Technicians</span>
            <span>• Island-Wide Coverage</span>
            <span>• 1 Year Warranty</span>
            <span>• 24/7 Emergency Service</span>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Pool Services in Bali
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Bali Pool Pros offers a complete range of professional pool services designed to keep your swimming pool in perfect condition. Our expert team combines local knowledge with international standards to deliver exceptional results for villas, resorts, and residential properties across Bali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
                <div className="aspect-video overflow-hidden bg-muted relative">
                  <img
                    src={service.image}
                    alt={`${service.title} - Professional pool service in Bali`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 p-2 rounded-lg bg-background/90 backdrop-blur-sm">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4 leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link href={service.slug}>
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Detailed Content Section */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose Our Pool Services in Bali?
                </h2>
                <div className="prose prose-lg text-muted-foreground space-y-4">
                  <p>
                    Operating a pool in Bali presents unique challenges that require specialized knowledge and expertise. The tropical climate, with its high humidity and abundant rainfall during monsoon season, creates ideal conditions for algae growth and water chemistry imbalances. At Bali Pool Pros, we've spent over 15 years mastering the art of pool care in this beautiful but demanding environment.
                  </p>
                  <p>
                    Our comprehensive pool services in Bali address every aspect of pool ownership. Whether you're a villa owner seeking reliable weekly maintenance, a resort manager needing efficient pool management, or a homeowner facing an urgent repair issue, our team of 50+ certified technicians is ready to help. We service all areas of Bali, from Ubud's lush interior to the bustling beaches of Seminyak and Canggu.
                  </p>
                  <p>
                    What sets us apart is our commitment to using advanced technology and eco-friendly practices. Our ultrasonic leak detection equipment can locate hidden leaks without destructive excavation, saving you time and money. We use environmentally responsible chemicals that are effective yet gentle on Bali's precious ecosystem. And our digital reporting system keeps you informed about your pool's condition at all times.
                  </p>
                  <p>
                    Every pool service we provide comes with our satisfaction guarantee and a 1-year warranty on repairs. We believe in transparent pricing with no hidden fees, and our customer service team is available around the clock for emergencies. When you choose Bali Pool Pros, you're choosing Bali's most trusted pool service provider.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6">Areas We Serve in Bali</h3>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {["Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua", "Jimbaran", "Uluwatu", "Kuta", "Legian", "Denpasar", "Gianyar", "Tabanan"].map((area) => (
                    <div key={area} className="flex items-center gap-2 p-3 bg-background rounded-lg border">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      <span className="font-medium">{area}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Service Packages</h3>
                <div className="space-y-4">
                  <Card className="p-6">
                    <h4 className="font-bold text-lg mb-2">Weekly Maintenance</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Perfect for villas and homes. Includes water testing, chemical balancing, skimming, and equipment check.
                    </p>
                    <p className="text-primary font-bold">Contact us to get a price</p>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-bold text-lg mb-2">Resort Management</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Daily service for hotels and resorts. Multiple pool coverage, 24/7 support, and priority repairs.
                    </p>
                    <p className="text-primary font-bold">Contact us to get a price</p>
                  </Card>
                  <Card className="p-6">
                    <h4 className="font-bold text-lg mb-2">Diagnostic Visit</h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      Complete pool inspection with leak detection, equipment assessment, and detailed report.
                    </p>
                    <p className="text-primary font-bold">Contact us to get a price</p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience Bali's Best Pool Service?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Join hundreds of satisfied pool owners across Bali. Get a free consultation and quote for any pool service today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white/20 hover:bg-white/10">
                    Learn About Us
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
