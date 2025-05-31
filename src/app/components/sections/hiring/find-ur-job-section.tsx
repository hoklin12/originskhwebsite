"use client";
import React from "react";
import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image"; // Import for optimized image

// Component no longer uses forwardRef props since they aren't needed
const FindUrJobSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const navItems = [
    { label: "ALL", href: "" },
    { label: "DESIGN", href: "" },
    { label: "STRATEGY", href: "" },
    { label: "TECHNOLOGY", href: "" },
    { label: "PRODUCTION", href: "" },
    { label: "WRITING", href: "" },
    { label: "OPERATIONS", href: "" },
  ];

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="findUrJob" className="pt-16 pb-8 bg-white relative overflow-hidden px-8 pt-48">
      <div className="container relative z-10 px-4 mx-auto">
        <div className="text-center mb-4 px-12">
          <h2
            className="text-7xl font-serif mb-6 text-black"
            style={{ fontFamily: 'DM Serif Text' }}
          >
            Find Your Next Job
          </h2>
        </div>

        <div className="border-t border-gray-300 pt-8 flex flex-col justify-between items-center text-sm space-y-4" />

        {/* Category Buttons */}
        <div className="flex items-center gap-4 mb-8 pb-12">
          {!isMobile &&
            navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    active
                      ? "bg-black text-white"
                      : "bg-gray-200 text-black hover:bg-gray-300"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
        </div>

        {/* Message Display */}
        <div className="bg-gray-200 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
          <p className="text-lg text-black">
            {"We’re not hiring at the moment. Check back later for new opportunities!"}
          </p>
        </div>

        <div className="container pt-16 px-6 md:px-24 mx-auto font-geist-sans">
          <div className="flex flex-col items-center gap-8 md:gap-12">
            {/* Text Section */}
            <div className="w-full max-w-4xl text-left pt-32">
              <h2 className="text-4xl lg:text-4xl font-semi-bold text-black mb-4">
                Equity, Inclusion & Opportunity at ORIGINS
              </h2>
              <div className="p-8 bg-light-green rounded-lg">
                <h3 className="text-2xl text-black mb-8 font-light leading-relaxed">
                  At ORIGINS, we believe creativity thrives in a culture of inclusion, respect, and equity. We&apos;re committed to creating a welcoming environment where every team member feels seen, heard, and empowered to bring their whole self to the work.
                  {" "}We do not discriminate on the basis of race, color, religion, gender identity or expression, age, national origin, disability, marital status, sexual orientation, military status, or any other aspect of identity. Diversity doesn&apos;t just something we support—it&apos;s something we actively seek out and celebrate.
                  To ensure pay transparency and fairness, we follow clearly defined pay bands that align compensation with performance, growth, and impact across our teams. We&apos;re dedicated to fair opportunities at every level—from your first day to your next big promotion.
                  <br /><br />
                  As an equal opportunity employer, ORIGINS values the unique experiences and perspectives that each individual brings to our studio.
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start pt-24">
          {/* Left side - Static Image */}
          <div className="lg:sticky lg:top-8">
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/hiring.jpeg"
                alt="A person working at a desk"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                rel="preload"
              />
            </div>
          </div>

          {/* Right side - Application Process Text */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-normal leading-tight">
              Inside the Hiring Journey
            </h2>

            <div className="space-y-6">
              <p className="text-lg">
                <span className="font-bold">01</span> Once we&apos;ve reviewed your application, a recruiter will reach out to guide you through the next steps.
              </p>
              <p className="text-lg">
                <span className="font-bold">02</span> You&apos;ll have an initial conversation with a recruiter to learn more about the role and share your story.
              </p>
              <p className="text-lg">
                <span className="font-bold">03</span> Participate in two virtual interviews with key team members to explore your fit for the position.
              </p>
              <p className="text-lg">
                <span className="font-bold">04</span> If selected, you&apos;ll receive a formal offer letter outlining your start date and next steps.
              </p>
            </div>
          </div>
        </div>

        {/* Full-width layout with inner content max-width */}
        <div className="mx-auto w-full max-w-screen-xl pt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 translate-x-5">
            {/* Text Section */}
            <div className="w-full md:w-[75%] text-left">
              <h3 className="text-2xl md:text-3xl text-black mb-8">
                To craft exceptional brand experiences, we embrace a multidisciplinary approach—blending strategy, creativity, and technology—while working hand-in-hand with our clients every step of the way.
              </h3>
              <Link href="/studios">
                <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
                  View Our Services <ArrowRight size={18} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Re-export as a forwardRef component if needed elsewhere
const ForwardedFindUrJobSection = React.forwardRef<HTMLElement>((_props) => {
  return <FindUrJobSection {..._props} />;
});
ForwardedFindUrJobSection.displayName = "FindUrJobSection";

export default ForwardedFindUrJobSection;