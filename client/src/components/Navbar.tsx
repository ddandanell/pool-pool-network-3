import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Droplets, Menu, X, Phone, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { 
    label: "Services",
    dropdown: [
      { href: "/services", label: "All Services" },
      { href: "/pool-maintenance", label: "Pool Maintenance" },
      { href: "/pool-cleaning-bali", label: "Pool Cleaning" },
      { href: "/pool-repair", label: "Pool Repair" },
      { href: "/pool-installation", label: "Pool Installation" },
      { href: "/green-pool-rescue-bali", label: "Green Pool Rescue" },
      { href: "/villa-pool-service-bali", label: "Villa Pool Service" },
    ]
  },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (href: string) => location === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b border-white/20" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Bali Pool Care - Home">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center group-hover:bg-accent transition-colors">
            <Droplets className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <span className="font-mono font-bold text-lg tracking-tight text-foreground">
            BALI<span className="text-primary">POOL</span>CARE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link, index) => (
            link.dropdown ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors outline-none">
                  {link.label}
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  {link.dropdown.map((item, i) => (
                    <DropdownMenuItem key={i} asChild>
                      <Link href={item.href} className={`w-full cursor-pointer ${isActive(item.href) ? 'text-primary' : ''}`}>
                        {item.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={index} href={link.href} className={`text-sm font-medium hover:text-primary transition-colors ${isActive(link.href) ? 'text-primary' : ''}`}>
                {link.label}
              </Link>
            )
          ))}
          <Button variant="default" size="sm" className="font-mono text-xs ml-2" asChild>
            <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
              <Phone className="w-3 h-3 mr-2" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-border bg-background/95 backdrop-blur-sm overflow-hidden"
          >
            <div className="container px-4 py-4 flex flex-col gap-2">
              <Link href="/" className={`text-base font-medium py-2 ${isActive('/') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={`text-base font-medium py-2 ${isActive('/about') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                About Us
              </Link>
              
              {/* Services Section */}
              <div className="border-t border-border pt-2 mt-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Services</p>
                <Link href="/services" className={`text-base font-medium py-2 block ${isActive('/services') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  All Services
                </Link>
                <Link href="/pool-maintenance" className={`text-base font-medium py-2 block pl-4 ${isActive('/pool-maintenance') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Pool Maintenance
                </Link>
                <Link href="/pool-cleaning-bali" className={`text-base font-medium py-2 block pl-4 ${isActive('/pool-cleaning-bali') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Pool Cleaning Bali
                </Link>
                <Link href="/pool-repair" className={`text-base font-medium py-2 block pl-4 ${isActive('/pool-repair') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Pool Repair
                </Link>
                <Link href="/pool-installation" className={`text-base font-medium py-2 block pl-4 ${isActive('/pool-installation') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Pool Installation
                </Link>
                <Link href="/green-pool-rescue-bali" className={`text-base font-medium py-2 block pl-4 ${isActive('/green-pool-rescue-bali') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Green Pool Rescue
                </Link>
                <Link href="/villa-pool-service-bali" className={`text-base font-medium py-2 block pl-4 ${isActive('/villa-pool-service-bali') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Villa Pool Service
                </Link>
              </div>

              <div className="border-t border-border pt-2 mt-1">
                <Link href="/blog" className={`text-base font-medium py-2 block ${isActive('/blog') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
                <Link href="/contact" className={`text-base font-medium py-2 block ${isActive('/contact') ? 'text-primary' : ''}`} onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </div>

              <div className="pt-4 mt-2 border-t border-border">
                <Button className="w-full font-mono" asChild>
                  <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
