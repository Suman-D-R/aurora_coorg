'use client';

import {
  IconShieldCheck,
  IconClock,
  IconCurrencyDollar,
  IconCreditCard,
  IconSparkles,
  IconMapPin,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };
  const features = [
    {
      icon: IconShieldCheck,
      title: 'Verified Properties',
      description:
        'Every property is personally verified and inspected to ensure quality and safety standards.',
    },
    {
      icon: IconClock,
      title: '24/7 Support',
      description:
        'Round-the-clock customer service to assist you before, during, and after your stay.',
    },
    {
      icon: IconCurrencyDollar,
      title: 'Best Price Guarantee',
      description:
        "Find a lower price elsewhere? We'll match it. Get the best deals for your dream vacation.",
    },
    {
      icon: IconCreditCard,
      title: 'Flexible Cancellation',
      description:
        'Plans change? No worries. Enjoy flexible cancellation policies on most properties.',
    },
    {
      icon: IconSparkles,
      title: 'Premium Amenities',
      description:
        'Experience luxury with high-end amenities, from infinity pools to private chefs.',
    },
    {
      icon: IconMapPin,
      title: 'Prime Locations',
      description:
        'Stay in the most desirable locations worldwide, from beaches to mountains.',
    },
  ];

  return (
    <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Why Choose Aurora Coorg
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            We're committed to making your vacation experience unforgettable
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial='hidden'
          className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className='text-center p-4 sm:p-6 transition-shadow duration-300 bg-gray-50 rounded-lg hover:bg-gray-100'
              >
                <div className='flex justify-center text-black mb-3 sm:mb-4'>
                  <IconComponent className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base'>
                  {feature.title}
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
