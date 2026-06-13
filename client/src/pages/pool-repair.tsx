import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Wrench, Activity, Cog, Droplet, ShieldCheck, Clock, Search, FileText, ArrowRight, CheckCircle2, AlertTriangle } from "lucide-react";
import leakImg from "@assets/generated_images/pool_leak_detection_equipment.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";

const repairServices = [
  {
    icon: Activity,
    title: "Leak Detection & Repair",
    description: "Using advanced ultrasonic technology and pressure testing, we locate and repair leaks in pool shells, pipes, and fittings without destructive excavation.",
    features: ["Ultrasonic leak detection", "Pressure testing", "Dye testing", "Shell crack repair", "Pipe repair"]
  },
  {
    icon: Cog,
    title: "Pump Repair & Service",
    description: "Complete pump repair services for all major brands including Hayward, Pentair, and Astral. From seal replacements to motor rewinding, we fix it all.",
    features: ["Bearing replacement", "Seal kit installation", "Motor rewinding", "Impeller repair", "Pump replacement"]
  },
  {
    icon: Droplet,
    title: "Filtration System Repair",
    description: "Expert repair of sand filters, cartridge filters, and DE filters. We restore optimal filtration to keep your water crystal clear.",
    features: ["Filter media replacement", "Lateral repair", "Multiport valve service", "Glass media upgrades", "Pressure optimization"]
  },
  {
    icon: Wrench,
    title: "Structural Repairs",
    description: "Professional repair of pool shells, tiles, and coping. We fix cracks, replace damaged tiles, and restore pool surfaces to like-new condition.",
    features: ["Tile replacement", "Grout repair", "Shell crack repair", "Coping restoration", "Surface refinishing"]
  }
];

const repairProcess = [
  {
    icon: Search,
    step: "1",
    title: "Diagnostic Assessment",
    description: "Complete inspection using advanced equipment to identify the exact cause and location of the problem."
  },
  {
    icon: FileText,
    step: "2",
    title: "Detailed Report",
    description: "You receive a comprehensive report with findings, photos, and a transparent quote for the repair work."
  },
  {
    icon: Wrench,
    step: "3",
    title: "Precision Repair",
    description: "Our certified technicians perform the repair using quality materials and proven techniques."
  },
  {
    icon: ShieldCheck,
    step: "4",
    title: "Testing & Warranty",
    description: "We verify the repair is successful and provide a 1-year warranty on all workmanship."
  }
];

