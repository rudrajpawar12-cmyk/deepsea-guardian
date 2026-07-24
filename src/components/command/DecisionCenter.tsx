import { motion } from "framer-motion";
import {
  BrainCircuit,
  ShieldAlert,
  Target,
  Ship,
  Radar,
  TrendingUp,
  Clock3,
} from "lucide-react";

export default function DecisionCenter() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6"
    >
      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm">
            AI Command Engine
          </p>

          <h2 className="text-3xl font-black mt-2">
            AI Situation Assessment
          </h2>

          <p className="text-slate-400 mt-2">
            DeepSea Guardian Decision Support System
          </p>

        </div>

        <div className="flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-4 py-2">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-green-400 font-semibold">
            AI ONLINE
          </span>

        </div>

      </div>

      {/* Threat */}

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Left */}

        <div className="rounded-3xl border border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent p-6">

          <div className="flex items-center gap-3 mb-5">

            <ShieldAlert
              className="text-red-400"
              size={28}
            />

            <h3 className="text-xl font-bold">
              Current Threat Assessment
            </h3>

          </div>

          <h1 className="text-6xl font-black text-red-400">
            CRITICAL
          </h1>

          <p className="mt-5 text-slate-300 leading-7">

            AI analysis indicates a high probability of rapid
            pollution spread in the Arabian Sea due to strong
            ocean currents and concentrated floating plastic
            accumulation.

          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">

            <div>

              <p className="text-slate-400 text-sm">
                Confidence
              </p>

              <h3 className="text-3xl font-bold text-cyan-400">
                96%
              </h3>

            </div>

            <div>

              <p className="text-slate-400 text-sm">
                Spread Window
              </p>

              <h3 className="text-3xl font-bold">
                24 hrs
              </h3>

            </div>

          </div>

        </div>

        {/* Right */}

        <div className="space-y-5">

          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-5">

            <div className="flex gap-3">

              <BrainCircuit
                className="text-cyan-400"
              />

              <div>

                <h3 className="font-bold">
                  Probable Cause
                </h3>

                <p className="text-slate-400 mt-2 leading-7">
                  Illegal marine plastic dumping combined
                  with tidal convergence and recent
                  weather conditions.
                </p>

              </div>

            </div>

          </div>

          <div className="rounded-2xl bg-slate-900 border border-slate-700 p-5">

            <div className="flex gap-3">

              <TrendingUp
                className="text-yellow-400"
              />

              <div>

                <h3 className="font-bold">
                  Predicted Impact
                </h3>

                <p className="text-slate-400 mt-2 leading-7">

                  Pollution plume expected to expand
                  approximately 18 km² if intervention
                  is delayed beyond 24 hours.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Recommendation */}

      <div className="mt-8 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 p-6">

        <div className="flex items-center gap-3 mb-6">

          <Target
            className="text-cyan-400"
            size={26}
          />

          <h3 className="text-2xl font-bold">
            Recommended Government Response
          </h3>

        </div>

        <div className="grid md:grid-cols-4 gap-5">

          <div className="rounded-2xl bg-slate-900 p-5">

            <Ship
              className="text-cyan-400 mb-4"
            />

            <h4 className="font-semibold">
              Cleanup Vessels
            </h4>

            <p className="text-4xl font-black mt-3">
              3
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-5">

            <Radar
              className="text-green-400 mb-4"
            />

            <h4 className="font-semibold">
              Surveillance Drones
            </h4>

            <p className="text-4xl font-black mt-3">
              5
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-5">

            <ShieldAlert
              className="text-red-400 mb-4"
            />

            <h4 className="font-semibold">
              Field Teams
            </h4>

            <p className="text-4xl font-black mt-3">
              12
            </p>

          </div>

          <div className="rounded-2xl bg-slate-900 p-5">

            <Clock3
              className="text-yellow-400 mb-4"
            />

            <h4 className="font-semibold">
              Estimated Control
            </h4>

            <p className="text-4xl font-black mt-3">
              18h
            </p>

          </div>

        </div>

      </div>
    </motion.section>
  );
}