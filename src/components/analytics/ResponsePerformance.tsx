import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  BrainCircuit,
  Timer,
  CheckCircle2,
  TrendingUp,
  Gauge,
} from "lucide-react";

const metrics = [
  {
    title: "Average Deployment",
    value: "24 min",
    icon: Ship,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Air Response",
    value: "16 min",
    icon: Plane,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "AI Decision",
    value: "1.8 sec",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Officer Approval",
    value: "3 min",
    icon: Timer,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

export default function ResponsePerformance() {
  return (
    <div className="glass rounded-3xl border border-green-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-green-400 text-xs">

              RESPONSE PERFORMANCE

            </p>

            <h2 className="text-3xl font-black mt-3">

              National Operations

            </h2>

          </div>

          <Gauge
            size={40}
            className="text-green-400"
          />

        </div>

      </div>

      {/* Mission Success */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{
              scale: 0.8,
            }}
            animate={{
              scale: 1,
            }}
            className="text-7xl font-black text-green-400"
          >

            94%

          </motion.h1>

          <p className="text-slate-400 mt-3">

            Mission Success Rate

          </p>

        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: "94%",
            }}
            transition={{
              duration: 1.4,
            }}
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-cyan-400"
          />

        </div>

      </div>

      {/* Metrics */}

      <div className="border-t border-white/10 p-8 space-y-5">

        {metrics.map((metric, index) => {

          const Icon = metric.icon;

          return (

            <motion.div
              key={metric.title}
              initial={{
                opacity: 0,
                x: 20,
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
                    w-12
                    h-12
                    rounded-xl
                    flex
                    items-center
                    justify-center
                    ${metric.bg}
                    `}
                  >

                    <Icon
                      className={metric.color}
                      size={24}
                    />

                  </div>

                  <span className="font-semibold">

                    {metric.title}

                  </span>

                </div>

                <span
                  className={`font-black text-xl ${metric.color}`}
                >

                  {metric.value}

                </span>

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

              Operational Efficiency

            </span>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <CheckCircle2 size={18} />

            +11% This Month

          </div>

        </div>

      </div>

    </div>
  );
}