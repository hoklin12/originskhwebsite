"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function DetailPortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [displayMode, setDisplayMode] = useState("GRID");
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  const imageMap: {
    [key: string]: {
      src: string;
      caption: string;
      hashtags: string;
      description: string;
    }[];
  } = {
    ALL: [
      {
        src: "/car-tshirt.JPEG",
        caption: "Placeholder 1",
        hashtags: "#ALL",
        description: "Description for Placeholder 1",
      },
      {
        src: "/car-tshirt2.JPEG",
        caption: "Placeholder 2",
        hashtags: "#ALL",
        description: "Description for Placeholder 2",
      },
      {
        src: "/hyundai-custin.JPEG",
        caption: "Placeholder 3",
        hashtags: "#ALL",
        description: "Description for Placeholder 3",
      },
      {
        src: "/matterone.JPEG",
        caption: "Procore",
        hashtags: "#BRAND",
        description: "Description for Procore",
      },
      {
        src: "/matterone2.JPEG",
        caption: "Placeholder 2",
        hashtags: "#BRAND",
        description: "Description for Placeholder 2",
      },
      {
        src: "/car-tshirt.JPEG",
        caption: "Placeholder 3",
        hashtags: "#BRAND",
        description: "Description for Placeholder 3",
      },
      {
        src: "/car-tshirt.JPEG",
        caption: "Placeholder 1",
        hashtags: "#ALL",
        description: "Description for Placeholder 1",
      },
      {
        src: "/car-tshirt2.JPEG",
        caption: "Placeholder 2",
        hashtags: "#ALL",
        description: "Description for Placeholder 2",
      },
      {
        src: "/hyundai-custin.JPEG",
        caption: "Placeholder 3",
        hashtags: "#ALL",
        description: "Description for Placeholder 3",
      },
      {
        src: "/matterone.JPEG",
        caption: "Procore",
        hashtags: "#BRAND",
        description: "Description for Procore",
      },
      {
        src: "/matterone2.JPEG",
        caption: "Placeholder 2",
        hashtags: "#BRAND",
        description: "Description for Placeholder 2",
      },
      {
        src: "/car-tshirt.JPEG",
        caption: "Placeholder 3",
        hashtags: "#BRAND",
        description: "Description for Placeholder 3",
      },
    ],
    BRAND: [
      {
        src: "/Stargazer X Pic 6.png",
        caption: "Procore",
        hashtags: "#BRAND",
        description: "Description for Procore",
      },
      {
        src: "/Stargazer X Pic 7 V2.png",
        caption: "Placeholder 2",
        hashtags: "#BRAND",
        description: "Description for Placeholder 2",
      },
      {
        src: "/Stargazer X Pic 3 v4.png",
        caption: "Placeholder 3",
        hashtags: "#BRAND",
        description: "Description for Placeholder 3",
      },
      {
        src: "/Stargazer X Pic 6.png",
        caption: "Procore",
        hashtags: "#BRAND",
        description: "Description for Procore",
      },
      {
        src: "/Stargazer X Pic 7 V2.png",
        caption: "Placeholder 2",
        hashtags: "#BRAND",
        description: "Description for Placeholder 2",
      },
      {
        src: "/Stargazer X Pic 3 v4.png",
        caption: "Placeholder 3",
        hashtags: "#BRAND",
        description: "Description for Placeholder 3",
      },
    ],
    MARKETING: [
      {
        src: "/images/mercur.png",
        caption: "Mercury",
        hashtags: "#MARKETING",
        description: "Description for Mercury",
      },
      {
        src: "/images/microsof.png",
        caption: "Microsoft",
        hashtags: "#MARKETING",
        description: "Description for Microsoft",
      },
      {
        src: "/images/mercur.png",
        caption: "Mercury",
        hashtags: "#MARKETING",
        description: "Description for Mercury",
      },
      {
        src: "/images/microsof.png",
        caption: "Microsoft",
        hashtags: "#MARKETING",
        description: "Description for Microsoft",
      },
    ],
    PRODUCT: [
      {
        src: "/woman.jpg",
        caption: "Woman",
        hashtags: "#PRODUCT",
        description: "Product showcase",
      },
      {
        src: "/tech-stack.jpg",
        caption: "Tech Stack",
        hashtags: "#PRODUCT",
        description: "Tech stack visualization",
      },
      {
        src: "/butterfly.jpg",
        caption: "Butterfly",
        hashtags: "#PRODUCT",
        description: "Product design",
      },
      {
        src: "/smart-king.jpg",
        caption: "Smart King",
        hashtags: "#PRODUCT",
        description: "Smart King product",
      },
    ],
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setShowAll(false);
    console.log(`Switched to category: ${category} at 06:29 PM +07, May 21, 2025`);
  };

  const currentImages = imageMap[activeCategory] || [
    { src: "/placeholder.jpg", caption: "No caption", hashtags: "", description: "No description" },
  ];

  const imagesToShow = isMobile && !showAll ? currentImages.slice(0, 3) : currentImages;

  return (
    <section id="manifesto" className="pt-15 pb-8 bg-white relative overflow-hidden px-12">
      {/* Full-width layout with centered content */}
      <div className="mx-auto w-full max-w-screen-xl">
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
          <div className="flex items-center gap-2">
            <span className="px-4 py-2 rounded-full text-sm font-medium text-black">DISPLAY:</span>
            <button
              onClick={() => setDisplayMode("STACK")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                displayMode === "STACK"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-black hover:text-white"
              }`}
            >
              STACK
            </button>
            <button
              onClick={() => setDisplayMode("GRID")}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                displayMode === "GRID"
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black hover:bg-black hover:text-white"
              }`}
            >
              GRID
            </button>
          </div>
        </div>

        <div className="w-full text-left py-16 px-4">
          <h1 className="text-4xl md:text-5xl text-black mb-8 font-normal">
            We create beautiful, functional, technology-forward work that elevates and unifies experiences across all brand surfaces.
          </h1>
        </div>

        <div
          className={`${displayMode === "STACK" ? "space-y-8" : "grid md:grid-cols-3 gap-2"} w-full mx-auto px-4 mt-8 ${
            isMobile && currentImages.length > 3 && !showAll ? "mb-4" : ""
          }`}
        >
          {imagesToShow.map((image, index) => {
            const uniqueKey = `${activeCategory}-${index}-${image.src}`;
            const isStackMode = displayMode === "STACK";

            return (
              <div key={uniqueKey} className={`relative bg-white rounded-xl shadow-md ${isStackMode ? "flex flex-col md:flex-row gap-6 p-6" : "p-2"}`}>
                <div className={`${isStackMode ? "md:w-1/2 aspect-square" : "w-full aspect-square"} relative flex items-center justify-center overflow-hidden rounded-xl`}>
                  <Image src={image.src} alt={image.caption} fill className="object-cover rounded-xl" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className={`${isStackMode ? "md:w-1/2 md:mt-0 flex flex-col justify-center" : "text-center"}`}>
                  <p className="font-bold text-lg">{image.caption}</p>
                  <p className="text-sm text-gray-600">{image.hashtags}</p>
                  <p className="mt-2 text-gray-700">{image.description}</p>
                </div>
              </div>
            );
          })}
        </div>

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
                aria-hidden="true"
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