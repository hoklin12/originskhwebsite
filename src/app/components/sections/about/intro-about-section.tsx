
'use client';
import React from 'react';
import VideoSection from '../video-section';

const IntroAboutSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section ref={ref} id="" className="min-h-screen bg-white">
      <div className="w-full flex justify-center items-center mb-8"></div>

      {/* Text section with px-8 */}
      <div className="text-center mb-4 px-8 py-48">
        <h2
          className="text-5xl font-normal mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          We believe that every idea has a story, and every story deserves to be
          told with: O&apos;originality, O&apos;authenticity, and O&apos;someness.
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

      {/* Text section with px-8 */}
      <div className="bg-white px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-5xl font-bold text-black leading-tight">
            Meet our talented team of creators and technologists.
          </h3>
          <p className="text-lg text-black leading-relaxed">
            At our company, we bring together a talented team of designers, strategists, and innovators dedicated to crafting exceptional creative concepts. For over 18 years, we&apos;ve partnered with forward-thinking brands to tackle challenges, harness opportunities, and drive sustainable growth. Together, we&apos;re building a more inspiring future.
          </p>
        </div>
      </div>
    </section>
  );
});

IntroAboutSection.displayName = 'IntroAboutSection';

export default IntroAboutSection;


