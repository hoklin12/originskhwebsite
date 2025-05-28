"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, Play } from "lucide-react";

export default function OurServicesSection() {
  const [activeSpace, setActiveSpace] = useState<"event" | "studio">("event");
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [expandedImage, setExpandedImage] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const spaces = {
    event: {
      title: "Event Space.",
      subtitle: "Suitable for small seminar/meeting up to 30 pax.",
      description: [
        "½ Day or Full-day Events",
        "A minimalist space keeps the attention of your attendees on the things that matter",
      ],
      specs:
        "50m² (Main Event Space) + 20m² (For Catering/Networking), Fully-equipped with Air-conditioning, Projector, LED Lighting, PA Sound System, Parking Space for up to 10 Scooters + 1 Car",
      services: "Catering/Beverages, Photography/Videography",
      images: ["/eventspace1.png", "/eventspace2.png", "/eventspace3.png", "/eventspace4.png"],
      color: "orange",
    },
    studio: {
      title: "Studio Space.",
      subtitle: "Re-surfacable Studio Backdrop with Diffuser Scrim Lighting.",
      description: [
        "Hourly, 1⁄2 Day or Full-day Rental",
        "Unlike traditional studio backdrop with a fixed curve, our studio features a flat, re-surfacable backdrop wall that opens up a world of creative flexibility",
      ],
      specs:
        "Flooring/ Scrim: 4.0m X 2.6m (10.4m2) Backdrop Wall: 4.0m X 2.9m (11.6m2) Hoist-able Diffuser Scrim Lighting Truss (Max Load 25kg)",
      services: "Equipment Rental",
      images: ["/studiospace1.png", "/studiospace2.jpg", "/studiospace3.jpg", "/studiospace4.png"],
      color: "black",
    },
  };

  const currentSpace = spaces[activeSpace];

  return (
    <section ref={containerRef} className="relative min-h-screen bg-white overflow-hidden px-8">
      {/* Split screen background */}
      <div className="absolute inset-0 flex">
        <motion.div
          className="w-1/2 bg-orange-50"
          initial={{ x: "-100%" }}
          animate={{ x: activeSpace === "event" ? 0 : "-100%" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        />
        <motion.div
          className="w-1/2 bg-gray-50"
          initial={{ x: "100%" }}
          animate={{ x: activeSpace === "studio" ? 0 : "100%" }}
          transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
        />
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Space selector */}
        <div className="flex justify-start items-center mb-8">
          <span className="text-gray-500 font-semibold uppercase mr-4">SPACE:</span>
          <div className="flex gap-4 items-center">
            <motion.button
              onClick={() => setActiveSpace("event")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 h-10 flex items-center justify-center ${
                activeSpace === "event"
                  ? "text-white bg-orange-500"
                  : "text-black bg-gray-200 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Event Space
            </motion.button>
            <motion.button
              onClick={() => setActiveSpace("studio")}
              className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 h-10 flex items-center justify-center ${
                activeSpace === "studio"
                  ? "text-white bg-black"
                  : "text-black bg-gray-200 hover:bg-gray-300"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Studio Space
            </motion.button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeSpace}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className={`h-1 ${activeSpace === "event" ? "bg-orange-500" : "bg-black"} mb-8`}
              />
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="uppercase tracking-wider text-sm font-medium text-gray-500 mb-4"
              >
                {activeSpace === "event" ? "OUR EVENT SPACE" : "OUR STUDIO SPACE"}
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="text-5xl md:text-6xl lg:text-7xl font-serif font-light text-black leading-none mb-6"
              >
                {currentSpace.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`text-xl md:text-2xl mb-8 font-medium ${
                  activeSpace === "event" ? "text-orange-500" : "text-gray-800"
                }`}
              >
                {currentSpace.subtitle}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="space-y-6 text-gray-700 text-lg leading-relaxed"
              >
                {currentSpace.description.map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
                <div className="pt-6 space-y-6 border-t border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                  >
                    <h3 className="text-black font-semibold mb-2">Technical Specifications</h3>
                    <p className="text-gray-600">{currentSpace.specs}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                  >
                    <h3 className="text-black font-semibold mb-2">Additional Services</h3>
                    <p className="text-gray-600">{currentSpace.services}</p>
                  </motion.div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <motion.button
                  className={`group relative overflow-hidden px-8 py-4 text-white font-medium inline-flex items-center gap-2 rounded-2xl ${
                    activeSpace === "event" ? "bg-orange-500" : "bg-black"
                  }`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Book This Space{" "}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  onClick={() => setIsVideoPlaying(true)}
                  className="group px-8 py-4 bg-white border border-gray-300 text-gray-700 font-medium inline-flex items-center gap-2 hover:bg-gray-50 rounded-2xl"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play className="h-4 w-4" /> Watch Tour
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right column - Images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="order-1 lg:order-2"
            >
              <div className="relative">
                {/* Main image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="relative z-10 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={currentSpace.images[0] || `/placeholder.svg?height=600&width=800`}
                    alt={`${activeSpace === "event" ? "Event" : "Studio"} Space Main View`}
                    width={800}
                    height={500}
                    unoptimized
                    className="w-full h-[500px] object-cover rounded-2xl"
                  />
                  <motion.div
                    className="absolute inset-0 border-2 border-white rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  />
                </motion.div>

                {/* Thumbnail grid */}
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {currentSpace.images.slice(1).map((img, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      className="relative overflow-hidden group cursor-pointer rounded-2xl"
                      onClick={() => setExpandedImage(index + 1)}
                    >
                      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl">
                        <ExternalLink className="text-white h-5 w-5" />
                      </div>
                      <Image
                        src={img || `/placeholder.svg?height=200&width=300`}
                        alt={`${activeSpace === "event" ? "Event" : "Studio"} Space View ${index + 2}`}
                        width={300}
                        height={200}
                        unoptimized
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110 rounded-2xl"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Video modal */}
        <AnimatePresence>
          {isVideoPlaying && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
              onClick={() => setIsVideoPlaying(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-full h-full flex items-center justify-center text-white">
                  <p>Video tour would play here</p>
                </div>
                <button
                  onClick={() => setIsVideoPlaying(false)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Image modal */}
        <AnimatePresence>
          {expandedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-8"
              onClick={() => setExpandedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-5xl max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={
                    currentSpace.images[expandedImage] || "/placeholder.svg?height=800&width=1200"
                  }
                  alt={`${activeSpace === "event" ? "Event" : "Studio"} Space Expanded View`}
                  width={1200}
                  height={800}
                  unoptimized
                  className="max-w-full max-h-[80vh] object-contain rounded-2xl"
                />
                <button
                  onClick={() => setExpandedImage(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
                >
                  ✕
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}