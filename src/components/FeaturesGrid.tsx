"use client";

import { motion } from "framer-motion";
import { ClipboardList, Activity, PackageCheck } from "lucide-react";

export default function FeaturesGrid() {
    const features = [
        {
            title: "Intelligent Order Planning",
            desc: "Stop letting machinery dictate output. Produce based on real orders.",
            icon: ClipboardList,
            color: "text-emerald-400",
            bg: "bg-emerald-400/10"
        },
        {
            title: "Real-Time Tracing",
            desc: "Track the lifecycle of every item on the belt against mold availability.",
            icon: Activity,
            color: "text-brand-blue",
            bg: "bg-brand-blue/10"
        },
        {
            title: "Sorting Logistics",
            desc: "Digitized sorting ensures the right shoe goes to the right box, eliminating manual errors.",
            icon: PackageCheck,
            color: "text-brand-red",
            bg: "bg-brand-red/10"
        }
    ];

    return (
        <section id="features" className="py-24 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                        System Capabilities
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Built for the modern factory floor.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
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
