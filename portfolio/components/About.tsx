"use client";

import React, { useEffect, useState } from "react";

export default function About() {
    const [animate, setAnimate] = useState(false);

    // Trigger skill bar filling animation shortly after mounting
    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 200);
        return () => clearTimeout(timer);
    }, []);

    const coreSkills = [
        { name: "Backend Architecture (Node.js / Express)", percentage: "95%", width: "w-[95%]" },
        { name: "Database & Reconciliations (SQL / MongoDB / Redis / ORMs)", percentage: "90%", width: "w-[90%]" },
        { name: "API Reliability & Integration (M-Pesa Daraja / REST)", percentage: "92%", width: "w-[92%]" },
        { name: "Full-Stack Synchronization (React / Tailwind / Flutter & Dart)", percentage: "85%", width: "w-[85%]" },
    ];

    return (
        <section
            id="about"
            className="relative z-10 max-w-[1180px] mx-auto px-8 py-[100px] grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[70px] items-start"
        >
            {/* Left Column: Philosophical Overview */}
            <div>
                <div className="flex items-center gap-2 font-mono text-[13px] tracking-wider mb-4" style={{ color: "#A855F7" }}>
                    <span>01 //</span> THE MAN BEHIND THE RUNTIME
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-6 text-[#EDEFF2]">
                    Building architecture that scales, <br />
                    <span style={{ color: "#A855F7" }}>not code that just compiles.</span>
                </h2>

                <div className="space-y-5 text-[#8A93A3] text-[15.5px] leading-relaxed max-w-[490px]">
                    <p>
                        I am a full-stack software engineer specialized in crafting high-efficiency backend ecosystems. Whether it's processing instant M-Pesa automated micro-payments or handling database structures for SaaS applications, I design applications around performance, clean error boundaries, and reliability.
                    </p>
                    <p>
                        My engineering philosophy focuses on cutting out template bloating. Every route is structured explicitly, every database schema carefully indexed, and every user flow hardened against unexpected exceptions.
                    </p>
                </div>
            </div>

            {/* Right Column: Interactive Diagnostic System Metrics */}
            <div
                className="border rounded-xl p-7 md:p-8 w-full shadow-[0_20px_40px_rgba(0,0,0,0.2)]"
                style={{ backgroundColor: "#12151B", borderColor: "#242933" }}
            >
                <div className="font-mono text-xs text-[#565F6F] mb-6 flex justify-between items-center border-b pb-3" style={{ borderColor: "rgba(36, 41, 51, 0.6)" }}>
                    <span>SYSTEM_DIAGNOSTICS // CAPABILITIES</span>
                    <span style={{ color: "#46D9C4" }}>STATUS: OPTIMIZED</span>
                </div>

                <div className="space-y-6">
                    {coreSkills.map((skill, index) => (
                        <div key={index} className="space-y-2">
                            <div className="flex justify-between items-center font-mono text-[13px]">
                                <span className="text-[#EDEFF2] font-medium">{skill.name}</span>
                                <span style={{ color: "#A855F7" }} className="font-semibold">{skill.percentage}</span>
                            </div>

                            {/* Outer Track */}
                            <div className="h-2 w-full rounded-full bg-[#1A1E26] overflow-hidden relative">
                                {/* Inner Filled Bar */}
                                <div
                                    className={`h-full rounded-full transition-all duration-1000 ease-out ${animate ? skill.width : "w-0"
                                        }`}
                                    style={{
                                        backgroundColor: "#A855F7",
                                        boxShadow: "0 0 8px rgba(168, 85, 247, 0.4)"
                                    }}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-4 border-t font-mono text-[11.5px] text-[#8A93A3] flex flex-wrap gap-x-5 gap-y-2" style={{ borderColor: "rgba(36, 41, 51, 0.6)" }}>
                    <div><span style={{ color: "#46D9C4" }}>✓</span> MEMORY_LEAKS: 0</div>
                    <div><span style={{ color: "#46D9C4" }}>✓</span> THREADS: MULTI_ASYNC</div>
                    <div><span style={{ color: "#A855F7" }}>//</span> AS ADSE CANDIDATE</div>
                </div>
            </div>
        </section>
    );
}