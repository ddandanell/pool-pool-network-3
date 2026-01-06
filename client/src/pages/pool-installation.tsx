import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Building, Waves, Mountain, Palmtree, Ruler, Paintbrush, Cog, CheckCircle2, ArrowRight, ShieldCheck, Award, Users } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";

const poolTypes = [
  {
    icon: Waves,
    title: "Infinity Pools",
    description: "Stunning vanishing edge pools that blend with Bali's breathtaking landscapes. Perfect for villas with ocean or rice field views.",
    image: heroImage
  },
  {
    icon: Building,
    title: "Villa & Resort Pools",
    description: "Custom-designed pools for luxury villas and boutique resorts. Combining aesthetics with functionality for the hospitality industry.",
    image: pumpImg
  },
  {
    icon: Palmtree,
    title: "Natural Lagoon Pools",
    description: "Organic, freeform pools that mimic natural lagoons. Beach entry designs and tropical landscaping integration.",
    image: heroImage
  },
  {
    icon: Mountain,
    title: "Lap & Fitness Pools",
    description: "Professional lap pools for exercise and training. Precise dimensions with optional swim jets for resistance training.",
    image: pumpImg
  }
];

const installationProcess = [
  {
    step: "01",
    title: "Design Consultation",
    description: "We meet at your site to understand your vision, assess the space, and discuss design options. Our team considers Bali's terrain, climate, and local regulations."
  },
  {
    step: "02",
    title: "Custom Design",
    description: "Our designers create detailed 3D renderings and plans for your approval. We incorporate your feedback until the design is perfect."
  },
  {
    step: "03",
    title: "Excavation & Structure",
    description: "Professional excavation followed by steel reinforcement and concrete shell construction. We use premium materials for Bali's conditions."
  },
  {
    step: "04",
    title: "Plumbing & Systems",
    description: "Installation of circulation plumbing, drainage, equipment pad, pump, filter, and any automation systems."
  },
  {
    step: "05",
    title: "Finishing & Tiling",
    description: "Application of waterproofing, tiling, coping, and deck finishing. We source quality materials that complement Bali's aesthetic."
  },
  {
    step: "06",
    title: "Fill & Commission",
    description: "Pool filling, chemical balancing, equipment testing, and final inspection. We provide training on pool operation and maintenance."
  }
];

