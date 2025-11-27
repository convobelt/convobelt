"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClientsSection() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const clients = [
        { name: "Stylo Group", logo: `${prefix}/client-stylo.png`, width: 180, height: 60 },
        { name: "Jogger Footwear", logo: `${prefix}/client-jogger.png`, width: 140, height: 50 },
    ];

    return (
        <section className="py-12 bg-slate-50 border-y border-slate-200">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
                        Trusted by Industry Leaders
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-80">
                    {clients.map((client, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2, duration: 0.5 }}
                            className="grayscale hover:grayscale-0 transition-all duration-500 opacity-70 hover:opacity-100"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} logo`}
                                width={client.width}
                                height={client.height}
                                className="h-12 w-auto object-contain"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
