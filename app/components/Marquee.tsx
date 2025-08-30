"use client"

import { motion } from "framer-motion"

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span
              className="text-4xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-transparent px-4"
              style={{
                WebkitTextStroke: "1px #9ca3af", // tailwind gray-400
              }}
            >
              创新 & 探索
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
