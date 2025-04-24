import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FAMILY_OCCASIONS } from '../../constants';

const TypingAnimation: React.FC<{ onWordChange: (image: string) => void }> = ({ onWordChange }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const typingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const typingDelay = 120;
  const pauseBetweenWords = 1500;

  useEffect(() => {
    const currentOccasion = FAMILY_OCCASIONS[currentIndex];
    const word = currentOccasion?.title || '';
    let i = 0;

    setCurrentText('');
    onWordChange(currentOccasion.image); // set image immediately when word starts

    typingIntervalRef.current = setInterval(() => {
      setCurrentText(word.slice(0, i + 1));
      i++;
      if (i >= word.length) {
        clearInterval(typingIntervalRef.current!);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % FAMILY_OCCASIONS.length);
        }, pauseBetweenWords);
      }
    }, typingDelay);

    return () => clearInterval(typingIntervalRef.current!);
  }, [currentIndex, onWordChange]);

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
      <div className="mt-2 h-10 text-2xl font-bold text-primary-700 md:text-4xl">
        <span>{currentText}</span>
      </div>
      <h2 className="mt-4 text-xl font-medium text-gray-600 md:text-2xl">
        all in one place
      </h2>
    </motion.div>
  );
};

export default TypingAnimation;
