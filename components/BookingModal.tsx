import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", duration: 0.5 }}
                        className="relative z-[70] w-full max-w-[650px] max-h-[90vh] bg-white rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-gray-100 rounded-full transition-colors"
                        >
                            <X size={20} className="text-gray-600" />
                        </button>

                        {/* Embed Section */}
                        <section style={{ height: '496px', width: '100%', overflow: 'hidden' }}>
                            <iframe
                                src="https://adplist.org/widgets/booking?src=yugesh-ralli"
                                title="Book a session with Yugesh Ralli on ADPList"
                                width="100%"
                                height="100%"
                                loading="lazy"
                                style={{ border: '0px' }}
                            />
                        </section>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};
