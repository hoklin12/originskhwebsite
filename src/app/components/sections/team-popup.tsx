

"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface TeamMember {
  name: string;
  position: string;
  image: string;
  description?: string;
  education?: string;
  expertise?: string[];
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

interface TeamMemberModalProps {
  member: TeamMember | null;
  onClose: () => void;
}

export default function TeamMemberModal({ member, onClose }: TeamMemberModalProps) {
  useEffect(() => {
    if (member) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [member]);

  if (!member) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 pointer-events-none"
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 pointer-events-auto"
          onClick={onClose}
        />

        {/* Modal Container */}
        <div className="fixed inset-0 flex items-center justify-center px-4 pointer-events-auto">
          <motion.div
            className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 w-full max-w-2xl max-h-[95vh] overflow-hidden transform transition-all duration-700 ease-out scale-100"
            style={{
              boxShadow: '0 25px 60px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex justify-end p-4">
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-all duration-200 hover:scale-110 z-10 relative"
              >
                <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
              </button>
            </div>

            {/* Main Content */}
            <div className="px-4 sm:px-6 pb-6">
              {/* Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="relative w-32 h-32 sm:w-48 sm:h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-orange-300 shadow-2xl">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.position}`}
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>

                  <h1 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h1>
                  <p className="text-lg sm:text-2xl text-orange-600 font-semibold mb-4">
                    {member.position}
                  </p>
                </div>

                {/* Description */}
                {member.description && (
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-4 sm:p-8 mb-6 border-2 border-orange-200">
                    <div className="text-center">
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-3">
                        {member.description}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}