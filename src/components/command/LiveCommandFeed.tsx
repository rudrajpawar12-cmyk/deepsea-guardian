import { motion } from "framer-motion";
import {
  Satellite,
  BrainCircuit,
  Ship,
  ShieldAlert,
  CheckCircle2,
  RadioTower,
} from "lucide-react";

const feed = [
  {
    id: 1,
    icon: Satellite,
    color: "text-cyan-400",
    title: "Satellite Scan Completed",
    description:
      "INSAT-3D imagery processed successfully over Arabian Sea.",
    time: "Just now",
  },
  {
    id: 2,
    icon: BrainCircuit,
    color: "text-purple-400",
    title: "AI Risk Updated",
    description:
      "Confidence increased to 96.3% after latest ocean current analysis.",
    time: "2 min ago",
  },
  {
    id: 3,
    icon: ShieldAlert,
    color: "text-red-400",
    title: "Incident Escalated",
    description:
      "DG-2026-0001 upgraded from High to Critical severity.",
    time: "4 min ago",
  },
  {
    id: 4,
    icon: Ship,
    color: "text-green-400",
    title: "Cleanup Fleet Deployed",
    description:
      "Three cleanup vessels dispatched from Mumbai Naval Port.",
    time: "7 min ago",
  },
  {
    id: 5,
    icon: RadioTower,
    color: "text-cyan-400",
    title: "Sensor Network",
    description:
      "148 coastal monitoring stations synchronized successfully.",
    time: "11 min ago",
  },
  {
    id: 6,
    icon: CheckCircle2,
    color: "text-emerald-400",
    title: "Mission Update",
    description:
      "Containment effectiveness has reached 72%.",
    time: "18 min ago",
  },
];

export default function LiveCommandFeed() {
  return (
    <section className="glass rounded-3xl overflow-hidden">

      <div className="border-b border-white/10 px-6 py-5">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
              Live Operations
            </p>

            <h2 className="text-2xl font-black mt-2">
              National Command Feed
            </h2>

          </div>

          <div className="flex items-center gap-2">

            <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

            <span className="text-green-400 font-semibold">
              LIVE
            </span>

          </div>

        </div>

      </div>

      <div className="max-h-[550px] overflow-y-auto">

        {feed.map((item, index) => {

          const Icon = item.icon;

          return (

            <motion.div
              key={item.id}
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
              whileHover={{
                backgroundColor: "rgba(15,23,42,.5)",
              }}
              className="flex gap-5 p-6 border-b border-white/5 transition-all"
            >

              <div className="relative">

                <div className="w-12 h-12 rounded-2xl bg-slate-900 flex items-center justify-center">

                  <Icon
                    className={item.color}
                    size={22}
                  />

                </div>

                <span className="absolute left-1/2 -bottom-6 w-px h-6 bg-slate-700 -translate-x-1/2" />

              </div>

              <div className="flex-1">

                <div className="flex justify-between">

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <span className="text-xs text-slate-500">
                    {item.time}
                  </span>

                </div>

                <p className="text-slate-400 mt-2 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          );

        })}

      </div>

    </section>
  );
}