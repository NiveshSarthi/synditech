"use client";

import Link from "next/link";
import { Facebook, Twitter, Linkedin, Instagram, ArrowRight } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-[#0a0a0f] pt-20 pb-10 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/4 w-1/2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm" />

            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div className="space-y-6">
                    <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
                        Syndi<span className="text-primary">Tech</span>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Revolutionizing real estate operations with intelligent automation and futuristic portals. A product of NiveshSarthi.com.
                    </p>
                    <div className="flex gap-4">
                        {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:bg-white/5 hover:text-primary transition-all">
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Product</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['HRMS', 'Task Tracker', 'LMS', 'Finance'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Company</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        {['About Us', 'Careers', 'Blog', 'Contact'].map(item => (
                            <li key={item}><a href="#" className="hover:text-white transition-colors">{item}</a></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6">Newsletter</h4>
                    <p className="text-gray-400 text-sm mb-4">Subscribe for the latest updates.</p>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-primary w-full"
                        />
                        <button className="bg-primary text-black p-2 rounded-lg hover:bg-primary-dark transition-colors">
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} SyndiTech. All rights reserved.
            </div>
        </footer>
    );
}
