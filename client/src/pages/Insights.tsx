/*
 * AI Insights Page
 * Design: Abyssal Interface - Beautiful prediction cards with confidence scores
 */
import { motion } from "framer-motion";
import {
  Brain, AlertTriangle, TrendingUp, Fish, Droplets,
  Shield, ChevronRight, Zap, Target, Clock
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import { aiInsights } from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const typeIcons: Record<string, React.ReactNode> = {
  "coral-bleaching": <Droplets className="w-5 h-5" />,
  "pollution-spread": <AlertTriangle className="w-5 h-5" />,
  "illegal-fishing": <Shield className="w-5 h-5" />,
  "species-migration": <Fish className="w-5 h-5" />,
  "water-quality": <TrendingUp className="w-5 h-5" />,
};

const typeColors: Record<string, string> = {
  "coral-bleaching": "#14F1D9",
  "pollution-spread": "#FF6B6B",
  "illegal-fishing": "#FFD93D",
  "species-migration": "#6FE7FF",
  "water-quality": "#00D9FF",
};

export default function Insights() {
  return (
    <AppLayout>
      <div className="container pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00D9FF]/20 to-[#14F1D9]/10 flex items-center justify-center">
              <Brain className="w-5 h-5 text-[#00D9FF]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">AI Insights</h1>
              <p className="text-sm text-white/40">Predictive intelligence powered by machine learning</p>
            </div>
          </div>
        </motion.div>

        {/* Overview Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Active Predictions", value: "24", icon: Target, color: "#00D9FF" },
            { label: "Accuracy Rate", value: "94%", icon: Brain, color: "#14F1D9" },
            { label: "Critical Alerts", value: "3", icon: AlertTriangle, color: "#FF6B6B" },
            { label: "Models Trained", value: "12", icon: Zap, color: "#6FE7FF" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={i}
              className="glass rounded-xl p-4"
            >
              <item.icon className="w-4 h-4 mb-2" style={{ color: item.color }} />
              <p className="text-2xl font-display font-bold text-white">{item.value}</p>
              <p className="text-xs text-white/40">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Insight Cards */}
        <div className="space-y-4">
          {aiInsights.map((insight, i) => {
            const color = typeColors[insight.type] || "#00D9FF";
            const Icon = typeIcons[insight.type] || <Brain className="w-5 h-5" />;

            return (
              <motion.div
                key={insight.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass rounded-xl p-6 hover:glow-sm transition-shadow duration-300 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  {/* Left: Type & Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: `${color}15`, color }}>
                        {Icon}
                      </div>
                      <div>
                        <h3 className="text-base font-display font-semibold text-white">{insight.title}</h3>
                        <div className="flex items-center gap-3 mt-0.5">
                          <span className="flex items-center gap-1 text-xs" style={{ color }}>
                            <Target className="w-3 h-3" />
                            Risk Score: {insight.riskScore}%
                          </span>
                          <span className="text-xs text-white/30">•</span>
                          <span className="flex items-center gap-1 text-xs text-white/40">
                            <Clock className="w-3 h-3" />
                            {insight.timeline}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-white/50 leading-relaxed mb-3">{insight.description}</p>
                    <div className="flex items-start gap-2 p-3 rounded-lg bg-white/[0.03] border border-white/5">
                      <ChevronRight className="w-4 h-4 text-[#00D9FF] mt-0.5 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">
                        <span className="text-[#00D9FF] font-medium">Recommended:</span> {insight.recommendedAction}
                      </p>
                    </div>
                  </div>

                  {/* Right: Score Visualization */}
                  <div className="lg:w-32 shrink-0 flex flex-col items-center gap-2">
                    <div className="relative w-20 h-20">
                      <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="rgba(255,255,255,0.05)"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke={color}
                          strokeWidth="3"
                          strokeDasharray={`${insight.confidence}, 100`}
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-lg font-display font-bold text-white">{insight.confidence}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-white/30">Confidence</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
