import { Droplets } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 border-t border-white/10">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="font-mono font-bold text-lg tracking-tight text-background">
                POOL<span className="text-primary">REPAIR</span>LAB
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Bali's technical authority on pool systems. Diagnostics, leak detection, and precision engineering.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/leak-detection"><a className="hover:text-primary transition-colors">Leak Detection</a></Link></li>
              <li><Link href="/pump-repair"><a className="hover:text-primary transition-colors">Pump Repair</a></Link></li>
              <li><Link href="/filtration"><a className="hover:text-primary transition-colors">Filtration Systems</a></Link></li>
              <li><Link href="/plumbing"><a className="hover:text-primary transition-colors">Plumbing & Valves</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about"><a className="hover:text-primary transition-colors">About The Lab</a></Link></li>
              <li><Link href="/case-studies"><a className="hover:text-primary transition-colors">Case Studies</a></Link></li>
              <li><Link href="/pricing"><a className="hover:text-primary transition-colors">Transparent Pricing</a></Link></li>
              <li><Link href="/contractors"><a className="hover:text-primary transition-colors">For Contractors</a></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Jl. Sunset Road No. 88, Seminyak</li>
              <li>support@poolrepairlab.com</li>
              <li>+62 812 3456 7890</li>
              <li className="pt-2 text-primary font-mono">Emergency: 24/7 Available</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-mono">
          <p>&copy; {new Date().getFullYear()} Bali Pool Repair Lab. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
