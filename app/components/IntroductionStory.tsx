"use client"

import { motion } from "framer-motion"

export default function IntroductionStory() {
  return (
    <section id="our-introduction-story" className="bg-background py-20">
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

          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mt-4">

          <div className="flex flex-col items-center bg-background rounded-2xl shadow-md p-6 w-72">
            <img src="/knowledge.svg" alt="知识工作者" className="h-72 w-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">专业受尊敬的知识工作者</h3>
            <p className="text-muted-foreground text-center text-base">
              我们靠专业和知识落地交付让客户满意；获得客户的尊敬是我们的最高追求。
            </p>
          </div>
          <div className="flex flex-col items-center bg-background rounded-2xl shadow-md p-6 w-72">
            <img src="/innovate.svg" alt="活力" className="h-72 w-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">坚持创新的活力新生代</h3>
            <p className="text-muted-foreground text-center text-base">
              我们不断探索新的可能性，通过创新来解决现有问题和挑战，为客户带来新的价值和机遇。
            </p>
          </div>
          <div className="flex flex-col items-center bg-background rounded-2xl shadow-md p-6 w-72">
            <img src="/life.svg" alt="热爱生活" className="h-72 w-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">热爱生活的乐观主义者</h3>
            <p className="text-muted-foreground text-center text-base">
              我们对生活充满了热情和激情，保持乐观的心态，积极应对，传递积极向上的力量。
            </p>
          </div>
        </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
