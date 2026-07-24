import { motion } from "framer-motion";

import NationalKPIs from "./NationalKPIs";
import AIAccuracy from "./AIAccuracy";
import PollutionTrends from "./PollutionTrends";
import ResponsePerformance from "./ResponsePerformance";
import StateHeatmap from "./StateHeatmap";
import EnvironmentalIndicators from "./EnvironmentalIndicators";

export default function AnalyticsCenter() {
  return (
    <div className="space-y-8">

      {/* Header */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >

        <p className="uppercase tracking-[0.35em] text-cyan-400 text-sm">

          National Intelligence

        </p>

        <h1 className="text-5xl font-black mt-4">

          Marine Analytics Center

        </h1>

        <p className="text-slate-400 mt-5 max-w-4xl leading-8">

          Analyze nationwide marine pollution trends,
          AI performance, emergency response efficiency,
          environmental indicators and operational KPIs
          through a unified intelligence platform.

        </p>

      </motion.div>

      {/* Row 1 */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-4">

          <NationalKPIs />

        </div>

        <div className="xl:col-span-8">

          <AIAccuracy />

        </div>

      </div>

      {/* Row 2 */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-7">

          <PollutionTrends />

        </div>

        <div className="xl:col-span-5">

          <ResponsePerformance />

        </div>

      </div>

      {/* Row 3 */}

      <div className="grid xl:grid-cols-12 gap-8">

        <div className="xl:col-span-8">

          <StateHeatmap />

        </div>

        <div className="xl:col-span-4">

          <EnvironmentalIndicators />

        </div>

      </div>

    </div>
  );
}