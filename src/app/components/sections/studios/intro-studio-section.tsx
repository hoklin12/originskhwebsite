"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";

// Using Record<string, never> instead of {} to fix the linter error
type IntroStudiosSectionProps = Record<string, never>;

const IntroStudiosSection = React.forwardRef<HTMLElement, IntroStudiosSectionProps>((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  // Handle scroll boundaries for infinite effect
  const checkScrollBoundaries = () => {
    const container = scrollRef.current;
    if (!container) return;

    const third = container.scrollWidth / 3;

    if (container.scrollLeft <= 1) {
      container.scrollLeft = third + 1;
    } else if (container.scrollLeft >= third * 2 - 1) {
      container.scrollLeft = third - 1;
    }
  };

  // Drag-to-scroll logic
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !scrollRef.current) return;

    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel event handler
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Initialize scroll at middle position
    container.scrollLeft = container.scrollWidth / 3;

    // Add scroll listener for boundary wrapping
    container.addEventListener("scroll", checkScrollBoundaries, { passive: true });

    return () => {
      container.removeEventListener("scroll", checkScrollBoundaries);
    };
  }, []);

  const images = [
    { src: "/custin03.png", className: "h-80 w-80" },
    { src: "/custin07.png", className: "h-60 w-80" },
    { src: "/custin08.png", className: "h-60 w-80" },
    { src: "/custin16.png", className: "h-80 w-80" },
    { src: "/custin14.png", className: "h-60 w-80" },
  ];

  // Repeat images 3x for seamless infinite scroll
  const tripled = [...images, ...images, ...images];

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen bg-white pt-32 flex flex-col justify-center items-center"
    >
      <div className="text-center mb-4 px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          We are a creative agency
          <br />
          helping brands revive their dreams
        </h2>
      </div>

      <div className="pt-16">
        {/* Manual-infinite scrollable images */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap space-x-6 flex items-center scrollbar-hide"
          style={{
            scrollBehavior: "auto",
            cursor: isDragging ? "grabbing" : "grab",
            WebkitOverflowScrolling: "touch",
          }}
          onScroll={checkScrollBoundaries}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onMouseMove={handleMouseMove}
          onWheel={handleWheel}
        >
          {tripled.map((img, idx) => (
            <Image
              key={idx}
              src={img.src || "/placeholder.svg"}
              alt={`Project ${idx}`}
              width={300}
              height={300}
              unoptimized
              className={`inline-block rounded-2xl shadow-lg ${img.className}`}
            />
          ))}
        </div>
      </div>

      <div className="container pt-16 relative z-10 px-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-full text-left">
            <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
              To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by
              seamlessly integrating strategy, creative, and technology, and staying in close partnership with our clients.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
});

IntroStudiosSection.displayName = "IntroStudiosSection";

export default IntroStudiosSection;