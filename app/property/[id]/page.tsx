'use client';

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  IconUsers,
  IconMapPin,
  IconClock,
  IconWifi,
  IconParking,
  IconChefHat,
  IconMusic,
  IconDeviceGamepad2,
  IconArrowLeft,
  IconBrandWhatsapp,
} from '@tabler/icons-react';
import { properties, Property } from '../../data/properties';
import BookWithUs from '../../components/BookWithUs';
import CancellationPolicy from '@/app/components/CancellationPolicy';

const PropertyDetails = () => {
  const params = useParams();
  const propertyId = parseInt(params.id as string);
  const property = properties.find((p) => p.id === propertyId);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  if (!property) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold text-gray-900 mb-4'>
            Property Not Found
          </h1>
          <Link
            href='/'
            className='bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors'
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const handleWhatsAppBooking = () => {
    const message = `*Property Booking Inquiry*

*Property:* ${property.name}
*Location:* ${property.location}
*Capacity:* ${property.capacity}

I'm interested in booking this property. Please provide more details about availability and pricing.

Thank you!`;

    const whatsappNumber = '919364030566';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className='min-h-screen bg-white'>
      {/* Header */}
      <div className='bg-white sticky top-0 z-40 border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
          <div className='flex items-center justify-between'>
            <Link
              href='/#our-properties'
              className='flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors'
            >
              <IconArrowLeft className='w-5 h-5' />
              <span>Back to Properties</span>
            </Link>
            <h1 className='text-xl font-bold text-gray-900'>{property.name}</h1>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12'>
        {/* Hero Section */}
        <motion.div
          ref={ref}
          className='relative h-80 sm:h-96 md:h-[500px] rounded-xl overflow-hidden shadow-lg mb-8 sm:mb-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Image
            src={
              window.innerWidth > 768 ? property.desktopImage : property.image
            }
            alt={property.name}
            fill
            className='object-cover object-bottom group-hover:scale-105 transition-transform duration-300'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent'></div>
          <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-white'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2'>
              {property.name}
            </h1>
            <div className='flex items-center gap-2 mb-3'>
              <IconMapPin className='w-4 h-4 sm:w-5 sm:h-5' />
              <span className='text-sm sm:text-base md:text-lg'>
                {property.location}
              </span>
            </div>
            <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4'>
              <div className='flex items-center gap-2'>
                <IconUsers className='w-4 h-4 sm:w-5 sm:h-5' />
                <span className='text-sm sm:text-base font-semibold'>
                  {property.capacity}
                </span>
              </div>
              <div className='text-sm sm:text-base md:text-lg font-bold'>
                {property.startingPrice}
              </div>
            </div>
          </div>
        </motion.div>

        <div className='grid lg:grid-cols-3 gap-6 sm:gap-8'>
          {/* Main Content */}
          <div className='lg:col-span-2 space-y-6 sm:space-y-8'>
            {/* Description */}
            <motion.div
              className='bg-white rounded-xl p-4 sm:p-6'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                About This Property
              </h2>
              <p className='text-gray-600 leading-relaxed text-sm sm:text-base'>
                {property.description}
              </p>
            </motion.div>

            {/* Features */}
            <motion.div
              className='bg-white rounded-xl p-4 sm:p-6'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.3,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Features
              </h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4'>
                {property.features.map((feature, index) => (
                  <div key={index} className='flex items-center gap-2'>
                    <div className='w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm sm:text-base'>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Gallery */}
            <motion.div
              className='bg-white rounded-xl p-4 sm:p-6'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h2 className='text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Gallery
              </h2>
              <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4'>
                {property.galleryImages.map((image, index) => (
                  <div
                    key={index}
                    className='relative h-24 sm:h-32 md:h-40 rounded-lg overflow-hidden group cursor-pointer'
                  >
                    <Image
                      src={image}
                      alt={`${property.name} view ${index + 1}`}
                      fill
                      className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className='lg:col-span-1'>
            {/* Booking Card */}
            <motion.div
              className='bg-white rounded-xl p-4 sm:p-6'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Book This Property
              </h3>

              <div className='space-y-3 sm:space-y-4 mb-4 sm:mb-6'>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-600 text-sm sm:text-base'>
                    Price
                  </span>
                  <span className='font-semibold text-sm sm:text-base'>
                    {property.startingPrice}
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-600 text-sm sm:text-base'>
                    Capacity
                  </span>
                  <span className='font-semibold text-sm sm:text-base'>
                    {property.capacity}
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-600 text-sm sm:text-base'>
                    Check-in
                  </span>
                  <span className='font-semibold text-sm sm:text-base'>
                    {property.checkInTime}
                  </span>
                </div>
                <div className='flex items-center justify-between'>
                  <span className='text-gray-600 text-sm sm:text-base'>
                    Check-out
                  </span>
                  <span className='font-semibold text-sm sm:text-base'>
                    {property.checkOutTime}
                  </span>
                </div>
              </div>

              <button
                onClick={handleWhatsAppBooking}
                className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-4 sm:px-6 py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl'
              >
                <IconBrandWhatsapp className='w-4 h-4 sm:w-5 sm:h-5' />
                <span className='text-sm sm:text-base'>Book via WhatsApp</span>
              </button>

              <p className='text-xs sm:text-sm text-gray-500 text-center mt-3 sm:mt-4'>
                Contact us directly for availability and custom pricing
              </p>
            </motion.div>

            {/* Amenities */}
            <motion.div
              className='bg-white rounded-xl p-4 sm:p-6 mt-4 sm:mt-6'
              initial='hidden'
              animate={isInView ? 'visible' : 'hidden'}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              <h3 className='text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4'>
                Amenities
              </h3>
              <div className='space-y-2 sm:space-y-3'>
                {property.amenities.map((amenity, index) => (
                  <div key={index} className='flex items-center gap-2 sm:gap-3'>
                    <div className='w-1.5 h-1.5 bg-blue-500 rounded-full flex-shrink-0'></div>
                    <span className='text-gray-700 text-sm sm:text-base'>
                      {amenity}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Book With Us Section */}
        <motion.div
          className='mt-8 sm:mt-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <BookWithUs />
        </motion.div>

        {/* Cancellation Policy Section */}
        <motion.div
          className='mt-8 sm:mt-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <CancellationPolicy />
        </motion.div>
      </div>
    </div>
  );
};

export default PropertyDetails;
