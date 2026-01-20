"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { useMemo } from "react";

export function DashboardPreview() {
    const bars = useMemo(() => Array.from({ length: 12 }), []);

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Text Content */}
                    <div className="lg:w-1/3">
                        <span className="text-secondary text-sm font-bold uppercase tracking-widest">Unified Dashboard</span>
                        <h2 className="text-4xl font-bold text-white mt-4 mb-6">Real-time Insights at a Glance</h2>
                        <p className="text-gray-400 text-lg mb-8">
                            Monitor every aspect of your enterprise from a single command center. Watch live metrics, track project health, and get AI-driven alerts.
                        </p>

                        <div className="space-y-4">
                            {['Live Employee Attendance', 'Project Deadlines & KPIs', 'Cash Flow Analysis'].map((item) => (
                                <div key={item} className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-gray-300">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dashboard Mockup */}
                    <div className="lg:w-2/3 perspective-1000">
                        <motion.div
                            className="relative z-10"
                            initial={{ rotateY: -10, rotateX: 5 }}
                            whileInView={{ rotateY: 0, rotateX: 0 }}
                            transition={{ duration: 1, type: "spring" }}
                        >
                            <GlassCard className="border-gray-700/50 bg-[#0f111a]/90 backdrop-blur-xl shadow-2xl overflow-hidden aspect-auto md:aspect-video relative min-h-[500px] md:min-h-0">
                                {/* Scanline Effect */}
                                <div className="absolute inset-0 z-50 pointer-events-none bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-[scanline_6s_linear_infinite]" />

                                {/* Top Bar */}
                                <div className="h-12 border-b border-white/5 flex items-center px-6 justify-between relative z-20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-xs text-gray-500">SyndiTech Dashboard v2.0</div>
                                </div>

                                {/* Grid Content */}
                                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[calc(100%-3rem)]">

                                    {/* Widget 1: Graph */}
                                    <div className="col-span-1 md:col-span-2 bg-white/5 rounded-xl p-4 border border-white/5 relative overflow-hidden">
                                        <h4 className="text-xs text-gray-500 uppercase mb-4">Revenue Growth</h4>
                                        <div className="flex items-end justify-between h-32 gap-2">
                                            {bars.map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-full bg-gradient-to-t from-primary/20 to-primary rounded-t-sm"
                                                    initial={{ height: "10%" }}
                                                    whileInView={{ height: `${Math.random() * 60 + 20}%` }}
                                                    transition={{ duration: 1, delay: i * 0.05, repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
                                                />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Widget 2: Stats */}
                                    <div className="space-y-6">
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <h4 className="text-xs text-gray-500 uppercase mb-1">Active Users</h4>
                                            <div className="text-3xl font-bold text-white">1,284</div>
                                            <div className="text-xs text-green-400 mt-1">+12% this week</div>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                                            <h4 className="text-xs text-gray-500 uppercase mb-1">Pending Tasks</h4>
                                            <div className="text-3xl font-bold text-white">42</div>
                                            <div className="text-xs text-yellow-500 mt-1">5 high priority</div>
                                        </div>
                                    </div>

                                    {/* Widget 3: Activity Feed */}
                                    <div className="col-span-1 md:col-span-3 bg-white/5 rounded-xl p-4 border border-white/5">
                                        <h4 className="text-xs text-gray-500 uppercase mb-4">Recent Activity</h4>
                                        <div className="space-y-3">
                                            {[1, 2, 3].map((j) => (
                                                <div key={j} className="flex items-center gap-3 border-b border-white/5 pb-2 last:border-0">
                                                    <div className="w-8 h-8 rounded-full bg-white/10" />
                                                    <div className="flex-1">
                                                        <div className="h-2 w-32 bg-white/10 rounded mb-1" />
                                                        <div className="h-2 w-20 bg-white/5 rounded" />
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Decorative Glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
