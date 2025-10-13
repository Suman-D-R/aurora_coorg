'use client';

import { IconArrowDown, IconShieldCheck } from '@tabler/icons-react';

export default function Hero() {
  const scrollToBooking = () => {
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }
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
      <div className='relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight'>
          Your Dream Vacation
          <span className='block text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-2'>
            Starts Here
          </span>
        </h1>
        <p className='text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-2'>
          Experience the perfect blend of comfort and nature in Coorg&apos;s
          most loved homestay
        </p>

        {/* Book Now Button */}
        <div className='flex justify-center mb-8 sm:mb-12'>
          <button
            onClick={scrollToBooking}
            className='bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-bold px-8 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl'
          >
            Book Now
          </button>
        </div>

        {/* Stats */}
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 md:gap-12 mt-12 sm:mt-16 max-w-4xl mx-auto'>
          <div className='text-center'>
            <div className='text-3xl sm:text-2xl md:text-3xl font-semibold text-white mb-2'>
              1K+
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              Happy Reviews
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center justify-center gap-1'>
              4.9★
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              Guest Rating
            </div>
          </div>
          <div className='text-center'>
            <div className='text-3xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 flex items-center justify-center'>
              <IconShieldCheck className='w-8 h-8 sm:w-10 sm:h-10 text-white' />
            </div>
            <div className='text-sm sm:text-base text-gray-200 font-medium'>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce'>
        <IconArrowDown
          className='w-5 h-5 sm:w-6 sm:h-6 text-white'
          stroke={2}
        />
      </div>
    </section>
  );
}
