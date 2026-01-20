"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
}

export function CyberButton({ variant = "primary", className, children, ...props }: CyberButtonProps) {
    const isPrimary = variant === "primary";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-8 py-3 font-bold uppercase tracking-widest text-sm clip-corner transition-all duration-200",
                isPrimary
                    ? "bg-primary text-black hover:bg-white hover:shadow-[0_0_20px_var(--color-primary)]"
                    : "border border-secondary text-secondary hover:bg-secondary/10 hover:shadow-[0_0_20px_var(--color-secondary)]",
                className
            )}
            {...props as any}
        >
            <span className="relative z-10 flex items-center gap-2">{children}</span>

            {/* Glitch decorative text */}
            <div className="absolute top-0 left-0 w-full h-full opacity-0 hover:opacity-100 mix-blend-screen pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-white animate-pulse" style={{ top: '20%' }} />
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white animate-pulse" style={{ top: '60%' }} />
            </div>
        </motion.button>
    );
}
