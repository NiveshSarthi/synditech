"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = false, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300",
                hoverEffect && "hover:shadow-[0_0_30px_rgba(0,243,255,0.2)] hover:border-[rgba(0,243,255,0.3)]",
                className
            )}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            {...props as any}
        >
            {children}
        </motion.div>
    );
}
