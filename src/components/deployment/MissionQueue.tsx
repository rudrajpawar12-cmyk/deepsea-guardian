import { motion } from "framer-motion";
import {
  AlertTriangle,
  Clock3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const missions = [
  {
    id: 1,
    priority: "CRITICAL",
    title: "Deploy Oil Spill Response Team",
    location: "Mumbai Coast",
    eta: "Immediate",
    status: "Awaiting Approval",
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    id: 2,
    priority: "HIGH",
    title: "Launch Surveillance Helicopter",
    location: "Arabian Sea",
    eta: "18 min",
    status: "Preparing",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: 3,
    priority: "MEDIUM",
    title: "Dispatch Water Sampling Team",
    location: "Goa Coast",
    eta: "42 min",
    status: "Queued",
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 4,
    priority: "LOW",
    title: "Environmental Assessment",
    location: "Lakshadweep",
    eta: "2 hrs",
    status: "Scheduled",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
];

export default function MissionQueue() {
  return (
    <div className="glass rounded-3xl border border-orange-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-orange-400 text-xs">

            DEPLOYMENT QUEUE

          </p>

          <h2 className="text-3xl font-black mt-3">

            Active Missions

          </h2>

        </div>

        <AlertTriangle
          className="text-orange-400"
          size={36}
        />

      </div>

      {/* Missions */}

      <div className="p-8 space-y-5">

        {missions.map((mission, index) => (

          <motion.div
            key={mission.id}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            className="
            rounded-2xl
            border
            border-white/10
            bg-slate-900/60
            p-6
            "
          >

            <div className="flex justify-between items-start">

              <div>

                <span
                  className={`
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  font-bold
                  ${mission.bg}
                  ${mission.color}
                  `}
                >

                  {mission.priority}

                </span>

                <h3 className="font-bold text-xl mt-4">

                  {mission.title}

                </h3>

                <p className="text-slate-400 mt-2">

                  {mission.location}

                </p>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-2 justify-end text-slate-400">

                  <Clock3 size={16} />

                  {mission.eta}

                </div>

              </div>

            </div>

            <div className="mt-6 flex justify-between items-center">

              <div className="flex items-center gap-2">

                <CheckCircle2
                  className="text-green-400"
                  size={18}
                />

                <span className="text-slate-300">

                  {mission.status}

                </span>

              </div>

              <button
                className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-cyan-500/20
                px-4
                py-2
                text-cyan-400
                hover:border-cyan-400
                transition-all
                "
              >

                Details

                <ArrowRight size={18} />

              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </div>
  );
}