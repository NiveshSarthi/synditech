"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mic } from "lucide-react";

export function AIAssistant() {
    const [text, setText] = useState("");
    const fullText = "Analyzing monthly expenditure... Generating optimization report... Done.";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i));
            i++;
            if (i > fullText.length) {
                clearInterval(interval);
                setTimeout(() => { i = 0; }, 2000); // Loop delay
            }
        }, 50);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-32 relative overflow-hidden flex items-center justify-center bg-[#0a0a0f]">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

            <div className="relative z-10 text-center max-w-4xl px-6">

                {/* Floating Orb */}
                <div className="relative w-40 h-40 mx-auto mb-12">
                    <motion.div
                        className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary blur-xl opacity-60"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                    />
                    <motion.div
                        className="absolute inset-4 rounded-full bg-white blur-md"
                        animate={{ scale: [1, 0.8, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Mic className="w-12 h-12 text-black relative z-10" />
                    </div>
                </div>

                <h2 className="text-5xl font-bold text-white mb-6">Ask <span className="text-secondary">SyndiTech AI</span></h2>

                {/* Chat Interface */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-10 backdrop-blur-md max-w-2xl mx-auto">
                    <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex-shrink-0" />
                        <div className="text-left space-y-2">
                            <div className="text-xs text-primary uppercase font-bold tracking-wider mb-1">SyndiTech Intelligence</div>
                            <p className="text-xl md:text-2xl font-mono text-gray-200 min-h-[3rem]">
                                {text}<span className="animate-pulse">|</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
