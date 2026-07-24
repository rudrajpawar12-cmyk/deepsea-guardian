import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldCheck,
  Ship,
  Plane,
  Users,
  CheckCircle2,
} from "lucide-react";

const timeline = [
  {
    time: "09:20",
    title: "AI Detected Marine Pollution",
    description:
      "Gemini AI identified an abnormal oil spill using satellite imagery.",
    icon: BrainCircuit,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
  {
    time: "09:24",
    title: "Officer Approved Deployment",
    description:
      "National Command Center approved emergency response.",
    icon: ShieldCheck,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    time: "09:28",
    title: "Coast Guard Vessel Dispatched",
    description:
      "CG Vessel Alpha departed Mumbai Naval Base.",
    icon: Ship,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    time: "09:34",
    title: "Helicopter Airborne",
    description:
      "Helicopter Bravo launched for aerial surveillance.",
    icon: Plane,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    time: "09:46",
    title: "Marine Science Team Deployed",
    description:
      "Environmental sampling initiated.",
    icon: Users,
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    time: "10:05",
    title: "Containment Operation Started",
    description:
      "Oil spill barriers successfully deployed.",
    icon: CheckCircle2,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function DeploymentTimeline() {
  return (
    <div className="glass rounded-3xl border border-emerald-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <p className="uppercase tracking-[0.35em] text-emerald-400 text-xs">
          Mission Timeline
        </p>

        <h2 className="text-3xl font-black mt-3">
          Deployment Progress
        </h2>

      </div>

      {/* Timeline */}

      <div className="p-8">

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-white/10" />

          <div className="space-y-10">

            {timeline.map((event, index) => {
              const Icon = event.icon;

              return (
                <motion.div
                  key={event.title}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className="relative flex gap-6"
                >

                  {/* Icon */}

                  <div
                    className={`
                    relative
                    z-10
                    w-16
                    h-16
                    rounded-full
                    flex
                    items-center
                    justify-center
                    ${event.bg}
                    `}
                  >

                    <Icon
                      className={event.color}
                      size={30}
                    />

                  </div>

                  {/* Card */}

                  <div className="flex-1 rounded-2xl bg-slate-900/60 border border-white/10 p-6">

                    <div className="flex justify-between items-center">

                      <h3 className="font-bold text-xl">

                        {event.title}

                      </h3>

                      <span className="text-cyan-400 font-semibold">

                        {event.time}

                      </span>

                    </div>

                    <p className="text-slate-400 mt-4 leading-7">

                      {event.description}

                    </p>

                  </div>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}