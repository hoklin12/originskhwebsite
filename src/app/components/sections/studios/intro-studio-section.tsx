"use client";
import React from "react";
import SlideshowSection from "../slideshow-section";

type IntroStudiosSectionProps = Record<string, never>;

const IntroStudiosSection = React.forwardRef<HTMLElement, IntroStudiosSectionProps>((props, ref) => {
  const images = [
    { src: "/custin03.png", className: "h-80 w-80" },
    { src: "/custin07.png", className: "h-60 w-80" },
    { src: "/custin08.png", className: "h-60 w-80" },
    { src: "/custin16.png", className: "h-80 w-80" },
    { src: "/custin14.png", className: "h-60 w-80" },
  ];

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen bg-white pt-32 flex flex-col justify-center items-center"
    >
      <div className="text-center mb-4 px-8 py-48">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          We revive visions and bring 
          <br />
          brands’ aspirations to life.
        </h2>
      </div>

      <SlideshowSection
        images={images}
        repeatCount={3}
        scrollSpeed={1.5}
        containerClassName="pt-16"
        imageWidth={300}
        imageHeight={300}
      />

      <div className="container relative z-10 px-24 mx-auto py-48">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-full text-left">
            <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
              We empower brands to revive their dreams by uniting creative vision, production excellence, and innovative concepts—all under one roof. Through close collaboration, we guide our clients in making bold decisions, seizing opportunities, and crafting memorable experiences that resonate. Together, we transform ideas into powerful realities that elevate brands and captivate audiences.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
});

IntroStudiosSection.displayName = "IntroStudiosSection";

export default IntroStudiosSection;