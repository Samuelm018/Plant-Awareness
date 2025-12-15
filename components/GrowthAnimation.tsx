"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/growth-process/growth_stage_1_seed_1765729621048.png",
    "/images/growth-process/growth_stage_2_sprout_1765729640357.png",
    "/images/growth-process/growth_stage_3_seedling_1765729662522.png",
    "/images/growth-process/growth_stage_4_sapling_1765729685875.png",
    "/images/growth-process/growth_stage_5_young_tree_1765729712501.png",
    "/images/growth-process/growth_stage_6_mature_tree_1765729732267.png",
];

const captions = [
    "It starts with a seed...",
    "Life breaks through...",
    "Reaching for the sun...",
    "Growing stronger...",
    "Taking shape...",
    "A legacy for the future.",
];

export default function GrowthAnimation() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 2000); // Change image every 2 seconds

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full max-w-2xl mx-auto text-center">
            <div className="relative h-96 w-full mb-8 rounded-3xl overflow-hidden shadow-2xl bg-white/50 backdrop-blur-sm border border-white/20">
                {images.map((src, index) => (
                    <motion.div
                        key={src}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                        className="absolute inset-0 flex items-center justify-center p-8"
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={src}
                                alt={`Growth stage ${index + 1}`}
                                fill
                                className="object-contain"
                                priority={index === 0}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="h-8 overflow-hidden relative">
                {captions.map((caption, index) => (
                    index === currentIndex && (
                        <motion.p
                            key={caption}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: -20, opacity: 0 }}
                            className="text-xl md:text-2xl font-medium text-green-800 absolute w-full left-0 top-0"
                        >
                            {caption}
                        </motion.p>
                    )
                ))}
            </div>

            <div className="flex justify-center gap-2 mt-6">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-green-600 w-8" : "bg-green-200 hover:bg-green-400"
                            }`}
                        aria-label={`Go to stage ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
