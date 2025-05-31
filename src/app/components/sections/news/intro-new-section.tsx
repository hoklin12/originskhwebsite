'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import React from 'react';

// Utility function to slugify titles
const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');

// Define the component with a display name to fix react/display-name error
const IntroNewsSection = React.forwardRef<HTMLElement>((props, ref) => {
  const articles = [
    {
      id: 1,
      title: 'Accelerated by AI: Building New Tools for Today',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '7 minutes',
    },
    {
      id: 2,
      title: 'Built to Bring Us Together',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
    {
      id: 3,
      title: 'How to Grow an Agency with Purpose',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
    {
      id: 4,
      title: '2024 Transparency Report',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
    {
      id: 5,
      title: 'AI-Powered Innovations for 2025',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '7 minutes',
    },
    {
      id: 6,
      title: 'Connecting Communities in 2025',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
    {
      id: 7,
      title: 'Scaling Agencies with Impact',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
    {
      id: 8,
      title: '2025 Transparency Report',
      description:
        'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/placeholder3.jpg',
      time: '5 minutes',
    },
  ];

  return (
    <section ref={ref} className="min-h-screen bg-white text-black">
      {/* Logo Section */}
      <div className="w-full flex justify-center items-center pb-48">
        <Link href="/" className="block">
          <Image
            src="/originlogo.png"
            alt="Origins Logo"
            width={1350}
            height={1350}
            className="object-contain hidden md:block"
            priority
            rel="preload"
          />
        </Link>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full mx-auto">
        {/* Breadcrumb */}
        <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 pb-8 px-12">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span className="mx-1 text-gray-500">/</span>
          <span className="text-gray-500">NEWS</span>
          <div className="pt-6">
            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-serif font-medium leading-tight mb-12 px-14">
          Breaking news, insights, and articles.
        </h1>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 px-4 sm:px-6 lg:px-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 duration-300 flex flex-col"
            >
              <div className="mb-3">
                <div className="flex gap-2 mb-3 px-4 pt-4">
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    ARTICLE
                  </span>
                  <span className="bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                    {article.time}
                  </span>
                </div>
                <Link href={`/news/${slugify(article.title)}`} aria-label={`Read more about ${article.title}`}>
                  <Image
                    src={article.image}
                    alt={article.title || 'Article image'}
                    width={400}
                    height={400}
                    className="w-[400px] h-[400px] sm:w-[300px] sm:h-[300px] xs:w-full xs:h-auto object-cover rounded-xl mx-auto cursor-pointer hover:opacity-90 transition-opacity"
                    priority
                    rel="preload"
                  />
                </Link>
              </div>
              <div className="p-6 flex-grow">
                <h3 className="text-lg font-semibold text-black mb-3 leading-tight">
                  {article.title}
                </h3>
                {article.description && (
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {article.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="pt-16 px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full text-left">
              <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
                To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by seamlessly integrating strategy, creative and technology and then closely partner with our clients.
              </h3>
            </div>
          </div>
          <button className="flex items-center py-3 px-6 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base mt-4">
            View Our Services <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
});

IntroNewsSection.displayName = 'IntroNewsSection'; // Fix react/display-name

export default IntroNewsSection;