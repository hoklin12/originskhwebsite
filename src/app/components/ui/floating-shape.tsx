"use client"

import { motion } from "framer-motion"
import { cn } from "./utils"

interface FloatingShapeProps {
  delay?: number
  duration?: number
  className?: string
}

const FloatingShape = ({ delay = 0, duration = 8, className = "" }: FloatingShapeProps) => {
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

export default FloatingShape
