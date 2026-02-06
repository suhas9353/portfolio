"use client";

import { useScroll, useTransform, motion } from "framer-motion";

export default function Overlay() {
    const { scrollYProgress } = useScroll();

    // Opacity transforms
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [0, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    const opacity2 = useTransform(scrollYProgress, [0.25, 0.35, 0.45], [0, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.45], [50, -50]);

    const opacity3 = useTransform(scrollYProgress, [0.55, 0.65, 0.75], [0, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.75], [50, -50]);

    return (
        <div className="fixed inset-0 pointer-events-none z-10 flex flex-col justify-center text-white mix-blend-difference">
            {/* Section 1: Center */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-center p-8 text-center"
            >
                <div>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">My Name</h1>
                    <p className="text-xl md:text-2xl mt-4 font-light text-gray-300">Creative Developer.</p>
                </div>
            </motion.div>

            {/* Section 2: Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-12 md:p-24"
            >
                <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                    I build digital <br />
                    <span className="text-blue-400">experiences.</span>
                </h2>
            </motion.div>

            {/* Section 3: Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-12 md:p-24 text-right"
            >
                <h2 className="text-4xl md:text-6xl font-bold max-w-2xl leading-tight">
                    Bridging design <br />
                    and <span className="text-purple-400">engineering.</span>
                </h2>
            </motion.div>
        </div>
    );
}
