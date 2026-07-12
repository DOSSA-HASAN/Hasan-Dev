"use client";

import React from "react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-border bg-surface/40 py-8">
            <div className="max-w-content mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Left Side: System Status & Copyright */}
                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 font-mono text-xs text-faint text-center sm:text-left">
                    <span className="text-muted">
                        &copy; {currentYear} hasan<span className="text-purple">.dev</span>
                    </span>
                    <span className="hidden sm:inline text-border">|</span>
                    <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse-dot" />
                        <span className="text-teal/90 uppercase tracking-wider text-[11px]">ALL_SYSTEMS_OPERATIONAL</span>
                    </div>
                </div>

                {/* Right Side: Environment Tags */}
                <div className="flex items-center gap-4 font-mono text-[11px] text-faint">
                    <div>
                        <span className="text-purple">//</span> ENV: <span className="text-text">PRODUCTION</span>
                    </div>
                    <div className="hidden sm:block">
                        <span className="text-purple">//</span> Engine: <span className="text-text">Next.js v15+</span>
                    </div>
                </div>

            </div>
        </footer>
    );
}