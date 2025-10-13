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
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form fields
    if (
      !formData.name ||
      !formData.phone ||
      !formData.checkIn ||
      !formData.checkOut
    ) {
      alert('Please fill in all required fields');
      return;
    }

    // Format the message for WhatsApp
    const message = `*New Booking Inquiry*

*Guest Details:*
Name: ${formData.name}
Phone: ${formData.phone}

*Stay Details:*
Check-in: ${new Date(formData.checkIn).toLocaleDateString()}
Check-out: ${new Date(formData.checkOut).toLocaleDateString()}
Number of Guests: ${formData.guests}

Looking forward to your confirmation!`;

    // Replace this with your WhatsApp business number (in international format without + sign)
    const whatsappNumber = '918861821773'; // Example: 919876543210 for India
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

              {/* Phone */}
              <div>
                <label
                  htmlFor='phone'
                  className='block text-sm font-semibold text-gray-900 mb-1 sm:mb-2'
                >
                  Phone Number *
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 focus:border-gray-400 focus:outline-none transition-colors'
                  placeholder='+91 8861821773'
                />
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
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                    <option key={num} value={num}>
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </option>
                  ))}
                </select>
              </div>
            </div>

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
            Need help? Contact us directly at{' '}
            <a
              href='tel:+918861821773'
              className='text-black font-semibold hover:underline'
            >
              +91 8861821773
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
