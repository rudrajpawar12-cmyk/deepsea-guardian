import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Users,
  RadioTower,
  CheckCircle2,
  Activity,
} from "lucide-react";

const resources = [
  {
    id: 1,
    name: "CG Vessel Alpha",
    type: "Coast Guard Vessel",
    status: "En Route",
    health: "Operational",
    icon: Ship,
    color: "text-cyan-400",
    bg: "bg-cyan-500/10",
  },
  {
    id: 2,
    name: "Helicopter Bravo",
    type: "Air Surveillance",
    status: "Airborne",
    health: "Operational",
    icon: Plane,
    color: "text-orange-400",
    bg: "bg-orange-500/10",
  },
  {
    id: 3,
    name: "Marine Science Team",
    type: "Environmental Unit",
    status: "Sampling",
    health: "Ready",
    icon: Users,
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
  {
    id: 4,
    name: "Command Relay Station",
    type: "Communication",
    status: "Online",
    health: "Connected",
    icon: RadioTower,
    color: "text-violet-400",
    bg: "bg-violet-500/10",
  },
];

export default function ActiveResources() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <div className="flex justify-between items-center">

          <div>

            <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

              LIVE RESOURCES

            </p>

            <h2 className="text-3xl font-black mt-3">

              Active Assets

            </h2>

          </div>

          <Activity
            size={36}
            className="text-cyan-400"
          />

        </div>

      </div>

      {/* Resources */}

      <div className="p-8 space-y-5">

        {resources.map((resource, index) => {

          const Icon = resource.icon;

          return (

            <motion.div
              key={resource.id}
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
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    ${resource.bg}
                    `}
                  >

                    <Icon
                      size={28}
                      className={resource.color}
                    />

                  </div>

                  <div>

                    <h3 className="font-bold">

                      {resource.name}

                    </h3>

                    <p className="text-slate-400 text-sm mt-1">

                      {resource.type}

                    </p>

                  </div>

                </div>

                <div className="text-right">

                  <span
                    className={`
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-bold
                    ${resource.bg}
                    ${resource.color}
                    `}
                  >

                    {resource.status}

                  </span>

                </div>

              </div>

              <div className="mt-5 flex justify-between items-center">

                <div className="flex items-center gap-2">

                  <CheckCircle2
                    size={18}
                    className="text-green-400"
                  />

                  <span className="text-slate-300">

                    {resource.health}

                  </span>

                </div>

                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

              </div>

            </motion.div>

          );

        })}

      </div>

    </div>
  );
}