
"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TEAM_MEMBERS, TeamMember } from "@/data/teamMembers";
import TeamMemberModal from "../team-modal";

const TeamSection = React.forwardRef<HTMLElement>((props, ref) => {
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
    <section id="studios" ref={ref} className="pb-32 bg-white px-8 sm:px-8">
      <div className="w-full">
        {/* Header */}
        <div className="border-t border-gray-300 flex justify-between items-center text-sm mb-12">
          <p className="text-gray-600 font-medium">OUR TEAM</p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={selectedMember ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onHoverStart={() => handleHover(member.image)}
              onClick={() => setSelectedMember(member)}
            >
              {/* Image container */}
              <div className="h-80 sm:h-96 bg-gray-300 relative overflow-hidden mb-4 rounded-xl">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.position}`}
                  fill
                  className="object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                  priority={index < 3}
                  loading={index > 2 ? "lazy" : "eager"}
                />
              </div>

              {/* Text content */}
              <div className="text-left">
                <h3 className="font-bold text-xl sm:text-2xl text-black mb-1 group-hover:translate-x-1 transition-transform duration-200">
                  {member.name}
                </h3>
                <p className="text-gray-600 font-medium text-sm sm:text-base">
                  {member.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="pt-16 sm:pt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
            <div className="w-full md:w-1/2 text-left">
              <h3 className="text-xl sm:text-2xl md:text-3xl text-black mb-6">
                Think you&apos;d be a good addition to our team?
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

      <TeamMemberModal 
        member={selectedMember} 
        onClose={() => setSelectedMember(null)} 
      />
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;
