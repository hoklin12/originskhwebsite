"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
export default function ServiceSection() {
  return (
    <section
      id="journey"
      className="py-15 md:py-24 bg-white relative overflow-hidden px-4"
    >
      {/* Inner container with no padding */}
      <div className="w-full px-0">
        {/* Content wrapper with no max-width and no padding */}
        <div className="mx-0 w-full">
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
}