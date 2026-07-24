import { motion } from "framer-motion";
import {
  Ship,
  Plane,
  Anchor,
  MapPinned,
  ArrowRight,
} from "lucide-react";

const missions = [
  {
    id: 1,
    unit: "CG Vessel Alpha",
    destination: "Mumbai Coast",
    eta: "32 min",
    status: "En Route",
    icon: Ship,
    color: "text-cyan-400",
  },
  {
    id: 2,
    unit: "Helicopter Bravo",
    destination: "Arabian Sea",
    eta: "18 min",
    status: "Airborne",
    icon: Plane,
    color: "text-orange-400",
  },
  {
    id: 3,
    unit: "Research Vessel Delta",
    destination: "Lakshadweep",
    eta: "1h 12m",
    status: "Preparing",
    icon: Anchor,
    color: "text-green-400",
  },
];

export default function DeploymentMap() {
  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

            LIVE DEPLOYMENT

          </p>

          <h2 className="text-3xl font-black mt-3">

            National Operations Map

          </h2>

        </div>

        <MapPinned
          className="text-cyan-400"
          size={38}
        />

      </div>

      {/* Fake Tactical Map */}

      <div className="relative h-[520px] bg-slate-950 overflow-hidden">

        {/* Grid */}

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.15),transparent_70%)]" />

        {/* Animated Routes */}

        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1000 600"
        >
          <motion.line
            x1="120"
            y1="500"
            x2="480"
            y2="220"
            stroke="#22d3ee"
            strokeWidth="3"
            strokeDasharray="12 10"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />

          <motion.line
            x1="760"
            y1="100"
            x2="520"
            y2="330"
            stroke="#fb923c"
            strokeWidth="3"
            strokeDasharray="12 10"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              delay: .5,
              repeat: Infinity,
            }}
          />

          <motion.line
            x1="900"
            y1="500"
            x2="650"
            y2="250"
            stroke="#22c55e"
            strokeWidth="3"
            strokeDasharray="12 10"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: 1,
            }}
            transition={{
              duration: 2,
              delay: 1,
              repeat: Infinity,
            }}
          />
        </svg>

        {/* Mission Cards */}

        <div className="absolute left-6 top-6 space-y-4 w-[330px]">

          {missions.map((mission, index) => {

            const Icon = mission.icon;

            return (

              <motion.div
                key={mission.id}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * .1,
                }}
                className="
                rounded-2xl
                bg-slate-900/90
                backdrop-blur-xl
                border
                border-white/10
                p-5
                "
              >

                <div className="flex justify-between items-center">

                  <div className="flex items-center gap-4">

                    <Icon
                      className={mission.color}
                      size={26}
                    />

                    <div>

                      <h3 className="font-bold">

                        {mission.unit}

                      </h3>

                      <p className="text-slate-400 text-sm">

                        {mission.destination}

                      </p>

                    </div>

                  </div>

                  <span
                    className="
                    w-3
                    h-3
                    rounded-full
                    bg-green-400
                    animate-pulse
                    "
                  />

                </div>

                <div className="flex justify-between mt-5 text-sm">

                  <span className="text-slate-400">

                    ETA

                  </span>

                  <span className="font-bold">

                    {mission.eta}

                  </span>

                </div>

                <div className="flex justify-between mt-3 text-sm">

                  <span className="text-slate-400">

                    Status

                  </span>

                  <span className={mission.color}>

                    {mission.status}

                  </span>

                </div>

              </motion.div>

            );

          })}

        </div>

        {/* Bottom Info */}

        <div className="absolute bottom-8 right-8 rounded-2xl bg-slate-900/90 border border-white/10 p-6 w-72">

          <div className="flex justify-between">

            <span className="text-slate-400">

              Active Missions

            </span>

            <span className="font-black text-cyan-400">

              12

            </span>

          </div>

          <div className="flex justify-between mt-4">

            <span className="text-slate-400">

              Assets Deployed

            </span>

            <span className="font-black text-green-400">

              26

            </span>

          </div>

          <div className="flex justify-between mt-4">

            <span className="text-slate-400">

              Avg ETA

            </span>

            <span className="font-black">

              28 min

            </span>

          </div>

          <button
            className="
            mt-6
            w-full
            rounded-xl
            border
            border-cyan-500/20
            py-3
            flex
            justify-center
            items-center
            gap-3
            hover:border-cyan-400
            transition-all
            "
          >

            View All Missions

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

    </div>
  );
}