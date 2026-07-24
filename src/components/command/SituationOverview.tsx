import { motion } from "framer-motion";
import {
  ShieldAlert,
  RadioTower,
  Ship,
  Clock3,
} from "lucide-react";

const overview = [
  {
    title: "Critical Incidents",
    value: "04",
    subtitle: "Requires Immediate Action",
    color: "text-red-400",
    bg: "from-red-500/20 to-red-600/5",
    icon: ShieldAlert,
  },
  {
    title: "Active Monitoring",
    value: "21",
    subtitle: "Marine Regions",
    color: "text-cyan-400",
    bg: "from-cyan-500/20 to-cyan-600/5",
    icon: RadioTower,
  },
  {
    title: "Cleanup Missions",
    value: "12",
    subtitle: "Currently Deployed",
    color: "text-green-400",
    bg: "from-green-500/20 to-green-600/5",
    icon: Ship,
  },
  {
    title: "Avg Response",
    value: "14m",
    subtitle: "National Average",
    color: "text-yellow-400",
    bg: "from-yellow-500/20 to-yellow-600/5",
    icon: Clock3,
  },
];

export default function SituationOverview() {
  return (
    <section className="mb-8">

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-3xl font-black">
            National Situation Overview
          </h2>

          <p className="text-slate-400 mt-2">
            Real-time operational summary of marine pollution events across monitored regions.
          </p>

        </div>

        <div className="rounded-xl bg-green-500/10 border border-green-500/30 px-5 py-2">

          <span className="text-green-400 font-semibold flex items-center gap-2">

            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

            LIVE

          </span>

        </div>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

        {overview.map((item, index) => {

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
                delay: index * 0.1,
              }}
              whileHover={{
                y: -6,
              }}
              className={`rounded-3xl bg-gradient-to-br ${item.bg} border border-white/10 backdrop-blur-xl p-6`}
            >

              <div className="flex justify-between items-start">

                <div>

                  <p className="text-slate-400 text-sm">
                    {item.title}
                  </p>

                  <h1 className={`text-5xl font-black mt-3 ${item.color}`}>
                    {item.value}
                  </h1>

                </div>

                <div className="w-14 h-14 rounded-2xl bg-slate-900/60 flex items-center justify-center">

                  <Icon
                    size={28}
                    className={item.color}
                  />

                </div>

              </div>

              <div className="mt-8">

                <p className="text-slate-400 text-sm">
                  {item.subtitle}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}