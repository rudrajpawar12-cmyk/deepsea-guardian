import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Satellite,
  Target,
  Timer,
  TrendingUp,
} from "lucide-react";

const metrics = [
  {
    title: "Prediction Accuracy",
    value: "97.8%",
    icon: Target,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    title: "Satellite Detection",
    value: "96.2%",
    icon: Satellite,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Inference Time",
    value: "1.8 sec",
    icon: Timer,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Neural Engine",
    value: "ONLINE",
    icon: Cpu,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function AIAccuracy() {
  return (
    <div className="glass rounded-3xl border border-violet-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-violet-400 text-xs">

            AI PERFORMANCE

          </p>

          <h2 className="text-3xl font-black mt-3">

            Gemini Intelligence

          </h2>

        </div>

        <BrainCircuit
          size={40}
          className="text-violet-400"
        />

      </div>

      {/* Accuracy */}

      <div className="p-8">

        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Gauge */}

          <div className="flex justify-center">

            <motion.div
              initial={{
                scale: 0.85,
              }}
              animate={{
                scale: 1,
              }}
              className="
              w-60
              h-60
              rounded-full
              border-[14px]
              border-violet-500
              flex
              flex-col
              justify-center
              items-center
              bg-violet-500/10
              shadow-[0_0_80px_rgba(139,92,246,.25)]
              "
            >

              <h1 className="text-6xl font-black text-violet-400">

                97%

              </h1>

              <p className="text-slate-400 mt-2">

                Accuracy

              </p>

            </motion.div>

          </div>

          {/* Metrics */}

          <div className="space-y-5">

            {metrics.map((metric, index) => {

              const Icon = metric.icon;

              return (

                <motion.div
                  key={metric.title}
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

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6 flex justify-between items-center">

        <div className="flex items-center gap-3">

          <TrendingUp
            size={20}
            className="text-green-400"
          />

          <span>

            Weekly Improvement

          </span>

        </div>

        <span className="font-bold text-green-400">

          +2.3%

        </span>

      </div>

    </div>
  );
}