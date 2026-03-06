# Tasks

## Phase 1: 项目初始化
- [x] Task 1.1: 创建新的项目结构
  - [x] 创建 index.html 基础文件
  - [x] 创建 about.html 页面
  - [x] 设置 Tailwind CSS 构建流程
  - [x] 引入 Alpine.js CDN

- [x] Task 1.2: 配置 Tailwind CSS 动画
  - [x] 添加自定义 keyframes (fade-in-up, fade-in-down, slide-down, marquee 等)
  - [x] 添加自定义 animation 类
  - [x] 添加动画延迟工具类
  - [x] 添加动画持续时间工具类

## Phase 2: 基础组件迁移
- [x] Task 2.1: 迁移 Header 组件
  - [x] 转换为静态 HTML + Alpine.js
  - [x] 实现主题切换功能 (x-data)
  - [x] 实现移动端菜单切换
  - [x] 添加 slide-down 入场动画

- [x] Task 2.2: 迁移 Footer 组件
  - [x] 转换为静态 HTML
  - [x] 无需动画

- [x] Task 2.3: 迁移 Hero 组件
  - [x] 转换为静态 HTML
  - [x] 添加多元素依次入场动画 (animation-delay)
  - [x] 实现按钮悬停效果

## Phase 3: 内容组件迁移
- [x] Task 3.1: 迁移 AboutUs 组件
  - [x] 转换为静态 HTML
  - [x] 添加 fade-in-left/right 动画

- [x] Task 3.2: 迁移 Product 组件
  - [x] 转换为静态 HTML + Alpine.js
  - [x] 实现分类筛选功能 (x-data, x-show)
  - [x] 添加入场动画
  - [x] 实现悬停效果

- [x] Task 3.3: 迁移 Advantage 组件
  - [x] 转换为静态 HTML + Alpine.js
  - [x] 移除拖拽功能，改为按钮切换轮播
  - [x] 添加过渡动画

- [x] Task 3.4: 迁移 Timeline 组件
  - [x] 转换为静态 HTML + Alpine.js
  - [x] 移除滚动驱动动画
  - [x] 实现点击展开/收起功能
  - [x] 添加入场动画

- [x] Task 3.5: 迁移 Testimonials 组件
  - [x] 转换为静态 HTML
  - [x] 添加依次入场动画

- [x] Task 3.6: 迁移 Contact 组件
  - [x] 转换为静态 HTML
  - [x] 添加 fade-in-up 动画

- [x] Task 3.7: 迁移 Marquee 组件
  - [x] 转换为静态 HTML
  - [x] 实现 CSS marquee 动画

- [x] Task 3.8: 迁移 IntroductionStory 组件
  - [x] 转换为静态 HTML
  - [x] 添加入场动画

- [x] Task 3.9: 迁移 ProductShowcase 组件
  - [x] 已合并到 Product 组件

- [x] Task 3.10: 迁移 FloatingActionButton 组件
  - [x] 转换为静态 HTML + Alpine.js
  - [x] 实现滚动显示/隐藏
  - [x] 实现点击返回顶部
  - [x] 添加悬停/点击效果

## Phase 4: 功能完善
- [x] Task 4.1: 实现主题切换系统
  - [x] 创建主题切换 Alpine.js 组件
  - [x] 实现 localStorage 持久化
  - [x] 实现系统主题检测

- [x] Task 4.2: 实现滚动动画触发器
  - [x] 使用 CSS 动画类实现入场动画

- [x] Task 4.3: 迁移静态资源
  - [x] 保留 public 目录下的图片资源

## Phase 5: 清理与优化
- [x] Task 5.1: 清理旧代码
  - [x] 删除 app/ 目录
  - [x] 删除 components/ 目录
  - [x] 删除 hooks/ 目录
  - [x] 删除 lib/ 目录
  - [x] 删除 Next.js 配置文件

- [x] Task 5.2: 更新依赖
  - [x] 删除 package.json 中的 React 相关依赖
  - [x] 删除 Next.js 相关依赖
  - [x] 删除 framer-motion
  - [x] 删除所有 @radix-ui 组件
  - [x] 保留 Tailwind CSS

- [x] Task 5.3: 性能优化
  - [x] 压缩 CSS (Tailwind --minify)
  - [x] 使用 Alpine.js CDN

# Task Dependencies
- Task 1.2 依赖 Task 1.1
- Phase 2 所有任务依赖 Phase 1 完成
- Phase 3 所有任务依赖 Phase 2 完成
- Task 4.1, 4.2 可与 Phase 3 并行
- Phase 5 依赖所有前置任务完成
