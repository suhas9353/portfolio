"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="relative bg-[#121212] py-24 px-4 md:px-12 z-20 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                >
                    About Me
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-6"
                >
                    <p>
                        I am a passionate <strong>Data Analyst</strong> and <strong>Machine Learning Enthusiast</strong> with a knack for transforming complex datasets into actionable insights.
                        With a strong foundation in building scalable platforms and interactive dashboards, I help organizations make data-driven decisions.
                    </p>
                    <p>
                        My expertise spans across complete data pipelines — from data collection and cleaning to advanced modeling and visualization.
                        I love solving challenging problems and am constantly exploring the latest in AI and data science.
                    </p>
                    <p>
                        When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
