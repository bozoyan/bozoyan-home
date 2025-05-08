/**
 * 缪斯个人主页配置文件
 * 修改此文件来自定义您的个人信息和项目内容
 * 无需直接编辑HTML文件
 */

export const CONFIG = {
  // 基本信息
  basic: {
    name: "缪斯", // 您的名称
    title: "AI应用开发工程师", // 职位头衔
    location: "中国，成都", // 所在地
    avatar: "./assets/images/Muse.jpg", // 头像图片路径
  },
  
  // 联系方式
  contact: {
    wechat: "./assets/images/Wechat.jpg", // 微信二维码图片路径
    publicAccount: "./assets/images/gzh.jpg", // 公众号二维码图片路径
    contactText: "欢迎添加个人社交媒体互相学习！", // 联系方式文本
    github: "https://github.com/miusing", // GitHub链接，请替换为你的GitHub主页
    blog: "https://blog.museact.ai" // 博客链接
  },
  
  // 关于我部分
  about: {
    content: "3年AI算法+AI开发经验，专注AI技术栈，同时在自媒体和Crypto领域也有丰富的实践经验。热衷于探索各种新东东，好奇心极强。熟练掌握Python编程语言，并乐于在技术社区分享知识。通过持续学习和实践，我致力于打造高质量的AI解决方案。"
  },
  
  // 核心理念
  philosophy: {
    content: "选择一个擅长或喜欢的领域，压倒性的时间投入，日拱一卒，成为一道激光，就能穿透所有圈层，一往无前！"
  },
  
  // 技术能力
  skills: [
    { name: "机器学习算法", icon: "fas fa-robot" },
    { name: "深度学习算法", icon: "fas fa-network-wired" },
    { name: "自然语言处理算法", icon: "fas fa-language" },
    { name: "大语言模型应用开发", icon: "fas fa-comment-dots" },
    { name: "AI Agent 应用开发", icon: "fas fa-cogs" }
  ],
  
  // 技术栈
  techStack: [
    { name: "Python", icon: "fab fa-python" },
    { name: "PyTorch", icon: "fas fa-brain" },
    { name: "TensorFlow", icon: "fas fa-project-diagram" },
    { name: "Dify", icon: "fas fa-microchip" },
    { name: "Fast API", icon: "fas fa-robot" },
    { name: "LangChain", icon: "fas fa-database" },
    { name: "OpenAI API", icon: "fas fa-cogs" },
    { name: "Neo4j", icon: "fas fa-sitemap" }
  ],
  
  // 项目经验
  projects: [
    {
      title: "基于 Dify 框架的医疗 RAG 问答系统",
      description: "构建医疗领域知识库问答系统，整合专业医学文献和病例资料，支持医生进行精准诊断参考和治疗方案查询，提高临床决策效率。",
      icon: "fas fa-database"
    },
    {
      title: "基于 Dify 框架的环保行业火电 RAG 问答系统",
      description: "为环保行业开发专业知识库，整合火电产业相关政策法规和技术标准，帮助从业人员快速解答监管合规问题，辅助环保决策。",
      icon: "fas fa-leaf"
    },
    {
      title: "基于 Langchain + OpenAI API 构建的RAG QA问答对生成系统",
      description: "开发智能问答对生成系统，通过检索增强技术自动创建高质量训练数据，大幅提升模型在特定领域的问答精度，降低数据标注成本。",
      icon: "fas fa-chain"
    },
    {
      title: "基于 Vanna 框架构建的环保 Text2SQL 项目",
      description: "创建自然语言转SQL查询系统，使环保领域非技术人员能通过日常用语查询复杂数据库，简化数据获取流程，提升工作效率。",
      icon: "fas fa-database"
    },
    {
      title: "基于模版引擎 + OpenAI API 构建的环保行业环评报告生成系统",
      description: "开发自动化环评报告生成工具，结合行业模板和AI技术，将原始环境数据转化为专业规范的评估报告，大幅缩短报告编制时间。",
      icon: "fas fa-file-word"
    },
    {
      title: "基于 Dify 框架的 Excel 表格数据图表可视化分析项目",
      description: "构建智能数据分析平台，自动处理Excel表格数据并生成直观的可视化图表，帮助非专业人员快速理解数据趋势和洞察。",
      icon: "fas fa-chart-bar"
    },
    {
      title: "基于 Neo4j + OpenAI API + 模版引擎构建的环保环评报告生成系统",
      description: "开发基于知识图谱的环评报告生成系统，整合环保政策与标准数据库，实现自动化报告生成，同时确保内容的准确性和合规性。",
      icon: "fas fa-project-diagram"
    },
    {
      title: "医学RAG检索增强生成系统",
      description: "为医学研究企业开发高效知识检索库，通过PDF解析、文本分块、向量库存储等技术，实现精准检索医学文献，辅助专利发布流程。",
      icon: "fas fa-search"
    },
    {
      title: "门诊病历自动生成系统",
      description: "将医患对话录音转换为结构化电子病历，帮助医生节省手写病历时间，提高医疗服务效率，降低人为错误。",
      icon: "fas fa-notes-medical"
    },
    {
      title: "天明大模型预训练与微调",
      description: "从数据准备、基础模型训练到有监督微调(SFT)和人类反馈强化学习(RLHF)，独立完成GLM框架下的公司大模型训练。",
      icon: "fas fa-brain"
    },
    {
      title: "医疗辅助智能系统",
      description: "与丁香公司合作开发线上就诊平台，结合知识图谱、命名实体识别和向量相似度检索技术，为患者提供便捷的线上医疗服务。",
      icon: "fas fa-hospital"
    },
    {
      title: "医疗知识图谱问答助手",
      description: "开发百科问答机器人，通过知识图谱技术预先解答患者疑问，减轻医院工作负担，同时丰富医院HIS库，提升服务质量。",
      icon: "fas fa-question-circle"
    },
    {
      title: "胃部健康评估系统",
      description: "开发基于机器学习的胃癌检测与预后预测系统，通过特征工程筛选关键特征，采用GBDT、随机森林等集成模型实现早期诊断。",
      icon: "fas fa-heartbeat"
    }
  ],
  
  // 个人产品
  products: {
    comingSoon: true, // 如果设置为true，则显示"静待..."；如果设为false，则显示产品列表
    productsList: []
  },
  
  // 版权信息
  copyright: {
    year: "2021 - 2025",
    name: "缪斯",
    url: "https://museact.ai",
    // beian: {
    //   icp: "晋ICP备2022003280号-3",
    //   gongan: "晋公网安备14092802000114号"
    // }
  },
  
  // 主题颜色（可选，修改这些颜色来自定义主题）
  theme: {
    // 亮色主题
    primary: "#3b82f6",
    primaryLight: "#60a5fa",
    primaryDark: "#2563eb",
    background: "#f9fafb",
    cardBackground: "#ffffff",
    text: "#1f2937",
    textLight: "#6b7280",
    accentGreen: "#10b981",
    accentPurple: "#8b5cf6",
    accentOrange: "#f59e0b"
  }
};

// 请勿修改以下代码
if (typeof module !== 'undefined') {
  module.exports = CONFIG;
} 