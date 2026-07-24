import { motion } from "framer-motion";
import {
  AlertTriangle,
  BrainCircuit,
  Satellite,
  Activity,
  Ship,
  Waves,
  TrendingUp,
} from "lucide-react";

const status = [
  {
    title: "Threat Level",
    value: "HIGH",
    icon: AlertTriangle,
    color: "text-red-400",
    bg: "bg-red-500/10",
    border: "border-red-500/20",
    trend: "+2 Incidents",
  },
  {
    title: "Active Incidents",
    value: "06",
    icon: Activity,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
    trend: "+1 Today",
  },
  {
    title: "Gemini AI",
    value: "96%",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    trend: "Prediction Confidence",
  },
  {
    title: "Satellite Network",
    value: "ONLINE",
    icon: Satellite,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
    trend: "12 Connected",
  },
  {
    title: "Ocean Health",
    value: "78%",
    icon: Waves,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
    trend: "+3% This Week",
  },
  {
    title: "Response Readiness",
    value: "94%",
    icon: Ship,
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
    trend: "Assets Ready",
  },
];

export default function MissionStatusGrid() {
  return (
    <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">

      {status.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={item.title}
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.08,
            }}
            whileHover={{
              y: -6,
              scale: 1.02,
            }}
            className={`
              relative
              glass
              rounded-3xl
              p-7
              border
              ${item.border}
              overflow-hidden
            `}
          >

            {/* Glow */}

            <div
              className={`
                absolute
                -top-10
                -right-10
                w-32
                h-32
                rounded-full
                blur-3xl
                ${item.bg}
              `}
            />

            {/* Header */}

            <div className="flex justify-between items-center">

              <div
                className={`
                  w-16
                  h-16
                  rounded-2xl
                  ${item.bg}
                  flex
                  items-center
                  justify-center
                `}
              >

                <Icon
                  size={30}
                  className={item.color}
                />

              </div>

              <span
                className="
                flex
                items-center
                gap-2
                text-green-400
                text-sm
                "
              >

                <TrendingUp size={16} />

                Live

              </span>

            </div>

            {/* Value */}

            <h2
              className={`text-5xl font-black mt-8 ${item.color}`}
            >

              {item.value}

            </h2>

            {/* Title */}

            <p className="text-slate-400 mt-3">

              {item.title}

            </p>

            {/* Footer */}

            <div className="mt-8 pt-5 border-t border-white/10 flex justify-between items-center">

              <span className="text-slate-500 text-sm">

                {item.trend}

              </span>

              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            </div>

          </motion.div>
        );
      })}

    </section>
  );
}