import { motion } from "framer-motion";
import {
  Eye,
  MapPin,
  ShieldAlert,
  CheckCircle2,
  Clock3,
} from "lucide-react";

const incidents = [
  {
    id: "DG-2026-0001",
    location: "Arabian Sea",
    severity: "Critical",
    status: "Active",
    area: "24 km²",
    officer: "Western Coast Guard",
    detected: "14:25 IST",
  },
  {
    id: "DG-2026-0002",
    location: "Mumbai Coast",
    severity: "High",
    status: "Monitoring",
    area: "11 km²",
    officer: "Maharashtra Marine Cell",
    detected: "13:52 IST",
  },
  {
    id: "DG-2026-0003",
    location: "Bay of Bengal",
    severity: "Medium",
    status: "Assigned",
    area: "8 km²",
    officer: "Eastern Command",
    detected: "12:16 IST",
  },
  {
    id: "DG-2026-0004",
    location: "Lakshadweep",
    severity: "Low",
    status: "Resolved",
    area: "2 km²",
    officer: "Island Monitoring Unit",
    detected: "09:41 IST",
  },
];

function severityColor(level: string) {
  switch (level) {
    case "Critical":
      return "bg-red-500/20 text-red-400 border-red-500/30";

    case "High":
      return "bg-orange-500/20 text-orange-400 border-orange-500/30";

    case "Medium":
      return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";

    default:
      return "bg-green-500/20 text-green-400 border-green-500/30";
  }
}

function statusIcon(status: string) {
  switch (status) {
    case "Resolved":
      return <CheckCircle2 size={18} className="text-green-400" />;

    case "Monitoring":
      return <Clock3 size={18} className="text-yellow-400" />;

    default:
      return <ShieldAlert size={18} className="text-red-400" />;
  }
}

export default function IncidentCenter() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-3xl font-black">
            Incident Management Center
          </h2>

          <p className="text-slate-400 mt-2">
            National marine pollution incidents currently tracked by the command center.
          </p>

        </div>

        <button className="bg-cyan-500 hover:bg-cyan-400 transition px-5 py-3 rounded-xl text-black font-semibold">
          + Create Incident
        </button>

      </div>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-slate-700">

              <th className="pb-4">Incident</th>
              <th className="pb-4">Location</th>
              <th className="pb-4">Severity</th>
              <th className="pb-4">Status</th>
              <th className="pb-4">Area</th>
              <th className="pb-4">Assigned Authority</th>
              <th className="pb-4">Detected</th>
              <th className="pb-4 text-center">Action</th>

            </tr>

          </thead>

          <tbody>

            {incidents.map((incident) => (

              <motion.tr
                key={incident.id}
                whileHover={{
                  backgroundColor: "rgba(15,23,42,.55)",
                }}
                className="border-b border-slate-800"
              >

                <td className="py-5 font-semibold">
                  {incident.id}
                </td>

                <td>

                  <div className="flex items-center gap-2">

                    <MapPin
                      size={16}
                      className="text-cyan-400"
                    />

                    {incident.location}

                  </div>

                </td>

                <td>

                  <span
                    className={`px-3 py-1 rounded-full border text-sm ${severityColor(
                      incident.severity
                    )}`}
                  >
                    {incident.severity}
                  </span>

                </td>

                <td>

                  <div className="flex items-center gap-2">

                    {statusIcon(incident.status)}

                    {incident.status}

                  </div>

                </td>

                <td>{incident.area}</td>

                <td>{incident.officer}</td>

                <td>{incident.detected}</td>

                <td className="text-center">

                  <button className="rounded-xl bg-slate-800 hover:bg-slate-700 p-3 transition">

                    <Eye
                      size={18}
                      className="text-cyan-400"
                    />

                  </button>

                </td>

              </motion.tr>

            ))}

          </tbody>

        </table>

      </div>

    </motion.section>
  );
}