import React from 'react';
import { motion } from 'framer-motion';
import InteractiveGrid from './InteractiveGrid';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-32 relative bg-background min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">

        {/* Top Section: Bio & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center mb-32">

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest block mb-6">
              About Me
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-10 leading-tight text-primary">
              Designer, Engineer <br />
              <span className="italic text-brand">Traveler & Gamer.</span>
            </h2>

            <div className="space-y-8 text-secondary text-lg md:text-xl font-light leading-relaxed max-w-2xl">
              <h3 className="text-white font-medium text-2xl">
                Design isn’t just about pixels and trends. It’s about understanding people, their needs, and how they interact with technology.
              </h3>
              <p>
                I’m a Senior Product Designer with 5 years of experience creating clean, intuitive interfaces that make complex ideas simple and people’s lives easier.
              </p>
              <p>
                I thrive on problem-solving, collaboration, and continuous learning, with the goal of crafting seamless, enjoyable, and impactful experiences—whether refining existing products or building them from the ground up.
              </p>
            </div>
          </motion.div>

          {/* Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
            whileInView={{
              opacity: 1,
              scale: 1,
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
            }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 relative group">
              {/* Color Image (Reveals on hover) */}
              <img
                src="/images/profile-color.jpg"
                alt="Yugesh Ralli - Senior Product Designer specializing in Enterprise UX and Design Systems"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
              />

              {/* B&W Image (Default) */}
              <img
                src="/images/profile-bw.jpg"
                alt="Yugesh Ralli - Product Designer portrait in black and white"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Away from Keyboard */}
        {/* <InteractiveGrid /> */}

      </div>
    </section>
  );
};