"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeonButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
}

export function NeonButton({ variant = "primary", className, children, ...props }: NeonButtonProps) {
    const baseStyles = "relative px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-all duration-300 overflow-hidden group";

    const variants = {
        primary: "bg-primary text-black hover:shadow-[0_0_20px_var(--color-primary)]",
        secondary: "bg-secondary text-white hover:shadow-[0_0_20px_var(--color-secondary)]",
        outline: "border border-primary text-primary hover:bg-primary/10 hover:shadow-[0_0_20px_var(--color-primary)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(baseStyles, variants[variant], className)}
            {...props as any}
        >
            <span className="relative z-10">{children}</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12" />
        </motion.button>
    );
}
