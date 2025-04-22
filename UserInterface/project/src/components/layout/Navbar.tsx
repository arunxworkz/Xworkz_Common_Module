import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          {location.pathname !== '/signup' && (
            <Link to="/signup">
              <motion.button
                className="rounded-full bg-gradient-to-r from-primary-600 to-purple-600 px-6 py-2 text-sm font-medium text-white shadow-lg transition-all hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </motion.button>
            </Link>
          )}
        </div>

        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
        >
          <CalendarDays className="h-8 w-8 text-secondary-500" />
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-primary-700 to-purple-700 bg-clip-text text-transparent">
            FamilyTime
          </span>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
