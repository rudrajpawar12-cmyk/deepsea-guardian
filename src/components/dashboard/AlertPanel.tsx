import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  TriangleAlert,
  ArrowRight,
} from "lucide-react";

import { alerts } from "../../data/dashboardData";

export default function AlertPanel() {
  const getIcon = (severity: string) => {
    switch (severity) {
      case "High":
        return (
          <div className="w-11 h-11 rounded-xl bg-red-500/20 flex items-center justify-center">
            <TriangleAlert className="text-red-400" size={22} />
          </div>
        );

      case "Medium":
        return (
          <div className="w-11 h-11 rounded-xl bg-yellow-500/20 flex items-center justify-center">
            <AlertCircle className="text-yellow-400" size={22} />
          </div>
        );

      default:
        return (
          <div className="w-11 h-11 rounded-xl bg-green-500/20 flex items-center justify-center">
            <CheckCircle2 className="text-green-400" size={22} />
          </div>
        );
    }
  };

  const getBadge = (severity: string) => {
    switch (severity) {
      case "High":
        return "bg-red-500/20 text-red-400 border-red-500/30";

      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";

      default:
        return "bg-green-500/20 text-green-400 border-green-500/30";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="glass rounded-3xl p-6 h-[460px] hover-lift"
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-2xl font-bold">
            🚨 Live Alerts
          </h2>

          <p className="text-slate-400 mt-1">
            AI detected environmental events
          </p>
        </div>

        <span className="text-cyan-400 text-sm font-semibold">
          {alerts.length} Active
        </span>
      </div>

      {/* Alerts */}

      <div className="space-y-5">

        {alerts.map((alert) => (

          <motion.div
            key={alert.id}
            whileHover={{
              scale: 1.02,
              x: 5,
            }}
            className="rounded-2xl bg-slate-800/70 border border-white/5 p-5"
          >

            <div className="flex gap-4">

              {getIcon(alert.severity)}

              <div className="flex-1">

                <div className="flex items-center justify-between">

                  <h3 className="font-semibold">
                    {alert.message}
                  </h3>

                  <span
                    className={`text-xs px-3 py-1 rounded-full border ${getBadge(
                      alert.severity
                    )}`}
                  >
                    {alert.severity}
                  </span>

                </div>

                <p className="text-slate-400 text-sm mt-2">
                  {alert.time}
                </p>

                <button className="mt-4 flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition">

                  Investigate

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </motion.div>
  );
}