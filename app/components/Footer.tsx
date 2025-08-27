"use client"

import Link from "next/link"

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 grid grid-cols-3 gap-4 justify-items-center sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          <div className="pb-6">
            <button
              onClick={() => scrollToSection("our-journey")}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              关于
            </button>
          </div>
          <div className="pb-6">
            <button
              onClick={() => scrollToSection("service-content")}
              className="text-sm leading-6 text-muted-foreground hover:text-foreground"
            >
              作品
            </button>
          </div>
          {["服务", "联系", "隐私", "条款"].map((item) => (
            <div key={item} className="pb-6">
              <Link
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm leading-6 text-muted-foreground hover:text-foreground"
              >
                {item}
              </Link>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} 影象限. All rights reserved.
        </p>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">
        <p className="mt-4 text-center text-xs leading-4 text-muted-foreground">粤ICP备2024284751号-2</p>
        </a>
        
      </div>
    </footer>
  )
}