export function PoolInstallation() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Installation Bali | Custom Swimming Pool Construction | Bali Pool Pros"
        description="Expert swimming pool installation in Bali. Custom infinity pools, villa pools, and resort pools. Professional design and construction. Get your dream pool built by Bali's pool experts."
        keywords="pool installation Bali, swimming pool construction Bali, infinity pool Bali, villa pool construction, pool builder Bali, custom pool design Bali, pool contractor Bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Beautiful infinity pool installation overlooking Bali rice fields"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                <Building className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Custom Pool Builders</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pool Installation <span className="text-primary">Bali</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Build your dream swimming pool in paradise. From stunning infinity pools to elegant villa pools, our expert team creates custom pools that enhance Bali's natural beauty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Request Design Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• 100+ Pools Installed</span>
            <span>• Custom Designs</span>
            <span>• Quality Materials</span>
            <span>• 5 Year Structural Warranty</span>
            <span>• Licensed Contractors</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Custom Swimming Pool Installation in Bali
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  A swimming pool is more than just a place to swim—it's the centerpiece of your Bali property, a sanctuary for relaxation, and an investment in your lifestyle. At Bali Pool Pros, we design and build custom pools that capture the essence of tropical paradise while meeting the highest standards of quality and durability.
                </p>
                <p>
                  Our pool installation team combines international construction standards with deep knowledge of Bali's unique conditions. We understand the challenges of building in volcanic soil, the importance of proper drainage during monsoon season, and how to create pools that complement the island's stunning natural landscapes.
                </p>
                <p>
                  From initial design consultation to final commissioning, we guide you through every step of the pool building process. Whether you're envisioning a dramatic infinity pool overlooking the ocean, a serene villa pool surrounded by tropical gardens, or a functional lap pool for daily exercise, we bring your vision to life with precision and artistry.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">100+</div>
                  <div className="text-sm text-muted-foreground">Pools Built</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <ShieldCheck className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">5yr</div>
                  <div className="text-sm text-muted-foreground">Structural Warranty</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Crew</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pool Types */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Types of Pools We Build in Bali
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From stunning infinity edges to natural lagoon designs, we create pools that perfectly complement Bali's tropical environment and your unique vision.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {poolTypes.map((pool, index) => (
                <Card key={index} className="overflow-hidden group hover:border-primary/50 transition-all">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={pool.image}
                      alt={`${pool.title} installation in Bali`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <pool.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2">{pool.title}</h3>
                        <p className="text-muted-foreground">{pool.description}</p>
                      </div>
                    </div>
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
              Building Pools for Bali's Unique Environment
            </h2>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <p>
                Building a swimming pool in Bali requires specialized knowledge that goes far beyond standard pool construction. The island's volcanic soil, tropical climate, and unique aesthetic demands make every project a custom challenge that we've spent 15 years mastering.
              </p>

              <h3 className="text-2xl font-bold text-foreground">Understanding Bali's Terrain</h3>
              <p>
                Bali's terrain varies dramatically from coastal sandy areas to dense volcanic clay in the highlands. Our pre-construction process includes thorough soil testing and site assessment to determine the appropriate foundation approach. We may need to excavate deeper, use additional reinforcement, or implement specialized drainage solutions depending on your property's specific conditions.
              </p>
              <p>
                For hillside properties—common in Ubud and the Bukit peninsula—we design pools that work with the natural slope. Infinity edges take advantage of dramatic drop-offs, creating visual connections between your pool and Bali's stunning landscapes. We ensure proper structural engineering to handle the lateral forces of hillside construction.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Climate Considerations</h3>
              <p>
                Bali's tropical climate influences every aspect of pool design and construction. We design drainage systems that handle monsoon-season downpours, preventing overflow and chemical dilution. Our pools are engineered for year-round warmth, eliminating the need for heating systems that are standard in temperate climates.
              </p>
              <p>
                The high UV exposure in Bali can fade pool finishes and degrade equipment faster than in other regions. We specify UV-resistant tiles, durable equipment housings, and proper shade structures to protect your investment from the intense tropical sun.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Materials and Quality</h3>
              <p>
                We use only premium materials suitable for Bali's conditions. Our reinforced concrete shells exceed international standards for strength and durability. We source tiles from reputable suppliers who understand the demands of tropical pool applications. Equipment is selected from leading brands like Hayward and Pentair, with proven reliability in Bali's environment.
              </p>
              <p>
                Every pool we build includes comprehensive waterproofing with multiple barrier layers. This is essential in Bali, where the combination of groundwater, heavy rain, and pool water creates challenging moisture conditions. Proper waterproofing prevents leaks, efflorescence, and structural damage.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Aesthetic Integration</h3>
              <p>
                Bali is renowned for its distinctive aesthetic—a blend of traditional Balinese architecture, tropical landscaping, and modern luxury. Our pool designs honor this aesthetic while meeting contemporary functionality needs. We work closely with architects, landscape designers, and villa owners to ensure each pool enhances its surroundings.
              </p>
              <p>
                Popular design elements include natural stone coping that matches local paras stone, bale-style pool houses, integrated water features, and landscaping that creates seamless transitions between pool and garden. We can incorporate traditional Balinese carved elements, modern minimalist lines, or a fusion of both styles.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Smart Pool Technology</h3>
              <p>
                For clients who want the latest in pool technology, we offer complete automation systems. Control your pool's pump, lighting, heating (if applicable), and water features from your smartphone. Automated chemical monitoring systems maintain perfect water balance with minimal intervention. Salt chlorination systems provide gentler sanitization.
              </p>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Pool Installation Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From concept to completion, we guide you through every step of building your dream pool in Bali.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {installationProcess.map((process, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-6xl font-bold text-primary/10">
                    {process.step}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{process.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Services Included */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                What's Included in Our Pool Installation
              </h2>
              <p className="text-muted-foreground mb-8">
                Our comprehensive pool installation package covers everything from initial design to final handover. No hidden surprises.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Ruler, text: "Site survey & soil testing" },
                  { icon: Paintbrush, text: "Custom 3D design & plans" },
                  { icon: Building, text: "Excavation & construction" },
                  { icon: Cog, text: "Quality equipment package" },
                  { icon: Waves, text: "Tiling & waterproofing" },
                  { icon: CheckCircle2, text: "Fill, balance & commission" },
                  { icon: ShieldCheck, text: "5-year structural warranty" },
                  { icon: Users, text: "Owner training & manual" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="p-8 bg-foreground text-background h-full">
                <h3 className="text-2xl font-bold mb-6">Start Your Pool Project</h3>
                <p className="text-gray-400 mb-8">
                  Ready to build your dream pool in Bali? Schedule a free design consultation with our team. We'll visit your site, discuss your vision, and provide a detailed proposal.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Free Site Visit</p>
                      <p className="text-sm text-gray-400">We assess your property and discuss possibilities</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Custom Design</p>
                      <p className="text-sm text-gray-400">3D renderings tailored to your vision</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Transparent Quote</p>
                      <p className="text-sm text-gray-400">Detailed breakdown with no hidden fees</p>
                    </div>
                  </div>
                </div>

                <Link href="/contact">
                  <Button size="lg" className="w-full h-12">
                    Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build Your Dream Pool in Bali?
              </h2>
              <p className="text-white/80 max-w-2xl mx-auto mb-8">
                Let's create something beautiful together. From concept to completion, our expert team will guide you through every step of the pool installation process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" variant="secondary" className="h-12 px-8">
                    Get Started Today <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white/30 hover:bg-white/10 text-white">
                    Meet Our Team
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
