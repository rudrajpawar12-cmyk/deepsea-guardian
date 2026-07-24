import { motion } from "framer-motion";
import {
  Ship,
  Bell,
  RadioTower,
  FileWarning,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

import { useCommandCenter } from "../../context/CommandCenterContext";

export default function AIRecommendations() {
  const { selectedIncident } = useCommandCenter();

  const incident =
    selectedIncident ?? {
      severity: "Critical",
    };

  const recommendations =
    incident.severity === "Critical"
      ? [
          {
            priority: "IMMEDIATE",
            title: "Deploy Coast Guard Vessel Alpha",
            icon: Ship,
            color: "text-red-400",
            bg: "bg-red-500/10",
          },
          {
            priority: "HIGH",
            title: "Notify CPCB & State Pollution Board",
            icon: Bell,
            color: "text-orange-400",
            bg: "bg-orange-500/10",
          },
          {
            priority: "HIGH",
            title: "Increase Satellite Scan Frequency",
            icon: RadioTower,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
          },
          {
            priority: "MEDIUM",
            title: "Prepare Government Situation Report",
            icon: FileWarning,
            color: "text-violet-400",
            bg: "bg-violet-500/10",
          },
        ]
      : [
          {
            priority: "MEDIUM",
            title: "Continue Environmental Monitoring",
            icon: RadioTower,
            color: "text-cyan-400",
            bg: "bg-cyan-500/10",
          },
          {
            priority: "LOW",
            title: "Collect Additional Water Samples",
            icon: FileWarning,
            color: "text-green-400",
            bg: "bg-green-500/10",
          },
        ];

  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

          Decision Support

        </p>

        <h2 className="text-3xl font-black mt-3">

          AI Recommendations

        </h2>

      </div>

      {/* Recommendations */}

      <div className="p-8 space-y-5">

        {recommendations.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.08,
              }}
              className="
              rounded-2xl
              border
              border-white/10
              bg-slate-900/60
              p-5
              "
            >
              <div className="flex justify-between items-start">

                <div className="flex gap-4">

                  <div
                    className={`
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${item.bg}
                    `}
                  >
                    <Icon
                      className={item.color}
                      size={28}
                    />
                  </div>

                  <div>

                    <span
                      className={`
                      inline-block
                      px-3
                      py-1
                      rounded-full
                      text-xs
                      font-bold
                      ${item.bg}
                      ${item.color}
                      `}
                    >
                      {item.priority}
                    </span>

                    <h3 className="font-bold text-lg mt-3">

                      {item.title}

                    </h3>

                  </div>

                </div>

              </div>

              {/* Action Buttons */}

              <div className="flex gap-3 mt-6">

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                  flex-1
                  rounded-xl
                  bg-green-500/10
                  border
                  border-green-500/20
                  py-3
                  flex
                  justify-center
                  items-center
                  gap-2
                  text-green-400
                  "
                >
                  <CheckCircle2 size={18} />

                  Approve

                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="
                  flex-1
                  rounded-xl
                  border
                  border-cyan-500/20
                  py-3
                  flex
                  justify-center
                  items-center
                  gap-2
                  text-cyan-400
                  "
                >
                  Details

                  <ArrowRight size={18} />

                </motion.button>

              </div>

            </motion.div>
          );
        })}

      </div>

    </div>
  );
}