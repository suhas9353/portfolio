"use client";

export default function Contact() {
    return (
        <footer id="contact" className="relative z-20 bg-[#0a0a0a] py-32 px-6 border-t border-white/10">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
                    Ready to analyze <br /> the future?
                </h2>
                <p className="text-gray-400 mb-12 text-lg">
                    Seeking Data Analyst roles. Available for immediate joining.
                </p>
                <a
                    href="mailto:suhasbs9353@gmail.com"
                    className="inline-block px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                >
                    suhasbs9353@gmail.com
                </a>

                <div className="mt-24 flex justify-between text-sm text-gray-600">
                    <span>© 2026 Suhas B S</span>
                    <div className="flex gap-4">
                        <a href="https://linkedin.com/in/suhas-bs-4aa13b251" target="_blank" className="hover:text-white transition-colors">LinkedIn</a>
                        <a href="#" className="hover:text-white transition-colors">GitHub</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
