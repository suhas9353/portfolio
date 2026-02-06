"use client";

import { motion } from "framer-motion";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md bg-black/30 border-b border-white/10"
        >
            <div className="text-xl font-bold tracking-tighter">
                SUHAS<span className="text-gray-400"> B S</span>
            </div>

            <div className="flex gap-8 text-sm font-medium text-gray-300">
                <button
                    onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                    className="hover:text-white transition-colors"
                >
                    Work
                </button>
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
        </motion.nav>
    );
}
