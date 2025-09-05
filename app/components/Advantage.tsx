"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useAnimation, useMotionValue } from "framer-motion"

const features = [
	{
		title: "数字化转型经验丰富",
		description:
			"深度参与多个行业的数字化转型项目，具备成熟的方法论和实践经验，能够针对企业痛点提供切实可行的数字化解决方案，助力客户实现业务创新与效率提升。",
		icon: "🔄",
	},
	{
		title: "定制化解决方案能力",
		description:
			"坚持“以客户为中心”的服务理念，根据企业实际业务场景和特定需求提供量身定制的软件开发与技术服务，避免标准化产品与业务需求不匹配的痛点。",
		icon: "🎯",
	},
	{
		title: "全生命周期技术支持",
		description:
			"提供从咨询规划、系统开发、部署上线到运营维护的全生命周期服务，确保客户在数字化转型过程中获得持续稳定的技术保障，降低长期运维成本。",
		icon: "🔧",
	},
	{
		title: "敏捷开发与快速迭代",
		description:
			"采用敏捷开发模式，通过短周期迭代和持续交付机制，及时响应需求变化，确保项目进度透明可控，加速产品上市时间。",
		icon: "⚡",
	},
	{
		title: "数据安全与合规保障",
		description:
			"严格遵循数据安全规范和行业合规要求，在系统设计中内置安全机制，为客户提供可靠的数据保护方案，规避信息安全风险。",
		icon: "🔒",
	},
	{
		title: "跨行业技术整合能力",
		description:
			"具备金融、医疗、零售等多行业技术服务经验，能够将前沿技术（如云计算、AI、大数据）与行业特性深度融合，打造具有竞争力的数字产品。",
		icon: "🌐",
	},
	{
		title: "成本优化与高性价比",
		description:
			"通过资源高效调配和流程优化，在保证质量的前提下为客户控制项目成本，提供高性价比的技术服务，最大化投资回报率。",
		icon: "💰",
	},
	{
		title: "7x24小时运维支持",
		description:
			"提供全天候系统监控与应急响应服务，快速定位并解决技术问题，保障业务系统稳定运行，减少意外停机带来的损失。",
		icon: "📈",
	},
]

export default function Advantage() {
	const [width, setWidth] = useState(0)
	const carousel = useRef<HTMLDivElement>(null)
	const x = useMotionValue(0)
	const controls = useAnimation()

	useEffect(() => {
		if (!carousel.current) return
		const updateWidth = () => {
			setWidth(carousel.current!.scrollWidth - carousel.current!.offsetWidth)
		}
		updateWidth()
		const observer = new window.ResizeObserver(updateWidth)
		observer.observe(carousel.current)
		window.addEventListener("resize", updateWidth)
		return () => {
			observer.disconnect()
			window.removeEventListener("resize", updateWidth)
		}
	}, [features.length])

	const handleDragEnd = () => {
		const currentX = x.get()
		if (currentX > 0) {
			controls.start({
				x: 0,
				transition: { type: "spring", stiffness: 300, damping: 30 },
			})
		} else if (currentX < -width) {
			controls.start({
				x: -width,
				transition: { type: "spring", stiffness: 300, damping: 30 },
			})
		}
	}

	return (
		<section id="service-features" className="py-20 bg-background">
			<div className="py-20 bg-gradient-to-b from-background to-secondary/20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl font-bold text-center text-foreground sm:text-4xl">
						服务特点
					</h2>
					<p className="mt-4 text-lg text-muted-foreground text-center mb-10">
						秉持以客为中心的理念提供更优质的服务。
					</p>
					<motion.div
						ref={carousel}
						className="relative cursor-grab overflow-hidden"
					>
						<motion.div
							drag="x"
							dragConstraints={carousel}
							whileTap={{ cursor: "grabbing" }}
							animate={controls}
							style={{ x }}
							onDragEnd={handleDragEnd}
							className="flex"
						>
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className="min-w-[280px] sm:min-w-[300px] w-[280px] sm:w-[300px] h-[400px] p-8 m-4 bg-background rounded-3xl shadow-lg flex flex-col justify-between hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
								>
									<div>
										<div className="text-4xl mb-4">
											{feature.icon}
										</div>
										<h3 className="text-xl font-semibold mb-2 text-foreground">
											{feature.title}
										</h3>
										<p className="text-muted-foreground">
											{feature.description}
										</p>
									</div>
									<div className="mt-4">
										<a
											href="https://work.weixin.qq.com/kfid/kfcbbb3d72fe4f7da49"
											target="_blank"
											rel="noopener noreferrer"
											className="text-primary hover:underline"
										>
											了解更多 →
										</a>
									</div>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	)
}
