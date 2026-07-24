import { motion } from "framer-motion";
import {
  AlertTriangle,
  BrainCircuit,
  Ship,
  Clock3,
  Globe2,
  Activity,
  TrendingUp,
} from "lucide-react";

const kpis = [
  {
    title: "Active Marine Incidents",
    value: "18",
    change: "+3 Today",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Emergency Missions",
    value: "12",
    change: "5 Active",
    icon: Ship,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "AI Prediction Accuracy",
    value: "97.8%",
    change: "+2.4%",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Average Response",
    value: "26 min",
    change: "-5 min",
    icon: Clock3,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Coastal Coverage",
    value: "98%",
    change: "National",
    icon: Globe2,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function NationalKPIs() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

              NATIONAL KPIs

            </p>

            <h2 className="text-3xl font-black mt-3">

              Operational Metrics

            </h2>

          </div>

          <Activity
            className="text-cyan-400"
            size={38}
          />

        </div>

      </div>

      {/* Readiness */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-6xl font-black text-cyan-400"
          >
            96%
          </motion.h1>

          <p className="text-slate-400 mt-3">

            National Readiness Index

          </p>

        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "96%" }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-emerald-400"
          />

        </div>

      </div>

      {/* KPI Cards */}

      <div className="border-t border-white/10 p-8 space-y-5">

        {kpis.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: -20,
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

              <div className="flex justify-between items-center">

                <div className="flex items-center gap-4">

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
                      size={28}
                      className={item.color}
                    />

                  </div>

                  <div>

                    <h3 className="font-semibold">

                      {item.title}

                    </h3>

                    <p className="text-slate-400 text-sm mt-1">

                      {item.change}

                    </p>

                  </div>

                </div>

                <h2
                  className={`text-3xl font-black ${item.color}`}
                >

                  {item.value}

                </h2>

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <div className="flex justify-between items-center">

          <div className="flex items-center gap-3">

            <TrendingUp
              className="text-green-400"
              size={20}
            />

            <span>

              Overall Trend

            </span>

          </div>

          <span className="font-bold text-green-400">

            Improving

          </span>

        </div>

      </div>

    </div>
  );
}