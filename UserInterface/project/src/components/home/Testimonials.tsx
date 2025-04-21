import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    content: "FamilyTime has completely transformed how our family stays connected. We never miss birthdays or anniversaries anymore!",
    name: "Sarah Johnson",
    role: "Mother of three"
  },
  {
    id: 2,
    content: "Planning our family reunion was so easy with FamilyTime. Everyone could contribute ideas and keep track of events.",
    name: "Michael Rodriguez",
    role: "Family organizer"
  },
  {
    id: 3,
    content: "As someone living abroad, this platform helps me stay connected to family events back home. I feel included despite the distance.",
    name: "Emma Chen",
    role: "Expat family member"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-primary-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="mb-12 text-center text-3xl font-bold text-primary-800 md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          What Families Say
        </motion.h2>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="rounded-lg bg-white p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <p className="mb-4 text-gray-600 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold text-primary-700">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;