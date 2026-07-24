/*
 * Marine Biodiversity Page
 * Design: Abyssal Interface - Beautiful species cards with trend graphs
 */
import { motion } from "framer-motion";
import {
  TrendingUp, TrendingDown, Minus, Heart, Globe, AlertTriangle
} from "lucide-react";
import {
  LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip
} from "recharts";
import AppLayout from "@/components/AppLayout";
import { marineSpecies } from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const speciesImages: Record<string, string> = {
  "Blue Whale": "https://images.unsplash.com/photo-1568430462989-44163eb1752f?w=600&q=80",
  "Sea Turtle": "https://images.unsplash.com/photo-1591025207163-942350e47db2?w=600&q=80",
  "Great White Shark": "https://images.unsplash.com/photo-1560275619-4662e36fa65c?w=600&q=80",
  "Bottlenose Dolphin": "https://images.unsplash.com/photo-1607153333879-c174d265f1d2?w=600&q=80",
  "Coral Reef": "/manus-storage/marine-life-corals_fd51b7a6.png",
  "Giant Pacific Octopus": "https://images.unsplash.com/photo-1545671913-b89ac1b4ac10?w=600&q=80",
};

const threatColors: Record<string, string> = {
  "Endangered": "#FF6B6B",
  "Vulnerable": "#FFD93D",
  "Least Concern": "#18E299",
};

export default function Biodiversity() {
  return (
    <AppLayout>
      <div className="container pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">Marine Biodiversity</h1>
          <p className="text-sm text-white/40 mt-1">Tracking {marineSpecies.length}+ species across global waters</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {marineSpecies.map((species, i) => {
            const trend = species.trend[species.trend.length - 1] - species.trend[0];
            const trendIcon = trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus;
            const trendColor = trend > 0 ? "#18E299" : trend < 0 ? "#FF6B6B" : "#14F1D9";
            const threatColor = threatColors[species.threatLevel] || "#14F1D9";

            return (
              <motion.div
                key={species.id}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                className="glass rounded-2xl overflow-hidden hover:glow-sm transition-shadow duration-300 group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={speciesImages[species.name] || "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=600&q=80"}
                    alt={species.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020B16] via-transparent to-transparent" />
                  <div className="absolute top-3 right-3">
                    <span
                      className="px-2.5 py-1 rounded-full text-xs font-medium border"
                      style={{
                        color: threatColor,
                        background: `${threatColor}15`,
                        borderColor: `${threatColor}30`,
                      }}
                    >
                      {species.threatLevel}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-4">
                    <h3 className="text-xl font-display font-bold text-white">{species.name}</h3>
                    <p className="text-xs text-white/50 mt-0.5">{species.description}</p>
                  </div>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                      <p className="text-xs text-white/40 mb-1">Population</p>
                      <p className="text-sm font-semibold text-white">{species.population}</p>
                    </div>
                    <div>
                      <p className="text-xs text-white/40 mb-1 flex items-center gap-1">
                        <Globe className="w-3 h-3" /> Habitat
                      </p>
                      <p className="text-sm font-semibold text-white text-xs">{species.habitat}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-xs text-white/40 mb-1">Health Score</p>
                      <div className="flex items-center gap-2">
                        <div className="w-16 h-2 rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all"
                            style={{ width: `${species.healthScore}%`, background: threatColor }}
                          />
                        </div>
                        <span className="text-sm font-semibold text-white">{species.healthScore}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1" style={{ color: trendColor }}>
                      {(() => {
                        const Icon = trendIcon;
                        return Icon ? <Icon className="w-3.5 h-3.5" /> : null;
                      })()}
                      <span className="text-xs font-medium">{trend > 0 ? "+" : ""}{trend}</span>
                    </div>
                  </div>

                  {/* Mini trend chart */}
                  <div className="h-16">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={species.trend.map((v, idx) => ({ idx, value: v }))}>
                        <Line
                          type="monotone"
                          dataKey="value"
                          stroke={trendColor}
                          strokeWidth={2}
                          dot={false}
                        />
                        <XAxis hide />
                        <YAxis hide />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="mt-3 pt-3 border-t border-white/5">
                    <p className="text-xs text-white/30">{species.conservationStatus}</p>
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
