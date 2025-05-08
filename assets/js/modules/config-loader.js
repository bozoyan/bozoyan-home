/**
 * 配置加载器模块
 * 负责加载和应用网站配置
 */

// 应用配置文件中的设置
function applyConfig() {
    try {
        if (typeof CONFIG === 'undefined') {
            console.error('配置文件未加载或格式不正确');
            return;
        }
        
        // 应用基本信息
        applyBasicInfo();
        
        // 应用联系方式
        applyContactInfo();
        
        // 应用关于我内容
        applyAboutInfo();
        
        // 应用核心理念
        applyPhilosophyInfo();
        
        // 应用技术能力
        applySkills();
        
        // 应用技术栈
        applyTechStack();
        
        // 应用项目经验
        applyProjects();
        
        // 应用版权信息
        applyCopyrightInfo();
        
        // 应用个人产品部分
        applyProductsInfo();
        
        // 应用主题颜色
        applyTheme();
        
        console.log('配置已成功应用');
    } catch (error) {
        console.error('应用配置时出错:', error);
    }
}

// 应用基本信息
function applyBasicInfo() {
    if (!CONFIG.basic) return;
    
    document.title = CONFIG.basic.name || '缪斯';
    
    const nameElement = document.querySelector('.profile h1');
    if (nameElement) nameElement.textContent = CONFIG.basic.name || '缪斯';
    
    const titleElement = document.querySelector('.profile .title span, .profile .title');
    if (titleElement) {
        const titleText = document.createTextNode(CONFIG.basic.title || 'AI应用开发工程师');
        if (titleElement.querySelector('i')) {
            titleElement.innerHTML = '';
            const icon = document.createElement('i');
            icon.className = 'fas fa-code';
            titleElement.appendChild(icon);
            titleElement.appendChild(document.createTextNode(' '));
            titleElement.appendChild(titleText);
        } else {
            titleElement.textContent = CONFIG.basic.title || 'AI应用开发工程师';
        }
    }
    
    const locationElement = document.querySelector('.location span');
    if (locationElement) locationElement.textContent = CONFIG.basic.location || '中国，成都';
    
    const avatarElement = document.querySelector('.avatar img');
    if (avatarElement) avatarElement.src = CONFIG.basic.avatar || './assets/images/Muse.jpg';
}

// 应用联系方式
function applyContactInfo() {
    if (!CONFIG.contact) return;
    
    const contactTextElement = document.querySelector('.contact-text p');
    if (contactTextElement) contactTextElement.textContent = CONFIG.contact.contactText || '欢迎添加个人联系方式互相学习！';
    
    // 更新微信和公众号图片
    const wechatImg = document.querySelector('#wechat-qr img');
    if (wechatImg) wechatImg.src = CONFIG.contact.wechat || './assets/images/Wechat.jpg';
    
    const publicAccountImg = document.querySelector('#gzh-qr img');
    if (publicAccountImg) publicAccountImg.src = CONFIG.contact.publicAccount || './assets/images/公众号.jpg';
    
    // 更新社交媒体链接
    const blogLink = document.querySelector('.social-link.blog');
    if (blogLink && CONFIG.contact.blog) {
        blogLink.href = CONFIG.contact.blog;
    }
    
    const githubLink = document.querySelector('.social-link.github');
    if (githubLink && CONFIG.contact.github) {
        githubLink.href = CONFIG.contact.github;
    }
}

// 应用关于我内容
function applyAboutInfo() {
    if (!CONFIG.about) return;
    
    const aboutElement = document.querySelector('.about-widget .widget-content p');
    if (aboutElement) aboutElement.textContent = CONFIG.about.content || '';
}

// 应用核心理念
function applyPhilosophyInfo() {
    if (!CONFIG.philosophy) return;
    
    const philosophyElement = document.querySelector('.philosophy-widget .belief-content p');
    if (philosophyElement) philosophyElement.textContent = CONFIG.philosophy.content || '';
}

// 应用技术能力
function applySkills() {
    if (!CONFIG.skills || !Array.isArray(CONFIG.skills)) return;
    
    const skillsContainer = document.querySelector('.skills-list');
    if (!skillsContainer) return;
    
    skillsContainer.innerHTML = '';
    CONFIG.skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        
        const icon = document.createElement('i');
        icon.className = skill.icon || 'fas fa-check';
        
        const span = document.createElement('span');
        span.textContent = skill.name || '';
        
        skillItem.appendChild(icon);
        skillItem.appendChild(span);
        skillsContainer.appendChild(skillItem);
    });
}

// 应用技术栈
function applyTechStack() {
    if (!CONFIG.techStack || !Array.isArray(CONFIG.techStack)) return;
    
    const techStackContainer = document.querySelector('.tech-stack');
    if (!techStackContainer) return;
    
    techStackContainer.innerHTML = '';
    CONFIG.techStack.forEach(tech => {
        const techItem = document.createElement('div');
        techItem.className = 'tech-item';
        
        const icon = document.createElement('i');
        icon.className = tech.icon || 'fas fa-code';
        
        const span = document.createElement('span');
        span.textContent = tech.name || '';
        
        techItem.appendChild(icon);
        techItem.appendChild(span);
        techStackContainer.appendChild(techItem);
    });
}

