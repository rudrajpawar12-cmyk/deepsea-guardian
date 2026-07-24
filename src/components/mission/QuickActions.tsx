import { motion } from "framer-motion";
import {
  Radar,
  BrainCircuit,
  FileText,
  Ship,
  AlertTriangle,
  Satellite,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Open Live Monitoring",
    subtitle: "View national GIS & satellite feeds",
    icon: Radar,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    title: "Critical Incidents",
    subtitle: "Review active emergency events",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
  },
  {
    title: "Run AI Analysis",
    subtitle: "Generate new environmental predictions",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    title: "Deploy Resources",
    subtitle: "Assign Coast Guard & response teams",
    icon: Ship,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    title: "Generate Report",
    subtitle: "Prepare government incident report",
    icon: FileText,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    title: "Satellite Intelligence",
    subtitle: "Latest ISRO observations",
    icon: Satellite,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
];

export default function QuickActions() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/10 p-8">

      <div className="mb-8">

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

          Operations

        </p>

        <h2 className="text-3xl font-black mt-3">

          Quick Actions

        </h2>

      </div>

      <div className="grid md:grid-cols-2 gap-5">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (

            <motion.button
              key={action.title}
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
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
              rounded-2xl
              border
              border-white/10
              hover:border-cyan-400/40
              transition-all
              p-6
              text-left
              group
              "
            >

              <div className="flex justify-between items-start">

                <div
                  className={`
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  ${action.bg}
                  `}
                >

                  <Icon
                    size={28}
                    className={action.color}
                  />

                </div>

                <ArrowRight
                  className="
                  text-slate-500
                  group-hover:text-cyan-400
                  transition-all
                  "
                  size={20}
                />

              </div>

              <h3 className="font-bold text-lg mt-6">

                {action.title}

              </h3>

              <p className="text-slate-400 mt-3 leading-7">

                {action.subtitle}

              </p>

            </motion.button>

          );
        })}

      </div>

    </div>
  );
}