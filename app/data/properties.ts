export interface Property {
  id: number;
  name: string;
  location: string;
  capacity: string;
  guests: number;
  // startingPrice: string;
  description: string;
  image: string;
  features: string[];
  galleryImages: string[];
  amenities: string[];
  checkInTime: string;
  checkOutTime: string;
  desktopImage: string;
}

export const properties: Property[] = [
  {
    id: 1,
    name: 'Aurora Coorg',
    location: 'Coorg, Karnataka',
    capacity: 'Up to 30 guests',
    guests: 30,
    // startingPrice: 'Starting from ₹2,500/night',
    description:
      'Experience luxury and comfort in our beautiful property, perfect for large groups and family gatherings. Nestled amidst lush greenery, Aurora Coorg offers a serene escape with modern amenities and breathtaking views of the Western Ghats.',
    image: '/images/aurora-villa.webp',
    desktopImage: '/images/aurora-hero-bg.webp',
    features: [
      'Multiple bedrooms',
      'Large common areas',
      'Private grounds',
      'Spacious living areas',
      'Mountain views',
      'Garden space',
      'Bonfire facility',
      'Parking available',
    ],
    galleryImages: [
      '/images/aurora-room-1.webp',
      '/images/aurora-villa.webp',
      '/images/aurora-room-3.webp',
      '/images/aurora-room-4.webp',
      '/images/aurora-cottage.webp',
      '/images/aurora-hero-bg.webp',
    ],
    amenities: [
      'Free Wi-Fi',
      'Parking',
      'Garden',
      'Bonfire area',
      'Mountain view',
    ],
    checkInTime: '12:00 PM',
    checkOutTime: '11:00 AM',
  },
];
