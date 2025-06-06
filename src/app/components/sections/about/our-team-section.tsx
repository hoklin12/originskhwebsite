"use client";

import React from "react";
import { motion } from "framer-motion";

const TEAM_MEMBERS = [
  {
    name: "Prof. BK",
    position: "Owner & business Director",
    image: "/prof-bk.png", // ← custom image
  },
  {
    name: "Sam Wujiale",
    position: "Founder & Studio Director",
    image: "/sam.png", // ← custom image
  },
  {
    name: "Sreng Sannyaliza",
    position: "Co-founder & Studio Manager",
    image: "/liza.png", // ← custom image
  },
];

const TeamSection = React.forwardRef<HTMLElement>((props, ref) => {
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
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              {/* Image container with rounded corners */}
              <motion.div
                className="h-80 sm:h-96 bg-gray-300 relative overflow-hidden mb-4 rounded-xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={member.image} // ← dynamically use each member's image
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-full object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>

              {/* Text content outside image */}
              <div className="text-left">
                <motion.h3
                  className="font-bold text-xl sm:text-2xl text-black mb-1"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600 font-medium text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {member.position}
                </motion.p>
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
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
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

TeamSection.displayName = "TeamSection";
export default TeamSection;