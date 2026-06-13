import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { Users, Award, Shield, Target, MapPin, Phone, Mail, Linkedin, ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";

const teamMembers = [
  {
    name: "I Made Putra",
    role: "Founder & Lead Technician",
    bio: "With over 15 years of experience in pool repair and maintenance, Made founded Bali Pool Care to bring professional pool services to the island. He specializes in Bali's unique water systems and has trained over 50 local technicians.",
    expertise: "Leak Detection, Equipment Repair"
  },
  {
    name: "Sarah Mitchell",
    role: "Operations Director",
    bio: "Originally from Australia, Sarah brings international hospitality standards to our operations. She ensures every villa and resort receives world-class service with a personal touch that Bali is known for.",
    expertise: "Client Relations, Quality Assurance"
  },
  {
    name: "I Wayan Dharma",
    role: "Senior Pool Engineer",
    bio: "Wayan is our filtration and hydraulics expert with a decade of experience designing and installing pool systems for luxury resorts. He leads our installation team and oversees all major projects.",
    expertise: "Pool Installation, Filtration Systems"
  },
  {
    name: "Ketut Suartika",
    role: "Chemical Specialist",
    bio: "Certified in water chemistry and treatment, Ketut ensures every pool we service maintains perfect water balance. His expertise is crucial in Bali's humid climate where chemical levels can fluctuate rapidly.",
    expertise: "Water Chemistry, Sanitization"
  },
  {
    name: "John Anderson",
    role: "Technical Consultant",
    bio: "A retired pool industry veteran from California, John provides technical consulting and training for our team. He brings American engineering standards to complement local expertise.",
    expertise: "Training, Technical Standards"
  },
  {
    name: "Ni Luh Rai",
    role: "Customer Service Manager",
    bio: "Rai coordinates all bookings and ensures seamless communication between clients and our technical teams. Fluent in English, Indonesian, and Japanese, she serves our diverse international clientele.",
    expertise: "Scheduling, Client Communication"
  }
];

export function About() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="About Us | Bali Pool Care - Expert Pool Service Team in Bali"
        description="Learn about Bali Pool Care, Bali's leading pool service company. Our expert team of pool technicians has served over 500 villas and resorts since 2010. Meet our certified professionals."
        keywords="Bali pool experts, pool service team Bali, pool technicians Bali, about Bali Pool Care, pool maintenance company Bali"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Bali Pool Care team providing professional pool service in Bali"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About <span className="text-primary">Bali Pool Care</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Bali's most trusted pool service company since 2010. We combine local expertise with international standards to deliver exceptional pool maintenance, repair, and installation services.
              </p>
            </div>
          </div>
        </section>

        {/* Company Overview */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Your Trusted Pool Service Partner in Bali
              </h2>
              <div className="prose prose-lg text-muted-foreground space-y-4">
                <p>
                  At Bali Pool Care, we understand that your pool is more than just a place to swim—it's the heart of your villa, resort, or home. In Bali's tropical paradise, a crystal-clear pool enhances the beauty of your property and provides a refreshing escape from the warm climate. That's why we've dedicated ourselves to becoming Bali's premier pool service provider.
                </p>
                <p>
                  Our team of certified technicians brings together the best of local knowledge and international expertise. We understand the unique challenges that Bali's climate presents: the high humidity that accelerates algae growth, the monsoon seasons that bring debris and affect water chemistry, and the mineral-rich local water that can cause scaling and equipment issues. We partner with industry leaders like <a href="https://aquapurebali.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Aqua Pure Bali</a> to ensure comprehensive water quality management.
                </p>
                <p>
                  From routine maintenance and cleaning to complex repairs and complete pool installations, we offer comprehensive pool services tailored to Bali's environment. As a key member of the <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-semibold">Bali pool service network</a>, whether you own a private villa in Ubud, manage a beachfront resort in Seminyak, or operate a boutique hotel in Canggu, our professional team is ready to keep your pool in perfect condition year-round.
                </p>
                <p>
                  We pride ourselves on using eco-friendly products and sustainable practices that protect Bali's beautiful environment while ensuring your pool remains safe and inviting. Our commitment to quality, transparency, and customer satisfaction has made us the preferred choice for hundreds of pool owners across the island.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Trained Technicians</div>
                </CardContent>
              </Card>
              <Card className="text-center p-6">
                <CardContent className="pt-4">
                  <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                  <div className="text-sm text-muted-foreground">Client Rating</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From a small maintenance team to Bali's leading pool service provider
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">2010</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">The Beginning</h3>
                  <p className="text-muted-foreground">
                    Founded by I Made Putra, a local Balinese pool technician, and John Anderson, an expatriate engineer from California, Bali Pool Care started as a small maintenance team serving villas in the Ubud area. With just three technicians and a commitment to quality, we began building our reputation one pool at a time.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">2013</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Expansion to South Bali</h3>
                  <p className="text-muted-foreground">
                    As word of our reliable service spread, we expanded operations to cover Seminyak, Kuta, and the growing Canggu area. We invested in advanced diagnostic equipment and became one of the first companies in Bali to offer ultrasonic leak detection services.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">2016</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Resort Partnership Program</h3>
                  <p className="text-muted-foreground">
                    We launched our dedicated resort partnership program, providing comprehensive pool management for luxury hotels and resorts. Our team grew to 25 technicians, and we became authorized service providers for major equipment brands including Hayward and Pentair.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Innovation & Sustainability</h3>
                  <p className="text-muted-foreground">
                    During challenging times, we pivoted to focus on sustainability and innovation. We introduced eco-friendly pool treatment options, solar-powered equipment installations, and digital monitoring systems. Our commitment to Bali's environment became a core part of our mission.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-bold text-primary">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Island-Wide Coverage</h3>
                  <p className="text-muted-foreground">
                    Today, Bali Pool Care serves the entire island with a team of over 50 certified technicians. We've completed more than 500 projects, from simple repairs to complete infinity pool installations. Our dedication to excellence has earned us a 4.9-star rating from hundreds of satisfied clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every pool service we provide in Bali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6 hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Quality Assurance</h3>
                <p className="text-sm text-muted-foreground">
                  Every pool service meets our rigorous quality standards. We don't cut corners—we deliver excellence.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Precision & Accuracy</h3>
                <p className="text-sm text-muted-foreground">
                  We use advanced diagnostics to identify problems accurately. No guesswork—just precise solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Customer First</h3>
                <p className="text-sm text-muted-foreground">
                  Your satisfaction is our priority. We communicate clearly and deliver on our promises.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 hover:border-primary/50 transition-colors">
              <CardContent className="pt-4">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Eco-Friendly</h3>
                <p className="text-sm text-muted-foreground">
                  We protect Bali's environment with sustainable practices and eco-friendly pool treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Expert Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Certified pool professionals dedicated to keeping Bali's pools in perfect condition
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-background/80 flex items-center justify-center text-3xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="font-mono text-muted-foreground">Expertise:</span>
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded">{member.expertise}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="bg-foreground text-background rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work With Bali's Pool Experts?
                </h2>
                <p className="text-gray-400 mb-6">
                  Whether you need routine maintenance, emergency repairs, or a brand new pool, our team is ready to help. Contact us today for a free consultation.
                </p>
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Main Office</p>
                    <p className="text-sm text-gray-400">Jl. Raya Ubud No. 45, Gianyar, Bali 80571</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">WhatsApp Us</p>
                    <p className="text-sm text-gray-400">+62 823-2301-1656</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">info@balipoolservice.com</p>
                  </div>
                </div>
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
