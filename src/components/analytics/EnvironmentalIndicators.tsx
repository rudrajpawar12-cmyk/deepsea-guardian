import { motion } from "framer-motion";
import {
  ThermometerSun,
  Waves,
  Wind,
  Droplets,
  Activity,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const indicators = [
  {
    title: "Sea Surface Temp",
    value: "29.8°C",
    icon: ThermometerSun,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Water Quality",
    value: "82 / 100",
    icon: Droplets,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Wind Speed",
    value: "18 km/h",
    icon: Wind,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    title: "Ocean Current",
    value: "1.4 m/s",
    icon: Waves,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Dissolved Oxygen",
    value: "6.7 mg/L",
    icon: Leaf,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

export default function EnvironmentalIndicators() {
  return (
    <div className="glass rounded-3xl border border-emerald-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-emerald-400 text-xs">

              ENVIRONMENT

            </p>

            <h2 className="text-3xl font-black mt-3">

              Environmental Health

            </h2>

          </div>

          <Activity
            className="text-emerald-400"
            size={38}
          />

        </div>

      </div>

      {/* Health Score */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            className="text-6xl font-black text-emerald-400"
          >

            91%

          </motion.h1>

          <p className="text-slate-400 mt-3">

            Environmental Health Score

          </p>

        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "91%" }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
          />

        </div>

      </div>

      {/* Indicators */}

      <div className="border-t border-white/10 p-8 space-y-5">

        {indicators.map((indicator, index) => {

          const Icon = indicator.icon;

          return (

            <motion.div
              key={indicator.title}
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
                    ${indicator.bg}
                    `}
                  >

                    <Icon
                      size={24}
                      className={indicator.color}
                    />

                  </div>

                  <span className="font-semibold">

                    {indicator.title}

                  </span>

                </div>

                <span
                  className={`font-black text-lg ${indicator.color}`}
                >

                  {indicator.value}

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

            <CheckCircle2
              className="text-green-400"
              size={20}
            />

            <span>

              Ecosystem Status

            </span>

          </div>

          <span className="font-bold text-green-400">

            Stable

          </span>

        </div>

      </div>

    </div>
  );
}