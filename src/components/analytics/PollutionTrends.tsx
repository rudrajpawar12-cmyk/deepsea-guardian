import { motion } from "framer-motion";
import {
  TrendingUp,
  Waves,
  CalendarDays,
  Sparkles,
} from "lucide-react";

const data = [
  210,
  190,
  240,
  260,
  250,
  300,
  330,
  290,
  340,
  360,
  390,
  430,
];

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function createPath(values: number[]) {
  const max = Math.max(...values);
  const min = Math.min(...values);

  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * 720;
      const y = 260 - ((value - min) / (max - min)) * 180;

      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
}

export default function PollutionTrends() {
  const path = createPath(data);

  return (
    <div className="glass rounded-3xl border border-cyan-500/20 overflow-hidden">

      {/* Header */}

      <div className="p-8 border-b border-white/10 flex justify-between items-center">

        <div>

          <p className="uppercase tracking-[0.35em] text-cyan-400 text-xs">

            TREND ANALYTICS

          </p>

          <h2 className="text-3xl font-black mt-3">

            Marine Pollution Trend

          </h2>

        </div>

        <TrendingUp
          className="text-cyan-400"
          size={38}
        />

      </div>

      {/* Chart */}

      <div className="p-8">

        <div className="flex justify-between mb-8">

          <div>

            <h2 className="text-5xl font-black text-cyan-400">

              +18%

            </h2>

            <p className="text-slate-400 mt-2">

              Annual Increase

            </p>

          </div>

          <div className="text-right">

            <p className="text-slate-400">

              AI Forecast

            </p>

            <h3 className="text-2xl font-bold text-emerald-400 mt-2">

              Stable Next 30 Days

            </h3>

          </div>

        </div>

        {/* SVG */}

        <div className="relative">

          <svg
            viewBox="0 0 720 280"
            className="w-full h-80"
          >

            {/* Grid */}

            {[0, 1, 2, 3, 4].map((line) => (
              <line
                key={line}
                x1="0"
                y1={line * 55}
                x2="720"
                y2={line * 55}
                stroke="rgba(255,255,255,.08)"
              />
            ))}

            {/* Area */}

            <motion.path
              d={`${path} L720 280 L0 280 Z`}
              fill="rgba(34,211,238,.12)"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
            />

            {/* Line */}

            <motion.path
              d={path}
              fill="none"
              stroke="#22d3ee"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{
                pathLength: 0,
              }}
              animate={{
                pathLength: 1,
              }}
              transition={{
                duration: 2,
              }}
            />

          </svg>

          {/* Months */}

          <div className="flex justify-between mt-2 text-xs text-slate-500">

            {months.map((month) => (
              <span key={month}>{month}</span>
            ))}

          </div>

        </div>

      </div>

      {/* Footer */}

      <div className="border-t border-white/10 p-6">

        <div className="grid grid-cols-3 gap-6">

          <Metric
            icon={<CalendarDays className="text-cyan-400" />}
            title="Reporting Period"
            value="12 Months"
          />

          <Metric
            icon={<Waves className="text-blue-400" />}
            title="Peak Region"
            value="West Coast"
          />

          <Metric
            icon={<Sparkles className="text-violet-400" />}
            title="AI Confidence"
            value="97.6%"
          />

        </div>

      </div>

    </div>
  );
}

function Metric({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-slate-900/60 border border-white/5 p-5">

      <div className="flex items-center gap-3">

        {icon}

        <div>

          <p className="text-slate-500 text-sm">

            {title}

          </p>

          <h3 className="font-bold mt-2">

            {value}

          </h3>

        </div>

      </div>

    </div>
  );
}