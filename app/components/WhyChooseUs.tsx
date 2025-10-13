import {
  IconShieldCheck,
  IconClock,
  IconCurrencyDollar,
  IconCreditCard,
  IconSparkles,
  IconMapPin,
} from '@tabler/icons-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: IconShieldCheck,
      title: 'Verified Properties',
      description:
        'Every property is personally verified and inspected to ensure quality and safety standards.',
    },
    {
      icon: IconClock,
      title: '24/7 Support',
      description:
        'Round-the-clock customer service to assist you before, during, and after your stay.',
    },
    {
      icon: IconCurrencyDollar,
      title: 'Best Price Guarantee',
      description:
        "Find a lower price elsewhere? We'll match it. Get the best deals for your dream vacation.",
    },
    {
      icon: IconCreditCard,
      title: 'Flexible Cancellation',
      description:
        'Plans change? No worries. Enjoy flexible cancellation policies on most properties.',
    },
    {
      icon: IconSparkles,
      title: 'Premium Amenities',
      description:
        'Experience luxury with high-end amenities, from infinity pools to private chefs.',
    },
    {
      icon: IconMapPin,
      title: 'Prime Locations',
      description:
        'Stay in the most desirable locations worldwide, from beaches to mountains.',
    },
  ];

  return (
    <section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Header */}
        <div className='text-center mb-8 sm:mb-12'>
          <h2 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4'>
            Why Choose Aurora Coorg
          </h2>
          <p className='text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2'>
            We're committed to making your vacation experience unforgettable
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className='text-center p-3 sm:p-6 transition-shadow duration-300'
              >
                <div className='flex justify-center text-black mb-2 sm:mb-4'>
                  <IconComponent className='w-6 h-6 sm:w-8 sm:h-8' />
                </div>
                <h4 className='font-semibold text-gray-900 mb-1 sm:mb-2 text-xs sm:text-sm'>
                  {feature.title}
                </h4>
                <p className='text-gray-600 text-[10px] sm:text-xs'>
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
