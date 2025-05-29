"use client";
import { ArrowRight } from "lucide-react";
import VideoSection from "../video-section";
import React from "react";
import Link from "next/link";

// Base component — no props or ref used
const IntroHiringSection: React.FC = () => {


  return (
    <section id="intro" className="min-h-screen bg-white m-0 p-0 pt-32">
      <div className="w-full flex justify-center items-center mb-8"></div>

      <div className="text-center mb-4 px-12">
        <h2
          className="text-7xl font-serif mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >
          Be genuine. Work on your terms.
        </h2>
      </div>

      <div className="text-center mb-4 px-12 pb-24">
        <div className="flex items-center justify-center">
          <p
            className="text-3xl font-light text-black mr-4"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Ready to get straight to it?
          </p>
          <Link href="#findUrJob">
            <button className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
              View open roles <ArrowRight size={18} className="ml-2" />
            </button>
          </Link>
        </div>
      </div>

      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={false}
      />

      <div className="bg-white py-16 px-12 pb-48">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <h3 className="text-3xl font-normal text-black leading-tight">
            Own your moment, create your masterpiece, and live on your own terms.
          </h3>
          <div className="text-lg text-black leading-relaxed">
            <p>
              At ORIGINS, we’re not just building brands—we’re shaping culture, telling stories, and crafting experiences that leave a lasting impact. As a creative agency driven by purpose and passion, we bring together strategy, design, technology, and storytelling to help brands revive their dreams.
              <br />
              <br />
              We’re always looking for bold thinkers, passionate creators, and hands-on collaborators to join our journey.
            </p>
            <div className="flex justify-start space-x-4 mt-8 max-w-7xl mx-auto">
              <Link href="/about">
                <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
                  About Us <ArrowRight size={18} className="ml-2" />
                </button>
              </Link>
              <Link href="/portfolio">
                <button className="flex items-center px-6 py-3 bg-orange-600 text-white rounded-full font-bold hover:bg-black transition-colors text-sm md:text-base">
                  Our Work <ArrowRight size={18} className="ml-2" />
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