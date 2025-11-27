"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/Button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const prefix = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const navLinks = [
        { name: "Problem", href: "#problem" },
        { name: "Solution", href: "#solution" },
        { name: "Features", href: "#features" },
        { name: "Contact", href: "#contact" },
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                        src={`${prefix}/logo.png`}
                        alt="Convobelt Logo"
                        width={150}
                        height={40}
                        className="h-8 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Navigation */}
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

                <div className="hidden md:flex items-center gap-4">
                    <Button variant="primary" size="sm">
                        Request Demo
                    </Button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600 hover:text-slate-900"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden border-t border-slate-200 bg-white"
                >
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-slate-600 hover:text-slate-900 py-2"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Button variant="primary" size="sm" className="w-full mt-2">
                            Request Demo
                        </Button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
}
