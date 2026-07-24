import { motion } from "framer-motion";
import {
  Satellite,
  BrainCircuit,
  Ship,
  ShieldAlert,
  Waves,
  CheckCircle2,
} from "lucide-react";

const feed = [
  {
    icon: Satellite,
    title: "ISRO Satellite-07",
    message: "Detected marine pollution anomaly.",
    color: "text-cyan-400",
    time: "00:03",
  },
  {
    icon: BrainCircuit,
    title: "Gemini AI",
    message: "Pollution spread prediction updated to 97% confidence.",
    color: "text-purple-400",
    time: "00:08",
  },
  {
    icon: Waves,
    title: "Ocean Sensors",
    message: "Chemical concentration increasing near Arabian Sea.",
    color: "text-blue-400",
    time: "00:13",
  },
  {
    icon: Ship,
    title: "Indian Coast Guard",
    message: "Cleanup vessel INS Samudra deployed.",
    color: "text-green-400",
    time: "00:19",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Alert",
    message: "Threat Level elevated to HIGH.",
    color: "text-red-400",
    time: "00:25",
  },
  {
    icon: CheckCircle2,
    title: "Mission Control",
    message: "National monitoring network synchronized.",
    color: "text-emerald-400",
    time: "00:31",
  },
];

export default function HeroLiveFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="
      absolute
      right-10
      bottom-8
      w-[360px]
      glass
      rounded-3xl
      p-6
      border
      border-cyan-500/20
      hidden
      xl:block
      "
    >
      <div className="flex justify-between items-center mb-5">

        <div>

          <p className="uppercase tracking-[0.25em] text-cyan-400 text-xs">

            National Feed

          </p>

          <h3 className="text-xl font-bold mt-2">

            Live Intelligence

          </h3>

        </div>

        <span className="flex items-center gap-2 text-green-400 text-sm">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          LIVE

        </span>

      </div>

      <div className="space-y-4 max-h-[360px] overflow-hidden">

        {feed.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={item.title}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.15,
              }}
              className="
              rounded-2xl
              bg-slate-900/70
              border
              border-white/5
              p-4
              "
            >
              <div className="flex gap-4">

                <div
                  className="
                  w-11
                  h-11
                  rounded-xl
                  bg-slate-800
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Icon
                    className={item.color}
                    size={20}
                  />
                </div>

                <div className="flex-1">

                  <div className="flex justify-between items-center">

                    <h4 className="font-semibold">

                      {item.title}

                    </h4>

                    <span className="text-xs text-slate-500">

                      {item.time}

                    </span>

                  </div>

                  <p className="text-sm text-slate-400 mt-2 leading-6">

                    {item.message}

                  </p>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>
    </motion.div>
  );
}