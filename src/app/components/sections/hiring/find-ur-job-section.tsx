
"use client";
import React from "react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import FloatingShape from "../../ui/floating-shape";

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
    <section id="findUrJob" className="bg-white relative overflow-hidden w-full m-0 px-8 py-32">
      {/* Full-width container with no left/right padding */}
      <div className="w-full mx-auto">
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
        {/* Title Section */}
        <div className="text-center mb-4">
          <h2
            className="text-4xl md:text-7xl font-serif mb-6 text-black"
            style={{ fontFamily: 'DM Serif Text' }}
          >
            Find Your Next Job
          </h2>
        </div>

        <div className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-8"></div>
        <div className="flex items-center gap-2 pb-32">
          <span className="px-4 py-2 rounded-full text-sm font-medium text-black">RECENTLY WORK:</span>
          {!isMobile &&
            navItems.map((item) => {
              const active = activeCategory === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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
            {"There are no opening currently. Please check back again!"}
          </p>
        </div>

        {/* Text section with px-8 */}
      <div className="text-left mb-4 px-8 pt-32 pb-24">
        <h2
          className="text-3xl md:text-5xl font-normal mb-6 text-black"
          style={{ fontFamily: 'DM Serif Text' }}
        >Equity, Inclusion & Opportunity at ORIGINS
        </h2>
            <div className="p-4 md:p-8 bg-light-green rounded-lg">
                <h3 className="text-l md:text-2xl text-black mb-8 font-light leading-relaxed">
                  At ORIGINS, we believe creativity thrives in a culture of inclusion, respect, and equity. We&apos;re committed to creating a welcoming environment where every team member feels seen, heard, and empowered to bring their whole self to the work.
                  {" "}We do not discriminate on the basis of race, color, religion, gender identity or expression, age, national origin, disability, marital status, sexual orientation, military status, or any other aspect of identity. Diversity doesn&apos;t just something we support—it&apos;s something we actively seek out and celebrate.
                  To ensure pay transparency and fairness, we follow clearly defined pay bands that align compensation with performance, growth, and impact across our teams. We&apos;re dedicated to fair opportunities at every level—from your first day to your next big promotion.
                  <br /><br />
                  As an equal opportunity employer, ORIGINS values the unique experiences and perspectives that each individual brings to our studio.
                </h3>
            </div>
      </div>



        {/* Hiring Journey Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
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

        {/* Call to Action Section */}
        <div className="w-full pt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 translate-x-5">
            <div className="w-full md:w-[75%] text-left">
              <h3 className="text-2xl md:text-3xl text-black mb-8">
                To craft exceptional brand experiences, we embrace a multidisciplinary approach—blending strategy, creativity, and technology—while working hand-in-hand with our clients every step of the way.
              </h3>
              <Link href="/studios">
                <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
                  View Our Services 
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
const ForwardedFindUrJobSection = React.forwardRef<HTMLElement>((props) => {
  return <FindUrJobSection {...props} />;
});
ForwardedFindUrJobSection.displayName = "FindUrJobSection";

export default ForwardedFindUrJobSection;


