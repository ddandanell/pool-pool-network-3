import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Search } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";
import { motion } from "framer-motion";

interface HeroProps {
  onBookClick: () => void;
}

export function Hero({ onBookClick }: HeroProps) {
  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technical underwater pool analysis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">System Status: Leak Detection Active</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
            Precision Pool <br />
            <span className="text-primary">Diagnostics</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Bali's specialized technical team for advanced leak detection, pump mechanics, and filtration engineering. We don't guess—we test.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25" onClick={onBookClick}>
              Book Diagnostic Visit
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 border-primary/20">
              <Search className="ml-2 w-4 h-4" />
              View Services
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">2hr</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Avg. Detection</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">500+</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Repairs Logged</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">1yr</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Warranty</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
