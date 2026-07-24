import { motion } from "framer-motion";
import {
  Fuel,
  RadioTower,
  PackageCheck,
  CloudSun,
  Waves,
  Gauge,
  CheckCircle2,
} from "lucide-react";

const logistics = [
  {
    title: "Fuel Reserve",
    value: "87%",
    icon: Fuel,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Communication",
    value: "ONLINE",
    icon: RadioTower,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Equipment",
    value: "94%",
    icon: PackageCheck,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Weather",
    value: "Favorable",
    icon: CloudSun,
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
  },
  {
    title: "Sea State",
    value: "Moderate",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
];

export default function LogisticsPanel() {
  return (
    <div className="glass rounded-3xl border border-emerald-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <p className="uppercase tracking-[0.35em] text-emerald-400 text-xs">

          Operations Command

        </p>

        <h2 className="text-3xl font-black mt-3">

          Logistics Status

        </h2>

      </div>

      {/* Mission Efficiency */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            className="text-6xl font-black text-emerald-400"
          >
            93%
          </motion.h1>

          <p className="text-slate-400 mt-3">

            Mission Efficiency

          </p>

        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "93%" }}
            transition={{ duration: 1.2 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
          />

        </div>

      </div>

      {/* Logistics Cards */}

      <div className="border-t border-white/10 p-8 space-y-5">

        {logistics.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.title}
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
                    ${item.bg}
                    `}
                  >

                    <Icon
                      size={24}
                      className={item.color}
                    />

                  </div>

                  <span className="font-medium">

                    {item.title}

                  </span>

                </div>

                <span className={`${item.color} font-bold`}>

                  {item.value}

                </span>

              </div>

            </motion.div>

          );

        })}

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Gauge
              className="text-cyan-400"
              size={20}
            />

            <span>

              Command Network

            </span>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <CheckCircle2 size={18} />

            Stable

          </div>

        </div>

      </div>

    </div>
  );
}