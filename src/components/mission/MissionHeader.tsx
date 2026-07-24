import { motion } from "framer-motion";
import {
  ShieldCheck,
  Clock3,
  CalendarDays,
  Building2,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

export default function MissionHeader() {
  const { officer } = useAuth();

  const now = new Date();

  const greeting =
    now.getHours() < 12
      ? "Good Morning"
      : now.getHours() < 17
      ? "Good Afternoon"
      : "Good Evening";

  const date = now.toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const time = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="glass rounded-3xl p-8 border border-cyan-500/10"
    >
      <div className="flex flex-col xl:flex-row justify-between gap-8">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

            National Marine Pollution Command Center

          </p>

          <h1 className="text-5xl font-black mt-4">

            {greeting},

            <span className="text-cyan-400">

              {" "}{officer?.name || "Officer"}

            </span>

          </h1>

          <p className="text-slate-400 mt-5 text-lg">

            {officer?.role}

            {" • "}

            {officer?.agency}

          </p>

        </div>

        {/* RIGHT */}

        <div className="grid sm:grid-cols-2 gap-5">

          <InfoCard
            icon={<ShieldCheck />}
            title="Security Clearance"
            value={officer?.clearance || "LEVEL V"}
            color="text-green-400"
          />

          <InfoCard
            icon={<Building2 />}
            title="Agency"
            value={officer?.agency || "Indian Coast Guard"}
            color="text-cyan-400"
          />

          <InfoCard
            icon={<CalendarDays />}
            title="Date"
            value={date}
            color="text-orange-400"
          />

          <InfoCard
            icon={<Clock3 />}
            title="Local Time"
            value={time}
            color="text-violet-400"
          />

        </div>

      </div>

      {/* Bottom Status */}

      <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-6 items-center">

        <div className="flex items-center gap-3">

          <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-green-400">

            National Monitoring Network Online

          </span>

        </div>

        <div className="text-slate-500">

          Session Authenticated

        </div>

        <div className="text-cyan-400">

          AI Systems Ready

        </div>

      </div>

    </motion.div>
  );
}

function InfoCard({
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
    <div className="rounded-2xl bg-slate-900/60 border border-white/5 p-5">

      <div className="flex items-center gap-3">

        <div className={color}>

          {icon}

        </div>

        <div>

          <p className="text-slate-500 text-xs">

            {title}

          </p>

          <h3 className="font-semibold mt-1">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}