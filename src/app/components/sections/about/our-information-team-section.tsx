"use client"
import React from "react"

const OurInformationTeamSection = React.forwardRef<HTMLElement>((props, ref) => {
  const stats = [
    {
      number: "8 Years",
      description:
        "We're proud of the impactful work we've done and the recognition we've received, but that's nothing compared to how excited we are about our future.",
    },
    {
      number: "6 Employees",
      description:
        "We're a diverse group of creatives and technologists. We don't edit who we are; we show up as ourselves every day. Our different backgrounds, styles, and talents make us, us.",
    },
    {
      number: "01 Office",
      description: "We have workspaces in Phnom Penh, Cambodia.",
    },
  ]

  return (
    <section
      ref={ref}
      id="intro"
      className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 flex flex-col justify-center"
    >
      <div className="container relative z-10 px-4 mx-auto">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col lg:flex-row items-center justify-center mb-12 sm:mb-16 md:mb-20 lg:mb-24 xl:mb-28"
          >
          <div className="w-full lg:w-1/2 mb-4 sm:mb-6 lg:mb-0 text-center lg:text-left px-6">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-light text-gray leading-tight">
              {stat.number}
            </h2>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-6">
            <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl text-center lg:text-left leading-relaxed">
              {stat.description}
            </p>
          </div>
          </div>
        ))}
      </div>
    </section>
  )
})

OurInformationTeamSection.displayName = 'OurInformationTeamSection';
export default OurInformationTeamSection