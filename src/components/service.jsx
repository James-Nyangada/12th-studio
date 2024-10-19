import React from 'react';
import { motion } from 'framer-motion';

const ServiceCard = ({ title, image }) => (
  <motion.div
    className="relative overflow-hidden rounded-lg cursor-pointer"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <img src={image} alt={title} className="w-full h-64 object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
      <motion.h3 
        className="text-white text-xl font-semibold"
        whileHover={{ textDecoration: 'underline' }}
        transition={{ duration: 0.3 }}
      >
        {title}
        <motion.span
          className="ml-2"
          initial={{ x: 0 }}
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          →
        </motion.span>
      </motion.h3>
    </div>
  </motion.div>
);

const ServicesSection = () => {
  return (
    <section className="bg-[#f8f5f1] py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard 
            title="Social Media Management" 
            image="/image_3.webp" 
          />
          <ServiceCard 
            title="Consultancy" 
            image="/image_1.webp" 
          />
          <ServiceCard 
            title="Coaching & Training" 
            image="/management.webp" 
          />
        </div>
        <div className="mt-12 text-center">
        <a href='/contact'>
          <motion.button
              className="bg-[#e67e22] text-white px-8 py-3 rounded-full text-lg font-semibold"
              whileHover={{ scale: 1.05, backgroundColor: '#d35400' }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get in touch
            </motion.button>
        </a>
          
        </div>
      </div>
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 bg-white" 
        style={{
          borderTopLeftRadius: '50% 100%',
          borderTopRightRadius: '50% 100%'
        }}
      ></div>
    </section>
  );
};

export default ServicesSection;