export function PoolRepair() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Repair Bali | Leak Detection, Pump Repair & Equipment Service | Bali Pool Care"
        description="Expert pool repair services in Bali. Ultrasonic leak detection, pump repair, filter service, and structural repairs. 24/7 emergency service. 1-year warranty. Serving all of Bali."
        keywords="pool repair Bali, pool leak detection Bali, pool pump repair Bali, pool equipment repair, swimming pool repair service, Bali pool technicians, pool leak repair"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={leakImg}
              alt="Professional pool repair and leak detection equipment in Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-destructive/10 border border-destructive/20 text-destructive mb-4">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">24/7 Emergency Service</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pool Repair <span className="text-primary">Bali</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
                Expert pool repair services with advanced diagnostic technology. We locate and fix leaks, repair pumps, and restore equipment—fast. 1-year warranty on all repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Book Repair <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 border-destructive/30 text-destructive hover:bg-destructive/10" asChild>
                  <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
                    WhatsApp Emergency
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Banner */}
        <section className="bg-primary py-4 overflow-hidden">
          <div className="container flex items-center justify-between text-primary-foreground/90 font-mono text-xs md:text-sm uppercase tracking-widest overflow-x-auto whitespace-nowrap gap-8 no-scrollbar px-4">
            <span>• Ultrasonic Leak Detection</span>
            <span>• Authorized Hayward Techs</span>
            <span>• 1 Year Warranty</span>
            <span>• Same Day Service</span>
            <span>• Transparent Pricing</span>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Expert Pool Repair Services in Bali
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  Pool problems in Bali can quickly escalate from minor inconveniences to major expenses. A small leak can waste thousands of liters of water and damage surrounding structures. A failing pump can leave your pool unfiltered and unsafe within days. That's why prompt, professional pool repair is essential in Bali's demanding tropical environment. We work with trusted water system specialists like <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Aqua Pure Bali</a> for comprehensive solutions.
                </p>
                <p>
                  At Bali Pool Care, we specialize in diagnosing and repairing pool problems with precision and efficiency. Our team of certified technicians uses advanced diagnostic equipment—including ultrasonic leak detectors and pressure testing systems—to identify issues accurately without unnecessary destruction or guesswork. As a leading member of the <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Bali pool service network</a>, we maintain the highest standards of quality and service.
                </p>
                <p>
                  From minor seal replacements to major structural repairs, we have the expertise and equipment to handle any pool repair challenge. We service all major equipment brands, stock common spare parts for quick repairs, and provide a 1-year warranty on all our work. Whether it's an emergency at 2 AM or a scheduled repair, our team is ready to restore your pool to perfect condition.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">1 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">24/7 Emergency</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-lg">
                  <Activity className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium">Advanced Diagnostics</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={pumpImg}
                alt="Pool pump repair service in Bali - professional equipment maintenance"
                className="rounded-2xl shadow-lg w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Wrench className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-2xl">2hr</p>
                    <p className="text-sm text-muted-foreground">Avg. Response Time</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Repair Services Grid */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Pool Repair Services We Offer in Bali
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive repair solutions for every pool problem. Our certified technicians handle everything from minor fixes to major overhauls.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {repairServices.map((service, index) => (
                <Card key={index} className="p-6 hover:border-primary/50 transition-colors">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground mb-4">{service.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <span key={i} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Content */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Common Pool Problems in Bali and How We Fix Them
            </h2>

            <div className="prose prose-lg text-muted-foreground space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Pool Leaks in Bali</h3>
              <p>
                Pool leaks are one of the most common problems facing pool owners in Bali. A leaking pool can waste hundreds of liters of water daily, leading to high water bills and potential structural damage to your villa or property. Leaks can occur in the pool shell, plumbing lines, around fittings, or at the equipment pad.
              </p>
              <p>
                Our leak detection process uses advanced ultrasonic equipment that can hear the sound of water escaping through even the smallest cracks. Combined with pressure testing and dye testing, we can pinpoint the exact location of leaks without destructive excavation. Once located, our skilled technicians repair the leak using appropriate methods—from underwater epoxy patching to pipe replacement—ensuring a lasting fix.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Pump Failures</h3>
              <p>
                Pool pumps in Bali work extremely hard. The warm climate means pools need constant circulation to prevent stagnation and algae growth. This heavy workload, combined with Bali's humidity and occasional power fluctuations, takes a toll on pump motors, bearings, and seals.
              </p>
              <p>
                Common pump issues we repair include worn bearings that cause loud grinding noises, failed mechanical seals that cause leaks at the pump housing, burned-out motors from electrical issues, and clogged impellers that reduce water flow. Our technicians are certified to repair all major pump brands including Hayward, Pentair, Astral, Emaux, and Waterco. We carry common spare parts and can often complete repairs same-day.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Filter Problems</h3>
              <p>
                Pool filters in Bali face heavy loads from tropical debris, dust, and the mineral content in local water. Sand filters may develop channeling where water bypasses the sand, reducing filtration efficiency. Cartridge filters can become clogged beyond cleaning. Multiport valves can leak or fail to seal properly.
              </p>
              <p>
                Our filter repair services include complete sand or glass media changes, lateral repair for sand filters, multiport valve rebuilds, and system pressure optimization. We also offer filter upgrades, such as converting from traditional sand to glass media for improved filtration and longer service life.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Tile and Structural Damage</h3>
              <p>
                Bali's climate causes expansion and contraction of pool materials, leading to cracked tiles, loose grout, and shell cracks over time. Additionally, tropical storms can cause impact damage, and chemical imbalances can erode surfaces. These structural issues not only look unsightly but can develop into leaks if left unrepaired.
              </p>
              <p>
                Our structural repair team specializes in underwater tile replacement, epoxy grout application, shell crack repair, and surface refinishing. We match existing tiles where possible or help you select complementary replacements for a seamless repair.
              </p>

              <h3 className="text-2xl font-bold text-foreground mt-8">Equipment and Automation Issues</h3>
              <p>
                Modern pools often feature automated systems for chlorination, pH control, lighting, and heating. These systems require specialized knowledge to diagnose and repair. Whether your salt chlorinator isn't producing chlorine, your automated controller is malfunctioning, or your pool lights have failed, our technicians have the expertise to troubleshoot and repair the issue.
              </p>
            </div>
          </div>
        </section>

        {/* Repair Process */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Pool Repair Process
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                A systematic approach that ensures accurate diagnosis and lasting repairs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {/* Connector Line (Desktop) */}
              <div className="hidden lg:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-border z-0" />

              {repairProcess.map((process, index) => (
                <div key={index} className="relative z-10 flex flex-col items-center text-center group">
                  <div className="w-24 h-24 rounded-full bg-background border-2 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-sm">
                    <process.icon className="w-10 h-10 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed px-4">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Info */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transparent Pool Repair Pricing in Bali
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  We believe in honest, upfront pricing for all pool repair services. Contact us to get a price for our diagnostic visit, which includes a complete inspection, leak detection if needed, and a detailed report with repair recommendations.
                </p>
                <p>
                  The best part? The diagnostic fee is fully credited toward any repair work you approve. This means if we find a problem and you choose to have us fix it, you only pay for the repair—the inspection is on us.
                </p>
                <p>
                  All repairs come with our 1-year warranty on workmanship and parts. If any issue arises from our repair within the warranty period, we'll fix it at no additional cost.
                </p>
              </div>
            </div>
            <div>
              <Card className="p-8 bg-foreground text-background">
                <h3 className="text-2xl font-bold mb-6">Diagnostic Visit</h3>
                <div className="text-2xl font-bold mb-2">Contact us to get a price</div>
                <p className="text-gray-400 mb-6">Credited toward repairs</p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Complete pool inspection",
                    "Leak detection scan",
                    "Equipment assessment",
                    "Pressure testing",
                    "Detailed PDF report",
                    "Transparent repair quote"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <Button size="lg" className="w-full h-12">
                    Book Diagnostic <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </section>

        {/* Emergency CTA */}
        <section className="py-16 md:py-20 bg-destructive/5 border-y border-destructive/20">
          <div className="container px-4 md:px-6 text-center">
            <AlertTriangle className="w-16 h-16 text-destructive mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pool Emergency in Bali?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Major leak, pump failure, or another urgent issue? Our emergency response team is available 24/7 across Bali. Contact us via WhatsApp now.
            </p>
            <Button size="lg" variant="destructive" className="h-14 px-10 text-lg" asChild>
              <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
                WhatsApp Emergency
              </a>
            </Button>
          </div>
        </section>

        <FAQ />
      </main>

      <Footer />
    </div>
  );
}
