/*
 * Footer Component
 * Design: Abyssal Interface - Deep ocean dark theme
 */
import { Link } from "wouter";
import { Waves, Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  platform: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Ocean Map", href: "/ocean-map" },
    { label: "Biodiversity", href: "/biodiversity" },
    { label: "Pollution Analytics", href: "/pollution" },
    { label: "AI Insights", href: "/insights" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Reports", href: "/reports" },
    { label: "Contact", href: "/contact" },
    { label: "Careers", href: "#" },
  ],
  resources: [
    { label: "Documentation", href: "#" },
    { label: "API Reference", href: "#" },
    { label: "Research Papers", href: "#" },
    { label: "Data Portal", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-[#020B16] border-t border-white/5">
      {/* Wave divider */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 108C120 96 240 72 360 60C480 48 600 48 720 54C840 60 960 72 1080 78C1200 84 1320 84 1380 84L1440 84V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#020B16" />
        </svg>
      </div>

      <div className="container pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#14F1D9] flex items-center justify-center">
                  <Waves className="w-5 h-5 text-[#020B16]" />
                </div>
                <span className="text-lg font-display font-bold text-white">
                  DeepSea<span className="text-gradient">Guardian</span>
                </span>
              </div>
            </Link>
            <p className="text-sm text-white/50 max-w-sm mb-6 leading-relaxed">
              Protecting what we cannot see. AI-powered ocean intelligence for a sustainable future.
            </p>
            <div className="flex items-center gap-3">
              {[Github, Twitter, Linkedin, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 hover:text-[#00D9FF] hover:border-[#00D9FF]/30 hover:bg-[#00D9FF]/10 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white/90 mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 hover:text-[#00D9FF] transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2026 DeepSea Guardian. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
