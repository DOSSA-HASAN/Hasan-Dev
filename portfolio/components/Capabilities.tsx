"use client";

import React from "react";

export default function Capabilities() {
    const capabilities = [
        {
            index: "01",
            title: "Backend Architecture",
            subtitle: "Runtime Environments & APIs",
            description: "Building production-ready, structured backend logic utilizing asynchronous design patterns. Specialized in explicit error logging and handling high-concurrency requests.",
            tech: ["Node.js", "Express", "REST APIs", "Prisma ORM", "Sequelize", "Mongoose"]
        },
        {
            index: "02",
            title: "Data Reconciliations",
            subtitle: "Caching & Relational Schemas",
            description: "Designing database collections with strategic indexing patterns. Built complex claim reconciliation SaaS logic for insurance flows and medical setups.",
            tech: ["MongoDB", "PostgreSQL", "Redis Caching", "Data Integrity"]
        },
        {
            index: "03",
            title: "Payment Processing",
            subtitle: "Financial API Gateways",
            description: "Implementing real-time micro-payment verification lines. Safe handling of absolute transaction logs via synchronous event webhooks and push alerts.",
            tech: ["M-Pesa Daraja API", "STK Push Prompts", "B2C / B2B Pochi", "Webhook Handlers"]
        },
        {
            index: "04",
            title: "Full-Stack Syncing",
            subtitle: "Application Interfaces",
            description: "Bridging complex custom endpoints with optimized client dashboards. Structuring highly performant server-side routing components without structural bloat.",
            tech: ["React.js", "Tailwind CSS v4", "Flutter & Dart", "State Management"]
        }
    ];

    return (
        <section id="capabilities" className="relative z-10 max-w-content mx-auto px-8 py-[100px]">
            {/* Section Headline Banner */}
            <div className="max-w-[520px] mb-[60px]">
                <div className="flex items-center gap-2 font-mono text-[13px] text-purple tracking-wider mb-4">
                    <span>02 //</span> ENGINE SPECIFICATIONS
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text">
                    Technical architecture tailored for <span className="text-purple">stability.</span>
                </h2>
            </div>

            {/* Interactive Feature Matrix Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capabilities.map((item) => (
                    <div
                        key={item.index}
                        className="group relative border border-border bg-surface p-8 rounded transition-all duration-300 hover:border-faint hover:bg-surface-2"
                    >
                        {/* Index Tracker Ribbon */}
                        <div className="flex justify-between items-start mb-6">
                            <span className="font-mono text-xs text-faint group-hover:text-purple transition-colors duration-300">
                // MODULE_{item.index}
                            </span>
                            <span className="font-mono text-[11px] text-teal bg-teal/5 border border-teal/20 px-2 py-0.5 rounded">
                                ACTIVE
                            </span>
                        </div>

                        {/* Typography Stack */}
                        <h3 className="font-display text-xl font-bold text-text mb-1 group-hover:text-purple transition-colors duration-300">
                            {item.title}
                        </h3>
                        <p className="font-mono text-[12px] text-muted tracking-wide uppercase mb-4">
                            {item.subtitle}
                        </p>
                        <p className="text-muted text-[14.5px] leading-relaxed mb-8">
                            {item.description}
                        </p>

                        {/* Technical Sub-Tag Badge Pill Nesting */}
                        <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                            {item.tech.map((techItem) => (
                                <span
                                    key={techItem}
                                    className="font-mono text-[11.5px] text-muted bg-surface-2 border border-border px-2.5 py-1 rounded group-hover:bg-surface group-hover:border-faint transition-colors duration-300"
                                >
                                    {techItem}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}