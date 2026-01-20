"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface HoloCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}

export function HoloCard({ children, className, ...props }: HoloCardProps) {
    return (
        <div
            className={cn(
                "relative p-6 bg-[#0a0f1c]/80 backdrop-blur-sm border border-primary/20",
                "clip-corner transition-all duration-300 group hover:border-primary/50",
                className
            )}
            {...props}
        >
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-primary" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-primary" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-primary" />

            {/* Clipped Corner Accent (Bottom Right) */}
            <div className="absolute bottom-[20px] right-0 w-[28px] h-[1px] bg-primary/30 rotate-45 transform origin-right" />

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,240,255,0.03)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50" />

            {children}
        </div>
    );
}
