# 个人主页模板
Fork来自https://github.com/miusing/muse-home

![License](https://img.shields.io/badge/license-MIT-blue)
![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow)

一个现代化、响应式的个人主页模板，具有精美的设计和流畅的动画效果。非常适合开发者、设计师和创意工作者展示个人作品和技能。

## ✨ 特点

- 🎨 精美的渐变色背景和动画效果
- 📱 完全响应式设计，适配所有设备
- 🧩 模块化布局，易于自定义和扩展
- 🌓 支持亮色/暗色主题切换
- 🧠 干净的代码结构，模块化JavaScript
- ⚙️ 配置文件驱动，无需修改HTML代码
- 📂 项目经验部分支持折叠显示
- 🔗 支持社交媒体链接和二维码展示
- 🖨️ 打印友好样式
- ♿ 可访问性优化

## 📷 预览

![预览图](./assets/images/preview.png)

## ☁️ 一键部署

点击下面的按钮，可以直接将此项目部署到Vercel平台：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbozoyan%2Fbozoyan-home)

## 🚀 快速开始

### 本地运行

1. 克隆仓库
   ```
   git clone https://github.com/bozoyan/bozoyan-home.git
   ```

2. 打开项目目录
   ```
   cd bozoyan-home
   ```

3. 选择以下任一方式运行：
   
   - 直接在浏览器中打开 `index.html`
   
   - 使用Python简易服务器
     ```
     python -m http.server 8000
     ```
     然后访问 `http://localhost:8000`
   
   - 使用Node.js服务器（需要安装Node.js）
     ```
     npx serve
     ```
     或运行
     ```
     node server.js
     ```

## 📂 项目结构

```
.
├── assets/
│   ├── images/          # 存放所有图片资源
│   │   ├── Bozoyan.png
│   │   ├── Wechat.jpg
│   │   └── 公众号.jpg
│   ├── css/             # 样式文件
│   │   ├── reset.css    # CSS重置
│   │   ├── styles.css   # 主样式表
│   │   ├── theme.css    # 主题样式
│   │   └── responsive.css # 响应式样式
│   └── js/              # JavaScript文件
│       ├── main.js      # 主JavaScript文件
│       ├── config.js    # 配置文件
│       └── modules/     # 模块化JavaScript
│           ├── animations.js  # 动画效果模块
│           ├── config-loader.js # 配置加载器
│           └── utils.js       # 工具函数
├── public/              # 公共资源
│   └── 404.html         # 404页面
├── index.html           # 主页面
├── README.md            # 项目说明
├── CONTRIBUTING.md      # 贡献指南
├── LICENSE              # 许可证文件
├── .gitignore           # Git忽略文件
└── server.js            # 简易Node.js服务器
```

## 🔧 自定义配置

要自定义个人信息、项目经验和其他内容，只需编辑 `assets/js/config.js` 文件：

```javascript
export const CONFIG = {
  // 基本信息
  basic: {
    name: "BOZOYAN", // 您的名称
    title: "AI应用开发工程师", // 职位头衔
    location: "中国，绍兴", // 所在地
    avatar: "./assets/images/Bozoyan.png", // 头像图片路径
  },
  
  // 联系方式
  contact: {
    wechat: "./assets/images/Wechat.jpg", // 微信二维码
    publicAccount: "./assets/images/公众号.jpg", // 公众号二维码
    contactText: "欢迎添加个人社交媒体互相学习！", // 联系文本
    github: "https://github.com/bozoyan", // GitHub链接
    blog: "https://slas.cc" // 博客链接
  },
  
  // 其他配置项...
}
```

## 🎨 主题配置

本模板支持亮色/暗色主题切换。您可以在 `assets/js/config.js` 文件中自定义主题颜色：

```javascript
// 主题颜色
theme: {
  // 亮色主题
  light: {
    primary: "#3b82f6",
    background: "#f9fafb",
    // 其他颜色...
  },
  // 暗色主题
  dark: {
    primary: "#3b82f6",
    background: "#111827",
    // 其他颜色...
  }
}
```

## 📱 响应式设计

本模板完全支持响应式设计，可自动适应桌面、平板和移动设备的不同屏幕尺寸。

## 🌐 浏览器兼容性

支持所有现代浏览器，包括：
- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## 📄 许可证

本项目使用 [MIT 许可证](LICENSE)。

## 🤝 贡献

欢迎贡献代码、报告问题或提出改进建议！请查看[贡献指南](CONTRIBUTING.md)了解更多信息。

## 📱 联系我

如果您有任何问题或建议，欢迎通过以下方式联系我：

<div align="center">
  <table>
    <tr>
      <td align="center">
        <img src="assets/images/Wechat.jpg" alt="个人微信码" width="200"/>
        <p>个人微信</p>
      </td>
      <td align="center">
        <img src="assets/images/个人赞赏码.png" alt="个人赞赏码" width="200"/>
        <p>赞赏码</p>
      </td>
    </tr>
  </table>
</div>

> 扫码添加微信，备注"GitHub"，我会及时回复您的问题。
> 
> 如果这个项目对您有帮助，可以请我喝杯咖啡表示支持 ☕ 