import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  Database,
  Satellite,
  ShieldCheck,
  Activity,
} from "lucide-react";

const systems = [
  {
    title: "Gemini AI Core",
    status: "ONLINE",
    color: "text-green-400",
    icon: BrainCircuit,
  },
  {
    title: "Satellite Feed",
    status: "CONNECTED",
    color: "text-cyan-400",
    icon: Satellite,
  },
  {
    title: "Neural Compute",
    status: "97%",
    color: "text-violet-400",
    icon: Cpu,
  },
  {
    title: "Ocean Database",
    status: "SYNCED",
    color: "text-blue-400",
    icon: Database,
  },
];

export default function AIStatus() {
  return (
    <div className="glass rounded-3xl border border-violet-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-violet-400 text-xs">

              AI STATUS

            </p>

            <h2 className="text-3xl font-black mt-3">

              System Health

            </h2>

          </div>

          <div className="w-16 h-16 rounded-2xl bg-violet-500/10 flex items-center justify-center">

            <ShieldCheck
              size={34}
              className="text-violet-400"
            />

          </div>

        </div>

      </div>

      {/* AI Score */}

      <div className="p-8">

        <div className="text-center">

          <motion.h1
            initial={{
              scale: 0.8,
            }}
            animate={{
              scale: 1,
            }}
            className="text-7xl font-black text-violet-400"
          >
            96%
          </motion.h1>

          <p className="text-slate-400 mt-3">

            Overall AI Confidence

          </p>

        </div>

        {/* Progress */}

        <div className="mt-8">

          <div className="h-3 rounded-full bg-slate-800 overflow-hidden">

            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "96%",
              }}
              transition={{
                duration: 1.2,
              }}
              className="h-full bg-gradient-to-r from-violet-500 to-cyan-400 rounded-full"
            />

          </div>

        </div>

      </div>

      {/* Divider */}

      <div className="border-t border-white/10" />

      {/* Systems */}

      <div className="p-8 space-y-5">

        {systems.map((system, index) => {
          const Icon = system.icon;

          return (

            <motion.div
              key={system.title}
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
              flex
              justify-between
              items-center
              rounded-2xl
              bg-slate-900/60
              border
              border-white/5
              p-5
              "
            >

              <div className="flex items-center gap-4">

                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">

                  <Icon
                    className={system.color}
                    size={24}
                  />

                </div>

                <div>

                  <p className="font-semibold">

                    {system.title}

                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2">

                <Activity
                  size={14}
                  className={system.color}
                />

                <span className={`${system.color} font-bold`}>

                  {system.status}

                </span>

              </div>

            </motion.div>

          );
        })}

      </div>

    </div>
  );
}