'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const galleryImages = [
    {
      src: '/images/aurora-room-1.webp',
      alt: 'Luxury Room 1',
      title: 'Premium Room',
    },
    {
      src: '/images/aurora-villa.webp',
      alt: 'Villa Exterior',
      title: 'Full Villa',
    },
    {
      src: '/images/aurora-room-3.webp',
      alt: 'Luxury Room 3',
      title: 'Deluxe Room',
    },
    {
      src: '/images/aurora-room-4.webp',
      alt: 'Luxury Room 4',
      title: 'Executive Room',
    },
    {
      src: '/images/aurora-cottage.webp',
      alt: 'Cottage View',
      title: 'Cozy Cottage',
    },
    {
      src: '/images/aurora-hero-bg.webp',
      alt: 'Property Overview',
      title: 'Property View',
    },
  ];

  return (
    <section ref={ref} className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Gallery
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            Take a visual journey through our beautiful property and see what
            makes TravellersEscape Aurora Coorg special
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className='relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <div className='relative h-48 sm:h-64 md:h-72'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className='object-cover group-hover:scale-105 transition-transform duration-300'
                />
                <div className='absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300'></div>
                <div className='absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                  <h3 className='text-white font-semibold text-sm sm:text-base'>
                    {image.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className='text-center mt-8 sm:mt-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='text-gray-600 text-sm sm:text-base mb-4'>
            Ready to experience this beauty in person?
          </p>
          <button
            onClick={() => {
              const bookingSection = document.getElementById('booking');
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className='bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg transition-all duration-300 shadow-lg hover:shadow-xl'
          >
            Book Your Stay Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
