"use client";

import { motion } from "framer-motion";

const projects = [
    {
        id: 1,
        title: "Global Dream Connect",
        category: "EdTech Platform",
        description: "Built a scalable mentor-student education platform, optimized UI, and automated workflows as VP of Technology.",
        color: "from-blue-500/20 to-cyan-500/20"
    },
    {
        id: 2,
        title: "Health Insurance Prediction",
        category: "Machine Learning",
        description: "Developed a regression model using Python and Scikit-learn to predict insurance costs with high accuracy.",
        color: "from-emerald-500/20 to-teal-500/20"
    },
    {
        id: 3,
        title: "Data Analytics Dashboard",
        category: "Palle Technology Internship",
        description: "Created comprehensive Power BI dashboards and performed analytics using Python and MySQL.",
        color: "from-yellow-500/20 to-orange-500/20"
    }
];

export default function Projects() {
    return (
        <section className="relative min-h-screen bg-[#121212] py-24 px-4 md:px-12 z-20">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent"
                >
                    Selected Works
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className={`relative p-8 rounded-2xl border border-white/10 backdrop-blur-md bg-gradient-to-br ${project.color} hover:border-white/30 transition-all duration-300 group cursor-pointer overflow-hidden`}
                        >
                            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="relative z-10">
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">{project.category}</span>
                                <h3 className="text-2xl font-bold mt-2 mb-3">{project.title}</h3>
                                <p className="text-gray-300 leading-relaxed">{project.description}</p>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">
                                    →
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
