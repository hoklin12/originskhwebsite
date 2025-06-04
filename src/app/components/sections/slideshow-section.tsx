
"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type SlideshowSectionProps = {
  images: Array<{
    src: string;
    alt?: string;
    className?: string;
    width?: number;
    height?: number;
  }>;
  repeatCount?: number; // How many times to repeat for infinite scroll effect
  scrollSpeed?: number; // Scroll speed multiplier
  containerClassName?: string;
  imageWidth?: number;
  imageHeight?: number;
  autoScrollSpeed?: number; // Auto scroll speed in pixels per frame
  autoScrollEnabled?: boolean; // Enable/disable auto scroll
};

const SlideshowSection = ({
  images,
  repeatCount = 3,
  scrollSpeed = 1.5,
  containerClassName = "",
  imageWidth = 300,
  imageHeight = 300,
  autoScrollSpeed = 1,
  autoScrollEnabled = true,
}: SlideshowSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const tripledImages = [...Array(repeatCount)].flatMap(() => images);

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

  // Auto scroll animation
  const autoScroll = () => {
    if (!scrollRef.current || isHovered || isDragging || !autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
      return;
    }

    scrollRef.current.scrollLeft += autoScrollSpeed;
    checkScrollBoundaries();
    animationRef.current = requestAnimationFrame(autoScroll);
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
    const walk = (x - startX) * scrollSpeed;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Wheel event handler
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (!scrollRef.current) return;

    e.preventDefault();
    scrollRef.current.scrollLeft += e.deltaY;
  };

  // Mouse enter/leave handlers for auto-scroll pause
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsDragging(false);
    if (autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }
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

  // Start auto scroll animation
  useEffect(() => {
    if (autoScrollEnabled) {
      animationRef.current = requestAnimationFrame(autoScroll);
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [autoScrollEnabled, isHovered, isDragging]);

  return (
    <div className={`${containerClassName}`}>
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
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onWheel={handleWheel}
      >
        {tripledImages.map((img, idx) => (
          <Image
            key={idx}
            src={img.src}
            alt={img.alt || `Slide ${idx}`}
            width={imageWidth}
            height={imageHeight}
            unoptimized
            priority
            rel="preload"
            className={`inline-block rounded-2xl shadow-lg ${img.className || ""}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideshowSection;