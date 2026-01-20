"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AuroraBackground({ className, children }: { className?: string; children?: React.ReactNode }) {
    return (
        <div className={cn("relative w-full h-full bg-[#030014] overflow-hidden", className)}>
            <div className="absolute inset-0 opacity-50">
                <div
                    className={cn(
                        "absolute inset-[-100%] opacity-50 blur-[100px]",
                        "[background-image:radial-gradient(ellipse_at_center,transparent_20%,#000),conic-gradient(from_0deg_at_50%_50%,#c084fc_0deg,#3b82f6_60deg,#06b6d4_120deg,#6366f1_180deg,#c084fc_240deg,#3b82f6_300deg,#06b6d4_360deg)]",
                        "animate-aurora will-change-transform"
                    )}
                />
            </div>
            {children}
        </div>
    );
}
