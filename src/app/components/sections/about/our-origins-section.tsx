

"use client"
import { useRef, forwardRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { Flame, Sparkles } from "lucide-react"
import { cn } from "../../ui/utils"
import GetInTouchSection from "../get-in-touch-section"

type TimelineItem = {
  years: string
  title: string
  description: string
  image: string
  highlight: boolean
}

const timelineData: TimelineItem[] = [
  {
    years: "2017-2018",
    title: "Creative Exploration Begins",
    description:
      "Our creative journey began in Singapore's vibrant ecosystem. Expanded collaborations across Southeast Asia and Australia",
    image: "/pic-2017-2018.jpeg",
    highlight: false,
  },
  {
    years: "2019",
    title: "Creative Consultation Launch",
    description: "Launched creative consultation services in Cambodia. Developed innovative solutions for emerging markets",
    image: "/pic2019.png",
    highlight: true,
  },
  {
    years: "2020-2021",
    title: "Pandemic Adaptation",
    description: "Helped brands adapt during the pandemic with digital transformation. Pioneered remote creative collaboration frameworks",
    image: "/pic2019.png",
    highlight: false,
  },
  {
    years: "2022-2024",
    title: "Service Expansion",
    description:
      "Expanded to full-service production and concept development. Global projects across 5 continents with diverse clients",
    image: "/pic2025.jpg",
    highlight: true,
  },
  {
    years: "2025",
    title: "New Beginnings",
    description:
      "Officially launched ORIGINS STUDIOS as a creative powerhouse. Dedicated to turning bold visions into extraordinary realities",
    image: "/pic2025.jpg",
    highlight: true,
  },
]

const FloatingShape = ({ delay = 0, duration = 8, className = "" }: { delay?: number; duration?: number; className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 0.3, 0],
        scale: [0.8, 1.2, 0.8],
        rotate: [0, 180, 360],
      }}
      transition={{
        repeat: Number.POSITIVE_INFINITY,
        duration,
        delay,
        ease: "easeInOut",
      }}
      className={cn("absolute pointer-events-none", className)}
    />
  )
}

interface TimelineItemProps {
  item: TimelineItem
  index: number
  isActive: boolean
  progress: MotionValue<number>
}

const TimelineItem = ({ item, index, isActive, progress }: TimelineItemProps) => {
  const itemRef = useRef(null)
  return (
    <motion.div
      ref={itemRef}
      className="min-h-[90vh] flex items-center justify-center px-8 md:px-12 py-12"
      style={{
        opacity: useTransform(progress, [index - 0.5, index, index + 0.5], [0.3, 1, 0.3]),
        scale: useTransform(progress, [index - 0.5, index, index + 0.5], [0.8, 1, 0.8]),
      }}
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            className={cn("space-y-6", index % 2 === 0 ? "md:order-1" : "md:order-2")}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-black text-white font-mono font-bold text-lg"
            >
              <Flame className="w-5 h-5 text-orange-500" />
              {item.years}
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight"
            >
              {item.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-lg md:text-xl leading-relaxed"
            >
              {item.description}
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}>
            {/* <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white font-bold px-8 py-3 rounded-full transition-all duration-300 group text-lg">
                Learn More
                <motion.div
                  className="ml-3"
                  animate={{ x: [0, 6, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                >
                  →
                </motion.div>
              </Button>
            </Link> */}
            <GetInTouchSection></GetInTouchSection>
            </motion.div>
            
          </motion.div>

          <motion.div
            className={cn("relative", index % 2 === 0 ? "md:order-2" : "md:order-1")}
            initial={{ opacity: 0, x: index % 2 === 0 ? 60 : -60 }}
            animate={{ opacity: isActive ? 1 : 0.5, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent z-10" />
              <motion.img
                src={item.image}
                alt={item.title}
                className="w-full h-80 md:h-[500px] object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute top-6 right-6 z-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 10, ease: "linear" }}
                  className="w-10 h-10 border-2 border-orange-500 rounded-full flex items-center justify-center bg-white/90"
                >
                  <Sparkles className="w-5 h-5 text-orange-500" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

const OurOriginsSection = forwardRef<HTMLElement>((props, ref) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })
  const currentSection = useTransform(smoothProgress, [0, 1], [0, timelineData.length - 1])

  useEffect(() => {
    const unsubscribe = currentSection.onChange((latest) => {
      const newIndex = Math.round(latest)
      if (newIndex !== activeIndex && newIndex >= 0 && newIndex < timelineData.length) {
        setActiveIndex(newIndex)
      }
    })
    return unsubscribe
  }, [currentSection, activeIndex])

  return (
    <section ref={ref} id="origins" className="relative bg-white text-black overflow-hidden">
      <style jsx global>{`
        html {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        html::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      {/* Background shapes */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingShape delay={0} duration={12} className="top-1/4 left-1/4 w-40 h-40 rounded-full bg-orange-100" />
        <FloatingShape delay={2} duration={15} className="top-3/4 right-1/4 w-32 h-32 rounded-full bg-gray-100" />
        <FloatingShape delay={4} duration={10} className="top-1/2 right-1/3 w-20 h-20 rounded-full bg-orange-200" />
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

      {/* Header */}
      <div className="relative z-10 pt-20 pb-10 text-center">
        <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            <span className="text-black">Our</span>
            <span className="ml-4 text-orange-500">Origins</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-l md:text-2xl mb-8">
            Scroll to explore the journey that shaped who we are today
          </p>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
            className="inline-flex items-center gap-3 text-orange-500"
          >
          </motion.div>
        </motion.div>
      </div>

      {/* Scrollable Content */}
      <div ref={containerRef} className="relative z-10">
        {timelineData.map((item, index) => (
          <TimelineItem
            key={index}
            item={item}
            index={index}
            isActive={index === activeIndex}
            progress={currentSection}
          />
        ))}
      </div>

      <div className="h-16" />
    </section>
  )
})

OurOriginsSection.displayName = "OurOriginsSection"
export default OurOriginsSection




