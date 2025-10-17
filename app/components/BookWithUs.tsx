'use client';

import Image from 'next/image';
import { IconExternalLink, IconStar } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function BookWithUs() {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const bookingPlatforms = [
    {
      name: 'Airbnb',
      logo: '/images/airbnb.png',
      url: 'https://www.airbnb.co.in/rooms/1407717831268074273?source_impression_id=p3_1760341367_P3HBkegO90AU3cC-',
      description: 'Book directly on Airbnb for the best experience',
    },
    {
      name: 'Agoda',
      logo: '/images/agoda.png',
      url: 'https://www.agoda.com/en-sg/the-aurora-coorg/hotel/coorg-in.html?cid=1844104&ds=IYN0I4LsSb9yvs46',
      description: 'Find us on Agoda for competitive rates',
    },
    {
      name: 'Booking.com',
      logo: '/images/booking.png',
      url: 'https://www.booking.com/hotel/in/the-aurora-coorg.tr.html',
      description: 'Reserve your stay through Booking.com',
    },
    {
      name: 'MakeMyTrip',
      logo: '/images/makemytrip.png',
      url: 'https://ae.makemytrip.global/hotels-international/en-ae/india/mudigere-hotels/aurora_nature_stay1-details.html',
      description: 'Book your Coorg getaway on MakeMyTrip',
    },
  ];

  return (
    <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-6 sm:mb-8 lg:mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 sm:mb-3 lg:mb-4'>
            Book With Us
          </h2>
          <p className='text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 leading-relaxed'>
            Find us on your favorite booking platforms and choose the best
            option for your stay
          </p>
        </motion.div>

        {/* Booking Platforms Grid */}
        <motion.div
          initial='hidden'
          className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8 lg:mb-12'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {bookingPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative h-40 sm:h-48 lg:h-56 border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 cursor-pointer hover:shadow-lg hover:border-gray-300'
            >
              {/* Content */}
              <div className='relative h-full flex flex-col items-center justify-center p-3 sm:p-4 lg:p-6 text-gray-900'>
                {/* Platform Logo */}
                <div className='mb-2 sm:mb-3 lg:mb-4'>
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={60}
                    height={60}
                    className='w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 object-contain'
                  />
                </div>

                {/* Platform Name */}
                <h3 className='text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2 lg:mb-3 text-center'>
                  {platform.name}
                </h3>

                {/* Description */}
                <p className='text-gray-600 text-xs sm:text-sm text-center mb-2 sm:mb-3 lg:mb-4 leading-tight'>
                  {platform.description}
                </p>

                {/* External Link Icon */}
                <div className='flex items-center gap-1 text-gray-500 group-hover:text-gray-700 transition-colors duration-200'>
                  <IconExternalLink className='w-3 h-3 sm:w-4 sm:h-4' />
                  <span className='text-xs font-medium'>Visit Platform</span>
                </div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Why Book With Us */}
        <motion.div
          className='rounded-xl p-4 sm:p-6 lg:p-8 mb-6 sm:mb-8 lg:mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className='text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6 text-center'>
            Why Book With Us
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6'>
            <div className='flex items-start gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconStar className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Best Price Guarantee
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                  We ensure you get the best rates across all platforms
                </p>
              </div>
            </div>
            <div className='flex items-start gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconStar className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Verified Reviews
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                  Read authentic reviews from our happy guests
                </p>
              </div>
            </div>
            <div className='flex items-start gap-2 sm:gap-3 lg:gap-4 p-3 sm:p-4 rounded-lg sm:col-span-2 lg:col-span-1'>
              <IconStar className='w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Instant Confirmation
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                  Get immediate booking confirmation on all platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          className='grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 text-center'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className='p-3 sm:p-4 rounded-lg bg-gray-50'>
            <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2'>
              4.9★
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>
              Average Rating
            </div>
          </div>
          <div className='p-3 sm:p-4 rounded-lg bg-gray-50'>
            <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2'>
              1K+
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Happy Guests</div>
          </div>
          <div className='p-3 sm:p-4 rounded-lg bg-gray-50'>
            <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2'>
              4
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>
              Booking Platforms
            </div>
          </div>
          <div className='p-3 sm:p-4 rounded-lg bg-gray-50'>
            <div className='text-xl sm:text-2xl lg:text-3xl font-bold text-black mb-1 sm:mb-2'>
              24/7
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
