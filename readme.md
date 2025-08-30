# 影象限官网

本项目为深圳市影象限软件有限公司官方网站，基于 Next.js 构建，包含公司简介、服务内容、发展历程、联系方式等模块，支持响应式设计。

## 主要页面与功能

- **首页**：公司品牌展示与欢迎语
- **简介**：公司介绍与使命
- **服务特点**：公司核心服务特色
- **服务内容**：详细服务内容展示
- **发展历程**：公司成长与重要节点时间线
- **作品案例**：产品展示
- **联系我们**：微信、邮箱、电话等联系方式，支持一键发邮件和拨号

## 技术栈

- [Next.js](https://nextjs.org/) 15+
- React 18+
- TypeScript
- Tailwind CSS

## 本地开发

1. 安装依赖

   ```bash
   npm install
   ```

2. 启动开发服务器

   ```bash
   npm run dev
   ```

3. 访问 [http://localhost:3000](http://localhost:3000)

## 目录结构

```
├── app/
│   ├── components/         # 组件目录
│   ├── page.tsx            # 主页入口
│   └── layout.tsx          # 全局布局
├── public/                 # 静态资源（如 logo、favicon）
├── .gitignore
├── package.json
├── readme.md
└── ...
```