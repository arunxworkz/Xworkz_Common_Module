import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import { motion } from 'framer-motion';
import { FAMILY_OCCASIONS } from '../../constants';

const TypingAnimation: React.FC = () => {
  return (
    <motion.div
      className="mb-12 h-24 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-xl font-medium text-gray-600 md:text-2xl">
        Your family's
      </h2>
      <div className="mt-2 h-12 text-2xl font-bold text-primary-700 md:text-4xl">
        <ReactTypingEffect
          text={FAMILY_OCCASIONS.map((occasion) => occasion.title)}
          speed={100}
          eraseSpeed={100}
          typingDelay={500}
          eraseDelay={2000}
          className="inline"
        />
      </div>
      <h2 className="mt-4 text-xl font-medium text-gray-600 md:text-2xl">
        all in one place
      </h2>
    </motion.div>
  );
};

export default TypingAnimation;