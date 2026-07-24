import { motion } from "framer-motion";
import {
  HeartPulse,
  AlertTriangle,
  Trash2,
  Bell,
  TrendingUp,
} from "lucide-react";

import AnimatedCounter from "../common/AnimatedCounter";

type StatCardProps = {
  title: string;
  value: string;
  color: string;
};

export default function StatCard({
  title,
  value,
  color,
}: StatCardProps) {
  const getIcon = () => {
    switch (title) {
      case "Marine Health":
        return <HeartPulse className="text-green-400" size={26} />;

      case "Pollution Index":
        return <AlertTriangle className="text-yellow-400" size={26} />;

      case "Plastic Waste":
        return <Trash2 className="text-cyan-400" size={26} />;

      case "Active Alerts":
        return <Bell className="text-red-400" size={26} />;

      default:
        return <TrendingUp className="text-cyan-400" size={26} />;
    }
  };

  const getTrend = () => {
    switch (title) {
      case "Marine Health":
        return "+3.2%";

      case "Pollution Index":
        return "-1.4%";

      case "Plastic Waste":
        return "+12%";

      case "Active Alerts":
        return "+2";

      default:
        return "+0%";
    }
  };

  const getStatus = () => {
    switch (title) {
      case "Marine Health":
        return "Excellent";

      case "Pollution Index":
        return "Moderate";

      case "Plastic Waste":
        return "Recovered";

      case "Active Alerts":
        return "Monitoring";

      default:
        return "Stable";
    }
  };

  const getProgress = () => {
    switch (title) {
      case "Marine Health":
        return "82%";

      case "Pollution Index":
        return "63%";

      case "Plastic Waste":
        return "74%";

      case "Active Alerts":
        return "38%";

      default:
        return "50%";
    }
  };

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.35,
      }}
      className="glass rounded-3xl p-6 relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute -right-12 -top-12 w-36 h-36 rounded-full bg-cyan-500/10 blur-3xl" />

      {/* Header */}
      <div className="flex items-start justify-between">

        <div>
          <p className="text-slate-400 text-sm font-medium">
            {title}
          </p>

          <h2 className={`text-4xl font-black mt-3 ${color}`}>
            <AnimatedCounter value={value} />
          </h2>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-slate-800/70 border border-white/10 flex items-center justify-center animate-glow">
          {getIcon()}
        </div>

      </div>

      {/* Progress */}

      <div className="mt-8">

        <div className="flex justify-between text-xs mb-2">

          <span className="text-slate-400">
            AI Confidence
          </span>

          <span className="text-cyan-400">
            {getProgress()}
          </span>

        </div>

        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: getProgress(),
            }}
            transition={{
              duration: 1.5,
            }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-cyan-300"
          />

        </div>

      </div>

      {/* Footer */}

      <div className="mt-7 flex items-center justify-between">

        <div className="flex items-center gap-1 text-green-400 text-sm font-semibold">

          <TrendingUp size={16} />

          {getTrend()}

        </div>

        <span className="px-3 py-1 rounded-full bg-slate-800 text-xs text-slate-300 border border-white/10">
          {getStatus()}
        </span>

      </div>
    </motion.div>
  );
}