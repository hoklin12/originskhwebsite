

"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";

const studios = [
  {
    name: "Creative",
    image: "/creative.png",
    description:
      "ORIGINS Creative brings ideas to life through design, interactivity, and expression. From graphic design and visual branding to social media content and experiential art, this sector focuses on visual storytelling that’s bold, stylish, and unforgettable.",
    services: [
      "Branding & Visual Identity",
      "Graphic Design (Digital & Print)",
      "Social Media Content & Templates",
      "Creative Direction & Art Styling",
      "Web & UI/UX Design",
    ],
  },
  {
    name: "Production",
    image: "/production.png",
    description:
      "ORIGINS Production is our powerhouse of content creation. We craft high-impact visuals through cinematic storytelling, precise editing, and compelling audio-visual experiences. From branded films to social media content, we transform ideas into stories that move people.",
    services: [
      "Video Production & Direction",
      "Cinematography & Photography",
      "Editing & Post-production",
      "Motion Graphics & Animation",
      "Events & Performance Coverage",
    ],
  },
  {
    name: "Concept",
    image: "/concepts.png",
    description:
      "ORIGINS Concepts develops and manages original ideas and lifestyle projects, including curated product lines, spatial concepts, and branded environments. It’s where creativity meets entrepreneurship. The forefront of our side ventures and innovative brand experiences.",
    services: [
      "ORIGINS Coffee & Gallery",
      "Product Curation & Merchandise",
      "Pop-up & Event Concepts",
      "Spatial & Interior Branding",
      "Experience-based Retail Concepts",
    ],
  },
];

export default function DetailStudioSection() {
  return (
    <section id="journey" className="bg-white relative overflow-hidden px-4 py-24">
      {studios.map((studio, index) => (
        <div
          key={studio.name}
          className={`relative mx-auto w-full max-w-screen-xl py-16 sm:py-20 lg:py-28 ${
            index !== 0 ? "mt-16 sm:mt-20 lg:mt-24" : ""
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0 overflow-hidden rounded-xl">
            <Image
              src={studio.image}
              alt={`${studio.name} Studio`}
              fill
              className="object-cover brightness-75"
              priority={index === 0}
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
          </div>

          {/* Content Wrapper with horizontal padding */}
          <div className="relative z-10 px-4 flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-16">
            {/* Left Section - Studio Name */}
            <div className="w-full lg:w-1/2">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light text-white leading-none">
                {studio.name}
              </h1>
            </div>

            {/* Right Section - Description & Services */}
            <div className="w-full lg:w-1/2 text-left text-white">
              <p className="mb-6 sm:mb-8 text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                {studio.description}
              </p>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-sm">
                {studio.services.map((service, idx) => (
                  <p key={idx} className="text-gray-200">
                    {service}
                  </p>
                ))}
              </div>

              <button className="flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors text-sm md:text-base">
                See Work <ArrowRight size={18} className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}