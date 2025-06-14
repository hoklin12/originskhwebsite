

"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/teamMembers";

const OurManagementTeam = React.forwardRef<HTMLElement>((props, ref) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Set<string>>(new Set());

  // Preload all images when component mounts
  useEffect(() => {
    TEAM_MEMBERS.forEach(member => {
      const img = new window.Image();
      img.src = member.image;
    });
  }, []);

  // Preload specific image on hover
  const handleHover = (imageUrl: string) => {
    if (!preloadedImages.has(imageUrl)) {
      const img = new window.Image();
      img.src = imageUrl;
      setPreloadedImages(prev => new Set(prev).add(imageUrl));
    }
  };

  return (
    <section id="" ref={ref} className="pb-32 bg-white px-8 sm:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
          <p className="text-gray-600 font-medium">STUDIO TEAM</p>
        </div>

        {/* Team Grid */}
        <div className="flex overflow-x-auto overflow-y-hidden space-x-6 pb-4 md:grid md:grid-cols-5 md:gap-8 md:overflow-x-visible md:overflow-y-visible">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className="group cursor-pointer flex-shrink-0"
            >
              {/* Image container */}
              <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 relative overflow-hidden mb-4 rounded-full mx-auto">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                  priority={index < 5}
                  loading={index > 4 ? "lazy" : "eager"}
                />
              </div>

              {/* Text content */}
              <div className="text-center">
                <h3 className="font-bold text-xl sm:text-2xl text-black mb-1 group-hover:translate-x-1 transition-transform duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {member.position}
                </p>
              </div>
              </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="pt-16 sm:pt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-black mb-6">
                Think you'd be a good addition to our team?
              </h3>
              <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-400 transition-colors text-sm md:text-base">
                Hiring 
                <motion.div
                  className="ml-3"
                  animate={selectedMember ? {} : { x: [0, 6, 0] }}
                  transition={selectedMember ? {} : { repeat: Infinity, duration: 1.5 }}
                >
                  →
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
});

OurManagementTeam.displayName = "OurManagementTeam";
export default OurManagementTeam;