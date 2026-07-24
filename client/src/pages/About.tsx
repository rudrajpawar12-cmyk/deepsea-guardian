/*
 * About Page
 * Design: Abyssal Interface - Mission, vision, technology, team
 */
import { motion } from "framer-motion";
import {
  Waves, Target, Eye, Cpu, Globe, Shield, Users,
  Brain, Bot, Satellite
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { teamMembers, oceanFacts } from "@/data/mockData";
import CountUp from "@/components/CountUp";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function About() {
  return (
    <AppLayout>
      <div className="container pb-12">
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#00D9FF]/20 to-[#14F1D9]/10 flex items-center justify-center mx-auto mb-6">
            <Waves className="w-8 h-8 text-[#00D9FF]" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            About <span className="text-gradient">DeepSea Guardian</span>
          </h1>
          <p className="text-white/50 max-w-2xl mx-auto text-lg">
            We are a global ocean intelligence platform dedicated to protecting marine ecosystems
            through advanced AI, autonomous technology, and real-time monitoring.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={0} className="glass rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#00D9FF]/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-[#00D9FF]" />
            </div>
            <h2 className="text-xl font-display font-bold text-white mb-3">Our Mission</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              To provide real-time, AI-powered ocean intelligence that enables governments,
              researchers, and conservation organizations to protect marine ecosystems
              before threats become irreversible. We monitor 361 million square kilometers
              of ocean surface and depths down to 6,000 meters.
            </p>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={1} className="glass rounded-2xl p-8">
            <div className="w-12 h-12 rounded-xl bg-[#14F1D9]/10 flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-[#14F1D9]" />
            </div>
            <h2 className="text-xl font-display font-bold text-white mb-3">Our Vision</h2>
            <p className="text-sm text-white/50 leading-relaxed">
              A world where every ocean zone is monitored in real-time, where predictive
              AI prevents ecological disasters before they happen, and where marine
              biodiversity thrives under the protection of intelligent, autonomous systems
              working around the clock.
            </p>
          </motion.div>
        </div>

        {/* Technology */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="mb-16">
          <h2 className="text-2xl font-display font-bold text-white mb-6 text-center">
            Our <span className="text-gradient">Technology</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: Brain, title: "AI & Machine Learning", desc: "Deep learning models trained on millions of ocean data points for real-time anomaly detection and predictive analysis with 94% accuracy." },
              { icon: Bot, title: "Autonomous Drones", desc: "Fleet of 127 AUVs operating at depths up to 6,000m, equipped with sonar, cameras, and environmental sensors for autonomous ocean exploration." },
              { icon: Satellite, title: "Satellite Systems", desc: "Integration with multiple satellite constellations providing real-time imagery, sea surface temperature data, and vessel tracking across all ocean zones." },
            ].map((tech, i) => (
              <div key={tech.title} className="glass rounded-xl p-6 text-center">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#00D9FF]/15 to-[#14F1D9]/10 flex items-center justify-center mx-auto mb-4">
                  <tech.icon className="w-7 h-7 text-[#00D9FF]" />
                </div>
                <h3 className="text-lg font-display font-semibold text-white mb-2">{tech.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">{tech.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Impact Stats */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3} className="mb-16">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Our <span className="text-gradient">Impact</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {oceanFacts.map((fact, i) => (
              <div key={fact.label} className="glass rounded-xl p-6 text-center">
                <div className="text-3xl font-display font-bold text-gradient mb-2">{fact.stat}</div>
                <p className="text-xs text-white/40">{fact.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Team */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={4} className="mb-16">
          <h2 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Our <span className="text-gradient">Team</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="glass rounded-xl p-5 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#00D9FF]/20 to-[#14F1D9]/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-lg font-bold text-[#00D9FF]">{member.name.split(" ").map(n => n[0]).join("")}</span>
                </div>
                <h3 className="text-sm font-display font-semibold text-white">{member.name}</h3>
                <p className="text-xs text-[#00D9FF] mt-0.5">{member.role}</p>
                <p className="text-xs text-white/30 mt-1">{member.specialty}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
