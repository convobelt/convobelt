"use client";

import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Box, ScanLine } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-white">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-brand-blue text-xs font-mono mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
                        </span>
                        SYSTEM ONLINE
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 mb-6">
                        Eliminate <span className="text-brand-red">&ldquo;Cut Sizes.&rdquo;</span> <br />
                        Take Control of Your Production.
                    </h1>
                    <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        The first intelligent tracking system to bridge the gap between your order plan and the factory floor.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="group">
                            Request a Demo
                            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg">
                            View Documentation
                        </Button>
                    </div>
                </motion.div>

                <div className="relative h-[400px] w-full bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                    {/* Conveyor Belt Animation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        {/* Belt Track */}
                        <div className="absolute w-[120%] h-2 bg-slate-300 rotate-[-15deg] top-1/2 transform -translate-y-1/2" />

                        {/* Moving Items */}
                        {[0, 1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute top-1/2 left-0 p-4 bg-white border border-slate-200 rounded-lg shadow-xl z-10"
                                initial={{ x: -100, y: -50, opacity: 0 }}
                                animate={{
                                    x: ["0%", "400%"],
                                    y: [-50 + (i * 20), 50 + (i * 20)], // Slight perspective shift
                                    opacity: [0, 1, 1, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    delay: i * 1.3,
                                    ease: "linear"
                                }}
                                style={{ rotate: -15 }}
                            >
                                <Box className="text-brand-red w-8 h-8" />
                                <div className="absolute -top-2 -right-2 bg-brand-blue text-[10px] font-mono text-white px-1 rounded">
                                    ID-{100 + i}
                                </div>
                            </motion.div>
                        ))}

                        {/* Scanner Overlay */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                            <motion.div
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="relative"
                            >
                                <ScanLine className="w-32 h-32 text-brand-blue opacity-50" />
                                <div className="absolute inset-0 bg-brand-blue/10 blur-xl" />
                            </motion.div>
                        </div>

                        {/* Data Overlay */}
                        <div className="absolute bottom-4 right-4 font-mono text-xs text-brand-blue bg-white/80 p-2 rounded border border-slate-200 backdrop-blur-sm">
                            <div>STATUS: TRACKING</div>
                            <div>SPEED: 1.2 M/S</div>
                            <div>EFFICIENCY: 98%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
