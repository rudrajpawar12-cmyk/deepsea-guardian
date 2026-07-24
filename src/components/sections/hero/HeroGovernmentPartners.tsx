import { motion } from "framer-motion";
import {
  Shield,
  Satellite,
  Leaf,
  Ship,
  Building2,
  RadioTower,
  CheckCircle2,
} from "lucide-react";

const partners = [
  {
    icon: Ship,
    title: "Indian Coast Guard",
    role: "Marine Surveillance & Emergency Response",
    status: "Connected",
    color: "text-cyan-400",
  },
  {
    icon: Satellite,
    title: "ISRO",
    role: "Satellite Monitoring & Remote Sensing",
    status: "Connected",
    color: "text-indigo-400",
  },
  {
    icon: Leaf,
    title: "MoEFCC",
    role: "Environmental Governance",
    status: "Connected",
    color: "text-green-400",
  },
  {
    icon: RadioTower,
    title: "Central Pollution Control Board",
    role: "Pollution Monitoring Network",
    status: "Connected",
    color: "text-orange-400",
  },
  {
    icon: Shield,
    title: "National Disaster Response Force",
    role: "Disaster Management & Recovery",
    status: "Standby",
    color: "text-red-400",
  },
  {
    icon: Building2,
    title: "State Pollution Control Boards",
    role: "Regional Environmental Operations",
    status: "Connected",
    color: "text-sky-400",
  },
];

export default function HeroGovernmentPartners() {
  return (
    <section className="py-28">

      <div className="text-center mb-16">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="uppercase tracking-[0.4em] text-cyan-400 text-sm"
        >
          Government Ecosystem
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-black mt-5"
        >
          Built for National Agencies
        </motion.h2>

        <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">
          DeepSea Guardian enables secure collaboration between India's
          marine, environmental and disaster response organizations
          through one unified command platform.
        </p>

      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

        {partners.map((partner, index) => {
          const Icon = partner.icon;

          return (
            <motion.div
              key={partner.title}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
                relative
                glass
                rounded-3xl
                p-8
                border
                border-cyan-500/10
                hover:border-cyan-400/40
                overflow-hidden
              "
            >

              {/* Glow */}

              <div className="
                absolute
                -right-10
                -top-10
                w-40
                h-40
                rounded-full
                bg-cyan-500/10
                blur-3xl
              " />

              {/* Header */}

              <div className="flex justify-between items-start">

                <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-slate-900
                  flex
                  items-center
                  justify-center
                ">

                  <Icon
                    size={30}
                    className={partner.color}
                  />

                </div>

                <div className="
                  flex
                  items-center
                  gap-2
                  text-green-400
                  text-sm
                ">

                  <CheckCircle2 size={18} />

                  {partner.status}

                </div>

              </div>

              {/* Agency */}

              <h3 className="text-2xl font-bold mt-8">

                {partner.title}

              </h3>

              <p className="text-slate-400 mt-4 leading-7">

                {partner.role}

              </p>

              {/* Footer */}

              <div className="
                mt-8
                pt-6
                border-t
                border-white/10
                flex
                justify-between
              ">

                <span className="text-slate-500">

                  Secure Network

                </span>

                <span className="text-cyan-400 font-semibold">

                  ONLINE

                </span>

              </div>

            </motion.div>
          );
        })}

      </div>

    </section>
  );
}