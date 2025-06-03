


"use client";
import VideoSection from "../video-section";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const IntroHiringSection: React.FC = () => {
  return (
    <section id="intro" className="min-h-screen bg-white m-0 p-0 pt-32 w-full">
      {/* Section with px-8 */}
      <div className="px-8 w-full">
        <div className="w-full flex justify-center items-center mb-8"></div>

        <div className="text-center mb-4 w-full">
          <h2
            className="text-4xl md:text-7xl font-serif mb-6 text-black"
            style={{ fontFamily: 'DM Serif Text' }}
          >
            Be the dream. Work on your terms.
          </h2>
        </div>

        <div className="text-center mb-4 pb-24 w-full">
          <div className="flex items-center justify-center">
            <p
              className="text-xl md:text-3xl font-light text-black mr-4"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Let’s get started.
            </p>
            <Link href="#findUrJob">
              <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
                View open roles 
                 <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* VideoSection — No padding here (as requested) */}
      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        thumbnailSrc={"/origins-thumbnail.png"}
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />

      {/* Section with px-8 */}
      <div className="bg-white py-8 pb-24 md:py-16 md:pb-48  w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
          <h3 className="text-2xl md:text-3xl font-normal text-black leading-tight">
            Own your moment, create your masterpiece, and live on your own terms.
          </h3>
          <div className="text-l md:text-lg text-black leading-relaxed">
            <p>
              At ORIGINS, we’re not just building brands—we’re shaping culture, telling stories, and crafting experiences that leave a lasting impact. As a creative agency driven by purpose and passion, we bring together strategy, design, technology, and storytelling to help brands revive their dreams.
              <br />
              <br />
              We’re always looking for bold thinkers, passionate creators, and hands-on collaborators to join our journey.
            </p>
            <div className="flex justify-start space-x-4 mt-8 w-full">
              <Link href="/about">
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
                  About Us 
                  <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
                  Our Work 
                   <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Wrap component with forwardRef while keeping internal logic clean
const ForwardedIntroHiringSection = React.forwardRef<HTMLElement>((props) => {
  return <IntroHiringSection {...props} />;
});
ForwardedIntroHiringSection.displayName = "IntroHiringSection";

export default ForwardedIntroHiringSection;


