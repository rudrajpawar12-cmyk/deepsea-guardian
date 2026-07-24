import { motion } from "framer-motion";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { pollutionTrend } from "../../data/dashboardData";

export default function Analytics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-6 h-[460px] hover-lift"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            📈 Pollution Trend
          </h2>

          <p className="text-slate-400 mt-1">
            Last 6 months AI monitored pollution index
          </p>
        </div>

        <div className="rounded-xl bg-cyan-500/10 border border-cyan-500/20 px-4 py-2">
          <span className="text-cyan-400 font-semibold">
            Live Data
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="82%">
        <AreaChart data={pollutionTrend}>
          <defs>
            <linearGradient
              id="pollutionGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="5%"
                stopColor="#06b6d4"
                stopOpacity={0.55}
              />

              <stop
                offset="95%"
                stopColor="#06b6d4"
                stopOpacity={0}
              />
            </linearGradient>
          </defs>

          <CartesianGrid
            stroke="#1e293b"
            strokeDasharray="4 4"
          />

          <XAxis
            dataKey="month"
            tick={{
              fill: "#94a3b8",
            }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{
              fill: "#94a3b8",
            }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip
            contentStyle={{
              background: "#0f172a",
              border: "1px solid rgba(6,182,212,.3)",
              borderRadius: "16px",
              color: "#fff",
            }}
          />

          <Area
            type="monotone"
            dataKey="pollution"
            stroke="#06b6d4"
            strokeWidth={4}
            fill="url(#pollutionGradient)"
            animationDuration={1800}
            activeDot={{
              r: 8,
              stroke: "#fff",
              strokeWidth: 2,
              fill: "#06b6d4",
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </motion.div>
  );
}