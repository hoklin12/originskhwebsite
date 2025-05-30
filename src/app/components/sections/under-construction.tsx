'use client';

import { useRef } from "react";
import Image from "next/image";

export default function UnderConstruction() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gray-100 px-8"
    >
      <div className="bg-white p-10 rounded-lg shadow-lg text-center">
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
        />
      </div>
    </section>
  );
}
