'use client';

import { useState, useRef } from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

export default function BookingForm() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const [formData, setFormData] = useState({
    name: '',
    place: 'Aurora Coorg',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const [bookingSummary, setBookingSummary] = useState({
    nights: 0,
    days: 0,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const newFormData = {
      ...formData,
      [name]: value,
    };
    setFormData(newFormData);

    // Calculate nights and days when both dates are selected
    if (name === 'checkIn' || name === 'checkOut') {
      if (newFormData.checkIn && newFormData.checkOut) {
        const checkInDate = new Date(newFormData.checkIn);
        const checkOutDate = new Date(newFormData.checkOut);

        if (checkOutDate > checkInDate) {
          const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
          const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
          const days = nights + 1;
          setBookingSummary({ nights, days });
        } else {
          setBookingSummary({ nights: 0, days: 0 });
        }
      }
    }
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.place ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert('Please fill in all required fields');
      return;
    }

    // Validate dates
    const checkInDate = new Date(formData.checkIn);
    const checkOutDate = new Date(formData.checkOut);

    if (checkOutDate <= checkInDate) {
      alert('Check-out date must be after check-in date');
      return;
    }

    // Calculate nights and days
    const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    const days = nights + 1;

    // Format the message for WhatsApp
    const message = `*New Booking Inquiry*

*Guest Details:*
Name: ${formData.name}
Property: ${formData.place}

*Stay Details:*
Check-in: ${new Date(formData.checkIn).toLocaleDateString()} (12:00 PM)
Check-out: ${new Date(formData.checkOut).toLocaleDateString()} (11:00 AM)
Number of Guests: ${formData.guests}
Duration: ${nights} night${nights !== 1 ? 's' : ''} / ${days} day${
      days !== 1 ? 's' : ''
    }

Looking forward to your confirmation!`;

    // Replace this with your WhatsApp business number (in international format without + sign)
    const whatsappNumber = '919364030566'; // Example: 919876543210 for India
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section
      ref={ref}
      id='booking'
      className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'
    >
      <div className='max-w-4xl mx-auto'>
        {/* Section Header */}
        <motion.div
          className='text-center mb-8 sm:mb-12'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Book Your Stay
          </h2>
          <p className='text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4'>
            Fill in your details and send us an inquiry via WhatsApp
          </p>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          className='bg-white rounded-xl p-4 sm:p-8'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <form onSubmit={handleWhatsAppSubmit} className='space-y-6'>
            {/* Personal Information */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Name */}
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
                >
                  Full Name *
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors'
                  placeholder='John Doe'
                />
              </div>

              {/* Place */}
              <div>
                <label
                  htmlFor='place'
                  className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
                >
                  Property *
                </label>
                <div className='relative'>
                  <select
                    id='place'
                    name='place'
                    value={formData.place}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors appearance-none pr-10'
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                      backgroundPosition: 'right 0.75rem center',
                      backgroundRepeat: 'no-repeat',
                      backgroundSize: '1.25rem 1.25rem',
                    }}
                  >
                    <option value='Aurora Coorg'>Aurora Coorg</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Date Selection */}
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* Check-in */}
              <div>
                <label
                  htmlFor='checkIn'
                  className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
                >
                  Check-in Date *
                </label>
                <input
                  type='date'
                  id='checkIn'
                  name='checkIn'
                  value={formData.checkIn}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className='w-full px-4 py-3 h-12 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors [&::-webkit-date-and-time-value]:text-left [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:ml-2'
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                  }}
                />
              </div>

              {/* Check-out */}
              <div>
                <label
                  htmlFor='checkOut'
                  className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
                >
                  Check-out Date *
                </label>
                <input
                  type='date'
                  id='checkOut'
                  name='checkOut'
                  value={formData.checkOut}
                  onChange={handleInputChange}
                  min={
                    formData.checkIn || new Date().toISOString().split('T')[0]
                  }
                  required
                  className='w-full px-4 py-3 h-12 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors [&::-webkit-date-and-time-value]:text-left [&::-webkit-calendar-picker-indicator]:opacity-100 [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:ml-2'
                  style={{
                    WebkitAppearance: 'none',
                    MozAppearance: 'textfield',
                  }}
                />
              </div>
            </div>

            {/* Number of Guests */}
            <div>
              <label
                htmlFor='guests'
                className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
              >
                Number of Guests *
              </label>
              <div className='relative'>
                <select
                  id='guests'
                  name='guests'
                  value={formData.guests}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 min-h-[48px] rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors appearance-none pr-10'
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                    backgroundPosition: 'right 0.75rem center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '1.25rem 1.25rem',
                  }}
                >
                  {Array.from({ length: 30 }, (_, i) => i + 1).map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Booking Summary */}
            {bookingSummary.nights > 0 && (
              <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                <h4 className='font-semibold text-green-900 mb-2'>
                  Booking Summary
                </h4>
                <div className='grid grid-cols-2 gap-4 text-sm text-green-800'>
                  <div>
                    <span className='font-medium'>Duration:</span>{' '}
                    {bookingSummary.nights} night
                    {bookingSummary.nights !== 1 ? 's' : ''}
                  </div>
                  <div>
                    <span className='font-medium'>Total Days:</span>{' '}
                    {bookingSummary.days} day
                    {bookingSummary.days !== 1 ? 's' : ''}
                  </div>
                </div>
              </div>
            )}

            {/* Submit Button with WhatsApp */}
            <div className='pt-4'>
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold px-6 sm:px-8 py-4 rounded-lg text-base sm:text-lg transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 shadow-lg hover:shadow-xl'
              >
                <IconBrandWhatsapp className='w-6 h-6' />
                <span>Send Inquiry via WhatsApp</span>
              </button>
            </div>

            <div className='bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4'>
              <h4 className='font-semibold text-blue-900 mb-2'>
                Check-in & Check-out Times
              </h4>
              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-blue-800'>
                <div>
                  <span className='font-medium'>Check-in:</span> 12:00 PM
                </div>
                <div>
                  <span className='font-medium'>Check-out:</span> 11:00 AM
                </div>
              </div>
            </div>

            <p className='text-sm text-gray-600 text-center mt-4'>
              * All fields are required. You will be redirected to WhatsApp to
              send your inquiry.
            </p>
          </form>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          className='mt-8 sm:mt-12 text-center'
          initial='hidden'
          animate={isInView ? 'visible' : 'hidden'}
          variants={fadeUpVariant}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className='text-gray-600 text-sm sm:text-base'>
            Need help? Contact us directly via WhatsApp or call{' '}
            <a
              href='tel:+919364030566'
              className='text-black font-semibold hover:underline'
            >
              +91 9364030566
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
