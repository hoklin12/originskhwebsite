


"use client";
import VideoSection from "../video-section";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import FloatingShape from "../../ui/floating-shape";

const IntroHiringSection: React.FC = () => {
  return (
    <section id="intro" className="min-h-screen bg-white ">
      {/* Section with px-8 */}
      <div className="px-8 w-full">
                      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 w-40 h-40 rounded-full bg-orange-400" />
        <FloatingShape delay={2} duration={15} className="top-3/4 right-1/4 w-32 h-32 rounded-full bg-gray-400" />
        <FloatingShape delay={4} duration={10} className="top-1/2 right-1/3 w-20 h-20 rounded-full bg-orange-400" />
        <FloatingShape delay={2} duration={15} className="top-3/4 right-1/4 w-32 h-32 rounded-full bg-gray-400" />

        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>
              {/* Text section with responsive padding */}
          <div className="text-center mb-4 px-6 md:px-12 md:pt-48 pt-24">
            <h2
              className="text-3xl md:text-7xl font-normal mb-6 text-black"
              style={{ fontFamily: "DM Serif Text" }}
            >
            Ready to turn dreams into reality? Join us and be part of the team!       
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
              <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
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
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
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
                <button className="flex items-center md:px-6 md:py-3 px-3 py-2 bg-orange-400 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
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


