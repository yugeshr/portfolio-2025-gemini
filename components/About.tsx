import React from 'react';
import { motion, Variants } from 'framer-motion';
import { PERSONAL_GALLERY } from '../constants';

export const About: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
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
              <span className="italic text-zinc-400">Traveler & Gamer.</span>
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-900 border border-white/5 relative group">
              {/* Color Image (Reveals on hover) */}
              <img
                src="/portfolio-2025-gemini/images/profile-color.jpg"
                alt="Yugesh Ralli"
                className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"
              />

              {/* B&W Image (Default) */}
              <img
                src="/portfolio-2025-gemini/images/profile-bw.jpg"
                alt="Yugesh Ralli"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Bottom Section: Away from Keyboard */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-t border-white/5 pt-24"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">When I'm away from keyboard</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {PERSONAL_GALLERY.map((photo, index) => (
              <motion.div
                key={photo.id}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
                }}
                className={`relative rounded-xl overflow-hidden aspect-[3/4] ${index % 2 === 0 ? 'mt-0' : 'mt-8'}`}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <span className="text-xs text-white/90 font-medium">{photo.alt}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};