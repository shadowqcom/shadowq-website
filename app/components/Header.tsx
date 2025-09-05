"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-3 sm:p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">影象限</span>
            <img
              className="h-8 w-auto"
              src="/logo.svg"
              alt="影象限"
            />
          </Link>
        </div>
        <div className="flex gap-x-4 sm:gap-x-8 lg:gap-x-12 ml-4 md:ml-4 lg:ml-0">
          <Link
            href="/"
            className="text-xs sm:text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            首页
          </Link>
          <button
            onClick={() => scrollToSection("service-features")}
            className="text-xs sm:text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            特点
          </button>
          <button
            onClick={() => scrollToSection("service-content")}
            className="text-xs sm:text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            服务
          </button>
          <button
            onClick={() => scrollToSection("our-journey")}
            className="text-xs sm:text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            关于
          </button>
          <button
            onClick={() => scrollToSection("stay-inspired")}
            className="text-xs sm:text-sm font-semibold leading-6 text-foreground hover:text-primary transition-colors cursor-pointer"
          >
            联系
          </button>
        </div>
        <div className="flex flex-1 justify-end">
          {mounted && (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full p-2 bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>
          )}
        </div>
      </nav>
    </motion.header>
  )
}
