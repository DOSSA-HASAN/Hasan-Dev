"use client";

import React, { useEffect, useState } from "react";

interface TerminalLine {
    text: string;
    type: "prompt" | "value" | "ok" | "empty";
}

export default function Hero() {
    const [visibleLines, setVisibleLines] = useState<TerminalLine[]>([]);

    const sequence: TerminalLine[] = [
        { text: "$ whoami", type: "prompt" },
        { text: "muhammad_hasan_dossa", type: "value" },
        { text: "", type: "empty" },
        { text: "$ status --check-all", type: "prompt" },
        { text: "✓ api        200  OK", type: "ok" },
        { text: "✓ auth       jwt  verified", type: "ok" },
        { text: "✓ payments   mpesa  listening…", type: "ok" },
        { text: "✓ diploma    2026  credit-transfer active", type: "ok" },
    ];

    useEffect(() => {
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (prefersReducedMotion) {
            setVisibleLines(sequence);
            return;
        }

        let currentLineIndex = 0;
        let currentCharIndex = 0;

        setVisibleLines([{ text: "", type: sequence[0].type }]);

        const typeCharacter = () => {
            if (currentLineIndex >= sequence.length) return;

            const currentItem = sequence[currentLineIndex];

            if (currentItem.type === "empty") {
                setVisibleLines((prev) => [...prev, { text: "", type: "empty" }]);
                currentLineIndex++;
                setTimeout(typeCharacter, 100);
                return;
            }

            // Instant print for log validation statements
            if (currentItem.type === "ok" || (currentItem.type === "value" && currentCharIndex === 0)) {
                setVisibleLines((prev) => {
                    const updated = [...prev];
                    updated[updated.length - 1] = currentItem;
                    if (currentLineIndex + 1 < sequence.length) {
                        return [...updated, { text: "", type: sequence[currentLineIndex + 1].type }];
                    }
                    return updated;
                });

                currentLineIndex++;
                currentCharIndex = 0;
                setTimeout(typeCharacter, 140);
                return;
            }

            // Typing simulation loop for shell prompts
            setVisibleLines((prev) => {
                const updated = [...prev];
                if (updated[updated.length - 1]) {
                    updated[updated.length - 1].text = currentItem.text.slice(0, currentCharIndex + 1);
                }
                return updated;
            });

            currentCharIndex++;

            if (currentCharIndex >= currentItem.text.length) {
                currentLineIndex++;
                currentCharIndex = 0;
                if (currentLineIndex < sequence.length) {
                    setVisibleLines((prev) => [...prev, { text: "", type: sequence[currentLineIndex].type }]);
                }
                setTimeout(typeCharacter, 200);
            } else {
                setTimeout(typeCharacter, 20);
            }
        };

        const initialTimer = setTimeout(typeCharacter, 600);
        return () => clearTimeout(initialTimer);
    }, []);

    return (
        <section
            id="hero"
            className="relative z-10 max-w-[1180px] mx-auto px-8 pt-[190px] pb-[120px] grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-[60px] items-center"
        >
            {/* Content Col */}
            <div>
                <div
                    className="inline-flex items-center gap-[9px] font-mono text-[12.5px] border px-3.5 py-1.5 rounded-full tracking-wider mb-6"
                    style={{ color: "#A855F7", borderColor: "rgba(168, 85, 247, 0.28)", backgroundColor: "rgba(168, 85, 247, 0.06)" }}
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A855F7] animate-pulse" />
                    NAIROBI, KE — BACKEND-FOCUSED
                </div>

                <h1 className="font-display text-[42px] sm:text-[56px] lg:text-[68px] font-bold leading-[1.03] tracking-tight mb-3.5 text-[#EDEFF2]">
                    Muhammad Hasan<br />
                    <span style={{ color: "#A855F7" }}>Dossa</span>
                </h1>

                <div className="font-mono text-sm sm:text-[15px] text-[#8A93A3] mb-6 flex flex-wrap items-center gap-2">
                    <span>Software Developer</span>
                </div>

                <p className="max-w-[480px] text-[#8A93A3] text-base mb-[38px] leading-relaxed">
                    I build the parts of a product users never see but always rely on — <strong className="text-[#EDEFF2] font-medium">APIs that don't fall over</strong>, <strong className="text-[#EDEFF2] font-medium">auth that actually secures</strong>, and payment flows that confirm in real time. Currently developing a live M-Pesa integration full-stack application.
                </p>

                <div className="flex flex-wrap gap-3.5">
                    <a
                        href="#work"
                        className="font-mono text-sm font-medium text-[#15101C] px-6 py-3.5 rounded-md transition-all duration-150 hover:-translate-y-0.5"
                        style={{
                            backgroundColor: "#A855F7",
                            boxShadow: "0 4px 14px rgba(168, 85, 247, 0.2)"
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.boxShadow = "0 8px 20px rgba(168, 85, 247, 0.35)"}
                        onMouseLeave={(e) => e.currentTarget.style.boxShadow = "0 4px 14px rgba(168, 85, 247, 0.2)"}
                    >
                        View Work →
                    </a>
                </div>
            </div>

            {/* Terminal Card Col */}
            <div
                className="rounded-xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.45)] border"
                style={{ backgroundColor: "#12151B", borderColor: "#242933" }}
            >
                <div
                    className="flex items-center gap-2 px-4 py-3 border-b"
                    style={{ backgroundColor: "#1A1E26", borderColor: "#242933" }}
                >
                    <span className="w-[11px] h-[11px] rounded-full bg-[#E8664A]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#E8C24A]" />
                    <span className="w-[11px] h-[11px] rounded-full bg-[#4AE8A0]" />
                    <span className="ml-2.5 font-mono text-xs" style={{ color: "#565F6F" }}>~/hasan — status</span>
                </div>

                <div className="p-[22px] font-mono text-[13.5px] min-h-[245px] flex flex-col justify-start">
                    {visibleLines.map((line, idx) => (
                        <div
                            key={idx}
                            className="mb-2.5 font-mono"
                            style={{
                                color: line.type === "prompt" || line.type === "ok" ? "#46D9C4" :
                                    line.type === "value" ? "#EDEFF2" : "#8A93A3"
                            }}
                        >
                            {line.text}
                            {idx === visibleLines.length - 1 && line.type === "prompt" && (
                                <span
                                    className="inline-block w-[7px] h-3.5 ml-0.5 animate-pulse"
                                    style={{ backgroundColor: "#A855F7", verticalAlign: "middle" }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}