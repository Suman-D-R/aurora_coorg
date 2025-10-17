'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { IconClock, IconPercentage, IconX } from '@tabler/icons-react';

const CancellationPolicy = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const policyItems = [
    {
      icon: IconPercentage,
      title: '72+ Hours Before Check-in',
      description: '100% Refund',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      icon: IconClock,
      title: '72 to 24 Hours Before Check-in',
      description: '50% Refund',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
    },
    {
      icon: IconX,
      title: 'Less than 24 Hours Before Check-in',
      description: 'No Refund',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
    },
  ];

  return (
    <section ref={ref} className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Cancellation Policy
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            We understand that plans can change. Here's our flexible
            cancellation policy to give you peace of mind.
          </p>
        </motion.div>

        {/* Policy Items */}
        <motion.div
          className='space-y-4 sm:space-y-6'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {policyItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className={`${item.bgColor} ${item.borderColor} border rounded-lg p-4 sm:p-6`}
                initial='hidden'
                animate={isInView ? 'visible' : 'hidden'}
                variants={fadeUpVariant}
                transition={{
                  duration: 0.8,
                  delay: 0.1 * index,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
              >
                <div className='flex items-start gap-4'>
                  <div className={`${item.color} flex-shrink-0 mt-1`}>
                    <IconComponent className='w-6 h-6 sm:w-8 sm:h-8' />
                  </div>
                  <div className='flex-1'>
                    <h3 className='font-semibold text-gray-900 mb-2 text-sm sm:text-base'>
                      {item.title}
                    </h3>
                    <p className={`${item.color} font-bold text-lg sm:text-xl`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className='mt-8 sm:mt-12 bg-gray-50 rounded-lg p-4 sm:p-6'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className='font-semibold text-gray-900 mb-3 text-sm sm:text-base'>
            Important Notes:
          </h3>
          <ul className='space-y-2 text-sm text-gray-600'>
            <li className='flex items-start'>
              <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
              All cancellation requests must be made in writing via WhatsApp or
              email
            </li>
            <li className='flex items-start'>
              <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
              Refunds will be processed within 5-7 business days
            </li>
            <li className='flex items-start'>
              <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
              No-show guests will be charged the full amount
            </li>
            <li className='flex items-start'>
              <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
              Special events or peak season bookings may have different
              cancellation terms
            </li>
          </ul>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className='text-center mt-6 sm:mt-8'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='text-gray-600 text-sm sm:text-base mb-4'>
            Need to cancel or have questions about our policy?
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center'>
            <a
              href='https://wa.me/919364030566'
              target='_blank'
              rel='noopener noreferrer'
              className='bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              WhatsApp Us
            </a>
            <a
              href='tel:+919364030566'
              className='bg-gray-900 hover:bg-black text-white font-semibold px-6 py-3 rounded-lg text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
            >
              Call Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CancellationPolicy;
