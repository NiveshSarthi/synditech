"use client";

export function NeonGrid() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <div className="absolute inset-0 bg-gradient-to-t from-[#020410] via-transparent to-transparent z-10" />

            <div
                className="absolute inset-[-50%] w-[200%] h-[200%] bg-[linear-gradient(rgba(0,240,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(0,240,255,0.15)_1px,transparent_1px)] bg-[size:40px_40px]"
                style={{
                    transform: "perspective(500px) rotateX(60deg)",
                    transformOrigin: "center top",
                    animation: "grid-move 20s linear infinite"
                }}
            />
        </div>
    );
}
