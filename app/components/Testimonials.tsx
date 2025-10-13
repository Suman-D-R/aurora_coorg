'use client';

import { IconStar, IconStarFilled } from '@tabler/icons-react';
import { useState } from 'react';

export default function Testimonials() {
  const [expandedCards, setExpandedCards] = useState<number[]>([]);

  const toggleExpanded = (index: number) => {
    setExpandedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const truncateText = (text: string, maxLength: number = 150) => {
    return text.length > maxLength
      ? text.substring(0, maxLength) + '...'
      : text;
  };

  const testimonials = [
    {
      name: 'Manohar Shetty',
      location: 'Google Review',
      rating: 5,
      text: "I had an amazing experience staying at Travellers Escape in Madikeri! The place is surrounded by lush greenery and coffee plantations, giving a perfect Coorg vibe. The rooms were clean, comfortable, and well maintained. The hosts were extremely warm and welcoming — they treated us like family. The location is peaceful yet close to major attractions like Raja's Seat, Madikeri Fort, and Abbey Falls. Overall, it's the perfect stay for anyone looking to relax, enjoy nature, and experience true Coorg hospitality. Highly recommended!",
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
      property: 'Aurora Coorg',
    },
    {
      name: 'Kiruthika K',
      location: 'Google Review',
      rating: 5,
      text: 'The aurora coorg stay was really good. The bedroom and bathroom was clean and well maintained. The service was also excellent. Overall, it was a very pleasant experience. Highly recommended!',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
      property: 'Aurora Coorg',
    },
    {
      name: 'Sajid Khan',
      location: 'Google Review',
      rating: 5,
      text: 'I had a great stay at Aurora Coorg — the place is surrounded by greenery and has a very peaceful vibe, perfect for relaxing and enjoying nature. The rooms were clean and comfortable, and the hosts were very friendly and helpful. The food was tasty and felt homely. Overall, a lovely stay and I would definitely recommend it to anyone visiting Coorg.',
      image:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
      property: 'Aurora Coorg',
    },
    {
      name: 'Akash Shetty',
      location: 'Google Review',
      rating: 5,
      text: "If you are looking for a stay in Madikeri do visit the aurora stay, as it is a beautiful stay in between the midst of nature with cozy rooms and villa. I liked the place so much as Mr. Shaman Appanna guided about the place and helped us with the check-in process and took us out for wonderful hidden sightseeing places in Madikeri. The main part was about the food as they had food services from home which was known as MOM'S KITCHEN — the food was delicious as it was prepared with love and care.",
      image:
        'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop',
      property: "Aurora Coorg with Mom's Kitchen",
    },
    {
      name: 'Akarsha Harish',
      location: 'Google Review',
      rating: 5,
      text: "If you're looking for a cozy, peaceful, and super welcoming place to crash, this is it — the vibes were immaculate. The host, Shaman Appanna, is hands-down one of the friendliest people I've ever met, he legit made us feel like part of the fam. It's warm, it's homey, and it just hits different. Whether you're chilling with friends or just trying to unplug for a bit, this spot gives you all the comfort without any of the stress. 10/10 would stay again!",
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
      property: 'Aurora Coorg',
    },
    {
      name: 'Shaykh Anas Jalaluddin',
      location: 'Google Review',
      rating: 5,
      text: 'Best experience beautiful location',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
      property: 'Aurora Coorg',
    },
  ];

  return (
    <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            What Our Guests Say
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            Join thousands of happy travelers who trust Aurora Coorg
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6'>
          {testimonials.map((testimonial, index) => {
            const isExpanded = expandedCards.includes(index);
            const shouldTruncate = testimonial.text.length > 150;
            const displayText =
              isExpanded || !shouldTruncate
                ? testimonial.text
                : truncateText(testimonial.text);

            return (
              <div
                key={index}
                className='bg-white p-4 sm:p-6 rounded-lg border border-gray-200 hover:shadow-md transition-all duration-300 flex flex-col min-h-[280px] sm:min-h-[320px]'
              >
                {/* Stars */}
                <div className='flex mb-2 sm:mb-3'>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <IconStarFilled
                      key={i}
                      className='w-4 h-4 sm:w-5 sm:h-5 text-amber-500'
                    />
                  ))}
                </div>

                {/* Text */}
                <div className='flex-grow mb-3'>
                  <p className='text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 italic leading-relaxed'>
                    "{displayText}"
                  </p>

                  {/* Read More/Less Button */}
                  {shouldTruncate && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className='text-xs sm:text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 mb-3'
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                    </button>
                  )}
                </div>

                {/* Property */}
                <p className='text-sm sm:text-base text-black font-semibold mb-3'>
                  {testimonial.property}
                </p>

                {/* Author */}
                <div className='flex items-center pt-3 border-t border-gray-200 mt-auto'>
                  <div
                    className='w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cover bg-center mr-3 flex-shrink-0'
                    style={{ backgroundImage: `url('${testimonial.image}')` }}
                  ></div>
                  <div>
                    <div className='font-semibold text-sm sm:text-base text-gray-900'>
                      {testimonial.name}
                    </div>
                    <div className='text-xs sm:text-sm text-gray-600'>
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Indicators */}
        <div className='mt-8 sm:mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center'>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              5.0/5
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>
              Google Rating
            </div>
          </div>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              500+
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Happy Guests</div>
          </div>
          <div>
            <div className='text-2xl sm:text-3xl font-bold text-black mb-1 sm:mb-2'>
              100%
            </div>
            <div className='text-xs sm:text-sm text-gray-600'>Satisfaction</div>
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
