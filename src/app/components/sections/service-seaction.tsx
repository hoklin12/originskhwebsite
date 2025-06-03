

"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <section id="journey" className="py-10 md:py-24 bg-white relative overflow-hidden px-8"> {/* Unified padding here */}
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-[75%] text-left">
            <h3 className="text-l md:text-3xl text-black mb-6">
              To craft exceptional brand experiences, we embrace a multidisciplinary approach—blending strategy, creativity, and technology—while working hand-in-hand with our clients every step of the way.
            </h3>
            <Link href="/studios">
              <button className="flex items-center px-4 py-2 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
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
    </section>
  );
}