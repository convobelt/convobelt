"use client";

import { Button } from "./ui/Button";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Ready to stop unwanted production?
                    </h2>
                    <p className="text-lg text-slate-600 mb-8">
                        Talk to the team on WhatsApp, email, or book time to see CONVOBELT in action.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="primary">
                            Contact Sales
                        </Button>
                        <Button size="lg" variant="outline">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Us
                        </Button>
                    </div>
                </div>

                <div className="max-w-3xl mx-auto mb-12">
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 p-4 rounded-xl border border-slate-200 bg-white shadow-sm">
                        <a
                            href="https://wa.me/919605614121"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 hover:border-emerald-300 transition-colors"
                            aria-label="Chat on WhatsApp"
                        >
                            <MessageCircle className="w-5 h-5" />
                            WhatsApp: +91 96056 14121
                        </a>
                        <div className="flex items-center gap-3 text-slate-500">
                            <span className="text-sm">Social</span>
                            <a
                                href="https://www.instagram.com/convobelt/"
                                className="p-2 rounded-full border border-slate-200 hover:border-slate-300 hover:text-slate-900 transition-colors"
                                aria-label="Convobelt on Instagram"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <div className="font-bold text-slate-700">
                        CONVO<span className="text-brand-red">BELT</span>
                    </div>
                    <div>
                        &copy; {new Date().getFullYear()} Convobelt Inc. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
