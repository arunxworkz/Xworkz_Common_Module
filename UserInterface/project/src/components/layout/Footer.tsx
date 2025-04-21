import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Copyright } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between">
          <motion.div 
            className="mb-4 flex items-center md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail className="mr-2 h-5 w-5 text-primary-600" />
            <a href="mailto:contact@familytime.com" className="text-gray-700 hover:text-primary-600">
              contact@familytime.com
            </a>
          </motion.div>

          <motion.div 
            className="flex items-center text-gray-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Copyright className="mr-1 h-4 w-4" />
            <span>{currentYear} FamilyTime. All rights reserved.</span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;