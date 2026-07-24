import { motion } from "framer-motion";

import Sidebar from "../components/layout/Sidebar";
import Header from "../components/dashboard/Header";
import StatCard from "../components/dashboard/StatCard";
import OceanMap from "../components/dashboard/OceanMap";
import AIInsights from "../components/dashboard/AIInsights";
import Analytics from "../components/dashboard/Analytics";
import AlertPanel from "../components/dashboard/AlertPanel";
import FloatingAssistant from "../components/dashboard/FloatingAssistant";
import AIPrediction from "../components/dashboard/AIPrediction";
import AIReport from "../components/dashboard/AIReport";

import { stats } from "../data/dashboardData";

export default function Dashboard() {
    return (
        <div className="min-h-screen flex bg-transparent text-white">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <div className="max-w-[1800px] mx-auto px-6 lg:px-10 py-8">

                    {/* ================= HEADER ================= */}

                    <section id="dashboard">
                        <Header />
                    </section>

                    {/* ================= KPI CARDS ================= */}

                    <motion.section
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.15 }}
                        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8"
                    >
                        {stats.map((stat) => (
                            <StatCard
                                key={stat.title}
                                title={stat.title}
                                value={stat.value}
                                color={stat.color}
                            />
                        ))}
                    </motion.section>

                    {/* ================= MAP + AI ================= */}

                    <section
                        id="map"
                        className="grid grid-cols-1 xl:grid-cols-12 gap-6 mb-8 scroll-mt-24"
                    >
                        {/* Ocean Map */}

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="xl:col-span-8 glass rounded-3xl p-6 hover-lift"
                        >
                            <div className="flex justify-between items-center mb-5">

                                <div>
                                    <h2 className="text-2xl font-bold">
                                        🌍 Ocean Pollution Map
                                    </h2>

                                    <p className="text-slate-400 text-sm mt-1">
                                        Real-time marine pollution monitoring
                                    </p>
                                </div>

                                <div className="flex items-center gap-2 text-cyan-400 text-sm">
                                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                                    Live
                                </div>
                            </div>

                            <div className="h-[540px] rounded-2xl overflow-hidden">
                                <OceanMap />
                            </div>
                        </motion.div>

                        {/* AI */}

                        <motion.section
                            id="ai"
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.25 }}
                            className="xl:col-span-4 scroll-mt-24"
                        >
                            <AIInsights />
                        </motion.section>
                    </section>

                    {/* ================= ANALYTICS + ALERTS ================= */}

                    <section
                        id="analytics"
                        className="grid grid-cols-1 xl:grid-cols-12 gap-6 scroll-mt-24"
                    >
                        {/* Analytics */}

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="xl:col-span-8"
                        >
                            <Analytics />
                        </motion.div>

                        {/* Alerts */}

                        <motion.section
                            id="alerts"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="xl:col-span-4 scroll-mt-24"
                        >
                            <AlertPanel />
                        </motion.section>

                        <div className="mt-8">
                            <AIPrediction />
                        </div>
                        <div className="mt-8">
                            <AIReport />
                        </div>
                    </section>

                </div>
            </main>
            <FloatingAssistant />
        </div>
    );
}