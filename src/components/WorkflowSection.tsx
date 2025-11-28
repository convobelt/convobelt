"use client";

import { motion } from "framer-motion";
import { CalendarCheck2, ScanLine } from "lucide-react";

export default function WorkflowSection() {
    const workflows = [
        {
            title: "Pair scanning & traceability",
            icon: ScanLine,
            desc: "Barcode-first workflows keep every component matched and verified as it moves through the belt.",
            bullets: [
                "Dashboard supports both pairwise scanning and conveyor belt scanning as integral mechanisms.",
                "Finished Goods are tracked as they enter and exit the facility via barcode scanners.",
                "Box verification and box creation happen by scanning and inspecting the inner cartons."
            ]
        },
        {
            title: "Planning & generation of new orders",
            icon: CalendarCheck2,
            desc: "Turn carton-level definitions into executable plans, then run and reconcile production daily.",
            bullets: [
                "Generate orders based on individual cartons and predefined sizes.",
                "Plan, manage, and execute daily manufacturing orders with a clear schedule.",
                "Cut-size, planned orders, and finished goods operations are documented and exportable as Excel data."
            ]
        }
    ];

    return (
        <section id="workflow" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">
                        How It Runs
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">
                        Built-in scanning and planning, end to end.
                    </h2>
                    <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                        Every move on the belt is backed by a plan—paired scans, verified boxes, scheduled runs, and data you can
                        export for audit and reporting.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {workflows.map((workflow, i) => (
                        <motion.div
                            key={workflow.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-8 rounded-2xl border border-slate-200 bg-slate-50/80 shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red flex items-center justify-center">
                                    <workflow.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900">{workflow.title}</h3>
                            </div>
                            <p className="text-slate-600 mb-4">{workflow.desc}</p>
                            <ul className="space-y-3 text-slate-700">
                                {workflow.bullets.map((bullet) => (
                                    <li key={bullet} className="flex gap-3 items-start">
                                        <span className="mt-1 w-2 h-2 rounded-full bg-brand-red flex-shrink-0" />
                                        <span className="leading-relaxed">{bullet}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
