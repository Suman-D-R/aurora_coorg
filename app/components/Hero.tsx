'use client';

import { IconArrowDown, IconShieldCheck } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <div className='absolute inset-0 bg-black/50 z-10'></div>
        <div
          className='w-full h-full bg-cover bg-center bg-no-repeat'
          style={{
            backgroundImage: `url('/images/aurora-hero-bg.webp')`,
          }}
        ></div>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'
      >
        <motion.h1
          className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Your Dream Vacation
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2'>
            Starts Here
          </span>
        </motion.h1>

        <motion.p
          className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          Experience the perfect blend of comfort and nature in Coorg&apos;s
          most loved homestay
        </motion.p>

        {/* Book Now Button */}
        <motion.div
          className='flex justify-center mb-8 sm:mb-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <button
            onClick={scrollToBooking}
            className='bg-gradient-to-r overflow-hidden relative from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            <span className='shimmer'></span>
            Book Now
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          className='grid grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 max-w-4xl mx-auto'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className='text-center'>
            <div className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2'>
              1K+
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              Happy Reviews
            </div>
          </div>
          <div className='text-center'>
            <div className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center justify-center gap-1'>
              4.9★
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              Guest Rating
            </div>
          </div>
          <div className='text-center'>
            <div className='text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center justify-center'>
              <IconShieldCheck className='w-6  h-6 sm:w-10 sm:h-10 text-white' />
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              24/7 Support
            </div>
          </div>
        </motion.div>
      </div>

      {/* Shape Divider */}
      <div className='absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='relative block w-full h-[60px] sm:h-[80px] md:h-[100px] rotate-180'
        >
          <path
            d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
            opacity='.25'
            className='fill-white'
          ></path>
          <path
            d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
            opacity='.5'
            className='fill-white'
          ></path>
          <path
            d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
            className='fill-white'
          ></path>
        </svg>
      </div>
    </section>
  );
}
