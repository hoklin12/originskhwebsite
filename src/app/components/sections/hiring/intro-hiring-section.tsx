"use client";
import { ArrowRight } from "lucide-react";
import VideoSection from "../video-section";
import React from "react";
import SlideshowSection from "../slideshow-section";

// Base component — no props or ref used
const IntroHiringSection: React.FC = () => {
  const images = [
    { src: "/placeholder3.jpg", className: "h-80 w-80" },
    { src: "/placeholder3.jpg", className: "h-60 w-80" },
    { src: "/placeholder3.jpg", className: "h-60 w-80" },
    { src: "/placeholder3.jpg", className: "h-80 w-80" },
    { src: "/placeholder3.jpg", className: "h-60 w-80" },
  ];

  return (
    <section id="intro" className="min-h-screen bg-white m-0 p-0 pt-32">
      <div className="w-full flex justify-center items-center mb-8"></div>

      <div className="text-center mb-4 px-12">
        <h2
          className="text-8xl font-serif mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          Be yourself. Work wherever.
        </h2>
      </div>

      <div className="text-center mb-4 px-12 pb-24">
        <div className="flex items-center justify-center">
          <p
            className="text-3xl font-light text-black mr-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Rather cut right to the chase?
          </p>
          <button className="flex items-center py-3 px-8 bg-black text-white rounded-full font-light hover:bg-orange-600 transition-colors text-base">
            View open roles <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>

      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />

      <div className="bg-white py-16 px-12 pb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-3xl font-normal text-black leading-tight">
            Show up, make the best work of your career, and live the life you want.
          </h3>
          <div className="text-lg text-black leading-relaxed">
            <p>
              From day one, we’ve been committed to making Instrument a place where we can individually and
              collectively thrive. To us, this means putting flexibility and sustainability first. We live
              and work where we want, work reasonable hours, take vacations when we need them, and cultivate
              a welcoming, inclusive environment.
              <br />
              <br />
              All of these practices are rooted in our values, and are central to what makes Instrument so unique among the rest.
              At Instrument, we take your career development seriously. We promote a culture of mentorship in every discipline,
              and strive to see each employee reach their full potential, and do the best work of their career.
            </p>
            <div className="flex justify-start space-x-4 mt-8 max-w-7xl mx-auto">
              <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
                About Us<ArrowRight size={18} className="ml-2" />
              </button>
              <button className="flex items-center px-6 py-3 bg-gray-200 text-black rounded-full font-bold hover:bg-gray-300 transition-colors text-sm md:text-base">
                Our Work<ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <SlideshowSection images={images} />
      </div>
    </section>
  );
};

// Wrap component with forwardRef while keeping internal logic clean
const ForwardedIntroHiringSection = React.forwardRef<HTMLElement>((props) => {
  return <IntroHiringSection {...props} />;
});
ForwardedIntroHiringSection.displayName = "IntroHiringSection";

export default ForwardedIntroHiringSection;