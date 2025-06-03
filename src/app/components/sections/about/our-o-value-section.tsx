

"use client";
import React, { useState, forwardRef } from "react";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

type ValueId = "1" | "2" | "3";

interface ValueData {
  id: ValueId;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

const OurOValuesSection = forwardRef<HTMLElement>((props, ref) => {
  const [expandedValue, setExpandedValue] = useState<ValueId | null>(null);

  const valuesData: ValueData[] = [
    {
      id: "1",
      title: "O’riginality.",
      description:
        "We lead with boldness and bring fresh, inventive energy into everything we create.",
      image: "/exhib01.png",
      imageAlt: "O’riginality.",
    },
    {
      id: "2",
      title: "O’thenticity.",
      description:
        "We keep it real with our creation reflecting depth and emotional resonance.",
      image: "/placeholder3.jpg",
      imageAlt: "O’thenticity.",
    },
    {
      id: "3",
      title: "O’wesomeness.",
      description:
        "Our standard is excellence. We aim to “wow” through wonder, quality and impact.",
      image: "/placeholder3.jpg",
      imageAlt: "O’wesomeness.",
    },
  ];

  const toggleExpanded = (valueId: ValueId) => {
    setExpandedValue(expandedValue === valueId ? null : valueId);
  };

  const getCurrentImage = () => {
    if (expandedValue) {
      const expandedItem = valuesData.find((item) => item.id === expandedValue);
      return expandedItem ? expandedItem.image : valuesData[0].image;
    }
    return valuesData[0].image;
  };

  const getCurrentImageAlt = () => {
    if (expandedValue) {
      const expandedItem = valuesData.find((item) => item.id === expandedValue);
      return expandedItem ? expandedItem.imageAlt : valuesData[0].imageAlt;
    }
    return valuesData[0].imageAlt;
  };

  return (
    <section ref={ref} className="min-h-screen bg-gray-50 py-24 px-8 sm:px-8">
      <div className="relative z-10 mx-auto w-full">
        {/* Header */}
        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-12">
          <p className="text-gray-600 font-medium">OUR &quot;O&quot; VALUES</p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start pt-12 lg:pt-24">
          {/* Left side - Values list */}
          <div className="space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-black leading-tight">
              Everything we create at Origins is rooted in our values.
            </h2>

            <div className="space-y-0">
              {valuesData.map((value) => (
                <div key={value.id} className="border-b border-gray-200">
                  <button
                    onClick={() => toggleExpanded(value.id)}
                    className="w-full py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors duration-200 group"
                  >
                    <span
                      className={`text-lg sm:text-xl lg:text-2xl transition-colors duration-200 ${
                        expandedValue === value.id
                          ? "text-black font-medium"
                          : "text-gray-600 group-hover:text-black"
                      }`}
                    >
                      {value.title}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
                        expandedValue === value.id
                          ? "border-black bg-black text-white"
                          : "border-gray-400 text-gray-400 group-hover:border-black group-hover:text-black"
                      }`}
                    >
                      {expandedValue === value.id ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Expanded description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      expandedValue === value.id ? "max-h-40 pb-6" : "max-h-0"
                    }`}
                  >
                    <p className="text-gray-600 text-base leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Dynamic image */}
          <div className="lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-purple-800 aspect-square">
              <Image
                src={getCurrentImage()}
                alt={getCurrentImageAlt()}
                width={800}
                height={800}
                className="w-full h-full object-cover transition-opacity duration-500"
                unoptimized
                priority
                rel="preload"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

OurOValuesSection.displayName = "OurOValuesSection";

export default OurOValuesSection;