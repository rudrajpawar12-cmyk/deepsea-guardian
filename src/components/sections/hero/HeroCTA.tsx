import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  PlayCircle,
  ShieldCheck,
  Lock,
  Globe2,
  Sparkles,
} from "lucide-react";

export default function HeroCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-32 overflow-hidden">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/10 to-transparent" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          className="
          glass
          rounded-[40px]
          border
          border-cyan-500/20
          overflow-hidden
          relative
          p-16
          "
        >

          {/* Decorative Glow */}

          <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-[120px]" />

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left */}

            <div>

              <div className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-cyan-500/10
                border
                border-cyan-500/30
                px-5
                py-2
              ">

                <ShieldCheck
                  size={18}
                  className="text-cyan-400"
                />

                <span className="uppercase tracking-[0.3em] text-xs text-cyan-300">

                  Government Secure Platform

                </span>

              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-8 leading-tight">

                Ready to Protect
                <br />

                India's Oceans?

              </h2>

              <p className="mt-8 text-slate-400 leading-8 text-lg">

                Experience the next generation of AI-powered
                marine intelligence designed for government
                agencies, disaster response teams and
                environmental authorities.

              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 mt-10">

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  onClick={() => navigate("/login")}
                  className="
                    bg-cyan-400
                    text-slate-950
                    font-bold
                    px-8
                    py-5
                    rounded-2xl
                    flex
                    items-center
                    gap-3
                    shadow-xl
                    shadow-cyan-500/20
                  "
                >

                  Access Command Center

                  <ArrowRight size={22} />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    glass
                    border
                    border-white/10
                    hover:border-cyan-400
                    transition-all
                    px-8
                    py-5
                    rounded-2xl
                    flex
                    items-center
                    gap-3
                  "
                >

                  <PlayCircle />

                  Watch Simulation

                </motion.button>

              </div>

            </div>

            {/* Right */}

            <div className="space-y-6">

              <StatusCard
                icon={<Lock size={24} />}
                title="Government Grade Security"
                value="Multi-Factor Authentication"
              />

              <StatusCard
                icon={<Globe2 size={24} />}
                title="National Coverage"
                value="7,517 km Coastline Monitored"
              />

              <StatusCard
                icon={<Sparkles size={24} />}
                title="AI Confidence"
                value="96% Prediction Accuracy"
              />

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

function StatusCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <motion.div
      whileHover={{
        x: 8,
      }}
      className="
      glass
      rounded-2xl
      p-6
      border
      border-cyan-500/10
      flex
      gap-5
      items-center
      "
    >

      <div className="
        w-14
        h-14
        rounded-2xl
        bg-slate-900
        flex
        items-center
        justify-center
        text-cyan-400
      ">

        {icon}

      </div>

      <div>

        <h3 className="font-bold">

          {title}

        </h3>

        <p className="text-slate-400 mt-2">

          {value}

        </p>

      </div>

    </motion.div>
  );
}