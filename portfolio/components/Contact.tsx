"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser"

export default function Contact() {
    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formState.name || !formState.email || !formState.message) {
            setStatus("error");
            return;
        }

        setStatus("sending");

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    from_name: formState.name,
                    from_email: formState.email,
                    message: formState.message,
                },
                {
                    publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
                }
            );

            setStatus("success");

            setFormState({
                name: "",
                email: "",
                message: "",
            });

        } catch (error) {
            console.error(error);
            setStatus("error");
        }
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


            </div>
        </section>
    );
}