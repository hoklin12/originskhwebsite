"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Updated team data to match the image
const TEAM_MEMBERS = [
  {
    name: "Prof. BK",
    position: "Owner & Studio Director",
  },
  {
    name: "Sam Wujiale",
    position: "Co-founder & Studio Director",
  },
  {
    name: "Sreng Sannyaliza",
    position: "Co-founder & Studio Manager",
  },
];

const TeamSection = React.forwardRef<HTMLElement>((props, ref) => {
  return (
    <section id="studios" ref={ref} className="py-24 bg-white px-12">
      {/* Full width wrapper with inner max-width */}
      <div className="mx-auto w-full max-w-screen-xl">
        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-96 bg-gray-300 relative overflow-hidden rounded-t-xl">
                {/* Image placeholder */}
                <motion.img
                  src="/api/placeholder/400/384"
                  alt={`${member.name} - ${member.position}`}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <motion.div
                className="p-6 bg-white rounded-b-xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                viewport={{ once: true }}
              >
                <motion.h3
                  className="font-bold text-xl text-orange-500 mb-2"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-900 font-medium"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {member.position}
                </motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="mx-auto w-full max-w-screen-xl pt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 translate-x-5">
          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h3 className="text-2xl md:text-3xl text-black mb-8">
              Think you&#39;d be a good addition to our team?
            </h3>
            <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
              Hiring <ArrowRight size={18} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

TeamSection.displayName = "TeamSection";
export default TeamSection;