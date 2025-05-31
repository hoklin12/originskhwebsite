
"use client"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import VideoSection from "../video-section"
import LogoOriginsSection from "../logo-origins-section"

export default function IntroHomeSection() {
  return (
    <section id="intro" className="min-h-screen bg-white m-0 py-0 ">
      <LogoOriginsSection />

      <VideoSection
        videoSrc="/origins-showreel-2025.mp4"
        id="intro"
        showControls={true}
        autoPlay={false}
        muted={false}
        loop={true}
      />

      <div className="text-center mb-4 px-8">
        <h2 className="text-5xl font-normal mb-6 text-black" style={{ fontFamily: "DM Serif Text" }}>
          We are a creative agency
          <br />
          helping brands revive their dreams
        </h2>
      </div>

      <div className="text-center px-8">
        <Link
          href="/portfolio"
          className="bg-orange-500 text-white rounded-full px-8 py-4 font-light inline-flex items-center gap-3 hover:bg-orange-600 transition-colors duration-300"
        >
          View All Work
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  )
}

