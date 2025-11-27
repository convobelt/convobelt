"use client";

import { Button } from "./ui/Button";
import { Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-slate-50 border-t border-slate-200 pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">
                        Ready to stop unwanted production?
                    </h2>
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
