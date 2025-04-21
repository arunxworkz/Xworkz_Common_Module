import React from 'react';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 via-purple-600 to-secondary-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-white/10 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 text-center relative">
        <motion.h2 
          className="mb-6 text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Start Celebrating Together
        </motion.h2>
        <motion.p 
          className="mb-8 mx-auto max-w-2xl text-lg text-white/90"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Join thousands of families who use FamilyTime to stay connected and celebrate life's special moments together.
        </motion.p>
        <motion.button
          className="rounded-full bg-white px-8 py-3 text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600 shadow-lg transition-all hover:shadow-xl border-2 border-white/20 hover:border-white/40"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Get Started For Free
        </motion.button>
      </div>
    </section>
  );
};

export default CallToAction;