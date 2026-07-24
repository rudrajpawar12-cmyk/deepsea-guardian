/*
 * Navbar Component
 * Design: Abyssal Interface - Deep ocean dark theme with glassmorphism
 * Signature: Cyan glow accents, frosted glass, bioluminescent hover states
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Waves } from "lucide-react";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/dashboard", label: "Dashboard" },
  { path: "/ocean-map", label: "Ocean Map" },
  { path: "/biodiversity", label: "Biodiversity" },
  { path: "/pollution", label: "Pollution" },
  { path: "/insights", label: "AI Insights" },
  { path: "/reports", label: "Reports" },
  { path: "/about", label: "About" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-3 shadow-lg shadow-cyan-500/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#00D9FF] to-[#14F1D9] flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow duration-300">
              <Waves className="w-5 h-5 text-[#020B16]" />
            </div>
            <span className="text-lg font-display font-bold text-white tracking-tight">
              DeepSea<span className="text-gradient">Guardian</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link key={link.path} href={link.path}>
              <span
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  location === link.path
                    ? "text-[#00D9FF] bg-[#00D9FF]/10"
                    : "text-white/70 hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link href="/dashboard" className="hidden sm:inline-flex">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#14F1D9] text-[#020B16] text-sm font-semibold transition-shadow duration-300 hover:shadow-lg hover:shadow-cyan-500/25"
            >
              Live Dashboard
            </motion.button>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" as const }}
            className="lg:hidden glass mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link href={link.path}>
                    <span
                      className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        location === link.path
                          ? "text-[#00D9FF] bg-[#00D9FF]/10"
                          : "text-white/70 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link href="/dashboard">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  className="mt-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#00D9FF] to-[#14F1D9] text-[#020B16] text-sm font-semibold"
                >
                  Live Dashboard
                </motion.button>
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
