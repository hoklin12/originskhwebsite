'use client';
import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import VideoSection from '../video-section';

const IntroContactSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} className="min-h-screen bg-white py-16 text-black">
      <div className="text-center mb-4 pt-32 pb-24">
        <h2
          className="text-9xl font-serif mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          Contact Us
        </h2>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full mx-auto">

        {/* Breadcrumb */}
        <div className="text-sm uppercase tracking-wider text-gray-500 mb-2 px-12">
          <Link href="/" className="hover:underline">
            HOME
          </Link>
          <span className="mx-1 text-gray-500">/</span>
          <span className="text-gray-500">CONTACT</span>
          <div className="pt-6">
            <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-4 mt-8 max-w-7xl mx-auto">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base"
          >
            Telegram
            <ArrowRight size={18} className="ml-2" />
          </a>

          <a
            href="https://facebook.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base"
          >
            Facebook
            <ArrowRight size={18} className="ml-2" />
          </a>

          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base"
          >
            Instagram
            <ArrowRight size={18} className="ml-2" />
          </a>
        </div>

        {/* Video Section */}
        <VideoSection
          videoSrc="/videoplayback.mp4"
          id="intro"
          showControls={true}
          autoPlay={false}
          muted={false}
          loop={false}
        />

        {/* Location Info */}
        <div className="flex flex-col justify-center px-12">
          <h3 className="text-2xl font-bold mb-4">
            Portland, OR{' '}
            <span className="ml-4 text-lg font-normal">12:32 AM</span>
          </h3>
          <div className="flex justify-between text-base text-gray-800 mb-4">
            <p>3529 N Williams Ave., Portland, OR 97227 (503) 928-3188</p>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-black hover:text-orange-600 transition-colors"
          >
            Get Directions →
          </a>
        </div>

      </div>
    </section>
  );
});

IntroContactSection.displayName = 'IntroContactSection';

export default IntroContactSection;
