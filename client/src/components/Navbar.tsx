import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/20">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:bg-accent transition-colors">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight text-foreground">
              POOL<span className="text-primary">REPAIR</span>LAB
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/services"><a className="text-sm font-medium hover:text-primary transition-colors">Services</a></Link>
          <Link href="/diagnostics"><a className="text-sm font-medium hover:text-primary transition-colors">Diagnostics</a></Link>
          <Link href="/case-studies"><a className="text-sm font-medium hover:text-primary transition-colors">Case Studies</a></Link>
          <Button variant="default" size="sm" className="font-mono text-xs">
            <Phone className="w-3 h-3 mr-2" />
            EMERGENCY: +62 812 3456
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-4">
              <Link href="/services"><a className="text-base font-medium" onClick={() => setIsOpen(false)}>Services</a></Link>
              <Link href="/diagnostics"><a className="text-base font-medium" onClick={() => setIsOpen(false)}>Diagnostics</a></Link>
              <Link href="/case-studies"><a className="text-base font-medium" onClick={() => setIsOpen(false)}>Case Studies</a></Link>
              <Button className="w-full font-mono">
                <Phone className="w-4 h-4 mr-2" />
                Call Technician
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
