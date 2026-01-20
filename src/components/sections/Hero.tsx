"use client";

import { motion } from "framer-motion";
import { NeonButton } from "../ui/NeonButton";
import { ArrowRight, PlayCircle } from "lucide-react";

export function Hero() {
    return (
        <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#0a0a0f] z-10" />

                {/* Placeholder Video - Replace src with actual asset */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover opacity-50"
                    poster="/video-poster.jpg"
                >
                    {/* Using a tech-abstract video from a public CDN for demo purposes */}
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-network-connection-background-3166-large.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="inline-block"
                    >
                        <span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-primary backdrop-blur-md uppercase tracking-widest">
                            The Future of Real Estate Ops
                        </span>
                    </motion.div>

                    <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight">
                        <span className="block text-white">SyndiTech</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-secondary animate-pulse-glow">
                            Intelligence That Runs Today
                        </span>
                    </h1>

                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed">
                        An integrated digital ecosystem by NiveshSarthi. Unifying HR, Finance, and Communication into one futuristic smart portal.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 pt-8">
                        <NeonButton className="w-full md:w-auto flex items-center gap-2 group">
                            Explore Platform
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </NeonButton>

                        <NeonButton variant="outline" className="w-full md:w-auto flex items-center gap-2">
                            <PlayCircle className="w-4 h-4" />
                            Watch Demo
                        </NeonButton>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <span className="text-xs text-gray-500 uppercase tracking-widest">Scroll</span>
                <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
