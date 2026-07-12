"use client";

import React from "react";
import Link from "next/link"; // Imported to handle dynamic sub-routing seamlessly

export default function Work() {
    const projects = [
        {
            id: "pesaflow", // Add unique IDs to map directly to your data configurations
            title: "PesaFlow Backend",
            category: "FINANCIAL API / PAYMENT GATEWAY",
            description: "A secure, resilient Node.js backend architecture built to orchestrate M-Pesa automated micro-transactions. Features strict transaction fallback layers and asynchronous webhook confirmation tracking.",
            metrics: ["STK Push Prompts", "B2B Payment Handlers", "Sequelize ORM"]
        },
        {
            id: "suna-motors",
            title: "Suna Motors (Admin Dashboard)",
            category: "VEHICLE MANAGEMENT & FLEET CONTROL PLATFORM",
            description: "Developed a responsive car management web application that enables users to efficiently manage vehicle records",
            metrics: ["MERN Stack", "Next.js"]
        },
        {
            id: "yiora",
            title: "Y'iora Frontend",
            category: "RESPONSIVE FRONTEND WEB DEVELOPMENT",
            description: "A modern, responsive event management website designed to showcase events, speakers, schedules, sponsors, and registration details through an engaging and intuitive user interface.",
            metrics: ["Next.js", "Tailwind CSS"]
        },
        {
            id: "auto-revive",
            title: "Auto-Revive (KE) Frontend",
            category: "RESPONSIVE FRONTEND WEB DEVELOPMENT",
            description: "Designed and developed a modern, responsive website for a professional car detailing business, showcasing premium automotive care services through a clean and visually engaging interface.",
            metrics: ["Next.js", "Tailwind CSS"]
        },
        {
            id: "jaffery-medical",
            title: "Jaffery Medical Clinic Mombasa (KE) Frontend",
            category: "RESPONSIVE FRONTEND WEB DEVELOPMENT",
            description: "Designed and developed a responsive healthcare clinic website that provides patients with an intuitive platform to explore medical services, learn about healthcare professionals, and access essential clinic information",
            metrics: ["Next.js", "Tailwind CSS"]
        },
    ];

    return (
        <section id="work" className="relative z-10 max-w-content mx-auto px-8 py-[100px]">
            {/* Section Header */}
            <div className="max-w-[520px] mb-[60px]">
                <div className="flex items-center gap-2 font-mono text-[13px] text-purple tracking-wider mb-4">
                    <span>03 //</span> DEPLOYED SYSTEMS
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-text">
                    Production software built to run <span className="text-purple">flawlessly.</span>
                </h2>
            </div>

            {/* Projects Column Stack */}
            <div className="space-y-12">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="group grid grid-cols-1 lg:grid-cols-[0.4fr_1.6fr] gap-6 lg:gap-11 border border-border bg-surface p-8 rounded transition-all duration-300 hover:border-faint hover:bg-surface-2"
                    >
                        {/* Meta Category Indicator */}
                        <div className="font-mono text-xs text-faint tracking-wider pt-1 group-hover:text-purple transition-colors duration-300">
                            [{project.category}]
                        </div>

                        {/* Project Content Box */}
                        <div className="flex flex-col justify-between gap-6">
                            <div>
                                <h3 className="font-display text-2xl font-bold text-text group-hover:text-purple transition-colors duration-300 mb-3">
                                    {project.title}
                                </h3>

                                <p className="text-muted text-[15px] leading-relaxed max-w-[760px] mb-6">
                                    {project.description}
                                </p>

                                {/* Technical Specifications Sub-row */}
                                <div className="flex flex-wrap gap-2.5 mb-6">
                                    {project.metrics.map((spec) => (
                                        <span
                                            key={spec}
                                            className="font-mono text-xs text-muted bg-surface-2 border border-border px-3 py-1 rounded group-hover:bg-surface group-hover:border-faint transition-colors duration-300"
                                        >
                                            {spec}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* REPLACED LINK: Added clean visual system action triggers to match your prototype layout */}
                            <div className="pt-4 border-t border-border/60">
                                <Link
                                    href={`/work/${project.id}`}
                                    className="inline-flex items-center gap-2 font-mono text-xs text-text border border-border px-4 py-2.5 rounded hover:text-purple hover:border-purple hover:bg-surface transition-all bg-purple"
                                >
                                    <span className="">EXPLORE_SYSTEM_DETAILS()</span>
                                    {/* <svg className="w-3.5 h-3.5" fill="#fff" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg> */}
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}