/*
 * Reports Page
 * Design: Abyssal Interface - Professional report cards with charts
 */
import { motion } from "framer-motion";
import {
  FileText, Calendar, Download, TrendingUp,
  BarChart3, PieChart, CheckCircle, AlertCircle
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from "recharts";
import { toast } from "sonner";
import AppLayout from "@/components/AppLayout";
import { reports } from "@/data/mockData";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

const radarData = [
  { subject: "Ocean Health", A: 72, fullMark: 100 },
  { subject: "Biodiversity", A: 68, fullMark: 100 },
  { subject: "Water Quality", A: 75, fullMark: 100 },
  { subject: "Pollution", A: 58, fullMark: 100 },
  { subject: "Sensor Coverage", A: 85, fullMark: 100 },
  { subject: "AI Accuracy", A: 94, fullMark: 100 },
];

const monthlyData = [
  { metric: "Health", current: 72, previous: 68 },
  { metric: "Biodiversity", current: 68, previous: 65 },
  { metric: "Quality", current: 75, previous: 72 },
  { metric: "Coverage", current: 85, previous: 80 },
];

export default function Reports() {
  return (
    <AppLayout>
      <div className="container pb-12">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">Reports</h1>
          <p className="text-sm text-white/40 mt-1">Environmental assessments and intelligence reports</p>
        </motion.div>

        {/* Environmental Score Radar */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0} className="mb-8">
          <div className="glass rounded-xl p-6">
            <h3 className="text-sm font-semibold text-white/80 mb-4 flex items-center gap-2">
              <PieChart className="w-4 h-4 text-[#00D9FF]" />
              Environmental Score Overview
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="rgba(255,255,255,0.08)" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "rgba(255,255,255,0.5)", fontSize: 11 }} />
                    <PolarRadiusAxis tick={false} axisLine={false} />
                    <Radar name="Score" dataKey="A" stroke="#00D9FF" fill="#00D9FF" fillOpacity={0.15} strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <div className="flex flex-col justify-center">
                <div className="space-y-4">
                  {radarData.map((item) => (
                    <div key={item.subject}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-white/60">{item.subject}</span>
                        <span className="text-sm font-semibold text-white">{item.A}/100</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#00D9FF] to-[#14F1D9]"
                          style={{ width: `${item.A}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Report Cards */}
        <div className="space-y-6">
          {reports.map((report, i) => (
            <motion.div
              key={report.id}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="glass rounded-xl p-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00D9FF]/15 to-[#14F1D9]/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-[#00D9FF]" />
                    </div>
                    <div>
                      <h3 className="text-base font-display font-semibold text-white">{report.title}</h3>
                      <div className="flex items-center gap-3 mt-0.5">
                        <span className="flex items-center gap-1 text-xs text-white/40">
                          <Calendar className="w-3 h-3" />
                          {report.date}
                        </span>
                        <span className="text-xs text-white/30">•</span>
                        <span className="text-xs text-white/40">{report.period}</span>
                      </div>
                    </div>
                    <span className={`ml-auto px-3 py-1 rounded-full text-xs font-medium ${
                      report.type === "weekly" ? "bg-[#00D9FF]/10 text-[#00D9FF]" : "bg-[#14F1D9]/10 text-[#14F1D9]"
                    }`}>
                      {report.type === "weekly" ? "Weekly" : "Monthly"}
                    </span>
                  </div>

                  <p className="text-sm text-white/50 leading-relaxed mb-4">{report.summary}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
                    {report.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-white/[0.03]">
                        <CheckCircle className="w-3.5 h-3.5 text-[#18E299] shrink-0" />
                        <span className="text-xs text-white/60">{h}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-white/40">Environmental Score:</span>
                      <span className="text-lg font-display font-bold text-gradient">{report.environmentalScore}/100</span>
                    </div>
                    <button
                      onClick={() => toast("Report export initiated (UI demo)")}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-white/70 hover:text-white hover:border-[#00D9FF]/30 hover:bg-[#00D9FF]/5 transition-all duration-200"
                    >
                      <Download className="w-4 h-4" />
                      Export PDF
                    </button>
                  </div>
                </div>

                {/* Mini chart */}
                <div className="lg:w-64 shrink-0">
                  <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={monthlyData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                      <XAxis dataKey="metric" stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} />
                      <YAxis stroke="rgba(255,255,255,0.3)" fontSize={10} tickLine={false} />
                      <Tooltip contentStyle={{ background: "rgba(7,28,52,0.9)", border: "1px solid rgba(0,217,255,0.2)", borderRadius: "8px", color: "#fff" }} />
                      <Bar dataKey="current" fill="#00D9FF" radius={[3, 3, 0, 0]} name="Current" />
                      <Bar dataKey="previous" fill="#00D9FF" fillOpacity={0.2} radius={[3, 3, 0, 0]} name="Previous" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
