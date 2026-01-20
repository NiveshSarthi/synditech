"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedBorderProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    gradientColor?: string; // e.g., "from-primary via-secondary to-primary"
}

export function AnimatedBorder({ children, className, gradientColor = "from-cyan-500 via-purple-500 to-cyan-500", ...props }: AnimatedBorderProps) {
    return (
        <div className={cn("relative p-[1px] rounded-2xl overflow-hidden group", className)} {...props}>
            {/* Moving Gradient Border */}
            <div className="absolute inset-[-100%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#0000_50%,var(--color-primary)_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content Container (Masks the center) */}
            <div className="relative bg-[#0a0a0f] rounded-2xl z-10 h-full w-full">
                {children}
            </div>
        </div>
    );
}
