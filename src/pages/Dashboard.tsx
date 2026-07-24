import { AnimatePresence, motion } from "framer-motion";

import Sidebar from "../components/layout/Sidebar";

import { useWorkspace } from "../context/WorkspaceContext";

// ===================== WORKSPACES =====================

import MissionOverview from "../components/mission/MissionOverview";

import LiveMonitoring from "./LiveMonitoring";
import IncidentManagement from "./IncidentManagement";

import AIDecisionSupport from "../components/ai/AIDecisionSupport";
import ResourceDeployment from "../components/deployment/ResourceDeployment";
import AnalyticsCenter from "../components/analytics/AnalyticsCenter";


// ======================================================

export default function Dashboard() {
  const { workspace } = useWorkspace();

  return (
    <div className="min-h-screen bg-slate-950 text-white flex overflow-hidden">

      {/* Sidebar */}

      <Sidebar />

      {/* Main Workspace */}

      <main className="flex-1 overflow-y-auto">

        <div className="max-w-[1900px] mx-auto px-8 py-8">

          <AnimatePresence mode="wait">

            <motion.div
              key={workspace}
              initial={{
                opacity: 0,
                x: 25,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -25,
              }}
              transition={{
                duration: 0.35,
              }}
            >

              {/* ================= MISSION OVERVIEW ================= */}

              {workspace === "overview" && (
                <MissionOverview />
              )}

              {/* ================= LIVE MONITORING ================= */}

              {workspace === "monitoring" && (
                <LiveMonitoring />
              )}

              {/* ================= INCIDENT MANAGEMENT ================= */}

              {workspace === "incidents" && (
                <IncidentManagement />
              )}

              {/* ================= AI DECISION SUPPORT ================= */}

              {workspace === "ai" && (
                <AIDecisionSupport />
              )}

              {/* ================= RESOURCE DEPLOYMENT ================= */}

              {workspace === "resources" && (
                <ResourceDeployment />
              )}

              {/* ================= ANALYTICS ================= */}

              {workspace === "analytics" && (
                <AnalyticsCenter />
              )}

              {/* ================= GOVERNMENT REPORTS ================= */}

              

              {/* ================= SETTINGS ================= */}

              {workspace === "settings" && (
                <ComingSoon
                  title="System Settings"
                  description="Officer profile, command preferences, AI configuration, security settings and national command center administration."
                />
              )}

            </motion.div>

          </AnimatePresence>

        </div>

      </main>

    </div>
  );
}

// ======================================================

function ComingSoon({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="glass rounded-3xl border border-cyan-500/10 p-20 text-center">

      <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

        DeepSea Guardian

      </p>

      <h1 className="text-5xl font-black mt-5">

        {title}

      </h1>

      <p className="text-slate-400 mt-6 max-w-2xl mx-auto leading-8">

        {description}

      </p>

      <div className="mt-12 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20">

        <span className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

        Under Development

      </div>

    </div>
  );
}