/*
 * Dashboard Page - DeepSea Guardian
 * Design: Abyssal Interface - Premium SaaS dashboard with glassmorphism cards
 */
import { motion } from "framer-motion";
import {
  Activity, Thermometer, Droplets, Wind, Waves, Eye,
  AlertTriangle, CheckCircle, Clock, TrendingUp, TrendingDown,
  Satellite, Fish, Cpu, Bot, Shield, ArrowUpRight
} from "lucide-react";
import {
  AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  ResponsiveContainer, RadialBarChart, RadialBar
} from "recharts";
import AppLayout from "@/components/AppLayout";
import {
  dashboardStats, oceanHealthTrend, pollutionByType,
  sensorActivity, waterQualityData, recentAlerts,
  recentActivities, weatherData
} from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.06, ease: "easeOut" as const },
  }),
};

function StatCard({ icon: Icon, label, value, unit, color, trend }: {
  icon: React.ElementType; label: string; value: string | number; unit?: string; color: string; trend?: "up" | "down" | "stable";
}) {
  return (
    <div className="glass rounded-xl p-5 hover:glow-sm transition-shadow duration-300">
      <div className="flex items-start justify-between mb-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center`} style={{ background: `${color}15`, color }}>
          <Icon className="w-5 h-5" />
        </div>
        {trend && (
          <div className={`flex items-center gap-1 text-xs ${trend === "up" ? "text-[#18E299]" : trend === "down" ? "text-[#FF6B6B]" : "text-white/40"}`}>
            {trend === "up" ? <TrendingUp className="w-3 h-3" /> : trend === "down" ? <TrendingDown className="w-3 h-3" /> : null}
            <span>{trend === "up" ? "+2.4%" : trend === "down" ? "-1.2%" : "0.0%"}</span>
          </div>
        )}
      </div>
      <p className="text-2xl font-display font-bold text-white">{value}<span className="text-sm text-white/40 ml-1">{unit}</span></p>
      <p className="text-xs text-white/40 mt-1">{label}</p>
    </div>
  );
}

function ChartCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass rounded-xl p-5">
      <h3 className="text-sm font-semibold text-white/80 mb-4">{title}</h3>
      {children}
    </div>
  );
}

