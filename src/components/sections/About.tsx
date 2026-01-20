"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";

export function About() {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#0a0a0f]">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-secondary/5 blur-[120px] rounded-full" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            Born from <span className="text-primary">Operational Challenges</span>. <br />
                            Engineered for <span className="text-secondary">Simplicity</span>.
                        </h2>
                        <p className="text-gray-400 text-lg leading-relaxed mb-6">
                            SyndiTech isn't just software; it's the digital brain of NiveshSarthi. We realized that traditional real estate operations were fragmented, manual, and slow.
                        </p>
                        <p className="text-gray-400 text-lg leading-relaxed">
                            So we built the solution: A unified operating system that brings People, Process, and Payments under one futuristic roof.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6">
                        <GlassCard className="translate-y-8" hoverEffect>
                            <h3 className="text-4xl font-bold text-white mb-2">50%</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Faster Operations</p>
                        </GlassCard>
                        <GlassCard hoverEffect>
                            <h3 className="text-4xl font-bold text-white mb-2">0%</h3>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Manual Data Entry</p>
                        </GlassCard>
                        <GlassCard className="translate-y-8 col-span-2" hoverEffect>
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-4xl font-bold text-white mb-2">24/7</h3>
                                    <p className="text-sm text-gray-400 uppercase tracking-wider">AI Availability</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse" />
                            </div>
                        </GlassCard>
                    </div>

                </div>
            </div>
        </section>
    );
}
