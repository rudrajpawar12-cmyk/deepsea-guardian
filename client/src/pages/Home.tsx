/*
 * Home Page - DeepSea Guardian
 * Design: Abyssal Interface - Premium hero, floating cards, bioluminescent accents
 * Animation: Framer Motion fade/slide/reveal, staggered entrances
 */
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  Brain, Bot, Cpu, Satellite, BarChart3, AlertTriangle,
  ArrowRight, ChevronDown, Star, Quote, ChevronUp, Zap,
  Shield, Globe, Fish
} from "lucide-react";
import CountUp from "@/components/CountUp";
import PublicLayout from "@/components/PublicLayout";
import { homeStats, features, timeline, testimonials, faqs, oceanFacts } from "@/data/mockData";
import { useState } from "react";

const featureIcons: Record<string, React.ReactNode> = {
  brain: <Brain className="w-6 h-6" />,
  drone: <Bot className="w-6 h-6" />,
  sensor: <Cpu className="w-6 h-6" />,
  satellite: <Satellite className="w-6 h-6" />,
  chart: <BarChart3 className="w-6 h-6" />,
  alert: <AlertTriangle className="w-6 h-6" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

function Bubble({ delay, size, left }: { delay: number; size: number; left: string }) {
  return (
    <motion.div
      className="absolute rounded-full bg-[#00D9FF]/10 blur-sm"
      style={{ width: size, height: size, left }}
      animate={{
        y: [0, -120, -240, -360],
        opacity: [0, 0.6, 0.4, 0],
        x: [0, 15, -10, 5],
      }}
      transition={{
        duration: 8,
        delay,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <PublicLayout>
      {/* ============ HERO ============ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/manus-storage/hero-ocean-deep_785c523f.png"
            alt=""
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#020B16]/60 via-[#020B16]/40 to-[#020B16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020B16]/80 to-transparent" />
        </div>

        {/* Floating bubbles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Bubble
              key={i}
              delay={i * 1.2}
              size={4 + Math.random() * 8}
              left={`${10 + Math.random() * 80}%`}
            />
          ))}
        </div>

        {/* Light rays */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-[60%] bg-gradient-to-b from-[#00D9FF]/10 to-transparent rotate-12" />
          <div className="absolute top-0 left-1/3 w-px h-[50%] bg-gradient-to-b from-[#14F1D9]/8 to-transparent rotate-6" />
          <div className="absolute top-0 right-1/3 w-px h-[55%] bg-gradient-to-b from-[#00D9FF]/8 to-transparent -rotate-6" />
        </div>

        <div className="container relative z-10 pt-28">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" as const }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#00D9FF]/20 bg-[#00D9FF]/5 text-[#00D9FF] text-xs font-medium tracking-wide mb-6">
                <Zap className="w-3 h-3" />
                AI-POWERED OCEAN INTELLIGENCE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6"
            >
              Protecting What{" "}
              <span className="text-gradient">We Cannot See</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" as const }}
              className="text-lg sm:text-xl text-white/60 leading-relaxed mb-10 max-w-xl"
            >
              Advanced AI monitoring of deep oceans using autonomous drones,
              IoT sensors, sonar systems and satellite imagery. Real-time
              intelligence for a sustainable ocean future.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" as const }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/dashboard">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#14F1D9] text-[#020B16] font-semibold text-sm flex items-center gap-2 hover:shadow-lg hover:shadow-cyan-500/25 transition-shadow duration-300"
                >
                  Explore Dashboard
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/ocean-map">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-xl border border-white/15 text-white font-semibold text-sm flex items-center gap-2 hover:bg-white/5 hover:border-white/25 transition-all duration-300"
                >
                  View Ocean Map
                  <Globe className="w-4 h-4" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-white/30" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ LIVE STATS ============ */}
      <section className="relative py-20 border-t border-white/5">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {homeStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass rounded-2xl p-6 text-center hover:glow-sm transition-shadow duration-300"
              >
                <div className="text-3xl sm:text-4xl font-display font-bold text-gradient mb-2">
                  <CountUp end={parseInt(stat.value.replace(/,/g, ""))} suffix={stat.suffix} duration={2500} />
                </div>
                <p className="text-sm text-white/50">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURES ============ */}
      <section className="py-24 relative">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Technology That <span className="text-gradient">Speaks</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              Six pillars of ocean intelligence working in harmony to protect marine ecosystems.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-7 group hover:glow-sm transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00D9FF]/15 to-[#14F1D9]/10 flex items-center justify-center text-[#00D9FF] mb-5 group-hover:shadow-lg group-hover:shadow-cyan-500/15 transition-shadow duration-300">
                  {featureIcons[feature.icon]}
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ HOW IT WORKS / TIMELINE ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071C34]/30 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-white/50 max-w-2xl mx-auto">
              From concept to global ocean intelligence platform in five years.
            </p>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00D9FF]/30 via-[#14F1D9]/20 to-transparent" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className={`relative flex items-start gap-6 mb-10 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-[#00D9FF] -translate-x-1.5 mt-1.5 z-10 shadow-lg shadow-cyan-500/50" />

                <div className={`ml-14 md:ml-0 ${i % 2 === 0 ? "md:mr-auto md:pr-12 md:text-right" : "md:ml-auto md:pl-12"}`}>
                  <span className="text-xs font-mono text-[#00D9FF] tracking-wider">{item.year}</span>
                  <h3 className="text-lg font-display font-semibold text-white mt-1">{item.title}</h3>
                  <p className="text-sm text-white/50 mt-1 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ OCEAN FACTS ============ */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {oceanFacts.map((fact, i) => (
              <motion.div
                key={fact.label}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <div className="text-3xl font-display font-bold text-gradient mb-2">{fact.stat}</div>
                <p className="text-xs text-white/50">{fact.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#071C34]/20 to-transparent" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Trusted by <span className="text-gradient">Experts</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass rounded-2xl p-7"
              >
                <Quote className="w-8 h-8 text-[#00D9FF]/20 mb-4" />
                <p className="text-sm text-white/70 leading-relaxed mb-6 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00D9FF]/30 to-[#14F1D9]/20 flex items-center justify-center">
                    <span className="text-xs font-bold text-[#00D9FF]">{t.name.split(" ").map(n => n[0]).join("")}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                >
                  <span className="text-sm font-medium text-white/90 pr-4">{faq.question}</span>
                  <ChevronUp
                    className={`w-4 h-4 text-[#00D9FF] shrink-0 transition-transform duration-300 ${
                      openFaq === i ? "" : "rotate-180"
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? "auto" : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" as const }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-4 text-sm text-white/50 leading-relaxed">{faq.answer}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/manus-storage/ocean-surface-aerial_0d5580f4.png"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-[#020B16]/70" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
              The Ocean is Calling. <span className="text-gradient">Will You Listen?</span>
            </h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">
              Join the mission to protect our oceans with real-time intelligence and AI-powered conservation.
            </p>
            <Link href="/dashboard">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#00D9FF] to-[#14F1D9] text-[#020B16] font-bold text-sm hover:shadow-xl hover:shadow-cyan-500/25 transition-shadow duration-300"
              >
                Get Started Free
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
