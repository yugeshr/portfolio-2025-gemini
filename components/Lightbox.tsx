import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface LightboxProps {
    src: string | null;
    alt?: string;
    caption?: string;
    onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ src, alt, caption, onClose }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <AnimatePresence>
            {src && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8"
                    onClick={onClose}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white transition-colors p-2 bg-black/50 rounded-full z-10"
                        onClick={onClose}
                    >
                        <X size={32} />
                    </button>
                    <motion.img
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ duration: 0.3, type: "spring", damping: 25, stiffness: 300 }}
                        src={src}
                        alt={alt || 'Lightbox Image'}
                        className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    />
                    {caption && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-4 text-white/90 text-center text-lg font-medium max-w-3xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {caption}
                        </motion.p>
                    )}
                </motion.div>
            )}
        </AnimatePresence>
    );
};
