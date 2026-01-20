"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/AuroraBackground";
import { MagneticButton } from "../ui/MagneticButton";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <AuroraBackground>
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">

                    {/* Floating Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                            </span>
                            <span className="text-sm font-medium text-gray-300">SyndiTech v3.0 Live</span>
                        </div>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 max-w-5xl mx-auto"
                    >
                        The Operating System for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-indigo-400 to-cyan-400">
                            Modern Real Estate.
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                        className="text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Streamline your entire workflow with an intelligent, unified platform. From HR to Finance, experience the future of operations today.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center gap-6"
                    >
                        <MagneticButton className="bg-white text-black hover:bg-gray-100 hover:border-transparent min-w-[180px]">
                            <span className="flex items-center gap-2 font-bold">
                                Get Started <ArrowRight className="w-4 h-4" />
                            </span>
                        </MagneticButton>

                        <MagneticButton className="min-w-[180px]">
                            <span className="flex items-center gap-2">
                                <Play className="w-4 h-4 fill-current" /> Watch Showreel
                            </span>
                        </MagneticButton>
                    </motion.div>
                </div>
            </AuroraBackground>

            {/* Abstract Decorative Elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse" />
        </section>
    );
}
