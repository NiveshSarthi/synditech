"use client";

import { motion } from "framer-motion";
import { NeonButton } from "../ui/NeonButton";

export function Contact() {
    return (
        <section id="contact" className="py-32 relative text-center overflow-hidden">
            {/* Background Burst */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full -z-10" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
                >
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Digitize?</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                >
                    Join the revolution of intelligent real estate operations. Schedule your personalized demo today.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <NeonButton className="text-lg px-10 py-4 shadow-[0_0_40px_rgba(0,243,255,0.3)] hover:shadow-[0_0_60px_rgba(0,243,255,0.5)]">
                        Request Demo
                    </NeonButton>
                </motion.div>
            </div>
        </section>
    );
}
