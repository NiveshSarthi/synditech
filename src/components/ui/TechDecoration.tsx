"use client";

import { cn } from "@/lib/utils";

export function TechDecoration({ className }: { className?: string }) {
    return (
        <div className={cn("absolute inset-0 pointer-events-none z-0", className)}>
            {/* Corner Brackets */}
            <svg className="absolute top-0 left-0 w-8 h-8 text-primary/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12V7a5 5 0 0 0-5-5H7" />
            </svg>
            <svg className="absolute top-0 right-0 w-8 h-8 text-primary/50 rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12V7a5 5 0 0 0-5-5H7" />
            </svg>
            <svg className="absolute bottom-0 left-0 w-8 h-8 text-secondary/50 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12V7a5 5 0 0 0-5-5H7" />
            </svg>
            <svg className="absolute bottom-0 right-0 w-8 h-8 text-secondary/50 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12V7a5 5 0 0 0-5-5H7" />
            </svg>

            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(0,243,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,243,255,0.1)_1px,transparent_1px)] bg-[size:2rem_2rem]" />
        </div>
    );
}
