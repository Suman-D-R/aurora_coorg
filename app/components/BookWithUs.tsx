'use client';

import Image from 'next/image';
import { IconExternalLink, IconStar } from '@tabler/icons-react';

export default function BookWithUs() {
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
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Book With Us
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            Find us on your favorite booking platforms and choose the best
            option for your stay
          </p>
        </div>

        {/* Booking Platforms Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12'>
          {bookingPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.url}
              target='_blank'
              rel='noopener noreferrer'
              className='group relative h-48 sm:h-56 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer bg-white border border-gray-200'
            >
              {/* Content */}
              <div className='relative h-full flex flex-col items-center justify-center p-4 sm:p-6 text-gray-900'>
                {/* Platform Logo */}
                <div className='mb-3 sm:mb-4'>
                  <Image
                    src={platform.logo}
                    alt={`${platform.name} logo`}
                    width={60}
                    height={60}
                    className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
                  />
                </div>

                {/* Platform Name */}
                <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-center'>
                  {platform.name}
                </h3>

                {/* Description */}
                <p className='text-gray-600 text-xs sm:text-sm text-center mb-4'>
                  {platform.description}
                </p>

                {/* External Link Icon */}
                <div className='flex items-center gap-1 text-gray-500 group-hover:text-gray-700 transition-colors duration-200'>
                  <IconExternalLink className='w-4 h-4' />
                  <span className='text-xs font-medium'>Visit Platform</span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Why Book With Us */}
        <div className='rounded-xl p-4 sm:p-8 mb-8 sm:mb-12'>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center'>
            Why Book With Us
          </h3>
          <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconStar className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Best Price Guarantee
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  We ensure you get the best rates across all platforms
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconStar className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Verified Reviews
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Read authentic reviews from our happy guests
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconStar className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Instant Confirmation
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Get immediate booking confirmation on all platforms
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center'>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              4.9★
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>
              Average Rating
            </div>
          </div>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              1K+
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Happy Guests</div>
          </div>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              4
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>
              Booking Platforms
            </div>
          </div>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              24/7
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}
