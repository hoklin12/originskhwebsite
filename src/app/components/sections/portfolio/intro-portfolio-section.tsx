'use client';
import Image from 'next/image';

export default function IntroPortfolioSection() {
  return (
    <section id="intro" className="bg-white m-0 p-0 px-8">
      <div className="w-full flex justify-center items-center mb-20">
        <Image
          src="/originlogo.png"
          alt="Origins Logo"
          width={1350}
          height={1350}
          className="object-contain hidden md:block"
          priority
        />
      </div>

    </section>
  );
}