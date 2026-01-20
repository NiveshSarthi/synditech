"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu } from "lucide-react";

const features = [
    { icon: Zap, title: "Zero Latency", desc: "Real-time updates across all modules instantly." },
    { icon: Shield, title: "Enterprise Secure", desc: "Role-based access & encrypted logs." },
    { icon: Globe, title: "Cloud Native", desc: "Access your dashboard from anywhere, anytime." },
    { icon: Cpu, title: "AI Powered", desc: "Predictive analytics built into every proactive workflow." },
];

export function Features() {
    return (
        <section className="py-20 bg-[#0a0a0f] border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {features.map((feat, i) => (
                        <motion.div
                            key={feat.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center group"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] transition-all duration-300">
                                <feat.icon className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feat.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
