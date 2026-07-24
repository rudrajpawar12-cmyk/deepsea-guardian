import { motion } from "framer-motion";

import AIStatus from "./AIStatus";
import AIRiskGauge from "./AIRiskGauge";
import AIReasoning from "./AIReasoning";
import AIRecommendations from "./AIAnalysisHistory";
import AIAnalysisHistory from "./AIAnalysisHistory";

export default function AIDecisionSupport() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <p className="uppercase tracking-[0.35em] text-violet-400 text-sm">

          Gemini AI

        </p>

        <h1 className="text-5xl font-black mt-4">

          AI Decision Support Center

        </h1>

        <p className="text-slate-400 mt-5 max-w-3xl leading-8">

          AI continuously analyzes satellite imagery,
          ocean currents, weather patterns and historical
          pollution events to assist officers in making
          rapid operational decisions.

        </p>

      </motion.div>

      {/* Top */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-4">

          <AIStatus />

        </div>

        <div className="xl:col-span-8">

          <AIRiskGauge />

        </div>

      </div>

      {/* Bottom */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-7">

          <AIReasoning />

        </div>

        <div className="xl:col-span-5">

          <AIRecommendations />

        </div>

      </div>

      <AIAnalysisHistory />

    </div>
  );
}