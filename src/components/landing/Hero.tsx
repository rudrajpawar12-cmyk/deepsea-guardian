import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative z-20 flex h-screen flex-col">

      {/* ================= HEADER ================= */}

      <header className="flex items-center justify-between px-14 py-8">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          className="flex items-center gap-5"
        >

          <div className="w-16 h-16 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 flex items-center justify-center">

            <ShieldCheck
              size={30}
              className="text-cyan-400"
            />

          </div>

          <div>

            <p className="uppercase tracking-[0.45em] text-cyan-400 text-xs">

              Government of India

            </p>

            <h2 className="text-lg font-semibold mt-2">

              National Marine Intelligence Division

            </h2>

          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .6 }}
          className="flex items-center gap-3"
        >

          <motion.div
            animate={{
              opacity: [1, .4, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="w-3 h-3 rounded-full bg-green-400"
          />

          <span className="uppercase tracking-[0.35em] text-sm text-slate-300">

            Secure Government Network

          </span>

        </motion.div>

      </header>

      {/* ================= HERO ================= */}

      <div className="flex-1 flex flex-col justify-center items-center text-center px-8">

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: .8,
          }}
        >

          <span
            className="
            inline-flex
            items-center
            gap-3
            rounded-full
            border
            border-cyan-500/20
            bg-cyan-500/10
            px-7
            py-3
            uppercase
            tracking-[0.45em]
            text-xs
            text-cyan-300
            "
          >

            National Marine Intelligence Platform

          </span>

        </motion.div>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .2,
          }}
          className="
          mt-12
          text-[7rem]
          xl:text-[9rem]
          font-black
          tracking-tight
          leading-none
          "
        >

          DEEPSEA

        </motion.h1>

        <motion.h1
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .35,
          }}
          className="
          text-[7rem]
          xl:text-[9rem]
          font-black
          leading-none
          tracking-tight
          text-cyan-400
          "
        >

          GUARDIAN

        </motion.h1>

        <motion.div
          initial={{
            width: 0,
          }}
          animate={{
            width: 420,
          }}
          transition={{
            delay: .6,
            duration: .8,
          }}
          className="h-[2px] bg-cyan-400 mt-10"
        />

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .8,
          }}
          className="
          mt-10
          text-cyan-200
          tracking-[0.45em]
          uppercase
          text-sm
          "
        >

          AI • SATELLITE • OCEAN • SURVEILLANCE • GOVERNMENT

        </motion.p>

        <motion.p
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
          mt-8
          max-w-3xl
          text-xl
          text-slate-400
          leading-9
          "
        >

          Unified national platform for marine pollution detection,
          biodiversity intelligence, satellite surveillance and
          government response coordination.

        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 1.2,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .96,
          }}
          onClick={() => navigate("/login")}
          className="
          mt-16
          px-10
          py-5
          rounded-2xl
          bg-cyan-500
          text-slate-950
          font-bold
          text-lg
          flex
          items-center
          gap-4
          shadow-[0_0_50px_rgba(34,211,238,.35)]
          hover:shadow-[0_0_80px_rgba(34,211,238,.55)]
          transition-all
          mx-auto
          "
        >

          ENTER COMMAND CENTER

          <ArrowRight size={22} />

        </motion.button>

      </div>

    </div>
  );
}