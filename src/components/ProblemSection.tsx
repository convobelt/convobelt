"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle } from "lucide-react";

const CHAOS_ITEMS = Array.from({ length: 15 }).map(() => ({
    initial: {
        rotate: Math.random() * 360,
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
    },
    animate: {
        rotate: Math.random() * 360,
        y: [0, -10, 0]
    },
    transition: {
        duration: 3 + Math.random(),
        repeat: Infinity
    }
}));

export default function ProblemSection() {

    return (
        <section id="problem" className="py-24 bg-white relative">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        When production outruns demand
                    </h2>
                    <p className="text-lg text-slate-600">
                        Without a live link between orders, materials, and the belt, factories produce for the mold instead of the
                        customer. The result is a wave of cut sizes, shortages, and rework that erodes margin.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] bg-slate-50 rounded-xl border border-slate-200 p-8 overflow-hidden">
                        {/* Chaos Visualization */}
                        <div className="absolute inset-0 flex flex-wrap content-center justify-center gap-4 p-8 opacity-50">
                            {CHAOS_ITEMS.map((item, i) => (
                                <motion.div
                                    key={i}
                                    className="w-16 h-10 bg-white border border-slate-200 rounded flex items-center justify-center shadow-sm"
                                    initial={item.initial}
                                    animate={item.animate}
                                    transition={item.transition}
                                >
                                    <XCircle className="text-red-500/50 w-6 h-6" />
                                </motion.div>
                            ))}
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-50 via-transparent to-transparent" />

                        <div className="absolute bottom-8 left-8 right-8 z-10">
                            <div className="flex items-center gap-3 text-red-600 mb-2">
                                <AlertTriangle className="w-6 h-6" />
                                <span className="font-mono font-bold">PRODUCTION DRIFT</span>
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 mb-2">Output without demand</h3>
                            <p className="text-slate-600 text-sm">
                                Machines run because they can, not because they should—creating scrap, dead stock, and urgent rework.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-8">
                        {[
                            { title: "Machine-first scheduling", desc: "Runs are triggered because a mold is hot, not because an order exists." },
                            { title: "Inventory blind spots", desc: "Material levels are invisible until shortages stop the line." },
                            { title: "Quality escapes", desc: "Missing QC checkpoints create rework, delays, and compliance risk." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.2 }}
                                className="flex gap-4 p-6 rounded-lg border border-slate-200 bg-white hover:border-red-500/30 transition-colors shadow-sm"
                            >
                                <div className="shrink-0 w-12 h-12 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-bold">
                                    {i + 1}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                                    <p className="text-slate-600">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
