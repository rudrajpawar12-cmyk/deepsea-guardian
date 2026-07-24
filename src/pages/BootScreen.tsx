import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Dependency {
  name: string;
  progress: number;
  completed: boolean;
}

const dependencyNames = [
  "Secure Government Network",
  "ISRO Satellite Feed",
  "Coast Guard Command",
  "Ocean Sensor Grid",
  "Marine Biodiversity Scanner",
  "National GIS Engine",
  "AI Decision Core",
  "Encrypted Data Channel",
];

export default function BootScreen() {
  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  const [status, setStatus] = useState("INITIALIZING");

  const [dependencies, setDependencies] = useState<Dependency[]>(
    dependencyNames.map((item) => ({
      name: item,
      progress: 0,
      completed: false,
    }))
  );

  const radius = 120;

  const circumference = 2 * Math.PI * radius;

  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          return 100;
        }

        return old + 1;
      });
    }, 45);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (progress < 30) {
      setStatus("INITIALIZING");
    } else if (progress < 60) {
      setStatus("CONNECTING");
    } else if (progress < 90) {
      setStatus("VERIFYING");
    } else {
      setStatus("READY");
    }
  }, [progress]);

  useEffect(() => {
    setDependencies((previous) =>
      previous.map((item, index) => {
        const target =
          Math.min(
            100,
            Math.max(
              0,
              progress - index * 10
            )
          );

        return {
          ...item,
          progress: target,
          completed: target >= 100,
        };
      })
    );
  }, [progress]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        navigate("/");
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

  const percentage = useMemo(
    () => Math.round(progress),
    [progress]
  );

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020817] text-white">

      {/* ================================================= */}

      {/* Background */}

      {/* ================================================= */}

      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,.14),transparent_70%)]" />

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          -left-[35%]
          -top-[35%]
          w-[1700px]
          h-[1700px]
          rounded-full
          border
          border-cyan-500/10
          "
        />

        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 110,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[1200px]
          h-[1200px]
          rounded-full
          border
          border-cyan-500/10
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)]
          bg-[size:60px_60px]
          "
        />
      </div>

      {/* ================================================= */}

      {/* Content */}

      {/* ================================================= */}

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-8">

        <motion.div
          initial={{
            opacity: 0,
            scale: .9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: .8,
          }}
          className="text-center"
        >

          <div
            className="
            mx-auto
            flex
            h-24
            w-24
            items-center
            justify-center
            rounded-3xl
            border
            border-cyan-500/20
            bg-cyan-500/10
            "
          >

            <ShieldCheck
              size={50}
              className="text-cyan-400"
            />

          </div>

          <h1 className="mt-8 text-6xl font-black tracking-wider">

            DEEPSEA GUARDIAN

          </h1>

          <p className="mt-5 tracking-[0.5em] text-cyan-400 uppercase">

            National Marine Intelligence Platform

          </p>

        </motion.div>
                {/* ============================================= */}

        {/* Circular Loader */}

        {/* ============================================= */}

        <div className="relative mt-24 flex items-center justify-center">

          {/* Outer Glow */}

          <motion.div
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.35, 0.7, 0.35],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="
            absolute
            w-[360px]
            h-[360px]
            rounded-full
            bg-cyan-500/10
            blur-3xl
            "
          />

          {/* Rotating Ring */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 18,
            }}
            className="
            absolute
            w-[320px]
            h-[320px]
            rounded-full
            border
            border-cyan-500/20
            "
          />

          {/* Reverse Ring */}

          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30,
            }}
            className="
            absolute
            w-[280px]
            h-[280px]
            rounded-full
            border
            border-cyan-400/10
            "
          />

          {/* SVG Progress */}

          <svg
            width="320"
            height="320"
            className="-rotate-90"
          >

            {/* Background */}

            <circle
              cx="160"
              cy="160"
              r={radius}
              stroke="rgba(255,255,255,.08)"
              strokeWidth="10"
              fill="transparent"
            />

            {/* Progress */}

            <motion.circle
              cx="160"
              cy="160"
              r={radius}
              stroke="#22d3ee"
              strokeWidth="10"
              strokeLinecap="round"
              fill="transparent"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
            />

          </svg>

          {/* Center */}

          <div className="absolute flex flex-col items-center">

            <motion.h1
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="
              text-7xl
              font-black
              text-cyan-400
              "
            >

              {percentage}

              <span className="text-4xl">

                %

              </span>

            </motion.h1>

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
              }}
              className="
              mt-5
              text-cyan-300
              tracking-[0.45em]
              uppercase
              text-sm
              "
            >

              {status}

            </motion.p>

          </div>

        </div>

        {/* ============================================= */}

        {/* System Status */}

        {/* ============================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .5,
          }}
          className="
          mt-20
          w-full
          max-w-4xl
          rounded-3xl
          border
          border-cyan-500/20
          bg-slate-950/70
          backdrop-blur-xl
          p-10
          "
        >

          <div className="flex justify-between items-center">

            <div>

              <h2
                className="
                text-xl
                font-bold
                text-cyan-300
                tracking-widest
                "
              >

                SYSTEM INITIALIZATION

              </h2>

              <p className="mt-2 text-slate-400">

                Loading national marine intelligence modules...

              </p>

            </div>

            <div
              className="
              px-5
              py-2
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              text-cyan-300
              "
            >

              {status}

            </div>

          </div>
                    {/* ================================================= */}

          {/* Dependencies */}

          {/* ================================================= */}

          <div className="mt-12 space-y-7">

            {dependencies.map((dependency, index) => (

              <motion.div
                key={dependency.name}
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  delay: index * 0.12,
                }}
              >

                <div className="flex justify-between items-center mb-3">

                  <div className="flex items-center gap-3">

                    <motion.div
                      animate={{
                        scale: dependency.completed
                          ? [1, 1.25, 1]
                          : [1, 1.05, 1],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                      }}
                      className={`
                        w-3
                        h-3
                        rounded-full

                        ${
                          dependency.completed
                            ? "bg-green-400 shadow-[0_0_12px_rgba(74,222,128,.8)]"
                            : dependency.progress > 0
                            ? "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,.8)]"
                            : "bg-slate-600"
                        }
                      `}
                    />

                    <span className="font-medium tracking-wide">

                      {dependency.name}

                    </span>

                  </div>

                  <div className="flex items-center gap-4">

                    <span className="text-slate-400">

                      {dependency.progress}%

                    </span>

                    <span
                      className={`
                        text-xs
                        font-semibold
                        tracking-[0.25em]

                        ${
                          dependency.completed
                            ? "text-green-400"
                            : dependency.progress > 0
                            ? "text-cyan-400"
                            : "text-slate-500"
                        }
                      `}
                    >

                      {dependency.completed
                        ? "CONNECTED"
                        : dependency.progress > 0
                        ? "LOADING"
                        : "WAITING"}

                    </span>

                  </div>

                </div>

                {/* Progress */}

                <div className="relative h-2 rounded-full bg-slate-800 overflow-hidden">

                  <motion.div
                    animate={{
                      width: `${dependency.progress}%`,
                    }}
                    transition={{
                      duration: .45,
                    }}
                    className="
                      absolute
                      left-0
                      top-0
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-cyan-500
                      via-sky-400
                      to-emerald-400
                    "
                  />

                </div>

              </motion.div>

            ))}

          </div>

          {/* ================================================= */}

          {/* Footer Status */}

          {/* ================================================= */}

          <div className="mt-12 pt-8 border-t border-cyan-500/10">

            <div className="grid grid-cols-3 gap-8">

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-widest">

                  Network

                </p>

                <h3 className="mt-2 text-cyan-400 font-bold">

                  Government Secure

                </h3>

              </div>

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-widest">

                  Security

                </p>

                <h3 className="mt-2 text-green-400 font-bold">

                  AES-256 Encrypted

                </h3>

              </div>

              <div>

                <p className="text-slate-500 text-sm uppercase tracking-widest">

                  Status

                </p>

                <h3 className="mt-2 text-emerald-400 font-bold">

                  Operational

                </h3>

              </div>

            </div>

          </div>

        </motion.div>
                {/* ============================================= */}

        {/* Radar Sweep */}

        {/* ============================================= */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          w-[900px]
          h-[900px]
          -translate-x-1/2
          -translate-y-1/2
          "
        >

          <div
            className="
            absolute
            left-1/2
            top-1/2
            h-[450px]
            w-[3px]
            origin-bottom
            -translate-x-1/2
            -translate-y-full
            bg-gradient-to-t
            from-cyan-400/90
            via-cyan-400/40
            to-transparent
            "
          />

        </motion.div>

        {/* ============================================= */}

        {/* Floating Particles */}

        {/* ============================================= */}

        {Array.from({ length: 25 }).map((_, index) => (

          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 80,
            }}
            animate={{
              opacity: [.15, .7, .15],
              y: [-80, 80],
              x: [
                Math.random() * 50,
                Math.random() * -50,
                Math.random() * 50,
              ],
            }}
            transition={{
              duration: 6 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
            className="
            absolute
            w-1.5
            h-1.5
            rounded-full
            bg-cyan-400
            "
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />

        ))}

        {/* ============================================= */}

        {/* Bottom Message */}

        {/* ============================================= */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1,
          }}
          className="
          mt-10
          text-center
          "
        >

          <motion.p
            animate={{
              opacity: [.4, 1, .4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="
            tracking-[0.4em]
            uppercase
            text-cyan-300
            text-sm
            "
          >

            {progress >= 100
              ? "Launching National Command Center..."
              : "Synchronizing National Marine Intelligence..."}

          </motion.p>

          <motion.div
            animate={{
              opacity: [.3, 1, .3],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="
            mt-5
            flex
            justify-center
            gap-2
            "
          >

            <span className="w-2 h-2 rounded-full bg-cyan-400" />

            <span className="w-2 h-2 rounded-full bg-cyan-400" />

            <span className="w-2 h-2 rounded-full bg-cyan-400" />

          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}