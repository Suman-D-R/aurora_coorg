'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  IconUsers,
  IconBed,
  IconFlame,
  IconDeviceGamepad2,
  IconChefHat,
  IconWifi,
  IconParking,
  IconMusic,
} from '@tabler/icons-react';

interface StayOption {
  id: number;
  title: string;
  capacity: string;
  guests: number;
  description: string;
  image: string;
  features: string[];
}

const stayOptions: StayOption[] = [
  {
    id: 1,
    title: 'Full Villa',
    capacity: 'Up to 25 guests',
    guests: 25,
    description:
      'Experience luxury and comfort in our spacious villa, perfect for large groups and family gatherings.',
    image: '/images/aurora-villa.webp',
    features: [
      'Multiple bedrooms',
      'Large common areas',
      'Full kitchen access',
      'Private grounds',
    ],
  },
  {
    id: 2,
    title: 'Cottage',
    capacity: '2-4 guests',
    guests: 4,
    description:
      'Cozy and intimate cottages ideal for couples or small families seeking a peaceful retreat.',
    image: '/images/aurora-cottage.webp',
    features: [
      'Private entrance',
      'Comfortable bedrooms',
      'Modern amenities',
      'Garden view',
    ],
  },
];

const servicesAmenities = [
  {
    icon: IconChefHat,
    title: 'Complimentary Breakfast',
    description: 'Delicious breakfast with local and continental options',
  },
  {
    icon: IconChefHat,
    title: 'Dinner & Breakfast Package',
    description: 'Full meal experience with authentic Coorgi cuisine',
  },
  {
    icon: IconMusic,
    title: 'Bonfire & Music Nights',
    description: 'Evening bonfire with curated music',
  },
  {
    icon: IconDeviceGamepad2,
    title: 'Indoor/Outdoor Games',
    description: 'Games and activities for all ages',
  },
  {
    icon: IconParking,
    title: 'Free Parking',
    description: 'Secure parking space for all guests',
  },
  {
    icon: IconWifi,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with complimentary Wi-Fi',
  },
];

const OurStays = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

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
            Our Stays
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            Choose from our comfortable accommodation options, each designed to
            provide you with an unforgettable experience in the heart of Coorg.
          </p>
        </motion.div>

        {/* Accommodation Options */}
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16'>
          {stayOptions.map((stay, index) => (
            <motion.div
              key={stay.id}
              className='relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group cursor-pointer'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUpVariant}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            >
              {/* Full Image Background */}
              <Image
                src={stay.image}
                alt={stay.title}
                fill
                className={`object-cover  group-hover:scale-105 transition-transform duration-300 ${
                  stay.id === 1 ? 'object-bottom' : 'object-center'
                }`}
              />

              {/* Gradient Overlay */}
              <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>

              {/* Content Overlay */}
              <div className='absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-white'>
                {/* Title and Capacity */}
                <div className='flex flex-col items-start justify-between mb-2'>
                  <h3 className='text-xl sm:text-2xl font-bold'>
                    {stay.title}
                  </h3>
                  <div className='flex items-center gap-1.5 text-white/90 mt-1'>
                    <IconUsers className='w-4 h-4' />
                    <span className='font-semibold text-sm sm:text-base'>
                      {stay.capacity}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className='text-white/90 mb-3 text-xs sm:text-sm leading-tight'>
                  {stay.description}
                </p>

                {/* Features */}
                <div className='grid grid-cols-2 gap-2'>
                  {stay.features.map((feature, index) => (
                    <div
                      key={index}
                      className='flex items-center gap-1.5 text-white/90'
                    >
                      <div className='w-1.5 h-1.5 bg-white rounded-full'></div>
                      <span className='text-xs sm:text-sm font-medium'>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Inclusions Section */}
        <motion.div
          className='rounded-xl p-4 sm:p-8 mb-8 sm:mb-12'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center'>
            What's Included
          </h3>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconChefHat className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Breakfast Only
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Start your day with a delicious breakfast featuring local and
                  continental cuisine
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconChefHat className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Dinner & Breakfast
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Enjoy both dinner and breakfast with authentic Coorgi flavors
                  and multi-cuisine options
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Services & Amenities */}
        <div>
          <motion.h3
            className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8 text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Services & Amenities
          </motion.h3>
          <motion.div
            className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {servicesAmenities.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className='text-center p-4 sm:p-6 transition-shadow duration-300 bg-gray-50 rounded-lg hover:bg-gray-100'
                >
                  <div className='flex justify-center text-black mb-3 sm:mb-4'>
                    <IconComponent className='w-8 h-8 sm:w-10 sm:h-10' />
                  </div>
                  <h4 className='font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base'>
                    {service.title}
                  </h4>
                  <p className='text-gray-600 text-xs sm:text-sm leading-relaxed'>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Gallery Preview */}
        <div className='mt-8 sm:mt-12'>
          <motion.h3
            className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center'
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            Rooms & Amenities
          </motion.h3>

          <motion.div
            initial='hidden'
            className='grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4'
            whileInView='visible'
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUpVariant}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {[
              '/images/aurora-room-1.webp',
              '/images/aurora-villa.webp',
              '/images/aurora-room-3.webp',
              '/images/aurora-room-4.webp',
            ].map((image, index) => (
              <div
                key={index}
                className='relative h-32 sm:h-40 md:h-48 rounded-lg overflow-hidden group cursor-pointer'
              >
                <Image
                  src={image}
                  alt={`Room view ${index + 1}`}
                  fill
                  className='object-cover group-hover:scale-110 transition-transform duration-300'
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurStays;
