"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";

export default function Navbar() {
    const navLinks = [
        { name: "Problem", href: "#problem" },
        { name: "Solution", href: "#solution" },
        { name: "Features", href: "#features" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.png"
                        alt="Convobelt Logo"
                        width={150}
                        height={40}
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4">
                    <Button variant="primary" size="sm">
                        Request Demo
                    </Button>
                </div>
            </div>
        </motion.header>
    );
}
