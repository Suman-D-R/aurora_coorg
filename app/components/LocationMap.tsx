'use client';

import { IconMapPin, IconNavigation } from '@tabler/icons-react';

export default function LocationMap() {
  const handleGetDirections = () => {
    // Replace with your actual coordinates
    const latitude = 12.42; // Coorg latitude
    const longitude = 75.74; // Coorg longitude
    const url = `https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  const handleViewOnMap = () => {
    // Replace with your actual coordinates
    const latitude = 12.42; // Coorg latitude
    const longitude = 75.74; // Coorg longitude
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    window.open(url, '_blank');
  };

  return (
    <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Find Us
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            Located in the heart of Coorg, close to all major tourist
            attractions
          </p>
        </div>

        {/* Map Container */}
        <div className='relative h-80 sm:h-96 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8 sm:mb-12'>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15318.708954944701!2d75.73843413447666!3d12.408420419983687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba5abb8aefcde69%3A0xc001e903f45f397e!2sThe%20Aurora%20Coorg%20Stay!5e0!3m2!1sen!2sae!4v1760341079364!5m2!1sen!2sae'
            width='100%'
            height='100%'
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            title='The Aurora Coorg Stay Location'
          ></iframe>
        </div>

        {/* Location Details */}
        <div className='rounded-xl p-4 sm:p-8 mb-8 sm:mb-12'>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 text-center'>
            Location Details
          </h3>
          <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6'>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconMapPin className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Aurora Coorg Homestay
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Madikeri, Coorg, Karnataka, India
                </p>
              </div>
            </div>
            <div className='flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg'>
              <IconNavigation className='w-6 h-6 sm:w-8 sm:h-8 text-black flex-shrink-0 mt-1' />
              <div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-sm sm:text-base'>
                  Easy Access
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  Close to all major tourist attractions in Coorg
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Nearby Attractions */}
        <div>
          <h3 className='text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-8 text-center'>
            Nearby Attractions
          </h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6'>
            {[
              { name: "Raja's Seat", distance: '2 km' },
              { name: 'Madikeri Fort', distance: '3 km' },
              { name: 'Abbey Falls', distance: '8 km' },
              { name: 'Omkareshwara Temple', distance: '4 km' },
            ].map((attraction, index) => (
              <div
                key={index}
                className='text-center p-4 sm:p-6 transition-shadow duration-300 bg-gray-50 rounded-lg hover:bg-gray-100'
              >
                <div className='flex justify-center text-black mb-3 sm:mb-4'>
                  <IconMapPin className='w-8 h-8 sm:w-10 sm:h-10' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base'>
                  {attraction.name}
                </h4>
                <p className='text-gray-600 text-xs sm:text-sm'>
                  {attraction.distance} away
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className='mt-8 sm:mt-12 flex flex-col sm:flex-row gap-4 justify-center'>
          <button
            onClick={handleGetDirections}
            className='flex items-center justify-center space-x-2 bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200'
          >
            <IconNavigation className='w-5 h-5' />
            <span>Get Directions</span>
          </button>
          <button
            onClick={handleViewOnMap}
            className='flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors duration-200'
          >
            <IconMapPin className='w-5 h-5' />
            <span>View on Map</span>
          </button>
        </div>
      </div>
    </section>
  );
}