export default function Dashboard() {
  const riskColors: Record<string, string> = {
    Low: "#18E299",
    Moderate: "#FFD93D",
    High: "#FF6B6B",
  };

  return (
    <AppLayout>
      <div className="container pb-12">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">Ocean Intelligence Dashboard</h1>
          <p className="text-sm text-white/40 mt-1">Real-time monitoring across 12 ocean zones</p>
        </motion.div>

        {/* Stat Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
          {[
            { icon: Activity, label: "Ocean Health", value: dashboardStats.oceanHealthScore, unit: "/100", color: "#00D9FF", trend: "up" as const },
            { icon: AlertTriangle, label: "Pollution Index", value: dashboardStats.pollutionIndex, unit: "/100", color: "#FF6B6B", trend: "down" as const },
            { icon: Fish, label: "Marine Species", value: dashboardStats.marineSpecies.toLocaleString(), color: "#14F1D9", trend: "up" as const },
            { icon: Cpu, label: "Connected Sensors", value: dashboardStats.connectedSensors.toLocaleString(), color: "#6FE7FF", trend: "stable" as const },
            { icon: Bot, label: "Active Drones", value: dashboardStats.activeDrones, color: "#18E299", trend: "up" as const },
            { icon: Shield, label: "Risk Level", value: dashboardStats.riskLevel, color: riskColors[dashboardStats.riskLevel] || "#FFD93D" },
          ].map((stat, i) => (
            <motion.div key={stat.label} variants={fadeIn} initial="hidden" animate="visible" custom={i}>
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>

        {/* Charts Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Ocean Health Trend */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0} className="lg:col-span-2">
            <ChartCard title="Ocean Health Trend">
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={oceanHealthTrend}>
                  <defs>
                    <linearGradient id="healthGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00D9FF" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#00D9FF" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} domain={[60, 80]} />
                  <Tooltip
                    contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }}
                    labelStyle={{ color: "rgba(255,255,255,0.6)" }}
                  />
                  <Area type="monotone" dataKey="score" stroke="#00D9FF" strokeWidth={2} fill="url(#healthGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          {/* Pollution by Type */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={1}>
            <ChartCard title="Pollution by Type">
              <ResponsiveContainer width="100%" height={240}>
                <PieChart>
                  <Pie
                    data={pollutionByType}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                    dataKey="value"
                    stroke="none"
                  >
                    {pollutionByType.map((entry, index) => (
                      <Cell key={index} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex flex-wrap gap-3 mt-2 justify-center">
                {pollutionByType.map((item) => (
                  <div key={item.name} className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full" style={{ background: item.color }} />
                    <span className="text-xs text-white/50">{item.name} ({item.value}%)</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </motion.div>
        </div>

        {/* Charts Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Sensor Activity */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={2}>
            <ChartCard title="Sensor Activity (7 Days)">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={sensorActivity}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="day" stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }}
                  />
                  <Bar dataKey="active" fill="#00D9FF" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="inactive" fill="#FF6B6B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          {/* Water Quality */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={3}>
            <ChartCard title="Water Quality by Region">
              <ResponsiveContainer width="100%" height={220}>
                <LineChart data={waterQualityData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="region" stroke="rgba(255,255,255,0.3)" fontSize={11} tickLine={false} />
                  <YAxis stroke="rgba(255,255,255,0.3)" fontSize={12} tickLine={false} />
                  <Tooltip
                    contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }}
                  />
                  <Line type="monotone" dataKey="ph" stroke="#00D9FF" strokeWidth={2} dot={{ fill: "#00D9FF", r: 4 }} />
                  <Line type="monotone" dataKey="dissolved" stroke="#14F1D9" strokeWidth={2} dot={{ fill: "#14F1D9", r: 4 }} />
                </LineChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>
        </div>

        {/* Alerts & Weather */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          {/* Recent Alerts */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={4} className="lg:col-span-2">
            <ChartCard title="Recent Alerts">
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                    <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      alert.severity === "critical" ? "bg-[#FF6B6B] shadow-[0_0_8px_#FF6B6B]" :
                      alert.severity === "high" ? "bg-[#FFD93D] shadow-[0_0_8px_#FFD93D]" :
                      alert.severity === "medium" ? "bg-[#6FE7FF]" : "bg-[#18E299]"
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white/90 truncate">{alert.title}</p>
                      <p className="text-xs text-white/40 mt-0.5">{alert.location}</p>
                    </div>
                    <span className="text-xs text-white/30 shrink-0">{alert.time}</span>
                  </div>
                ))}
              </div>
            </ChartCard>
          </motion.div>

          {/* Weather Card */}
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={5}>
            <ChartCard title="Weather Conditions">
              <div className="space-y-4">
                <div className="text-center py-3">
                  <p className="text-3xl font-display font-bold text-white">{weatherData.temperature}°C</p>
                  <p className="text-xs text-white/40 mt-1">{weatherData.condition}</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Thermometer, label: "Water Temp", value: `${weatherData.temperature}°C`, color: "#00D9FF" },
                    { icon: Droplets, label: "Humidity", value: `${weatherData.humidity}%`, color: "#14F1D9" },
                    { icon: Wind, label: "Wind", value: `${weatherData.windSpeed} km/h`, color: "#6FE7FF" },
                    { icon: Waves, label: "Waves", value: `${weatherData.waveHeight}m`, color: "#18E299" },
                  ].map((item) => (
                    <div key={item.label} className="p-3 rounded-lg bg-white/[0.03]">
                      <item.icon className="w-4 h-4 mb-1" style={{ color: item.color }} />
                      <p className="text-xs text-white/40">{item.label}</p>
                      <p className="text-sm font-semibold text-white">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ChartCard>
          </motion.div>
        </div>

        {/* Activities */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={6}>
          <ChartCard title="Recent Activities">
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#00D9FF]/10 flex items-center justify-center shrink-0">
                    <ArrowUpRight className="w-4 h-4 text-[#00D9FF]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white/80">{activity.action}</p>
                    <p className="text-xs text-white/40">{activity.location}</p>
                  </div>
                  <span className="text-xs text-white/30 shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </ChartCard>
        </motion.div>
      </div>
    </AppLayout>
  );
}
