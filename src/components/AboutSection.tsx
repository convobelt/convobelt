"use client";

import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Users } from "lucide-react";

export default function AboutSection() {
    const highlights = [
        {
            title: "Order tracking & planning",
            desc: "A suite built for efficient order tracking, production scheduling, and machine allocation in one place.",
            icon: LineChart
        },
        {
            title: "Real-time insight",
            desc: "Live visibility that lifts productivity and operational transparency across the factory floor.",
            icon: Users
        },
        {
            title: "Security & roles",
            desc: "Role management and safeguards that let teams focus on delivering quality products efficiently.",
            icon: ShieldCheck
        }
    ];

    return (
        <section id="about" className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-semibold text-brand-blue uppercase tracking-widest mb-3">
                        About Convobelt
                    </p>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6">
                        A transformative production management platform.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        CONVOBELT integrates advanced technologies with user-centric design to deliver a comprehensive set of tools
                        for production and planning. Track orders, schedule production, and allocate machines with confidence.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        Our mission is to empower manufacturers with real-time insights and control over their operations while
                        keeping security and user role management at the core—so teams can focus on building quality products,
                        efficiently.
                    </p>
                </motion.div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {highlights.map((item, i) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-10 h-10 rounded-lg bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                                <item.icon className="w-5 h-5" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                            <p className="text-slate-600">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
