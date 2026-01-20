"use client";

import { motion } from "framer-motion";
import { LuminousCard } from "../ui/LuminousCard";
import { Users, CheckSquare, GraduationCap, Wallet, Phone, MessageCircle } from "lucide-react";

const modules = [
    {
        title: "HRMS",
        desc: "Unified employee lifecycle management.",
        icon: Users,
        span: "col-span-1 md:col-span-2 lg:col-span-2",
        gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
        title: "Task Tracker",
        desc: "Agile project planning.",
        icon: CheckSquare,
        span: "col-span-1",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "LMS",
        desc: "Automated training & onboarding.",
        icon: GraduationCap,
        span: "col-span-1",
        gradient: "from-amber-400/20 to-orange-500/20"
    },
    {
        title: "Accounts",
        desc: "Seamless billing & expenses.",
        icon: Wallet,
        span: "col-span-1 md:col-span-2 lg:col-span-2",
        gradient: "from-green-400/20 to-emerald-600/20"
    },
    {
        title: "IVRS",
        desc: "Smart routing.",
        icon: Phone,
        span: "col-span-1",
        gradient: "from-red-400/20 to-rose-600/20"
    },
    {
        title: "WhatsApp",
        desc: "Direct integration.",
        icon: MessageCircle,
        span: "col-span-1",
        gradient: "from-lime-400/20 to-green-500/20"
    },
];

export function Modules() {
    return (
        <section id="modules" className="py-24 relative bg-[#030014]">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Integrated Modules
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Everything you need to run your real estate business, all in one place.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px]">
                    {modules.map((mod, i) => (
                        <motion.div
                            key={mod.title}
                            className={mod.span}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <LuminousCard className="h-full p-8 flex flex-col justify-between group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${mod.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                        <mod.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">{mod.title}</h3>
                                    <p className="text-gray-400">{mod.desc}</p>
                                </div>
                            </LuminousCard>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
