import { motion } from "framer-motion";
import {
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Eye,
} from "lucide-react";

import { incidents } from "../../data/incidents";
import { useCommandCenter } from "../../context/CommandCenterContext";

export default function IncidentFeed() {
  const {
    selectedIncident,
    setSelectedIncident,
  } = useCommandCenter();

  return (
    <div className="glass rounded-3xl p-6">

      {/* Header */}

      <div className="flex justify-between items-center mb-8">

        <div>

          <p className="uppercase tracking-[0.3em] text-cyan-400 text-xs">

            Operations

          </p>

          <h2 className="text-2xl font-black mt-2">

            Active Incidents

          </h2>

        </div>

        <div className="flex items-center gap-2 text-red-400">

          <AlertTriangle size={18} />

          {incidents.length}

        </div>

      </div>

      {/* Incident List */}

      <div className="space-y-4">

        {incidents.map((incident, index) => {

          const active =
            selectedIncident?.id === incident.id;

          return (

            <motion.button
              key={incident.id}
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: .98,
              }}
              onClick={() =>
                setSelectedIncident(incident)
              }
              className={`
              w-full
              rounded-2xl
              p-5
              text-left
              transition-all
              border

              ${
                active
                  ? "border-cyan-400 bg-cyan-500/10"
                  : "border-white/10 bg-slate-900/40 hover:border-cyan-500/40"
              }
              `}
            >

              <div className="flex justify-between items-start">

                <div>

                  <h3 className="font-bold text-lg">

                    {incident.title}

                  </h3>

                  <p className="text-slate-400 mt-2">

                    {incident.location}

                  </p>

                </div>

                <Severity severity={incident.severity} />

              </div>

              <p className="text-slate-400 text-sm mt-5 leading-6">

                {incident.description}

              </p>

              <div className="mt-6 flex justify-between items-center">

                <div className="flex items-center gap-2 text-slate-500">

                  <Eye size={16} />

                  {incident.status}

                </div>

                <div className="flex items-center gap-2 text-cyan-400">

                  View

                  <ArrowRight size={16} />

                </div>

              </div>

              {active && (

                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="mt-5 flex items-center gap-2 text-green-400 text-sm"
                >

                  <CheckCircle2 size={18} />

                  Active Investigation

                </motion.div>

              )}

            </motion.button>

          );
        })}

      </div>

    </div>
  );
}

function Severity({
  severity,
}: {
  severity: string;
}) {

  const styles = {
    Low: "bg-green-500/20 text-green-400",

    Medium: "bg-yellow-500/20 text-yellow-400",

    High: "bg-orange-500/20 text-orange-400",

    Critical: "bg-red-500/20 text-red-400",
  };

  return (

    <span
      className={`
      px-3
      py-1
      rounded-full
      text-xs
      font-semibold

      ${
        styles[
          severity as keyof typeof styles
        ]
      }
      `}
    >

      {severity}

    </span>

  );
}