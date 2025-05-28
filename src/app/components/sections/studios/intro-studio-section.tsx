"use client"
import { useEffect, useRef } from "react"
import React from "react"
import Image from "next/image"

// Using Record<string, never> instead of {} to fix the linter error
type IntroStudiosSectionProps = Record<string, never>

const IntroStudiosSection = React.forwardRef<HTMLElement, IntroStudiosSectionProps>((props, ref) => {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Start scroll in the middle section for seamless effect
    container.scrollLeft = container.scrollWidth / 3
    const third = container.scrollWidth / 3

    // Handle boundary wrapping
    const checkScrollBoundaries = () => {
      if (container.scrollLeft <= 1) {
        container.scrollLeft = third + 1
      } else if (container.scrollLeft >= third * 2 - 1) {
        container.scrollLeft = third - 1
      }
    }

    container.addEventListener("scroll", checkScrollBoundaries, { passive: true })

    return () => {
      container.removeEventListener("scroll", checkScrollBoundaries)
    }
  }, [])

  const images = [
    { src: "/CUSTIN03.png", className: "h-80 w-80" },
    { src: "/CUSTIN07.png", className: "h-60 w-80" },
    { src: "/CUSTIN08.png", className: "h-60 w-80" },
    { src: "/CUSTIN16.png", className: "h-80 w-80" },
    { src: "/CUSTIN14.png", className: "h-60 w-80" },
  ]

  // Repeat images 3x for seamless infinite scroll
  const tripled = [...images, ...images, ...images]

  return (
    <section ref={ref} id="intro" className="min-h-screen bg-white pt-32 flex flex-col justify-center items-center">
      <div className="text-center mb-4 px-8">
        <h2
          className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-normal mb-6 text-black"
          style={{ fontFamily: "DM Serif Text" }}
        >
          We are a creative agency
          <br />
          helping brands revive their dreams
        </h2>
      </div>

      <div className="pt-16">
        {/* Manual-infinite scrollable images */}
        <div
          ref={scrollRef}
          className="overflow-x-auto whitespace-nowrap space-x-6 flex items-center scrollbar-hide"
          style={{ scrollBehavior: "auto" }}
        >
          {tripled.map((img, idx) => (
            <Image
              key={idx}
              src={img.src || "/placeholder.svg"}
              alt={`Project ${idx}`}
              width={300}
              height={300}
              unoptimized
              className={`inline-block rounded-2xl shadow-lg ${img.className}`}
            />
          ))}
        </div>
      </div>

      <div className="container pt-16 relative z-10 px-24 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="w-full md:w-full text-left">
            <h3 className="text-2xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-black to-gray-600 mb-8 font-normal">
              To create brand experiences of the highest caliber, we take a multi-disciplinary approach to our work by
              seamlessly integrating strategy, creative, and technology, and staying in close partnership with our
              clients.
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
})

IntroStudiosSection.displayName = "IntroStudiosSection"

export default IntroStudiosSection
