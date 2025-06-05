'use client';

import { useRef } from "react";
import Image from "next/image";
import FloatingShape from "../ui/floating-shape";

export default function UnderConstruction() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gray-100 px-8"
    >
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
      <div className="bg-white p-10 rounded-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Under Construction</h1>
        <p className="text-lg text-gray-600 mb-6">
          We&#39;re working hard to bring you something great. Stay tuned!
        </p>
        <Image
          src="/construction-image.png"
          alt="Under Construction"
          width={600}
          height={400}
          className="object-cover rounded-2xl"
          priority
          rel="preload"
        />
      </div>
    </section>
  );
}
