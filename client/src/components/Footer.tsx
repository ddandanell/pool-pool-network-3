import { Droplets, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, MessageCircle } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const serviceAreas = [
    "Ubud", "Seminyak", "Canggu", "Sanur", "Nusa Dua",
    "Jimbaran", "Uluwatu", "Kuta", "Legian", "Denpasar",
    "Gianyar", "Tabanan", "Karangasem", "Buleleng"
  ];

  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10" role="contentinfo">
      <div className="container px-4 md:px-6">
        {/* WhatsApp CTA Banner */}
        <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-10 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center animate-pulse">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <p className="font-bold text-lg text-white">Need Pool Service in Bali?</p>
                <p className="text-sm text-gray-400">Response within 2 hours • 24/7 Emergency Available</p>
              </div>
            </div>
            <a
              href="https://wa.me/6282323011656"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold hover:bg-primary/90 transition-colors flex-shrink-0"
            >
              <Phone className="w-5 h-5" />
              WhatsApp: +62 823-2301-1656
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" aria-hidden="true" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-background">
                BALI<span className="text-primary">POOL</span>CARE
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Bali's premier pool service company since 2010. Expert pool maintenance, repair, and installation for villas, resorts, and residential properties across the island. We keep Bali's pools crystal clear.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-4 h-4 text-gray-400 hover:text-primary" aria-hidden="true" />
              </a>
              <a
                href="https://instagram.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-4 h-4 text-gray-400 hover:text-primary" aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com/company/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Connect on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-gray-400 hover:text-primary" aria-hidden="true" />
              </a>
              <a
                href="https://twitter.com/balipoolpros"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-4 h-4 text-gray-400 hover:text-primary" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-bold mb-4 text-white">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">All Pool Services</Link>
              </li>
              <li>
                <Link href="/pool-maintenance" className="hover:text-primary transition-colors">Pool Maintenance Bali</Link>
              </li>
              <li>
                <Link href="/pool-cleaning-bali" className="hover:text-primary transition-colors">Pool Cleaning Bali</Link>
              </li>
              <li>
                <Link href="/pool-repair" className="hover:text-primary transition-colors">Pool Repair Bali</Link>
              </li>
              <li>
                <Link href="/pool-installation" className="hover:text-primary transition-colors">Pool Installation Bali</Link>
              </li>
              <li>
                <Link href="/green-pool-rescue-bali" className="hover:text-primary transition-colors">Green Pool Rescue Bali</Link>
              </li>
              <li>
                <Link href="/villa-pool-service-bali" className="hover:text-primary transition-colors">Villa Pool Service Bali</Link>
              </li>
              <li>
                <Link href="/pool-repair" className="hover:text-primary transition-colors">Leak Detection</Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold mb-4 text-white">Service Areas</h4>
            <ul className="space-y-1 text-sm text-gray-400 grid grid-cols-2 gap-x-2">
              {serviceAreas.map((area) => (
                <li key={area}>
                  <Link href="/" className="hover:text-primary transition-colors">Pool Service {area}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Jl. Raya Ubud No. 45<br />Gianyar, Bali 80571<br />Indonesia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="https://wa.me/6282323011656" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+62 823-2301-1656</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" aria-hidden="true" />
                <a href="mailto:info@balipoolservice.com" className="hover:text-primary transition-colors">info@balipoolservice.com</a>
              </li>
              <li className="pt-2">
                <span className="text-primary font-mono text-xs uppercase tracking-wider">Emergency: 24/7 Available</span>
              </li>
            </ul>

            {/* Quick Links */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <h5 className="text-xs font-mono uppercase tracking-wider text-gray-500 mb-3">Quick Links</h5>
              <div className="flex flex-wrap gap-2">
                <Link href="/about" className="text-xs text-gray-400 hover:text-primary transition-colors">About</Link>
                <Link href="/blog" className="text-xs text-gray-400 hover:text-primary transition-colors">Blog</Link>
                <Link href="/contact" className="text-xs text-gray-400 hover:text-primary transition-colors">Contact</Link>
                <Link href="/" className="text-xs text-gray-400 hover:text-primary transition-colors">FAQ</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono gap-4">
          <p>&copy; {currentYear} Bali Pool Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="hover:text-white transition-colors" target="_blank" rel="noopener">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
