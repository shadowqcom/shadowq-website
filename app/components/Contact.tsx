"use client"

import { motion } from "framer-motion"

export default function Contact() {
  return (
    <section id="stay-inspired" className="bg-background py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4 text-center">联系我们</h2>
          <img
            src="/call.svg"
            alt="call"
            className="mx-auto mb-4 w-80"
          />
          <p className="text-muted-foreground mb-6 text-center">
            欢迎联系我们，获取更多解决方案。
          </p>
          <div className="text-center">
            <a
              href="https://bing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              微信客服
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center mt-6 mx-4 sm:mx-20 text-muted-foreground gap-y-2">
            <a href="mailto:swatxhim@outlook.com" className="hover:text-primary transition-colors">
              Email: swatxhim@outlook.com
            </a>
            <a href="tel:+8615811807109" className="hover:text-primary transition-colors">
              Phone: (+86) 15811807109
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
