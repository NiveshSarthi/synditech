"use client";

import { motion } from "framer-motion";
import { GlassCard } from "../ui/GlassCard";
import { Users, CheckSquare, GraduationCap, Wallet, Phone, MessageCircle } from "lucide-react";

const modules = [
    {
        title: "HRMS",
        desc: "Complete employee lifecycle management.",
        icon: Users,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "Task Tracker",
        desc: "Project planning & progress tracking.",
        icon: CheckSquare,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "LMS",
        desc: "Training, onboarding & certification.",
        icon: GraduationCap,
        color: "from-amber-400 to-orange-500"
    },
    {
        title: "Accounts",
        desc: "Billing, expenses & salary processing.",
        icon: Wallet,
        color: "from-green-400 to-emerald-600"
    },
    {
        title: "IVRS",
        desc: "Smart call routing & lead handling.",
        icon: Phone,
        color: "from-red-400 to-rose-600"
    },
    {
        title: "WhatsApp",
        desc: "Automated lead extraction & tracking.",
        icon: MessageCircle,
        color: "from-lime-400 to-green-500"
    },
];

export function Modules() {
    return (
        <section id="modules" className="py-20 relative bg-[#0a0a0f]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-primary text-sm font-bold uppercase tracking-widest">Core Modules</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">An Ecosystem of <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Intelligent Portals</span></h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {modules.map((mod, i) => (
                        <motion.div
                            key={mod.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <GlassCard
                                className="h-full group hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden"
                            >
                                {/* Hover Glow Background */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${mod.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${mod.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <mod.icon className="w-7 h-7 text-white" />
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{mod.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{mod.desc}</p>

                                {/* Arrow hint */}
                                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                                    <div className={`h-8 w-8 rounded-full bg-gradient-to-r ${mod.color} flex items-center justify-center`}>
                                        <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
