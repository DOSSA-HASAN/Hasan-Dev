"use client";

import Link from "next/link";
import { useState } from "react";
import navigation from "@/data/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed inset-x-0 top-0 z-50 border-b border-border bg-bg/70 backdrop-blur-xl">
            <div className="mx-auto flex max-w-[1180px] items-center justify-between px-8 py-5">

                <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-semibold"
                >
                    <span className="h-2 w-2 rounded-full bg-purple shadow-[0_0_12px_#A855F7]" />

                    hasan

                    <span className="text-muted">
                        .dev
                    </span>
                </Link>

                <div className="hidden items-center gap-2 lg:flex">
                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-2 rounded-md px-4 py-2 font-mono text-sm text-muted transition hover:bg-surface-2 hover:text-text"
                        >
                            <span className="font-semibold text-purple">
                                {item.method}
                            </span>

                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">

                    <div className="hidden items-center gap-2 rounded-full border border-teal/30 bg-teal/10 px-3 py-1.5 font-mono text-xs text-teal md:flex">

                        <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse-dot" />

                        OPEN TO WORK

                    </div>

                    <button
                        onClick={() => setOpen(!open)}
                        className="flex flex-col gap-1 lg:hidden"
                    >
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                        <span className="h-0.5 w-6 bg-white" />
                    </button>

                </div>
            </div>

            {open && (
                <div className="border-t border-border bg-bg lg:hidden">

                    {navigation.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="block border-b border-border px-8 py-4 font-mono text-muted"
                        >
                            {item.label}
                        </a>
                    ))}

                </div>
            )}
        </nav>
    );
}