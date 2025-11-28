"use client";

import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Users } from "lucide-react";

export default function AboutSection() {
    const highlights = [
        {
            title: "Order-aware execution",
            desc: "Track every order, schedule, and machine allocation in one place so production always follows the plan.",
            icon: LineChart
        },
        {
            title: "Real-time control",
            desc: "Give teams live visibility into belt activity, stock positions, and finished goods without chasing spreadsheets.",
            icon: Users
        },
        {
            title: "Secure by design",
            desc: "Role-based access keeps sensitive operations safe while letting every contributor move quickly.",
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
                        A production management platform built to end guesswork.
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                        CONVOBELT brings together advanced scanning, planning, and machine coordination so factories can operate
                        with real-time insight. From efficient order tracking and production scheduling to machine allocation, the
                        platform gives manufacturers the control and transparency needed to deliver quality products efficiently.
                    </p>
                    <p className="text-lg text-slate-600 leading-relaxed">
                        We pair user-centric design with strict security and role management, letting teams focus on making and
                        moving the right goods instead of reconciling data.
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
