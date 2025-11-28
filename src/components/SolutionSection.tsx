"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function SolutionSection() {
    const steps = [
        {
            title: "Order & carton intake",
            desc: "Import customer orders and carton-level definitions, including predefined size sets.",
            color: "text-brand-blue",
            bg: "bg-brand-blue/10",
            border: "border-brand-blue/20"
        },
        {
            title: "Pair scanning + QC gates",
            desc: "Barcode scans match components, validate inner cartons, and stop defects at the belt.",
            color: "text-emerald-500",
            bg: "bg-emerald-500/10",
            border: "border-emerald-500/20"
        },
        {
            title: "Real-time inventory & scheduling",
            desc: "Material levels update automatically, preventing shortages while scheduling respects actual demand.",
            color: "text-indigo-400",
            bg: "bg-indigo-400/10",
            border: "border-indigo-400/20"
        },
        {
            title: "FG management with filtering",
            desc: "Track finished goods in and out with size and colour filters, secured by role-based controls.",
            color: "text-brand-red",
            bg: "bg-brand-red/10",
            border: "border-brand-red/20"
        }
    ];

    return (
        <section id="solution" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Your production control loop in one place
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Connect order plans, scanning, scheduling, and finished goods tracking so every step stays aligned with
                        demand.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        {/* Connecting Line */}
                        <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2 hidden md:block" />

                        <div className="space-y-12">
                            {steps.map((step, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                >
                                    {/* Content */}
                                    <div className="flex-1 w-full md:w-auto p-6 rounded-xl border bg-white/50 backdrop-blur-sm hover:bg-white transition-colors duration-300 group z-10 shadow-sm"
                                        style={{ borderColor: 'rgba(226, 232, 240, 1)' }} // slate-200
                                    >
                                        <div className={`inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-xs font-mono font-medium ${step.bg} ${step.color} border ${step.border}`}>
                                            STEP 0{i + 1}
                                        </div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-brand-blue transition-colors">{step.title}</h3>
                                        <p className="text-slate-600">{step.desc}</p>
                                    </div>

                                    {/* Center Node */}
                                    <div className="relative shrink-0 z-10 hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-slate-50 shadow-xl">
                                        <CheckCircle2 className={`w-8 h-8 ${step.color}`} />
                                    </div>

                                    {/* Spacer for alternate side */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
