import React from 'react';
import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';
import { useNavigate } from 'react-router-dom';


const Hero: React.FC = () => {

  const navigate = useNavigate();

  const handleStratPlanning = ()=>{
    navigate('/signup')
  }
  
  return (
    <section className="relative mt-24 mb-16 px-4 pt-8 md:mt-28 md:pt-12 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-purple-100/30 via-transparent to-transparent"></div>
      <div className="container mx-auto relative">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-4xl font-bold leading-tight bg-gradient-to-r from-primary-700 via-purple-700 to-secondary-600 bg-clip-text text-transparent md:text-5xl lg:text-6xl">
            Never Miss a Special Moment
          </h1>
          <p className="mb-8 text-lg text-gray-600 md:text-xl">
            Organize, celebrate, and remember all your family's important occasions
          </p>
          
          <TypingAnimation />
          
          <div className="mt-4">
            <motion.button
              className="rounded-full bg-gradient-to-r from-secondary-500 to-rose-500 px-8 py-3 text-lg font-medium text-white shadow-lg transition-all hover:shadow-xl hover:from-secondary-600 hover:to-rose-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleStratPlanning}
            >
              Start Planning
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;