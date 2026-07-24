import { motion } from "framer-motion";
import {
  Satellite,
  Ship,
  Waves,
  ShieldCheck,
  Leaf,
} from "lucide-react";

const agencies = [
  {
    name: "ISRO",
    status: "Satellite Feed Connected",
    icon: Satellite,
    color: "text-cyan-400",
  },
  {
    name: "INCOIS",
    status: "Ocean Data Streaming",
    icon: Waves,
    color: "text-blue-400",
  },
  {
    name: "Indian Coast Guard",
    status: "Fleet Ready",
    icon: Ship,
    color: "text-green-400",
  },
  {
    name: "CPCB",
    status: "Pollution Monitoring",
    icon: ShieldCheck,
    color: "text-orange-400",
  },
  {
    name: "MoEFCC",
    status: "Environmental Intelligence",
    icon: Leaf,
    color: "text-emerald-400",
  },
];

export default function AgencyStatus() {
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
      transition={{
        delay: 1.5,
      }}
      className="
      absolute
      bottom-10
      left-1/2
      -translate-x-1/2
      z-30
      w-[92%]
      max-w-7xl
      "
    >
      <div
        className="
        rounded-3xl
        border
        border-cyan-500/15
        bg-slate-900/40
        backdrop-blur-2xl
        px-8
        py-6
        "
      >
        <div className="grid grid-cols-5 gap-6">

          {agencies.map((agency, index) => {

            const Icon = agency.icon;

            return (

              <motion.div
                key={agency.name}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: index * 0.12,
                }}
                whileHover={{
                  y: -5,
                }}
                className="
                rounded-2xl
                border
                border-white/5
                bg-white/[0.02]
                p-5
                transition-all
                hover:border-cyan-500/20
                "
              >

                <div className="flex items-center justify-between">

                  <div
                    className="
                    w-12
                    h-12
                    rounded-xl
                    bg-cyan-500/10
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Icon
                      size={22}
                      className={agency.color}
                    />

                  </div>

                  <motion.div
                    animate={{
                      opacity: [1, .3, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                    }}
                    className="
                    w-3
                    h-3
                    rounded-full
                    bg-green-400
                    "
                  />

                </div>

                <h3 className="mt-5 font-bold">

                  {agency.name}

                </h3>

                <p className="text-sm text-slate-400 mt-2">

                  {agency.status}

                </p>

              </motion.div>

            );

          })}

        </div>
      </div>
    </motion.div>
  );
}