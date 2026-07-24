import { motion } from "framer-motion";
import {
  ShieldCheck,
  BellRing,
  Activity,
  Globe2,
} from "lucide-react";

export default function CommandHeader() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-10"
    >
      <div className="glass rounded-3xl p-8 relative overflow-hidden">

        {/* Glow */}

        <div className="absolute -right-24 -top-24 w-72 h-72 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="flex flex-col xl:flex-row justify-between gap-8">

          {/* Left */}

          <div>

            <p className="uppercase tracking-[0.45em] text-cyan-400 text-sm font-semibold">

              Government of India

            </p>

            <h1 className="text-5xl lg:text-6xl font-black mt-4 leading-tight">

              National Marine
              <br />
              Pollution Command Center

            </h1>

            <p className="mt-5 text-slate-400 max-w-3xl leading-8">

              AI-powered environmental intelligence platform for
              monitoring, analysing and coordinating nationwide
              marine pollution response operations.

            </p>

          </div>

          {/* Right */}

          <div className="grid grid-cols-2 gap-5 min-w-[360px]">

            <StatusCard
              icon={<Activity size={24} />}
              title="System"
              value="Operational"
              color="text-green-400"
            />

            <StatusCard
              icon={<BellRing size={24} />}
              title="Alerts"
              value="04 Critical"
              color="text-red-400"
            />

            <StatusCard
              icon={<Globe2 size={24} />}
              title="Regions"
              value="21 Active"
              color="text-cyan-400"
            />

            <StatusCard
              icon={<ShieldCheck size={24} />}
              title="AI"
              value="96% Confidence"
              color="text-cyan-400"
            />

          </div>

        </div>

      </div>
    </motion.header>
  );
}

function StatusCard({
  icon,
  title,
  value,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  color: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -5,
      }}
      className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-5"
    >
      <div className={`${color} mb-4`}>

        {icon}

      </div>

      <p className="text-slate-400 text-sm">

        {title}

      </p>

      <h3 className={`font-bold mt-2 ${color}`}>

        {value}

      </h3>

    </motion.div>
  );
}