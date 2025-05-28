'use client';

import { useRef } from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Creative Studio',
    description:
      'From concept to final product, we transform your ideas into visual stories that captivate and inspire.',
    image: '/images/studio/studio-1.jpg',
  },
  {
    title: 'Photo & Video Production',
    description:
      'Capture moments and tell stories through high-quality photography and cinematic video production.',
    image: '/images/studio/studio-2.jpg',
  },
  {
    title: 'Studio Rental',
    description:
      'A flexible and fully-equipped space for your shoots, events, or creative sessions.',
    image: '/images/studio/studio-3.jpg',
  },
  {
    title: 'Custom Backdrops',
    description:
      'We design and build personalized backdrops that elevate your brand’s presence.',
    image: '/images/studio/studio-4.jpg',
  },
];

const OurServicesSection = () => {
  const ref = useRef(null);

  return (
    <section ref={ref} className="py-16 px-4 md:px-8 lg:px-16 bg-white">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServicesSection;
