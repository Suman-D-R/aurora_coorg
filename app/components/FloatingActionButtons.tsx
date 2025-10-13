'use client';

import { IconBrandWhatsapp, IconPhone } from '@tabler/icons-react';

const FloatingActionButtons = () => {
  const phoneNumber = '+918861821773'; // Replace with actual phone number
  const whatsappNumber = '918861821773'; // Replace with actual WhatsApp number (without + or spaces)
  const whatsappMessage =
    'Hello! I would like to inquire about booking a stay at Aurora Coorg.';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div className='fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3 sm:gap-4'>
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsApp}
        className='group relative bg-green-500 hover:bg-green-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95 animate-pulse hover:animate-none'
        aria-label='Contact us on WhatsApp'
      >
        <IconBrandWhatsapp className='w-6 h-6 sm:w-7 sm:h-7' />

        {/* Tooltip */}
        <span className='absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block'>
          Chat on WhatsApp
        </span>
      </button>

      {/* Call Button */}
      <button
        onClick={handleCall}
        className='group relative bg-blue-500 hover:bg-blue-600 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95'
        aria-label='Call us'
      >
        <IconPhone className='w-6 h-6 sm:w-7 sm:h-7' />

        {/* Tooltip */}
        <span className='absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none hidden sm:block'>
          Call us now
        </span>
      </button>
    </div>
  );
};

export default FloatingActionButtons;
