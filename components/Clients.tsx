import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CLIENTS } from '../constants';

const ClientLogo = ({ name, logo }: { name: string; logo?: string }) => {
  const [error, setError] = useState(false);

  if (!logo || error) {
    return (
      <span className="text-3xl md:text-4xl font-bold font-serif text-zinc-400 group-hover:text-white cursor-default transition-colors duration-300 whitespace-nowrap">
        {name}
      </span>
    );
  }

  return (
    <img
      src={logo}
      alt={`${name} - Client company logo`}
      loading="lazy"
      className="h-20 md:h-24 w-auto object-contain brightness-0 invert opacity-50 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-all duration-300"
      onError={() => setError(true)}
    />
  );
};

export const Clients: React.FC = () => {
  return (
    <section className="py-12 border-b border-white/5 bg-background relative z-20 overflow-hidden">
      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {/* First set of logos */}
        <div className="flex items-center gap-16 md:gap-40 min-w-full justify-around px-8 shrink-0">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={`${client.name}-1`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative flex items-center justify-center"
            >
              <ClientLogo name={client.name} logo={client.logo} />
            </motion.div>
          ))}
        </div>
        {/* Second set of logos for seamless scrolling */}
        <div className="flex items-center gap-16 md:gap-40 min-w-full justify-around px-8 shrink-0">
          {CLIENTS.map((client, index) => (
            <motion.div
              key={`${client.name}-2`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative flex items-center justify-center"
            >
              <ClientLogo name={client.name} logo={client.logo} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};