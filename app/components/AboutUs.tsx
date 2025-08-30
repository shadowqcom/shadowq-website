"use client"

import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          className="text-5xl font-black mb-8 text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          关于我们
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h3 className="text-3xl font-bold mb-4 text-white">我们是创新探索者</h3>
            <p className="text-gray-300 mb-6">
               我们致力于将前沿技术与创新理念深度融合，为企业和组织打造高效、智能、可靠的数字化解决方案。团队成员拥有丰富的行业经验，涵盖人工智能、低代码平台、流程管理等多个领域，能够为客户量身定制最适合的产品与服务。
            </p>
            <p className="text-gray-300">
              以用户为中心、以创新为驱动，我们帮助众多品牌实现数字化转型，提升业务效率，激发组织活力。我们相信，技术的价值在于赋能每一位客户，共同迈向智慧未来。
            </p>
          </motion.div>
          <motion.div
            className="relative h-96"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg transform rotate-3"></div>
            <div className="absolute inset-0 bg-gray-800 rounded-lg transform -rotate-3 flex items-center justify-center">
              <p className="text-2xl font-bold text-white">Innovating and exploring in work</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
