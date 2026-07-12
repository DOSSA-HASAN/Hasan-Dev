"use client";

import React, { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // Simulate API webhook runtime transmission delay
        setTimeout(() => {
            if (formState.email && formState.message) {
                setStatus("success");
                setFormState({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        }, 1200);
    };

    return (
        <section id="contact" className="relative z-10 max-w-content mx-auto px-8 py-[100px]">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-[60px] items-start">

                {/* Left Column Text details */}
                <div>
                    <div className="flex items-center gap-2 font-mono text-[13px] text-purple tracking-wider mb-4">
                        <span>04 //</span> SOCKET_CONNECTION
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text mb-6">
                        Let's build something <br />
                        <span className="text-purple">dependable.</span>
                    </h2>
                    <p className="text-muted text-[15px] leading-relaxed max-w-[460px] mb-8">
                        Looking to spin up a secure production API, design an immutable transaction flow, or sync a MERN stack application interface? Send an execution request through the gateway.
                    </p>

                    <div className="space-y-4 font-mono text-xs text-muted">
                        <div className="flex items-center gap-3">
                            <span className="text-faint">ping:</span>
                            <a href="mailto:hassandossa5@gmail.com" className="hover:text-purple text-text transition-colors">hassandossa5@gmail.com</a>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-faint">loc:</span>
                            <span className="text-text">Nairobi, Kenya (EAT)</span>
                        </div>
                    </div>
                </div>

                {/* Right Column Interactive Terminal Form Panel */}
                <div className="border border-border bg-surface rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
                    {/* Header Panel Tab Bar */}
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-surface-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple/40" />
                        <span className="ml-1.5 font-mono text-xs text-faint">connection_gateway.sh</span>
                    </div>

                    <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
                        <div>
                            <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                                $ input --name
                            </label>
                            <input
                                type="text"
                                required
                                value={formState.name}
                                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                className="w-full font-mono text-sm border border-border bg-surface-2 px-4 py-3 rounded text-text transition-colors focus:outline-none focus:border-purple focus:bg-surface"
                                placeholder="Your Name"
                            />
                        </div>

                        <div>
                            <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                                $ input --email
                            </label>
                            <input
                                type="email"
                                required
                                value={formState.email}
                                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                className="w-full font-mono text-sm border border-border bg-surface-2 px-4 py-3 rounded text-text transition-colors focus:outline-none focus:border-purple focus:bg-surface"
                                placeholder="your.email@domain.com"
                            />
                        </div>

                        <div>
                            <label className="block font-mono text-xs text-muted tracking-wider uppercase mb-2">
                                $ input --payload_message
                            </label>
                            <textarea
                                rows={4}
                                required
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="w-full font-mono text-sm border border-border bg-surface-2 px-4 py-3 rounded text-text transition-colors focus:outline-none focus:border-purple focus:bg-surface resize-none"
                                placeholder="Describe project specifications or pipeline needs..."
                            />
                        </div>

                        <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="font-mono text-sm font-medium bg-purple text-bg px-6 py-3 rounded transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(168,85,247,0.35)] disabled:opacity-50 disabled:transform-none"
                            >
                                {status === "sending" ? "TRANSMITTING..." : "EXECUTE_SEND()"}
                            </button>

                            {/* Status Message Line hooks */}
                            {status === "success" && (
                                <span className="font-mono text-xs text-teal animate-pulse-dot">
                                    ✓ Payload transmitted successfully.
                                </span>
                            )}
                            {status === "error" && (
                                <span className="font-mono text-xs text-[#E8664A]">
                                    ⨯ Execution halted: validation failed.
                                </span>
                            )}
                        </div>
                    </form>
                </div>

            </div>
        </section>
    );
}