"use client";
import { useEffect, useRef, useState } from "react";
import React from "react";
import Image from "next/image";

const OurOriginsSection = React.forwardRef<HTMLElement>((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [flippedCards, setFlippedCards] = useState<Record<number, boolean>>({});

  // Manual infinite scroll logic
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Start in the middle section for seamless looping
    container.scrollLeft = container.scrollWidth / 3;

    const onScroll = () => {
      const third = container.scrollWidth / 3;

      // When manually scrolling reaches the left boundary, jump to the equivalent position in the right section
      if (container.scrollLeft <= 1) {
        container.scrollLeft = third + 1;
      }
      // When manually scrolling reaches the right boundary, jump to the equivalent position in the left section
      else if (container.scrollLeft >= third * 2 - 1) {
        container.scrollLeft = third - 1;
      }
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  const timelineData = [
    {
      year: "2017-2018",
      title: "Creative Exploration",
      description:
        "Started creative exploration in Singapore. Collaborative projects in Bacolod, Perth, Johor Bahru & Kuala Lumpur.",
      image: "/DSC07971.JPEG",
    },
    {
      year: "2019",
      title: "Creative Consultation",
      description: "Started Creative consultation in Phnom Penh.",
      image: "/2023-09-22.png",
    },
    {
      year: "2020-2021",
      title: "Pandemic Adaptation",
      description:
        "Partnering with brands to adapt their businesses throughout the Covid-19 period.",
      image: "/2023-09-22.png",
    },
    {
      year: "2022-2024",
      title: "Service Expansion",
      description:
        "Expanded consultation services to include Production & Concept. Collaborative projects in El Nido, Honolulu, Kolkata, Los Angeles & Tokyo.",
      image: "/placeholder.png",
    },
    {
      year: "2025",
      title: "New Beginnings",
      description:
        "Driven by a bigger dream and bold vision, ORIGINS STUDIOS was established to spark creativity and bring ideas to life.",
      image: "/placeholder.png",
    },
  ];

  const tripled = [...timelineData, ...timelineData, ...timelineData]; // infinite scroll trick

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen bg-white pt-32 flex flex-col justify-center items-center"
    >
      <div className="pt-16 w-full">
        {/* Flip cards with infinite scroll */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap space-x-6 flex items-center scrollbar-hide py-4"
          style={{ scrollBehavior: "auto" }}
        >
          {tripled.map((item, idx) => (
            <div
              key={idx}
              className="flip-card inline-block rounded-2xl shadow-lg cursor-pointer"
              style={{
                width: "32rem",
                height: "24rem",
                perspective: "1000px",
                flex: "0 0 auto",
              }}
              onClick={() => handleCardClick(idx)}
            >
              <div
                className={`flip-card-inner relative w-full h-full rounded-2xl transition-transform duration-500 ${
                  flippedCards[idx] ? "rotate-y-180" : ""
                }`}
              >
                {/* Front of card (image) */}
                <div className="flip-card-front absolute w-full h-full rounded-2xl overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={`Project ${idx}`}
                    width={1200}
                    height={800}
                    unoptimized
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-2xl font-bold">{item.year}</h3>
                    <p className="text-white text-lg">{item.title}</p>
                  </div>
                </div>

                {/* Back of card (description) */}
                <div className="flip-card-back absolute w-full h-full rounded-2xl bg-black text-white p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-bold mb-2">{item.year}</h3>
                  <h4 className="text-xl mb-4">{item.title}</h4>
                  <p className="text-gray-300 whitespace-normal break-words overflow-hidden">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

OurOriginsSection.displayName = "OurOriginsSection";

export default OurOriginsSection;