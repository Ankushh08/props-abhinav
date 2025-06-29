export interface User {
    id: string;
    name: string;
    dpUrl: string;
    company: string;
    companyDescription: string;
  }
  
  export interface Property {
    id: string;
    userId: string;
    images: string[];
    description: string;
    location: string; // This will be the city
    price: number;
    beds: number;
    baths: number;
    areaSqFt: number;
    amenities: string[];
    fullDescription: string;
  }
  
  export const users: User[] = [
    {
      id: 'u1',
      name: 'Alice Johnson',
      dpUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=Alice',
      company: 'Innovate Realty',
      companyDescription: 'Leading the future of real estate.',
    },
    {
      id: 'u2',
      name: 'Bob Williams',
      dpUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=Bob',
      company: 'Urban Dwellings',
      companyDescription: 'Connecting people with their dream homes.',
    },
    {
      id: 'u3',
      name: 'Charlie Brown',
      dpUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=Charlie',
      company: 'Property Masters',
      companyDescription: 'Your trusted partner in property investments.',
    },
    {
      id: 'u4',
      name: 'Diana Prince',
      dpUrl: 'https://api.dicebear.com/7.x/personas/svg?seed=Diana',
      company: 'Home Solutions Inc.',
      companyDescription: 'Innovative solutions for modern living.',
    },
  ];
  
  export const properties: Property[] = [
    {
      id: 'p1',
      userId: 'u1',
      images: [
        'https://picsum.photos/seed/property1-1/800/600',
        'https://picsum.photos/seed/property1-2/800/600',
        'https://picsum.photos/seed/property1-3/800/600',
      ],
      description: 'Stunning 3-bedroom, 2-bath home in a quiet neighborhood with a beautiful backyard. Perfect for families.',
      location: 'Bengaluru',
      price: 12500000,
      beds: 3,
      baths: 2,
      areaSqFt: 1800,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Stunning 3-bedroom, 2-bath home in a quiet neighborhood with a beautiful backyard. Perfect for families.',
    },
    {
      id: 'p2',
      userId: 'u2',
      images: [
        'https://picsum.photos/seed/property2-1/800/600',
        'https://picsum.photos/seed/property2-2/800/600',
        'https://picsum.photos/seed/property2-3/800/600',
      ],
      description: 'Modern 1-bedroom apartment in the heart of the city. Close to all amenities and public transport.',
      location: 'Mumbai',
      price: 6500000,
      beds: 1,
      baths: 1,
      areaSqFt: 750,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Modern 1-bedroom apartment in the heart of the city. Close to all amenities and public transport.',
    },
    {
      id: 'p3',
      userId: 'u3',
      images: [
        'https://picsum.photos/seed/property3-1/800/600',
        'https://picsum.photos/seed/property3-2/800/600',
        'https://picsum.photos/seed/property3-3/800/600',
      ],
      description: 'Spacious 4-bedroom villa with a private pool and garden. Ideal for luxurious living.',
      location: 'Delhi',
      price: 35000000,
      beds: 4,
      baths: 4,
      areaSqFt: 3200,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Spacious 4-bedroom villa with a private pool and garden. Ideal for luxurious living.',
    },
    {
      id: 'p4',
      userId: 'u1',
      images: [
        'https://picsum.photos/seed/property4-1/800/600',
        'https://picsum.photos/seed/property4-2/800/600',
        'https://picsum.photos/seed/property4-3/800/600',
      ],
      description: 'Cozy 2-bedroom townhouse with a rooftop terrace. Great for young professionals.',
      location: 'Bengaluru',
      price: 9000000,
      beds: 2,
      baths: 2,
      areaSqFt: 1200,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Cozy 2-bedroom townhouse with a rooftop terrace. Great for young professionals.',
    },
    {
      id: 'p5',
      userId: 'u4',
      images: [
        'https://picsum.photos/seed/property5-1/800/600',
        'https://picsum.photos/seed/property5-2/800/600',
        'https://picsum.photos/seed/property5-3/800/600',
      ],
      description: 'Luxury penthouse with panoramic city views. State-of-the-art amenities.',
      location: 'Mumbai',
      price: 50000000,
      beds: 3,
      baths: 3,
      areaSqFt: 2500,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Luxury penthouse with panoramic city views. State-of-the-art amenities.',
    },
    {
      id: 'p6',
      userId: 'u2',
      images: [
        'https://picsum.photos/seed/property6-1/800/600',
        'https://picsum.photos/seed/property6-2/800/600',
        'https://picsum.photos/seed/property6-3/800/600',
      ],
      description: 'Charming independent house with a large garden, perfect for a growing family.',
      location: 'Chennai',
      price: 18000000,
      beds: 4,
      baths: 3,
      areaSqFt: 2200,
      amenities: ['Swimming Pool', 'Gym', 'Parking'],
      fullDescription: 'Charming independent house with a large garden, perfect for a growing family.',
    },
  ];
  