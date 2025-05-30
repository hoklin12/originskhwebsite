"use client"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function OurWorkSection() {
  const [activeCategory, setActiveCategory] = useState("ALL")
  const [flippedImages, setFlippedImages] = useState<Set<string>>(new Set())
  const [showAll, setShowAll] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle mobile resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { label: "ALL", href: "" },
    { label: "CREATIVE", href: "" },
    { label: "PRODUCTION", href: "" },
    { label: "CONCEPT", href: "" },
  ]

  const imageMap: { [key: string]: { src: string; caption: string; hashtags: string; description: string }[] } = {
    ALL: [
      {
        src: "/SMART.png",
        caption: "T-Shirt Campaign",
        hashtags: "#ALL",
        description: "none",
      },
      {
        src: "/stargazerXPic6.png",
        caption: "Creative Concept",
        hashtags: "#ALL",
        description: "none.",
      },
      {
        src: "/DSC04264.jpg",
        caption: "Creative Concept",
        hashtags: "#ALL",
        description: "none.",
      },
    ],
    CREATIVE: [
      { src: "/mtstick-001.png", 
        caption: "NONE", 
        hashtags: "#CREATIVE", 
        description: "none" },
      {
        src: "/tunsai5.jpg",
        caption: "NONE",
        hashtags: "#CREATIVE",
        description: "none",
      },
      {
        src: "/SMART.png",
        caption: "NONE",
        hashtags: "#CREATIVE",
        description: "none",
      },
    ],
    PRODUCTION: [
      { src: "/DSC04264.jpg", caption: "none", hashtags: "#PRODUCTION", description: "none" },
      { src: "/stargazerXPic6.png", caption: "none", hashtags: "#PRODUCTION", description: "none" },
      { src: "/DSC06741.png", caption: "none", hashtags: "#PRODUCTION", description: "none" },
    ],
    CONCEPT: [
      {
        src: "/dog.png",
        caption: "CONCEPT Shot",
        hashtags: "#CONCEPT",
        description: "none",
      },
      { src: "/maxxx-009.png", caption: "none", hashtags: "#CONCEPT", description: "none" },
      { src: "/back.jpg", caption: "none", hashtags: "#CONCEPT", description: "none" },
    ],
  }

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setFlippedImages(new Set())
    setShowAll(false)
  }

  const handleFlip = (uniqueKey: string) => {
    setFlippedImages((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(uniqueKey)) {
        newSet.delete(uniqueKey)
      } else {
        newSet.add(uniqueKey)
      }
      return newSet
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      setFlippedImages(new Set())
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const currentImages = imageMap[activeCategory] || []

  const imagesToShow = isMobile && !showAll ? currentImages.slice(0, 3) : currentImages

  return (
    <section id="manifesto" className="pt-16 pb-8 bg-white relative overflow-hidden px-8">
      <div className="container relative z-10 mx-auto">
        <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0" />

        <div className="flex items-center gap-4 mb-8">
          <span className="px-4 py-2 rounded-full text-sm font-medium text-black">RECENT WORK:</span>

          {!isMobile &&
            navItems.map((item) => {
              const active = activeCategory === item.label
              return (
                <button
                  key={item.label}
                  onClick={() => handleCategoryChange(item.label)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
                    ${active ? "bg-black text-white" : "bg-gray-300 text-black hover:bg-black hover:text-white"}
                  `}
                >
                  {item.label}
                </button>
              )
            })}
        </div>

        {/* Grid of Square Cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full mx-auto ${
            isMobile && currentImages.length > 3 && !showAll ? "mb-4" : ""
          }`}
        >
          {imagesToShow.map((image, index) => {
            const uniqueKey = `${activeCategory}-${index}-${image.src}`
            const isFlipped = flippedImages.has(uniqueKey)

            return (
              <div key={uniqueKey} className="relative aspect-square perspective-1000">
                <div
                  className={`relative h-full w-full transition-transform duration-700 transform-style-preserve-3d ${
                    isFlipped ? "rotate-y-180" : ""
                  } cursor-pointer`}
                  onClick={() => handleFlip(uniqueKey)}
                >
                  {/* Front Side */}
                  <div className="absolute w-full h-full backface-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.caption}
                      fill
                      className="object-cover rounded-2xl shadow-md"
                      priority
                    />
                  </div>

                  {/* Back Side */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gray-100 rounded-lg flex flex-col items-center justify-center p-4 text-center text-black">
                    <h3 className="font-bold">{image.caption}</h3>
                    <p className="text-sm text-gray-600 mt-1">{image.hashtags}</p>
                    <p className="mt-2 text-sm">{image.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Show More Button (Mobile Only) */}
        {isMobile && currentImages.length > 3 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-1 text-orange-500 hover:text-orange-700 font-semibold"
              aria-expanded={showAll}
              aria-controls="image-list"
            >
              {showAll ? "Show Less" : "Show More"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

