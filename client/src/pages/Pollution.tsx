/*
 * Pollution Analytics Page
 * Design: Abyssal Interface - Professional analytics dashboard with charts
 */
import { motion } from "framer-motion";
import { useState } from "react";
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import {
  AlertTriangle, Droplets, Thermometer, FlaskConical,
  Calendar, MapPin, TrendingUp, TrendingDown
} from "lucide-react";
import AppLayout from "@/components/AppLayout";
import {
  plasticPollutionData, oilSpillData, waterTemperatureData,
  microplasticData, waterQualityData
} from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" as const },
  }),
};

const regions = ["All Regions", "Pacific", "Atlantic", "Indian", "Arctic", "Southern"];
const timeRanges = ["2018-2024", "2020-2024", "2022-2024", "Last 6 Months"];

function ChartCard({ title, icon: Icon, children }: { title: string; icon: React.ElementType; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-5">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-4 h-4 text-[#00D9FF]" />
        <h3 className="text-sm font-semibold text-white/80">{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default function Pollution() {
  const [region, setRegion] = useState("All Regions");
  const [timeRange, setTimeRange] = useState("2018-2024");

  return (
    <AppLayout>
      <div className="container pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">Pollution Analytics</h1>
          <p className="text-sm text-white/40 mt-1">Comprehensive ocean pollution monitoring and analysis</p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-4 mb-6"
        >
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-white/40" />
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/80 focus:outline-none focus:border-[#00D9FF]/30"
            >
              {regions.map((r) => (
                <option key={r} value={r} className="bg-[#071C34]">{r}</option>
              ))}
            </select>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-white/40" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white/80 focus:outline-none focus:border-[#00D9FF]/30"
            >
              {timeRanges.map((t) => (
                <option key={t} value={t} className="bg-[#071C34]">{t}</option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            { label: "Plastic (M tons)", value: "12.8", trend: "+5.6%", up: true, icon: Droplets, color: "#00D9FF" },
            { label: "Oil Incidents", value: "6", trend: "-33%", up: false, icon: AlertTriangle, color: "#FF6B6B" },
            { label: "Avg Temp Rise", value: "+1.2°C", trend: "+0.3°C", up: true, icon: Thermometer, color: "#FFD93D" },
            { label: "Microplastic (ppm)", value: "892", trend: "+12%", up: true, icon: FlaskConical, color: "#14F1D9" },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              custom={i}
              className="glass rounded-xl p-4"
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-4 h-4" style={{ color: metric.color }} />
                <span className={`text-xs flex items-center gap-1 ${metric.up ? "text-[#FF6B6B]" : "text-[#18E299]"}`}>
                  {metric.up ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {metric.trend}
                </span>
              </div>
              <p className="text-xl font-display font-bold text-white">{metric.value}</p>
              <p className="text-xs text-white/40">{metric.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={4}>
            <ChartCard title="Plastic Pollution (Million Tons)" icon={Droplets}>
              <ResponsiveContainer width="100%" height={260}>
                <AreaChart data={plasticPollutionData}>
                  <defs>
                    <linearGradient id="plasticGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <Tooltip contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }} />
                  <Area type="monotone" dataKey="amount" stroke="#00D9FF" strokeWidth={2} fill="url(#plasticGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={5}>
            <ChartCard title="Oil Spill Incidents" icon={AlertTriangle}>
              <ResponsiveContainer width="100%" height={260}>
                <BarChart data={oilSpillData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="year" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <Tooltip contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }} />
                  <Bar dataKey="incidents" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="volume" fill="#FFD93D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={6}>
            <ChartCard title="Water Temperature Trends" icon={Thermometer}>
              <ResponsiveContainer width="100%" height={260}>
                <LineChart data={waterTemperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <Tooltip contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }} />
                  <Line type="monotone" dataKey="surface" stroke="#FF6B6B" strokeWidth={2} dot={{ fill: "#FF6B6B", r: 3 }} name="Surface" />
                  <Line type="monotone" dataKey="deep" stroke="#00D9FF" strokeWidth={2} dot={{ fill: "#00D9FF", r: 3 }} name="Deep" />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={7}>
            <ChartCard title="Microplastic Concentration (ppm)" icon={FlaskConical}>
              <div className="space-y-3">
                {microplasticData.map((item) => (
                  <div key={item.region} className="flex items-center gap-3">
                    <span className="text-xs text-white/50 w-24 truncate">{item.region}</span>
                    <div className="flex-1 h-5 rounded bg-white/5 overflow-hidden">
                      <div
                        className="h-full rounded transition-all duration-500"
                        style={{
                          width: `${(item.concentration / 900) * 100}%`,
                          background: item.trend === "increasing" ? "linear-gradient(90deg, #00D9FF, #FF6B6B)" : item.trend === "decreasing" ? "linear-gradient(90deg, #00D9FF, #18E299)" : "linear-gradient(90deg, #00D9FF, #14F1D9)",
                        }}
                      />
                    </div>
                    <span className="text-xs font-mono text-white/60 w-12 text-right">{item.concentration}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      item.trend === "increasing" ? "bg-[#FF6B6B]/15 text-[#FF6B6B]" :
                      item.trend === "decreasing" ? "bg-[#18E299]/15 text-[#18E299]" :
                      "bg-[#14F1D9]/15 text-[#14F1D9]"
                    }`}>
                      {item.trend}
                    </span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </motion.div>
        </div>

        {/* Water Quality Table */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={8}>
          <div className="glass rounded-xl p-5">
            <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
              <FlaskConical className="w-4 h-4 text-[#00D9FF]" />
              Water Quality by Region
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/5">
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Region</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">pH Level</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Dissolved O₂ (mg/L)</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Turbidity (NTU)</th>
                    <th className="text-left py-3 text-xs text-white/40 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {waterQualityData.map((row) => (
                    <tr key={row.region} className="border-b border-white/[0.03] hover:bg-white/[0.02]">
                      <td className="py-3 text-white/80">{row.region}</td>
                      <td className="py-3 text-white/60">{row.ph}</td>
                      <td className="py-3 text-white/60">{row.dissolved}</td>
                      <td className="py-3 text-white/60">{row.turbidity}</td>
                      <td className="py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          row.ph >= 8.1 ? "bg-[#18E299]/15 text-[#18E299]" : "bg-[#FFD93D]/15 text-[#FFD93D]"
                        }`}>
                          {row.ph >= 8.1 ? "Good" : "Moderate"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
}
