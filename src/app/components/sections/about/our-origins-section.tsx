"use client"
import Image from "next/image"
import { motion } from "framer-motion"

const OurOriginsSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotate: -5,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.2,
      },
    },
  }

  const quoteVariants = {
    hidden: {
      opacity: 0,
      x: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  // Helper function to render each timeline block
  const renderTimelineBlock = (
    year: string,
    quotes: string[],
    imageLeft: boolean,
    imgSrc: string,
    headingColor?: string,
    quoteBorderColor?: string,
    textAlignment?: string,
    quoteTextColor?: string,
  ) => {
    return (
      <motion.div
        className={`max-w-6xl mx-auto flex flex-col ${
          imageLeft ? "md:flex-row" : "md:flex-row-reverse"
        } items-center gap-8 md:gap-16 pt-8`}
        key={year}
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Image */}
        <motion.div className="w-full md:w-1/3" variants={imageVariants}>
          <motion.div
            className="relative aspect-square rounded-lg overflow-hidden"
            whileHover={{
              scale: 1.05,
              rotate: imageLeft ? 2 : -2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <Image src={imgSrc || "/placeholder.svg"} alt="Timeline visual" fill className="object-cover" priority rel="preload"/>
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>

        {/* Text Content */}
        <motion.div className="w-full md:w-2/3 space-y-6" variants={textVariants}>
          <motion.h2
            className={`text-3xl md:text-4xl font-bold ${headingColor || "text-gray-900"}`}
            variants={quoteVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
          >
            {year}
          </motion.h2>
          <motion.div className="space-y-8" variants={containerVariants}>
            {quotes.map((quote, quoteIndex) => (
              <motion.div
                key={quoteIndex}
                className={`${quoteBorderColor || "border-l-4"} border-gray-200 pl-6 ${textAlignment || ""}`}
                variants={quoteVariants}
                whileHover={{
                  x: 10,
                  transition: { duration: 0.2 },
                }}
              >
                <motion.blockquote
                  className={`text-lg md:text-xl italic ${quoteTextColor || "text-gray-600"}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: quoteIndex * 0.2,
                  }}
                  viewport={{ once: true }}
                >
                  {`"${quote}"`}
                </motion.blockquote>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    )
  }

  return (
    <section className="bg-white py-12 px-8 md:py-24">
      <motion.div
        className="border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm space-y-4 md:space-y-0 mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.p
          className="text-gray-600 font-medium"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          OUR ORIGINS & TEAM
        </motion.p>
      </motion.div>

      {/* Timeline Blocks */}
      <motion.div variants={containerVariants} initial="hidden" animate="visible">
        {renderTimelineBlock(
          "2017 - 2018",
          [
            "Started creative exploration in Singapore.",
            "Collaborative Projects in Bacolod, Perth, Johor Bahru & Kuala Lumpur.",
          ],
          true,
          "/pic-2017-2018.jpeg",
          undefined,
          undefined,
          undefined,
          undefined,
        )}

        {renderTimelineBlock(
          "2019",
          ["Started Creative consultation in Phnom Penh."],
          true,
          "/pic2019.png",
          "text-gray-900",
          "border-l-4",
          "",
          undefined,
        )}

        {renderTimelineBlock(
          "2020 - 2021",
          ["Partnering with brands to adapt their businesses throughout the Covid-19 period."],
          true,
          "/pic2019.png",
          undefined,
          undefined,
          undefined,
          undefined,
        )}

        {renderTimelineBlock(
          "2022 - 2024",
          [
            "Expanded consultation services to include Production & Concept.",
            "Collaborative Projects in El Nido, Honolulu, Kolkata, Los Angeles & Tokyo.",
          ],
          true,
          "/pic-2022-2024.jpg",
          "text-gray-900",
          "border-l-4",
          undefined,
          undefined,
        )}

        {renderTimelineBlock(
          "2025",
          [
            "Driven by a bigger dream and bold vision, ORIGINS STUDIOS was established to spark creativity and bring ideas to life.",
          ],
          true,
          "/pic2025.jpg",
          "text-orange-500",
          "border-l-4",
          "",
          "text-orange-500",
        )}
      </motion.div>
    </section>
  )
}

export default OurOriginsSection
