'use client';
import React from 'react';
import VideoSection from '../video-section';

const IntroAboutSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="intro" className="min-h-screen bg-white m-0 p-0 pt-16">
      <div className="w-full flex justify-center items-center mb-8"></div>

      <div className="text-left mb-4 px-8 py-12">
        <h2
          className="text-5xl font-normal mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          WE BELIEVE THAT EVERY IDEA HAS A STORY, AND EVERY STORY DESERVES TO BE
          TOLD WITH: O’RIGINALITY, O’THENTICITY, AND O’SOMENESS.
        </h2>
      </div>

      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />    

      {/* New section for text under the video */}
      <div className="bg-white py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-5xl font-bold text-black leading-tight">
            Meet our talented team of creators and technologists.
          </h3>
          <p className="text-lg text-black leading-relaxed">
                At our company, we bring together a talented team of designers, strategists, and innovators dedicated to crafting exceptional creative concepts. For over 18 years, we’ve partnered with forward-thinking brands to tackle challenges, harness opportunities, and drive sustainable growth. Together, we’re building a more inspiring future.
          </p>
        </div>
      </div>
    </section>
  );
});

// ✅ Add this line:
IntroAboutSection.displayName = 'IntroAboutSection';

export default IntroAboutSection;