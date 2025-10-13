'use client';

import {
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className='bg-gray-900 text-gray-300'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8'>
          {/* Company Info */}
          <div>
            <h3 className='text-lg sm:text-xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'>
              Aurora Coorg
            </h3>
            <p className='text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 leading-relaxed'>
              Your trusted partner for luxury vacation rentals and unforgettable
              travel experiences in Coorg.
            </p>
            {/* Social Media */}
            <div className='flex space-x-3'>
              <a
                href='https://www.instagram.com/aurora_coorg/'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors touch-manipulation'
                aria-label='Instagram'
              >
                <IconBrandInstagram className='w-5 h-5' />
              </a>
              <a
                href='https://wa.me/1234567890'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-2 rounded-full hover:bg-green-500 transition-colors touch-manipulation'
                aria-label='WhatsApp'
              >
                <IconBrandWhatsapp className='w-5 h-5' />
              </a>
            </div>
          </div>

          {/* Book With Us */}
          <div>
            <h4 className='text-white font-semibold text-sm sm:text-base mb-3'>
              Book With Us
            </h4>
            <div className='grid grid-cols-2 gap-3'>
              <a
                href='https://www.airbnb.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center'
                aria-label='Book on Airbnb'
              >
                <Image
                  src='/images/airbnb.png'
                  alt='Airbnb'
                  width={80}
                  height={30}
                  className='object-contain'
                />
              </a>
              <a
                href='https://www.booking.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center'
                aria-label='Book on Booking.com'
              >
                <Image
                  src='/images/booking.png'
                  alt='Booking.com'
                  width={80}
                  height={30}
                  className='object-contain'
                />
              </a>
              <a
                href='https://www.agoda.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center'
                aria-label='Book on Agoda'
              >
                <Image
                  src='/images/agoda.png'
                  alt='Agoda'
                  width={80}
                  height={30}
                  className='object-contain'
                />
              </a>
              <a
                href='https://www.makemytrip.com'
                target='_blank'
                rel='noopener noreferrer'
                className='bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center'
                aria-label='Book on MakeMyTrip'
              >
                <Image
                  src='/images/makemytrip.png'
                  alt='MakeMyTrip'
                  width={80}
                  height={30}
                  className='object-contain'
                />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className='text-white font-semibold text-sm sm:text-base mb-3'>
              Contact Us
            </h4>
            <ul className='space-y-2'>
              <li className='flex items-start'>
                <IconPhone className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                <span className='text-xs sm:text-sm'>+1 (555) 123-4567</span>
              </li>
              <li className='flex items-start'>
                <IconMail className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                <span className='text-xs sm:text-sm'>info@auroracoorg.com</span>
              </li>
              <li className='flex items-start'>
                <IconMapPin className='w-4 h-4 mr-2 mt-0.5 flex-shrink-0' />
                <span className='text-xs sm:text-sm'>
                  Coorg, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-gray-800 pt-4 sm:pt-6 mt-6 sm:mt-8'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4'>
            <p className='text-[10px] sm:text-xs text-gray-400 text-center md:text-left'>
              © 2025 Aurora Coorg. All rights reserved.
            </p>
            <div className='flex flex-wrap justify-center gap-3 sm:gap-4 text-[10px] sm:text-xs'>
              <a href='#' className='hover:text-white transition-colors'>
                Privacy Policy
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Terms of Service
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Cookie Policy
              </a>
              <a href='#' className='hover:text-white transition-colors'>
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
