# Alpine.js 完全重构规范

## Why
用户选择方案A进行完全重构，移除 React 和 framer-motion 依赖，使用 Alpine.js + Tailwind CSS 实现更轻量化的网站。动画效果可以通过 Tailwind CSS 或 Animate.css 实现，或者直接移除。

## What Changes
- **BREAKING**: 移除 React、Next.js 框架
- **BREAKING**: 移除 framer-motion 动画库
- **BREAKING**: 移除所有 @radix-ui 组件
- 使用 Alpine.js 替代 React 进行状态管理
- 使用 Tailwind CSS 动画替代 framer-motion
- 将 Animate.css 动效封装为 Tailwind 自定义工具类
- 静态 HTML 生成，提升加载速度

## Impact
- Affected specs: 整体架构、前端技术栈
- Affected code: 所有业务组件 (13个)、UI组件库 (52个)

## 技术栈变更

| 原技术 | 新技术 | 说明 |
|--------|--------|------|
| Next.js 15 | 静态 HTML | 无需服务端渲染 |
| React 19 | Alpine.js | 轻量级响应式框架 (~15KB) |
| framer-motion | Tailwind CSS / Animate.css | CSS 动画替代 |
| @radix-ui/* | 原生 HTML | 移除所有 UI 组件库 |
| shadcn/ui | 自定义 CSS | 使用 Tailwind 实现 |

## ADDED Requirements

### Requirement: 技术栈迁移
系统 SHALL 从 React/Next.js 迁移到 Alpine.js + 静态 HTML。

#### Scenario: 框架迁移
- **WHEN** 执行重构
- **THEN** 使用 Alpine.js CDN 或本地引入
- **AND** 生成静态 HTML 文件

#### Scenario: 状态管理迁移
- **WHEN** 组件需要状态管理
- **THEN** 使用 Alpine.js `x-data` 定义状态
- **AND** 使用 `x-show`、`x-bind`、`x-on` 等指令

### Requirement: 动画迁移
系统 SHALL 使用 Tailwind CSS 或 Animate.css 实现动画效果。

#### Scenario: 入场动画
- **WHEN** 页面加载或元素进入视口
- **THEN** 使用 Tailwind `animate-*` 类触发动画

#### Scenario: 交互动画
- **WHEN** 用户悬停或点击元素
- **THEN** 使用 CSS `:hover` 和 `:active` 伪类
- **AND** 使用 Tailwind `transition-*` 类

#### Scenario: 滚动动画
- **WHEN** 元素进入视口
- **THEN** 使用 Intersection Observer API 触发动画类

### Requirement: 主题切换
系统 SHALL 实现深色/浅色主题切换。

#### Scenario: 主题持久化
- **WHEN** 用户切换主题
- **THEN** 保存到 localStorage
- **AND** 页面刷新后保持主题

#### Scenario: 系统主题检测
- **WHEN** 页面加载
- **THEN** 检测系统主题偏好
- **AND** 自动应用对应主题

## 动画替代方案

### Tailwind CSS 自定义动画配置

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        // 入场动画
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-down": {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-down": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        // 滚动文字
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        // 缩放
        "zoom-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "fade-in-down": "fade-in-down 0.6s ease-out",
        "fade-in-left": "fade-in-left 0.6s ease-out",
        "fade-in-right": "fade-in-right 0.6s ease-out",
        "slide-down": "slide-down 0.6s ease-out",
        "marquee": "marquee 20s linear infinite",
        "zoom-in": "zoom-in 0.3s ease-out",
      },
    },
  },
}
```

### Animate.css 风格工具类

```css
/* 动画延迟 */
.animation-delay-100 { animation-delay: 100ms; }
.animation-delay-200 { animation-delay: 200ms; }
.animation-delay-300 { animation-delay: 300ms; }
.animation-delay-400 { animation-delay: 400ms; }
.animation-delay-500 { animation-delay: 500ms; }

/* 动画持续时间 */
.duration-300 { animation-duration: 300ms; }
.duration-500 { animation-duration: 500ms; }
.duration-700 { animation-duration: 700ms; }
.duration-1000 { animation-duration: 1000ms; }

/* 动画填充模式 */
.animate-fill-forwards { animation-fill-mode: forwards; }
.animate-fill-both { animation-fill-mode: both; }
```

### 滚动触发动画 (Intersection Observer)

```javascript
// 滚动动画触发器
document.addEventListener('alpine:init', () => {
  Alpine.directive('animate-on-scroll', (el, { value }) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add(value || 'animate-fade-in-up')
          observer.unobserve(el)
        }
      })
    }, { threshold: 0.1 })
    observer.observe(el)
  })
})
```

## 组件迁移映射

| 原组件 | 新实现 | 动画方案 |
|--------|--------|----------|
| Header.tsx | header.html | `animate-slide-down` |
| Hero.tsx | hero.html | `animate-fade-in-up` + 延迟类 |
| Product.tsx | product.html | `animate-fade-in-up` + 筛选状态 |
| Advantage.tsx | advantage.html | 移除拖拽，改为按钮切换 |
| Timeline.tsx | timeline.html | 移除滚动动画，改为点击展开 |
| Contact.tsx | contact.html | `animate-fade-in-up` |
| Marquee.tsx | marquee.html | `animate-marquee` |
| FloatingActionButton.tsx | fab.html | CSS transition + Alpine.js |
| AboutUs.tsx | about.html | `animate-fade-in-left/right` |
| Testimonials.tsx | testimonials.html | `animate-fade-in-up` |
| IntroductionStory.tsx | story.html | `animate-fade-in-up` |
| ProductShowcase.tsx | showcase.html | CSS transition 切换 |
| Footer.tsx | footer.html | 无动画 |

## 包体积预估

| 项目 | 原大小 | 新大小 | 减少 |
|------|--------|--------|------|
| React + ReactDOM | ~140KB | 0 | -140KB |
| Next.js runtime | ~80KB | 0 | -80KB |
| framer-motion | ~45KB | 0 | -45KB |
| @radix-ui/* | ~100KB | 0 | -100KB |
| Alpine.js | 0 | ~15KB | +15KB |
| **总计** | ~365KB | ~15KB | **~95%** |

## 文件结构

```
shadowq-website/
├── index.html              # 首页
├── about.html              # 关于页面
├── css/
│   └── styles.css          # Tailwind 编译后的 CSS
├── js/
│   ├── alpine.min.js       # Alpine.js
│   └── app.js              # 自定义 JS (主题、滚动动画)
├── assets/
│   └── images/             # 图片资源
└── tailwind.config.js      # Tailwind 配置
```
