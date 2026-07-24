import { motion } from "framer-motion";
import {
  Activity,
  ShieldAlert,
  Globe2,
  Satellite,
  Clock3,
  Wifi,
} from "lucide-react";

export default function GlobalStatusBar() {
  return (
    <motion.div
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="mb-8"
    >
      <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/90 backdrop-blur-xl overflow-hidden">

        <div className="flex flex-wrap items-center justify-between px-8 py-4">

          <Status
            icon={<Activity size={18} />}
            title="System"
            value="Operational"
            color="text-green-400"
          />

          <Divider />

          <Status
            icon={<ShieldAlert size={18} />}
            title="Critical Incidents"
            value="04"
            color="text-red-400"
          />

          <Divider />

          <Status
            icon={<Globe2 size={18} />}
            title="Regions"
            value="21 Active"
            color="text-cyan-400"
          />

          <Divider />

          <Status
            icon={<Satellite size={18} />}
            title="Satellite Feed"
            value="Connected"
            color="text-cyan-400"
          />

          <Divider />

          <Status
            icon={<Wifi size={18} />}
            title="Sensors"
            value="148 Online"
            color="text-green-400"
          />

          <Divider />

          <Status
            icon={<Clock3 size={18} />}
            title="Last Update"
            value="12 sec ago"
            color="text-yellow-400"
          />

        </div>
      </div>
    </motion.div>
  );
}

function Divider() {
  return (
    <div className="hidden xl:block w-px h-10 bg-slate-700" />
  );
}

function Status({
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
        scale: 1.04,
      }}
      className="flex items-center gap-3 py-2"
    >
      <div className={`${color}`}>
        {icon}
      </div>

      <div>

        <p className="text-xs uppercase tracking-wider text-slate-500">
          {title}
        </p>

        <p className={`font-bold ${color}`}>
          {value}
        </p>

      </div>
    </motion.div>
  );
}