"use client";

import { motion } from "framer-motion";
import { Boxes, Filter, ScanLine, ShieldCheck } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        {
            title: "Pair Scanning Capability",
            desc: "Barcode scanning keeps components matched and traceable throughout the production process.",
            icon: ScanLine,
            color: "text-brand-red",
            bg: "bg-brand-red/10"
        },
        {
            title: "Real-Time Inventory Management",
            desc: "Material stocks update dynamically to prevent shortages and keep production flowing.",
            icon: Boxes,
            color: "text-emerald-500",
            bg: "bg-emerald-500/10"
        },
        {
            title: "Quality Control Modules",
            desc: "Embedded checks ensure products meet stringent standards before moving forward.",
            icon: ShieldCheck,
            color: "text-brand-blue",
            bg: "bg-brand-blue/10"
        },
        {
            title: "FG Management with Advanced Filtering",
            desc: "Track finished goods in and out, with size and colour filters for precise oversight.",
            icon: Filter,
            color: "text-indigo-400",
            bg: "bg-indigo-400/10"
        }
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        Platform Features
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Built for modern production teams that need speed, traceability, and control.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {features.map((feature, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all duration-300 hover:-translate-y-1 shadow-sm hover:shadow-md"
                        >
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-b from-white to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

                            <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                <feature.icon className={`w-7 h-7 ${feature.color}`} />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
