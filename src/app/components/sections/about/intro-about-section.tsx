

'use client';
import React from 'react';
import VideoSection from '../video-section';
import FloatingShape from '../../ui/floating-shape';

const IntroAboutSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="" className="min-h-screen bg-white">
      <div className="w-full flex justify-center items-center mb-8"></div>
      
      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 w-40 h-40 rounded-full bg-orange-400" />
        <FloatingShape delay={2} duration={15} className="top-3/4 right-1/4 w-32 h-32 rounded-full bg-gray-400" />
        <FloatingShape delay={4} duration={10} className="top-1/2 right-1/3 w-20 h-20 rounded-full bg-orange-400" />
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      {/* Text section with responsive padding */}
      <div className="text-center mb-4 px-8 sm:px-8 py-20 sm:py-48">
        <h2
          className="text-3xl md:text-7xl font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
         Every dream deserves to be told with O&apos;originality, O&apos;authenticity, and O&apos;someness.
        </h2>
      </div>

      {/* Video section - full width (no padding) */}
      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        thumbnailSrc={"/origins-thumbnail.png"}
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />    

      {/* Text section with responsive padding */}
      <div className="bg-white px-8 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-2xl sm:text-4xl font-bold text-black leading-tight">
            Meet our talented team of creators and technologists.
          </h3>
          <p className="text-base sm:text-lg text-black leading-relaxed">
            At our company, we bring together a talented team of designers, strategists, and innovators dedicated to crafting exceptional creative concepts. For over 18 years, we&apos;ve partnered with forward-thinking brands to tackle challenges, harness opportunities, and drive sustainable growth. Together, we&apos;re building a more inspiring future.
          </p>
        </div>
      </div>
    </section>
  );
});

IntroAboutSection.displayName = 'IntroAboutSection';

export default IntroAboutSection;