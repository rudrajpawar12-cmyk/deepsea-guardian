import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  Crosshair,
  MapPinned,
  Clock3,
  ShieldAlert,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";

export default function MissionCommandCard() {
  const navigate = useNavigate();

  const { officer } = useAuth();

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: .25,
      }}
      className="
      glass
      rounded-3xl
      border
      border-cyan-500/10
      overflow-hidden
      "
    >
      {/* Header */}

      <div className="p-8 border-b border-white/10">

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

          Mission Command

        </p>

        <h2 className="text-4xl font-black mt-5">

          Operation Blue Shield

        </h2>

        <p className="text-slate-400 mt-5 leading-8 max-w-4xl">

          Monitor pollution hotspots across the Arabian Sea,
          verify satellite anomalies, coordinate AI predictions
          and prepare rapid response deployment if required.

        </p>

      </div>

      {/* Grid */}

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 p-8">

        <InfoCard
          icon={<Crosshair className="text-cyan-400" />}
          title="Primary Objective"
          value="Marine Pollution Surveillance"
        />

        <InfoCard
          icon={<MapPinned className="text-orange-400" />}
          title="Area of Operation"
          value="Arabian Sea"
        />

        <InfoCard
          icon={<Clock3 className="text-green-400" />}
          title="Mission Window"
          value="24 Hours"
        />

        <InfoCard
          icon={<ShieldAlert className="text-red-400" />}
          title="Priority"
          value="HIGH"
        />

        <InfoCard
          icon={<BrainCircuit className="text-violet-400" />}
          title="AI Recommendation"
          value="Increase Coastal Surveillance"
        />

        <InfoCard
          icon={<Crosshair className="text-cyan-400" />}
          title="Assigned Officer"
          value={officer?.name || "Officer"}
        />

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-8 flex flex-col lg:flex-row justify-between gap-6 items-center">

        <div>

          <h3 className="font-bold text-xl">

            Mission Status

          </h3>

          <p className="text-slate-400 mt-3">

            National monitoring systems synchronized.
            AI engine operational.
            Awaiting officer actions.

          </p>

        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .98,
          }}
          onClick={() => navigate("/dashboard")}
          className="
          bg-cyan-400
          hover:bg-cyan-300
          transition-all
          text-slate-950
          font-bold
          px-8
          py-4
          rounded-2xl
          flex
          items-center
          gap-3
          shadow-lg
          shadow-cyan-500/20
          "
        >

          Open Live Monitoring

          <ArrowRight size={20} />

        </motion.button>

      </div>

    </motion.section>
  );
}

function InfoCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="
      rounded-2xl
      bg-slate-900/60
      border
      border-white/5
      p-6
    ">

      <div className="flex items-center gap-4">

        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center">

          {icon}

        </div>

        <div>

          <p className="text-slate-500 text-sm">

            {title}

          </p>

          <h3 className="font-semibold mt-2">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}