import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FAQ } from "@/components/FAQ";
import { SEOHead } from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "wouter";
import { BookOpen, Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";
import pumpImg from "@assets/generated_images/modern_pool_pump_system.png";
import leakImg from "@assets/generated_images/pool_leak_detection_equipment.png";

const blogPosts = [
  {
    id: 1,
    title: "How to Maintain Your Pool During Bali's Monsoon Season",
    excerpt: "Bali's wet season brings unique challenges for pool owners. Learn essential tips to keep your pool clean and balanced despite heavy rains and increased debris.",
    image: heroImage,
    author: "I Made Putra",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Pool Maintenance",
    content: `
      <p>Bali's monsoon season, typically running from November through March, presents unique challenges for pool owners across the island. The combination of heavy rainfall, increased humidity, and tropical debris can quickly turn a sparkling pool into a maintenance nightmare if you're not prepared.</p>

      <h2>Understanding Monsoon Season Effects on Your Pool</h2>
      <p>During the wet season, your pool faces several challenges that require extra attention. Heavy rains dilute pool chemicals, raising pH levels and reducing chlorine effectiveness. The increased organic matter from falling leaves, flowers, and debris feeds algae growth. Higher humidity accelerates the development of bacteria and other microorganisms.</p>

      <h2>Essential Monsoon Season Pool Maintenance Tips</h2>
      <h3>1. Test Water Chemistry More Frequently</h3>
      <p>During dry season, weekly testing is usually sufficient. During monsoon season, we recommend testing your pool water at least twice per week, especially after heavy rains. Pay close attention to pH levels, which tend to rise after rainfall, and chlorine levels, which drop as rainwater dilutes your pool.</p>

      <h3>2. Increase Filtration Time</h3>
      <p>Run your pool pump for longer periods during the wet season. If you normally run it for 8 hours daily, consider extending to 10-12 hours. The additional circulation helps prevent stagnant areas where algae can develop and ensures your sanitizer is distributed evenly.</p>

      <h3>3. Skim and Clean More Often</h3>
      <p>Tropical storms drop significant amounts of leaves, flowers, and organic matter into pools. Skim your pool daily during monsoon season, and consider using a pool cover when the pool is not in use. Remove debris before it sinks and decomposes, which affects water chemistry and provides nutrients for algae.</p>

      <h3>4. Maintain Proper Water Level</h3>
      <p>Heavy rains can raise your pool's water level significantly. If water rises above the optimal skimmer level, drainage becomes less effective. After major storms, use a submersible pump or your filter's waste setting to lower water to the proper level.</p>

      <h3>5. Use Algaecide Preventatively</h3>
      <p>During monsoon season, it's wise to add a quality algaecide as a preventive measure. This creates an additional barrier against algae blooms, which can develop quickly in Bali's warm, humid conditions.</p>

      <h2>When to Call a Professional</h2>
      <p>If you notice persistent cloudiness, visible algae growth, or can't maintain proper chemical balance despite your efforts, it's time to call the professionals. At Bali Pool Pros, we offer specialized monsoon season maintenance packages that include more frequent visits and proactive treatment.</p>
    `
  },
  {
    id: 2,
    title: "Signs Your Pool Has a Leak and What to Do About It",
    excerpt: "Losing water faster than evaporation can explain? Your pool might have a leak. Here are the telltale signs and how professional leak detection works in Bali.",
    image: leakImg,
    author: "John Anderson",
    date: "December 10, 2024",
    readTime: "10 min read",
    category: "Pool Repair",
    content: `
      <p>A leaking pool is more than just an inconvenience—it's a threat to your property, your water bills, and Bali's precious freshwater resources. Identifying a pool leak early can save you thousands of rupiah and prevent serious structural damage. Here's what every pool owner in Bali needs to know about pool leaks.</p>

      <h2>How to Know If Your Pool Is Leaking</h2>
      <h3>The Bucket Test</h3>
      <p>The simplest way to determine if your pool is losing water to evaporation or a leak is the bucket test. Fill a bucket with pool water and place it on the pool steps. Mark both the water level inside the bucket and the pool water level outside. After 24 hours, compare the two. If the pool level dropped more than the bucket level, you likely have a leak.</p>

      <h3>Common Signs of Pool Leaks</h3>
      <ul>
        <li>Losing more than 6mm of water per day (normal evaporation in Bali is 3-6mm)</li>
        <li>Needing to add water more than once per week</li>
        <li>Cracks in the pool deck or shifting of the deck material</li>
        <li>Wet spots in your yard, especially near pool equipment</li>
        <li>Air bubbles in the return lines when the pump is running</li>
        <li>Constantly running autofill systems</li>
        <li>Increased chemical usage to maintain balance</li>
        <li>Algae forming despite proper chemical treatment</li>
      </ul>

      <h2>Where Pool Leaks Commonly Occur</h2>
      <p>Understanding where leaks typically occur helps in both prevention and detection. In Bali's pools, we commonly find leaks in:</p>
      <ul>
        <li><strong>Pool shell:</strong> Cracks from ground movement or settling</li>
        <li><strong>Plumbing lines:</strong> Underground pipes that have deteriorated or been damaged</li>
        <li><strong>Light fixtures:</strong> Seals around pool lights can fail over time</li>
        <li><strong>Skimmers:</strong> The joint between the skimmer and pool wall</li>
        <li><strong>Return fittings:</strong> Where water returns to the pool</li>
        <li><strong>Main drain:</strong> The fitting at the pool bottom</li>
      </ul>

      <h2>Professional Leak Detection in Bali</h2>
      <p>At Bali Pool Pros, we use advanced technology to locate leaks precisely without destructive excavation. As part of the professional <a href="https://balipoolservice.com/" target="_blank" rel="noopener noreferrer" style="color: #3b82f6; font-weight: 600; text-decoration: none;">Bali pool service network</a>, our process includes:</p>
      <ol>
        <li><strong>Visual Inspection:</strong> Examining the pool, equipment, and surrounding area for obvious issues</li>
        <li><strong>Pressure Testing:</strong> Isolating and pressurizing plumbing lines to identify line leaks</li>
        <li><strong>Ultrasonic Detection:</strong> Using sensitive hydrophones to listen for the sound of escaping water</li>
        <li><strong>Dye Testing:</strong> Using specialized dye to visualize water movement at suspected leak points</li>
      </ol>

      <h2>Impact of Ignoring a Pool Leak</h2>
      <p>A pool leaking just 25mm per day wastes approximately 150,000 liters of water per year. That's water literally going down the drain—not to mention the additional chemicals needed to maintain a constantly refilling pool. Beyond the immediate impact, leaks can cause soil erosion, damage landscaping, and in severe cases, undermine structural foundations.</p>
    `
  },
  {
    id: 3,
    title: "Choosing the Right Pool Pump for Your Bali Villa",
    excerpt: "Pool pumps are the heart of your pool system. Learn how to choose, size, and maintain the perfect pump for Bali's unique conditions.",
    image: pumpImg,
    author: "I Wayan Dharma",
    date: "December 5, 2024",
    readTime: "12 min read",
    category: "Equipment",
    content: `
      <p>Your pool pump is the heart of your pool circulation system. It pulls water from your pool, pushes it through the filter, and returns clean, treated water. In Bali's demanding climate, choosing the right pump—and maintaining it properly—is crucial for pool health and energy efficiency.</p>

      <h2>Understanding Pool Pump Basics</h2>
      <p>Pool pumps are rated by horsepower (HP) and flow rate (liters per minute). For most residential pools in Bali, pumps range from 0.5 HP to 2.0 HP. The right size depends on your pool volume, plumbing diameter, and desired turnover rate—the time it takes to circulate your entire pool volume through the filter.</p>

      <h2>Single-Speed vs. Variable-Speed Pumps</h2>
      <h3>Single-Speed Pumps</h3>
      <p>Traditional single-speed pumps run at one constant speed. They're less expensive upfront but use more electricity because they run at full power whenever operating. In Bali, where pools need extended run times due to the warm climate, electricity usage adds up quickly.</p>

      <h3>Variable-Speed Pumps</h3>
      <p>Modern variable-speed pumps adjust their speed based on needs. For daily circulation, they run at low speed, using a fraction of the electricity. For vacuuming or running water features, they can ramp up to full power. Variable-speed pumps offer significant electricity savings over time.</p>

      <h2>Top Pump Brands We Recommend for Bali</h2>
      <ul>
        <li><strong>Hayward:</strong> Reliable and widely available, with excellent local support</li>
        <li><strong>Pentair:</strong> Premium quality with industry-leading variable-speed models</li>
        <li><strong>Astral:</strong> European quality with strong presence in Southeast Asia</li>
        <li><strong>Emaux:</strong> Good value option with solid performance</li>
      </ul>

      <h2>Sizing Your Pool Pump</h2>
      <p>Proper pump sizing is critical. An undersized pump won't adequately circulate and filter your water. An oversized pump wastes energy, can damage your filter, and creates excessive noise. Key factors in sizing include:</p>
      <ul>
        <li><strong>Pool volume:</strong> Larger pools need more flow</li>
        <li><strong>Pipe diameter:</strong> Smaller pipes restrict flow, limiting effective pump size</li>
        <li><strong>Head pressure:</strong> Elevation changes and plumbing complexity affect pump requirements</li>
        <li><strong>Desired turnover rate:</strong> In Bali's climate, we recommend 6-8 hour turnover</li>
      </ul>

      <h2>Maintaining Your Pool Pump in Bali's Climate</h2>
      <p>Bali's humidity and salt air (in coastal areas) take a toll on pool equipment. Extend your pump's life with these maintenance practices:</p>
      <ol>
        <li>Clean the strainer basket weekly to ensure proper flow</li>
        <li>Listen for unusual noises that indicate bearing wear</li>
        <li>Check for leaks around the pump seal regularly</li>
        <li>Ensure the motor has adequate ventilation</li>
        <li>Schedule annual professional inspection and service</li>
      </ol>

      <p>At Bali Pool Pros, we're authorized service providers for all major pump brands. Whether you need pump selection advice, installation, or repair, our certified technicians are here to help.</p>
    `
  },
  {
    id: 4,
    title: "Saltwater vs. Chlorine Pools: Which Is Best for Bali?",
    excerpt: "Explore the pros and cons of saltwater and traditional chlorine pools in Bali's tropical climate. Make an informed decision for your pool.",
    image: heroImage,
    author: "Ketut Suartika",
    date: "November 28, 2024",
    readTime: "9 min read",
    category: "Pool Maintenance",
    content: `
      <p>One of the most common questions we receive from pool owners in Bali is whether to use a traditional chlorine system or convert to saltwater. Both have their merits, and the best choice depends on your specific situation, preferences, and how you use your pool.</p>

      <h2>Understanding the Difference</h2>
      <p>First, let's clear up a common misconception: saltwater pools are not chlorine-free. They use a salt chlorine generator (also called a salt cell) to convert dissolved salt into chlorine. The difference is in how the chlorine is produced and the swimming experience it creates.</p>

      <h2>Saltwater Pool Advantages</h2>
      <ul>
        <li><strong>Gentler on skin and eyes:</strong> The chlorine concentration is lower and more consistent, reducing irritation</li>
        <li><strong>Softer water feel:</strong> Many swimmers prefer the silkier sensation of saltwater</li>
        <li><strong>Lower ongoing chemical needs:</strong> You just add salt periodically</li>
        <li><strong>More consistent sanitation:</strong> The generator produces chlorine continuously</li>
        <li><strong>Less chemical handling:</strong> No need to store and handle chlorine products</li>
      </ul>

      <h2>Saltwater Pool Disadvantages</h2>
      <ul>
        <li><strong>Higher initial investment:</strong> Salt systems require upfront investment to install - contact us to get a price</li>
        <li><strong>Salt cell replacement:</strong> Cells last 3-7 years and require periodic replacement</li>
        <li><strong>Potential corrosion:</strong> Salt can damage some materials if not properly managed</li>
        <li><strong>More complex repairs:</strong> The generator adds another system that can fail</li>
      </ul>

      <h2>Traditional Chlorine Pool Advantages</h2>
      <ul>
        <li><strong>Lower initial investment:</strong> No special equipment needed</li>
        <li><strong>Simpler system:</strong> Fewer components that can fail</li>
        <li><strong>Easier shock treatment:</strong> Can quickly raise chlorine for algae control</li>
        <li><strong>No corrosion concerns:</strong> When properly maintained, no salt-related damage</li>
      </ul>

      <h2>Traditional Chlorine Pool Disadvantages</h2>
      <ul>
        <li><strong>Regular chemical handling:</strong> Need to store and add chlorine products</li>
        <li><strong>More maintenance attention:</strong> Chlorine levels fluctuate more</li>
        <li><strong>Potential for over-chlorination:</strong> Can cause that "pool smell" and irritation</li>
        <li><strong>Higher ongoing chemical needs:</strong> Chlorine products needed regularly</li>
      </ul>

      <h2>Considerations for Bali's Climate</h2>
      <p>Bali's warm, sunny climate affects this decision. High UV levels break down chlorine faster, making consistent sanitation more challenging with traditional systems. The warmth also accelerates the salt chlorine generation process, which can be both an advantage (efficient production) and a concern (potential for over-production if not properly calibrated).</p>

      <h2>Our Recommendation</h2>
      <p>For villa pools and private residences in Bali, we generally recommend saltwater systems. The improved swimming experience and lower maintenance demands appeal to most pool owners, and the initial investment pays off over time. However, for rental properties with high turnover or pools with natural stone features that might be affected by salt, traditional chlorine may be the better choice.</p>

      <p>Contact Bali Pool Pros for a personalized consultation. We can assess your specific situation and help you make the best choice for your pool and lifestyle.</p>
    `
  },
  {
    id: 5,
    title: "The Complete Guide to Pool Tile Care in Bali",
    excerpt: "Keep your pool tiles looking beautiful with proper care. Learn about cleaning, maintenance, and when to call for professional tile repair.",
    image: leakImg,
    author: "Sarah Mitchell",
    date: "November 20, 2024",
    readTime: "7 min read",
    category: "Pool Maintenance",
    content: `
      <p>Pool tiles add beauty and functionality to your swimming pool, but Bali's tropical conditions can take their toll. Proper tile care keeps your pool looking stunning while preventing damage that can lead to repairs. Here's everything you need to know about pool tile maintenance in Bali.</p>

      <h2>Common Pool Tile Issues in Bali</h2>
      <h3>Calcium Buildup</h3>
      <p>The minerals in Bali's water supply, combined with evaporation in the warm climate, create calcium deposits on tiles at the waterline. This white, crusty buildup is not only unsightly but can become very difficult to remove if left untreated.</p>

      <h3>Algae Staining</h3>
      <p>Algae thrives in Bali's warmth and humidity. While proper chemical treatment prevents algae growth, residual staining can affect grout and porous tiles, leaving green or black discoloration.</p>

      <h3>Cracked or Loose Tiles</h3>
      <p>Ground movement, temperature fluctuations, and normal aging can cause tiles to crack or grout to deteriorate, allowing tiles to come loose. This isn't just aesthetic—loose tiles can indicate structural issues and can cause leaks.</p>

      <h2>Regular Tile Maintenance</h2>
      <h3>Weekly Cleaning</h3>
      <p>Use a soft brush to clean the waterline tiles weekly. This prevents mineral deposits from building up and becoming difficult to remove. A nylon brush works well; avoid wire brushes that can scratch the tile surface.</p>

      <h3>Monthly Deep Cleaning</h3>
      <p>Once a month, give your tiles a more thorough cleaning. For calcium deposits, use a diluted muriatic acid solution or a commercial calcium remover. Always follow product instructions and rinse thoroughly.</p>

      <h2>When to Call a Professional</h2>
      <ul>
        <li>Heavy calcium buildup that won't respond to regular cleaning</li>
        <li>Cracked or chipped tiles that need replacement</li>
        <li>Loose tiles or deteriorating grout</li>
        <li>Discoloration that indicates underlying water chemistry issues</li>
        <li>Tiles at the waterline that have become rough or pitted</li>
      </ul>

      <h2>Professional Tile Services from Bali Pool Pros</h2>
      <p>Our tile specialists offer a range of services to keep your pool looking its best:</p>
      <ul>
        <li><strong>Power washing:</strong> Removing stubborn buildup without damaging tiles</li>
        <li><strong>Tile replacement:</strong> Matching and replacing damaged tiles</li>
        <li><strong>Grout repair:</strong> Filling and sealing deteriorated grout lines</li>
        <li><strong>Descaling:</strong> Professional-grade calcium removal</li>
        <li><strong>Sealing:</strong> Protective treatments for porous tiles and natural stone</li>
      </ul>

      <p>Regular professional cleaning, typically every 6-12 months, extends the life of your pool tiles and keeps your pool looking pristine. Contact us for a tile assessment and cleaning quote.</p>
    `
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <SEOHead
        title="Pool Care Blog Bali | Tips, Guides & Expert Advice | Bali Pool Pros"
        description="Expert pool care tips and guides for Bali pool owners. Learn about pool maintenance, repair, water chemistry, and more from Bali's leading pool service professionals."
        keywords="pool care tips Bali, pool maintenance blog, Bali pool advice, swimming pool guides, pool repair tips Bali, pool water chemistry"
      />
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              src={heroImage}
              alt="Pool care blog - expert tips and guides for Bali pool owners"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
          </div>
          <div className="container relative z-10 h-full flex items-center px-4 md:px-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
                <BookOpen className="w-4 h-4" />
                <span className="text-xs font-mono font-bold uppercase tracking-wider">Pool Care Blog</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Pool Care <span className="text-primary">Tips & Guides</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Expert advice from Bali's pool professionals. Learn how to maintain, repair, and enjoy your pool with our comprehensive guides and tips.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-16 md:py-20 container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden group hover:border-primary/50 transition-all hover:shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-xs text-primary font-medium mb-3">
                    <Tag className="w-3 h-3" />
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-4 border-t">
                    <div className="flex items-center gap-2">
                      <User className="w-3 h-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Article Preview */}
        <section className="py-16 md:py-20 bg-muted/30 border-y border-border">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                Essential Pool Care Knowledge for Bali
              </h2>

              <div className="prose prose-lg text-muted-foreground space-y-6">
                <p>
                  Owning a pool in Bali is a wonderful luxury, but it comes with unique responsibilities. The tropical climate that makes Bali so appealing also creates conditions that demand consistent pool care. Our blog is designed to help you understand these challenges and maintain your pool effectively.
                </p>

                <h3 className="text-2xl font-bold text-foreground">Topics We Cover</h3>
                <p>
                  From basic water chemistry to advanced troubleshooting, our articles cover everything pool owners in Bali need to know. We write about seasonal maintenance tips, equipment selection and care, common problems and solutions, and insights into the latest pool technology.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Written by Professionals</h3>
                <p>
                  Every article on our blog is written or reviewed by our experienced pool professionals. With over 15 years of collective experience servicing pools across Bali, our team shares practical, tested knowledge that you can trust and apply to your own pool care routine.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Stay Informed</h3>
                <p>
                  Pool technology and best practices evolve, and our blog keeps you updated on the latest developments relevant to Bali pool owners. Whether it's new eco-friendly treatment options, energy-efficient equipment, or insights from our service experience, we share knowledge that helps you get more from your pool.
                </p>

                <h3 className="text-2xl font-bold text-foreground mt-8">Have a Question?</h3>
                <p>
                  Don't see an article addressing your specific concern? We'd love to hear from you. Contact us with your pool care questions, and we may feature the answer in a future blog post. Your questions help us create content that serves the entire Bali pool owner community.
                </p>
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
                Need Professional Pool Service?
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                Our blog provides valuable tips, but nothing beats professional service. Contact Bali Pool Pros for expert maintenance, repair, or installation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button size="lg" className="h-12 px-8">
                    Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-white/20 hover:bg-white/10">
                    View Services
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
