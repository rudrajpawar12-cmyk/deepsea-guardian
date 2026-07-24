import { motion } from "framer-motion";
import {
  FileText,
  Download,
  Printer,
  ShieldCheck,
  Calendar,
  MapPinned,
  UserCheck,
} from "lucide-react";

export default function GovernmentReport() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl overflow-hidden"
    >
      {/* Header */}

      <div className="bg-gradient-to-r from-cyan-600/20 to-blue-600/10 border-b border-cyan-500/20 p-6">

        <div className="flex justify-between items-center">

          <div className="flex gap-4 items-center">

            <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 flex items-center justify-center">

              <FileText className="text-cyan-400" />

            </div>

            <div>

              <h2 className="text-2xl font-black">

                Official Incident Report

              </h2>

              <p className="text-slate-400 mt-1">

                National Marine Pollution Command Center

              </p>

            </div>

          </div>

          <div className="flex gap-3">

            <button className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-xl">

              <Printer size={18} />

              Print

            </button>

            <button className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-black px-4 py-2 rounded-xl font-semibold">

              <Download size={18} />

              Export PDF

            </button>

          </div>

        </div>

      </div>

      {/* Body */}

      <div className="p-8 space-y-8">

        {/* Government */}

        <div className="border-b border-slate-800 pb-6">

          <h3 className="text-xl font-bold">

            Government of India

          </h3>

          <p className="text-slate-400 mt-2">

            Ministry of Environment, Forest and Climate Change

          </p>

        </div>

        {/* Report Grid */}

        <div className="grid md:grid-cols-2 gap-8">

          <div className="space-y-5">

            <div className="flex gap-3">

              <ShieldCheck className="text-cyan-400" />

              <div>

                <p className="text-slate-400 text-sm">

                  Incident ID

                </p>

                <h4 className="font-bold">

                  DG-2026-0012

                </h4>

              </div>

            </div>

            <div className="flex gap-3">

              <MapPinned className="text-cyan-400" />

              <div>

                <p className="text-slate-400 text-sm">

                  Affected Region

                </p>

                <h4 className="font-bold">

                  Arabian Sea

                </h4>

              </div>

            </div>

            <div className="flex gap-3">

              <Calendar className="text-cyan-400" />

              <div>

                <p className="text-slate-400 text-sm">

                  Generated On

                </p>

                <h4 className="font-bold">

                  24 July 2026 • 14:52 IST

                </h4>

              </div>

            </div>

          </div>

          <div className="space-y-5">

            <div>

              <p className="text-slate-400 text-sm">

                AI Risk Level

              </p>

              <h1 className="text-5xl font-black text-red-400 mt-2">

                CRITICAL

              </h1>

            </div>

            <div>

              <p className="text-slate-400 text-sm">

                AI Confidence

              </p>

              <h3 className="text-3xl font-bold text-cyan-400">

                96%

              </h3>

            </div>

          </div>

        </div>

        {/* Summary */}

        <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6">

          <h3 className="font-bold text-xl mb-4">

            Executive Summary

          </h3>

          <p className="leading-8 text-slate-300">

            DeepSea Guardian AI has identified a significant marine
            pollution event in the Arabian Sea. Based on satellite
            observations, ocean current analysis, and environmental
            indicators, the affected area is expected to expand if
            immediate containment measures are not initiated.

          </p>

        </div>

        {/* Recommendations */}

        <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-6">

          <h3 className="text-xl font-bold mb-5">

            Recommended Government Actions

          </h3>

          <ul className="space-y-4 list-disc ml-6 text-slate-300">

            <li>Deploy three marine cleanup vessels.</li>

            <li>Dispatch five autonomous surveillance drones.</li>

            <li>Issue environmental advisory to nearby ports.</li>

            <li>Increase satellite monitoring frequency.</li>

            <li>Review progress after the first six hours.</li>

          </ul>

        </div>

        {/* Approval */}

        <div className="grid md:grid-cols-2 gap-8 pt-6 border-t border-slate-800">

          <div>

            <div className="flex items-center gap-2 mb-2">

              <UserCheck className="text-green-400" />

              <h4 className="font-bold">

                AI Generated By

              </h4>

            </div>

            <p className="text-slate-400">

              DeepSea Guardian Decision Support Engine

            </p>

          </div>

          <div>

            <h4 className="font-bold mb-2">

              Approval

            </h4>

            <div className="h-16 border-b border-dashed border-slate-600" />

            <p className="text-slate-500 mt-2">

              Authorized Officer Signature

            </p>

          </div>

        </div>

      </div>

    </motion.section>
  );
}