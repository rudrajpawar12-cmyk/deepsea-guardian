import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Truck,
  Users,
  Fuel,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const fleet = [
  {
    title: "Coast Guard Vessels",
    value: "18",
    available: "15 Ready",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    icon: Ship,
  },
  {
    title: "Helicopters",
    value: "06",
    available: "5 Ready",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    icon: Plane,
  },
  {
    title: "Response Vehicles",
    value: "32",
    available: "29 Ready",
    color: "text-green-400",
    bg: "bg-green-500/10",
    icon: Truck,
  },
  {
    title: "Marine Scientists",
    value: "48",
    available: "41 Available",
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    icon: Users,
  },
];

export default function FleetStatus() {
  return (
    <div className="glass rounded-3xl border border-emerald-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-emerald-400 text-xs">

              NATIONAL FLEET

            </p>

            <h2 className="text-3xl font-black mt-3">

              Operational Readiness

            </h2>

          </div>

          <ShieldCheck
            size={38}
            className="text-emerald-400"
          />

        </div>

      </div>

      {/* Readiness */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{ scale: .8 }}
            animate={{ scale: 1 }}
            className="text-7xl font-black text-emerald-400"
          >
            94%
          </motion.h1>

          <p className="text-slate-400 mt-3">

            Fleet Readiness

          </p>

        </div>

        <div className="mt-8 h-3 rounded-full bg-slate-800 overflow-hidden">

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "94%" }}
            transition={{ duration: 1.3 }}
            className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-cyan-400"
          />

        </div>

      </div>

      {/* Fleet */}

      <div className="border-t border-white/10 p-8 space-y-5">

        {fleet.map((item, index) => {

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
                delay: index * .08,
              }}
              className="
              rounded-2xl
              border
              border-white/5
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

                      {item.available}

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

            <Fuel
              className="text-orange-400"
              size={20}
            />

            <span>

              Fleet Fuel Reserve

            </span>

          </div>

          <div className="flex items-center gap-2 text-green-400">

            <TrendingUp size={18} />

            87%

          </div>

        </div>

      </div>

    </div>
  );
}