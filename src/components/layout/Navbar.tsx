"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "../ui/MagneticButton";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Modules", href: "#modules" },
    { name: "Live Dashboard", href: "#dashboard" },
    { name: "AI Agent", href: "#ai" },
    { name: "Features", href: "#features" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <motion.nav
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className={cn(
                    "w-full max-w-5xl rounded-full border transition-all duration-300 backdrop-blur-md px-6 py-3 flex items-center justify-between",
                    scrolled
                        ? "bg-[#0a0a0f]/80 border-white/10 shadow-lg shadow-primary/5"
                        : "bg-transparent border-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight text-white mr-8">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-sm">S</div>
                    SyndiTech
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-full transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="hidden md:block ml-auto">
                    <MagneticButton className="px-6 py-2 h-auto text-xs bg-white text-black hover:bg-gray-200 border-none">
                        Access Portal
                    </MagneticButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        className="absolute top-20 left-4 right-4 bg-[#0a0a0f] border border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden z-50 md:hidden"
                    >
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-medium text-gray-300 hover:text-white p-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 pt-4 border-t border-white/10">
                                <MagneticButton className="w-full justify-center">
                                    Access Portal
                                </MagneticButton>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
