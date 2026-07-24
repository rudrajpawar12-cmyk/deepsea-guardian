import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldAlert,
  Info,
  CheckCircle2,
} from "lucide-react";

const alerts = [
  {
    id: 1,
    level: "Critical",
    title: "Plastic accumulation detected",
    location: "Arabian Sea",
    time: "2 min ago",
  },
  {
    id: 2,
    level: "High",
    title: "Oil spill probability increased",
    location: "Mumbai Coast",
    time: "9 min ago",
  },
  {
    id: 3,
    level: "Medium",
    title: "Strong current detected",
    location: "Bay of Bengal",
    time: "21 min ago",
  },
  {
    id: 4,
    level: "Resolved",
    title: "Cleanup operation completed",
    location: "Lakshadweep",
    time: "1 hr ago",
  },
];

function getIcon(level: string) {
  switch (level) {
    case "Critical":
      return (
        <ShieldAlert
          className="text-red-400"
          size={22}
        />
      );

    case "High":
      return (
        <AlertTriangle
          className="text-orange-400"
          size={22}
        />
      );

    case "Medium":
      return (
        <Info
          className="text-yellow-400"
          size={22}
        />
      );

    default:
      return (
        <CheckCircle2
          className="text-green-400"
          size={22}
        />
      );
  }
}

function getBorder(level: string) {
  switch (level) {
    case "Critical":
      return "border-red-500/30";

    case "High":
      return "border-orange-500/30";

    case "Medium":
      return "border-yellow-500/30";

    default:
      return "border-green-500/30";
  }
}

export default function CommandAlerts() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6 h-full"
    >
      <h2 className="text-2xl font-black mb-2">
        National Alert Center
      </h2>

      <p className="text-slate-400 mb-8">
        Latest environmental alerts issued by
        DeepSea Guardian AI.
      </p>

      <div className="space-y-5">

        {alerts.map((alert) => (

          <motion.div
            key={alert.id}
            whileHover={{
              x: 4,
            }}
            className={`rounded-2xl border ${getBorder(
              alert.level
            )} bg-slate-900 p-5`}
          >

            <div className="flex gap-4">

              {getIcon(alert.level)}

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-bold">
                    {alert.title}
                  </h3>

                  <span className="text-xs text-slate-400">
                    {alert.time}
                  </span>

                </div>

                <p className="text-slate-400 mt-2">
                  {alert.location}
                </p>

                <div className="mt-4">

                  <span className="rounded-full bg-slate-800 px-3 py-1 text-sm">

                    {alert.level}

                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        ))}

      </div>
    </motion.section>
  );
}