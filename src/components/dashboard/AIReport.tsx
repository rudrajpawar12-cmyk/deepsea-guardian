import { useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  LoaderCircle,
  Sparkles,
} from "lucide-react";

import { generateOceanReport } from "../../services/reportGenerator";

export default function AIReport() {
  const [loading, setLoading] = useState(false);

  const [report, setReport] = useState("");

  async function handleGenerate() {
    setLoading(true);

    const response = await generateOceanReport({
      marineHealth: 82,
      pollutionIndex: 68,
      plasticWaste: 74,
      activeAlerts: 6,
    });

    setReport(response);

    setLoading(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass rounded-3xl p-6"
    >
      <div className="flex justify-between items-center mb-6">

        <div className="flex items-center gap-3">

          <FileText
            className="text-cyan-400"
            size={26}
          />

          <div>

            <h2 className="text-2xl font-bold">
              AI Environmental Report
            </h2>

            <p className="text-slate-400 text-sm">
              Generated using Gemini AI
            </p>

          </div>

        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          className="bg-cyan-500 hover:bg-cyan-400 px-5 py-3 rounded-xl text-black font-semibold transition disabled:opacity-50"
        >
          {loading ? (
            <LoaderCircle className="animate-spin" />
          ) : (
            "Generate Report"
          )}
        </button>

      </div>

      {!report && !loading && (
        <div className="rounded-2xl bg-slate-800/70 p-8 text-center">

          <Sparkles
            className="mx-auto text-cyan-400 mb-4"
            size={36}
          />

          <h3 className="font-semibold mb-2">
            No Report Generated
          </h3>

          <p className="text-slate-400">
            Click Generate Report to receive an AI-powered
            environmental assessment.
          </p>

        </div>
      )}

      {loading && (
        <div className="flex justify-center items-center py-16">

          <LoaderCircle
            className="animate-spin text-cyan-400"
            size={36}
          />

        </div>
      )}

      {report && (
        <div className="rounded-2xl bg-slate-800 p-6 max-h-[500px] overflow-y-auto whitespace-pre-wrap leading-8">
          {report}
        </div>
      )}
    </motion.div>
  );
}