import React from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../constants';

export const Clients: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-background relative z-20">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 opacity-60 hover:opacity-100 transition-opacity duration-500">
          {CLIENTS.map((client, index) => (
             <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="grayscale hover:grayscale-0 transition-all duration-300"
             >
                {/* 
                  Using text as fallback since external SVGs might break or have CORS issues in this demo environment. 
                  In a real app, <img src={client.logo} /> would be used.
                */}
                <span className="text-xl md:text-2xl font-bold font-serif text-zinc-400 hover:text-white cursor-default">
                    {client.name}
                </span>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};