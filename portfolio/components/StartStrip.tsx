"use client";

import React from "react";

export default function StatStrip() {
    const stats = [
        { num: "4", label: "LIVE PROJECTS DEPLOYED" },
        { num: "1", label: "PRODUCTION PAYMENTS API (SAFARICOM M-PESA)" },
        { num: "100%", label: "FREELANCE-BUILT" },
        { num: "2026", label: "DEGREE COMPLETION" },
    ];

    return (
        <div className="max-w-[1180px] mx-auto px-8 relative z-20 mt-[-20px] mb-12">
            <div
                className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-4 border rounded-xl p-8 md:px-11 md:py-[34px]"
                style={{ backgroundColor: "#12151B", borderColor: "#242933" }}
            >
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="pl-4 md:pl-0 border-l-2 md:border-l-0"
                        style={{ borderLeftColor: "#4C2172" }}
                    >
                        <span
                            className="font-display text-[30px] font-bold block mb-1.5 leading-none"
                            style={{ color: "#A855F7" }}
                        >
                            {stat.num}
                        </span>
                        <span className="font-mono text-[12px] text-[#8A93A3] tracking-wide block uppercase">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}