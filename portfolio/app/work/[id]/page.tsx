import React from "react";
import Link from "next/link";
import Image from "next/image"; // 1. Ensure the optimized Next.js Image component is imported
import { notFound } from "next/navigation";
import { projectsData } from "@/data/projects";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;
    const project = projectsData[id];

    if (!project) notFound();

    return (
        <main className="relative min-h-screen bg-bg text-text pt-[140px] pb-[100px]">
            <div className="max-w-content mx-auto px-8">

                {/* Back navigation element links */}
                <Link href="/#work" className="inline-flex items-center gap-2 font-mono text-xs text-muted hover:text-purple transition-colors mb-8">
                    &larr; BACK_TO_PORTFOLIO
                </Link>

                {/* Status indicator row block */}
                <div className="mb-4">
                    <span className={`inline-block font-mono text-[11px] px-3 py-1 rounded-full uppercase tracking-wider ${project.statusType === "live" ? "bg-teal/10 border border-teal/30 text-teal" : "bg-surface-2 border border-border text-muted"
                        }`}>
                        {project.statusBadge}
                    </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4">{project.title}</h1>
                <p className="text-muted text-base sm:text-lg max-w-[760px] mb-8 leading-relaxed">{project.subtitle}</p>

                {/* CTA interaction row layout details */}
                <div className="flex flex-wrap gap-4 mb-14">
                    <a target="_blank" href={project.netlifyLink ? project.netlifyLink : project.githubLink ? project.githubLink : "/#contact"} className="font-mono text-xs font-medium bg-purple text-bg px-5 py-3 rounded transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(168,85,247,0.35)]">
                        {project.netlifyLink ? "View_Live_Demo()" : project.githubLink ? "OPEN.GITHUB()" : "REQUEST_WALKTHROUGH()"}
                    </a>
                    <Link href="/#contact" className="font-mono text-xs border border-border text-text px-5 py-3 rounded hover:bg-surface hover:border-faint transition-colors">
                        CONTACT_GATEWAY
                    </Link>
                </div>

                {/* Main System Architecture Banner Window */}
                <div className="border border-border bg-surface rounded-xl overflow-hidden mb-8 relative group">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2 relative z-20">
                        <span className="w-2 h-2 rounded-full bg-faint" />
                        <span className="w-2 h-2 rounded-full bg-faint" />
                        <span className="w-2 h-2 rounded-full bg-faint" />
                        <span className="ml-2 font-mono text-[11px] text-faint">system_architecture_preview.png</span>
                    </div>

                    {/* REMOVED: Fixed height class h-[260px]/h-[420px] */}
                    {/* ADDED: aspect-[16/10] or aspect-video to let it scale completely naturally based on width */}
                    <div className="relative w-full aspect-[16/10] sm:aspect-video bg-bg/50 p-2 sm:p-4">
                        <Image
                            src={project.mainImage}
                            alt={`${project.title} Core Dashboard Architecture Mockup`}
                            fill
                            priority
                            /* REMOVED: object-cover */
                            /* ADDED: object-contain to guarantee the entire dashboard window is visible */
                            className="object-contain object-center"
                            sizes="(max-w-1200px) 100vw, 1180px"
                        />
                    </div>
                </div>

                {/* 3. UPDATED GRID: Modular Multi-view Secondary Process Gallery Tiles */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
                    {project.galleryImages.map((img, idx) => (
                        <div
                            key={idx}
                            className="border border-border rounded-xl overflow-hidden h-[400px] flex flex-col justify-between bg-surface group hover:border-faint transition-all duration-200"
                        >
                            {/* Internal Tile Decoration Tab */}
                            <div className="px-3 py-1.5 border-b border-border bg-surface-2 font-mono text-[10px] text-faint truncate">
                                view_log_0{idx + 1}.png
                            </div>

                            {/* Asset Box Wrapper */}
                            <div className="relative w-full h-full bg-bg">
                                <Image
                                    src={img.src}
                                    alt={img.label}
                                    fill
                                    className="object-contain object-center"
                                    sizes="(max-w-768px) 100vw, 33vw"
                                />

                                {/* Overlay Text Chip for context */}
                                <div className="absolute bottom-2 left-2 bg-bg/90 border border-border px-2 py-0.5 rounded font-mono text-[10px] text-muted">
                                    {img.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Rest of your existing layout structures remain completely identical below here... */}
                {/* System Breakdown, Specifications Sidebar, Local Diagnostics Terminal, and Dynamic Route Next Links */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-12 items-start mb-16">
                    <div className="space-y-6">
                        <div>
                            <h3 className="font-display text-xl font-bold mb-3 text-text">System Breakdown</h3>
                            <p className="text-muted text-[15px] leading-relaxed">
                                <strong className="text-text font-medium">The Problem:</strong> {project.problem}
                            </p>
                        </div>
                        <div>
                            <p className="text-muted text-[15px] leading-relaxed">
                                <strong className="text-text font-medium">The Execution:</strong> {project.solution}
                            </p>
                        </div>
                        <div className="pt-4">
                            <h3 className="font-display text-xl font-bold mb-4 text-text">Engine Operations Capabilities</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex gap-3 text-muted text-[14.5px] leading-relaxed">
                                        <span className="text-purple font-mono flex-shrink-0">&rarr;</span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="border border-border bg-surface rounded-xl p-6 space-y-4">
                        <div className="font-mono text-[11px] text-faint tracking-wider">// SPECIFICATION_MANIFEST</div>
                        <div className="space-y-3 font-mono text-xs">
                            <div className="flex justify-between py-2 border-b border-border/40"><span className="text-faint">ROLE:</span><span className="text-text">{project.role}</span></div>
                            <div className="flex justify-between py-2 border-b border-border/40"><span className="text-faint">SYSTEM_TYPE:</span><span className="text-text">{project.type}</span></div>
                        </div>
                        <div className="pt-2">
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                    <span key={t} className="font-mono text-[11px] text-muted border border-border bg-bg px-2 py-0.5 rounded">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border border-border bg-surface rounded-xl overflow-hidden shadow-lg mb-16 max-w-[640px]">
                    <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-surface-2">
                        <span className="w-2 h-2 rounded-full bg-faint" /><span className="w-2 h-2 rounded-full bg-faint" /><span className="w-2 h-2 rounded-full bg-faint" />
                        <span className="ml-2 font-mono text-[11px] text-faint">~/local_diagnostics/{id}</span>
                    </div>
                    <div className="p-5 font-mono text-[13px] space-y-3">
                        {project.setupCommands.map((item, idx) => (
                            <div key={idx} className="space-y-1">
                                <div className="text-teal">{item.cmd}</div>
                                <div className="text-muted">{item.result}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {project.nextProject && (
                    <div className="border-t border-border pt-8 flex justify-end">
                        <Link href={`/work/${project.nextProject.id}`} className="font-mono text-xs text-muted hover:text-purple transition-colors">
                            NEXT_PROJECT: {project.nextProject.name} &rarr;
                        </Link>
                    </div>
                )}

            </div>
        </main>
    );
}