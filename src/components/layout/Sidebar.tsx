import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Radar,
  AlertTriangle,
  BrainCircuit,
  Ship,
  FileText,
  BarChart3,
  Settings,
  ShieldCheck,
  LogOut,
} from "lucide-react";

import {
  useWorkspace,
  type Workspace,
} from "../../context/WorkspaceContext";

import { useAuth } from "../../context/AuthContext";

const menu: {
  id: Workspace;
  label: string;
  icon: React.ElementType;
}[] = [
  {
    id: "overview",
    label: "Mission Overview",
    icon: LayoutDashboard,
  },
  {
    id: "monitoring",
    label: "Live Monitoring",
    icon: Radar,
  },
  {
    id: "incidents",
    label: "Incident Center",
    icon: AlertTriangle,
  },
  {
    id: "ai",
    label: "AI Decision Support",
    icon: BrainCircuit,
  },
  {
    id: "resources",
    label: "Resource Deployment",
    icon: Ship,
  },
  {
    id: "reports",
    label: "Government Reports",
    icon: FileText,
  },
  {
    id: "analytics",
    label: "Analytics",
    icon: BarChart3,
  },
  {
    id: "settings",
    label: "System Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const { workspace, setWorkspace } = useWorkspace();

  const { officer, logout } = useAuth();

  return (
    <aside className="w-80 shrink-0 h-screen sticky top-0 bg-slate-950/95 backdrop-blur-2xl border-r border-cyan-500/10 flex flex-col">

      {/* ================================================= */}

      {/* LOGO */}

      {/* ================================================= */}

      <div className="p-8 border-b border-white/10">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center">

            <ShieldCheck
              className="text-cyan-400"
              size={34}
            />

          </div>

          <div>

            <h1 className="text-2xl font-black">

              DeepSea Guardian

            </h1>

            <p className="text-cyan-400 text-sm">

              National Command Center

            </p>

          </div>

        </div>

      </div>

      {/* ================================================= */}

      {/* OFFICER */}

      {/* ================================================= */}

      <div className="px-8 py-6 border-b border-white/10">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-cyan-400 text-slate-950 flex items-center justify-center font-black text-xl">

            {officer?.name?.charAt(0).toUpperCase() || "O"}

          </div>

          <div>

            <h2 className="font-bold">

              {officer?.name || "Officer"}

            </h2>

            <p className="text-slate-400 text-sm">

              {officer?.role || "Marine Command Officer"}

            </p>

            <p className="text-cyan-400 text-xs mt-1">

              {officer?.agency || "Indian Coast Guard"}

            </p>

          </div>

        </div>

        <div className="mt-5 flex items-center gap-3">

          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

          <span className="text-green-400 text-sm">

            Secure Session Active

          </span>

        </div>

      </div>

      {/* ================================================= */}

      {/* MENU */}

      {/* ================================================= */}

      <div className="flex-1 overflow-y-auto px-5 py-6">

        <div className="space-y-2">

          {menu.map((item) => {
            const Icon = item.icon;

            const active = workspace === item.id;

            return (
              <motion.button
                key={item.id}
                whileHover={{
                  x: 6,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                onClick={() => setWorkspace(item.id)}
                className={`
                  relative
                  w-full
                  rounded-2xl
                  px-5
                  py-4
                  flex
                  items-center
                  gap-4
                  transition-all

                  ${
                    active
                      ? "bg-cyan-500 text-slate-950 shadow-xl shadow-cyan-500/30"
                      : "text-slate-300 hover:bg-white/5"
                  }
                `}
              >

                <Icon size={22} />

                <span className="font-semibold">

                  {item.label}

                </span>

              </motion.button>
            );
          })}

        </div>

      </div>

      {/* ================================================= */}

      {/* FOOTER */}

      {/* ================================================= */}

      <div className="border-t border-white/10 p-6">

        <div className="rounded-2xl bg-slate-900 border border-white/10 p-5 mb-5">

          <p className="text-slate-500 text-xs">

            Security Clearance

          </p>

          <h3 className="font-bold text-cyan-400 mt-2">

            {officer?.clearance || "LEVEL V"}

          </h3>

        </div>

        <button
          onClick={logout}
          className="w-full rounded-2xl border border-red-500/20 hover:border-red-400 hover:bg-red-500/10 transition-all py-4 flex items-center justify-center gap-3 text-red-400"
        >

          <LogOut size={18} />

          Logout

        </button>

      </div>

    </aside>
  );
}