"use client"

import { motion } from "framer-motion"

export default function WearYourStory() {
  return (
    <section className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-4xl font-bold text-foreground mb-6">简介</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            深圳市影象限软件有限公司（简称：影象限）
            成立于2021年，是一家现代化的软件技术服务商。
            秉承用数字技术提升客户价值的使命，提供软件与数字技术服务，
            致力于成为企业数字化转型可信赖的合作伙伴。
          </p>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
          <hr className="bg-gray-300 border-0 h-1 w-32 mx-auto my-14 rounded" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
