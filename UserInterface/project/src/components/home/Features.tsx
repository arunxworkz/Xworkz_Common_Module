import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bell, Users, Gift } from 'lucide-react';

const features = [
  {
    id: 1,
    icon: <Calendar className="h-10 w-10 text-purple-600" />,
    title: 'Event Calendar',
    description: 'Visualize all your family events in a beautiful, easy-to-navigate calendar view.'
  },
  {
    id: 2,
    icon: <Bell className="h-10 w-10 text-rose-500" />,
    title: 'Smart Reminders',
    description: 'Never miss an important event with customizable reminders and notifications.'
  },
  {
    id: 3,
    icon: <Users className="h-10 w-10 text-accent-600" />,
    title: 'Family Sharing',
    description: 'Collaborate with family members to plan and organize events together.'
  },
  {
    id: 4,
    icon: <Gift className="h-10 w-10 text-secondary-500" />,
    title: 'Gift Registry',
    description: 'Create wish lists and gift registries for birthdays and special occasions.'
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold bg-gradient-to-r from-primary-700 to-purple-700 bg-clip-text text-transparent md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Key Features
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;