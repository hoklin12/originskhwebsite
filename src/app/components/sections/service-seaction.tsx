"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ServiceSection() {
  return (
    <section
      id="journey"
      className="py-15 md:py-24 bg-white relative overflow-hidden px-12"
    >
      {/* Full-width layout with inner content max-width */}
      <div className="mx-auto w-full max-w-screen-xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 translate-x-5">
          {/* Text Section */}
          <div className="w-full md:w-[75%] text-left">
            <h3 className="text-2xl md:text-3xl text-black mb-8">
              To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by
              seamlessly integrating strategy, creative, and technology, and staying in close partnership with our
              clients.
            </h3>
            <Link href="/studios">
              <button className="flex items-center px-6 py-3 bg-black text-white rounded-full font-bold hover:bg-orange-600 transition-colors text-sm md:text-base">
                View Our Services <ArrowRight size={18} className="ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}