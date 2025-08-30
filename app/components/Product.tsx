"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "协作知识库",
    description: "让协同办公、业务应用更智能,接入DeepSeek，私有化部署，灵活搭建多场景智能体",
    imageUrl: "/product/team_work.svg",
    category: "Ai 人工智能",
  },
  {
    id: 2,
    title: "大模型+智能体",
    description: "Deepseek、豆包、通义千问、文心一言...等大模型私有化部署+向量模型、OCR模型、流程信息抽取模型、意图识别模型、语音识别模型、票证识别模型…等小模型",
    imageUrl: "/product/artificial_intelligence.svg?height=800&width=600",
    category: "Ai 人工智能",
  },
  {
    id: 3,
    title: "智能问答",
    description: "多轮问答帮助用户获得更精准答案、用户可选择不同主题机器人、可选择不痛模型、可对回答内容查看片段溯源",
    imageUrl: "/product/questions.svg?height=600&width=800",
    category: "Ai 人工智能",
  },
  {
    id: 4,
    title: "流程管理",
    description: "流程表单管理、流程权限管理、流程数据报表、流程监控与预警、流程自动仿真、流程效率分析",
    imageUrl: "/product/process.svg?height=600&width=800",
    category: "数智化工作平台",
  },
  {
    id: 5,
    title: "门户管理",
    description: "集团化门户、专业化门户、生态化门户、移动门户、角色门户",
    imageUrl: "/product/online_organizer.svg?height=600&width=800",
    category: "数智化工作平台",
  },
  {
    id: 6,
    title: "文会事",
    description: "公文管理、会议管理、督办管理、新闻管理、任务管理、项目协作",
    imageUrl: "/product/events.svg?height=600&width=800",
    category: "数智化工作平台",
  },
  {
    id: 7,
    title: "可视化搭建引擎",
    description: "表单流程拖拽可得、可视化表单、流程设计，所见即所得配置方式，门槛低、业务人员易上手丰富控件支持表单自定义，适配多行业个性化需求",
    imageUrl: "/product/design_tools.svg?height=600&width=800",
    category: "代代码平台",
  },
    {
    id: 8,
    title: "可视化数据引擎",
    description: "数据分析一目了然，原生系统图表引擎，快速构建多层级数据，自动穿透汇总；支持多维度数据分析，多样式业务报表展示，支撑管理决策。",
    imageUrl: "/product/data_trends.svg?height=600&width=800",
    category: "代代码平台",
  },
    {
    id: 9,
    title: "规则配置引擎",
    description: "灵活应对业务变化，业务表单关系、业务场景等可配置，快速构建业务分析模型，深化业务应用。提供消息、新建等触发类型，让业务灵活智能。",
    imageUrl: "/product/settings.svg?height=600&width=800",
    category: "代代码平台",
  },
]

const categories = ["全部", ...new Set(projects.map((project) => project.category))]

export default function Product() {
  const [filter, setFilter] = useState("全部")

  const filteredProjects = filter === "全部" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section id="service-content" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">服务内容</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            专项解决方案和对应的产品内容。
          </p>
        </motion.div>

        <div className="flex mb-8 overflow-x-auto space-x-4 px-2 sm:space-x-4 sm:px-0 scrollbar-hide sm:justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden p-12">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    width={160}
                    height={128}
                    className="object-contain rounded-xl mx-auto"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href="https://work.weixin.qq.com/kfid/kfcbbb3d72fe4f7da49"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    获取方案
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
