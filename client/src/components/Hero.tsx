import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Phone } from "lucide-react";
import heroImage from "@assets/generated_images/underwater_pool_hero_with_tech_overlay.png";
import { motion } from "framer-motion";
import { Link } from "wouter";

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
          alt="Professional pool service in Bali - crystal clear swimming pool maintenance and repair" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 backdrop-blur-md">
            <Activity className="w-4 h-4" aria-hidden="true" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider">Bali's Premier Pool Service</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1]">
            Pool Service <br />
            <span className="text-primary">Bali</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
            Expert pool maintenance, repair, and installation in Bali. From villa pools to resort complexes, we keep your pool crystal clear in Bali's tropical climate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="h-12 px-8 text-base shadow-lg shadow-primary/25" onClick={onBookClick}>
              Book Pool Service
              <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white/50 backdrop-blur-sm hover:bg-white/80 border-primary/20" asChild>
              <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 w-4 h-4" aria-hidden="true" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-border/50 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">15+</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Years in Bali</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">500+</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Projects Done</span>
            </div>
            <div className="flex flex-col">
              <span className="text-3xl font-display font-bold text-foreground">24/7</span>
              <span className="text-xs font-mono text-muted-foreground uppercase">Emergency</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
