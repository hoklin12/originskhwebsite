
"use client";
import { useState, useEffect } from "react";

interface ImageData {
  src: string;
  caption: string;
  hashtags: string;
  description: string;
}

export default function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [showAll, setShowAll] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { label: "ALL", href: "" },
    { label: "CREATIVE", href: "" },
    { label: "PRODUCTION", href: "" },
    { label: "CONCEPT", href: "" },
  ];

  const imageMap: Record<string, ImageData[]> = {
    ALL: [
      {
        src: "/tunsai5.jpg",
        caption: "Social Media Contents for Tunsai Water",
        hashtags: "#ALL",
        description: "Graphics | Ranging from Year 2020 - 2021",
      },
      {
        src: "/custin08.png",
        caption: "Photography for Hyundai Cambodia",
        hashtags: "#ALL",
        description: "Gallery | Hyundai Custin",
      },
      {
        src: "/back.jpg",
        caption: "Apparel Design for Hyundai Cambodia",
        hashtags: "#ALL",
        description: "T-shirt | Hyundai Staria",
      },
    ],
    CREATIVE: [
      {
        src: "/tunsai5.jpg",
        caption: "Social Media Contents for Tunsai Water",
        hashtags: "#ALL",
        description: "Graphics | Ranging from Year 2020 - 2021",
      },
    ],
    PRODUCTION: [
      {
        src: "/custin08.png",
        caption: "Photography for Hyundai Cambodia",
        hashtags: "#ALL",
        description: "Gallery | Hyundai Custin",
      },
    ],
    CONCEPT: [
      {
        src: "/back.jpg",
        caption: "Apparel Design for Hyundai Cambodia",
        hashtags: "#ALL",
        description: "T-shirt | Hyundai Staria",
      },
    ],
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setHoveredImage(null);
    setShowAll(false);
  };

  const currentImages = imageMap[activeCategory] || [];
  const imagesToShow = isMobile && !showAll ? currentImages.slice(0, 3) : currentImages;

  return (
    <section id="manifesto" className="pt-10 bg-white relative overflow-hidden px-4 sm:px-8">
      <div className="w-full">
        {/* Filter Controls */}
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0">
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-full text-sm font-medium text-black">FILTER:</span>
            {navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-4 w-full mx-auto mt-4">
          {imagesToShow.map((image: ImageData, index: number) => {
            const uniqueKey = `${activeCategory}-${index}-${image.src}`;
            const isHovered = hoveredImage === uniqueKey;

            return (
              <div
                key={uniqueKey}
                className="relative bg-white rounded-xl p-2 group cursor-pointer"
                onMouseEnter={() => setHoveredImage(uniqueKey)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="w-full flex justify-center">
                  <div className="w-full aspect-square relative flex items-center justify-center overflow-hidden rounded-xl">
                    <div className="relative w-full h-full">
                      {/* Background Stack Layers (can keep for style even in grid) */}
                      <div className={`absolute inset-0 bg-gray-200 rounded-2xl transform transition-all duration-500 ease-out ${
                        isHovered ? 'translate-x-3 translate-y-3 scale-105' : 'translate-x-2 translate-y-2'
                      }`} />
                      <div className={`absolute inset-0 bg-gray-300 rounded-2xl transform transition-all duration-300 ease-out ${
                        isHovered ? 'translate-x-2 translate-y-2 scale-102' : 'translate-x-1 translate-y-1'
                      }`} />

                      {/* Main Image */}
                      <div className={`relative w-full h-full transform transition-all duration-700 ease-out ${
                        isHovered ? 'scale-110 -translate-x-1 -translate-y-1' : 'scale-100'
                      }`}>
                        <img
                          src={image.src}
                          alt={image.caption}
                          className="w-full h-full object-cover rounded-2xl shadow-lg"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent rounded-2xl transition-opacity duration-500 ${
                          isHovered ? 'opacity-100' : 'opacity-0'
                        }`}>
                          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className={`transition-all duration-500 px-4 ${
                              isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                            }`}>
                              <h3 className="font-bold text-lg mb-2">{image.caption}</h3>
                              <p className="text-sm text-gray-200 mb-2">{image.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More (Mobile) */}
        {isMobile && currentImages.length > 3 && (
          <div className="text-center mt-4">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-700 font-semibold"
              aria-expanded={showAll}
              aria-controls="image-list"
            >
              {showAll ? "Show Less" : "Show More"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
