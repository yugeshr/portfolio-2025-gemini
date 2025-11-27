import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

import { cn } from '../lib/utils';

// Local gallery images
const GALLERY_IMAGES = [
    '/portfolio-2025-gemini/images/gallery/photo-1.png',
    '/portfolio-2025-gemini/images/gallery/photo-2.jpg',
    '/portfolio-2025-gemini/images/gallery/photo-3.jpg',
    '/portfolio-2025-gemini/images/gallery/photo-4.jpg',
    '/portfolio-2025-gemini/images/gallery/photo-5.png',
    '/portfolio-2025-gemini/images/gallery/photo-6.png',
    '/portfolio-2025-gemini/images/gallery/photo-7.png',
    '/portfolio-2025-gemini/images/gallery/photo-8.png',
    '/portfolio-2025-gemini/images/gallery/photo-9.png',
    '/portfolio-2025-gemini/images/gallery/photo-10.png',
    '/portfolio-2025-gemini/images/gallery/photo-11.png',
    '/portfolio-2025-gemini/images/gallery/photo-12.png',
    '/portfolio-2025-gemini/images/gallery/photo-13.png',
    '/portfolio-2025-gemini/images/gallery/photo-14.jpg',
];

// Generate 15 items for a 3x5 grid (3 rows, 5 columns)
// We have 14 gallery images + 1 hero image = 15 total slots.
const HERO_INDEX = 7; // Index 7 is (Row 2, Col 3) in a 3x5 grid

const gridItems = Array.from({ length: 15 }).map((_, i) => {
    // Map 14 images to the 14 non-hero slots sequentially
    const imgIndex = i < HERO_INDEX ? i : i - 1;

    return {
        id: i,
        image: GALLERY_IMAGES[imgIndex % GALLERY_IMAGES.length],
        color: [
            'bg-amber-500', 'bg-rose-500', 'bg-emerald-500', 'bg-sky-500',
            'bg-violet-500', 'bg-fuchsia-500', 'bg-orange-500', 'bg-teal-500'
        ][i % 8]
    };
});

const InteractiveGrid: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // --- Animation Physics ---

    // 1. Text Animation: Fades out and floats up quickly
    const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const textScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
    const textY = useTransform(scrollYProgress, [0, 0.2], [0, -60]);

    // 2. Hero Image Animation: The "Anti-gravity" anchor
    // Scales from covering the viewport (6.5x) down to its grid cell (1x)
    const heroScale = useTransform(scrollYProgress, [0, 0.9], [6.5, 1]);
    const heroRadius = useTransform(scrollYProgress, [0.1, 0.9], ["0px", "24px"]);

    // 3. Neighbors Animation: Float in from below (Anti-gravity effect)
    // They start lower (y: 150) and smaller (scale: 0.8) and float into place
    const neighborsOpacity = useTransform(scrollYProgress, [0.3, 0.85], [0, 1]);
    const neighborsY = useTransform(scrollYProgress, [0.3, 0.85], [150, 0]);
    const neighborsScale = useTransform(scrollYProgress, [0.3, 0.85], [0.8, 1]);

    return (
        <div ref={containerRef} className="relative h-[400vh] w-full bg-brand-dark">

            {/* Sticky Viewport Container */}
            <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">

                {/* Main Title Text */}
                <motion.div
                    style={{ opacity: textOpacity, scale: textScale, y: textY }}
                    className="absolute z-[60] text-center px-4 pointer-events-none mix-blend-difference"
                >
                    <h1 className="text-6xl md:text-9xl font-extrabold tracking-tighter text-white mb-6 drop-shadow-2xl">
                        Inspired by<br />discovery.
                    </h1>
                    <p className="text-xl md:text-2xl font-medium text-white/90">
                        Scroll to explore the collection
                    </p>
                </motion.div>

                {/* Grid Container */}
                {/* Using max-w-[1400px] to ensure items don't get too large on ultrawide screens */}
                <div className="relative z-10 w-full max-w-[1400px] px-4 md:px-8 flex items-center justify-center">

                    {/* 
            Grid System:
            - 3 rows x 5 columns
            - aspect-[5/3] ensures the grid itself matches the ratio of 5 columns / 3 rows, keeping items square
          */}
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-3 md:gap-5 w-full aspect-[3/5] md:aspect-[5/3]">
                        {gridItems.map((item, i) => {
                            if (i === HERO_INDEX) {
                                return (
                                    <HeroItem
                                        key={item.id}
                                        scale={heroScale}
                                        borderRadius={heroRadius}
                                    />
                                );
                            }

                            return (
                                <motion.div
                                    key={item.id}
                                    style={{
                                        opacity: neighborsOpacity,
                                        y: neighborsY,
                                        scale: neighborsScale
                                    }}
                                    className="relative w-full h-full rounded-xl md:rounded-3xl overflow-hidden bg-neutral-900 shadow-lg"
                                >
                                    <img
                                        src={item.image}
                                        alt="Grid item"
                                        className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-105 transition-all duration-500 ease-out"
                                    />
                                    {/* Color tint overlay for cohesive look */}
                                    <div className={cn("absolute inset-0 opacity-10 mix-blend-overlay", item.color)} />
                                </motion.div>
                            );
                        })}

                    </div >
                </div >

            </div >
        </div >
    );
};

interface HeroItemProps {
    scale: MotionValue<number>;
    borderRadius: MotionValue<string>;
}

const HeroItem: React.FC<HeroItemProps> = ({ scale, borderRadius }) => {
    return (
        <motion.div
            style={{
                scale,
                zIndex: 50,
                borderRadius
            }}
            className="relative w-full h-full shadow-2xl origin-center z-50 overflow-hidden"
        >
            <div className="w-full h-full overflow-hidden bg-[#FFD700] relative">
                <img
                    src="/portfolio-2025-gemini/images/gallery/hero.png"
                    alt="Hero"
                    className="w-full h-full object-cover"
                />
                {/* Subtle inner shadow/highlight for depth */}
                <div className="absolute inset-0 ring-1 ring-white/10" />
            </div>
        </motion.div>
    );
};

export default InteractiveGrid;