// 应用项目经验
function applyProjects() {
    // 获取项目列表容器
    const projectsContainer = document.querySelector('.projects-list');
    if (!projectsContainer) return;
    
    // 获取所有项目
    const allProjects = projectsContainer.querySelectorAll('.project-item');
    
    // 初始显示的项目数量
    const initialProjectsCount = 3;
    
    // 隐藏超出初始数量的项目
    allProjects.forEach((project, index) => {
        if (index >= initialProjectsCount) {
            project.classList.add('hidden-project');
            project.style.display = 'none';
            project.style.opacity = '0';
            project.style.transform = 'translateY(10px)';
        }
    });
    
    // 设置展开/收起按钮
    const toggleBtn = document.querySelector('.toggle-projects-btn');
    if (toggleBtn) {
        // 显示切换按钮
        toggleBtn.parentElement.style.display = 'block';
        
        // 添加点击事件
        toggleBtn.addEventListener('click', function() {
            const projectsWidget = document.querySelector('.projects-widget');
            const isExpanded = projectsWidget.classList.toggle('projects-expanded');
            
            // 控制项目的显示和隐藏
            allProjects.forEach((item, index) => {
                if (index >= initialProjectsCount) {
                    if (isExpanded) {
                        item.style.display = 'flex';
                        // 添加淡入动画
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'translateY(0)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'translateY(10px)';
                        // 等待动画完成后隐藏
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    }
    
    console.log('项目经验展开折叠功能已初始化');
}

// 应用版权信息
function applyCopyrightInfo() {
    if (!CONFIG.copyright) return;
    
    const copyrightYearElement = document.querySelector('.copyright .year');
    if (copyrightYearElement) copyrightYearElement.textContent = CONFIG.copyright.year || '2021 - 2025';
    
    const copyrightNameElement = document.querySelector('.copyright .name');
    if (copyrightNameElement) {
        copyrightNameElement.textContent = CONFIG.copyright.name || '缪斯';
        if (CONFIG.copyright.url) {
            const parent = copyrightNameElement.parentElement;
            if (parent && parent.tagName === 'A') {
                parent.href = CONFIG.copyright.url;
            }
        }
    }
    
    // 备案信息
    if (CONFIG.copyright.beian) {
        const icpElement = document.querySelector('.beian .icp');
        if (icpElement) icpElement.textContent = CONFIG.copyright.beian.icp || '';
        
        const gonganElement = document.querySelector('.beian .gongan');
        if (gonganElement) gonganElement.textContent = CONFIG.copyright.beian.gongan || '';
    }
}

// 应用个人产品部分
function applyProductsInfo() {
    if (!CONFIG.products) return;
    
    const productsContainer = document.querySelector('.products-widget .widget-content');
    if (!productsContainer) return;
    
    // 如果设置为即将推出，则显示"静待..."
    if (CONFIG.products.comingSoon) {
        createComingSoonElement(productsContainer);
    } else if (CONFIG.products.productsList && CONFIG.products.productsList.length > 0) {
        // 如果有产品列表，则显示产品列表
        createProductsListElement(productsContainer);
    }
}

// 创建"静待..."元素
function createComingSoonElement(container) {
    const comingSoonDiv = document.createElement('div');
    comingSoonDiv.className = 'coming-soon';
    
    const iconDiv = document.createElement('div');
    iconDiv.className = 'coming-soon-icon';
    
    const icon = document.createElement('i');
    icon.className = 'fas fa-hourglass-half';
    iconDiv.appendChild(icon);
    
    const textDiv = document.createElement('div');
    textDiv.className = 'coming-soon-text';
    
    const text = document.createElement('p');
    text.textContent = '静待...';
    textDiv.appendChild(text);
    
    comingSoonDiv.appendChild(iconDiv);
    comingSoonDiv.appendChild(textDiv);
    
    // 清空内容并添加新元素
    container.innerHTML = '';
    container.appendChild(comingSoonDiv);
}

// 创建产品列表元素
function createProductsListElement(container) {
    const productsList = document.createElement('div');
    productsList.className = 'products-list';
    
    CONFIG.products.productsList.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        
        const productIcon = document.createElement('div');
        productIcon.className = 'product-icon';
        
        const icon = document.createElement('i');
        icon.className = product.icon || 'fas fa-gift';
        productIcon.appendChild(icon);
        
        const productInfo = document.createElement('div');
        productInfo.className = 'product-info';
        
        const title = document.createElement('h3');
        title.textContent = product.title || '';
        
        const description = document.createElement('p');
        description.textContent = product.description || '';
        
        productInfo.appendChild(title);
        productInfo.appendChild(description);
        
        const productLink = document.createElement('a');
        productLink.href = product.url || '#';
        productLink.className = 'product-link';
        productLink.innerHTML = '<i class="fas fa-external-link-alt"></i>';
        
        productItem.appendChild(productIcon);
        productItem.appendChild(productInfo);
        productItem.appendChild(productLink);
        
        productsList.appendChild(productItem);
    });
    
    // 清空内容并添加新元素
    container.innerHTML = '';
    container.appendChild(productsList);
}

// 应用主题颜色
function applyTheme() {
    if (!CONFIG.theme) return;
    
    const root = document.documentElement;
    for (const [key, value] of Object.entries(CONFIG.theme)) {
        // 将驼峰式命名转换为CSS变量命名格式
        const cssVarName = '--' + key.replace(/([A-Z])/g, '-$1').toLowerCase();
        root.style.setProperty(cssVarName, value);
    }
}

// 导出模块功能
export {
    applyConfig
}; 