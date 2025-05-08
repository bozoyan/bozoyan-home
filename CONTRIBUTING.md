# 贡献指南

感谢您对BOZOYAN 个人主页模板的关注！我们欢迎任何形式的贡献，无论是功能改进、错误修复、文档完善还是创意想法。

## 如何贡献

1. **Fork 仓库**：首先，点击 GitHub 页面右上角的 Fork 按钮，创建一个属于您的仓库副本。

2. **克隆到本地**：
   ```
<<<<<<< HEAD
   git clone https://github.com/bozoyan/bozoyan-home.git
=======
   git clone https://github.com/your-username/muse-home.git
>>>>>>> 23674cbcbeef8bcba6b86da598fbfb4c74f4c873
   cd muse-home
   ```

3. **创建分支**：
   ```
   git checkout -b bozoyan/your-feature-name
   ```

4. **进行修改**：实现您的功能或修复问题。

5. **提交更改**：
   ```
   git add .
   git commit -m "Add: brief description of your changes"
   ```

6. **推送到 GitHub**：
   ```
   git push origin bozoyan/your-feature-name
   ```

7. **创建 Pull Request**：回到原始仓库，点击 "New Pull Request" 按钮，选择您的分支，并提交 PR。

## 代码规范

为了保持代码的一致性和可读性，请遵循以下规范：

- **HTML**：使用两个空格缩进，确保语义化标签的正确使用。
- **CSS**：采用 BEM 命名约定或者类似的模块化方法。
- **JavaScript**：遵循 ESLint 配置，使用 ES6+ 语法。
- **注释**：为核心功能和复杂逻辑添加注释。

## 功能开发指南

### 添加新的小组件

1. 在 `index.html` 中使用现有的组件结构作为模板。
2. 在 `styles.css` 中添加相应的样式。
3. 在 `config.js` 中添加配置选项。
4. 在 `script.js` 中实现动态数据绑定逻辑。

### 修改主题

1. 在 `:root` 选择器中添加新的 CSS 变量。
2. 在 `config.js` 的 `theme` 部分添加相应配置项。
3. 确保在 `script.js` 的 `applyConfig` 函数中正确应用主题。

### 添加社交媒体链接

1. 在 `config.js` 的 `contact` 部分添加新的链接属性。
2. 在 `index.html` 的社交媒体弹窗中添加相应的链接结构。
3. 在 `script.js` 的 `applyConfig` 函数中确保正确应用链接。
4. 为新添加的平台选择适当的 Font Awesome 图标。

## 测试

在提交 PR 前，请确保：

1. **在多个浏览器中测试**：至少包括 Chrome、Firefox 和 Safari。
2. **响应式布局**：测试不同的屏幕尺寸，确保良好的显示效果。
3. **功能验证**：确保所有功能正常运行，特别是您更改的部分。

## Issue 报告

如果您发现错误或有改进建议，请创建一个 Issue，并尽可能详细地描述：

- 错误的复现步骤或功能建议的详细描述
- 预期行为和实际行为
- 屏幕截图（如适用）
- 环境信息（操作系统、浏览器等）

## 联系方式

如有任何问题，可以通过以下方式联系我们：

- 提交 Issue
<<<<<<< HEAD
- 发送邮件至 [201782@qq.com](mailto:201782@qq.com)
=======
- 发送邮件至 [3059233286@qq.com](mailto:3059233286@qq.com)
>>>>>>> 23674cbcbeef8bcba6b86da598fbfb4c74f4c873

非常感谢您的贡献！ 