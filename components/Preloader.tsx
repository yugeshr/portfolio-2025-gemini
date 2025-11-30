import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const greetings = [
    { text: 'Hello', lang: 'English' },
    { text: 'வணக்கம்', lang: 'Tamil' },
    { text: 'నమస్కారం', lang: 'Telugu' },
    { text: 'नमस्ते', lang: 'Hindi' },
];

export const Preloader: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [currentGreeting, setCurrentGreeting] = useState(0);

    useEffect(() => {
        // Cycle through greetings
        const greetingInterval = setInterval(() => {
            setCurrentGreeting((prev) => (prev + 1) % greetings.length);
        }, 800); // Change greeting every 800ms

        // Hide preloader after 3.2 seconds (4 greetings × 800ms)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 3200);

        return () => {
            clearInterval(greetingInterval);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ y: 0 }}
                    exit={{ y: '-100%' }}
                    transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                    className="fixed inset-0 z-[200] bg-background flex items-center justify-center"
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentGreeting}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-center"
                        >
                            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                                {greetings[currentGreeting].text}
                            </h1>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
